(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[24,127],{"/9aa":function(e,t,n){var i=n("NykK"),r=n("ExA7");e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==i(e)}},"078/":function(e,t,n){n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a}));const i=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],r=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","STLProductsFeed","RelatedProductsFeed","ShoppingSquareGridRelatedProducts","UserProfilePinGrid"],o=[...r,"ShoppingSquareGridRelatedProductsBoth","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ShoppingSquareGridRelatedProductsMetadata","ProductPinsFeed","ShoppingSquareGridCrop","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],a=["BaseBoardPinGrid"]},DBEV:function(e,t,n){var i=n("q1tI");var r={backgroundColor:"transparent"},o={backgroundColor:"rgba(216, 216, 216, 0.37)"},a={borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"},s={outline:"0"},c=n("n6mq"),d=n("nKUr");function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class u extends i.Component{constructor(...e){super(...e),l(this,"state",{hovered:!1}),l(this,"handleMouseEnter",()=>this.setState({hovered:!0})),l(this,"handleMouseLeave",()=>this.setState({hovered:!1}))}render(){const{backgroundHaloSize:e,onClick:t,accessibilityLabel:n}=this.props,i={height:e,width:e},l={border:0,display:"block",background:"transparent",cursor:"pointer",...s},u={...a,...r,...this.state.hovered?o:{}};return Object(d.jsx)("button",{"aria-label":n,type:"button",style:l,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onClick:e=>t&&t({event:e}),children:Object(d.jsx)("div",{style:{...i,...u},children:Object(d.jsx)(c.e,{rounding:"circle",children:Object(d.jsx)(c.v,{accessibilityLabel:"",icon:"flag",size:e/2,color:"lightGray"})})})})}}t.a=u},EDqd:function(e,t,n){n.d(t,"a",(function(){return a}));const i=["236x","474x","564x","736x"];function r(e){function t(e,{imageKey:t,height:n,width:i}){return e.images&&e.images[t]&&(e={...e,images:{...e.images,[t]:{...e.images[t],height:n,width:i}}}),e}const n=i.map((function(t){const n=Math.min(...e.map(e=>e.images&&e.images[t]&&e.images[t].height||1/0)),i=Math.min(...e.map(e=>e.images&&e.images[t]&&e.images[t].width||1/0));return{imageKey:t,height:n,width:i}}));return e.map(e=>n.reduce(t,e))}function o(e,t){return e.concat([{images:t&&t.canonical_images,image_signature:t&&t.image_signature}])}function a(e,t,n){const i=[{images:e}];return{carousel_slots:r((t&&t.additional_images).reduce(o,i)),index:n||0,id:t.id}}},FDmi:function(e,t,n){n.d(t,"a",(function(){return a}));var i=n("n6mq"),r=n("nKUr");const o=(e,t)=>{const n=null==e?void 0:e.includes("images/user/default");return Boolean(n&&t)};function a({accessibilityLabel:e,name:t,outline:n,size:a,src:s,verified:c}){return Object(r.jsx)(i.b,{accessibilityLabel:e,name:t,outline:n,size:a,src:o(s,t)?void 0:s,verified:c})}},KPZG:function(e,t,n){n.d(t,"b",(function(){return T}));var i=n("q1tI"),r=n("/MKj"),o=n("FDmi"),a=n("T+9/"),s=n("T0g9"),c=n("Ye/N"),d=n("qD10"),l=n("DBEV"),u=n("TgLd"),p=n("xjqW");var h=({id:e,viewParameter:t,viewType:n})=>Object(p.b)({id:e,isProduct:!1,isPromoted:!1,videoDuration:null,viewParameter:t,viewType:n,type:"pin"}),m=n("eOdZ"),g=n("M1Uz"),b=n("nGHF"),y=n("n6mq"),f=n("nKUr");function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class j extends i.PureComponent{constructor(...e){var t;super(...e),t=this,v(this,"state",{showModal:!1,reportType:null}),v(this,"handleDismiss",()=>this.setState({showModal:!1})),v(this,"handleClick",()=>{const{reportType:e}=this.state;"image"===e?this.reportSuggestionImage():this.reportSuggestionText()}),v(this,"reportSuggestionImage",(async function(){const{imgSignature:e,reportImage:n}=t.props;t.setState({showModal:!1});n((await m.a.create("GetPinFromSignature",{imgSignature:e}).callGet()).resource_response.data.id)})),v(this,"reportSuggestionText",()=>{const{handleReport:e,toastManagerContext:t}=this.props;e&&(e(),t.showToast(({onHide:e})=>Object(f.jsx)(g.a,{onHide:e,text:c.a._("Thanks for your report! This will be reviewed by our Trust and Safety Team","ReportingFlag.Toast.text","Toast after reporting a search suggestion")})),this.handleDismiss())}),v(this,"showModal",({event:e})=>{e.stopPropagation(),e.preventDefault(),this.setState({showModal:!0})})}render(){const{showModal:e}=this.state;return Object(f.jsxs)(i.Fragment,{children:[Object(f.jsx)(l.a,{accessibilityLabel:c.a._("Report","ReportingFlag.FlagButton.accessibilityLabel","Accessibility label for report icon for search suggestion"),onClick:this.showModal,backgroundHaloSize:24}),e&&Object(f.jsx)(u.b,{accessibilityModalLabel:c.a._("Report search term","ReportingFlag.Modal.accessibilityModalLabel","accessible label for report suggestion modal"),heading:c.a._("Report search term","ReportingFlag.Modal.heading","Heading for report suggestion modal"),onDismiss:this.handleDismiss,size:"sm",children:Object(f.jsxs)(y.e,{children:[Object(f.jsx)(y.e,{padding:5,children:Object(f.jsx)(y.Y,{children:c.a._("When you flag this, our Trust and Safety team will review it. If it doesn't meet our Community Guidelines, it will be blocked.","ReportingFlag.Box.Text.report","What will happen when you report a suggestion")})}),Object(f.jsxs)(y.e,{role:"list",display:"flex",direction:"column",marginBottom:4,paddingX:5,children:[Object(f.jsxs)(y.e,{alignItems:"center",paddingY:1,display:"flex",direction:"row",children:[Object(f.jsx)(y.K,{checked:"text"===this.state.reportType,id:"textType",onChange:()=>this.setState({reportType:"text"}),value:"Report search text"}),Object(f.jsx)(y.e,{flex:"grow",children:Object(f.jsx)(y.y,{htmlFor:"textType",children:Object(f.jsx)(y.e,{paddingX:2,children:Object(f.jsx)(y.Y,{children:"Report search text"})})})})]}),Object(f.jsxs)(y.e,{alignItems:"center",paddingY:1,display:"flex",direction:"row",children:[Object(f.jsx)(y.K,{checked:"image"===this.state.reportType,id:"imageType",onChange:()=>this.setState({reportType:"image"}),value:"Report search image"}),Object(f.jsx)(y.e,{flex:"grow",children:Object(f.jsx)(y.y,{htmlFor:"imageType",children:Object(f.jsx)(y.e,{paddingX:2,children:Object(f.jsx)(y.Y,{children:"Report search image"})})})})]})]}),Object(f.jsx)(y.o,{}),Object(f.jsxs)(y.e,{display:"flex",justifyContent:"end",padding:2,children:[Object(f.jsx)(y.e,{margin:2,children:Object(f.jsx)(y.f,{onClick:this.handleDismiss,text:c.a._("Cancel","ReportingFlag.Box.Button.text.cancel","Text for cancel button when reporting search suggestion")})}),Object(f.jsx)(y.e,{margin:2,children:Object(f.jsx)(y.f,{color:"red",onClick:this.handleClick,text:c.a._("Report","ReportingFlag.Box.Button.text.report","Button label to report search suggestion"),disabled:!this.state.reportType})})]})]})})]})}}var w=Object(r.connect)(null,(e,t)=>({reportImage:n=>e(h({id:n,viewParameter:t.viewParameter,viewType:t.viewType}))}))(Object(b.c)(j)),x=n("eBDd"),O=n("flQA");const _={bubbleOverlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},hoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.6)"}},T=({storyCategory:e,query:t,referringSource:n,bubbleId:i,storyId:r})=>{const o=[0,24,21,25,26].includes(e),a=Object(s.a)({q:t,rs:n||void 0,b_id:i,source_id:r});return o?"/discover/article/"+i:"/search/pins/"+(a?"?"+a:"")};t.a=Object(r.connect)((function({viewer:e}){return{viewer:e}}),()=>({}))((function({bubble:e,height:t,storyId:n,width:r,onClick:s,referringSource:l,contextLogData:u,viewType:p,viewParameter:h,slotIndex:m,handleReport:g,showFlag:b,imgSignature:v,onMouseEnter:j,onMouseLeave:I,isHovered:S,viewer:k}){const[C,D]=Object(i.useState)(!1),{id:P,action:E,cover_images:M,dominant_colors:A,identifier_icon_type:R,title:L,story_category:F,curator:N}=e,G=M[0]&&(M[0]["280x280"]||M[0]["236x"]),U=Object(x.a)(L&&L.format||"",L&&L.args||{}),H=A&&A.length?A[0]:"gray",W=(null==E?void 0:E.url)||T({storyCategory:F,query:U,referringSource:l,bubbleId:P,storyId:n});return Object(f.jsx)(a.a,{impressionAuxFields:{storyCategory:F,storyIdStr:n},impressionType:"Article",loggingId:P,viewType:p,viewParameter:h,slotIndex:m,contextLogData:{story_id:n,...u},children:Object(f.jsx)(y.e,{children:Object(f.jsx)("div",{onMouseEnter:()=>{j?j():D(!0)},onMouseLeave:()=>{I?I():D(!1)},children:Object(f.jsx)(d.a,{to:W,onClick:()=>{s&&s(P)},children:Object(f.jsxs)(y.C,{rounding:4,children:[Object(f.jsx)(y.e,{width:r||"100%",height:t,dangerouslySetInlineStyle:{__style:{backgroundColor:H}},children:G&&Object(f.jsx)(y.x,{alt:U,color:H,fit:"cover",naturalHeight:G.height,naturalWidth:G.width,src:G.url})}),Object(f.jsx)(y.e,{height:t,width:r||"100%",dangerouslySetInlineStyle:{__style:S||C?_.hoverOverlay:G&&_.bubbleOverlay},position:"absolute",top:!0,left:!0}),N&&26!==F&&Object(f.jsx)(y.e,{position:"absolute",top:!0,left:!0,padding:2,children:Object(f.jsx)(o.a,{outline:!0,size:"xs",src:N.image_small_url,name:N.full_name})}),R&&R!==O.a&&Object(f.jsx)(y.e,{alignItems:"center",color:"white",display:"flex",height:24,justifyContent:"center",left:!0,margin:2,opacity:.8,position:"absolute",rounding:"circle",top:!0,width:24,children:Object(f.jsx)(y.v,{icon:Object(O.b)(R),accessibilityLabel:c.a._("Shopping icon","bubble.shoppingIcon.label","Accessibility label for bubble shopping Icon"),color:"darkGray",size:12})}),Object(f.jsx)(y.e,{display:"flex",height:t,width:r||"100%",position:"absolute",top:!0,padding:3,alignItems:26===F?"end":"center",justifyContent:"center",children:Object(f.jsxs)(y.e,{display:"flex",direction:"column",children:[t>200?Object(f.jsx)(y.u,{size:"md",align:"center",color:"white",children:U}):Object(f.jsx)(y.Y,{align:"center",color:"white",weight:"bold",children:U}),N&&26===F&&Object(f.jsxs)(y.e,{display:"flex",justifyContent:"center",alignItems:"center",marginTop:4,children:[Object(f.jsx)(y.e,{marginEnd:2,children:Object(f.jsx)(o.a,{outline:!0,size:"xs",src:N.image_small_url,name:N.full_name})}),Object(f.jsx)(y.Y,{size:"sm",color:"white",children:N.full_name})]})]})}),k.isAuth&&k.isEmployee&&b&&(S||C)?Object(f.jsx)(y.e,{position:"absolute",bottom:!0,right:!0,marginBottom:1,children:Object(f.jsx)(w,{handleReport:g,viewType:p,viewParameter:h,imgSignature:v||""})}):null]})})})})})}))},QAzJ:function(e,t,n){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return c}));var i=n("q1tI"),r=n("hlDC");function o(e){const t=Object(r.b)(),n=t.v2GetGroup(e)||"",o=function(e){return e.startsWith("enabled")||e.startsWith("employee")}(n),a=(e=>{const t=Object(i.useRef)(!1),n=Object(i.useRef)(!1);return Object(i.useEffect)(()=>{t.current=!0,n.current&&e()},[]),()=>{t.current?e():n.current=!0}})(()=>{t.v2ActivateExperiment(e)});return e=>(null!=e&&e.dangerouslySkipActivation||a(),{group:n,anyEnabled:o})}function a(e,t=!0){const n=o(e);return t?n():{group:"",anyEnabled:!1}}function s(e,t=!0){const n=o(e),{group:i,anyEnabled:r}=n({dangerouslySkipActivation:!0});return t?{group:i,anyEnabled:r}:{group:"",anyEnabled:!1}}function c(e,t=!0){const n=o(e),{group:i,anyEnabled:r}=n({dangerouslySkipActivation:!0});return t?{group:i,anyEnabled:r,customActivate:()=>{n()}}:{group:"",anyEnabled:!1,customActivate:()=>{}}}},"T+9/":function(e,t,n){var i=n("q1tI"),r=n("i8i4"),o=n("/MKj"),a=n("ZbwW"),s=n("D2p8"),c=n("U4JR");function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l={Article:{impressionType:"articleImpressions",idType:"articleIdStr",eventType:3829},Pin:{impressionType:"pinImpressions",idType:"pinIdStr",eventType:18},Board:{impressionType:"boardImpressions",idType:"boardIdStr",eventType:3700},Interest:{impressionType:"topicImpressions",idType:"topicIdStr",eventType:3703},Search:{impressionType:"searchImpressions",idType:"term",eventType:3803},Story:{impressionType:"storyImpressions",idType:"storyIdStr",eventType:170},ActivationCard:{impressionType:"activationCardImpressions",idType:"experienceIdStr",eventType:8547},User:{impressionType:"userImpressions",idType:"userIdStr",eventType:3704},News:{impressionType:"newsHubData",idType:"newsIdStr",eventType:4110},Guide:{impressionType:"guideImpressions",idType:"term",eventType:7573},TodayArticle:{impressionType:"todayArticleImpressions",idType:"todayArticleIdStr",eventType:8569},Banner:{impressionType:"bannerImpressions",idType:"userIdStr",eventType:9061},Comment:{impressionType:"commentImpressions",idType:"commentIdStr",eventType:9127}};class u extends i.Component{constructor(e){super(e),d(this,"trackImpression",()=>{try{this.node=Object(r.findDOMNode)(this),this.node instanceof HTMLElement&&this.impressionsFramework.start(this.node).onExitViewport(this.logImpression).setDebugId(this.props.loggingId||"unknown")}catch(e){window.console.error('Can only track impressions for type "HTMLElement"')}}),d(this,"logImpression",e=>{const{carousel_data:t,closeupImpressionType:n,closeupNavigationType:i,componentType:r,contextLogData:o,elementType:a,impressionAuxFields:s,impressionType:d,loggingId:u,objectIdStr:p,slotIndex:h,trackCarousel:m,viewData:g,viewParameter:b,viewType:y}=this.props,f=l[d],v=f.idType,j=e.forcedExit&&"removed"===e.forcedExit?0:void 0,w={endTime:e.endTime,[v]:u,slotIndex:h,time:e.startTime,renderDuration:e.endTime-e.startTime,type:n,...s,forcedExit:j};if(m||Object(c.b)(f.eventType,{closeup_navigation_type:i,component:r,element:a,eventData:{[f.impressionType]:[w]},objectIdStr:p,view:y,viewData:g||{},viewParameter:b,...o}),t&&m){const{carousel_slots:e,index:n,id:i}=t;Object(c.b)(7352,{component:r,eventData:{pinCarouselSlotImpressions:[{...w,carouselDataId:Number(i),carouselSlotId:e[n]&&Number(e[n].id),slotIndex:n}]},objectIdStr:p,view:y,viewData:g||{},viewParameter:b,...o})}}),this.impressionsFramework=e.impressionsFramework||s.c}componentDidMount(){this.props.inImpressionExp&&!this.impressionsFramework.inExperiment&&this.impressionsFramework.setExperimentStatus(!0),this.props.isPaused||this.trackImpression()}componentDidUpdate(e){e.isPaused&&!this.props.isPaused&&this.trackImpression()}componentWillUnmount(){this.node instanceof HTMLElement&&this.impressionsFramework.stop(this.node)}render(){return i.Children.only(this.props.children)}}t.a=Object(o.connect)((function({pins:e},{loggingId:t}){const n=e[t||""]||{};return{carousel_data:Object(a.a)(n)}}),()=>({}))(u)},TSYQ:function(e,t,n){var i;!function(){var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)&&i.length){var a=r.apply(null,i);a&&e.push(a)}else if("object"===o)for(var s in i)n.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},U4JR:function(e,t,n){n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var i=n("m2Wt"),r=n("h4v/"),o=n("ajUs"),a=n("zpPL");const s=()=>a.a.instance.getState(),c=()=>{const{advertiser:e,adminUser:t,viewer:n}=s(),i={};return e&&e.id&&(i.advertiser_id=e.id),t&&n&&n.username&&(i.sterling_on_steroids_ldap=t,i.viewed_user=n.username),i},d=(e,{element:t,eventData:n,component:r,objectId:a,view:d,viewParameter:l,viewData:u,durationNs:p,pairId:h,clientTrackingParams:m,...g})=>{const b=i.a.fromEventType(e);return b.setElement(t),b.updateEventData(n),b.setComponent(r),a&&b.setObjectIdStr(a),b.setDurationNs(p),b.updateAuxData({...g,...c()}),b.setViewType(d),b.setViewParameter(l),b.setViewData(u),b.setPairId(h),b.setClientTrackingParams(m||(e=>{const{pins:t,location:n}=s(),i=t&&e&&t[e];return i?Object(o.a)(i,n)||i.tracking_params+"~0":void 0})(a)),b};function l(e,t={}){r.a.getInstance().addEvent(d(e,t))}const u={flushContextEvents:()=>r.a.getInstance().flushEvents(!0),logContextEvent:({aux_data:e,clientTrackingParams:t,component:n,duration_ns:i,element:r,event_data:o,event_type:a,object_id_str:s,pair_id:c,view_data:d,view_parameter:u,view_type:p})=>{l(a,{...e,element:r,eventData:o,component:n,objectId:s,view:p,viewParameter:null!=u?u:void 0,viewData:d,durationNs:i,pairId:c,clientTrackingParams:t})}}},Y8Sn:function(e,t,n){n.d(t,"j",(function(){return r})),n.d(t,"i",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return c})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return l})),n.d(t,"k",(function(){return u})),n.d(t,"l",(function(){return p})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return g}));var i=n("BcL7");const r=e=>!!e&&!!e.video_list,o=({story_pin_data_id:e})=>!!e,a=e=>e.rich_summary&&e.rich_summary.products&&e.rich_summary.products.length>0||e.rich_metadata&&e.rich_metadata.products&&e.rich_metadata.products.length>0,s=e=>!!e.promoter&&!e.is_downstream_promotion,c=e=>!!e.video_status&&5!==e.video_status,d=e=>!!e.creator_class,l=()=>["employees","enabled"].includes(i.a.getInstance().v2ActivateExperiment("unification_web_pin_click")),u=(e,t)=>{const{organicVideosAutoplaying:n,promotedVideosAutoplaying:i}=t,r={...n,...i};return!!r[e]&&!r[e].paused},p=e=>["email","messages","deep_linking"].includes(e),h=(e,t)=>{const{organicVideosAutoplaying:n,promotedVideosAutoplaying:i}=t,r={...n,...i};for(const o in r){const{paused:t}=r[o];if(o!==e&&!t)return!1}return!0},m=(e,t)=>{const{organicVideosAutoplaying:n,promotedVideosAutoplaying:i}=t,r={...n,...i};return r[e]&&r[e].currentTime},g=()=>{let e=800,t=400;return"undefined"!=typeof window&&(e=window.innerHeight,t=window.innerWidth),{windowHeight:e,windowWidth:t}}},"Ye/N":function(e,t,n){Error;const i={_:e=>e,set(e){Object.assign(this,e)}};t.a=i},ZbwW:function(e,t,n){n.d(t,"a",(function(){return r}));var i=n("EDqd");function r(e){const t=(((e||{}).rich_metadata||{}).products||[])[0]||{};return t&&t.additional_images&&t.additional_images.length>0?Object(i.a)(e.images,t,e.carousel_data&&e.carousel_data.index):e&&e.carousel_data}},a9a9:function(e,t,n){n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n("zpPL");const r=e=>i.a.instance.dispatch(function(e){return{type:"SPAMMY_CLICKTHROUGH_WARNING_SHOW",payload:e}}(e)),o=()=>i.a.instance.dispatch({type:"SPAMMY_CLICKTHROUGH_WARNING_DISMISS"})},flQA:function(e,t,n){n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));const i=-1;function r(e){switch(e){case 0:return"shopping-bag";case 1:return"tag";default:return"search"}}},hlDC:function(e,t,n){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var i=n("1dBE");const{Provider:r,Consumer:o,useHook:a}=Object(i.c)("ExperimentContext")},qD10:function(e,t,n){var i=n("q1tI"),r=n("/MKj"),o=n("zwad"),a=n("ANjH"),s=n("Y8Sn"),c=n("z19Z"),d=n("EC67"),l=n("nKUr");function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class p extends i.Component{constructor(...e){super(...e),u(this,"state",{spamCheck:null}),u(this,"spamCheckExperimentGroup",null),u(this,"mounted",!1),u(this,"handleSpammyDomainCheck",()=>{const{external:e,location:t,pinId:n,pin:i,surface:r,to:a}=this.props;(e||o.a.isOffsiteUrl(a))&&i&&!Object(s.g)(i)&&Object(c.f)({location:t,pinId:n,surface:r})&&a&&Object(c.a)({isMounted:this.mounted,pin:i,location:t,spamCheckCallback:e=>this.setState({spamCheck:e}),href:a})}),u(this,"handleClick",e=>{const{auxData:t,external:n,focusOnBody:i,forceOnClick:r,history:a,internalNewTab:s,location:d,onClick:l,pin:u,pinId:p,shouldShowAltLinks:h,stopPropagation:m,to:g}=this.props;m&&e.stopPropagation();const b=n||o.a.isOffsiteUrl(g);Object(c.b)({isExternalLink:b,event:e,forceOnClick:r})||(e.nativeEvent.preventDefault(),l&&l(e),g&&!h&&(b?Object(c.c)({href:g,pinId:p,pin:u,location:d,auxData:t,spamCheck:this.state.spamCheck}):Object(c.d)({event:e,onHistoryChange:()=>{i&&Object(c.e)()},href:g,history:a,target:s?"blank":null})))})}componentDidMount(){this.mounted=!0,this.handleSpammyDomainCheck()}componentWillUnmount(){this.mounted=!1}componentDidUpdate(){null===this.state.spamCheck&&this.handleSpammyDomainCheck()}render(){const{accessibilityLabel:e,children:t,className:n,"data-test-id":i,external:r,noFollow:o,setAnchorRef:a,style:s,tabIndex:c,target:d,to:u}=this.props;return Object(l.jsx)("a",{"aria-label":e,className:n,"data-test-id":i,href:u,onClick:this.handleClick,ref:a,rel:r||o?"nofollow":"",style:s,tabIndex:c,target:d?"_blank":null,children:t})}}t.a=Object(a.compose)(Object(r.connect)((function({pins:e},{pinId:t}){return{pin:t&&e&&e[t]}}),()=>({})),d.k)(p)},xjqW:function(e,t,n){function i({id:e,isProduct:t,isPromoted:n,videoDuration:i,viewParameter:r,viewType:o,type:a}){return{type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:t,isPromoted:n,videoDuration:i,viewParameter:r,viewType:o,type:a}}}function r(){return{type:"REPORT_CONTENT_DISMISS"}}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}))},z19Z:function(e,t,n){n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return y}));var i=n("TPPM"),r=n("eOdZ"),o=n("gxu6"),a=n("T0g9");var s={open(e,t,n,r,s){const c=Math.round(1e3*Math.random())+"",d=Math.round(1e3*Math.random())+"";o.b("offsite_"+c,d);const l={token:c+"-"+d,url:e,csr:void 0,pin:void 0,client_tracking_params:r,aux_data:s?JSON.stringify(s):void 0};t?l.pin=t:n&&(l.csr=n),Object(i.a)("/offsite/?"+Object(a.a)(l),!0)}},c=n("ajUs");var d=n("zwad"),l=n("a9a9"),u=n("078/");const p=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},h=({isExternalLink:e,event:t,forceOnClick:n})=>!e&&(t.metaKey||t.ctrlKey)&&!n,m=({location:e,pinId:t="",surface:n})=>{const i=Boolean(n),r=u.a.includes(n),o=e.pathname.includes(t||"");return!!(i&&!r||o)},g=async({isMounted:e,pin:t,location:n,spamCheckCallback:i,href:o})=>{const a=r.a.create("OffsiteLinkResource",{check_only:!0,client_tracking_params:Object(c.a)(t,n),pin_id:null==t?void 0:t.id,url:o}),s=await a.callGet({showError:!1});if((null==s||!s.resource_response.error)&&e){const e=s.resource_response.data||{},{message:t,redirect_status:n,url:r}=e;i({blocked:["blocked","suspicious","porn"].includes(n),message:t,redirectStatus:n,sanitized_url:r})}},b=({event:e,onHistoryChange:t,href:n,history:r,target:o})=>{const a=d.a.getUrlClass(n);a===d.a.UrlClass.TRUSTED_DIFFERENT_ORIGIN||"blank"===o?Object(i.a)(n,"blank"===o):r&&a===d.a.UrlClass.SAME_ORIGIN&&(r.push(d.a.normalizeUrl(n)),t&&t({event:e}))},y=({href:e,pinId:t,pin:n,location:i,auxData:o,spamCheck:a})=>{"undefined"!=typeof window&&window.Windows?function({url:e,pinId:t,pin:n,location:i,auxData:o}){const a={check_only:!0,client_tracking_params:n?Object(c.a)(n,i):void 0,pin_id:n?n.id:t,url:e,aux_data:JSON.stringify(o)};r.a.create("OffsiteLinkResource",a).callGet().then(r=>{if(r&&r.resource_response&&!r.resource_response.error){const{resource_response:e}=r,{redirect_status:t,url:n}=e.data;if(!["blocked","suspicious","porn"].includes(t)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){const e=new window.Windows.Foundation.Uri(n);window.Windows.System.Launcher.launchUriAsync(e)}return}}if(n){const r=Object(c.a)(n,i);s.open(e,t,null,r,o)}else s.open(e,t)})}({url:e,pinId:t,pin:n,location:i,auxData:o}):n?(({spamCheck:e,auxData:t,location:n,pin:i,pinId:r,href:o})=>{null!=e&&e.blocked?Object(l.b)(e):s.open(o,r,null,Object(c.a)(i,n),t)})({spamCheck:a,auxData:o,location:i,pin:n,pinId:t,href:e}):s.open(e,t)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/24-c75456c0c37fae1175f5.mjs.map