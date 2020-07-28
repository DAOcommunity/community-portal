(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{GRRF:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return f}));var o=t("zLVn"),a=(t("q1tI"),t("7ljp")),i=t("z1h2"),c={},s=function(e){return function(n){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(a.mdx)("div",n)}},m=s("Aligner"),r=s("Image"),l=s("Column"),d=s("Box"),h=s("Chocolate"),p=s("Icon"),u=s("Categories"),x=s("StatusBanner"),b=s("Tout"),g=s("Link"),O=s("InfoBlock"),j={_frontmatter:c},y=i.a;function f(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.mdx)(y,Object.assign({},j,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("h1",null,"Advanced"),Object(a.mdx)("p",null,"We finished our intermediate tutorial with the ",Object(a.mdx)("inlineCode",{parentName:"p"},"<Box>")," - a basic element that behaves like an html\n",Object(a.mdx)("inlineCode",{parentName:"p"},"<div>")," and allows us to have many new lines, a.k.a. ",Object(a.mdx)("strong",{parentName:"p"},"children"),", behave like one child when rendered as\na React component. Now it's time to see the advantage of this pattern when creating more complicated, visual\ncomponents which you could not dream of in normal md."),Object(a.mdx)("h2",null,"Returning to images"),Object(a.mdx)("p",null,"When we first showed you how to use images in the basic tutorial, we did not add any props. Thus, there was a\nslight visual issue with the bottom margin, and the image is always left-aligned. Now it's time to fix that.\nImages on the web are a whole rabbit hole, and Gatsby uses a specific plugin - ",Object(a.mdx)("inlineCode",{parentName:"p"},"gatsby-remark-images")," - to process\nand load things extra quickly. Unfortunately, this means it wraps our images and we don't really want to hack around\nin that to get center-alignment or any of the other good things our designers desire. So, we have a wrapper component of\nour own called ",Object(a.mdx)("inlineCode",{parentName:"p"},"<Aligner>"),"."),Object(a.mdx)("p",null,"The reason we're only introducing it now is because using it requires understanding a few things about DAI-ui - the\ntheme library we're using - and how it can be used to style React components. Without getting too technical, there is\nsomething called ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://theme-ui.com/sx-prop"}),"emotion css"),", which allows us to style our components inline by adding another prop called ",Object(a.mdx)("inlineCode",{parentName:"p"},"sx"),". Just\nlike ",Object(a.mdx)("inlineCode",{parentName:"p"},"mdx")," extends ",Object(a.mdx)("inlineCode",{parentName:"p"},"md"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"sx")," extends the possible ",Object(a.mdx)("inlineCode",{parentName:"p"},"styles"),". The variety of ways in which you can use ",Object(a.mdx)("inlineCode",{parentName:"p"},"sx")," is almost endless,\nso check out our cheatsheet for some basic starting points, and then dive into the beauty that is DAI-ui."),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"aligned-image.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<Aligner center sx={{marginBottom: 4}}>\n\n<Image src="../../../images/starfox.png"/>\n\n</Aligner>\n')),Object(a.mdx)("p",null,"Will give us both a centred image, as well as a better margin beneath it:"),Object(a.mdx)(m,{center:!0,sx:{marginBottom:4},mdxType:"Aligner"},Object(a.mdx)(r,{src:"../../../images/starfox.png",mdxType:"Image"})),Object(a.mdx)("p",null,"We use the prop ",Object(a.mdx)("inlineCode",{parentName:"p"},"center")," here, though there are others available to you, listed in the cheatsheet."),Object(a.mdx)("p",null,"You could have specified ",Object(a.mdx)("inlineCode",{parentName:"p"},'sx={{marginBottom: "10px"}}'),", but the ",Object(a.mdx)("inlineCode",{parentName:"p"},"4")," here indicates a preset from DAI-ui -\nwhich you can also find in the gatsby-plugin-theme-ui index file - which helps\nensure that all our margins and padding through the site remain the same, without having to change each individual\ncomponent. So, if you are going to add you own styles, the best practice is to ensure you use the correct preset.\nYou can find a list of presents and their associated values on the cheat sheet page too."),Object(a.mdx)("p",null,"Here is the critical point: ",Object(a.mdx)("strong",{parentName:"p"},"You can add whatever style you like to your components"),". You actually\nhave ",Object(a.mdx)("strong",{parentName:"p"},"complete control as a content creator")," over how your content appears, without ever needing a nerdy developer\nto come and insert stuff for you. Congratulations, you are now a junior front-end developer!"),Object(a.mdx)("h2",null,"Arranging Content Visually"),Object(a.mdx)("p",null,"Sometimes we'll want to split out content up into visual chunks to make it easier for\nreaders to process and understand at a glance. Enter Columns, Chocolate Boxes, Categories, Touts, and InfoBlocks. "),Object(a.mdx)("h3",null,"Column"),Object(a.mdx)("p",null,'The column is a great example of where it is almost always necessary to wrap your children in boxes. Our specs\ncalled for a "2 Column Comparison component" but we developers must implement every edge case including when there\'s only 1 element.'),Object(a.mdx)("p",null,"This component follows the same principle as other advanced components in that each child is it's own column element."),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"columns.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"<Column>\n\nChild A - Full Width\n\n</Column>\n\n<Column>\n\nChild A - with Sibling\n\nChild B - with Sibling\n\n</Column>\n\n<Column>\n\n<Box>\n\n#### Child A\n\nFull Width with a Header\n\n</Box>\n\n</Column>\n\n\n<Column>\n\n<Box>\n\n#### Child A\n\nWith a sibling and a Header\n\n</Box>\n\n<Box>\n\n#### Child B\n\nWith a sibling and a Header\n\n</Box>\n\n</Column>\n")),Object(a.mdx)("hr",null),Object(a.mdx)(l,{mdxType:"Column"},Object(a.mdx)("p",null,"Child A - Full Width")),Object(a.mdx)("hr",null),Object(a.mdx)(l,{mdxType:"Column"},Object(a.mdx)("p",null,"Child A - with Sibling"),Object(a.mdx)("p",null,"Child B - with Sibling")),Object(a.mdx)("hr",null),Object(a.mdx)(l,{mdxType:"Column"},Object(a.mdx)(d,{mdxType:"Box"},Object(a.mdx)("h4",null,"Child A"),Object(a.mdx)("p",null,"Full Width with a Header"))),Object(a.mdx)("hr",null),Object(a.mdx)(l,{mdxType:"Column"},Object(a.mdx)(d,{mdxType:"Box"},Object(a.mdx)("h4",null,"Child A"),Object(a.mdx)("p",null,"With a sibling and a Header")),Object(a.mdx)(d,{mdxType:"Box"},Object(a.mdx)("h4",null,"Child B"),Object(a.mdx)("p",null,"With a sibling and a Header"))),Object(a.mdx)("h3",null,"Chocolate Box"),Object(a.mdx)("p",null,"The Chocolate component is a 3 column component. It's the equivalent of using a Grid,\nexcept that it's opinionated on its sizing and gaps. The \"Box\" part of chocolate boxes comes from the combined use of the Box component\nto render content in each grid cell."),Object(a.mdx)("p",null,"The child rule here works the same. Each child is 1 grid cell (Box) in the Chocolate component.\nWe recommend that you use the Box component for more detailed content."),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"chocolate-icons.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<Chocolate>\n\n<Box>\n   \n<Icon name="eye"/>\n\nMeasure community sentiment about issues affecting the MakerDAO ecosystem.\n\n[See example](/)\n\n</Box>\n\n<Box>\n   \n<Icon name="search"/>\n\nDetermine the consensus that something needs to be done in response to a perceived issue.\n\n[See example](/)\n\n</Box>\n\n<Box>\n   \nDetermine the consensus that something needs to be done in response to a perceived issue.\n\n[See example](/)\n\n<Icon name="search"/>\n\n</Box>\n\n<Box>\n\n<Icon name="search"/>\n\nDetermine the consensus that something needs to be done in response to a perceived issue.\n\n[See example](/)\n\n</Box>\n\n</Chocolate>\n')),Object(a.mdx)(h,{mdxType:"Chocolate"},Object(a.mdx)(d,{mdxType:"Box"},Object(a.mdx)(p,{name:"eye",mdxType:"Icon"}),Object(a.mdx)("p",null,"Measure community sentiment about issues affecting the MakerDAO ecosystem."),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/"}),"See example"))),Object(a.mdx)(d,{mdxType:"Box"},Object(a.mdx)(p,{name:"search",mdxType:"Icon"}),Object(a.mdx)("p",null,"Determine the consensus that something needs to be done in response to a perceived issue."),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/"}),"See example"))),Object(a.mdx)(d,{mdxType:"Box"},"Determine the consensus that something needs to be done in response to a perceived issue.",Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/"}),"See example")),Object(a.mdx)(p,{name:"search",mdxType:"Icon"})),Object(a.mdx)(d,{mdxType:"Box"},Object(a.mdx)(p,{name:"search",mdxType:"Icon"}),Object(a.mdx)("p",null,"Determine the consensus that something needs to be done in response to a perceived issue."),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/"}),"See example")))),Object(a.mdx)("h3",null,"Categories"),Object(a.mdx)("p",null,"The Categories component is nearly the same as the Chocolate component, except that it\nhas a different visual design (it's width is 107.58% and not 100% of the content's parent container).\nIt also has a different rendering style depending on whether there are 2 or 4 elements.\nThe stark difference for you is that you only control the content of the Category container,\nnot the entire box itself (i.e. you can't change the background of a category box, only it's contents)."),Object(a.mdx)("p",null,"The component is also capable of having a unique status bar placement. All that's needed is that\nyour categories child has the status banner first:"),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"categories.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<Categories>\n\n<Box>\n\n<StatusBanner warning> Funding is currently closed </StatusBanner>\n \n<Icon name="metamask"/>\n\n[Hackathons](/funding/hackathons)\n\nOrganising a hackathon? Apply for a hackathon micro grant.\n\n</Box>\n\n<Box>\n\n<Icon name="metamask"/>\n\n[Hackathons](/funding/hackathons)\n\nOrganising a hackathon? Apply for a hackathon micro grant.\n\n</Box>\n\n</Categories>\n')),Object(a.mdx)(u,{mdxType:"Categories"},Object(a.mdx)(d,{mdxType:"Box"},Object(a.mdx)(x,{warning:!0,mdxType:"StatusBanner"}," Funding is currently closed "),Object(a.mdx)(p,{name:"metamask",mdxType:"Icon"}),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/funding/hackathons"}),"Hackathons")),Object(a.mdx)("p",null,"Organising a hackathon? Apply for a hackathon micro grant.")),Object(a.mdx)(d,{mdxType:"Box"},Object(a.mdx)(p,{name:"metamask",mdxType:"Icon"}),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/funding/hackathons"}),"Hackathons")),Object(a.mdx)("p",null,"Organising a hackathon? Apply for a hackathon micro grant."))),Object(a.mdx)("h3",null,"Touts"),Object(a.mdx)("p",null,"Touts are really just a step up on CTAs, which can be arranged to look good on a page,\nsimilar to the chocolate boxes and categories introduced above."),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"tout.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"<Tout>\n\n<Box>\n\n## Working on a bounty\n\nSee what's expected of you if you work on a Maker community bounty\n\n[Working on a bounty](#)\n\n</Box>\n\n</Tout>\n\n<Tout>\n\n<Box>\n\n## Working on a bounty\n\nSee what's expected of you if you work on a Maker community bounty.\n\n[Working on a bounty](#)\n\n</Box>\n\n<Box>\n\n## Say hi!\n\nThe best place to start is in our chat. Say hello and get to know us.\n\n<Link icon=\"rocketchat\">Community chat</Link>\n\n</Box>\n\n</Tout>\n")),Object(a.mdx)(b,{mdxType:"Tout"},Object(a.mdx)(d,{mdxType:"Box"},Object(a.mdx)("h2",null,"Working on a bounty"),Object(a.mdx)("p",null,"See what's expected of you if you work on a Maker community bounty"),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"#"}),"Working on a bounty")))),Object(a.mdx)(b,{mdxType:"Tout"},Object(a.mdx)(d,{mdxType:"Box"},Object(a.mdx)("h2",null,"Working on a bounty"),Object(a.mdx)("p",null,"See what's expected of you if you work on a Maker community bounty."),Object(a.mdx)("p",null,Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"#"}),"Working on a bounty"))),Object(a.mdx)(d,{mdxType:"Box"},Object(a.mdx)("h2",null,"Say hi!"),Object(a.mdx)("p",null,"The best place to start is in our chat. Say hello and get to know us."),Object(a.mdx)(g,{icon:"rocketchat",mdxType:"Link"},"Community chat"))),Object(a.mdx)("h2",null,"InfoBlocks"),Object(a.mdx)("p",null,"Info Blocks inline all the content you pass into them and have 2 states:"),Object(a.mdx)("ol",null,Object(a.mdx)("li",{parentName:"ol"},"Image on the Left")),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"left-image-infoblock.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<InfoBlock>\n\n<Image src="../../../images/starfox.png"/>\n\nThe best place to start is in our chat. Say hello and get to know us.\n\n<Link icon="rocketchat">Community chat</Link>\n\n</InfoBlock>\n')),Object(a.mdx)(O,{mdxType:"InfoBlock"},Object(a.mdx)(r,{src:"../../../images/starfox.png",mdxType:"Image"}),Object(a.mdx)("p",null,"The best place to start is in our chat. Say hello and get to know us."),Object(a.mdx)(g,{icon:"rocketchat",mdxType:"Link"},"Community chat")),Object(a.mdx)("ol",{start:2},Object(a.mdx)("li",{parentName:"ol"},"Image on the Right")),Object(a.mdx)("div",{className:"gatsby-code-title prism-code-title"},"right-image-infoblock.mdx"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<InfoBlock>\n\n# Say hi!\n\n<Link icon="rocketchat" to="https://chat.makerdao.com">Community chat</Link>\n\n![Starfox](../../../images/starfox.png)\n\n</InfoBlock>\n')),Object(a.mdx)(O,{mdxType:"InfoBlock"},Object(a.mdx)("h1",null,"Say hi!"),Object(a.mdx)(g,{icon:"rocketchat",to:"https://chat.makerdao.com",mdxType:"Link"},"Community chat"),Object(a.mdx)("p",null,Object(a.mdx)("img",Object.assign({parentName:"p"},{src:"../../../images/starfox.png",alt:"InfoBloStarfoxck"})))),Object(a.mdx)("blockquote",null,Object(a.mdx)("p",{parentName:"blockquote"},"If you put the image first (whether as a React component or as a normal\nmd image), it will appear on the left, and if you put it anywhere else, it will appear on the right.")))}f.isMDXComponent=!0},z1h2:function(e,n,t){"use strict";var o=t("rePB"),a=t("q1tI"),i=t("2A+t"),c=t("izhR"),s=t("xEQ+"),m=t.n(s),r=t("YwZP"),l=t("tW5L"),d=t("4XhP"),h=t("/xXG"),p=t("d+M2");function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}n.a=function(e){var n=e.children,t=e.pageContext,s=e.uri,x=t.frontmatter,b=x.title,g=x.description,O=x.keywords,j=x.featuredImage,y=x.status,f=x.hideLanguageSelector,w=x.hideSidenav,k=x.hideBreadcrumbs,C="object"==typeof y?function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({children:y.text},y):{children:y},B=Object(r.useLocation)().pathname.split("/")[2],T=void 0!==B&&""!==B,v=T&&!w,N={title:b||function(){var e=a.Children.toArray(n).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||s.split("/").pop(),description:g,keywords:O,featuredImage:j};return Object(i.c)(a.Fragment,null,Object(i.c)(p.b,N),v&&Object(i.c)(m.a,{boundaryElement:".content-boundary",sx:{width:"20%",minWidth:"260px",display:["none","none","initial"]},dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1},Object(i.c)(d.g,null)),Object(i.c)(c.p,{sx:{flexGrow:1,flexDirection:"column"}},Object(i.c)("article",{sx:{pl:T?[4,4,"64px"]:0,mt:T?[4,4,"59px"]:0,pb:4,pr:T?4:0}},y&&Object(i.c)(c.f,{sx:{marginTop:T?2:0}},Object(i.c)(h.l,Object.assign({sticky:!0},C,{sx:{width:"100%"}}))),(!k||T&&!f)&&Object(i.c)(c.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],mt:v?"":"2rem",px:T?0:[3,3,0]}},!k&&Object(i.c)(d.a,null),T&&!f&&Object(i.c)(l.b,null)),Object(i.c)(c.f,{sx:T&&!f?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},n))))}}}]);
//# sourceMappingURL=component---content-en-resources-content-advanced-mdx-2061b952a662b408b6a3.js.map