/*
 * @Author       : 邱狮杰
 * @Date         : 2021-03-31 17:53:01
 * @LastEditTime : 2021-03-31 17:55:25
 * @FilePath     : /viteuploadtmp/src/components/operationBtn/index.tsx
 * @Description  : operationBtn component
 */

import React, { FC } from "react";
import "./index.scss";

type Props = {};
const OperationBtn: FC<Props> = () => {
  return (
    <div className="operationBtn">
      <input style={{ display: "none" }} id="fileSend" type="file" />
      <button className="load">上传</button>
      <button className="close">取消</button>
    </div>
  );
};

export default OperationBtn;
