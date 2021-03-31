/*
 * @Author       : 邱狮杰
 * @Date         : 2021-03-31 17:37:11
 * @LastEditTime : 2021-03-31 17:49:53
 * @FilePath     : /viteuploadtmp/src/components/contentDisplayOrOperation/index.tsx
 * @Description  : 操作区域
 */

import React from "react";
import "./index.scss";
import Display from "./display";
import Content from "./content";
function ContentDisplayOrOperation() {
  return (
    <div className="contentDisplayOrOperation">
      <Display />
      <Content />
    </div>
  );
}

export default ContentDisplayOrOperation;
