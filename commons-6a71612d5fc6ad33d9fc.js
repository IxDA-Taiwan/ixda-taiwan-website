(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",l),f}}},AuzG:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("style",{key:0},".a{fill:#47B8B6;}.b{fill:#404C53;}"),r.createElement("defs",{key:1},r.createElement("path",{d:"M314.423093,113.00256 L321.623431,123.719845 L321.669569,123.719845 L321.669569,113.00256 L324.075929,113.00256 L324.075929,128.088274 L321.80654,128.088274 L314.610526,117.372357 L314.561505,117.372357 L314.561505,128.088274 L312.15947,128.088274 L312.15947,113.00256 L314.423093,113.00256 Z M256.480661,113.00256 L262.263713,128.088274 L259.716056,128.088274 L258.483319,124.716898 L252.458045,124.716898 L251.225308,128.088274 L248.681977,128.088274 L254.469353,113.00256 L256.480661,113.00256 Z M180.163861,113.00256 L183.084621,124.685697 L187.055702,113.00256 L189.262818,113.00256 L193.334615,124.685697 L196.097106,113.00256 L198.786219,113.00256 L194.642482,128.088274 L192.166311,128.088274 L188.081565,116.461096 L184.021278,128.088274 L181.559495,128.088274 L177.372594,113.00256 L180.163861,113.00256 Z M127.476836,113.00256 L127.476836,128.088274 L125.061825,128.088274 L125.061825,113.00256 L127.476836,113.00256 Z M69.3830162,113.00256 L75.1660674,128.088274 L72.6198524,128.088274 L71.3871153,124.716898 L65.3604002,124.716898 L64.1276631,128.088274 L61.5857735,128.088274 L67.3717082,113.00256 L69.3830162,113.00256 Z M11.6900159,113.00256 L11.6900159,115.037695 L7.33146097,115.037695 L7.33146097,128.088274 L4.91644957,128.088274 L4.91644957,115.037695 L0.566545455,115.037695 L0.566545455,113.00256 L11.6900159,113.00256 Z M255.495913,116.094926 L255.454101,116.094926 L253.148667,122.687233 L257.791256,122.687233 L255.495913,116.094926 Z M68.3982683,116.094926 L68.3564562,116.094926 L66.0510214,122.687233 L70.6936105,122.687233 L68.3982683,116.094926 Z M54.9812485,81.4127914 C56.1449354,81.4127914 57.1040099,82.2771686 57.1869476,83.3606594 L57.1927636,83.5097057 L57.1947523,94.6523914 C57.1957023,95.7526647 56.2854454,96.6666052 55.143334,96.7439984 L54.9862182,96.7493057 L43.2408364,96.7493057 C42.0781001,96.7493057 41.1163388,95.8832032 41.0349054,94.8012127 L41.0293212,94.6523914 L41.0293212,83.5097057 C41.0293212,82.4076287 41.9405288,81.4953351 43.0835909,81.4180885 L43.2408364,81.4127914 L54.9812485,81.4127914 Z M128.314395,81.4127914 C129.476181,81.4127914 130.434263,82.2771686 130.520598,83.3606594 L130.526904,83.5097057 L130.526904,94.6523914 C130.526904,95.7526647 129.619334,96.6666052 128.474849,96.7439984 L128.317377,96.7493057 L116.572989,96.7493057 C115.409302,96.7493057 114.447499,95.8832032 114.366064,94.8012127 L114.36048,94.6523914 L114.36048,83.5097057 C114.36048,82.4076287 115.271688,81.4953351 116.41562,81.4180885 L116.572989,81.4127914 L128.314395,81.4127914 Z M190.727825,0.802937143 C204.074444,0.802937143 215.01871,6.46290857 221.547898,16.9729371 C226.471834,24.9770871 226.935092,28.6232085 226.943864,48.173473 L226.943995,48.7707943 C226.943995,70.3311086 225.807922,74.1081943 221.261644,80.8430229 C215.303971,89.7341657 204.788092,96.7386514 189.730904,96.7386514 L155.357498,96.7386514 L155.357498,0.802937143 L190.727825,0.802937143 Z M287.385648,0.80256 L324.177309,96.7392171 L307.984048,96.7392171 L300.171685,75.31656 L261.81457,75.31656 L254.002206,96.7392171 L237.80497,96.7392171 L274.603588,0.80256 L287.385648,0.80256 Z M15.9030303,0.803314286 L15.9030303,96.7390286 L0.566545455,96.7390286 L0.566545455,0.803314286 L15.9030303,0.803314286 Z M189.024213,14.5479086 L170.700941,14.5479086 L170.700941,82.9965086 L189.024213,82.9965086 C197.684407,82.9965086 203.795147,80.1698229 207.772892,74.64468 C211.112785,69.8964709 211.586833,67.2093375 211.604961,50.3921298 L211.604875,48.1926348 C211.585166,31.8793286 211.092464,27.7728891 207.059244,22.6329086 C202.371825,16.5637371 197.260989,14.5479086 189.024213,14.5479086 Z M281.138739,20.47056 L280.850497,20.47056 L266.218715,62.3833886 L295.764558,62.3833886 L281.138739,20.47056 Z M54.9812485,11.8568057 C56.1449354,11.8568057 57.1040099,12.7203203 57.1869476,13.8029109 L57.1927636,13.9518343 L57.1947523,25.0964057 C57.1957023,26.196679 56.2854454,27.1088942 55.143334,27.1861373 L54.9862182,27.1914343 L43.2408364,27.1914343 C42.0781001,27.1914343 41.1163388,26.3270571 41.0349054,25.2452166 L41.0293212,25.0964057 L41.0293212,13.9518343 C41.0293212,12.8506591 41.9405288,11.9392674 43.0835909,11.8620976 L43.2408364,11.8568057 L54.9812485,11.8568057 Z M128.314395,11.8568057 C129.476181,11.8568057 130.434263,12.7203203 130.520598,13.8029109 L130.526904,13.9518343 L130.526904,25.0964057 C130.526904,26.196679 129.619334,27.1088942 128.474849,27.1861373 L128.317377,27.1914343 L116.572989,27.1914343 C115.409302,27.1914343 114.447499,26.3270571 114.366064,25.2452166 L114.36048,25.0964057 L114.36048,13.9518343 C114.36048,12.8506591 115.271688,11.9392674 116.41562,11.8620976 L116.572989,11.8568057 L128.314395,11.8568057 Z",id:"path-1"})),r.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:2},r.createElement("g",{id:"Android",transform:"translate(-16.000000, -338.000000)"},r.createElement("g",{id:"Logo/IxDATaiwan",transform:"translate(16.000000, 338.000000)"},r.createElement("g",{id:"Logo/IxDATaiwan-Light",transform:"translate(0.000000, 0.942857)"},[r.createElement("g",{id:"LOGO",transform:"translate(0.000000, 0.450686)",key:0},r.createElement("g",{id:"Group",transform:"translate(0.000000, 0.351874)"},r.createElement("g",{id:"Color/DarkGrey",transform:"translate(0.427394, 0.140297)"},[r.createElement("mask",{id:"mask-2",fill:"white",key:0},r.createElement("use",{xlinkHref:"#path-1"})),r.createElement("use",{id:"Mask",className:"b",xlinkHref:"#path-1",key:1}),r.createElement("g",{mask:"url(#mask-2)",className:"b",id:"Rectangle",key:2},r.createElement("g",{transform:"translate(-33.793939, -61.285714)"},r.createElement("rect",{x:"0",y:"0",width:"412",height:"211"})))]))),r.createElement("path",{d:"M87.7961576,20.9281286 C86.9214909,21.7559571 85.4922061,21.7559571 84.6185333,20.9281286 L75.5041091,12.2802429 C74.6294424,11.4524143 74.6294424,10.0956429 75.5041091,9.26592857 L84.6185333,0.620871429 C85.4922061,-0.206957143 86.9214909,-0.206957143 87.7961576,0.620871429 L96.9115758,9.26592857 C97.7852485,10.0956429 97.7852485,11.4524143 96.9115758,12.2802429 L87.7961576,20.9281286 Z",id:"Fill-15",className:"a",key:1}),r.createElement("path",{d:"M114.788768,95.5943057 L114.788768,84.4525629 C114.788768,83.2994486 115.783702,82.3547057 117.000284,82.3547057 L128.74169,82.3547057 C129.652138,82.3547057 130.438344,82.8864771 130.776284,83.6369914 C130.670926,83.3918486 130.522829,83.1476486 130.263411,82.9034486 L102.704453,56.75142 C101.832768,55.9217057 101.832768,54.5658771 102.704453,53.7361629 L130.051702,27.7811914 C130.121278,27.7161343 130.154078,27.6444771 130.214708,27.5756486 C129.821108,27.9141343 129.313205,28.13382 128.743678,28.13382 L117.000284,28.13382 C115.783702,28.13382 114.788768,27.19002 114.788768,26.0387914 L114.788768,14.8951629 C114.788768,14.3417057 115.027314,13.8419914 115.400041,13.4676771 C115.358296,13.5044486 115.312575,13.5176486 115.270829,13.5591343 L87.7903927,39.5895343 C86.9187079,40.4173629 85.4874352,40.4173629 84.6137624,39.5895343 L57.1213988,13.5770486 C57.0985382,13.5534771 57.0707079,13.5459343 57.0468533,13.5242486 C57.3917503,13.8957343 57.6173745,14.3671629 57.6203564,14.8951629 L57.6213503,26.0387914 C57.6223442,27.19002 56.6274109,28.13382 55.4138109,28.13382 L43.6684291,28.13382 C43.0929382,28.13382 42.5770836,27.9113057 42.1814958,27.5681057 C42.2013745,27.5850771 42.2073382,27.6048771 42.2252291,27.6227914 L69.7006958,53.7361629 C70.5743685,54.5658771 70.5743685,55.9217057 69.7006958,56.75142 L42.1685745,82.8695057 C41.9131321,83.1137057 41.7620533,83.3569629 41.65272,83.6077629 C41.9986109,82.87422 42.7699079,82.3547057 43.6684291,82.3547057 L55.4088412,82.3547057 C56.6244291,82.3547057 57.6173745,83.2994486 57.6203564,84.4525629 L57.6213503,95.5943057 C57.6223442,96.1694486 57.3738594,96.6927343 56.9752897,97.0717629 C57.0120655,97.0387629 57.052817,97.0283914 57.0915806,96.99162 L84.6137624,70.8999343 C85.4874352,70.0721057 86.9187079,70.0721057 87.7903927,70.8999343 L115.341399,97.0255629 C115.600817,97.2716486 115.858247,97.4130771 116.124623,97.5149057 C115.341399,97.18962 114.788768,96.45042 114.788768,95.5943057",id:"Fill-17",className:"a",key:2})]))))])}a.defaultProps={width:"325px",height:"130px",viewBox:"0 0 325 130",version:"1.1"},e.exports=a,a.default=a},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);var o=n("dI71"),i={data:{menuOpen:!1,scrollOverMenu:!1},set:function(){}},l=a.a.createContext(i),c=function(e){function t(){var t;return(t=e.call(this)||this).handleScroll=function(){window.scrollY>75&&!t.state.data.scrollOverMenu?t.setData({scrollOverMenu:!0}):window.scrollY<=75&&t.state.data.scrollOverMenu&&t.setData({scrollOverMenu:!1})},t.setData=t.setData.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t.state=Object.assign({},i,{set:t.setData}),t}Object(o.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.scrollListener=window.addEventListener("scroll",this.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},n.setData=function(e){this.setState((function(t){return{data:Object.assign({},t.data,e)}}))},n.render=function(){return a.a.createElement(l.Provider,{value:this.state},this.props.children)},t}(a.a.Component),s=n("Wbzz"),u=n("AuzG"),f=n.n(u),d=n("xlck"),m=n.n(d),p=n("aOmW"),h=n.n(p),L=function(e){var t=e.hero,n=e.logo,o=(e.menu,n||f.a),i=Object(r.useContext)(l),c=i.data,u=c.scrollOverMenu,d=c.menuOpen,p=i.set;return a.a.createElement("header",{className:[h.a.header,t?h.a.hero:"",u?"":h.a.scrollOverMenu].join(" "),style:{backdropFilter:h.a.hero&&d?"saturate(180%) blur(20px)":""}},a.a.createElement(s.Link,{to:"/",className:h.a.logo},a.a.createElement(o,null)),a.a.createElement("label",{className:h.a.menuLabel,htmlFor:"HeaderMenu"},a.a.createElement(m.a,{fill:"#404C53"})),a.a.createElement("input",{className:h.a.menuController,type:"checkbox",id:"HeaderMenu",checked:d,onChange:function(e){return p({menuOpen:e.target.checked})}}),a.a.createElement("nav",null,a.a.createElement(s.Link,{to:"/"},"首頁"),a.a.createElement("div",null,a.a.createElement("span",null,"關於協會"),a.a.createElement("div",{className:h.a.inner},a.a.createElement(s.Link,{to:"/about/"},"協會簡介"),a.a.createElement(s.Link,{to:"/team/"},"營運團隊"))),a.a.createElement("div",null,a.a.createElement("span",null,"活動資訊"),a.a.createElement("div",{className:h.a.inner},a.a.createElement("a",{href:"https://tickets.ixda.org.tw/"},"近期活動"),a.a.createElement("a",{href:"https://medium.com/ixda-taiwan/"},"活動回顧"))),a.a.createElement(s.Link,{to:"/members/"},"會員服務"),a.a.createElement(s.Link,{to:"/services/"},"推廣服務"),a.a.createElement(s.Link,{to:"/sponsor/"},"贊助合作"),a.a.createElement(s.Link,{to:"/contact/"},"聯絡我們")))};L.defaultProps={siteTitle:""};var y=L,C=(n("XjQp"),n("SxA4")),v=n.n(C),g=n("C2Vl"),b=n.n(g),E=n("Xncv"),w=n.n(E),T=n("H3Pr"),k=n.n(T),O=n("O/3n"),x=n.n(O),A=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("footer",{className:v.a.footer},a.a.createElement("div",{className:v.a.social},a.a.createElement("a",{href:"https://m.me/ixda.tw",target:"_blank",rel:"noreferrer"},a.a.createElement(b.a,null)),a.a.createElement("a",{href:"https://fb.me/ixda.tw",target:"_blank",rel:"noreferrer"},a.a.createElement(w.a,null)),a.a.createElement("a",{href:"https://www.instagram.com/ixda_taiwan/",target:"_blank",rel:"noreferrer"},a.a.createElement(k.a,null)),a.a.createElement("a",{href:"https://medium.com/ixda-taiwan",target:"_blank",rel:"noreferrer"},a.a.createElement(x.a,null))),a.a.createElement("div",{className:v.a.copyright},"© 2020 IxDA Taiwan. All Right Reserved. Base on uxer.")))};t.a=function(e){var t,n=e.children,r=e.hero,o=e.menu,i=e.width,l=Object(s.useStaticQuery)("3649515864");return a.a.createElement(c,null,a.a.createElement(y,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",hero:r,menu:o}),r||a.a.createElement("div",{style:{height:75}}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:i||800}},a.a.createElement("main",null,n)),a.a.createElement(A,null))}},C2Vl:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"fa-brands:facebook-messenger"),r.createElement("desc",{key:1},"Created with Sketch."),r.createElement("g",{id:"Page-2",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:2},r.createElement("g",{id:"iPhone-8",transform:"translate(-97.000000, -201.000000)",fillRule:"nonzero"},r.createElement("g",{id:"fa-brands:facebook-messenger",transform:"translate(97.000000, 201.000000)"},[r.createElement("g",{id:"Icon",fill:"#FFFFFF",key:0},r.createElement("path",{d:"M16.034375,0.5 C7.2825,0.5 0.5,6.89625 0.5,15.535625 C0.5,20.054375 2.356875,23.959375 5.379375,26.656875 C5.90125,27.12625 5.79375,27.398125 5.8825,30.29625 C5.89668877,30.7084231 6.11406852,31.0868216 6.46297964,31.3067056 C6.81189077,31.5265897 7.24704763,31.5594204 7.625,31.394375 C10.931875,29.938125 10.974375,29.823125 11.535,29.975625 C21.115625,32.6125 31.5,26.48125 31.5,15.535625 C31.5,6.89625 24.786875,0.5 16.034375,0.5 Z M25.361875,12.070625 L20.799375,19.29375 C20.451077,19.8428292 19.8896522,20.2218604 19.2501794,20.3396486 C18.6107067,20.4574369 17.951078,20.3033187 17.43,19.914375 L13.8,17.1975 C13.4666667,16.9475 13.0083333,16.9475 12.675,17.1975 L7.776875,20.9125 C7.123125,21.408125 6.266875,20.625 6.7075,19.933125 L11.27,12.71 C11.6181719,12.160769 12.1796098,11.7816109 12.8191422,11.6638117 C13.4586746,11.5460124 14.1183608,11.7002445 14.639375,12.089375 L18.268125,14.805625 C18.6014583,15.055625 19.0597917,15.055625 19.393125,14.805625 L24.29375,11.094375 C24.94625,10.595625 25.8025,11.378125 25.361875,12.070625 L25.361875,12.070625 Z",id:"Icon-Shape"})),r.createElement("rect",{id:"ViewBox",x:"0",y:"0",width:"32",height:"32",key:1})])))])}a.defaultProps={width:"32px",height:"32px",viewBox:"0 0 32 32",version:"1.1"},e.exports=a,a.default=a},H3Pr:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"fa-brands:instagram"),r.createElement("desc",{key:1},"Created with Sketch."),r.createElement("g",{id:"Page-2",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:2},r.createElement("g",{id:"iPhone-8",transform:"translate(-158.000000, -202.000000)",fillRule:"nonzero"},r.createElement("g",{id:"fa-brands:instagram",transform:"translate(158.000000, 201.000000)"},[r.createElement("g",{id:"Icon",transform:"translate(0.000000, 1.000000)",fill:"#FFFFFF",key:0},r.createElement("path",{d:"M14.06875,7.8125 C10.09375,7.8125 6.8875,11.01875 6.8875,14.99375 C6.8875,18.96875 10.09375,22.175 14.06875,22.175 C18.04375,22.175 21.25,18.96875 21.25,14.99375 C21.25,11.01875 18.04375,7.8125 14.06875,7.8125 Z M14.06875,19.6625 C11.5,19.6625 9.4,17.56875 9.4,14.99375 C9.4,12.41875 11.49375,10.325 14.06875,10.325 C16.64375,10.325 18.7375,12.41875 18.7375,14.99375 C18.7375,17.56875 16.6375,19.6625 14.06875,19.6625 L14.06875,19.6625 Z M23.21875,7.51875 C23.21875,8.45 22.46875,9.19375 21.54375,9.19375 C20.6125,9.19375 19.86875,8.44375 19.86875,7.51875 C19.86875,6.59375 20.61875,5.84375 21.54375,5.84375 C22.46875,5.84375 23.21875,6.59375 23.21875,7.51875 Z M27.975,9.21875 C27.86875,6.975 27.35625,4.9875 25.7125,3.35 C24.075,1.7125 22.0875,1.2 19.84375,1.0875 C17.53125,0.95625 10.6,0.95625 8.2875,1.0875 C6.05,1.19375 4.0625,1.70625 2.41875,3.34375 C0.775,4.98125 0.26875,6.96875 0.15625,9.2125 C0.025,11.525 0.025,18.45625 0.15625,20.76875 C0.2625,23.0125 0.775,25 2.41875,26.6375 C4.0625,28.275 6.04375,28.7875 8.2875,28.9 C10.6,29.03125 17.53125,29.03125 19.84375,28.9 C22.0875,28.79375 24.075,28.28125 25.7125,26.6375 C27.35,25 27.8625,23.0125 27.975,20.76875 C28.10625,18.45625 28.10625,11.53125 27.975,9.21875 Z M24.9875,23.25 C24.5,24.475 23.55625,25.41875 22.325,25.9125 C20.48125,26.64375 16.10625,26.475 14.06875,26.475 C12.03125,26.475 7.65,26.6375 5.8125,25.9125 C4.5875,25.425 3.64375,24.48125 3.15,23.25 C2.41875,21.40625 2.5875,17.03125 2.5875,14.99375 C2.5875,12.95625 2.425,8.575 3.15,6.7375 C3.6375,5.5125 4.58125,4.56875 5.8125,4.075 C7.65625,3.34375 12.03125,3.5125 14.06875,3.5125 C16.10625,3.5125 20.4875,3.35 22.325,4.075 C23.55,4.5625 24.49375,5.50625 24.9875,6.7375 C25.71875,8.58125 25.55,12.95625 25.55,14.99375 C25.55,17.03125 25.71875,21.4125 24.9875,23.25 Z",id:"Icon-Shape"})),r.createElement("rect",{id:"ViewBox",x:"0.0625",y:"0",width:"28",height:"32",key:1})])))])}a.defaultProps={width:"29px",height:"29px",viewBox:"0 0 29 29",version:"1.1"},e.exports=a,a.default=a},"O/3n":function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"fa-brands:medium"),r.createElement("desc",{key:1},"Created with Sketch."),r.createElement("g",{id:"Page-2",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:2},r.createElement("g",{id:"iPhone-8",transform:"translate(-297.000000, -203.000000)",fillRule:"nonzero"},r.createElement("g",{id:"fa-brands:medium",transform:"translate(297.000000, 201.000000)"},[r.createElement("g",{id:"Icon",fill:"#FFFFFF",key:0},r.createElement("path",{d:"M0,2 L0,30 L28,30 L28,2 L0,2 Z M23.2625,8.63125 L21.7625,10.06875 C21.63125,10.16875 21.56875,10.33125 21.59375,10.4875 L21.59375,21.06875 C21.56875,21.23125 21.63125,21.39375 21.7625,21.4875 L23.23125,22.925 L23.23125,23.24375 L15.85625,23.24375 L15.85625,22.9375 L17.375,21.4625 C17.525,21.3125 17.525,21.26875 17.525,21.04375 L17.525,12.4875 L13.3,23.2125 L12.73125,23.2125 L7.8125,12.4875 L7.8125,19.675 C7.76875,19.975 7.875,20.28125 8.0875,20.5 L10.0625,22.89375 L10.0625,23.2125 L4.45,23.2125 L4.45,22.89375 L6.425,20.5 C6.6375,20.28125 6.73125,19.975 6.68125,19.675 L6.68125,11.3625 C6.70625,11.13125 6.61875,10.90625 6.44375,10.75 L4.6875,8.63125 L4.6875,8.3125 L10.14375,8.3125 L14.35625,17.5625 L18.0625,8.31875 L23.2625,8.31875 L23.2625,8.63125 Z",id:"Icon-Shape"})),r.createElement("rect",{id:"ViewBox",x:"0",y:"0",width:"28",height:"32",key:1})])))])}a.defaultProps={width:"28px",height:"28px",viewBox:"0 0 28 28",version:"1.1"},e.exports=a,a.default=a},SxA4:function(e,t,n){e.exports={footer:"footer-module--footer--R2bpz",social:"footer-module--social--2HcUH",copyright:"footer-module--copyright--4FyNV"}},XjQp:function(e,t,n){},Xncv:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"fa-brands:facebook-square"),r.createElement("desc",{key:1},"Created with Sketch."),r.createElement("g",{id:"Page-2",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:2},r.createElement("g",{id:"iPhone-8",transform:"translate(-222.000000, -203.000000)",fillRule:"nonzero"},r.createElement("g",{id:"fa-brands:facebook-square",transform:"translate(222.000000, 201.000000)"},[r.createElement("g",{id:"Icon",fill:"#FFFFFF",key:0},r.createElement("path",{d:"M25,2 L3,2 C1.34314575,2 0,3.34314575 0,5 L0,27 C0,28.6568542 1.34314575,30 3,30 L11.578125,30 L11.578125,20.480625 L7.640625,20.480625 L7.640625,16 L11.578125,16 L11.578125,12.585 C11.578125,8.700625 13.890625,6.555 17.4325,6.555 C19.12875,6.555 20.9025,6.8575 20.9025,6.8575 L20.9025,10.67 L18.948125,10.67 C17.0225,10.67 16.421875,11.865 16.421875,13.090625 L16.421875,16 L20.720625,16 L20.033125,20.480625 L16.421875,20.480625 L16.421875,30 L25,30 C26.6568542,30 28,28.6568542 28,27 L28,5 C28,3.34314575 26.6568542,2 25,2 L25,2 Z",id:"Icon-Path"})),r.createElement("rect",{id:"ViewBox",x:"0",y:"0",width:"28",height:"32",key:1})])))])}a.defaultProps={width:"28px",height:"28px",viewBox:"0 0 28 28",version:"1.1"},e.exports=a,a.default=a},aOmW:function(e,t,n){e.exports={header:"header-module--header--3A712",menuLabel:"header-module--menu-label--1lI9P",menuController:"header-module--menu-controller--34R9E",logo:"header-module--logo--dkMqu",inner:"header-module--inner--ymarh",hero:"header-module--hero--2glgH",scrollOverMenu:"header-module--scroll-over-menu--1Ke0T"}},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var l,c,s,u;if(Array.isArray(t)){if((l=t.length)!=i.length)return!1;for(c=l;0!=c--;)if(!e(t[c],i[c]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!e(c.value[1],i.get(c.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((l=t.length)!=i.length)return!1;for(c=l;0!=c--;)if(t[c]!==i[c])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((l=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,s[c]))return!1;if(n&&t instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!e(t[s[c]],i[s[c]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));var r,a,o,i,l=n("17x9"),c=n.n(l),s=n("8+s/"),u=n.n(s),f=n("bmMU"),d=n.n(f),m=n("q1tI"),p=n.n(m),h=n("YVoz"),L=n.n(h),y="bodyAttributes",C="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(g).map((function(e){return g[e]})),"charset"),E="cssText",w="href",T="http-equiv",k="innerHTML",O="itemprop",x="name",A="property",S="rel",M="src",P="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",F="defer",N="encodeSpecialCharacters",R="onChangeClientState",Z="titleTemplate",q=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),B=[g.NOSCRIPT,g.SCRIPT,g.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=J(e,g.TITLE),n=J(e,Z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,I);return t||r||void 0},K=function(e){return J(e,R)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return _({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],c=l.toLowerCase();-1===t.indexOf(c)||n===S&&"canonical"===e[n].toLowerCase()||c===S&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==k&&l!==E&&l!==O||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var l=o[i],c=L()({},r[l],a[l]);r[l]=c}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;ce(g.BODY,r),ce(g.HTML,a),le(f,d);var m={baseTag:se(g.BASE,n),linkTags:se(g.LINK,o),metaTags:se(g.META,i),noscriptTags:se(g.NOSCRIPT,l),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,u)},p={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),c(e,p,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(g.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[p.a.createElement(g.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+U(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case C:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===k||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),p.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===k||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+U(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:de(g.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(C,a,r),link:de(g.LINK,o,r),meta:de(g.META,i,r),noscript:de(g.NOSCRIPT,l,r),script:de(g.SCRIPT,c,r),style:de(g.STYLE,s,r),title:de(g.TITLE,{title:f,titleAttributes:d},r)}},pe=u()((function(e){return{baseTag:Q([w,P],e),bodyAttributes:G(y,e),defer:J(e,F),encode:J(e,N),htmlAttributes:G(C,e),linkTags:X(g.LINK,[S,w],e),metaTags:X(g.META,[x,b,T,A,O],e),noscriptTags:X(g.NOSCRIPT,[k],e),onChangeClientState:K(e),scriptTags:X(g.SCRIPT,[M,k],e),styleTags:X(g.STYLE,[E],e),title:V(e),titleAttributes:G(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),me)((function(){return null})),he=(a=pe,i=o=function(e){function t(){return D(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return _({},r,((t={})[n.type]=[].concat(r[n.type]||[],[_({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return _({},a,((t={})[r.type]=i,t.titleAttributes=_({},o),t));case g.BODY:return _({},a,{bodyAttributes:_({},o)});case g.HTML:return _({},a,{htmlAttributes:_({},o)})}return _({},a,((n={})[r.type]=_({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=_({},t);return Object.keys(e).forEach((function(t){var r;n=_({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(W(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),r=_({},n);return t&&(r=this.mapChildrenToProps(t,r)),p.a.createElement(a,r)},z(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.a.Component),o.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("Wbzz");function l(e){var t,n,r=e.description,l=e.lang,c=e.meta,s=e.title,u=Object(i.useStaticQuery)("63159454").site,f=r||u.siteMetadata.description,d=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return a.a.createElement(o.a,{htmlAttributes:{lang:l},title:s,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:f},{property:"og:title",content:s},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=u.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:f}].concat(c)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},xlck:function(e,t,n){var r=n("q1tI");function a(e){return r.createElement("svg",e,[r.createElement("path",{d:"M0 0h24v24H0z",fill:"none",key:0}),r.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",key:1})])}a.defaultProps={viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px"},e.exports=a,a.default=a},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-6a71612d5fc6ad33d9fc.js.map