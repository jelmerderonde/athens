goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.system');
goog.require('devcards.util.markdown');
goog.require('devcards.util.utils');
goog.require('sablono.core');
goog.require('devcards.util.edn_renderer');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('cljs.test');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$create_react_class$index=shadow.js.require("module$node_modules$create_react_class$index", {});
goog.require('cljs.core.async');
/**
 * @define {boolean}
 */
devcards.core.active = goog.define("devcards.core.active",false);
/**
 * @define {number}
 */
devcards.core.card_buffer_size = goog.define("devcards.core.card_buffer_size",(5000));
cljs.core.enable_console_print_BANG_();
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.devcard_event_chan !== 'undefined')){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(devcards.core.card_buffer_size));
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__4185__auto__ = (((typeof Symbol !== 'undefined'))?((cljs.core.fn_QMARK_(Symbol))?(function (){var and__4174__auto__ = goog.object.get(Symbol,"for");
if(cljs.core.truth_(and__4174__auto__)){
var fexpr__52845 = goog.object.get(Symbol,"for");
return (fexpr__52845.cljs$core$IFn$_invoke$arity$1 ? fexpr__52845.cljs$core$IFn$_invoke$arity$1("react.element") : fexpr__52845.call(null,"react.element"));
} else {
return and__4174__auto__;
}
})():false):false);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.register_listeners_fig !== 'undefined')){
return null;
} else {
return (
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__52846_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__52846_SHARP_.detail], null));
}));

return true;
})()
)
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if((!((((m == null)) || (cljs.core.map_QMARK_(m)))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var G__52851 = arguments.length;
switch (G__52851) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if(((cljs.core.map_QMARK_(options)) && (cljs.core.map_QMARK_(new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)], 0));
}));
} else {
}

devcards.system.start_ui(devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_();
}));

(devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1);

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
if(cljs.core.map_QMARK_(c)){
var map__52854 = c;
var map__52854__$1 = (((((!((map__52854 == null))))?(((((map__52854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52854):map__52854);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52854__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52854__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return false;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(devcards.core.card_QMARK_(c)){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.createElement("div",({"key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(raw_html_str)), "dangerouslySetInnerHTML": ({"__html": raw_html_str})}));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return goog.object.get(goog.global,"hljs");
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__5735__auto__ = (devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2 ? devcards.core.ref__GT_node.cljs$core$IFn$_invoke$arity$2(this$,"code-ref") : devcards.core.ref__GT_node.call(null,this$,"code-ref"));
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
var temp__5735__auto____$1 = devcards.core.get_hljs();
if(cljs.core.truth_(temp__5735__auto____$1)){
var hljs = temp__5735__auto____$1;
var temp__5735__auto____$2 = goog.object.get(hljs,"highlightBlock");
if(cljs.core.truth_(temp__5735__auto____$2)){
var highlight_block = temp__5735__auto____$2;
return (highlight_block.cljs$core$IFn$_invoke$arity$1 ? highlight_block.cljs$core$IFn$_invoke$arity$1(node) : highlight_block.call(null,node));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
devcards.core.CodeHighlight = (function (){var ctor__48983__auto__ = (function (props__48980__auto__){
var this__48981__auto__ = this;
React.Component.call(this__48981__auto__,props__48980__auto__);

return this__48981__auto__;
});
goog.inherits(ctor__48983__auto__,React.Component);

var x52856_53892 = ctor__48983__auto__.prototype;
(x52856_53892.componentDidMount = (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}));

(x52856_53892.componentDidUpdate = (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}));

(x52856_53892.render = (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash((function (){var G__52859 = this$;
var G__52860 = new cljs.core.Keyword(null,"code","code",1586293142);
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__52859,G__52860) : devcards.core.get_props.call(null,G__52859,G__52860));
})())}),React.createElement("code",({"className": (function (){var or__4185__auto__ = (function (){var G__52864 = this$;
var G__52865 = new cljs.core.Keyword(null,"lang","lang",-1819677104);
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__52864,G__52865) : devcards.core.get_props.call(null,G__52864,G__52865));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret((function (){var G__52867 = this$;
var G__52868 = new cljs.core.Keyword(null,"code","code",1586293142);
return (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(G__52867,G__52868) : devcards.core.get_props.call(null,G__52867,G__52868));
})())));
}));


return ctor__48983__auto__;
})();

(devcards.core.CodeHighlight.displayName = cljs.core.name(new cljs.core.Symbol(null,"CodeHighlight","CodeHighlight",-2140212327,null)));
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.markdown_block__GT_react !== 'undefined')){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__52873 = cljs.core.get_global_hierarchy;
return (fexpr__52873.cljs$core$IFn$_invoke$arity$0 ? fexpr__52873.cljs$core$IFn$_invoke$arity$0() : fexpr__52873.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__52874){
var map__52875 = p__52874;
var map__52875__$1 = (((((!((map__52875 == null))))?(((((map__52875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52875):map__52875);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52875__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__52883){
var map__52884 = p__52883;
var map__52884__$1 = (((((!((map__52884 == null))))?(((((map__52884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52884):map__52884);
var block = map__52884__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52884__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53906 = arguments.length;
var i__4790__auto___53908 = (0);
while(true){
if((i__4790__auto___53908 < len__4789__auto___53906)){
args__4795__auto__.push((arguments[i__4790__auto___53908]));

var G__53909 = (i__4790__auto___53908 + (1));
i__4790__auto___53908 = G__53909;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : devcards.core.react_element_QMARK_.call(null,x)))){
return null;
} else {
return ["```clojure\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devcards.util.utils.pprint_code(x)),"```\n"].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(devcards.util.markdown.parse_out_blocks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([strs__$1], 0));
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret((devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1 ? devcards.core.markdown_block__GT_react.cljs$core$IFn$_invoke$arity$1(data) : devcards.core.markdown_block__GT_react.call(null,data))));
}),blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret(message));
}
}));

(devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq52897){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52897));
}));

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__52932 = devcards.system.devcards_rendered_card_class;
var G__52932__$1 = (cljs.core.truth_(padding_QMARK_)?[G__52932," com-rigsomelight-devcards-devcard-padding"].join(''):G__52932);
if(cljs.core.truth_(cljs.core.not_empty(classname))){
return [G__52932__$1," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(classname)].join('');
} else {
return G__52932__$1;
}
})()}),sablono.interpreter.interpret(children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var G__52944 = arguments.length;
switch (G__52944) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
}));

(devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__52948 = card;
var map__52948__$1 = (((((!((map__52948 == null))))?(((((map__52948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52948):map__52948);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52948__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52948__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["com-rigsomelight-devcards-card-base-no-pad ",(cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null)].join('')], null))}),sablono.interpreter.interpret(devcards.core.naked_card(children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret(React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_((function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
}))}),sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)))," ")):sablono.interpreter.interpret((function (){var attrs52955 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs52955))?sablono.interpreter.attributes(attrs52955):null),((cljs.core.map_QMARK_(attrs52955))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs52955)], null)));
})()))),sablono.interpreter.interpret(devcards.core.naked_card(children,card)));
}
} else {
return React.createElement("span",null);
}
}));

(devcards.core.frame.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((((!((this$ == null)))) && ((!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (devcards.core._devcard_options[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__4488__auto__.call(null,this$,devcard_opts));
} else {
var m__4485__auto__ = (devcards.core._devcard_options["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__4485__auto__.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((((!((this$ == null)))) && ((!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (devcards.core._devcard[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__4488__auto__.call(null,this$,devcard_opts));
} else {
var m__4485__auto__ = (devcards.core._devcard["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__4485__auto__.call(null,this$,devcard_opts));
} else {
throw cljs.core.missing_protocol("IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__5735__auto__ = (function (){var G__52969 = this$.refs;
var G__52970 = ref;
return goog.object.get(G__52969,G__52970);
})();
if(cljs.core.truth_(temp__5735__auto__)){
var comp = temp__5735__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
var G__52974 = this$.props;
var G__52975 = cljs.core.name(k);
return goog.object.get(G__52974,G__52975);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
var G__52979 = this$.state;
var G__52980 = cljs.core.name(k);
return goog.object.get(G__52979,G__52980);
} else {
return null;
}
});
devcards.core.DontUpdate = (function (){var ctor__48983__auto__ = (function (props__48980__auto__){
var this__48981__auto__ = this;
React.Component.call(this__48981__auto__,props__48980__auto__);

return this__48981__auto__;
});
goog.inherits(ctor__48983__auto__,React.Component);

var x52989_53925 = ctor__48983__auto__.prototype;
(x52989_53925.shouldComponentUpdate = (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.object.get(next_props,"change_count"),devcards.core.get_props(this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}));

(x52989_53925.render = (function (){
var this$ = this;
var attrs52992 = devcards.core.get_props(this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs52992))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs52992], 0))):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_(attrs52992))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs52992)], null)));
}));


return ctor__48983__auto__;
})();

(devcards.core.DontUpdate.displayName = cljs.core.name(new cljs.core.Symbol(null,"DontUpdate","DontUpdate",-547080925,null)));
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if((((!((data == null))))?(((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$))))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
return devcards.core.get_state(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data(this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_(m)){
return (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(data_atom,parent_elem) : m.call(null,data_atom,parent_elem));
} else {
return m;
}
})();
var main_obj = (((((!((main_obj_SINGLEQUOTE_ == null)))) && (cljs.core.not((devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.react_element_QMARK_.cljs$core$IFn$_invoke$arity$1(main_obj_SINGLEQUOTE_) : devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))))?devcards.core.code_highlight(devcards.util.utils.pprint_code(main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update(change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var project = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"projection","projection",-412523042).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.identity;
}
})();
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?(devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.hist_recorder_STAR_.cljs$core$IFn$_invoke$arity$1(data_atom) : devcards.core.hist_recorder_STAR_.call(null,data_atom)):null);
var document = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__5735__auto__)){
var docu = temp__5735__auto__;
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([docu], 0));
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn((function (){var G__53029 = cljs.core.deref(data_atom);
return (project.cljs$core$IFn$_invoke$arity$1 ? project.cljs$core$IFn$_invoke$arity$1(G__53029) : project.call(null,G__53029));
})()):null);
var card__$1 = ((((typeof main === 'string') || ((main == null))))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret(main));
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(new cljs.core.List(null,document,(new cljs.core.List(null,main__$1,(new cljs.core.List(null,hist_ctl,(new cljs.core.List(null,edn,null,(1),null)),(2),null)),(3),null)),(4),null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret(children));
}
});
devcards.core.DevcardBase = (function (){var ctor__48983__auto__ = (function (props__48978__auto__){
var this__48979__auto__ = this;
React.Component.call(this__48979__auto__,props__48978__auto__);

(function (props){
var this$ = this;
return (this$.state = ({"unique_id": cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)}));
}).call(this__48979__auto__,props__48978__auto__);

return this__48979__auto__;
});
goog.inherits(ctor__48983__auto__,React.Component);

var x53033_53930 = ctor__48983__auto__.prototype;
(x53033_53930.componentDidUpdate = (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props(this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_((devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devcards.core.atom_like_QMARK_.cljs$core$IFn$_invoke$arity$1(initial_data) : devcards.core.atom_like_QMARK_.call(null,initial_data)))?cljs.core.deref(initial_data):initial_data);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(atom),data)){
return cljs.core.reset_BANG_(atom,data);
} else {
return null;
}
} else {
return null;
}
}));

(x53033_53930.componentWillMount = (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_())){
return this$.setState((function (){var or__4185__auto__ = (function (){var and__4174__auto__ = devcards.core.get_state(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__4174__auto__)){
return this$.state;
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data(this$)});
}
})());
} else {
return null;
}
}));

(x53033_53930.componentWillUnmount = (function (){
var this$ = this;
var data_atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__4174__auto__ = data_atom;
if(cljs.core.truth_(and__4174__auto__)){
return id;
} else {
return and__4174__auto__;
}
})())){
return cljs.core.remove_watch(data_atom,id);
} else {
return null;
}
}));

(x53033_53930.componentDidMount = (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_())){
var temp__5735__auto__ = devcards.core.get_state(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__5735__auto__)){
var data_atom = temp__5735__auto__;
var temp__5735__auto____$1 = devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__5735__auto____$1)){
var id = temp__5735__auto____$1;
return cljs.core.add_watch(data_atom,id,(function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state(this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
}));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));

(x53033_53930.render = (function (){
var this$ = this;
var data_atom = (devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.get_data_atom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.get_data_atom.call(null,this$));
var card = devcards.core.get_props(this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state(this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main(this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements(main,data_atom,card);
}));


return ctor__48983__auto__;
})();

(devcards.core.DevcardBase.displayName = cljs.core.name(new cljs.core.Symbol(null,"DevcardBase","DevcardBase",-1441442980,null)));
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (this$){
var temp__5735__auto__ = devcards.core.get_props(this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__5735__auto__)){
var node_fn = temp__5735__auto__;
var temp__5735__auto____$1 = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__5735__auto____$1)){
var node = temp__5735__auto____$1;
var G__53054 = devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var G__53055 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__53054,G__53055) : node_fn.call(null,G__53054,G__53055));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
devcards.core.DomComponent = (function (){var ctor__48983__auto__ = (function (props__48978__auto__){
var this__48979__auto__ = this;
React.Component.call(this__48979__auto__,props__48978__auto__);

(function (props){
var this$ = this;
return (this$.state = ({"unique_id": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))}));
}).call(this__48979__auto__,props__48978__auto__);

return this__48979__auto__;
});
goog.inherits(ctor__48983__auto__,React.Component);

var x53057_53935 = ctor__48983__auto__.prototype;
(x53057_53935.componentDidUpdate = (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__4174__auto__ = devcards.core.get_props(this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),goog.object.get(prevP,"node_fn"));
} else {
return and__4174__auto__;
}
})())){
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
} else {
return null;
}
}));

(x53057_53935.componentWillUnmount = (function (){
var this$ = this;
var temp__5735__auto__ = devcards.core.ref__GT_node(this$,devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}));

(x53057_53935.componentDidMount = (function (){
var this$ = this;
return (devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1 ? devcards.core.render_into_dom.cljs$core$IFn$_invoke$arity$1(this$) : devcards.core.render_into_dom.call(null,this$));
}));

(x53057_53935.render = (function (){
var this$ = this;
if(cljs.core.truth_(devcards.util.utils.html_env_QMARK_())){
return React.createElement("div",({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
} else {
return React.createElement("div",null,"Card has not mounted DOM node.");
}
}));


return ctor__48983__auto__;
})();

(devcards.core.DomComponent.displayName = cljs.core.name(new cljs.core.Symbol(null,"DomComponent","DomComponent",-1557765022,null)));
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__4185__auto__ = x === true;
if(or__4185__auto__){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = x === false;
if(or__4185__auto____$1){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = (x == null);
if(or__4185__auto____$2){
return or__4185__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__4185__auto__ = typeof x === 'string';
if(or__4185__auto__){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (x == null);
if(or__4185__auto____$1){
return or__4185__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__4185__auto__ = goog.object.get(main_obj,"_isReactElement");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,goog.object.get(main_obj,"$$typeof"));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53078_SHARP_){
return (!(p1__53078_SHARP_ === true));
}),(function (){var map__53083 = opts;
var map__53083__$1 = (((((!((map__53083 == null))))?(((((map__53083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53083):map__53083);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53083__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53083__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53083__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53083__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4185__auto__ = cljs.core.map_QMARK_(options);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (options == null);
if(or__4185__auto____$1){
return or__4185__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_(new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_(new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__4185__auto__ = (initial_data == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__4185__auto____$1){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__4185__auto____$2){
return or__4185__auto____$2;
} else {
var or__4185__auto____$3 = (((!((initial_data == null))))?(((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === initial_data.cljs$core$IAtom$))))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__4185__auto____$3){
return or__4185__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53079_SHARP_){
return devcards.core.booler_QMARK_(p1__53079_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret(React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?sablono.interpreter.interpret(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)], 0))):null))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs53118 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs53118))?sablono.interpreter.attributes(attrs53118):null),((cljs.core.map_QMARK_(attrs53118))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53118)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs53123 = [((((cljs.core.map_QMARK_(opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string')))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),": "].join(''):null),"Devcard received bad options"].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs53123))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs53123], 0))):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_(attrs53123))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53123)], null)));
})(),sablono.interpreter.interpret(devcards.core.naked_card(React.createElement("div",null,(function (){var attrs53124 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs53124))?sablono.interpreter.attributes(attrs53124):null),((cljs.core.map_QMARK_(attrs53124))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53124)], null)));
})(),((cljs.core.map_QMARK_(opts))?sablono.interpreter.interpret((function (){var attrs53126 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs53126))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs53126], 0))):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_(attrs53126))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53126)], null)));
})()):null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__53130_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.system.app_state)),p1__53130_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults(card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentityOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(devcards.core.IdentityOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k53135,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__53168 = k53135;
var G__53168__$1 = (((G__53168 instanceof cljs.core.Keyword))?G__53168.fqn:null);
switch (G__53168__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53135,else__4442__auto__);

}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__53169){
var vec__53170 = p__53169;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53170,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53170,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#devcards.core.IdentityOptions{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53134){
var self__ = this;
var G__53134__$1 = this;
return (new cljs.core.RecordIter((0),G__53134__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__53182 = (function (coll__4436__auto__){
return (-550579441 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__53182(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53136,other53137){
var self__ = this;
var this53136__$1 = this;
return (((!((other53137 == null)))) && ((this53136__$1.constructor === other53137.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53136__$1.obj,other53137.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53136__$1.__extmap,other53137.__extmap)));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__53134){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__53189 = cljs.core.keyword_identical_QMARK_;
var expr__53190 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__53194 = new cljs.core.Keyword(null,"obj","obj",981763962);
var G__53195 = expr__53190;
return (pred__53189.cljs$core$IFn$_invoke$arity$2 ? pred__53189.cljs$core$IFn$_invoke$arity$2(G__53194,G__53195) : pred__53189.call(null,G__53194,G__53195));
})())){
return (new devcards.core.IdentityOptions(G__53134,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentityOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__53134),null));
}
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(devcards.core.IdentityOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.IdentityOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
}));

(devcards.core.IdentityOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__53134){
var self__ = this;
var this__4438__auto____$1 = this;
return (new devcards.core.IdentityOptions(self__.obj,G__53134,self__.__extmap,self__.__hash));
}));

(devcards.core.IdentityOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(devcards.core.IdentityOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(devcards.core.IdentityOptions.cljs$lang$type = true);

(devcards.core.IdentityOptions.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"devcards.core/IdentityOptions",null,(1),null));
}));

(devcards.core.IdentityOptions.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"devcards.core/IdentityOptions");
}));

/**
 * Positional factory function for devcards.core/IdentityOptions.
 */
devcards.core.__GT_IdentityOptions = (function devcards$core$__GT_IdentityOptions(obj){
return (new devcards.core.IdentityOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/IdentityOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_IdentityOptions = (function devcards$core$map__GT_IdentityOptions(G__53156){
var extmap__4478__auto__ = (function (){var G__53210 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53156,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_(G__53156)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53210);
} else {
return G__53210;
}
})();
return (new devcards.core.IdentityOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__53156),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__53219){
var map__53220 = p__53219;
var map__53220__$1 = (((((!((map__53220 == null))))?(((((map__53220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53220):map__53220);
var devcard_opts = map__53220__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53220__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,_){
return devcards.util.edn_renderer.html_edn(cljs.core.deref(data_atom));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map(options)], 0))], 0));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k53225,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__53235 = k53225;
var G__53235__$1 = (((G__53235 instanceof cljs.core.Keyword))?G__53235.fqn:null);
switch (G__53235__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53225,else__4442__auto__);

}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__53236){
var vec__53237 = p__53236;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53237,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53237,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53224){
var self__ = this;
var G__53224__$1 = this;
return (new cljs.core.RecordIter((0),G__53224__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__53247 = (function (coll__4436__auto__){
return (-1574099704 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__53247(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53226,other53227){
var self__ = this;
var this53226__$1 = this;
return (((!((other53227 == null)))) && ((this53226__$1.constructor === other53227.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53226__$1.obj,other53227.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53226__$1.__extmap,other53227.__extmap)));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__53224){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__53250 = cljs.core.keyword_identical_QMARK_;
var expr__53251 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__53254 = new cljs.core.Keyword(null,"obj","obj",981763962);
var G__53255 = expr__53251;
return (pred__53250.cljs$core$IFn$_invoke$arity$2 ? pred__53250.cljs$core$IFn$_invoke$arity$2(G__53254,G__53255) : pred__53250.call(null,G__53254,G__53255));
})())){
return (new devcards.core.AtomLikeOptions(G__53224,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__53224),null));
}
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__53224){
var self__ = this;
var this__4438__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__53224,self__.__extmap,self__.__hash));
}));

(devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(devcards.core.AtomLikeOptions.cljs$lang$type = true);

(devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"devcards.core/AtomLikeOptions",null,(1),null));
}));

(devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"devcards.core/AtomLikeOptions");
}));

/**
 * Positional factory function for devcards.core/AtomLikeOptions.
 */
devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/AtomLikeOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__53229){
var extmap__4478__auto__ = (function (){var G__53259 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53229,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_(G__53229)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53259);
} else {
return G__53259;
}
})();
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__53229),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn((((((!((main_obj == null))))?(((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.cljs$core$IDeref$))))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,main_obj)))?cljs.core.deref(main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k53263,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__53268 = k53263;
var G__53268__$1 = (((G__53268 instanceof cljs.core.Keyword))?G__53268.fqn:null);
switch (G__53268__$1) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53263,else__4442__auto__);

}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__53270){
var vec__53272 = p__53270;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53272,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53272,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53262){
var self__ = this;
var G__53262__$1 = this;
return (new cljs.core.RecordIter((0),G__53262__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__53278 = (function (coll__4436__auto__){
return (1012705544 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__53278(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53264,other53265){
var self__ = this;
var this53264__$1 = this;
return (((!((other53265 == null)))) && ((this53264__$1.constructor === other53265.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53264__$1.obj,other53265.obj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53264__$1.__extmap,other53265.__extmap)));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__53262){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__53282 = cljs.core.keyword_identical_QMARK_;
var expr__53283 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__53285 = new cljs.core.Keyword(null,"obj","obj",981763962);
var G__53286 = expr__53283;
return (pred__53282.cljs$core$IFn$_invoke$arity$2 ? pred__53282.cljs$core$IFn$_invoke$arity$2(G__53285,G__53286) : pred__53282.call(null,G__53285,G__53286));
})())){
return (new devcards.core.EdnLikeOptions(G__53262,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__53262),null));
}
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj,null))], null),self__.__extmap));
}));

(devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__53262){
var self__ = this;
var this__4438__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__53262,self__.__extmap,self__.__hash));
}));

(devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(devcards.core.EdnLikeOptions.cljs$lang$type = true);

(devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"devcards.core/EdnLikeOptions",null,(1),null));
}));

(devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"devcards.core/EdnLikeOptions");
}));

/**
 * Positional factory function for devcards.core/EdnLikeOptions.
 */
devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

/**
 * Factory function for devcards.core/EdnLikeOptions, taking a map of keywords to field values.
 */
devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__53266){
var extmap__4478__auto__ = (function (){var G__53307 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53266,new cljs.core.Keyword(null,"obj","obj",981763962));
if(cljs.core.record_QMARK_(G__53266)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53307);
} else {
return G__53307;
}
})();
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__53266),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$))))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x))){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
} else {
return false;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if((((!((main_obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === main_obj.devcards$core$IDevcardOptions$))))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_(devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(devcards.core.atom_like_QMARK_(main_obj)){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(devcards.core.edn_like_QMARK_(main_obj)){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentityOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__53359 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if((!((G__53359 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__53359.devcards$core$IDevcard$)))){
return true;
} else {
if((!G__53359.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__53359);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__53359);
}
})()){
return devcards.core._devcard(new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
goog.object.set(devcards.core.IDevcardOptions,"string",true);

var G__53367_53989 = devcards.core._devcard_options;
var G__53368_53990 = "string";
var G__53369_53991 = (function (this$,devcard_opts){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
});
goog.object.set(G__53367_53989,G__53368_53990,G__53369_53991);
(cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.List.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options(this$__$1,devcard_opts);
}));
(cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options(this$__$1,devcard_opts);
}));
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__53396 = cljs.core.deref(devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__53396__$1 = (((((!((map__53396 == null))))?(((((map__53396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53396):map__53396);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53396__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53396__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return (!((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0))));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__53403 = cljs.core.deref(history_atom);
var map__53403__$1 = (((((!((map__53403 == null))))?(((((map__53403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53403):map__53403);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53403__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53403__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(devcards.core.can_go_back(this$)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true], 0));

cljs.core.reset_BANG_(devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__53408 = cljs.core.deref(history_atom);
var map__53408__$1 = (((((!((map__53408 == null))))?(((((map__53408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53408):map__53408);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53408__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53408__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(devcards.core.can_go_forward(this$)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true], 0));

cljs.core.reset_BANG_(devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__53415 = cljs.core.deref(history_atom);
var map__53415__$1 = (((((!((map__53415 == null))))?(((((map__53415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53415):map__53415);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53415__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(devcards.core.can_go_forward(this$)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true], 0));

cljs.core.reset_BANG_(devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first(history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var ctor__48983__auto__ = (function (props__48978__auto__){
var this__48979__auto__ = this;
React.Component.call(this__48979__auto__,props__48978__auto__);

(function (props){
var this$ = this;
return (this$.state = ({"unique_id": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null))), "history_atom": cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))}));
}).call(this__48979__auto__,props__48978__auto__);

return this__48979__auto__;
});
goog.inherits(ctor__48983__auto__,React.Component);

var x53420_54002 = ctor__48983__auto__.prototype;
(x53420_54002.componentWillMount = (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(new cljs.core.List(null,cljs.core.deref(devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504))),null,(1),null)));
}));

(x53420_54002.componentDidMount = (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state(this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state(this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__4174__auto__ = data_atom;
if(cljs.core.truth_(and__4174__auto__)){
return id;
} else {
return and__4174__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,(function (_,___$1,___$2,n){
if(devcards.core.in_time_machine_QMARK_(this$)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,(function (p__53426){
var map__53427 = p__53426;
var map__53427__$1 = (((((!((map__53427 == null))))?(((((map__53427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53427):map__53427);
var ha = map__53427__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53427__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53427__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53427__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(pointer,history);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(abridged_hist))){
return cljs.core.cons(n,abridged_hist);
} else {
return abridged_hist;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], 0));
}
}));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(history_atom));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.first(hist))){
return cljs.core.cons(n,hist);
} else {
return hist;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false], 0));
}
}));
} else {
return null;
}
}));

(x53420_54002.render = (function (){
var this$ = this;
if(((devcards.core.can_go_back(this$)) || (devcards.core.can_go_forward(this$)))){
return React.createElement("div",({"style": ({"display": ((((devcards.core.can_go_back(this$)) || (devcards.core.can_go_forward(this$))))?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});
return sablono.interpreter.interpret(React.createElement("button",({"style": ({"visibility": ((devcards.core.can_go_back(this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_(data_atom,cljs.core.deref(data_atom));
});
return sablono.interpreter.interpret(React.createElement("button",({"style": ({"visibility": ((devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});
return sablono.interpreter.interpret(React.createElement("button",({"style": ({"visibility": ((devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});
return sablono.interpreter.interpret(React.createElement("button",({"style": ({"visibility": ((devcards.core.can_go_forward(this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
}));


return ctor__48983__auto__;
})();

(devcards.core.HistoryComponent.displayName = cljs.core.name(new cljs.core.Symbol(null,"HistoryComponent","HistoryComponent",-932269385,null)));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(cljs.test.get_current_env(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m], 0))], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test(m);

return m;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test(m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR__orig_val__53477 = cljs.test._STAR_current_env_STAR_;
var _STAR_current_env_STAR__temp_val__53478 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
(cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR__temp_val__53478);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {(cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR__orig_val__53477);
}});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_render !== 'undefined')){
} else {
devcards.core.test_render = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53481 = cljs.core.get_global_hierarchy;
return (fexpr__53481.cljs$core$IFn$_invoke$arity$0 ? fexpr__53481.cljs$core$IFn$_invoke$arity$0() : fexpr__53481.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs53487 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs53487))?sablono.interpreter.attributes(attrs53487):null),((cljs.core.map_QMARK_(attrs53487))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53487)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__53499,body){
var map__53500 = p__53499;
var map__53500__$1 = (((((!((map__53500 == null))))?(((((map__53500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53500):map__53500);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53500__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs53504 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs53504))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs53504], 0))):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_(attrs53504))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53504)], null)));
})(),sablono.interpreter.interpret(body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__53507){
var map__53508 = p__53507;
var map__53508__$1 = (((((!((map__53508 == null))))?(((((map__53508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53508):map__53508);
var m = map__53508__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message(m,(function (){var attrs53511 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"}));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs53511))?sablono.interpreter.attributes(attrs53511):null),((cljs.core.map_QMARK_(attrs53511))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?sablono.interpreter.interpret(React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret(React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"})))))):null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53511),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?sablono.interpreter.interpret(React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret(React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code(actual), "lang": "clojure"})))))):null)], null)));
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message(m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs53527 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs53527))?sablono.interpreter.attributes(attrs53527):null),((cljs.core.map_QMARK_(attrs53527))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53527)], null)));
})()));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs53528 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs53528))?sablono.interpreter.attributes(attrs53528):null),((cljs.core.map_QMARK_(attrs53528))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53528)], null)));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__53529){
var map__53530 = p__53529;
var map__53530__$1 = (((((!((map__53530 == null))))?(((((map__53530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53530):map__53530);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs53534 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
}),cljs.core.reverse(cljs.core.rest(testing_contexts))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first(testing_contexts)], null),null,(1),null))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs53534))?sablono.interpreter.attributes(attrs53534):null),((cljs.core.map_QMARK_(attrs53534))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53534)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__53544 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__53544) : cljs.test.report.call(null,G__53544));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,i], 0)),new cljs.core.Keyword(null,"className","className",-1983287057),["com-rigsomelight-devcards-test-line com-rigsomelight-devcards-",cljs.core.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs53546 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__53547,p__53548){
var map__53549 = p__53547;
var map__53549__$1 = (((((!((map__53549 == null))))?(((((map__53549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53549):map__53549);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53549__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53549__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__53550 = p__53548;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53550,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53550,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (new cljs.core.List(null,devcards.core.test_renderer(t,i),null,(1),null));
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))], 0)),i),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.reverse(tests))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs53546))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs53546], 0))):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_(attrs53546))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53546)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__53573){
var map__53575 = p__53573;
var map__53575__$1 = (((((!((map__53575 == null))))?(((((map__53575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53575):map__53575);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53575__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
}),new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__53572 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__53572__$1 = (((((!((map__53572 == null))))?(((((map__53572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53572):map__53572);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_((function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
}))}),(cljs.core.truth_(path)?sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path))):null)),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_((function (){
return this$.setState(({"filter": cljs.core.identity}));
})), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret(total_tests)),((((fail + error__$1) === (0)))?null:sablono.interpreter.interpret(React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_((function (){
return this$.setState(({"filter": (function (p__53599){
var map__53600 = p__53599;
var map__53600__$1 = (((((!((map__53600 == null))))?(((((map__53600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53600):map__53600);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53600__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var fexpr__53604 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__53604.cljs$core$IFn$_invoke$arity$1 ? fexpr__53604.cljs$core$IFn$_invoke$arity$1(type) : fexpr__53604.call(null,type));
})}));
})), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret(cljs.core.str.cljs$core$IFn$_invoke$arity$1((fail + error__$1)))))),(((((pass == null)) || ((pass === (0)))))?null:sablono.interpreter.interpret(React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_((function (){
return this$.setState(({"filter": (function (p__53606){
var map__53607 = p__53606;
var map__53607__$1 = (((((!((map__53607 == null))))?(((((map__53607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53607):map__53607);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53607__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"pass","pass",1574159993));
})}));
})), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret(pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__4185__auto__ = devcards.core.get_state(this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_channel !== 'undefined')){
} else {
devcards.core.test_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var test_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_(test_env);

var tests = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,cljs.test.get_current_env());

return cljs.core.async.close_BANG_(out);
})], null));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Running tests!!"], 0));

cljs.test.run_block(tests);

return out;
});
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.test_loop !== 'undefined')){
} else {
devcards.core.test_loop = (function (){var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_53702){
var state_val_53703 = (state_53702[(1)]);
if((state_val_53703 === (7))){
var state_53702__$1 = state_53702;
var statearr_53704_54155 = state_53702__$1;
(statearr_53704_54155[(2)] = false);

(statearr_53704_54155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (20))){
var inst_53639 = (state_53702[(7)]);
var inst_53659 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_53639);
var state_53702__$1 = state_53702;
var statearr_53706_54156 = state_53702__$1;
(statearr_53706_54156[(2)] = inst_53659);

(statearr_53706_54156[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (27))){
var inst_53677 = (state_53702[(8)]);
var inst_53664 = (state_53702[(9)]);
var inst_53681 = (inst_53664.cljs$core$IFn$_invoke$arity$1 ? inst_53664.cljs$core$IFn$_invoke$arity$1(inst_53677) : inst_53664.call(null,inst_53677));
var state_53702__$1 = state_53702;
var statearr_53707_54157 = state_53702__$1;
(statearr_53707_54157[(2)] = inst_53681);

(statearr_53707_54157[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (1))){
var state_53702__$1 = state_53702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53702__$1,(2),devcards.core.test_channel);
} else {
if((state_val_53703 === (24))){
var state_53702__$1 = state_53702;
var statearr_53708_54158 = state_53702__$1;
(statearr_53708_54158[(2)] = null);

(statearr_53708_54158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (4))){
var state_53702__$1 = state_53702;
var statearr_53709_54159 = state_53702__$1;
(statearr_53709_54159[(2)] = false);

(statearr_53709_54159[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (15))){
var state_53702__$1 = state_53702;
var statearr_53710_54160 = state_53702__$1;
(statearr_53710_54160[(2)] = false);

(statearr_53710_54160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (21))){
var inst_53639 = (state_53702[(7)]);
var state_53702__$1 = state_53702;
var statearr_53711_54161 = state_53702__$1;
(statearr_53711_54161[(2)] = inst_53639);

(statearr_53711_54161[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (13))){
var inst_53700 = (state_53702[(2)]);
var state_53702__$1 = state_53702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53702__$1,inst_53700);
} else {
if((state_val_53703 === (22))){
var inst_53663 = (state_53702[(10)]);
var inst_53662 = (state_53702[(2)]);
var inst_53663__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53662,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_53664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53662,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_53702__$1 = (function (){var statearr_53714 = state_53702;
(statearr_53714[(9)] = inst_53664);

(statearr_53714[(10)] = inst_53663__$1);

return statearr_53714;
})();
if(cljs.core.truth_(inst_53663__$1)){
var statearr_53715_54163 = state_53702__$1;
(statearr_53715_54163[(1)] = (23));

} else {
var statearr_53716_54164 = state_53702__$1;
(statearr_53716_54164[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (29))){
var inst_53691 = (state_53702[(2)]);
var inst_53692 = cljs.test.clear_env_BANG_();
var state_53702__$1 = (function (){var statearr_53717 = state_53702;
(statearr_53717[(11)] = inst_53691);

(statearr_53717[(12)] = inst_53692);

return statearr_53717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53702__$1,(30),devcards.core.test_channel);
} else {
if((state_val_53703 === (6))){
var state_53702__$1 = state_53702;
var statearr_53718_54165 = state_53702__$1;
(statearr_53718_54165[(2)] = true);

(statearr_53718_54165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (28))){
var inst_53664 = (state_53702[(9)]);
var inst_53683 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_53684 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_53685 = cljs.core.PersistentHashMap.fromArrays(inst_53683,inst_53684);
var inst_53686 = devcards.core.collect_test(inst_53685);
var inst_53687 = cljs.test.get_current_env();
var inst_53688 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_53687,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_53689 = (inst_53664.cljs$core$IFn$_invoke$arity$1 ? inst_53664.cljs$core$IFn$_invoke$arity$1(inst_53688) : inst_53664.call(null,inst_53688));
var state_53702__$1 = (function (){var statearr_53719 = state_53702;
(statearr_53719[(13)] = inst_53686);

return statearr_53719;
})();
var statearr_53722_54172 = state_53702__$1;
(statearr_53722_54172[(2)] = inst_53689);

(statearr_53722_54172[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (25))){
var inst_53698 = (state_53702[(2)]);
var state_53702__$1 = state_53702;
var statearr_53723_54173 = state_53702__$1;
(statearr_53723_54173[(2)] = inst_53698);

(statearr_53723_54173[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (17))){
var state_53702__$1 = state_53702;
var statearr_53724_54174 = state_53702__$1;
(statearr_53724_54174[(2)] = true);

(statearr_53724_54174[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (3))){
var inst_53614 = (state_53702[(14)]);
var inst_53619 = inst_53614.cljs$lang$protocol_mask$partition0$;
var inst_53620 = (inst_53619 & (64));
var inst_53621 = inst_53614.cljs$core$ISeq$;
var inst_53622 = (cljs.core.PROTOCOL_SENTINEL === inst_53621);
var inst_53623 = ((inst_53620) || (inst_53622));
var state_53702__$1 = state_53702;
if(cljs.core.truth_(inst_53623)){
var statearr_53726_54175 = state_53702__$1;
(statearr_53726_54175[(1)] = (6));

} else {
var statearr_53728_54176 = state_53702__$1;
(statearr_53728_54176[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (12))){
var inst_53639 = (state_53702[(7)]);
var inst_53643 = (inst_53639 == null);
var inst_53644 = cljs.core.not(inst_53643);
var state_53702__$1 = state_53702;
if(inst_53644){
var statearr_53731_54177 = state_53702__$1;
(statearr_53731_54177[(1)] = (14));

} else {
var statearr_53733_54178 = state_53702__$1;
(statearr_53733_54178[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (2))){
var inst_53614 = (state_53702[(14)]);
var inst_53614__$1 = (state_53702[(2)]);
var inst_53616 = (inst_53614__$1 == null);
var inst_53617 = cljs.core.not(inst_53616);
var state_53702__$1 = (function (){var statearr_53736 = state_53702;
(statearr_53736[(14)] = inst_53614__$1);

return statearr_53736;
})();
if(inst_53617){
var statearr_53738_54181 = state_53702__$1;
(statearr_53738_54181[(1)] = (3));

} else {
var statearr_53740_54182 = state_53702__$1;
(statearr_53740_54182[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (23))){
var inst_53663 = (state_53702[(10)]);
var inst_53670 = (state_53702[(15)]);
var inst_53670__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_53671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53672 = devcards.core.run_card_tests(inst_53663);
var inst_53673 = [inst_53672,inst_53670__$1];
var inst_53674 = (new cljs.core.PersistentVector(null,2,(5),inst_53671,inst_53673,null));
var state_53702__$1 = (function (){var statearr_53742 = state_53702;
(statearr_53742[(15)] = inst_53670__$1);

return statearr_53742;
})();
return cljs.core.async.ioc_alts_BANG_(state_53702__$1,(26),inst_53674);
} else {
if((state_val_53703 === (19))){
var inst_53654 = (state_53702[(2)]);
var state_53702__$1 = state_53702;
var statearr_53748_54183 = state_53702__$1;
(statearr_53748_54183[(2)] = inst_53654);

(statearr_53748_54183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (11))){
var inst_53614 = (state_53702[(14)]);
var inst_53635 = (state_53702[(2)]);
var inst_53637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53635,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_53638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53635,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_53639 = inst_53614;
var state_53702__$1 = (function (){var statearr_53755 = state_53702;
(statearr_53755[(16)] = inst_53637);

(statearr_53755[(17)] = inst_53638);

(statearr_53755[(7)] = inst_53639);

return statearr_53755;
})();
var statearr_53756_54184 = state_53702__$1;
(statearr_53756_54184[(2)] = null);

(statearr_53756_54184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (9))){
var inst_53614 = (state_53702[(14)]);
var inst_53632 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_53614);
var state_53702__$1 = state_53702;
var statearr_53758_54185 = state_53702__$1;
(statearr_53758_54185[(2)] = inst_53632);

(statearr_53758_54185[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (5))){
var inst_53630 = (state_53702[(2)]);
var state_53702__$1 = state_53702;
if(cljs.core.truth_(inst_53630)){
var statearr_53759_54186 = state_53702__$1;
(statearr_53759_54186[(1)] = (9));

} else {
var statearr_53760_54187 = state_53702__$1;
(statearr_53760_54187[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (14))){
var inst_53639 = (state_53702[(7)]);
var inst_53646 = inst_53639.cljs$lang$protocol_mask$partition0$;
var inst_53647 = (inst_53646 & (64));
var inst_53648 = inst_53639.cljs$core$ISeq$;
var inst_53649 = (cljs.core.PROTOCOL_SENTINEL === inst_53648);
var inst_53650 = ((inst_53647) || (inst_53649));
var state_53702__$1 = state_53702;
if(cljs.core.truth_(inst_53650)){
var statearr_53763_54190 = state_53702__$1;
(statearr_53763_54190[(1)] = (17));

} else {
var statearr_53764_54191 = state_53702__$1;
(statearr_53764_54191[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (26))){
var inst_53670 = (state_53702[(15)]);
var inst_53676 = (state_53702[(2)]);
var inst_53677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53676,(0),null);
var inst_53678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53676,(1),null);
var inst_53679 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_53678,inst_53670);
var state_53702__$1 = (function (){var statearr_53767 = state_53702;
(statearr_53767[(8)] = inst_53677);

return statearr_53767;
})();
if(inst_53679){
var statearr_53768_54196 = state_53702__$1;
(statearr_53768_54196[(1)] = (27));

} else {
var statearr_53769_54197 = state_53702__$1;
(statearr_53769_54197[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (16))){
var inst_53657 = (state_53702[(2)]);
var state_53702__$1 = state_53702;
if(cljs.core.truth_(inst_53657)){
var statearr_53770_54198 = state_53702__$1;
(statearr_53770_54198[(1)] = (20));

} else {
var statearr_53771_54199 = state_53702__$1;
(statearr_53771_54199[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (30))){
var inst_53694 = (state_53702[(2)]);
var inst_53639 = inst_53694;
var state_53702__$1 = (function (){var statearr_53772 = state_53702;
(statearr_53772[(7)] = inst_53639);

return statearr_53772;
})();
var statearr_53774_54200 = state_53702__$1;
(statearr_53774_54200[(2)] = null);

(statearr_53774_54200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (10))){
var inst_53614 = (state_53702[(14)]);
var state_53702__$1 = state_53702;
var statearr_53776_54201 = state_53702__$1;
(statearr_53776_54201[(2)] = inst_53614);

(statearr_53776_54201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (18))){
var state_53702__$1 = state_53702;
var statearr_53777_54202 = state_53702__$1;
(statearr_53777_54202[(2)] = false);

(statearr_53777_54202[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53703 === (8))){
var inst_53627 = (state_53702[(2)]);
var state_53702__$1 = state_53702;
var statearr_53778_54203 = state_53702__$1;
(statearr_53778_54203[(2)] = inst_53627);

(statearr_53778_54203[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var devcards$core$state_machine__41713__auto__ = null;
var devcards$core$state_machine__41713__auto____0 = (function (){
var statearr_53780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53780[(0)] = devcards$core$state_machine__41713__auto__);

(statearr_53780[(1)] = (1));

return statearr_53780;
});
var devcards$core$state_machine__41713__auto____1 = (function (state_53702){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_53702);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e53782){if((e53782 instanceof Object)){
var ex__41716__auto__ = e53782;
var statearr_53783_54208 = state_53702;
(statearr_53783_54208[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53782;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54209 = state_53702;
state_53702 = G__54209;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
devcards$core$state_machine__41713__auto__ = function(state_53702){
switch(arguments.length){
case 0:
return devcards$core$state_machine__41713__auto____0.call(this);
case 1:
return devcards$core$state_machine__41713__auto____1.call(this,state_53702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__41713__auto____0;
devcards$core$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__41713__auto____1;
return devcards$core$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_53785 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_53785[(6)] = c__41735__auto__);

return statearr_53785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
devcards.core.TestDevcard = (function (){var ctor__48983__auto__ = (function (props__48980__auto__){
var this__48981__auto__ = this;
React.Component.call(this__48981__auto__,props__48980__auto__);

return this__48981__auto__;
});
goog.inherits(ctor__48983__auto__,React.Component);

var x53788_54212 = ctor__48983__auto__.prototype;
(x53788_54212.componentWillMount = (function (){
var this$ = this;
var temp__5735__auto__ = devcards.core.get_props(this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__5735__auto__)){
var test_thunks = temp__5735__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}));

(x53788_54212.componentWillReceiveProps = (function (next_props){
var this$ = this;
var temp__5735__auto__ = (function (){var G__53792 = next_props;
var G__53793 = cljs.core.name(new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
return goog.object.get(G__53792,G__53793);
})();
if(cljs.core.truth_(temp__5735__auto__)){
var test_thunks = temp__5735__auto__;
return devcards.core.test_card_test_run(this$,test_thunks);
} else {
return null;
}
}));

(x53788_54212.render = (function (){
var this$ = this;
var test_summary = devcards.core.get_state(this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props(this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests(this$,path,test_summary);
}));


return ctor__48983__auto__;
})();

(devcards.core.TestDevcard.displayName = cljs.core.name(new cljs.core.Symbol(null,"TestDevcard","TestDevcard",-506859910,null)));
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54214 = arguments.length;
var i__4790__auto___54215 = (0);
while(true){
if((i__4790__auto___54215 < len__4789__auto___54214)){
args__4795__auto__.push((arguments[i__4790__auto___54215]));

var G__54216 = (i__4790__auto___54215 + (1));
i__4790__auto___54215 = G__54216;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if((typeof devcards !== 'undefined') && (typeof devcards.core !== 'undefined') && (typeof devcards.core.t_devcards$core53800 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core53800 = (function (test_thunks,meta53801){
this.test_thunks = test_thunks;
this.meta53801 = meta53801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(devcards.core.t_devcards$core53800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53802,meta53801__$1){
var self__ = this;
var _53802__$1 = this;
return (new devcards.core.t_devcards$core53800(self__.test_thunks,meta53801__$1));
}));

(devcards.core.t_devcards$core53800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53802){
var self__ = this;
var _53802__$1 = this;
return self__.meta53801;
}));

(devcards.core.t_devcards$core53800.prototype.devcards$core$IDevcard$ = cljs.core.PROTOCOL_SENTINEL);

(devcards.core.t_devcards$core53800.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
}));

(devcards.core.t_devcards$core53800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta53801","meta53801",1411349642,null)], null);
}));

(devcards.core.t_devcards$core53800.cljs$lang$type = true);

(devcards.core.t_devcards$core53800.cljs$lang$ctorStr = "devcards.core/t_devcards$core53800");

(devcards.core.t_devcards$core53800.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"devcards.core/t_devcards$core53800");
}));

/**
 * Positional factory function for devcards.core/t_devcards$core53800.
 */
devcards.core.__GT_t_devcards$core53800 = (function devcards$core$__GT_t_devcards$core53800(test_thunks__$1,meta53801){
return (new devcards.core.t_devcards$core53800(test_thunks__$1,meta53801));
});

}

return (new devcards.core.t_devcards$core53800(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
}));

(devcards.core.test_card.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devcards.core.test_card.cljs$lang$applyTo = (function (seq53797){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53797));
}));

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__53810_SHARP_,p2__53811_SHARP_){
return goog.object.get(p1__53810_SHARP_,p2__53811_SHARP_);
}),goog.global,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__5735__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.system.app_state));
if(cljs.core.truth_(temp__5735__auto__)){
var cards = temp__5735__auto__;
var temp__5735__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(ns_symbol))], null));
if(cljs.core.truth_(temp__5735__auto____$1)){
var card = temp__5735__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_(devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__5735__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter(cljs.core.name(cljs.core.munge(ns_symbol))));
if(cljs.core.truth_(temp__5735__auto__)){
var base_card_options = temp__5735__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Adding base card options!",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_card_options], 0))], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,base_card_options], 0));
}));
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__5735__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__5735__auto__)){
var card = temp__5735__auto__;
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return ["<div id=\"com-rigsomelight-devcards-main\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ReactDOMServer.renderToString((function (){var attrs53838 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs53838))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs53838], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs53838))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53838)], null)));
})())),"</div>"].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__5735__auto__ = devcards.core.get_cards_for_ns(ns_symbol);
if(cljs.core.truth_(temp__5735__auto__)){
var card = temp__5735__auto__;
return ReactDOM.render((function (){var attrs53848 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs53848))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs53848], 0))):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_(attrs53848))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs53848)], null)));
})(),devcards.system.devcards_app_node());
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_53859){
var state_val_53860 = (state_53859[(1)]);
if((state_val_53860 === (1))){
var inst_53850 = devcards.core.load_data_from_channel_BANG_();
var state_53859__$1 = state_53859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53859__$1,(2),inst_53850);
} else {
if((state_val_53860 === (2))){
var inst_53852 = (state_53859[(2)]);
var inst_53853 = cljs.core.async.timeout((100));
var state_53859__$1 = (function (){var statearr_53862 = state_53859;
(statearr_53862[(7)] = inst_53852);

return statearr_53862;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53859__$1,(3),inst_53853);
} else {
if((state_val_53860 === (3))){
var inst_53855 = (state_53859[(2)]);
var inst_53856 = (function (){return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
})();
var inst_53857 = setTimeout(inst_53856,(0));
var state_53859__$1 = (function (){var statearr_53867 = state_53859;
(statearr_53867[(8)] = inst_53855);

return statearr_53867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53859__$1,inst_53857);
} else {
return null;
}
}
}
});
return (function() {
var devcards$core$mount_namespace_$_state_machine__41713__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__41713__auto____0 = (function (){
var statearr_53870 = [null,null,null,null,null,null,null,null,null];
(statearr_53870[(0)] = devcards$core$mount_namespace_$_state_machine__41713__auto__);

(statearr_53870[(1)] = (1));

return statearr_53870;
});
var devcards$core$mount_namespace_$_state_machine__41713__auto____1 = (function (state_53859){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_53859);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e53872){if((e53872 instanceof Object)){
var ex__41716__auto__ = e53872;
var statearr_53873_54231 = state_53859;
(statearr_53873_54231[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53872;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54232 = state_53859;
state_53859 = G__54232;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__41713__auto__ = function(state_53859){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__41713__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__41713__auto____1.call(this,state_53859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__41713__auto____0;
devcards$core$mount_namespace_$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__41713__auto____1;
return devcards$core$mount_namespace_$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_53874 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_53874[(6)] = c__41735__auto__);

return statearr_53874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=devcards.core.js.map
