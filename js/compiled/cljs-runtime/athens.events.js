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

var opts__69036__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = athens.db.rfdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__69037__auto__;
}catch (e70604){var e = e70604;
throw e;
}}):(function (_,___$1){
return athens.db.rfdb;
})));
var G__70605_70859 = new cljs.core.Keyword(null,"http","http",382524695);
var G__70606_70860 = (function (p__70607){
var map__70608 = p__70607;
var map__70608__$1 = (((((!((map__70608 == null))))?(((((map__70608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70608):map__70608);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70608__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70608__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70608__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70608__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70608__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__46126__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46058__auto__ = (function (state_70652){
var state_val_70653 = (state_70652[(1)]);
if((state_val_70653 === (7))){
var inst_70619 = (state_70652[(7)]);
var inst_70619__$1 = (state_70652[(2)]);
var inst_70621 = (inst_70619__$1 == null);
var inst_70622 = cljs.core.not(inst_70621);
var state_70652__$1 = (function (){var statearr_70654 = state_70652;
(statearr_70654[(7)] = inst_70619__$1);

return statearr_70654;
})();
if(inst_70622){
var statearr_70655_70862 = state_70652__$1;
(statearr_70655_70862[(1)] = (8));

} else {
var statearr_70656_70863 = state_70652__$1;
(statearr_70656_70863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (1))){
var state_70652__$1 = state_70652;
var G__70657_70866 = method;
var G__70657_70867__$1 = (((G__70657_70866 instanceof cljs.core.Keyword))?G__70657_70866.fqn:null);
switch (G__70657_70867__$1) {
case "post":
var statearr_70658_70869 = state_70652__$1;
(statearr_70658_70869[(1)] = (3));


break;
case "get":
var statearr_70659_70871 = state_70652__$1;
(statearr_70659_70871[(1)] = (4));


break;
case "put":
var statearr_70660_70872 = state_70652__$1;
(statearr_70660_70872[(1)] = (5));


break;
case "delete":
var statearr_70661_70873 = state_70652__$1;
(statearr_70661_70873[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__70657_70867__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (4))){
var state_70652__$1 = state_70652;
var statearr_70662_70874 = state_70652__$1;
(statearr_70662_70874[(2)] = cljs_http.client.get);

(statearr_70662_70874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (15))){
var inst_70619 = (state_70652[(7)]);
var state_70652__$1 = state_70652;
var statearr_70663_70875 = state_70652__$1;
(statearr_70663_70875[(2)] = inst_70619);

(statearr_70663_70875[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (13))){
var inst_70632 = (state_70652[(2)]);
var state_70652__$1 = state_70652;
var statearr_70664_70881 = state_70652__$1;
(statearr_70664_70881[(2)] = inst_70632);

(statearr_70664_70881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (6))){
var state_70652__$1 = state_70652;
var statearr_70665_70884 = state_70652__$1;
(statearr_70665_70884[(2)] = cljs_http.client.delete$);

(statearr_70665_70884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (17))){
var inst_70642 = (state_70652[(8)]);
var inst_70644 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_70642);
var inst_70645 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_70644) : re_frame.core.dispatch.call(null,inst_70644));
var state_70652__$1 = state_70652;
var statearr_70666_70885 = state_70652__$1;
(statearr_70666_70885[(2)] = inst_70645);

(statearr_70666_70885[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (3))){
var state_70652__$1 = state_70652;
var statearr_70667_70886 = state_70652__$1;
(statearr_70667_70886[(2)] = cljs_http.client.post);

(statearr_70667_70886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (12))){
var state_70652__$1 = state_70652;
var statearr_70668_70889 = state_70652__$1;
(statearr_70668_70889[(2)] = false);

(statearr_70668_70889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (2))){
var inst_70616 = (state_70652[(2)]);
var inst_70617 = (inst_70616.cljs$core$IFn$_invoke$arity$2 ? inst_70616.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_70616.call(null,url,opts));
var state_70652__$1 = state_70652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70652__$1,(7),inst_70617);
} else {
if((state_val_70653 === (19))){
var inst_70650 = (state_70652[(2)]);
var state_70652__$1 = state_70652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70652__$1,inst_70650);
} else {
if((state_val_70653 === (11))){
var state_70652__$1 = state_70652;
var statearr_70669_70892 = state_70652__$1;
(statearr_70669_70892[(2)] = true);

(statearr_70669_70892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (9))){
var state_70652__$1 = state_70652;
var statearr_70670_70893 = state_70652__$1;
(statearr_70670_70893[(2)] = false);

(statearr_70670_70893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (5))){
var state_70652__$1 = state_70652;
var statearr_70671_70894 = state_70652__$1;
(statearr_70671_70894[(2)] = cljs_http.client.put);

(statearr_70671_70894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (14))){
var inst_70619 = (state_70652[(7)]);
var inst_70637 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_70619);
var state_70652__$1 = state_70652;
var statearr_70672_70896 = state_70652__$1;
(statearr_70672_70896[(2)] = inst_70637);

(statearr_70672_70896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (16))){
var inst_70640 = (state_70652[(9)]);
var inst_70640__$1 = (state_70652[(2)]);
var inst_70641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70640__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_70642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70640__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_70652__$1 = (function (){var statearr_70673 = state_70652;
(statearr_70673[(8)] = inst_70642);

(statearr_70673[(9)] = inst_70640__$1);

return statearr_70673;
})();
if(cljs.core.truth_(inst_70641)){
var statearr_70674_70904 = state_70652__$1;
(statearr_70674_70904[(1)] = (17));

} else {
var statearr_70675_70906 = state_70652__$1;
(statearr_70675_70906[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (10))){
var inst_70635 = (state_70652[(2)]);
var state_70652__$1 = state_70652;
if(cljs.core.truth_(inst_70635)){
var statearr_70676_70910 = state_70652__$1;
(statearr_70676_70910[(1)] = (14));

} else {
var statearr_70677_70911 = state_70652__$1;
(statearr_70677_70911[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (18))){
var inst_70640 = (state_70652[(9)]);
var inst_70647 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_70640);
var inst_70648 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_70647) : re_frame.core.dispatch.call(null,inst_70647));
var state_70652__$1 = state_70652;
var statearr_70678_70916 = state_70652__$1;
(statearr_70678_70916[(2)] = inst_70648);

(statearr_70678_70916[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70653 === (8))){
var inst_70619 = (state_70652[(7)]);
var inst_70624 = inst_70619.cljs$lang$protocol_mask$partition0$;
var inst_70625 = (inst_70624 & (64));
var inst_70626 = inst_70619.cljs$core$ISeq$;
var inst_70627 = (cljs.core.PROTOCOL_SENTINEL === inst_70626);
var inst_70628 = ((inst_70625) || (inst_70627));
var state_70652__$1 = state_70652;
if(cljs.core.truth_(inst_70628)){
var statearr_70679_70924 = state_70652__$1;
(statearr_70679_70924[(1)] = (11));

} else {
var statearr_70680_70926 = state_70652__$1;
(statearr_70680_70926[(1)] = (12));

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
var athens$events$state_machine__46059__auto__ = null;
var athens$events$state_machine__46059__auto____0 = (function (){
var statearr_70681 = [null,null,null,null,null,null,null,null,null,null];
(statearr_70681[(0)] = athens$events$state_machine__46059__auto__);

(statearr_70681[(1)] = (1));

return statearr_70681;
});
var athens$events$state_machine__46059__auto____1 = (function (state_70652){
while(true){
var ret_value__46060__auto__ = (function (){try{while(true){
var result__46061__auto__ = switch__46058__auto__(state_70652);
if(cljs.core.keyword_identical_QMARK_(result__46061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46061__auto__;
}
break;
}
}catch (e70682){if((e70682 instanceof Object)){
var ex__46062__auto__ = e70682;
var statearr_70683_70929 = state_70652;
(statearr_70683_70929[(5)] = ex__46062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70930 = state_70652;
state_70652 = G__70930;
continue;
} else {
return ret_value__46060__auto__;
}
break;
}
});
athens$events$state_machine__46059__auto__ = function(state_70652){
switch(arguments.length){
case 0:
return athens$events$state_machine__46059__auto____0.call(this);
case 1:
return athens$events$state_machine__46059__auto____1.call(this,state_70652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$events$state_machine__46059__auto__.cljs$core$IFn$_invoke$arity$0 = athens$events$state_machine__46059__auto____0;
athens$events$state_machine__46059__auto__.cljs$core$IFn$_invoke$arity$1 = athens$events$state_machine__46059__auto____1;
return athens$events$state_machine__46059__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_70684 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_70684[(6)] = c__46126__auto__);

return statearr_70684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));

return c__46126__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__70605_70859,G__70606_70860) : re_frame.core.reg_fx.call(null,G__70605_70859,G__70606_70860));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945)], null)], null)], null);
}));
var G__70685_70933 = new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577);
var G__70686_70934 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__70689){
var vec__70690 = p__70689;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70690,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70690,(1),null);
var _PLUS_debux_dbg_opts_PLUS__70935 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))));

var opts__69036__auto___70936 = _PLUS_debux_dbg_opts_PLUS__70935;
var result__69037__auto___70937 = datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS__70935;
var result__69037__auto___70937 = athens.db.dsdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto___70937,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__69037__auto___70937;
})(),(function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS__70935;
var result__69037__auto___70937 = (function (){var G__70710 = (function (){var opts__69036__auto____$2 = _PLUS_debux_dbg_opts_PLUS__70935;
var result__69037__auto___70937 = athens.db.schema;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto___70937,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","schema","db/schema",58525766,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__69037__auto___70937;
})();
return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(G__70710) : datascript.core.empty_db.call(null,G__70710));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto___70937,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__69037__auto___70937;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto___70937,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e70701){var e_70942 = e70701;
throw e_70942;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)));

var opts__69036__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = athens.db.str_to_db_tx((function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = json_str;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__69037__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__69037__auto__;
}catch (e70722){var e = e70722;
throw e;
}}):(function (_,p__70726){
var vec__70730 = p__70726;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70730,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70730,(1),null);
datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));

return athens.db.str_to_db_tx(json_str);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__70685_70933,G__70686_70934) : re_posh.core.reg_event_ds.call(null,G__70685_70933,G__70686_70934));
var G__70734_70947 = new cljs.core.Keyword("block","toggle-open","block/toggle-open",2080151710);
var G__70735_70948 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__70740){
var vec__70741 = p__70740;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70741,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70741,(1),null);
var open_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70741,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null)], null));

var opts__69036__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(function (){var opts__69036__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = eid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__69037__auto__;
})(),new cljs.core.Keyword("block","open","block/open",-1875254829),(function (){var opts__69036__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = cljs.core.not((function (){var opts__69036__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = open_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__69037__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__69037__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__69037__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__69037__auto__;
}catch (e70748){var e = e70748;
throw e;
}}):(function (_,p__70750){
var vec__70751 = p__70750;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70751,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70751,(1),null);
var open_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70751,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.not(open_state)], null)], null);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__70734_70947,G__70735_70948) : re_posh.core.reg_event_ds.call(null,G__70734_70947,G__70735_70948));
athens.events.node_with_title = (function athens$events$node_with_title(ds,title){
var G__70758 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null)], null);
var G__70759 = ds;
var G__70760 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__70758,G__70759,G__70760) : datascript.core.q.call(null,G__70758,G__70759,G__70760));
});
athens.events.referencing_blocks = (function athens$events$referencing_blocks(ds,title){
var G__70761 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?s","?s",456183954,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__70762 = ds;
var G__70763 = athens.patterns.linked(title);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__70761,G__70762,G__70763) : datascript.core.q.call(null,G__70761,G__70762,G__70763));
});
athens.events.rename_refs_tx = (function athens$events$rename_refs_tx(old_title,new_title,p__70764){
var vec__70765 = p__70764;
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70765,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70765,(1),null);
var new_s = clojure.string.replace(s,athens.patterns.linked(old_title),["$1$3$4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_title),"$2$5"].join(''));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","string","block/string",-2066596447),new_s], null);
});
var G__70768_70959 = new cljs.core.Keyword("node","rename","node/rename",1504180899);
var G__70769_70960 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (ds,p__70770){
var vec__70771 = p__70770;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70771,(0),null);
var old_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70771,(1),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70771,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"eid","eid",-2094915839,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null)),new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),cljs.core.list(new cljs.core.Symbol(null,"referencing-blocks","referencing-blocks",395859823,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"rename-refs-tx","rename-refs-tx",1348283609,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)], null)))));

var opts__69036__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = (function (){var eid = (function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = athens.events.node_with_title((function (){var opts__69036__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = ds;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__69037__auto__;
})(),(function (){var opts__69036__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = old_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__69037__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__69037__auto__;
})();
var blocks = (function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = athens.events.referencing_blocks((function (){var opts__69036__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = ds;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__69037__auto__;
})(),(function (){var opts__69036__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = old_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__69037__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"referencing-blocks","referencing-blocks",395859823,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__69037__auto__;
})();
return debux.common.util.spy_last(cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)], null)),(1),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__69036__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(function (){var opts__69036__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = eid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__69037__auto__;
})(),new cljs.core.Keyword("node","title","node/title",628940777),(function (){var opts__69036__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = new_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__69037__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__69037__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__69037__auto__;
})(),debux.common.util.spy_last(cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"rename-refs-tx","rename-refs-tx",1348283609,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))),(2),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = cljs.core.partial.cljs$core$IFn$_invoke$arity$3((function (){var opts__69036__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = athens.events.rename_refs_tx;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"rename-refs-tx","rename-refs-tx",1348283609,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__69037__auto__;
})(),(function (){var opts__69036__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = old_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__69037__auto__;
})(),(function (){var opts__69036__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = new_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__69037__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"rename-refs-tx","rename-refs-tx",1348283609,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__69037__auto__;
})(),debux.common.util.spy_last(new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),(3),blocks)))));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"eid","eid",-2094915839,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null)),new cljs.core.Symbol(null,"blocks","blocks",1030069374,null),cljs.core.list(new cljs.core.Symbol(null,"referencing-blocks","referencing-blocks",395859823,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null))], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"rename-refs-tx","rename-refs-tx",1348283609,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Symbol(null,"blocks","blocks",1030069374,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__69037__auto__;
}catch (e70805){var e = e70805;
throw e;
}}):(function (ds,p__70831){
var vec__70836 = p__70831;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70836,(0),null);
var old_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70836,(1),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70836,(2),null);
var eid = athens.events.node_with_title(ds,old_title);
var blocks = athens.events.referencing_blocks(ds,old_title);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("node","title","node/title",628940777),new_title], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(athens.events.rename_refs_tx,old_title,new_title),blocks));
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__70768_70959,G__70769_70960) : re_posh.core.reg_event_ds.call(null,G__70768_70959,G__70769_70960));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,error){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)));

var opts__69036__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = cljs.core.assoc_in((function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__69037__auto__;
})(),(function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__69037__auto__;
})(),(function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = error;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__69037__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__69037__auto__;
}catch (e70841){var e = e70841;
throw e;
}}):(function (db,error){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),error);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY));

var opts__69036__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = cljs.core.assoc_in((function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__69037__auto__;
})(),(function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__69037__auto__;
})(),(function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__69037__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__69037__auto__;
}catch (e70846){var e = e70846;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false));

var opts__69036__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = cljs.core.assoc_in((function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__69037__auto__;
})(),(function (){var opts__69036__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__69037__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__69037__auto__;
}catch (e70851){var e = e70851;
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

var opts__69036__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__69037__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69037__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__69037__auto__;
}catch (e70852){var e = e70852;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
})));

//# sourceMappingURL=athens.events.js.map
