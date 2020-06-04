goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__73943 = (line + (1));
var G__73944 = (1);
var G__73945 = (counter + (1));
line = G__73943;
col = G__73944;
counter = G__73945;
continue;
} else {
var G__73946 = line;
var G__73947 = (col + (1));
var G__73948 = (counter + (1));
line = G__73946;
col = G__73947;
counter = G__73948;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__73973 = cljs.core.next(chars);
var G__73974 = (n__$1 - (1));
chars = G__73973;
n__$1 = G__73974;
continue;
} else {
var G__73975 = cljs.core.next(chars);
var G__73976 = n__$1;
chars = G__73975;
n__$1 = G__73976;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__73925){
var map__73926 = p__73925;
var map__73926__$1 = (((((!((map__73926 == null))))?(((((map__73926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73926):map__73926);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73926__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73926__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73926__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73926__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__73932_73977 = cljs.core.seq(full_reasons);
var chunk__73933_73978 = null;
var count__73934_73979 = (0);
var i__73935_73980 = (0);
while(true){
if((i__73935_73980 < count__73934_73979)){
var r_73981 = chunk__73933_73978.cljs$core$IIndexed$_nth$arity$2(null,i__73935_73980);
instaparse.failure.print_reason(r_73981);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__73982 = seq__73932_73977;
var G__73983 = chunk__73933_73978;
var G__73984 = count__73934_73979;
var G__73985 = (i__73935_73980 + (1));
seq__73932_73977 = G__73982;
chunk__73933_73978 = G__73983;
count__73934_73979 = G__73984;
i__73935_73980 = G__73985;
continue;
} else {
var temp__5735__auto___73986 = cljs.core.seq(seq__73932_73977);
if(temp__5735__auto___73986){
var seq__73932_73990__$1 = temp__5735__auto___73986;
if(cljs.core.chunked_seq_QMARK_(seq__73932_73990__$1)){
var c__4609__auto___73991 = cljs.core.chunk_first(seq__73932_73990__$1);
var G__73992 = cljs.core.chunk_rest(seq__73932_73990__$1);
var G__73993 = c__4609__auto___73991;
var G__73994 = cljs.core.count(c__4609__auto___73991);
var G__73995 = (0);
seq__73932_73977 = G__73992;
chunk__73933_73978 = G__73993;
count__73934_73979 = G__73994;
i__73935_73980 = G__73995;
continue;
} else {
var r_73999 = cljs.core.first(seq__73932_73990__$1);
instaparse.failure.print_reason(r_73999);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__74000 = cljs.core.next(seq__73932_73990__$1);
var G__74001 = null;
var G__74002 = (0);
var G__74003 = (0);
seq__73932_73977 = G__74000;
chunk__73933_73978 = G__74001;
count__73934_73979 = G__74002;
i__73935_73980 = G__74003;
continue;
}
} else {
}
}
break;
}

var seq__73937 = cljs.core.seq(partial_reasons);
var chunk__73938 = null;
var count__73939 = (0);
var i__73940 = (0);
while(true){
if((i__73940 < count__73939)){
var r = chunk__73938.cljs$core$IIndexed$_nth$arity$2(null,i__73940);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__74006 = seq__73937;
var G__74007 = chunk__73938;
var G__74008 = count__73939;
var G__74009 = (i__73940 + (1));
seq__73937 = G__74006;
chunk__73938 = G__74007;
count__73939 = G__74008;
i__73940 = G__74009;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__73937);
if(temp__5735__auto__){
var seq__73937__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73937__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__73937__$1);
var G__74010 = cljs.core.chunk_rest(seq__73937__$1);
var G__74011 = c__4609__auto__;
var G__74012 = cljs.core.count(c__4609__auto__);
var G__74013 = (0);
seq__73937 = G__74010;
chunk__73938 = G__74011;
count__73939 = G__74012;
i__73940 = G__74013;
continue;
} else {
var r = cljs.core.first(seq__73937__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__74015 = cljs.core.next(seq__73937__$1);
var G__74016 = null;
var G__74017 = (0);
var G__74018 = (0);
seq__73937 = G__74015;
chunk__73938 = G__74016;
count__73939 = G__74017;
i__73940 = G__74018;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
