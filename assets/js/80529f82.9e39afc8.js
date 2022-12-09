"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9539],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,h=m["".concat(s,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(h,o(o({ref:e},d),{},{components:a})):n.createElement(h,o({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6902:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={id:"build-wallets",title:"Wallets",sidebar_label:"Wallets",description:"An overview of the current supported wallets on Polkadot.",keywords:["wallets","account","signer","supported wallets","balance","token"],slug:"../build-wallets"},s=void 0,p={unversionedId:"build/build-wallets",id:"build/build-wallets",title:"Wallets",description:"An overview of the current supported wallets on Polkadot.",source:"@site/../docs/build/build-wallets.md",sourceDirName:"build",slug:"/build-wallets",permalink:"/docs/build-wallets",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-wallets.md",tags:[],version:"current",lastUpdatedBy:"Leemo",lastUpdatedAt:1670586438,formattedLastUpdatedAt:"Dec 9, 2022",frontMatter:{id:"build-wallets",title:"Wallets",sidebar_label:"Wallets",description:"An overview of the current supported wallets on Polkadot.",keywords:["wallets","account","signer","supported wallets","balance","token"],slug:"../build-wallets"},sidebar:"docs",previous:{title:"Data",permalink:"/docs/build-data"},next:{title:"Substrate Connect",permalink:"/docs/build-substrate"}},d={},u=[{value:"Supported Wallets",id:"supported-wallets",level:3},{value:"Treasury Funded Wallets",id:"treasury-funded-wallets",level:3},{value:"Encryption Enhancement",id:"encryption-enhancement",level:2}],m={toc:u};function k(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The integration of a ",(0,l.kt)("a",{parentName:"p",href:"/docs/glossary#wallet"},"wallet")," with Polkadot\nallows for simple and easy access to private keys and signing\ntransactions. Below are some wallets that support Polkadot along with their development statuses."),(0,l.kt)("admonition",{title:"Non-Custodial Wallets",type:"tip"},(0,l.kt)("p",{parentName:"admonition"}," ",(0,l.kt)("strong",{parentName:"p"},"All the wallets listed on this page are non-custodial wallets"),". With non-custodial wallets, only you have access to your account's private key. With custodial wallets (like accounts on Central Exchanges), another party controls your private keys.")),(0,l.kt)("h3",{id:"supported-wallets"},"Supported Wallets"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://support.polkadot.network/"},"Polkadot support")," can provide assistance with issues related to\nPolkadot-JS UI, the Polkadot-JS extension, or Parity Signer. For other wallet software, you should\ncontact the developers of that wallet."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Wallet Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Development State"),(0,l.kt)("th",{parentName:"tr",align:null},"Team Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.parity.io/signer/"},"Parity Signer")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Parity"),(0,l.kt)("td",{parentName:"tr",align:null},"iOS and Android app used with ",(0,l.kt)("a",{parentName:"td",href:"https://parity.link/signer-companion"},"Companion")," or ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/extension"},"Polkadot-JS Extension"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/apps/releases"},"Polkadot-JS Desktop")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Parity"),(0,l.kt)("td",{parentName:"tr",align:null},"Win, Mac, Linux")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-JS UI")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Parity"),(0,l.kt)("td",{parentName:"tr",align:null},"Browser based wallet used with ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/extension"},"Polkadot-JS Extension"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Zondax/ledger-polkadot"},"Ledger")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Zondax"),(0,l.kt)("td",{parentName:"tr",align:null},"Hardware wallet app used with ",(0,l.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-JS UI")," (and ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/extension"},"Polkadot-JS Extension"),")")))),(0,l.kt)("h3",{id:"treasury-funded-wallets"},"Treasury Funded Wallets"),(0,l.kt)("p",null,"These are wallets which have been supported by either the Polkadot or Kusama Treasury via Treasury\nProposal. Links in the Proposals section go to the Polkassembly post where the Treasury Proposal was\ndiscussed."),(0,l.kt)("admonition",{title:"Web3 Technologies Foundation does not endorse these wallets",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"These third-party wallets have been funded by the community through either the Polkadot or Kusama\n",(0,l.kt)("a",{parentName:"p",href:"learn-treasury"},"Treasury"),". You should use your own due diligence in researching and using them. The\nofficial Polkadot Support cannot provide support for issues with these wallets or other non-Parity\ndeveloped wallets.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Wallet Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Proposals"),(0,l.kt)("th",{parentName:"tr",align:null},"Development State"),(0,l.kt)("th",{parentName:"tr",align:null},"Team Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Features"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://fearlesswallet.io/"},"Fearless Wallet")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/23"},"1"),", ",(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/34"},"2"),", ",(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/74"},"3"),", ",(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/102"},"4"),", ",(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/178"},"5")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"SORAMITSU"),(0,l.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking, Crowdloans, parachain accounts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polkawallet.io/"},"Polkawallet")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/32"},"1"),", ",(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/41"},"2")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Polkawallet"),(0,l.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking, Crowdloans, parachain accounts, Governance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://stylo-app.com/"},"Stylo")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polkadot.polkassembly.io/treasury/39"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Thibaut Sardan"),(0,l.kt)("td",{parentName:"tr",align:null},"Android"),(0,l.kt)("td",{parentName:"tr",align:null},"Air-gapped offline wallet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://novawallet.io/"},"Nova Wallet"),"*"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/122"},"1"),", ",(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/158"},"2")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Novasama Technologies"),(0,l.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking, Nomination Pools, OpenGov, Governance v1, XCM Transfers, Parity Signer & Ledger Support, DApp Support with Polkadot JS and Metamask/EVM Integration, Crowdloans, Parachain Accounts,  NFT Management")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://talisman.xyz/"},"Talisman")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polkadot.polkassembly.io/treasury/148"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"TalismanSociety"),(0,l.kt)("td",{parentName:"tr",align:null},"Browser"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking, Nomination Pools, Crowdloans, parachain accounts, Ledger support")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://subwallet.app/"},"SubWallet")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polkadot.polkassembly.io/treasury/138"},"1"),", ",(0,l.kt)("a",{parentName:"td",href:"https://polkadot.polkassembly.io/treasury/162"},"2")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"SubWallet"),(0,l.kt)("td",{parentName:"tr",align:null},"Browser, Android, iOS"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking, Crowdloans, parachain accounts, Parity Signer and Ledger Support, Staking (Nomination Pools), XCM Transfer, NFT management")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://polkadotjs.plus/"},"Polkadot js Plus")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/treasury/205"},"1")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"PolkaGate"),(0,l.kt)("td",{parentName:"tr",align:null},"Browser"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking, Nomination Pools, Proxy accounts, Crowdloans, Governance, Social recovery")))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"*","Note about Nova wallet"),(0,l.kt)("p",{parentName:"admonition"},"There's ",(0,l.kt)("strong",{parentName:"p"},"another")," Nova wallet that is ",(0,l.kt)("strong",{parentName:"p"},"unrelated")," to the Polkadot ecosystem. Users are advised\nto ensure that they use the correct Nova wallet by downloading the app from their official website:\n",(0,l.kt)("a",{parentName:"p",href:"https://novawallet.io/"},"https://novawallet.io/"),". Before creating or restoring accounts , it is wise\nto double-check the wallet website URLs through official channels (most projects have it listed on\ntheir official social media handles).")),(0,l.kt)("h2",{id:"encryption-enhancement"},"Encryption Enhancement"),(0,l.kt)("p",null,"Some newly generated ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," account files cannot be imported (restored) into older wallet software.\nThis is due to an enhanced encryption method, which is also noticeable in a slight delay when\nencrypting/decrypting your wallet. If you are unable to load a ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," file, please ensure that you\nare using the latest version of the wallet software. If you are still unable to load it, ensure that\nthe wallet software is using the latest version of the ",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/api/"},"Polkadot API"),"."))}k.isMDXComponent=!0}}]);