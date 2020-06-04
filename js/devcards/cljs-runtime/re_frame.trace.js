goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__55887){
var map__55888 = p__55887;
var map__55888__$1 = (((((!((map__55888 == null))))?(((((map__55888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55888):map__55888);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55888__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55888__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55888__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55888__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__55890_55939 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__55891_55940 = null;
var count__55892_55941 = (0);
var i__55893_55942 = (0);
while(true){
if((i__55893_55942 < count__55892_55941)){
var vec__55914_55943 = chunk__55891_55940.cljs$core$IIndexed$_nth$arity$2(null,i__55893_55942);
var k_55944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55914_55943,(0),null);
var cb_55945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55914_55943,(1),null);
try{var G__55918_55947 = cljs.core.deref(re_frame.trace.traces);
(cb_55945.cljs$core$IFn$_invoke$arity$1 ? cb_55945.cljs$core$IFn$_invoke$arity$1(G__55918_55947) : cb_55945.call(null,G__55918_55947));
}catch (e55917){var e_55948 = e55917;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_55944,"while storing",cljs.core.deref(re_frame.trace.traces),e_55948], 0));
}

var G__55949 = seq__55890_55939;
var G__55950 = chunk__55891_55940;
var G__55951 = count__55892_55941;
var G__55952 = (i__55893_55942 + (1));
seq__55890_55939 = G__55949;
chunk__55891_55940 = G__55950;
count__55892_55941 = G__55951;
i__55893_55942 = G__55952;
continue;
} else {
var temp__5735__auto___55957 = cljs.core.seq(seq__55890_55939);
if(temp__5735__auto___55957){
var seq__55890_55958__$1 = temp__5735__auto___55957;
if(cljs.core.chunked_seq_QMARK_(seq__55890_55958__$1)){
var c__4609__auto___55962 = cljs.core.chunk_first(seq__55890_55958__$1);
var G__55964 = cljs.core.chunk_rest(seq__55890_55958__$1);
var G__55965 = c__4609__auto___55962;
var G__55966 = cljs.core.count(c__4609__auto___55962);
var G__55967 = (0);
seq__55890_55939 = G__55964;
chunk__55891_55940 = G__55965;
count__55892_55941 = G__55966;
i__55893_55942 = G__55967;
continue;
} else {
var vec__55919_55970 = cljs.core.first(seq__55890_55958__$1);
var k_55971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55919_55970,(0),null);
var cb_55972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55919_55970,(1),null);
try{var G__55923_55974 = cljs.core.deref(re_frame.trace.traces);
(cb_55972.cljs$core$IFn$_invoke$arity$1 ? cb_55972.cljs$core$IFn$_invoke$arity$1(G__55923_55974) : cb_55972.call(null,G__55923_55974));
}catch (e55922){var e_55975 = e55922;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_55971,"while storing",cljs.core.deref(re_frame.trace.traces),e_55975], 0));
}

var G__55979 = cljs.core.next(seq__55890_55958__$1);
var G__55980 = null;
var G__55981 = (0);
var G__55982 = (0);
seq__55890_55939 = G__55979;
chunk__55891_55940 = G__55980;
count__55892_55941 = G__55981;
i__55893_55942 = G__55982;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
