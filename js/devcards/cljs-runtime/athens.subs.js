goog.provide('athens.subs');
goog.require('cljs.core');
goog.require('athens.blocks');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('re_posh.core');
var G__54335_54434 = new cljs.core.Keyword(null,"user","user",1532431356);
var G__54336_54435 = (function (db,_){
return new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54335_54434,G__54336_54435) : re_frame.core.reg_sub.call(null,G__54335_54434,G__54336_54435));
var G__54337_54436 = new cljs.core.Keyword(null,"app-db","app-db",865606302);
var G__54338_54437 = (function (db,_){
return db;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54337_54436,G__54338_54437) : re_frame.core.reg_sub.call(null,G__54337_54436,G__54338_54437));
var G__54339_54438 = new cljs.core.Keyword(null,"errors","errors",-908790718);
var G__54340_54439 = (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54339_54438,G__54340_54439) : re_frame.core.reg_sub.call(null,G__54339_54438,G__54340_54439));
var G__54342_54440 = new cljs.core.Keyword(null,"loading","loading",-737050189);
var G__54343_54441 = (function (db,_){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54342_54440,G__54343_54441) : re_frame.core.reg_sub.call(null,G__54342_54440,G__54343_54441));
var G__54344_54442 = new cljs.core.Keyword(null,"athena","athena",-1523991628);
var G__54345_54443 = (function (db,_){
return new cljs.core.Keyword(null,"athena","athena",-1523991628).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54344_54442,G__54345_54443) : re_frame.core.reg_sub.call(null,G__54344_54442,G__54345_54443));
var G__54346_54444 = new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084);
var G__54347_54445 = (function (db,_){
return new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__54346_54444,G__54347_54445) : re_frame.core.reg_sub.call(null,G__54346_54444,G__54347_54445));
var G__54348_54446 = new cljs.core.Keyword(null,"nodes","nodes",-2099585805);
var G__54349_54447 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__54348_54446,G__54349_54447) : re_posh.core.reg_query_sub.call(null,G__54348_54446,G__54349_54447));
var G__54350_54448 = new cljs.core.Keyword("node","refs","node/refs",-1563406590);
var G__54351_54449 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__54350_54448,G__54351_54449) : re_posh.core.reg_query_sub.call(null,G__54350_54448,G__54351_54449));
var G__54352_54450 = new cljs.core.Keyword("page","sidebar","page/sidebar",32416927);
var G__54353_54451 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__54352_54450,G__54353_54451) : re_posh.core.reg_query_sub.call(null,G__54352_54450,G__54353_54451));
var G__54354_54452 = new cljs.core.Keyword(null,"node","node",581201198);
var G__54355_54453 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__54354_54452,G__54355_54453) : re_posh.core.reg_pull_sub.call(null,G__54354_54452,G__54355_54453));
var G__54356_54454 = new cljs.core.Keyword("block","uid","block/uid",-1623585167);
var G__54357_54455 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__54356_54454,G__54357_54455) : re_posh.core.reg_pull_sub.call(null,G__54356_54454,G__54357_54455));
var G__54358_54456 = new cljs.core.Keyword("block","string","block/string",-2066596447);
var G__54359_54457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__54358_54456,G__54359_54457) : re_posh.core.reg_pull_sub.call(null,G__54358_54456,G__54359_54457));
var G__54360_54458 = new cljs.core.Keyword(null,"blocks","blocks",-610462153);
var G__54361_54459 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__54360_54458,G__54361_54459) : re_posh.core.reg_pull_sub.call(null,G__54360_54458,G__54361_54459));
var G__54362_54460 = new cljs.core.Keyword("block","children","block/children",-1040716209);
var G__54363_54461 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","open","block/open",-1875254829),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__54362_54460,G__54363_54461) : re_posh.core.reg_pull_sub.call(null,G__54362_54460,G__54363_54461));
var G__54364_54462 = new cljs.core.Keyword("block","children-sorted","block/children-sorted",106153544);
var G__54365_54463 = (function (p__54367,_){
var vec__54368 = p__54367;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54368,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54368,(1),null);
var G__54371 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","children","block/children",-1040716209),id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54371) : re_posh.core.subscribe.call(null,G__54371));
});
var G__54366_54464 = (function (block,_){
return athens.blocks.sort_block(block);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__54364_54462,G__54365_54463,G__54366_54464) : re_frame.core.reg_sub.call(null,G__54364_54462,G__54365_54463,G__54366_54464));
var G__54372_54465 = new cljs.core.Keyword("block","_children","block/_children",1128070632);
var G__54373_54466 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__54372_54465,G__54373_54466) : re_posh.core.reg_pull_sub.call(null,G__54372_54465,G__54373_54466));
var G__54374_54467 = new cljs.core.Keyword("block","_children2","block/_children2",-1277243604);
var G__54375_54468 = (function (p__54380,_){
var vec__54385 = p__54380;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54385,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54385,(1),null);
var G__54388 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","_children","block/_children",1128070632),id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__54388) : re_posh.core.subscribe.call(null,G__54388));
});
var G__54376_54469 = (function (block,_){
return cljs.core.reverse(cljs.core.rest((function (){var b = block;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,b);
} else {
var G__54471 = cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(b));
var G__54472 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword("block","_children","block/_children",1128070632)));
b = G__54471;
res = G__54472;
continue;
}
break;
}
})()));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__54374_54467,G__54375_54468,G__54376_54469) : re_frame.core.reg_sub.call(null,G__54374_54467,G__54375_54468,G__54376_54469));
var G__54406_54473 = new cljs.core.Keyword(null,"pull-nodes","pull-nodes",61183062);
var G__54407_54474 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54408_54475 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null);
var G__54409_54476 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (nodes,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null)], null));

var opts__48701__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__48702__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"ids","ids",-998535796),nodes], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__48702__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__48702__auto__;
}catch (e54410){var e = e54410;
throw e;
}}):(function (nodes,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"ids","ids",-998535796),nodes], null);
}));
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__54406_54473,G__54407_54474,G__54408_54475,G__54409_54476) : re_posh.core.reg_sub.call(null,G__54406_54473,G__54407_54474,G__54408_54475,G__54409_54476));
var G__54411_54506 = new cljs.core.Keyword(null,"favorites","favorites",1740773480);
var G__54412_54507 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__54413_54508 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","sidebar","page/sidebar",32416927)], null);
var G__54414_54509 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (nodes,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"first","first",996428481,null))));

return debux.common.util.spy_last(cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"first","first",996428481,null)),(0),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (){var opts__48701__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__48702__auto__ = cljs.core.first;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__48702__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__48702__auto__;
})(),debux.common.util.spy_last(cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY),(1),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var opts__48701__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__48702__auto__ = cljs.core.PersistentVector.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__48702__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__48702__auto__;
})(),debux.common.util.spy_last(new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),(2),nodes)))));
}catch (e54433){var e = e54433;
throw e;
}}):(function (nodes,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,nodes));
}));
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__54411_54506,G__54412_54507,G__54413_54508,G__54414_54509) : re_frame.core.reg_sub.call(null,G__54411_54506,G__54412_54507,G__54413_54508,G__54414_54509));

//# sourceMappingURL=athens.subs.js.map
