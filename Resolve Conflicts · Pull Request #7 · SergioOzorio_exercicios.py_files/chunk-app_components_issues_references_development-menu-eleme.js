"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_components_issues_references_development-menu-element_ts"],{70170:(e,t,r)=>{function n(e,t=0,{start:r=!0,middle:n=!0,once:s=!1}={}){let i,o=r,l=0,u=!1;function a(...c){if(u)return;let d=Date.now()-l;l=Date.now(),r&&n&&d>=t&&(o=!0),o?(o=!1,e.apply(this,c),s&&a.cancel()):(n&&d<t||!n)&&(clearTimeout(i),i=setTimeout(()=>{l=Date.now(),e.apply(this,c),s&&a.cancel()},n?t-d:t))}return a.cancel=()=>{clearTimeout(i),u=!0},a}function s(e,t=0,{start:r=!1,middle:s=!1,once:i=!1}={}){return n(e,t,{start:r,middle:s,once:i})}r.d(t,{n:()=>n,s:()=>s})},12841:(e,t,r)=>{r.r(t);var n=r(39595);function s(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o}let{getItem:i,setItem:o}=(0,r(74572).A)("localStorage"),l=class DevelopmentMenuElement extends HTMLElement{branchAndPullRequestListLoaded(){this.originalCheckedPullRequestIds=this.checkedPullRequestIds(),this.originalCheckedBranchIds=this.checkedBranchIds(),this.applyButton.disabled=!0,this.branchAndPullRequestListLoadEnd()}branchAndPullRequestListLoadStart(){this.branchAndPullRequestSearchInput.value?(this.branchAndPullRequestListSpinner.setAttribute("hidden","true"),this.branchAndPullRequestSearchInput.removeAttribute("is-loading")):(this.branchAndPullRequestList.textContent="",this.branchAndPullRequestListSpinner.removeAttribute("hidden"),this.branchAndPullRequestSearchInput.setAttribute("is-loading","true"))}branchAndPullRequestListLoadEnd(){this.branchAndPullRequestListSpinner.setAttribute("hidden","true"),this.branchAndPullRequestSearchInput.removeAttribute("is-loading")}repositoryListLoaded(){this.repositoryListLoadEnd()}repositoryListLoadStart(){this.repoSearchInput.value?(this.repositoryListSpinner.setAttribute("hidden","true"),this.repoSearchInput.removeAttribute("is-loading")):(this.repositoryList.textContent="",this.repositoryListSpinner.removeAttribute("hidden"),this.repoSearchInput.setAttribute("is-loading","true"))}repositoryListLoadEnd(){this.repositoryListSpinner.setAttribute("hidden","true"),this.repoSearchInput.removeAttribute("is-loading")}openBranchOrPullRequestDialog(e){e.preventDefault(),e.stopPropagation();let t=e.currentTarget,r=this.details.getAttribute("current-user")||"",n=this.details.getAttribute("current-issue-or-pull-request-number")||"",s=this.details.getAttribute("repo-nwo")||"",i=t?.getAttribute("selected-repo-nwo")||"",o=t?.getAttribute("selected-repo-id")||"",l=t?.getAttribute("selected-repo-url")||"";this.setRepo({currentUser:r,currentIssueOrPullRequestNumber:n,repoNwo:s,selectedRepoNwo:i,selectedRepoId:o,selectedRepoUrl:l}),this.toggleMenus()}toggleMenus(){this.details.open=!0,this.repoMenu.toggleAttribute("hidden"),this.branchOrPullRequestDialog.toggleAttribute("hidden"),this.repoMenu.hidden?this.branchAndPullRequestSearchInput.focus():this.repoSearchInput.focus()}openSecondLevelMenu(){this.details.open=!0,this.repoMenu.hidden=!0,this.branchOrPullRequestDialog.hidden=!1}openSelectedRepoFromStorage(e){let t=this.getSelectedReposLocalStorage(),r=this.details.getAttribute("current-user")||"",n=this.details.getAttribute("current-issue-or-pull-request-number")||"",s=this.details.getAttribute("repo-nwo")||"",i=t?.find(e=>e.currentUser===r&&e.currentIssueOrPullRequestNumber===n&&e.repoNwo===s);if(i&&!this.isDetailsOpen()){let{selectedRepoNwo:t,selectedRepoId:o,selectedRepoUrl:l}=i;this.openSecondLevelMenu(),this.setRepo({currentUser:r,currentIssueOrPullRequestNumber:n,repoNwo:s,selectedRepoNwo:t,selectedRepoId:o,selectedRepoUrl:l}),e.preventDefault(),e.stopPropagation()}}closeMenu(){this.details.open=!1}closeBranchOrPullRequestDialog(){this.removeSelectedRepoLocalStorage({currentUser:this.currentUser,currentIssueOrPullRequestNumber:this.currentIssueOrPullRequestNumber,repoNwo:this.repoNwo,selectedRepoNwo:this.selectedRepoNwo,selectedRepoId:this.selectedRepoId,selectedRepoUrl:this.selectedRepoUrl}),this.selectedRepoNwo="",this.branchAndPullRequestList.textContent="",this.toggleMenus()}toggleSelectBranch(e){this.toggleSelectBranchOrPullRequest(e,"label.js-branch-list-item"),this.setApplyButtonStatus()}toggleSelectPullRequest(e){let t=this.atLimit();this.atLimitMessage.hidden=!t,this.toggleSelectBranchOrPullRequest(e,"label.js-pull-request-list-item"),this.toggleUnselectedItemsDisabled(t),this.setApplyButtonStatus()}toggleSelectBranchOrPullRequest(e,t="label"){let r=e.target,n=r.closest(t);n?.setAttribute("aria-checked",String(r.checked))}toggleUnselectedItemsDisabled(e){for(let t of this.pullRequestInputsList){let r=t.closest("label");r?.setAttribute("aria-disabled",String(e&&!t.checked))}}stopPropagation(e){e.stopPropagation()}isDetailsOpen(){return this.details.open}atLimit(){let e=this.linkableItemList.getAttribute("menu-max-options")||"",t=this.checkedPullRequestIds(),r=this.originalCheckedPullRequestIds;return t.length-r.length>=Number(e)}areArraysEqual(e,t){return JSON.stringify(e.sort())===JSON.stringify(t.sort())}setApplyButtonStatus(){this.areArraysEqual(this.originalCheckedPullRequestIds,this.checkedPullRequestIds())&&this.areArraysEqual(this.originalCheckedBranchIds,this.checkedBranchIds())?this.applyButton.disabled=!0:this.applyButton.disabled=!1}setRepo(e){let{currentUser:t,currentIssueOrPullRequestNumber:r,repoNwo:n,selectedRepoNwo:s,selectedRepoId:i,selectedRepoUrl:o}=e;this.setSelectedRepoLocalStorage(e),this.dialogTitle.innerHTML=s,this.currentUser=t,this.currentIssueOrPullRequestNumber=r,this.repoNwo=n,this.selectedRepoNwo=s,this.selectedRepoId=i,this.selectedRepoUrl=o,this.selectedRepoIdInput.value=i,this.branchAndPullRequestSearch.src=o,this.branchAndPullRequestSearchInput.focus()}getSelectedReposLocalStorage(){return JSON.parse(i(this.STORAGE_KEY)||"[]")}setSelectedRepoLocalStorage(e){let t=this.softRemoveSelectedRepoLocalStorage(e).slice(0,this.MAX_SELECTED_REPOS-1);t.unshift(e),o(this.STORAGE_KEY,JSON.stringify(t))}softRemoveSelectedRepoLocalStorage(e){return this.getSelectedReposLocalStorage().filter(t=>t.selectedRepoNwo!==e.selectedRepoNwo&&t.repoNwo!==e.repoNwo&&t.currentUser===e.currentUser)}removeSelectedRepoLocalStorage(e){let t=this.softRemoveSelectedRepoLocalStorage(e);o(this.STORAGE_KEY,JSON.stringify(t))}resetForm(){this.closeMenu()}checkedPullRequestIds(){return this.pullRequestInputsList.filter(e=>e.checked).map(e=>e.value)}checkedBranchIds(){return this.branchInputsList.filter(e=>e.checked).map(e=>e.value)}constructor(...e){super(...e),this.currentUser="",this.currentIssueOrPullRequestNumber="",this.repoNwo="",this.selectedRepoNwo="",this.selectedRepoId="",this.selectedRepoUrl="",this.originalCheckedPullRequestIds=[],this.originalCheckedBranchIds=[],this.STORAGE_KEY="developmentMenu:selectedRepos",this.MAX_SELECTED_REPOS=100}};s([n.aC],l.prototype,"details",void 0),s([n.aC],l.prototype,"repoMenu",void 0),s([n.aC],l.prototype,"branchOrPullRequestDialog",void 0),s([n.aC],l.prototype,"dialogTitle",void 0),s([n.aC],l.prototype,"branchAndPullRequestSearch",void 0),s([n.aC],l.prototype,"repoSearchInput",void 0),s([n.aC],l.prototype,"branchAndPullRequestSearchInput",void 0),s([n.aC],l.prototype,"repositoryListSpinner",void 0),s([n.aC],l.prototype,"branchAndPullRequestListSpinner",void 0),s([n.aC],l.prototype,"repositoryList",void 0),s([n.aC],l.prototype,"branchAndPullRequestList",void 0),s([n.aC],l.prototype,"linkableItemList",void 0),s([n.aC],l.prototype,"selectedRepoIdInput",void 0),s([n.aC],l.prototype,"atLimitMessage",void 0),s([n.aC],l.prototype,"applyButton",void 0),s([n.zV],l.prototype,"pullRequestInputsList",void 0),s([n.zV],l.prototype,"branchInputsList",void 0),l=s([n.p_],l)},27756:(e,t,r)=>{let n;function s(){if(!n)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return n}function i(){return n?.locale??"en-US"}function o(){return!!s().login}r.d(t,{JK:()=>i,M3:()=>o,_$:()=>s}),!function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{n=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},5728:(e,t,r)=>{r.d(t,{G:()=>s,K:()=>i});var n=r(97156);let s=n.XC?.readyState==="interactive"||n.XC?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.XC?.addEventListener("DOMContentLoaded",()=>{e()})}),i=n.XC?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.cg?.addEventListener("load",e)})},97564:(e,t,r)=>{r.d(t,{G7:()=>u,XY:()=>a,fQ:()=>l});var n=r(5225),s=r(27756);function i(){return new Set((0,s._$)().featureFlags.map(e=>e.toLowerCase()))}let o=r(97156).X3?i:(0,n.A)(i);function l(){return Array.from(o())}function u(e){return o().has(e.toLowerCase())}let a={isFeatureEnabled:u}},14740:(e,t,r)=>{r.d(t,{k:()=>o,v:()=>l});var n=r(5225),s=r(97156);let i=(0,n.A)(function(){return s.XC?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),o=(0,n.A)(function(){return"enterprise"===i()}),l="webpack"},74572:(e,t,r)=>{r.d(t,{A:()=>o,D:()=>l});var n=r(97156),s=r(51528);let i=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function o(e,t={throwQuotaErrorsOnSet:!1},r=n.cg,o=e=>e,l=e=>e){let u;try{if(!r)throw Error();u=r[e]||new i}catch{u=new i}let{throwQuotaErrorsOnSet:a}=t;function c(e){t.sendCacheStats&&(0,s.i)({incrementKey:e})}function d(e){try{if(u.removeItem(e),t.ttl){let t=`${e}:expiry`;u.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let r=u.getItem(e);if(!r)return null;let n=`${e}:expiry`,s=Number(u.getItem(n));if(s&&t>s)return d(e),d(n),c("SAFE_STORAGE_VALUE_EXPIRED"),null;return c("SAFE_STORAGE_VALUE_WITHIN_TTL"),o(r)}catch(e){return null}},setItem:function(e,r,n=new Date().getTime()){try{if(u.setItem(e,l(r)),t.ttl){let r=`${e}:expiry`,s=n+t.ttl;u.setItem(r,s.toString())}}catch(e){if(a&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:d,clear:u.clear,key:u.key,get length(){return u.length}}}function l(e){return o(e,{throwQuotaErrorsOnSet:!1},n.cg,JSON.parse,JSON.stringify)}},97156:(e,t,r)=>{r.d(t,{KJ:()=>n.KJ,Kn:()=>s.Kn,X3:()=>n.X3,XC:()=>s.XC,cg:()=>s.cg,fV:()=>s.fV,g5:()=>n.g5});var n=r(15572),s=r(86733)},86733:(e,t,r)=>{r.d(t,{Kn:()=>i,XC:()=>n,cg:()=>s,fV:()=>o});let n="undefined"==typeof document?void 0:document,s="undefined"==typeof window?void 0:window,i="undefined"==typeof history?void 0:history,o="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:"",href:""}:location},15572:(e,t,r)=>{r.d(t,{KJ:()=>i,X3:()=>s,g5:()=>o});var n=r(86733);let s=void 0===n.XC,i=!s;function o(){return!!s||!!n.XC.querySelector('react-app[data-ssr="true"]')}},51528:(e,t,r)=>{r.d(t,{X:()=>p,i:()=>a});var n=r(97156),s=r(5728),i=r(14740),o=r(97564),l=r(70170);let u=[];function a(e,t=!1,r=.5){if(!0!==(0,o.G7)("BROWSER_STATS_DISABLED")){if(r<0||r>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=!!n.XC?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=p(),e.bundler=i.v,Math.random()<r&&u.push(e),t?h():d()}}let c=null,d=(0,l.n)(async function(){await s.K,null==c&&(c=window.requestIdleCallback(h))},5e3);function h(){if(c=null,!u.length)return;let e=n.XC?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(e){for(let t of function(e){let t=[],r=e.map(e=>JSON.stringify(e));for(;r.length>0;)t.push(function(e){let t=e.shift(),r=[t],n=t.length;for(;e.length>0&&n<=65536;){let t=e[0].length;if(n+t<=65536){let s=e.shift();r.push(s),n+=t}else break}return r}(r));return t}(u))!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${t.join(",")}] }`);u=[]}}function p(){return!!n.XC?.head?.querySelector('meta[name="user-staff"]')?.content}n.XC?.addEventListener("pagehide",h),n.XC?.addEventListener("visibilitychange",h)},5225:(e,t,r)=>{function n(...e){return JSON.stringify(e,(e,t)=>"object"==typeof t?t:String(t))}function s(e,t={}){let{hash:r=n,cache:s=new Map}=t;return function(...t){let n=r.apply(this,t);if(s.has(n))return s.get(n);let i=e.apply(this,t);return i instanceof Promise&&(i=i.catch(e=>{throw s.delete(n),e})),s.set(n,i),i}}r.d(t,{A:()=>s})}}]);
//# sourceMappingURL=app_components_issues_references_development-menu-element_ts-88e74675c005.js.map