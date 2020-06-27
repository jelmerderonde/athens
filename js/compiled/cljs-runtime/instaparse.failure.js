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
var G__63522 = (line + (1));
var G__63523 = (1);
var G__63524 = (counter + (1));
line = G__63522;
col = G__63523;
counter = G__63524;
continue;
} else {
var G__63525 = line;
var G__63526 = (col + (1));
var G__63527 = (counter + (1));
line = G__63525;
col = G__63526;
counter = G__63527;
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
var G__63529 = cljs.core.next(chars);
var G__63530 = (n__$1 - (1));
chars = G__63529;
n__$1 = G__63530;
continue;
} else {
var G__63531 = cljs.core.next(chars);
var G__63532 = n__$1;
chars = G__63531;
n__$1 = G__63532;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__63510){
var map__63511 = p__63510;
var map__63511__$1 = (((((!((map__63511 == null))))?(((((map__63511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63511):map__63511);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63511__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63511__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63511__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63511__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__63513_63534 = cljs.core.seq(full_reasons);
var chunk__63514_63535 = null;
var count__63515_63536 = (0);
var i__63516_63537 = (0);
while(true){
if((i__63516_63537 < count__63515_63536)){
var r_63538 = chunk__63514_63535.cljs$core$IIndexed$_nth$arity$2(null,i__63516_63537);
instaparse.failure.print_reason(r_63538);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63539 = seq__63513_63534;
var G__63540 = chunk__63514_63535;
var G__63541 = count__63515_63536;
var G__63542 = (i__63516_63537 + (1));
seq__63513_63534 = G__63539;
chunk__63514_63535 = G__63540;
count__63515_63536 = G__63541;
i__63516_63537 = G__63542;
continue;
} else {
var temp__5735__auto___63543 = cljs.core.seq(seq__63513_63534);
if(temp__5735__auto___63543){
var seq__63513_63544__$1 = temp__5735__auto___63543;
if(cljs.core.chunked_seq_QMARK_(seq__63513_63544__$1)){
var c__4609__auto___63545 = cljs.core.chunk_first(seq__63513_63544__$1);
var G__63546 = cljs.core.chunk_rest(seq__63513_63544__$1);
var G__63547 = c__4609__auto___63545;
var G__63548 = cljs.core.count(c__4609__auto___63545);
var G__63549 = (0);
seq__63513_63534 = G__63546;
chunk__63514_63535 = G__63547;
count__63515_63536 = G__63548;
i__63516_63537 = G__63549;
continue;
} else {
var r_63550 = cljs.core.first(seq__63513_63544__$1);
instaparse.failure.print_reason(r_63550);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__63551 = cljs.core.next(seq__63513_63544__$1);
var G__63552 = null;
var G__63553 = (0);
var G__63554 = (0);
seq__63513_63534 = G__63551;
chunk__63514_63535 = G__63552;
count__63515_63536 = G__63553;
i__63516_63537 = G__63554;
continue;
}
} else {
}
}
break;
}

var seq__63517 = cljs.core.seq(partial_reasons);
var chunk__63518 = null;
var count__63519 = (0);
var i__63520 = (0);
while(true){
if((i__63520 < count__63519)){
var r = chunk__63518.cljs$core$IIndexed$_nth$arity$2(null,i__63520);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63555 = seq__63517;
var G__63556 = chunk__63518;
var G__63557 = count__63519;
var G__63558 = (i__63520 + (1));
seq__63517 = G__63555;
chunk__63518 = G__63556;
count__63519 = G__63557;
i__63520 = G__63558;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63517);
if(temp__5735__auto__){
var seq__63517__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63517__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__63517__$1);
var G__63559 = cljs.core.chunk_rest(seq__63517__$1);
var G__63560 = c__4609__auto__;
var G__63561 = cljs.core.count(c__4609__auto__);
var G__63562 = (0);
seq__63517 = G__63559;
chunk__63518 = G__63560;
count__63519 = G__63561;
i__63520 = G__63562;
continue;
} else {
var r = cljs.core.first(seq__63517__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__63565 = cljs.core.next(seq__63517__$1);
var G__63566 = null;
var G__63567 = (0);
var G__63568 = (0);
seq__63517 = G__63565;
chunk__63518 = G__63566;
count__63519 = G__63567;
i__63520 = G__63568;
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
