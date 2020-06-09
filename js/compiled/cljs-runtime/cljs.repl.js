goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59729){
var map__59730 = p__59729;
var map__59730__$1 = (((((!((map__59730 == null))))?(((((map__59730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59730):map__59730);
var m = map__59730__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59730__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59730__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__59733_59886 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59734_59887 = null;
var count__59735_59888 = (0);
var i__59736_59889 = (0);
while(true){
if((i__59736_59889 < count__59735_59888)){
var f_59890 = chunk__59734_59887.cljs$core$IIndexed$_nth$arity$2(null,i__59736_59889);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59890], 0));


var G__59891 = seq__59733_59886;
var G__59892 = chunk__59734_59887;
var G__59893 = count__59735_59888;
var G__59894 = (i__59736_59889 + (1));
seq__59733_59886 = G__59891;
chunk__59734_59887 = G__59892;
count__59735_59888 = G__59893;
i__59736_59889 = G__59894;
continue;
} else {
var temp__5735__auto___59895 = cljs.core.seq(seq__59733_59886);
if(temp__5735__auto___59895){
var seq__59733_59896__$1 = temp__5735__auto___59895;
if(cljs.core.chunked_seq_QMARK_(seq__59733_59896__$1)){
var c__4609__auto___59897 = cljs.core.chunk_first(seq__59733_59896__$1);
var G__59898 = cljs.core.chunk_rest(seq__59733_59896__$1);
var G__59899 = c__4609__auto___59897;
var G__59900 = cljs.core.count(c__4609__auto___59897);
var G__59901 = (0);
seq__59733_59886 = G__59898;
chunk__59734_59887 = G__59899;
count__59735_59888 = G__59900;
i__59736_59889 = G__59901;
continue;
} else {
var f_59902 = cljs.core.first(seq__59733_59896__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_59902], 0));


var G__59903 = cljs.core.next(seq__59733_59896__$1);
var G__59904 = null;
var G__59905 = (0);
var G__59906 = (0);
seq__59733_59886 = G__59903;
chunk__59734_59887 = G__59904;
count__59735_59888 = G__59905;
i__59736_59889 = G__59906;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_59907 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_59907], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_59907)))?cljs.core.second(arglists_59907):arglists_59907)], 0));
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
var seq__59738_59908 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59739_59909 = null;
var count__59740_59910 = (0);
var i__59741_59911 = (0);
while(true){
if((i__59741_59911 < count__59740_59910)){
var vec__59757_59912 = chunk__59739_59909.cljs$core$IIndexed$_nth$arity$2(null,i__59741_59911);
var name_59913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59757_59912,(0),null);
var map__59760_59914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59757_59912,(1),null);
var map__59760_59915__$1 = (((((!((map__59760_59914 == null))))?(((((map__59760_59914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59760_59914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59760_59914):map__59760_59914);
var doc_59916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59760_59915__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59760_59915__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_59913], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_59917], 0));

if(cljs.core.truth_(doc_59916)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_59916], 0));
} else {
}


var G__59918 = seq__59738_59908;
var G__59919 = chunk__59739_59909;
var G__59920 = count__59740_59910;
var G__59921 = (i__59741_59911 + (1));
seq__59738_59908 = G__59918;
chunk__59739_59909 = G__59919;
count__59740_59910 = G__59920;
i__59741_59911 = G__59921;
continue;
} else {
var temp__5735__auto___59922 = cljs.core.seq(seq__59738_59908);
if(temp__5735__auto___59922){
var seq__59738_59923__$1 = temp__5735__auto___59922;
if(cljs.core.chunked_seq_QMARK_(seq__59738_59923__$1)){
var c__4609__auto___59924 = cljs.core.chunk_first(seq__59738_59923__$1);
var G__59925 = cljs.core.chunk_rest(seq__59738_59923__$1);
var G__59926 = c__4609__auto___59924;
var G__59927 = cljs.core.count(c__4609__auto___59924);
var G__59928 = (0);
seq__59738_59908 = G__59925;
chunk__59739_59909 = G__59926;
count__59740_59910 = G__59927;
i__59741_59911 = G__59928;
continue;
} else {
var vec__59762_59929 = cljs.core.first(seq__59738_59923__$1);
var name_59930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59762_59929,(0),null);
var map__59765_59931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59762_59929,(1),null);
var map__59765_59932__$1 = (((((!((map__59765_59931 == null))))?(((((map__59765_59931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59765_59931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59765_59931):map__59765_59931);
var doc_59933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59765_59932__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59765_59932__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_59930], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_59934], 0));

if(cljs.core.truth_(doc_59933)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_59933], 0));
} else {
}


var G__59935 = cljs.core.next(seq__59738_59923__$1);
var G__59936 = null;
var G__59937 = (0);
var G__59938 = (0);
seq__59738_59908 = G__59935;
chunk__59739_59909 = G__59936;
count__59740_59910 = G__59937;
i__59741_59911 = G__59938;
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

var seq__59767 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__59768 = null;
var count__59769 = (0);
var i__59770 = (0);
while(true){
if((i__59770 < count__59769)){
var role = chunk__59768.cljs$core$IIndexed$_nth$arity$2(null,i__59770);
var temp__5735__auto___59939__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___59939__$1)){
var spec_59940 = temp__5735__auto___59939__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_59940)], 0));
} else {
}


var G__59941 = seq__59767;
var G__59942 = chunk__59768;
var G__59943 = count__59769;
var G__59944 = (i__59770 + (1));
seq__59767 = G__59941;
chunk__59768 = G__59942;
count__59769 = G__59943;
i__59770 = G__59944;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__59767);
if(temp__5735__auto____$1){
var seq__59767__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__59767__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59767__$1);
var G__59945 = cljs.core.chunk_rest(seq__59767__$1);
var G__59946 = c__4609__auto__;
var G__59947 = cljs.core.count(c__4609__auto__);
var G__59948 = (0);
seq__59767 = G__59945;
chunk__59768 = G__59946;
count__59769 = G__59947;
i__59770 = G__59948;
continue;
} else {
var role = cljs.core.first(seq__59767__$1);
var temp__5735__auto___59949__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___59949__$2)){
var spec_59950 = temp__5735__auto___59949__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_59950)], 0));
} else {
}


var G__59951 = cljs.core.next(seq__59767__$1);
var G__59952 = null;
var G__59953 = (0);
var G__59954 = (0);
seq__59767 = G__59951;
chunk__59768 = G__59952;
count__59769 = G__59953;
i__59770 = G__59954;
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
var G__59955 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__59956 = cljs.core.ex_cause(t);
via = G__59955;
t = G__59956;
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
var map__59806 = datafied_throwable;
var map__59806__$1 = (((((!((map__59806 == null))))?(((((map__59806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59806):map__59806);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59806__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59806__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59806__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__59808 = cljs.core.last(via);
var map__59808__$1 = (((((!((map__59808 == null))))?(((((map__59808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59808):map__59808);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59808__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59808__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59808__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__59809 = data;
var map__59809__$1 = (((((!((map__59809 == null))))?(((((map__59809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59809):map__59809);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59809__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59809__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59809__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__59810 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__59810__$1 = (((((!((map__59810 == null))))?(((((map__59810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59810):map__59810);
var top_data = map__59810__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59810__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__59818 = phase;
var G__59818__$1 = (((G__59818 instanceof cljs.core.Keyword))?G__59818.fqn:null);
switch (G__59818__$1) {
case "read-source":
var map__59827 = data;
var map__59827__$1 = (((((!((map__59827 == null))))?(((((map__59827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59827):map__59827);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59827__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59827__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__59830 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__59830__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59830,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59830);
var G__59830__$2 = (cljs.core.truth_((function (){var fexpr__59831 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59831.cljs$core$IFn$_invoke$arity$1 ? fexpr__59831.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59831.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59830__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59830__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59830__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59830__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__59832 = top_data;
var G__59832__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59832,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__59832);
var G__59832__$2 = (cljs.core.truth_((function (){var fexpr__59833 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59833.cljs$core$IFn$_invoke$arity$1 ? fexpr__59833.cljs$core$IFn$_invoke$arity$1(source) : fexpr__59833.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59832__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__59832__$1);
var G__59832__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59832__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59832__$2);
var G__59832__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59832__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59832__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59832__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59832__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__59834 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59834,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59834,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59834,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59834,(3),null);
var G__59837 = top_data;
var G__59837__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59837,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__59837);
var G__59837__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59837__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__59837__$1);
var G__59837__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59837__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__59837__$2);
var G__59837__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59837__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__59837__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59837__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__59837__$4;
}

break;
case "execution":
var vec__59838 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59838,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59838,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59838,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59838,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__59797_SHARP_){
var or__4185__auto__ = (p1__59797_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__59842 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__59842.cljs$core$IFn$_invoke$arity$1 ? fexpr__59842.cljs$core$IFn$_invoke$arity$1(p1__59797_SHARP_) : fexpr__59842.call(null,p1__59797_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__59843 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__59843__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59843,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__59843);
var G__59843__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59843__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__59843__$1);
var G__59843__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59843__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__59843__$2);
var G__59843__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59843__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__59843__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59843__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__59843__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59818__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__59846){
var map__59847 = p__59846;
var map__59847__$1 = (((((!((map__59847 == null))))?(((((map__59847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59847):map__59847);
var triage_data = map__59847__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59847__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59847__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59847__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59847__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59847__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59847__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59847__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59847__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__59849 = phase;
var G__59849__$1 = (((G__59849 instanceof cljs.core.Keyword))?G__59849.fqn:null);
switch (G__59849__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__59850 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__59851 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59852 = loc;
var G__59853 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59854_60014 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59855_60015 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59856_60016 = true;
var _STAR_print_fn_STAR__temp_val__59857_60017 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59856_60016);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59857_60017);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59844_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59844_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59855_60015);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59854_60014);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59850,G__59851,G__59852,G__59853) : format.call(null,G__59850,G__59851,G__59852,G__59853));

break;
case "macroexpansion":
var G__59858 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__59859 = cause_type;
var G__59860 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59861 = loc;
var G__59862 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59858,G__59859,G__59860,G__59861,G__59862) : format.call(null,G__59858,G__59859,G__59860,G__59861,G__59862));

break;
case "compile-syntax-check":
var G__59863 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__59864 = cause_type;
var G__59865 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59866 = loc;
var G__59867 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59863,G__59864,G__59865,G__59866,G__59867) : format.call(null,G__59863,G__59864,G__59865,G__59866,G__59867));

break;
case "compilation":
var G__59868 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__59869 = cause_type;
var G__59870 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59871 = loc;
var G__59872 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59868,G__59869,G__59870,G__59871,G__59872) : format.call(null,G__59868,G__59869,G__59870,G__59871,G__59872));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__59873 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__59874 = symbol;
var G__59875 = loc;
var G__59876 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__59877_60018 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__59878_60019 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__59879_60020 = true;
var _STAR_print_fn_STAR__temp_val__59880_60021 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__59879_60020);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__59880_60021);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59845_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__59845_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__59878_60019);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__59877_60018);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__59873,G__59874,G__59875,G__59876) : format.call(null,G__59873,G__59874,G__59875,G__59876));
} else {
var G__59881 = "Execution error%s at %s(%s).\n%s\n";
var G__59882 = cause_type;
var G__59883 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__59884 = loc;
var G__59885 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__59881,G__59882,G__59883,G__59884,G__59885) : format.call(null,G__59881,G__59882,G__59883,G__59884,G__59885));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59849__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
