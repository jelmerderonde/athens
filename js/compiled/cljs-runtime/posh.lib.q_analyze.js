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
var G__65114 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65114) : stop_at_QMARK_.call(null,G__65114));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__65115 = stop_at_QMARK_;
var G__65116 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__65115,G__65116) : posh.lib.q_analyze.take_until.call(null,G__65115,G__65116));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__65118 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65118) : rest_at_QMARK_.call(null,G__65118));
}
})())){
return ls;
} else {
var G__65827 = rest_at_QMARK_;
var G__65828 = cljs.core.rest(ls);
rest_at_QMARK_ = G__65827;
ls = G__65828;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__65124 = split_at_QMARK_;
var G__65127 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__65124,G__65127) : posh.lib.q_analyze.split_list_at.call(null,G__65124,G__65127));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__65128 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65128) : posh.lib.q_analyze.get_all_vars.call(null,G__65128));
})(),(function (){var G__65129 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65129) : posh.lib.q_analyze.get_all_vars.call(null,G__65129));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__65130 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65130) : posh.lib.q_analyze.get_all_vars.call(null,G__65130));
})(),cljs.core.first(query));
} else {
var G__65132 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65132) : posh.lib.q_analyze.get_all_vars.call(null,G__65132));

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
var G__65144 = cljs.core.rest(eav);
var G__65145 = (n - (1));
var G__65146 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__65147 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__65144,G__65145,G__65146,G__65147) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__65144,G__65145,G__65146,G__65147));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__65148 = cljs.core.rest(eav);
var G__65149 = (n - (1));
var G__65150 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__65151 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__65148,G__65149,G__65150,G__65151) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__65148,G__65149,G__65150,G__65151));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__65152 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__65152) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__65152));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__65154 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__65154) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__65154));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__65155 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65155) : posh.lib.q_analyze.get_eavs.call(null,G__65155));
})(),(function (){var G__65156 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65156) : posh.lib.q_analyze.get_eavs.call(null,G__65156));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__65160 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65160) : posh.lib.q_analyze.get_eavs.call(null,G__65160));
})(),(function (){var G__65163 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65163) : posh.lib.q_analyze.get_eavs.call(null,G__65163));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__65167 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65167) : posh.lib.q_analyze.get_eavs.call(null,G__65167));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_65169 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_65169)) && ((cljs.core.count(ocr_65169) === 2)))){
try{var ocr_65169_0__65197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65169,(0));
if(((cljs.core.vector_QMARK_(ocr_65169_0__65197)) && ((cljs.core.count(ocr_65169_0__65197) === 5)))){
try{var ocr_65169_0__65197_0__65199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65169_0__65197,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65169_0__65197_0__65199,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65169_0__65197,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65169_0__65197,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65169_0__65197,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65169,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__65218 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65218) : posh.lib.q_analyze.get_eavs.call(null,G__65218));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e65214){if((e65214 instanceof Error)){
var e__63603__auto__ = e65214;
if((e__63603__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto__;
}
} else {
throw e65214;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65213){if((e65213 instanceof Error)){
var e__63603__auto__ = e65213;
if((e__63603__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto__;
}
} else {
throw e65213;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65211){if((e65211 instanceof Error)){
var e__63603__auto__ = e65211;
if((e__63603__auto__ === cljs.core.match.backtrack)){
var G__65212 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65212) : posh.lib.q_analyze.get_eavs.call(null,G__65212));
} else {
throw e__63603__auto__;
}
} else {
throw e65211;

}
}} else {
var G__65219 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65219) : posh.lib.q_analyze.get_eavs.call(null,G__65219));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__65220){
var vec__65221 = p__65220;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65221,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65221,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65224_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__65224_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__65224_SHARP_);
} else {
return p1__65224_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__65230 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__65230) : posh.lib.q_analyze.count_qvars.call(null,G__65230));
})(),(function (){var G__65231 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__65231) : posh.lib.q_analyze.count_qvars.call(null,G__65231));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__65233 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__65233) : posh.lib.q_analyze.count_qvars.call(null,G__65233));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__65235(s__65236){
return (new cljs.core.LazySeq(null,(function (){
var s__65236__$1 = s__65236;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65236__$1);
if(temp__5735__auto__){
var s__65236__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65236__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65236__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65238 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65237 = (0);
while(true){
if((i__65237 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65237);
cljs.core.chunk_append(b__65238,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__65989 = (i__65237 + (1));
i__65237 = G__65989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65238),posh$lib$q_analyze$fill_qvar_set_$_iter__65235(cljs.core.chunk_rest(s__65236__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65238),null);
}
} else {
var r = cljs.core.first(s__65236__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__65235(cljs.core.rest(s__65236__$2)));
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
return cljs.core.cons((function (){var G__65246 = cljs.core.first(seq1);
var G__65247 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__65246,G__65247) : f.call(null,G__65246,G__65247));
})(),(function (){var G__65248 = f;
var G__65249 = cljs.core.rest(seq1);
var G__65250 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__65248,G__65249,G__65250) : posh.lib.q_analyze.seq_merge_with.call(null,G__65248,G__65249,G__65250));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__65254){
var vec__65255 = p__65254;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65255,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65255,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65255,(2),null);
var eav = vec__65255;
var vec__65258 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65258,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65258,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65258,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__65262(s__65263){
return (new cljs.core.LazySeq(null,(function (){
var s__65263__$1 = s__65263;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65263__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__65263__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__65262_$_iter__65264(s__65265){
return (new cljs.core.LazySeq(null,((function (s__65263__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav){
return (function (){
var s__65265__$1 = s__65265;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65265__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__65265__$1,s__65263__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__65262_$_iter__65264_$_iter__65266(s__65267){
return (new cljs.core.LazySeq(null,((function (s__65265__$1,s__65263__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav){
return (function (){
var s__65267__$1 = s__65267;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65267__$1);
if(temp__5735__auto____$2){
var s__65267__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65267__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65267__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65269 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65268 = (0);
while(true){
if((i__65268 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65268);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65268,s__65267__$1,s__65265__$1,s__65263__$1,vv,c__4580__auto__,size__4581__auto__,b__65269,s__65267__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav){
return (function (p1__65252_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__65252_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__65268,s__65267__$1,s__65265__$1,s__65263__$1,vv,c__4580__auto__,size__4581__auto__,b__65269,s__65267__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65268,s__65267__$1,s__65265__$1,s__65263__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__65269,s__65267__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav){
return (function (p__65275){
var vec__65276 = p__65275;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65276,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65276,(1),null);
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
});})(i__65268,s__65267__$1,s__65265__$1,s__65263__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__65269,s__65267__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65268,s__65267__$1,s__65265__$1,s__65263__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__65269,s__65267__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav){
return (function (p1__65253_SHARP_){
if(cljs.core.truth_(p1__65253_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__65268,s__65267__$1,s__65265__$1,s__65263__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__65269,s__65267__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__65269,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__66003 = (i__65268 + (1));
i__65268 = G__66003;
continue;
} else {
var G__66004 = (i__65268 + (1));
i__65268 = G__66004;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65269),posh$lib$q_analyze$pattern_from_eav__old_$_iter__65262_$_iter__65264_$_iter__65266(cljs.core.chunk_rest(s__65267__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65269),null);
}
} else {
var vv = cljs.core.first(s__65267__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__65267__$1,s__65265__$1,s__65263__$1,vv,s__65267__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav){
return (function (p1__65252_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__65252_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__65267__$1,s__65265__$1,s__65263__$1,vv,s__65267__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__65267__$1,s__65265__$1,s__65263__$1,wildcard_count,vv,s__65267__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav){
return (function (p__65280){
var vec__65281 = p__65280;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65281,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65281,(1),null);
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
});})(s__65267__$1,s__65265__$1,s__65263__$1,wildcard_count,vv,s__65267__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__65267__$1,s__65265__$1,s__65263__$1,wildcard_count,exposed_qvars,vv,s__65267__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav){
return (function (p1__65253_SHARP_){
if(cljs.core.truth_(p1__65253_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__65267__$1,s__65265__$1,s__65263__$1,wildcard_count,exposed_qvars,vv,s__65267__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__65262_$_iter__65264_$_iter__65266(cljs.core.rest(s__65267__$2)));
} else {
var G__66027 = cljs.core.rest(s__65267__$2);
s__65267__$1 = G__66027;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__65265__$1,s__65263__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav))
,null,null));
});})(s__65265__$1,s__65263__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__65262_$_iter__65264(cljs.core.rest(s__65265__$1)));
} else {
var G__66028 = cljs.core.rest(s__65265__$1);
s__65265__$1 = G__66028;
continue;
}
} else {
return null;
}
break;
}
});})(s__65263__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav))
,null,null));
});})(s__65263__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65258,qe,qa,qv,vec__65255,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__65262(cljs.core.rest(s__65263__$1)));
} else {
var G__66099 = cljs.core.rest(s__65263__$1);
s__65263__$1 = G__66099;
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
var ocr_65294 = cljs.core.vec(eav);
var ocr_65295 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_65294)) && ((cljs.core.count(ocr_65294) === 3)))){
try{var ocr_65294_0__65332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_0__65332,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65294_1__65333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_1__65333,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65294_2__65334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_2__65334,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65470){if((e65470 instanceof Error)){
var e__63603__auto__ = e65470;
if((e__63603__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65295)) && ((cljs.core.count(ocr_65295) === 3)))){
try{var ocr_65295_2__65343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(2));
if((ocr_65295_2__65343 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65473){if((e65473 instanceof Error)){
var e__63603__auto____$1 = e65473;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65295_2__65343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(2));
if((ocr_65295_2__65343 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65478){if((e65478 instanceof Error)){
var e__63603__auto____$2 = e65478;
if((e__63603__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$2;
}
} else {
throw e65478;

}
}} else {
throw e__63603__auto____$1;
}
} else {
throw e65473;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65471){if((e65471 instanceof Error)){
var e__63603__auto____$1 = e65471;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$1;
}
} else {
throw e65471;

}
}} else {
throw e__63603__auto__;
}
} else {
throw e65470;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65458){if((e65458 instanceof Error)){
var e__63603__auto__ = e65458;
if((e__63603__auto__ === cljs.core.match.backtrack)){
try{var ocr_65294_2__65334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_2__65334,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_65295)) && ((cljs.core.count(ocr_65295) === 3)))){
try{var ocr_65295_1__65346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65346 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65463){if((e65463 instanceof Error)){
var e__63603__auto____$1 = e65463;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65295_1__65346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65346 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65464){if((e65464 instanceof Error)){
var e__63603__auto____$2 = e65464;
if((e__63603__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$2;
}
} else {
throw e65464;

}
}} else {
throw e__63603__auto____$1;
}
} else {
throw e65463;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65462){if((e65462 instanceof Error)){
var e__63603__auto____$1 = e65462;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$1;
}
} else {
throw e65462;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65460){if((e65460 instanceof Error)){
var e__63603__auto____$1 = e65460;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$1;
}
} else {
throw e65460;

}
}} else {
throw e__63603__auto__;
}
} else {
throw e65458;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65377){if((e65377 instanceof Error)){
var e__63603__auto__ = e65377;
if((e__63603__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65295)) && ((cljs.core.count(ocr_65295) === 3)))){
try{var ocr_65295_0__65353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(0));
if((ocr_65295_0__65353 === false)){
try{var ocr_65294_1__65333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_1__65333,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65294_2__65334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_2__65334,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65457){if((e65457 instanceof Error)){
var e__63603__auto____$1 = e65457;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$1;
}
} else {
throw e65457;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65456){if((e65456 instanceof Error)){
var e__63603__auto____$1 = e65456;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$1;
}
} else {
throw e65456;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65379){if((e65379 instanceof Error)){
var e__63603__auto____$1 = e65379;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65295_0__65353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(0));
if((ocr_65295_0__65353 === true)){
try{var ocr_65294_2__65334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_2__65334,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65294_1__65333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_1__65333,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65453){if((e65453 instanceof Error)){
var e__63603__auto____$2 = e65453;
if((e__63603__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65454){if((e65454 instanceof Error)){
var e__63603__auto____$3 = e65454;
if((e__63603__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65455){if((e65455 instanceof Error)){
var e__63603__auto____$4 = e65455;
if((e__63603__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$4;
}
} else {
throw e65455;

}
}} else {
throw e__63603__auto____$3;
}
} else {
throw e65454;

}
}} else {
throw e__63603__auto____$2;
}
} else {
throw e65453;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65451){if((e65451 instanceof Error)){
var e__63603__auto____$2 = e65451;
if((e__63603__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$2;
}
} else {
throw e65451;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65380){if((e65380 instanceof Error)){
var e__63603__auto____$2 = e65380;
if((e__63603__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65295_0__65353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(0));
if((ocr_65295_0__65353 === false)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === true)){
try{var ocr_65294_2__65334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_2__65334,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65450){if((e65450 instanceof Error)){
var e__63603__auto____$3 = e65450;
if((e__63603__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$3;
}
} else {
throw e65450;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65447){if((e65447 instanceof Error)){
var e__63603__auto____$3 = e65447;
if((e__63603__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === false)){
try{var ocr_65294_2__65334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_2__65334,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65449){if((e65449 instanceof Error)){
var e__63603__auto____$4 = e65449;
if((e__63603__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$4;
}
} else {
throw e65449;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65448){if((e65448 instanceof Error)){
var e__63603__auto____$4 = e65448;
if((e__63603__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$4;
}
} else {
throw e65448;

}
}} else {
throw e__63603__auto____$3;
}
} else {
throw e65447;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65381){if((e65381 instanceof Error)){
var e__63603__auto____$3 = e65381;
if((e__63603__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65295_2__65355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(2));
if((ocr_65295_2__65355 === true)){
try{var ocr_65295_0__65353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(0));
if((ocr_65295_0__65353 === true)){
try{var ocr_65294_1__65333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_1__65333,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65446){if((e65446 instanceof Error)){
var e__63603__auto____$4 = e65446;
if((e__63603__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$4;
}
} else {
throw e65446;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65445){if((e65445 instanceof Error)){
var e__63603__auto____$4 = e65445;
if((e__63603__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$4;
}
} else {
throw e65445;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65382){if((e65382 instanceof Error)){
var e__63603__auto____$4 = e65382;
if((e__63603__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_65295_2__65355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(2));
if((ocr_65295_2__65355 === false)){
try{var ocr_65295_0__65353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(0));
if((ocr_65295_0__65353 === true)){
try{var ocr_65294_1__65333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_1__65333,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65443){if((e65443 instanceof Error)){
var e__63603__auto____$5 = e65443;
if((e__63603__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$5;
}
} else {
throw e65443;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65442){if((e65442 instanceof Error)){
var e__63603__auto____$5 = e65442;
if((e__63603__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$5;
}
} else {
throw e65442;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65383){if((e65383 instanceof Error)){
var e__63603__auto____$5 = e65383;
if((e__63603__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_65295_2__65355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(2));
if((ocr_65295_2__65355 === true)){
try{var ocr_65295_0__65353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(0));
if((ocr_65295_0__65353 === false)){
try{var ocr_65294_1__65333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_1__65333,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65441){if((e65441 instanceof Error)){
var e__63603__auto____$6 = e65441;
if((e__63603__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$6;
}
} else {
throw e65441;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65440){if((e65440 instanceof Error)){
var e__63603__auto____$6 = e65440;
if((e__63603__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$6;
}
} else {
throw e65440;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65384){if((e65384 instanceof Error)){
var e__63603__auto____$6 = e65384;
if((e__63603__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_65295_2__65355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(2));
if((ocr_65295_2__65355 === false)){
try{var ocr_65295_0__65353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(0));
if((ocr_65295_0__65353 === false)){
try{var ocr_65294_1__65333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_1__65333,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65435){if((e65435 instanceof Error)){
var e__63603__auto____$7 = e65435;
if((e__63603__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$7;
}
} else {
throw e65435;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65434){if((e65434 instanceof Error)){
var e__63603__auto____$7 = e65434;
if((e__63603__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$7;
}
} else {
throw e65434;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65385){if((e65385 instanceof Error)){
var e__63603__auto____$7 = e65385;
if((e__63603__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_65295_2__65355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(2));
if((ocr_65295_2__65355 === true)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === true)){
try{var ocr_65294_0__65332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_0__65332,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65433){if((e65433 instanceof Error)){
var e__63603__auto____$8 = e65433;
if((e__63603__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$8;
}
} else {
throw e65433;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65429){if((e65429 instanceof Error)){
var e__63603__auto____$8 = e65429;
if((e__63603__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$8;
}
} else {
throw e65429;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65386){if((e65386 instanceof Error)){
var e__63603__auto____$8 = e65386;
if((e__63603__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_65295_2__65355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(2));
if((ocr_65295_2__65355 === false)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === true)){
try{var ocr_65294_0__65332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_0__65332,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65425){if((e65425 instanceof Error)){
var e__63603__auto____$9 = e65425;
if((e__63603__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$9;
}
} else {
throw e65425;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65424){if((e65424 instanceof Error)){
var e__63603__auto____$9 = e65424;
if((e__63603__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$9;
}
} else {
throw e65424;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65387){if((e65387 instanceof Error)){
var e__63603__auto____$9 = e65387;
if((e__63603__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65295_2__65355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(2));
if((ocr_65295_2__65355 === true)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === false)){
try{var ocr_65294_0__65332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_0__65332,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65423){if((e65423 instanceof Error)){
var e__63603__auto____$10 = e65423;
if((e__63603__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$10;
}
} else {
throw e65423;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65422){if((e65422 instanceof Error)){
var e__63603__auto____$10 = e65422;
if((e__63603__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$10;
}
} else {
throw e65422;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65388){if((e65388 instanceof Error)){
var e__63603__auto____$10 = e65388;
if((e__63603__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_65295_2__65355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(2));
if((ocr_65295_2__65355 === false)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === false)){
try{var ocr_65294_0__65332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65294_0__65332,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65421){if((e65421 instanceof Error)){
var e__63603__auto____$11 = e65421;
if((e__63603__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$11;
}
} else {
throw e65421;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65417){if((e65417 instanceof Error)){
var e__63603__auto____$11 = e65417;
if((e__63603__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$11;
}
} else {
throw e65417;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65390){if((e65390 instanceof Error)){
var e__63603__auto____$11 = e65390;
if((e__63603__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_65295_2__65355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(2));
if((ocr_65295_2__65355 === true)){
try{var ocr_65295_0__65353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(0));
if((ocr_65295_0__65353 === true)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65416){if((e65416 instanceof Error)){
var e__63603__auto____$12 = e65416;
if((e__63603__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$12;
}
} else {
throw e65416;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65411){if((e65411 instanceof Error)){
var e__63603__auto____$12 = e65411;
if((e__63603__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_65295_0__65353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(0));
if((ocr_65295_0__65353 === false)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65415){if((e65415 instanceof Error)){
var e__63603__auto____$13 = e65415;
if((e__63603__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$13;
}
} else {
throw e65415;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65412){if((e65412 instanceof Error)){
var e__63603__auto____$13 = e65412;
if((e__63603__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_65295_0__65353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(0));
if((ocr_65295_0__65353 === true)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65414){if((e65414 instanceof Error)){
var e__63603__auto____$14 = e65414;
if((e__63603__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$14;
}
} else {
throw e65414;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65413){if((e65413 instanceof Error)){
var e__63603__auto____$14 = e65413;
if((e__63603__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$14;
}
} else {
throw e65413;

}
}} else {
throw e__63603__auto____$13;
}
} else {
throw e65412;

}
}} else {
throw e__63603__auto____$12;
}
} else {
throw e65411;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65391){if((e65391 instanceof Error)){
var e__63603__auto____$12 = e65391;
if((e__63603__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_65295_2__65355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(2));
if((ocr_65295_2__65355 === false)){
try{var ocr_65295_0__65353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(0));
if((ocr_65295_0__65353 === true)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65410){if((e65410 instanceof Error)){
var e__63603__auto____$13 = e65410;
if((e__63603__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$13;
}
} else {
throw e65410;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65409){if((e65409 instanceof Error)){
var e__63603__auto____$13 = e65409;
if((e__63603__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$13;
}
} else {
throw e65409;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65392){if((e65392 instanceof Error)){
var e__63603__auto____$13 = e65392;
if((e__63603__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_65295_2__65355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(2));
if((ocr_65295_2__65355 === true)){
try{var ocr_65295_0__65353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(0));
if((ocr_65295_0__65353 === false)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65407){if((e65407 instanceof Error)){
var e__63603__auto____$14 = e65407;
if((e__63603__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$14;
}
} else {
throw e65407;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65406){if((e65406 instanceof Error)){
var e__63603__auto____$14 = e65406;
if((e__63603__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$14;
}
} else {
throw e65406;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65394){if((e65394 instanceof Error)){
var e__63603__auto____$14 = e65394;
if((e__63603__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_65295_2__65355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(2));
if((ocr_65295_2__65355 === false)){
try{var ocr_65295_0__65353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(0));
if((ocr_65295_0__65353 === true)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65405){if((e65405 instanceof Error)){
var e__63603__auto____$15 = e65405;
if((e__63603__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$15;
}
} else {
throw e65405;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65396){if((e65396 instanceof Error)){
var e__63603__auto____$15 = e65396;
if((e__63603__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_65295_0__65353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(0));
if((ocr_65295_0__65353 === false)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65398){if((e65398 instanceof Error)){
var e__63603__auto____$16 = e65398;
if((e__63603__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_65295_1__65354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65295,(1));
if((ocr_65295_1__65354 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65294,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65399){if((e65399 instanceof Error)){
var e__63603__auto____$17 = e65399;
if((e__63603__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$17;
}
} else {
throw e65399;

}
}} else {
throw e__63603__auto____$16;
}
} else {
throw e65398;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65397){if((e65397 instanceof Error)){
var e__63603__auto____$16 = e65397;
if((e__63603__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$16;
}
} else {
throw e65397;

}
}} else {
throw e__63603__auto____$15;
}
} else {
throw e65396;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65395){if((e65395 instanceof Error)){
var e__63603__auto____$15 = e65395;
if((e__63603__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$15;
}
} else {
throw e65395;

}
}} else {
throw e__63603__auto____$14;
}
} else {
throw e65394;

}
}} else {
throw e__63603__auto____$13;
}
} else {
throw e65392;

}
}} else {
throw e__63603__auto____$12;
}
} else {
throw e65391;

}
}} else {
throw e__63603__auto____$11;
}
} else {
throw e65390;

}
}} else {
throw e__63603__auto____$10;
}
} else {
throw e65388;

}
}} else {
throw e__63603__auto____$9;
}
} else {
throw e65387;

}
}} else {
throw e__63603__auto____$8;
}
} else {
throw e65386;

}
}} else {
throw e__63603__auto____$7;
}
} else {
throw e65385;

}
}} else {
throw e__63603__auto____$6;
}
} else {
throw e65384;

}
}} else {
throw e__63603__auto____$5;
}
} else {
throw e65383;

}
}} else {
throw e__63603__auto____$4;
}
} else {
throw e65382;

}
}} else {
throw e__63603__auto____$3;
}
} else {
throw e65381;

}
}} else {
throw e__63603__auto____$2;
}
} else {
throw e65380;

}
}} else {
throw e__63603__auto____$1;
}
} else {
throw e65379;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65378){if((e65378 instanceof Error)){
var e__63603__auto____$1 = e65378;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$1;
}
} else {
throw e65378;

}
}} else {
throw e__63603__auto__;
}
} else {
throw e65377;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65376){if((e65376 instanceof Error)){
var e__63603__auto__ = e65376;
if((e__63603__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__63603__auto__;
}
} else {
throw e65376;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_65483 = cljs.core.vec(eav);
var ocr_65484 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_65483)) && ((cljs.core.count(ocr_65483) === 3)))){
try{var ocr_65483_0__65517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65483_0__65517,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65483_1__65518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65483_1__65518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65483_2__65519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65483_2__65519,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e65677){if((e65677 instanceof Error)){
var e__63603__auto__ = e65677;
if((e__63603__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65484)) && ((cljs.core.count(ocr_65484) === 3)))){
try{var ocr_65484_2__65530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(2));
if((ocr_65484_2__65530 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65679){if((e65679 instanceof Error)){
var e__63603__auto____$1 = e65679;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65484_2__65530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(2));
if((ocr_65484_2__65530 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65680){if((e65680 instanceof Error)){
var e__63603__auto____$2 = e65680;
if((e__63603__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$2;
}
} else {
throw e65680;

}
}} else {
throw e__63603__auto____$1;
}
} else {
throw e65679;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65678){if((e65678 instanceof Error)){
var e__63603__auto____$1 = e65678;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$1;
}
} else {
throw e65678;

}
}} else {
throw e__63603__auto__;
}
} else {
throw e65677;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65669){if((e65669 instanceof Error)){
var e__63603__auto__ = e65669;
if((e__63603__auto__ === cljs.core.match.backtrack)){
try{var ocr_65483_2__65519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65483_2__65519,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_65484)) && ((cljs.core.count(ocr_65484) === 3)))){
try{var ocr_65484_1__65532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(1));
if((ocr_65484_1__65532 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65674){if((e65674 instanceof Error)){
var e__63603__auto____$1 = e65674;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65484_1__65532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(1));
if((ocr_65484_1__65532 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65675){if((e65675 instanceof Error)){
var e__63603__auto____$2 = e65675;
if((e__63603__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$2;
}
} else {
throw e65675;

}
}} else {
throw e__63603__auto____$1;
}
} else {
throw e65674;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65673){if((e65673 instanceof Error)){
var e__63603__auto____$1 = e65673;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$1;
}
} else {
throw e65673;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65670){if((e65670 instanceof Error)){
var e__63603__auto____$1 = e65670;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$1;
}
} else {
throw e65670;

}
}} else {
throw e__63603__auto__;
}
} else {
throw e65669;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65560){if((e65560 instanceof Error)){
var e__63603__auto__ = e65560;
if((e__63603__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65484)) && ((cljs.core.count(ocr_65484) === 3)))){
try{var ocr_65484_0__65534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(0));
if((ocr_65484_0__65534 === false)){
try{var ocr_65483_1__65518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65483_1__65518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65483_2__65519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65483_2__65519,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65662){if((e65662 instanceof Error)){
var e__63603__auto____$1 = e65662;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$1;
}
} else {
throw e65662;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65658){if((e65658 instanceof Error)){
var e__63603__auto____$1 = e65658;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$1;
}
} else {
throw e65658;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65562){if((e65562 instanceof Error)){
var e__63603__auto____$1 = e65562;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65484_0__65534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(0));
if((ocr_65484_0__65534 === true)){
try{var ocr_65483_2__65519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65483_2__65519,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65483_1__65518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65483_1__65518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65644){if((e65644 instanceof Error)){
var e__63603__auto____$2 = e65644;
if((e__63603__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65484_1__65535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(1));
if((ocr_65484_1__65535 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65646){if((e65646 instanceof Error)){
var e__63603__auto____$3 = e65646;
if((e__63603__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65484_1__65535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(1));
if((ocr_65484_1__65535 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65647){if((e65647 instanceof Error)){
var e__63603__auto____$4 = e65647;
if((e__63603__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$4;
}
} else {
throw e65647;

}
}} else {
throw e__63603__auto____$3;
}
} else {
throw e65646;

}
}} else {
throw e__63603__auto____$2;
}
} else {
throw e65644;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65643){if((e65643 instanceof Error)){
var e__63603__auto____$2 = e65643;
if((e__63603__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$2;
}
} else {
throw e65643;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65563){if((e65563 instanceof Error)){
var e__63603__auto____$2 = e65563;
if((e__63603__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65484_0__65534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(0));
if((ocr_65484_0__65534 === false)){
try{var ocr_65484_1__65535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(1));
if((ocr_65484_1__65535 === true)){
try{var ocr_65483_2__65519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65483_2__65519,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65642){if((e65642 instanceof Error)){
var e__63603__auto____$3 = e65642;
if((e__63603__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$3;
}
} else {
throw e65642;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65641){if((e65641 instanceof Error)){
var e__63603__auto____$3 = e65641;
if((e__63603__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$3;
}
} else {
throw e65641;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65564){if((e65564 instanceof Error)){
var e__63603__auto____$3 = e65564;
if((e__63603__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65484_2__65536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(2));
if((ocr_65484_2__65536 === true)){
try{var ocr_65484_0__65534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(0));
if((ocr_65484_0__65534 === true)){
try{var ocr_65483_1__65518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65483_1__65518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65637){if((e65637 instanceof Error)){
var e__63603__auto____$4 = e65637;
if((e__63603__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$4;
}
} else {
throw e65637;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65635){if((e65635 instanceof Error)){
var e__63603__auto____$4 = e65635;
if((e__63603__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$4;
}
} else {
throw e65635;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65565){if((e65565 instanceof Error)){
var e__63603__auto____$4 = e65565;
if((e__63603__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_65484_2__65536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(2));
if((ocr_65484_2__65536 === false)){
try{var ocr_65484_0__65534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(0));
if((ocr_65484_0__65534 === true)){
try{var ocr_65483_1__65518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65483_1__65518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65633){if((e65633 instanceof Error)){
var e__63603__auto____$5 = e65633;
if((e__63603__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$5;
}
} else {
throw e65633;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65631){if((e65631 instanceof Error)){
var e__63603__auto____$5 = e65631;
if((e__63603__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$5;
}
} else {
throw e65631;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65566){if((e65566 instanceof Error)){
var e__63603__auto____$5 = e65566;
if((e__63603__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_65484_2__65536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(2));
if((ocr_65484_2__65536 === true)){
try{var ocr_65484_0__65534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(0));
if((ocr_65484_0__65534 === false)){
try{var ocr_65483_1__65518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65483_1__65518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65625){if((e65625 instanceof Error)){
var e__63603__auto____$6 = e65625;
if((e__63603__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$6;
}
} else {
throw e65625;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65621){if((e65621 instanceof Error)){
var e__63603__auto____$6 = e65621;
if((e__63603__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_65484_1__65535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(1));
if((ocr_65484_1__65535 === true)){
try{var ocr_65483_0__65517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65483_0__65517,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65623){if((e65623 instanceof Error)){
var e__63603__auto____$7 = e65623;
if((e__63603__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$7;
}
} else {
throw e65623;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65622){if((e65622 instanceof Error)){
var e__63603__auto____$7 = e65622;
if((e__63603__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$7;
}
} else {
throw e65622;

}
}} else {
throw e__63603__auto____$6;
}
} else {
throw e65621;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65567){if((e65567 instanceof Error)){
var e__63603__auto____$6 = e65567;
if((e__63603__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_65484_2__65536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(2));
if((ocr_65484_2__65536 === false)){
try{var ocr_65484_1__65535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(1));
if((ocr_65484_1__65535 === true)){
try{var ocr_65483_0__65517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65483_0__65517,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65619){if((e65619 instanceof Error)){
var e__63603__auto____$7 = e65619;
if((e__63603__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$7;
}
} else {
throw e65619;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65618){if((e65618 instanceof Error)){
var e__63603__auto____$7 = e65618;
if((e__63603__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$7;
}
} else {
throw e65618;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65569){if((e65569 instanceof Error)){
var e__63603__auto____$7 = e65569;
if((e__63603__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_65484_2__65536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(2));
if((ocr_65484_2__65536 === true)){
try{var ocr_65484_1__65535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(1));
if((ocr_65484_1__65535 === false)){
try{var ocr_65483_0__65517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65483_0__65517,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65613){if((e65613 instanceof Error)){
var e__63603__auto____$8 = e65613;
if((e__63603__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$8;
}
} else {
throw e65613;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65600){if((e65600 instanceof Error)){
var e__63603__auto____$8 = e65600;
if((e__63603__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_65484_1__65535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(1));
if((ocr_65484_1__65535 === true)){
try{var ocr_65484_0__65534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(0));
if((ocr_65484_0__65534 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65606){if((e65606 instanceof Error)){
var e__63603__auto____$9 = e65606;
if((e__63603__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65484_0__65534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(0));
if((ocr_65484_0__65534 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65607){if((e65607 instanceof Error)){
var e__63603__auto____$10 = e65607;
if((e__63603__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$10;
}
} else {
throw e65607;

}
}} else {
throw e__63603__auto____$9;
}
} else {
throw e65606;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65601){if((e65601 instanceof Error)){
var e__63603__auto____$9 = e65601;
if((e__63603__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65484_1__65535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(1));
if((ocr_65484_1__65535 === false)){
try{var ocr_65484_0__65534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(0));
if((ocr_65484_0__65534 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65605){if((e65605 instanceof Error)){
var e__63603__auto____$10 = e65605;
if((e__63603__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$10;
}
} else {
throw e65605;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65603){if((e65603 instanceof Error)){
var e__63603__auto____$10 = e65603;
if((e__63603__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$10;
}
} else {
throw e65603;

}
}} else {
throw e__63603__auto____$9;
}
} else {
throw e65601;

}
}} else {
throw e__63603__auto____$8;
}
} else {
throw e65600;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65576){if((e65576 instanceof Error)){
var e__63603__auto____$8 = e65576;
if((e__63603__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_65484_2__65536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(2));
if((ocr_65484_2__65536 === false)){
try{var ocr_65484_0__65534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(0));
if((ocr_65484_0__65534 === true)){
try{var ocr_65484_1__65535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(1));
if((ocr_65484_1__65535 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65596){if((e65596 instanceof Error)){
var e__63603__auto____$9 = e65596;
if((e__63603__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$9;
}
} else {
throw e65596;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65594){if((e65594 instanceof Error)){
var e__63603__auto____$9 = e65594;
if((e__63603__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$9;
}
} else {
throw e65594;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65577){if((e65577 instanceof Error)){
var e__63603__auto____$9 = e65577;
if((e__63603__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65484_2__65536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(2));
if((ocr_65484_2__65536 === true)){
try{var ocr_65484_0__65534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(0));
if((ocr_65484_0__65534 === false)){
try{var ocr_65484_1__65535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(1));
if((ocr_65484_1__65535 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65592){if((e65592 instanceof Error)){
var e__63603__auto____$10 = e65592;
if((e__63603__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$10;
}
} else {
throw e65592;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65591){if((e65591 instanceof Error)){
var e__63603__auto____$10 = e65591;
if((e__63603__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$10;
}
} else {
throw e65591;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65578){if((e65578 instanceof Error)){
var e__63603__auto____$10 = e65578;
if((e__63603__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_65484_2__65536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(2));
if((ocr_65484_2__65536 === false)){
try{var ocr_65484_0__65534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(0));
if((ocr_65484_0__65534 === true)){
try{var ocr_65484_1__65535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(1));
if((ocr_65484_1__65535 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65584){if((e65584 instanceof Error)){
var e__63603__auto____$11 = e65584;
if((e__63603__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$11;
}
} else {
throw e65584;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65581){if((e65581 instanceof Error)){
var e__63603__auto____$11 = e65581;
if((e__63603__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_65484_0__65534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(0));
if((ocr_65484_0__65534 === false)){
try{var ocr_65484_1__65535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65484,(1));
if((ocr_65484_1__65535 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65583){if((e65583 instanceof Error)){
var e__63603__auto____$12 = e65583;
if((e__63603__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$12;
}
} else {
throw e65583;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65582){if((e65582 instanceof Error)){
var e__63603__auto____$12 = e65582;
if((e__63603__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$12;
}
} else {
throw e65582;

}
}} else {
throw e__63603__auto____$11;
}
} else {
throw e65581;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65580){if((e65580 instanceof Error)){
var e__63603__auto____$11 = e65580;
if((e__63603__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$11;
}
} else {
throw e65580;

}
}} else {
throw e__63603__auto____$10;
}
} else {
throw e65578;

}
}} else {
throw e__63603__auto____$9;
}
} else {
throw e65577;

}
}} else {
throw e__63603__auto____$8;
}
} else {
throw e65576;

}
}} else {
throw e__63603__auto____$7;
}
} else {
throw e65569;

}
}} else {
throw e__63603__auto____$6;
}
} else {
throw e65567;

}
}} else {
throw e__63603__auto____$5;
}
} else {
throw e65566;

}
}} else {
throw e__63603__auto____$4;
}
} else {
throw e65565;

}
}} else {
throw e__63603__auto____$3;
}
} else {
throw e65564;

}
}} else {
throw e__63603__auto____$2;
}
} else {
throw e65563;

}
}} else {
throw e__63603__auto____$1;
}
} else {
throw e65562;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65561){if((e65561 instanceof Error)){
var e__63603__auto____$1 = e65561;
if((e__63603__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63603__auto____$1;
}
} else {
throw e65561;

}
}} else {
throw e__63603__auto__;
}
} else {
throw e65560;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65556){if((e65556 instanceof Error)){
var e__63603__auto__ = e65556;
if((e__63603__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__63603__auto__;
}
} else {
throw e65556;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65690){
var vec__65691 = p__65690;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65691,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65691,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__65683_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__65683_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65695){
var vec__65696 = p__65695;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65696,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65696,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__65694_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__65694_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__65701 = cljs.core.rest(ins);
var G__65702 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__65701,G__65702) : posh.lib.q_analyze.just_qvars.call(null,G__65701,G__65702));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65703_SHARP_){
return cljs.core.zipmap(qvars,p1__65703_SHARP_);
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
var vec__65721 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65721,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65721,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65721,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65721,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__66406 = var$;
var G__66407 = dbvarmap;
var G__66408 = cljs.core.rest(dbeavs);
var$ = G__66406;
dbvarmap = G__66407;
dbeavs = G__66408;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__65724 = cljs.core.rest(vars);
var G__65725 = dbvarmap;
var G__65726 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__65724,G__65725,G__65726) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__65724,G__65725,G__65726));
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
var G__66409 = (n + (1));
var G__66410 = cljs.core.rest(xs__$1);
n = G__66409;
xs__$1 = G__66410;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65731_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__65731_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__65731_SHARP_) : type.call(null,p1__65731_SHARP_));
} else {
return p1__65731_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__65737 = cljs.core.rest(ins);
var G__65738 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__65737,G__65738) : posh.lib.q_analyze.make_dbarg_map.call(null,G__65737,G__65738));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65742){
var vec__65743 = p__65742;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65743,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65743,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__65755_SHARP_,p2__65754_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__65754_SHARP_)){
return p1__65755_SHARP_;
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
var pred__65771 = cljs.core._EQ_;
var expr__65772 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__65771.cljs$core$IFn$_invoke$arity$2 ? pred__65771.cljs$core$IFn$_invoke$arity$2((1),expr__65772) : pred__65771.call(null,(1),expr__65772)))){
return true;
} else {
if(cljs.core.truth_((pred__65771.cljs$core$IFn$_invoke$arity$2 ? pred__65771.cljs$core$IFn$_invoke$arity$2((3),expr__65772) : pred__65771.call(null,(3),expr__65772)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__66414 = cljs.core.first(remaining);
var G__66415 = cljs.core.rest(remaining);
clause = G__66414;
remaining = G__66415;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__66416 = cljs.core.first(remaining);
var G__66417 = cljs.core.rest(remaining);
clause = G__66416;
remaining = G__66417;
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
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__65778(s__65779){
return (new cljs.core.LazySeq(null,(function (){
var s__65779__$1 = s__65779;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65779__$1);
if(temp__5735__auto__){
var s__65779__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65779__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65779__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65781 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65780 = (0);
while(true){
if((i__65780 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65780);
cljs.core.chunk_append(b__65781,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__66422 = (i__65780 + (1));
i__65780 = G__66422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65781),posh$lib$q_analyze$resolve_any_idents_$_iter__65778(cljs.core.chunk_rest(s__65779__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65781),null);
}
} else {
var var_value = cljs.core.first(s__65779__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__65778(cljs.core.rest(s__65779__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65790){
var vec__65791 = p__65790;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65791,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65791,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65794){
var vec__65795 = p__65794;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65795,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65795,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65799){
var vec__65800 = p__65799;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65800,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65800,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65806){
var vec__65807 = p__65806;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65807,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65807,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__65811 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__65812 = cljs.core.vec(r);
var fexpr__65810 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__65810.cljs$core$IFn$_invoke$arity$2 ? fexpr__65810.cljs$core$IFn$_invoke$arity$2(G__65811,G__65812) : fexpr__65810.call(null,G__65811,G__65812));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65813){
var vec__65814 = p__65813;
var seq__65815 = cljs.core.seq(vec__65814);
var first__65816 = cljs.core.first(seq__65815);
var seq__65815__$1 = cljs.core.next(seq__65815);
var db = first__65816;
var eav = seq__65815__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65817){
var vec__65818 = p__65817;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65818,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__65787_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__65787_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__65787_SHARP_) : linked_qvars.call(null,p1__65787_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__65787_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__65788_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__65788_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__65788_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
