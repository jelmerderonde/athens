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
var G__74048 = (line + (1));
var G__74049 = (1);
var G__74050 = (counter + (1));
line = G__74048;
col = G__74049;
counter = G__74050;
continue;
} else {
var G__74051 = line;
var G__74052 = (col + (1));
var G__74053 = (counter + (1));
line = G__74051;
col = G__74052;
counter = G__74053;
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
var G__74054 = cljs.core.next(chars);
var G__74055 = (n__$1 - (1));
chars = G__74054;
n__$1 = G__74055;
continue;
} else {
var G__74056 = cljs.core.next(chars);
var G__74057 = n__$1;
chars = G__74056;
n__$1 = G__74057;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__74033){
var map__74034 = p__74033;
var map__74034__$1 = (((((!((map__74034 == null))))?(((((map__74034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74034):map__74034);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74034__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74034__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74034__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74034__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__74036_74060 = cljs.core.seq(full_reasons);
var chunk__74037_74061 = null;
var count__74038_74062 = (0);
var i__74039_74063 = (0);
while(true){
if((i__74039_74063 < count__74038_74062)){
var r_74064 = chunk__74037_74061.cljs$core$IIndexed$_nth$arity$2(null,i__74039_74063);
instaparse.failure.print_reason(r_74064);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__74065 = seq__74036_74060;
var G__74066 = chunk__74037_74061;
var G__74067 = count__74038_74062;
var G__74068 = (i__74039_74063 + (1));
seq__74036_74060 = G__74065;
chunk__74037_74061 = G__74066;
count__74038_74062 = G__74067;
i__74039_74063 = G__74068;
continue;
} else {
var temp__5735__auto___74069 = cljs.core.seq(seq__74036_74060);
if(temp__5735__auto___74069){
var seq__74036_74070__$1 = temp__5735__auto___74069;
if(cljs.core.chunked_seq_QMARK_(seq__74036_74070__$1)){
var c__4609__auto___74071 = cljs.core.chunk_first(seq__74036_74070__$1);
var G__74072 = cljs.core.chunk_rest(seq__74036_74070__$1);
var G__74073 = c__4609__auto___74071;
var G__74074 = cljs.core.count(c__4609__auto___74071);
var G__74075 = (0);
seq__74036_74060 = G__74072;
chunk__74037_74061 = G__74073;
count__74038_74062 = G__74074;
i__74039_74063 = G__74075;
continue;
} else {
var r_74076 = cljs.core.first(seq__74036_74070__$1);
instaparse.failure.print_reason(r_74076);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__74098 = cljs.core.next(seq__74036_74070__$1);
var G__74099 = null;
var G__74100 = (0);
var G__74101 = (0);
seq__74036_74060 = G__74098;
chunk__74037_74061 = G__74099;
count__74038_74062 = G__74100;
i__74039_74063 = G__74101;
continue;
}
} else {
}
}
break;
}

var seq__74040 = cljs.core.seq(partial_reasons);
var chunk__74041 = null;
var count__74042 = (0);
var i__74043 = (0);
while(true){
if((i__74043 < count__74042)){
var r = chunk__74041.cljs$core$IIndexed$_nth$arity$2(null,i__74043);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__74102 = seq__74040;
var G__74103 = chunk__74041;
var G__74104 = count__74042;
var G__74105 = (i__74043 + (1));
seq__74040 = G__74102;
chunk__74041 = G__74103;
count__74042 = G__74104;
i__74043 = G__74105;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__74040);
if(temp__5735__auto__){
var seq__74040__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74040__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__74040__$1);
var G__74106 = cljs.core.chunk_rest(seq__74040__$1);
var G__74107 = c__4609__auto__;
var G__74108 = cljs.core.count(c__4609__auto__);
var G__74109 = (0);
seq__74040 = G__74106;
chunk__74041 = G__74107;
count__74042 = G__74108;
i__74043 = G__74109;
continue;
} else {
var r = cljs.core.first(seq__74040__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__74110 = cljs.core.next(seq__74040__$1);
var G__74111 = null;
var G__74112 = (0);
var G__74113 = (0);
seq__74040 = G__74110;
chunk__74041 = G__74111;
count__74042 = G__74112;
i__74043 = G__74113;
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
