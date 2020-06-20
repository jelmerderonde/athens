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
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('sci.core');
goog.require('shadow.remote.runtime.cljs.browser');
goog.require('stylefy.core');
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.conn !== 'undefined')){
} else {
athens.devcards.devtool.conn = athens.devcards.db.new_conn();
}
athens.devcards.devtool.nav_impl = (function athens$devcards$devtool$nav_impl(_,k,v){
var pred__67871 = cljs.core._EQ_;
var expr__67872 = k;
if(cljs.core.truth_((function (){var G__67874 = new cljs.core.Keyword("db","id","db/id",-1388397098);
var G__67875 = expr__67872;
return (pred__67871.cljs$core$IFn$_invoke$arity$2 ? pred__67871.cljs$core$IFn$_invoke$arity$2(G__67874,G__67875) : pred__67871.call(null,G__67874,G__67875));
})())){
var G__67876 = cljs.core.deref(athens.devcards.devtool.conn);
var G__67877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword("block","_children","block/_children",1128070632)], null);
var G__67878 = v;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__67876,G__67877,G__67878) : datascript.core.pull.call(null,G__67876,G__67877,G__67878));
} else {
return v;
}
});
(cljs.core.PersistentHashMap.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.with_meta(this$__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),athens.devcards.devtool.nav_impl], null));
}));

(cljs.core.PersistentArrayMap.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.with_meta(this$__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),athens.devcards.devtool.nav_impl], null));
}));
athens.devcards.devtool.data_table = (function athens$devcards$devtool$data_table(headers,rows,add_nav_BANG_){
var limit = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((20));
return (function (_,___$1,___$2){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$devtool$data_table_$_iter__67879(s__67880){
return (new cljs.core.LazySeq(null,(function (){
var s__67880__$1 = s__67880;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67880__$1);
if(temp__5735__auto__){
var s__67880__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67880__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__67880__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__67882 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__67881 = (0);
while(true){
if((i__67881 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__67881);
cljs.core.chunk_append(b__67882,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),h], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null)));

var G__67963 = (i__67881 + (1));
i__67881 = G__67963;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67882),athens$devcards$devtool$data_table_$_iter__67879(cljs.core.chunk_rest(s__67880__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67882),null);
}
} else {
var h = cljs.core.first(s__67880__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),h], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),h], null)),athens$devcards$devtool$data_table_$_iter__67879(cljs.core.rest(s__67880__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(headers);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$devtool$data_table_$_iter__67883(s__67884){
return (new cljs.core.LazySeq(null,(function (){
var s__67884__$1 = s__67884;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67884__$1);
if(temp__5735__auto__){
var s__67884__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67884__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__67884__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__67886 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__67885 = (0);
while(true){
if((i__67885 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__67885);
cljs.core.chunk_append(b__67886,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEDEB"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__67885,row,c__4580__auto__,size__4581__auto__,b__67886,s__67884__$2,temp__5735__auto__,limit){
return (function (){
var G__67887 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(row),new cljs.core.Keyword(null,"row-value","row-value",-1067843622).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(row))], null);
return (add_nav_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_nav_BANG_.cljs$core$IFn$_invoke$arity$1(G__67887) : add_nav_BANG_.call(null,G__67887));
});})(i__67885,row,c__4580__auto__,size__4581__auto__,b__67886,s__67884__$2,temp__5735__auto__,limit))
], null)),(function (){var iter__4582__auto__ = ((function (i__67885,row,c__4580__auto__,size__4581__auto__,b__67886,s__67884__$2,temp__5735__auto__,limit){
return (function athens$devcards$devtool$data_table_$_iter__67883_$_iter__67888(s__67889){
return (new cljs.core.LazySeq(null,((function (i__67885,row,c__4580__auto__,size__4581__auto__,b__67886,s__67884__$2,temp__5735__auto__,limit){
return (function (){
var s__67889__$1 = s__67889;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__67889__$1);
if(temp__5735__auto____$1){
var s__67889__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__67889__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__67889__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__67891 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__67890 = (0);
while(true){
if((i__67890 < size__4581__auto____$1)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__67890);
cljs.core.chunk_append(b__67891,(function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})());

var G__67964 = (i__67890 + (1));
i__67890 = G__67964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67891),athens$devcards$devtool$data_table_$_iter__67883_$_iter__67888(cljs.core.chunk_rest(s__67889__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67891),null);
}
} else {
var i = cljs.core.first(s__67889__$2);
return cljs.core.cons((function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})(),athens$devcards$devtool$data_table_$_iter__67883_$_iter__67888(cljs.core.rest(s__67889__$2)));
}
} else {
return null;
}
break;
}
});})(i__67885,row,c__4580__auto__,size__4581__auto__,b__67886,s__67884__$2,temp__5735__auto__,limit))
,null,null));
});})(i__67885,row,c__4580__auto__,size__4581__auto__,b__67886,s__67884__$2,temp__5735__auto__,limit))
;
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(row)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)));

var G__67965 = (i__67885 + (1));
i__67885 = G__67965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67886),athens$devcards$devtool$data_table_$_iter__67883(cljs.core.chunk_rest(s__67884__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67886),null);
}
} else {
var row = cljs.core.first(s__67884__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEDEB"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (row,s__67884__$2,temp__5735__auto__,limit){
return (function (){
var G__67892 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(row),new cljs.core.Keyword(null,"row-value","row-value",-1067843622).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(row))], null);
return (add_nav_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_nav_BANG_.cljs$core$IFn$_invoke$arity$1(G__67892) : add_nav_BANG_.call(null,G__67892));
});})(row,s__67884__$2,temp__5735__auto__,limit))
], null)),(function (){var iter__4582__auto__ = ((function (row,s__67884__$2,temp__5735__auto__,limit){
return (function athens$devcards$devtool$data_table_$_iter__67883_$_iter__67893(s__67894){
return (new cljs.core.LazySeq(null,(function (){
var s__67894__$1 = s__67894;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__67894__$1);
if(temp__5735__auto____$1){
var s__67894__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__67894__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__67894__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__67896 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__67895 = (0);
while(true){
if((i__67895 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__67895);
cljs.core.chunk_append(b__67896,(function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})());

var G__67966 = (i__67895 + (1));
i__67895 = G__67966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67896),athens$devcards$devtool$data_table_$_iter__67883_$_iter__67893(cljs.core.chunk_rest(s__67894__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67896),null);
}
} else {
var i = cljs.core.first(s__67894__$2);
return cljs.core.cons((function (){var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((cell == null))?"":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cell], 0)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell)].join('')], null));
})(),athens$devcards$devtool$data_table_$_iter__67883_$_iter__67893(cljs.core.rest(s__67894__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__67884__$2,temp__5735__auto__,limit))
;
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(row)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row], null)),athens$devcards$devtool$data_table_$_iter__67883(cljs.core.rest(s__67884__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(((cljs.core.coll_QMARK_(rows))?cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(limit),rows):rows));
})())], null)], null)], null),((((cljs.core.coll_QMARK_(rows)) && ((cljs.core.deref(limit) < cljs.core.count(rows)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(limit,cljs.core._PLUS_,(10));
})], null)),"Load more"], null):null)], null);
});
});
athens.devcards.devtool.edn_viewer = (function athens$devcards$devtool$edn_viewer(data,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__67897_67967 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__67898_67968 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__67899_67969 = true;
var _STAR_print_fn_STAR__temp_val__67900_67970 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__67899_67969);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__67900_67970);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__67898_67968);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__67897_67967);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})()], null)], null);
});
athens.devcards.devtool.coll_viewer = (function athens$devcards$devtool$coll_viewer(coll,add_nav_BANG_){
return athens.devcards.devtool.data_table(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx","value"], null),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-value","row-value",-1067843622),item], null));
}),coll)),add_nav_BANG_);
});
athens.devcards.devtool.map_viewer = (function athens$devcards$devtool$map_viewer(m,add_nav_BANG_){
return athens.devcards.devtool.data_table(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","value"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__67901){
var vec__67902 = p__67901;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67902,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67902,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row-value","row-value",-1067843622),v], null));
}),m),add_nav_BANG_);
});
athens.devcards.devtool.maps_viewer = (function athens$devcards$devtool$maps_viewer(ms,add_nav_BANG_){
var headers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ms], 0))));
var rows = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,m){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),(function (){var iter__4582__auto__ = (function athens$devcards$devtool$maps_viewer_$_iter__67905(s__67906){
return (new cljs.core.LazySeq(null,(function (){
var s__67906__$1 = s__67906;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67906__$1);
if(temp__5735__auto__){
var s__67906__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67906__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__67906__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__67908 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__67907 = (0);
while(true){
if((i__67907 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__67907);
cljs.core.chunk_append(b__67908,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,h));

var G__67971 = (i__67907 + (1));
i__67907 = G__67971;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67908),athens$devcards$devtool$maps_viewer_$_iter__67905(cljs.core.chunk_rest(s__67906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67908),null);
}
} else {
var h = cljs.core.first(s__67906__$2);
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,h),athens$devcards$devtool$maps_viewer_$_iter__67905(cljs.core.rest(s__67906__$2)));
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
return athens.devcards.devtool.data_table(headers,rows,add_nav_BANG_);
});
athens.devcards.devtool.tuples_viewer = (function athens$devcards$devtool$tuples_viewer(colls,add_nav_BANG_){
var max_count = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,colls));
var headers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(max_count));
var rows = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,coll){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx], null),(function (){var iter__4582__auto__ = (function athens$devcards$devtool$tuples_viewer_$_iter__67909(s__67910){
return (new cljs.core.LazySeq(null,(function (){
var s__67910__$1 = s__67910;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67910__$1);
if(temp__5735__auto__){
var s__67910__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67910__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__67910__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__67912 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__67911 = (0);
while(true){
if((i__67911 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__67911);
cljs.core.chunk_append(b__67912,cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,i));

var G__67972 = (i__67911 + (1));
i__67911 = G__67972;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67912),athens$devcards$devtool$tuples_viewer_$_iter__67909(cljs.core.chunk_rest(s__67910__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67912),null);
}
} else {
var i = cljs.core.first(s__67910__$2);
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,i),athens$devcards$devtool$tuples_viewer_$_iter__67909(cljs.core.rest(s__67910__$2)));
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
return athens.devcards.devtool.data_table(headers,rows,add_nav_BANG_);
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
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__67913_SHARP_){
return athens.devcards.devtool.viewer_preference.indexOf(p1__67913_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__67914){
var map__67915 = p__67914;
var map__67915__$1 = (((((!((map__67915 == null))))?(((((map__67915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67915):map__67915);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67915__$1,new cljs.core.Keyword("athens.viewer","pred","athens.viewer/pred",-951267918));
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(data) : pred.call(null,data));
}),athens.devcards.devtool.viewers)));
});
athens.devcards.devtool.indexed_viewers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("athens.viewer","id","athens.viewer/id",1343226473),cljs.core.identity),athens.devcards.devtool.viewers));
athens.devcards.devtool.dropdown = (function athens$devcards$devtool$dropdown(options,selected,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null),(function (){var iter__4582__auto__ = (function athens$devcards$devtool$dropdown_$_iter__67917(s__67918){
return (new cljs.core.LazySeq(null,(function (){
var s__67918__$1 = s__67918;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67918__$1);
if(temp__5735__auto__){
var s__67918__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67918__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__67918__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__67920 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__67919 = (0);
while(true){
if((i__67919 < size__4581__auto__)){
var opt = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__67919);
cljs.core.chunk_append(b__67920,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt,selected),new cljs.core.Keyword(null,"value","value",305978217),opt], null),opt], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),opt], null)));

var G__67973 = (i__67919 + (1));
i__67919 = G__67973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67920),athens$devcards$devtool$dropdown_$_iter__67917(cljs.core.chunk_rest(s__67918__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67920),null);
}
} else {
var opt = cljs.core.first(s__67918__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt,selected),new cljs.core.Keyword(null,"value","value",305978217),opt], null),opt], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),opt], null)),athens$devcards$devtool$dropdown_$_iter__67917(cljs.core.rest(s__67918__$2)));
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
athens.devcards.devtool.data_browser = (function athens$devcards$devtool$data_browser(data){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.PersistentVector.EMPTY], null));
return (function (_){
var navs = new cljs.core.Keyword(null,"navs","navs",-1350609868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var add_nav_BANG_ = (function (p1__67921_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__67921_SHARP_], 0));
});
var navved_data = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (d,p__67923){
var vec__67924 = p__67923;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67924,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67924,(1),null);
return clojure.datafy.nav(clojure.datafy.datafy(d),k,v);
}),clojure.datafy.datafy(data),navs);
var applicable_vs = athens.devcards.devtool.applicable_viewers(navved_data);
var viewer_name = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"viewer","viewer",-783949853).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.first(applicable_vs);
}
})();
var viewer = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.devcards.devtool.indexed_viewers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer_name,new cljs.core.Keyword("athens.viewer","fn","athens.viewer/fn",188429311)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"no-wrap",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"no-wrap"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$devtool$data_browser_$_iter__67927(s__67928){
return (new cljs.core.LazySeq(null,(function (){
var s__67928__$1 = s__67928;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67928__$1);
if(temp__5735__auto__){
var s__67928__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67928__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__67928__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__67930 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__67929 = (0);
while(true){
if((i__67929 < size__4581__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__67929);
cljs.core.chunk_append(b__67930,(function (){var nav = cljs.core.get.cljs$core$IFn$_invoke$arity$2(navs,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEDEB"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__67929,nav,i,c__4580__auto__,size__4581__auto__,b__67930,s__67928__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,applicable_vs,viewer_name,viewer,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (i__67929,nav,i,c__4580__auto__,size__4581__auto__,b__67930,s__67928__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,applicable_vs,viewer_name,viewer,state){
return (function (s){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$5(s,new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.subvec,(0),i),new cljs.core.Keyword(null,"viewer","viewer",-783949853));
});})(i__67929,nav,i,c__4580__auto__,size__4581__auto__,b__67930,s__67928__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,applicable_vs,viewer_name,viewer,state))
);
});})(i__67929,nav,i,c__4580__auto__,size__4581__auto__,b__67930,s__67928__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,applicable_vs,viewer_name,viewer,state))
], null)),["<< ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(nav))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})());

var G__67974 = (i__67929 + (1));
i__67929 = G__67974;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67930),athens$devcards$devtool$data_browser_$_iter__67927(cljs.core.chunk_rest(s__67928__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67930),null);
}
} else {
var i = cljs.core.first(s__67928__$2);
return cljs.core.cons((function (){var nav = cljs.core.get.cljs$core$IFn$_invoke$arity$2(navs,i);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#EFEDEB"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (nav,i,s__67928__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,applicable_vs,viewer_name,viewer,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$5(s,new cljs.core.Keyword(null,"navs","navs",-1350609868),cljs.core.subvec,(0),i),new cljs.core.Keyword(null,"viewer","viewer",-783949853));
}));
});})(nav,i,s__67928__$2,temp__5735__auto__,navs,add_nav_BANG_,navved_data,applicable_vs,viewer_name,viewer,state))
], null)),["<< ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(nav))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})(),athens$devcards$devtool$data_browser_$_iter__67927(cljs.core.rest(s__67928__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(navs)));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"View as: ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.dropdown,applicable_vs,viewer_name,(function (p1__67922_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"viewer","viewer",-783949853),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("athens.browser",p1__67922_SHARP_.target.value));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [viewer,navved_data,add_nav_BANG_], null)], null);
});
});
athens.devcards.devtool.key_code__GT_key = new cljs.core.PersistentArrayMap(null, 3, [(8),new cljs.core.Keyword(null,"backspace","backspace",-696007848),(9),new cljs.core.Keyword(null,"tab","tab",-559583621),(13),new cljs.core.Keyword(null,"return","return",-1891502105)], null);
athens.devcards.devtool.initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval-str","eval-str",752008756),"(d/q '[:find [(pull ?e [*]) ...]\n       :where [?e :node/title]]\n    @athens/db)",new cljs.core.Keyword(null,"tx-reports","tx-reports",1504634514),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Keyword(null,"query","query",-1288509510)], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.state_STAR_ !== 'undefined')){
} else {
athens.devcards.devtool.state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.devcards.devtool.initial_state);
}
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool67931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool67931 = (function (meta67932){
this.meta67932 = meta67932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool67931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67933,meta67932__$1){
var self__ = this;
var _67933__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool67931(meta67932__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool67931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67933){
var self__ = this;
var _67933__$1 = this;
return self__.meta67932;
}));

(athens.devcards.devtool.t_athens$devcards$devtool67931.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool67931.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__51704__auto__,devcard_opts__51705__auto__){
var self__ = this;
var this__51704__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__51705__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__51723__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.style.base_styles], null);
if(cljs.core.fn_QMARK_(v__51723__auto__)){
return (function (data_atom__51724__auto__,owner__51725__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__51723__auto__,data_atom__51724__auto__,owner__51725__auto__], null));
});
} else {
return reagent.core.as_element(v__51723__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__51705__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool67931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67932","meta67932",-198662352,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool67931.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool67931.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool67931");

(athens.devcards.devtool.t_athens$devcards$devtool67931.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool67931");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool67931.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool67931 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool67931(meta67932){
return (new athens.devcards.devtool.t_athens$devcards$devtool67931(meta67932));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool67931(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool67934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool67934 = (function (meta67935){
this.meta67935 = meta67935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool67934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67936,meta67935__$1){
var self__ = this;
var _67936__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool67934(meta67935__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool67934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67936){
var self__ = this;
var _67936__$1 = this;
return self__.meta67935;
}));

(athens.devcards.devtool.t_athens$devcards$devtool67934.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool67934.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__51704__auto__,devcard_opts__51705__auto__){
var self__ = this;
var this__51704__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__51705__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__51723__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.devcards.devtool.conn], null);
if(cljs.core.fn_QMARK_(v__51723__auto__)){
return (function (data_atom__51724__auto__,owner__51725__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__51723__auto__,data_atom__51724__auto__,owner__51725__auto__], null));
});
} else {
return reagent.core.as_element(v__51723__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__51705__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool67934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67935","meta67935",489848736,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool67934.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool67934.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool67934");

(athens.devcards.devtool.t_athens$devcards$devtool67934.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool67934");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool67934.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool67934 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool67934(meta67935){
return (new athens.devcards.devtool.t_athens$devcards$devtool67934(meta67935));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool67934(null));
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
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool67937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool67937 = (function (meta67938){
this.meta67938 = meta67938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool67937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67939,meta67938__$1){
var self__ = this;
var _67939__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool67937(meta67938__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool67937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67939){
var self__ = this;
var _67939__$1 = this;
return self__.meta67938;
}));

(athens.devcards.devtool.t_athens$devcards$devtool67937.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool67937.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__51704__auto__,devcard_opts__51705__auto__){
var self__ = this;
var this__51704__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__51705__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__51723__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),athens.devcards.devtool.handler,new cljs.core.Keyword(null,"label","label",1718410804),"Create Test Pages and Blocks"], null)], null);
if(cljs.core.fn_QMARK_(v__51723__auto__)){
return (function (data_atom__51724__auto__,owner__51725__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__51723__auto__,data_atom__51724__auto__,owner__51725__auto__], null));
});
} else {
return reagent.core.as_element(v__51723__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__51705__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool67937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67938","meta67938",1144188945,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool67937.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool67937.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool67937");

(athens.devcards.devtool.t_athens$devcards$devtool67937.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool67937");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool67937.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool67937 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool67937(meta67938){
return (new athens.devcards.devtool.t_athens$devcards$devtool67937(meta67938));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool67937(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.devtool.eval_with_sci = (function athens$devcards$devtool$eval_with_sci(p__67940){
var map__67941 = p__67940;
var map__67941__$1 = (((((!((map__67941 == null))))?(((((map__67941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67941):map__67941);
var state = map__67941__$1;
var eval_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67941__$1,new cljs.core.Keyword(null,"eval-str","eval-str",752008756));
var bindings = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.devcards.devtool.conn,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many,new cljs.core.Symbol("d","entity","d/entity",1189561095,null),datascript.core.entity], null);
var vec__67943 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(eval_str,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e67946){if((e67946 instanceof Error)){
var e = e67946;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e67946;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67943,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67943,(1),null);
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
var G__67947 = k;
var G__67947__$1 = (((G__67947 instanceof cljs.core.Keyword))?G__67947.fqn:null);
switch (G__67947__$1) {
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
athens.devcards.devtool.query_component = (function athens$devcards$devtool$query_component(p__67948){
var map__67949 = p__67948;
var map__67949__$1 = (((((!((map__67949 == null))))?(((((map__67949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67949):map__67949);
var eval_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67949__$1,new cljs.core.Keyword(null,"eval-str","eval-str",752008756));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67949__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67949__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),eval_str,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.devtool.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.devtool.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.data_browser,result], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.error_component,result], null))], null);
});
athens.devcards.devtool.restore_db_BANG_ = (function athens$devcards$devtool$restore_db_BANG_(db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3(athens.devcards.devtool.conn,db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time-travel","time-travel",-1537845571),true], null));
});
athens.devcards.devtool.txes_component = (function athens$devcards$devtool$txes_component(p__67951){
var map__67952 = p__67951;
var map__67952__$1 = (((((!((map__67952 == null))))?(((((map__67952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67952):map__67952);
var tx_reports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67952__$1,new cljs.core.Keyword(null,"tx-reports","tx-reports",1504634514));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.data_browser,tx_reports], null);
});
athens.devcards.devtool.box_component = (function athens$devcards$devtool$box_component(state,_){
var map__67954 = cljs.core.deref(state);
var map__67954__$1 = (((((!((map__67954 == null))))?(((((map__67954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67954):map__67954);
var active_panel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67954__$1,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994));
var switch_panel = (function (panel){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.devtool.state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),panel);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return switch_panel(new cljs.core.Keyword(null,"query","query",-1288509510));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Query"], null)], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return switch_panel(new cljs.core.Keyword(null,"txes","txes",-2122282744));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Transactions"], null)], null)], null),(function (){var G__67956 = active_panel;
var G__67956__$1 = (((G__67956 instanceof cljs.core.Keyword))?G__67956.fqn:null);
switch (G__67956__$1) {
case "query":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.query_component,cljs.core.deref(state)], null);

break;
case "txes":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.devtool.txes_component,cljs.core.deref(state)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67956__$1)].join('')));

}
})()], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool67957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool67957 = (function (meta67958){
this.meta67958 = meta67958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool67957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67959,meta67958__$1){
var self__ = this;
var _67959__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool67957(meta67958__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool67957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67959){
var self__ = this;
var _67959__$1 = this;
return self__.meta67958;
}));

(athens.devcards.devtool.t_athens$devcards$devtool67957.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool67957.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__51704__auto__,devcard_opts__51705__auto__){
var self__ = this;
var this__51704__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__51705__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__51723__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.devtool.state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"eval-str","eval-str",752008756),new cljs.core.Keyword(null,"eval-str","eval-str",752008756).cljs$core$IFn$_invoke$arity$1(athens.devcards.devtool.initial_state));

return athens.devcards.devtool.eval_box_BANG_();
}),new cljs.core.Keyword(null,"label","label",1718410804),"Reset"], null)], null);
});
if(cljs.core.fn_QMARK_(v__51723__auto__)){
return (function (data_atom__51724__auto__,owner__51725__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__51723__auto__,data_atom__51724__auto__,owner__51725__auto__], null));
});
} else {
return reagent.core.as_element(v__51723__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__51705__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool67957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67958","meta67958",-1450525088,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool67957.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool67957.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool67957");

(athens.devcards.devtool.t_athens$devcards$devtool67957.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool67957");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool67957.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool67957 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool67957(meta67958){
return (new athens.devcards.devtool.t_athens$devcards$devtool67957(meta67958));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool67957(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.devtool","athens.devcards.devtool",-979853863),new cljs.core.Keyword(null,"Devtool-box","Devtool-box",1953946451)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Devtool-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.devtool !== 'undefined') && (typeof athens.devcards.devtool.t_athens$devcards$devtool67960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.devtool.t_athens$devcards$devtool67960 = (function (meta67961){
this.meta67961 = meta67961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.devtool.t_athens$devcards$devtool67960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67962,meta67961__$1){
var self__ = this;
var _67962__$1 = this;
return (new athens.devcards.devtool.t_athens$devcards$devtool67960(meta67961__$1));
}));

(athens.devcards.devtool.t_athens$devcards$devtool67960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67962){
var self__ = this;
var _67962__$1 = this;
return self__.meta67961;
}));

(athens.devcards.devtool.t_athens$devcards$devtool67960.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.devtool.t_athens$devcards$devtool67960.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__51704__auto__,devcard_opts__51705__auto__){
var self__ = this;
var this__51704__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__51705__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__51723__auto__ = athens.devcards.devtool.box_component;
if(cljs.core.fn_QMARK_(v__51723__auto__)){
return (function (data_atom__51724__auto__,owner__51725__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__51723__auto__,data_atom__51724__auto__,owner__51725__auto__], null));
});
} else {
return reagent.core.as_element(v__51723__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__51705__auto__))], 0))], 0));
}));

(athens.devcards.devtool.t_athens$devcards$devtool67960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67961","meta67961",1381070100,null)], null);
}));

(athens.devcards.devtool.t_athens$devcards$devtool67960.cljs$lang$type = true);

(athens.devcards.devtool.t_athens$devcards$devtool67960.cljs$lang$ctorStr = "athens.devcards.devtool/t_athens$devcards$devtool67960");

(athens.devcards.devtool.t_athens$devcards$devtool67960.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.devtool/t_athens$devcards$devtool67960");
}));

/**
 * Positional factory function for athens.devcards.devtool/t_athens$devcards$devtool67960.
 */
athens.devcards.devtool.__GT_t_athens$devcards$devtool67960 = (function athens$devcards$devtool$__GT_t_athens$devcards$devtool67960(meta67961){
return (new athens.devcards.devtool.t_athens$devcards$devtool67960(meta67961));
});

}

return (new athens.devcards.devtool.t_athens$devcards$devtool67960(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.devtool.state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.devtool.js.map
