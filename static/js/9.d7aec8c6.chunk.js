(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{134:function(n,e,t){"use strict";t.d(e,"e",function(){return p}),t.d(e,"c",function(){return u}),t.d(e,"b",function(){return f}),t.d(e,"d",function(){return b}),t.d(e,"a",function(){return g});var a,o,i,r,l,c=t(2),d=t(3),s=t(1),p=d.b.div(a||(a=Object(c.a)(["\n  box-sizing: border-box;\n  position: fixed;\n  top: 95px;\n  width: 100%;\n  padding: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n"]))),u=d.b.div(o||(o=Object(c.a)(["\n  position: fixed;\n  top: 160px;\n  left: 0;\n  bottom: ",";\n  overflow: hidden;\n  width: 100%;\n"])),function(n){return n.play?"60px":0}),f=d.b.div(i||(i=Object(c.a)(["\n  display: flex;\n  margin: auto;\n  flex-direction: column;\n  overflow: hidden;\n  .title {\n    margin:10px 0 10px 10px;\n    color: ",";\n    font-size: ",";\n  }\n"])),s.a["font-color-desc"],s.a["font-size-s"]),b=d.b.div(r||(r=Object(c.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  margin: 0 5px;\n  padding: 5px 0;\n  align-items: center;\n  border-bottom: 1px solid ",";\n  .img_wrapper {\n    margin-right: 20px;\n    img{\n      border-radius: 3px;\n      width: 50px;\n      height: 50px;\n    }\n  }\n  .name{\n    font-size: ",";\n    color: ",";\n    font-weight: 500;\n  }\n"])),s.a["border-color"],s.a["font-size-m"],s.a["font-color-desc"]),g=d.b.div(l||(l=Object(c.a)(["\n  position: fixed;\n  left: 0; right: 0; top: 0; bottom: 0;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n"])))},154:function(n,e,t){"use strict";t.r(e);var a,o,i,r,l=t(0),c=t.n(l),d=t(27),s=t(64),p=t(46),u=t(2),f=t(3),b=t(1),g=f.b.div(a||(a=Object(u.a)(["\n  position: fixed;\n  top: 90px;\n  bottom: ",";\n  width: 100%;\n  .offical,.global {\n    margin: 10px 5px;\n    padding-top: 15px;\n    font-weight: 700;\n    font-size: ",";\n    color: ",";\n  }\n"])),function(n){return n.play>0?"60px":0},b.a["font-size-m"],b.a["font-color-desc"]),x=f.b.ul(o||(o=Object(u.a)(["\n  margin-top: 10px;\n  padding: 0 5px;\n  display: ",";\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  background: ",';\n  &::after{\n    content:"";\n    display:block;\n    width: 32vw;\n  }\n'])),function(n){return n.globalRank?"flex":""},b.a["background-color"]),m=f.b.li(i||(i=Object(u.a)(["\n  display: ",";\n  padding: 3px 0;\n  border-bottom: 1px solid ",";\n  .img_wrapper{\n    width:  ",";\n    height: ",";\n    border-radius: 3px;\n    position: relative;\n    .decorate {\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      height: 35px;\n      border-radius: 3px;\n      background: linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,43%,.4));\n    }\n    img{\n      width: 100%;\n      height: 100%;\n      border-radius: 3px;\n    }\n    .update_frequecy{\n      position: absolute;\n      left: 7px;\n      bottom: 7px;\n      font-size: ",";\n      color: ",";\n    }\n  }\n"])),function(n){return n.tracks.length?"flex":""},b.a["border-color"],function(n){return n.tracks.length?"27vw":"32vw"},function(n){return n.tracks.length?"27vw":"32vw"},b.a["font-size-ss"],b.a["font-color-light"]),h=f.b.ul(r||(r=Object(u.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 10px 10px;\n  >li{\n    font-size: ",";\n    color: grey;\n  }\n"])),b.a["font-size-s"]),w=t(33),v=t(134),k=t(6),y=t(28);e.default=Object(d.b)(function(n){return{rankList:n.getIn(["rank","rankList"]),loading:n.getIn(["rank","loading"]),songsCount:n.getIn(["player","playList"]).size}},function(n){return{getRankListDataDispatch:function(){n(Object(s.a)())}}})(c.a.memo(function(n){var e=n.rankList,t=n.loading,a=n.songsCount,o=n.getRankListDataDispatch,i=e?e.toJS():[];Object(l.useEffect)(function(){i.length||o()},[]);var r=function(e,t){return c.a.createElement(x,{globalRank:t},e.map(function(e,t){return c.a.createElement(m,{key:"".concat(e.coverImgId).concat(t),tracks:e.tracks,onClick:function(){return t=e,void n.history.push("/rank/".concat(t.id));var t}},c.a.createElement("div",{className:"img_wrapper"},c.a.createElement("img",{src:e.coverImgUrl,alt:""}),c.a.createElement("div",{className:"decorate"}),c.a.createElement("span",{className:"update_frequecy"},e.updateFrequency)),(a=e.tracks).length?c.a.createElement(h,null,a.map(function(n,e){return c.a.createElement("li",{key:e},e+1,". ",n.first," - ",n.second)})):null);var a}))},d=Object(k.b)(i),s=i.slice(0,d),u=i.slice(d),f=t?{display:"none"}:{display:""};return c.a.createElement(g,{play:a},c.a.createElement(w.a,null,c.a.createElement("div",null,c.a.createElement("h1",{className:"offical",style:f},"\u5b98\u65b9\u699c"),r(s),c.a.createElement("h1",{className:"global",style:f},"\u5168\u7403\u699c"),r(u,!0),t?c.a.createElement(v.a,null,c.a.createElement(p.a,null)):null)),Object(y.a)(n.route.routes))}))}}]);
//# sourceMappingURL=9.d7aec8c6.chunk.js.map