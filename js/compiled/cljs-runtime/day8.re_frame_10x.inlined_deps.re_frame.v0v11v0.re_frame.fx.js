goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__47963 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47964 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47964);

try{try{var seq__47966 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47967 = null;
var count__47968 = (0);
var i__47969 = (0);
while(true){
if((i__47969 < count__47968)){
var vec__47979 = chunk__47967.cljs$core$IIndexed$_nth$arity$2(null,i__47969);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47979,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47979,(1),null);
var temp__5733__auto___48055 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48055)){
var effect_fn_48056 = temp__5733__auto___48055;
(effect_fn_48056.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48056.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48056.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48057 = seq__47966;
var G__48058 = chunk__47967;
var G__48059 = count__47968;
var G__48060 = (i__47969 + (1));
seq__47966 = G__48057;
chunk__47967 = G__48058;
count__47968 = G__48059;
i__47969 = G__48060;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47966);
if(temp__5735__auto__){
var seq__47966__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47966__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47966__$1);
var G__48061 = cljs.core.chunk_rest(seq__47966__$1);
var G__48062 = c__4609__auto__;
var G__48063 = cljs.core.count(c__4609__auto__);
var G__48064 = (0);
seq__47966 = G__48061;
chunk__47967 = G__48062;
count__47968 = G__48063;
i__47969 = G__48064;
continue;
} else {
var vec__47985 = cljs.core.first(seq__47966__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47985,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47985,(1),null);
var temp__5733__auto___48065 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48065)){
var effect_fn_48066 = temp__5733__auto___48065;
(effect_fn_48066.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48066.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48066.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48067 = cljs.core.next(seq__47966__$1);
var G__48068 = null;
var G__48069 = (0);
var G__48070 = (0);
seq__47966 = G__48067;
chunk__47967 = G__48068;
count__47968 = G__48069;
i__47969 = G__48070;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__47665__auto___48071 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__47666__auto___48072 = (end__47665__auto___48071 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47666__auto___48072,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__47665__auto___48071);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47963);
}} else {
var seq__47988 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47989 = null;
var count__47990 = (0);
var i__47991 = (0);
while(true){
if((i__47991 < count__47990)){
var vec__48004 = chunk__47989.cljs$core$IIndexed$_nth$arity$2(null,i__47991);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48004,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48004,(1),null);
var temp__5733__auto___48077 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48077)){
var effect_fn_48078 = temp__5733__auto___48077;
(effect_fn_48078.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48078.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48078.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48083 = seq__47988;
var G__48084 = chunk__47989;
var G__48085 = count__47990;
var G__48086 = (i__47991 + (1));
seq__47988 = G__48083;
chunk__47989 = G__48084;
count__47990 = G__48085;
i__47991 = G__48086;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47988);
if(temp__5735__auto__){
var seq__47988__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47988__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47988__$1);
var G__48091 = cljs.core.chunk_rest(seq__47988__$1);
var G__48092 = c__4609__auto__;
var G__48093 = cljs.core.count(c__4609__auto__);
var G__48094 = (0);
seq__47988 = G__48091;
chunk__47989 = G__48092;
count__47990 = G__48093;
i__47991 = G__48094;
continue;
} else {
var vec__48010 = cljs.core.first(seq__47988__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48010,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48010,(1),null);
var temp__5733__auto___48095 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48095)){
var effect_fn_48096 = temp__5733__auto___48095;
(effect_fn_48096.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48096.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48096.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48098 = cljs.core.next(seq__47988__$1);
var G__48099 = null;
var G__48100 = (0);
var G__48101 = (0);
seq__47988 = G__48098;
chunk__47989 = G__48099;
count__47990 = G__48100;
i__47991 = G__48101;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__48014 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48015 = null;
var count__48016 = (0);
var i__48017 = (0);
while(true){
if((i__48017 < count__48016)){
var map__48033 = chunk__48015.cljs$core$IIndexed$_nth$arity$2(null,i__48017);
var map__48033__$1 = (((((!((map__48033 == null))))?(((((map__48033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48033):map__48033);
var effect = map__48033__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48033__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48033__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__48014,chunk__48015,count__48016,i__48017,map__48033,map__48033__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__48014,chunk__48015,count__48016,i__48017,map__48033,map__48033__$1,effect,ms,dispatch))
,ms);
}


var G__48103 = seq__48014;
var G__48104 = chunk__48015;
var G__48105 = count__48016;
var G__48106 = (i__48017 + (1));
seq__48014 = G__48103;
chunk__48015 = G__48104;
count__48016 = G__48105;
i__48017 = G__48106;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48014);
if(temp__5735__auto__){
var seq__48014__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48014__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48014__$1);
var G__48108 = cljs.core.chunk_rest(seq__48014__$1);
var G__48109 = c__4609__auto__;
var G__48110 = cljs.core.count(c__4609__auto__);
var G__48111 = (0);
seq__48014 = G__48108;
chunk__48015 = G__48109;
count__48016 = G__48110;
i__48017 = G__48111;
continue;
} else {
var map__48039 = cljs.core.first(seq__48014__$1);
var map__48039__$1 = (((((!((map__48039 == null))))?(((((map__48039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48039):map__48039);
var effect = map__48039__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48039__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48039__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__48014,chunk__48015,count__48016,i__48017,map__48039,map__48039__$1,effect,ms,dispatch,seq__48014__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__48014,chunk__48015,count__48016,i__48017,map__48039,map__48039__$1,effect,ms,dispatch,seq__48014__$1,temp__5735__auto__))
,ms);
}


var G__48113 = cljs.core.next(seq__48014__$1);
var G__48114 = null;
var G__48115 = (0);
var G__48116 = (0);
seq__48014 = G__48113;
chunk__48015 = G__48114;
count__48016 = G__48115;
i__48017 = G__48116;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__48043 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48044 = null;
var count__48045 = (0);
var i__48046 = (0);
while(true){
if((i__48046 < count__48045)){
var event = chunk__48044.cljs$core$IIndexed$_nth$arity$2(null,i__48046);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__48119 = seq__48043;
var G__48120 = chunk__48044;
var G__48121 = count__48045;
var G__48122 = (i__48046 + (1));
seq__48043 = G__48119;
chunk__48044 = G__48120;
count__48045 = G__48121;
i__48046 = G__48122;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48043);
if(temp__5735__auto__){
var seq__48043__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48043__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48043__$1);
var G__48123 = cljs.core.chunk_rest(seq__48043__$1);
var G__48124 = c__4609__auto__;
var G__48125 = cljs.core.count(c__4609__auto__);
var G__48126 = (0);
seq__48043 = G__48123;
chunk__48044 = G__48124;
count__48045 = G__48125;
i__48046 = G__48126;
continue;
} else {
var event = cljs.core.first(seq__48043__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__48127 = cljs.core.next(seq__48043__$1);
var G__48128 = null;
var G__48129 = (0);
var G__48130 = (0);
seq__48043 = G__48127;
chunk__48044 = G__48128;
count__48045 = G__48129;
i__48046 = G__48130;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__48050 = cljs.core.seq(value);
var chunk__48051 = null;
var count__48052 = (0);
var i__48053 = (0);
while(true){
if((i__48053 < count__48052)){
var event = chunk__48051.cljs$core$IIndexed$_nth$arity$2(null,i__48053);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__48131 = seq__48050;
var G__48132 = chunk__48051;
var G__48133 = count__48052;
var G__48134 = (i__48053 + (1));
seq__48050 = G__48131;
chunk__48051 = G__48132;
count__48052 = G__48133;
i__48053 = G__48134;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48050);
if(temp__5735__auto__){
var seq__48050__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48050__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48050__$1);
var G__48135 = cljs.core.chunk_rest(seq__48050__$1);
var G__48136 = c__4609__auto__;
var G__48137 = cljs.core.count(c__4609__auto__);
var G__48138 = (0);
seq__48050 = G__48135;
chunk__48051 = G__48136;
count__48052 = G__48137;
i__48053 = G__48138;
continue;
} else {
var event = cljs.core.first(seq__48050__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__48139 = cljs.core.next(seq__48050__$1);
var G__48140 = null;
var G__48141 = (0);
var G__48142 = (0);
seq__48050 = G__48139;
chunk__48051 = G__48140;
count__48052 = G__48141;
i__48053 = G__48142;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.js.map
