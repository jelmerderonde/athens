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
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_47030){
var state_val_47031 = (state_47030[(1)]);
if((state_val_47031 === (7))){
var state_47030__$1 = state_47030;
var statearr_47033_47076 = state_47030__$1;
(statearr_47033_47076[(2)] = false);

(statearr_47033_47076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (1))){
var inst_46993 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_46994 = [false];
var inst_46995 = cljs.core.PersistentHashMap.fromArrays(inst_46993,inst_46994);
var inst_46996 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_46995], 0));
var state_47030__$1 = state_47030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47030__$1,(2),inst_46996);
} else {
if((state_val_47031 === (4))){
var state_47030__$1 = state_47030;
var statearr_47035_47077 = state_47030__$1;
(statearr_47035_47077[(2)] = false);

(statearr_47035_47077[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (13))){
var inst_47026 = alert("Failed to retrieve data from GitHub");
var state_47030__$1 = state_47030;
var statearr_47038_47078 = state_47030__$1;
(statearr_47038_47078[(2)] = inst_47026);

(statearr_47038_47078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (6))){
var state_47030__$1 = state_47030;
var statearr_47039_47079 = state_47030__$1;
(statearr_47039_47079[(2)] = true);

(statearr_47039_47079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (3))){
var inst_46998 = (state_47030[(7)]);
var inst_47003 = inst_46998.cljs$lang$protocol_mask$partition0$;
var inst_47004 = (inst_47003 & (64));
var inst_47005 = inst_46998.cljs$core$ISeq$;
var inst_47006 = (cljs.core.PROTOCOL_SENTINEL === inst_47005);
var inst_47007 = ((inst_47004) || (inst_47006));
var state_47030__$1 = state_47030;
if(cljs.core.truth_(inst_47007)){
var statearr_47041_47080 = state_47030__$1;
(statearr_47041_47080[(1)] = (6));

} else {
var statearr_47042_47081 = state_47030__$1;
(statearr_47042_47081[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (12))){
var inst_47021 = (state_47030[(8)]);
var inst_47023 = athens.db.str_to_db_tx(inst_47021);
var inst_47024 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_47023) : posh.reagent.transact_BANG_.call(null,conn,inst_47023));
var state_47030__$1 = state_47030;
var statearr_47044_47082 = state_47030__$1;
(statearr_47044_47082[(2)] = inst_47024);

(statearr_47044_47082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (2))){
var inst_46998 = (state_47030[(7)]);
var inst_46998__$1 = (state_47030[(2)]);
var inst_47000 = (inst_46998__$1 == null);
var inst_47001 = cljs.core.not(inst_47000);
var state_47030__$1 = (function (){var statearr_47045 = state_47030;
(statearr_47045[(7)] = inst_46998__$1);

return statearr_47045;
})();
if(inst_47001){
var statearr_47046_47083 = state_47030__$1;
(statearr_47046_47083[(1)] = (3));

} else {
var statearr_47047_47084 = state_47030__$1;
(statearr_47047_47084[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (11))){
var inst_47019 = (state_47030[(2)]);
var inst_47020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47019,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_47021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47019,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_47030__$1 = (function (){var statearr_47049 = state_47030;
(statearr_47049[(8)] = inst_47021);

return statearr_47049;
})();
if(cljs.core.truth_(inst_47020)){
var statearr_47051_47094 = state_47030__$1;
(statearr_47051_47094[(1)] = (12));

} else {
var statearr_47052_47095 = state_47030__$1;
(statearr_47052_47095[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (9))){
var inst_46998 = (state_47030[(7)]);
var inst_47016 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46998);
var state_47030__$1 = state_47030;
var statearr_47053_47096 = state_47030__$1;
(statearr_47053_47096[(2)] = inst_47016);

(statearr_47053_47096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (5))){
var inst_47014 = (state_47030[(2)]);
var state_47030__$1 = state_47030;
if(cljs.core.truth_(inst_47014)){
var statearr_47054_47097 = state_47030__$1;
(statearr_47054_47097[(1)] = (9));

} else {
var statearr_47055_47098 = state_47030__$1;
(statearr_47055_47098[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (14))){
var inst_47028 = (state_47030[(2)]);
var state_47030__$1 = state_47030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47030__$1,inst_47028);
} else {
if((state_val_47031 === (10))){
var inst_46998 = (state_47030[(7)]);
var state_47030__$1 = state_47030;
var statearr_47056_47099 = state_47030__$1;
(statearr_47056_47099[(2)] = inst_46998);

(statearr_47056_47099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47031 === (8))){
var inst_47011 = (state_47030[(2)]);
var state_47030__$1 = state_47030;
var statearr_47057_47100 = state_47030__$1;
(statearr_47057_47100[(2)] = inst_47011);

(statearr_47057_47100[(1)] = (5));


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
var statearr_47062 = [null,null,null,null,null,null,null,null,null];
(statearr_47062[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__);

(statearr_47062[(1)] = (1));

return statearr_47062;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1 = (function (state_47030){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_47030);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e47063){if((e47063 instanceof Object)){
var ex__39596__auto__ = e47063;
var statearr_47065_47102 = state_47030;
(statearr_47065_47102[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47063;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47103 = state_47030;
state_47030 = G__47103;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__ = function(state_47030){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1.call(this,state_47030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_47066 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_47066[(6)] = c__39615__auto__);

return statearr_47066;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db47067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db47067 = (function (meta47068){
this.meta47068 = meta47068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db47067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47069,meta47068__$1){
var self__ = this;
var _47069__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db47067(meta47068__$1));
}));

(athens.devcards.db.t_athens$devcards$db47067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47069){
var self__ = this;
var _47069__$1 = this;
return self__.meta47068;
}));

(athens.devcards.db.t_athens$devcards$db47067.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db47067.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46778__auto__,devcard_opts__46779__auto__){
var self__ = this;
var this__46778__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46779__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46808__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__46808__auto__)){
return (function (data_atom__46809__auto__,owner__46810__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46808__auto__,data_atom__46809__auto__,owner__46810__auto__], null));
});
} else {
return reagent.core.as_element(v__46808__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46779__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db47067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47068","meta47068",1145938658,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db47067.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db47067.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db47067");

(athens.devcards.db.t_athens$devcards$db47067.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db47067");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db47067.
 */
athens.devcards.db.__GT_t_athens$devcards$db47067 = (function athens$devcards$db$__GT_t_athens$devcards$db47067(meta47068){
return (new athens.devcards.db.t_athens$devcards$db47067(meta47068));
});

}

return (new athens.devcards.db.t_athens$devcards$db47067(null));
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
