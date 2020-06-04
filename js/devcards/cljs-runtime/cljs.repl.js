goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51928){
var map__51929 = p__51928;
var map__51929__$1 = (((((!((map__51929 == null))))?(((((map__51929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51929):map__51929);
var m = map__51929__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51929__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51929__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__51931_52042 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51932_52043 = null;
var count__51933_52044 = (0);
var i__51934_52045 = (0);
while(true){
if((i__51934_52045 < count__51933_52044)){
var f_52046 = chunk__51932_52043.cljs$core$IIndexed$_nth$arity$2(null,i__51934_52045);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52046], 0));


var G__52047 = seq__51931_52042;
var G__52048 = chunk__51932_52043;
var G__52049 = count__51933_52044;
var G__52050 = (i__51934_52045 + (1));
seq__51931_52042 = G__52047;
chunk__51932_52043 = G__52048;
count__51933_52044 = G__52049;
i__51934_52045 = G__52050;
continue;
} else {
var temp__5735__auto___52051 = cljs.core.seq(seq__51931_52042);
if(temp__5735__auto___52051){
var seq__51931_52052__$1 = temp__5735__auto___52051;
if(cljs.core.chunked_seq_QMARK_(seq__51931_52052__$1)){
var c__4609__auto___52053 = cljs.core.chunk_first(seq__51931_52052__$1);
var G__52054 = cljs.core.chunk_rest(seq__51931_52052__$1);
var G__52055 = c__4609__auto___52053;
var G__52056 = cljs.core.count(c__4609__auto___52053);
var G__52057 = (0);
seq__51931_52042 = G__52054;
chunk__51932_52043 = G__52055;
count__51933_52044 = G__52056;
i__51934_52045 = G__52057;
continue;
} else {
var f_52058 = cljs.core.first(seq__51931_52052__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52058], 0));


var G__52059 = cljs.core.next(seq__51931_52052__$1);
var G__52060 = null;
var G__52061 = (0);
var G__52062 = (0);
seq__51931_52042 = G__52059;
chunk__51932_52043 = G__52060;
count__51933_52044 = G__52061;
i__51934_52045 = G__52062;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52063 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_52063], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_52063)))?cljs.core.second(arglists_52063):arglists_52063)], 0));
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
var seq__51936_52064 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51937_52065 = null;
var count__51938_52066 = (0);
var i__51939_52067 = (0);
while(true){
if((i__51939_52067 < count__51938_52066)){
var vec__51950_52068 = chunk__51937_52065.cljs$core$IIndexed$_nth$arity$2(null,i__51939_52067);
var name_52069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51950_52068,(0),null);
var map__51953_52070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51950_52068,(1),null);
var map__51953_52071__$1 = (((((!((map__51953_52070 == null))))?(((((map__51953_52070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51953_52070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51953_52070):map__51953_52070);
var doc_52072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51953_52071__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51953_52071__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52069], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52073], 0));

if(cljs.core.truth_(doc_52072)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52072], 0));
} else {
}


var G__52074 = seq__51936_52064;
var G__52075 = chunk__51937_52065;
var G__52076 = count__51938_52066;
var G__52077 = (i__51939_52067 + (1));
seq__51936_52064 = G__52074;
chunk__51937_52065 = G__52075;
count__51938_52066 = G__52076;
i__51939_52067 = G__52077;
continue;
} else {
var temp__5735__auto___52078 = cljs.core.seq(seq__51936_52064);
if(temp__5735__auto___52078){
var seq__51936_52079__$1 = temp__5735__auto___52078;
if(cljs.core.chunked_seq_QMARK_(seq__51936_52079__$1)){
var c__4609__auto___52080 = cljs.core.chunk_first(seq__51936_52079__$1);
var G__52081 = cljs.core.chunk_rest(seq__51936_52079__$1);
var G__52082 = c__4609__auto___52080;
var G__52083 = cljs.core.count(c__4609__auto___52080);
var G__52084 = (0);
seq__51936_52064 = G__52081;
chunk__51937_52065 = G__52082;
count__51938_52066 = G__52083;
i__51939_52067 = G__52084;
continue;
} else {
var vec__51955_52085 = cljs.core.first(seq__51936_52079__$1);
var name_52086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51955_52085,(0),null);
var map__51958_52087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51955_52085,(1),null);
var map__51958_52088__$1 = (((((!((map__51958_52087 == null))))?(((((map__51958_52087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51958_52087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51958_52087):map__51958_52087);
var doc_52089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51958_52088__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51958_52088__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52086], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52090], 0));

if(cljs.core.truth_(doc_52089)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52089], 0));
} else {
}


var G__52091 = cljs.core.next(seq__51936_52079__$1);
var G__52092 = null;
var G__52093 = (0);
var G__52094 = (0);
seq__51936_52064 = G__52091;
chunk__51937_52065 = G__52092;
count__51938_52066 = G__52093;
i__51939_52067 = G__52094;
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

var seq__51960 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51961 = null;
var count__51962 = (0);
var i__51963 = (0);
while(true){
if((i__51963 < count__51962)){
var role = chunk__51961.cljs$core$IIndexed$_nth$arity$2(null,i__51963);
var temp__5735__auto___52095__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___52095__$1)){
var spec_52096 = temp__5735__auto___52095__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52096)], 0));
} else {
}


var G__52097 = seq__51960;
var G__52098 = chunk__51961;
var G__52099 = count__51962;
var G__52100 = (i__51963 + (1));
seq__51960 = G__52097;
chunk__51961 = G__52098;
count__51962 = G__52099;
i__51963 = G__52100;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__51960);
if(temp__5735__auto____$1){
var seq__51960__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51960__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51960__$1);
var G__52101 = cljs.core.chunk_rest(seq__51960__$1);
var G__52102 = c__4609__auto__;
var G__52103 = cljs.core.count(c__4609__auto__);
var G__52104 = (0);
seq__51960 = G__52101;
chunk__51961 = G__52102;
count__51962 = G__52103;
i__51963 = G__52104;
continue;
} else {
var role = cljs.core.first(seq__51960__$1);
var temp__5735__auto___52105__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___52105__$2)){
var spec_52106 = temp__5735__auto___52105__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52106)], 0));
} else {
}


var G__52107 = cljs.core.next(seq__51960__$1);
var G__52108 = null;
var G__52109 = (0);
var G__52110 = (0);
seq__51960 = G__52107;
chunk__51961 = G__52108;
count__51962 = G__52109;
i__51963 = G__52110;
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
var G__52111 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__52112 = cljs.core.ex_cause(t);
via = G__52111;
t = G__52112;
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
var map__51968 = datafied_throwable;
var map__51968__$1 = (((((!((map__51968 == null))))?(((((map__51968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51968):map__51968);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51968__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51968__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51968__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51969 = cljs.core.last(via);
var map__51969__$1 = (((((!((map__51969 == null))))?(((((map__51969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51969):map__51969);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51969__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51969__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51969__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51970 = data;
var map__51970__$1 = (((((!((map__51970 == null))))?(((((map__51970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51970):map__51970);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51970__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51970__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51970__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51971 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51971__$1 = (((((!((map__51971 == null))))?(((((map__51971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51971):map__51971);
var top_data = map__51971__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51971__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51976 = phase;
var G__51976__$1 = (((G__51976 instanceof cljs.core.Keyword))?G__51976.fqn:null);
switch (G__51976__$1) {
case "read-source":
var map__51977 = data;
var map__51977__$1 = (((((!((map__51977 == null))))?(((((map__51977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51977):map__51977);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51977__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51977__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51979 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51979__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51979,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51979);
var G__51979__$2 = (cljs.core.truth_((function (){var fexpr__51980 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51980.cljs$core$IFn$_invoke$arity$1 ? fexpr__51980.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51980.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51979__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51979__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51979__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51979__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51981 = top_data;
var G__51981__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51981,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51981);
var G__51981__$2 = (cljs.core.truth_((function (){var fexpr__51982 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51982.cljs$core$IFn$_invoke$arity$1 ? fexpr__51982.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51982.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51981__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51981__$1);
var G__51981__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51981__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51981__$2);
var G__51981__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51981__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51981__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51981__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51981__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51983 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51983,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51983,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51983,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51983,(3),null);
var G__51986 = top_data;
var G__51986__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51986,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51986);
var G__51986__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51986__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51986__$1);
var G__51986__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51986__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51986__$2);
var G__51986__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51986__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51986__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51986__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51986__$4;
}

break;
case "execution":
var vec__51987 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51987,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51987,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51987,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51987,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51966_SHARP_){
var or__4185__auto__ = (p1__51966_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__51991 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51991.cljs$core$IFn$_invoke$arity$1 ? fexpr__51991.cljs$core$IFn$_invoke$arity$1(p1__51966_SHARP_) : fexpr__51991.call(null,p1__51966_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__51993 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51993__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51993,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51993);
var G__51993__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51993__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51993__$1);
var G__51993__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51993__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51993__$2);
var G__51993__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51993__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51993__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51993__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51993__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51976__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51998){
var map__51999 = p__51998;
var map__51999__$1 = (((((!((map__51999 == null))))?(((((map__51999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51999):map__51999);
var triage_data = map__51999__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51999__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51999__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51999__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51999__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51999__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51999__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51999__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51999__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__52003 = phase;
var G__52003__$1 = (((G__52003 instanceof cljs.core.Keyword))?G__52003.fqn:null);
switch (G__52003__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__52004 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__52005 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52006 = loc;
var G__52007 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52008_52116 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52009_52117 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52010_52118 = true;
var _STAR_print_fn_STAR__temp_val__52011_52119 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52010_52118);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52011_52119);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51995_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51995_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52009_52117);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52008_52116);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52004,G__52005,G__52006,G__52007) : format.call(null,G__52004,G__52005,G__52006,G__52007));

break;
case "macroexpansion":
var G__52013 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__52014 = cause_type;
var G__52015 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52016 = loc;
var G__52017 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52013,G__52014,G__52015,G__52016,G__52017) : format.call(null,G__52013,G__52014,G__52015,G__52016,G__52017));

break;
case "compile-syntax-check":
var G__52018 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__52019 = cause_type;
var G__52020 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52021 = loc;
var G__52022 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52018,G__52019,G__52020,G__52021,G__52022) : format.call(null,G__52018,G__52019,G__52020,G__52021,G__52022));

break;
case "compilation":
var G__52023 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__52024 = cause_type;
var G__52025 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52026 = loc;
var G__52027 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52023,G__52024,G__52025,G__52026,G__52027) : format.call(null,G__52023,G__52024,G__52025,G__52026,G__52027));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__52029 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__52030 = symbol;
var G__52031 = loc;
var G__52032 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52033_52125 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52034_52126 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52035_52127 = true;
var _STAR_print_fn_STAR__temp_val__52036_52128 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52035_52127);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52036_52128);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51997_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51997_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52034_52126);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52033_52125);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52029,G__52030,G__52031,G__52032) : format.call(null,G__52029,G__52030,G__52031,G__52032));
} else {
var G__52037 = "Execution error%s at %s(%s).\n%s\n";
var G__52038 = cause_type;
var G__52039 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52040 = loc;
var G__52041 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52037,G__52038,G__52039,G__52040,G__52041) : format.call(null,G__52037,G__52038,G__52039,G__52040,G__52041));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52003__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
