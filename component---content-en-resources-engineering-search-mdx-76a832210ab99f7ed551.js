(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{SAEw:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));var r,o=n("zLVn"),a=(n("q1tI"),n("7ljp")),i=n("z1h2"),s={},d=(r="CTA",function(e){return console.warn("Component '"+r+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(a.mdx)("div",e)}),c={_frontmatter:s},l=i.a;function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.mdx)(l,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",null,"The Intricacies of Search"),Object(a.mdx)("p",null,"We began implementing search using Algolia, but then pivoted to Lunr. The pros were obvious:\nno server side apis, no external requests, search indexing as a part of the build process.\nIt was everything we got out of the old Algolia integration but without the need to manage yet\nanother service. The integration works well, yet it took some time to understand how the indexing\nis handled."),Object(a.mdx)("h2",null,"Why Lunr"),Object(a.mdx)("p",null,"Algolia is great, but it has limits since it's a SAAS (software as service). The indexing and tools\nthey provide are fantastic, and if this were a project that had a larger dependancy on search we'd\nconsider it. However, that's not the case. We don't need an extremely robust elastic search engine\nto index our content pages. We just need a search that meets the minimal requirements of being search."),Object(a.mdx)("p",null,"Lunr is also used widely. If you've used mkdocs or docusaurus recently then you've used Lunr."),Object(a.mdx)("h2",null,"How Lunr Indexes"),Object(a.mdx)("p",null,"Since we're using Gatsby, there's always an integration someone has built, and luckily we have\nthe gatsby-plugin-lunr that does a lot of heavy lifting for us. We provide languages and how to filternodes\nin the options oof our plugin in the ",Object(a.mdx)("inlineCode",{parentName:"p"},"gatsby-config")," like so:"),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"gatsby-config.js"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'options: {\n  languages: [\n    {\n      name: "en",\n      filterNodes: (node) =>\n        node.frontmatter !== undefined &&\n        node.fileAbsolutePath &&\n        node.fileAbsolutePath.match(\n          /\\/en\\/(?!header.mdx|index.mdx|404.mdx|.js|.json)/\n        ) !== null,\n    },\n  ];\n}\n')),Object(a.mdx)(d,{mdxType:"CTA"},Object(a.mdx)("p",null,"Here, we filter out nodes that don't have frontmatter, don't have an absolute path, and the\npath doesn't match any file at the top section of our locale like header.mdx, index.mdx, 404.mdx, ect.)")),Object(a.mdx)("p",null,"For every new locale we add, we just make sure to update it's name, and the regex match ",Object(a.mdx)("inlineCode",{parentName:"p"},"/\\/[LOCALE]\\/(?!header.mdx|index.mdx|404.mdx|.js|.json)/"),"."),Object(a.mdx)("p",null,"We also provide it with which fields to index, if they should store it, and how it should be weighted:"),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"gatsby-config.js"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'fields: [\n          { name: "title", store: true, attributes: { boost: 20 } },\n          { name: "keywords", attributes: { boost: 15 } },\n          { name: "url", store: true },\n          { name: "excerpt", store: true, attributes: { boost: 5 } },\n        ],\n')),Object(a.mdx)("p",null,"Then comes the hard part. How the fields get populated.\nWe provide Lunr with resolvers that match the key we would provide when querying through GraphQL.\nHowever, Lunr prefaces its resolvers with ",Object(a.mdx)("inlineCode",{parentName:"p"},"all"),", so ",Object(a.mdx)("inlineCode",{parentName:"p"},"Mdx")," refers too ",Object(a.mdx)("inlineCode",{parentName:"p"},"allMdx")," in GraphQL:"),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"gatsby-config.js"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"resolvers: {\n          Mdx: {\n              title: TitleConverter,\n              url: UrlConverter,\n                ...\n")),Object(a.mdx)("p",null,"Since we also have some rules around what a Title is and how the URL is provided from the data we have\n(remember, automagic) we added some util methods that take in a node and transforms its data to meet our needs (TitleConverter, UrlConverter, etc)."),Object(a.mdx)("p",null,"Providing an excerpt on search requires more work, since the excerpt is supposed to be our compiled MDX in HTML form. \\\nHowever, that doesn't happen during build time, so ",Object(a.mdx)("inlineCode",{parentName:"p"},"excerpt")," is undefined due to a timing issue with Lunr.\nThe solution is to"),Object(a.mdx)("ol",null,Object(a.mdx)("li",{parentName:"ol"},"Use the description from the frontmatter if provided, or"),Object(a.mdx)("li",{parentName:"ol"},"use the ",Object(a.mdx)("inlineCode",{parentName:"li"},"rawBody")," and parse it manually like so:")),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"gatsby-config.js"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),'excerpt: (node) => {.\n              if (node.frontmatter.description) {\n                return node.frontmatter.description;\n              }\n              const excerptLength = 136; // Hard coded excerpt length\n              let excerpt = "";\n              const tree = remark()\n                .use(remarkFrontmatter)\n                .use(removeFrontmatter)\n                .parse(node.rawBody);\n              visit(tree, "text", (node) => {\n                excerpt += node.value;\n              });\n              return `${excerpt.slice(0, excerptLength)}${\n                excerpt.length > excerptLength ? "..." : ""\n              }`;\n            },\n')))}p.isMDXComponent=!0},z1h2:function(e,t,n){"use strict";var r=n("rePB"),o=n("q1tI"),a=n("2A+t"),i=n("izhR"),s=(n("xEQ+"),n("YwZP")),d=n("tW5L"),c=n("4XhP"),l=n("/xXG"),p=n("d+M2");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.children,n=e.pageContext,m=e.uri,h=n.frontmatter,b=h.title,x=h.description,g=h.keywords,j=h.featuredImage,f=h.status,O=h.hideLanguageSelector,w=h.hideBreadcrumbs,y="object"==typeof f?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:f.text},f):{children:f},v=Object(s.useLocation)().pathname.split("/")[2],L=void 0!==v&&""!==v,N={title:b||function(){var e=o.Children.toArray(t).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||m.split("/").pop(),description:x,keywords:g,featuredImage:j};return Object(a.c)(o.Fragment,null,Object(a.c)(p.b,N),f&&Object(a.c)(i.f,{sx:{marginTop:L?2:0}},Object(a.c)(l.l,Object.assign({sticky:!0},y,{sx:{width:"100%"}}))),(!w||L&&!O)&&Object(a.c)(i.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:L?0:[3,3,0]}},!w&&Object(a.c)(c.a,null),L&&!O&&Object(a.c)(d.b,null)),Object(a.c)(i.f,{sx:L&&!O?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},t))}}}]);
//# sourceMappingURL=component---content-en-resources-engineering-search-mdx-76a832210ab99f7ed551.js.map