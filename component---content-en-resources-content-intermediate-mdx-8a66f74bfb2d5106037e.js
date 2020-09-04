(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{wEYN:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return a})),t.d(n,"default",(function(){return y}));var o=t("zLVn"),c=(t("q1tI"),t("7ljp")),i=t("z1h2"),a={},l=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.mdx)("div",n)}},s=l("Aligner"),d=l("Image"),r=l("List"),m=l("Box"),p=l("Link"),b=l("CTA"),u=l("Accordion"),h=l("Checklist"),x=l("StatusBanner"),O=l("Process"),j={_frontmatter:a},g=i.a;function y(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.mdx)(g,Object.assign({},j,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("h1",null,"Intermediate"),Object(c.mdx)("p",null,"Our Basic guide showed how Callouts and CTAs require each piece of content to start on a new line.\nThis is because each new mdx line is interpreted as a new ",Object(c.mdx)("strong",{parentName:"p"},"child")," when it is passed to the magic box which\nturns it into a React component. This means, when using more advanced components, you'll need to be aware not\njust of the props you're specifying in the actual tag, like ",Object(c.mdx)("inlineCode",{parentName:"p"},"primaryOutline")," or ",Object(c.mdx)("inlineCode",{parentName:"p"},"icon"),", but also the order\nin which you write the content in each component and ",Object(c.mdx)("strong",{parentName:"p"},"leaving new lines between each separate piece"),"."),Object(c.mdx)(s,{center:!0,sx:{marginBottom:3},mdxType:"Aligner"},Object(c.mdx)(d,{src:"../../../images/children.jpg",mdxType:"Image"})),Object(c.mdx)("h2",null,"Lists"),Object(c.mdx)("p",null,"The list component is an example of why mdx having an opinion in how it renders components works\nin our favor. With mdx, we can order our children consistently.\nThis allows us to create smart hooks for rendering each element, which is a fancy way of saying that\nwe can create really beautiful lists with more functionality and visual pizzaz than you could ever\ndream of having in normal md files. Let's dive right in."),Object(c.mdx)("p",null,"The rule is ",Object(c.mdx)("strong",{parentName:"p"},"scripting and composition come FIRST"),", which just means that you can use the list component\nin the same way you'd write lists normally. Generally we write lists beginning with a hyphen in md. You can use the hyphen,\nor not, when writing content in our ",Object(c.mdx)("inlineCode",{parentName:"p"},"List")," component - either way it will render the same thing:"),Object(c.mdx)("div",{className:"gatsby-code-title prism-code-title"},"basic-list.mdx"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<List>\n\nHello World\n\n</List>\n\n<List>\n\nHeader\n\nSub Content\n\n</List>\n\n<List>\n\n<Link to="/">\n\nHello World\n\n</Link>\n\n</List>\n')),Object(c.mdx)("p",null,"All end up looking like this:"),Object(c.mdx)(r,{mdxType:"List"},Object(c.mdx)("p",null,"Hello World")),Object(c.mdx)(r,{mdxType:"List"},Object(c.mdx)(m,{mdxType:"Box"},Object(c.mdx)("p",null,"Header"),Object(c.mdx)("p",null,"Sub Content"))),Object(c.mdx)(r,{mdxType:"List"},Object(c.mdx)(p,{to:"/",mdxType:"Link"},Object(c.mdx)("p",null,"Hello World"))),Object(c.mdx)("p",null,"If you want a list element with sub content, that's easy enough to organise:"),Object(c.mdx)("div",{className:"gatsby-code-title prism-code-title"},"subcontent-list.mdx"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"<List>\n\n<Box>\n\nHeader\n\nSub content\n\n</Box>\n\n</List>\n")),Object(c.mdx)("p",null,"Which renders like this:"),Object(c.mdx)(r,{mdxType:"List"},Object(c.mdx)(m,{mdxType:"Box"},Object(c.mdx)("p",null,"Header"),Object(c.mdx)("p",null,"Sub content"))),Object(c.mdx)("p",null,"For more complex sub content, we recommend using a Box:"),Object(c.mdx)("div",{className:"gatsby-code-title prism-code-title"},"list-v2.mdx"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"<List>\n\nA Great Header\n\n<Box>\n      \n<CTA> Now with a Call to Action! </CTA>\n\n</Box>\n\n</List>\n")),Object(c.mdx)(r,{mdxType:"List"},Object(c.mdx)(m,{mdxType:"Box"},Object(c.mdx)("p",null,"A Greatent Header"),Object(c.mdx)(m,{mdxType:"Box"},Object(c.mdx)(b,{mdxType:"CTA"}," Now with a Call to Action! ")))),Object(c.mdx)("p",null,"Want to render a few links? Easy! ",Object(c.mdx)("strong",{parentName:"p"},"Please note"),": these links are wrapped in a\nBox, and are not separate Link Elements (see more on this below)."),Object(c.mdx)("div",{className:"gatsby-code-title prism-code-title"},"list-of-links.mdx"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<List>\n \n<Box>\n\n<Link to="/">Writing style guide →</Link>\n\n</Box>\n\n</List>\n')),Object(c.mdx)("p",null,"Which ends up looking like this:"),Object(c.mdx)(r,{mdxType:"List"},Object(c.mdx)(m,{mdxType:"Box"},Object(c.mdx)(p,{to:"/",mdxType:"Link"},"Writing style guide →"))),Object(c.mdx)(b,{mdxType:"CTA"},Object(c.mdx)("p",null,"NOTE: Mind the gap! There should be a gap between list elements that will be on the same level\nor mdx will not recognize them as seperate elements.")),Object(c.mdx)("p",null,"It's possible to have an entire list element be a link by providing the Link component like so:"),Object(c.mdx)("div",{className:"gatsby-code-title prism-code-title"},"list-as-link.mdx"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<List>\n\n<Link to="https://makerdao.com">\n\nMakerDao\n\n</Link>\n\n<Link to="/learn">\n\nLearn\n\n</Link>\n\n</List>\n')),Object(c.mdx)("p",null,"Which both end up looking like this:"),Object(c.mdx)(r,{mdxType:"List"},Object(c.mdx)(p,{to:"https://makerdao.com",mdxType:"Link"},Object(c.mdx)("p",null,"MakerDao")),Object(c.mdx)(p,{to:"/learn",mdxType:"Link"},Object(c.mdx)("p",null,"Learn"))),Object(c.mdx)("p",null,"These links are also capable of having subcontent as well:"),Object(c.mdx)(r,{mdxType:"List"},Object(c.mdx)(p,{to:"https://makerdao.com",mdxType:"Link"},Object(c.mdx)("p",null,"MakerDao"),Object(c.mdx)("p",null,"Sub content")),Object(c.mdx)(p,{to:"/learn",mdxType:"Link"},Object(c.mdx)("p",null,"Learn"),Object(c.mdx)("p",null,"subcontent"))),Object(c.mdx)("h2",null,"Accordion"),Object(c.mdx)("p",null,"So you want to make a list, but with a lot of content, and you don't want to take up a lot of space\non the page? Sounds like you need a collapsable accordion menu... The Accordion component is ultra simple and\nscripting works with the same child rule. Except this time:"),Object(c.mdx)("ol",null,Object(c.mdx)("li",{parentName:"ol"},"The first child that appears is the header of the accordion."),Object(c.mdx)("li",{parentName:"ol"},"Everything AFTER the first child will be included in the collapsable content.")),Object(c.mdx)("div",{className:"gatsby-code-title prism-code-title"},"accordion.mdx"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<Accordion>\n\n## Hello World\n\nSome other content\n\n</Accordion>\n\n<Accordion>\n\nAm I eligible to receive a micro-grant if Maker and Dai are only one part of my agenda?\n\nSome other content inside of an accordion!\n\n> CTA content inside of Accordion\n\n![Onboarding](../../../../content/images/vault-onboarding-1.png)\n\n### Let\'s see how this works?\n\n</Accordion>\n\n<Accordion openIcon="chevron_down" closeIcon="chevron_up">\n\nOf course, it\'s also possible to have your own icons for opening and closing\n\n</Accordion>\n\n<Accordion defaultOpen>\n\nAnd you can control whether the menu defaults to being open or closed...\n\nThis content will show by default now.\n\n</Accordion>\n')),Object(c.mdx)(u,{mdxType:"Accordion"},Object(c.mdx)("h2",null,"Hello World"),Object(c.mdx)("p",null,"Some other content")),Object(c.mdx)(u,{mdxType:"Accordion"},Object(c.mdx)("p",null,"Am I eligible to receive a micro-grant if Maker and Dai are only one part of my agenda?"),Object(c.mdx)("p",null,"Some other content inside of an accordion!"),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},"CTA content inside of Accordion")),Object(c.mdx)("p",null,Object(c.mdx)("img",Object.assign({parentName:"p"},{src:"../../../../content/images/vault-onboarding-1.png",alt:"Onboarding"}))),Object(c.mdx)("h4",null,"Let's see how this works?")),Object(c.mdx)(u,{openIcon:"chevron_down",closeIcon:"chevron_up",mdxType:"Accordion"},Object(c.mdx)("p",null,"Of course, it's also possible to have your own icons for opening and closing")),Object(c.mdx)(u,{defaultOpen:!0,mdxType:"Accordion"},Object(c.mdx)("p",null,"And you can control whether the menu defaults to being open or closed..."),Object(c.mdx)("p",null,"This content will show by default now.")),Object(c.mdx)("h2",null,"Checklist"),Object(c.mdx)("p",null,"This is another simple component meant to be more visually engaging. It is ",Object(c.mdx)("strong",{parentName:"p"},"not")," interactive - it's\njust meant to organise content in a specific way, mostly for guide pages like preparing for hackathons etc.\nLike all the above, it too follows the Child Rule."),Object(c.mdx)("div",{className:"gatsby-code-title prism-code-title"},"checkbox.mdx"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),'<Checklist>\n\nWe can put **anything** inside this component\n\n> How about a CTA?\n\n<StatusBanner notice>\n\nOr a Status Banner...\n\n</StatusBanner>\n\n<Image src="../../../../content/images/vault-onboarding-2.png" />\n\n#### Now we\'re talking!\n\n</Checklist>\n')),Object(c.mdx)("p",null,"Which ends up looking like this:"),Object(c.mdx)(h,{mdxType:"Checklist"},Object(c.mdx)("p",null,"We can put ",Object(c.mdx)("strong",{parentName:"p"},"anything")," inside this component"),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},"How about a CTA?")),Object(c.mdx)(x,{notice:!0,mdxType:"StatusBanner"},Object(c.mdx)("p",null,"Or a Status Banner...")),Object(c.mdx)(d,{src:"../../../../content/images/vault-onboarding-2.png",mdxType:"Image"}),Object(c.mdx)("div",{className:"gatsby-code-title prism-code-title"},"checkbox-code.js"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const variable =\n  \"Can't be shown in the code-block above because that's too meta...\";\n")),Object(c.mdx)("h4",null,"Now we're talking!")),Object(c.mdx)("h2",null,"Process Stepper"),Object(c.mdx)("p",null,"The process stepper is a carbon copy of the list component, except shaved down to ignore the Link requirements.\nThis means the same mindset of scripting a process element is in place. The children dictate the content,\nand how the children are seperated determine each step in the process."),Object(c.mdx)("div",{className:"gatsby-code-title prism-code-title"},"process-stepper.mdx"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-md"}),"<Process>\n\n### Child 1\n\nChild 2\n\n<Box>\n\n### Child 3\n\nBunches and bunches of content can go in here. Anything you like, tbh.\n\n</Box>\n\n<Box>\n\n### Child 4\n\n> Even CTAs\n\n</Box>\n\n</Process>\n")),Object(c.mdx)(O,{mdxType:"Process"},Object(c.mdx)("h3",null,"Child 1"),Object(c.mdx)("p",null,"Child 2"),Object(c.mdx)(m,{mdxType:"Box"},Object(c.mdx)("h3",null,"Child 3"),Object(c.mdx)("p",null,"Bunches and bunches of content can go in here. Anything you like, tbh.")),Object(c.mdx)(m,{mdxType:"Box"},Object(c.mdx)("h3",null,"Child 4"),Object(c.mdx)("blockquote",null,Object(c.mdx)("p",{parentName:"blockquote"},"Even CTAs")),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"or inline code\n")))),Object(c.mdx)("h2",null,"Box"),Object(c.mdx)("p",null,"You'll notice that we've begun wrapping our children in boxes. This is the way to overcome the child rule\nand sneak in more content to one specific child should the need arise. If you wrap your multi-line content\ninto a ",Object(c.mdx)("inlineCode",{parentName:"p"},"<Box>"),", then this will be read and rendered as a single child. You can already see how useful this\nis in the context of complex lists or process steppers, and it will become more apparent with other, more visual\ncomponents like Touts."),Object(c.mdx)("p",null,"Basically, a ",Object(c.mdx)("inlineCode",{parentName:"p"},"<Box>")," is just the old html ",Object(c.mdx)("inlineCode",{parentName:"p"},"<div>")," element updated for this brave new world we'll be building together.\nNow it's time to head over to the Advanced tutorial and begin understanding our visual components and how to style everything."))}y.isMDXComponent=!0},z1h2:function(e,n,t){"use strict";var o=t("rePB"),c=t("q1tI"),i=t("2A+t"),a=t("izhR"),l=(t("xEQ+"),t("YwZP")),s=t("tW5L"),d=t("4XhP"),r=t("/xXG"),m=t("d+M2");function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}n.a=function(e){var n=e.children,t=e.pageContext,b=e.uri,u=t.frontmatter,h=u.title,x=u.description,O=u.keywords,j=u.featuredImage,g=u.status,y=u.hideLanguageSelector,w=u.hideBreadcrumbs,f="object"==typeof g?function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){Object(o.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({children:g.text},g):{children:g},k=Object(l.useLocation)().pathname.split("/")[2],T=void 0!==k&&""!==k,v={title:h||function(){var e=c.Children.toArray(n).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||b.split("/").pop(),description:x,keywords:O,featuredImage:j};return Object(i.c)(c.Fragment,null,Object(i.c)(m.b,v),g&&Object(i.c)(a.f,{sx:{marginTop:T?2:0}},Object(i.c)(r.l,Object.assign({sticky:!0},f,{sx:{width:"100%"}}))),(!w||T&&!y)&&Object(i.c)(a.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:T?0:[3,3,0]}},!w&&Object(i.c)(d.a,null),T&&!y&&Object(i.c)(s.b,null)),Object(i.c)(a.f,{sx:T&&!y?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},n))}}}]);
//# sourceMappingURL=component---content-en-resources-content-intermediate-mdx-8a66f74bfb2d5106037e.js.map