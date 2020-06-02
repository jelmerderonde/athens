goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60022 = arguments.length;
var i__4790__auto___60023 = (0);
while(true){
if((i__4790__auto___60023 < len__4789__auto___60022)){
args__4795__auto__.push((arguments[i__4790__auto___60023]));

var G__60024 = (i__4790__auto___60023 + (1));
i__4790__auto___60023 = G__60024;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq59661){
var G__59662 = cljs.core.first(seq59661);
var seq59661__$1 = cljs.core.next(seq59661);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59662,seq59661__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__59663){
var map__59664 = p__59663;
var map__59664__$1 = (((((!((map__59664 == null))))?(((((map__59664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59664):map__59664);
var src = map__59664__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59664__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59664__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__59666 = cljs.core.seq(sources);
var chunk__59667 = null;
var count__59668 = (0);
var i__59669 = (0);
while(true){
if((i__59669 < count__59668)){
var map__59698 = chunk__59667.cljs$core$IIndexed$_nth$arity$2(null,i__59669);
var map__59698__$1 = (((((!((map__59698 == null))))?(((((map__59698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59698):map__59698);
var src = map__59698__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59698__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59698__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59698__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59698__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59700){var e_60025 = e59700;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60025);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60025.message)].join('')));
}

var G__60026 = seq__59666;
var G__60027 = chunk__59667;
var G__60028 = count__59668;
var G__60029 = (i__59669 + (1));
seq__59666 = G__60026;
chunk__59667 = G__60027;
count__59668 = G__60028;
i__59669 = G__60029;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59666);
if(temp__5735__auto__){
var seq__59666__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59666__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59666__$1);
var G__60030 = cljs.core.chunk_rest(seq__59666__$1);
var G__60031 = c__4609__auto__;
var G__60032 = cljs.core.count(c__4609__auto__);
var G__60033 = (0);
seq__59666 = G__60030;
chunk__59667 = G__60031;
count__59668 = G__60032;
i__59669 = G__60033;
continue;
} else {
var map__59702 = cljs.core.first(seq__59666__$1);
var map__59702__$1 = (((((!((map__59702 == null))))?(((((map__59702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59702):map__59702);
var src = map__59702__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59702__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59702__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59702__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59702__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59704){var e_60034 = e59704;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60034);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60034.message)].join('')));
}

var G__60041 = cljs.core.next(seq__59666__$1);
var G__60042 = null;
var G__60043 = (0);
var G__60044 = (0);
seq__59666 = G__60041;
chunk__59667 = G__60042;
count__59668 = G__60043;
i__59669 = G__60044;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__59705 = cljs.core.seq(js_requires);
var chunk__59706 = null;
var count__59707 = (0);
var i__59708 = (0);
while(true){
if((i__59708 < count__59707)){
var js_ns = chunk__59706.cljs$core$IIndexed$_nth$arity$2(null,i__59708);
var require_str_60060 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60060);


var G__60062 = seq__59705;
var G__60063 = chunk__59706;
var G__60064 = count__59707;
var G__60065 = (i__59708 + (1));
seq__59705 = G__60062;
chunk__59706 = G__60063;
count__59707 = G__60064;
i__59708 = G__60065;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59705);
if(temp__5735__auto__){
var seq__59705__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59705__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59705__$1);
var G__60066 = cljs.core.chunk_rest(seq__59705__$1);
var G__60067 = c__4609__auto__;
var G__60068 = cljs.core.count(c__4609__auto__);
var G__60069 = (0);
seq__59705 = G__60066;
chunk__59706 = G__60067;
count__59707 = G__60068;
i__59708 = G__60069;
continue;
} else {
var js_ns = cljs.core.first(seq__59705__$1);
var require_str_60070 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60070);


var G__60073 = cljs.core.next(seq__59705__$1);
var G__60074 = null;
var G__60075 = (0);
var G__60076 = (0);
seq__59705 = G__60073;
chunk__59706 = G__60074;
count__59707 = G__60075;
i__59708 = G__60076;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__59709 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__59709) : callback.call(null,G__59709));
} else {
var G__59710 = shadow.cljs.devtools.client.env.files_url();
var G__59711 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__59712 = "POST";
var G__59713 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__59714 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__59710,G__59711,G__59712,G__59713,G__59714);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__59716){
var map__59717 = p__59716;
var map__59717__$1 = (((((!((map__59717 == null))))?(((((map__59717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59717):map__59717);
var msg = map__59717__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59717__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59717__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__59719 = info;
var map__59719__$1 = (((((!((map__59719 == null))))?(((((map__59719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59719):map__59719);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59719__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59719__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59721(s__59722){
return (new cljs.core.LazySeq(null,(function (){
var s__59722__$1 = s__59722;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59722__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__59727 = cljs.core.first(xs__6292__auto__);
var map__59727__$1 = (((((!((map__59727 == null))))?(((((map__59727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59727):map__59727);
var src = map__59727__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59727__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59727__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__59722__$1,map__59727,map__59727__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59719,map__59719__$1,sources,compiled,map__59717,map__59717__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59721_$_iter__59723(s__59724){
return (new cljs.core.LazySeq(null,((function (s__59722__$1,map__59727,map__59727__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59719,map__59719__$1,sources,compiled,map__59717,map__59717__$1,msg,info,reload_info){
return (function (){
var s__59724__$1 = s__59724;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__59724__$1);
if(temp__5735__auto____$1){
var s__59724__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59724__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59724__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59726 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59725 = (0);
while(true){
if((i__59725 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59725);
cljs.core.chunk_append(b__59726,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__60093 = (i__59725 + (1));
i__59725 = G__60093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59726),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59721_$_iter__59723(cljs.core.chunk_rest(s__59724__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59726),null);
}
} else {
var warning = cljs.core.first(s__59724__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59721_$_iter__59723(cljs.core.rest(s__59724__$2)));
}
} else {
return null;
}
break;
}
});})(s__59722__$1,map__59727,map__59727__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59719,map__59719__$1,sources,compiled,map__59717,map__59717__$1,msg,info,reload_info))
,null,null));
});})(s__59722__$1,map__59727,map__59727__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59719,map__59719__$1,sources,compiled,map__59717,map__59717__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59721(cljs.core.rest(s__59722__$1)));
} else {
var G__60095 = cljs.core.rest(s__59722__$1);
s__59722__$1 = G__60095;
continue;
}
} else {
var G__60096 = cljs.core.rest(s__59722__$1);
s__59722__$1 = G__60096;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__59747_60099 = cljs.core.seq(warnings);
var chunk__59748_60100 = null;
var count__59749_60101 = (0);
var i__59750_60102 = (0);
while(true){
if((i__59750_60102 < count__59749_60101)){
var map__59774_60104 = chunk__59748_60100.cljs$core$IIndexed$_nth$arity$2(null,i__59750_60102);
var map__59774_60105__$1 = (((((!((map__59774_60104 == null))))?(((((map__59774_60104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59774_60104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59774_60104):map__59774_60104);
var w_60106 = map__59774_60105__$1;
var msg_60107__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59774_60105__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59774_60105__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59774_60105__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59774_60105__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60110)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60108),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60109),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60107__$1)].join(''));


var G__60116 = seq__59747_60099;
var G__60117 = chunk__59748_60100;
var G__60118 = count__59749_60101;
var G__60119 = (i__59750_60102 + (1));
seq__59747_60099 = G__60116;
chunk__59748_60100 = G__60117;
count__59749_60101 = G__60118;
i__59750_60102 = G__60119;
continue;
} else {
var temp__5735__auto___60120 = cljs.core.seq(seq__59747_60099);
if(temp__5735__auto___60120){
var seq__59747_60121__$1 = temp__5735__auto___60120;
if(cljs.core.chunked_seq_QMARK_(seq__59747_60121__$1)){
var c__4609__auto___60122 = cljs.core.chunk_first(seq__59747_60121__$1);
var G__60123 = cljs.core.chunk_rest(seq__59747_60121__$1);
var G__60124 = c__4609__auto___60122;
var G__60125 = cljs.core.count(c__4609__auto___60122);
var G__60126 = (0);
seq__59747_60099 = G__60123;
chunk__59748_60100 = G__60124;
count__59749_60101 = G__60125;
i__59750_60102 = G__60126;
continue;
} else {
var map__59776_60127 = cljs.core.first(seq__59747_60121__$1);
var map__59776_60128__$1 = (((((!((map__59776_60127 == null))))?(((((map__59776_60127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59776_60127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59776_60127):map__59776_60127);
var w_60129 = map__59776_60128__$1;
var msg_60130__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776_60128__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776_60128__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776_60128__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776_60128__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60133)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60131),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60132),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60130__$1)].join(''));


var G__60136 = cljs.core.next(seq__59747_60121__$1);
var G__60137 = null;
var G__60138 = (0);
var G__60139 = (0);
seq__59747_60099 = G__60136;
chunk__59748_60100 = G__60137;
count__59749_60101 = G__60138;
i__59750_60102 = G__60139;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59778){
var map__59779 = p__59778;
var map__59779__$1 = (((((!((map__59779 == null))))?(((((map__59779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59779):map__59779);
var src = map__59779__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59779__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59779__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59781){
var map__59782 = p__59781;
var map__59782__$1 = (((((!((map__59782 == null))))?(((((map__59782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59782):map__59782);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59782__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59784){
var map__59785 = p__59784;
var map__59785__$1 = (((((!((map__59785 == null))))?(((((map__59785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59785):map__59785);
var rc = map__59785__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59785__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__59715_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__59715_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__59787){
var map__59788 = p__59787;
var map__59788__$1 = (((((!((map__59788 == null))))?(((((map__59788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59788):map__59788);
var msg = map__59788__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59788__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__59790 = cljs.core.seq(updates);
var chunk__59792 = null;
var count__59793 = (0);
var i__59794 = (0);
while(true){
if((i__59794 < count__59793)){
var path = chunk__59792.cljs$core$IIndexed$_nth$arity$2(null,i__59794);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59961_60146 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59964_60147 = null;
var count__59965_60148 = (0);
var i__59966_60149 = (0);
while(true){
if((i__59966_60149 < count__59965_60148)){
var node_60150 = chunk__59964_60147.cljs$core$IIndexed$_nth$arity$2(null,i__59966_60149);
var path_match_60152 = shadow.cljs.devtools.client.browser.match_paths(node_60150.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60152)){
var new_link_60154 = (function (){var G__59971 = node_60150.cloneNode(true);
G__59971.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60152),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59971;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60152], 0));

goog.dom.insertSiblingAfter(new_link_60154,node_60150);

goog.dom.removeNode(node_60150);


var G__60155 = seq__59961_60146;
var G__60156 = chunk__59964_60147;
var G__60157 = count__59965_60148;
var G__60158 = (i__59966_60149 + (1));
seq__59961_60146 = G__60155;
chunk__59964_60147 = G__60156;
count__59965_60148 = G__60157;
i__59966_60149 = G__60158;
continue;
} else {
var G__60159 = seq__59961_60146;
var G__60160 = chunk__59964_60147;
var G__60161 = count__59965_60148;
var G__60162 = (i__59966_60149 + (1));
seq__59961_60146 = G__60159;
chunk__59964_60147 = G__60160;
count__59965_60148 = G__60161;
i__59966_60149 = G__60162;
continue;
}
} else {
var temp__5735__auto___60164 = cljs.core.seq(seq__59961_60146);
if(temp__5735__auto___60164){
var seq__59961_60165__$1 = temp__5735__auto___60164;
if(cljs.core.chunked_seq_QMARK_(seq__59961_60165__$1)){
var c__4609__auto___60166 = cljs.core.chunk_first(seq__59961_60165__$1);
var G__60167 = cljs.core.chunk_rest(seq__59961_60165__$1);
var G__60168 = c__4609__auto___60166;
var G__60169 = cljs.core.count(c__4609__auto___60166);
var G__60170 = (0);
seq__59961_60146 = G__60167;
chunk__59964_60147 = G__60168;
count__59965_60148 = G__60169;
i__59966_60149 = G__60170;
continue;
} else {
var node_60172 = cljs.core.first(seq__59961_60165__$1);
var path_match_60173 = shadow.cljs.devtools.client.browser.match_paths(node_60172.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60173)){
var new_link_60174 = (function (){var G__59972 = node_60172.cloneNode(true);
G__59972.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60173),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59972;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60173], 0));

goog.dom.insertSiblingAfter(new_link_60174,node_60172);

goog.dom.removeNode(node_60172);


var G__60176 = cljs.core.next(seq__59961_60165__$1);
var G__60177 = null;
var G__60178 = (0);
var G__60179 = (0);
seq__59961_60146 = G__60176;
chunk__59964_60147 = G__60177;
count__59965_60148 = G__60178;
i__59966_60149 = G__60179;
continue;
} else {
var G__60180 = cljs.core.next(seq__59961_60165__$1);
var G__60181 = null;
var G__60182 = (0);
var G__60183 = (0);
seq__59961_60146 = G__60180;
chunk__59964_60147 = G__60181;
count__59965_60148 = G__60182;
i__59966_60149 = G__60183;
continue;
}
}
} else {
}
}
break;
}


var G__60184 = seq__59790;
var G__60185 = chunk__59792;
var G__60186 = count__59793;
var G__60187 = (i__59794 + (1));
seq__59790 = G__60184;
chunk__59792 = G__60185;
count__59793 = G__60186;
i__59794 = G__60187;
continue;
} else {
var G__60188 = seq__59790;
var G__60189 = chunk__59792;
var G__60190 = count__59793;
var G__60191 = (i__59794 + (1));
seq__59790 = G__60188;
chunk__59792 = G__60189;
count__59793 = G__60190;
i__59794 = G__60191;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59790);
if(temp__5735__auto__){
var seq__59790__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59790__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59790__$1);
var G__60192 = cljs.core.chunk_rest(seq__59790__$1);
var G__60193 = c__4609__auto__;
var G__60194 = cljs.core.count(c__4609__auto__);
var G__60195 = (0);
seq__59790 = G__60192;
chunk__59792 = G__60193;
count__59793 = G__60194;
i__59794 = G__60195;
continue;
} else {
var path = cljs.core.first(seq__59790__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59973_60196 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59976_60197 = null;
var count__59977_60198 = (0);
var i__59978_60199 = (0);
while(true){
if((i__59978_60199 < count__59977_60198)){
var node_60202 = chunk__59976_60197.cljs$core$IIndexed$_nth$arity$2(null,i__59978_60199);
var path_match_60203 = shadow.cljs.devtools.client.browser.match_paths(node_60202.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60203)){
var new_link_60204 = (function (){var G__59983 = node_60202.cloneNode(true);
G__59983.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60203),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59983;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60203], 0));

goog.dom.insertSiblingAfter(new_link_60204,node_60202);

goog.dom.removeNode(node_60202);


var G__60207 = seq__59973_60196;
var G__60208 = chunk__59976_60197;
var G__60209 = count__59977_60198;
var G__60210 = (i__59978_60199 + (1));
seq__59973_60196 = G__60207;
chunk__59976_60197 = G__60208;
count__59977_60198 = G__60209;
i__59978_60199 = G__60210;
continue;
} else {
var G__60211 = seq__59973_60196;
var G__60212 = chunk__59976_60197;
var G__60213 = count__59977_60198;
var G__60214 = (i__59978_60199 + (1));
seq__59973_60196 = G__60211;
chunk__59976_60197 = G__60212;
count__59977_60198 = G__60213;
i__59978_60199 = G__60214;
continue;
}
} else {
var temp__5735__auto___60215__$1 = cljs.core.seq(seq__59973_60196);
if(temp__5735__auto___60215__$1){
var seq__59973_60216__$1 = temp__5735__auto___60215__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59973_60216__$1)){
var c__4609__auto___60217 = cljs.core.chunk_first(seq__59973_60216__$1);
var G__60218 = cljs.core.chunk_rest(seq__59973_60216__$1);
var G__60219 = c__4609__auto___60217;
var G__60220 = cljs.core.count(c__4609__auto___60217);
var G__60221 = (0);
seq__59973_60196 = G__60218;
chunk__59976_60197 = G__60219;
count__59977_60198 = G__60220;
i__59978_60199 = G__60221;
continue;
} else {
var node_60222 = cljs.core.first(seq__59973_60216__$1);
var path_match_60223 = shadow.cljs.devtools.client.browser.match_paths(node_60222.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60223)){
var new_link_60225 = (function (){var G__59984 = node_60222.cloneNode(true);
G__59984.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60223),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59984;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60223], 0));

goog.dom.insertSiblingAfter(new_link_60225,node_60222);

goog.dom.removeNode(node_60222);


var G__60226 = cljs.core.next(seq__59973_60216__$1);
var G__60227 = null;
var G__60228 = (0);
var G__60229 = (0);
seq__59973_60196 = G__60226;
chunk__59976_60197 = G__60227;
count__59977_60198 = G__60228;
i__59978_60199 = G__60229;
continue;
} else {
var G__60230 = cljs.core.next(seq__59973_60216__$1);
var G__60231 = null;
var G__60232 = (0);
var G__60233 = (0);
seq__59973_60196 = G__60230;
chunk__59976_60197 = G__60231;
count__59977_60198 = G__60232;
i__59978_60199 = G__60233;
continue;
}
}
} else {
}
}
break;
}


var G__60234 = cljs.core.next(seq__59790__$1);
var G__60235 = null;
var G__60236 = (0);
var G__60237 = (0);
seq__59790 = G__60234;
chunk__59792 = G__60235;
count__59793 = G__60236;
i__59794 = G__60237;
continue;
} else {
var G__60239 = cljs.core.next(seq__59790__$1);
var G__60240 = null;
var G__60241 = (0);
var G__60242 = (0);
seq__59790 = G__60239;
chunk__59792 = G__60240;
count__59793 = G__60241;
i__59794 = G__60242;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__59985){
var map__59986 = p__59985;
var map__59986__$1 = (((((!((map__59986 == null))))?(((((map__59986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59986):map__59986);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59986__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59986__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__59988,done){
var map__59989 = p__59988;
var map__59989__$1 = (((((!((map__59989 == null))))?(((((map__59989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59989):map__59989);
var msg = map__59989__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59991){
var map__59992 = p__59991;
var map__59992__$1 = (((((!((map__59992 == null))))?(((((map__59992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59992):map__59992);
var src = map__59992__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59992__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e59994){var e = e59994;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__59995,done){
var map__59996 = p__59995;
var map__59996__$1 = (((((!((map__59996 == null))))?(((((map__59996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59996):map__59996);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59996__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59996__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__59998){
var map__59999 = p__59998;
var map__59999__$1 = (((((!((map__59999 == null))))?(((((map__59999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59999):map__59999);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59999__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59999__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__60001,done){
var map__60002 = p__60001;
var map__60002__$1 = (((((!((map__60002 == null))))?(((((map__60002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60002):map__60002);
var msg = map__60002__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60002__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__60004_60253 = type;
var G__60004_60254__$1 = (((G__60004_60253 instanceof cljs.core.Keyword))?G__60004_60253.fqn:null);
switch (G__60004_60254__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__60005 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__60006 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__60007 = "POST";
var G__60008 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__60009 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__60005,G__60006,G__60007,G__60008,G__60009);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__60011 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__60010 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__60010.cljs$core$IFn$_invoke$arity$1 ? fexpr__60010.cljs$core$IFn$_invoke$arity$1(G__60011) : fexpr__60010.call(null,G__60011));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e60013){var e = e60013;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___60257 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___60257)){
var s_60258 = temp__5735__auto___60257;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_60258.onclose = (function (e){
return null;
}));

s_60258.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
