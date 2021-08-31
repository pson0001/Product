(this["webpackJsonpez-anz"]=this["webpackJsonpez-anz"]||[]).push([[0],{104:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},179:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n(0),a=n.n(i),r=n(13),c=n.n(r),d=(n(165),n(90)),l=(n(166),n(167),function(e){var t=Object(i.useState)("insights"),n=Object(d.a)(t,2),a=n[0],r=n[1];return e.getIfInsights(a),Object(s.jsxs)("div",{className:"nav",children:[Object(s.jsxs)("div",{className:"navTitle",children:[Object(s.jsx)("div",{children:"Product Forcasting Case Study"})," ",Object(s.jsx)("div",{children:"By Ezra Aydin"})]}),Object(s.jsx)("div",{className:"navItems",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{onClick:function(){return r("insights")},className:"insights"===a?"selected":"",children:"Insights and Model"}),Object(s.jsx)("li",{onClick:function(){return r("notebook")},className:"notebook"===a?"selected":"",children:"Notebook"})]})})]})}),o=(n(104),n.p+"static/media/loss.772ceedd.png"),j=n.p+"static/media/model.00c43745.png",b=window.tableau,h=function(){var e={device:"desktop"},t=Object(i.useRef)(null),n=Object(i.useRef)(null),a=Object(i.useRef)(null),r=Object(i.useRef)(null);return Object(i.useEffect)((function(){new b.Viz(t.current,"https://public.tableau.com/views/promovsnopromoitems/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link",e),new b.Viz(n.current,"https://public.tableau.com/views/promo-timeseries/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link",e),new b.Viz(a.current,"https://public.tableau.com/views/classvspromo/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link",e),new b.Viz(r.current,"https://public.tableau.com/views/geo_coded/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link",e)}),[]),Object(s.jsxs)("div",{className:"insightsContainer",children:[Object(s.jsx)("h1",{children:"Problem Statement"}),Object(s.jsx)("div",{className:"sectionContainer",children:Object(s.jsx)("p",{children:"Forecast product sales as accurately as possible between 2017-08-16 & 2017-08-31 given product ID and Store ID. We are looking to leverage datasets from previous sales given product ID and Store ID and some supplementary datasets"})}),Object(s.jsx)("h1",{children:"Discussion on NWRMSLE"}),Object(s.jsxs)("div",{className:"sectionContainer",children:[Object(s.jsx)("div",{className:"vizContainer",children:Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:o,alt:"Loss"})})}),Object(s.jsx)("div",{className:"descContainer",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Suitable when predicting values across a large range"}),Object(s.jsx)("li",{children:"Avoids penalizing large differences"}),Object(s.jsxs)("li",{children:["Without the weights!",Object(s.jsx)("p",{children:"Ypred = 500 / Ytrue = 550 -> 0.095"}),Object(s.jsx)("p",{children:"Ypred = 100 / Ytrue = 150 -> 0.402"})]}),Object(s.jsx)("li",{children:"Penalize more for underestimation"})]})})]}),Object(s.jsx)("h1",{children:"The Data"}),Object(s.jsxs)("div",{className:"sectionContainer",children:[Object(s.jsxs)("div",{className:"vizContainer",children:[Object(s.jsx)("div",{ref:n}),Object(s.jsx)("div",{children:Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["Sales data schema",Object(s.jsx)("p",{children:Object(s.jsx)("table",{className:"greyGridTable",children:Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"id"}),Object(s.jsx)("th",{children:"date"}),Object(s.jsx)("th",{children:"store_number"}),Object(s.jsx)("th",{children:"item_nbr"}),Object(s.jsx)("th",{children:"unit_sales"}),Object(s.jsx)("th",{children:"onpromotion"})]})})})})]}),Object(s.jsxs)("li",{children:["Supplementary datasets",Object(s.jsx)("p",{children:"- stores"})," ",Object(s.jsx)("p",{children:"- items"})," ",Object(s.jsx)("p",{children:"- transactions"}),Object(s.jsx)("p",{children:"- oil"})," ",Object(s.jsx)("p",{children:"- holidays_events"})]})]})})]}),Object(s.jsx)("div",{className:"descContainer",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"125M training / 33M testing points"}),Object(s.jsx)("li",{children:"item_nbr & store_nbr are categorical -> useful to embed these values"}),Object(s.jsx)("li",{children:"onpromotion -> 17% missing in training 0% missing in testing -> starts recording from April 2014"}),Object(s.jsx)("li",{children:"There are items that are not in training and are in testing"})]})})]}),Object(s.jsx)("h1",{children:"On/Off Promotion"}),Object(s.jsxs)("div",{className:"sectionContainer",children:[Object(s.jsx)("div",{className:"vizContainer",children:Object(s.jsx)("div",{ref:t})}),Object(s.jsxs)("div",{className:"descContainer",children:[Object(s.jsx)("h3",{children:"Promotion effect on each item sales"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Log transform median sales"}),Object(s.jsx)("li",{children:"Promotion sales tend to be above the reference line"})]})]})]}),Object(s.jsx)("h1",{children:"Promotion Effect on Class"}),Object(s.jsxs)("div",{className:"sectionContainer",children:[Object(s.jsx)("div",{className:"vizContainer",children:Object(s.jsx)("div",{ref:a})}),Object(s.jsx)("div",{className:"descContainer",children:Object(s.jsx)("ul",{children:Object(s.jsx)("li",{children:"Slope of lines represent class promo relationship"})})})]}),Object(s.jsx)("h1",{children:"Store location and sales volume per family and product"}),Object(s.jsx)("div",{className:"sectionContainer",children:Object(s.jsx)("div",{className:"vizContainer",children:Object(s.jsx)("div",{ref:r})})}),Object(s.jsx)("h1",{children:"Features"}),Object(s.jsx)("div",{className:"sectionContainer",children:Object(s.jsxs)("table",{className:"greyGridTable",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Features"}),Object(s.jsx)("th",{children:"Definition"})]})}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"last"}),Object(s.jsx)("td",{children:"sales value of day prior given store_nbr & item_nbr pair"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_3"}),Object(s.jsx)("td",{children:"mean sales value of the last 3 days given store_nbr & item_nbr pair"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_7"}),Object(s.jsx)("td",{children:"mean sales value of the last 7 days given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_14"}),Object(s.jsx)("td",{children:"mean sales value of the last 14 days given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_28"}),Object(s.jsx)("td",{children:"mean sales value of the last 28 days given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_60"}),Object(s.jsx)("td",{children:"mean sales value of the last 60 days given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_90"}),Object(s.jsx)("td",{children:"mean sales value of the last 90 days given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_365"}),Object(s.jsx)("td",{children:"mean sales value of the last 365 days given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_diff_7_28"}),Object(s.jsx)("td",{children:"variance of mean 7 - 28 given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_diff_14_60"}),Object(s.jsx)("td",{children:"variance of mean 14 - 60 given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_diff_28_90"}),Object(s.jsx)("td",{children:"variance of mean 28 - 90 given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_no_sale_in_7"}),Object(s.jsx)("td",{children:"no sale mean count - 7 days given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_no_sale_in_28"}),Object(s.jsx)("td",{children:"no sale mean count - 28 days given store_nbr & item_nbr pair"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_no_sale_in_90"}),Object(s.jsx)("td",{children:"no sale mean count - 90 days given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_no_sale_diff_7_28"}),Object(s.jsx)("td",{children:"variance of no sale mean count - 7 - 28 days given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_no_sale_diff_28_90"}),Object(s.jsx)("td",{children:"variance of no sale mean count - 28 - 90 days given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"avg_promo_7"}),Object(s.jsx)("td",{children:"avg number of days an item was on promo in the last 7 days given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"avg_promo_14"}),Object(s.jsx)("td",{children:"avg number of days an item was on promo in the last 14 days given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"avg_promo_28"}),Object(s.jsxs)("td",{children:["avg number of days an item was on promo in the last 28 days given store_nbr & item_nbr pair"," "]})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"avg_promo_90"}),Object(s.jsx)("td",{children:"avg number of days an item was on promo in the last 90 days given store_nbr & item_nbr pair"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"avg_promo_365"}),Object(s.jsxs)("td",{children:["avg number of days an item was on promo in the last 365 days given store_nbr & item_nbr pair"," "]})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_day_of_week_7"}),Object(s.jsxs)("td",{children:["mean sales for day of the wk in last 7 days given store_nbr & item_nbr pair"," "]})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_day_of_week_14"}),Object(s.jsxs)("td",{children:["mean sales for day of the wk in last 14 days given store_nbr & item_nbr pair"," "]})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_day_of_week_21"}),Object(s.jsxs)("td",{children:["mean sales for day of the wk in last 21 days given store_nbr & item_nbr pair"," "]})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_day_of_week_28"}),Object(s.jsxs)("td",{children:["mean sales for day of the wk in last 28 days given store_nbr & item_nbr pair"," "]})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_day_in_90"}),Object(s.jsxs)("td",{children:["mean sales for day of the month in last 90 days given store_nbr & item_nbr pair"," "]})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"mean_day_in_365"}),Object(s.jsxs)("td",{children:["mean sales for day of the month in last 365 days given store_nbr & item_nbr pair"," "]})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"promo"}),Object(s.jsx)("td",{children:"looking forward -> promo states of next 16 given store_nbr & item_nbr pair "})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"promo_mean"}),Object(s.jsx)("td",{children:"avg of forward 16days promo figures "})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"family"}),Object(s.jsx)("td",{children:"categorical metadata that is to be embedded"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"class"}),Object(s.jsx)("td",{children:"categorical metadata that is to be embedded"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"perishable"}),Object(s.jsx)("td",{children:"categorical metadata that is to be embedded"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"city"}),Object(s.jsx)("td",{children:"categorical metadata that is to be embedded"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"state"}),Object(s.jsx)("td",{children:"categorical metadata that is to be embedded"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"type"}),Object(s.jsx)("td",{children:"categorical metadata that is to be embedded"})]})," ",Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"cluster"}),Object(s.jsx)("td",{children:"categorical metadata that is to be embedded"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"day_of_week"}),Object(s.jsx)("td",{children:"categorical metadata that is to be embedded"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"day"}),Object(s.jsx)("td",{children:"categorical metadata that is to be embedded"})]})]})]})}),Object(s.jsx)("h1",{children:"Model"}),Object(s.jsx)("div",{className:"sectionContainer",children:Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:j,alt:"Model"})})}),Object(s.jsx)("h1",{children:"Evaluations - Training"}),Object(s.jsx)("div",{className:"sectionContainer",children:Object(s.jsx)("div",{className:"vizContainer",children:Object(s.jsx)("ul",{children:Object(s.jsx)("li",{children:"bla"})})})})]})},x=(n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n(64)),p=n(74),O=n.n(p),m=n(101),u=n(131),g=n(132),_=n(158),v=n(155),f=n(313),y=n(312),k=n(65),w=n(39),S=n(314),C=n(315),z=n(75),N=n.n(z),L=(n(175),n(176),n(177),n(178),n(179),n(180)),A=(f.a.Meta,function(e){Object(_.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={fpath:"",fbase_path:"",ed_theme:"lightTheme",text_ed_theme:"kuroir",background_theme:"white",background_text_theme:"black",background_input_theme:"#F7F7F7",background_output_theme:"#fff",loading:!0,notebook_json:null,placeholder_component:"Loading....",gutterVisible:!1},e}return Object(g.a)(n,[{key:"validURL",value:function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}},{key:"componentDidMount",value:function(){var e=Object(m.a)(O.a.mark((function e(){var t,n=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.file){e.next=6;break}return(t=this.props.file.split("/")).pop(),this.setState({fpath:this.props.file,fbase_path:t.join("/")+"/"}),e.next=6,fetch(this.props.file).then((function(e){return e.text()})).then(function(){var e=Object(m.a)(O.a.mark((function e(t){var s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{s=JSON.parse(t),n.setState({notebook_json:s,loading:!1,placeholder_component:"Notebook loaded"}),console.log(n.state.notebook_json)}catch(i){alert("OOps! Unable to load json"),n.setState({notebook_json:{message:"Unable to parse .ipynb file"},loading:!1,placeholder_component:"Oops! We have problem opening the notebook"})}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"praseSource",value:function(e){var t="";for(var n in e)t+=e[n];return t}},{key:"parseMD",value:function(e){var t="";for(var n in e){var s=new RegExp(/src="(.*?)"/),i=e[n],a=e[n].match(s);if(a&&!this.validURL(a[1]))i=e[n].replace(/src="(.*?)"/,'src="'+this.state.fbase_path+a[1]+'"');else{var r=new RegExp(/\!\[(.*?)\]\((.*?)[\s|\)]/),c=e[n].match(r);c&&!this.validURL(c[2])&&(i=i.replace(c[2],this.state.fbase_path+c[2]))}t+=i}return t}},{key:"praseOutputs",value:function(e){if(0==e.length)return"";var t="",n="",i="",a="data:image/png;base64,",r=!1,c=!1,d=!1,l=!1,o=3,j=3,b=3;for(var h in e){if("data"in e[h]){if("text/plain"in e[h].data){for(var x in e[h].data["text/plain"])t+=e[h].data["text/plain"][x];c=!0,j=e[h].data["text/plain"].length}"image/png"in e[h].data&&(a+=e[h].data["image/png"],l=!0)}if("name"in e[h]){for(var x in e[h].text)n+=e[h].text[x];r=!0,o=e[h].text.length}"ename"in e[h]&&(i+=e[h].ename+"\n"+e[h].evalue+"\n",d=!0,b=e[h].traceback.length)}return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{style:{padding:"5px 3px",display:r?"":"none"},children:[Object(s.jsx)("br",{}),Object(s.jsx)(N.a,{readOnly:!0,placeholder:"--",mode:"markdown",theme:this.state.text_ed_theme,name:"stdout",style:{maxWidth:"1300px",padding:"10px",margin:"10px 0px"},width:"100%",maxLines:o+1,fontSize:14,showPrintMargin:!1,showGutter:!1,highlightActiveLine:!1,value:n,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!1,tabSize:2}})]}),Object(s.jsxs)("div",{style:{padding:"5px 3px",display:c?"":"none"},children:[Object(s.jsx)("br",{}),Object(s.jsx)(N.a,{readOnly:!0,placeholder:"--",mode:"markdown",theme:this.state.text_ed_theme,name:"text",style:{maxWidth:"1300px",padding:"10px",margin:"10px 0px"},width:"100%",maxLines:j,fontSize:14,showPrintMargin:!1,showGutter:!1,highlightActiveLine:!1,value:t,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!1,tabSize:2}})]}),Object(s.jsxs)("div",{style:{display:l?"":"none"},children:[Object(s.jsx)("br",{}),Object(s.jsx)("img",{src:a,style:{display:l?"":"none",width:"50%",backgroundColor:"white"}})]}),Object(s.jsxs)("div",{style:{padding:"5px 3px",display:d?"":"none"},children:[Object(s.jsx)("br",{}),Object(s.jsx)(N.a,{readOnly:!0,placeholder:"--",mode:"markdown",theme:this.state.text_ed_theme,name:"error",style:{maxWidth:"1300px",padding:"10px",margin:"10px 0px"},width:"100%",maxLines:b,fontSize:14,showPrintMargin:!1,showGutter:!1,highlightActiveLine:!1,value:i,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!1,tabSize:2}})]})]})}},{key:"themeChanger",value:function(e){this.setState({ed_theme:"lightTheme",text_ed_theme:"kuroir",background_theme:"white",background_text_theme:"black",background_input_theme:"#F7F7F7",background_output_theme:"#F7F7F7"}),console.log("switch to ".concat(e))}},{key:"gutterChanger",value:function(e){e?this.setState({gutterVisible:!0}):this.setState({gutterVisible:!1})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{}),Object(s.jsx)(y.a,{spinning:this.state.loading,children:Object(s.jsxs)("center",{children:[Object(s.jsx)("div",{class:this.state.ed_theme,children:Object(s.jsxs)(f.a,{bodyStyle:{padding:"30px 10px",backgroundColor:this.state.background_output_theme},style:{width:"100%",maxWidth:"1400px",border:"none"},children:[Object(s.jsxs)(k.a,{children:[Object(s.jsx)(w.a,{span:1}),Object(s.jsxs)(w.a,{span:22,children:[Object(s.jsx)(S.a.Title,{strong:!0,style:{color:this.state.background_text_theme,wordWrap:"break-word",width:"100%"},children:this.props.title}),Object(s.jsx)(S.a.Title,{level:4,style:{color:this.state.background_text_theme,wordWrap:"break-word",width:"100%",display:this.props.subtitle?"":"none"},children:this.props.subtitle})]}),Object(s.jsx)(w.a,{span:1})]}),Object(s.jsxs)(k.a,{children:[Object(s.jsx)(w.a,{span:1}),Object(s.jsx)(w.a,{span:22,children:Object(s.jsx)("img",{alt:"No Cover Image Found",style:{display:this.props.coverImg?"":"none",width:"100%"},src:this.props.coverImg?this.props.coverImg:"http://eskipaper.com/images/simple-silver-wallpaper-1.jpg"})}),Object(s.jsx)(w.a,{span:1})]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)(k.a,{children:[Object(s.jsx)(w.a,{span:1}),Object(s.jsx)(w.a,{span:20,children:Object(s.jsx)(C.a,{color:"blue",style:{float:"left"},children:this.state.loading?"Unknown":this.state.notebook_json.metadata.kernelspec.display_name})}),Object(s.jsx)(w.a,{span:1})]})]})}),this.state.loading?Object(s.jsx)("div",{}):this.state.notebook_json.cells.map((function(t){var n,i;return Object(s.jsxs)(f.a,{bodyStyle:{padding:"0px 10px",backgroundColor:e.state.background_output_theme},style:{width:"100%",maxWidth:"1400px",border:"none"},children:[Object(s.jsxs)(k.a,{style:{backgroundColor:e.state.background_output_theme},children:[Object(s.jsx)(w.a,{span:e.state.gutterVisible?3:1,children:Object(s.jsx)("div",{style:{display:e.state.gutterVisible?"":"none"},children:Object(s.jsxs)(S.a.Text,{style:(n={color:e.state.background_text_theme,float:"left",padding:"5px"},Object(x.a)(n,"color","#56ACBC"),Object(x.a)(n,"display","code"==t.cell_type?"":"none"),Object(x.a)(n,"backgroundColor","transparent"),n),children:["I [ ",t.execution_count," ]:"]})})}),Object(s.jsx)(w.a,{span:e.state.gutterVisible?20:22,style:{textAlign:"left"},children:"code"==t.cell_type?Object(s.jsx)("div",{style:{padding:"5px 0px",borderStyle:"solid",borderWidth:"1px",backgroundColor:e.state.background_input_theme},children:Object(s.jsx)(N.a,{readOnly:!0,placeholder:"---",mode:"python",theme:e.state.text_ed_theme,name:"code",style:{maxWidth:"1300px",padding:"10px",margin:"10px 0px",backgroundColor:"transparent"},width:"100%",maxLines:0==t.source.length?1:t.source.length+1,onLoad:e.onLoad,onChange:e.onChange,fontSize:14,showGutter:!0,highlightActiveLine:!0,value:e.praseSource(t.source),setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}})}):Object(s.jsx)("div",{class:"MDImg",children:Object(s.jsx)("div",{class:e.state.ed_theme,style:{margin:"0px 0px",padding:"10px",width:"100%"},children:Object(s.jsx)(L,{style:{float:"left"},source:e.parseMD(t.source),escapeHtml:!1})})})}),Object(s.jsx)(w.a,{span:1})]}),"markdown"==t.cell_type?Object(s.jsx)("div",{}):Object(s.jsxs)(k.a,{style:{display:0==!!t.outputs.length?"none":"visible",backgroundColor:e.state.background_output_theme},children:[Object(s.jsx)(w.a,{span:e.state.gutterVisible?3:1,children:Object(s.jsxs)(S.a.Text,{style:(i={display:e.state.gutterVisible?"":"none",color:e.state.background_text_theme,float:"left",padding:"5px"},Object(x.a)(i,"color","#E5496A"),Object(x.a)(i,"backgroundColor","transparent"),i),children:["O [ ",t.execution_count," ]:"]})}),Object(s.jsx)(w.a,{span:e.state.gutterVisible?20:22,style:{textAlign:"left",color:"white",backgroundColor:"transparent"},children:e.praseOutputs(t.outputs)}),Object(s.jsx)(w.a,{span:1})]})]})}))]})}),Object(s.jsx)("br",{})]})}}]),n}(a.a.Component)),F=function(){return Object(s.jsx)("div",{style:{marginBottom:"100px"},children:Object(s.jsx)(A,{file:"https://raw.githubusercontent.com/pson0001/Product/main/src/assets/influenza_au.ipynb"})})};var I=function(){var e=Object(i.useState)("insights"),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(l,{getIfInsights:function(e){a(e)}}),Object(s.jsxs)("div",{className:"container",children:["insights"===n?Object(s.jsx)(h,{}):null,"notebook"===n?Object(s.jsx)(F,{}):null]})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,316)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),a(e),r(e)}))};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(I,{})}),document.getElementById("root")),M()}},[[308,1,2]]]);
//# sourceMappingURL=main.80fdb185.chunk.js.map