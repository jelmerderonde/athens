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
var _STAR_current_trace_STAR__orig_val__52554 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52555 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52555);

try{try{var seq__52558 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52559 = null;
var count__52560 = (0);
var i__52561 = (0);
while(true){
if((i__52561 < count__52560)){
var vec__52570 = chunk__52559.cljs$core$IIndexed$_nth$arity$2(null,i__52561);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52570,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52570,(1),null);
var temp__5733__auto___52659 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52659)){
var effect_fn_52660 = temp__5733__auto___52659;
(effect_fn_52660.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52660.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52660.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52661 = seq__52558;
var G__52662 = chunk__52559;
var G__52663 = count__52560;
var G__52664 = (i__52561 + (1));
seq__52558 = G__52661;
chunk__52559 = G__52662;
count__52560 = G__52663;
i__52561 = G__52664;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52558);
if(temp__5735__auto__){
var seq__52558__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52558__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52558__$1);
var G__52665 = cljs.core.chunk_rest(seq__52558__$1);
var G__52666 = c__4609__auto__;
var G__52667 = cljs.core.count(c__4609__auto__);
var G__52668 = (0);
seq__52558 = G__52665;
chunk__52559 = G__52666;
count__52560 = G__52667;
i__52561 = G__52668;
continue;
} else {
var vec__52574 = cljs.core.first(seq__52558__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52574,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52574,(1),null);
var temp__5733__auto___52673 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52673)){
var effect_fn_52674 = temp__5733__auto___52673;
(effect_fn_52674.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52674.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52674.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52675 = cljs.core.next(seq__52558__$1);
var G__52676 = null;
var G__52677 = (0);
var G__52678 = (0);
seq__52558 = G__52675;
chunk__52559 = G__52676;
count__52560 = G__52677;
i__52561 = G__52678;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52201__auto___52681 = re_frame.interop.now();
var duration__52202__auto___52682 = (end__52201__auto___52681 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52202__auto___52682,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52201__auto___52681);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52554);
}} else {
var seq__52577 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52578 = null;
var count__52579 = (0);
var i__52580 = (0);
while(true){
if((i__52580 < count__52579)){
var vec__52587 = chunk__52578.cljs$core$IIndexed$_nth$arity$2(null,i__52580);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52587,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52587,(1),null);
var temp__5733__auto___52691 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52691)){
var effect_fn_52692 = temp__5733__auto___52691;
(effect_fn_52692.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52692.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52692.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52693 = seq__52577;
var G__52694 = chunk__52578;
var G__52695 = count__52579;
var G__52696 = (i__52580 + (1));
seq__52577 = G__52693;
chunk__52578 = G__52694;
count__52579 = G__52695;
i__52580 = G__52696;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52577);
if(temp__5735__auto__){
var seq__52577__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52577__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52577__$1);
var G__52697 = cljs.core.chunk_rest(seq__52577__$1);
var G__52698 = c__4609__auto__;
var G__52699 = cljs.core.count(c__4609__auto__);
var G__52700 = (0);
seq__52577 = G__52697;
chunk__52578 = G__52698;
count__52579 = G__52699;
i__52580 = G__52700;
continue;
} else {
var vec__52592 = cljs.core.first(seq__52577__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52592,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52592,(1),null);
var temp__5733__auto___52705 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52705)){
var effect_fn_52706 = temp__5733__auto___52705;
(effect_fn_52706.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52706.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52706.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52708 = cljs.core.next(seq__52577__$1);
var G__52709 = null;
var G__52710 = (0);
var G__52711 = (0);
seq__52577 = G__52708;
chunk__52578 = G__52709;
count__52579 = G__52710;
i__52580 = G__52711;
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
var seq__52598 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52599 = null;
var count__52600 = (0);
var i__52601 = (0);
while(true){
if((i__52601 < count__52600)){
var map__52615 = chunk__52599.cljs$core$IIndexed$_nth$arity$2(null,i__52601);
var map__52615__$1 = (((((!((map__52615 == null))))?(((((map__52615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52615):map__52615);
var effect = map__52615__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52615__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52615__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52598,chunk__52599,count__52600,i__52601,map__52615,map__52615__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52598,chunk__52599,count__52600,i__52601,map__52615,map__52615__$1,effect,ms,dispatch))
,ms);
}


var G__52719 = seq__52598;
var G__52720 = chunk__52599;
var G__52721 = count__52600;
var G__52722 = (i__52601 + (1));
seq__52598 = G__52719;
chunk__52599 = G__52720;
count__52600 = G__52721;
i__52601 = G__52722;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52598);
if(temp__5735__auto__){
var seq__52598__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52598__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52598__$1);
var G__52723 = cljs.core.chunk_rest(seq__52598__$1);
var G__52724 = c__4609__auto__;
var G__52725 = cljs.core.count(c__4609__auto__);
var G__52726 = (0);
seq__52598 = G__52723;
chunk__52599 = G__52724;
count__52600 = G__52725;
i__52601 = G__52726;
continue;
} else {
var map__52622 = cljs.core.first(seq__52598__$1);
var map__52622__$1 = (((((!((map__52622 == null))))?(((((map__52622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52622):map__52622);
var effect = map__52622__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52622__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52622__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52598,chunk__52599,count__52600,i__52601,map__52622,map__52622__$1,effect,ms,dispatch,seq__52598__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52598,chunk__52599,count__52600,i__52601,map__52622,map__52622__$1,effect,ms,dispatch,seq__52598__$1,temp__5735__auto__))
,ms);
}


var G__52732 = cljs.core.next(seq__52598__$1);
var G__52733 = null;
var G__52734 = (0);
var G__52735 = (0);
seq__52598 = G__52732;
chunk__52599 = G__52733;
count__52600 = G__52734;
i__52601 = G__52735;
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
var seq__52630 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52631 = null;
var count__52632 = (0);
var i__52633 = (0);
while(true){
if((i__52633 < count__52632)){
var event = chunk__52631.cljs$core$IIndexed$_nth$arity$2(null,i__52633);
re_frame.router.dispatch(event);


var G__52743 = seq__52630;
var G__52744 = chunk__52631;
var G__52745 = count__52632;
var G__52746 = (i__52633 + (1));
seq__52630 = G__52743;
chunk__52631 = G__52744;
count__52632 = G__52745;
i__52633 = G__52746;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52630);
if(temp__5735__auto__){
var seq__52630__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52630__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52630__$1);
var G__52748 = cljs.core.chunk_rest(seq__52630__$1);
var G__52749 = c__4609__auto__;
var G__52750 = cljs.core.count(c__4609__auto__);
var G__52751 = (0);
seq__52630 = G__52748;
chunk__52631 = G__52749;
count__52632 = G__52750;
i__52633 = G__52751;
continue;
} else {
var event = cljs.core.first(seq__52630__$1);
re_frame.router.dispatch(event);


var G__52752 = cljs.core.next(seq__52630__$1);
var G__52753 = null;
var G__52754 = (0);
var G__52755 = (0);
seq__52630 = G__52752;
chunk__52631 = G__52753;
count__52632 = G__52754;
i__52633 = G__52755;
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
var seq__52636 = cljs.core.seq(value);
var chunk__52637 = null;
var count__52638 = (0);
var i__52639 = (0);
while(true){
if((i__52639 < count__52638)){
var event = chunk__52637.cljs$core$IIndexed$_nth$arity$2(null,i__52639);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52758 = seq__52636;
var G__52759 = chunk__52637;
var G__52760 = count__52638;
var G__52761 = (i__52639 + (1));
seq__52636 = G__52758;
chunk__52637 = G__52759;
count__52638 = G__52760;
i__52639 = G__52761;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52636);
if(temp__5735__auto__){
var seq__52636__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52636__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52636__$1);
var G__52762 = cljs.core.chunk_rest(seq__52636__$1);
var G__52763 = c__4609__auto__;
var G__52764 = cljs.core.count(c__4609__auto__);
var G__52765 = (0);
seq__52636 = G__52762;
chunk__52637 = G__52763;
count__52638 = G__52764;
i__52639 = G__52765;
continue;
} else {
var event = cljs.core.first(seq__52636__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52766 = cljs.core.next(seq__52636__$1);
var G__52767 = null;
var G__52768 = (0);
var G__52769 = (0);
seq__52636 = G__52766;
chunk__52637 = G__52767;
count__52638 = G__52768;
i__52639 = G__52769;
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
