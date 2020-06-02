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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__52601){
var map__52602 = p__52601;
var map__52602__$1 = (((((!((map__52602 == null))))?(((((map__52602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52602):map__52602);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52602__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52602__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52602__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52602__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__52604_52714 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__52605_52715 = null;
var count__52606_52716 = (0);
var i__52607_52717 = (0);
while(true){
if((i__52607_52717 < count__52606_52716)){
var vec__52618_52718 = chunk__52605_52715.cljs$core$IIndexed$_nth$arity$2(null,i__52607_52717);
var k_52719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52618_52718,(0),null);
var cb_52720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52618_52718,(1),null);
try{var G__52622_52721 = cljs.core.deref(re_frame.trace.traces);
(cb_52720.cljs$core$IFn$_invoke$arity$1 ? cb_52720.cljs$core$IFn$_invoke$arity$1(G__52622_52721) : cb_52720.call(null,G__52622_52721));
}catch (e52621){var e_52722 = e52621;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52719,"while storing",cljs.core.deref(re_frame.trace.traces),e_52722], 0));
}

var G__52723 = seq__52604_52714;
var G__52724 = chunk__52605_52715;
var G__52725 = count__52606_52716;
var G__52726 = (i__52607_52717 + (1));
seq__52604_52714 = G__52723;
chunk__52605_52715 = G__52724;
count__52606_52716 = G__52725;
i__52607_52717 = G__52726;
continue;
} else {
var temp__5735__auto___52727 = cljs.core.seq(seq__52604_52714);
if(temp__5735__auto___52727){
var seq__52604_52728__$1 = temp__5735__auto___52727;
if(cljs.core.chunked_seq_QMARK_(seq__52604_52728__$1)){
var c__4609__auto___52729 = cljs.core.chunk_first(seq__52604_52728__$1);
var G__52730 = cljs.core.chunk_rest(seq__52604_52728__$1);
var G__52731 = c__4609__auto___52729;
var G__52732 = cljs.core.count(c__4609__auto___52729);
var G__52733 = (0);
seq__52604_52714 = G__52730;
chunk__52605_52715 = G__52731;
count__52606_52716 = G__52732;
i__52607_52717 = G__52733;
continue;
} else {
var vec__52623_52734 = cljs.core.first(seq__52604_52728__$1);
var k_52735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52623_52734,(0),null);
var cb_52736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52623_52734,(1),null);
try{var G__52627_52737 = cljs.core.deref(re_frame.trace.traces);
(cb_52736.cljs$core$IFn$_invoke$arity$1 ? cb_52736.cljs$core$IFn$_invoke$arity$1(G__52627_52737) : cb_52736.call(null,G__52627_52737));
}catch (e52626){var e_52738 = e52626;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52735,"while storing",cljs.core.deref(re_frame.trace.traces),e_52738], 0));
}

var G__52739 = cljs.core.next(seq__52604_52728__$1);
var G__52740 = null;
var G__52741 = (0);
var G__52742 = (0);
seq__52604_52714 = G__52739;
chunk__52605_52715 = G__52740;
count__52606_52716 = G__52741;
i__52607_52717 = G__52742;
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
