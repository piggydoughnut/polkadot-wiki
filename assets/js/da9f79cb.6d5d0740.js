(self.webpackChunk=self.webpackChunk||[]).push([[2248],{47940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(74165),a=n(15861),i=n(67294),r=n(87152),s=n(18509),l=n(67425);function m(e,t,n){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,o.Z)().mark((function e(t,n,a){var i,l,m,d,p;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return i="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return i="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==i){e.next=22;break}return e.abrupt("return");case 22:return m=new r.U(i),e.next=25,s.G.create({provider:m});case 25:d=e.sent,(p=n.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=p[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return l=d.toString(),e.abrupt("break",39);case 33:return e.next=35,d();case 35:return l=(l=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+p[0]+") in "+n);case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t,n,o){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,o);break;case"precise":(0,l.Precise)(e,n,o);break;case"blocksToDays":(0,l.BlocksToDays)(e,o);break;case"erasToDays":(0,l.ErasToDays)(e,o,n);break;case"percentage":(0,l.Percentage)(e,o);break;case"permillToPercent":(0,l.PermillToPercent)(e,o);break;case"arrayLength":(0,l.ArrayLength)(e,o);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var t=e.network,n=e.path,r=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,d=(0,i.useState)(""),c=d[0],h=d[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?p(r.toString(),l,t,h):h(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t,n,h);case 2:if(void 0!==(a=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?p(a,l,t,h):h(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),c}},67425:e=>{var t="polkadot",n="kusama",o="statemine",a="statemint",i="polkadotpeople",r="kusamapeople",s={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e7,symbol:"milliDOT"},kusamapeople:{precision:1e9,symbol:"milliKSM"}};e.exports={HumanReadable:function(e,l,m){var d=void 0;if(l===t||l===a||l==i)d=3;else{if(l!==n&&l!==o&&l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");d=6}e=parseFloat(e),m((e=Number.isInteger(e/s[l].precision)?e/s[l].precision+" "+s[l].symbol:(e/s[l].precision).toFixed(d)+" "+s[l].symbol).toString())},Precise:function(e,t,n){n(e=(e=parseFloat(e))/s[t].precision+" "+s[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,s,l){var m=void 0;if(l===t||l===a||l==i)m=1;else{if(l!==n&&l!==o&&l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");m=4}s((e/=m).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},92916:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=n(47940),s=["components"],l={id:"learn-nomination-pools",title:"Nomination Pools",sidebar_label:"Nomination Pools",description:"Staking through Polkadot's Nomination Pools.",keyword:["nominate","nominator","stake","staking","pools"],slug:"../learn-nomination-pools"},m=void 0,d={unversionedId:"learn/learn-nomination-pools",id:"learn/learn-nomination-pools",title:"Nomination Pools",description:"Staking through Polkadot's Nomination Pools.",source:"@site/../docs/learn/learn-nomination-pools.md",sourceDirName:"learn",slug:"/learn-nomination-pools",permalink:"/docs/learn-nomination-pools",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-nomination-pools.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1721026584,formattedLastUpdatedAt:"Jul 15, 2024",frontMatter:{id:"learn-nomination-pools",title:"Nomination Pools",sidebar_label:"Nomination Pools",description:"Staking through Polkadot's Nomination Pools.",keyword:["nominate","nominator","stake","staking","pools"],slug:"../learn-nomination-pools"},sidebar:"docs",previous:{title:"Introduction to Staking",permalink:"/docs/learn-staking"},next:{title:"Polkadot OpenGov",permalink:"/docs/learn-polkadot-opengov-index"}},p={},c=[{value:"Key Components",id:"key-components",level:2},{value:"Pool Member Lifecycle",id:"pool-member-lifecycle",level:2},{value:"Join a pool",id:"join-a-pool",level:3},{value:"Claim rewards",id:"claim-rewards",level:3},{value:"Claim Permissions",id:"claim-permissions",level:3},{value:"Unbond and withdraw funds",id:"unbond-and-withdraw-funds",level:3},{value:"Limitations of Nomination Pools",id:"limitations-of-nomination-pools",level:3},{value:"Pool Administration",id:"pool-administration",level:2},{value:"States",id:"states",level:3},{value:"Roles",id:"roles",level:3},{value:"Pool Commissions",id:"pool-commissions",level:3},{value:"Pool Lifecycle",id:"pool-lifecycle",level:2},{value:"Nomination Pools - Slashing",id:"nomination-pools---slashing",level:2},{value:"Nominating vs Joining a Pool",id:"nominating-vs-joining-a-pool",level:2}],h={toc:c},u="wrapper";function k(e){var t=e.components,l=(0,a.Z)(e,s);return(0,i.kt)(u,(0,o.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Nomination Pools are live on Polkadot!",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Nomination pools are a new feature for Polkadot\u2019s staking system that allows users to pool their\nDOT tokens together on-chain to nominate\nvalidators and receive rewards, significantly improving the system\u2019s scalability. Now, anyone with\nas little as\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/nomination-pools-are-live-stake-natively-with-just-1-dot/"},"1 DOT can receive rewards for staking natively on Polkadot"),".\nNote that rewards are not guaranteed for those pools that do not have enough bonded funds to be\nincluded within the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking-advanced#bags-list"},"bags list"),". ",(0,i.kt)("strong",{parentName:"p"},"Only members of active\npools will receive rewards.")),(0,i.kt)("p",{parentName:"admonition"},"There are currently\n",(0,i.kt)(r.Z,{network:"polkadot",path:"query.nominationPools.counterForPoolMembers",defaultValue:4376,mdxType:"RPC"}),"\n","\nmembers in\n",(0,i.kt)(r.Z,{network:"polkadot",path:"query.nominationPools.lastPoolId",defaultValue:80,mdxType:"RPC"}),"\n","\npools. There is no limit to the number of pools or pool members per pool.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Learn the key differences between\n",(0,i.kt)("a",{parentName:"p",href:"#nominating-vs-joining-a-pool"},(0,i.kt)("strong",{parentName:"a"},"Staking directly vs Joining a Nomination Pool")),"."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"For Ledger users:")," Joining a nomination pool is possible only with the XL version of the Polkadot\nLedger App. This should be installed by default on Ledger Nano X and S Plus, but not on the Nano S."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"If you become a nomination pool member or a pool admin, you cannot participate in Governance with\nthe bonded tokens in the pool, as they are held in a\n",(0,i.kt)("a",{parentName:"strong",href:"/docs/learn-account-advanced#system-accounts"},"system account"),"."))),(0,i.kt)("admonition",{title:"Have questions on Nomination Pools?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Please join the ",(0,i.kt)("a",{parentName:"p",href:"https://dot.li/discord"},"Polkadot Discord")," for asking general questions about\nNomination Pools. If you are a developer, please join our\n",(0,i.kt)("a",{parentName:"p",href:"https://matrix.to/#/#nompools-support:matrix.parity.io"},"nomination pools support channel"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nomination Pools",src:n(85408).Z,width:"1720",height:"963"})),(0,i.kt)("p",null,"Nomination pools are one of the key features from the roadmap of staking improvements on\nPolkadot. They are designed to\npermissionlessly allow members to pool their funds together and act as a single nominator account."),(0,i.kt)("p",null,"Due to the current runtime constraints,\nPolkadot can only handle\n22500  nominators comfortably in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nominator#staking-election-stages"},"electing set"),". As one of the objectives of the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"NPoS algorithm")," is to maximize the overall stake on the network, it can be\ninferred that the staking system on Polkadot\nfavors nominators with a larger stake. Only the nominator accounts which back the validators in the\nactive set are eligible for receiving staking rewards. This leaves out nomination intents from the\naccounts with lower token balance than the min-active nomination and places them in a waiting queue\nto enter electing set. Nomination pools will be handy for members who want to participate in the\nstaking system with a stake much lower than the dynamic min-active nomination threshold on the\nnetwork. All operations are constant space and time complexity relative to the number of members,\neliminating any theoretical upper bound on the number of members the system can handle and thus\nscaling the number of accounts that can participate and earn rewards in the staking system on\nPolkadot. In summary, each nomination pool is\nviewed as a single nominator from the NPoS system point of view."),(0,i.kt)("admonition",{title:"Why aren't the members in the nomination pools called delegators?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The term ",(0,i.kt)("inlineCode",{parentName:"p"},"delegator")," is associated too much with Delegated Proof of Staking (DPoS), and since\nPolkadot implements Nominated Proof of Staking\n(NPoS), naming them delegators would be misleading. The term ",(0,i.kt)("inlineCode",{parentName:"p"},"member")," is our generic replacement for\n",(0,i.kt)("inlineCode",{parentName:"p"},"delegator"),". In action, members are quite similar to delegators and delegate their nomination power\nto the pool.")),(0,i.kt)("p",null,"The pool\u2019s earnings are split pro rata to a member's stake in the bonded pool (and thus, the staking\nrewards for members will be the same as if they were a nominator). Importantly, slashes are also\napplied proportionally to members who may have been actively bonded."),(0,i.kt)("h2",{id:"key-components"},"Key Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bonded Pool: Tracks the distribution of actively staked funds."),(0,i.kt)("li",{parentName:"ul"},"Reward Pool: Tracks rewards earned by actively staked funds."),(0,i.kt)("li",{parentName:"ul"},"Unbonding Sub Pools: Collection of pools at different phases (i.e. eras) of the unbonding\nlifecycle."),(0,i.kt)("li",{parentName:"ul"},"Members: Accounts that nominate to the pools."),(0,i.kt)("li",{parentName:"ul"},"Point: Unit of measure for a member\u2019s portion of a pool's funds. All pools start with a point to\nPlanck ratio of 1. Over time, if the pool receives rewards, they increase in value, and if the\npool is slashed, it decreases in value.")),(0,i.kt)("h2",{id:"pool-member-lifecycle"},"Pool Member Lifecycle"),(0,i.kt)("h3",{id:"join-a-pool"},"Join a pool"),(0,i.kt)("p",null,"A member delegates funds to a pool by transferring some amount to the pool\u2019s bonded account with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"join")," extrinsic. The pool then increases its bond with the new funds. A member is afforded the\nability to bond additional funds or re-stake rewards as long as they are already actively bonded.\nNote that a member may only belong to one pool at a time."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The current minimum bond to join a pool on"),"\n",(0,i.kt)("strong",{parentName:"p"},"Polkadot"),"","\n",(0,i.kt)("strong",{parentName:"p"},"is ",(0,i.kt)(r.Z,{network:"polkadot",path:"query.nominationPools.minJoinBond",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),"."),"\n",""),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The funds nominated to a pool will not be visible in the member's account balance on Polkadot JS\nApps UI. This is because the member funds are transferred from their account to the pool's\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-account-advanced#system-accounts"},"system account"),". This pool account is not accessible\nby anyone (including the pool root or depositor) and only the pool's internal logic can access the\naccount.")),(0,i.kt)("admonition",{title:"Use Proxy Accounts to join Nomination Pools",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Depending on how much control you want to give your proxy, you might choose between any >\nnon-transfer > staking > nomination pool proxy, with the latter being only able to sign transactions\nrelated to the ",(0,i.kt)("inlineCode",{parentName:"p"},"NominationPool")," pallet.")),(0,i.kt)("p",null,'Check the "How to join a pool" section in\n',(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181401-how-to-join-nomination-pools"},"this support article"),"\nfor guidelines."),(0,i.kt)("h3",{id:"claim-rewards"},"Claim rewards"),(0,i.kt)("p",null,'The member can claim their portion of any rewards that have accumulated since the previous time they\nclaimed (or in the case that they have never claimed, any rewards that have accumulated since the\nera after they joined). Rewards are split pro rata among the actively bonded members. Check the "How\nto claim rewards" section in\n',(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181401-how-to-join-nomination-pools"},"this support article"),"\nfor guidelines."),(0,i.kt)("h3",{id:"claim-permissions"},"Claim Permissions"),(0,i.kt)("p",null,"As a pool member, you can grant permission to any other account to claim and compound rewards on\nyour behalf. There are four permission options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Permissioned")," (default): you need to claim and compound your rewards."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PermissionlessCompound"),": you grant permission to any other account to compound (claim and bond)\nyour rewards on your behalf."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PermissionlessWithdraw"),": you grant permission to any other account to withdraw (claim and keep as\na free balance) your rewards on your behalf."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PermissionlessAll"),": you grant permission to any other account to compound or withdraw your\nrewards on your behalf.")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/staking-dashboard#pools"},"Staking Dashboard page")," for more information about\nhow to set your claim permissions."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-guides-staking-pools#claim-rewards-for-other-pool-members"},"advanced guides")," to\nlearn how to claim rewards for another pool member."),(0,i.kt)("h3",{id:"unbond-and-withdraw-funds"},"Unbond and withdraw funds"),(0,i.kt)("p",null,"At any point in time after joining the pool, a member can start the process of exiting by unbonding.\n",(0,i.kt)("inlineCode",{parentName:"p"},"unbond")," will unbond part or all of the member's funds. After unbond has been called and the\nunbonding duration has passed\n(",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.staking.bondingDuration",defaultValue:28,filter:"erasToDays",mdxType:"RPC"}),"\n","\neras which correspond to\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.staking.bondingDuration",defaultValue:28,filter:"erasToDays",mdxType:"RPC"}),"\n","\ndays on Polkadot),  a member may withdraw\ntheir funds with ",(0,i.kt)("inlineCode",{parentName:"p"},"withdrawUnbonded"),'. Withdrawing effectively ends a member\'s relationship with their\npool, allowing them to join a different pool if desired. Check the "Withdraw unbonded funds" section\nin\n',(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181401-how-to-join-nomination-pools"},"this support article"),"\nfor guidelines."),(0,i.kt)("admonition",{title:"Unbonding transaction automatically triggers withdrawal of rewards",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When there is a change in the bonded balance, the accumulated rewards in the pool thus far are\nautomatically withdrawn to the account. The rewards are then accrued based on the updated bonded\nbalance.")),(0,i.kt)("h3",{id:"limitations-of-nomination-pools"},"Limitations of Nomination Pools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A member cannot vote (e.g. in Referenda or for Council members) with their nominated funds. This\nmay be changed in the future once accounts are afforded the ability to split votes."),(0,i.kt)("li",{parentName:"ul"},"For a member to switch pools, all funds from the account must be unbonded. This process takes 28\neras."),(0,i.kt)("li",{parentName:"ul"},"A member can partially unbond the staked funds in the pool (at most 16 partial unbonds).")),(0,i.kt)("h2",{id:"pool-administration"},"Pool Administration"),(0,i.kt)("h3",{id:"states"},"States"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open: The pool is open to be joined by anyone."),(0,i.kt)("li",{parentName:"ul"},"Blocked: The pool is blocked; no joiners are permitted."),(0,i.kt)("li",{parentName:"ul"},"Destroying: The pool is in the process of being destroyed. Once in this state, the pool may never\nrevert to any other state; it can only proceed to be destroyed. All members can be\npermissionlessly unbonded; this allows the pool to be dismantled regardless of any member\u2019s\nproactivity.")),(0,i.kt)("h3",{id:"roles"},"Roles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Depositor: Creates the pool and is the initial member. The depositor can only leave the pool once\nall other members have left. Once they leave by withdrawing, the pool is fully removed from the\nsystem."),(0,i.kt)("li",{parentName:"ul"},"Nominator: Can select the validators the pool nominates."),(0,i.kt)("li",{parentName:"ul"},"Bouncer: Can change the pool\u2019s state and kick (permissionlessly unbond/withdraw) members if the\npool is blocked."),(0,i.kt)("li",{parentName:"ul"},"Root: Can change the nominator, bouncer, or itself. Further, it can perform any of the actions the\nnominator or bouncer can.")),(0,i.kt)("h3",{id:"pool-commissions"},"Pool Commissions"),(0,i.kt)("p",null,"As the pool root role, you can set pool commissions that will be applied to the staking rewards paid\nout to the pool's system account before rewards are allocated for the pool members. You can set pool\ncommissions through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/staking-dashboard#pools"},"Polkadot Staking Dashboard"),"."),(0,i.kt)("p",null,"Three methods can be used when setting the pool commission:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Commission Rate")," (",(0,i.kt)("inlineCode",{parentName:"li"},"nominationPools.setCommission")," extrinsic): the start or new commission rate\n(",(0,i.kt)("inlineCode",{parentName:"li"},"newCommission")," parameter) that can be set between 0% and\n",(0,i.kt)(r.Z,{network:"polkadot",path:"query.nominationPools.globalMaxCommission",defaultValue:1e8,filter:"percentage",mdxType:"RPC"}),"%\n(decided through ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-polkadot-opengov"},"governance referendum"),") via the\n",(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate/master/pallet_nomination_pools/pallet/type.GlobalMaxCommission.html"},(0,i.kt)("inlineCode",{parentName:"a"},"globalMaxCommission")),"\nparameter. You will need to specify an Input Payee Account, i.e. the account that will receive the\ncommission."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max Commission")," (",(0,i.kt)("inlineCode",{parentName:"li"},"nominationPools.setCommissionMax")," extrinsic): the maximum commission\n(",(0,i.kt)("inlineCode",{parentName:"li"},"maxCommission")," parameter) the pool will apply to its members (between 0% and Max Commission).\nNote that once set, ",(0,i.kt)("strong",{parentName:"li"},"the pool admin can only lower it"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Change Rate")," (",(0,i.kt)("inlineCode",{parentName:"li"},"nominationPools.setCommissionChangeRate")," extrinsic): the maximum rate increase\n(",(0,i.kt)("inlineCode",{parentName:"li"},"maxIncrease")," parameter) allowed for a single commission update. Note that once set, ",(0,i.kt)("strong",{parentName:"li"},"the pool\nadmin can only lower it"),". When setting the Change Rate, it will also be possible to set a\n",(0,i.kt)("inlineCode",{parentName:"li"},"minDelay")," quantified as the number of blocks (since last commission update) after which it is\npossible to change the commission (i.e. the minimum delay between commission updates). Note that\nonce set, ",(0,i.kt)("strong",{parentName:"li"},"the pool admin can only increase it"),".")),(0,i.kt)("p",null,"Max Commission and Change Rate must not be necessarily set. It is the choice of the pool admin to\nset those parameters and provide transparency to the pool members about the pool's commission\npolicy."),(0,i.kt)("admonition",{title:"Max Commission and Change Rate are currently permanent",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Once the Max Commission and the Change Rate are set, the pool admin currently can only decrease\nthose values. The minimum delay between commission updates can only be increased. The situation can\nchange in the future and a ",(0,i.kt)("inlineCode",{parentName:"p"},"forceSetCommissionMax")," method can be proposed through governance\nreferendum.")),(0,i.kt)("p",null,"Let's take, for example, Pool A, which sets the Commission Rate to 10%, the Max Commission to 100%,\nand the Change Rate to 1% every 300 blocks (which equates to approximately 30 minutes). The\nfollowing statements are true:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The pool commission can be increased by 1% every 30 minutes. Bigger increases are not allowed.\nIncreases of less than or equal to 1% are not allowed sooner than 30 minutes since the last\ncommission update."),(0,i.kt)("li",{parentName:"ul"},"The Max Commission can only be decreased from 100%. Once decreased, it can be decreased again but\nit cannot be increased."),(0,i.kt)("li",{parentName:"ul"},"The Change Rate's maximum increase can only be decreased from 1%. Once decreased, it can be\ndecreased again but it cannot be increased."),(0,i.kt)("li",{parentName:"ul"},"The Change Rate's minimum delay between updates of 30 min can only be increased. Once increased,\nit can be increased again but it cannot be decreased.")),(0,i.kt)("h2",{id:"pool-lifecycle"},"Pool Lifecycle"),(0,i.kt)("admonition",{title:"Advanced How-to Guides",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"./learn-guides-staking-pools#pool-creation"},"this page")," for more information about the lifecycle\nof nomination pools. The cycle includes creation, upkeep and destruction.")),(0,i.kt)("h2",{id:"nomination-pools---slashing"},"Nomination Pools - Slashing"),(0,i.kt)("p",null,"Suppose the staking system ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-offenses"},"slashes")," a pool\u2019s underlying nomination account. In\nthat case, the slash is distributed evenly across the bonded pool, and the unbonding pools from\nslash era+1 through the slash apply era. Thus, any member who either a) was unbonding or b) was\nactively bonded in the aforementioned range of eras will be affected by the slash. In other words, a\nmember who may have been actively bonded during the offence is slashed pro rata based on its stake\nrelative to the total slash amount."),(0,i.kt)("p",null,"Unbonding pools need to be slashed to ensure all nominators who were in the bonded pool while it was\nbacking a validator that committed an offense are punished. Without these measures a nominator could\nunbond right after a validator equivocated with no consequences."),(0,i.kt)("p",null,"This strategy is unfair to members who joined after the slash because they get slashed as well, but\nit spares members who unbond. The latter is much more important for security: if a pool's validators\nattack the network, their members need to unbond fast! Avoiding additional slashes gives them an\nincentive to do that if validators get repeatedly slashed."),(0,i.kt)("h2",{id:"nominating-vs-joining-a-pool"},"Nominating vs Joining a Pool"),(0,i.kt)("p",null,"Nominating is the action of choosing validators. It does not simply involve bonding tokens.\nNominating is an active task, which implies that you regularly monitor that your stake is backing an\nactive validator in all the eras and check if you are receiving your staking rewards. More\nimportantly, ensure that the validators you chose always act in the best interests of the network\nprotocol and have less chance of getting ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-offenses"},"slashed"),". To nominate, you need a\nminimum of\n",(0,i.kt)(r.Z,{network:"polkadot",path:"query.staking.minNominatorBond",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),"",",\nand to receive rewards, you need at least a balance greater than the minimum active bond. If the\nvalidator misbehaves, It is worth noting that your stake is subject to slashing, irrespective of\nwhether you are at the top nominators or not."),(0,i.kt)("p",null,"As the minimum active bond is a dynamic value, it can make your nomination inactive when the\nthreshold goes above your bonded balance. Hence, to be eligible to earn rewards while nominating,\nyou would need to stake a much higher balance than the minimum active bond."),(0,i.kt)("p",null,"Nomination pools are a way to participate in staking with as little as 1 DOT and earn staking\nrewards. Nomination pools differ from custodial solutions (like staking through central exchanges)\nbecause they are non-custodial, native to Polkadot's protocol, permissionless, transparent, and run\nin a decentralized way by the community. Before joining a nomination pool, you must ensure that the\npool is earning rewards and nominating the validators that match your preferences. Participating in\npools is more of a set-and-forget action than nominating by yourself. The pool operator maintains\nthe list of validators nominated by the pool, and so, in a way, you are trusting the pool operator\nto act in your best interests. However, it is advised to check the validators nominated by the pool\nfrom time to time and change the pool if necessary."),(0,i.kt)("admonition",{title:"Minimum Active Nomination Value is Dynamic",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The minimum amount required to become an active nominator and earn rewards is\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(r.Z,{network:"polkadot",path:"query.staking.minimumActiveStake",defaultValue:2937e9,filter:"humanReadable",mdxType:"RPC"})),".\n","\nIf you have less DOT than the minimum active\nnomination and still want to participate in staking, you can join the nomination pools. You can now\nstake on Polkadot natively with just\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(r.Z,{network:"polkadot",path:"query.nominationPools.minJoinBond",filter:"humanReadable",defaultValue:1e10,mdxType:"RPC"})),"\n","\nin the nomination pools and earn staking rewards. For additional information, see\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/nomination-pools-are-live-stake-natively-with-just-1-dot/"},"this blog post"),".\nCheck the wiki doc on ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pools")," for more information.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Nominating"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Joining a Pool"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Minimum 250 DOT to nominate."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Minimum 1 DOT to be a member.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Rewards can be compounded automatically or sent to any account."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Rewards can be manually claimed to the pool member's account and be bonded in the pool again to compound them.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"If the active validator gets slashed, all active nominators are subjected to slashing."),(0,i.kt)("td",{parentName:"tr",align:"center"},"If the active validator gets slashed, all pool members are subjected to slashing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Can bond and stake DOT indefinitely."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Can bond and stake DOT until the pool exists.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Unbonding period of 28 days. Can switch validators without unbonding."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Unbonding period of 28 days. Need to unbond before switching to a different pool.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Maximum uncapped."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Maximum uncapped.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Should bond more than the ",(0,i.kt)("a",{parentName:"td",href:"/docs/learn-nominator#minimum-active-nomination-to-receive-staking-rewards"},"minimum active nomination")," in an era to be eligible to earn staking rewards, although it can depend on multiple other factors outlined in the linked document."),(0,i.kt)("td",{parentName:"tr",align:"center"},"A nomination pool earns rewards in an era if it satisfies all the conditions mentioned for the nominator (as the nomination pool is just a nominator from ",(0,i.kt)("a",{parentName:"td",href:"/docs/learn-phragmen"},"the NPoS system")," perspective).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Staked tokens can be used for participation in Governance."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Staked tokens cannot be used for participation in Governance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"/docs/learn-staking-advanced#claiming-rewards"},"Rewards payout")," can be triggered permissionlessly by anyone (typically done by the validator)."),(0,i.kt)("td",{parentName:"tr",align:"center"},"A pool member can self claim the rewards or can grant permission to any other account to claim and compound rewards on your behalf. See ",(0,i.kt)("a",{parentName:"td",href:"https://wiki.polkadot.network/docs/learn-nomination-pools#claim-permissions"},"Claim Permissions"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Bonded funds remain in your account."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Bonded funds are transferred to a pool account which is administered by the network protocol and is not accessible to anyone else. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/learn-account-advanced#system-accounts"},"System Accounts")," for more information.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Nominator manages the list of staked validators (up to 16)."),(0,i.kt)("td",{parentName:"tr",align:"center"},"Nominations managed by the pool operator.")))))}k.isMDXComponent=!0},85408:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/NPoS-Pools-b758caea750e9e772fe7fcdbd6babeca.png"},46601:()=>{}}]);