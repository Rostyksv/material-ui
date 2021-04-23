(this["webpackJsonpnasa-test"]=this["webpackJsonpnasa-test"]||[]).push([[0],{94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(10),s=a.n(r),c=a(58),o=a(19),i=a.n(o),l=a(37),j=a(28),d=a(32),u=a(24),p=a(138),h=a(128),b=a(136),m=a(122),x=Object(m.a)((function(e){return{about:{textIndent:"2rem",textAlign:"justify"},alert:{margin:"1rem 0 0 0"},loading:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},container:{padding:"2rem"},select:Object(j.a)({maxWidth:"200px",width:"50vw"},e.breakpoints.down("xs"),{margin:"10px",maxWidth:"300px"}),inputsContainer:Object(j.a)({display:"flex",justifyContent:"space-around"},e.breakpoints.down("xs"),{display:"flex",flexDirection:"column",alignItems:"center"}),gridContainer:{padding:"1rem"},gridItem:{height:"0",position:"relative",display:"block",paddingTop:"100%"},media:{objectFit:"cover",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"100%",height:"100%"},loadMoreBtnContainer:{padding:"1rem",display:"flex",justifyContent:"center"}}})),O=a(139),v=a(124),f=a(126),g=a(127),y=a(66),w=a.n(y),S=a(5);var C=function(){return Object(S.jsx)(v.a,{position:"relative",children:Object(S.jsxs)(f.a,{children:[Object(S.jsx)(w.a,{}),Object(S.jsx)(g.a,{variant:"h6",children:"NASA"})]})})},N=a(129),k=a(141),D=a(137),I=a(143),B=a(140),A=a(132);var M=function(e){var t=e.props,a=t.info,n=t.parameters,r=t.handleParameters,s=t.handleSubmit,c=t.loading,o=x();return c?Object(S.jsx)(p.a,{className:o.loading,children:Object(S.jsx)(h.a,{})}):Object(S.jsxs)(N.a,{className:o.container,maxWidth:"md",children:[Object(S.jsx)(g.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Mars Rover Photos"}),Object(S.jsx)(g.a,{className:o.about,variant:"h5",color:"textSecondary",paragraph:!0,children:"This website is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars. Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000."}),Object(S.jsxs)("form",{onSubmit:s,children:[Object(S.jsxs)(p.a,{className:o.inputsContainer,children:[Object(S.jsxs)("div",{children:[Object(S.jsx)(k.a,{id:"label",children:"Rover"}),Object(S.jsxs)(D.a,{className:o.select,onChange:r,labelId:"label",id:"select",name:"rover",value:n.rover,children:[Object(S.jsx)(I.a,{value:"Curiosity",children:"Curiosity"}),Object(S.jsx)(I.a,{value:"Opportunity",children:"Opportunity"}),Object(S.jsx)(I.a,{value:"Spirit",children:"Spirit"})]})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)(k.a,{id:"label",children:"Cameras"}),Object(S.jsx)(D.a,{className:o.select,onChange:r,labelId:"label",id:"select",name:"camera",value:n.camera,children:a.cameras.map((function(e,t){var a=e.name,n=e.full_name;return Object(S.jsx)(I.a,{value:a,children:n},t)}))})]}),Object(S.jsx)("div",{children:Object(S.jsx)(B.a,{className:o.select,type:"number",name:"sol",onChange:r,id:"standard-basic",label:"Sol (max - ".concat(a.max_sol,")"),inputProps:{min:0,max:a.max_sol}})})]}),Object(S.jsx)(p.a,{display:"flex",justifyContent:"center",marginTop:"1.5rem",children:Object(S.jsx)(A.a,{type:"submit",variant:"outlined",color:"primary",children:"Get pics"})})]})]})},J=a(133),W=a(134),E=a(135);var T=function(e){var t=e.props,a=t.handleLoadMore,n=t.photos,r=t.loadBtn,s=t.noDataWrn,c=x();return Object(S.jsxs)(N.a,{className:c.gridContainer,maxWidth:"xl",children:[Object(S.jsx)(J.a,{container:!0,spacing:4,justify:"center",children:n.map((function(e,t){return Object(S.jsx)(J.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(S.jsx)(W.a,{className:c.gridItem,children:Object(S.jsx)(E.a,{className:c.media,image:e.img_src,title:"space"})})},t)}))}),s&&n.length>0&&Object(S.jsx)(O.a,{className:c.alert,severity:"error",children:"There are no more photos with such parameters..."}),n&&n.length>=25&&Object(S.jsx)(p.a,{className:c.loadMoreBtnContainer,children:Object(S.jsx)(A.a,{variant:"contained",color:"primary",onClick:a,children:r?"Loading...":"Load more"})})]})},P=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/".concat(t.rover,"/photos?sol=").concat(t.sol,"&camera=").concat(t.camera,"&page=").concat(t.page,"&api_key=").concat("JDEwSWYSUAIJINraszwJSSyHzEwcBuvKkBpDoDft"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var _=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)({rover:"Curiosity",sol:0,camera:""}),o=Object(u.a)(s,2),m=o[0],v=o[1],f=Object(n.useState)([]),g=Object(u.a)(f,2),y=g[0],w=g[1],N=Object(n.useState)(1),k=Object(u.a)(N,2),D=k[0],I=k[1],B=Object(n.useState)(!0),A=Object(u.a)(B,2),J=A[0],W=A[1],E=Object(n.useState)(!1),_=Object(u.a)(E,2),z=_[0],L=_[1],H=Object(n.useState)(!1),K=Object(u.a)(H,2),R=K[0],U=K[1],Y=x();return Object(n.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),e.next=3,fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/".concat(m.rover,"?api_key=").concat("JDEwSWYSUAIJINraszwJSSyHzEwcBuvKkBpDoDft"));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),r(a.rover),W(!1);case 10:case"end":return e.stop()}}),e)})))()}),[m.rover]),Object(n.useEffect)((function(){var e=setTimeout((function(){U(!1)}),3e3);return function(){clearTimeout(e)}}),[R]),J?Object(S.jsx)(p.a,{className:Y.loading,children:Object(S.jsx)(h.a,{})}):Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(b.a,{}),Object(S.jsx)(C,{}),R&&Object(S.jsx)(O.a,{severity:"error",children:"There was no photo with the selected parameters, try to select others"}),Object(S.jsx)("main",{children:Object(S.jsxs)("div",{children:[Object(S.jsx)(M,{props:{info:a,parameters:m,handleParameters:function(e){e.preventDefault(),v(Object(d.a)(Object(d.a)({},m),{},Object(j.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault(),Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!1),W(!0),e.next=4,P(Object(d.a)(Object(d.a)({},m),{},{page:D}));case 4:t=e.sent,console.log("res",t),w(t.photos),W(!1),0===t.photos.length&&U(!0);case 9:case"end":return e.stop()}}),e)})))()},loading:J}}),Object(S.jsx)(T,{props:{handleLoadMore:function(e){e.preventDefault(),I((function(e){return e+1})),Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.next=3,P(Object(d.a)(Object(d.a)({},m),{},{page:D}));case 3:t=e.sent,console.log("res",t),w([].concat(Object(c.a)(y),Object(c.a)(t.photos))),L(!1),0===t.photos.length&&U(!0);case 8:case"end":return e.stop()}}),e)})))()},noDataWrn:R,loadBtn:z,photos:y}})]})})]})};s.a.render(Object(S.jsx)(_,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.e2fe6a9e.chunk.js.map