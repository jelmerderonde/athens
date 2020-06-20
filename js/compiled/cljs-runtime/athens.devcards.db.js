goog.provide('athens.devcards.db');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.buttons');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('reagent.core');
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(conn){
var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_54435){
var state_val_54436 = (state_54435[(1)]);
if((state_val_54436 === (7))){
var state_54435__$1 = state_54435;
var statearr_54437_54479 = state_54435__$1;
(statearr_54437_54479[(2)] = false);

(statearr_54437_54479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (1))){
var inst_54398 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_54399 = [false];
var inst_54400 = cljs.core.PersistentHashMap.fromArrays(inst_54398,inst_54399);
var inst_54401 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54400], 0));
var state_54435__$1 = state_54435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54435__$1,(2),inst_54401);
} else {
if((state_val_54436 === (4))){
var state_54435__$1 = state_54435;
var statearr_54438_54480 = state_54435__$1;
(statearr_54438_54480[(2)] = false);

(statearr_54438_54480[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (13))){
var inst_54431 = alert("Failed to retrieve data from GitHub");
var state_54435__$1 = state_54435;
var statearr_54439_54481 = state_54435__$1;
(statearr_54439_54481[(2)] = inst_54431);

(statearr_54439_54481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (6))){
var state_54435__$1 = state_54435;
var statearr_54440_54482 = state_54435__$1;
(statearr_54440_54482[(2)] = true);

(statearr_54440_54482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (3))){
var inst_54403 = (state_54435[(7)]);
var inst_54408 = inst_54403.cljs$lang$protocol_mask$partition0$;
var inst_54409 = (inst_54408 & (64));
var inst_54410 = inst_54403.cljs$core$ISeq$;
var inst_54411 = (cljs.core.PROTOCOL_SENTINEL === inst_54410);
var inst_54412 = ((inst_54409) || (inst_54411));
var state_54435__$1 = state_54435;
if(cljs.core.truth_(inst_54412)){
var statearr_54441_54483 = state_54435__$1;
(statearr_54441_54483[(1)] = (6));

} else {
var statearr_54442_54484 = state_54435__$1;
(statearr_54442_54484[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (12))){
var inst_54426 = (state_54435[(8)]);
var inst_54428 = athens.db.str_to_db_tx(inst_54426);
var inst_54429 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_54428) : posh.reagent.transact_BANG_.call(null,conn,inst_54428));
var state_54435__$1 = state_54435;
var statearr_54443_54485 = state_54435__$1;
(statearr_54443_54485[(2)] = inst_54429);

(statearr_54443_54485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (2))){
var inst_54403 = (state_54435[(7)]);
var inst_54403__$1 = (state_54435[(2)]);
var inst_54405 = (inst_54403__$1 == null);
var inst_54406 = cljs.core.not(inst_54405);
var state_54435__$1 = (function (){var statearr_54444 = state_54435;
(statearr_54444[(7)] = inst_54403__$1);

return statearr_54444;
})();
if(inst_54406){
var statearr_54445_54486 = state_54435__$1;
(statearr_54445_54486[(1)] = (3));

} else {
var statearr_54446_54487 = state_54435__$1;
(statearr_54446_54487[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (11))){
var inst_54424 = (state_54435[(2)]);
var inst_54425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54424,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_54426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54424,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_54435__$1 = (function (){var statearr_54447 = state_54435;
(statearr_54447[(8)] = inst_54426);

return statearr_54447;
})();
if(cljs.core.truth_(inst_54425)){
var statearr_54448_54488 = state_54435__$1;
(statearr_54448_54488[(1)] = (12));

} else {
var statearr_54449_54489 = state_54435__$1;
(statearr_54449_54489[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (9))){
var inst_54403 = (state_54435[(7)]);
var inst_54421 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_54403);
var state_54435__$1 = state_54435;
var statearr_54452_54490 = state_54435__$1;
(statearr_54452_54490[(2)] = inst_54421);

(statearr_54452_54490[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (5))){
var inst_54419 = (state_54435[(2)]);
var state_54435__$1 = state_54435;
if(cljs.core.truth_(inst_54419)){
var statearr_54454_54491 = state_54435__$1;
(statearr_54454_54491[(1)] = (9));

} else {
var statearr_54455_54492 = state_54435__$1;
(statearr_54455_54492[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (14))){
var inst_54433 = (state_54435[(2)]);
var state_54435__$1 = state_54435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54435__$1,inst_54433);
} else {
if((state_val_54436 === (10))){
var inst_54403 = (state_54435[(7)]);
var state_54435__$1 = state_54435;
var statearr_54458_54493 = state_54435__$1;
(statearr_54458_54493[(2)] = inst_54403);

(statearr_54458_54493[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (8))){
var inst_54416 = (state_54435[(2)]);
var state_54435__$1 = state_54435;
var statearr_54460_54494 = state_54435__$1;
(statearr_54460_54494[(2)] = inst_54416);

(statearr_54460_54494[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0 = (function (){
var statearr_54462 = [null,null,null,null,null,null,null,null,null];
(statearr_54462[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__);

(statearr_54462[(1)] = (1));

return statearr_54462;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1 = (function (state_54435){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_54435);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e54463){if((e54463 instanceof Object)){
var ex__41716__auto__ = e54463;
var statearr_54466_54495 = state_54435;
(statearr_54466_54495[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54463;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54496 = state_54435;
state_54435 = G__54496;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__ = function(state_54435){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1.call(this,state_54435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_54468 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_54468[(6)] = c__41735__auto__);

return statearr_54468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(conn){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_(conn);
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),handler,new cljs.core.Keyword(null,"label","label",1718410804),"Load Real Data"], null)], null);
});
});
athens.devcards.db.new_conn = (function athens$devcards$db$new_conn(){
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.db.schema);
});
athens.devcards.db.posh_conn_BANG_ = (function athens$devcards$db$posh_conn_BANG_(conn){
return (posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1 ? posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1(conn) : posh.reagent.posh_BANG_.call(null,conn));
});

//# sourceMappingURL=athens.devcards.db.js.map
