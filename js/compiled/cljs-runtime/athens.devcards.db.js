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
var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_54045){
var state_val_54046 = (state_54045[(1)]);
if((state_val_54046 === (7))){
var state_54045__$1 = state_54045;
var statearr_54047_54069 = state_54045__$1;
(statearr_54047_54069[(2)] = false);

(statearr_54047_54069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54046 === (1))){
var inst_54008 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_54009 = [false];
var inst_54010 = cljs.core.PersistentHashMap.fromArrays(inst_54008,inst_54009);
var inst_54011 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54010], 0));
var state_54045__$1 = state_54045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54045__$1,(2),inst_54011);
} else {
if((state_val_54046 === (4))){
var state_54045__$1 = state_54045;
var statearr_54048_54070 = state_54045__$1;
(statearr_54048_54070[(2)] = false);

(statearr_54048_54070[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54046 === (13))){
var inst_54041 = alert("Failed to retrieve data from GitHub");
var state_54045__$1 = state_54045;
var statearr_54049_54071 = state_54045__$1;
(statearr_54049_54071[(2)] = inst_54041);

(statearr_54049_54071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54046 === (6))){
var state_54045__$1 = state_54045;
var statearr_54050_54072 = state_54045__$1;
(statearr_54050_54072[(2)] = true);

(statearr_54050_54072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54046 === (3))){
var inst_54013 = (state_54045[(7)]);
var inst_54018 = inst_54013.cljs$lang$protocol_mask$partition0$;
var inst_54019 = (inst_54018 & (64));
var inst_54020 = inst_54013.cljs$core$ISeq$;
var inst_54021 = (cljs.core.PROTOCOL_SENTINEL === inst_54020);
var inst_54022 = ((inst_54019) || (inst_54021));
var state_54045__$1 = state_54045;
if(cljs.core.truth_(inst_54022)){
var statearr_54051_54073 = state_54045__$1;
(statearr_54051_54073[(1)] = (6));

} else {
var statearr_54052_54074 = state_54045__$1;
(statearr_54052_54074[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54046 === (12))){
var inst_54036 = (state_54045[(8)]);
var inst_54038 = athens.db.str_to_db_tx(inst_54036);
var inst_54039 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_54038) : posh.reagent.transact_BANG_.call(null,conn,inst_54038));
var state_54045__$1 = state_54045;
var statearr_54053_54075 = state_54045__$1;
(statearr_54053_54075[(2)] = inst_54039);

(statearr_54053_54075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54046 === (2))){
var inst_54013 = (state_54045[(7)]);
var inst_54013__$1 = (state_54045[(2)]);
var inst_54015 = (inst_54013__$1 == null);
var inst_54016 = cljs.core.not(inst_54015);
var state_54045__$1 = (function (){var statearr_54054 = state_54045;
(statearr_54054[(7)] = inst_54013__$1);

return statearr_54054;
})();
if(inst_54016){
var statearr_54055_54077 = state_54045__$1;
(statearr_54055_54077[(1)] = (3));

} else {
var statearr_54056_54078 = state_54045__$1;
(statearr_54056_54078[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54046 === (11))){
var inst_54034 = (state_54045[(2)]);
var inst_54035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54034,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_54036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54034,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_54045__$1 = (function (){var statearr_54057 = state_54045;
(statearr_54057[(8)] = inst_54036);

return statearr_54057;
})();
if(cljs.core.truth_(inst_54035)){
var statearr_54058_54079 = state_54045__$1;
(statearr_54058_54079[(1)] = (12));

} else {
var statearr_54059_54080 = state_54045__$1;
(statearr_54059_54080[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54046 === (9))){
var inst_54013 = (state_54045[(7)]);
var inst_54031 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_54013);
var state_54045__$1 = state_54045;
var statearr_54060_54083 = state_54045__$1;
(statearr_54060_54083[(2)] = inst_54031);

(statearr_54060_54083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54046 === (5))){
var inst_54029 = (state_54045[(2)]);
var state_54045__$1 = state_54045;
if(cljs.core.truth_(inst_54029)){
var statearr_54061_54084 = state_54045__$1;
(statearr_54061_54084[(1)] = (9));

} else {
var statearr_54062_54085 = state_54045__$1;
(statearr_54062_54085[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54046 === (14))){
var inst_54043 = (state_54045[(2)]);
var state_54045__$1 = state_54045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54045__$1,inst_54043);
} else {
if((state_val_54046 === (10))){
var inst_54013 = (state_54045[(7)]);
var state_54045__$1 = state_54045;
var statearr_54063_54086 = state_54045__$1;
(statearr_54063_54086[(2)] = inst_54013);

(statearr_54063_54086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54046 === (8))){
var inst_54026 = (state_54045[(2)]);
var state_54045__$1 = state_54045;
var statearr_54064_54088 = state_54045__$1;
(statearr_54064_54088[(2)] = inst_54026);

(statearr_54064_54088[(1)] = (5));


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
var statearr_54065 = [null,null,null,null,null,null,null,null,null];
(statearr_54065[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__);

(statearr_54065[(1)] = (1));

return statearr_54065;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1 = (function (state_54045){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_54045);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e54066){if((e54066 instanceof Object)){
var ex__41716__auto__ = e54066;
var statearr_54067_54089 = state_54045;
(statearr_54067_54089[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54066;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54091 = state_54045;
state_54045 = G__54091;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__ = function(state_54045){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1.call(this,state_54045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_54068 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_54068[(6)] = c__41735__auto__);

return statearr_54068;
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
athens.devcards.db.new_conn = (function athens$devcards$db$new_conn(){
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.db.schema);
});
athens.devcards.db.posh_conn_BANG_ = (function athens$devcards$db$posh_conn_BANG_(conn){
return (posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1 ? posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1(conn) : posh.reagent.posh_BANG_.call(null,conn));
});

//# sourceMappingURL=athens.devcards.db.js.map
