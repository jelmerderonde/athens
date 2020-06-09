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
var _STAR_current_trace_STAR__orig_val__47932 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47933 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47933);

try{try{var seq__47934 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47935 = null;
var count__47936 = (0);
var i__47937 = (0);
while(true){
if((i__47937 < count__47936)){
var vec__47944 = chunk__47935.cljs$core$IIndexed$_nth$arity$2(null,i__47937);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47944,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47944,(1),null);
var temp__5733__auto___47994 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47994)){
var effect_fn_47995 = temp__5733__auto___47994;
(effect_fn_47995.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47995.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47995.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47996 = seq__47934;
var G__47997 = chunk__47935;
var G__47998 = count__47936;
var G__47999 = (i__47937 + (1));
seq__47934 = G__47996;
chunk__47935 = G__47997;
count__47936 = G__47998;
i__47937 = G__47999;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47934);
if(temp__5735__auto__){
var seq__47934__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47934__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47934__$1);
var G__48000 = cljs.core.chunk_rest(seq__47934__$1);
var G__48001 = c__4609__auto__;
var G__48002 = cljs.core.count(c__4609__auto__);
var G__48003 = (0);
seq__47934 = G__48000;
chunk__47935 = G__48001;
count__47936 = G__48002;
i__47937 = G__48003;
continue;
} else {
var vec__47948 = cljs.core.first(seq__47934__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47948,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47948,(1),null);
var temp__5733__auto___48006 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48006)){
var effect_fn_48007 = temp__5733__auto___48006;
(effect_fn_48007.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48007.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48007.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48008 = cljs.core.next(seq__47934__$1);
var G__48009 = null;
var G__48010 = (0);
var G__48011 = (0);
seq__47934 = G__48008;
chunk__47935 = G__48009;
count__47936 = G__48010;
i__47937 = G__48011;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__47665__auto___48016 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__47666__auto___48017 = (end__47665__auto___48016 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47666__auto___48017,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__47665__auto___48016);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47932);
}} else {
var seq__47951 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47952 = null;
var count__47953 = (0);
var i__47954 = (0);
while(true){
if((i__47954 < count__47953)){
var vec__47961 = chunk__47952.cljs$core$IIndexed$_nth$arity$2(null,i__47954);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47961,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47961,(1),null);
var temp__5733__auto___48027 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48027)){
var effect_fn_48028 = temp__5733__auto___48027;
(effect_fn_48028.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48028.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48028.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48029 = seq__47951;
var G__48030 = chunk__47952;
var G__48031 = count__47953;
var G__48032 = (i__47954 + (1));
seq__47951 = G__48029;
chunk__47952 = G__48030;
count__47953 = G__48031;
i__47954 = G__48032;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47951);
if(temp__5735__auto__){
var seq__47951__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47951__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47951__$1);
var G__48033 = cljs.core.chunk_rest(seq__47951__$1);
var G__48034 = c__4609__auto__;
var G__48035 = cljs.core.count(c__4609__auto__);
var G__48036 = (0);
seq__47951 = G__48033;
chunk__47952 = G__48034;
count__47953 = G__48035;
i__47954 = G__48036;
continue;
} else {
var vec__47964 = cljs.core.first(seq__47951__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47964,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47964,(1),null);
var temp__5733__auto___48037 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48037)){
var effect_fn_48038 = temp__5733__auto___48037;
(effect_fn_48038.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48038.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48038.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48039 = cljs.core.next(seq__47951__$1);
var G__48040 = null;
var G__48041 = (0);
var G__48042 = (0);
seq__47951 = G__48039;
chunk__47952 = G__48040;
count__47953 = G__48041;
i__47954 = G__48042;
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
var seq__47967 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47968 = null;
var count__47969 = (0);
var i__47970 = (0);
while(true){
if((i__47970 < count__47969)){
var map__47975 = chunk__47968.cljs$core$IIndexed$_nth$arity$2(null,i__47970);
var map__47975__$1 = (((((!((map__47975 == null))))?(((((map__47975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47975):map__47975);
var effect = map__47975__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47975__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__47967,chunk__47968,count__47969,i__47970,map__47975,map__47975__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__47967,chunk__47968,count__47969,i__47970,map__47975,map__47975__$1,effect,ms,dispatch))
,ms);
}


var G__48043 = seq__47967;
var G__48044 = chunk__47968;
var G__48045 = count__47969;
var G__48046 = (i__47970 + (1));
seq__47967 = G__48043;
chunk__47968 = G__48044;
count__47969 = G__48045;
i__47970 = G__48046;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47967);
if(temp__5735__auto__){
var seq__47967__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47967__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47967__$1);
var G__48047 = cljs.core.chunk_rest(seq__47967__$1);
var G__48048 = c__4609__auto__;
var G__48049 = cljs.core.count(c__4609__auto__);
var G__48050 = (0);
seq__47967 = G__48047;
chunk__47968 = G__48048;
count__47969 = G__48049;
i__47970 = G__48050;
continue;
} else {
var map__47977 = cljs.core.first(seq__47967__$1);
var map__47977__$1 = (((((!((map__47977 == null))))?(((((map__47977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47977):map__47977);
var effect = map__47977__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47977__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47977__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__47967,chunk__47968,count__47969,i__47970,map__47977,map__47977__$1,effect,ms,dispatch,seq__47967__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__47967,chunk__47968,count__47969,i__47970,map__47977,map__47977__$1,effect,ms,dispatch,seq__47967__$1,temp__5735__auto__))
,ms);
}


var G__48051 = cljs.core.next(seq__47967__$1);
var G__48052 = null;
var G__48053 = (0);
var G__48054 = (0);
seq__47967 = G__48051;
chunk__47968 = G__48052;
count__47969 = G__48053;
i__47970 = G__48054;
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
var seq__47979 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47980 = null;
var count__47981 = (0);
var i__47982 = (0);
while(true){
if((i__47982 < count__47981)){
var event = chunk__47980.cljs$core$IIndexed$_nth$arity$2(null,i__47982);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__48056 = seq__47979;
var G__48057 = chunk__47980;
var G__48058 = count__47981;
var G__48059 = (i__47982 + (1));
seq__47979 = G__48056;
chunk__47980 = G__48057;
count__47981 = G__48058;
i__47982 = G__48059;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47979);
if(temp__5735__auto__){
var seq__47979__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47979__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47979__$1);
var G__48062 = cljs.core.chunk_rest(seq__47979__$1);
var G__48063 = c__4609__auto__;
var G__48064 = cljs.core.count(c__4609__auto__);
var G__48065 = (0);
seq__47979 = G__48062;
chunk__47980 = G__48063;
count__47981 = G__48064;
i__47982 = G__48065;
continue;
} else {
var event = cljs.core.first(seq__47979__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__48066 = cljs.core.next(seq__47979__$1);
var G__48067 = null;
var G__48068 = (0);
var G__48069 = (0);
seq__47979 = G__48066;
chunk__47980 = G__48067;
count__47981 = G__48068;
i__47982 = G__48069;
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
var seq__47984 = cljs.core.seq(value);
var chunk__47985 = null;
var count__47986 = (0);
var i__47987 = (0);
while(true){
if((i__47987 < count__47986)){
var event = chunk__47985.cljs$core$IIndexed$_nth$arity$2(null,i__47987);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__48070 = seq__47984;
var G__48071 = chunk__47985;
var G__48072 = count__47986;
var G__48073 = (i__47987 + (1));
seq__47984 = G__48070;
chunk__47985 = G__48071;
count__47986 = G__48072;
i__47987 = G__48073;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47984);
if(temp__5735__auto__){
var seq__47984__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47984__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47984__$1);
var G__48074 = cljs.core.chunk_rest(seq__47984__$1);
var G__48075 = c__4609__auto__;
var G__48076 = cljs.core.count(c__4609__auto__);
var G__48077 = (0);
seq__47984 = G__48074;
chunk__47985 = G__48075;
count__47986 = G__48076;
i__47987 = G__48077;
continue;
} else {
var event = cljs.core.first(seq__47984__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__48080 = cljs.core.next(seq__47984__$1);
var G__48081 = null;
var G__48082 = (0);
var G__48083 = (0);
seq__47984 = G__48080;
chunk__47985 = G__48081;
count__47986 = G__48082;
i__47987 = G__48083;
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
