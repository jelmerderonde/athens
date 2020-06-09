goog.provide('athens.views');
goog.require('cljs.core');
goog.require('athens.page');
goog.require('athens.style');
goog.require('athens.subs');
goog.require('re_frame.core');
goog.require('reitit.frontend.easy');
athens.views.about_panel = (function athens$views$about_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About Panel"], null)], null);
});
athens.views.file_cb = (function athens$views$file_cb(e){
var fr = (new FileReader());
var file = e.target.files.item((0));
(fr.onload = (function (p1__51879_SHARP_){
var G__51880 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),p1__51879_SHARP_.target.result], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51880) : re_frame.core.dispatch.call(null,G__51880));
}));

return fr.readAsText(file);
});
athens.views.date_string = (function athens$views$date_string(x){
if((x < (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__51881 = cljs.core.PersistentArrayMap.EMPTY;
return (athens.style._PLUS_unknown_date.cljs$core$IFn$_invoke$arity$1 ? athens.style._PLUS_unknown_date.cljs$core$IFn$_invoke$arity$1(G__51881) : athens.style._PLUS_unknown_date.call(null,G__51881));
})(),"(unknown date)"], null);
} else {
return (new Date(x)).toLocaleString();
}
});
athens.views.table = (function athens$views$table(nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(function (){var G__51882 = cljs.core.PersistentArrayMap.EMPTY;
return (athens.style._PLUS_pages_table.cljs$core$IFn$_invoke$arity$1 ? athens.style._PLUS_pages_table.cljs$core$IFn$_invoke$arity$1(G__51882) : athens.style._PLUS_pages_table.call(null,G__51882));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),"Page"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),"Last Edit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),"Created At"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$views$table_$_iter__51883(s__51884){
return (new cljs.core.LazySeq(null,(function (){
var s__51884__$1 = s__51884;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51884__$1);
if(temp__5735__auto__){
var s__51884__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51884__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51884__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51886 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51885 = (0);
while(true){
if((i__51885 < size__4581__auto__)){
var map__51887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51885);
var map__51887__$1 = (((((!((map__51887 == null))))?(((((map__51887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51887):map__51887);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51887__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var bid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51887__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51887__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var c_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51887__$1,new cljs.core.Keyword("create","time","create/time",-1563077754));
var e_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51887__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
cljs.core.chunk_append(b__51886,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(24)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),bid], null))], null),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.views.date_string(c_time)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.views.date_string(e_time)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__51915 = (i__51885 + (1));
i__51885 = G__51915;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51886),athens$views$table_$_iter__51883(cljs.core.chunk_rest(s__51884__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51886),null);
}
} else {
var map__51890 = cljs.core.first(s__51884__$2);
var map__51890__$1 = (((((!((map__51890 == null))))?(((((map__51890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51890):map__51890);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51890__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var bid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51890__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51890__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var c_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51890__$1,new cljs.core.Keyword("create","time","create/time",-1563077754));
var e_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51890__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(24)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),bid], null))], null),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.views.date_string(c_time)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.views.date_string(e_time)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),athens$views$table_$_iter__51883(cljs.core.rest(s__51884__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(nodes);
})()], null)], null);
});
athens.views.pages_panel = (function athens$views$pages_panel(){
var nodes = (function (){var G__51892 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-nodes","pull-nodes",61183062)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51892) : re_frame.core.subscribe.call(null,G__51892));
})();
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Upload your DB ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),""], null),"(tutorial)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"name","name",1843675177),"file-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return athens.views.file_cb(e);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.table,cljs.core.deref(nodes)], null)], null);
});
});
athens.views.left_sidebar = (function athens$views$left_sidebar(){
return (function (){
var favorites = (function (){var G__51893 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51893) : re_frame.core.subscribe.call(null,G__51893));
})();
var current_route = (function (){var G__51894 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51894) : re_frame.core.subscribe.call(null,G__51894));
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 10px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(250)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pages","pages",-285406513))], null),"All /pages"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),"Current Route: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_route))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid gray",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var G__51895 = cljs.core.PersistentArrayMap.EMPTY;
return (athens.style._PLUS_left_sidebar.cljs$core$IFn$_invoke$arity$1 ? athens.style._PLUS_left_sidebar.cljs$core$IFn$_invoke$arity$1(G__51895) : athens.style._PLUS_left_sidebar.call(null,G__51895));
})(),(function (){var iter__4582__auto__ = (function athens$views$left_sidebar_$_iter__51896(s__51897){
return (new cljs.core.LazySeq(null,(function (){
var s__51897__$1 = s__51897;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51897__$1);
if(temp__5735__auto__){
var s__51897__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51897__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51897__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51899 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51898 = (0);
while(true){
if((i__51898 < size__4581__auto__)){
var vec__51900 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51898);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51900,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51900,(1),null);
var bid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51900,(2),null);
cljs.core.chunk_append(b__51899,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),bid], null))], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),bid], null)));

var G__51918 = (i__51898 + (1));
i__51898 = G__51918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51899),athens$views$left_sidebar_$_iter__51896(cljs.core.chunk_rest(s__51897__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51899),null);
}
} else {
var vec__51903 = cljs.core.first(s__51897__$2);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51903,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51903,(1),null);
var bid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51903,(2),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),bid], null))], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),bid], null)),athens$views$left_sidebar_$_iter__51896(cljs.core.rest(s__51897__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(favorites));
})()], null)], null);
});
});
/**
 * When `:errors` subscription is updated, global alert will be called with its contents and then cleared.
 */
athens.views.alert = (function athens$views$alert(){
var errors = (function (){var G__51906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51906) : re_frame.core.subscribe.call(null,G__51906));
})();
if(cljs.core.seq(cljs.core.deref(errors))){
alert(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(errors)));

var G__51907 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__51907) : re_frame.core.dispatch.call(null,G__51907));
} else {
return null;
}
});
athens.views.match_panel = (function athens$views$match_panel(name){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51908 = name;
var G__51908__$1 = (((G__51908 instanceof cljs.core.Keyword))?G__51908.fqn:null);
switch (G__51908__$1) {
case "about":
return athens.views.about_panel;

break;
case "pages":
return athens.views.pages_panel;

break;
case "page":
return athens.page.main;

break;
default:
return athens.views.pages_panel;

}
})()], null);
});
athens.views.main_panel = (function athens$views$main_panel(){
var current_route = (function (){var G__51909 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51909) : re_frame.core.subscribe.call(null,G__51909));
})();
var loading = (function (){var G__51910 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51910) : re_frame.core.subscribe.call(null,G__51910));
})();
return (function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.alert], null);

if(cljs.core.truth_(cljs.core.deref(loading))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.style.loading_css], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"loading-text"], null),"Loading database..."], null)], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.style.main_css], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.left_sidebar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.match_panel,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_route)))], null)], null);
}
});
});

//# sourceMappingURL=athens.views.js.map
