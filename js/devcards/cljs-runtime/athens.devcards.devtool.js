goog.provide('athens.devcards.devtool');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
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
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('sci.core');
goog.require('shadow.remote.runtime.cljs.browser');
goog.require('stylefy.core');
goog.require('goog.events.KeyCodes');
athens.devcards.devtool.initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval-str","eval-str",752008756),"(d/q '[:find [(pull ?e [*]) ...]\n       :where [?e :node/title]]\n    @athens/db)",new cljs.core.Keyword(null,"tx-reports","tx-reports",1504634514),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Keyword(null,"query","query",-1288509510)], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.state_STAR_ !== 'undefined')){
} else {
athens.devcards.devtool.state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.devcards.devtool.initial_state);
}
athens.devcards.devtool.ds_nav_impl = (function athens$devcards$devtool$ds_nav_impl(_,k,v){
var pred__60619 = cljs.core._EQ_;
var expr__60620 = k;
if(cljs.core.truth_((function (){var G__60622 = new cljs.core.Keyword("db","id","db/id",-1388397098);
var G__60623 = expr__60620;
return (pred__60619.cljs$core$IFn$_invoke$arity$2 ? pred__60619.cljs$core$IFn$_invoke$arity$2(G__60622,G__60623) : pred__60619.call(null,G__60622,G__60623));
})())){
var G__60624 = cljs.core.deref(athens.db.dsdb);
var G__60625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword("block","_children","block/_children",1128070632)], null);
var G__60626 = v;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__60624,G__60625,G__60626) : datascript.core.pull.call(null,G__60624,G__60625,G__60626));
} else {
return v;
}
});
athens.devcards.devtool.restore_db_BANG_ = (function athens$devcards$devtool$restore_db_BANG_(db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time-travel","time-travel",-1537845571),true], null));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this$__$1);
}));

(datascript.db.Datom.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.Datom.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.vec(this$__$1);
}));

(datascript.db.DB.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this$__$1);
}));

(me.tonsky.persistent_sorted_set.BTSet.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(me.tonsky.persistent_sorted_set.BTSet.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.vec(this$__$1);
}));
athens.devcards.devtool.data_table = (function athens$devcards$devtool$data_table(_,___$1,___$2){
var limit = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((20));
return (function (headers,rows,add_nav_BANG_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$devtool$data_table_$_iter__60631(s__60632){
return (new cljs.core.LazySeq(null,(function (){
var s__60632__$1 = s__60632;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60632__$1);
if(temp__5735__auto__){
var s__60632__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60632__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60632__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60634 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60633 = (0);
while(true){
if((i__60633 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60633);
cljs.core.chunk_append(b__60634,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),h], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null)));

var G__60732 = (i__60633 + (1));
i__60633 = G__60732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60634),athens$devcards$devtool$data_table_$_iter__60631(cljs.core.chunk_rest(s__60632__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60634),null);
}
} else {
var h = cljs.core.first(s__60632__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),h], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null)),athens$devcards$devtool$data_table_$_iter__60631(cljs.core.rest(s__60632__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(headers);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$devtool$data_table_$_iter__60639(s__60640){
return (new cljs.core.LazySeq(null,(function (){
var s__60640__$1 = s__60640;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60640__$1);
if(temp__5735__auto__){
var s__60640__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60640__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60640__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60642 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60641 = (0);
while(true){
if((i__60641 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60641);
cljs.core.chunk_append(b__60642,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEDEB"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60641,row,c__4580__auto__,size__4581__auto__,b__60642,s__60640__$2,temp__5735__auto__,limit){
return (function (){
var G__60648 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(row),new cljs.core.Keyword(null,"row-value","row-value",-1067843622).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(row))], null);
return (add_nav_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_nav_BANG_.cljs$core$IFn$_invoke$arity$1(G__60648) : add_nav_BANG_.call(null,G__60648));
});})(i__60641,row,c__4580__auto__,size__4581__auto__,b__60642,s__60640__$2,temp__5735__auto__,limit))
], null)),(function (){var iter__4582__auto__ = ((function (i__60641,row,c__4580__auto__,size__4581__auto__,b__60642,s__60640__$2,temp__5735__auto__,limit){
return (function athens$devcards$devtool$data_table_$_iter__60639_$_iter__60649(s__60650){
return (new cljs.core.LazySeq(null,((function (i__60641,row,c__4580__auto__,size__4581__auto__,b__60642,s__60640__$2,temp__5735__auto__,limit){
return (function (){
var s__60650__$1 = s__60650;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60650__$1);
if(temp__5735__auto____$1){
var s__60650__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60650__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60650__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60652 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60651 = (0);
while(true){
if((i__60651 < size__4581__auto____$1)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60651);
cljs.core.chunk_append(b__60652,(function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})());

var G__60733 = (i__60651 + (1));
i__60651 = G__60733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60652),athens$devcards$devtool$data_table_$_iter__60639_$_iter__60649(cljs.core.chunk_rest(s__60650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60652),null);
}
} else {
var i = cljs.core.first(s__60650__$2);
return cljs.core.cons((function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})(),athens$devcards$devtool$data_table_$_iter__60639_$_iter__60649(cljs.core.rest(s__60650__$2)));
}
} else {
return null;
}
break;
}
});})(i__60641,row,c__4580__auto__,size__4581__auto__,b__60642,s__60640__$2,temp__5735__auto__,limit))
,null,null));
});})(i__60641,row,c__4580__auto__,size__4581__auto__,b__60642,s__60640__$2,temp__5735__auto__,limit))
;
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(row)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)));

var G__60734 = (i__60641 + (1));
i__60641 = G__60734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60642),athens$devcards$devtool$data_table_$_iter__60639(cljs.core.chunk_rest(s__60640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60642),null);
}
} else {
var row = cljs.core.first(s__60640__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEDEB"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (row,s__60640__$2,temp__5735__auto__,limit){
return (function (){
var G__60659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(row),new cljs.core.Keyword(null,"row-value","row-value",-1067843622).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(row))], null);
return (add_nav_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_nav_BANG_.cljs$core$IFn$_invoke$arity$1(G__60659) : add_nav_BANG_.call(null,G__60659));
});})(row,s__60640__$2,temp__5735__auto__,limit))
], null)),(function (){var iter__4582__auto__ = ((function (row,s__60640__$2,temp__5735__auto__,limit){
return (function athens$devcards$devtool$data_table_$_iter__60639_$_iter__60661(s__60662){
return (new cljs.core.LazySeq(null,(function (){
var s__60662__$1 = s__60662;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60662__$1);
if(temp__5735__auto____$1){
var s__60662__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60662__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60662__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60664 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60663 = (0);
while(true){
if((i__60663 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60663);
cljs.core.chunk_append(b__60664,(function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})());

var G__60735 = (i__60663 + (1));
i__60663 = G__60735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60664),athens$devcards$devtool$data_table_$_iter__60639_$_iter__60661(cljs.core.chunk_rest(s__60662__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60664),null);
}
} else {
var i = cljs.core.first(s__60662__$2);
return cljs.core.cons((function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})(),athens$devcards$devtool$data_table_$_iter__60639_$_iter__60661(cljs.core.rest(s__60662__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__60640__$2,temp__5735__auto__,limit))
;
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(row)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)),athens$devcards$devtool$data_table_$_iter__60639(cljs.core.rest(s__60640__$2)));
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
var _STAR_print_newline_STAR__orig_val__60668_60736 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60669_60737 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60670_60738 = true;
var _STAR_print_fn_STAR__temp_val__60671_60739 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60670_60738);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60671_60739);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60669_60737);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60668_60736);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.data_table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","value"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60672){
var vec__60673 = p__60672;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60673,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60673,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-value","row-value",-1067843622),v], null));
}),m),add_nav_BANG_], null);
});
athens.devcards.devtool.maps_viewer = (function athens$devcards$devtool$maps_viewer(ms,add_nav_BANG_){
var headers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ms], 0))));
var rows = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,m){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),(function (){var iter__4582__auto__ = (function athens$devcards$devtool$maps_viewer_$_iter__60676(s__60677){
return (new cljs.core.LazySeq(null,(function (){
var s__60677__$1 = s__60677;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60677__$1);
if(temp__5735__auto__){
var s__60677__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60677__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60677__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60679 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60678 = (0);
while(true){
if((i__60678 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60678);
cljs.core.chunk_append(b__60679,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,h));

var G__60740 = (i__60678 + (1));
i__60678 = G__60740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60679),athens$devcards$devtool$maps_viewer_$_iter__60676(cljs.core.chunk_rest(s__60677__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60679),null);
}
} else {
var h = cljs.core.first(s__60677__$2);
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,h),athens$devcards$devtool$maps_viewer_$_iter__60676(cljs.core.rest(s__60677__$2)));
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
cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),(function (){var iter__4582__auto__ = (function athens$devcards$devtool$tuples_viewer_$_iter__60680(s__60681){
return (new cljs.core.LazySeq(null,(function (){
var s__60681__$1 = s__60681;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60681__$1);
if(temp__5735__auto__){
var s__60681__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60681__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60681__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60683 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60682 = (0);
while(true){
if((i__60682 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60682);
cljs.core.chunk_append(b__60683,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,i));

var G__60741 = (i__60682 + (1));
i__60682 = G__60741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60683),athens$devcards$devtool$tuples_viewer_$_iter__60680(cljs.core.chunk_rest(s__60681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60683),null);
}
} else {
var i = cljs.core.first(s__60681__$2);
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,i),athens$devcards$devtool$tuples_viewer_$_iter__60680(cljs.core.rest(s__60681__$2)));
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

return colls;
}));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.data_table,headers,rows,add_nav_BANG_], null);
});
athens.devcards.devtool.associative_not_sequential_QMARK_ = (function athens$devcards$devtool$associative_not_sequential_QMARK_(x){
return ((cljs.core.associative_QMARK_(x)) && ((!(cljs.core.sequential_QMARK_(x)))));
});
athens.devcards.devtool.sequence_of_maps_QMARK_ = (function athens$devcards$devtool$sequence_of_maps_QMARK_(x){
return ((cljs.core.sequential_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,x)));
});
athens.devcards.devtool.tuples_QMARK_ = (function athens$devcards$devtool$tuples_QMARK_(x){
return ((cljs.core.sequential_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,x)));
});
athens.devcards.devtool.viewers = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),new cljs.core.Keyword("athens.browser","edn","athens.browser/edn",1813833548),new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918),cljs.core.constantly(true),new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311),athens.devcards.devtool.edn_viewer], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),new cljs.core.Keyword("athens.browser","coll","athens.browser/coll",1570814140),new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918),cljs.core.coll_QMARK_,new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311),athens.devcards.devtool.coll_viewer], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),new cljs.core.Keyword("athens.browser","map","athens.browser/map",-2074995084),new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918),athens.devcards.devtool.associative_not_sequential_QMARK_,new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311),athens.devcards.devtool.map_viewer], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),new cljs.core.Keyword("athens.browser","maps","athens.browser/maps",1418454465),new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918),athens.devcards.devtool.sequence_of_maps_QMARK_,new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311),athens.devcards.devtool.maps_viewer], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),new cljs.core.Keyword("athens.browser","tuples","athens.browser/tuples",354701076),new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918),athens.devcards.devtool.tuples_QMARK_,new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311),athens.devcards.devtool.tuples_viewer], null)], null);
athens.devcards.devtool.viewer_preference = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("athens.browser","maps","athens.browser/maps",1418454465),new cljs.core.Keyword("athens.browser","map","athens.browser/map",-2074995084),new cljs.core.Keyword("athens.browser","tuples","athens.browser/tuples",354701076),new cljs.core.Keyword("athens.browser","coll","athens.browser/coll",1570814140),new cljs.core.Keyword("athens.browser","edn","athens.browser/edn",1813833548)], null);
athens.devcards.devtool.applicable_viewers = (function athens$devcards$devtool$applicable_viewers(data){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60684_SHARP_){
return athens.devcards.devtool.viewer_preference.indexOf(p1__60684_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__60685){
var map__60686 = p__60685;
var map__60686__$1 = (((((!((map__60686 == null))))?(((((map__60686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60686):map__60686);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60686__$1,new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918));
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(data) : pred.call(null,data));
}),athens.devcards.devtool.viewers)));
});
athens.devcards.devtool.indexed_viewers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),cljs.core.identity),athens.devcards.devtool.viewers));
athens.devcards.devtool.data_browser = (function athens$devcards$devtool$data_browser(_){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.PersistentVector.EMPTY], null));
return (function (data){
var navs = new cljs.core.Keyword(null,"navs","navs",-1350609868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var add_nav_BANG_ = (function (p1__60688_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__60688_SHARP_], 0));
});
var navved_data = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (d,p__60689){
var vec__60690 = p__60689;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60690,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60690,(1),null);
return clojure.datafy.nav(clojure.datafy.datafy(d),k,v);
}),data,navs);
var datafied_data = clojure.datafy.datafy(navved_data);
var applicable_vs = athens.devcards.devtool.applicable_viewers(datafied_data);
var viewer_name = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"viewer","viewer",-783949853).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.first(applicable_vs);
}
})();
var viewer = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.devcards.devtool.indexed_viewers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer_name,new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"no-wrap",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"no-wrap"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$devtool$data_browser_$_iter__60693(s__60694){
return (new cljs.core.LazySeq(null,(function (){
var s__60694__$1 = s__60694;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60694__$1);
if(temp__5735__auto__){
var s__60694__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60694__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60694__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60696 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60695 = (0);
while(true){
if((i__60695 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60695);
cljs.core.chunk_append(b__60696,(function (){var nav = cljs.core.get.cljs$core$IFn$_invoke$arity$2(navs,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEDEB"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60695,nav,i,c__4580__auto__,size__4581__auto__,b__60696,s__60694__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (i__60695,nav,i,c__4580__auto__,size__4581__auto__,b__60696,s__60694__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state){
return (function (s){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$5(s,new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.subvec,(0),i),new cljs.core.Keyword(null,"viewer","viewer",-783949853));
});})(i__60695,nav,i,c__4580__auto__,size__4581__auto__,b__60696,s__60694__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state))
);
});})(i__60695,nav,i,c__4580__auto__,size__4581__auto__,b__60696,s__60694__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state))
], null)),["<< ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(nav))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})());

var G__60742 = (i__60695 + (1));
i__60695 = G__60742;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60696),athens$devcards$devtool$data_browser_$_iter__60693(cljs.core.chunk_rest(s__60694__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60696),null);
}
} else {
var i = cljs.core.first(s__60694__$2);
return cljs.core.cons((function (){var nav = cljs.core.get.cljs$core$IFn$_invoke$arity$2(navs,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEDEB"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (nav,i,s__60694__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$5(s,new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.subvec,(0),i),new cljs.core.Keyword(null,"viewer","viewer",-783949853));
}));
});})(nav,i,s__60694__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state))
], null)),["<< ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(nav))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})(),athens$devcards$devtool$data_browser_$_iter__60693(cljs.core.rest(s__60694__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(navs)));
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)),"View as: ",(function (){var iter__4582__auto__ = (function athens$devcards$devtool$data_browser_$_iter__60697(s__60698){
return (new cljs.core.LazySeq(null,(function (){
var s__60698__$1 = s__60698;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60698__$1);
if(temp__5735__auto__){
var s__60698__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60698__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60698__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60700 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60699 = (0);
while(true){
if((i__60699 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60699);
cljs.core.chunk_append(b__60700,(function (){var click_fn = ((function (i__60699,v,c__4580__auto__,size__4581__auto__,b__60700,s__60698__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"viewer","viewer",-783949853),v);
});})(i__60699,v,c__4580__auto__,size__4581__auto__,b__60700,s__60698__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,viewer_name)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),click_fn,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name(v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),click_fn,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name(v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null));
}
})());

var G__60743 = (i__60699 + (1));
i__60699 = G__60743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60700),athens$devcards$devtool$data_browser_$_iter__60697(cljs.core.chunk_rest(s__60698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60700),null);
}
} else {
var v = cljs.core.first(s__60698__$2);
return cljs.core.cons((function (){var click_fn = ((function (v,s__60698__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"viewer","viewer",-783949853),v);
});})(v,s__60698__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,datafied_data,applicable_vs,viewer_name,viewer,state))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,viewer_name)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),click_fn,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name(v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),click_fn,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.name(v)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null));
}
})(),athens$devcards$devtool$data_browser_$_iter__60697(cljs.core.rest(s__60698__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(applicable_vs);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(navved_data)], 0))], null),(cljs.core.truth_((datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.core.db_QMARK_.cljs$core$IFn$_invoke$arity$1(navved_data) : datascript.core.db_QMARK_.call(null,navved_data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return athens.devcards.devtool.restore_db_BANG_(navved_data);
}),new cljs.core.Keyword(null,"label","label",1718410804),"Restore this db"], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer,datafied_data,add_nav_BANG_], null)], null);
});
});
athens.devcards.devtool.handler = (function athens$devcards$devtool$handler(){
var n = (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.db.dsdb)) + (1));
var n_child = (n + (1));
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("node","title","node/title",628940777),["Test Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","string","block/string",-2066596447),["Test Block",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join('')], null)], null)], null)], null));
});
athens.devcards.devtool.eval_with_sci = (function athens$devcards$devtool$eval_with_sci(p__60702){
var map__60703 = p__60702;
var map__60703__$1 = (((((!((map__60703 == null))))?(((((map__60703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60703):map__60703);
var state = map__60703__$1;
var eval_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60703__$1,new cljs.core.Keyword(null,"eval-str","eval-str",752008756));
var bindings = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many,new cljs.core.Symbol("d","entity","d/entity",1189561095,null),datascript.core.entity], null);
var vec__60705 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(eval_str,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e60708){if((e60708 instanceof Error)){
var e = e60708;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e60708;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60705,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60705,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.devtool.eval_box_BANG_ = (function athens$devcards$devtool$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.devtool.state_STAR_,athens.devcards.devtool.eval_with_sci);
});
athens.devcards.devtool.update_box_BANG_ = (function athens$devcards$devtool$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.devtool.state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"eval-str","eval-str",752008756),s);
});
athens.devcards.devtool.listener = (function athens$devcards$devtool$listener(tx_report){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.devtool.state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"tx-reports","tx-reports",1504634514),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tx_report], 0));

if(cljs.core.not(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.devcards.devtool.state_STAR_)))){
return athens.devcards.devtool.eval_box_BANG_();
} else {
return null;
}
});
datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,new cljs.core.Keyword(null,"devtool","devtool",1338288336),athens.devcards.devtool.listener);
athens.devcards.devtool.handle_box_change_BANG_ = (function athens$devcards$devtool$handle_box_change_BANG_(e){
return athens.devcards.devtool.update_box_BANG_(e.target.value);
});
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
var key = e.keyCode;
var shift_QMARK_ = e.shiftKey;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.ENTER)){
if(cljs.core.truth_(shift_QMARK_)){
return athens.devcards.devtool.handle_shift_return_BANG_(e);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,goog.events.KeyCodes.TAB)){
return athens.devcards.devtool.handle_tab_key_BANG_(e);
} else {
return null;

}
}
});
athens.devcards.devtool.error_component = (function athens$devcards$devtool$error_component(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
});
athens.devcards.devtool.query_component = (function athens$devcards$devtool$query_component(p__60709){
var map__60710 = p__60709;
var map__60710__$1 = (((((!((map__60710 == null))))?(((((map__60710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60710):map__60710);
var eval_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60710__$1,new cljs.core.Keyword(null,"eval-str","eval-str",752008756));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60710__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60710__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),eval_str,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.devtool.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.devtool.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.data_browser,result], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.error_component,result], null))], null);
});
athens.devcards.devtool.txes_component = (function athens$devcards$devtool$txes_component(p__60712){
var map__60713 = p__60712;
var map__60713__$1 = (((((!((map__60713 == null))))?(((((map__60713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60713):map__60713);
var tx_reports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60713__$1,new cljs.core.Keyword(null,"tx-reports","tx-reports",1504634514));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.data_browser,tx_reports], null);
});
athens.devcards.devtool.devtool_prompt_el = (function athens$devcards$devtool$devtool_prompt_el(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
var G__60715 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-devtool","toggle-devtool",-1568832653)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__60715) : re_frame.core.dispatch.call(null,G__60715));
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$index.Build], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Toggle devtool"], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px"], null)], null)], null);
});
athens.devcards.devtool.container_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"64","64",977820579).cljs$core$IFn$_invoke$arity$1(athens.style.DEPTH_SHADOWS),", 0 0 0 1px ",athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body-text-color","body-text-color",-349110936),new cljs.core.Keyword(null,"opacity-lower","opacity-lower",-521611975))], null)], null),"96vh","96vh","2vh","600px",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527)),(2),"4px",(0),"flex","fixed","4px","column"]);
athens.devcards.devtool.devtool_el = (function athens$devcards$devtool$devtool_el(devtool_QMARK_,state){
if(cljs.core.truth_(devtool_QMARK_)){
var map__60716 = cljs.core.deref(state);
var map__60716__$1 = (((((!((map__60716 == null))))?(((((map__60716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60716):map__60716);
var active_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60716__$1,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994));
var switch_panel = (function (panel){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),panel);
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.devtool.container_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return switch_panel(new cljs.core.Keyword(null,"query","query",-1288509510));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Query"], null)], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return switch_panel(new cljs.core.Keyword(null,"txes","txes",-2122282744));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Transactions"], null)], null)], null),(function (){var G__60718 = active_panel;
var G__60718__$1 = (((G__60718 instanceof cljs.core.Keyword))?G__60718.fqn:null);
switch (G__60718__$1) {
case "query":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.query_component,cljs.core.deref(state)], null);

break;
case "txes":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.txes_component,cljs.core.deref(state)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60718__$1)].join('')));

}
})()], null);
} else {
return null;
}
});
athens.devcards.devtool.devtool_component = (function athens$devcards$devtool$devtool_component(){
var devtool_QMARK_ = cljs.core.deref((function (){var G__60719 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"devtool","devtool",1338288336)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__60719) : re_frame.core.subscribe.call(null,G__60719));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.devtool_el,devtool_QMARK_,athens.devcards.devtool.state_STAR_], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool60720 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool60720 = (function (meta60721){
this.meta60721 = meta60721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool60720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60722,meta60721__$1){
var self__ = this;
var _60722__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool60720(meta60721__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60722){
var self__ = this;
var _60722__$1 = this;
return self__.meta60721;
}));

(athens.devcards.devtool.t_athens$devcards$devtool60720.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool60720.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60721","meta60721",60724605,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool60720.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool60720.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool60720");

(athens.devcards.devtool.t_athens$devcards$devtool60720.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool60720");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool60720.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool60720 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool60720(meta60721){
return (new athens.devcards.devtool.t_athens$devcards$devtool60720(meta60721));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool60720(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Press button and then search \"test\" ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool60723 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool60723 = (function (meta60724){
this.meta60724 = meta60724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool60723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60725,meta60724__$1){
var self__ = this;
var _60725__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool60723(meta60724__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60725){
var self__ = this;
var _60725__$1 = this;
return self__.meta60724;
}));

(athens.devcards.devtool.t_athens$devcards$devtool60723.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool60723.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),athens.devcards.devtool.handler,new cljs.core.Keyword(null,"label","label",1718410804),"Create Test Pages and Blocks"], null)], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60724","meta60724",165327546,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool60723.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool60723.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool60723");

(athens.devcards.devtool.t_athens$devcards$devtool60723.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool60723");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool60723.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool60723 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool60723(meta60724){
return (new athens.devcards.devtool.t_athens$devcards$devtool60723(meta60724));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool60723(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool60726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool60726 = (function (meta60727){
this.meta60727 = meta60727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool60726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60728,meta60727__$1){
var self__ = this;
var _60728__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool60726(meta60727__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60728){
var self__ = this;
var _60728__$1 = this;
return self__.meta60727;
}));

(athens.devcards.devtool.t_athens$devcards$devtool60726.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool60726.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.devtool.state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"eval-str","eval-str",752008756),new cljs.core.Keyword(null,"eval-str","eval-str",752008756).cljs$core$IFn$_invoke$arity$1(athens.devcards.devtool.initial_state));

return athens.devcards.devtool.eval_box_BANG_();
}),new cljs.core.Keyword(null,"label","label",1718410804),"Reset"], null)], null);
});
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60727","meta60727",-745841054,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool60726.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool60726.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool60726");

(athens.devcards.devtool.t_athens$devcards$devtool60726.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool60726");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool60726.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool60726 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool60726(meta60727){
return (new athens.devcards.devtool.t_athens$devcards$devtool60726(meta60727));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool60726(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Devtool-box","Devtool-box",1953946451)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Devtool-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool60729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool60729 = (function (meta60730){
this.meta60730 = meta60730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool60729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60731,meta60730__$1){
var self__ = this;
var _60731__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool60729(meta60730__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60731){
var self__ = this;
var _60731__$1 = this;
return self__.meta60730;
}));

(athens.devcards.devtool.t_athens$devcards$devtool60729.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool60729.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.devtool_prompt_el], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.devtool_component], null)], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool60729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60730","meta60730",-315754657,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool60729.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool60729.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool60729");

(athens.devcards.devtool.t_athens$devcards$devtool60729.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool60729");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool60729.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool60729 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool60729(meta60730){
return (new athens.devcards.devtool.t_athens$devcards$devtool60729(meta60730));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool60729(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.devtool.js.map
