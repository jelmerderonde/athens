goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___73959 = arguments.length;
var i__4790__auto___73960 = (0);
while(true){
if((i__4790__auto___73960 < len__4789__auto___73959)){
args__4795__auto__.push((arguments[i__4790__auto___73960]));

var G__73961 = (i__4790__auto___73960 + (1));
i__4790__auto___73960 = G__73961;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq73928){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73928));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___73970 = arguments.length;
var i__4790__auto___73971 = (0);
while(true){
if((i__4790__auto___73971 < len__4789__auto___73970)){
args__4795__auto__.push((arguments[i__4790__auto___73971]));

var G__73972 = (i__4790__auto___73971 + (1));
i__4790__auto___73971 = G__73972;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq73929){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73929));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__73941 = "";
var G__73941__$1 = (cljs.core.truth_(re.ignoreCase)?[G__73941,"i"].join(''):G__73941);
var G__73941__$2 = (cljs.core.truth_(re.multiline)?[G__73941__$1,"m"].join(''):G__73941__$1);
if(cljs.core.truth_(re.unicode)){
return [G__73941__$2,"u"].join('');
} else {
return G__73941__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
