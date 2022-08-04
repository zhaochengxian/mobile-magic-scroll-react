'use strict';

var React = require('react');
var BScroll = require('@better-scroll/core');
var Pullup = require('@better-scroll/pull-up');
var PullDown = require('@better-scroll/pull-down');
var ObserveImage = require('@better-scroll/observe-image');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var BScroll__default = /*#__PURE__*/_interopDefaultLegacy(BScroll);
var Pullup__default = /*#__PURE__*/_interopDefaultLegacy(Pullup);
var PullDown__default = /*#__PURE__*/_interopDefaultLegacy(PullDown);
var ObserveImage__default = /*#__PURE__*/_interopDefaultLegacy(ObserveImage);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".mobile-magic-scroll-react{overflow:auto}.mobile-magic-scroll-react-wrapper{font-size:14px;height:100%;overflow:hidden;padding:0 10px}.mobile-magic-scroll-react-list{height:100%;overflow:auto;padding:0}.mobile-magic-scroll-react-tips{color:#999;padding:20px;text-align:center}.mobile-magic-scroll-react .pulldown-wrapper{box-sizing:border-box;color:#999;font-size:14px;padding:20px;position:absolute;text-align:center;transform:translateY(-100%) translateZ(0);width:100%}";
styleInject(css_248z);

BScroll__default["default"].use(Pullup__default["default"]);
BScroll__default["default"].use(PullDown__default["default"]);
BScroll__default["default"].use(ObserveImage__default["default"]);
var TEXT_INITIAL = [
    "下拉刷新",
    "加载中...",
    "刷新成功",
    "上拉加载更多",
    "没有更多数据了",
];
var HEIGHT = 100;
var UNIT = "vh";
var MobileMagicScrollReact = function (props) {
    var _a = props.pullDownText, pullDownText = _a === void 0 ? TEXT_INITIAL[0] : _a, _b = props.pullDownSuccessText, pullDownSuccessText = _b === void 0 ? TEXT_INITIAL[2] : _b, _c = props.pullUpText, pullUpText = _c === void 0 ? TEXT_INITIAL[3] : _c, _d = props.loadingText, loadingText = _d === void 0 ? TEXT_INITIAL[1] : _d, _e = props.finishedText, finishedText = _e === void 0 ? TEXT_INITIAL[4] : _e, _f = props.height, height = _f === void 0 ? HEIGHT : _f, _g = props.heightUnit, heightUnit = _g === void 0 ? UNIT : _g, finished = props.finished, onLoad = props.onLoad, children = props.children;
    var domRefScroll = React.useRef(null);
    var _h = React.useState(false), isPullUpLoad = _h[0], setIsPullUpLoad = _h[1];
    var _j = React.useState(), bscroll = _j[0], setBscroll = _j[1];
    var _k = React.useState(true), beforePullDown = _k[0], setBeforePullDown = _k[1];
    var _l = React.useState(false), isPullingDown = _l[0], setIsPullingDown = _l[1];
    var style = React.useMemo(function () {
        return {
            height: height + heightUnit,
        };
    }, [height]);
    var pullingDownHandler = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setBeforePullDown(false);
                    setIsPullingDown(true);
                    return [4 /*yield*/, onLoad("DOWN")];
                case 1:
                    _a.sent();
                    setIsPullingDown(false);
                    finishPullDown();
                    return [2 /*return*/];
            }
        });
    }); };
    var pullingUpHandler = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsPullUpLoad(true);
                    return [4 /*yield*/, onLoad("UP")];
                case 1:
                    _a.sent();
                    bscroll === null || bscroll === void 0 ? void 0 : bscroll.finishPullUp();
                    bscroll === null || bscroll === void 0 ? void 0 : bscroll.refresh();
                    setIsPullUpLoad(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var finishPullDown = function () {
        bscroll === null || bscroll === void 0 ? void 0 : bscroll.finishPullDown();
        setTimeout(function () {
            setBeforePullDown(true);
            bscroll === null || bscroll === void 0 ? void 0 : bscroll.refresh();
        }, 1000);
    };
    var is_IOS_13_4 = function () {
        var verNum = 0;
        var reg = /OS (\d+[\_\d]+)/g;
        var isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isIos) {
            var iosVer = navigator.appVersion;
            //@ts-ignore
            var ver = reg.exec(iosVer)[1];
            var verArr = ver.split("_");
            for (var i = 0; i < verArr.length; i++) {
                if (i !== 0) {
                    verNum += (parseInt(verArr[i]) * 1) / Math.pow(10, i);
                }
                else {
                    verNum += parseInt(verArr[i]);
                }
            }
            verNum = Math.round(verNum * 100) / 100;
            console.log(verNum);
        }
        return isIos && verNum >= 13.4;
    };
    var initBscroll = function () {
        var bs = new BScroll__default["default"](domRefScroll.current, {
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
    React.useEffect(function () {
        bscroll === null || bscroll === void 0 ? void 0 : bscroll.on("pullingDown", pullingDownHandler);
        bscroll === null || bscroll === void 0 ? void 0 : bscroll.on("pullingUp", pullingUpHandler);
    }, [bscroll]);
    React.useEffect(function () {
        initBscroll();
    }, []);
    return (React__default["default"].createElement("div", { className: "mobile-magic-scroll-react", style: style },
        React__default["default"].createElement("div", { ref: domRefScroll, className: "mobile-magic-scroll-react-wrapper" },
            React__default["default"].createElement("div", { className: "mobile-magic-scroll-react-content" },
                React__default["default"].createElement("div", { className: "pulldown-wrapper" }, beforePullDown ? (React__default["default"].createElement("div", { "v-show": "beforePullDown" },
                    React__default["default"].createElement("span", null, pullDownText))) : (React__default["default"].createElement("div", null, isPullingDown ? (React__default["default"].createElement("div", null,
                    React__default["default"].createElement("span", null, loadingText))) : (React__default["default"].createElement("div", null,
                    React__default["default"].createElement("span", null, pullDownSuccessText)))))),
                React__default["default"].createElement("div", { className: "mobile-magic-scroll-react-list" }, children),
                React__default["default"].createElement("div", { className: "mobile-magic-scroll-react-tips" }, !isPullUpLoad ? (React__default["default"].createElement("div", { className: "before-trigger" },
                    React__default["default"].createElement("span", { className: "mobile-magic-scroll-react-txt" }, finished ? finishedText : pullUpText))) : (React__default["default"].createElement("div", { className: "after-trigger" },
                    React__default["default"].createElement("span", { className: "mobile-magic-scroll-react-txt" }, loadingText))))))));
};

module.exports = MobileMagicScrollReact;
