goog.provide('athens.devcards.devtool');
goog.require('cljs.core');
goog.require('athens.devcards.buttons');
goog.require('athens.devcards.db');
goog.require('athens.style');
goog.require('cljs.pprint');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.core.protocols');
goog.require('clojure.datafy');
goog.require('datascript.core');
goog.require('datascript.db');
goog.require('devcards.core');
goog.require('me.tonsky.persistent_sorted_set');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('sci.core');
goog.require('shadow.remote.runtime.cljs.browser');
goog.require('stylefy.core');
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.conn !== 'undefined')){
} else {
athens.devcards.devtool.conn = athens.devcards.db.new_conn();
}
athens.devcards.devtool.key_code__GT_key = new cljs.core.PersistentArrayMap(null, 3, [(8),new cljs.core.Keyword(null,"backspace","backspace",-696007848),(9),new cljs.core.Keyword(null,"tab","tab",-559583621),(13),new cljs.core.Keyword(null,"return","return",-1891502105)], null);
athens.devcards.devtool.initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval-str","eval-str",752008756),"(d/q '[:find [(pull ?e [*]) ...]\n       :where [?e :node/title]]\n    @athens/db)",new cljs.core.Keyword(null,"tx-reports","tx-reports",1504634514),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Keyword(null,"query","query",-1288509510)], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.state_STAR_ !== 'undefined')){
} else {
athens.devcards.devtool.state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.devcards.devtool.initial_state);
}
athens.devcards.devtool.ds_nav_impl = (function athens$devcards$devtool$ds_nav_impl(_,k,v){
var pred__63349 = cljs.core._EQ_;
var expr__63350 = k;
if(cljs.core.truth_((function (){var G__63352 = new cljs.core.Keyword("db","id","db/id",-1388397098);
var G__63353 = expr__63350;
return (pred__63349.cljs$core$IFn$_invoke$arity$2 ? pred__63349.cljs$core$IFn$_invoke$arity$2(G__63352,G__63353) : pred__63349.call(null,G__63352,G__63353));
})())){
var G__63354 = cljs.core.deref(athens.devcards.devtool.conn);
var G__63355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword("block","_children","block/_children",1128070632)], null);
var G__63356 = v;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__63354,G__63355,G__63356) : datascript.core.pull.call(null,G__63354,G__63355,G__63356));
} else {
return v;
}
});
athens.devcards.devtool.tx_report_nav_impl = (function athens$devcards$devtool$tx_report_nav_impl(_,k,v){
var pred__63357 = cljs.core._EQ_;
var expr__63358 = k;
if(cljs.core.truth_((function (){var G__63360 = new cljs.core.Keyword(null,"tx-data","tx-data",934159761);
var G__63361 = expr__63358;
return (pred__63357.cljs$core$IFn$_invoke$arity$2 ? pred__63357.cljs$core$IFn$_invoke$arity$2(G__63360,G__63361) : pred__63357.call(null,G__63360,G__63361));
})())){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,v);
} else {
return v;
}
});
athens.devcards.devtool.restore_db_BANG_ = (function athens$devcards$devtool$restore_db_BANG_(db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3(athens.devcards.devtool.conn,db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time-travel","time-travel",-1537845571),true], null));
});
(cljs.core.PersistentHashMap.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.with_meta(this$__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),athens.devcards.devtool.ds_nav_impl], null));
}));

(cljs.core.PersistentArrayMap.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.with_meta(this$__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),athens.devcards.devtool.ds_nav_impl], null));
}));

(datascript.db.TxReport.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.TxReport.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this$__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),athens.devcards.devtool.tx_report_nav_impl], null));
}));

(datascript.db.Datom.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.Datom.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,this$__$1);
}));

(datascript.db.DB.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this$__$1);
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(me.tonsky.persistent_sorted_set.BTSet.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,this$__$1);
}));
athens.devcards.devtool.data_table = (function athens$devcards$devtool$data_table(_,___$1,___$2){
var limit = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((20));
return (function (headers,rows,add_nav_BANG_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$devtool$data_table_$_iter__63362(s__63363){
return (new cljs.core.LazySeq(null,(function (){
var s__63363__$1 = s__63363;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63363__$1);
if(temp__5735__auto__){
var s__63363__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63363__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__63363__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__63365 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__63364 = (0);
while(true){
if((i__63364 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__63364);
cljs.core.chunk_append(b__63365,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),h], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null)));

var G__63446 = (i__63364 + (1));
i__63364 = G__63446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63365),athens$devcards$devtool$data_table_$_iter__63362(cljs.core.chunk_rest(s__63363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63365),null);
}
} else {
var h = cljs.core.first(s__63363__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),h], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null)),athens$devcards$devtool$data_table_$_iter__63362(cljs.core.rest(s__63363__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(headers);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$devtool$data_table_$_iter__63366(s__63367){
return (new cljs.core.LazySeq(null,(function (){
var s__63367__$1 = s__63367;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63367__$1);
if(temp__5735__auto__){
var s__63367__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63367__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__63367__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__63369 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__63368 = (0);
while(true){
if((i__63368 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__63368);
cljs.core.chunk_append(b__63369,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEDEB"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__63368,row,c__4580__auto__,size__4581__auto__,b__63369,s__63367__$2,temp__5735__auto__,limit){
return (function (){
var G__63370 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(row),new cljs.core.Keyword(null,"row-value","row-value",-1067843622).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(row))], null);
return (add_nav_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_nav_BANG_.cljs$core$IFn$_invoke$arity$1(G__63370) : add_nav_BANG_.call(null,G__63370));
});})(i__63368,row,c__4580__auto__,size__4581__auto__,b__63369,s__63367__$2,temp__5735__auto__,limit))
], null)),(function (){var iter__4582__auto__ = ((function (i__63368,row,c__4580__auto__,size__4581__auto__,b__63369,s__63367__$2,temp__5735__auto__,limit){
return (function athens$devcards$devtool$data_table_$_iter__63366_$_iter__63371(s__63372){
return (new cljs.core.LazySeq(null,((function (i__63368,row,c__4580__auto__,size__4581__auto__,b__63369,s__63367__$2,temp__5735__auto__,limit){
return (function (){
var s__63372__$1 = s__63372;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__63372__$1);
if(temp__5735__auto____$1){
var s__63372__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63372__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__63372__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__63374 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__63373 = (0);
while(true){
if((i__63373 < size__4581__auto____$1)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__63373);
cljs.core.chunk_append(b__63374,(function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})());

var G__63447 = (i__63373 + (1));
i__63373 = G__63447;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63374),athens$devcards$devtool$data_table_$_iter__63366_$_iter__63371(cljs.core.chunk_rest(s__63372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63374),null);
}
} else {
var i = cljs.core.first(s__63372__$2);
return cljs.core.cons((function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})(),athens$devcards$devtool$data_table_$_iter__63366_$_iter__63371(cljs.core.rest(s__63372__$2)));
}
} else {
return null;
}
break;
}
});})(i__63368,row,c__4580__auto__,size__4581__auto__,b__63369,s__63367__$2,temp__5735__auto__,limit))
,null,null));
});})(i__63368,row,c__4580__auto__,size__4581__auto__,b__63369,s__63367__$2,temp__5735__auto__,limit))
;
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(row)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)));

var G__63448 = (i__63368 + (1));
i__63368 = G__63448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63369),athens$devcards$devtool$data_table_$_iter__63366(cljs.core.chunk_rest(s__63367__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63369),null);
}
} else {
var row = cljs.core.first(s__63367__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEDEB"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (row,s__63367__$2,temp__5735__auto__,limit){
return (function (){
var G__63375 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(row),new cljs.core.Keyword(null,"row-value","row-value",-1067843622).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(row))], null);
return (add_nav_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_nav_BANG_.cljs$core$IFn$_invoke$arity$1(G__63375) : add_nav_BANG_.call(null,G__63375));
});})(row,s__63367__$2,temp__5735__auto__,limit))
], null)),(function (){var iter__4582__auto__ = ((function (row,s__63367__$2,temp__5735__auto__,limit){
return (function athens$devcards$devtool$data_table_$_iter__63366_$_iter__63376(s__63377){
return (new cljs.core.LazySeq(null,(function (){
var s__63377__$1 = s__63377;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__63377__$1);
if(temp__5735__auto____$1){
var s__63377__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63377__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__63377__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__63379 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__63378 = (0);
while(true){
if((i__63378 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__63378);
cljs.core.chunk_append(b__63379,(function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})());

var G__63449 = (i__63378 + (1));
i__63378 = G__63449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63379),athens$devcards$devtool$data_table_$_iter__63366_$_iter__63376(cljs.core.chunk_rest(s__63377__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63379),null);
}
} else {
var i = cljs.core.first(s__63377__$2);
return cljs.core.cons((function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})(),athens$devcards$devtool$data_table_$_iter__63366_$_iter__63376(cljs.core.rest(s__63377__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__63367__$2,temp__5735__auto__,limit))
;
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(row)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)),athens$devcards$devtool$data_table_$_iter__63366(cljs.core.rest(s__63367__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(limit),rows));
})())], null)], null)], null),(((cljs.core.deref(limit) < cljs.core.count(rows)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(limit,cljs.core._PLUS_,(10));
})], null)),"Load more"], null):null)], null);
});
});
athens.devcards.devtool.edn_viewer = (function athens$devcards$devtool$edn_viewer(data,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__63380_63450 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__63381_63451 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__63382_63452 = true;
var _STAR_print_fn_STAR__temp_val__63383_63453 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63382_63452);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63383_63453);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63381_63451);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63380_63450);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})()], null)], null);
});
athens.devcards.devtool.coll_viewer = (function athens$devcards$devtool$coll_viewer(coll,add_nav_BANG_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.data_table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx","value"], null),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-value","row-value",-1067843622),item], null));
}),coll)),add_nav_BANG_], null);
});
athens.devcards.devtool.map_viewer = (function athens$devcards$devtool$map_viewer(m,add_nav_BANG_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.data_table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","value"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63384){
var vec__63385 = p__63384;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63385,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63385,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-value","row-value",-1067843622),v], null));
}),m),add_nav_BANG_], null);
});
athens.devcards.devtool.maps_viewer = (function athens$devcards$devtool$maps_viewer(ms,add_nav_BANG_){
var headers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ms], 0))));
var rows = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,m){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),(function (){var iter__4582__auto__ = (function athens$devcards$devtool$maps_viewer_$_iter__63388(s__63389){
return (new cljs.core.LazySeq(null,(function (){
var s__63389__$1 = s__63389;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63389__$1);
if(temp__5735__auto__){
var s__63389__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63389__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__63389__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__63391 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__63390 = (0);
while(true){
if((i__63390 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__63390);
cljs.core.chunk_append(b__63391,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,h));

var G__63454 = (i__63390 + (1));
i__63390 = G__63454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63391),athens$devcards$devtool$maps_viewer_$_iter__63388(cljs.core.chunk_rest(s__63389__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63391),null);
}
} else {
var h = cljs.core.first(s__63389__$2);
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,h),athens$devcards$devtool$maps_viewer_$_iter__63388(cljs.core.rest(s__63389__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.rest(headers));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-value","row-value",-1067843622),m], null));
}),ms);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.data_table,headers,rows,add_nav_BANG_], null);
});
athens.devcards.devtool.tuples_viewer = (function athens$devcards$devtool$tuples_viewer(colls,add_nav_BANG_){
var max_count = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,colls));
var headers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(max_count));
var rows = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,coll){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),(function (){var iter__4582__auto__ = (function athens$devcards$devtool$tuples_viewer_$_iter__63392(s__63393){
return (new cljs.core.LazySeq(null,(function (){
var s__63393__$1 = s__63393;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63393__$1);
if(temp__5735__auto__){
var s__63393__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63393__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__63393__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__63395 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__63394 = (0);
while(true){
if((i__63394 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__63394);
cljs.core.chunk_append(b__63395,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,i));

var G__63455 = (i__63394 + (1));
i__63394 = G__63455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63395),athens$devcards$devtool$tuples_viewer_$_iter__63392(cljs.core.chunk_rest(s__63393__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63395),null);
}
} else {
var i = cljs.core.first(s__63393__$2);
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,i),athens$devcards$devtool$tuples_viewer_$_iter__63392(cljs.core.rest(s__63393__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(max_count));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-value","row-value",-1067843622),coll], null));
}));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.data_table,headers,rows,add_nav_BANG_], null);
});
athens.devcards.devtool.associative_not_sequential_QMARK_ = (function athens$devcards$devtool$associative_not_sequential_QMARK_(x){
return ((cljs.core.associative_QMARK_(x)) && ((!(cljs.core.sequential_QMARK_(x)))));
});
athens.devcards.devtool.sequence_of_maps_QMARK_ = (function athens$devcards$devtool$sequence_of_maps_QMARK_(x){
return ((cljs.core.sequential_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.associative_QMARK_,x)) && ((!(cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,x)))));
});
athens.devcards.devtool.tuples_QMARK_ = (function athens$devcards$devtool$tuples_QMARK_(x){
return ((cljs.core.sequential_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,x)));
});
athens.devcards.devtool.viewers = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),new cljs.core.Keyword("athens.browser","edn","athens.browser/edn",1813833548),new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918),cljs.core.constantly(true),new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311),athens.devcards.devtool.edn_viewer], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),new cljs.core.Keyword("athens.browser","coll","athens.browser/coll",1570814140),new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918),cljs.core.coll_QMARK_,new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311),athens.devcards.devtool.coll_viewer], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),new cljs.core.Keyword("athens.browser","map","athens.browser/map",-2074995084),new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918),athens.devcards.devtool.associative_not_sequential_QMARK_,new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311),athens.devcards.devtool.map_viewer], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),new cljs.core.Keyword("athens.browser","maps","athens.browser/maps",1418454465),new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918),athens.devcards.devtool.sequence_of_maps_QMARK_,new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311),athens.devcards.devtool.maps_viewer], null)], null);
athens.devcards.devtool.viewer_preference = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athens.browser","maps","athens.browser/maps",1418454465),new cljs.core.Keyword("athens.browser","map","athens.browser/map",-2074995084),new cljs.core.Keyword("athens.browser","tuples","athens.browser/tuples",354701076),new cljs.core.Keyword("athens.browser","coll","athens.browser/coll",1570814140),new cljs.core.Keyword("athens.browser","edn","athens.browser/edn",1813833548)], null);
athens.devcards.devtool.applicable_viewers = (function athens$devcards$devtool$applicable_viewers(data){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__63396_SHARP_){
return athens.devcards.devtool.viewer_preference.indexOf(p1__63396_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__63397){
var map__63398 = p__63397;
var map__63398__$1 = (((((!((map__63398 == null))))?(((((map__63398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63398):map__63398);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63398__$1,new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918));
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(data) : pred.call(null,data));
}),athens.devcards.devtool.viewers)));
});
athens.devcards.devtool.indexed_viewers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),cljs.core.identity),athens.devcards.devtool.viewers));
athens.devcards.devtool.dropdown = (function athens$devcards$devtool$dropdown(options,selected,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"value","value",305978217),selected], null),(function (){var iter__4582__auto__ = (function athens$devcards$devtool$dropdown_$_iter__63400(s__63401){
return (new cljs.core.LazySeq(null,(function (){
var s__63401__$1 = s__63401;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63401__$1);
if(temp__5735__auto__){
var s__63401__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63401__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__63401__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__63403 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__63402 = (0);
while(true){
if((i__63402 < size__4581__auto__)){
var opt = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__63402);
cljs.core.chunk_append(b__63403,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),opt], null),opt], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),opt], null)));

var G__63456 = (i__63402 + (1));
i__63402 = G__63456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63403),athens$devcards$devtool$dropdown_$_iter__63400(cljs.core.chunk_rest(s__63401__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63403),null);
}
} else {
var opt = cljs.core.first(s__63401__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),opt], null),opt], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),opt], null)),athens$devcards$devtool$dropdown_$_iter__63400(cljs.core.rest(s__63401__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(options);
})()], null);
});
athens.devcards.devtool.data_browser = (function athens$devcards$devtool$data_browser(_){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.PersistentVector.EMPTY], null));
return (function (data){
var navs = new cljs.core.Keyword(null,"navs","navs",-1350609868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var add_nav_BANG_ = (function (p1__63404_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__63404_SHARP_], 0));
});
var navved_data = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (d,p__63406){
var vec__63407 = p__63406;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63407,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63407,(1),null);
return clojure.datafy.nav(clojure.datafy.datafy(d),k,v);
}),data,navs);
var applicable_vs = athens.devcards.devtool.applicable_viewers(navved_data);
var viewer_name = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"viewer","viewer",-783949853).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.first(applicable_vs);
}
})();
var viewer = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.devcards.devtool.indexed_viewers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer_name,new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"no-wrap",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"no-wrap"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$devtool$data_browser_$_iter__63410(s__63411){
return (new cljs.core.LazySeq(null,(function (){
var s__63411__$1 = s__63411;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63411__$1);
if(temp__5735__auto__){
var s__63411__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63411__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__63411__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__63413 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__63412 = (0);
while(true){
if((i__63412 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__63412);
cljs.core.chunk_append(b__63413,(function (){var nav = cljs.core.get.cljs$core$IFn$_invoke$arity$2(navs,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEDEB"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__63412,nav,i,c__4580__auto__,size__4581__auto__,b__63413,s__63411__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,applicable_vs,viewer_name,viewer,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (i__63412,nav,i,c__4580__auto__,size__4581__auto__,b__63413,s__63411__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,applicable_vs,viewer_name,viewer,state){
return (function (s){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$5(s,new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.subvec,(0),i),new cljs.core.Keyword(null,"viewer","viewer",-783949853));
});})(i__63412,nav,i,c__4580__auto__,size__4581__auto__,b__63413,s__63411__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,applicable_vs,viewer_name,viewer,state))
);
});})(i__63412,nav,i,c__4580__auto__,size__4581__auto__,b__63413,s__63411__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,applicable_vs,viewer_name,viewer,state))
], null)),["<< ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(nav))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})());

var G__63457 = (i__63412 + (1));
i__63412 = G__63457;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63413),athens$devcards$devtool$data_browser_$_iter__63410(cljs.core.chunk_rest(s__63411__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63413),null);
}
} else {
var i = cljs.core.first(s__63411__$2);
return cljs.core.cons((function (){var nav = cljs.core.get.cljs$core$IFn$_invoke$arity$2(navs,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEDEB"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (nav,i,s__63411__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,applicable_vs,viewer_name,viewer,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$5(s,new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.subvec,(0),i),new cljs.core.Keyword(null,"viewer","viewer",-783949853));
}));
});})(nav,i,s__63411__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,applicable_vs,viewer_name,viewer,state))
], null)),["<< ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(nav))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})(),athens$devcards$devtool$data_browser_$_iter__63410(cljs.core.rest(s__63411__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(navs)));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"View as: ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.dropdown,applicable_vs,viewer_name,(function (p1__63405_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"viewer","viewer",-783949853),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("athens.browser",p1__63405_SHARP_.target.value));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(navved_data)], 0))], null),(cljs.core.truth_((datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1(navved_data) : datascript.core.db_QMARK_.call(null,navved_data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return athens.devcards.devtool.restore_db_BANG_(navved_data);
}),new cljs.core.Keyword(null,"label","label",1718410804),"Restore this db"], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer,clojure.datafy.datafy(navved_data),add_nav_BANG_], null)], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool63414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool63414 = (function (meta63415){
this.meta63415 = meta63415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool63414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63416,meta63415__$1){
var self__ = this;
var _63416__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool63414(meta63415__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool63414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63416){
var self__ = this;
var _63416__$1 = this;
return self__.meta63415;
}));

(athens.devcards.devtool.t_athens$devcards$devtool63414.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool63414.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__51780__auto__,devcard_opts__51781__auto__){
var self__ = this;
var this__51780__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__51781__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__51799__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.style.base_styles], null);
if(cljs.core.fn_QMARK_(v__51799__auto__)){
return (function (data_atom__51800__auto__,owner__51801__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__51799__auto__,data_atom__51800__auto__,owner__51801__auto__], null));
});
} else {
return reagent.core.as_element(v__51799__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__51781__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool63414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63415","meta63415",-1037916894,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool63414.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool63414.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool63414");

(athens.devcards.devtool.t_athens$devcards$devtool63414.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool63414");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool63414.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool63414 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool63414(meta63415){
return (new athens.devcards.devtool.t_athens$devcards$devtool63414(meta63415));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool63414(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool63417 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool63417 = (function (meta63418){
this.meta63418 = meta63418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool63417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63419,meta63418__$1){
var self__ = this;
var _63419__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool63417(meta63418__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool63417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63419){
var self__ = this;
var _63419__$1 = this;
return self__.meta63418;
}));

(athens.devcards.devtool.t_athens$devcards$devtool63417.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool63417.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__51780__auto__,devcard_opts__51781__auto__){
var self__ = this;
var this__51780__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__51781__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__51799__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.devcards.devtool.conn], null);
if(cljs.core.fn_QMARK_(v__51799__auto__)){
return (function (data_atom__51800__auto__,owner__51801__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__51799__auto__,data_atom__51800__auto__,owner__51801__auto__], null));
});
} else {
return reagent.core.as_element(v__51799__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__51781__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool63417.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63418","meta63418",621861437,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool63417.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool63417.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool63417");

(athens.devcards.devtool.t_athens$devcards$devtool63417.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool63417");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool63417.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool63417 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool63417(meta63418){
return (new athens.devcards.devtool.t_athens$devcards$devtool63417(meta63418));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool63417(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.devtool.handler = (function athens$devcards$devtool$handler(){
var n = (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.devcards.devtool.conn)) + (1));
var n_child = (n + (1));
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.devtool.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("node","title","node/title",628940777),["Test Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","string","block/string",-2066596447),["Test Block",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join('')], null)], null)], null)], null));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Press button and then search \"test\" ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool63420 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool63420 = (function (meta63421){
this.meta63421 = meta63421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool63420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63422,meta63421__$1){
var self__ = this;
var _63422__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool63420(meta63421__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool63420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63422){
var self__ = this;
var _63422__$1 = this;
return self__.meta63421;
}));

(athens.devcards.devtool.t_athens$devcards$devtool63420.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool63420.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__51780__auto__,devcard_opts__51781__auto__){
var self__ = this;
var this__51780__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__51781__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__51799__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),athens.devcards.devtool.handler,new cljs.core.Keyword(null,"label","label",1718410804),"Create Test Pages and Blocks"], null)], null);
if(cljs.core.fn_QMARK_(v__51799__auto__)){
return (function (data_atom__51800__auto__,owner__51801__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__51799__auto__,data_atom__51800__auto__,owner__51801__auto__], null));
});
} else {
return reagent.core.as_element(v__51799__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__51781__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool63420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63421","meta63421",-599989261,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool63420.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool63420.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool63420");

(athens.devcards.devtool.t_athens$devcards$devtool63420.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool63420");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool63420.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool63420 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool63420(meta63421){
return (new athens.devcards.devtool.t_athens$devcards$devtool63420(meta63421));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool63420(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.devtool.eval_with_sci = (function athens$devcards$devtool$eval_with_sci(p__63423){
var map__63424 = p__63423;
var map__63424__$1 = (((((!((map__63424 == null))))?(((((map__63424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63424):map__63424);
var state = map__63424__$1;
var eval_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63424__$1,new cljs.core.Keyword(null,"eval-str","eval-str",752008756));
var bindings = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.devcards.devtool.conn,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many,new cljs.core.Symbol("d","entity","d/entity",1189561095,null),datascript.core.entity], null);
var vec__63426 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(eval_str,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e63429){if((e63429 instanceof Error)){
var e = e63429;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e63429;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63426,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63426,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.devtool.eval_box_BANG_ = (function athens$devcards$devtool$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.devtool.state_STAR_,athens.devcards.devtool.eval_with_sci);
});
athens.devcards.devtool.update_box_BANG_ = (function athens$devcards$devtool$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.devtool.state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"eval-str","eval-str",752008756),s);
});
athens.devcards.devtool.handle_box_change_BANG_ = (function athens$devcards$devtool$handle_box_change_BANG_(e){
return athens.devcards.devtool.update_box_BANG_(e.target.value);
});
athens.devcards.devtool.listener = (function athens$devcards$devtool$listener(tx_report){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.devtool.state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"tx-reports","tx-reports",1504634514),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tx_report], 0));

if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.devcards.devtool.state_STAR_)))){
return athens.devcards.devtool.eval_box_BANG_();
} else {
return null;
}
});
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(athens.devcards.devtool.conn,new cljs.core.Keyword(null,"devtool","devtool",1338288336),athens.devcards.devtool.listener);
athens.devcards.devtool.handle_shift_return_BANG_ = (function athens$devcards$devtool$handle_shift_return_BANG_(e){
e.preventDefault();

return athens.devcards.devtool.eval_box_BANG_();
});
athens.devcards.devtool.insert_tab = (function athens$devcards$devtool$insert_tab(s,pos){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),pos),"  ",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,pos)].join('');
});
athens.devcards.devtool.handle_tab_key_BANG_ = (function athens$devcards$devtool$handle_tab_key_BANG_(e){
var t = e.target;
var v = t.value;
var pos = t.selectionStart;
e.preventDefault();

athens.devcards.devtool.update_box_BANG_(athens.devcards.devtool.insert_tab(v,pos));

return (t.selectionEnd = ((2) + pos));
});
athens.devcards.devtool.handle_box_key_down_BANG_ = (function athens$devcards$devtool$handle_box_key_down_BANG_(e){
var key_code = e.keyCode;
var shift_QMARK_ = e.shiftKey;
var k = (athens.devcards.devtool.key_code__GT_key.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.devtool.key_code__GT_key.cljs$core$IFn$_invoke$arity$1(key_code) : athens.devcards.devtool.key_code__GT_key.call(null,key_code));
var G__63430 = k;
var G__63430__$1 = (((G__63430 instanceof cljs.core.Keyword))?G__63430.fqn:null);
switch (G__63430__$1) {
case "return":
if(cljs.core.truth_(shift_QMARK_)){
return athens.devcards.devtool.handle_shift_return_BANG_(e);
} else {
return null;
}

break;
case "tab":
return athens.devcards.devtool.handle_tab_key_BANG_(e);

break;
default:
return null;

}
});
athens.devcards.devtool.error_component = (function athens$devcards$devtool$error_component(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
});
athens.devcards.devtool.query_component = (function athens$devcards$devtool$query_component(p__63431){
var map__63432 = p__63431;
var map__63432__$1 = (((((!((map__63432 == null))))?(((((map__63432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63432):map__63432);
var eval_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63432__$1,new cljs.core.Keyword(null,"eval-str","eval-str",752008756));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63432__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63432__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),eval_str,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.devtool.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.devtool.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.data_browser,result], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.error_component,result], null))], null);
});
athens.devcards.devtool.txes_component = (function athens$devcards$devtool$txes_component(p__63434){
var map__63435 = p__63434;
var map__63435__$1 = (((((!((map__63435 == null))))?(((((map__63435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63435):map__63435);
var tx_reports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63435__$1,new cljs.core.Keyword(null,"tx-reports","tx-reports",1504634514));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.data_browser,tx_reports], null);
});
athens.devcards.devtool.box_component = (function athens$devcards$devtool$box_component(state,_){
var map__63437 = cljs.core.deref(state);
var map__63437__$1 = (((((!((map__63437 == null))))?(((((map__63437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63437):map__63437);
var active_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63437__$1,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994));
var switch_panel = (function (panel){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.devtool.state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),panel);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return switch_panel(new cljs.core.Keyword(null,"query","query",-1288509510));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Query"], null)], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return switch_panel(new cljs.core.Keyword(null,"txes","txes",-2122282744));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Transactions"], null)], null)], null),(function (){var G__63439 = active_panel;
var G__63439__$1 = (((G__63439 instanceof cljs.core.Keyword))?G__63439.fqn:null);
switch (G__63439__$1) {
case "query":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.query_component,cljs.core.deref(state)], null);

break;
case "txes":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.txes_component,cljs.core.deref(state)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63439__$1)].join('')));

}
})()], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool63440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool63440 = (function (meta63441){
this.meta63441 = meta63441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool63440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63442,meta63441__$1){
var self__ = this;
var _63442__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool63440(meta63441__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool63440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63442){
var self__ = this;
var _63442__$1 = this;
return self__.meta63441;
}));

(athens.devcards.devtool.t_athens$devcards$devtool63440.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool63440.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__51780__auto__,devcard_opts__51781__auto__){
var self__ = this;
var this__51780__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__51781__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__51799__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.devtool.state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"eval-str","eval-str",752008756),new cljs.core.Keyword(null,"eval-str","eval-str",752008756).cljs$core$IFn$_invoke$arity$1(athens.devcards.devtool.initial_state));

return athens.devcards.devtool.eval_box_BANG_();
}),new cljs.core.Keyword(null,"label","label",1718410804),"Reset"], null)], null);
});
if(cljs.core.fn_QMARK_(v__51799__auto__)){
return (function (data_atom__51800__auto__,owner__51801__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__51799__auto__,data_atom__51800__auto__,owner__51801__auto__], null));
});
} else {
return reagent.core.as_element(v__51799__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__51781__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool63440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63441","meta63441",148967091,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool63440.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool63440.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool63440");

(athens.devcards.devtool.t_athens$devcards$devtool63440.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool63440");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool63440.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool63440 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool63440(meta63441){
return (new athens.devcards.devtool.t_athens$devcards$devtool63440(meta63441));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool63440(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Devtool-box","Devtool-box",1953946451)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Devtool-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool63443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool63443 = (function (meta63444){
this.meta63444 = meta63444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool63443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63445,meta63444__$1){
var self__ = this;
var _63445__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool63443(meta63444__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool63443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63445){
var self__ = this;
var _63445__$1 = this;
return self__.meta63444;
}));

(athens.devcards.devtool.t_athens$devcards$devtool63443.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool63443.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__51780__auto__,devcard_opts__51781__auto__){
var self__ = this;
var this__51780__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__51781__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__51799__auto__ = athens.devcards.devtool.box_component;
if(cljs.core.fn_QMARK_(v__51799__auto__)){
return (function (data_atom__51800__auto__,owner__51801__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__51799__auto__,data_atom__51800__auto__,owner__51801__auto__], null));
});
} else {
return reagent.core.as_element(v__51799__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__51781__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool63443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta63444","meta63444",396999800,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool63443.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool63443.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool63443");

(athens.devcards.devtool.t_athens$devcards$devtool63443.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool63443");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool63443.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool63443 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool63443(meta63444){
return (new athens.devcards.devtool.t_athens$devcards$devtool63443(meta63444));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool63443(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.devtool.state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.devtool.js.map
