(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{"+q0J":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));var n,r=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("z1h2"),o={},s=(n="Indent",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.mdx)("div",e)}),l={_frontmatter:o},d=c.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.mdx)(d,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",null,"How it Works"),Object(i.mdx)("hr",null),Object(i.mdx)("p",null,"In the Maker Protocol, each collateral type has a corresponding oracle that publishes a reference price that the system uses. Each oracle consists of an ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/oracle-security-module-osm-detailed-documentation"}),"Oracle Security Module")," and a ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/median-detailed-documentation"}),"Medianizer.")," The Medianizer is sent data through a system of Feeds and relayers."),Object(i.mdx)("p",null,"Each Feed uses a tool called ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/makerdao/setzer-mcd"}),"Setzer"),", which pulls the median price from a set of exchanges and then pushes it to a ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://scuttlebot.io/more/protocols/secure-scuttlebutt.html"}),"Secure Scuttlebutt Network")," that has relayers reading from it. Relayers aggregate the price data and send a transaction to the Medianizer."),Object(i.mdx)("p",null,"The Medianizer then takes the median of the multiple reported medians and publishes it as a queued reference price. This price is then delayed by the Oracle Security Module before it is finally used by the system."),Object(i.mdx)("p",null,"Feeds may configure Setzer to pull from any exchanges of their choosing. Relayers are able to configure parameters around when to push price data to the Medianizer. Only MKR governance can configure or change the Medianizer and Oracle Security Module."),Object(i.mdx)("h2",null,"FAQs"),Object(i.mdx)(s,{pad:2,mdxType:"Indent"},Object(i.mdx)("hr",null),Object(i.mdx)("h3",null,"Why are oracles an attack target for malicious actors?"),Object(i.mdx)(s,{pad:3,mdxType:"Indent"},Object(i.mdx)("p",null,"In the Maker Protocol, if the reference price for an asset was determined by a single party, then they could fraudulently report an incorrect price and cause severe issues."),Object(i.mdx)("p",null,"For instance, if the price of ETH was reported to be fraudulently low, say $0.01, then every single ETH ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Vault")," in the system would be ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/liquidation"}),"Liquidated.")),Object(i.mdx)("p",null,"On the other hand, if the price of ETH was reported to be artificially high, say $1,000,000.00, then any ETH Vault owner would be able to issue an excessive amount of Dai since the system thinks there is more Collateral value than there actually is."),Object(i.mdx)("p",null,"Oracle attacks can be very profitable for a successful attacker and can be very disruptive to MakerDAO and its users.")),Object(i.mdx)("h3",null,"How is privacy handled?"),Object(i.mdx)(s,{pad:3,mdxType:"Indent"},Object(i.mdx)("p",null,"From their onset, the individuals running feeds have been pseudonymous out of necessity, to protect the individuals from the risk of extortion and blackmail."),Object(i.mdx)("p",null,"Pseudonymous Feeds also have the benefit of making it harder to coordinate an Oracle attack since the Feeds don’t know who the others are. Organizations running Feeds, however, are different."),Object(i.mdx)("p",null,"Organizations are much more resilient against coercion, have the resources to combat malicious actors, and have their reputations at stake. This makes them much better equipped to be Feeds with public identities. A hybrid model is optimal, one that incorporates the benefits of both individual and organizational Feeds.")),Object(i.mdx)("h3",null,"Is the oracle system Sybil-resistant?"),Object(i.mdx)(s,{pad:3,mdxType:"Indent"},Object(i.mdx)("p",null,"Yes, the oracle system is resistant to Sybil attacks. The system uses a whitelist for feeds and becoming a feed requires approval by MKR governance. Therefore, an attacker cannot gain a majority influence by creating many pseudo-feeds."),Object(i.mdx)("p",null,'"In a Sybil attack, the attacker subverts the reputation system of a peer-to-peer network by creating a large number of pseudonymous identities, using them to gain a disproportionately large influence. A reputation system\'s vulnerability to a Sybil attack depends on how cheaply identities can be generated, the degree to which the reputation system accepts inputs from entities that do not have a chain of trust linking them to a trusted entity, and whether the reputation system treats all entities identically." - ',Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Sybil_attack"}),"Wikipedia"))),Object(i.mdx)("h3",null,"What happens if an exchange experiences a flash crash?"),Object(i.mdx)(s,{pad:3,mdxType:"Indent"},Object(i.mdx)("p",null,"The reference price published by the Oracles is a median of the median prices reported by at least 20 different Feeds, outliers are automatically filtered out."),Object(i.mdx)("p",null,"In practice, this means if a single exchange experiences a flash crash the set of prices will look something like this:"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"[0.70, 104.80, 104.82, **104.88**, 104.90, 105.02, 105.04]")),Object(i.mdx)("p",null,"The median of this set still reflects the real market price of the asset. Flash crashes on single exchanges do not affect the published reference price.")),Object(i.mdx)("h3",null,"Can MakerDAO governance change the time of the Oracle Security Module’s delay?"),Object(i.mdx)(s,{pad:3,mdxType:"Indent"},Object(i.mdx)("p",null,"Yes. This parameter is called the ",Object(i.mdx)("inlineCode",{parentName:"p"},"Oracle Security Module Delay")," and can be adjusted by MKR token holders."))))}p.isMDXComponent=!0},z1h2:function(e,t,a){"use strict";var n=a("rePB"),r=a("q1tI"),i=a("2A+t"),c=a("izhR"),o=a("xEQ+"),s=a.n(o),l=a("Wbzz"),d=a("YwZP"),p=a("4XhP"),u=a("tW5L"),h=a("/xXG"),m=a("C9jn"),b=a("d+M2"),f=a("Al62");function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}t.a=function(e){var t=Object(u.d)(),a=t.locale,o=t.t,y=t.DEFAULT_LOCALE,j=Object(l.useStaticQuery)("955314892").allMdx,g=e.children,x=e.pageContext,k=e.uri,v=x.pagePath,w=x.frontmatter,M=w.title,T=w.description,P=w.keywords,S=w.featuredImage,z=w.status,I=w.hideLanguageSelector,D=w.hideBreadcrumbs,F=v.replace(/^\/|\/$/g,"").split("/").slice(1),A=F.join("/"),E=Object(m.a)(j.edges,F[0],y,a,F),C=E.sidenavData,q=E.breadcrumbData,L=j.edges.filter((function(e){var t=e.node;return Object(f.c)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===A&&Object(f.g)(t.fileAbsolutePath)!==a})).map((function(e){var t=e.node;return{value:Object(f.c)(t),label:o("Language",null,null,Object(f.g)(t.fileAbsolutePath))}})),N="object"==typeof z?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({children:z.text},z):{children:z},H=Object(d.useLocation)().pathname.split("/")[2],W=M||function(){var e=r.Children.toArray(g).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||k.split("/").pop(),R=void 0!==H&&""!==H,X=x.frontmatter&&!x.frontmatter.hideSidenav&&R,$=R&&!I,_=!D||R&&!I,B={title:W,description:T,keywords:P,featuredImage:S},J=$?234:0;return X&&(J+=256),Object(i.c)(r.Fragment,null,X&&Object(i.c)(c.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(i.c)(s.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(i.c)(p.g,{data:C,currentPath:v}))),Object(i.c)(c.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+J+"px)"],mt:R?[4,4,"59px"]:0,pl:R?[4,4,"64px"]:0,pr:R?[4,4,0]:0,pb:4}},Object(i.c)(b.c,B),z&&Object(i.c)(c.f,{sx:{marginTop:R?2:0}},Object(i.c)(h.l,Object.assign({sticky:!0},N,{sx:{width:"100%"}}))),_&&Object(i.c)(c.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:R?0:[3,3,0]}},Object(i.c)(p.a,{data:q,pathDirs:F})),Object(i.c)(c.f,{sx:{display:["block","block","none"]}},$&&Object(i.c)(u.b,{data:L,pagePath:v})),Object(i.c)(c.f,null,g)),Object(i.c)(c.f,{sx:{display:["none","none","block"]}},$&&Object(i.c)(u.b,{data:L,pagePath:v})),Object(i.c)(p.e,{sidenavData:C}))}}}]);
//# sourceMappingURL=component---content-en-learn-oracles-how-it-works-mdx-dce0747a27e431929246.js.map