goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__56895 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__56896 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__56896);

try{try{var seq__56897 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__56898 = null;
var count__56899 = (0);
var i__56900 = (0);
while(true){
if((i__56900 < count__56899)){
var vec__56909 = chunk__56898.cljs$core$IIndexed$_nth$arity$2(null,i__56900);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56909,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56909,(1),null);
var temp__5733__auto___56967 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56967)){
var effect_fn_56968 = temp__5733__auto___56967;
(effect_fn_56968.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56968.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56968.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56970 = seq__56897;
var G__56971 = chunk__56898;
var G__56972 = count__56899;
var G__56973 = (i__56900 + (1));
seq__56897 = G__56970;
chunk__56898 = G__56971;
count__56899 = G__56972;
i__56900 = G__56973;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56897);
if(temp__5735__auto__){
var seq__56897__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56897__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56897__$1);
var G__56974 = cljs.core.chunk_rest(seq__56897__$1);
var G__56975 = c__4609__auto__;
var G__56976 = cljs.core.count(c__4609__auto__);
var G__56977 = (0);
seq__56897 = G__56974;
chunk__56898 = G__56975;
count__56899 = G__56976;
i__56900 = G__56977;
continue;
} else {
var vec__56912 = cljs.core.first(seq__56897__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56912,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56912,(1),null);
var temp__5733__auto___56978 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56978)){
var effect_fn_56979 = temp__5733__auto___56978;
(effect_fn_56979.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56979.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56979.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56980 = cljs.core.next(seq__56897__$1);
var G__56981 = null;
var G__56982 = (0);
var G__56983 = (0);
seq__56897 = G__56980;
chunk__56898 = G__56981;
count__56899 = G__56982;
i__56900 = G__56983;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__56613__auto___56984 = re_frame.interop.now();
var duration__56614__auto___56985 = (end__56613__auto___56984 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__56614__auto___56985,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__56613__auto___56984);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__56895);
}} else {
var seq__56915 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__56916 = null;
var count__56917 = (0);
var i__56918 = (0);
while(true){
if((i__56918 < count__56917)){
var vec__56926 = chunk__56916.cljs$core$IIndexed$_nth$arity$2(null,i__56918);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56926,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56926,(1),null);
var temp__5733__auto___56988 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56988)){
var effect_fn_56989 = temp__5733__auto___56988;
(effect_fn_56989.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56989.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56989.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56990 = seq__56915;
var G__56991 = chunk__56916;
var G__56992 = count__56917;
var G__56993 = (i__56918 + (1));
seq__56915 = G__56990;
chunk__56916 = G__56991;
count__56917 = G__56992;
i__56918 = G__56993;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56915);
if(temp__5735__auto__){
var seq__56915__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56915__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56915__$1);
var G__56995 = cljs.core.chunk_rest(seq__56915__$1);
var G__56996 = c__4609__auto__;
var G__56997 = cljs.core.count(c__4609__auto__);
var G__56998 = (0);
seq__56915 = G__56995;
chunk__56916 = G__56996;
count__56917 = G__56997;
i__56918 = G__56998;
continue;
} else {
var vec__56929 = cljs.core.first(seq__56915__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56929,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56929,(1),null);
var temp__5733__auto___56999 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56999)){
var effect_fn_57000 = temp__5733__auto___56999;
(effect_fn_57000.cljs$core$IFn$_invoke$arity$1 ? effect_fn_57000.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_57000.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__57001 = cljs.core.next(seq__56915__$1);
var G__57002 = null;
var G__57003 = (0);
var G__57004 = (0);
seq__56915 = G__57001;
chunk__56916 = G__57002;
count__56917 = G__57003;
i__56918 = G__57004;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__56932 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__56933 = null;
var count__56934 = (0);
var i__56935 = (0);
while(true){
if((i__56935 < count__56934)){
var map__56945 = chunk__56933.cljs$core$IIndexed$_nth$arity$2(null,i__56935);
var map__56945__$1 = (((((!((map__56945 == null))))?(((((map__56945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56945):map__56945);
var effect = map__56945__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56945__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56945__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__56932,chunk__56933,count__56934,i__56935,map__56945,map__56945__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__56932,chunk__56933,count__56934,i__56935,map__56945,map__56945__$1,effect,ms,dispatch))
,ms);
}


var G__57007 = seq__56932;
var G__57008 = chunk__56933;
var G__57009 = count__56934;
var G__57010 = (i__56935 + (1));
seq__56932 = G__57007;
chunk__56933 = G__57008;
count__56934 = G__57009;
i__56935 = G__57010;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56932);
if(temp__5735__auto__){
var seq__56932__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56932__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56932__$1);
var G__57011 = cljs.core.chunk_rest(seq__56932__$1);
var G__57012 = c__4609__auto__;
var G__57013 = cljs.core.count(c__4609__auto__);
var G__57014 = (0);
seq__56932 = G__57011;
chunk__56933 = G__57012;
count__56934 = G__57013;
i__56935 = G__57014;
continue;
} else {
var map__56947 = cljs.core.first(seq__56932__$1);
var map__56947__$1 = (((((!((map__56947 == null))))?(((((map__56947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56947):map__56947);
var effect = map__56947__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56947__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56947__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__56932,chunk__56933,count__56934,i__56935,map__56947,map__56947__$1,effect,ms,dispatch,seq__56932__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__56932,chunk__56933,count__56934,i__56935,map__56947,map__56947__$1,effect,ms,dispatch,seq__56932__$1,temp__5735__auto__))
,ms);
}


var G__57018 = cljs.core.next(seq__56932__$1);
var G__57019 = null;
var G__57020 = (0);
var G__57021 = (0);
seq__56932 = G__57018;
chunk__56933 = G__57019;
count__56934 = G__57020;
i__56935 = G__57021;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__56953 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__56954 = null;
var count__56955 = (0);
var i__56956 = (0);
while(true){
if((i__56956 < count__56955)){
var event = chunk__56954.cljs$core$IIndexed$_nth$arity$2(null,i__56956);
re_frame.router.dispatch(event);


var G__57022 = seq__56953;
var G__57023 = chunk__56954;
var G__57024 = count__56955;
var G__57025 = (i__56956 + (1));
seq__56953 = G__57022;
chunk__56954 = G__57023;
count__56955 = G__57024;
i__56956 = G__57025;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56953);
if(temp__5735__auto__){
var seq__56953__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56953__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56953__$1);
var G__57027 = cljs.core.chunk_rest(seq__56953__$1);
var G__57028 = c__4609__auto__;
var G__57029 = cljs.core.count(c__4609__auto__);
var G__57030 = (0);
seq__56953 = G__57027;
chunk__56954 = G__57028;
count__56955 = G__57029;
i__56956 = G__57030;
continue;
} else {
var event = cljs.core.first(seq__56953__$1);
re_frame.router.dispatch(event);


var G__57032 = cljs.core.next(seq__56953__$1);
var G__57033 = null;
var G__57034 = (0);
var G__57035 = (0);
seq__56953 = G__57032;
chunk__56954 = G__57033;
count__56955 = G__57034;
i__56956 = G__57035;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__56959 = cljs.core.seq(value);
var chunk__56960 = null;
var count__56961 = (0);
var i__56962 = (0);
while(true){
if((i__56962 < count__56961)){
var event = chunk__56960.cljs$core$IIndexed$_nth$arity$2(null,i__56962);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__57036 = seq__56959;
var G__57037 = chunk__56960;
var G__57038 = count__56961;
var G__57039 = (i__56962 + (1));
seq__56959 = G__57036;
chunk__56960 = G__57037;
count__56961 = G__57038;
i__56962 = G__57039;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56959);
if(temp__5735__auto__){
var seq__56959__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56959__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56959__$1);
var G__57040 = cljs.core.chunk_rest(seq__56959__$1);
var G__57041 = c__4609__auto__;
var G__57042 = cljs.core.count(c__4609__auto__);
var G__57043 = (0);
seq__56959 = G__57040;
chunk__56960 = G__57041;
count__56961 = G__57042;
i__56962 = G__57043;
continue;
} else {
var event = cljs.core.first(seq__56959__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__57044 = cljs.core.next(seq__56959__$1);
var G__57045 = null;
var G__57046 = (0);
var G__57047 = (0);
seq__56959 = G__57044;
chunk__56960 = G__57045;
count__56961 = G__57046;
i__56962 = G__57047;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
