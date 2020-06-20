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
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_57287){
var state_val_57288 = (state_57287[(1)]);
if((state_val_57288 === (7))){
var state_57287__$1 = state_57287;
var statearr_57289_57314 = state_57287__$1;
(statearr_57289_57314[(2)] = false);

(statearr_57289_57314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57288 === (1))){
var inst_57250 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_57251 = [false];
var inst_57252 = cljs.core.PersistentHashMap.fromArrays(inst_57250,inst_57251);
var inst_57253 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_57252], 0));
var state_57287__$1 = state_57287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57287__$1,(2),inst_57253);
} else {
if((state_val_57288 === (4))){
var state_57287__$1 = state_57287;
var statearr_57290_57315 = state_57287__$1;
(statearr_57290_57315[(2)] = false);

(statearr_57290_57315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57288 === (13))){
var inst_57283 = alert("Failed to retrieve data from GitHub");
var state_57287__$1 = state_57287;
var statearr_57291_57316 = state_57287__$1;
(statearr_57291_57316[(2)] = inst_57283);

(statearr_57291_57316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57288 === (6))){
var state_57287__$1 = state_57287;
var statearr_57292_57317 = state_57287__$1;
(statearr_57292_57317[(2)] = true);

(statearr_57292_57317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57288 === (3))){
var inst_57255 = (state_57287[(7)]);
var inst_57260 = inst_57255.cljs$lang$protocol_mask$partition0$;
var inst_57261 = (inst_57260 & (64));
var inst_57262 = inst_57255.cljs$core$ISeq$;
var inst_57263 = (cljs.core.PROTOCOL_SENTINEL === inst_57262);
var inst_57264 = ((inst_57261) || (inst_57263));
var state_57287__$1 = state_57287;
if(cljs.core.truth_(inst_57264)){
var statearr_57293_57318 = state_57287__$1;
(statearr_57293_57318[(1)] = (6));

} else {
var statearr_57294_57319 = state_57287__$1;
(statearr_57294_57319[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57288 === (12))){
var inst_57278 = (state_57287[(8)]);
var inst_57280 = athens.db.str_to_db_tx(inst_57278);
var inst_57281 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_57280) : posh.reagent.transact_BANG_.call(null,conn,inst_57280));
var state_57287__$1 = state_57287;
var statearr_57295_57320 = state_57287__$1;
(statearr_57295_57320[(2)] = inst_57281);

(statearr_57295_57320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57288 === (2))){
var inst_57255 = (state_57287[(7)]);
var inst_57255__$1 = (state_57287[(2)]);
var inst_57257 = (inst_57255__$1 == null);
var inst_57258 = cljs.core.not(inst_57257);
var state_57287__$1 = (function (){var statearr_57296 = state_57287;
(statearr_57296[(7)] = inst_57255__$1);

return statearr_57296;
})();
if(inst_57258){
var statearr_57297_57321 = state_57287__$1;
(statearr_57297_57321[(1)] = (3));

} else {
var statearr_57298_57322 = state_57287__$1;
(statearr_57298_57322[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57288 === (11))){
var inst_57276 = (state_57287[(2)]);
var inst_57277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57276,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_57278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57276,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_57287__$1 = (function (){var statearr_57299 = state_57287;
(statearr_57299[(8)] = inst_57278);

return statearr_57299;
})();
if(cljs.core.truth_(inst_57277)){
var statearr_57300_57323 = state_57287__$1;
(statearr_57300_57323[(1)] = (12));

} else {
var statearr_57301_57324 = state_57287__$1;
(statearr_57301_57324[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57288 === (9))){
var inst_57255 = (state_57287[(7)]);
var inst_57273 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57255);
var state_57287__$1 = state_57287;
var statearr_57302_57325 = state_57287__$1;
(statearr_57302_57325[(2)] = inst_57273);

(statearr_57302_57325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57288 === (5))){
var inst_57271 = (state_57287[(2)]);
var state_57287__$1 = state_57287;
if(cljs.core.truth_(inst_57271)){
var statearr_57303_57326 = state_57287__$1;
(statearr_57303_57326[(1)] = (9));

} else {
var statearr_57304_57327 = state_57287__$1;
(statearr_57304_57327[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57288 === (14))){
var inst_57285 = (state_57287[(2)]);
var state_57287__$1 = state_57287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57287__$1,inst_57285);
} else {
if((state_val_57288 === (10))){
var inst_57255 = (state_57287[(7)]);
var state_57287__$1 = state_57287;
var statearr_57305_57328 = state_57287__$1;
(statearr_57305_57328[(2)] = inst_57255);

(statearr_57305_57328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57288 === (8))){
var inst_57268 = (state_57287[(2)]);
var state_57287__$1 = state_57287;
var statearr_57306_57329 = state_57287__$1;
(statearr_57306_57329[(2)] = inst_57268);

(statearr_57306_57329[(1)] = (5));


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
var statearr_57307 = [null,null,null,null,null,null,null,null,null];
(statearr_57307[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__);

(statearr_57307[(1)] = (1));

return statearr_57307;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1 = (function (state_57287){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_57287);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e57308){if((e57308 instanceof Object)){
var ex__41716__auto__ = e57308;
var statearr_57309_57330 = state_57287;
(statearr_57309_57330[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57308;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57331 = state_57287;
state_57287 = G__57331;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__ = function(state_57287){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1.call(this,state_57287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_57310 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_57310[(6)] = c__41735__auto__);

return statearr_57310;
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
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db57311 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db57311 = (function (meta57312){
this.meta57312 = meta57312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db57311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57313,meta57312__$1){
var self__ = this;
var _57313__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db57311(meta57312__$1));
}));

(athens.devcards.db.t_athens$devcards$db57311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57313){
var self__ = this;
var _57313__$1 = this;
return self__.meta57312;
}));

(athens.devcards.db.t_athens$devcards$db57311.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db57311.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__52739__auto__,devcard_opts__52740__auto__){
var self__ = this;
var this__52739__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__52740__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__52758__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__52758__auto__)){
return (function (data_atom__52759__auto__,owner__52760__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__52758__auto__,data_atom__52759__auto__,owner__52760__auto__], null));
});
} else {
return reagent.core.as_element(v__52758__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__52740__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db57311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57312","meta57312",-48927383,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db57311.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db57311.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db57311");

(athens.devcards.db.t_athens$devcards$db57311.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db57311");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db57311.
 */
athens.devcards.db.__GT_t_athens$devcards$db57311 = (function athens$devcards$db$__GT_t_athens$devcards$db57311(meta57312){
return (new athens.devcards.db.t_athens$devcards$db57311(meta57312));
});

}

return (new athens.devcards.db.t_athens$devcards$db57311(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens.devcards.db.new_conn = (function athens$devcards$db$new_conn(){
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.db.schema);
});
athens.devcards.db.posh_conn_BANG_ = (function athens$devcards$db$posh_conn_BANG_(conn){
return (posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1 ? posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1(conn) : posh.reagent.posh_BANG_.call(null,conn));
});

//# sourceMappingURL=athens.devcards.db.js.map
