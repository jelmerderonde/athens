goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___74080 = arguments.length;
var i__4790__auto___74081 = (0);
while(true){
if((i__4790__auto___74081 < len__4789__auto___74080)){
args__4795__auto__.push((arguments[i__4790__auto___74081]));

var G__74082 = (i__4790__auto___74081 + (1));
i__4790__auto___74081 = G__74082;
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
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq74059){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74059));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___74083 = arguments.length;
var i__4790__auto___74084 = (0);
while(true){
if((i__4790__auto___74084 < len__4789__auto___74083)){
args__4795__auto__.push((arguments[i__4790__auto___74084]));

var G__74085 = (i__4790__auto___74084 + (1));
i__4790__auto___74084 = G__74085;
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
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq74077){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74077));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__74079 = "";
var G__74079__$1 = (cljs.core.truth_(re.ignoreCase)?[G__74079,"i"].join(''):G__74079);
var G__74079__$2 = (cljs.core.truth_(re.multiline)?[G__74079__$1,"m"].join(''):G__74079__$1);
if(cljs.core.truth_(re.unicode)){
return [G__74079__$2,"u"].join('');
} else {
return G__74079__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
