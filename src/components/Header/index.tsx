/*
 * @Author       : 邱狮杰
 * @Date         : 2021-03-31 17:23:13
 * @LastEditTime : 2021-03-31 17:36:12
 * @FilePath     : /viteuploadtmp/src/components/Header/index.tsx
 * @Description  :
 */

import React, { useState } from "react";
import "./header.scss";

type BarList = { text: string; action: boolean };
function Header() {
  const [bar] = useState<BarList[]>([
    { text: "本地音频", action: true },
    { text: "全部音频", action: false },
  ]);
  return (
    <div className="top">
      <div className="centerOperation">
        {bar.map((item, index) => (
          <span key={index} className={item.action ? "barAction" : ""}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Header;
