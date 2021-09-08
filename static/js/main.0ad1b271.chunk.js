(this["webpackJsonpfood-ordering-app"]=this["webpackJsonpfood-ordering-app"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__1YBu1",control:"Checkout_control__2IkhD",actions:"Checkout_actions__20T6T",submit:"Checkout_submit__sD7rK",invalid:"Checkout_invalid__1Z-OX"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3_OZg",total:"Cart_total__JyIaV",actions:"Cart_actions__3iwlU","button--alt":"Cart_button--alt__AQn9j",button:"Cart_button__1kLez"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__23G16",summary:"CartItem_summary__h-JZM",price:"CartItem_price__3xMpU",amount:"CartItem_amount__1_Ccw",actions:"CartItem_actions__33Sbp"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1Kamc",icon:"HeaderCartButton_icon__1NDkw",badge:"HeaderCartButton_badge__3gEvD",bump:"HeaderCartButton_bump__1twMi"}},,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__3DqUx","meals-appear":"AvailableMeals_meals-appear__2CXj7",Loading:"AvailableMeals_Loading__3ryGL",Error:"AvailableMeals_Error__2Wl1v"}},function(e,t,n){e.exports={meal:"MealItem_meal__1eXTY",description:"MealItem_description__2gMJl",price:"MealItem_price__JA0QZ"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2Btt3",modal:"Modal_modal__AACWj","slide-down":"Modal_slide-down__2I10W"}},,function(e,t,n){e.exports={header:"Header_header__1AFpF","main-image":"Header_main-image__3luPX"}},,function(e,t,n){e.exports={card:"Card_card__1F2F_"}},function(e,t,n){e.exports={form:"MealItemForm_form__2IEQE"}},function(e,t,n){e.exports={input:"Input_input__2plRs"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__1sMS8"}},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),s=(n(27),n(2)),o=(n(28),n(17)),l=n.n(o),u=n.p+"static/media/meals.2971f633.jpeg",d=n(0),j=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=c.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),b=n(10),O=n.n(b),x=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useContext)(m),o=i.items,l=o.reduce((function(e,t){return e+t.amount}),0),u="".concat(O.a.button," ").concat(c&&O.a.bump);return Object(a.useEffect)((function(){if(0!==i.items.length){r(!0);var e=setTimeout((function(){r(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(d.jsxs)("button",{className:u,onClick:e.onClick,children:[Object(d.jsx)("span",{className:O.a.icon,children:Object(d.jsx)(j,{})}),Object(d.jsx)("span",{children:"Your Cart"}),Object(d.jsx)("span",{className:O.a.badge,children:l})]})},h=function(e){return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsxs)("header",{className:l.a.header,children:[Object(d.jsx)("h1",{children:"React Meals"}),Object(d.jsx)(x,{onClick:e.onShowCart})]}),Object(d.jsx)("div",{className:l.a["main-image"],children:Object(d.jsx)("img",{src:u,alt:"A Table full of delicious food"})})]})},f=n(6),p=n.n(f),_=n(4),v=n(12),C=n(13),y=n.n(C),N=n(19),g=n.n(N),A=function(e){return Object(d.jsx)("div",{className:g.a.card,children:e.children})},k=n(14),I=n.n(k),M=n(20),w=n.n(M),S=n(21),F=n.n(S),E=Object(a.forwardRef)((function(e,t){return Object(d.jsxs)("div",{className:F.a.input,children:[Object(d.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(d.jsx)("input",Object(_.a)({ref:t},e.input))]})})),H=function(e){var t=Object(a.useState)(!0),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useRef)();return Object(d.jsxs)("form",{className:w.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=+n;0===n.trim().length||a<1||a>5?r(!1):e.onAddToCart(a)},children:[Object(d.jsx)(E,{ref:i,label:"Amount",input:{id:"amount_"+e.id,type:"text",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(d.jsx)("button",{children:"+ Add"}),!c&&Object(d.jsx)("p",{children:"Please enter a valid amount"})]})},D=function(e){var t=Object(a.useContext)(m),n="$".concat(e.meal.price.toFixed(2));return Object(d.jsxs)("li",{className:I.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.meal.name}),Object(d.jsx)("div",{className:I.a.description,children:e.meal.description}),Object(d.jsx)("div",{className:I.a.price,children:n})]}),Object(d.jsx)("div",{children:Object(d.jsx)(H,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.meal.name,amount:n,price:e.meal.price})}})})]})},R=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),o=Object(s.a)(i,2),l=o[0],u=o[1],j=Object(a.useState)(null),m=Object(s.a)(j,2),b=m[0],O=m[1];if(Object(a.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){var t,n,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,fetch("https://dummymovie-96eb2-default-rtdb.firebaseio.com/meals.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch meals");case 6:return e.next=8,t.json();case 8:for(c in n=e.sent,a=[],n)a.push(Object(_.a)(Object(_.a)({},n[c]),{},{id:c}));r(a),u(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){u(!1),O(e.message)}))}),[]),l)return Object(d.jsx)("section",{className:y.a.Loading,children:Object(d.jsx)("h1",{children:"Loading..."})});if(b)return Object(d.jsx)("section",{className:y.a.Error,children:Object(d.jsx)("h1",{children:b})});var x=c.map((function(e){return Object(d.jsx)(D,{id:e.id,meal:e,children:e.name},e.id)}));return Object(d.jsx)("section",{className:y.a.meals,children:Object(d.jsx)(A,{children:Object(d.jsx)("ul",{children:x})})})},P=n(22),T=n.n(P),B=function(){return Object(d.jsxs)("section",{className:T.a.summary,children:[Object(d.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(d.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(d.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},J=function(e){return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(B,{}),Object(d.jsx)(R,{})]})},L=n(5),Y=n.n(L),z=n(15),V=n.n(z),X=function(e){return Object(d.jsx)("div",{className:V.a.backdrop,onClick:e.onClose})},Z=function(e){return Object(d.jsx)("div",{className:V.a.modal,children:Object(d.jsx)("div",{className:V.a.content,children:e.children})})},Q=function(e){var t=document.getElementById("overlays");return Object(d.jsxs)(a.Fragment,{children:[i.a.createPortal(Object(d.jsx)(X,{onClose:e.onClose}),t),i.a.createPortal(Object(d.jsx)(Z,{children:e.children}),t)]})},U=n(7),W=n.n(U),$=function(e){var t="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:W.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:W.a.summary,children:[Object(d.jsx)("span",{className:W.a.price,children:t}),Object(d.jsxs)("span",{className:W.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:W.a.actions,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},q=n(3),G=n.n(q),K=function(e){return""===e.trim()},ee=function(e){var t=Object(a.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(a.useRef)(null),o=Object(a.useRef)(null),l=Object(a.useRef)(null),u=Object(a.useRef)(null),j="".concat(G.a.control," ").concat(c.name?"":G.a.invalid),m="".concat(G.a.control," ").concat(c.street?"":G.a.invalid),b="".concat(G.a.control," ").concat(c.postalCode?"":G.a.invalid),O="".concat(G.a.control," ").concat(c.city?"":G.a.invalid);return Object(d.jsxs)("form",{className:G.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=o.current.value,c=l.current.value,s=u.current.value,d=!K(n),j=!K(a),m=!K(c)&&5===c.trim().length,b=!K(s);r({name:d,street:j,city:b,postalCode:m}),d&&j&&m&&b&&e.onConfirm({name:n,street:a,postal:c,city:s})},children:[Object(d.jsxs)("div",{className:j,children:[Object(d.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(d.jsx)("input",{type:"text",id:"name",ref:i}),!c.name&&Object(d.jsx)("p",{children:"Please enter a valid name"})]}),Object(d.jsxs)("div",{className:m,children:[Object(d.jsx)("label",{htmlFor:"street",children:"Street"}),Object(d.jsx)("input",{type:"text",id:"street",ref:o}),!c.street&&Object(d.jsx)("p",{children:"Please enter a valid street"})]}),Object(d.jsxs)("div",{className:b,children:[Object(d.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(d.jsx)("input",{type:"text",id:"postal",ref:l}),!c.postalCode&&Object(d.jsx)("p",{children:"Please enter a valid postal code"})]}),Object(d.jsxs)("div",{className:O,children:[Object(d.jsx)("label",{htmlFor:"city",children:"City"}),Object(d.jsx)("input",{type:"text",id:"city",ref:u}),!c.city&&Object(d.jsx)("p",{children:"Please enter a valid city"})]}),Object(d.jsxs)("div",{className:G.a.actions,children:[Object(d.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(d.jsx)("button",{className:G.a.submit,children:"Confirm"})]})]})},te=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),r=n[0],i=n[1],o=Object(a.useContext)(m),l="$".concat(o.totalAmount.toFixed(2)),u=o.items.length>0,j=Object(a.useState)(!1),b=Object(s.a)(j,2),O=b[0],x=b[1],h=Object(a.useState)(!1),f=Object(s.a)(h,2),_=f[0],C=f[1],y=function(e){o.removeItem(e)},N=function(e){o.addItem(e)},g=function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,fetch("https://dummymovie-96eb2-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:o.items})});case 3:x(!1),C(!0),o.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(d.jsx)("ul",{className:Y.a["cart-items"],children:o.items.map((function(e){return Object(d.jsx)($,{name:e.name,amount:e.amount,price:e.price,onRemove:y.bind(null,e.id),onAdd:N.bind(null,e)},e.id)}))}),k=Object(d.jsxs)("div",{className:Y.a.actions,children:[Object(d.jsx)("button",{className:Y.a["button--alt"],onClick:e.onHideCart,children:"Close"}),u&&Object(d.jsx)("button",{className:Y.a.button,onClick:function(){i(!0)},children:"Order"})]}),I=Object(d.jsxs)(c.a.Fragment,{children:[A,Object(d.jsxs)("div",{className:Y.a.total,children:[Object(d.jsx)("span",{children:"Total amount"}),Object(d.jsx)("span",{children:l})]}),r&&Object(d.jsx)(ee,{onConfirm:g,onCancel:e.onHideCart}),!r&&k]}),M=Object(d.jsx)("p",{children:"Sending Order Data..."}),w=Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)("p",{children:"Succesfully sent the order"}),Object(d.jsx)("div",{className:Y.a.actions,children:Object(d.jsx)("button",{className:Y.a.button,onClick:e.onHideCart,children:"Close"})})]});return Object(d.jsxs)(Q,{onClose:e.onHideCart,children:[!O&&!_&&I,O&&M,_&&w]})},ne=n(18),ae={items:[],totalAmount:0},ce=function(e,t){if("ADD"===t.type){var n,a,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){n=e.totalAmount+t.item.price;var i=Object(_.a)(Object(_.a)({},r),{},{amount:r.amount+1});(a=Object(ne.a)(e.items))[c]=i}else n=e.totalAmount+t.item.price*t.item.amount,a=e.items.concat(t.item);return{items:a,totalAmount:n}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(_.a)(Object(_.a)({},l),{},{amount:l.amount-1});(s=Object(ne.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return t.type,ae},re=function(e){var t=Object(a.useReducer)(ce,ae),n=Object(s.a)(t,2),c=n[0],r=n[1],i={items:c.items,totalAmount:c.totalAmount,addItem:function(e){r({type:"ADD",item:e})},removeItem:function(e){r({type:"REMOVE",id:e})},clearCart:function(){r({type:"CLEAR"})}};return Object(d.jsx)(m.Provider,{value:i,children:e.children})};var ie=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)(re,{children:[n&&Object(d.jsx)(te,{onHideCart:function(){c(!1)}}),Object(d.jsx)(h,{onShowCart:function(){c(!0)}}),Object(d.jsx)("main",{children:Object(d.jsx)(J,{})})]})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(ie,{})}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.0ad1b271.chunk.js.map