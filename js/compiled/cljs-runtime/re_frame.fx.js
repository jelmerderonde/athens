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
var _STAR_current_trace_STAR__orig_val__52848 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52849 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52849);

try{try{var seq__52850 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52851 = null;
var count__52852 = (0);
var i__52853 = (0);
while(true){
if((i__52853 < count__52852)){
var vec__52860 = chunk__52851.cljs$core$IIndexed$_nth$arity$2(null,i__52853);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52860,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52860,(1),null);
var temp__5733__auto___52902 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52902)){
var effect_fn_52903 = temp__5733__auto___52902;
(effect_fn_52903.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52903.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52903.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52904 = seq__52850;
var G__52905 = chunk__52851;
var G__52906 = count__52852;
var G__52907 = (i__52853 + (1));
seq__52850 = G__52904;
chunk__52851 = G__52905;
count__52852 = G__52906;
i__52853 = G__52907;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52850);
if(temp__5735__auto__){
var seq__52850__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52850__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52850__$1);
var G__52908 = cljs.core.chunk_rest(seq__52850__$1);
var G__52909 = c__4609__auto__;
var G__52910 = cljs.core.count(c__4609__auto__);
var G__52911 = (0);
seq__52850 = G__52908;
chunk__52851 = G__52909;
count__52852 = G__52910;
i__52853 = G__52911;
continue;
} else {
var vec__52863 = cljs.core.first(seq__52850__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52863,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52863,(1),null);
var temp__5733__auto___52912 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52912)){
var effect_fn_52913 = temp__5733__auto___52912;
(effect_fn_52913.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52913.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52913.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52914 = cljs.core.next(seq__52850__$1);
var G__52915 = null;
var G__52916 = (0);
var G__52917 = (0);
seq__52850 = G__52914;
chunk__52851 = G__52915;
count__52852 = G__52916;
i__52853 = G__52917;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52581__auto___52918 = re_frame.interop.now();
var duration__52582__auto___52919 = (end__52581__auto___52918 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52582__auto___52919,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52581__auto___52918);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52848);
}} else {
var seq__52866 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52867 = null;
var count__52868 = (0);
var i__52869 = (0);
while(true){
if((i__52869 < count__52868)){
var vec__52876 = chunk__52867.cljs$core$IIndexed$_nth$arity$2(null,i__52869);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52876,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52876,(1),null);
var temp__5733__auto___52920 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52920)){
var effect_fn_52921 = temp__5733__auto___52920;
(effect_fn_52921.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52921.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52921.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52922 = seq__52866;
var G__52923 = chunk__52867;
var G__52924 = count__52868;
var G__52925 = (i__52869 + (1));
seq__52866 = G__52922;
chunk__52867 = G__52923;
count__52868 = G__52924;
i__52869 = G__52925;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52866);
if(temp__5735__auto__){
var seq__52866__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52866__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52866__$1);
var G__52926 = cljs.core.chunk_rest(seq__52866__$1);
var G__52927 = c__4609__auto__;
var G__52928 = cljs.core.count(c__4609__auto__);
var G__52929 = (0);
seq__52866 = G__52926;
chunk__52867 = G__52927;
count__52868 = G__52928;
i__52869 = G__52929;
continue;
} else {
var vec__52879 = cljs.core.first(seq__52866__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52879,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52879,(1),null);
var temp__5733__auto___52930 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52930)){
var effect_fn_52931 = temp__5733__auto___52930;
(effect_fn_52931.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52931.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52931.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52932 = cljs.core.next(seq__52866__$1);
var G__52933 = null;
var G__52934 = (0);
var G__52935 = (0);
seq__52866 = G__52932;
chunk__52867 = G__52933;
count__52868 = G__52934;
i__52869 = G__52935;
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
var seq__52882 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52883 = null;
var count__52884 = (0);
var i__52885 = (0);
while(true){
if((i__52885 < count__52884)){
var map__52890 = chunk__52883.cljs$core$IIndexed$_nth$arity$2(null,i__52885);
var map__52890__$1 = (((((!((map__52890 == null))))?(((((map__52890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52890):map__52890);
var effect = map__52890__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52890__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52890__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52882,chunk__52883,count__52884,i__52885,map__52890,map__52890__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52882,chunk__52883,count__52884,i__52885,map__52890,map__52890__$1,effect,ms,dispatch))
,ms);
}


var G__52940 = seq__52882;
var G__52941 = chunk__52883;
var G__52942 = count__52884;
var G__52943 = (i__52885 + (1));
seq__52882 = G__52940;
chunk__52883 = G__52941;
count__52884 = G__52942;
i__52885 = G__52943;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52882);
if(temp__5735__auto__){
var seq__52882__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52882__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52882__$1);
var G__52960 = cljs.core.chunk_rest(seq__52882__$1);
var G__52961 = c__4609__auto__;
var G__52962 = cljs.core.count(c__4609__auto__);
var G__52963 = (0);
seq__52882 = G__52960;
chunk__52883 = G__52961;
count__52884 = G__52962;
i__52885 = G__52963;
continue;
} else {
var map__52892 = cljs.core.first(seq__52882__$1);
var map__52892__$1 = (((((!((map__52892 == null))))?(((((map__52892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52892):map__52892);
var effect = map__52892__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52892__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52892__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52882,chunk__52883,count__52884,i__52885,map__52892,map__52892__$1,effect,ms,dispatch,seq__52882__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52882,chunk__52883,count__52884,i__52885,map__52892,map__52892__$1,effect,ms,dispatch,seq__52882__$1,temp__5735__auto__))
,ms);
}


var G__52965 = cljs.core.next(seq__52882__$1);
var G__52966 = null;
var G__52967 = (0);
var G__52968 = (0);
seq__52882 = G__52965;
chunk__52883 = G__52966;
count__52884 = G__52967;
i__52885 = G__52968;
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
var seq__52894 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52895 = null;
var count__52896 = (0);
var i__52897 = (0);
while(true){
if((i__52897 < count__52896)){
var event = chunk__52895.cljs$core$IIndexed$_nth$arity$2(null,i__52897);
re_frame.router.dispatch(event);


var G__52969 = seq__52894;
var G__52971 = chunk__52895;
var G__52972 = count__52896;
var G__52973 = (i__52897 + (1));
seq__52894 = G__52969;
chunk__52895 = G__52971;
count__52896 = G__52972;
i__52897 = G__52973;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52894);
if(temp__5735__auto__){
var seq__52894__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52894__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52894__$1);
var G__52974 = cljs.core.chunk_rest(seq__52894__$1);
var G__52975 = c__4609__auto__;
var G__52976 = cljs.core.count(c__4609__auto__);
var G__52977 = (0);
seq__52894 = G__52974;
chunk__52895 = G__52975;
count__52896 = G__52976;
i__52897 = G__52977;
continue;
} else {
var event = cljs.core.first(seq__52894__$1);
re_frame.router.dispatch(event);


var G__52978 = cljs.core.next(seq__52894__$1);
var G__52979 = null;
var G__52980 = (0);
var G__52981 = (0);
seq__52894 = G__52978;
chunk__52895 = G__52979;
count__52896 = G__52980;
i__52897 = G__52981;
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
var seq__52898 = cljs.core.seq(value);
var chunk__52899 = null;
var count__52900 = (0);
var i__52901 = (0);
while(true){
if((i__52901 < count__52900)){
var event = chunk__52899.cljs$core$IIndexed$_nth$arity$2(null,i__52901);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52982 = seq__52898;
var G__52983 = chunk__52899;
var G__52984 = count__52900;
var G__52985 = (i__52901 + (1));
seq__52898 = G__52982;
chunk__52899 = G__52983;
count__52900 = G__52984;
i__52901 = G__52985;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52898);
if(temp__5735__auto__){
var seq__52898__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52898__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52898__$1);
var G__52986 = cljs.core.chunk_rest(seq__52898__$1);
var G__52987 = c__4609__auto__;
var G__52988 = cljs.core.count(c__4609__auto__);
var G__52989 = (0);
seq__52898 = G__52986;
chunk__52899 = G__52987;
count__52900 = G__52988;
i__52901 = G__52989;
continue;
} else {
var event = cljs.core.first(seq__52898__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52990 = cljs.core.next(seq__52898__$1);
var G__52991 = null;
var G__52992 = (0);
var G__52993 = (0);
seq__52898 = G__52990;
chunk__52899 = G__52991;
count__52900 = G__52992;
i__52901 = G__52993;
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
