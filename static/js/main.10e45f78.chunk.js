(this["webpackJsonpleast-squares-approximate"]=this["webpackJsonpleast-squares-approximate"]||[]).push([[0],{56:function(e,t,a){e.exports=a(80)},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),o=a(32),i=a.n(o),s=(a(61),a(15)),c=a(13),l=a(18),d=a(19),u=a(14),h=a(20),p=a(51),f=a(52),v=a(30),m=(a(62),a(22));a(63);function g(e){if(isNaN(e))return!1;var t=parseFloat(e);return(0|t)===t}var y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={degree:a.props.value},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;(""===t||g(t))&&(this.setState({degree:t}),this.validDegree(t)&&this.props.onChange(parseInt(t)))}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&e.preventDefault()}},{key:"validDegree",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.degree;return g(e)&&e>=0&&e<=this.props.maxDegree}},{key:"render",value:function(){return n.a.createElement("div",{id:"divDegree"},n.a.createElement(m.a,{id:"formDegree"},n.a.createElement(m.a.Group,{controlId:"formDegree"},n.a.createElement(m.a.Label,null,"Polynomial degree"),n.a.createElement(m.a.Control,{type:"text",placeholder:"Degree",value:this.state.degree,onChange:this.handleChange,onKeyPress:this.handleKeyPress,isInvalid:!this.validDegree()}),n.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Degree is a non-negative integer.",n.a.createElement("br",null),"Maximum: Number of unique x values - 1"))))}}]),t}(n.a.Component),C=a(54),b=(a(68),function(){function e(t,a){Object(s.a)(this,e),this.x=parseFloat(t),this.y=parseFloat(a)}return Object(c.a)(e,[{key:"toString",value:function(){return"(".concat(this.x,", ").concat(this.y,")")}},{key:"equals",value:function(e){return e.hasOwnProperty("x")&&e.x===this.x&&e.hasOwnProperty("y")&&e.y===this.y}}]),e}()),O=(a(69),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={coord:a.props.value},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleKeyPress=a.handleKeyPress.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({coord:t})}},{key:"handleKeyPress",value:function(e){if("Enter"===e.key){e.preventDefault();var t=this.props.checkCoord(this.state.coord);t.isValid&&(this.props.addCoord(t.msg.x,t.msg.y),this.setState({coord:""}))}}},{key:"render",value:function(){var e=this.props.checkCoord(this.state.coord);return n.a.createElement("div",{id:"coordinateAdder"},n.a.createElement(m.a,{id:"formNewCoord",autoComplete:"off"},n.a.createElement(m.a.Group,{controlId:"formNewCoord"},n.a.createElement(m.a.Label,null,"Add coordinate"),n.a.createElement(m.a.Control,{type:"text",placeholder:"Coordinate",value:this.state.coord,onChange:this.handleChange,onKeyPress:this.handleKeyPress,isValid:e.isValid,isInvalid:e.isInvalid}),n.a.createElement(m.a.Control.Feedback,{type:"invalid"},e.isInvalid?e.msg:""))))}}]),t}(n.a.Component)),j=a(40),E=a(45),x=a(44),k=a(46),D=a.n(k),w=(a(70),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.coords.map((function(t){return n.a.createElement(j.a.Item,{key:t.toString(),className:"d-flex flex-row"},n.a.createElement("div",{className:"vertical-center"},t.toString()),n.a.createElement(x.a,{className:"ml-auto"},n.a.createElement(E.a,{variant:"outline-danger",onClick:function(){return e.props.delCoord(t.x,t.y)}},n.a.createElement(D.a,null))))}));return n.a.createElement("div",null,n.a.createElement("label",null,"Coordinates"),n.a.createElement(j.a,null,t))}}]),t}(n.a.Component)),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).checkCoord=a.checkCoord.bind(Object(u.a)(a)),a.isUniqueCoord=a.isUniqueCoord.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"checkCoord",value:function(e){if(""===e)return{isValid:!1,isInvalid:!1};var t=e.match(/^\((.*),(.*)\)$/);if(t&&3===t.length){var a=Object(C.a)(t,3),r=a[1],n=a[2],o=function(e){return!/^\s*$/.test(e)&&isFinite(e)};if(o(r)&&o(n))return this.isUniqueCoord(r,n)?{isValid:!0,isInvalid:!1,msg:{x:r,y:n}}:{isValid:!1,isInvalid:!0,msg:"Coordinate has already been entered"}}return{isValid:!1,isInvalid:!0,msg:"Coordinate syntax is (x,y) where x and y are numbers"}}},{key:"isUniqueCoord",value:function(e,t){var a=new b(e,t);return this.props.coords.every((function(e){return!a.equals(e)}))}},{key:"render",value:function(){return n.a.createElement("div",{id:"coordinateMenu"},n.a.createElement(O,{value:"",addCoord:this.props.addCoord,checkCoord:this.checkCoord}),n.a.createElement(w,{coords:this.props.coords,delCoord:this.props.delCoord,checkCoord:this.checkCoord}))}}]),t}(n.a.Component),I=(a(75),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"menu"},n.a.createElement(y,{value:this.props.degree.value,onChange:this.props.degree.onChange,maxDegree:this.props.degree.maxDegree}),n.a.createElement(S,{coords:this.props.coordinates.coords,addCoord:this.props.coordinates.addCoord,delCoord:this.props.coordinates.delCoord}))}}]),t}(n.a.Component)),q=a(53),P=(a(76),a(93)),K=a(92),N=Object(P.a)(K.a,{});var A=function(e,t){if(e.length<=0)return null;var a=N.matrix(e.map((function(e){return Array(parseInt(t)+1).fill(e.x).map((function(e,t){return N.pow(e,t)}))}))),r=N.matrix(e.map((function(e){return e.y}))),n=N.transpose(a),o=N.multiply(n,a),i=N.multiply(n,r);if(0===N.det(o))return null;var s=N.multiply(N.inv(o),i).valueOf().map((function(e,t){return N.simplify("".concat(N.format(e,{fraction:"ratio"})," * x^").concat(t))})).reduce((function(e,t){return N.simplify("(".concat(e,") + (").concat(t,")"))}),0);return"y = ".concat(s.toTex())},V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={failedToLoad:!1},a.graph=null,window.onload=function(){console.log("window loaded");var e=document.getElementById("calc");try{var t=window.Desmos.GraphingCalculator(e,{expressionsCollapsed:!0});a.graph=t}catch(r){a.setState({failedToLoad:!0})}},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"initCoords",value:function(){var e=this.props.coords.slice().map((function(e,t){return{id:"coord".concat(e.toString()),latex:e.toString(),color:"#2d70b3"}}));this.graph.setExpressions(e)}},{key:"setUpCoords",value:function(){var e=this.graph,t=e.getExpressions().filter((function(e){return/^coord/.test(e.id)})),a=new Map,r=!0,n=!1,o=void 0;try{for(var i,s=function(){var t=i.value;a.set(t.id,(function(){return e.removeExpression({id:t.id})}))},c=t[Symbol.iterator]();!(r=(i=c.next()).done);r=!0)s()}catch(O){n=!0,o=O}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}var l=this.props.coords.slice(),d=!0,u=!1,h=void 0;try{for(var p,f=function(){var t=p.value,r="coord".concat(t.toString());a.has(r)?a.delete(r):a.set(r,(function(){return e.setExpression({id:r,latex:t.toString(),color:"#2d70b3"})}))},v=l[Symbol.iterator]();!(d=(p=v.next()).done);d=!0)f()}catch(O){u=!0,h=O}finally{try{d||null==v.return||v.return()}finally{if(u)throw h}}var m=!0,g=!1,y=void 0;try{for(var C,b=a.values()[Symbol.iterator]();!(m=(C=b.next()).done);m=!0){(0,C.value)()}}catch(O){g=!0,y=O}finally{try{m||null==b.return||b.return()}finally{if(g)throw y}}}},{key:"render",value:function(){var e=this.graph;if(e){this.setUpCoords();var t=A(this.props.coords,this.props.degree);t&&e.setExpression({id:"leastSquares",latex:t,color:"#c74440"})}return n.a.createElement("div",{id:"calc"},this.state.failedToLoad&&n.a.createElement(q.a,{variant:"danger"},"Could not load Desmos."))}}]),t}(n.a.Component),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={degree:1,coords:[]},a.handleChangeDegree=a.handleChangeDegree.bind(Object(u.a)(a)),a.handleAddCoord=a.handleAddCoord.bind(Object(u.a)(a)),a.handleDelCoord=a.handleDelCoord.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChangeDegree",value:function(e){this.setState({degree:e})}},{key:"handleAddCoord",value:function(e,t){var a=new b(e,t),r=this.state.coords;this.setState({coords:r.concat([a])})}},{key:"handleDelCoord",value:function(e,t){var a=new b(e,t),r=this.state.coords.slice();this.setState({coords:r.filter((function(e){return!a.equals(e)}))})}},{key:"calcMaxDegree",value:function(){var e=new Map;return this.state.coords.forEach((function(t){return e.set(t.x,0)})),e.size-1}},{key:"render",value:function(){return n.a.createElement(p.a,{fluid:"true",style:{padding:0}},n.a.createElement(f.a,{noGutters:"true"},n.a.createElement(v.a,{xs:12,lg:3},n.a.createElement(I,{degree:{value:this.state.degree,onChange:this.handleChangeDegree,maxDegree:this.calcMaxDegree()},coordinates:{coords:this.state.coords,addCoord:this.handleAddCoord,delCoord:this.handleDelCoord}})),n.a.createElement(v.a,null,n.a.createElement(V,{degree:this.state.degree||0,coords:this.state.coords}))))}}]),t}(n.a.Component);a(78);i.a.render(n.a.createElement(F,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.10e45f78.chunk.js.map