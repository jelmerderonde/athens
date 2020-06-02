goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__65356 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65356) : stop_at_QMARK_.call(null,G__65356));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__65357 = stop_at_QMARK_;
var G__65358 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__65357,G__65358) : posh.lib.q_analyze.take_until.call(null,G__65357,G__65358));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__65360 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65360) : rest_at_QMARK_.call(null,G__65360));
}
})())){
return ls;
} else {
var G__66146 = rest_at_QMARK_;
var G__66147 = cljs.core.rest(ls);
rest_at_QMARK_ = G__66146;
ls = G__66147;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__65361 = split_at_QMARK_;
var G__65362 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__65361,G__65362) : posh.lib.q_analyze.split_list_at.call(null,G__65361,G__65362));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__65369 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65369) : posh.lib.q_analyze.get_all_vars.call(null,G__65369));
})(),(function (){var G__65370 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65370) : posh.lib.q_analyze.get_all_vars.call(null,G__65370));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__65371 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65371) : posh.lib.q_analyze.get_all_vars.call(null,G__65371));
})(),cljs.core.first(query));
} else {
var G__65372 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65372) : posh.lib.q_analyze.get_all_vars.call(null,G__65372));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4174__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4174__auto__;
}
})())){
var G__65433 = cljs.core.rest(eav);
var G__65434 = (n - (1));
var G__65435 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__65436 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__65433,G__65434,G__65435,G__65436) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__65433,G__65434,G__65435,G__65436));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__65438 = cljs.core.rest(eav);
var G__65439 = (n - (1));
var G__65440 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__65441 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__65438,G__65439,G__65440,G__65441) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__65438,G__65439,G__65440,G__65441));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__65442 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__65442) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__65442));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__65443 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__65443) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__65443));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__65444 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65444) : posh.lib.q_analyze.get_eavs.call(null,G__65444));
})(),(function (){var G__65445 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65445) : posh.lib.q_analyze.get_eavs.call(null,G__65445));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__65446 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65446) : posh.lib.q_analyze.get_eavs.call(null,G__65446));
})(),(function (){var G__65448 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65448) : posh.lib.q_analyze.get_eavs.call(null,G__65448));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__65449 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65449) : posh.lib.q_analyze.get_eavs.call(null,G__65449));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_65463 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_65463)) && ((cljs.core.count(ocr_65463) === 2)))){
try{var ocr_65463_0__65469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65463,(0));
if(((cljs.core.vector_QMARK_(ocr_65463_0__65469)) && ((cljs.core.count(ocr_65463_0__65469) === 5)))){
try{var ocr_65463_0__65469_0__65472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65463_0__65469,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65463_0__65469_0__65472,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65463_0__65469,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65463_0__65469,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65463_0__65469,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65463,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__65488 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65488) : posh.lib.q_analyze.get_eavs.call(null,G__65488));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e65487){if((e65487 instanceof Error)){
var e__64219__auto__ = e65487;
if((e__64219__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto__;
}
} else {
throw e65487;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65486){if((e65486 instanceof Error)){
var e__64219__auto__ = e65486;
if((e__64219__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto__;
}
} else {
throw e65486;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65482){if((e65482 instanceof Error)){
var e__64219__auto__ = e65482;
if((e__64219__auto__ === cljs.core.match.backtrack)){
var G__65485 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65485) : posh.lib.q_analyze.get_eavs.call(null,G__65485));
} else {
throw e__64219__auto__;
}
} else {
throw e65482;

}
}} else {
var G__65489 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65489) : posh.lib.q_analyze.get_eavs.call(null,G__65489));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__65490){
var vec__65491 = p__65490;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65491,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65491,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65497_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__65497_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__65497_SHARP_);
} else {
return p1__65497_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__65502 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__65502) : posh.lib.q_analyze.count_qvars.call(null,G__65502));
})(),(function (){var G__65503 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__65503) : posh.lib.q_analyze.count_qvars.call(null,G__65503));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__65505 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__65505) : posh.lib.q_analyze.count_qvars.call(null,G__65505));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__65508(s__65509){
return (new cljs.core.LazySeq(null,(function (){
var s__65509__$1 = s__65509;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65509__$1);
if(temp__5735__auto__){
var s__65509__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65509__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65509__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65511 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65510 = (0);
while(true){
if((i__65510 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65510);
cljs.core.chunk_append(b__65511,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__66349 = (i__65510 + (1));
i__65510 = G__66349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65511),posh$lib$q_analyze$fill_qvar_set_$_iter__65508(cljs.core.chunk_rest(s__65509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65511),null);
}
} else {
var r = cljs.core.first(s__65509__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__65508(cljs.core.rest(s__65509__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__65517 = cljs.core.first(seq1);
var G__65518 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__65517,G__65518) : f.call(null,G__65517,G__65518));
})(),(function (){var G__65519 = f;
var G__65520 = cljs.core.rest(seq1);
var G__65521 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__65519,G__65520,G__65521) : posh.lib.q_analyze.seq_merge_with.call(null,G__65519,G__65520,G__65521));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__65528){
var vec__65530 = p__65528;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65530,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65530,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65530,(2),null);
var eav = vec__65530;
var vec__65533 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65533,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65533,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65533,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__65536(s__65537){
return (new cljs.core.LazySeq(null,(function (){
var s__65537__$1 = s__65537;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65537__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__65537__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__65536_$_iter__65538(s__65539){
return (new cljs.core.LazySeq(null,((function (s__65537__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav){
return (function (){
var s__65539__$1 = s__65539;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65539__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__65539__$1,s__65537__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__65536_$_iter__65538_$_iter__65540(s__65541){
return (new cljs.core.LazySeq(null,((function (s__65539__$1,s__65537__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav){
return (function (){
var s__65541__$1 = s__65541;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65541__$1);
if(temp__5735__auto____$2){
var s__65541__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65541__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65541__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65543 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65542 = (0);
while(true){
if((i__65542 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65542);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65542,s__65541__$1,s__65539__$1,s__65537__$1,vv,c__4580__auto__,size__4581__auto__,b__65543,s__65541__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav){
return (function (p1__65526_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__65526_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__65542,s__65541__$1,s__65539__$1,s__65537__$1,vv,c__4580__auto__,size__4581__auto__,b__65543,s__65541__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65542,s__65541__$1,s__65539__$1,s__65537__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__65543,s__65541__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav){
return (function (p__65545){
var vec__65546 = p__65545;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65546,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65546,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__65542,s__65541__$1,s__65539__$1,s__65537__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__65543,s__65541__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65542,s__65541__$1,s__65539__$1,s__65537__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__65543,s__65541__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav){
return (function (p1__65527_SHARP_){
if(cljs.core.truth_(p1__65527_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__65542,s__65541__$1,s__65539__$1,s__65537__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__65543,s__65541__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__65543,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__66354 = (i__65542 + (1));
i__65542 = G__66354;
continue;
} else {
var G__66355 = (i__65542 + (1));
i__65542 = G__66355;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65543),posh$lib$q_analyze$pattern_from_eav__old_$_iter__65536_$_iter__65538_$_iter__65540(cljs.core.chunk_rest(s__65541__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65543),null);
}
} else {
var vv = cljs.core.first(s__65541__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__65541__$1,s__65539__$1,s__65537__$1,vv,s__65541__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav){
return (function (p1__65526_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__65526_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__65541__$1,s__65539__$1,s__65537__$1,vv,s__65541__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__65541__$1,s__65539__$1,s__65537__$1,wildcard_count,vv,s__65541__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav){
return (function (p__65553){
var vec__65554 = p__65553;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65554,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65554,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__65541__$1,s__65539__$1,s__65537__$1,wildcard_count,vv,s__65541__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__65541__$1,s__65539__$1,s__65537__$1,wildcard_count,exposed_qvars,vv,s__65541__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav){
return (function (p1__65527_SHARP_){
if(cljs.core.truth_(p1__65527_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__65541__$1,s__65539__$1,s__65537__$1,wildcard_count,exposed_qvars,vv,s__65541__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__65536_$_iter__65538_$_iter__65540(cljs.core.rest(s__65541__$2)));
} else {
var G__66356 = cljs.core.rest(s__65541__$2);
s__65541__$1 = G__66356;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__65539__$1,s__65537__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav))
,null,null));
});})(s__65539__$1,s__65537__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__65536_$_iter__65538(cljs.core.rest(s__65539__$1)));
} else {
var G__66357 = cljs.core.rest(s__65539__$1);
s__65539__$1 = G__66357;
continue;
}
} else {
return null;
}
break;
}
});})(s__65537__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav))
,null,null));
});})(s__65537__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65533,qe,qa,qv,vec__65530,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__65536(cljs.core.rest(s__65537__$1)));
} else {
var G__66358 = cljs.core.rest(s__65537__$1);
s__65537__$1 = G__66358;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_65567 = cljs.core.vec(eav);
var ocr_65568 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_65567)) && ((cljs.core.count(ocr_65567) === 3)))){
try{var ocr_65567_0__65610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_0__65610,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65567_1__65611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_1__65611,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65567_2__65612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_2__65612,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65860){if((e65860 instanceof Error)){
var e__64219__auto__ = e65860;
if((e__64219__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65568)) && ((cljs.core.count(ocr_65568) === 3)))){
try{var ocr_65568_2__65615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(2));
if((ocr_65568_2__65615 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65862){if((e65862 instanceof Error)){
var e__64219__auto____$1 = e65862;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65568_2__65615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(2));
if((ocr_65568_2__65615 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65863){if((e65863 instanceof Error)){
var e__64219__auto____$2 = e65863;
if((e__64219__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$2;
}
} else {
throw e65863;

}
}} else {
throw e__64219__auto____$1;
}
} else {
throw e65862;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65861){if((e65861 instanceof Error)){
var e__64219__auto____$1 = e65861;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$1;
}
} else {
throw e65861;

}
}} else {
throw e__64219__auto__;
}
} else {
throw e65860;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65855){if((e65855 instanceof Error)){
var e__64219__auto__ = e65855;
if((e__64219__auto__ === cljs.core.match.backtrack)){
try{var ocr_65567_2__65612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_2__65612,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_65568)) && ((cljs.core.count(ocr_65568) === 3)))){
try{var ocr_65568_1__65618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65618 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65858){if((e65858 instanceof Error)){
var e__64219__auto____$1 = e65858;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65568_1__65618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65618 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65859){if((e65859 instanceof Error)){
var e__64219__auto____$2 = e65859;
if((e__64219__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$2;
}
} else {
throw e65859;

}
}} else {
throw e__64219__auto____$1;
}
} else {
throw e65858;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65857){if((e65857 instanceof Error)){
var e__64219__auto____$1 = e65857;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$1;
}
} else {
throw e65857;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65856){if((e65856 instanceof Error)){
var e__64219__auto____$1 = e65856;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$1;
}
} else {
throw e65856;

}
}} else {
throw e__64219__auto__;
}
} else {
throw e65855;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65706){if((e65706 instanceof Error)){
var e__64219__auto__ = e65706;
if((e__64219__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65568)) && ((cljs.core.count(ocr_65568) === 3)))){
try{var ocr_65568_0__65633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(0));
if((ocr_65568_0__65633 === false)){
try{var ocr_65567_1__65611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_1__65611,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65567_2__65612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_2__65612,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65854){if((e65854 instanceof Error)){
var e__64219__auto____$1 = e65854;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$1;
}
} else {
throw e65854;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65853){if((e65853 instanceof Error)){
var e__64219__auto____$1 = e65853;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$1;
}
} else {
throw e65853;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65708){if((e65708 instanceof Error)){
var e__64219__auto____$1 = e65708;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65568_0__65633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(0));
if((ocr_65568_0__65633 === true)){
try{var ocr_65567_2__65612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_2__65612,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65567_1__65611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_1__65611,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65847){if((e65847 instanceof Error)){
var e__64219__auto____$2 = e65847;
if((e__64219__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65848){if((e65848 instanceof Error)){
var e__64219__auto____$3 = e65848;
if((e__64219__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65849){if((e65849 instanceof Error)){
var e__64219__auto____$4 = e65849;
if((e__64219__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$4;
}
} else {
throw e65849;

}
}} else {
throw e__64219__auto____$3;
}
} else {
throw e65848;

}
}} else {
throw e__64219__auto____$2;
}
} else {
throw e65847;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65844){if((e65844 instanceof Error)){
var e__64219__auto____$2 = e65844;
if((e__64219__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$2;
}
} else {
throw e65844;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65709){if((e65709 instanceof Error)){
var e__64219__auto____$2 = e65709;
if((e__64219__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65568_0__65633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(0));
if((ocr_65568_0__65633 === false)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === true)){
try{var ocr_65567_2__65612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_2__65612,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65843){if((e65843 instanceof Error)){
var e__64219__auto____$3 = e65843;
if((e__64219__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$3;
}
} else {
throw e65843;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65840){if((e65840 instanceof Error)){
var e__64219__auto____$3 = e65840;
if((e__64219__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === false)){
try{var ocr_65567_2__65612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_2__65612,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65842){if((e65842 instanceof Error)){
var e__64219__auto____$4 = e65842;
if((e__64219__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$4;
}
} else {
throw e65842;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65841){if((e65841 instanceof Error)){
var e__64219__auto____$4 = e65841;
if((e__64219__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$4;
}
} else {
throw e65841;

}
}} else {
throw e__64219__auto____$3;
}
} else {
throw e65840;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65710){if((e65710 instanceof Error)){
var e__64219__auto____$3 = e65710;
if((e__64219__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65568_2__65635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(2));
if((ocr_65568_2__65635 === true)){
try{var ocr_65568_0__65633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(0));
if((ocr_65568_0__65633 === true)){
try{var ocr_65567_1__65611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_1__65611,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65839){if((e65839 instanceof Error)){
var e__64219__auto____$4 = e65839;
if((e__64219__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$4;
}
} else {
throw e65839;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65838){if((e65838 instanceof Error)){
var e__64219__auto____$4 = e65838;
if((e__64219__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$4;
}
} else {
throw e65838;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65711){if((e65711 instanceof Error)){
var e__64219__auto____$4 = e65711;
if((e__64219__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_65568_2__65635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(2));
if((ocr_65568_2__65635 === false)){
try{var ocr_65568_0__65633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(0));
if((ocr_65568_0__65633 === true)){
try{var ocr_65567_1__65611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_1__65611,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65837){if((e65837 instanceof Error)){
var e__64219__auto____$5 = e65837;
if((e__64219__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$5;
}
} else {
throw e65837;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65836){if((e65836 instanceof Error)){
var e__64219__auto____$5 = e65836;
if((e__64219__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$5;
}
} else {
throw e65836;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65712){if((e65712 instanceof Error)){
var e__64219__auto____$5 = e65712;
if((e__64219__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_65568_2__65635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(2));
if((ocr_65568_2__65635 === true)){
try{var ocr_65568_0__65633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(0));
if((ocr_65568_0__65633 === false)){
try{var ocr_65567_1__65611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_1__65611,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65835){if((e65835 instanceof Error)){
var e__64219__auto____$6 = e65835;
if((e__64219__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$6;
}
} else {
throw e65835;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65834){if((e65834 instanceof Error)){
var e__64219__auto____$6 = e65834;
if((e__64219__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$6;
}
} else {
throw e65834;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65713){if((e65713 instanceof Error)){
var e__64219__auto____$6 = e65713;
if((e__64219__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_65568_2__65635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(2));
if((ocr_65568_2__65635 === false)){
try{var ocr_65568_0__65633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(0));
if((ocr_65568_0__65633 === false)){
try{var ocr_65567_1__65611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_1__65611,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65833){if((e65833 instanceof Error)){
var e__64219__auto____$7 = e65833;
if((e__64219__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$7;
}
} else {
throw e65833;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65832){if((e65832 instanceof Error)){
var e__64219__auto____$7 = e65832;
if((e__64219__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$7;
}
} else {
throw e65832;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65714){if((e65714 instanceof Error)){
var e__64219__auto____$7 = e65714;
if((e__64219__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_65568_2__65635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(2));
if((ocr_65568_2__65635 === true)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === true)){
try{var ocr_65567_0__65610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_0__65610,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65831){if((e65831 instanceof Error)){
var e__64219__auto____$8 = e65831;
if((e__64219__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$8;
}
} else {
throw e65831;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65830){if((e65830 instanceof Error)){
var e__64219__auto____$8 = e65830;
if((e__64219__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$8;
}
} else {
throw e65830;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65715){if((e65715 instanceof Error)){
var e__64219__auto____$8 = e65715;
if((e__64219__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_65568_2__65635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(2));
if((ocr_65568_2__65635 === false)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === true)){
try{var ocr_65567_0__65610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_0__65610,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65829){if((e65829 instanceof Error)){
var e__64219__auto____$9 = e65829;
if((e__64219__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$9;
}
} else {
throw e65829;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65828){if((e65828 instanceof Error)){
var e__64219__auto____$9 = e65828;
if((e__64219__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$9;
}
} else {
throw e65828;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65716){if((e65716 instanceof Error)){
var e__64219__auto____$9 = e65716;
if((e__64219__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65568_2__65635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(2));
if((ocr_65568_2__65635 === true)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === false)){
try{var ocr_65567_0__65610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_0__65610,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65827){if((e65827 instanceof Error)){
var e__64219__auto____$10 = e65827;
if((e__64219__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$10;
}
} else {
throw e65827;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65826){if((e65826 instanceof Error)){
var e__64219__auto____$10 = e65826;
if((e__64219__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$10;
}
} else {
throw e65826;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65717){if((e65717 instanceof Error)){
var e__64219__auto____$10 = e65717;
if((e__64219__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_65568_2__65635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(2));
if((ocr_65568_2__65635 === false)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === false)){
try{var ocr_65567_0__65610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65567_0__65610,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65819){if((e65819 instanceof Error)){
var e__64219__auto____$11 = e65819;
if((e__64219__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$11;
}
} else {
throw e65819;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65818){if((e65818 instanceof Error)){
var e__64219__auto____$11 = e65818;
if((e__64219__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$11;
}
} else {
throw e65818;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65718){if((e65718 instanceof Error)){
var e__64219__auto____$11 = e65718;
if((e__64219__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_65568_2__65635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(2));
if((ocr_65568_2__65635 === true)){
try{var ocr_65568_0__65633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(0));
if((ocr_65568_0__65633 === true)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65815){if((e65815 instanceof Error)){
var e__64219__auto____$12 = e65815;
if((e__64219__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$12;
}
} else {
throw e65815;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65793){if((e65793 instanceof Error)){
var e__64219__auto____$12 = e65793;
if((e__64219__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_65568_0__65633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(0));
if((ocr_65568_0__65633 === false)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65811){if((e65811 instanceof Error)){
var e__64219__auto____$13 = e65811;
if((e__64219__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$13;
}
} else {
throw e65811;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65804){if((e65804 instanceof Error)){
var e__64219__auto____$13 = e65804;
if((e__64219__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_65568_0__65633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(0));
if((ocr_65568_0__65633 === true)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65806){if((e65806 instanceof Error)){
var e__64219__auto____$14 = e65806;
if((e__64219__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$14;
}
} else {
throw e65806;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65805){if((e65805 instanceof Error)){
var e__64219__auto____$14 = e65805;
if((e__64219__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$14;
}
} else {
throw e65805;

}
}} else {
throw e__64219__auto____$13;
}
} else {
throw e65804;

}
}} else {
throw e__64219__auto____$12;
}
} else {
throw e65793;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65719){if((e65719 instanceof Error)){
var e__64219__auto____$12 = e65719;
if((e__64219__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_65568_2__65635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(2));
if((ocr_65568_2__65635 === false)){
try{var ocr_65568_0__65633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(0));
if((ocr_65568_0__65633 === true)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65782){if((e65782 instanceof Error)){
var e__64219__auto____$13 = e65782;
if((e__64219__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$13;
}
} else {
throw e65782;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65778){if((e65778 instanceof Error)){
var e__64219__auto____$13 = e65778;
if((e__64219__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$13;
}
} else {
throw e65778;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65720){if((e65720 instanceof Error)){
var e__64219__auto____$13 = e65720;
if((e__64219__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_65568_2__65635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(2));
if((ocr_65568_2__65635 === true)){
try{var ocr_65568_0__65633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(0));
if((ocr_65568_0__65633 === false)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65740){if((e65740 instanceof Error)){
var e__64219__auto____$14 = e65740;
if((e__64219__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$14;
}
} else {
throw e65740;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65732){if((e65732 instanceof Error)){
var e__64219__auto____$14 = e65732;
if((e__64219__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$14;
}
} else {
throw e65732;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65721){if((e65721 instanceof Error)){
var e__64219__auto____$14 = e65721;
if((e__64219__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_65568_2__65635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(2));
if((ocr_65568_2__65635 === false)){
try{var ocr_65568_0__65633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(0));
if((ocr_65568_0__65633 === true)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65727){if((e65727 instanceof Error)){
var e__64219__auto____$15 = e65727;
if((e__64219__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$15;
}
} else {
throw e65727;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65723){if((e65723 instanceof Error)){
var e__64219__auto____$15 = e65723;
if((e__64219__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_65568_0__65633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(0));
if((ocr_65568_0__65633 === false)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65725){if((e65725 instanceof Error)){
var e__64219__auto____$16 = e65725;
if((e__64219__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_65568_1__65634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65568,(1));
if((ocr_65568_1__65634 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65567,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65726){if((e65726 instanceof Error)){
var e__64219__auto____$17 = e65726;
if((e__64219__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$17;
}
} else {
throw e65726;

}
}} else {
throw e__64219__auto____$16;
}
} else {
throw e65725;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65724){if((e65724 instanceof Error)){
var e__64219__auto____$16 = e65724;
if((e__64219__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$16;
}
} else {
throw e65724;

}
}} else {
throw e__64219__auto____$15;
}
} else {
throw e65723;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65722){if((e65722 instanceof Error)){
var e__64219__auto____$15 = e65722;
if((e__64219__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$15;
}
} else {
throw e65722;

}
}} else {
throw e__64219__auto____$14;
}
} else {
throw e65721;

}
}} else {
throw e__64219__auto____$13;
}
} else {
throw e65720;

}
}} else {
throw e__64219__auto____$12;
}
} else {
throw e65719;

}
}} else {
throw e__64219__auto____$11;
}
} else {
throw e65718;

}
}} else {
throw e__64219__auto____$10;
}
} else {
throw e65717;

}
}} else {
throw e__64219__auto____$9;
}
} else {
throw e65716;

}
}} else {
throw e__64219__auto____$8;
}
} else {
throw e65715;

}
}} else {
throw e__64219__auto____$7;
}
} else {
throw e65714;

}
}} else {
throw e__64219__auto____$6;
}
} else {
throw e65713;

}
}} else {
throw e__64219__auto____$5;
}
} else {
throw e65712;

}
}} else {
throw e__64219__auto____$4;
}
} else {
throw e65711;

}
}} else {
throw e__64219__auto____$3;
}
} else {
throw e65710;

}
}} else {
throw e__64219__auto____$2;
}
} else {
throw e65709;

}
}} else {
throw e__64219__auto____$1;
}
} else {
throw e65708;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65707){if((e65707 instanceof Error)){
var e__64219__auto____$1 = e65707;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$1;
}
} else {
throw e65707;

}
}} else {
throw e__64219__auto__;
}
} else {
throw e65706;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65705){if((e65705 instanceof Error)){
var e__64219__auto__ = e65705;
if((e__64219__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__64219__auto__;
}
} else {
throw e65705;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_65883 = cljs.core.vec(eav);
var ocr_65884 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_65883)) && ((cljs.core.count(ocr_65883) === 3)))){
try{var ocr_65883_0__65912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65883_0__65912,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65883_1__65913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65883_1__65913,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65883_2__65914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65883_2__65914,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e65996){if((e65996 instanceof Error)){
var e__64219__auto__ = e65996;
if((e__64219__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65884)) && ((cljs.core.count(ocr_65884) === 3)))){
try{var ocr_65884_2__65917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(2));
if((ocr_65884_2__65917 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e66000){if((e66000 instanceof Error)){
var e__64219__auto____$1 = e66000;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65884_2__65917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(2));
if((ocr_65884_2__65917 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e66001){if((e66001 instanceof Error)){
var e__64219__auto____$2 = e66001;
if((e__64219__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$2;
}
} else {
throw e66001;

}
}} else {
throw e__64219__auto____$1;
}
} else {
throw e66000;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65997){if((e65997 instanceof Error)){
var e__64219__auto____$1 = e65997;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$1;
}
} else {
throw e65997;

}
}} else {
throw e__64219__auto__;
}
} else {
throw e65996;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65990){if((e65990 instanceof Error)){
var e__64219__auto__ = e65990;
if((e__64219__auto__ === cljs.core.match.backtrack)){
try{var ocr_65883_2__65914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65883_2__65914,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_65884)) && ((cljs.core.count(ocr_65884) === 3)))){
try{var ocr_65884_1__65919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(1));
if((ocr_65884_1__65919 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65993){if((e65993 instanceof Error)){
var e__64219__auto____$1 = e65993;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65884_1__65919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(1));
if((ocr_65884_1__65919 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65994){if((e65994 instanceof Error)){
var e__64219__auto____$2 = e65994;
if((e__64219__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$2;
}
} else {
throw e65994;

}
}} else {
throw e__64219__auto____$1;
}
} else {
throw e65993;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65992){if((e65992 instanceof Error)){
var e__64219__auto____$1 = e65992;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$1;
}
} else {
throw e65992;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65991){if((e65991 instanceof Error)){
var e__64219__auto____$1 = e65991;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$1;
}
} else {
throw e65991;

}
}} else {
throw e__64219__auto__;
}
} else {
throw e65990;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65931){if((e65931 instanceof Error)){
var e__64219__auto__ = e65931;
if((e__64219__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65884)) && ((cljs.core.count(ocr_65884) === 3)))){
try{var ocr_65884_0__65924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(0));
if((ocr_65884_0__65924 === false)){
try{var ocr_65883_1__65913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65883_1__65913,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65883_2__65914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65883_2__65914,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65989){if((e65989 instanceof Error)){
var e__64219__auto____$1 = e65989;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$1;
}
} else {
throw e65989;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65987){if((e65987 instanceof Error)){
var e__64219__auto____$1 = e65987;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$1;
}
} else {
throw e65987;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65934){if((e65934 instanceof Error)){
var e__64219__auto____$1 = e65934;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65884_0__65924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(0));
if((ocr_65884_0__65924 === true)){
try{var ocr_65883_2__65914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65883_2__65914,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65883_1__65913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65883_1__65913,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65983){if((e65983 instanceof Error)){
var e__64219__auto____$2 = e65983;
if((e__64219__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65884_1__65925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(1));
if((ocr_65884_1__65925 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65984){if((e65984 instanceof Error)){
var e__64219__auto____$3 = e65984;
if((e__64219__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65884_1__65925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(1));
if((ocr_65884_1__65925 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65985){if((e65985 instanceof Error)){
var e__64219__auto____$4 = e65985;
if((e__64219__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$4;
}
} else {
throw e65985;

}
}} else {
throw e__64219__auto____$3;
}
} else {
throw e65984;

}
}} else {
throw e__64219__auto____$2;
}
} else {
throw e65983;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65982){if((e65982 instanceof Error)){
var e__64219__auto____$2 = e65982;
if((e__64219__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$2;
}
} else {
throw e65982;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65935){if((e65935 instanceof Error)){
var e__64219__auto____$2 = e65935;
if((e__64219__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65884_0__65924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(0));
if((ocr_65884_0__65924 === false)){
try{var ocr_65884_1__65925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(1));
if((ocr_65884_1__65925 === true)){
try{var ocr_65883_2__65914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65883_2__65914,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65981){if((e65981 instanceof Error)){
var e__64219__auto____$3 = e65981;
if((e__64219__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$3;
}
} else {
throw e65981;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65980){if((e65980 instanceof Error)){
var e__64219__auto____$3 = e65980;
if((e__64219__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$3;
}
} else {
throw e65980;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65937){if((e65937 instanceof Error)){
var e__64219__auto____$3 = e65937;
if((e__64219__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65884_2__65926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(2));
if((ocr_65884_2__65926 === true)){
try{var ocr_65884_0__65924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(0));
if((ocr_65884_0__65924 === true)){
try{var ocr_65883_1__65913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65883_1__65913,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65977){if((e65977 instanceof Error)){
var e__64219__auto____$4 = e65977;
if((e__64219__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$4;
}
} else {
throw e65977;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65976){if((e65976 instanceof Error)){
var e__64219__auto____$4 = e65976;
if((e__64219__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$4;
}
} else {
throw e65976;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65938){if((e65938 instanceof Error)){
var e__64219__auto____$4 = e65938;
if((e__64219__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_65884_2__65926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(2));
if((ocr_65884_2__65926 === false)){
try{var ocr_65884_0__65924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(0));
if((ocr_65884_0__65924 === true)){
try{var ocr_65883_1__65913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65883_1__65913,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65975){if((e65975 instanceof Error)){
var e__64219__auto____$5 = e65975;
if((e__64219__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$5;
}
} else {
throw e65975;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65974){if((e65974 instanceof Error)){
var e__64219__auto____$5 = e65974;
if((e__64219__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$5;
}
} else {
throw e65974;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65939){if((e65939 instanceof Error)){
var e__64219__auto____$5 = e65939;
if((e__64219__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_65884_2__65926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(2));
if((ocr_65884_2__65926 === true)){
try{var ocr_65884_0__65924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(0));
if((ocr_65884_0__65924 === false)){
try{var ocr_65883_1__65913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65883_1__65913,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65973){if((e65973 instanceof Error)){
var e__64219__auto____$6 = e65973;
if((e__64219__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$6;
}
} else {
throw e65973;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65969){if((e65969 instanceof Error)){
var e__64219__auto____$6 = e65969;
if((e__64219__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_65884_1__65925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(1));
if((ocr_65884_1__65925 === true)){
try{var ocr_65883_0__65912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65883_0__65912,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65972){if((e65972 instanceof Error)){
var e__64219__auto____$7 = e65972;
if((e__64219__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$7;
}
} else {
throw e65972;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65970){if((e65970 instanceof Error)){
var e__64219__auto____$7 = e65970;
if((e__64219__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$7;
}
} else {
throw e65970;

}
}} else {
throw e__64219__auto____$6;
}
} else {
throw e65969;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65940){if((e65940 instanceof Error)){
var e__64219__auto____$6 = e65940;
if((e__64219__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_65884_2__65926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(2));
if((ocr_65884_2__65926 === false)){
try{var ocr_65884_1__65925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(1));
if((ocr_65884_1__65925 === true)){
try{var ocr_65883_0__65912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65883_0__65912,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65967){if((e65967 instanceof Error)){
var e__64219__auto____$7 = e65967;
if((e__64219__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$7;
}
} else {
throw e65967;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65966){if((e65966 instanceof Error)){
var e__64219__auto____$7 = e65966;
if((e__64219__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$7;
}
} else {
throw e65966;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65941){if((e65941 instanceof Error)){
var e__64219__auto____$7 = e65941;
if((e__64219__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_65884_2__65926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(2));
if((ocr_65884_2__65926 === true)){
try{var ocr_65884_1__65925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(1));
if((ocr_65884_1__65925 === false)){
try{var ocr_65883_0__65912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65883_0__65912,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65965){if((e65965 instanceof Error)){
var e__64219__auto____$8 = e65965;
if((e__64219__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$8;
}
} else {
throw e65965;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65955){if((e65955 instanceof Error)){
var e__64219__auto____$8 = e65955;
if((e__64219__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_65884_1__65925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(1));
if((ocr_65884_1__65925 === true)){
try{var ocr_65884_0__65924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(0));
if((ocr_65884_0__65924 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65961){if((e65961 instanceof Error)){
var e__64219__auto____$9 = e65961;
if((e__64219__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65884_0__65924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(0));
if((ocr_65884_0__65924 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65962){if((e65962 instanceof Error)){
var e__64219__auto____$10 = e65962;
if((e__64219__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$10;
}
} else {
throw e65962;

}
}} else {
throw e__64219__auto____$9;
}
} else {
throw e65961;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65956){if((e65956 instanceof Error)){
var e__64219__auto____$9 = e65956;
if((e__64219__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65884_1__65925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(1));
if((ocr_65884_1__65925 === false)){
try{var ocr_65884_0__65924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(0));
if((ocr_65884_0__65924 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65960){if((e65960 instanceof Error)){
var e__64219__auto____$10 = e65960;
if((e__64219__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$10;
}
} else {
throw e65960;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65959){if((e65959 instanceof Error)){
var e__64219__auto____$10 = e65959;
if((e__64219__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$10;
}
} else {
throw e65959;

}
}} else {
throw e__64219__auto____$9;
}
} else {
throw e65956;

}
}} else {
throw e__64219__auto____$8;
}
} else {
throw e65955;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65942){if((e65942 instanceof Error)){
var e__64219__auto____$8 = e65942;
if((e__64219__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_65884_2__65926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(2));
if((ocr_65884_2__65926 === false)){
try{var ocr_65884_0__65924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(0));
if((ocr_65884_0__65924 === true)){
try{var ocr_65884_1__65925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(1));
if((ocr_65884_1__65925 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65954){if((e65954 instanceof Error)){
var e__64219__auto____$9 = e65954;
if((e__64219__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$9;
}
} else {
throw e65954;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65953){if((e65953 instanceof Error)){
var e__64219__auto____$9 = e65953;
if((e__64219__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$9;
}
} else {
throw e65953;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65943){if((e65943 instanceof Error)){
var e__64219__auto____$9 = e65943;
if((e__64219__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65884_2__65926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(2));
if((ocr_65884_2__65926 === true)){
try{var ocr_65884_0__65924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(0));
if((ocr_65884_0__65924 === false)){
try{var ocr_65884_1__65925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(1));
if((ocr_65884_1__65925 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65952){if((e65952 instanceof Error)){
var e__64219__auto____$10 = e65952;
if((e__64219__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$10;
}
} else {
throw e65952;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65951){if((e65951 instanceof Error)){
var e__64219__auto____$10 = e65951;
if((e__64219__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$10;
}
} else {
throw e65951;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65944){if((e65944 instanceof Error)){
var e__64219__auto____$10 = e65944;
if((e__64219__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_65884_2__65926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(2));
if((ocr_65884_2__65926 === false)){
try{var ocr_65884_0__65924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(0));
if((ocr_65884_0__65924 === true)){
try{var ocr_65884_1__65925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(1));
if((ocr_65884_1__65925 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65950){if((e65950 instanceof Error)){
var e__64219__auto____$11 = e65950;
if((e__64219__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$11;
}
} else {
throw e65950;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65946){if((e65946 instanceof Error)){
var e__64219__auto____$11 = e65946;
if((e__64219__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_65884_0__65924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(0));
if((ocr_65884_0__65924 === false)){
try{var ocr_65884_1__65925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65884,(1));
if((ocr_65884_1__65925 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65883,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65948){if((e65948 instanceof Error)){
var e__64219__auto____$12 = e65948;
if((e__64219__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$12;
}
} else {
throw e65948;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65947){if((e65947 instanceof Error)){
var e__64219__auto____$12 = e65947;
if((e__64219__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$12;
}
} else {
throw e65947;

}
}} else {
throw e__64219__auto____$11;
}
} else {
throw e65946;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65945){if((e65945 instanceof Error)){
var e__64219__auto____$11 = e65945;
if((e__64219__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$11;
}
} else {
throw e65945;

}
}} else {
throw e__64219__auto____$10;
}
} else {
throw e65944;

}
}} else {
throw e__64219__auto____$9;
}
} else {
throw e65943;

}
}} else {
throw e__64219__auto____$8;
}
} else {
throw e65942;

}
}} else {
throw e__64219__auto____$7;
}
} else {
throw e65941;

}
}} else {
throw e__64219__auto____$6;
}
} else {
throw e65940;

}
}} else {
throw e__64219__auto____$5;
}
} else {
throw e65939;

}
}} else {
throw e__64219__auto____$4;
}
} else {
throw e65938;

}
}} else {
throw e__64219__auto____$3;
}
} else {
throw e65937;

}
}} else {
throw e__64219__auto____$2;
}
} else {
throw e65935;

}
}} else {
throw e__64219__auto____$1;
}
} else {
throw e65934;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65932){if((e65932 instanceof Error)){
var e__64219__auto____$1 = e65932;
if((e__64219__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64219__auto____$1;
}
} else {
throw e65932;

}
}} else {
throw e__64219__auto__;
}
} else {
throw e65931;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65930){if((e65930 instanceof Error)){
var e__64219__auto__ = e65930;
if((e__64219__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__64219__auto__;
}
} else {
throw e65930;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66005){
var vec__66006 = p__66005;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66006,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66006,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__66004_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__66004_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66012){
var vec__66013 = p__66012;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66013,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66013,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__66010_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__66010_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__66016 = cljs.core.rest(ins);
var G__66017 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__66016,G__66017) : posh.lib.q_analyze.just_qvars.call(null,G__66016,G__66017));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66018_SHARP_){
return cljs.core.zipmap(qvars,p1__66018_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__66037 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66037,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66037,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66037,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66037,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__66489 = var$;
var G__66490 = dbvarmap;
var G__66491 = cljs.core.rest(dbeavs);
var$ = G__66489;
dbvarmap = G__66490;
dbeavs = G__66491;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__66046 = cljs.core.rest(vars);
var G__66047 = dbvarmap;
var G__66048 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__66046,G__66047,G__66048) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__66046,G__66047,G__66048));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__66492 = (n + (1));
var G__66493 = cljs.core.rest(xs__$1);
n = G__66492;
xs__$1 = G__66493;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4174__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4174__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66057_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__66057_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__66057_SHARP_) : type.call(null,p1__66057_SHARP_));
} else {
return p1__66057_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__66062 = cljs.core.rest(ins);
var G__66063 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__66062,G__66063) : posh.lib.q_analyze.make_dbarg_map.call(null,G__66062,G__66063));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66070){
var vec__66071 = p__66070;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66071,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66071,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__66077_SHARP_,p2__66076_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__66076_SHARP_)){
return p1__66077_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__66081 = cljs.core._EQ_;
var expr__66082 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__66081.cljs$core$IFn$_invoke$arity$2 ? pred__66081.cljs$core$IFn$_invoke$arity$2((1),expr__66082) : pred__66081.call(null,(1),expr__66082)))){
return true;
} else {
if(cljs.core.truth_((pred__66081.cljs$core$IFn$_invoke$arity$2 ? pred__66081.cljs$core$IFn$_invoke$arity$2((3),expr__66082) : pred__66081.call(null,(3),expr__66082)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__66498 = cljs.core.first(remaining);
var G__66499 = cljs.core.rest(remaining);
clause = G__66498;
remaining = G__66499;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__66500 = cljs.core.first(remaining);
var G__66501 = cljs.core.rest(remaining);
clause = G__66500;
remaining = G__66501;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__66091(s__66092){
return (new cljs.core.LazySeq(null,(function (){
var s__66092__$1 = s__66092;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66092__$1);
if(temp__5735__auto__){
var s__66092__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66092__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__66092__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__66094 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__66093 = (0);
while(true){
if((i__66093 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__66093);
cljs.core.chunk_append(b__66094,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__66502 = (i__66093 + (1));
i__66093 = G__66502;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66094),posh$lib$q_analyze$resolve_any_idents_$_iter__66091(cljs.core.chunk_rest(s__66092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66094),null);
}
} else {
var var_value = cljs.core.first(s__66092__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__66091(cljs.core.rest(s__66092__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66111){
var vec__66112 = p__66111;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66112,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66112,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66116){
var vec__66118 = p__66116;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66118,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66118,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66121){
var vec__66122 = p__66121;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66122,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66122,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66128){
var vec__66129 = p__66128;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66129,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66129,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__66133 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__66134 = cljs.core.vec(r);
var fexpr__66132 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66132.cljs$core$IFn$_invoke$arity$2 ? fexpr__66132.cljs$core$IFn$_invoke$arity$2(G__66133,G__66134) : fexpr__66132.call(null,G__66133,G__66134));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66135){
var vec__66136 = p__66135;
var seq__66137 = cljs.core.seq(vec__66136);
var first__66138 = cljs.core.first(seq__66137);
var seq__66137__$1 = cljs.core.next(seq__66137);
var db = first__66138;
var eav = seq__66137__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66139){
var vec__66140 = p__66139;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66140,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66140,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__66109_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__66109_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__66109_SHARP_) : linked_qvars.call(null,p1__66109_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__66109_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__66110_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__66110_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__66110_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
