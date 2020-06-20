goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__57886,p__57887){
var map__57888 = p__57886;
var map__57888__$1 = (((((!((map__57888 == null))))?(((((map__57888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57888):map__57888);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57888__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__57889 = p__57887;
var map__57889__$1 = (((((!((map__57889 == null))))?(((((map__57889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57889):map__57889);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57889__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__57895,p__57896){
var map__57897 = p__57895;
var map__57897__$1 = (((((!((map__57897 == null))))?(((((map__57897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57897):map__57897);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57897__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__57898 = p__57896;
var map__57898__$1 = (((((!((map__57898 == null))))?(((((map__57898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57898):map__57898);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57898__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__57912,p__57913){
var map__57914 = p__57912;
var map__57914__$1 = (((((!((map__57914 == null))))?(((((map__57914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57914):map__57914);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57914__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57914__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__57915 = p__57913;
var map__57915__$1 = (((((!((map__57915 == null))))?(((((map__57915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57915):map__57915);
var msg = map__57915__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57915__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__57920 = obj_support;
var map__57920__$1 = (((((!((map__57920 == null))))?(((((map__57920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57920):map__57920);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57920__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__57911_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__57911_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57909_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__57909_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__57924,tid){
var map__57925 = p__57924;
var map__57925__$1 = (((((!((map__57925 == null))))?(((((map__57925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57925):map__57925);
var svc = map__57925__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57925__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__57933 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__57934 = null;
var count__57935 = (0);
var i__57936 = (0);
while(true){
if((i__57936 < count__57935)){
var tid = chunk__57934.cljs$core$IIndexed$_nth$arity$2(null,i__57936);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__57966 = seq__57933;
var G__57967 = chunk__57934;
var G__57968 = count__57935;
var G__57969 = (i__57936 + (1));
seq__57933 = G__57966;
chunk__57934 = G__57967;
count__57935 = G__57968;
i__57936 = G__57969;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57933);
if(temp__5735__auto__){
var seq__57933__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57933__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57933__$1);
var G__57970 = cljs.core.chunk_rest(seq__57933__$1);
var G__57971 = c__4609__auto__;
var G__57972 = cljs.core.count(c__4609__auto__);
var G__57973 = (0);
seq__57933 = G__57970;
chunk__57934 = G__57971;
count__57935 = G__57972;
i__57936 = G__57973;
continue;
} else {
var tid = cljs.core.first(seq__57933__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__57974 = cljs.core.next(seq__57933__$1);
var G__57975 = null;
var G__57976 = (0);
var G__57977 = (0);
seq__57933 = G__57974;
chunk__57934 = G__57975;
count__57935 = G__57976;
i__57936 = G__57977;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__57929_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__57929_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__57930_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__57930_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__57931_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__57931_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__57932_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__57932_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__57946){
var map__57947 = p__57946;
var map__57947__$1 = (((((!((map__57947 == null))))?(((((map__57947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57947):map__57947);
var svc = map__57947__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57947__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57947__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
