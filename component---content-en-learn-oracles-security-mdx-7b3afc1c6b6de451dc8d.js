(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{CwCT:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n,r=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("z1h2"),i={},l=(n="Indent",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.mdx)("div",e)}),d={_frontmatter:i},s=c.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.mdx)(s,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Security"),Object(o.mdx)("hr",null),Object(o.mdx)("h3",null,"How the Maker Protocol handles the security of oracles"),Object(o.mdx)("p",null,"The oracle system for the Maker Protocol uses decentralized reporting to defend against fraudulent price data."),Object(o.mdx)("p",null,"There are multiple organizations and individuals who report price-data, they are called Feeds."),Object(o.mdx)("p",null,"At the launch of Multi-Collateral Dai, oracles received data from a total of 20 Feeds which consisted of 15 individuals and five public organizations."),Object(o.mdx)("p",null,"Oracles use the median of the reported prices for each asset as the reference price. Using a median instead of an average makes it harder to manipulate the reference price since control over half of the data providers is needed in order for a fraudulent price to be pushed through."),Object(o.mdx)("p",null,"Additionally, using a median naturally filters out irregular price data."),Object(o.mdx)("h2",null,"Feeds"),Object(o.mdx)(l,{pad:2,mdxType:"Indent"},Object(o.mdx)("p",null,"Feeds are a mix of pseudonymous individuals and public organizations. Individuals consist of people internal to Maker, influential people in the greater crypto community, as well as some community members."),Object(o.mdx)("p",null,"Organizations involved in being Feeds at the launch of MCD can be found in the ratified ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://vote.makerdao.com/polling-proposal/qmpem83sxjjwe1jvn2csdtetn4r3j95ejuzpbmtxef4lu5"}),"DeFi Feeds proposal."))),Object(o.mdx)("h2",null,"Becoming a Feed"),Object(o.mdx)(l,{pad:2,mdxType:"Indent"},Object(o.mdx)("p",null,"All new Feeds go through ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://community-development.makerdao.com/governance/governance"}),"MakerDAO’s governance")," in order to be added in. There is currently no formal way for Feeds to be added to the Maker Protocol. "),Object(o.mdx)("p",null,"As of October 7th, 2019, the ratified ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://vote.makerdao.com/polling-proposal/qmas1bqrquo2h41qv4fa8hpek9ukb7dlwtpkpn62r5hhmq"}),"Oracle Team Mandate")," grants the Interim Oracle Team the responsibility of being the intermediary between the Feeds and governance. In the coming months, the process of becoming a Feed will become more clear.")),Object(o.mdx)("h2",null,"Oracle Security Module"),Object(o.mdx)(l,{pad:2,mdxType:"Indent"},Object(o.mdx)("p",null,"The ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/oracle-security-module-osm-detailed-documentation"}),"Oracle Security Module(OSM)")," safeguards the process by delaying price-feed data for one hour."),Object(o.mdx)("p",null,"Oracle Security Modules (OSMs) delay the publishing of new reference prices for a predefined set of time. This parameter is called the Oracle Security Module Delay and was set to be one hour at the launch of MCD. "),Object(o.mdx)("p",null,"This allows ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/governance/mkrtokens.mdx"}),"MKR token")," holders and other stakeholders the time to react to bugs or attacks on the Oracles. An OSM is active on each Oracle in the Maker Protocol."),Object(o.mdx)("p",null,"This allows MKR governors and other stakeholders the time to identify bugs or attacks on the price-feed system. An OSM is active on all Oracles in the Maker Protocol.")),Object(o.mdx)("h2",null,"Medianizer"),Object(o.mdx)(l,{pad:2,mdxType:"Indent"},Object(o.mdx)("p",null,"A Medianizer is a type of smart-contract in the Maker Protocol’s Oracle system that collects price-data from Feeds and calculates a reference price by calculating a median."),Object(o.mdx)("p",null,"The Medianizer maintains a white-list of Feeds that can be controlled by MakerDAO governance. Every time a new set of price updates is received, the reference price is recalculated and queued into the Oracle Security Module which publishes the price after a delay period."),Object(o.mdx)("p",null,"Each time a relayer pushes a new set of medians to a Medianizer, it recalculates the median and updates the queued reference price in the Oracle Security Module(OSM). The OSM applies a time-delay and acts as the final publisher of the reference price."),Object(o.mdx)("p",null,"For technical documentation, please visit the ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/median-detailed-documentation"}),"Medianizer")," section of our ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/"}),"Documentation Portal."))),Object(o.mdx)("h2",null,"Secure Scuttlebutt Network"),Object(o.mdx)(l,{pad:2,mdxType:"Indent"},Object(o.mdx)("p",null,"Secure Scuttlebutt is a database protocol for unforgeable append-only message feeds. For more information on how a Secure Scuttlebutt Network works visit this ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://scuttlebot.io/more/protocols/secure-scuttlebutt.html"}),"informative page")," on ",Object(o.mdx)("a",Object.assign({parentName:"p"},{href:"https://scuttlebot.io/"}),"scuttlebot.io."))))}p.isMDXComponent=!0},z1h2:function(e,t,a){"use strict";var n=a("rePB"),r=a("q1tI"),o=a("2A+t"),c=a("izhR"),i=a("xEQ+"),l=a.n(i),d=a("Wbzz"),s=a("YwZP"),p=a("4XhP"),u=a("tW5L"),m=a("/xXG"),b=a("C9jn"),h=a("d+M2"),O=a("Al62");function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}t.a=function(e){var t=Object(u.d)(),a=t.locale,i=t.t,j=t.DEFAULT_LOCALE,g=Object(d.useStaticQuery)("955314892").allMdx,x=e.children,y=e.pageContext,v=e.uri,w=y.pagePath,k=y.frontmatter,M=k.title,P=k.description,S=k.keywords,T=k.featuredImage,D=k.status,F=k.hideLanguageSelector,z=k.hideBreadcrumbs,A=w.replace(/^\/|\/$/g,"").split("/").slice(1),I=A.join("/"),C=Object(b.a)(g.edges,A[0],j,a,A),N=C.sidenavData,q=C.breadcrumbData,L=g.edges.filter((function(e){var t=e.node;return Object(O.c)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===I&&Object(O.g)(t.fileAbsolutePath)!==a})).map((function(e){var t=e.node;return{value:Object(O.c)(t),label:i("Language",null,null,Object(O.g)(t.fileAbsolutePath))}})),E="object"==typeof D?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({children:D.text},D):{children:D},X=Object(s.useLocation)().pathname.split("/")[2],B=M||function(){var e=r.Children.toArray(x).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||v.split("/").pop(),H=void 0!==X&&""!==X,W=y.frontmatter&&!y.frontmatter.hideSidenav&&H,R=H&&!F,U=!z||H&&!F,_={title:B,description:P,keywords:S,featuredImage:T},J=R?234:0;return W&&(J+=256),Object(o.c)(r.Fragment,null,W&&Object(o.c)(c.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(o.c)(l.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(o.c)(p.g,{data:N,currentPath:w}))),Object(o.c)(c.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+J+"px)"],mt:H?[4,4,"59px"]:0,pl:H?[4,4,"64px"]:0,pr:H?[4,4,0]:0,pb:4}},Object(o.c)(h.c,_),D&&Object(o.c)(c.f,{sx:{marginTop:H?2:0}},Object(o.c)(m.l,Object.assign({sticky:!0},E,{sx:{width:"100%"}}))),U&&Object(o.c)(c.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:H?0:[3,3,0]}},Object(o.c)(p.a,{data:q,pathDirs:A})),Object(o.c)(c.f,{sx:{display:["block","block","none"]}},R&&Object(o.c)(u.b,{data:L,pagePath:w})),Object(o.c)(c.f,null,x)),Object(o.c)(c.f,{sx:{display:["none","none","block"]}},R&&Object(o.c)(u.b,{data:L,pagePath:w})),Object(o.c)(p.e,{sidenavData:N}))}}}]);
//# sourceMappingURL=component---content-en-learn-oracles-security-mdx-7b3afc1c6b6de451dc8d.js.map