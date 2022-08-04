import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  CSSProperties,
  ReactElement,
} from "react";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import PullDown from "@better-scroll/pull-down";
import ObserveImage from "@better-scroll/observe-image";

import type BScrollInstance from "@better-scroll/core";

BScroll.use(Pullup);
BScroll.use(PullDown);
BScroll.use(ObserveImage);

import "./index.scss";

interface MobileMagicScrollReactEntity {
  pullDownText?: string;
  pullDownSuccessText?: string;
  pullUpText?: string;
  loadingText?: string;
  finishedText?: string;
  height?: string;
  heightUnit?: string;
  isObserveImage?: boolean; // 图片宽高没有设置，帮你计算
  isPerformance?: boolean; // 长列表性能优化
  finished: boolean;
  onLoad: (type: string) => void;
  children: ReactElement;
}
const TEXT_INITIAL = [
  "下拉刷新",
  "加载中...",
  "刷新成功",
  "上拉加载更多",
  "没有更多数据了",
];
const HEIGHT = 100;
const UNIT = "vh";
const MobileMagicScrollReact = (props: MobileMagicScrollReactEntity) => {
  const {
    pullDownText = TEXT_INITIAL[0],
    pullDownSuccessText = TEXT_INITIAL[2],
    pullUpText = TEXT_INITIAL[3],
    loadingText = TEXT_INITIAL[1],
    finishedText = TEXT_INITIAL[4],
    height = HEIGHT,
    heightUnit = UNIT,
    finished,
    onLoad,
    children,
  } = props;

  const domRefScroll = useRef<any>(null);
  const [isPullUpLoad, setIsPullUpLoad] = useState<boolean>(false);
  const [bscroll, setBscroll] = useState<BScrollInstance>();
  const [beforePullDown, setBeforePullDown] = useState<boolean>(true);
  const [isPullingDown, setIsPullingDown] = useState<boolean>(false);

  const style: CSSProperties = useMemo(() => {
    return {
      height: height + heightUnit,
    };
  }, [height]);

  const pullingDownHandler = async (): Promise<void> => {
    setBeforePullDown(false);
    setIsPullingDown(true);
    await onLoad("DOWN");
    setIsPullingDown(false);
    finishPullDown();
  };

  const pullingUpHandler = async (): Promise<void> => {
    setIsPullUpLoad(true);
    await onLoad("UP");

    bscroll?.finishPullUp();
    bscroll?.refresh();

    setIsPullUpLoad(false);
  };

  const finishPullDown = (): void => {
    bscroll?.finishPullDown();
    setTimeout(() => {
      setBeforePullDown(true);
      bscroll?.refresh();
    }, 1000);
  };
  const is_IOS_13_4 = (): boolean => {
    let verNum: number = 0;
    let reg = /OS (\d+[\_\d]+)/g;
    let isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isIos) {
      let iosVer = navigator.appVersion;
      //@ts-ignore
      let ver = reg.exec(iosVer)[1];
      let verArr = ver.split("_");
      for (let i = 0; i < verArr.length; i++) {
        if (i !== 0) {
          verNum += (parseInt(verArr[i]) * 1) / Math.pow(10, i);
        } else {
          verNum += parseInt(verArr[i]);
        }
      }
      verNum = Math.round(verNum * 100) / 100;
      console.log(verNum);
    }
    return isIos && verNum >= 13.4;
  };

  const initBscroll = (): void => {
    const bs = new BScroll(domRefScroll.current, {
      pullUpLoad: true,
      scrollY: true,
      useTransition: is_IOS_13_4() ? false : true,
      observeDOM: true,
      observeImage: true,
      mouseWheel: true,
      pullDownRefresh: {
        threshold: 70,
        stop: 56,
      },
    });
    setBscroll(bs);
  };

  useEffect(() => {
    bscroll?.on("pullingDown", pullingDownHandler);
    bscroll?.on("pullingUp", pullingUpHandler);
  }, [bscroll]);

  useEffect(() => {
    initBscroll();
  }, []);

  return (
    <div className="mobile-magic-scroll-react" style={style}>
      <div ref={domRefScroll} className="mobile-magic-scroll-react-wrapper">
        <div className="mobile-magic-scroll-react-content">
          <div className="pulldown-wrapper">
            {beforePullDown ? (
              <div v-show="beforePullDown">
                <span>{pullDownText}</span>
              </div>
            ) : (
              <div>
                {isPullingDown ? (
                  <div>
                    <span>{loadingText}</span>
                  </div>
                ) : (
                  <div>
                    <span>{pullDownSuccessText}</span>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="mobile-magic-scroll-react-list">{children}</div>
          <div className="mobile-magic-scroll-react-tips">
            {!isPullUpLoad ? (
              <div className="before-trigger">
                <span className="mobile-magic-scroll-react-txt">
                  {finished ? finishedText : pullUpText}
                </span>
              </div>
            ) : (
              <div className="after-trigger">
                <span className="mobile-magic-scroll-react-txt">
                  {loadingText}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMagicScrollReact;
