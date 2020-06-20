goog.provide('athens.devcards.data_browser');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('reagent.core');
athens.devcards.data_browser.attr_unique_QMARK_ = (function athens$devcards$data_browser$attr_unique_QMARK_(attr){
return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.db.schema,attr),new cljs.core.Keyword("db","unique","db/unique",329396388));
});
athens.devcards.data_browser.attr_many_QMARK_ = (function athens$devcards$data_browser$attr_many_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
athens.devcards.data_browser.attr_ref_QMARK_ = (function athens$devcards$data_browser$attr_ref_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
athens.devcards.data_browser.attr_reverse_QMARK_ = (function athens$devcards$data_browser$attr_reverse_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return clojure.string.starts_with_QMARK_(cljs.core.name(attr),"_");
} else {
return null;
}
});
athens.devcards.data_browser.headings = (function athens$devcards$data_browser$headings(data,mode){
var G__60620 = mode;
var G__60620__$1 = (((G__60620 instanceof cljs.core.Keyword))?G__60620.fqn:null);
switch (G__60620__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60620__$1)].join('')));

}
});
athens.devcards.data_browser.coll_rows = (function athens$devcards$data_browser$coll_rows(coll){
var row = (function (p__60621){
var vec__60622 = p__60621;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60622,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60622,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll));
});
athens.devcards.data_browser.reverse_refs_for_attr = (function athens$devcards$data_browser$reverse_refs_for_attr(attr,eid){
var G__60625 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?attr","?attr",-2066507837,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?parent","?parent",-1403127243,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null)], null)], null);
var G__60626 = cljs.core.deref(athens.db.dsdb);
var G__60627 = attr;
var G__60628 = eid;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__60625,G__60626,G__60627,G__60628) : datascript.core.q.call(null,G__60625,G__60626,G__60627,G__60628));
});
athens.devcards.data_browser.reverse_attr = (function athens$devcards$data_browser$reverse_attr(attr){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(attr),"/_",cljs.core.name(attr)].join(''));
});
athens.devcards.data_browser.wrap_with_db_id = (function athens$devcards$data_browser$wrap_with_db_id(eid){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null);
});
athens.devcards.data_browser.reverse_refs = (function athens$devcards$data_browser$reverse_refs(eid){
var ref_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(athens.devcards.data_browser.attr_ref_QMARK_,cljs.core.keys(athens.db.schema));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function athens$devcards$data_browser$reverse_refs_$_iter__60629(s__60630){
return (new cljs.core.LazySeq(null,(function (){
var s__60630__$1 = s__60630;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60630__$1);
if(temp__5735__auto__){
var s__60630__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60630__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60630__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60632 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60631 = (0);
while(true){
if((i__60631 < size__4581__auto__)){
var attr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60631);
cljs.core.chunk_append(b__60632,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.data_browser.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.data_browser.wrap_with_db_id,athens.devcards.data_browser.reverse_refs_for_attr(attr,eid))], null));

var G__60700 = (i__60631 + (1));
i__60631 = G__60700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60632),athens$devcards$data_browser$reverse_refs_$_iter__60629(cljs.core.chunk_rest(s__60630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60632),null);
}
} else {
var attr = cljs.core.first(s__60630__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.data_browser.reverse_attr(attr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.data_browser.wrap_with_db_id,athens.devcards.data_browser.reverse_refs_for_attr(attr,eid))], null),athens$devcards$data_browser$reverse_refs_$_iter__60629(cljs.core.rest(s__60630__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_attrs);
})());
});
athens.devcards.data_browser.reverse_rows = (function athens$devcards$data_browser$reverse_rows(p__60633){
var map__60634 = p__60633;
var map__60634__$1 = (((((!((map__60634 == null))))?(((((map__60634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60634):map__60634);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60634__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
if(cljs.core.truth_(id)){
return athens.devcards.data_browser.reverse_refs(id);
} else {
return null;
}
});
athens.devcards.data_browser.map_rows = (function athens$devcards$data_browser$map_rows(m){
var row = (function (p__60636){
var vec__60637 = p__60636;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60637,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60637,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"key",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null)], null);
});
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,m),cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,athens.devcards.data_browser.reverse_rows(m)));
});
athens.devcards.data_browser.tuple_rows = (function athens$devcards$data_browser$tuple_rows(tuples){
var row = (function (p__60640){
var vec__60641 = p__60640;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60641,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60641,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (heading,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
}),values));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tuples));
});
athens.devcards.data_browser.maps_rows = (function athens$devcards$data_browser$maps_rows(ms){
var hs = athens.devcards.data_browser.headings(ms,new cljs.core.Keyword(null,"maps","maps",-1711561134));
var iter__4582__auto__ = (function athens$devcards$data_browser$maps_rows_$_iter__60644(s__60645){
return (new cljs.core.LazySeq(null,(function (){
var s__60645__$1 = s__60645;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60645__$1);
if(temp__5735__auto__){
var s__60645__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60645__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60645__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60647 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60646 = (0);
while(true){
if((i__60646 < size__4581__auto__)){
var idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60646);
cljs.core.chunk_append(b__60647,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (i__60646,idx,c__4580__auto__,size__4581__auto__,b__60647,s__60645__$2,temp__5735__auto__,hs){
return (function athens$devcards$data_browser$maps_rows_$_iter__60644_$_iter__60648(s__60649){
return (new cljs.core.LazySeq(null,((function (i__60646,idx,c__4580__auto__,size__4581__auto__,b__60647,s__60645__$2,temp__5735__auto__,hs){
return (function (){
var s__60649__$1 = s__60649;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60649__$1);
if(temp__5735__auto____$1){
var s__60649__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60649__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60649__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60651 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60650 = (0);
while(true){
if((i__60650 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60650);
cljs.core.chunk_append(b__60651,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__60711 = (i__60650 + (1));
i__60650 = G__60711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60651),athens$devcards$data_browser$maps_rows_$_iter__60644_$_iter__60648(cljs.core.chunk_rest(s__60649__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60651),null);
}
} else {
var h = cljs.core.first(s__60649__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$data_browser$maps_rows_$_iter__60644_$_iter__60648(cljs.core.rest(s__60649__$2)));
}
} else {
return null;
}
break;
}
});})(i__60646,idx,c__4580__auto__,size__4581__auto__,b__60647,s__60645__$2,temp__5735__auto__,hs))
,null,null));
});})(i__60646,idx,c__4580__auto__,size__4581__auto__,b__60647,s__60645__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__60712 = (i__60646 + (1));
i__60646 = G__60712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60647),athens$devcards$data_browser$maps_rows_$_iter__60644(cljs.core.chunk_rest(s__60645__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60647),null);
}
} else {
var idx = cljs.core.first(s__60645__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (idx,s__60645__$2,temp__5735__auto__,hs){
return (function athens$devcards$data_browser$maps_rows_$_iter__60644_$_iter__60652(s__60653){
return (new cljs.core.LazySeq(null,(function (){
var s__60653__$1 = s__60653;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60653__$1);
if(temp__5735__auto____$1){
var s__60653__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60653__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60653__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60655 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60654 = (0);
while(true){
if((i__60654 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60654);
cljs.core.chunk_append(b__60655,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__60714 = (i__60654 + (1));
i__60654 = G__60714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60655),athens$devcards$data_browser$maps_rows_$_iter__60644_$_iter__60652(cljs.core.chunk_rest(s__60653__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60655),null);
}
} else {
var h = cljs.core.first(s__60653__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$data_browser$maps_rows_$_iter__60644_$_iter__60652(cljs.core.rest(s__60653__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(idx,s__60645__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$devcards$data_browser$maps_rows_$_iter__60644(cljs.core.rest(s__60645__$2)));
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
athens.devcards.data_browser.get_rows = (function athens$devcards$data_browser$get_rows(data,mode){
var G__60656 = mode;
var G__60656__$1 = (((G__60656 instanceof cljs.core.Keyword))?G__60656.fqn:null);
switch (G__60656__$1) {
case "coll":
return athens.devcards.data_browser.coll_rows(data);

break;
case "map":
return athens.devcards.data_browser.map_rows(data);

break;
case "tuples":
return athens.devcards.data_browser.tuple_rows(data);

break;
case "maps":
return athens.devcards.data_browser.maps_rows(data);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60656__$1)].join('')));

}
});
athens.devcards.data_browser.cell = (function athens$devcards$data_browser$cell(p__60657){
var map__60658 = p__60657;
var map__60658__$1 = (((((!((map__60658 == null))))?(((((map__60658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60658):map__60658);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60658__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
});
athens.devcards.data_browser.table_view = (function athens$devcards$data_browser$table_view(data,mode,limit,p__60660){
var map__60661 = p__60660;
var map__60661__$1 = (((((!((map__60661 == null))))?(((((map__60661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60661):map__60661);
var cell_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60661__$1,new cljs.core.Keyword(null,"cell-fn","cell-fn",706974519),athens.devcards.data_browser.cell);
var hs = athens.devcards.data_browser.headings(data,mode);
var rows = athens.devcards.data_browser.get_rows(data,mode);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$data_browser$table_view_$_iter__60663(s__60664){
return (new cljs.core.LazySeq(null,(function (){
var s__60664__$1 = s__60664;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60664__$1);
if(temp__5735__auto__){
var s__60664__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60664__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60664__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60666 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60665 = (0);
while(true){
if((i__60665 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60665);
cljs.core.chunk_append(b__60666,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)));

var G__60761 = (i__60665 + (1));
i__60665 = G__60761;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60666),athens$devcards$data_browser$table_view_$_iter__60663(cljs.core.chunk_rest(s__60664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60666),null);
}
} else {
var h = cljs.core.first(s__60664__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)),athens$devcards$data_browser$table_view_$_iter__60663(cljs.core.rest(s__60664__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$devcards$data_browser$table_view_$_iter__60667(s__60668){
return (new cljs.core.LazySeq(null,(function (){
var s__60668__$1 = s__60668;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60668__$1);
if(temp__5735__auto__){
var s__60668__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60668__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60668__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60670 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60669 = (0);
while(true){
if((i__60669 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60669);
cljs.core.chunk_append(b__60670,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__60669,row,c__4580__auto__,size__4581__auto__,b__60670,s__60668__$2,temp__5735__auto__,hs,rows,map__60661,map__60661__$1,cell_fn){
return (function athens$devcards$data_browser$table_view_$_iter__60667_$_iter__60671(s__60672){
return (new cljs.core.LazySeq(null,((function (i__60669,row,c__4580__auto__,size__4581__auto__,b__60670,s__60668__$2,temp__5735__auto__,hs,rows,map__60661,map__60661__$1,cell_fn){
return (function (){
var s__60672__$1 = s__60672;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60672__$1);
if(temp__5735__auto____$1){
var s__60672__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60672__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__60672__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__60674 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__60673 = (0);
while(true){
if((i__60673 < size__4581__auto____$1)){
var map__60675 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__60673);
var map__60675__$1 = (((((!((map__60675 == null))))?(((((map__60675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60675):map__60675);
var c = map__60675__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60675__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60675__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__60674,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__60779 = (i__60673 + (1));
i__60673 = G__60779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60674),athens$devcards$data_browser$table_view_$_iter__60667_$_iter__60671(cljs.core.chunk_rest(s__60672__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60674),null);
}
} else {
var map__60677 = cljs.core.first(s__60672__$2);
var map__60677__$1 = (((((!((map__60677 == null))))?(((((map__60677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60677):map__60677);
var c = map__60677__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60677__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60677__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$data_browser$table_view_$_iter__60667_$_iter__60671(cljs.core.rest(s__60672__$2)));
}
} else {
return null;
}
break;
}
});})(i__60669,row,c__4580__auto__,size__4581__auto__,b__60670,s__60668__$2,temp__5735__auto__,hs,rows,map__60661,map__60661__$1,cell_fn))
,null,null));
});})(i__60669,row,c__4580__auto__,size__4581__auto__,b__60670,s__60668__$2,temp__5735__auto__,hs,rows,map__60661,map__60661__$1,cell_fn))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)));

var G__60786 = (i__60669 + (1));
i__60669 = G__60786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60670),athens$devcards$data_browser$table_view_$_iter__60667(cljs.core.chunk_rest(s__60668__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60670),null);
}
} else {
var row = cljs.core.first(s__60668__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__60668__$2,temp__5735__auto__,hs,rows,map__60661,map__60661__$1,cell_fn){
return (function athens$devcards$data_browser$table_view_$_iter__60667_$_iter__60679(s__60680){
return (new cljs.core.LazySeq(null,(function (){
var s__60680__$1 = s__60680;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60680__$1);
if(temp__5735__auto____$1){
var s__60680__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60680__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60680__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60682 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60681 = (0);
while(true){
if((i__60681 < size__4581__auto__)){
var map__60683 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60681);
var map__60683__$1 = (((((!((map__60683 == null))))?(((((map__60683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60683):map__60683);
var c = map__60683__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60683__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60683__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__60682,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__60793 = (i__60681 + (1));
i__60681 = G__60793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60682),athens$devcards$data_browser$table_view_$_iter__60667_$_iter__60679(cljs.core.chunk_rest(s__60680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60682),null);
}
} else {
var map__60685 = cljs.core.first(s__60680__$2);
var map__60685__$1 = (((((!((map__60685 == null))))?(((((map__60685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60685):map__60685);
var c = map__60685__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60685__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60685__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)], null),(cell_fn.cljs$core$IFn$_invoke$arity$1 ? cell_fn.cljs$core$IFn$_invoke$arity$1(c) : cell_fn.call(null,c))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$data_browser$table_view_$_iter__60667_$_iter__60679(cljs.core.rest(s__60680__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__60668__$2,temp__5735__auto__,hs,rows,map__60661,map__60661__$1,cell_fn))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)),athens$devcards$data_browser$table_view_$_iter__60667(cljs.core.rest(s__60668__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"map","map",1371690461)))?rows:cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,rows)));
})()], null)], null)], null);
});
athens.devcards.data_browser.coll_of_maps_QMARK_ = (function athens$devcards$data_browser$coll_of_maps_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.associative_QMARK_,x)) && ((!(cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,x)))));
});
athens.devcards.data_browser.tuples_QMARK_ = (function athens$devcards$data_browser$tuples_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,x)));
});
athens.devcards.data_browser.browser = (function athens$devcards$data_browser$browser(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60797 = arguments.length;
var i__4790__auto___60798 = (0);
while(true){
if((i__4790__auto___60798 < len__4789__auto___60797)){
args__4795__auto__.push((arguments[i__4790__auto___60798]));

var G__60799 = (i__4790__auto___60798 + (1));
i__4790__auto___60798 = G__60799;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return athens.devcards.data_browser.browser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(athens.devcards.data_browser.browser.cljs$core$IFn$_invoke$arity$variadic = (function (_,p__60689){
var vec__60690 = p__60689;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60690,(0),null);
var limit = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((10));
var increase_limit = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(limit,cljs.core._PLUS_,(10));
});
return (function() { 
var G__60801__delegate = function (result,___$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((athens.devcards.data_browser.coll_of_maps_QMARK_(result))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"maps","maps",-1711561134),cljs.core.deref(limit),opts):((((cljs.core.associative_QMARK_(result)) && ((!(cljs.core.sequential_QMARK_(result))))))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.deref(limit),opts):((athens.devcards.data_browser.tuples_QMARK_(result))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.deref(limit),opts):((cljs.core.coll_QMARK_(result))?athens.devcards.data_browser.table_view(result,new cljs.core.Keyword(null,"coll","coll",1647737163),cljs.core.deref(limit),opts):cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)
))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((((cljs.core.coll_QMARK_(result)) && ((!(cljs.core.map_QMARK_(result)))) && ((cljs.core.deref(limit) < cljs.core.count(result)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Showing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(limit))," out of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(result))," rows "].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),increase_limit,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"load more"], null)], null):null)], null)], null);
};
var G__60801 = function (result,var_args){
var ___$1 = null;
if (arguments.length > 1) {
var G__60805__i = 0, G__60805__a = new Array(arguments.length -  1);
while (G__60805__i < G__60805__a.length) {G__60805__a[G__60805__i] = arguments[G__60805__i + 1]; ++G__60805__i;}
  ___$1 = new cljs.core.IndexedSeq(G__60805__a,0,null);
} 
return G__60801__delegate.call(this,result,___$1);};
G__60801.cljs$lang$maxFixedArity = 1;
G__60801.cljs$lang$applyTo = (function (arglist__60806){
var result = cljs.core.first(arglist__60806);
var ___$1 = cljs.core.rest(arglist__60806);
return G__60801__delegate(result,___$1);
});
G__60801.cljs$core$IFn$_invoke$arity$variadic = G__60801__delegate;
return G__60801;
})()
;
}));

(athens.devcards.data_browser.browser.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(athens.devcards.data_browser.browser.cljs$lang$applyTo = (function (seq60687){
var G__60688 = cljs.core.first(seq60687);
var seq60687__$1 = cljs.core.next(seq60687);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60688,seq60687__$1);
}));


//# sourceMappingURL=athens.devcards.data_browser.js.map
