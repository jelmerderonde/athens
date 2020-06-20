goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__57660,p__57661){
var map__57662 = p__57660;
var map__57662__$1 = (((((!((map__57662 == null))))?(((((map__57662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57662):map__57662);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57662__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__57663 = p__57661;
var map__57663__$1 = (((((!((map__57663 == null))))?(((((map__57663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57663):map__57663);
var msg = map__57663__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57663__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__57666,p__57667){
var map__57668 = p__57666;
var map__57668__$1 = (((((!((map__57668 == null))))?(((((map__57668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57668):map__57668);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57668__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__57669 = p__57667;
var map__57669__$1 = (((((!((map__57669 == null))))?(((((map__57669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57669):map__57669);
var msg = map__57669__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57669__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__57672 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__57674 = null;
var count__57675 = (0);
var i__57676 = (0);
while(true){
if((i__57676 < count__57675)){
var map__57682 = chunk__57674.cljs$core$IIndexed$_nth$arity$2(null,i__57676);
var map__57682__$1 = (((((!((map__57682 == null))))?(((((map__57682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57682):map__57682);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57682__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__57729 = seq__57672;
var G__57730 = chunk__57674;
var G__57731 = count__57675;
var G__57732 = (i__57676 + (1));
seq__57672 = G__57729;
chunk__57674 = G__57730;
count__57675 = G__57731;
i__57676 = G__57732;
continue;
} else {
var G__57733 = seq__57672;
var G__57734 = chunk__57674;
var G__57735 = count__57675;
var G__57736 = (i__57676 + (1));
seq__57672 = G__57733;
chunk__57674 = G__57734;
count__57675 = G__57735;
i__57676 = G__57736;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57672);
if(temp__5735__auto__){
var seq__57672__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57672__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57672__$1);
var G__57737 = cljs.core.chunk_rest(seq__57672__$1);
var G__57738 = c__4609__auto__;
var G__57739 = cljs.core.count(c__4609__auto__);
var G__57740 = (0);
seq__57672 = G__57737;
chunk__57674 = G__57738;
count__57675 = G__57739;
i__57676 = G__57740;
continue;
} else {
var map__57684 = cljs.core.first(seq__57672__$1);
var map__57684__$1 = (((((!((map__57684 == null))))?(((((map__57684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57684):map__57684);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57684__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__57741 = cljs.core.next(seq__57672__$1);
var G__57742 = null;
var G__57743 = (0);
var G__57744 = (0);
seq__57672 = G__57741;
chunk__57674 = G__57742;
count__57675 = G__57743;
i__57676 = G__57744;
continue;
} else {
var G__57745 = cljs.core.next(seq__57672__$1);
var G__57746 = null;
var G__57747 = (0);
var G__57748 = (0);
seq__57672 = G__57745;
chunk__57674 = G__57746;
count__57675 = G__57747;
i__57676 = G__57748;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__57686,msg){
var map__57687 = p__57686;
var map__57687__$1 = (((((!((map__57687 == null))))?(((((map__57687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57687):map__57687);
var runtime = map__57687__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57687__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__57689,key,p__57690){
var map__57691 = p__57689;
var map__57691__$1 = (((((!((map__57691 == null))))?(((((map__57691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57691):map__57691);
var state = map__57691__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57691__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__57692 = p__57690;
var map__57692__$1 = (((((!((map__57692 == null))))?(((((map__57692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57692):map__57692);
var spec = map__57692__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57692__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__57695,key,spec){
var map__57696 = p__57695;
var map__57696__$1 = (((((!((map__57696 == null))))?(((((map__57696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57696):map__57696);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57696__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__57703){
var map__57704 = p__57703;
var map__57704__$1 = (((((!((map__57704 == null))))?(((((map__57704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57704):map__57704);
var runtime = map__57704__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57704__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__57698_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__57698_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__57699_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__57699_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__57700_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__57700_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__57701_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__57701_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__57702_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__57702_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__57706,key){
var map__57707 = p__57706;
var map__57707__$1 = (((((!((map__57707 == null))))?(((((map__57707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57707):map__57707);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57707__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__57709,p__57710){
var map__57711 = p__57709;
var map__57711__$1 = (((((!((map__57711 == null))))?(((((map__57711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57711):map__57711);
var runtime = map__57711__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57711__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__57712 = p__57710;
var map__57712__$1 = (((((!((map__57712 == null))))?(((((map__57712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57712):map__57712);
var msg = map__57712__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57712__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__57715 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__57717 = null;
var count__57718 = (0);
var i__57719 = (0);
while(true){
if((i__57719 < count__57718)){
var map__57725 = chunk__57717.cljs$core$IIndexed$_nth$arity$2(null,i__57719);
var map__57725__$1 = (((((!((map__57725 == null))))?(((((map__57725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57725):map__57725);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57725__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__57749 = seq__57715;
var G__57750 = chunk__57717;
var G__57751 = count__57718;
var G__57752 = (i__57719 + (1));
seq__57715 = G__57749;
chunk__57717 = G__57750;
count__57718 = G__57751;
i__57719 = G__57752;
continue;
} else {
var G__57753 = seq__57715;
var G__57754 = chunk__57717;
var G__57755 = count__57718;
var G__57756 = (i__57719 + (1));
seq__57715 = G__57753;
chunk__57717 = G__57754;
count__57718 = G__57755;
i__57719 = G__57756;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57715);
if(temp__5735__auto__){
var seq__57715__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57715__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57715__$1);
var G__57757 = cljs.core.chunk_rest(seq__57715__$1);
var G__57758 = c__4609__auto__;
var G__57759 = cljs.core.count(c__4609__auto__);
var G__57760 = (0);
seq__57715 = G__57757;
chunk__57717 = G__57758;
count__57718 = G__57759;
i__57719 = G__57760;
continue;
} else {
var map__57727 = cljs.core.first(seq__57715__$1);
var map__57727__$1 = (((((!((map__57727 == null))))?(((((map__57727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57727):map__57727);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57727__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__57764 = cljs.core.next(seq__57715__$1);
var G__57765 = null;
var G__57766 = (0);
var G__57767 = (0);
seq__57715 = G__57764;
chunk__57717 = G__57765;
count__57718 = G__57766;
i__57719 = G__57767;
continue;
} else {
var G__57768 = cljs.core.next(seq__57715__$1);
var G__57769 = null;
var G__57770 = (0);
var G__57771 = (0);
seq__57715 = G__57768;
chunk__57717 = G__57769;
count__57718 = G__57770;
i__57719 = G__57771;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
