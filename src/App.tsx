/*
 * @Author       : 邱狮杰
 * @Date         : 2021-03-31 17:18:45
 * @LastEditTime : 2021-03-31 17:56:04
 * @FilePath     : /viteuploadtmp/src/App.tsx
 * @Description  :
 */

import React from "react";
import "./App.css";
import Header from "./components/header/index";
import ContentDisplayOrOperaction from "./components/contentDisplayOrOperation/index";
import Operaction from "./components/operationBtn/index";
function App() {
  return (
    <div id="container">
      <Header></Header>
      <ContentDisplayOrOperaction />
      <Operaction />
    </div>
  );
}

export default App;
