# mobile-magic-scroll-react

In view of the fact that there are relatively few components for the pull-up and refresh of react on the mobile terminal，Most of them are in the framework, but what if I don't use the framework，At this time, you need to look at the source code of some frameworks and then package them yourself, which helps you solve this problem，This is mobile-magic-scroll-react components，The mobile terminal scrolls smoothly, integrates pull-up refresh and pull-down refresh, and is compatible with ios13.4 and long column performance processing(小程序，app上拉加载和下拉刷新的组件很多，但是纯h5react移动端的网上几乎没有，如果你用框架，里面肯定有，但是有的项目没有用第三方的框架，这时候不可能为了一个上拉刷新把整个框架都引过来，你将会去看框架源码，模仿写，而我帮你封装好了，集上拉下拉与一体，支持ios新版回弹)

## node version

```
 had better > 14

```

## how to use

```
yarn add @banyinbanying/mobile-magic-scroll-react or npm i @banyinbanying/mobile-magic-scroll-react

```

### then you add this line in your component or page

```
import MobileMagicScrollReact from "@banyinbanying//mobile-magic-scroll-react";

```

### after you can use it in component like this,for more message you can refer to demo code

```
 <MobileMagicScrollReact
        onLoad={onLoad}
        finished={finished}
/>

```

### Props

The component provides the following variables

| Name | Type | Default Value | Description | 是否必填 |
| ---- | ---- | ------------- | ----------- | -------- |
| pullDownText | string | 下拉刷新 | --- | |
| pullDownSuccessText | string | 刷新成功 | -- | |
| pullUpText | String | 上拉加载更多 | -- | |
| loadingText | String | 加载中... | 加载过程中的文字提示 | |
| finishedText | String | 没有更多了 | -- | |
| height | String | 100vh | 滚动区域的高度 | |
| heightUnit | String | vh | 滚动度高度单位 | |
| isObserveImage | boolean | false | 是否开启自动计算图片宽高 | |
| isPerformance | boolean | false | 如果数据比较多，无限滚动过程中永远展示最新的 30 条数据，以优化性能 | |
| finished | boolean | false | 是否是最后一页 | 是 |
| onLoad | function | - | 调取数据接口 | 是 |

### data format

```
  [{
      id:1,
      ....
  }]

```

### 示范图片

![image](https://github.com/zhaochengxian/mobile-magic-scroll-react/blob/main/example/assets/demo1.png)
![image](https://github.com/zhaochengxian/mobile-magic-scroll-react/blob/main/example/assets/demo2.png)
