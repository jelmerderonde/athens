goog.provide('athens.devcards.db');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('reagent.core');
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(conn){
var c__39615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_49093){
var state_val_49094 = (state_49093[(1)]);
if((state_val_49094 === (7))){
var state_49093__$1 = state_49093;
var statearr_49096_49158 = state_49093__$1;
(statearr_49096_49158[(2)] = false);

(statearr_49096_49158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49094 === (1))){
var inst_49056 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_49057 = [false];
var inst_49058 = cljs.core.PersistentHashMap.fromArrays(inst_49056,inst_49057);
var inst_49059 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49058], 0));
var state_49093__$1 = state_49093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49093__$1,(2),inst_49059);
} else {
if((state_val_49094 === (4))){
var state_49093__$1 = state_49093;
var statearr_49097_49159 = state_49093__$1;
(statearr_49097_49159[(2)] = false);

(statearr_49097_49159[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49094 === (13))){
var inst_49089 = alert("Failed to retrieve data from GitHub");
var state_49093__$1 = state_49093;
var statearr_49098_49160 = state_49093__$1;
(statearr_49098_49160[(2)] = inst_49089);

(statearr_49098_49160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49094 === (6))){
var state_49093__$1 = state_49093;
var statearr_49099_49161 = state_49093__$1;
(statearr_49099_49161[(2)] = true);

(statearr_49099_49161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49094 === (3))){
var inst_49061 = (state_49093[(7)]);
var inst_49066 = inst_49061.cljs$lang$protocol_mask$partition0$;
var inst_49067 = (inst_49066 & (64));
var inst_49068 = inst_49061.cljs$core$ISeq$;
var inst_49069 = (cljs.core.PROTOCOL_SENTINEL === inst_49068);
var inst_49070 = ((inst_49067) || (inst_49069));
var state_49093__$1 = state_49093;
if(cljs.core.truth_(inst_49070)){
var statearr_49100_49162 = state_49093__$1;
(statearr_49100_49162[(1)] = (6));

} else {
var statearr_49101_49163 = state_49093__$1;
(statearr_49101_49163[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49094 === (12))){
var inst_49084 = (state_49093[(8)]);
var inst_49086 = athens.db.str_to_db_tx(inst_49084);
var inst_49087 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_49086) : posh.reagent.transact_BANG_.call(null,conn,inst_49086));
var state_49093__$1 = state_49093;
var statearr_49102_49164 = state_49093__$1;
(statearr_49102_49164[(2)] = inst_49087);

(statearr_49102_49164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49094 === (2))){
var inst_49061 = (state_49093[(7)]);
var inst_49061__$1 = (state_49093[(2)]);
var inst_49063 = (inst_49061__$1 == null);
var inst_49064 = cljs.core.not(inst_49063);
var state_49093__$1 = (function (){var statearr_49103 = state_49093;
(statearr_49103[(7)] = inst_49061__$1);

return statearr_49103;
})();
if(inst_49064){
var statearr_49114_49165 = state_49093__$1;
(statearr_49114_49165[(1)] = (3));

} else {
var statearr_49115_49166 = state_49093__$1;
(statearr_49115_49166[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49094 === (11))){
var inst_49082 = (state_49093[(2)]);
var inst_49083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49082,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_49084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49082,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_49093__$1 = (function (){var statearr_49117 = state_49093;
(statearr_49117[(8)] = inst_49084);

return statearr_49117;
})();
if(cljs.core.truth_(inst_49083)){
var statearr_49118_49167 = state_49093__$1;
(statearr_49118_49167[(1)] = (12));

} else {
var statearr_49119_49168 = state_49093__$1;
(statearr_49119_49168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49094 === (9))){
var inst_49061 = (state_49093[(7)]);
var inst_49079 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49061);
var state_49093__$1 = state_49093;
var statearr_49120_49169 = state_49093__$1;
(statearr_49120_49169[(2)] = inst_49079);

(statearr_49120_49169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49094 === (5))){
var inst_49077 = (state_49093[(2)]);
var state_49093__$1 = state_49093;
if(cljs.core.truth_(inst_49077)){
var statearr_49122_49170 = state_49093__$1;
(statearr_49122_49170[(1)] = (9));

} else {
var statearr_49123_49171 = state_49093__$1;
(statearr_49123_49171[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49094 === (14))){
var inst_49091 = (state_49093[(2)]);
var state_49093__$1 = state_49093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49093__$1,inst_49091);
} else {
if((state_val_49094 === (10))){
var inst_49061 = (state_49093[(7)]);
var state_49093__$1 = state_49093;
var statearr_49125_49172 = state_49093__$1;
(statearr_49125_49172[(2)] = inst_49061);

(statearr_49125_49172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49094 === (8))){
var inst_49074 = (state_49093[(2)]);
var state_49093__$1 = state_49093;
var statearr_49126_49173 = state_49093__$1;
(statearr_49126_49173[(2)] = inst_49074);

(statearr_49126_49173[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0 = (function (){
var statearr_49127 = [null,null,null,null,null,null,null,null,null];
(statearr_49127[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__);

(statearr_49127[(1)] = (1));

return statearr_49127;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1 = (function (state_49093){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_49093);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e49128){if((e49128 instanceof Object)){
var ex__39596__auto__ = e49128;
var statearr_49130_49176 = state_49093;
(statearr_49130_49176[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49128;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49177 = state_49093;
state_49093 = G__49177;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__ = function(state_49093){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1.call(this,state_49093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_49134 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_49134[(6)] = c__39615__auto__);

return statearr_49134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39617__auto__);
}));

return c__39615__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(conn){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_(conn);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db49150 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db49150 = (function (meta49151){
this.meta49151 = meta49151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db49150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49152,meta49151__$1){
var self__ = this;
var _49152__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db49150(meta49151__$1));
}));

(athens.devcards.db.t_athens$devcards$db49150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49152){
var self__ = this;
var _49152__$1 = this;
return self__.meta49151;
}));

(athens.devcards.db.t_athens$devcards$db49150.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db49150.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db49150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49151","meta49151",606042467,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db49150.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db49150.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db49150");

(athens.devcards.db.t_athens$devcards$db49150.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db49150");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db49150.
 */
athens.devcards.db.__GT_t_athens$devcards$db49150 = (function athens$devcards$db$__GT_t_athens$devcards$db49150(meta49151){
return (new athens.devcards.db.t_athens$devcards$db49150(meta49151));
});

}

return (new athens.devcards.db.t_athens$devcards$db49150(null));
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
