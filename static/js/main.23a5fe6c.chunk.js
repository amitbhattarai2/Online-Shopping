(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{116:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),l=t.n(c),o=t(6),s=t(30),u=t(71),i=t(72),m=t(19),p=t(33),E=Object(s.combineReducers)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_LIST_REQUEST":return{loading:!0,products:[]};case"PRODUCT_LIST_SUCCESS":return{loading:!1,products:a.payload};case"PRODUCT_LIST_FAIL":return{loading:!1,error:a.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{reviews:[]}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"PRODUCT_DETAILS_REQUEST":return Object(m.a)({loading:!0},e);case"PRODUCT_DETAILS_SUCCESS":return{loading:!1,product:a.payload};case"PRODUCT_DETAILS_FAIL":return{loading:!1,error:a.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CART_ADD_ITEM":var t=a.payload,n=e.cartItems.find((function(e){return e.product===t.product}));return n?Object(m.a)(Object(m.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===n.product?t:e}))}):Object(m.a)(Object(m.a)({},e),{},{cartItems:[].concat(Object(p.a)(e.cartItems),[t])});case"CART_REMOVE_ITEM":return Object(m.a)(Object(m.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==a.payload}))});default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_LOGIN_REQUEST":return{loading:!0};case"USER_LOGIN_SUCCESS":return{loading:!1,userInfo:a.payload};case"USER_LOGIN_FAIL":return{loading:!1,error:a.payload};case"USER_LOGOUT":return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1,userInfo:a.payload};case"USER_REGISTER_FAIL":return{loading:!1,error:a.payload};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_DETAILS_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{loading:!0});case"USER_DETAILS_SUCCESS":return{loading:!1,user:a.payload};case"USER_DETAILS_FAIL":return{loading:!1,error:a.payload};default:return e}},userUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_UPDATE_PROFILE_REQUEST":return{loading:!0};case"USER_UPDATE_PROFILE_SUCCESS":return{loading:!1,success:!0,userInfo:a.payload};case"USER_UPDATE_PROFILE_FAIL":return{loading:!1,error:a.payload};default:return e}}}),d={cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]},userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},f=[u.a],g=Object(s.createStore)(E,d,Object(i.composeWithDevTools)(s.applyMiddleware.apply(void 0,f))),S=(t(92),t(93),t(14)),h=t(7),v=t(121),y=t(40),b=t(128),I=t(122),O=t(127),C=t(13),_=t.n(C),L=t(23),R=t(24),U=t.n(R),j=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.userLogin})).userInfo;return r.a.createElement("header",null,r.a.createElement(b.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0},r.a.createElement(v.a,null,r.a.createElement(y.LinkContainer,{to:"/"},r.a.createElement(b.a.Brand,null,"ProShop")),r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(I.a,{className:"ml-auto"},r.a.createElement(y.LinkContainer,{to:"/cart"},r.a.createElement(I.a.Link,null,r.a.createElement("i",{className:"fas fa-shopping-cart"})," Cart")),a?r.a.createElement(O.a,{title:a.username,id:"username"},r.a.createElement(y.LinkContainer,{to:"/profile"},r.a.createElement(O.a.Item,null,"Profile")),r.a.createElement(O.a.Item,{onClick:function(){e((function(e){localStorage.removeItem("userInfo"),e({type:"USER_LOGOUT"})}))}},"Logout")):r.a.createElement(y.LinkContainer,{to:"/signin"},r.a.createElement(I.a.Link,null,r.a.createElement("i",{className:"fas fa-user"})," Sign In")))))))},T=t(123),k=t(79),w=function(){return r.a.createElement("footer",null,r.a.createElement(v.a,null,r.a.createElement(T.a,null,r.a.createElement(k.a,{className:"text-center py-3"},"Copyright \xa9 ProShop"))))},A=t(130),P=function(e){var a=e.value,t=e.text,n=e.color;return r.a.createElement("div",{className:"rating"},r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=1?"fas fa-star":a>=.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=2?"fas fa-star":a>=1.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=3?"fas fa-star":a>=2.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=4?"fas fa-star":a>=3.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,r.a.createElement("i",{style:{color:n},className:a>=5?"fas fa-star":a>=4.5?"fas fa-star-half-alt":"far fa-star"})),r.a.createElement("span",null,t&&t))};P.defaultProps={color:"#f8e825"};var D=function(e){var a=e.product;return r.a.createElement(A.a,{className:"my-3 p-3 rounded"},r.a.createElement(S.Link,{to:"/products/".concat(a.id)},r.a.createElement(A.a.Img,{src:a.image,variant:"top"})),r.a.createElement(A.a.Body,null,r.a.createElement(S.Link,{to:"/products/".concat(a.id)},r.a.createElement(A.a.Title,{as:"div"},r.a.createElement("strong",null,a.name))),r.a.createElement(A.a.Text,{as:"h3"},"$",a.price)))},N=t(129),x=function(e){var a=e.variant,t=e.children;return r.a.createElement(N.a,{variant:a},t)};x.defaultProps={variant:"info"};var G=x,F=t(124),Q=function(){return r.a.createElement(F.a,{animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"}},r.a.createElement("span",{className:"sr-only"},"Loading..."))},B=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.productList})),t=a.loading,c=a.error,l=a.products;return Object(n.useEffect)((function(){e(function(){var e=Object(L.a)(_.a.mark((function e(a){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"PRODUCT_LIST_REQUEST"}),e.next=4,U.a.get("/api/products");case 4:t=e.sent,n=t.data,a({type:"PRODUCT_LIST_SUCCESS",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),a({type:"PRODUCT_LIST_FAIL",payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}())}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Latest Products"),t?r.a.createElement(Q,null):c?r.a.createElement(G,{variant:"danger"},c):r.a.createElement(T.a,null,l.map((function(e){return r.a.createElement(k.a,{key:e.id,sm:12,md:6,lg:4,xl:3},r.a.createElement(D,{product:e}))}))))},J=t(9),M=t(125),$=t(131),q=t(126),V=t(78),W=function(e){var a=e.history,t=e.match,c=Object(n.useState)(1),l=Object(J.a)(c,2),s=l[0],u=l[1],i=Object(o.b)(),m=Object(o.c)((function(e){return e.productDetails})),E=m.loading,d=m.error,f=m.product;Object(n.useEffect)((function(){var e;i((e=t.params.id,function(){var a=Object(L.a)(_.a.mark((function a(t){var n,r;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:"PRODUCT_DETAILS_REQUEST"}),a.next=4,U.a.get("/api/products/".concat(e));case 4:n=a.sent,r=n.data,t({type:"PRODUCT_DETAILS_SUCCESS",payload:r}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:"PRODUCT_DETAILS_FAIL",payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()))}),[i,t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.Link,{className:"btn btn-light my-3",to:"/"},"Go Back"),E?r.a.createElement(Q,null):d?r.a.createElement(G,{variant:"danger"},d):r.a.createElement(T.a,null,r.a.createElement(k.a,{md:6},r.a.createElement(M.a,{src:f.image,alt:f.name,fluid:!0})),r.a.createElement(k.a,{md:3},r.a.createElement($.a,{variant:"flush"},r.a.createElement($.a.Item,null,r.a.createElement("h3",null,f.name)),r.a.createElement($.a.Item,null,"Price: $",f.price),r.a.createElement($.a.Item,null,"Description: ",f.description))),r.a.createElement(k.a,{md:3},r.a.createElement(A.a,null,r.a.createElement($.a,{variant:"flush"},r.a.createElement($.a.Item,null,r.a.createElement(T.a,null,r.a.createElement(k.a,null,"Price:"),r.a.createElement(k.a,null,r.a.createElement("strong",null,"$",f.price)))),r.a.createElement($.a.Item,null,r.a.createElement(T.a,null,r.a.createElement(k.a,null,"Status:"),r.a.createElement(k.a,null,f.countInStock>0?"In Stock":"Out Of Stock"))),f.countInStock>0&&r.a.createElement($.a.Item,null,r.a.createElement(T.a,null,r.a.createElement(k.a,null,"Qty"),r.a.createElement(k.a,null,r.a.createElement(q.a.Control,{as:"select",value:s,onChange:function(e){return u(e.target.value)}},Object(p.a)(Array(f.countInStock).keys()).map((function(e){return r.a.createElement("option",{key:e+1,value:e+1},e+1)})))))),r.a.createElement($.a.Item,null,r.a.createElement(V.a,{onClick:function(){a.push("/cart/".concat(t.params.id,"?qty=").concat(s))},className:"btn-block",type:"button",disabled:0===f.countInStock},"Add To Cart")))))))},z=function(e,a){return function(){var t=Object(L.a)(_.a.mark((function t(n,r){var c,l;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.a.get("/api/products/".concat(e));case 2:c=t.sent,l=c.data,n({type:"CART_ADD_ITEM",payload:{product:l.id,name:l.name,image:l.image,price:l.price,countInStock:l.countInStock,qty:a}}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems));case 6:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},H=function(e){var a=e.match,t=e.location,c=e.history,l=a.params.id,s=t.search?Number(t.search.split("=")[1]):1,u=Object(o.b)(),i=Object(o.c)((function(e){return e.cart})).cartItems;Object(n.useEffect)((function(){l&&u(z(l,s))}),[u,l,s]);var m=function(e){u(function(e){return function(a,t){a({type:"CART_REMOVE_ITEM",payload:e}),localStorage.setItem("cartItems",JSON.stringify(t().cart.cartItems))}}(e))};return r.a.createElement(T.a,null,r.a.createElement(k.a,{md:8},r.a.createElement("h1",null,"Shopping Cart"),0===i.length?r.a.createElement(G,null,"Your cart is empty ",r.a.createElement(S.Link,{to:"/"},"Go Back")):r.a.createElement($.a,{variant:"flush"},i.map((function(e){return r.a.createElement($.a.Item,{key:e.product},r.a.createElement(T.a,null,r.a.createElement(k.a,{md:2},r.a.createElement(M.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})),r.a.createElement(k.a,{md:3},r.a.createElement(S.Link,{to:"/products/".concat(e.product)},e.name)),r.a.createElement(k.a,{md:2},"$",e.price),r.a.createElement(k.a,{md:2},r.a.createElement(q.a.Control,{as:"select",value:e.qty,onChange:function(a){return u(z(e.product,Number(a.target.value)))}},Object(p.a)(Array(e.countInStock).keys()).map((function(e){return r.a.createElement("option",{key:e+1,value:e+1},e+1)})))),r.a.createElement(k.a,{md:2},r.a.createElement(V.a,{type:"button",variant:"light",onClick:function(){return m(e.product)}},r.a.createElement("i",{className:"fas fa-trash"})))))})))),r.a.createElement(k.a,{md:4},r.a.createElement(A.a,null,r.a.createElement($.a,{variant:"flush"},r.a.createElement($.a.Item,null,r.a.createElement("h2",null,"Subtotal (",i.reduce((function(e,a){return e+a.qty}),0),") items"),"$",i.reduce((function(e,a){return e+a.qty*a.price}),0).toFixed(2)),r.a.createElement($.a.Item,null,r.a.createElement(V.a,{type:"button",className:"btn-block",disabled:0===i.length,onClick:function(){c.push("/signin?redirect=shipping")}},"Proceed To Checkout"))))))},Y=function(e){var a=e.children;return r.a.createElement(v.a,null,r.a.createElement(T.a,{className:"justify-content-md-center"},r.a.createElement(k.a,{xs:12,md:6},a)))},K=function(e){var a=e.location,t=e.history,c=Object(n.useState)(""),l=Object(J.a)(c,2),s=l[0],u=l[1],i=Object(n.useState)(""),m=Object(J.a)(i,2),p=m[0],E=m[1],d=Object(o.b)(),f=Object(o.c)((function(e){return e.userLogin})),g=f.loading,h=f.error,v=f.userInfo,y=a.search?a.search.split("=")[1]:"/";Object(n.useEffect)((function(){v&&t.push(y)}),[t,v,y]);return r.a.createElement(Y,null,r.a.createElement("h1",null,"Sign In"),h&&r.a.createElement(G,{variant:"danger"},h),g&&r.a.createElement(Q,null),r.a.createElement(q.a,{onSubmit:function(e){e.preventDefault(),d(function(e,a){return function(){var t=Object(L.a)(_.a.mark((function t(n){var r,c,l;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"USER_LOGIN_REQUEST"}),r={headers:{"Content-Type":"application/json"}},t.next=5,U.a.post("/api/users/signin",null,{params:{username:e,password:a}},r);case 5:c=t.sent,l=c.data,n({type:"USER_LOGIN_SUCCESS",payload:l}),localStorage.setItem("userInfo",JSON.stringify(l)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:"USER_LOGIN_FAIL",payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(s,p))}},r.a.createElement(q.a.Group,{controlId:"username"},r.a.createElement(q.a.Label,null,"Username"),r.a.createElement(q.a.Control,{type:"username",placeholder:"Enter Username",value:s,onChange:function(e){return u(e.target.value)}})),r.a.createElement(q.a.Group,{controlId:"password"},r.a.createElement(q.a.Label,null,"Password Address"),r.a.createElement(q.a.Control,{type:"password",placeholder:"Enter password",value:p,onChange:function(e){return E(e.target.value)}})),r.a.createElement(V.a,{type:"submit",variant:"primary"},"Sign In")),r.a.createElement(T.a,{className:"py-3"},r.a.createElement(k.a,null,"New Customer?"," ",r.a.createElement(S.Link,{to:y?"/signup?redirect=".concat(y):"/signup"},"Register"))))},X=function(e){var a=e.location,t=e.history,c=Object(n.useState)(""),l=Object(J.a)(c,2),s=l[0],u=l[1],i=Object(n.useState)(""),m=Object(J.a)(i,2),p=m[0],E=m[1],d=Object(n.useState)(""),f=Object(J.a)(d,2),g=f[0],h=f[1],v=Object(n.useState)(""),y=Object(J.a)(v,2),b=y[0],I=y[1],O=Object(n.useState)(""),C=Object(J.a)(O,2),R=C[0],j=C[1],w=Object(n.useState)(""),A=Object(J.a)(w,2),P=A[0],D=A[1],N=Object(n.useState)(null),x=Object(J.a)(N,2),F=x[0],B=x[1],M=Object(o.b)(),$=Object(o.c)((function(e){return e.userRegister})),W=$.loading,z=$.error,H=$.userInfo,K=a.search?a.search.split("=")[1]:"/";Object(n.useEffect)((function(){H&&t.push(K)}),[t,H,K]);return r.a.createElement(Y,null,r.a.createElement("h1",null,"Sign Up"),F&&r.a.createElement(G,{variant:"danger"},F),z&&r.a.createElement(G,{variant:"danger"},z),W&&r.a.createElement(Q,null),r.a.createElement(q.a,{onSubmit:function(e){e.preventDefault(),b!==R?B("Passwords do not match"):M(function(e,a,t,n,r){return function(){var c=Object(L.a)(_.a.mark((function c(l){var o,s,u,i;return _.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,l({type:"USER_REGISTER_REQUEST"}),o={headers:{"Content-Type":"application/json"}},s=t,console.log(r),c.next=7,U.a.post("/api/users/signup",{firstname:e,lastname:a,username:s,email:t,password:n,role:r},o);case 7:u=c.sent,i=u.data,l({type:"USER_REGISTER_SUCCESS",payload:i}),l({type:"USER_LOGIN_SUCCESS",payload:i}),localStorage.setItem("userInfo",JSON.stringify(i)),c.next=17;break;case 14:c.prev=14,c.t0=c.catch(0),l({type:"USER_REGISTER_FAIL",payload:c.t0.response&&c.t0.response.data.message?c.t0.response.data.message:c.t0.message});case 17:case"end":return c.stop()}}),c,null,[[0,14]])})));return function(e){return c.apply(this,arguments)}}()}(s,p,g,b,P))}},r.a.createElement(q.a.Group,{controlId:"firstname"},r.a.createElement(q.a.Label,null,"First Name"),r.a.createElement(q.a.Control,{type:"name",placeholder:"Enter Firstname",value:s,onChange:function(e){return u(e.target.value)}})),r.a.createElement(q.a.Group,{controlId:"lastname"},r.a.createElement(q.a.Label,null,"Last Name"),r.a.createElement(q.a.Control,{type:"name",placeholder:"Enter Last Name",value:p,onChange:function(e){return E(e.target.value)}})),r.a.createElement(q.a.Group,{controlId:"email"},r.a.createElement(q.a.Label,null,"Email Address"),r.a.createElement(q.a.Control,{type:"email",placeholder:"Enter email",value:g,onChange:function(e){return h(e.target.value)}})),r.a.createElement(q.a.Group,{controlId:"password"},r.a.createElement(q.a.Label,null,"Password Address"),r.a.createElement(q.a.Control,{type:"password",placeholder:"Enter password",value:b,onChange:function(e){return I(e.target.value)}})),r.a.createElement(q.a.Group,{controlId:"confirmPassword"},r.a.createElement(q.a.Label,null,"Confirm Password"),r.a.createElement(q.a.Control,{type:"password",placeholder:"Confirm password",value:R,onChange:function(e){return j(e.target.value)}})),r.a.createElement(q.a.Group,null,r.a.createElement(q.a.Label,{as:"legend"},"Select Account Type"),r.a.createElement(k.a,null,r.a.createElement(q.a.Check,{type:"radio",label:"Vendor",id:"vendor",name:"role",value:"VENDOR",onChange:function(e){return D(e.target.value)}}),r.a.createElement(q.a.Check,{type:"radio",label:"Shopper",id:"shopper",name:"role",value:"SHOPPER",onChange:function(e){return D(e.target.value)}}))),r.a.createElement(V.a,{type:"submit",variant:"primary"},"Register")),r.a.createElement(T.a,{className:"py-3"},r.a.createElement(k.a,null,"Have an Account?"," ",r.a.createElement(S.Link,{to:K?"/signin?redirect=".concat(K):"/signin"},"Login"))))},Z=function(e){e.location;var a=e.history,t=Object(n.useState)(""),c=Object(J.a)(t,2),l=c[0],s=c[1],u=Object(n.useState)(""),i=Object(J.a)(u,2),m=i[0],p=i[1],E=Object(n.useState)(""),d=Object(J.a)(E,2),f=d[0],g=d[1],S=Object(n.useState)(""),h=Object(J.a)(S,2),v=h[0],y=h[1],b=Object(n.useState)(null),I=Object(J.a)(b,2),O=I[0],C=I[1],R=Object(o.b)(),j=Object(o.c)((function(e){return e.userDetails})),w=j.loading,A=j.error,P=j.user,D=Object(o.c)((function(e){return e.userLogin})).userInfo,N=Object(o.c)((function(e){return e.userUpdateProfile})).success;Object(n.useEffect)((function(){var e;D?P.name?(s(P.name),p(P.email)):R((e="profile",function(){var a=Object(L.a)(_.a.mark((function a(t,n){var r,c,l,o,s;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:"USER_DETAILS_REQUEST"}),r=n(),c=r.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},a.next=6,U.a.get("/api/users/".concat(e),l);case 6:o=a.sent,s=o.data,t({type:"USER_DETAILS_SUCCESS",payload:s}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),t({type:"USER_DETAILS_FAIL",payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e,t){return a.apply(this,arguments)}}())):a.push("/login")}),[R,a,D,P]);return r.a.createElement(T.a,null,r.a.createElement(k.a,{md:3},r.a.createElement("h2",null,"User Profile"),O&&r.a.createElement(G,{variant:"danger"},O),A&&r.a.createElement(G,{variant:"danger"},A),N&&r.a.createElement(G,{variant:"success"},"Profile Updated"),w&&r.a.createElement(Q,null),r.a.createElement(q.a,{onSubmit:function(e){e.preventDefault(),f!==v?C("Passwords do not match"):R(function(e){return function(){var a=Object(L.a)(_.a.mark((function a(t,n){var r,c,l,o,s;return _.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:"USER_UPDATE_PROFILE_REQUEST"}),r=n(),c=r.userLogin.userInfo,l={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},a.next=6,U.a.put("/api/users/profile",e,l);case 6:o=a.sent,s=o.data,t({type:"USER_UPDATE_PROFILE_SUCCESS",payload:s}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),t({type:"USER_UPDATE_PROFILE_FAIL",payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e,t){return a.apply(this,arguments)}}()}({id:P._id,name:l,email:m,password:f}))}},r.a.createElement(q.a.Group,{controlId:"name"},r.a.createElement(q.a.Label,null,"Name"),r.a.createElement(q.a.Control,{type:"name",placeholder:"Enter name",value:l,onChange:function(e){return s(e.target.value)}})),r.a.createElement(q.a.Group,{controlId:"email"},r.a.createElement(q.a.Label,null,"Email Address"),r.a.createElement(q.a.Control,{type:"email",placeholder:"Enter email",value:m,onChange:function(e){return p(e.target.value)}})),r.a.createElement(q.a.Group,{controlId:"password"},r.a.createElement(q.a.Label,null,"Password Address"),r.a.createElement(q.a.Control,{type:"password",placeholder:"Enter password",value:f,onChange:function(e){return g(e.target.value)}})),r.a.createElement(q.a.Group,{controlId:"confirmPassword"},r.a.createElement(q.a.Label,null,"Confirm Password"),r.a.createElement(q.a.Control,{type:"password",placeholder:"Confirm password",value:v,onChange:function(e){return y(e.target.value)}})),r.a.createElement(V.a,{type:"submit",variant:"primary"},"Update"))),r.a.createElement(k.a,{md:9},r.a.createElement("h2",null,"My Orders")))},ee=function(){return r.a.createElement(S.BrowserRouter,null,r.a.createElement(j,null),r.a.createElement("main",{className:"py-3"},r.a.createElement(v.a,null,r.a.createElement(h.d,{path:"/signin",component:K}),r.a.createElement(h.d,{path:"/signup",component:X}),r.a.createElement(h.d,{path:"/profile",component:Z}),r.a.createElement(h.d,{path:"/products/:id",component:W}),r.a.createElement(h.d,{path:"/cart/:id?",component:H}),r.a.createElement(h.d,{path:"/",component:B,exact:!0}))),r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,{store:g},r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,a,t){e.exports=t(116)},92:function(e,a,t){},93:function(e,a,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.23a5fe6c.chunk.js.map