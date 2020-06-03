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
var c__39615__auto___50343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_50293){
var state_val_50294 = (state_50293[(1)]);
if((state_val_50294 === (1))){
var inst_50282 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_50283 = [false];
var inst_50284 = cljs.core.PersistentHashMap.fromArrays(inst_50282,inst_50283);
var inst_50285 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_50284], 0));
var state_50293__$1 = state_50293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50293__$1,(2),inst_50285);
} else {
if((state_val_50294 === (2))){
var inst_50287 = (state_50293[(2)]);
var inst_50288 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_50287);
var inst_50289 = athens.db.str_to_db_tx(inst_50288);
var inst_50290 = datascript.core.transact.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.dsdb,inst_50289);
var inst_50291 = cljs.core.reset_BANG_(athens.devcards.db_boxes.loading_QMARK_,false);
var state_50293__$1 = (function (){var statearr_50295 = state_50293;
(statearr_50295[(7)] = inst_50290);

return statearr_50295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50293__$1,inst_50291);
} else {
return null;
}
}
});
return (function() {
var athens$devcards$db_boxes$state_machine__39593__auto__ = null;
var athens$devcards$db_boxes$state_machine__39593__auto____0 = (function (){
var statearr_50296 = [null,null,null,null,null,null,null,null];
(statearr_50296[(0)] = athens$devcards$db_boxes$state_machine__39593__auto__);

(statearr_50296[(1)] = (1));

return statearr_50296;
});
var athens$devcards$db_boxes$state_machine__39593__auto____1 = (function (state_50293){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_50293);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e50297){if((e50297 instanceof Object)){
var ex__39596__auto__ = e50297;
var statearr_50298_50346 = state_50293;
(statearr_50298_50346[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50297;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50347 = state_50293;
state_50293 = G__50347;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$db_boxes$state_machine__39593__auto__ = function(state_50293){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$state_machine__39593__auto____1.call(this,state_50293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$state_machine__39593__auto____0;
athens$devcards$db_boxes$state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$state_machine__39593__auto____1;
return athens$devcards$db_boxes$state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_50299 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_50299[(6)] = c__39615__auto___50343);

return statearr_50299;
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
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__50300){
var map__50301 = p__50300;
var map__50301__$1 = (((((!((map__50301 == null))))?(((((map__50301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50301):map__50301);
var box = map__50301__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50301__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.devcards.db_boxes.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__50303 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e50306){if((e50306 instanceof Error)){
var e = e50306;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e50306;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50303,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50303,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.headings = (function athens$devcards$db_boxes$headings(data,mode){
var G__50307 = mode;
var G__50307__$1 = (((G__50307 instanceof cljs.core.Keyword))?G__50307.fqn:null);
switch (G__50307__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50307__$1)].join('')));

}
});
athens.devcards.db_boxes.rows = (function athens$devcards$db_boxes$rows(data,mode){
var G__50308 = mode;
var G__50308__$1 = (((G__50308 instanceof cljs.core.Keyword))?G__50308.fqn:null);
switch (G__50308__$1) {
case "coll":
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,data);

break;
case "map":
return cljs.core.seq(data);

break;
case "tuples":
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,data__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),data__$1);
}),data);

break;
case "maps":
var hs = athens.devcards.db_boxes.headings(data,mode);
var iter__4582__auto__ = (function athens$devcards$db_boxes$rows_$_iter__50309(s__50310){
return (new cljs.core.LazySeq(null,(function (){
var s__50310__$1 = s__50310;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50310__$1);
if(temp__5735__auto__){
var s__50310__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50310__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50310__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50312 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50311 = (0);
while(true){
if((i__50311 < size__4581__auto__)){
var row_idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50311);
cljs.core.chunk_append(b__50312,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx], null),(function (){var iter__4582__auto__ = ((function (i__50311,row_idx,c__4580__auto__,size__4581__auto__,b__50312,s__50310__$2,temp__5735__auto__,hs,G__50308,G__50308__$1){
return (function athens$devcards$db_boxes$rows_$_iter__50309_$_iter__50313(s__50314){
return (new cljs.core.LazySeq(null,((function (i__50311,row_idx,c__4580__auto__,size__4581__auto__,b__50312,s__50310__$2,temp__5735__auto__,hs,G__50308,G__50308__$1){
return (function (){
var s__50314__$1 = s__50314;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50314__$1);
if(temp__5735__auto____$1){
var s__50314__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50314__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__50314__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__50316 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__50315 = (0);
while(true){
if((i__50315 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__50315);
cljs.core.chunk_append(b__50316,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,h], null),""));

var G__50358 = (i__50315 + (1));
i__50315 = G__50358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50316),athens$devcards$db_boxes$rows_$_iter__50309_$_iter__50313(cljs.core.chunk_rest(s__50314__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50316),null);
}
} else {
var h = cljs.core.first(s__50314__$2);
return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,h], null),""),athens$devcards$db_boxes$rows_$_iter__50309_$_iter__50313(cljs.core.rest(s__50314__$2)));
}
} else {
return null;
}
break;
}
});})(i__50311,row_idx,c__4580__auto__,size__4581__auto__,b__50312,s__50310__$2,temp__5735__auto__,hs,G__50308,G__50308__$1))
,null,null));
});})(i__50311,row_idx,c__4580__auto__,size__4581__auto__,b__50312,s__50310__$2,temp__5735__auto__,hs,G__50308,G__50308__$1))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__50359 = (i__50311 + (1));
i__50311 = G__50359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50312),athens$devcards$db_boxes$rows_$_iter__50309(cljs.core.chunk_rest(s__50310__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50312),null);
}
} else {
var row_idx = cljs.core.first(s__50310__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx], null),(function (){var iter__4582__auto__ = ((function (row_idx,s__50310__$2,temp__5735__auto__,hs,G__50308,G__50308__$1){
return (function athens$devcards$db_boxes$rows_$_iter__50309_$_iter__50317(s__50318){
return (new cljs.core.LazySeq(null,(function (){
var s__50318__$1 = s__50318;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50318__$1);
if(temp__5735__auto____$1){
var s__50318__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50318__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50318__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50320 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50319 = (0);
while(true){
if((i__50319 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50319);
cljs.core.chunk_append(b__50320,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,h], null),""));

var G__50360 = (i__50319 + (1));
i__50319 = G__50360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50320),athens$devcards$db_boxes$rows_$_iter__50309_$_iter__50317(cljs.core.chunk_rest(s__50318__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50320),null);
}
} else {
var h = cljs.core.first(s__50318__$2);
return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_idx,h], null),""),athens$devcards$db_boxes$rows_$_iter__50309_$_iter__50317(cljs.core.rest(s__50318__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_idx,s__50310__$2,temp__5735__auto__,hs,G__50308,G__50308__$1))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$devcards$db_boxes$rows_$_iter__50309(cljs.core.rest(s__50310__$2)));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50308__$1)].join('')));

}
});
athens.devcards.db_boxes.table_view = (function athens$devcards$db_boxes$table_view(data,mode){
var hs = athens.devcards.db_boxes.headings(data,mode);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__50321(s__50322){
return (new cljs.core.LazySeq(null,(function (){
var s__50322__$1 = s__50322;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50322__$1);
if(temp__5735__auto__){
var s__50322__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50322__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50322__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50324 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50323 = (0);
while(true){
if((i__50323 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50323);
cljs.core.chunk_append(b__50324,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null));

var G__50361 = (i__50323 + (1));
i__50323 = G__50361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50324),athens$devcards$db_boxes$table_view_$_iter__50321(cljs.core.chunk_rest(s__50322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50324),null);
}
} else {
var h = cljs.core.first(s__50322__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),athens$devcards$db_boxes$table_view_$_iter__50321(cljs.core.rest(s__50322__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__50325(s__50326){
return (new cljs.core.LazySeq(null,(function (){
var s__50326__$1 = s__50326;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50326__$1);
if(temp__5735__auto__){
var s__50326__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50326__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50326__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50328 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50327 = (0);
while(true){
if((i__50327 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50327);
cljs.core.chunk_append(b__50328,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__50327,row,c__4580__auto__,size__4581__auto__,b__50328,s__50326__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$table_view_$_iter__50325_$_iter__50329(s__50330){
return (new cljs.core.LazySeq(null,((function (i__50327,row,c__4580__auto__,size__4581__auto__,b__50328,s__50326__$2,temp__5735__auto__,hs){
return (function (){
var s__50330__$1 = s__50330;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50330__$1);
if(temp__5735__auto____$1){
var s__50330__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50330__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__50330__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__50332 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__50331 = (0);
while(true){
if((i__50331 < size__4581__auto____$1)){
var cell = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__50331);
cljs.core.chunk_append(b__50332,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)], null));

var G__50362 = (i__50331 + (1));
i__50331 = G__50362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50332),athens$devcards$db_boxes$table_view_$_iter__50325_$_iter__50329(cljs.core.chunk_rest(s__50330__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50332),null);
}
} else {
var cell = cljs.core.first(s__50330__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)], null),athens$devcards$db_boxes$table_view_$_iter__50325_$_iter__50329(cljs.core.rest(s__50330__$2)));
}
} else {
return null;
}
break;
}
});})(i__50327,row,c__4580__auto__,size__4581__auto__,b__50328,s__50326__$2,temp__5735__auto__,hs))
,null,null));
});})(i__50327,row,c__4580__auto__,size__4581__auto__,b__50328,s__50326__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(row);
})()], null));

var G__50363 = (i__50327 + (1));
i__50327 = G__50363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50328),athens$devcards$db_boxes$table_view_$_iter__50325(cljs.core.chunk_rest(s__50326__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50328),null);
}
} else {
var row = cljs.core.first(s__50326__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__50326__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$table_view_$_iter__50325_$_iter__50333(s__50334){
return (new cljs.core.LazySeq(null,(function (){
var s__50334__$1 = s__50334;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__50334__$1);
if(temp__5735__auto____$1){
var s__50334__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50334__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50334__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50336 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50335 = (0);
while(true){
if((i__50335 < size__4581__auto__)){
var cell = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50335);
cljs.core.chunk_append(b__50336,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)], null));

var G__50364 = (i__50335 + (1));
i__50335 = G__50364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50336),athens$devcards$db_boxes$table_view_$_iter__50325_$_iter__50333(cljs.core.chunk_rest(s__50334__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50336),null);
}
} else {
var cell = cljs.core.first(s__50334__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)], null),athens$devcards$db_boxes$table_view_$_iter__50325_$_iter__50333(cljs.core.rest(s__50334__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__50326__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(row);
})()], null),athens$devcards$db_boxes$table_view_$_iter__50325(cljs.core.rest(s__50326__$2)));
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__50337_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50337_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),value));
}));
});
athens.devcards.db_boxes.box_component = (function athens$devcards$db_boxes$box_component(){
var map__50338 = cljs.core.deref(athens.devcards.db_boxes.box_state_STAR_);
var map__50338__$1 = (((((!((map__50338 == null))))?(((((map__50338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50338):map__50338);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50338__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50338__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50338__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null)], null),((cljs.core.not(error))?athens.devcards.db_boxes.browser_component(result):athens.devcards.db_boxes.error_component(result))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"box","box",1530920394)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes50340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes50340 = (function (meta50341){
this.meta50341 = meta50341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes50340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50342,meta50341__$1){
var self__ = this;
var _50342__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes50340(meta50341__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes50340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50342){
var self__ = this;
var _50342__$1 = this;
return self__.meta50341;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes50340.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes50340.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__46709__auto__,devcard_opts__46710__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes50340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta50341","meta50341",-1412321223,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes50340.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes50340.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes50340");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes50340.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes50340");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes50340.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes50340 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes50340(meta50341){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes50340(meta50341));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes50340(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
