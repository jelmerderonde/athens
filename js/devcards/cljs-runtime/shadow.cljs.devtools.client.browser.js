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
var len__4789__auto___49895 = arguments.length;
var i__4790__auto___49896 = (0);
while(true){
if((i__4790__auto___49896 < len__4789__auto___49895)){
args__4795__auto__.push((arguments[i__4790__auto___49896]));

var G__49897 = (i__4790__auto___49896 + (1));
i__4790__auto___49896 = G__49897;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49685){
var G__49686 = cljs.core.first(seq49685);
var seq49685__$1 = cljs.core.next(seq49685);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49686,seq49685__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__49703){
var map__49704 = p__49703;
var map__49704__$1 = (((((!((map__49704 == null))))?(((((map__49704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49704):map__49704);
var src = map__49704__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49704__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49704__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__49709 = cljs.core.seq(sources);
var chunk__49710 = null;
var count__49711 = (0);
var i__49712 = (0);
while(true){
if((i__49712 < count__49711)){
var map__49721 = chunk__49710.cljs$core$IIndexed$_nth$arity$2(null,i__49712);
var map__49721__$1 = (((((!((map__49721 == null))))?(((((map__49721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49721):map__49721);
var src = map__49721__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49721__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49721__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49721__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49721__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49725){var e_49900 = e49725;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49900);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49900.message)].join('')));
}

var G__49901 = seq__49709;
var G__49902 = chunk__49710;
var G__49903 = count__49711;
var G__49904 = (i__49712 + (1));
seq__49709 = G__49901;
chunk__49710 = G__49902;
count__49711 = G__49903;
i__49712 = G__49904;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49709);
if(temp__5735__auto__){
var seq__49709__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49709__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49709__$1);
var G__49905 = cljs.core.chunk_rest(seq__49709__$1);
var G__49906 = c__4609__auto__;
var G__49907 = cljs.core.count(c__4609__auto__);
var G__49908 = (0);
seq__49709 = G__49905;
chunk__49710 = G__49906;
count__49711 = G__49907;
i__49712 = G__49908;
continue;
} else {
var map__49727 = cljs.core.first(seq__49709__$1);
var map__49727__$1 = (((((!((map__49727 == null))))?(((((map__49727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49727):map__49727);
var src = map__49727__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49727__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49727__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49727__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49727__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49729){var e_49909 = e49729;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49909);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49909.message)].join('')));
}

var G__49910 = cljs.core.next(seq__49709__$1);
var G__49911 = null;
var G__49912 = (0);
var G__49913 = (0);
seq__49709 = G__49910;
chunk__49710 = G__49911;
count__49711 = G__49912;
i__49712 = G__49913;
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
var seq__49734 = cljs.core.seq(js_requires);
var chunk__49736 = null;
var count__49737 = (0);
var i__49738 = (0);
while(true){
if((i__49738 < count__49737)){
var js_ns = chunk__49736.cljs$core$IIndexed$_nth$arity$2(null,i__49738);
var require_str_49914 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49914);


var G__49916 = seq__49734;
var G__49917 = chunk__49736;
var G__49918 = count__49737;
var G__49919 = (i__49738 + (1));
seq__49734 = G__49916;
chunk__49736 = G__49917;
count__49737 = G__49918;
i__49738 = G__49919;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49734);
if(temp__5735__auto__){
var seq__49734__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49734__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49734__$1);
var G__49920 = cljs.core.chunk_rest(seq__49734__$1);
var G__49921 = c__4609__auto__;
var G__49922 = cljs.core.count(c__4609__auto__);
var G__49923 = (0);
seq__49734 = G__49920;
chunk__49736 = G__49921;
count__49737 = G__49922;
i__49738 = G__49923;
continue;
} else {
var js_ns = cljs.core.first(seq__49734__$1);
var require_str_49924 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49924);


var G__49925 = cljs.core.next(seq__49734__$1);
var G__49926 = null;
var G__49927 = (0);
var G__49928 = (0);
seq__49734 = G__49925;
chunk__49736 = G__49926;
count__49737 = G__49927;
i__49738 = G__49928;
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
var G__49747 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__49747) : callback.call(null,G__49747));
} else {
var G__49748 = shadow.cljs.devtools.client.env.files_url();
var G__49749 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__49750 = "POST";
var G__49751 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__49752 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49748,G__49749,G__49750,G__49751,G__49752);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__49755){
var map__49756 = p__49755;
var map__49756__$1 = (((((!((map__49756 == null))))?(((((map__49756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49756):map__49756);
var msg = map__49756__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49756__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49756__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__49758 = info;
var map__49758__$1 = (((((!((map__49758 == null))))?(((((map__49758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49758):map__49758);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49758__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49758__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49760(s__49761){
return (new cljs.core.LazySeq(null,(function (){
var s__49761__$1 = s__49761;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49761__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__49767 = cljs.core.first(xs__6292__auto__);
var map__49767__$1 = (((((!((map__49767 == null))))?(((((map__49767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49767):map__49767);
var src = map__49767__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49767__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49767__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__49761__$1,map__49767,map__49767__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49758,map__49758__$1,sources,compiled,map__49756,map__49756__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49760_$_iter__49762(s__49763){
return (new cljs.core.LazySeq(null,((function (s__49761__$1,map__49767,map__49767__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49758,map__49758__$1,sources,compiled,map__49756,map__49756__$1,msg,info,reload_info){
return (function (){
var s__49763__$1 = s__49763;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49763__$1);
if(temp__5735__auto____$1){
var s__49763__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49763__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49763__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49765 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49764 = (0);
while(true){
if((i__49764 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49764);
cljs.core.chunk_append(b__49765,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49930 = (i__49764 + (1));
i__49764 = G__49930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49765),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49760_$_iter__49762(cljs.core.chunk_rest(s__49763__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49765),null);
}
} else {
var warning = cljs.core.first(s__49763__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49760_$_iter__49762(cljs.core.rest(s__49763__$2)));
}
} else {
return null;
}
break;
}
});})(s__49761__$1,map__49767,map__49767__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49758,map__49758__$1,sources,compiled,map__49756,map__49756__$1,msg,info,reload_info))
,null,null));
});})(s__49761__$1,map__49767,map__49767__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49758,map__49758__$1,sources,compiled,map__49756,map__49756__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49760(cljs.core.rest(s__49761__$1)));
} else {
var G__49932 = cljs.core.rest(s__49761__$1);
s__49761__$1 = G__49932;
continue;
}
} else {
var G__49933 = cljs.core.rest(s__49761__$1);
s__49761__$1 = G__49933;
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
var seq__49772_49934 = cljs.core.seq(warnings);
var chunk__49773_49935 = null;
var count__49774_49936 = (0);
var i__49775_49937 = (0);
while(true){
if((i__49775_49937 < count__49774_49936)){
var map__49780_49938 = chunk__49773_49935.cljs$core$IIndexed$_nth$arity$2(null,i__49775_49937);
var map__49780_49939__$1 = (((((!((map__49780_49938 == null))))?(((((map__49780_49938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49780_49938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49780_49938):map__49780_49938);
var w_49940 = map__49780_49939__$1;
var msg_49941__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49780_49939__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49780_49939__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49780_49939__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49780_49939__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49944)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49942),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49943),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49941__$1)].join(''));


var G__49945 = seq__49772_49934;
var G__49946 = chunk__49773_49935;
var G__49947 = count__49774_49936;
var G__49948 = (i__49775_49937 + (1));
seq__49772_49934 = G__49945;
chunk__49773_49935 = G__49946;
count__49774_49936 = G__49947;
i__49775_49937 = G__49948;
continue;
} else {
var temp__5735__auto___49949 = cljs.core.seq(seq__49772_49934);
if(temp__5735__auto___49949){
var seq__49772_49950__$1 = temp__5735__auto___49949;
if(cljs.core.chunked_seq_QMARK_(seq__49772_49950__$1)){
var c__4609__auto___49951 = cljs.core.chunk_first(seq__49772_49950__$1);
var G__49952 = cljs.core.chunk_rest(seq__49772_49950__$1);
var G__49953 = c__4609__auto___49951;
var G__49954 = cljs.core.count(c__4609__auto___49951);
var G__49955 = (0);
seq__49772_49934 = G__49952;
chunk__49773_49935 = G__49953;
count__49774_49936 = G__49954;
i__49775_49937 = G__49955;
continue;
} else {
var map__49782_49956 = cljs.core.first(seq__49772_49950__$1);
var map__49782_49957__$1 = (((((!((map__49782_49956 == null))))?(((((map__49782_49956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49782_49956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49782_49956):map__49782_49956);
var w_49958 = map__49782_49957__$1;
var msg_49959__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49782_49957__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49782_49957__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49782_49957__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49782_49957__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49962)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49960),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49961),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49959__$1)].join(''));


var G__49964 = cljs.core.next(seq__49772_49950__$1);
var G__49965 = null;
var G__49966 = (0);
var G__49967 = (0);
seq__49772_49934 = G__49964;
chunk__49773_49935 = G__49965;
count__49774_49936 = G__49966;
i__49775_49937 = G__49967;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49785){
var map__49786 = p__49785;
var map__49786__$1 = (((((!((map__49786 == null))))?(((((map__49786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49786):map__49786);
var src = map__49786__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49786__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49786__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49790){
var map__49791 = p__49790;
var map__49791__$1 = (((((!((map__49791 == null))))?(((((map__49791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49791):map__49791);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49791__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49793){
var map__49794 = p__49793;
var map__49794__$1 = (((((!((map__49794 == null))))?(((((map__49794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49794):map__49794);
var rc = map__49794__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49794__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__49754_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49754_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__49797){
var map__49798 = p__49797;
var map__49798__$1 = (((((!((map__49798 == null))))?(((((map__49798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49798):map__49798);
var msg = map__49798__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49798__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__49800 = cljs.core.seq(updates);
var chunk__49802 = null;
var count__49803 = (0);
var i__49804 = (0);
while(true){
if((i__49804 < count__49803)){
var path = chunk__49802.cljs$core$IIndexed$_nth$arity$2(null,i__49804);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49830_49969 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49833_49970 = null;
var count__49834_49971 = (0);
var i__49835_49972 = (0);
while(true){
if((i__49835_49972 < count__49834_49971)){
var node_49973 = chunk__49833_49970.cljs$core$IIndexed$_nth$arity$2(null,i__49835_49972);
var path_match_49974 = shadow.cljs.devtools.client.browser.match_paths(node_49973.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49974)){
var new_link_49975 = (function (){var G__49841 = node_49973.cloneNode(true);
G__49841.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49974),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49841;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49974], 0));

goog.dom.insertSiblingAfter(new_link_49975,node_49973);

goog.dom.removeNode(node_49973);


var G__49976 = seq__49830_49969;
var G__49977 = chunk__49833_49970;
var G__49978 = count__49834_49971;
var G__49979 = (i__49835_49972 + (1));
seq__49830_49969 = G__49976;
chunk__49833_49970 = G__49977;
count__49834_49971 = G__49978;
i__49835_49972 = G__49979;
continue;
} else {
var G__49981 = seq__49830_49969;
var G__49982 = chunk__49833_49970;
var G__49983 = count__49834_49971;
var G__49984 = (i__49835_49972 + (1));
seq__49830_49969 = G__49981;
chunk__49833_49970 = G__49982;
count__49834_49971 = G__49983;
i__49835_49972 = G__49984;
continue;
}
} else {
var temp__5735__auto___49985 = cljs.core.seq(seq__49830_49969);
if(temp__5735__auto___49985){
var seq__49830_49986__$1 = temp__5735__auto___49985;
if(cljs.core.chunked_seq_QMARK_(seq__49830_49986__$1)){
var c__4609__auto___49987 = cljs.core.chunk_first(seq__49830_49986__$1);
var G__49988 = cljs.core.chunk_rest(seq__49830_49986__$1);
var G__49989 = c__4609__auto___49987;
var G__49990 = cljs.core.count(c__4609__auto___49987);
var G__49991 = (0);
seq__49830_49969 = G__49988;
chunk__49833_49970 = G__49989;
count__49834_49971 = G__49990;
i__49835_49972 = G__49991;
continue;
} else {
var node_49992 = cljs.core.first(seq__49830_49986__$1);
var path_match_49993 = shadow.cljs.devtools.client.browser.match_paths(node_49992.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49993)){
var new_link_49994 = (function (){var G__49843 = node_49992.cloneNode(true);
G__49843.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49993),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49843;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49993], 0));

goog.dom.insertSiblingAfter(new_link_49994,node_49992);

goog.dom.removeNode(node_49992);


var G__49995 = cljs.core.next(seq__49830_49986__$1);
var G__49996 = null;
var G__49997 = (0);
var G__49998 = (0);
seq__49830_49969 = G__49995;
chunk__49833_49970 = G__49996;
count__49834_49971 = G__49997;
i__49835_49972 = G__49998;
continue;
} else {
var G__49999 = cljs.core.next(seq__49830_49986__$1);
var G__50000 = null;
var G__50001 = (0);
var G__50002 = (0);
seq__49830_49969 = G__49999;
chunk__49833_49970 = G__50000;
count__49834_49971 = G__50001;
i__49835_49972 = G__50002;
continue;
}
}
} else {
}
}
break;
}


var G__50003 = seq__49800;
var G__50004 = chunk__49802;
var G__50005 = count__49803;
var G__50006 = (i__49804 + (1));
seq__49800 = G__50003;
chunk__49802 = G__50004;
count__49803 = G__50005;
i__49804 = G__50006;
continue;
} else {
var G__50007 = seq__49800;
var G__50008 = chunk__49802;
var G__50009 = count__49803;
var G__50010 = (i__49804 + (1));
seq__49800 = G__50007;
chunk__49802 = G__50008;
count__49803 = G__50009;
i__49804 = G__50010;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49800);
if(temp__5735__auto__){
var seq__49800__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49800__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49800__$1);
var G__50011 = cljs.core.chunk_rest(seq__49800__$1);
var G__50012 = c__4609__auto__;
var G__50013 = cljs.core.count(c__4609__auto__);
var G__50014 = (0);
seq__49800 = G__50011;
chunk__49802 = G__50012;
count__49803 = G__50013;
i__49804 = G__50014;
continue;
} else {
var path = cljs.core.first(seq__49800__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49844_50015 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49847_50016 = null;
var count__49848_50017 = (0);
var i__49849_50018 = (0);
while(true){
if((i__49849_50018 < count__49848_50017)){
var node_50019 = chunk__49847_50016.cljs$core$IIndexed$_nth$arity$2(null,i__49849_50018);
var path_match_50020 = shadow.cljs.devtools.client.browser.match_paths(node_50019.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50020)){
var new_link_50021 = (function (){var G__49855 = node_50019.cloneNode(true);
G__49855.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50020),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49855;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50020], 0));

goog.dom.insertSiblingAfter(new_link_50021,node_50019);

goog.dom.removeNode(node_50019);


var G__50023 = seq__49844_50015;
var G__50024 = chunk__49847_50016;
var G__50025 = count__49848_50017;
var G__50026 = (i__49849_50018 + (1));
seq__49844_50015 = G__50023;
chunk__49847_50016 = G__50024;
count__49848_50017 = G__50025;
i__49849_50018 = G__50026;
continue;
} else {
var G__50027 = seq__49844_50015;
var G__50028 = chunk__49847_50016;
var G__50029 = count__49848_50017;
var G__50030 = (i__49849_50018 + (1));
seq__49844_50015 = G__50027;
chunk__49847_50016 = G__50028;
count__49848_50017 = G__50029;
i__49849_50018 = G__50030;
continue;
}
} else {
var temp__5735__auto___50031__$1 = cljs.core.seq(seq__49844_50015);
if(temp__5735__auto___50031__$1){
var seq__49844_50032__$1 = temp__5735__auto___50031__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49844_50032__$1)){
var c__4609__auto___50033 = cljs.core.chunk_first(seq__49844_50032__$1);
var G__50034 = cljs.core.chunk_rest(seq__49844_50032__$1);
var G__50035 = c__4609__auto___50033;
var G__50036 = cljs.core.count(c__4609__auto___50033);
var G__50037 = (0);
seq__49844_50015 = G__50034;
chunk__49847_50016 = G__50035;
count__49848_50017 = G__50036;
i__49849_50018 = G__50037;
continue;
} else {
var node_50038 = cljs.core.first(seq__49844_50032__$1);
var path_match_50039 = shadow.cljs.devtools.client.browser.match_paths(node_50038.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50039)){
var new_link_50040 = (function (){var G__49857 = node_50038.cloneNode(true);
G__49857.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50039),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49857;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50039], 0));

goog.dom.insertSiblingAfter(new_link_50040,node_50038);

goog.dom.removeNode(node_50038);


var G__50041 = cljs.core.next(seq__49844_50032__$1);
var G__50042 = null;
var G__50043 = (0);
var G__50044 = (0);
seq__49844_50015 = G__50041;
chunk__49847_50016 = G__50042;
count__49848_50017 = G__50043;
i__49849_50018 = G__50044;
continue;
} else {
var G__50045 = cljs.core.next(seq__49844_50032__$1);
var G__50046 = null;
var G__50047 = (0);
var G__50048 = (0);
seq__49844_50015 = G__50045;
chunk__49847_50016 = G__50046;
count__49848_50017 = G__50047;
i__49849_50018 = G__50048;
continue;
}
}
} else {
}
}
break;
}


var G__50052 = cljs.core.next(seq__49800__$1);
var G__50053 = null;
var G__50054 = (0);
var G__50055 = (0);
seq__49800 = G__50052;
chunk__49802 = G__50053;
count__49803 = G__50054;
i__49804 = G__50055;
continue;
} else {
var G__50056 = cljs.core.next(seq__49800__$1);
var G__50057 = null;
var G__50058 = (0);
var G__50059 = (0);
seq__49800 = G__50056;
chunk__49802 = G__50057;
count__49803 = G__50058;
i__49804 = G__50059;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__49860){
var map__49861 = p__49860;
var map__49861__$1 = (((((!((map__49861 == null))))?(((((map__49861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49861):map__49861);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49861__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__49863,done){
var map__49865 = p__49863;
var map__49865__$1 = (((((!((map__49865 == null))))?(((((map__49865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49865):map__49865);
var msg = map__49865__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49865__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49865__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49865__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49865__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49867){
var map__49868 = p__49867;
var map__49868__$1 = (((((!((map__49868 == null))))?(((((map__49868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49868):map__49868);
var src = map__49868__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49868__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e49870){var e = e49870;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__49872,done){
var map__49873 = p__49872;
var map__49873__$1 = (((((!((map__49873 == null))))?(((((map__49873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49873):map__49873);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49873__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49873__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__49875){
var map__49876 = p__49875;
var map__49876__$1 = (((((!((map__49876 == null))))?(((((map__49876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49876):map__49876);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49876__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49876__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__49880,done){
var map__49881 = p__49880;
var map__49881__$1 = (((((!((map__49881 == null))))?(((((map__49881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49881):map__49881);
var msg = map__49881__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49881__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__49883_50062 = type;
var G__49883_50063__$1 = (((G__49883_50062 instanceof cljs.core.Keyword))?G__49883_50062.fqn:null);
switch (G__49883_50063__$1) {
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
var G__49885 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__49886 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__49887 = "POST";
var G__49888 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__49889 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49885,G__49886,G__49887,G__49888,G__49889);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__49891 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__49890 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__49890.cljs$core$IFn$_invoke$arity$1 ? fexpr__49890.cljs$core$IFn$_invoke$arity$1(G__49891) : fexpr__49890.call(null,G__49891));
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
}catch (e49893){var e = e49893;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50068 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50068)){
var s_50069 = temp__5735__auto___50068;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_50069.onclose = (function (e){
return null;
}));

s_50069.close();

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
