goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$rule(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26884 = arguments.length;
var i__4790__auto___26885 = (0);
while(true){
if((i__4790__auto___26885 < len__4789__auto___26884)){
args__4795__auto__.push((arguments[i__4790__auto___26885]));

var G__26886 = (i__4790__auto___26885 + (1));
i__4790__auto___26885 = G__26886;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__26890__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__26890 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__26891__i = 0, G__26891__a = new Array(arguments.length -  0);
while (G__26891__i < G__26891__a.length) {G__26891__a[G__26891__i] = arguments[G__26891__i + 0]; ++G__26891__i;}
  children = new cljs.core.IndexedSeq(G__26891__a,0,null);
} 
return G__26890__delegate.call(this,children);};
G__26890.cljs$lang$maxFixedArity = 0;
G__26890.cljs$lang$applyTo = (function (arglist__26892){
var children = cljs.core.seq(arglist__26892);
return G__26890__delegate(children);
});
G__26890.cljs$core$IFn$_invoke$arity$variadic = G__26890__delegate;
return G__26890;
})()
;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq26850){
var G__26851 = cljs.core.first(seq26850);
var seq26850__$1 = cljs.core.next(seq26850);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26851,seq26850__$1);
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.cssfn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__26893__delegate = function (args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__26893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26894__i = 0, G__26894__a = new Array(arguments.length -  0);
while (G__26894__i < G__26894__a.length) {G__26894__a[G__26894__i] = arguments[G__26894__i + 0]; ++G__26894__i;}
  args = new cljs.core.IndexedSeq(G__26894__a,0,null);
} 
return G__26893__delegate.call(this,args);};
G__26893.cljs$lang$maxFixedArity = 0;
G__26893.cljs$lang$applyTo = (function (arglist__26895){
var args = cljs.core.seq(arglist__26895);
return G__26893__delegate(args);
});
G__26893.cljs$core$IFn$_invoke$arity$variadic = G__26893__delegate;
return G__26893;
})()
;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_rule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_font_face(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26897 = arguments.length;
var i__4790__auto___26898 = (0);
while(true){
if((i__4790__auto___26898 < len__4789__auto___26897)){
args__4795__auto__.push((arguments[i__4790__auto___26898]));

var G__26899 = (i__4790__auto___26898 + (1));
i__4790__auto___26898 = G__26899;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq26859){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26859));
}));

/**
 * Create a CSS @import rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_import(var_args){
var G__26866 = arguments.length;
switch (G__26866) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___26901 = arguments.length;
var i__4790__auto___26904 = (0);
while(true){
if((i__4790__auto___26904 < len__4789__auto___26901)){
args_arr__4810__auto__.push((arguments[i__4790__auto___26904]));

var G__26906 = (i__4790__auto___26904 + (1));
i__4790__auto___26904 = G__26906;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq26862){
var G__26863 = cljs.core.first(seq26862);
var seq26862__$1 = cljs.core.next(seq26862);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26863,seq26862__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_media(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26907 = arguments.length;
var i__4790__auto___26908 = (0);
while(true){
if((i__4790__auto___26908 < len__4789__auto___26907)){
args__4795__auto__.push((arguments[i__4790__auto___26908]));

var G__26909 = (i__4790__auto___26908 + (1));
i__4790__auto___26908 = G__26909;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq26868){
var G__26869 = cljs.core.first(seq26868);
var seq26868__$1 = cljs.core.next(seq26868);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26869,seq26868__$1);
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_supports(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26913 = arguments.length;
var i__4790__auto___26914 = (0);
while(true){
if((i__4790__auto___26914 < len__4789__auto___26913)){
args__4795__auto__.push((arguments[i__4790__auto___26914]));

var G__26915 = (i__4790__auto___26914 + (1));
i__4790__auto___26914 = G__26915;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq26872){
var G__26873 = cljs.core.first(seq26872);
var seq26872__$1 = cljs.core.next(seq26872);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26873,seq26872__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$at_keyframes(var_args){
var args__4795__auto__ = [];
var len__4789__auto___26916 = arguments.length;
var i__4790__auto___26917 = (0);
while(true){
if((i__4790__auto___26917 < len__4789__auto___26916)){
args__4795__auto__.push((arguments[i__4790__auto___26917]));

var G__26918 = (i__4790__auto___26917 + (1));
i__4790__auto___26917 = G__26918;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq26878){
var G__26879 = cljs.core.first(seq26878);
var seq26878__$1 = cljs.core.next(seq26878);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26879,seq26878__$1);
}));

/**
 * Create a color from RGB values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$rgb(r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$stylesheet$hsl(h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.stylesheet.js.map
