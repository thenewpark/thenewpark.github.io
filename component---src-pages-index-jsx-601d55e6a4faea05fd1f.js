(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/3mp":function(e,t,a){},"1Jpo":function(e,t,a){"use strict";var n=a("dI71"),r=a("q1tI"),s=a.n(r),o=a("Wbzz"),c=a("wd/R"),l=a.n(c),i=(a("/3mp"),function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,r=e.description,c=this.props.data.node.fields,i=c.slug,m=c.categorySlug;return s.a.createElement("div",{className:"post"},s.a.createElement("div",{className:"post__meta"},s.a.createElement("time",{className:"post__meta-time",dateTime:l()(a).format("MMMM D, YYYY")},l()(a).format("MMMM YYYY")),s.a.createElement("span",{className:"post__meta-divider"}),s.a.createElement("span",{className:"post__meta-category",key:m},s.a.createElement(o.Link,{to:m,className:"post__meta-category-link"},n))),s.a.createElement("h2",{className:"post__title"},s.a.createElement(o.Link,{className:"post__title-link",to:i},t)),s.a.createElement("p",{className:"post__description"},r),s.a.createElement(o.Link,{className:"post__readmore",to:i},"Read"))},t}(s.a.Component));t.a=i},Dtc0:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("dI71"),r=a("q1tI"),s=a.n(r),o=a("TJpk"),c=a.n(o),l=a("ntAx"),i=a("1Jpo"),m=a("kfNp"),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=[],t=this.props.data.site.siteMetadata,a=t.title,n=t.subtitle;return this.props.data.allMarkdownRemark.edges.forEach((function(t){e.push(s.a.createElement(i.a,{data:t,key:t.node.fields.slug}))})),s.a.createElement(l.a,null,s.a.createElement("div",null,s.a.createElement(c.a,null,s.a.createElement("title",null,a),s.a.createElement("meta",{name:"description",content:n}),s.a.createElement("link",{rel:"shortcut icon",href:"/photo.jpg"})),s.a.createElement(m.a,this.props),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"content__inner"},e))))},t}(s.a.Component);t.default=p;var d="1377694143"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-601d55e6a4faea05fd1f.js.map