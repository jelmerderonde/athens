goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__57970){
var map__57971 = p__57970;
var map__57971__$1 = (((((!((map__57971 == null))))?(((((map__57971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57971):map__57971);
var m = map__57971__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57971__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57971__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__57973_58189 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__57974_58190 = null;
var count__57975_58191 = (0);
var i__57976_58192 = (0);
while(true){
if((i__57976_58192 < count__57975_58191)){
var f_58193 = chunk__57974_58190.cljs$core$IIndexed$_nth$arity$2(null,i__57976_58192);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_58193], 0));


var G__58194 = seq__57973_58189;
var G__58195 = chunk__57974_58190;
var G__58196 = count__57975_58191;
var G__58197 = (i__57976_58192 + (1));
seq__57973_58189 = G__58194;
chunk__57974_58190 = G__58195;
count__57975_58191 = G__58196;
i__57976_58192 = G__58197;
continue;
} else {
var temp__5735__auto___58198 = cljs.core.seq(seq__57973_58189);
if(temp__5735__auto___58198){
var seq__57973_58199__$1 = temp__5735__auto___58198;
if(cljs.core.chunked_seq_QMARK_(seq__57973_58199__$1)){
var c__4609__auto___58200 = cljs.core.chunk_first(seq__57973_58199__$1);
var G__58201 = cljs.core.chunk_rest(seq__57973_58199__$1);
var G__58202 = c__4609__auto___58200;
var G__58203 = cljs.core.count(c__4609__auto___58200);
var G__58204 = (0);
seq__57973_58189 = G__58201;
chunk__57974_58190 = G__58202;
count__57975_58191 = G__58203;
i__57976_58192 = G__58204;
continue;
} else {
var f_58205 = cljs.core.first(seq__57973_58199__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_58205], 0));


var G__58208 = cljs.core.next(seq__57973_58199__$1);
var G__58209 = null;
var G__58210 = (0);
var G__58211 = (0);
seq__57973_58189 = G__58208;
chunk__57974_58190 = G__58209;
count__57975_58191 = G__58210;
i__57976_58192 = G__58211;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_58213 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_58213], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_58213)))?cljs.core.second(arglists_58213):arglists_58213)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__57984_58221 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__57985_58222 = null;
var count__57986_58223 = (0);
var i__57987_58224 = (0);
while(true){
if((i__57987_58224 < count__57986_58223)){
var vec__58005_58225 = chunk__57985_58222.cljs$core$IIndexed$_nth$arity$2(null,i__57987_58224);
var name_58226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58005_58225,(0),null);
var map__58008_58227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58005_58225,(1),null);
var map__58008_58228__$1 = (((((!((map__58008_58227 == null))))?(((((map__58008_58227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58008_58227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58008_58227):map__58008_58227);
var doc_58229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58008_58228__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58008_58228__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_58226], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_58230], 0));

if(cljs.core.truth_(doc_58229)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_58229], 0));
} else {
}


var G__58231 = seq__57984_58221;
var G__58232 = chunk__57985_58222;
var G__58233 = count__57986_58223;
var G__58234 = (i__57987_58224 + (1));
seq__57984_58221 = G__58231;
chunk__57985_58222 = G__58232;
count__57986_58223 = G__58233;
i__57987_58224 = G__58234;
continue;
} else {
var temp__5735__auto___58235 = cljs.core.seq(seq__57984_58221);
if(temp__5735__auto___58235){
var seq__57984_58240__$1 = temp__5735__auto___58235;
if(cljs.core.chunked_seq_QMARK_(seq__57984_58240__$1)){
var c__4609__auto___58241 = cljs.core.chunk_first(seq__57984_58240__$1);
var G__58242 = cljs.core.chunk_rest(seq__57984_58240__$1);
var G__58243 = c__4609__auto___58241;
var G__58244 = cljs.core.count(c__4609__auto___58241);
var G__58245 = (0);
seq__57984_58221 = G__58242;
chunk__57985_58222 = G__58243;
count__57986_58223 = G__58244;
i__57987_58224 = G__58245;
continue;
} else {
var vec__58019_58246 = cljs.core.first(seq__57984_58240__$1);
var name_58247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58019_58246,(0),null);
var map__58022_58248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58019_58246,(1),null);
var map__58022_58249__$1 = (((((!((map__58022_58248 == null))))?(((((map__58022_58248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58022_58248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58022_58248):map__58022_58248);
var doc_58250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58022_58249__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58022_58249__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_58247], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_58251], 0));

if(cljs.core.truth_(doc_58250)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_58250], 0));
} else {
}


var G__58253 = cljs.core.next(seq__57984_58240__$1);
var G__58254 = null;
var G__58255 = (0);
var G__58256 = (0);
seq__57984_58221 = G__58253;
chunk__57985_58222 = G__58254;
count__57986_58223 = G__58255;
i__57987_58224 = G__58256;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__58027 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__58028 = null;
var count__58029 = (0);
var i__58030 = (0);
while(true){
if((i__58030 < count__58029)){
var role = chunk__58028.cljs$core$IIndexed$_nth$arity$2(null,i__58030);
var temp__5735__auto___58258__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___58258__$1)){
var spec_58259 = temp__5735__auto___58258__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_58259)], 0));
} else {
}


var G__58260 = seq__58027;
var G__58261 = chunk__58028;
var G__58262 = count__58029;
var G__58263 = (i__58030 + (1));
seq__58027 = G__58260;
chunk__58028 = G__58261;
count__58029 = G__58262;
i__58030 = G__58263;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__58027);
if(temp__5735__auto____$1){
var seq__58027__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__58027__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58027__$1);
var G__58268 = cljs.core.chunk_rest(seq__58027__$1);
var G__58269 = c__4609__auto__;
var G__58270 = cljs.core.count(c__4609__auto__);
var G__58271 = (0);
seq__58027 = G__58268;
chunk__58028 = G__58269;
count__58029 = G__58270;
i__58030 = G__58271;
continue;
} else {
var role = cljs.core.first(seq__58027__$1);
var temp__5735__auto___58272__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___58272__$2)){
var spec_58273 = temp__5735__auto___58272__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_58273)], 0));
} else {
}


var G__58274 = cljs.core.next(seq__58027__$1);
var G__58275 = null;
var G__58276 = (0);
var G__58277 = (0);
seq__58027 = G__58274;
chunk__58028 = G__58275;
count__58029 = G__58276;
i__58030 = G__58277;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__58278 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__58279 = cljs.core.ex_cause(t);
via = G__58278;
t = G__58279;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__58053 = datafied_throwable;
var map__58053__$1 = (((((!((map__58053 == null))))?(((((map__58053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58053):map__58053);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58053__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58053__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58053__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__58054 = cljs.core.last(via);
var map__58054__$1 = (((((!((map__58054 == null))))?(((((map__58054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58054):map__58054);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58054__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58054__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58054__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__58055 = data;
var map__58055__$1 = (((((!((map__58055 == null))))?(((((map__58055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58055):map__58055);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58055__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58055__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58055__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__58056 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__58056__$1 = (((((!((map__58056 == null))))?(((((map__58056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58056):map__58056);
var top_data = map__58056__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58056__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__58067 = phase;
var G__58067__$1 = (((G__58067 instanceof cljs.core.Keyword))?G__58067.fqn:null);
switch (G__58067__$1) {
case "read-source":
var map__58069 = data;
var map__58069__$1 = (((((!((map__58069 == null))))?(((((map__58069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58069):map__58069);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58069__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58069__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__58072 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__58072__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58072,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__58072);
var G__58072__$2 = (cljs.core.truth_((function (){var fexpr__58073 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__58073.cljs$core$IFn$_invoke$arity$1 ? fexpr__58073.cljs$core$IFn$_invoke$arity$1(source) : fexpr__58073.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__58072__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__58072__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58072__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__58072__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__58075 = top_data;
var G__58075__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58075,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__58075);
var G__58075__$2 = (cljs.core.truth_((function (){var fexpr__58076 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__58076.cljs$core$IFn$_invoke$arity$1 ? fexpr__58076.cljs$core$IFn$_invoke$arity$1(source) : fexpr__58076.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__58075__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__58075__$1);
var G__58075__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58075__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__58075__$2);
var G__58075__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58075__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__58075__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58075__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__58075__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__58078 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58078,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58078,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58078,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58078,(3),null);
var G__58082 = top_data;
var G__58082__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58082,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__58082);
var G__58082__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58082__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__58082__$1);
var G__58082__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58082__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__58082__$2);
var G__58082__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58082__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__58082__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58082__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__58082__$4;
}

break;
case "execution":
var vec__58090 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58090,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58090,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58090,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58090,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58051_SHARP_){
var or__4185__auto__ = (p1__58051_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__58096 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__58096.cljs$core$IFn$_invoke$arity$1 ? fexpr__58096.cljs$core$IFn$_invoke$arity$1(p1__58051_SHARP_) : fexpr__58096.call(null,p1__58051_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__58098 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__58098__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58098,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__58098);
var G__58098__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58098__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__58098__$1);
var G__58098__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58098__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__58098__$2);
var G__58098__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58098__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__58098__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58098__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__58098__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58067__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__58118){
var map__58120 = p__58118;
var map__58120__$1 = (((((!((map__58120 == null))))?(((((map__58120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58120):map__58120);
var triage_data = map__58120__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58120__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__58137 = phase;
var G__58137__$1 = (((G__58137 instanceof cljs.core.Keyword))?G__58137.fqn:null);
switch (G__58137__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__58138 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__58139 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58140 = loc;
var G__58141 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__58142_58340 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__58143_58341 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__58144_58342 = true;
var _STAR_print_fn_STAR__temp_val__58145_58343 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__58144_58342);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__58145_58343);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58112_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__58112_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__58143_58341);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__58142_58340);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__58138,G__58139,G__58140,G__58141) : format.call(null,G__58138,G__58139,G__58140,G__58141));

break;
case "macroexpansion":
var G__58149 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__58150 = cause_type;
var G__58151 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58152 = loc;
var G__58153 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58149,G__58150,G__58151,G__58152,G__58153) : format.call(null,G__58149,G__58150,G__58151,G__58152,G__58153));

break;
case "compile-syntax-check":
var G__58154 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__58155 = cause_type;
var G__58156 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58157 = loc;
var G__58158 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58154,G__58155,G__58156,G__58157,G__58158) : format.call(null,G__58154,G__58155,G__58156,G__58157,G__58158));

break;
case "compilation":
var G__58161 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__58162 = cause_type;
var G__58163 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58164 = loc;
var G__58165 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58161,G__58162,G__58163,G__58164,G__58165) : format.call(null,G__58161,G__58162,G__58163,G__58164,G__58165));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__58166 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__58167 = symbol;
var G__58168 = loc;
var G__58169 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__58171_58357 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__58172_58358 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__58173_58359 = true;
var _STAR_print_fn_STAR__temp_val__58174_58360 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__58173_58359);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__58174_58360);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58113_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__58113_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__58172_58358);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__58171_58357);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__58166,G__58167,G__58168,G__58169) : format.call(null,G__58166,G__58167,G__58168,G__58169));
} else {
var G__58178 = "Execution error%s at %s(%s).\n%s\n";
var G__58179 = cause_type;
var G__58180 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58181 = loc;
var G__58182 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58178,G__58179,G__58180,G__58181,G__58182) : format.call(null,G__58178,G__58179,G__58180,G__58181,G__58182));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58137__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
