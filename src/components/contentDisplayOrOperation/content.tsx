/*
 * @Author       : 邱狮杰
 * @Date         : 2021-03-31 17:46:27
 * @LastEditTime : 2021-03-31 17:52:19
 * @FilePath     : /viteuploadtmp/src/components/contentDisplayOrOperation/content.tsx
 * @Description  : content component
 */

import React, { FC } from "react";
import "./content.scss";
import "../../assets/scss/alert.scss";
type Props = {};

const Content: FC<Props> = () => {
  return (
    <div className="content">
      <div className="content_item">
        <input type="checkbox" value="1" />
        <img
          className="showImg"
          src="http://docscn.studygolang.com/doc/gopher/doc.png"
        />
      </div>
      <div className="content_item">
        <input type="checkbox" value="1" />
        <img
          className="showImg"
          src="http://docscn.studygolang.com/lib/godoc/images/footer-gopher.jpg"
        />
      </div>
      <div className="content_item">
        <input type="checkbox" value="1" />
        <img
          className="showImg"
          src="http://docscn.studygolang.com/lib/godoc/images/footer-gopher.jpg"
        />
      </div>
      <div className="OperationBar">
        <label>
          <input type="checkbox" />
          <span>全选</span>
        </label>
        <span className="removeText">删除</span>
      </div>
      <div className="removeAlert alert">
        <div className="content">
          <h4>删除图片</h4>
          <span>是否彻底删除图片?</span>
        </div>
        <div className="operaction">
          <button className="blue">确认</button>
          <button className="default">取消</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
