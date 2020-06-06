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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__42650){
var map__42651 = p__42650;
var map__42651__$1 = (((((!((map__42651 == null))))?(((((map__42651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42651):map__42651);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42651__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42651__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42651__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42651__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__42653_42680 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__42654_42681 = null;
var count__42655_42682 = (0);
var i__42656_42683 = (0);
while(true){
if((i__42656_42683 < count__42655_42682)){
var vec__42667_42684 = chunk__42654_42681.cljs$core$IIndexed$_nth$arity$2(null,i__42656_42683);
var k_42685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42667_42684,(0),null);
var cb_42686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42667_42684,(1),null);
try{var G__42671_42687 = cljs.core.deref(re_frame.trace.traces);
(cb_42686.cljs$core$IFn$_invoke$arity$1 ? cb_42686.cljs$core$IFn$_invoke$arity$1(G__42671_42687) : cb_42686.call(null,G__42671_42687));
}catch (e42670){var e_42688 = e42670;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_42685,"while storing",cljs.core.deref(re_frame.trace.traces),e_42688], 0));
}

var G__42689 = seq__42653_42680;
var G__42690 = chunk__42654_42681;
var G__42691 = count__42655_42682;
var G__42692 = (i__42656_42683 + (1));
seq__42653_42680 = G__42689;
chunk__42654_42681 = G__42690;
count__42655_42682 = G__42691;
i__42656_42683 = G__42692;
continue;
} else {
var temp__5735__auto___42693 = cljs.core.seq(seq__42653_42680);
if(temp__5735__auto___42693){
var seq__42653_42694__$1 = temp__5735__auto___42693;
if(cljs.core.chunked_seq_QMARK_(seq__42653_42694__$1)){
var c__4609__auto___42695 = cljs.core.chunk_first(seq__42653_42694__$1);
var G__42696 = cljs.core.chunk_rest(seq__42653_42694__$1);
var G__42697 = c__4609__auto___42695;
var G__42698 = cljs.core.count(c__4609__auto___42695);
var G__42699 = (0);
seq__42653_42680 = G__42696;
chunk__42654_42681 = G__42697;
count__42655_42682 = G__42698;
i__42656_42683 = G__42699;
continue;
} else {
var vec__42672_42700 = cljs.core.first(seq__42653_42694__$1);
var k_42701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42672_42700,(0),null);
var cb_42702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42672_42700,(1),null);
try{var G__42676_42703 = cljs.core.deref(re_frame.trace.traces);
(cb_42702.cljs$core$IFn$_invoke$arity$1 ? cb_42702.cljs$core$IFn$_invoke$arity$1(G__42676_42703) : cb_42702.call(null,G__42676_42703));
}catch (e42675){var e_42704 = e42675;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_42701,"while storing",cljs.core.deref(re_frame.trace.traces),e_42704], 0));
}

var G__42705 = cljs.core.next(seq__42653_42694__$1);
var G__42706 = null;
var G__42707 = (0);
var G__42708 = (0);
seq__42653_42680 = G__42705;
chunk__42654_42681 = G__42706;
count__42655_42682 = G__42707;
i__42656_42683 = G__42708;
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
