(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{269:function(e,t,a){"use strict";a.r(t);var n=a(284),r=a.n(n),c=a(317),l=(a(134),a(277),a(129),a(126),a(81),a(5644),a(5654)),i=a(0),o=a.n(i),s=a(5721),m=a(274),u=a.n(m),h=function(e){return o.a.createElement(u.a,e,o.a.createElement("path",{d:"M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"}))},p=a(5647),_=a.n(p),d=a(5648),E=a.n(d),g=a(5649),v=a.n(g),b=a(5723),f=function(e){var t=e.result;return o.a.createElement("div",{className:v.a.search__result},o.a.createElement(l.b,{elevation:6},o.a.createElement(l.e,{avatar:o.a.createElement("a",{href:t.ownerUrl},o.a.createElement(l.a,{src:t.ownerAvatarUrl,alt:"Recipe"})),title:o.a.createElement("a",{href:t.ownerUrl},"result.ownerLogin"),subheader:"Updated "+E()(t.updatedAt).format("MMM D[,] YYYY")}),o.a.createElement(l.d,null,o.a.createElement(l.k,{variant:"h5",component:"h3",gutterBottom:!0},o.a.createElement("a",{href:t.url,target:"_blank"},t.name)),o.a.createElement(l.k,{component:"p",gutterBottom:!0},t.description)),o.a.createElement(l.c,null,o.a.createElement("a",{href:t.url,target:"_blank"},o.a.createElement(l.h,{"aria-label":"Go to repo"},o.a.createElement(h,null))),o.a.createElement(l.f,{icon:o.a.createElement(s.b,{fontSize:"small"}),label:t.stars}),o.a.createElement("div",{className:v.a["search__result__actions-right"]},t.compatibility.length?t.compatibility.split(" ").map(function(e){return o.a.createElement(l.f,{label:e})}):o.a.createElement(l.f,{label:"?"})))))},k=function(e){var t=e.lunr,a=t.index,n=t.store,r=Object(i.useState)(null),c=r[0],m=r[1],u=Object(b.a)(c,a,n),h=_.a.sortBy(Object.values(JSON.parse(n)),function(e){return e.stars}).reverse();return o.a.createElement("div",null,o.a.createElement("form",{className:v.a.search},o.a.createElement(l.j,{name:"query",fullWidth:!0,placeholder:"Search "+h.length+" plugins",variant:"outlined",InputProps:{startAdornment:o.a.createElement(l.i,{position:"start"},o.a.createElement(s.a,null)),onKeyUp:function(e){return m((t=e.target.value)?t+"*^2 *"+t+" "+t+"~1":"");var t}}})),o.a.createElement("div",{className:v.a["search__results-count"]},u.length||c&&c.length?u.length+" result"+(1===u.length?"":"s"):""),o.a.createElement("div",{className:v.a.search__results},o.a.createElement(l.g,{container:!0,spacing:40},(u.length||c&&c.length?u:h).map(function(e){return o.a.createElement(l.g,{item:!0,md:6,sm:12,xs:12,key:e.id},o.a.createElement(f,{result:e}))}))))},w=a(318),y=a(316);a.d(t,"query",function(){return M});var M="930396034";t.default=function(e){var t=e.data,a=t.site.siteMetadata;return o.a.createElement(c.a,null,o.a.createElement(r.a,null,o.a.createElement("title",null,a.title),o.a.createElement("meta",{name:"description",content:a.subtitle}),o.a.createElement("meta",{name:"image",content:a.preview}),o.a.createElement("meta",{property:"og:url",content:a.url}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:title",content:a.title}),o.a.createElement("meta",{property:"og:description",content:a.subtitle}),o.a.createElement("meta",{property:"og:image",content:a.preview}),o.a.createElement("meta",{property:"og:image:width",content:600}),o.a.createElement("meta",{property:"og:image:height",content:600}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:"@austencm"}),o.a.createElement("meta",{name:"twitter:title",content:a.title}),o.a.createElement("meta",{name:"twitter:description",content:a.subtitle}),o.a.createElement("meta",{name:"twitter:image",content:a.preview})),o.a.createElement(y.a,{isIndex:!0}),o.a.createElement(w.a,null,o.a.createElement(k,{lunr:t.localSearchPhaserPlugins})))}},285:function(e,t,a){e.exports={layout:"Layout-module--layout--3Pyz6"}},308:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},309:function(e){e.exports={data:{site:{siteMetadata:{title:"Phaser Plugins 🔌",subtitle:"Unofficial open source plugin repository for the Phaser framework",logo:"/phaser-plugins-logo.png",copyright:"",menu:[{label:"Phaser",path:"https://phaser.io"},{label:"Official plugin repo",path:"https://github.com/photonstorm/phaser-plugins"},{label:"Make a plugin",path:"https://github.com/photonstorm/phaser3-plugin-template"},{label:"Phaser FAQ",path:"https://github.com/phaser-discord/community/blob/master/FAQ.md"},{label:"More FAQ",path:"https://github.com/samme/phaser3-faq/wiki"}],author:{name:"Phaser Plugins",photo:"/phaser-plugins-logo.png",bio:"",contacts:{twitter:"",telegram:"",github:"https://github.com/austencm/phaser-plugins",email:"",rss:"",vkontakte:""}}}}}}},310:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},311:function(e,t,a){e.exports={icon:"Icon-module--icon--Gpyvw"}},312:function(e,t,a){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},313:function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1ariN"}},314:function(e,t,a){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}},315:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},316:function(e,t,a){"use strict";a(39);var n=a(309),r=a(54),c=(a(277),a(0)),l=a.n(c),i=a(310),o=a.n(i),s=function(e){var t=e.author;return l.a.createElement("div",{className:o.a.author},l.a.createElement(r.Link,{to:"/"},l.a.createElement("img",{src:t.photo,className:o.a.author__photo,width:208,height:75,alt:t.name})),l.a.createElement("h1",{className:o.a.author__title},"Unofficial open source plugin repository for the ",l.a.createElement("a",{href:"https://phaser.io",title:"Phaser"},"Phaser")," framework."),l.a.createElement("p",{className:o.a.author__subtitle}))},m=(a(126),a(81),a(347),{TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},TELEGRAM:{path:"M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z",viewBox:"0 0 28 28"},VKONTAKTE:{path:"M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z",viewBox:"0 0 31 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"}}),u=function(e){var t;switch(e){case"twitter":t=m.TWITTER;break;case"github":t=m.GITHUB;break;case"vkontakte":t=m.VKONTAKTE;break;case"telegram":t=m.TELEGRAM;break;case"email":t=m.EMAIL;break;case"rss":t=m.RSS;break;default:t={}}return t},h=function(e,t){var a;switch(e){case"twitter":a="https://www.twitter.com/"+t;break;case"github":a="https://github.com/"+t;break;case"vkontakte":a="https://vk.com/"+t;break;case"telegram":a="telegram:"+t;break;case"email":a="mailto:"+t;break;default:a=t}return a},p=a(311),_=a.n(p),d=function(e){var t=e.icon;return l.a.createElement("svg",{className:_.a.icon,viewBox:t.viewBox},l.a.createElement("path",{d:t.path}))},E=a(312),g=a.n(E),v=function(e){var t=e.contacts;return l.a.createElement("div",{className:g.a.contacts},l.a.createElement("ul",{className:g.a.contacts__list},Object.keys(t).map(function(e){return t[e]&&l.a.createElement("li",{className:g.a["contacts__list-item"],key:e},l.a.createElement("a",{className:g.a["contacts__list-item-link"],href:h(e,t[e]),rel:"noopener noreferrer",target:"_blank"},l.a.createElement(d,{icon:u(e)})))})))},b=a(313),f=a.n(b),k=function(e){e.copyright;return l.a.createElement("div",{className:f.a.copyright},"Maintained by ",l.a.createElement("a",{href:"https://github.com/austencm",title:"GitHub"},"@austencm"),".",l.a.createElement("br",null),"Contribute ",l.a.createElement("a",{href:"https://github.com/austencm/phaser-plugins"},"here"),".")},w=a(314),y=a.n(w),M=function(e){var t=e.menu;return l.a.createElement("nav",{className:y.a.menu},l.a.createElement("ul",{className:y.a.menu__list},t.map(function(e){return l.a.createElement("li",{className:y.a["menu__list-item"],key:e.path},0!==e.path.indexOf("http")?l.a.createElement(r.Link,{to:e.path,className:y.a["menu__list-item-link"],activeClassName:y.a["menu__list-item-link--active"]},e.label):l.a.createElement("a",{href:e.path,className:y.a["menu__list-item-link"]},e.label))})))},N=a(315),x=a.n(N),z=function(e){var t=e.data.site.siteMetadata,a=t.author,n=t.copyright,r=t.menu;t.logo;return l.a.createElement("div",{className:x.a.sidebar},l.a.createElement("div",{className:x.a.sidebar__inner},l.a.createElement(s,{author:a}),l.a.createElement(M,{menu:r}),l.a.createElement(v,{contacts:a.contacts}),l.a.createElement(k,{copyright:n})))},A=function(e){return l.a.createElement(r.StaticQuery,{query:"3057487076",render:function(t){return l.a.createElement(z,Object.assign({},e,{data:t}))},data:n})};a.d(t,"a",function(){return A})},317:function(e,t,a){"use strict";var n=a(284),r=a.n(n),c=a(0),l=a.n(c),i=a(285),o=a.n(i),s=function(e){var t=e.children;e.title,e.description;return l.a.createElement("div",{className:o.a.layout},l.a.createElement(r.a,null,l.a.createElement("html",{lang:"en"})),t)};a.d(t,"a",function(){return s})},318:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(308),l=a.n(c),i=function(e){var t=e.title,a=e.children,c=Object(n.useRef)();return Object(n.useEffect)(function(){c.current.scrollIntoView()}),r.a.createElement("div",{ref:c,className:l.a.page},r.a.createElement("div",{className:l.a.page__inner},t&&r.a.createElement("h1",{className:l.a.page__title},t),r.a.createElement("div",{className:l.a.page__body},a)))};a.d(t,"a",function(){return i})},5649:function(e,t,a){e.exports={search:"LunrSearch-module--search--2A0-3","search__result__actions-right":"LunrSearch-module--search__result__actions-right--1R6Oz","search__results-count":"LunrSearch-module--search__results-count--1BzyG"}}}]);
//# sourceMappingURL=component---src-templates-index-template-js-d37aed2f4dce77dbcd47.js.map