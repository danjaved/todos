(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(4),s=a.n(c),l=(a(9),a(2)),d=(a(10),a(0)),i=function(e){return Object(d.jsxs)("div",{className:" mx-auto my-3 card shadow rounded rounded-3 bg-transparent text-dark col-9 col-lg-4 text-center",children:[Object(d.jsx)("div",{className:"h4 lead text-capitalize fw-bold card-header",children:e.todoItem.title}),Object(d.jsx)("div",{className:"card-body   ",children:Object(d.jsx)("div",{className:"lead mb-3",children:e.todoItem.description})}),Object(d.jsx)("div",{className:"card-footer  ",children:Object(d.jsx)("button",{className:"btn btn-sm btn-outline-dark mx-auto",onClick:function(){return e.onDelete(e.todoItem)},children:"Done"})})]})};function r(e){var t=Object(d.jsx)("div",{className:"d-flex flex-column align-items-center ",children:e.todos.map((function(t){return Object(d.jsx)(i,{todoItem:t,onDelete:e.onDelete},t.srNo)}))}),a=Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"text-center display-5",children:"All Done Bro !!"})});return 0!==e.todos.length?t:a}function m(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark text-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("div",{className:"navbar-brand",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(d.jsxs)("ul",{className:"navbar-nav",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("span",{className:"nav-link",to:"/about",children:"Dummy Link"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("span",{className:"nav-link",to:"/about",children:"Another Dummy Link"})})]})})]})})}m.defaultProps={title:"Tite Here"};var b=function(e){var t=Object(d.jsx)("div",{className:"bg-dark position-relative w-100 pb-3 pt-1 text-light  text-center",children:"Copyright \xa9 MyToDos.com  "});return Object(d.jsx)("div",{children:e.visible?t:"Footer not available"})},u=a.p+"static/media/love-popup.d7aa7b90.png",j=a.p+"static/media/like-icon.a4a4fccb.png",v=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(""),i=Object(l.a)(s,2),r=i[0],m=i[1],b=Object(n.useState)(!0),v=Object(l.a)(b,2),g=v[0],h=v[1],x=Object(d.jsx)("img",{id:"loveImage",src:j,alt:" not found",className:"d-none  height-250  "}),p=Object(d.jsx)("img",{id:"lovePopUpImage",src:u,alt:" not found",className:"d-none "}),O=Object(d.jsxs)("form",{id:"addToDoForm",className:"  mx-auto my-3 card shadow rounded rounded-3 bg-transparent text-center my-auto postion-absolute",children:[Object(d.jsxs)("div",{className:"d-flex justify-content-center ",children:[x,p]}),Object(d.jsx)("div",{id:"loveContainer",className:"d-none height float-start"}),Object(d.jsx)("div",{className:"card-header",children:Object(d.jsx)("input",{type:"text",className:"h4 lead text-center text-capitalize fw-bold border-0  bg-transparent",id:"title",placeholder:"Enter Title",value:o,onChange:function(e){c(e.target.value)}})}),Object(d.jsx)("div",{className:"card-body p-2  ",children:Object(d.jsx)("textarea",{type:"textarea",className:"col-12 bg-transparent lead text-center border-0",id:"description",placeholder:"Enter Description",value:r,onChange:function(e){m(e.target.value)}})}),Object(d.jsx)("div",{className:"card-footer p-2  ",children:Object(d.jsx)("button",{className:"btn btn-sm btn-outline-dark mx-auto",type:"submit",onClick:function(t){t.preventDefault(),!function(e){return"bWFoaW1h"===window.btoa(e.toLowerCase())}(o)||r?o&&r?(e.onAdd({title:o,description:r}),c(""),m("")):alert("Enter Title and Description both"):g&&(h(!1),document.getElementById("loveImage").classList.remove("d-none"),document.getElementById("loveImage").classList.add("animatedLove"),document.getElementById("lovePopUpImage").classList.remove("d-none"),document.getElementById("lovePopUpImage").classList.add("popout"),document.getElementById("addToDoForm").classList.add("addToDoForm"),document.getElementById("todos_container").classList.add("d-none"),document.getElementById("todos_container").classList.add("d-md-block"),document.body.classList.add("colorShift"),setTimeout((function(){document.getElementById("loveImage").classList.add("d-none"),document.getElementById("loveImage").classList.remove("animatedLove"),document.getElementById("lovePopUpImage").classList.add("d-none"),document.getElementById("lovePopUpImage").classList.remove("popout"),document.getElementById("addToDoForm").classList.remove("addToDoForm"),document.getElementById("todos_container").classList.remove("d-none"),document.getElementById("todos_container").classList.remove("d-md-block"),document.body.classList.remove("colorShift"),h(!0)}),5e3))},children:"Add To Do"})})]});return O};var g=function(){var e=[];localStorage.getItem("todos")&&(e=JSON.parse(localStorage.getItem("todos")));var t=Object(n.useState)(e),a=Object(l.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(d.jsxs)("div",{className:"App max-height-100-vh overflow-hidden",children:[Object(d.jsx)(m,{title:"ToDos List",onClear:function(){c(o.filter((function(e){return null})))},onReset:function(){c(e)}}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row height-87-vh ",children:[Object(d.jsx)("div",{className:"col-lg-3 col-10 mx-auto my-lg-auto my-5",children:Object(d.jsx)(v,{onAdd:function(e){null!=e&&o.length>0?e.srNo=o[o.length-1].srNo+1:e.srNo=1,c(o.concat(e))}})}),Object(d.jsx)("div",{id:"todos_container",className:"col-lg-9 col-12 mx-auto my-lg-auto"+(o.length>1?" overflow-auto toDOsDisplay  my-5":""),children:Object(d.jsx)(r,{todos:o,onDelete:function(e){c(o.filter((function(t){return t!==e})))}})})]})}),Object(d.jsx)(b,{visible:!0})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),o(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);