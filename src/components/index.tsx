import React, { ReactElement } from "react";

import type { DemoDataEntity } from "../model";

import "./index.css";

const DemoItem = (props: DemoDataEntity): ReactElement => {
  const { title, img, price } = props;

  return (
    <div className="demo-item">
      <img src={img} />
      <div style={{ flex: 1 }}>
        <div className="title">{title}</div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default DemoItem;
