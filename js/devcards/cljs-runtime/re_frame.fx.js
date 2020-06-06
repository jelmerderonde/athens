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
var _STAR_current_trace_STAR__orig_val__44374 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__44375 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__44375);

try{try{var seq__44376 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__44377 = null;
var count__44378 = (0);
var i__44379 = (0);
while(true){
if((i__44379 < count__44378)){
var vec__44386 = chunk__44377.cljs$core$IIndexed$_nth$arity$2(null,i__44379);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44386,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44386,(1),null);
var temp__5733__auto___44428 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44428)){
var effect_fn_44429 = temp__5733__auto___44428;
(effect_fn_44429.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44429.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44429.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44430 = seq__44376;
var G__44431 = chunk__44377;
var G__44432 = count__44378;
var G__44433 = (i__44379 + (1));
seq__44376 = G__44430;
chunk__44377 = G__44431;
count__44378 = G__44432;
i__44379 = G__44433;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44376);
if(temp__5735__auto__){
var seq__44376__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44376__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44376__$1);
var G__44434 = cljs.core.chunk_rest(seq__44376__$1);
var G__44435 = c__4609__auto__;
var G__44436 = cljs.core.count(c__4609__auto__);
var G__44437 = (0);
seq__44376 = G__44434;
chunk__44377 = G__44435;
count__44378 = G__44436;
i__44379 = G__44437;
continue;
} else {
var vec__44389 = cljs.core.first(seq__44376__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44389,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44389,(1),null);
var temp__5733__auto___44438 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44438)){
var effect_fn_44439 = temp__5733__auto___44438;
(effect_fn_44439.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44439.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44439.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44440 = cljs.core.next(seq__44376__$1);
var G__44441 = null;
var G__44442 = (0);
var G__44443 = (0);
seq__44376 = G__44440;
chunk__44377 = G__44441;
count__44378 = G__44442;
i__44379 = G__44443;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__42630__auto___44444 = re_frame.interop.now();
var duration__42631__auto___44445 = (end__42630__auto___44444 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__42631__auto___44445,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__42630__auto___44444);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__44374);
}} else {
var seq__44392 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__44393 = null;
var count__44394 = (0);
var i__44395 = (0);
while(true){
if((i__44395 < count__44394)){
var vec__44402 = chunk__44393.cljs$core$IIndexed$_nth$arity$2(null,i__44395);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44402,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44402,(1),null);
var temp__5733__auto___44446 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44446)){
var effect_fn_44447 = temp__5733__auto___44446;
(effect_fn_44447.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44447.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44447.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44448 = seq__44392;
var G__44449 = chunk__44393;
var G__44450 = count__44394;
var G__44451 = (i__44395 + (1));
seq__44392 = G__44448;
chunk__44393 = G__44449;
count__44394 = G__44450;
i__44395 = G__44451;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44392);
if(temp__5735__auto__){
var seq__44392__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44392__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44392__$1);
var G__44452 = cljs.core.chunk_rest(seq__44392__$1);
var G__44453 = c__4609__auto__;
var G__44454 = cljs.core.count(c__4609__auto__);
var G__44455 = (0);
seq__44392 = G__44452;
chunk__44393 = G__44453;
count__44394 = G__44454;
i__44395 = G__44455;
continue;
} else {
var vec__44405 = cljs.core.first(seq__44392__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44405,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44405,(1),null);
var temp__5733__auto___44456 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___44456)){
var effect_fn_44457 = temp__5733__auto___44456;
(effect_fn_44457.cljs$core$IFn$_invoke$arity$1 ? effect_fn_44457.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_44457.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__44458 = cljs.core.next(seq__44392__$1);
var G__44459 = null;
var G__44460 = (0);
var G__44461 = (0);
seq__44392 = G__44458;
chunk__44393 = G__44459;
count__44394 = G__44460;
i__44395 = G__44461;
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
var seq__44408 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__44409 = null;
var count__44410 = (0);
var i__44411 = (0);
while(true){
if((i__44411 < count__44410)){
var map__44416 = chunk__44409.cljs$core$IIndexed$_nth$arity$2(null,i__44411);
var map__44416__$1 = (((((!((map__44416 == null))))?(((((map__44416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44416):map__44416);
var effect = map__44416__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44416__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44416__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__44408,chunk__44409,count__44410,i__44411,map__44416,map__44416__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__44408,chunk__44409,count__44410,i__44411,map__44416,map__44416__$1,effect,ms,dispatch))
,ms);
}


var G__44462 = seq__44408;
var G__44463 = chunk__44409;
var G__44464 = count__44410;
var G__44465 = (i__44411 + (1));
seq__44408 = G__44462;
chunk__44409 = G__44463;
count__44410 = G__44464;
i__44411 = G__44465;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44408);
if(temp__5735__auto__){
var seq__44408__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44408__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44408__$1);
var G__44468 = cljs.core.chunk_rest(seq__44408__$1);
var G__44469 = c__4609__auto__;
var G__44470 = cljs.core.count(c__4609__auto__);
var G__44471 = (0);
seq__44408 = G__44468;
chunk__44409 = G__44469;
count__44410 = G__44470;
i__44411 = G__44471;
continue;
} else {
var map__44418 = cljs.core.first(seq__44408__$1);
var map__44418__$1 = (((((!((map__44418 == null))))?(((((map__44418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44418):map__44418);
var effect = map__44418__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44418__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44418__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__44408,chunk__44409,count__44410,i__44411,map__44418,map__44418__$1,effect,ms,dispatch,seq__44408__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__44408,chunk__44409,count__44410,i__44411,map__44418,map__44418__$1,effect,ms,dispatch,seq__44408__$1,temp__5735__auto__))
,ms);
}


var G__44478 = cljs.core.next(seq__44408__$1);
var G__44479 = null;
var G__44480 = (0);
var G__44481 = (0);
seq__44408 = G__44478;
chunk__44409 = G__44479;
count__44410 = G__44480;
i__44411 = G__44481;
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
var seq__44420 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__44421 = null;
var count__44422 = (0);
var i__44423 = (0);
while(true){
if((i__44423 < count__44422)){
var event = chunk__44421.cljs$core$IIndexed$_nth$arity$2(null,i__44423);
re_frame.router.dispatch(event);


var G__44482 = seq__44420;
var G__44483 = chunk__44421;
var G__44484 = count__44422;
var G__44485 = (i__44423 + (1));
seq__44420 = G__44482;
chunk__44421 = G__44483;
count__44422 = G__44484;
i__44423 = G__44485;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44420);
if(temp__5735__auto__){
var seq__44420__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44420__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44420__$1);
var G__44486 = cljs.core.chunk_rest(seq__44420__$1);
var G__44487 = c__4609__auto__;
var G__44488 = cljs.core.count(c__4609__auto__);
var G__44489 = (0);
seq__44420 = G__44486;
chunk__44421 = G__44487;
count__44422 = G__44488;
i__44423 = G__44489;
continue;
} else {
var event = cljs.core.first(seq__44420__$1);
re_frame.router.dispatch(event);


var G__44490 = cljs.core.next(seq__44420__$1);
var G__44491 = null;
var G__44492 = (0);
var G__44493 = (0);
seq__44420 = G__44490;
chunk__44421 = G__44491;
count__44422 = G__44492;
i__44423 = G__44493;
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
var seq__44424 = cljs.core.seq(value);
var chunk__44425 = null;
var count__44426 = (0);
var i__44427 = (0);
while(true){
if((i__44427 < count__44426)){
var event = chunk__44425.cljs$core$IIndexed$_nth$arity$2(null,i__44427);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__44498 = seq__44424;
var G__44499 = chunk__44425;
var G__44500 = count__44426;
var G__44501 = (i__44427 + (1));
seq__44424 = G__44498;
chunk__44425 = G__44499;
count__44426 = G__44500;
i__44427 = G__44501;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44424);
if(temp__5735__auto__){
var seq__44424__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44424__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44424__$1);
var G__44504 = cljs.core.chunk_rest(seq__44424__$1);
var G__44505 = c__4609__auto__;
var G__44506 = cljs.core.count(c__4609__auto__);
var G__44507 = (0);
seq__44424 = G__44504;
chunk__44425 = G__44505;
count__44426 = G__44506;
i__44427 = G__44507;
continue;
} else {
var event = cljs.core.first(seq__44424__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__44509 = cljs.core.next(seq__44424__$1);
var G__44510 = null;
var G__44511 = (0);
var G__44512 = (0);
seq__44424 = G__44509;
chunk__44425 = G__44510;
count__44426 = G__44511;
i__44427 = G__44512;
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
