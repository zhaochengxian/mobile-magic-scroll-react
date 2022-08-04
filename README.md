# mobile-magic-scroll-react

In view of the fact that there are relatively few components for the pull-up and refresh of react on the mobile terminal，Most of them are in the framework, but what if I don't use the framework，At this time, you need to look at the source code of some frameworks and then package them yourself, which helps you solve this problem，This is mobile-magic-scroll-react components，The mobile terminal scrolls smoothly, integrates pull-up refresh and pull-down refresh, and is compatible with ios13.4 and long column performance processing

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

| pullDownText | Array | 下拉刷新 | --- | |
| pullDownSuccessText | string | 刷新成功 | -- | |
| pullUpText | String | 上拉加载更多 | -- | |
| loadingText | String | 加载中... | 加载过程中的文字提示 | |
| finishedText | String | - | 部分选中的 icon,png | |
| height | String | 100vh | 滚动区域的高度 | |
| heightUnit | String | vh | 滚动度高度单位 | |
| isObserveImage | number | 500 | 是否开启自动计算图片宽高 | |
| isPerformance | enum 'primary' , 'danger' , 'default' | 'default' | 如果数据比较多，无限滚动过程中永远展示最新的 30 条数据，以优化性能 | |
| finished | function | - | 是否是最后一页 | 是 |
| onLoad | function | - | 调取数据接口 | 是 |

### data json format

```
  [{
      id:1,
      ....
  }]

```

### Matching selection components（mobile-magic-scroll-react）示范图片

![image](https://github.com/zhaochengxian/mobile-magic-scroll-react/blob/main/example/assets/demo1.png)
![image](https://github.com/zhaochengxian/mobile-magic-scroll-react/blob/main/example/assets/demo2.png)
