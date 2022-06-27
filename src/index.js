import "./tabs.js";
import "./banner.js";

import $ from "jquery";
$("#swiper").css("background-color", "skyblue");

import "./style/index.css";

import "./style/index.less";

import imgUrl from "./assets/1.gif";

let img = document.createElement("img");
img.src = imgUrl;
document.body.appendChild(img);

// 引入图片-使用
import imgUrl2 from "./assets/logo_small.png";
const theImg = document.createElement("img");
theImg.src = imgUrl2;
document.body.appendChild(theImg);

import "./assets/fonts/iconfont.css";

class App {
  static a = 123;
}

console.log(App.a);
