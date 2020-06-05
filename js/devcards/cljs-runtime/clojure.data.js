goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__39764){
var vec__39765 = p__39764;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39765,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39765,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__39775 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39775,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39775,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39775,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__39796 = arguments.length;
switch (G__39796) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
}));

(clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
}));

(clojure.data.diff_associative.cljs$lang$maxFixedArity = 3);

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4273__auto__ = cljs.core.count(a);
var y__4274__auto__ = cljs.core.count(b);
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4487__auto__ = (((x == null))?null:x);
var m__4488__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4488__auto__.call(null,x));
} else {
var m__4485__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4485__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4487__auto__ = (((a == null))?null:a);
var m__4488__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4488__auto__.call(null,a,b));
} else {
var m__4485__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4485__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__39851_40022 = clojure.data.equality_partition;
var G__39852_40023 = "null";
var G__39853_40024 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__39851_40022,G__39852_40023,G__39853_40024);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__39856_40031 = clojure.data.equality_partition;
var G__39857_40032 = "string";
var G__39858_40033 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__39856_40031,G__39857_40032,G__39858_40033);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__39861_40034 = clojure.data.equality_partition;
var G__39862_40035 = "number";
var G__39863_40036 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__39861_40034,G__39862_40035,G__39863_40036);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__39864_40043 = clojure.data.equality_partition;
var G__39865_40044 = "array";
var G__39866_40045 = (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});
goog.object.set(G__39864_40043,G__39865_40044,G__39866_40045);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__39870_40048 = clojure.data.equality_partition;
var G__39871_40049 = "function";
var G__39872_40050 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__39870_40048,G__39871_40049,G__39872_40050);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__39879_40053 = clojure.data.equality_partition;
var G__39880_40054 = "boolean";
var G__39881_40055 = (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});
goog.object.set(G__39879_40053,G__39880_40054,G__39881_40055);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__39884_40060 = clojure.data.equality_partition;
var G__39885_40061 = "_";
var G__39886_40062 = (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});
goog.object.set(G__39884_40060,G__39885_40061,G__39886_40062);
goog.object.set(clojure.data.Diff,"null",true);

var G__39904_40075 = clojure.data.diff_similar;
var G__39905_40076 = "null";
var G__39906_40077 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__39904_40075,G__39905_40076,G__39906_40077);

goog.object.set(clojure.data.Diff,"string",true);

var G__39913_40086 = clojure.data.diff_similar;
var G__39914_40087 = "string";
var G__39915_40088 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__39913_40086,G__39914_40087,G__39915_40088);

goog.object.set(clojure.data.Diff,"number",true);

var G__39916_40092 = clojure.data.diff_similar;
var G__39917_40093 = "number";
var G__39918_40094 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__39916_40092,G__39917_40093,G__39918_40094);

goog.object.set(clojure.data.Diff,"array",true);

var G__39920_40095 = clojure.data.diff_similar;
var G__39921_40096 = "array";
var G__39922_40097 = (function (a,b){
return clojure.data.diff_sequential(a,b);
});
goog.object.set(G__39920_40095,G__39921_40096,G__39922_40097);

goog.object.set(clojure.data.Diff,"function",true);

var G__39926_40107 = clojure.data.diff_similar;
var G__39927_40108 = "function";
var G__39928_40109 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__39926_40107,G__39927_40108,G__39928_40109);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__39931_40112 = clojure.data.diff_similar;
var G__39932_40113 = "boolean";
var G__39933_40114 = (function (a,b){
return clojure.data.atom_diff(a,b);
});
goog.object.set(G__39931_40112,G__39932_40113,G__39933_40114);

goog.object.set(clojure.data.Diff,"_",true);

var G__39936_40115 = clojure.data.diff_similar;
var G__39937_40116 = "_";
var G__39938_40117 = (function (a,b){
var fexpr__39949 = (function (){var G__39950 = clojure.data.equality_partition(a);
var G__39950__$1 = (((G__39950 instanceof cljs.core.Keyword))?G__39950.fqn:null);
switch (G__39950__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39950__$1)].join('')));

}
})();
return (fexpr__39949.cljs$core$IFn$_invoke$arity$2 ? fexpr__39949.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__39949.call(null,a,b));
});
goog.object.set(G__39936_40115,G__39937_40116,G__39938_40117);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map