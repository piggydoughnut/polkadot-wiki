(self.webpackChunk=self.webpackChunk||[]).push([[7654],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(74165),o=a(15861),r=a(67294),i=a(87152),s=a(34200),p=a(67425);function d(e,t,a){return l.apply(this,arguments)}function l(){return(l=(0,o.Z)((0,n.Z)().mark((function e(t,a,o){var r,p,d,l,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,p=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){e.next=18;break}return e.abrupt("return");case 18:return d=new i.U(r),e.next=21,s.G.create({provider:d});case 21:l=e.sent,(c=a.split(".")).forEach((function(e){e in l&&(l=l[e])})),e.t1=c[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return p=l.toString(),e.abrupt("break",35);case 29:return e.next=31,l();case 31:return p=(p=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+a);case 35:return e.abrupt("return",p);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,a,n){switch(t){case"humanReadable":(0,p.HumanReadable)(e,a,n);break;case"precise":(0,p.Precise)(e,a,n);break;case"blocksToDays":(0,p.BlocksToDays)(e,n);break;case"percentage":(0,p.Percentage)(e,n);break;case"arrayLength":(0,p.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(e){var t=e.network,a=e.path,i=e.defaultValue,s=e.filter,p=void 0===s?void 0:s,l=(0,r.useState)(""),u=l[0],k=l[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==p?c(i.toString(),p,t,k):k(i.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,a,k);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==p?c(o,p,t,k):k(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(s){console.log(s)}}}),[]),u}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,n){var o=void 0;if("polkadot"===a||"statemint"===a)o=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),n((e=Number.isInteger(e/t[a].precision)?e/t[a].precision+" "+t[a].symbol:(e/t[a].precision).toFixed(o)+" "+t[a].symbol).toString())},Precise:function(e,a,n){n(e=(e=parseFloat(e))/t[a].precision+" "+t[a].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},Percentage:function(e,t){t((e/=1e7).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},40569:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=a(47940),s=["components"],p={id:"learn-guides-polkadot-opengov",title:"Polkadot OpenGov How-to Guides",sidebar_label:"OpenGov",description:"Advanced How-to Guides about Polkadot OpenGov.",keywords:["opengov","polkadot opengov","referenda","cancel"],slug:"../learn-guides-polkadot-opengov"},d=void 0,l={unversionedId:"learn/learn-guides-polkadot-opengov",id:"learn/learn-guides-polkadot-opengov",title:"Polkadot OpenGov How-to Guides",description:"Advanced How-to Guides about Polkadot OpenGov.",source:"@site/../docs/learn/learn-guides-polkadot-opengov.md",sourceDirName:"learn",slug:"/learn-guides-polkadot-opengov",permalink:"/docs/learn-guides-polkadot-opengov",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-polkadot-opengov.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1695304640,formattedLastUpdatedAt:"Sep 21, 2023",frontMatter:{id:"learn-guides-polkadot-opengov",title:"Polkadot OpenGov How-to Guides",sidebar_label:"OpenGov",description:"Advanced How-to Guides about Polkadot OpenGov.",keywords:["opengov","polkadot opengov","referenda","cancel"],slug:"../learn-guides-polkadot-opengov"},sidebar:"docs",previous:{title:"Nomination Pools",permalink:"/docs/learn-guides-staking-pools"},next:{title:"Treasury",permalink:"/docs/learn-guides-treasury"}},c={},u=[{value:"Cancel or Kill a Referendum",id:"cancel-or-kill-a-referendum",level:2}],k={toc:u},m="wrapper";function f(e){var t=e.components,p=(0,o.Z)(e,s);return(0,r.kt)(m,(0,n.Z)({},k,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page is for advanced users of Polkadot OpenGov. If you would learn about and participate in OpenGov, please navigate\nto the page on ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-guides-polkadot-opengov"},"participating in Polkadot Opengov.")),(0,r.kt)("h2",{id:"cancel-or-kill-a-referendum"},"Cancel or Kill a Referendum"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Anybody can cancel an ongoing referendum (i.e., a referendum within the Lead-in or\nvoting/confirmation period). For more information about the referenda timeline in Polkadot OpenGov,\nsee the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov#referenda-timeline"},"dedicated page"),"."),(0,r.kt)("p",{parentName:"admonition"},"To successfully cancel a referendum through the track ",(0,r.kt)("inlineCode",{parentName:"p"},"20 / Referendum Canceller"),", you will need to\nattain\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-polkadot-opengov#referendum-canceller"},"specific approval and support levels"),".")),(0,r.kt)("p",null,"To cancel a referendum, you need first to submit a preimage. Go to the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Polkadot-JS UI > Governance > Referenda"),' and click on the\n"Add Preimage" button. You must specify the specific call enacted if the proposal passes. To cancel\na referendum, you must specify the ',(0,r.kt)("inlineCode",{parentName:"p"},"referenda.cancel")," extrinsic of referendum ",(0,r.kt)("inlineCode",{parentName:"p"},"249"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cancel-referenda-preimage-creation",src:a(78996).Z,width:"2144",height:"944"})),(0,r.kt)("p",null,"This call will cancel the referendum and return the deposit. You can also kill a referendum using\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"referenda.kill")," extrinsic. This will cancel the referendum and slash the deposit. Note that\ncreating a preimage will reserve some funds proportionally to the amount of information stored\nwithin the preimage. In this case, the deposit was 1.33 KSM (see\n",(0,r.kt)("a",{parentName:"p",href:"https://kusama.subscan.io/extrinsic/19143604-2"},"Subscan"),")."),(0,r.kt)("p",null,"Once a preimage is submitted, it can be checked under\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/preimages"},"Governance > Preimages"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cancel-referenda-preimage-check",src:a(16212).Z,width:"2758",height:"190"})),(0,r.kt)("p",null,"You must copy the preimage to use it when you submit your proposal. To submit the proposal to cancel\nreferendum 249, for example, you need to go under\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Governance > Referenda"),' and click the "Submit Proposal"\nbutton.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cancel-referenda-proposal",src:a(81405).Z,width:"2130",height:"1226"})),(0,r.kt)("p",null,"You must specify the account to submit the proposal (this can differ from the account used to create\nthe preimage). Then you will need to specify the track ",(0,r.kt)("inlineCode",{parentName:"p"},"20 / Referendum Canceller")," and add the\npreimage hash containing the specific action that will be enacted if the referendum passes. Note\nthat a submission deposit of\n",(0,r.kt)(i.Z,{network:"polkadot",path:"consts.referenda.submissionDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),"","\nwill be reserved for submitting the proposal."),(0,r.kt)("p",null,"Once the proposal has been submitted, it will stay in the Lead-in period until there is enough space\nwithin the track, and a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-polkadot-opengov#polkadot-opengov-terminology-and-parameters"},"track-dependent preparation period and decision deposit"),"\nhave been met. Failing to submit the decision deposit within a\n",(0,r.kt)(i.Z,{network:"polkadot",path:"const.referenda.undecidingTimeout",defaultValue:201600,filter:"blocksToDays",mdxType:"RPC"}),"","-day\nperiod will lead to a referendum timeout."))}f.isMDXComponent=!0},16212:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/cancel-referenda-preimage-check-45ef7f984450113a2b1a87e9e2751d69.png"},78996:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/cancel-referenda-preimage-creation-3923463db47aec298f74a426dba23166.png"},81405:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/cancel-referenda-proposal-b9c5e90784ec8216360053d8bda84980.png"},46601:()=>{}}]);