goog.provide('athens.subs');
goog.require('cljs.core');
goog.require('athens.blocks');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('re_posh.core');
var G__51226_51376 = new cljs.core.Keyword(null,"user","user",1532431356);
var G__51227_51377 = (function (db,_){
return new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51226_51376,G__51227_51377) : re_frame.core.reg_sub.call(null,G__51226_51376,G__51227_51377));
var G__51228_51379 = new cljs.core.Keyword(null,"errors","errors",-908790718);
var G__51229_51380 = (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51228_51379,G__51229_51380) : re_frame.core.reg_sub.call(null,G__51228_51379,G__51229_51380));
var G__51232_51383 = new cljs.core.Keyword(null,"loading","loading",-737050189);
var G__51233_51384 = (function (db,_){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51232_51383,G__51233_51384) : re_frame.core.reg_sub.call(null,G__51232_51383,G__51233_51384));
var G__51235_51391 = new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084);
var G__51236_51392 = (function (db,_){
return new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__51235_51391,G__51236_51392) : re_frame.core.reg_sub.call(null,G__51235_51391,G__51236_51392));
var G__51257_51396 = new cljs.core.Keyword(null,"nodes","nodes",-2099585805);
var G__51258_51397 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__51257_51396,G__51258_51397) : re_posh.core.reg_query_sub.call(null,G__51257_51396,G__51258_51397));
var G__51259_51401 = new cljs.core.Keyword("node","refs","node/refs",-1563406590);
var G__51260_51402 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__51259_51401,G__51260_51402) : re_posh.core.reg_query_sub.call(null,G__51259_51401,G__51260_51402));
var G__51261_51407 = new cljs.core.Keyword("page","sidebar","page/sidebar",32416927);
var G__51262_51408 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__51261_51407,G__51262_51408) : re_posh.core.reg_query_sub.call(null,G__51261_51407,G__51262_51408));
var G__51263_51409 = new cljs.core.Keyword(null,"node","node",581201198);
var G__51264_51410 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__51263_51409,G__51264_51410) : re_posh.core.reg_pull_sub.call(null,G__51263_51409,G__51264_51410));
var G__51265_51411 = new cljs.core.Keyword("block","uid","block/uid",-1623585167);
var G__51266_51412 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__51265_51411,G__51266_51412) : re_posh.core.reg_pull_sub.call(null,G__51265_51411,G__51266_51412));
var G__51267_51413 = new cljs.core.Keyword("block","string","block/string",-2066596447);
var G__51268_51414 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__51267_51413,G__51268_51414) : re_posh.core.reg_pull_sub.call(null,G__51267_51413,G__51268_51414));
var G__51269_51417 = new cljs.core.Keyword(null,"blocks","blocks",-610462153);
var G__51270_51418 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__51269_51417,G__51270_51418) : re_posh.core.reg_pull_sub.call(null,G__51269_51417,G__51270_51418));
var G__51312_51425 = new cljs.core.Keyword("block","children","block/children",-1040716209);
var G__51313_51426 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","open","block/open",-1875254829),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__51312_51425,G__51313_51426) : re_posh.core.reg_pull_sub.call(null,G__51312_51425,G__51313_51426));
var G__51314_51431 = new cljs.core.Keyword("block","children-sorted","block/children-sorted",106153544);
var G__51315_51432 = (function (p__51318,_){
var vec__51319 = p__51318;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51319,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51319,(1),null);
var G__51322 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","children","block/children",-1040716209),id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51322) : re_posh.core.subscribe.call(null,G__51322));
});
var G__51316_51433 = (function (block,_){
return athens.blocks.sort_block(block);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__51314_51431,G__51315_51432,G__51316_51433) : re_frame.core.reg_sub.call(null,G__51314_51431,G__51315_51432,G__51316_51433));
var G__51326_51435 = new cljs.core.Keyword("block","_children","block/_children",1128070632);
var G__51327_51436 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__51326_51435,G__51327_51436) : re_posh.core.reg_pull_sub.call(null,G__51326_51435,G__51327_51436));
var G__51328_51438 = new cljs.core.Keyword("block","_children2","block/_children2",-1277243604);
var G__51329_51439 = (function (p__51332,_){
var vec__51334 = p__51332;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51334,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51334,(1),null);
var G__51337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","_children","block/_children",1128070632),id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__51337) : re_posh.core.subscribe.call(null,G__51337));
});
var G__51330_51440 = (function (block,_){
return cljs.core.reverse(cljs.core.rest((function (){var b = block;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,b);
} else {
var G__51452 = cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(b));
var G__51453 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword("block","_children","block/_children",1128070632)));
b = G__51452;
res = G__51453;
continue;
}
break;
}
})()));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__51328_51438,G__51329_51439,G__51330_51440) : re_frame.core.reg_sub.call(null,G__51328_51438,G__51329_51439,G__51330_51440));
var G__51344_51454 = new cljs.core.Keyword(null,"pull-nodes","pull-nodes",61183062);
var G__51345_51455 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51346_51456 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null);
var G__51347_51457 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (nodes,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null)], null));

var opts__47114__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47115__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"ids","ids",-998535796),nodes], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47115__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47115__auto__;
}catch (e51352){var e = e51352;
throw e;
}}):(function (nodes,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"ids","ids",-998535796),nodes], null);
}));
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51344_51454,G__51345_51455,G__51346_51456,G__51347_51457) : re_posh.core.reg_sub.call(null,G__51344_51454,G__51345_51455,G__51346_51456,G__51347_51457));
var G__51356_51461 = new cljs.core.Keyword(null,"favorites","favorites",1740773480);
var G__51357_51462 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__51358_51463 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","sidebar","page/sidebar",32416927)], null);
var G__51359_51464 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (nodes,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"first","first",996428481,null))));

return debux.common.util.spy_last(cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"first","first",996428481,null)),(0),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (){var opts__47114__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47115__auto__ = cljs.core.first;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47115__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47115__auto__;
})(),debux.common.util.spy_last(cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY),(1),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var opts__47114__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47115__auto__ = cljs.core.PersistentVector.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47115__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47115__auto__;
})(),debux.common.util.spy_last(new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),(2),nodes)))));
}catch (e51368){var e = e51368;
throw e;
}}):(function (nodes,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,nodes));
}));
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__51356_51461,G__51357_51462,G__51358_51463,G__51359_51464) : re_frame.core.reg_sub.call(null,G__51356_51461,G__51357_51462,G__51358_51463,G__51359_51464));

//# sourceMappingURL=athens.subs.js.map
