(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{CwCT:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return s}));var r=a("zLVn"),n=(a("q1tI"),a("7ljp")),o=a("z1h2"),c={},i={_frontmatter:c},l=o.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.mdx)(l,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("h1",null,"Security"),Object(n.mdx)("h3",null,"How the Maker Protocol handles the security of oracles"),Object(n.mdx)("p",null,"The oracle system for the Maker Protocol uses decentralized reporting to defend against fraudulent price data."),Object(n.mdx)("p",null,"There are multiple organizations and individuals who report price-data, they are called Feeds."),Object(n.mdx)("p",null,"At the launch of Multi-Collateral Dai, oracles received data from a total of 20 Feeds which consisted of 15 individuals and five public organizations."),Object(n.mdx)("p",null,"Oracles use the median of the reported prices for each asset as the reference price. Using a median instead of an average makes it harder to manipulate the reference price since control over half of the data providers is needed in order for a fraudulent price to be pushed through."),Object(n.mdx)("p",null,"Additionally, using a median naturally filters out irregular price data."),Object(n.mdx)("h2",null,"Feeds"),Object(n.mdx)("p",null,"Feeds are a mix of pseudonymous individuals and public organizations. Individuals consist of people internal to Maker, influential people in the greater crypto community, as well as some community members."),Object(n.mdx)("p",null,"Organizations involved in being Feeds at the launch of MCD can be found in the ratified ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://vote.makerdao.com/polling-proposal/qmpem83sxjjwe1jvn2csdtetn4r3j95ejuzpbmtxef4lu5"}),"DeFi Feeds proposal.")),Object(n.mdx)("h2",null,"Becoming a Feed"),Object(n.mdx)("p",null,"All new Feeds go through ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://community-development.makerdao.com/governance/governance"}),"MakerDAO’s governance")," in order to be added in. There is currently no formal way for Feeds to be added to the Maker Protocol. "),Object(n.mdx)("p",null,"As of October 7th, 2019, the ratified ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://vote.makerdao.com/polling-proposal/qmas1bqrquo2h41qv4fa8hpek9ukb7dlwtpkpn62r5hhmq"}),"Oracle Team Mandate")," grants the Interim Oracle Team the responsibility of being the intermediary between the Feeds and governance. In the coming months, the process of becoming a Feed will become more clear."),Object(n.mdx)("h2",null,"Oracle Security Module"),Object(n.mdx)("p",null,"The ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/oracle-security-module-osm-detailed-documentation"}),"Oracle Security Module(OSM)")," safeguards the process by delaying price-feed data for one hour."),Object(n.mdx)("p",null,"Oracle Security Modules (OSMs) delay the publishing of new reference prices for a predefined set of time. This parameter is called the Oracle Security Module Delay and was set to be one hour at the launch of MCD. "),Object(n.mdx)("p",null,"This allows ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/governance/mkrtokens.mdx"}),"MKR token")," holders and other stakeholders the time to react to bugs or attacks on the Oracles. An OSM is active on each Oracle in the Maker Protocol."),Object(n.mdx)("p",null,"This allows MKR governors and other stakeholders the time to identify bugs or attacks on the price-feed system. An OSM is active on all Oracles in the Maker Protocol."),Object(n.mdx)("h2",null,"Medianizer"),Object(n.mdx)("p",null,"A Medianizer is a type of smart-contract in the Maker Protocol’s Oracle system that collects price-data from Feeds and calculates a reference price by calculating a median."),Object(n.mdx)("p",null,"The Medianizer maintains a white-list of Feeds that can be controlled by MakerDAO governance. Every time a new set of price updates is received, the reference price is recalculated and queued into the Oracle Security Module which publishes the price after a delay period."),Object(n.mdx)("p",null,"Each time a relayer pushes a new set of medians to a Medianizer, it recalculates the median and updates the queued reference price in the Oracle Security Module(OSM). The OSM applies a time-delay and acts as the final publisher of the reference price."),Object(n.mdx)("p",null,"For technical documentation, please visit the ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/median-detailed-documentation"}),"Medianizer")," section of our ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/"}),"Documentation Portal.")),Object(n.mdx)("h2",null,"Secure Scuttlebutt Network"),Object(n.mdx)("p",null,"Secure Scuttlebutt is a database protocol for unforgeable append-only message feeds. For more information on how a Secure Scuttlebutt Network works visit this ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://scuttlebot.io/more/protocols/secure-scuttlebutt.html"}),"informative page")," on ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://scuttlebot.io/"}),"scuttlebot.io.")))}s.isMDXComponent=!0},z1h2:function(e,t,a){"use strict";var r=a("rePB"),n=a("q1tI"),o=a("2A+t"),c=a("izhR"),i=(a("xEQ+"),a("YwZP")),l=a("tW5L"),s=a("4XhP"),d=a("/xXG"),p=a("d+M2");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}t.a=function(e){var t=e.children,a=e.pageContext,m=e.uri,h=a.frontmatter,b=h.title,f=h.description,O=h.keywords,j=h.featuredImage,g=h.status,y=h.hideLanguageSelector,x=h.hideBreadcrumbs,v="object"==typeof g?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({children:g.text},g):{children:g},w=Object(i.useLocation)().pathname.split("/")[2],k=void 0!==w&&""!==w,M={title:b||function(){var e=n.Children.toArray(t).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||m.split("/").pop(),description:f,keywords:O,featuredImage:j};return Object(o.c)(n.Fragment,null,Object(o.c)(p.b,M),g&&Object(o.c)(c.f,{sx:{marginTop:k?2:0}},Object(o.c)(d.l,Object.assign({sticky:!0},v,{sx:{width:"100%"}}))),(!x||k&&!y)&&Object(o.c)(c.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:k?0:[3,3,0]}},!x&&Object(o.c)(s.a,null),k&&!y&&Object(o.c)(l.b,null)),Object(o.c)(c.f,{sx:k&&!y?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},t))}}}]);
//# sourceMappingURL=component---content-en-learn-oracles-security-mdx-dd87c25c94d4bd848923.js.map