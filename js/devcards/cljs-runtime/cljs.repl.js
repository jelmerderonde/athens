goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50909){
var map__50910 = p__50909;
var map__50910__$1 = (((((!((map__50910 == null))))?(((((map__50910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50910):map__50910);
var m = map__50910__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50910__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50910__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__50912_51034 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50913_51035 = null;
var count__50914_51036 = (0);
var i__50915_51037 = (0);
while(true){
if((i__50915_51037 < count__50914_51036)){
var f_51042 = chunk__50913_51035.cljs$core$IIndexed$_nth$arity$2(null,i__50915_51037);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51042], 0));


var G__51047 = seq__50912_51034;
var G__51048 = chunk__50913_51035;
var G__51049 = count__50914_51036;
var G__51050 = (i__50915_51037 + (1));
seq__50912_51034 = G__51047;
chunk__50913_51035 = G__51048;
count__50914_51036 = G__51049;
i__50915_51037 = G__51050;
continue;
} else {
var temp__5735__auto___51051 = cljs.core.seq(seq__50912_51034);
if(temp__5735__auto___51051){
var seq__50912_51061__$1 = temp__5735__auto___51051;
if(cljs.core.chunked_seq_QMARK_(seq__50912_51061__$1)){
var c__4609__auto___51062 = cljs.core.chunk_first(seq__50912_51061__$1);
var G__51063 = cljs.core.chunk_rest(seq__50912_51061__$1);
var G__51064 = c__4609__auto___51062;
var G__51065 = cljs.core.count(c__4609__auto___51062);
var G__51066 = (0);
seq__50912_51034 = G__51063;
chunk__50913_51035 = G__51064;
count__50914_51036 = G__51065;
i__50915_51037 = G__51066;
continue;
} else {
var f_51067 = cljs.core.first(seq__50912_51061__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51067], 0));


var G__51068 = cljs.core.next(seq__50912_51061__$1);
var G__51069 = null;
var G__51070 = (0);
var G__51071 = (0);
seq__50912_51034 = G__51068;
chunk__50913_51035 = G__51069;
count__50914_51036 = G__51070;
i__50915_51037 = G__51071;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51072 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51072], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51072)))?cljs.core.second(arglists_51072):arglists_51072)], 0));
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
var seq__50916_51080 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50917_51081 = null;
var count__50918_51082 = (0);
var i__50919_51083 = (0);
while(true){
if((i__50919_51083 < count__50918_51082)){
var vec__50931_51084 = chunk__50917_51081.cljs$core$IIndexed$_nth$arity$2(null,i__50919_51083);
var name_51085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50931_51084,(0),null);
var map__50934_51086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50931_51084,(1),null);
var map__50934_51087__$1 = (((((!((map__50934_51086 == null))))?(((((map__50934_51086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50934_51086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50934_51086):map__50934_51086);
var doc_51088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50934_51087__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50934_51087__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51085], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51089], 0));

if(cljs.core.truth_(doc_51088)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51088], 0));
} else {
}


var G__51101 = seq__50916_51080;
var G__51102 = chunk__50917_51081;
var G__51103 = count__50918_51082;
var G__51104 = (i__50919_51083 + (1));
seq__50916_51080 = G__51101;
chunk__50917_51081 = G__51102;
count__50918_51082 = G__51103;
i__50919_51083 = G__51104;
continue;
} else {
var temp__5735__auto___51108 = cljs.core.seq(seq__50916_51080);
if(temp__5735__auto___51108){
var seq__50916_51109__$1 = temp__5735__auto___51108;
if(cljs.core.chunked_seq_QMARK_(seq__50916_51109__$1)){
var c__4609__auto___51110 = cljs.core.chunk_first(seq__50916_51109__$1);
var G__51111 = cljs.core.chunk_rest(seq__50916_51109__$1);
var G__51112 = c__4609__auto___51110;
var G__51113 = cljs.core.count(c__4609__auto___51110);
var G__51114 = (0);
seq__50916_51080 = G__51111;
chunk__50917_51081 = G__51112;
count__50918_51082 = G__51113;
i__50919_51083 = G__51114;
continue;
} else {
var vec__50936_51115 = cljs.core.first(seq__50916_51109__$1);
var name_51116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50936_51115,(0),null);
var map__50939_51117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50936_51115,(1),null);
var map__50939_51118__$1 = (((((!((map__50939_51117 == null))))?(((((map__50939_51117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50939_51117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50939_51117):map__50939_51117);
var doc_51119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50939_51118__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50939_51118__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51116], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51120], 0));

if(cljs.core.truth_(doc_51119)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51119], 0));
} else {
}


var G__51132 = cljs.core.next(seq__50916_51109__$1);
var G__51133 = null;
var G__51134 = (0);
var G__51135 = (0);
seq__50916_51080 = G__51132;
chunk__50917_51081 = G__51133;
count__50918_51082 = G__51134;
i__50919_51083 = G__51135;
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

var seq__50941 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50942 = null;
var count__50943 = (0);
var i__50944 = (0);
while(true){
if((i__50944 < count__50943)){
var role = chunk__50942.cljs$core$IIndexed$_nth$arity$2(null,i__50944);
var temp__5735__auto___51149__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51149__$1)){
var spec_51150 = temp__5735__auto___51149__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51150)], 0));
} else {
}


var G__51151 = seq__50941;
var G__51152 = chunk__50942;
var G__51153 = count__50943;
var G__51154 = (i__50944 + (1));
seq__50941 = G__51151;
chunk__50942 = G__51152;
count__50943 = G__51153;
i__50944 = G__51154;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__50941);
if(temp__5735__auto____$1){
var seq__50941__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50941__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50941__$1);
var G__51155 = cljs.core.chunk_rest(seq__50941__$1);
var G__51156 = c__4609__auto__;
var G__51157 = cljs.core.count(c__4609__auto__);
var G__51158 = (0);
seq__50941 = G__51155;
chunk__50942 = G__51156;
count__50943 = G__51157;
i__50944 = G__51158;
continue;
} else {
var role = cljs.core.first(seq__50941__$1);
var temp__5735__auto___51159__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51159__$2)){
var spec_51164 = temp__5735__auto___51159__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51164)], 0));
} else {
}


var G__51168 = cljs.core.next(seq__50941__$1);
var G__51169 = null;
var G__51170 = (0);
var G__51171 = (0);
seq__50941 = G__51168;
chunk__50942 = G__51169;
count__50943 = G__51170;
i__50944 = G__51171;
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
var G__51179 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51180 = cljs.core.ex_cause(t);
via = G__51179;
t = G__51180;
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
var map__50953 = datafied_throwable;
var map__50953__$1 = (((((!((map__50953 == null))))?(((((map__50953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50953):map__50953);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50953__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50953__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50953__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50954 = cljs.core.last(via);
var map__50954__$1 = (((((!((map__50954 == null))))?(((((map__50954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50954):map__50954);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50954__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50954__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50954__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50955 = data;
var map__50955__$1 = (((((!((map__50955 == null))))?(((((map__50955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50955):map__50955);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50955__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50955__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50955__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50956 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50956__$1 = (((((!((map__50956 == null))))?(((((map__50956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50956):map__50956);
var top_data = map__50956__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50956__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50961 = phase;
var G__50961__$1 = (((G__50961 instanceof cljs.core.Keyword))?G__50961.fqn:null);
switch (G__50961__$1) {
case "read-source":
var map__50963 = data;
var map__50963__$1 = (((((!((map__50963 == null))))?(((((map__50963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50963):map__50963);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50963__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50963__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50965 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50965__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50965,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50965);
var G__50965__$2 = (cljs.core.truth_((function (){var fexpr__50966 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50966.cljs$core$IFn$_invoke$arity$1 ? fexpr__50966.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50966.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50965__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50965__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50965__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50965__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50969 = top_data;
var G__50969__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50969,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50969);
var G__50969__$2 = (cljs.core.truth_((function (){var fexpr__50970 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50970.cljs$core$IFn$_invoke$arity$1 ? fexpr__50970.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50970.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50969__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50969__$1);
var G__50969__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50969__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50969__$2);
var G__50969__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50969__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50969__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50969__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50969__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50971 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50971,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50971,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50971,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50971,(3),null);
var G__50974 = top_data;
var G__50974__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50974,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50974);
var G__50974__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50974__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50974__$1);
var G__50974__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50974__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50974__$2);
var G__50974__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50974__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50974__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50974__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50974__$4;
}

break;
case "execution":
var vec__50975 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50975,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50975,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50975,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50975,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50952_SHARP_){
var or__4185__auto__ = (p1__50952_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__50979 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50979.cljs$core$IFn$_invoke$arity$1 ? fexpr__50979.cljs$core$IFn$_invoke$arity$1(p1__50952_SHARP_) : fexpr__50979.call(null,p1__50952_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__50980 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50980__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50980,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50980);
var G__50980__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50980__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50980__$1);
var G__50980__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50980__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50980__$2);
var G__50980__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50980__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50980__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50980__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50980__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50961__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50984){
var map__50985 = p__50984;
var map__50985__$1 = (((((!((map__50985 == null))))?(((((map__50985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50985):map__50985);
var triage_data = map__50985__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50985__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50985__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50985__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50985__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50985__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50985__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50985__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50985__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__50990 = phase;
var G__50990__$1 = (((G__50990 instanceof cljs.core.Keyword))?G__50990.fqn:null);
switch (G__50990__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50991 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50992 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50993 = loc;
var G__50994 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50995_51204 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50996_51205 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50997_51206 = true;
var _STAR_print_fn_STAR__temp_val__50998_51207 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50997_51206);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50998_51207);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50981_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50981_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50996_51205);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50995_51204);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50991,G__50992,G__50993,G__50994) : format.call(null,G__50991,G__50992,G__50993,G__50994));

break;
case "macroexpansion":
var G__51006 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51007 = cause_type;
var G__51008 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51009 = loc;
var G__51010 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51006,G__51007,G__51008,G__51009,G__51010) : format.call(null,G__51006,G__51007,G__51008,G__51009,G__51010));

break;
case "compile-syntax-check":
var G__51011 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51012 = cause_type;
var G__51013 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51014 = loc;
var G__51015 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51011,G__51012,G__51013,G__51014,G__51015) : format.call(null,G__51011,G__51012,G__51013,G__51014,G__51015));

break;
case "compilation":
var G__51016 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51017 = cause_type;
var G__51018 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51019 = loc;
var G__51020 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51016,G__51017,G__51018,G__51019,G__51020) : format.call(null,G__51016,G__51017,G__51018,G__51019,G__51020));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51021 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51022 = symbol;
var G__51023 = loc;
var G__51024 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51025_51208 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51026_51209 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51027_51210 = true;
var _STAR_print_fn_STAR__temp_val__51028_51211 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51027_51210);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51028_51211);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50982_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50982_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51026_51209);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51025_51208);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51021,G__51022,G__51023,G__51024) : format.call(null,G__51021,G__51022,G__51023,G__51024));
} else {
var G__51029 = "Execution error%s at %s(%s).\n%s\n";
var G__51030 = cause_type;
var G__51031 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51032 = loc;
var G__51033 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51029,G__51030,G__51031,G__51032,G__51033) : format.call(null,G__51029,G__51030,G__51031,G__51032,G__51033));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50990__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
