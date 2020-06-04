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
var len__4789__auto___61050 = arguments.length;
var i__4790__auto___61051 = (0);
while(true){
if((i__4790__auto___61051 < len__4789__auto___61050)){
args__4795__auto__.push((arguments[i__4790__auto___61051]));

var G__61052 = (i__4790__auto___61051 + (1));
i__4790__auto___61051 = G__61052;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq60810){
var G__60811 = cljs.core.first(seq60810);
var seq60810__$1 = cljs.core.next(seq60810);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60811,seq60810__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__60823){
var map__60824 = p__60823;
var map__60824__$1 = (((((!((map__60824 == null))))?(((((map__60824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60824):map__60824);
var src = map__60824__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60824__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60824__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__60828 = cljs.core.seq(sources);
var chunk__60829 = null;
var count__60830 = (0);
var i__60831 = (0);
while(true){
if((i__60831 < count__60830)){
var map__60838 = chunk__60829.cljs$core$IIndexed$_nth$arity$2(null,i__60831);
var map__60838__$1 = (((((!((map__60838 == null))))?(((((map__60838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60838):map__60838);
var src = map__60838__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60838__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60838__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60838__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60838__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e60840){var e_61055 = e60840;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61055);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61055.message)].join('')));
}

var G__61060 = seq__60828;
var G__61061 = chunk__60829;
var G__61062 = count__60830;
var G__61063 = (i__60831 + (1));
seq__60828 = G__61060;
chunk__60829 = G__61061;
count__60830 = G__61062;
i__60831 = G__61063;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60828);
if(temp__5735__auto__){
var seq__60828__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60828__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60828__$1);
var G__61067 = cljs.core.chunk_rest(seq__60828__$1);
var G__61068 = c__4609__auto__;
var G__61069 = cljs.core.count(c__4609__auto__);
var G__61070 = (0);
seq__60828 = G__61067;
chunk__60829 = G__61068;
count__60830 = G__61069;
i__60831 = G__61070;
continue;
} else {
var map__60843 = cljs.core.first(seq__60828__$1);
var map__60843__$1 = (((((!((map__60843 == null))))?(((((map__60843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60843):map__60843);
var src = map__60843__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60843__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60843__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60843__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60843__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e60845){var e_61071 = e60845;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61071);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61071.message)].join('')));
}

var G__61075 = cljs.core.next(seq__60828__$1);
var G__61076 = null;
var G__61077 = (0);
var G__61078 = (0);
seq__60828 = G__61075;
chunk__60829 = G__61076;
count__60830 = G__61077;
i__60831 = G__61078;
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
var seq__60848 = cljs.core.seq(js_requires);
var chunk__60849 = null;
var count__60850 = (0);
var i__60851 = (0);
while(true){
if((i__60851 < count__60850)){
var js_ns = chunk__60849.cljs$core$IIndexed$_nth$arity$2(null,i__60851);
var require_str_61082 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61082);


var G__61083 = seq__60848;
var G__61084 = chunk__60849;
var G__61085 = count__60850;
var G__61086 = (i__60851 + (1));
seq__60848 = G__61083;
chunk__60849 = G__61084;
count__60850 = G__61085;
i__60851 = G__61086;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60848);
if(temp__5735__auto__){
var seq__60848__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60848__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60848__$1);
var G__61087 = cljs.core.chunk_rest(seq__60848__$1);
var G__61088 = c__4609__auto__;
var G__61089 = cljs.core.count(c__4609__auto__);
var G__61090 = (0);
seq__60848 = G__61087;
chunk__60849 = G__61088;
count__60850 = G__61089;
i__60851 = G__61090;
continue;
} else {
var js_ns = cljs.core.first(seq__60848__$1);
var require_str_61091 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61091);


var G__61092 = cljs.core.next(seq__60848__$1);
var G__61093 = null;
var G__61094 = (0);
var G__61095 = (0);
seq__60848 = G__61092;
chunk__60849 = G__61093;
count__60850 = G__61094;
i__60851 = G__61095;
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
var G__60853 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__60853) : callback.call(null,G__60853));
} else {
var G__60854 = shadow.cljs.devtools.client.env.files_url();
var G__60855 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__60856 = "POST";
var G__60857 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__60858 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__60854,G__60855,G__60856,G__60857,G__60858);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__60860){
var map__60861 = p__60860;
var map__60861__$1 = (((((!((map__60861 == null))))?(((((map__60861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60861):map__60861);
var msg = map__60861__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60861__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60861__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__60863 = info;
var map__60863__$1 = (((((!((map__60863 == null))))?(((((map__60863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60863):map__60863);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60863__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60863__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60865(s__60866){
return (new cljs.core.LazySeq(null,(function (){
var s__60866__$1 = s__60866;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60866__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__60875 = cljs.core.first(xs__6292__auto__);
var map__60875__$1 = (((((!((map__60875 == null))))?(((((map__60875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60875):map__60875);
var src = map__60875__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60875__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60875__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__60866__$1,map__60875,map__60875__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60863,map__60863__$1,sources,compiled,map__60861,map__60861__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60865_$_iter__60867(s__60868){
return (new cljs.core.LazySeq(null,((function (s__60866__$1,map__60875,map__60875__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60863,map__60863__$1,sources,compiled,map__60861,map__60861__$1,msg,info,reload_info){
return (function (){
var s__60868__$1 = s__60868;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60868__$1);
if(temp__5735__auto____$1){
var s__60868__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60868__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60868__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60870 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60869 = (0);
while(true){
if((i__60869 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60869);
cljs.core.chunk_append(b__60870,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__61101 = (i__60869 + (1));
i__60869 = G__61101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60870),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60865_$_iter__60867(cljs.core.chunk_rest(s__60868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60870),null);
}
} else {
var warning = cljs.core.first(s__60868__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60865_$_iter__60867(cljs.core.rest(s__60868__$2)));
}
} else {
return null;
}
break;
}
});})(s__60866__$1,map__60875,map__60875__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60863,map__60863__$1,sources,compiled,map__60861,map__60861__$1,msg,info,reload_info))
,null,null));
});})(s__60866__$1,map__60875,map__60875__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60863,map__60863__$1,sources,compiled,map__60861,map__60861__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60865(cljs.core.rest(s__60866__$1)));
} else {
var G__61104 = cljs.core.rest(s__60866__$1);
s__60866__$1 = G__61104;
continue;
}
} else {
var G__61105 = cljs.core.rest(s__60866__$1);
s__60866__$1 = G__61105;
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
var seq__60879_61106 = cljs.core.seq(warnings);
var chunk__60880_61107 = null;
var count__60881_61108 = (0);
var i__60882_61109 = (0);
while(true){
if((i__60882_61109 < count__60881_61108)){
var map__60891_61110 = chunk__60880_61107.cljs$core$IIndexed$_nth$arity$2(null,i__60882_61109);
var map__60891_61111__$1 = (((((!((map__60891_61110 == null))))?(((((map__60891_61110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60891_61110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60891_61110):map__60891_61110);
var w_61112 = map__60891_61111__$1;
var msg_61113__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60891_61111__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60891_61111__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60891_61111__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60891_61111__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61116)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61114),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61115),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61113__$1)].join(''));


var G__61118 = seq__60879_61106;
var G__61119 = chunk__60880_61107;
var G__61120 = count__60881_61108;
var G__61121 = (i__60882_61109 + (1));
seq__60879_61106 = G__61118;
chunk__60880_61107 = G__61119;
count__60881_61108 = G__61120;
i__60882_61109 = G__61121;
continue;
} else {
var temp__5735__auto___61122 = cljs.core.seq(seq__60879_61106);
if(temp__5735__auto___61122){
var seq__60879_61123__$1 = temp__5735__auto___61122;
if(cljs.core.chunked_seq_QMARK_(seq__60879_61123__$1)){
var c__4609__auto___61124 = cljs.core.chunk_first(seq__60879_61123__$1);
var G__61125 = cljs.core.chunk_rest(seq__60879_61123__$1);
var G__61126 = c__4609__auto___61124;
var G__61127 = cljs.core.count(c__4609__auto___61124);
var G__61128 = (0);
seq__60879_61106 = G__61125;
chunk__60880_61107 = G__61126;
count__60881_61108 = G__61127;
i__60882_61109 = G__61128;
continue;
} else {
var map__60895_61129 = cljs.core.first(seq__60879_61123__$1);
var map__60895_61130__$1 = (((((!((map__60895_61129 == null))))?(((((map__60895_61129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60895_61129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60895_61129):map__60895_61129);
var w_61131 = map__60895_61130__$1;
var msg_61132__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60895_61130__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60895_61130__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60895_61130__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60895_61130__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61135)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61133),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61134),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61132__$1)].join(''));


var G__61136 = cljs.core.next(seq__60879_61123__$1);
var G__61137 = null;
var G__61138 = (0);
var G__61139 = (0);
seq__60879_61106 = G__61136;
chunk__60880_61107 = G__61137;
count__60881_61108 = G__61138;
i__60882_61109 = G__61139;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__60897){
var map__60898 = p__60897;
var map__60898__$1 = (((((!((map__60898 == null))))?(((((map__60898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60898):map__60898);
var src = map__60898__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60898__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60898__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__60901){
var map__60902 = p__60901;
var map__60902__$1 = (((((!((map__60902 == null))))?(((((map__60902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60902):map__60902);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60902__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__60904){
var map__60905 = p__60904;
var map__60905__$1 = (((((!((map__60905 == null))))?(((((map__60905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60905):map__60905);
var rc = map__60905__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__60859_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__60859_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__60922){
var map__60925 = p__60922;
var map__60925__$1 = (((((!((map__60925 == null))))?(((((map__60925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60925):map__60925);
var msg = map__60925__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60925__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__60929 = cljs.core.seq(updates);
var chunk__60931 = null;
var count__60932 = (0);
var i__60933 = (0);
while(true){
if((i__60933 < count__60932)){
var path = chunk__60931.cljs$core$IIndexed$_nth$arity$2(null,i__60933);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60963_61140 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60966_61141 = null;
var count__60967_61142 = (0);
var i__60968_61143 = (0);
while(true){
if((i__60968_61143 < count__60967_61142)){
var node_61144 = chunk__60966_61141.cljs$core$IIndexed$_nth$arity$2(null,i__60968_61143);
var path_match_61145 = shadow.cljs.devtools.client.browser.match_paths(node_61144.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61145)){
var new_link_61146 = (function (){var G__60977 = node_61144.cloneNode(true);
G__60977.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61145),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60977;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61145], 0));

goog.dom.insertSiblingAfter(new_link_61146,node_61144);

goog.dom.removeNode(node_61144);


var G__61147 = seq__60963_61140;
var G__61148 = chunk__60966_61141;
var G__61149 = count__60967_61142;
var G__61150 = (i__60968_61143 + (1));
seq__60963_61140 = G__61147;
chunk__60966_61141 = G__61148;
count__60967_61142 = G__61149;
i__60968_61143 = G__61150;
continue;
} else {
var G__61151 = seq__60963_61140;
var G__61152 = chunk__60966_61141;
var G__61153 = count__60967_61142;
var G__61154 = (i__60968_61143 + (1));
seq__60963_61140 = G__61151;
chunk__60966_61141 = G__61152;
count__60967_61142 = G__61153;
i__60968_61143 = G__61154;
continue;
}
} else {
var temp__5735__auto___61155 = cljs.core.seq(seq__60963_61140);
if(temp__5735__auto___61155){
var seq__60963_61156__$1 = temp__5735__auto___61155;
if(cljs.core.chunked_seq_QMARK_(seq__60963_61156__$1)){
var c__4609__auto___61157 = cljs.core.chunk_first(seq__60963_61156__$1);
var G__61158 = cljs.core.chunk_rest(seq__60963_61156__$1);
var G__61159 = c__4609__auto___61157;
var G__61160 = cljs.core.count(c__4609__auto___61157);
var G__61161 = (0);
seq__60963_61140 = G__61158;
chunk__60966_61141 = G__61159;
count__60967_61142 = G__61160;
i__60968_61143 = G__61161;
continue;
} else {
var node_61162 = cljs.core.first(seq__60963_61156__$1);
var path_match_61163 = shadow.cljs.devtools.client.browser.match_paths(node_61162.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61163)){
var new_link_61164 = (function (){var G__60978 = node_61162.cloneNode(true);
G__60978.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61163),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60978;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61163], 0));

goog.dom.insertSiblingAfter(new_link_61164,node_61162);

goog.dom.removeNode(node_61162);


var G__61167 = cljs.core.next(seq__60963_61156__$1);
var G__61168 = null;
var G__61169 = (0);
var G__61170 = (0);
seq__60963_61140 = G__61167;
chunk__60966_61141 = G__61168;
count__60967_61142 = G__61169;
i__60968_61143 = G__61170;
continue;
} else {
var G__61171 = cljs.core.next(seq__60963_61156__$1);
var G__61172 = null;
var G__61173 = (0);
var G__61174 = (0);
seq__60963_61140 = G__61171;
chunk__60966_61141 = G__61172;
count__60967_61142 = G__61173;
i__60968_61143 = G__61174;
continue;
}
}
} else {
}
}
break;
}


var G__61176 = seq__60929;
var G__61177 = chunk__60931;
var G__61178 = count__60932;
var G__61179 = (i__60933 + (1));
seq__60929 = G__61176;
chunk__60931 = G__61177;
count__60932 = G__61178;
i__60933 = G__61179;
continue;
} else {
var G__61180 = seq__60929;
var G__61181 = chunk__60931;
var G__61182 = count__60932;
var G__61183 = (i__60933 + (1));
seq__60929 = G__61180;
chunk__60931 = G__61181;
count__60932 = G__61182;
i__60933 = G__61183;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60929);
if(temp__5735__auto__){
var seq__60929__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60929__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60929__$1);
var G__61184 = cljs.core.chunk_rest(seq__60929__$1);
var G__61185 = c__4609__auto__;
var G__61186 = cljs.core.count(c__4609__auto__);
var G__61187 = (0);
seq__60929 = G__61184;
chunk__60931 = G__61185;
count__60932 = G__61186;
i__60933 = G__61187;
continue;
} else {
var path = cljs.core.first(seq__60929__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60979_61188 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60982_61189 = null;
var count__60983_61190 = (0);
var i__60984_61191 = (0);
while(true){
if((i__60984_61191 < count__60983_61190)){
var node_61193 = chunk__60982_61189.cljs$core$IIndexed$_nth$arity$2(null,i__60984_61191);
var path_match_61197 = shadow.cljs.devtools.client.browser.match_paths(node_61193.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61197)){
var new_link_61198 = (function (){var G__60989 = node_61193.cloneNode(true);
G__60989.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61197),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60989;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61197], 0));

goog.dom.insertSiblingAfter(new_link_61198,node_61193);

goog.dom.removeNode(node_61193);


var G__61199 = seq__60979_61188;
var G__61200 = chunk__60982_61189;
var G__61201 = count__60983_61190;
var G__61202 = (i__60984_61191 + (1));
seq__60979_61188 = G__61199;
chunk__60982_61189 = G__61200;
count__60983_61190 = G__61201;
i__60984_61191 = G__61202;
continue;
} else {
var G__61203 = seq__60979_61188;
var G__61204 = chunk__60982_61189;
var G__61205 = count__60983_61190;
var G__61206 = (i__60984_61191 + (1));
seq__60979_61188 = G__61203;
chunk__60982_61189 = G__61204;
count__60983_61190 = G__61205;
i__60984_61191 = G__61206;
continue;
}
} else {
var temp__5735__auto___61207__$1 = cljs.core.seq(seq__60979_61188);
if(temp__5735__auto___61207__$1){
var seq__60979_61208__$1 = temp__5735__auto___61207__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60979_61208__$1)){
var c__4609__auto___61209 = cljs.core.chunk_first(seq__60979_61208__$1);
var G__61210 = cljs.core.chunk_rest(seq__60979_61208__$1);
var G__61211 = c__4609__auto___61209;
var G__61212 = cljs.core.count(c__4609__auto___61209);
var G__61213 = (0);
seq__60979_61188 = G__61210;
chunk__60982_61189 = G__61211;
count__60983_61190 = G__61212;
i__60984_61191 = G__61213;
continue;
} else {
var node_61214 = cljs.core.first(seq__60979_61208__$1);
var path_match_61215 = shadow.cljs.devtools.client.browser.match_paths(node_61214.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61215)){
var new_link_61216 = (function (){var G__60993 = node_61214.cloneNode(true);
G__60993.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61215),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60993;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61215], 0));

goog.dom.insertSiblingAfter(new_link_61216,node_61214);

goog.dom.removeNode(node_61214);


var G__61219 = cljs.core.next(seq__60979_61208__$1);
var G__61220 = null;
var G__61221 = (0);
var G__61222 = (0);
seq__60979_61188 = G__61219;
chunk__60982_61189 = G__61220;
count__60983_61190 = G__61221;
i__60984_61191 = G__61222;
continue;
} else {
var G__61223 = cljs.core.next(seq__60979_61208__$1);
var G__61224 = null;
var G__61225 = (0);
var G__61226 = (0);
seq__60979_61188 = G__61223;
chunk__60982_61189 = G__61224;
count__60983_61190 = G__61225;
i__60984_61191 = G__61226;
continue;
}
}
} else {
}
}
break;
}


var G__61227 = cljs.core.next(seq__60929__$1);
var G__61228 = null;
var G__61229 = (0);
var G__61230 = (0);
seq__60929 = G__61227;
chunk__60931 = G__61228;
count__60932 = G__61229;
i__60933 = G__61230;
continue;
} else {
var G__61231 = cljs.core.next(seq__60929__$1);
var G__61232 = null;
var G__61233 = (0);
var G__61234 = (0);
seq__60929 = G__61231;
chunk__60931 = G__61232;
count__60932 = G__61233;
i__60933 = G__61234;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__61005){
var map__61007 = p__61005;
var map__61007__$1 = (((((!((map__61007 == null))))?(((((map__61007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61007):map__61007);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61007__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61007__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__61010,done){
var map__61011 = p__61010;
var map__61011__$1 = (((((!((map__61011 == null))))?(((((map__61011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61011):map__61011);
var msg = map__61011__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61011__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61011__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61011__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61011__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__61017){
var map__61018 = p__61017;
var map__61018__$1 = (((((!((map__61018 == null))))?(((((map__61018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61018):map__61018);
var src = map__61018__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61018__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e61020){var e = e61020;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__61021,done){
var map__61022 = p__61021;
var map__61022__$1 = (((((!((map__61022 == null))))?(((((map__61022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61022):map__61022);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61022__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61022__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__61025){
var map__61026 = p__61025;
var map__61026__$1 = (((((!((map__61026 == null))))?(((((map__61026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61026):map__61026);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61026__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61026__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__61035,done){
var map__61038 = p__61035;
var map__61038__$1 = (((((!((map__61038 == null))))?(((((map__61038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61038):map__61038);
var msg = map__61038__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61038__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__61040_61250 = type;
var G__61040_61251__$1 = (((G__61040_61250 instanceof cljs.core.Keyword))?G__61040_61250.fqn:null);
switch (G__61040_61251__$1) {
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
var G__61041 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__61042 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__61043 = "POST";
var G__61044 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__61045 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__61041,G__61042,G__61043,G__61044,G__61045);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__61048 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__61047 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__61047.cljs$core$IFn$_invoke$arity$1 ? fexpr__61047.cljs$core$IFn$_invoke$arity$1(G__61048) : fexpr__61047.call(null,G__61048));
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
}catch (e61049){var e = e61049;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___61267 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___61267)){
var s_61268 = temp__5735__auto___61267;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_61268.onclose = (function (e){
return null;
}));

s_61268.close();

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
