import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
  CSSProperties,
  ReactElement,
} from "react";

import MobileMagicScrollReact from "@banyinbanying/mobile-magic-scroll-react";
import DemoItem from "../../components";
import getAjaxData from "./data";

import type { DemoDataEntity } from "../../model";

import "./index.css";
let i = 1;
const Demo = (): ReactElement => {
  const [finished, setFinished] = useState<boolean>(false);

  const [data, setData] = useState<Array<DemoDataEntity>>([]);
  const getFirstPageData = () => {
    getAjaxData(0, 10).then((res) => {
      res && setData(res);
    });
  };

  const onLoad = async (type: string) => {
    i++;
    if (type === "DOWN") {
      getFirstPageData();
    } else if (type === "UP") {
      let res = await getAjaxData(10 * (i - 1), 10 * i);
      setData((pre) => [...pre, ...res]);
    }
    // if (data.length > 30 && isPerformance) {
    //   data = data.slice(30, data?.length);
    // }
  };
  useEffect(() => {
    getFirstPageData();
  }, []);
  return (
    <div className="demo">
      <MobileMagicScrollReact onLoad={onLoad} finished={finished}>
        {data?.map((item) => (
          <DemoItem
            key={item.id}
            title={item?.title}
            img={item?.img}
            price={item?.price}
          />
        ))}
      </MobileMagicScrollReact>
    </div>
  );
};

export default Demo;
