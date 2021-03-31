/*
 * @Author       : 邱狮杰
 * @Date         : 2021-03-31 17:41:08
 * @LastEditTime : 2021-03-31 17:44:34
 * @FilePath     : /viteuploadtmp/src/components/contentDisplayOrOperation/display.tsx
 * @Description  : display component
 */

import React, { FC } from "react";
import "./display.scss";
type Props = {};

const Display: FC<Props> = () => {
  return (
    <div className="display">
      <div className="display_item displayAction">
        <span>图片</span>
      </div>
      <div className="display_item">
        <span>视频</span>
      </div>
    </div>
  );
};

export default Display;
