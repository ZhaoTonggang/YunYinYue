(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{134:function(n,e,t){"use strict";t.d(e,"e",function(){return p}),t.d(e,"c",function(){return u}),t.d(e,"b",function(){return f}),t.d(e,"d",function(){return g}),t.d(e,"a",function(){return m});var a,i,o,r,l,c=t(2),s=t(3),d=t(1),p=s.b.div(a||(a=Object(c.a)(["\n  box-sizing: border-box;\n  position: fixed;\n  top: 95px;\n  width: 100%;\n  padding: 5px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n"]))),u=s.b.div(i||(i=Object(c.a)(["\n  position: fixed;\n  top: 160px;\n  left: 0;\n  bottom: ",";\n  overflow: hidden;\n  width: 100%;\n"])),function(n){return n.play?"60px":0}),f=s.b.div(o||(o=Object(c.a)(["\n  display: flex;\n  margin: auto;\n  flex-direction: column;\n  overflow: hidden;\n  .title {\n    margin:10px 0 10px 10px;\n    color: ",";\n    font-size: ",";\n  }\n"])),d.a["font-color-desc"],d.a["font-size-s"]),g=s.b.div(r||(r=Object(c.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  margin: 0 5px;\n  padding: 5px 0;\n  align-items: center;\n  border-bottom: 1px solid ",";\n  .img_wrapper {\n    margin-right: 20px;\n    img{\n      border-radius: 3px;\n      width: 50px;\n      height: 50px;\n    }\n  }\n  .name{\n    font-size: ",";\n    color: ",";\n    font-weight: 500;\n  }\n"])),d.a["border-color"],d.a["font-size-m"],d.a["font-color-desc"]),m=s.b.div(l||(l=Object(c.a)(["\n  position: fixed;\n  left: 0; right: 0; top: 0; bottom: 0;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n"])))},140:function(n,e,t){"use strict";var a,i=t(2),o=t(0),r=t.n(o),l=t(3),c=t(6),s=t(1),d=l.b.div(a||(a=Object(i.a)(["\n  .icon_wrapper{\n    position: fixed;\n    z-index: 1000;\n    margin-top: -10px;\n    margin-left: -10px;\n    color: ",";\n    font-size: 14px;\n    display: none;\n    transition: transform 1s cubic-bezier(.62,-0.1,.86,.57);\n    transform: translate3d(0, 0, 0);\n    >div{\n      transition: transform 1s;\n    }\n  }\n"])),s.a["theme-color"]),p=Object(o.forwardRef)(function(n,e){var t=Object(o.useRef)(),a=Object(c.h)("transform"),i=function(n){var e="<div class='icon_wrapper'>".concat(n,"</div>"),t=document.createElement("div");return t.innerHTML=e,t.firstChild};Object(o.useEffect)(function(){for(var n=0;n<10;n++){var e=i('<div class="iconfont">&#xe642;</div>');t.current.appendChild(e)}[].slice.call(t.current.children).forEach(function(n){n.running=!1,n.addEventListener("transitionend",function(){this.style.display="none",this.style[a]="translate3d(0, 0, 0)",this.running=!1,this.querySelector("div").style[a]="translate3d(0, 0, 0)"},!1)})},[]);var l=function(n){for(var e=n.x,i=n.y,o=function(n){var o=[].slice.call(t.current.children)[n];if(!1===o.running)return o.style.left=e+"px",o.style.top=i+"px",o.style.display="inline-block",setTimeout(function(){o.running=!0,o.style[a]="translate3d(0, 750px, 0)",o.querySelector("div").style[a]="translate3d(-40px, 0, 0)"},20),"break"},r=0;r<10;r++){if("break"===o(r))break}};return Object(o.useImperativeHandle)(e,function(){return{startAnimation:l}}),r.a.createElement(d,{ref:t})});e.a=r.a.memo(p)},141:function(n,e,t){"use strict";t.d(e,"a",function(){return p}),t.d(e,"b",function(){return u});var a,i,o,r,l,c=t(2),s=t(3),d=t(1),p=s.b.div(a||(a=Object(c.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: ",";\n  width: 100%;\n  z-index: 100;\n  overflow: hidden;\n  background: #f2f3f4;\n  transform-origin: right bottom;\n  &.fly-enter, &.fly-appear{\n    transform: rotateZ(30deg) translate3d(100%, 0, 0);\n  }\n  &.fly-enter-active, &.fly-appear-active{\n    transition: transform .3s;\n    transform: rotateZ(0deg) translate3d(0, 0, 0);\n  }\n  &.fly-exit{\n    transform: rotateZ(0deg) translate3d(0, 0, 0);\n  }\n  &.fly-exit-active{\n    transition: transform .3s;\n    transform: rotateZ(30deg) translate3d(100%, 0, 0);\n  }\n"])),function(n){return n.play>0?"60px":0}),u=(s.b.div(i||(i=Object(c.a)(["\n  background-size: 100%;\n  padding: 5px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  box-sizing: border-box;\n  width: 100%;\n  height: 200px;\n  position: relative;\n  z-index: 100;\n  .background{\n    /* z-index: -1; */\n    background: url(",") left top no-repeat;\n\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    filter: blur(20px);\n    transform: scale(1.5);\n  }\n  .img_wrapper{\n    width: 120px;\n    height: 120px;\n    position: relative;         \n    .decorate {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 35px;\n      border-radius: 3px;\n      background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));\n    }\n    .play_count {\n      position: absolute;\n      right: 2px;\n      top: 2px;\n      font-size: ",";\n      line-height: 15px;\n      color: ",";\n      .play{\n        vertical-align: top;\n      }\n    }\n    img{\n      width: 120px;\n      height: 120px;\n      border-radius:3px;\n    }\n  }\n  .desc_wrapper {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 120px;\n    padding: 0 10px;\n    .title{\n      max-height: 70px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      color: ",";\n      font-weight: 700;\n      line-height: 1.5;\n      font-size: ",";\n    }\n    .person{\n      display: flex;\n      .avatar{\n        width: 20px;\n        height: 20px;\n        margin-right: 5px;\n        img{\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n        }\n      }\n      .name {\n        line-height: 20px;\n        font-size: ",";\n        color: ",";\n      }\n    }\n  }\n"])),function(n){return n.background},d.a["font-size-s"],d.a["font-color-light"],d.a["font-color-desc"],d.a["font-size-l"],d.a["font-size-m"],d.a["font-color-desc"]),s.b.div(o||(o=Object(c.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n  margin: 0 30px;\n  margin-top: -20px;\n  margin-bottom: 10px;\n  >div {\n    display: flex;\n    flex-direction: column;\n    line-height: 20px;\n    text-align: center;\n    font-size: ",";\n    color: #3b1f1f;\n    color: ",";\n    z-index:1000;\n    font-weight: 500;\n    .iconfont {\n      font-size: 20px;\n    }\n  }\n"])),d.a["font-size-s"],d.a["font-color-desc"]),s.b.div(r||(r=Object(c.a)(["\n  border-radius: 10px;\n  opacity: 0.98;\n  .first_line{\n    box-sizing: border-box;\n    padding: 10px 0;\n    margin-left: 10px;\n    position: relative;\n    justify-content: space-between;\n    border-bottom: 1px solid ",";\n    .play_all{\n      display: inline-block;\n      line-height: 24px;\n      color: ",";\n      .iconfont {\n        font-size: 24px;\n        margin-right: 10px;\n        vertical-align: top;\n      }\n      .sum{\n        font-size: ",";\n        color: ",";\n      }\n      >span{\n        vertical-align: top;\n      }\n    }\n    .add_list {\n      display: flex;\n      align-items: center;\n      position: absolute;\n      right: 0; top :0px; bottom: 0;\n      width: 130px;\n      line-height: 34px;\n      background: ",";\n      color: ",";\n      font-size: 0;\n      border-radius: 3px;\n      vertical-align: top;\n      .iconfont {\n        vertical-align: top;\n        font-size: 10px;\n        margin: 0 5px 0 10px;\n      }\n      span{\n        font-size: 14px;\n        line-height: 34px;\n      }\n  }\n}\n"])),d.a["border-color"],d.a["font-color-desc"],d.a["font-size-s"],d.a["font-color-desc-v2"],d.a["theme-color"],d.a["font-color-light"]),s.b.ul(l||(l=Object(c.a)(["\n  >li{\n    display: flex;\n    height: 60px;\n    align-items: center;  \n    .index{\n      width: 60px;\n      height: 60px;\n      line-height: 60px;\n      text-align: center;\n    }\n    .info{\n      box-sizing: border-box;\n      flex: 1;\n      display: flex;\n      height: 100%;\n      padding: 5px 0;\n      flex-direction: column;\n      justify-content: space-around;\n      border-bottom: 1px solid ",";\n      >span:first-child{\n        color: ",";\n      }\n      >span:last-child{\n        font-size: ",";\n        color: #bba8a8;\n      }\n    }\n  }\n"])),d.a["border-color"],d.a["font-color-desc"],d.a["font-size-s"]))},142:function(n,e,t){"use strict";var a,i=t(2),o=t(0),r=t.n(o),l=t(3),c=t(1),s=l.b.div(a||(a=Object(i.a)(["\n  position: fixed;\n  padding: 5px 10px;\n  padding-top: 0;\n  height: 40px;\n  width: 100%;\n  z-index: 100;\n  display: flex;\n  line-height: 40px;\n  color: ",";\n  .back{\n    margin-right: 5px;\n    font-size: 20px;\n    width: 20px;\n  }\n  >h1{\n    font-size: ",";\n    font-weight: 700;\n  }\n"])),c.a["font-color-light"],c.a["font-size-l"]),d=r.a.forwardRef(function(n,e){var t=n.handleClick,a=n.title,i=n.isMarquee;return r.a.createElement(s,{ref:e},r.a.createElement("i",{className:"iconfont back",onClick:t},"\ue655"),i?r.a.createElement("marquee",null,r.a.createElement("h1",null,a)):r.a.createElement("h1",null,a))});d.defaultProps={handleClick:function(){},title:"\u6807\u9898",isMarquee:!1},e.a=r.a.memo(d)},143:function(n,e,t){"use strict";var a,i,o=t(12),r=t(0),l=t.n(r),c=t(2),s=t(3),d=t(1),p=s.b.div(a||(a=Object(c.a)(["\n  border-radius: 10px;\n  opacity: 0.98;\n  ",";\n  .first_line{\n    box-sizing: border-box;\n    padding: 10px 0;\n    margin-left: 10px;\n    position: relative;\n    justify-content: space-between;\n    border-bottom: 1px solid ",";\n    .play_all{\n      display: inline-block;\n      line-height: 24px;\n      color: ",";\n      .iconfont {\n        font-size: 24px;\n        margin-right: 10px;\n        vertical-align: top;\n      }\n      .sum{\n        font-size: ",";\n        color: ",";\n      }\n      >span{\n        vertical-align: top;\n      }\n    }\n    .add_list,.isCollected {\n      display: flex;\n      align-items: center;\n      position: absolute;\n      right: 0; top :0; bottom: 0;\n      width: 130px;\n      line-height: 34px;\n      background: ",";\n      color: ",";\n      font-size: 0;\n      border-radius: 3px;\n      vertical-align: top;\n      .iconfont {\n        vertical-align: top;\n        font-size: 10px;\n        margin: 0 5px 0 10px;\n      }\n      span{\n        font-size: 14px;\n        line-height: 34px;\n      }\n    }\n    .isCollected{\n      display: flex;\n      background: ",";\n      color: ",";\n    }\n}\n"])),function(n){return n.showBackground?"background: ".concat(d.a["highlight-background-color"]):""},d.a["border-color"],d.a["font-color-desc"],d.a["font-size-s"],d.a["font-color-desc-v2"],d.a["theme-color"],d.a["font-color-light"],d.a["background-color"],d.a["font-color-desc"]),u=s.b.ul(i||(i=Object(c.a)(["\n  >li{\n    display: flex;\n    height: 60px;\n    align-items: center;  \n    .index{\n      flex-basis: 60px;\n      width: 60px;\n      height: 60px;\n      line-height: 60px;\n      text-align: center;\n    }\n    .info{\n      box-sizing: border-box;\n      flex: 1;\n      display: flex;\n      height: 100%;\n      padding: 5px 0;\n      flex-direction: column;\n      justify-content: space-around;\n      border-bottom: 1px solid ",";\n      ","\n      >span{\n        ","\n      }\n      >span:first-child{\n        color: ",";\n      }\n      >span:last-child{\n        font-size: ",";\n        color: #bba8a8;\n      }\n    }\n  }\n"])),d.a["border-color"],d.a.noWrap(),d.a.noWrap(),d.a["font-color-desc"],d.a["font-size-s"]),f=t(6),g=t(7),m=t(27),x=t(11),b=l.a.forwardRef(function(n,e){var t=Object(r.useState)(0),a=Object(o.a)(t,2),i=a[0],c=a[1],s=n.songs,d=n.collectCount,m=n.showCollect,x=n.loading,b=void 0!==x&&x,h=n.usePageSplit,v=n.musicAnimation,y=n.changePlayListDispatch,w=n.changeCurrentIndexDispatch,z=n.changeSequecePlayListDispatch,E=s.length;Object(r.useEffect)(function(){b&&(i+1+g.b>=E||c(i+g.b))},[b,i,E]);var j,k=function(n,e){y(s),z(s),w(e),v(n.nativeEvent.clientX,n.nativeEvent.clientY)};return l.a.createElement(p,{ref:e,showBackground:n.showBackground},l.a.createElement("div",{className:"first_line"},l.a.createElement("div",{className:"play_all",onClick:function(n){return k(n,0)}},l.a.createElement("i",{className:"iconfont"},"\ue6e3"),l.a.createElement("span",null,"\u64ad\u653e\u5168\u90e8 ",l.a.createElement("span",{className:"sum"},"(\u5171",E,"\u9996)"))),m?(j=d,l.a.createElement("div",{className:"add_list"},l.a.createElement("i",{className:"iconfont"},"\ue62d"),l.a.createElement("span",null,"\u6536\u85cf(",Math.floor(j/1e3)/10,"\u4e07)"))):null),l.a.createElement(u,null,function(n){for(var e=[],t=h?i+g.b:n.length,a=function(t){if(t>=n.length)return"break";var a=n[t];e.push(l.a.createElement("li",{key:a.id,onClick:function(n){return k(n,t)}},l.a.createElement("span",{className:"index"},t+1),l.a.createElement("div",{className:"info"},l.a.createElement("span",null,a.name),l.a.createElement("span",null,a.ar?Object(f.e)(a.ar):Object(f.e)(a.artists)," - ",a.al?a.al.name:a.album.name))))},o=0;o<t&&"break"!==a(o);o++);return e}(s)))});e.a=Object(m.b)(function(n){return{fullScreen:n.getIn(["player","fullScreen"]),playing:n.getIn(["player","playing"]),currentSong:n.getIn(["player","currentSong"]),scrollY:n.getIn(["album","scrollY"])}},function(n){return{changePlayListDispatch:function(e){n(Object(x.d)(e))},changeCurrentIndexDispatch:function(e){n(Object(x.a)(e))},changeSequecePlayListDispatch:function(e){n(Object(x.g)(e))}}})(l.a.memo(b))},151:function(n,e,t){"use strict";t.r(e);var a,i,o=t(12),r=t(0),l=t.n(r),c=t(141),s=t(133),d=t(33),p=t(1),u=t(27),f=t(50),g=t(134),m=t(46),x=t(142),b=t(2),h=t(3),v=h.b.div(a||(a=Object(b.a)(["\n  background-size: 100%;\n  padding: 5px 20px;\n  padding-bottom: 50px;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  height: 275px;\n  position: relative;\n  .background{\n    z-index: -1;\n    background: url(",") left top no-repeat;\n    background: contain;\n    background-position: 0 0;\n    background-size: 100% 100%;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    filter: blur(20px);\n    .filter{\n      position: absolute;\n      z-index: 10;\n      top: 0; left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(7, 17, 27, 0.2);\n    }\n  }\n  .img_wrapper{\n    width: 120px;\n    height: 120px;\n    position: relative;         \n    .decorate {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 35px;\n      border-radius: 3px;\n      background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));\n    }\n    .play_count {\n      position: absolute;\n      right: 2px;\n      top: 2px;\n      font-size: ",";\n      line-height: 15px;\n      color: ",";\n      .play{\n        vertical-align: top;\n      }\n    }\n    img{\n      width: 120px;\n      height: 120px;\n      border-radius:3px;\n    }\n  }\n  .desc_wrapper {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 120px;\n    padding: 0 10px;\n    .title{\n      max-height: 70px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      color: ",";\n      font-weight: 700;\n      line-height: 1.5;\n      font-size: ",";\n    }\n    .person{\n      display: flex;\n      .avatar{\n        width: 20px;\n        height: 20px;\n        margin-right: 5px;\n        img{\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n        }\n      }\n      .name {\n        line-height: 20px;\n        font-size: ",";\n        color: ",";\n      }\n    }\n  }\n"])),function(n){return n.background},p.a["font-size-s"],p.a["font-color-light"],p.a["font-color-light"],p.a["font-size-l"],p.a["font-size-m"],p.a["font-color-desc-v2"]),y=h.b.div(i||(i=Object(b.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n  padding: 0 30px 20px 30px;\n  margin: -100px 0 0 0;\n  >div {\n    display: flex;\n    flex-direction: column;\n    line-height: 20px;\n    text-align: center;\n    font-size: ",";\n    color: #3b1f1f;\n    color: ",";\n    z-index:1000;\n    font-weight: 500;\n    .iconfont {\n      font-size: 20px;\n    }\n  }\n"])),p.a["font-size-s"],p.a["font-color-light"]),w=t(143);var z=l.a.memo(function(n){var e=n.currentAlbum,t=n.pullUpLoading;return l.a.createElement("div",null,l.a.createElement(v,{background:e.coverImgUrl},l.a.createElement("div",{className:"background"},l.a.createElement("div",{className:"filter"})),l.a.createElement("div",{className:"img_wrapper"},l.a.createElement("div",{className:"decorate"}),l.a.createElement("img",{src:e.coverImgUrl,alt:""}),l.a.createElement("div",{className:"play_count"},l.a.createElement("i",{className:"iconfont play"},"\ue885"),l.a.createElement("span",{className:"count"},Math.floor(e.subscribedCount/1e3)/10,"\u4e07"))),l.a.createElement("div",{className:"desc_wrapper"},l.a.createElement("div",{className:"title"},e.name),l.a.createElement("div",{className:"person"},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{src:e.creator.avatarUrl,alt:""})),l.a.createElement("div",{className:"name"},e.creator.nickname)))),l.a.createElement(y,null,l.a.createElement("div",null,l.a.createElement("i",{className:"iconfont"},"\ue6ad"),"\u8bc4\u8bba"),l.a.createElement("div",null,l.a.createElement("i",{className:"iconfont"},"\ue86f"),"\u70b9\u8d5e"),l.a.createElement("div",null,l.a.createElement("i",{className:"iconfont"},"\ue62d"),"\u6536\u85cf"),l.a.createElement("div",null,l.a.createElement("i",{className:"iconfont"},"\ue606"),"\u66f4\u591a")),l.a.createElement(w.a,{songs:e.tracks,collectCount:e.subscribedCount,showCollect:!0,loading:t,musicAnimation:n.musicAnimation,showBackground:!0}))}),E=t(7),j=t(140),k=t(6);e.default=Object(u.b)(function(n){return{currentAlbum:n.getIn(["album","currentAlbum"]),pullUpLoading:n.getIn(["album","pullUpLoading"]),enterLoading:n.getIn(["album","enterLoading"]),startIndex:n.getIn(["album","startIndex"]),totalCount:n.getIn(["album","totalCount"]),songsCount:n.getIn(["player","playList"]).size}},function(n){return{getAlbumDataDispatch:function(e){n(Object(f.a)(!0)),n(Object(f.c)(e))},changePullUpLoadingStateDispatch:function(e){n(Object(f.b)(e))}}})(l.a.memo(function(n){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),a=t[0],i=t[1],u=Object(r.useState)("\u6b4c\u5355"),f=Object(o.a)(u,2),b=f[0],h=f[1],v=Object(r.useState)(!1),y=Object(o.a)(v,2),w=y[0],O=y[1],C=Object(r.useRef)(),N=Object(r.useRef)(),_=n.match.params.id,L=n.currentAlbum,I=n.enterLoading,S=n.pullUpLoading,A=n.songsCount,D=n.getAlbumDataDispatch,U=n.changePullUpLoadingStateDispatch,q=L.toJS();Object(r.useEffect)(function(){D(_)},[D,_]);var M=Object(r.useCallback)(function(n){var e=-E.a,t=Math.abs(n.y/e),a=N.current;n.y<e?(a.style.backgroundColor=p.a["theme-color"],a.style.opacity=Math.min(1,(t-1)/2),h(q&&q.name),O(!0)):(a.style.backgroundColor="",a.style.opacity=1,h("\u6b4c\u5355"),O(!1))},[q]),P=Object(r.useCallback)(function(){i(!1)},[]);return l.a.createElement(s.a,{in:a,timeout:300,classNames:"fly",appear:!0,unmountOnExit:!0,onExited:n.history.goBack},l.a.createElement(c.a,{play:A},l.a.createElement(x.a,{ref:N,title:b,handleClick:P,isMarquee:w}),Object(k.g)(q)?null:l.a.createElement(d.a,{onScroll:M,pullUp:function(){U(!0),U(!1)},pullUpLoading:S,bounceTop:!1},l.a.createElement(z,{currentAlbum:q,pullUpLoading:S,musicAnimation:function(n,e){C.current.startAnimation({x:n,y:e})}})),I?l.a.createElement(g.a,null,l.a.createElement(m.a,null)):null,l.a.createElement(j.a,{ref:C})))}))}}]);
//# sourceMappingURL=6.54861801.chunk.js.map