goog.provide('athens.devcards.db_boxes');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('sci.core');
goog.require('cljs_http.client');
goog.require('athens.db');
goog.require('cljs.core.async');
athens.devcards.db_boxes.log = console.log;
athens.devcards.db_boxes.trace = (function athens$devcards$db_boxes$trace(x){
(athens.devcards.db_boxes.log.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.log.cljs$core$IFn$_invoke$arity$1(x) : athens.devcards.db_boxes.log.call(null,x));

return x;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  # An experiment in querying the datascript database",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
athens.devcards.db_boxes.schema = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("attrs","lookup","attrs/lookup",849089348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.dsdb !== 'undefined')){
} else {
athens.devcards.db_boxes.dsdb = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.schema);
}
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.loading_QMARK_ !== 'undefined')){
} else {
athens.devcards.db_boxes.loading_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
}
if(cljs.core.truth_(cljs.core.deref(athens.devcards.db_boxes.loading_QMARK_))){
var c__39615__auto___49011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_48991){
var state_val_48992 = (state_48991[(1)]);
if((state_val_48992 === (1))){
var inst_48980 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_48981 = [false];
var inst_48982 = cljs.core.PersistentHashMap.fromArrays(inst_48980,inst_48981);
var inst_48983 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48982], 0));
var state_48991__$1 = state_48991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48991__$1,(2),inst_48983);
} else {
if((state_val_48992 === (2))){
var inst_48985 = (state_48991[(2)]);
var inst_48986 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_48985);
var inst_48987 = athens.db.str_to_db_tx(inst_48986);
var inst_48988 = datascript.core.transact.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.dsdb,inst_48987);
var inst_48989 = cljs.core.reset_BANG_(athens.devcards.db_boxes.loading_QMARK_,false);
var state_48991__$1 = (function (){var statearr_48993 = state_48991;
(statearr_48993[(7)] = inst_48988);

return statearr_48993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48991__$1,inst_48989);
} else {
return null;
}
}
});
return (function() {
var athens$devcards$db_boxes$state_machine__39593__auto__ = null;
var athens$devcards$db_boxes$state_machine__39593__auto____0 = (function (){
var statearr_48994 = [null,null,null,null,null,null,null,null];
(statearr_48994[(0)] = athens$devcards$db_boxes$state_machine__39593__auto__);

(statearr_48994[(1)] = (1));

return statearr_48994;
});
var athens$devcards$db_boxes$state_machine__39593__auto____1 = (function (state_48991){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_48991);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e48995){if((e48995 instanceof Object)){
var ex__39596__auto__ = e48995;
var statearr_48996_49014 = state_48991;
(statearr_48996_49014[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48995;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49015 = state_48991;
state_48991 = G__49015;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$db_boxes$state_machine__39593__auto__ = function(state_48991){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$state_machine__39593__auto____1.call(this,state_48991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$state_machine__39593__auto____0;
athens$devcards$db_boxes$state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$state_machine__39593__auto____1;
return athens$devcards$db_boxes$state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_48997 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_48997[(6)] = c__39615__auto___49011);

return statearr_48997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39617__auto__);
}));

} else {
}
athens.devcards.db_boxes.initial_box = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"str-content","str-content",297549190),"(d/q '[:find ?e ?title\n            :where [?e :node/title ?title]]\n       @athens/db)"], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.box_state_STAR_ !== 'undefined')){
} else {
athens.devcards.db_boxes.box_state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.initial_box);
}
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"loading-initial-data","loading-initial-data",-1601416447)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"loading-initial-data",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.devcards.db_boxes.loading_QMARK_,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__48998){
var map__48999 = p__48998;
var map__48999__$1 = (((((!((map__48999 == null))))?(((((map__48999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48999):map__48999);
var box = map__48999__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48999__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = (function (){try{return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.devcards.db_boxes.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null)], null));
}catch (e49001){if((e49001 instanceof Error)){
var e = e49001;
(athens.devcards.db_boxes.log.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.log.cljs$core$IFn$_invoke$arity$1(e) : athens.devcards.db_boxes.log.call(null,e));

return "error";
} else {
throw e49001;

}
}})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result);
});
athens.devcards.db_boxes.browser = (function athens$devcards$db_boxes$browser(result){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)], null);
});
athens.devcards.db_boxes.result_wrapper = (function athens$devcards$db_boxes$result_wrapper(){
var err_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (err,info){
return cljs.core.reset_BANG_(err_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,info], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (result){
if((cljs.core.deref(err_STAR_) == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.browser,result], null);
} else {
var vec__49002 = cljs.core.deref(err_STAR_);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49002,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49002,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.str.cljs$core$IFn$_invoke$arity$1(info)], null)], null);
}
})], null));
});
athens.devcards.db_boxes.handle_box_change_BANG_ = (function athens$devcards$db_boxes$handle_box_change_BANG_(e){
var value = e.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__49005_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49005_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),value));
}));
});
athens.devcards.db_boxes.box_component = (function athens$devcards$db_boxes$box_component(){
var map__49006 = cljs.core.deref(athens.devcards.db_boxes.box_state_STAR_);
var map__49006__$1 = (((((!((map__49006 == null))))?(((((map__49006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49006):map__49006);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49006__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49006__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.result_wrapper,result], null)], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"box","box",1530920394)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes49008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes49008 = (function (meta49009){
this.meta49009 = meta49009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes49008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49010,meta49009__$1){
var self__ = this;
var _49010__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes49008(meta49009__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes49008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49010){
var self__ = this;
var _49010__$1 = this;
return self__.meta49009;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes49008.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes49008.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46709__auto__,devcard_opts__46710__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes49008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49009","meta49009",1917384948,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes49008.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes49008.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes49008");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes49008.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes49008");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes49008.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes49008 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes49008(meta49009){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes49008(meta49009));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes49008(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
