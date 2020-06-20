goog.provide('athens.events');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.patterns');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('day8.re_frame.async_flow_fx');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('re_posh.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = athens.db.rfdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e47851){var e = e47851;
throw e;
}}):(function (_,___$1){
return athens.db.rfdb;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"athena","athena",-1523991628),cljs.core.not(new cljs.core.Keyword(null,"athena","athena",-1523991628).cljs$core$IFn$_invoke$arity$1(db)));
}));
var G__47852_48568 = new cljs.core.Keyword(null,"http","http",382524695);
var G__47853_48569 = (function (p__47854){
var map__47855 = p__47854;
var map__47855__$1 = (((((!((map__47855 == null))))?(((((map__47855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47855):map__47855);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47855__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47855__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47855__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47855__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47855__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_47925){
var state_val_47926 = (state_47925[(1)]);
if((state_val_47926 === (7))){
var inst_47884 = (state_47925[(7)]);
var inst_47884__$1 = (state_47925[(2)]);
var inst_47888 = (inst_47884__$1 == null);
var inst_47889 = cljs.core.not(inst_47888);
var state_47925__$1 = (function (){var statearr_47939 = state_47925;
(statearr_47939[(7)] = inst_47884__$1);

return statearr_47939;
})();
if(inst_47889){
var statearr_47944_48587 = state_47925__$1;
(statearr_47944_48587[(1)] = (8));

} else {
var statearr_47945_48589 = state_47925__$1;
(statearr_47945_48589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (1))){
var state_47925__$1 = state_47925;
var G__47946_48594 = method;
var G__47946_48595__$1 = (((G__47946_48594 instanceof cljs.core.Keyword))?G__47946_48594.fqn:null);
switch (G__47946_48595__$1) {
case "post":
var statearr_47957_48604 = state_47925__$1;
(statearr_47957_48604[(1)] = (3));


break;
case "get":
var statearr_47958_48606 = state_47925__$1;
(statearr_47958_48606[(1)] = (4));


break;
case "put":
var statearr_47959_48612 = state_47925__$1;
(statearr_47959_48612[(1)] = (5));


break;
case "delete":
var statearr_47961_48614 = state_47925__$1;
(statearr_47961_48614[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47946_48595__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (4))){
var state_47925__$1 = state_47925;
var statearr_47977_48620 = state_47925__$1;
(statearr_47977_48620[(2)] = cljs_http.client.get);

(statearr_47977_48620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (15))){
var inst_47884 = (state_47925[(7)]);
var state_47925__$1 = state_47925;
var statearr_47988_48628 = state_47925__$1;
(statearr_47988_48628[(2)] = inst_47884);

(statearr_47988_48628[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (13))){
var inst_47901 = (state_47925[(2)]);
var state_47925__$1 = state_47925;
var statearr_47995_48634 = state_47925__$1;
(statearr_47995_48634[(2)] = inst_47901);

(statearr_47995_48634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (6))){
var state_47925__$1 = state_47925;
var statearr_47999_48641 = state_47925__$1;
(statearr_47999_48641[(2)] = cljs_http.client.delete$);

(statearr_47999_48641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (17))){
var inst_47911 = (state_47925[(8)]);
var inst_47914 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_47911);
var inst_47915 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_47914) : re_frame.core.dispatch.call(null,inst_47914));
var state_47925__$1 = state_47925;
var statearr_48001_48651 = state_47925__$1;
(statearr_48001_48651[(2)] = inst_47915);

(statearr_48001_48651[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (3))){
var state_47925__$1 = state_47925;
var statearr_48010_48656 = state_47925__$1;
(statearr_48010_48656[(2)] = cljs_http.client.post);

(statearr_48010_48656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (12))){
var state_47925__$1 = state_47925;
var statearr_48013_48657 = state_47925__$1;
(statearr_48013_48657[(2)] = false);

(statearr_48013_48657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (2))){
var inst_47877 = (state_47925[(2)]);
var inst_47882 = (inst_47877.cljs$core$IFn$_invoke$arity$2 ? inst_47877.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_47877.call(null,url,opts));
var state_47925__$1 = state_47925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47925__$1,(7),inst_47882);
} else {
if((state_val_47926 === (19))){
var inst_47920 = (state_47925[(2)]);
var state_47925__$1 = state_47925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47925__$1,inst_47920);
} else {
if((state_val_47926 === (11))){
var state_47925__$1 = state_47925;
var statearr_48017_48659 = state_47925__$1;
(statearr_48017_48659[(2)] = true);

(statearr_48017_48659[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (9))){
var state_47925__$1 = state_47925;
var statearr_48018_48661 = state_47925__$1;
(statearr_48018_48661[(2)] = false);

(statearr_48018_48661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (5))){
var state_47925__$1 = state_47925;
var statearr_48022_48662 = state_47925__$1;
(statearr_48022_48662[(2)] = cljs_http.client.put);

(statearr_48022_48662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (14))){
var inst_47884 = (state_47925[(7)]);
var inst_47906 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47884);
var state_47925__$1 = state_47925;
var statearr_48024_48665 = state_47925__$1;
(statearr_48024_48665[(2)] = inst_47906);

(statearr_48024_48665[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (16))){
var inst_47909 = (state_47925[(9)]);
var inst_47909__$1 = (state_47925[(2)]);
var inst_47910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47909__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_47911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47909__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_47925__$1 = (function (){var statearr_48027 = state_47925;
(statearr_48027[(9)] = inst_47909__$1);

(statearr_48027[(8)] = inst_47911);

return statearr_48027;
})();
if(cljs.core.truth_(inst_47910)){
var statearr_48029_48668 = state_47925__$1;
(statearr_48029_48668[(1)] = (17));

} else {
var statearr_48031_48669 = state_47925__$1;
(statearr_48031_48669[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (10))){
var inst_47904 = (state_47925[(2)]);
var state_47925__$1 = state_47925;
if(cljs.core.truth_(inst_47904)){
var statearr_48032_48671 = state_47925__$1;
(statearr_48032_48671[(1)] = (14));

} else {
var statearr_48033_48672 = state_47925__$1;
(statearr_48033_48672[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (18))){
var inst_47909 = (state_47925[(9)]);
var inst_47917 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_47909);
var inst_47918 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_47917) : re_frame.core.dispatch.call(null,inst_47917));
var state_47925__$1 = state_47925;
var statearr_48036_48674 = state_47925__$1;
(statearr_48036_48674[(2)] = inst_47918);

(statearr_48036_48674[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47926 === (8))){
var inst_47884 = (state_47925[(7)]);
var inst_47892 = inst_47884.cljs$lang$protocol_mask$partition0$;
var inst_47893 = (inst_47892 & (64));
var inst_47894 = inst_47884.cljs$core$ISeq$;
var inst_47895 = (cljs.core.PROTOCOL_SENTINEL === inst_47894);
var inst_47896 = ((inst_47893) || (inst_47895));
var state_47925__$1 = state_47925;
if(cljs.core.truth_(inst_47896)){
var statearr_48041_48680 = state_47925__$1;
(statearr_48041_48680[(1)] = (11));

} else {
var statearr_48042_48682 = state_47925__$1;
(statearr_48042_48682[(1)] = (12));

}

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
}
}
}
}
}
});
return (function() {
var athens$events$state_machine__41713__auto__ = null;
var athens$events$state_machine__41713__auto____0 = (function (){
var statearr_48052 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48052[(0)] = athens$events$state_machine__41713__auto__);

(statearr_48052[(1)] = (1));

return statearr_48052;
});
var athens$events$state_machine__41713__auto____1 = (function (state_47925){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_47925);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e48055){if((e48055 instanceof Object)){
var ex__41716__auto__ = e48055;
var statearr_48056_48695 = state_47925;
(statearr_48056_48695[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48698 = state_47925;
state_47925 = G__48698;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$events$state_machine__41713__auto__ = function(state_47925){
switch(arguments.length){
case 0:
return athens$events$state_machine__41713__auto____0.call(this);
case 1:
return athens$events$state_machine__41713__auto____1.call(this,state_47925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$events$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$events$state_machine__41713__auto____0;
athens$events$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$events$state_machine__41713__auto____1;
return athens$events$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_48068 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_48068[(6)] = c__41735__auto__);

return statearr_48068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__47852_48568,G__47853_48569) : re_frame.core.reg_fx.call(null,G__47852_48568,G__47853_48569));
var G__48077_48712 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__48078_48713 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__48080){
var map__48081 = p__48080;
var map__48081__$1 = (((((!((map__48081 == null))))?(((((map__48081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48081):map__48081);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48081__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48081__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48081__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48081__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__48086 = action;
var G__48086__$1 = (((G__48086 instanceof cljs.core.Keyword))?G__48086.fqn:null);
switch (G__48086__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48086__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__48077_48712,G__48078_48713) : re_frame.core.reg_fx.call(null,G__48077_48712,G__48078_48713));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945)], null)], null)], null);
}));
var G__48092_48730 = new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577);
var G__48093_48731 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__48098){
var vec__48100 = p__48098;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100,(1),null);
var _PLUS_debux_dbg_opts_PLUS__48732 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))));

var opts__47121__auto___48740 = _PLUS_debux_dbg_opts_PLUS__48732;
var result__47122__auto___48741 = datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS__48732;
var result__47122__auto___48741 = athens.db.dsdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto___48741,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto___48741;
})(),(function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS__48732;
var result__47122__auto___48741 = (function (){var G__48120 = (function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS__48732;
var result__47122__auto___48741 = athens.db.schema;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto___48741,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","schema","db/schema",58525766,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47122__auto___48741;
})();
return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(G__48120) : datascript.core.empty_db.call(null,G__48120));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto___48741,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto___48741;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto___48741,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e48115){var e_48748 = e48115;
throw e_48748;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = athens.db.str_to_db_tx((function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = json_str;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e48123){var e = e48123;
throw e;
}}):(function (_,p__48129){
var vec__48131 = p__48129;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48131,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48131,(1),null);
datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));

return athens.db.str_to_db_tx(json_str);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__48092_48730,G__48093_48731) : re_posh.core.reg_event_ds.call(null,G__48092_48730,G__48093_48731));
var G__48140_48766 = new cljs.core.Keyword("block","toggle-open","block/toggle-open",2080151710);
var G__48141_48767 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__48142){
var vec__48144 = p__48142;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48144,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48144,(1),null);
var open_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48144,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null)], null));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = eid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47122__auto__;
})(),new cljs.core.Keyword("block","open","block/open",-1875254829),(function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = cljs.core.not((function (){var opts__47121__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = open_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47122__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47122__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e48158){var e = e48158;
throw e;
}}):(function (_,p__48164){
var vec__48165 = p__48164;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48165,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48165,(1),null);
var open_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48165,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.not(open_state)], null)], null);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__48140_48766,G__48141_48767) : re_posh.core.reg_event_ds.call(null,G__48140_48766,G__48141_48767));
athens.events.node_with_title = (function athens$events$node_with_title(ds,title){
var G__48169 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null)], null);
var G__48170 = ds;
var G__48171 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__48169,G__48170,G__48171) : datascript.core.q.call(null,G__48169,G__48170,G__48171));
});
athens.events.referencing_blocks = (function athens$events$referencing_blocks(ds,title){
var G__48184 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?s","?s",456183954,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__48185 = ds;
var G__48186 = athens.patterns.linked(title);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__48184,G__48185,G__48186) : datascript.core.q.call(null,G__48184,G__48185,G__48186));
});
athens.events.rename_refs_tx = (function athens$events$rename_refs_tx(old_title,new_title,p__48191){
var vec__48192 = p__48191;
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48192,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48192,(1),null);
var new_s = clojure.string.replace(s,athens.patterns.linked(old_title),["$1$3$4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_title),"$2$5"].join(''));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","string","block/string",-2066596447),new_s], null);
});
athens.events.rename_tx = (function athens$events$rename_tx(ds,old_title,new_title){
var eid = athens.events.node_with_title(ds,old_title);
var blocks = athens.events.referencing_blocks(ds,old_title);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("node","title","node/title",628940777),new_title], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(athens.events.rename_refs_tx,old_title,new_title),blocks));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("node","renamed","node/renamed",-1655200587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48226 = new cljs.core.Keyword(null,"ds","ds",-257415859);
return (re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__48226) : re_posh.core.inject_cofx.call(null,G__48226));
})()], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__48235,p__48236){
var map__48238 = p__48235;
var map__48238__$1 = (((((!((map__48238 == null))))?(((((map__48238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48238):map__48238);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48238__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48238__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__48239 = p__48236;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48239,(0),null);
var old_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48239,(1),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48239,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null))));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = (((function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = old_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47122__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})())?(function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = (cljs.core.truth_((function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = athens.events.node_with_title((function (){var opts__47121__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = ds;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__47122__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47122__auto__;
})())?(function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),old_title,new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new_title], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47122__auto__;
})():(function (){var opts__47121__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.rename_tx(ds,old_title,new_title)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__47122__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})():null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e48387){var e = e48387;
throw e;
}}):(function (p__48393,p__48394){
var map__48395 = p__48393;
var map__48395__$1 = (((((!((map__48395 == null))))?(((((map__48395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48395):map__48395);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48395__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48395__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__48396 = p__48394;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48396,(0),null);
var old_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48396,(1),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48396,(2),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_title,new_title)){
if(cljs.core.truth_(athens.events.node_with_title(ds,new_title))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),old_title,new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new_title], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.rename_tx(ds,old_title,new_title)], null);
}
} else {
return null;
}
})));
athens.events.count_children = (function athens$events$count_children(ds,title){
var G__48410 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?children","?children",2075030425,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?children","?children",2075030425,null)], null)], null);
var G__48411 = ds;
var G__48412 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__48410,G__48411,G__48412) : datascript.core.q.call(null,G__48410,G__48411,G__48412));
});
athens.events.get_children_eids = (function athens$events$get_children_eids(ds,title){
var G__48420 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?children","?children",2075030425,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?children","?children",2075030425,null)], null)], null);
var G__48421 = ds;
var G__48422 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__48420,G__48421,G__48422) : datascript.core.q.call(null,G__48420,G__48421,G__48422));
});
athens.events.move_blocks_tx = (function athens$events$move_blocks_tx(ds,from_title,to_title){
var block_count = athens.events.count_children(ds,to_title);
var block_eids = athens.events.get_children_eids(ds,from_title);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (eid){
var order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1((function (){var G__48426 = ds;
var G__48427 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","order","block/order",-1429282437)], null);
var G__48428 = eid;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__48426,G__48427,G__48428) : datascript.core.pull.call(null,G__48426,G__48427,G__48428));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),to_title], null),new cljs.core.Keyword("block","children","block/children",-1040716209),eid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","order","block/order",-1429282437),(order + block_count)], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_eids], 0));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("node","merged","node/merged",1662072257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48432 = new cljs.core.Keyword(null,"ds","ds",-257415859);
return (re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__48432) : re_posh.core.inject_cofx.call(null,G__48432));
})()], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__48440,p__48441){
var map__48445 = p__48440;
var map__48445__$1 = (((((!((map__48445 == null))))?(((((map__48445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48445):map__48445);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48445__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48445__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__48446 = p__48441;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48446,(0),null);
var primary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48446,(1),null);
var secondary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48446,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"move-blocks-tx","move-blocks-tx",857400980,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null)),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)))], null));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),secondary_title], null)], null)], null),athens.events.move_blocks_tx(ds,secondary_title,primary_title),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.events.rename_tx(ds,primary_title,secondary_title)], 0))], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"move-blocks-tx","move-blocks-tx",857400980,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null)),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e48464){var e = e48464;
throw e;
}}):(function (p__48474,p__48475){
var map__48476 = p__48474;
var map__48476__$1 = (((((!((map__48476 == null))))?(((((map__48476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48476):map__48476);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48476__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48476__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__48477 = p__48475;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48477,(0),null);
var primary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48477,(1),null);
var secondary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48477,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),secondary_title], null)], null)], null),athens.events.move_blocks_tx(ds,secondary_title,primary_title),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.events.rename_tx(ds,primary_title,secondary_title)], 0))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__48492,_){
var map__48495 = p__48492;
var map__48495__$1 = (((((!((map__48495 == null))))?(((((map__48495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48495):map__48495);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48495__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e48500){var e = e48500;
throw e;
}}):(function (p__48501,_){
var map__48503 = p__48501;
var map__48503__$1 = (((((!((map__48503 == null))))?(((((map__48503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48503):map__48503);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48503__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,error){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = cljs.core.assoc_in((function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = error;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e48520){var e = e48520;
throw e;
}}):(function (db,error){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),error);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = cljs.core.assoc_in((function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e48527){var e = e48527;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = cljs.core.assoc_in((function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})(),(function (){var opts__47121__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47122__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e48539){var e = e48539;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
})));
athens.events.boot_flow = (function athens$events$boot_flow(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boot","boot",2007860585),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null));

var opts__47121__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47122__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47122__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47122__auto__;
}catch (e48551){var e = e48551;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
})));

//# sourceMappingURL=athens.events.js.map
