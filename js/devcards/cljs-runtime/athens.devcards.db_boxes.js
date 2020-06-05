goog.provide('athens.devcards.db_boxes');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('garden.core');
goog.require('reagent.core');
goog.require('sci.core');
athens.devcards.db_boxes.key_code__GT_key = new cljs.core.PersistentArrayMap(null, 3, [(8),new cljs.core.Keyword(null,"backspace","backspace",-696007848),(9),new cljs.core.Keyword(null,"tab","tab",-559583621),(13),new cljs.core.Keyword(null,"return","return",-1891502105)], null);
athens.devcards.db_boxes.log = console.log;
athens.devcards.db_boxes.trace = (function athens$devcards$db_boxes$trace(x){
(athens.devcards.db_boxes.log.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.log.cljs$core$IFn$_invoke$arity$1(x) : athens.devcards.db_boxes.log.call(null,x));

return x;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  # An experiment in browsing the datascript database\n\n  You can use these devcards to explore the Athens datascript database.\n\n  Initial data:\n  - Start by loading initial data with the \"Load Real Data\" button.\n  - This will load some sample datoms from the ego.datoms file\n\n  Executing queries:\n  - The browse-box uses [sci](https://github.com/borkdude/sci) to execute datascript queries.\n  - In addition to the (non-side-effecting) clojure.core functions, the following bindings are available:\n  - `athens/db` -> the datascript connection, dereference (`@`) to get the current database value\n  - `d/q` -> for querying the database\n  - `d/pull` -> pull one or more attributes of an entity, returns a map\n  - `d/pull-many` -> like `d/pull`, but pulls many entities at once\n  - Execute the query by pressing `shift-enter`\n\n  Browsing:\n  - The browser is a simple html table translating the query result into rows and cells.\n  - Browsing is possible if you've used a pull expression (in a query or with `d/pull` or `d/pull-many`).\n  - If you click a link, it will generate a new query and evaluate it.\n\n  History:\n  - Devcards keeps a history for us. Use the arrows at the bottom to navigate back to earlier states.\n\n  Possible improvements:\n  - Right now navigation is only possible by using a pull expression. By analysing queries it might also be possible for all other queries.\n  - No transctions are currently allowed, but this can easily be changed by adding `d/transact` to sci's bindings.\n  - There is absolutely no styling, some minimal styling would probably make reading the table easier.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
athens.devcards.db_boxes.initial_box = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"str-content","str-content",297549190),"(d/q '[:find [(pull ?e [*]) ...]\n       :where [?e :node/title]]\n    @athens/db)",new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.box_state_STAR_ !== 'undefined')){
} else {
athens.devcards.db_boxes.box_state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.initial_box);
}
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__80000){
var map__80001 = p__80000;
var map__80001__$1 = (((((!((map__80001 == null))))?(((((map__80001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80001):map__80001);
var box = map__80001__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80001__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__80003 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e80006){if((e80006 instanceof Error)){
var e = e80006;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e80006;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80003,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80003,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__80007_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__80007_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.increase_limit_BANG_ = (function athens$devcards$db_boxes$increase_limit_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.db_boxes.box_state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(10)], 0));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__39615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39570__auto__ = (function (state_80047){
var state_val_80048 = (state_80047[(1)]);
if((state_val_80048 === (7))){
var state_80047__$1 = state_80047;
var statearr_80049_80156 = state_80047__$1;
(statearr_80049_80156[(2)] = false);

(statearr_80049_80156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80048 === (1))){
var inst_80009 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_80010 = [false];
var inst_80011 = cljs.core.PersistentHashMap.fromArrays(inst_80009,inst_80010);
var inst_80012 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_80011], 0));
var state_80047__$1 = state_80047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80047__$1,(2),inst_80012);
} else {
if((state_val_80048 === (4))){
var state_80047__$1 = state_80047;
var statearr_80050_80157 = state_80047__$1;
(statearr_80050_80157[(2)] = false);

(statearr_80050_80157[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80048 === (13))){
var inst_80043 = alert("Failed to retrieve data from GitHub");
var state_80047__$1 = state_80047;
var statearr_80051_80158 = state_80047__$1;
(statearr_80051_80158[(2)] = inst_80043);

(statearr_80051_80158[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80048 === (6))){
var state_80047__$1 = state_80047;
var statearr_80052_80159 = state_80047__$1;
(statearr_80052_80159[(2)] = true);

(statearr_80052_80159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80048 === (3))){
var inst_80014 = (state_80047[(7)]);
var inst_80019 = inst_80014.cljs$lang$protocol_mask$partition0$;
var inst_80020 = (inst_80019 & (64));
var inst_80021 = inst_80014.cljs$core$ISeq$;
var inst_80022 = (cljs.core.PROTOCOL_SENTINEL === inst_80021);
var inst_80023 = ((inst_80020) || (inst_80022));
var state_80047__$1 = state_80047;
if(cljs.core.truth_(inst_80023)){
var statearr_80053_80165 = state_80047__$1;
(statearr_80053_80165[(1)] = (6));

} else {
var statearr_80054_80166 = state_80047__$1;
(statearr_80054_80166[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80048 === (12))){
var inst_80037 = (state_80047[(8)]);
var inst_80039 = athens.db.str_to_db_tx(inst_80037);
var inst_80040 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_80039);
var inst_80041 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_80047__$1 = (function (){var statearr_80055 = state_80047;
(statearr_80055[(9)] = inst_80040);

return statearr_80055;
})();
var statearr_80056_80167 = state_80047__$1;
(statearr_80056_80167[(2)] = inst_80041);

(statearr_80056_80167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80048 === (2))){
var inst_80014 = (state_80047[(7)]);
var inst_80014__$1 = (state_80047[(2)]);
var inst_80016 = (inst_80014__$1 == null);
var inst_80017 = cljs.core.not(inst_80016);
var state_80047__$1 = (function (){var statearr_80057 = state_80047;
(statearr_80057[(7)] = inst_80014__$1);

return statearr_80057;
})();
if(inst_80017){
var statearr_80058_80168 = state_80047__$1;
(statearr_80058_80168[(1)] = (3));

} else {
var statearr_80059_80169 = state_80047__$1;
(statearr_80059_80169[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80048 === (11))){
var inst_80035 = (state_80047[(2)]);
var inst_80036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_80035,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_80037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_80035,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_80047__$1 = (function (){var statearr_80060 = state_80047;
(statearr_80060[(8)] = inst_80037);

return statearr_80060;
})();
if(cljs.core.truth_(inst_80036)){
var statearr_80061_80173 = state_80047__$1;
(statearr_80061_80173[(1)] = (12));

} else {
var statearr_80062_80174 = state_80047__$1;
(statearr_80062_80174[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80048 === (9))){
var inst_80014 = (state_80047[(7)]);
var inst_80032 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_80014);
var state_80047__$1 = state_80047;
var statearr_80063_80175 = state_80047__$1;
(statearr_80063_80175[(2)] = inst_80032);

(statearr_80063_80175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80048 === (5))){
var inst_80030 = (state_80047[(2)]);
var state_80047__$1 = state_80047;
if(cljs.core.truth_(inst_80030)){
var statearr_80064_80176 = state_80047__$1;
(statearr_80064_80176[(1)] = (9));

} else {
var statearr_80065_80177 = state_80047__$1;
(statearr_80065_80177[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80048 === (14))){
var inst_80045 = (state_80047[(2)]);
var state_80047__$1 = state_80047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80047__$1,inst_80045);
} else {
if((state_val_80048 === (10))){
var inst_80014 = (state_80047[(7)]);
var state_80047__$1 = state_80047;
var statearr_80066_80178 = state_80047__$1;
(statearr_80066_80178[(2)] = inst_80014);

(statearr_80066_80178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80048 === (8))){
var inst_80027 = (state_80047[(2)]);
var state_80047__$1 = state_80047;
var statearr_80067_80179 = state_80047__$1;
(statearr_80067_80179[(2)] = inst_80027);

(statearr_80067_80179[(1)] = (5));


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
var statearr_80068 = [null,null,null,null,null,null,null,null,null,null];
(statearr_80068[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto__);

(statearr_80068[(1)] = (1));

return statearr_80068;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto____1 = (function (state_80047){
while(true){
var ret_value__39572__auto__ = (function (){try{while(true){
var result__39573__auto__ = switch__39570__auto__(state_80047);
if(cljs.core.keyword_identical_QMARK_(result__39573__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39573__auto__;
}
break;
}
}catch (e80069){if((e80069 instanceof Object)){
var ex__39574__auto__ = e80069;
var statearr_80070_80180 = state_80047;
(statearr_80070_80180[(5)] = ex__39574__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_80047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80069;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80181 = state_80047;
state_80047 = G__80181;
continue;
} else {
return ret_value__39572__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto__ = function(state_80047){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto____1.call(this,state_80047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39571__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_80071 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_80071[(6)] = c__39615__auto__);

return statearr_80071;
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes80072 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes80072 = (function (meta80073){
this.meta80073 = meta80073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes80072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80074,meta80073__$1){
var self__ = this;
var _80074__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes80072(meta80073__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80074){
var self__ = this;
var _80074__$1 = this;
return self__.meta80073;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80072.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80072.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47392__auto__,devcard_opts__47393__auto__){
var self__ = this;
var this__47392__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47393__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47411__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__47411__auto__)){
return (function (data_atom__47412__auto__,owner__47413__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47411__auto__,data_atom__47412__auto__,owner__47413__auto__], null));
});
} else {
return reagent.core.as_element(v__47411__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47393__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta80073","meta80073",-1289844996,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80072.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80072.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes80072");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80072.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes80072");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes80072.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes80072 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes80072(meta80073){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes80072(meta80073));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes80072(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes80075 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes80075 = (function (meta80076){
this.meta80076 = meta80076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes80075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80077,meta80076__$1){
var self__ = this;
var _80077__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes80075(meta80076__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80077){
var self__ = this;
var _80077__$1 = this;
return self__.meta80076;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80075.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80075.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47392__auto__,devcard_opts__47393__auto__){
var self__ = this;
var this__47392__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47393__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47411__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__47411__auto__)){
return (function (data_atom__47412__auto__,owner__47413__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47411__auto__,data_atom__47412__auto__,owner__47413__auto__], null));
});
} else {
return reagent.core.as_element(v__47411__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47393__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta80076","meta80076",1876350975,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80075.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80075.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes80075");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80075.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes80075");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes80075.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes80075 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes80075(meta80076){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes80075(meta80076));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes80075(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.headings = (function athens$devcards$db_boxes$headings(data,mode){
var G__80078 = mode;
var G__80078__$1 = (((G__80078 instanceof cljs.core.Keyword))?G__80078.fqn:null);
switch (G__80078__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80078__$1)].join('')));

}
});
athens.devcards.db_boxes.coll_rows = (function athens$devcards$db_boxes$coll_rows(coll){
var row = (function (p__80079){
var vec__80080 = p__80079;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80080,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80080,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll));
});
athens.devcards.db_boxes.map_rows = (function athens$devcards$db_boxes$map_rows(m){
var row = (function (p__80083){
var vec__80084 = p__80083;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80084,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80084,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"key",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,m);
});
athens.devcards.db_boxes.tuple_rows = (function athens$devcards$db_boxes$tuple_rows(tuples){
var row = (function (p__80087){
var vec__80088 = p__80087;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80088,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80088,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (heading,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
}),values));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tuples));
});
athens.devcards.db_boxes.maps_rows = (function athens$devcards$db_boxes$maps_rows(ms){
var hs = athens.devcards.db_boxes.headings(ms,new cljs.core.Keyword(null,"maps","maps",-1711561134));
var iter__4582__auto__ = (function athens$devcards$db_boxes$maps_rows_$_iter__80091(s__80092){
return (new cljs.core.LazySeq(null,(function (){
var s__80092__$1 = s__80092;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__80092__$1);
if(temp__5735__auto__){
var s__80092__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80092__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__80092__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__80094 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__80093 = (0);
while(true){
if((i__80093 < size__4581__auto__)){
var idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__80093);
cljs.core.chunk_append(b__80094,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (i__80093,idx,c__4580__auto__,size__4581__auto__,b__80094,s__80092__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$maps_rows_$_iter__80091_$_iter__80095(s__80096){
return (new cljs.core.LazySeq(null,((function (i__80093,idx,c__4580__auto__,size__4581__auto__,b__80094,s__80092__$2,temp__5735__auto__,hs){
return (function (){
var s__80096__$1 = s__80096;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__80096__$1);
if(temp__5735__auto____$1){
var s__80096__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__80096__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__80096__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__80098 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__80097 = (0);
while(true){
if((i__80097 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__80097);
cljs.core.chunk_append(b__80098,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__80183 = (i__80097 + (1));
i__80097 = G__80183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80098),athens$devcards$db_boxes$maps_rows_$_iter__80091_$_iter__80095(cljs.core.chunk_rest(s__80096__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80098),null);
}
} else {
var h = cljs.core.first(s__80096__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$db_boxes$maps_rows_$_iter__80091_$_iter__80095(cljs.core.rest(s__80096__$2)));
}
} else {
return null;
}
break;
}
});})(i__80093,idx,c__4580__auto__,size__4581__auto__,b__80094,s__80092__$2,temp__5735__auto__,hs))
,null,null));
});})(i__80093,idx,c__4580__auto__,size__4581__auto__,b__80094,s__80092__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__80184 = (i__80093 + (1));
i__80093 = G__80184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80094),athens$devcards$db_boxes$maps_rows_$_iter__80091(cljs.core.chunk_rest(s__80092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80094),null);
}
} else {
var idx = cljs.core.first(s__80092__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (idx,s__80092__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$maps_rows_$_iter__80091_$_iter__80099(s__80100){
return (new cljs.core.LazySeq(null,(function (){
var s__80100__$1 = s__80100;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__80100__$1);
if(temp__5735__auto____$1){
var s__80100__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__80100__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__80100__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__80102 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__80101 = (0);
while(true){
if((i__80101 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__80101);
cljs.core.chunk_append(b__80102,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__80185 = (i__80101 + (1));
i__80101 = G__80185;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80102),athens$devcards$db_boxes$maps_rows_$_iter__80091_$_iter__80099(cljs.core.chunk_rest(s__80100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80102),null);
}
} else {
var h = cljs.core.first(s__80100__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$db_boxes$maps_rows_$_iter__80091_$_iter__80099(cljs.core.rest(s__80100__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(idx,s__80092__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$devcards$db_boxes$maps_rows_$_iter__80091(cljs.core.rest(s__80092__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms)));
});
athens.devcards.db_boxes.get_rows = (function athens$devcards$db_boxes$get_rows(data,mode){
var G__80103 = mode;
var G__80103__$1 = (((G__80103 instanceof cljs.core.Keyword))?G__80103.fqn:null);
switch (G__80103__$1) {
case "coll":
return athens.devcards.db_boxes.coll_rows(data);

break;
case "map":
return athens.devcards.db_boxes.map_rows(data);

break;
case "tuples":
return athens.devcards.db_boxes.tuple_rows(data);

break;
case "maps":
return athens.devcards.db_boxes.maps_rows(data);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80103__$1)].join('')));

}
});
athens.devcards.db_boxes.attr_unique_QMARK_ = (function athens$devcards$db_boxes$attr_unique_QMARK_(attr){
return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.db.schema,attr),new cljs.core.Keyword("db","unique","db/unique",329396388));
});
athens.devcards.db_boxes.attr_many_QMARK_ = (function athens$devcards$db_boxes$attr_many_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
athens.devcards.db_boxes.attr_ref_QMARK_ = (function athens$devcards$db_boxes$attr_ref_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__80105 = arguments.length;
switch (G__80105) {
case 1:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1 = (function (id){
return ["(d/pull @athens/db '[*] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),")"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2 = (function (attr,id){
return ["(d/pull @athens/db '[*] [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),"])"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$lang$maxFixedArity = 2);

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__80106){
var map__80107 = p__80106;
var map__80107__$1 = (((((!((map__80107 == null))))?(((((map__80107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80107):map__80107);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80107__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80107__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80107__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(value)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return value;
}
})()));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(athens.devcards.db_boxes.attr_unique_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2(attr,value));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(((athens.devcards.db_boxes.attr_many_QMARK_(attr)) && (athens.devcards.db_boxes.attr_ref_QMARK_(attr)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__80109(s__80110){
return (new cljs.core.LazySeq(null,(function (){
var s__80110__$1 = s__80110;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__80110__$1);
if(temp__5735__auto__){
var s__80110__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80110__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__80110__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__80112 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__80111 = (0);
while(true){
if((i__80111 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__80111);
cljs.core.chunk_append(b__80112,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__80113 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__80113) : athens.devcards.db_boxes.cell.call(null,G__80113));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__80188 = (i__80111 + (1));
i__80111 = G__80188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80112),athens$devcards$db_boxes$cell_$_iter__80109(cljs.core.chunk_rest(s__80110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80112),null);
}
} else {
var v = cljs.core.first(s__80110__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__80114 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__80114) : athens.devcards.db_boxes.cell.call(null,G__80114));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__80109(cljs.core.rest(s__80110__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
if(athens.devcards.db_boxes.attr_many_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__80115(s__80116){
return (new cljs.core.LazySeq(null,(function (){
var s__80116__$1 = s__80116;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__80116__$1);
if(temp__5735__auto__){
var s__80116__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80116__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__80116__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__80118 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__80117 = (0);
while(true){
if((i__80117 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__80117);
cljs.core.chunk_append(b__80118,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__80119 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__80119) : athens.devcards.db_boxes.cell.call(null,G__80119));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__80189 = (i__80117 + (1));
i__80117 = G__80189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80118),athens$devcards$db_boxes$cell_$_iter__80115(cljs.core.chunk_rest(s__80116__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80118),null);
}
} else {
var v = cljs.core.first(s__80116__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__80120 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__80120) : athens.devcards.db_boxes.cell.call(null,G__80120));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__80115(cljs.core.rest(s__80116__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

}
}
}
}
} else {
return "";
}
});
athens.devcards.db_boxes.table_view = (function athens$devcards$db_boxes$table_view(data,mode,limit){
var hs = athens.devcards.db_boxes.headings(data,mode);
var rows = athens.devcards.db_boxes.get_rows(data,mode);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__80121(s__80122){
return (new cljs.core.LazySeq(null,(function (){
var s__80122__$1 = s__80122;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__80122__$1);
if(temp__5735__auto__){
var s__80122__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80122__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__80122__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__80124 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__80123 = (0);
while(true){
if((i__80123 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__80123);
cljs.core.chunk_append(b__80124,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)));

var G__80190 = (i__80123 + (1));
i__80123 = G__80190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80124),athens$devcards$db_boxes$table_view_$_iter__80121(cljs.core.chunk_rest(s__80122__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80124),null);
}
} else {
var h = cljs.core.first(s__80122__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__80121(cljs.core.rest(s__80122__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__80125(s__80126){
return (new cljs.core.LazySeq(null,(function (){
var s__80126__$1 = s__80126;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__80126__$1);
if(temp__5735__auto__){
var s__80126__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80126__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__80126__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__80128 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__80127 = (0);
while(true){
if((i__80127 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__80127);
cljs.core.chunk_append(b__80128,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__80127,row,c__4580__auto__,size__4581__auto__,b__80128,s__80126__$2,temp__5735__auto__,hs,rows){
return (function athens$devcards$db_boxes$table_view_$_iter__80125_$_iter__80129(s__80130){
return (new cljs.core.LazySeq(null,((function (i__80127,row,c__4580__auto__,size__4581__auto__,b__80128,s__80126__$2,temp__5735__auto__,hs,rows){
return (function (){
var s__80130__$1 = s__80130;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__80130__$1);
if(temp__5735__auto____$1){
var s__80130__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__80130__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__80130__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__80132 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__80131 = (0);
while(true){
if((i__80131 < size__4581__auto____$1)){
var map__80133 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__80131);
var map__80133__$1 = (((((!((map__80133 == null))))?(((((map__80133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80133):map__80133);
var c = map__80133__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80133__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80133__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__80132,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__80191 = (i__80131 + (1));
i__80131 = G__80191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80132),athens$devcards$db_boxes$table_view_$_iter__80125_$_iter__80129(cljs.core.chunk_rest(s__80130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80132),null);
}
} else {
var map__80135 = cljs.core.first(s__80130__$2);
var map__80135__$1 = (((((!((map__80135 == null))))?(((((map__80135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80135):map__80135);
var c = map__80135__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80135__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80135__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__80125_$_iter__80129(cljs.core.rest(s__80130__$2)));
}
} else {
return null;
}
break;
}
});})(i__80127,row,c__4580__auto__,size__4581__auto__,b__80128,s__80126__$2,temp__5735__auto__,hs,rows))
,null,null));
});})(i__80127,row,c__4580__auto__,size__4581__auto__,b__80128,s__80126__$2,temp__5735__auto__,hs,rows))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)));

var G__80192 = (i__80127 + (1));
i__80127 = G__80192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80128),athens$devcards$db_boxes$table_view_$_iter__80125(cljs.core.chunk_rest(s__80126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80128),null);
}
} else {
var row = cljs.core.first(s__80126__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__80126__$2,temp__5735__auto__,hs,rows){
return (function athens$devcards$db_boxes$table_view_$_iter__80125_$_iter__80137(s__80138){
return (new cljs.core.LazySeq(null,(function (){
var s__80138__$1 = s__80138;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__80138__$1);
if(temp__5735__auto____$1){
var s__80138__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__80138__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__80138__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__80140 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__80139 = (0);
while(true){
if((i__80139 < size__4581__auto__)){
var map__80141 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__80139);
var map__80141__$1 = (((((!((map__80141 == null))))?(((((map__80141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80141):map__80141);
var c = map__80141__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80141__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80141__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__80140,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__80193 = (i__80139 + (1));
i__80139 = G__80193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80140),athens$devcards$db_boxes$table_view_$_iter__80125_$_iter__80137(cljs.core.chunk_rest(s__80138__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80140),null);
}
} else {
var map__80143 = cljs.core.first(s__80138__$2);
var map__80143__$1 = (((((!((map__80143 == null))))?(((((map__80143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80143):map__80143);
var c = map__80143__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80143__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80143__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__80125_$_iter__80137(cljs.core.rest(s__80138__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__80126__$2,temp__5735__auto__,hs,rows))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__80125(cljs.core.rest(s__80126__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"map","map",1371690461)))?rows:cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,rows)));
})()], null)], null);
});
athens.devcards.db_boxes.coll_of_maps_QMARK_ = (function athens$devcards$db_boxes$coll_of_maps_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,x)));
});
athens.devcards.db_boxes.tuples_QMARK_ = (function athens$devcards$db_boxes$tuples_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.coll_QMARK_,x)));
});
athens.devcards.db_boxes.browser_component = (function athens$devcards$db_boxes$browser_component(result,limit){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((athens.devcards.db_boxes.coll_of_maps_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"maps","maps",-1711561134),limit):((cljs.core.map_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"map","map",1371690461),limit):((athens.devcards.db_boxes.tuples_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"tuples","tuples",-676032639),limit):((cljs.core.coll_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"coll","coll",1647737163),limit):cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)
))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((((cljs.core.coll_QMARK_(result)) && ((!(cljs.core.map_QMARK_(result)))) && ((limit < cljs.core.count(result)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Showing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit)," out of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(result))," rows "].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),athens.devcards.db_boxes.increase_limit_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"load more"], null)], null):null)], null)], null);
});
athens.devcards.db_boxes.error_component = (function athens$devcards$db_boxes$error_component(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
});
athens.devcards.db_boxes.handle_box_change_BANG_ = (function athens$devcards$db_boxes$handle_box_change_BANG_(e){
return athens.devcards.db_boxes.update_box_BANG_(e.target.value);
});
athens.devcards.db_boxes.handle_return_key_BANG_ = (function athens$devcards$db_boxes$handle_return_key_BANG_(e){
e.preventDefault();

return athens.devcards.db_boxes.eval_box_BANG_();
});
athens.devcards.db_boxes.insert_tab = (function athens$devcards$db_boxes$insert_tab(s,pos){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),pos),"  ",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,pos)].join('');
});
athens.devcards.db_boxes.handle_tab_key_BANG_ = (function athens$devcards$db_boxes$handle_tab_key_BANG_(e){
var t = e.target;
var v = t.value;
var pos = t.selectionStart;
e.preventDefault();

athens.devcards.db_boxes.update_box_BANG_(athens.devcards.db_boxes.insert_tab(v,pos));

return (t.selectionEnd = ((2) + pos));
});
athens.devcards.db_boxes.handle_box_key_down_BANG_ = (function athens$devcards$db_boxes$handle_box_key_down_BANG_(e){
var key_code = e.keyCode;
var shift_QMARK_ = e.shiftKey;
var k = (athens.devcards.db_boxes.key_code__GT_key.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.key_code__GT_key.cljs$core$IFn$_invoke$arity$1(key_code) : athens.devcards.db_boxes.key_code__GT_key.call(null,key_code));
var G__80145 = k;
var G__80145__$1 = (((G__80145 instanceof cljs.core.Keyword))?G__80145.fqn:null);
switch (G__80145__$1) {
case "return":
if(cljs.core.truth_(shift_QMARK_)){
return athens.devcards.db_boxes.handle_return_key_BANG_(e);
} else {
return null;
}

break;
case "tab":
return athens.devcards.db_boxes.handle_tab_key_BANG_(e);

break;
default:
return null;

}
});
athens.devcards.db_boxes.box_component = (function athens$devcards$db_boxes$box_component(box_state,_){
var map__80146 = cljs.core.deref(box_state);
var map__80146__$1 = (((((!((map__80146 == null))))?(((((map__80146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80146):map__80146);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80146__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80146__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80146__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80146__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null)], null),((cljs.core.not(error))?athens.devcards.db_boxes.browser_component(result,limit):athens.devcards.db_boxes.error_component(result))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes80148 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes80148 = (function (meta80149){
this.meta80149 = meta80149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes80148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80150,meta80149__$1){
var self__ = this;
var _80150__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes80148(meta80149__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80150){
var self__ = this;
var _80150__$1 = this;
return self__.meta80149;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80148.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80148.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47392__auto__,devcard_opts__47393__auto__){
var self__ = this;
var this__47392__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47393__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47411__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__47411__auto__)){
return (function (data_atom__47412__auto__,owner__47413__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47411__auto__,data_atom__47412__auto__,owner__47413__auto__], null));
});
} else {
return reagent.core.as_element(v__47411__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47393__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta80149","meta80149",1480323697,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80148.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80148.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes80148");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80148.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes80148");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes80148.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes80148 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes80148(meta80149){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes80148(meta80149));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes80148(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes80151 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes80151 = (function (meta80152){
this.meta80152 = meta80152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes80151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80153,meta80152__$1){
var self__ = this;
var _80153__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes80151(meta80152__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80153){
var self__ = this;
var _80153__$1 = this;
return self__.meta80152;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80151.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80151.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47392__auto__,devcard_opts__47393__auto__){
var self__ = this;
var this__47392__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47393__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47411__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__47411__auto__)){
return (function (data_atom__47412__auto__,owner__47413__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47411__auto__,data_atom__47412__auto__,owner__47413__auto__], null));
});
} else {
return reagent.core.as_element(v__47411__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47393__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta80152","meta80152",-2069925934,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80151.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80151.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes80151");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes80151.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes80151");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes80151.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes80151 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes80151(meta80152){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes80151(meta80152));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes80151(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
