goog.provide('athens.devcards.db_boxes');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('garden.core');
goog.require('reagent.core');
goog.require('sci.core');
athens.devcards.db_boxes.log = console.log;
athens.devcards.db_boxes.trace = (function athens$devcards$db_boxes$trace(x){
(athens.devcards.db_boxes.log.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.log.cljs$core$IFn$_invoke$arity$1(x) : athens.devcards.db_boxes.log.call(null,x));

return x;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  # An experiment in browsing the datascript database",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
athens.devcards.db_boxes.initial_box = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"str-content","str-content",297549190),"(d/q '[:find [(pull ?e [*]) ...]\n            :where [?e :node/title]]\n      @athens/db)"], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.box_state_STAR_ !== 'undefined')){
} else {
athens.devcards.db_boxes.box_state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.initial_box);
}
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__53203){
var map__53204 = p__53203;
var map__53204__$1 = (((((!((map__53204 == null))))?(((((map__53204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53204):map__53204);
var box = map__53204__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53204__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__53206 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e53209){if((e53209 instanceof Error)){
var e = e53209;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e53209;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53206,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53206,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__39615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39570__auto__ = (function (state_53249){
var state_val_53250 = (state_53249[(1)]);
if((state_val_53250 === (7))){
var state_53249__$1 = state_53249;
var statearr_53251_53323 = state_53249__$1;
(statearr_53251_53323[(2)] = false);

(statearr_53251_53323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53250 === (1))){
var inst_53211 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_53212 = [false];
var inst_53213 = cljs.core.PersistentHashMap.fromArrays(inst_53211,inst_53212);
var inst_53214 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_53213], 0));
var state_53249__$1 = state_53249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53249__$1,(2),inst_53214);
} else {
if((state_val_53250 === (4))){
var state_53249__$1 = state_53249;
var statearr_53252_53324 = state_53249__$1;
(statearr_53252_53324[(2)] = false);

(statearr_53252_53324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53250 === (13))){
var inst_53245 = alert("Failed to retrieve data from GitHub");
var state_53249__$1 = state_53249;
var statearr_53253_53325 = state_53249__$1;
(statearr_53253_53325[(2)] = inst_53245);

(statearr_53253_53325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53250 === (6))){
var state_53249__$1 = state_53249;
var statearr_53254_53327 = state_53249__$1;
(statearr_53254_53327[(2)] = true);

(statearr_53254_53327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53250 === (3))){
var inst_53216 = (state_53249[(7)]);
var inst_53221 = inst_53216.cljs$lang$protocol_mask$partition0$;
var inst_53222 = (inst_53221 & (64));
var inst_53223 = inst_53216.cljs$core$ISeq$;
var inst_53224 = (cljs.core.PROTOCOL_SENTINEL === inst_53223);
var inst_53225 = ((inst_53222) || (inst_53224));
var state_53249__$1 = state_53249;
if(cljs.core.truth_(inst_53225)){
var statearr_53255_53329 = state_53249__$1;
(statearr_53255_53329[(1)] = (6));

} else {
var statearr_53256_53330 = state_53249__$1;
(statearr_53256_53330[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53250 === (12))){
var inst_53239 = (state_53249[(8)]);
var inst_53241 = athens.db.str_to_db_tx(inst_53239);
var inst_53242 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_53241);
var inst_53243 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_53249__$1 = (function (){var statearr_53257 = state_53249;
(statearr_53257[(9)] = inst_53242);

return statearr_53257;
})();
var statearr_53258_53331 = state_53249__$1;
(statearr_53258_53331[(2)] = inst_53243);

(statearr_53258_53331[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53250 === (2))){
var inst_53216 = (state_53249[(7)]);
var inst_53216__$1 = (state_53249[(2)]);
var inst_53218 = (inst_53216__$1 == null);
var inst_53219 = cljs.core.not(inst_53218);
var state_53249__$1 = (function (){var statearr_53259 = state_53249;
(statearr_53259[(7)] = inst_53216__$1);

return statearr_53259;
})();
if(inst_53219){
var statearr_53260_53332 = state_53249__$1;
(statearr_53260_53332[(1)] = (3));

} else {
var statearr_53261_53333 = state_53249__$1;
(statearr_53261_53333[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53250 === (11))){
var inst_53237 = (state_53249[(2)]);
var inst_53238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53237,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_53239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53237,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_53249__$1 = (function (){var statearr_53262 = state_53249;
(statearr_53262[(8)] = inst_53239);

return statearr_53262;
})();
if(cljs.core.truth_(inst_53238)){
var statearr_53263_53334 = state_53249__$1;
(statearr_53263_53334[(1)] = (12));

} else {
var statearr_53264_53335 = state_53249__$1;
(statearr_53264_53335[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53250 === (9))){
var inst_53216 = (state_53249[(7)]);
var inst_53234 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_53216);
var state_53249__$1 = state_53249;
var statearr_53265_53340 = state_53249__$1;
(statearr_53265_53340[(2)] = inst_53234);

(statearr_53265_53340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53250 === (5))){
var inst_53232 = (state_53249[(2)]);
var state_53249__$1 = state_53249;
if(cljs.core.truth_(inst_53232)){
var statearr_53266_53342 = state_53249__$1;
(statearr_53266_53342[(1)] = (9));

} else {
var statearr_53267_53343 = state_53249__$1;
(statearr_53267_53343[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53250 === (14))){
var inst_53247 = (state_53249[(2)]);
var state_53249__$1 = state_53249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53249__$1,inst_53247);
} else {
if((state_val_53250 === (10))){
var inst_53216 = (state_53249[(7)]);
var state_53249__$1 = state_53249;
var statearr_53268_53344 = state_53249__$1;
(statearr_53268_53344[(2)] = inst_53216);

(statearr_53268_53344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53250 === (8))){
var inst_53229 = (state_53249[(2)]);
var state_53249__$1 = state_53249;
var statearr_53269_53345 = state_53249__$1;
(statearr_53269_53345[(2)] = inst_53229);

(statearr_53269_53345[(1)] = (5));


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
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto__ = null;
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto____0 = (function (){
var statearr_53270 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53270[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto__);

(statearr_53270[(1)] = (1));

return statearr_53270;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto____1 = (function (state_53249){
while(true){
var ret_value__39572__auto__ = (function (){try{while(true){
var result__39573__auto__ = switch__39570__auto__(state_53249);
if(cljs.core.keyword_identical_QMARK_(result__39573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39573__auto__;
}
break;
}
}catch (e53271){if((e53271 instanceof Object)){
var ex__39574__auto__ = e53271;
var statearr_53272_53349 = state_53249;
(statearr_53272_53349[(5)] = ex__39574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53271;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53350 = state_53249;
state_53249 = G__53350;
continue;
} else {
return ret_value__39572__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto__ = function(state_53249){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto____1.call(this,state_53249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_53273 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_53273[(6)] = c__39615__auto__);

return statearr_53273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39617__auto__);
}));

return c__39615__auto__;
});
athens.devcards.db_boxes.load_real_db_button = (function athens$devcards$db_boxes$load_real_db_button(conn){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db_boxes.load_real_db_BANG_(conn);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes53274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes53274 = (function (meta53275){
this.meta53275 = meta53275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes53274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53276,meta53275__$1){
var self__ = this;
var _53276__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes53274(meta53275__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53276){
var self__ = this;
var _53276__$1 = this;
return self__.meta53275;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53274.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53274.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46709__auto__,devcard_opts__46710__auto__){
var self__ = this;
var this__46709__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46710__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46728__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__46728__auto__)){
return (function (data_atom__46729__auto__,owner__46730__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46728__auto__,data_atom__46729__auto__,owner__46730__auto__], null));
});
} else {
return reagent.core.as_element(v__46728__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46710__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta53275","meta53275",-2015913965,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53274.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53274.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes53274");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53274.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes53274");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes53274.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes53274 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes53274(meta53275){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes53274(meta53275));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes53274(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes53277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes53277 = (function (meta53278){
this.meta53278 = meta53278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes53277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53279,meta53278__$1){
var self__ = this;
var _53279__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes53277(meta53278__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53279){
var self__ = this;
var _53279__$1 = this;
return self__.meta53278;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53277.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53277.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46709__auto__,devcard_opts__46710__auto__){
var self__ = this;
var this__46709__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46710__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46728__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__46728__auto__)){
return (function (data_atom__46729__auto__,owner__46730__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46728__auto__,data_atom__46729__auto__,owner__46730__auto__], null));
});
} else {
return reagent.core.as_element(v__46728__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46710__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta53278","meta53278",-101076583,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53277.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53277.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes53277");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53277.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes53277");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes53277.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes53277 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes53277(meta53278){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes53277(meta53278));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes53277(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.headings = (function athens$devcards$db_boxes$headings(data,mode){
var G__53280 = mode;
var G__53280__$1 = (((G__53280 instanceof cljs.core.Keyword))?G__53280.fqn:null);
switch (G__53280__$1) {
case "coll":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx","val"], null);

break;
case "map":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","val"], null);

break;
case "tuples":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,data))));

break;
case "maps":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53280__$1)].join('')));

}
});
athens.devcards.db_boxes.rows = (function athens$devcards$db_boxes$rows(data,mode){
var G__53281 = mode;
var G__53281__$1 = (((G__53281 instanceof cljs.core.Keyword))?G__53281.fqn:null);
switch (G__53281__$1) {
case "coll":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),x], null);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,data));

break;
case "map":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53282){
var vec__53283 = p__53282;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53283,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53283,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),k], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),v,new cljs.core.Keyword(null,"attr","attr",-604132353),k], null)], null);
}),data);

break;
case "tuples":
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),idx], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),x], null);
}),v));
}),data);

break;
case "maps":
var hs = athens.devcards.db_boxes.headings(data,mode);
var iter__4582__auto__ = (function athens$devcards$db_boxes$rows_$_iter__53286(s__53287){
return (new cljs.core.LazySeq(null,(function (){
var s__53287__$1 = s__53287;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53287__$1);
if(temp__5735__auto__){
var s__53287__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53287__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53287__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53289 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53288 = (0);
while(true){
if((i__53288 < size__4581__auto__)){
var row_idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53288);
cljs.core.chunk_append(b__53289,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),row_idx], null)], null),(function (){var iter__4582__auto__ = ((function (i__53288,row_idx,c__4580__auto__,size__4581__auto__,b__53289,s__53287__$2,temp__5735__auto__,hs,G__53281,G__53281__$1){
return (function athens$devcards$db_boxes$rows_$_iter__53286_$_iter__53290(s__53291){
return (new cljs.core.LazySeq(null,((function (i__53288,row_idx,c__4580__auto__,size__4581__auto__,b__53289,s__53287__$2,temp__5735__auto__,hs,G__53281,G__53281__$1){
return (function (){
var s__53291__$1 = s__53291;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__53291__$1);
if(temp__5735__auto____$1){
var s__53291__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53291__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__53291__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__53293 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__53292 = (0);
while(true){
if((i__53292 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__53292);
cljs.core.chunk_append(b__53293,(function (){var temp__5735__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,h], null));
if(cljs.core.truth_(temp__5735__auto____$2)){
var item = temp__5735__auto____$2;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"attr","attr",-604132353),h], null);
} else {
return null;
}
})());

var G__53353 = (i__53292 + (1));
i__53292 = G__53353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53293),athens$devcards$db_boxes$rows_$_iter__53286_$_iter__53290(cljs.core.chunk_rest(s__53291__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53293),null);
}
} else {
var h = cljs.core.first(s__53291__$2);
return cljs.core.cons((function (){var temp__5735__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,h], null));
if(cljs.core.truth_(temp__5735__auto____$2)){
var item = temp__5735__auto____$2;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"attr","attr",-604132353),h], null);
} else {
return null;
}
})(),athens$devcards$db_boxes$rows_$_iter__53286_$_iter__53290(cljs.core.rest(s__53291__$2)));
}
} else {
return null;
}
break;
}
});})(i__53288,row_idx,c__4580__auto__,size__4581__auto__,b__53289,s__53287__$2,temp__5735__auto__,hs,G__53281,G__53281__$1))
,null,null));
});})(i__53288,row_idx,c__4580__auto__,size__4581__auto__,b__53289,s__53287__$2,temp__5735__auto__,hs,G__53281,G__53281__$1))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__53354 = (i__53288 + (1));
i__53288 = G__53354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53289),athens$devcards$db_boxes$rows_$_iter__53286(cljs.core.chunk_rest(s__53287__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53289),null);
}
} else {
var row_idx = cljs.core.first(s__53287__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item","item",249373802),row_idx], null)], null),(function (){var iter__4582__auto__ = ((function (row_idx,s__53287__$2,temp__5735__auto__,hs,G__53281,G__53281__$1){
return (function athens$devcards$db_boxes$rows_$_iter__53286_$_iter__53294(s__53295){
return (new cljs.core.LazySeq(null,(function (){
var s__53295__$1 = s__53295;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__53295__$1);
if(temp__5735__auto____$1){
var s__53295__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53295__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53295__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53297 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53296 = (0);
while(true){
if((i__53296 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53296);
cljs.core.chunk_append(b__53297,(function (){var temp__5735__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,h], null));
if(cljs.core.truth_(temp__5735__auto____$2)){
var item = temp__5735__auto____$2;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"attr","attr",-604132353),h], null);
} else {
return null;
}
})());

var G__53355 = (i__53296 + (1));
i__53296 = G__53355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53297),athens$devcards$db_boxes$rows_$_iter__53286_$_iter__53294(cljs.core.chunk_rest(s__53295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53297),null);
}
} else {
var h = cljs.core.first(s__53295__$2);
return cljs.core.cons((function (){var temp__5735__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,h], null));
if(cljs.core.truth_(temp__5735__auto____$2)){
var item = temp__5735__auto____$2;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"attr","attr",-604132353),h], null);
} else {
return null;
}
})(),athens$devcards$db_boxes$rows_$_iter__53286_$_iter__53294(cljs.core.rest(s__53295__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_idx,s__53287__$2,temp__5735__auto__,hs,G__53281,G__53281__$1))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$devcards$db_boxes$rows_$_iter__53286(cljs.core.rest(s__53287__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53281__$1)].join('')));

}
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__53298_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53298_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(id){
return ["(d/pull @athens/db '[*] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),")"].join('');
});
athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__53299){
var map__53300 = p__53299;
var map__53300__$1 = (((((!((map__53300 == null))))?(((((map__53300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53300):map__53300);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53300__$1,new cljs.core.Keyword(null,"item","item",249373802));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53300__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_box_BANG_(athens.devcards.db_boxes.pull_entity_str(item));
})], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)], null);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(item);
}
});
athens.devcards.db_boxes.table_view = (function athens$devcards$db_boxes$table_view(data,mode){
var hs = athens.devcards.db_boxes.headings(data,mode);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__53302(s__53303){
return (new cljs.core.LazySeq(null,(function (){
var s__53303__$1 = s__53303;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53303__$1);
if(temp__5735__auto__){
var s__53303__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53303__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53303__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53305 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53304 = (0);
while(true){
if((i__53304 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53304);
cljs.core.chunk_append(b__53305,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null));

var G__53356 = (i__53304 + (1));
i__53304 = G__53356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53305),athens$devcards$db_boxes$table_view_$_iter__53302(cljs.core.chunk_rest(s__53303__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53305),null);
}
} else {
var h = cljs.core.first(s__53303__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),athens$devcards$db_boxes$table_view_$_iter__53302(cljs.core.rest(s__53303__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__53306(s__53307){
return (new cljs.core.LazySeq(null,(function (){
var s__53307__$1 = s__53307;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53307__$1);
if(temp__5735__auto__){
var s__53307__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53307__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53307__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53309 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53308 = (0);
while(true){
if((i__53308 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53308);
cljs.core.chunk_append(b__53309,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__53308,row,c__4580__auto__,size__4581__auto__,b__53309,s__53307__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$table_view_$_iter__53306_$_iter__53310(s__53311){
return (new cljs.core.LazySeq(null,((function (i__53308,row,c__4580__auto__,size__4581__auto__,b__53309,s__53307__$2,temp__5735__auto__,hs){
return (function (){
var s__53311__$1 = s__53311;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__53311__$1);
if(temp__5735__auto____$1){
var s__53311__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53311__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__53311__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__53313 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__53312 = (0);
while(true){
if((i__53312 < size__4581__auto____$1)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__53312);
cljs.core.chunk_append(b__53313,(cljs.core.truth_(item)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.devcards.db_boxes.cell(item)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),""], null)));

var G__53357 = (i__53312 + (1));
i__53312 = G__53357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53313),athens$devcards$db_boxes$table_view_$_iter__53306_$_iter__53310(cljs.core.chunk_rest(s__53311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53313),null);
}
} else {
var item = cljs.core.first(s__53311__$2);
return cljs.core.cons((cljs.core.truth_(item)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.devcards.db_boxes.cell(item)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),""], null)),athens$devcards$db_boxes$table_view_$_iter__53306_$_iter__53310(cljs.core.rest(s__53311__$2)));
}
} else {
return null;
}
break;
}
});})(i__53308,row,c__4580__auto__,size__4581__auto__,b__53309,s__53307__$2,temp__5735__auto__,hs))
,null,null));
});})(i__53308,row,c__4580__auto__,size__4581__auto__,b__53309,s__53307__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(row);
})()], null));

var G__53358 = (i__53308 + (1));
i__53308 = G__53358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53309),athens$devcards$db_boxes$table_view_$_iter__53306(cljs.core.chunk_rest(s__53307__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53309),null);
}
} else {
var row = cljs.core.first(s__53307__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__53307__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$table_view_$_iter__53306_$_iter__53314(s__53315){
return (new cljs.core.LazySeq(null,(function (){
var s__53315__$1 = s__53315;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__53315__$1);
if(temp__5735__auto____$1){
var s__53315__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53315__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53315__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53317 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53316 = (0);
while(true){
if((i__53316 < size__4581__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__53316);
cljs.core.chunk_append(b__53317,(cljs.core.truth_(item)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.devcards.db_boxes.cell(item)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),""], null)));

var G__53359 = (i__53316 + (1));
i__53316 = G__53359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53317),athens$devcards$db_boxes$table_view_$_iter__53306_$_iter__53314(cljs.core.chunk_rest(s__53315__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53317),null);
}
} else {
var item = cljs.core.first(s__53315__$2);
return cljs.core.cons((cljs.core.truth_(item)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.devcards.db_boxes.cell(item)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),""], null)),athens$devcards$db_boxes$table_view_$_iter__53306_$_iter__53314(cljs.core.rest(s__53315__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__53307__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(row);
})()], null),athens$devcards$db_boxes$table_view_$_iter__53306(cljs.core.rest(s__53307__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(athens.devcards.db_boxes.rows(data,mode));
})()], null);
});
athens.devcards.db_boxes.coll_of_maps_QMARK_ = (function athens$devcards$db_boxes$coll_of_maps_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,x)));
});
athens.devcards.db_boxes.tuples_QMARK_ = (function athens$devcards$db_boxes$tuples_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.coll_QMARK_,x)));
});
athens.devcards.db_boxes.browser_component = (function athens$devcards$db_boxes$browser_component(result){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((athens.devcards.db_boxes.coll_of_maps_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"maps","maps",-1711561134)):((cljs.core.map_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"map","map",1371690461)):((athens.devcards.db_boxes.tuples_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"tuples","tuples",-676032639)):((cljs.core.coll_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"coll","coll",1647737163)):cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)
))))], null);
});
athens.devcards.db_boxes.error_component = (function athens$devcards$db_boxes$error_component(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
});
athens.devcards.db_boxes.handle_box_change_BANG_ = (function athens$devcards$db_boxes$handle_box_change_BANG_(e){
var value = e.target.value;
return athens.devcards.db_boxes.update_box_BANG_(value);
});
athens.devcards.db_boxes.box_component = (function athens$devcards$db_boxes$box_component(){
var map__53318 = cljs.core.deref(athens.devcards.db_boxes.box_state_STAR_);
var map__53318__$1 = (((((!((map__53318 == null))))?(((((map__53318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53318):map__53318);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53318__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53318__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53318__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null)], null),((cljs.core.not(error))?athens.devcards.db_boxes.browser_component(result):athens.devcards.db_boxes.error_component(result))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"box","box",1530920394)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes53320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes53320 = (function (meta53321){
this.meta53321 = meta53321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes53320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53322,meta53321__$1){
var self__ = this;
var _53322__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes53320(meta53321__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53322){
var self__ = this;
var _53322__$1 = this;
return self__.meta53321;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53320.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53320.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46709__auto__,devcard_opts__46710__auto__){
var self__ = this;
var this__46709__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__46710__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__46728__auto__ = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.box_component], null);
})()
;
if(cljs.core.fn_QMARK_(v__46728__auto__)){
return (function (data_atom__46729__auto__,owner__46730__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__46728__auto__,data_atom__46729__auto__,owner__46730__auto__], null));
});
} else {
return reagent.core.as_element(v__46728__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__46710__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta53321","meta53321",-1960279627,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53320.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53320.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes53320");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes53320.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes53320");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes53320.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes53320 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes53320(meta53321){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes53320(meta53321));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes53320(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
