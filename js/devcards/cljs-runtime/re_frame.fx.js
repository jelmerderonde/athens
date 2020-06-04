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
var _STAR_current_trace_STAR__orig_val__56285 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__56286 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__56286);

try{try{var seq__56289 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__56290 = null;
var count__56291 = (0);
var i__56292 = (0);
while(true){
if((i__56292 < count__56291)){
var vec__56304 = chunk__56290.cljs$core$IIndexed$_nth$arity$2(null,i__56292);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56304,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56304,(1),null);
var temp__5733__auto___56398 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56398)){
var effect_fn_56400 = temp__5733__auto___56398;
(effect_fn_56400.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56400.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56400.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56401 = seq__56289;
var G__56402 = chunk__56290;
var G__56403 = count__56291;
var G__56404 = (i__56292 + (1));
seq__56289 = G__56401;
chunk__56290 = G__56402;
count__56291 = G__56403;
i__56292 = G__56404;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56289);
if(temp__5735__auto__){
var seq__56289__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56289__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56289__$1);
var G__56405 = cljs.core.chunk_rest(seq__56289__$1);
var G__56406 = c__4609__auto__;
var G__56407 = cljs.core.count(c__4609__auto__);
var G__56408 = (0);
seq__56289 = G__56405;
chunk__56290 = G__56406;
count__56291 = G__56407;
i__56292 = G__56408;
continue;
} else {
var vec__56309 = cljs.core.first(seq__56289__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56309,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56309,(1),null);
var temp__5733__auto___56413 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56413)){
var effect_fn_56418 = temp__5733__auto___56413;
(effect_fn_56418.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56418.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56418.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56423 = cljs.core.next(seq__56289__$1);
var G__56424 = null;
var G__56425 = (0);
var G__56426 = (0);
seq__56289 = G__56423;
chunk__56290 = G__56424;
count__56291 = G__56425;
i__56292 = G__56426;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__55855__auto___56431 = re_frame.interop.now();
var duration__55856__auto___56432 = (end__55855__auto___56431 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__55856__auto___56432,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__55855__auto___56431);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__56285);
}} else {
var seq__56313 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__56314 = null;
var count__56315 = (0);
var i__56316 = (0);
while(true){
if((i__56316 < count__56315)){
var vec__56324 = chunk__56314.cljs$core$IIndexed$_nth$arity$2(null,i__56316);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56324,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56324,(1),null);
var temp__5733__auto___56443 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56443)){
var effect_fn_56444 = temp__5733__auto___56443;
(effect_fn_56444.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56444.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56444.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56447 = seq__56313;
var G__56448 = chunk__56314;
var G__56449 = count__56315;
var G__56450 = (i__56316 + (1));
seq__56313 = G__56447;
chunk__56314 = G__56448;
count__56315 = G__56449;
i__56316 = G__56450;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56313);
if(temp__5735__auto__){
var seq__56313__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56313__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56313__$1);
var G__56451 = cljs.core.chunk_rest(seq__56313__$1);
var G__56452 = c__4609__auto__;
var G__56453 = cljs.core.count(c__4609__auto__);
var G__56454 = (0);
seq__56313 = G__56451;
chunk__56314 = G__56452;
count__56315 = G__56453;
i__56316 = G__56454;
continue;
} else {
var vec__56329 = cljs.core.first(seq__56313__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56329,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56329,(1),null);
var temp__5733__auto___56458 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56458)){
var effect_fn_56459 = temp__5733__auto___56458;
(effect_fn_56459.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56459.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56459.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56460 = cljs.core.next(seq__56313__$1);
var G__56461 = null;
var G__56462 = (0);
var G__56463 = (0);
seq__56313 = G__56460;
chunk__56314 = G__56461;
count__56315 = G__56462;
i__56316 = G__56463;
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
var seq__56335 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__56336 = null;
var count__56337 = (0);
var i__56338 = (0);
while(true){
if((i__56338 < count__56337)){
var map__56349 = chunk__56336.cljs$core$IIndexed$_nth$arity$2(null,i__56338);
var map__56349__$1 = (((((!((map__56349 == null))))?(((((map__56349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56349):map__56349);
var effect = map__56349__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56349__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56349__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__56335,chunk__56336,count__56337,i__56338,map__56349,map__56349__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__56335,chunk__56336,count__56337,i__56338,map__56349,map__56349__$1,effect,ms,dispatch))
,ms);
}


var G__56475 = seq__56335;
var G__56476 = chunk__56336;
var G__56477 = count__56337;
var G__56478 = (i__56338 + (1));
seq__56335 = G__56475;
chunk__56336 = G__56476;
count__56337 = G__56477;
i__56338 = G__56478;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56335);
if(temp__5735__auto__){
var seq__56335__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56335__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56335__$1);
var G__56483 = cljs.core.chunk_rest(seq__56335__$1);
var G__56484 = c__4609__auto__;
var G__56485 = cljs.core.count(c__4609__auto__);
var G__56486 = (0);
seq__56335 = G__56483;
chunk__56336 = G__56484;
count__56337 = G__56485;
i__56338 = G__56486;
continue;
} else {
var map__56351 = cljs.core.first(seq__56335__$1);
var map__56351__$1 = (((((!((map__56351 == null))))?(((((map__56351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56351):map__56351);
var effect = map__56351__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56351__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56351__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__56335,chunk__56336,count__56337,i__56338,map__56351,map__56351__$1,effect,ms,dispatch,seq__56335__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__56335,chunk__56336,count__56337,i__56338,map__56351,map__56351__$1,effect,ms,dispatch,seq__56335__$1,temp__5735__auto__))
,ms);
}


var G__56496 = cljs.core.next(seq__56335__$1);
var G__56497 = null;
var G__56498 = (0);
var G__56499 = (0);
seq__56335 = G__56496;
chunk__56336 = G__56497;
count__56337 = G__56498;
i__56338 = G__56499;
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
var seq__56363 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__56364 = null;
var count__56365 = (0);
var i__56366 = (0);
while(true){
if((i__56366 < count__56365)){
var event = chunk__56364.cljs$core$IIndexed$_nth$arity$2(null,i__56366);
re_frame.router.dispatch(event);


var G__56503 = seq__56363;
var G__56504 = chunk__56364;
var G__56505 = count__56365;
var G__56506 = (i__56366 + (1));
seq__56363 = G__56503;
chunk__56364 = G__56504;
count__56365 = G__56505;
i__56366 = G__56506;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56363);
if(temp__5735__auto__){
var seq__56363__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56363__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56363__$1);
var G__56507 = cljs.core.chunk_rest(seq__56363__$1);
var G__56508 = c__4609__auto__;
var G__56509 = cljs.core.count(c__4609__auto__);
var G__56510 = (0);
seq__56363 = G__56507;
chunk__56364 = G__56508;
count__56365 = G__56509;
i__56366 = G__56510;
continue;
} else {
var event = cljs.core.first(seq__56363__$1);
re_frame.router.dispatch(event);


var G__56514 = cljs.core.next(seq__56363__$1);
var G__56515 = null;
var G__56516 = (0);
var G__56517 = (0);
seq__56363 = G__56514;
chunk__56364 = G__56515;
count__56365 = G__56516;
i__56366 = G__56517;
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
var seq__56374 = cljs.core.seq(value);
var chunk__56375 = null;
var count__56376 = (0);
var i__56377 = (0);
while(true){
if((i__56377 < count__56376)){
var event = chunk__56375.cljs$core$IIndexed$_nth$arity$2(null,i__56377);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__56522 = seq__56374;
var G__56523 = chunk__56375;
var G__56524 = count__56376;
var G__56525 = (i__56377 + (1));
seq__56374 = G__56522;
chunk__56375 = G__56523;
count__56376 = G__56524;
i__56377 = G__56525;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56374);
if(temp__5735__auto__){
var seq__56374__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56374__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56374__$1);
var G__56526 = cljs.core.chunk_rest(seq__56374__$1);
var G__56527 = c__4609__auto__;
var G__56528 = cljs.core.count(c__4609__auto__);
var G__56529 = (0);
seq__56374 = G__56526;
chunk__56375 = G__56527;
count__56376 = G__56528;
i__56377 = G__56529;
continue;
} else {
var event = cljs.core.first(seq__56374__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__56531 = cljs.core.next(seq__56374__$1);
var G__56532 = null;
var G__56533 = (0);
var G__56534 = (0);
seq__56374 = G__56531;
chunk__56375 = G__56532;
count__56376 = G__56533;
i__56377 = G__56534;
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
