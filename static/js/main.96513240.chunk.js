(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(8),r=n.n(c),s=n(6),a=n(15),o=n(5),i=n(14),u="SET_TODOS",l="SET_USER",d="REMOVE_USER",j={todos:[],user:null},b=Object(i.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(o.a)(Object(o.a)({},e),{},{todos:t.payload});case l:return Object(o.a)(Object(o.a)({},e),{},{user:t.payload});case d:return Object(o.a)(Object(o.a)({},e),{},{user:null});default:return e}})),p=(n(23),n(0)),O=function(e){return e.todos},h=function(e){return e.user},f=(n(24),n(1)),x=function(){var e=Object(s.c)(h),t=Object(s.b)();return e?Object(f.jsxs)("div",{className:"CurrentUser",children:[Object(f.jsx)("h2",{className:"CurrentUser__title",children:Object(f.jsx)("span",{children:"Selected user: ".concat(e.id)})}),Object(f.jsx)("button",{type:"button",onClick:function(){t({type:d})},children:"Clear"}),Object(f.jsx)("h3",{"data-cy":"userName",className:"CurrentUser__name",children:e.name}),Object(f.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(f.jsx)("p",{className:"CurrentUser__phone",children:e.phone})]}):Object(f.jsx)("p",{children:"No user selected"})},v=n(7),m=n(3),_=n(4),y=n.n(_),N=n(12),T=n.n(N),k=(n(27),"https://mate.academy/students-api"),w=function(){var e=Object(v.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/todos"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(v.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/users/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(p.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(p.useState)(""),a=Object(m.a)(r,2),o=a[0],i=a[1],d=Object(s.b)(),j=Object(s.c)(h),b=Object(s.c)(O).filter((function(e){return e.title.includes(n)}));Object(p.useEffect)((function(){var e=function(){var e=Object(v.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,d({type:u,payload:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var x=function(){var e=Object(v.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:n=e.sent,d({type:l,payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"TodoList",children:[Object(f.jsx)("h2",{children:"Todos:"}),Object(f.jsxs)("div",{className:"TodoList__list-container",children:[Object(f.jsx)("p",{children:"Filter todos by title"}),Object(f.jsx)("input",{type:"text",value:n,"data-cy":"filterByTitle",onChange:function(e){var t=e.target;c(t.value)}}),Object(f.jsx)("p",{children:"Filter todos by status"}),Object(f.jsxs)("select",{onChange:function(e){var t=e.target;i(t.value)},children:[Object(f.jsx)("option",{value:"all",children:"All todos"}),Object(f.jsx)("option",{value:"active",children:"Active todos"}),Object(f.jsx)("option",{value:"completed",children:"Completed todos"})]}),Object(f.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:function(e){switch(o){case"active":return e.filter((function(e){return!1===e.completed}));case"completed":return e.filter((function(e){return!0===e.completed}));default:return e}}(b).map((function(e){return Object(f.jsxs)("li",{className:T()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"checkbox",readOnly:!0,checked:e.completed}),Object(f.jsx)("p",{children:e.title})]}),Object(f.jsx)("button",{className:T()("TodoList__user-button","button",{"TodoList__user-button--selected":(null===j||void 0===j?void 0:j.id)===e.userId}),type:"button",onClick:function(){x(e.userId)},children:"User #".concat(e.userId)})]},e.id)}))})]})]})},L=(n(28),function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"App__sidebar",children:Object(f.jsx)(E,{})}),Object(f.jsx)("div",{className:"App__content",children:Object(f.jsx)("div",{className:"App__content-container",children:Object(f.jsx)(x,{})})})]})}),S=function(){return Object(f.jsx)(s.a,{store:b,children:Object(f.jsx)(a.a,{children:Object(f.jsx)(L,{})})})};r.a.render(Object(f.jsx)(S,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.96513240.chunk.js.map