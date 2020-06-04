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
var len__4789__auto___50413 = arguments.length;
var i__4790__auto___50414 = (0);
while(true){
if((i__4790__auto___50414 < len__4789__auto___50413)){
args__4795__auto__.push((arguments[i__4790__auto___50414]));

var G__50415 = (i__4790__auto___50414 + (1));
i__4790__auto___50414 = G__50415;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50151){
var G__50152 = cljs.core.first(seq50151);
var seq50151__$1 = cljs.core.next(seq50151);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50152,seq50151__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__50173){
var map__50174 = p__50173;
var map__50174__$1 = (((((!((map__50174 == null))))?(((((map__50174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50174):map__50174);
var src = map__50174__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50174__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50174__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__50186 = cljs.core.seq(sources);
var chunk__50187 = null;
var count__50188 = (0);
var i__50189 = (0);
while(true){
if((i__50189 < count__50188)){
var map__50197 = chunk__50187.cljs$core$IIndexed$_nth$arity$2(null,i__50189);
var map__50197__$1 = (((((!((map__50197 == null))))?(((((map__50197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50197):map__50197);
var src = map__50197__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50197__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50197__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50197__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50197__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50199){var e_50430 = e50199;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50430);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50430.message)].join('')));
}

var G__50437 = seq__50186;
var G__50438 = chunk__50187;
var G__50439 = count__50188;
var G__50440 = (i__50189 + (1));
seq__50186 = G__50437;
chunk__50187 = G__50438;
count__50188 = G__50439;
i__50189 = G__50440;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50186);
if(temp__5735__auto__){
var seq__50186__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50186__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50186__$1);
var G__50441 = cljs.core.chunk_rest(seq__50186__$1);
var G__50442 = c__4609__auto__;
var G__50443 = cljs.core.count(c__4609__auto__);
var G__50444 = (0);
seq__50186 = G__50441;
chunk__50187 = G__50442;
count__50188 = G__50443;
i__50189 = G__50444;
continue;
} else {
var map__50210 = cljs.core.first(seq__50186__$1);
var map__50210__$1 = (((((!((map__50210 == null))))?(((((map__50210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50210):map__50210);
var src = map__50210__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50210__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50210__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50210__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50210__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e50215){var e_50445 = e50215;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50445);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50445.message)].join('')));
}

var G__50446 = cljs.core.next(seq__50186__$1);
var G__50447 = null;
var G__50448 = (0);
var G__50449 = (0);
seq__50186 = G__50446;
chunk__50187 = G__50447;
count__50188 = G__50448;
i__50189 = G__50449;
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
var seq__50216 = cljs.core.seq(js_requires);
var chunk__50217 = null;
var count__50218 = (0);
var i__50219 = (0);
while(true){
if((i__50219 < count__50218)){
var js_ns = chunk__50217.cljs$core$IIndexed$_nth$arity$2(null,i__50219);
var require_str_50458 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50458);


var G__50459 = seq__50216;
var G__50460 = chunk__50217;
var G__50461 = count__50218;
var G__50462 = (i__50219 + (1));
seq__50216 = G__50459;
chunk__50217 = G__50460;
count__50218 = G__50461;
i__50219 = G__50462;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50216);
if(temp__5735__auto__){
var seq__50216__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50216__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50216__$1);
var G__50473 = cljs.core.chunk_rest(seq__50216__$1);
var G__50474 = c__4609__auto__;
var G__50475 = cljs.core.count(c__4609__auto__);
var G__50476 = (0);
seq__50216 = G__50473;
chunk__50217 = G__50474;
count__50218 = G__50475;
i__50219 = G__50476;
continue;
} else {
var js_ns = cljs.core.first(seq__50216__$1);
var require_str_50483 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50483);


var G__50484 = cljs.core.next(seq__50216__$1);
var G__50485 = null;
var G__50486 = (0);
var G__50487 = (0);
seq__50216 = G__50484;
chunk__50217 = G__50485;
count__50218 = G__50486;
i__50219 = G__50487;
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
var G__50224 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__50224) : callback.call(null,G__50224));
} else {
var G__50225 = shadow.cljs.devtools.client.env.files_url();
var G__50226 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__50227 = "POST";
var G__50228 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__50229 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50225,G__50226,G__50227,G__50228,G__50229);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__50239){
var map__50240 = p__50239;
var map__50240__$1 = (((((!((map__50240 == null))))?(((((map__50240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50240):map__50240);
var msg = map__50240__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50240__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50240__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__50243 = info;
var map__50243__$1 = (((((!((map__50243 == null))))?(((((map__50243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50243):map__50243);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50243__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50243__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50246(s__50247){
return (new cljs.core.LazySeq(null,(function (){
var s__50247__$1 = s__50247;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50247__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__50252 = cljs.core.first(xs__6292__auto__);
var map__50252__$1 = (((((!((map__50252 == null))))?(((((map__50252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50252):map__50252);
var src = map__50252__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50252__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50252__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__50247__$1,map__50252,map__50252__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50243,map__50243__$1,sources,compiled,map__50240,map__50240__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50246_$_iter__50248(s__50249){
return (new cljs.core.LazySeq(null,((function (s__50247__$1,map__50252,map__50252__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50243,map__50243__$1,sources,compiled,map__50240,map__50240__$1,msg,info,reload_info){
return (function (){
var s__50249__$1 = s__50249;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50249__$1);
if(temp__5735__auto____$1){
var s__50249__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50249__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50249__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50251 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50250 = (0);
while(true){
if((i__50250 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50250);
cljs.core.chunk_append(b__50251,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50495 = (i__50250 + (1));
i__50250 = G__50495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50251),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50246_$_iter__50248(cljs.core.chunk_rest(s__50249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50251),null);
}
} else {
var warning = cljs.core.first(s__50249__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50246_$_iter__50248(cljs.core.rest(s__50249__$2)));
}
} else {
return null;
}
break;
}
});})(s__50247__$1,map__50252,map__50252__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50243,map__50243__$1,sources,compiled,map__50240,map__50240__$1,msg,info,reload_info))
,null,null));
});})(s__50247__$1,map__50252,map__50252__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__50243,map__50243__$1,sources,compiled,map__50240,map__50240__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50246(cljs.core.rest(s__50247__$1)));
} else {
var G__50497 = cljs.core.rest(s__50247__$1);
s__50247__$1 = G__50497;
continue;
}
} else {
var G__50498 = cljs.core.rest(s__50247__$1);
s__50247__$1 = G__50498;
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
var seq__50254_50499 = cljs.core.seq(warnings);
var chunk__50255_50500 = null;
var count__50256_50501 = (0);
var i__50257_50502 = (0);
while(true){
if((i__50257_50502 < count__50256_50501)){
var map__50269_50503 = chunk__50255_50500.cljs$core$IIndexed$_nth$arity$2(null,i__50257_50502);
var map__50269_50504__$1 = (((((!((map__50269_50503 == null))))?(((((map__50269_50503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50269_50503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50269_50503):map__50269_50503);
var w_50505 = map__50269_50504__$1;
var msg_50506__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50269_50504__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50269_50504__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50269_50504__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50269_50504__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50509)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50507),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50508),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50506__$1)].join(''));


var G__50510 = seq__50254_50499;
var G__50511 = chunk__50255_50500;
var G__50512 = count__50256_50501;
var G__50513 = (i__50257_50502 + (1));
seq__50254_50499 = G__50510;
chunk__50255_50500 = G__50511;
count__50256_50501 = G__50512;
i__50257_50502 = G__50513;
continue;
} else {
var temp__5735__auto___50514 = cljs.core.seq(seq__50254_50499);
if(temp__5735__auto___50514){
var seq__50254_50515__$1 = temp__5735__auto___50514;
if(cljs.core.chunked_seq_QMARK_(seq__50254_50515__$1)){
var c__4609__auto___50516 = cljs.core.chunk_first(seq__50254_50515__$1);
var G__50517 = cljs.core.chunk_rest(seq__50254_50515__$1);
var G__50518 = c__4609__auto___50516;
var G__50519 = cljs.core.count(c__4609__auto___50516);
var G__50520 = (0);
seq__50254_50499 = G__50517;
chunk__50255_50500 = G__50518;
count__50256_50501 = G__50519;
i__50257_50502 = G__50520;
continue;
} else {
var map__50271_50521 = cljs.core.first(seq__50254_50515__$1);
var map__50271_50522__$1 = (((((!((map__50271_50521 == null))))?(((((map__50271_50521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50271_50521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50271_50521):map__50271_50521);
var w_50523 = map__50271_50522__$1;
var msg_50524__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50271_50522__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50271_50522__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50271_50522__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50271_50522__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50527)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50525),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50526),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50524__$1)].join(''));


var G__50528 = cljs.core.next(seq__50254_50515__$1);
var G__50529 = null;
var G__50530 = (0);
var G__50531 = (0);
seq__50254_50499 = G__50528;
chunk__50255_50500 = G__50529;
count__50256_50501 = G__50530;
i__50257_50502 = G__50531;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50273){
var map__50274 = p__50273;
var map__50274__$1 = (((((!((map__50274 == null))))?(((((map__50274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50274):map__50274);
var src = map__50274__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50274__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50274__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50276){
var map__50277 = p__50276;
var map__50277__$1 = (((((!((map__50277 == null))))?(((((map__50277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50277):map__50277);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50277__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50279){
var map__50280 = p__50279;
var map__50280__$1 = (((((!((map__50280 == null))))?(((((map__50280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50280):map__50280);
var rc = map__50280__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50280__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__50236_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50236_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__50282){
var map__50284 = p__50282;
var map__50284__$1 = (((((!((map__50284 == null))))?(((((map__50284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50284):map__50284);
var msg = map__50284__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50284__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50286 = cljs.core.seq(updates);
var chunk__50288 = null;
var count__50289 = (0);
var i__50290 = (0);
while(true){
if((i__50290 < count__50289)){
var path = chunk__50288.cljs$core$IIndexed$_nth$arity$2(null,i__50290);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50334_50532 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50337_50533 = null;
var count__50338_50534 = (0);
var i__50339_50535 = (0);
while(true){
if((i__50339_50535 < count__50338_50534)){
var node_50537 = chunk__50337_50533.cljs$core$IIndexed$_nth$arity$2(null,i__50339_50535);
var path_match_50538 = shadow.cljs.devtools.client.browser.match_paths(node_50537.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50538)){
var new_link_50539 = (function (){var G__50352 = node_50537.cloneNode(true);
G__50352.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50538),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50352;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50538], 0));

goog.dom.insertSiblingAfter(new_link_50539,node_50537);

goog.dom.removeNode(node_50537);


var G__50540 = seq__50334_50532;
var G__50541 = chunk__50337_50533;
var G__50542 = count__50338_50534;
var G__50543 = (i__50339_50535 + (1));
seq__50334_50532 = G__50540;
chunk__50337_50533 = G__50541;
count__50338_50534 = G__50542;
i__50339_50535 = G__50543;
continue;
} else {
var G__50547 = seq__50334_50532;
var G__50548 = chunk__50337_50533;
var G__50549 = count__50338_50534;
var G__50550 = (i__50339_50535 + (1));
seq__50334_50532 = G__50547;
chunk__50337_50533 = G__50548;
count__50338_50534 = G__50549;
i__50339_50535 = G__50550;
continue;
}
} else {
var temp__5735__auto___50556 = cljs.core.seq(seq__50334_50532);
if(temp__5735__auto___50556){
var seq__50334_50557__$1 = temp__5735__auto___50556;
if(cljs.core.chunked_seq_QMARK_(seq__50334_50557__$1)){
var c__4609__auto___50558 = cljs.core.chunk_first(seq__50334_50557__$1);
var G__50559 = cljs.core.chunk_rest(seq__50334_50557__$1);
var G__50560 = c__4609__auto___50558;
var G__50561 = cljs.core.count(c__4609__auto___50558);
var G__50562 = (0);
seq__50334_50532 = G__50559;
chunk__50337_50533 = G__50560;
count__50338_50534 = G__50561;
i__50339_50535 = G__50562;
continue;
} else {
var node_50566 = cljs.core.first(seq__50334_50557__$1);
var path_match_50567 = shadow.cljs.devtools.client.browser.match_paths(node_50566.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50567)){
var new_link_50568 = (function (){var G__50353 = node_50566.cloneNode(true);
G__50353.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50567),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50353;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50567], 0));

goog.dom.insertSiblingAfter(new_link_50568,node_50566);

goog.dom.removeNode(node_50566);


var G__50569 = cljs.core.next(seq__50334_50557__$1);
var G__50570 = null;
var G__50571 = (0);
var G__50572 = (0);
seq__50334_50532 = G__50569;
chunk__50337_50533 = G__50570;
count__50338_50534 = G__50571;
i__50339_50535 = G__50572;
continue;
} else {
var G__50573 = cljs.core.next(seq__50334_50557__$1);
var G__50574 = null;
var G__50575 = (0);
var G__50576 = (0);
seq__50334_50532 = G__50573;
chunk__50337_50533 = G__50574;
count__50338_50534 = G__50575;
i__50339_50535 = G__50576;
continue;
}
}
} else {
}
}
break;
}


var G__50577 = seq__50286;
var G__50578 = chunk__50288;
var G__50579 = count__50289;
var G__50580 = (i__50290 + (1));
seq__50286 = G__50577;
chunk__50288 = G__50578;
count__50289 = G__50579;
i__50290 = G__50580;
continue;
} else {
var G__50581 = seq__50286;
var G__50582 = chunk__50288;
var G__50583 = count__50289;
var G__50584 = (i__50290 + (1));
seq__50286 = G__50581;
chunk__50288 = G__50582;
count__50289 = G__50583;
i__50290 = G__50584;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50286);
if(temp__5735__auto__){
var seq__50286__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50286__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50286__$1);
var G__50585 = cljs.core.chunk_rest(seq__50286__$1);
var G__50586 = c__4609__auto__;
var G__50587 = cljs.core.count(c__4609__auto__);
var G__50588 = (0);
seq__50286 = G__50585;
chunk__50288 = G__50586;
count__50289 = G__50587;
i__50290 = G__50588;
continue;
} else {
var path = cljs.core.first(seq__50286__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50354_50589 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50357_50590 = null;
var count__50358_50591 = (0);
var i__50359_50592 = (0);
while(true){
if((i__50359_50592 < count__50358_50591)){
var node_50593 = chunk__50357_50590.cljs$core$IIndexed$_nth$arity$2(null,i__50359_50592);
var path_match_50594 = shadow.cljs.devtools.client.browser.match_paths(node_50593.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50594)){
var new_link_50595 = (function (){var G__50364 = node_50593.cloneNode(true);
G__50364.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50594),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50364;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50594], 0));

goog.dom.insertSiblingAfter(new_link_50595,node_50593);

goog.dom.removeNode(node_50593);


var G__50596 = seq__50354_50589;
var G__50597 = chunk__50357_50590;
var G__50598 = count__50358_50591;
var G__50599 = (i__50359_50592 + (1));
seq__50354_50589 = G__50596;
chunk__50357_50590 = G__50597;
count__50358_50591 = G__50598;
i__50359_50592 = G__50599;
continue;
} else {
var G__50600 = seq__50354_50589;
var G__50601 = chunk__50357_50590;
var G__50602 = count__50358_50591;
var G__50603 = (i__50359_50592 + (1));
seq__50354_50589 = G__50600;
chunk__50357_50590 = G__50601;
count__50358_50591 = G__50602;
i__50359_50592 = G__50603;
continue;
}
} else {
var temp__5735__auto___50604__$1 = cljs.core.seq(seq__50354_50589);
if(temp__5735__auto___50604__$1){
var seq__50354_50605__$1 = temp__5735__auto___50604__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50354_50605__$1)){
var c__4609__auto___50606 = cljs.core.chunk_first(seq__50354_50605__$1);
var G__50607 = cljs.core.chunk_rest(seq__50354_50605__$1);
var G__50608 = c__4609__auto___50606;
var G__50609 = cljs.core.count(c__4609__auto___50606);
var G__50610 = (0);
seq__50354_50589 = G__50607;
chunk__50357_50590 = G__50608;
count__50358_50591 = G__50609;
i__50359_50592 = G__50610;
continue;
} else {
var node_50611 = cljs.core.first(seq__50354_50605__$1);
var path_match_50612 = shadow.cljs.devtools.client.browser.match_paths(node_50611.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50612)){
var new_link_50613 = (function (){var G__50369 = node_50611.cloneNode(true);
G__50369.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50612),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50369;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50612], 0));

goog.dom.insertSiblingAfter(new_link_50613,node_50611);

goog.dom.removeNode(node_50611);


var G__50614 = cljs.core.next(seq__50354_50605__$1);
var G__50615 = null;
var G__50616 = (0);
var G__50617 = (0);
seq__50354_50589 = G__50614;
chunk__50357_50590 = G__50615;
count__50358_50591 = G__50616;
i__50359_50592 = G__50617;
continue;
} else {
var G__50618 = cljs.core.next(seq__50354_50605__$1);
var G__50619 = null;
var G__50620 = (0);
var G__50621 = (0);
seq__50354_50589 = G__50618;
chunk__50357_50590 = G__50619;
count__50358_50591 = G__50620;
i__50359_50592 = G__50621;
continue;
}
}
} else {
}
}
break;
}


var G__50625 = cljs.core.next(seq__50286__$1);
var G__50626 = null;
var G__50627 = (0);
var G__50628 = (0);
seq__50286 = G__50625;
chunk__50288 = G__50626;
count__50289 = G__50627;
i__50290 = G__50628;
continue;
} else {
var G__50629 = cljs.core.next(seq__50286__$1);
var G__50630 = null;
var G__50631 = (0);
var G__50632 = (0);
seq__50286 = G__50629;
chunk__50288 = G__50630;
count__50289 = G__50631;
i__50290 = G__50632;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__50377){
var map__50378 = p__50377;
var map__50378__$1 = (((((!((map__50378 == null))))?(((((map__50378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50378):map__50378);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50378__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50378__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__50380,done){
var map__50381 = p__50380;
var map__50381__$1 = (((((!((map__50381 == null))))?(((((map__50381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50381):map__50381);
var msg = map__50381__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50381__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50381__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50381__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50381__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50383){
var map__50384 = p__50383;
var map__50384__$1 = (((((!((map__50384 == null))))?(((((map__50384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50384):map__50384);
var src = map__50384__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50384__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e50386){var e = e50386;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__50387,done){
var map__50388 = p__50387;
var map__50388__$1 = (((((!((map__50388 == null))))?(((((map__50388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50388):map__50388);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50388__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50388__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__50390){
var map__50391 = p__50390;
var map__50391__$1 = (((((!((map__50391 == null))))?(((((map__50391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50391):map__50391);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50391__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50391__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__50393,done){
var map__50394 = p__50393;
var map__50394__$1 = (((((!((map__50394 == null))))?(((((map__50394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50394):map__50394);
var msg = map__50394__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50394__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__50396_50645 = type;
var G__50396_50646__$1 = (((G__50396_50645 instanceof cljs.core.Keyword))?G__50396_50645.fqn:null);
switch (G__50396_50646__$1) {
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
var G__50397 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__50398 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__50399 = "POST";
var G__50400 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__50401 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50397,G__50398,G__50399,G__50400,G__50401);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__50404 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__50403 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__50403.cljs$core$IFn$_invoke$arity$1 ? fexpr__50403.cljs$core$IFn$_invoke$arity$1(G__50404) : fexpr__50403.call(null,G__50404));
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
}catch (e50408){var e = e50408;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50653 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50653)){
var s_50654 = temp__5735__auto___50653;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_50654.onclose = (function (e){
return null;
}));

s_50654.close();

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
