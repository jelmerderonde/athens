goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4185__auto__ = elem.textContent;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__53071 = arguments.length;
switch (G__53071) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__53079 = arguments.length;
switch (G__53079) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__53082 = arguments.length;
switch (G__53082) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__53080_SHARP_){
return (!((p1__53080_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53834 = arguments.length;
var i__4790__auto___53835 = (0);
while(true){
if((i__4790__auto___53835 < len__4789__auto___53834)){
args__4795__auto__.push((arguments[i__4790__auto___53835]));

var G__53836 = (i__4790__auto___53835 + (1));
i__4790__auto___53835 = G__53836;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__53096_53837 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__53097_53838 = null;
var count__53098_53839 = (0);
var i__53099_53840 = (0);
while(true){
if((i__53099_53840 < count__53098_53839)){
var vec__53106_53841 = chunk__53097_53838.cljs$core$IIndexed$_nth$arity$2(null,i__53099_53840);
var k_53842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53106_53841,(0),null);
var v_53843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53106_53841,(1),null);
style.setProperty(dommy.utils.as_str(k_53842),v_53843);


var G__53844 = seq__53096_53837;
var G__53845 = chunk__53097_53838;
var G__53846 = count__53098_53839;
var G__53847 = (i__53099_53840 + (1));
seq__53096_53837 = G__53844;
chunk__53097_53838 = G__53845;
count__53098_53839 = G__53846;
i__53099_53840 = G__53847;
continue;
} else {
var temp__5735__auto___53848 = cljs.core.seq(seq__53096_53837);
if(temp__5735__auto___53848){
var seq__53096_53849__$1 = temp__5735__auto___53848;
if(cljs.core.chunked_seq_QMARK_(seq__53096_53849__$1)){
var c__4609__auto___53850 = cljs.core.chunk_first(seq__53096_53849__$1);
var G__53851 = cljs.core.chunk_rest(seq__53096_53849__$1);
var G__53852 = c__4609__auto___53850;
var G__53853 = cljs.core.count(c__4609__auto___53850);
var G__53854 = (0);
seq__53096_53837 = G__53851;
chunk__53097_53838 = G__53852;
count__53098_53839 = G__53853;
i__53099_53840 = G__53854;
continue;
} else {
var vec__53110_53855 = cljs.core.first(seq__53096_53849__$1);
var k_53856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53110_53855,(0),null);
var v_53857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53110_53855,(1),null);
style.setProperty(dommy.utils.as_str(k_53856),v_53857);


var G__53861 = cljs.core.next(seq__53096_53849__$1);
var G__53862 = null;
var G__53863 = (0);
var G__53864 = (0);
seq__53096_53837 = G__53861;
chunk__53097_53838 = G__53862;
count__53098_53839 = G__53863;
i__53099_53840 = G__53864;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq53094){
var G__53095 = cljs.core.first(seq53094);
var seq53094__$1 = cljs.core.next(seq53094);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53095,seq53094__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53865 = arguments.length;
var i__4790__auto___53866 = (0);
while(true){
if((i__4790__auto___53866 < len__4789__auto___53865)){
args__4795__auto__.push((arguments[i__4790__auto___53866]));

var G__53867 = (i__4790__auto___53866 + (1));
i__4790__auto___53866 = G__53867;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__53118_53869 = cljs.core.seq(keywords);
var chunk__53119_53870 = null;
var count__53120_53871 = (0);
var i__53121_53872 = (0);
while(true){
if((i__53121_53872 < count__53120_53871)){
var kw_53873 = chunk__53119_53870.cljs$core$IIndexed$_nth$arity$2(null,i__53121_53872);
style.removeProperty(dommy.utils.as_str(kw_53873));


var G__53874 = seq__53118_53869;
var G__53875 = chunk__53119_53870;
var G__53876 = count__53120_53871;
var G__53877 = (i__53121_53872 + (1));
seq__53118_53869 = G__53874;
chunk__53119_53870 = G__53875;
count__53120_53871 = G__53876;
i__53121_53872 = G__53877;
continue;
} else {
var temp__5735__auto___53878 = cljs.core.seq(seq__53118_53869);
if(temp__5735__auto___53878){
var seq__53118_53879__$1 = temp__5735__auto___53878;
if(cljs.core.chunked_seq_QMARK_(seq__53118_53879__$1)){
var c__4609__auto___53880 = cljs.core.chunk_first(seq__53118_53879__$1);
var G__53881 = cljs.core.chunk_rest(seq__53118_53879__$1);
var G__53882 = c__4609__auto___53880;
var G__53883 = cljs.core.count(c__4609__auto___53880);
var G__53884 = (0);
seq__53118_53869 = G__53881;
chunk__53119_53870 = G__53882;
count__53120_53871 = G__53883;
i__53121_53872 = G__53884;
continue;
} else {
var kw_53886 = cljs.core.first(seq__53118_53879__$1);
style.removeProperty(dommy.utils.as_str(kw_53886));


var G__53891 = cljs.core.next(seq__53118_53879__$1);
var G__53892 = null;
var G__53893 = (0);
var G__53894 = (0);
seq__53118_53869 = G__53891;
chunk__53119_53870 = G__53892;
count__53120_53871 = G__53893;
i__53121_53872 = G__53894;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq53114){
var G__53115 = cljs.core.first(seq53114);
var seq53114__$1 = cljs.core.next(seq53114);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53115,seq53114__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53898 = arguments.length;
var i__4790__auto___53899 = (0);
while(true){
if((i__4790__auto___53899 < len__4789__auto___53898)){
args__4795__auto__.push((arguments[i__4790__auto___53899]));

var G__53904 = (i__4790__auto___53899 + (1));
i__4790__auto___53899 = G__53904;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__53126_53912 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__53127_53913 = null;
var count__53128_53914 = (0);
var i__53129_53915 = (0);
while(true){
if((i__53129_53915 < count__53128_53914)){
var vec__53136_53923 = chunk__53127_53913.cljs$core$IIndexed$_nth$arity$2(null,i__53129_53915);
var k_53924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53136_53923,(0),null);
var v_53925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53136_53923,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_53924,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_53925),"px"].join('')], 0));


var G__53926 = seq__53126_53912;
var G__53927 = chunk__53127_53913;
var G__53928 = count__53128_53914;
var G__53929 = (i__53129_53915 + (1));
seq__53126_53912 = G__53926;
chunk__53127_53913 = G__53927;
count__53128_53914 = G__53928;
i__53129_53915 = G__53929;
continue;
} else {
var temp__5735__auto___53930 = cljs.core.seq(seq__53126_53912);
if(temp__5735__auto___53930){
var seq__53126_53931__$1 = temp__5735__auto___53930;
if(cljs.core.chunked_seq_QMARK_(seq__53126_53931__$1)){
var c__4609__auto___53932 = cljs.core.chunk_first(seq__53126_53931__$1);
var G__53933 = cljs.core.chunk_rest(seq__53126_53931__$1);
var G__53934 = c__4609__auto___53932;
var G__53935 = cljs.core.count(c__4609__auto___53932);
var G__53936 = (0);
seq__53126_53912 = G__53933;
chunk__53127_53913 = G__53934;
count__53128_53914 = G__53935;
i__53129_53915 = G__53936;
continue;
} else {
var vec__53141_53937 = cljs.core.first(seq__53126_53931__$1);
var k_53938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53141_53937,(0),null);
var v_53939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53141_53937,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_53938,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_53939),"px"].join('')], 0));


var G__53950 = cljs.core.next(seq__53126_53931__$1);
var G__53951 = null;
var G__53952 = (0);
var G__53953 = (0);
seq__53126_53912 = G__53950;
chunk__53127_53913 = G__53951;
count__53128_53914 = G__53952;
i__53129_53915 = G__53953;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq53124){
var G__53125 = cljs.core.first(seq53124);
var seq53124__$1 = cljs.core.next(seq53124);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53125,seq53124__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__53149 = arguments.length;
switch (G__53149) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___53955 = arguments.length;
var i__4790__auto___53956 = (0);
while(true){
if((i__4790__auto___53956 < len__4789__auto___53955)){
args_arr__4810__auto__.push((arguments[i__4790__auto___53956]));

var G__53957 = (i__4790__auto___53956 + (1));
i__4790__auto___53956 = G__53957;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__53150 = elem;
(G__53150[k__$1] = v);

return G__53150;
} else {
var G__53151 = elem;
G__53151.setAttribute(k__$1,v);

return G__53151;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__53152_53958 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__53153_53959 = null;
var count__53154_53960 = (0);
var i__53155_53961 = (0);
while(true){
if((i__53155_53961 < count__53154_53960)){
var vec__53162_53962 = chunk__53153_53959.cljs$core$IIndexed$_nth$arity$2(null,i__53155_53961);
var k_53963__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53162_53962,(0),null);
var v_53964__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53162_53962,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_53963__$1,v_53964__$1);


var G__53965 = seq__53152_53958;
var G__53966 = chunk__53153_53959;
var G__53967 = count__53154_53960;
var G__53968 = (i__53155_53961 + (1));
seq__53152_53958 = G__53965;
chunk__53153_53959 = G__53966;
count__53154_53960 = G__53967;
i__53155_53961 = G__53968;
continue;
} else {
var temp__5735__auto___53969 = cljs.core.seq(seq__53152_53958);
if(temp__5735__auto___53969){
var seq__53152_53970__$1 = temp__5735__auto___53969;
if(cljs.core.chunked_seq_QMARK_(seq__53152_53970__$1)){
var c__4609__auto___53971 = cljs.core.chunk_first(seq__53152_53970__$1);
var G__53972 = cljs.core.chunk_rest(seq__53152_53970__$1);
var G__53973 = c__4609__auto___53971;
var G__53974 = cljs.core.count(c__4609__auto___53971);
var G__53975 = (0);
seq__53152_53958 = G__53972;
chunk__53153_53959 = G__53973;
count__53154_53960 = G__53974;
i__53155_53961 = G__53975;
continue;
} else {
var vec__53165_53976 = cljs.core.first(seq__53152_53970__$1);
var k_53977__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53165_53976,(0),null);
var v_53978__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53165_53976,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_53977__$1,v_53978__$1);


var G__53979 = cljs.core.next(seq__53152_53970__$1);
var G__53980 = null;
var G__53981 = (0);
var G__53982 = (0);
seq__53152_53958 = G__53979;
chunk__53153_53959 = G__53980;
count__53154_53960 = G__53981;
i__53155_53961 = G__53982;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq53145){
var G__53146 = cljs.core.first(seq53145);
var seq53145__$1 = cljs.core.next(seq53145);
var G__53147 = cljs.core.first(seq53145__$1);
var seq53145__$2 = cljs.core.next(seq53145__$1);
var G__53148 = cljs.core.first(seq53145__$2);
var seq53145__$3 = cljs.core.next(seq53145__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53146,G__53147,G__53148,seq53145__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__53190 = arguments.length;
switch (G__53190) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___53984 = arguments.length;
var i__4790__auto___53985 = (0);
while(true){
if((i__4790__auto___53985 < len__4789__auto___53984)){
args_arr__4810__auto__.push((arguments[i__4790__auto___53985]));

var G__53986 = (i__4790__auto___53985 + (1));
i__4790__auto___53985 = G__53986;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_53987__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__53196 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__53196.cljs$core$IFn$_invoke$arity$1 ? fexpr__53196.cljs$core$IFn$_invoke$arity$1(k_53987__$1) : fexpr__53196.call(null,k_53987__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_53987__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__53197_53988 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__53198_53989 = null;
var count__53199_53990 = (0);
var i__53200_53991 = (0);
while(true){
if((i__53200_53991 < count__53199_53990)){
var k_53992__$1 = chunk__53198_53989.cljs$core$IIndexed$_nth$arity$2(null,i__53200_53991);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_53992__$1);


var G__53993 = seq__53197_53988;
var G__53994 = chunk__53198_53989;
var G__53995 = count__53199_53990;
var G__53996 = (i__53200_53991 + (1));
seq__53197_53988 = G__53993;
chunk__53198_53989 = G__53994;
count__53199_53990 = G__53995;
i__53200_53991 = G__53996;
continue;
} else {
var temp__5735__auto___53997 = cljs.core.seq(seq__53197_53988);
if(temp__5735__auto___53997){
var seq__53197_53998__$1 = temp__5735__auto___53997;
if(cljs.core.chunked_seq_QMARK_(seq__53197_53998__$1)){
var c__4609__auto___53999 = cljs.core.chunk_first(seq__53197_53998__$1);
var G__54000 = cljs.core.chunk_rest(seq__53197_53998__$1);
var G__54001 = c__4609__auto___53999;
var G__54002 = cljs.core.count(c__4609__auto___53999);
var G__54003 = (0);
seq__53197_53988 = G__54000;
chunk__53198_53989 = G__54001;
count__53199_53990 = G__54002;
i__53200_53991 = G__54003;
continue;
} else {
var k_54004__$1 = cljs.core.first(seq__53197_53998__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_54004__$1);


var G__54005 = cljs.core.next(seq__53197_53998__$1);
var G__54006 = null;
var G__54007 = (0);
var G__54008 = (0);
seq__53197_53988 = G__54005;
chunk__53198_53989 = G__54006;
count__53199_53990 = G__54007;
i__53200_53991 = G__54008;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq53186){
var G__53187 = cljs.core.first(seq53186);
var seq53186__$1 = cljs.core.next(seq53186);
var G__53188 = cljs.core.first(seq53186__$1);
var seq53186__$2 = cljs.core.next(seq53186__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53187,G__53188,seq53186__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__53207 = arguments.length;
switch (G__53207) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__53218 = arguments.length;
switch (G__53218) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___54015 = arguments.length;
var i__4790__auto___54016 = (0);
while(true){
if((i__4790__auto___54016 < len__4789__auto___54015)){
args_arr__4810__auto__.push((arguments[i__4790__auto___54016]));

var G__54018 = (i__4790__auto___54016 + (1));
i__4790__auto___54016 = G__54018;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___54024 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___54024)){
var class_list_54025 = temp__5733__auto___54024;
var seq__53222_54026 = cljs.core.seq(classes__$1);
var chunk__53223_54027 = null;
var count__53224_54028 = (0);
var i__53225_54029 = (0);
while(true){
if((i__53225_54029 < count__53224_54028)){
var c_54033 = chunk__53223_54027.cljs$core$IIndexed$_nth$arity$2(null,i__53225_54029);
class_list_54025.add(c_54033);


var G__54034 = seq__53222_54026;
var G__54035 = chunk__53223_54027;
var G__54036 = count__53224_54028;
var G__54037 = (i__53225_54029 + (1));
seq__53222_54026 = G__54034;
chunk__53223_54027 = G__54035;
count__53224_54028 = G__54036;
i__53225_54029 = G__54037;
continue;
} else {
var temp__5735__auto___54038 = cljs.core.seq(seq__53222_54026);
if(temp__5735__auto___54038){
var seq__53222_54039__$1 = temp__5735__auto___54038;
if(cljs.core.chunked_seq_QMARK_(seq__53222_54039__$1)){
var c__4609__auto___54040 = cljs.core.chunk_first(seq__53222_54039__$1);
var G__54042 = cljs.core.chunk_rest(seq__53222_54039__$1);
var G__54043 = c__4609__auto___54040;
var G__54044 = cljs.core.count(c__4609__auto___54040);
var G__54045 = (0);
seq__53222_54026 = G__54042;
chunk__53223_54027 = G__54043;
count__53224_54028 = G__54044;
i__53225_54029 = G__54045;
continue;
} else {
var c_54047 = cljs.core.first(seq__53222_54039__$1);
class_list_54025.add(c_54047);


var G__54049 = cljs.core.next(seq__53222_54039__$1);
var G__54050 = null;
var G__54051 = (0);
var G__54052 = (0);
seq__53222_54026 = G__54049;
chunk__53223_54027 = G__54050;
count__53224_54028 = G__54051;
i__53225_54029 = G__54052;
continue;
}
} else {
}
}
break;
}
} else {
var seq__53229_54053 = cljs.core.seq(classes__$1);
var chunk__53230_54054 = null;
var count__53231_54055 = (0);
var i__53232_54056 = (0);
while(true){
if((i__53232_54056 < count__53231_54055)){
var c_54057 = chunk__53230_54054.cljs$core$IIndexed$_nth$arity$2(null,i__53232_54056);
var class_name_54058 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_54058,c_54057))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_54058 === ""))?c_54057:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_54058)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_54057)].join('')));
}


var G__54059 = seq__53229_54053;
var G__54060 = chunk__53230_54054;
var G__54061 = count__53231_54055;
var G__54062 = (i__53232_54056 + (1));
seq__53229_54053 = G__54059;
chunk__53230_54054 = G__54060;
count__53231_54055 = G__54061;
i__53232_54056 = G__54062;
continue;
} else {
var temp__5735__auto___54063 = cljs.core.seq(seq__53229_54053);
if(temp__5735__auto___54063){
var seq__53229_54064__$1 = temp__5735__auto___54063;
if(cljs.core.chunked_seq_QMARK_(seq__53229_54064__$1)){
var c__4609__auto___54066 = cljs.core.chunk_first(seq__53229_54064__$1);
var G__54068 = cljs.core.chunk_rest(seq__53229_54064__$1);
var G__54069 = c__4609__auto___54066;
var G__54070 = cljs.core.count(c__4609__auto___54066);
var G__54071 = (0);
seq__53229_54053 = G__54068;
chunk__53230_54054 = G__54069;
count__53231_54055 = G__54070;
i__53232_54056 = G__54071;
continue;
} else {
var c_54073 = cljs.core.first(seq__53229_54064__$1);
var class_name_54074 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_54074,c_54073))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_54074 === ""))?c_54073:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_54074)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_54073)].join('')));
}


var G__54075 = cljs.core.next(seq__53229_54064__$1);
var G__54076 = null;
var G__54077 = (0);
var G__54078 = (0);
seq__53229_54053 = G__54075;
chunk__53230_54054 = G__54076;
count__53231_54055 = G__54077;
i__53232_54056 = G__54078;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__53235_54079 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__53236_54080 = null;
var count__53237_54081 = (0);
var i__53238_54082 = (0);
while(true){
if((i__53238_54082 < count__53237_54081)){
var c_54083 = chunk__53236_54080.cljs$core$IIndexed$_nth$arity$2(null,i__53238_54082);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_54083);


var G__54084 = seq__53235_54079;
var G__54085 = chunk__53236_54080;
var G__54086 = count__53237_54081;
var G__54087 = (i__53238_54082 + (1));
seq__53235_54079 = G__54084;
chunk__53236_54080 = G__54085;
count__53237_54081 = G__54086;
i__53238_54082 = G__54087;
continue;
} else {
var temp__5735__auto___54088 = cljs.core.seq(seq__53235_54079);
if(temp__5735__auto___54088){
var seq__53235_54089__$1 = temp__5735__auto___54088;
if(cljs.core.chunked_seq_QMARK_(seq__53235_54089__$1)){
var c__4609__auto___54090 = cljs.core.chunk_first(seq__53235_54089__$1);
var G__54091 = cljs.core.chunk_rest(seq__53235_54089__$1);
var G__54092 = c__4609__auto___54090;
var G__54093 = cljs.core.count(c__4609__auto___54090);
var G__54094 = (0);
seq__53235_54079 = G__54091;
chunk__53236_54080 = G__54092;
count__53237_54081 = G__54093;
i__53238_54082 = G__54094;
continue;
} else {
var c_54095 = cljs.core.first(seq__53235_54089__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_54095);


var G__54096 = cljs.core.next(seq__53235_54089__$1);
var G__54097 = null;
var G__54098 = (0);
var G__54099 = (0);
seq__53235_54079 = G__54096;
chunk__53236_54080 = G__54097;
count__53237_54081 = G__54098;
i__53238_54082 = G__54099;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq53215){
var G__53216 = cljs.core.first(seq53215);
var seq53215__$1 = cljs.core.next(seq53215);
var G__53217 = cljs.core.first(seq53215__$1);
var seq53215__$2 = cljs.core.next(seq53215__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53216,G__53217,seq53215__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__53246 = arguments.length;
switch (G__53246) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___54101 = arguments.length;
var i__4790__auto___54102 = (0);
while(true){
if((i__4790__auto___54102 < len__4789__auto___54101)){
args_arr__4810__auto__.push((arguments[i__4790__auto___54102]));

var G__54103 = (i__4790__auto___54102 + (1));
i__4790__auto___54102 = G__54103;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___54105 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___54105)){
var class_list_54106 = temp__5733__auto___54105;
class_list_54106.remove(c__$1);
} else {
var class_name_54107 = dommy.core.class$(elem);
var new_class_name_54108 = dommy.utils.remove_class_str(class_name_54107,c__$1);
if((class_name_54107 === new_class_name_54108)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_54108);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__53247 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__53248 = null;
var count__53249 = (0);
var i__53250 = (0);
while(true){
if((i__53250 < count__53249)){
var c = chunk__53248.cljs$core$IIndexed$_nth$arity$2(null,i__53250);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__54112 = seq__53247;
var G__54113 = chunk__53248;
var G__54114 = count__53249;
var G__54115 = (i__53250 + (1));
seq__53247 = G__54112;
chunk__53248 = G__54113;
count__53249 = G__54114;
i__53250 = G__54115;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53247);
if(temp__5735__auto__){
var seq__53247__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53247__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53247__$1);
var G__54116 = cljs.core.chunk_rest(seq__53247__$1);
var G__54117 = c__4609__auto__;
var G__54118 = cljs.core.count(c__4609__auto__);
var G__54119 = (0);
seq__53247 = G__54116;
chunk__53248 = G__54117;
count__53249 = G__54118;
i__53250 = G__54119;
continue;
} else {
var c = cljs.core.first(seq__53247__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__54120 = cljs.core.next(seq__53247__$1);
var G__54121 = null;
var G__54122 = (0);
var G__54123 = (0);
seq__53247 = G__54120;
chunk__53248 = G__54121;
count__53249 = G__54122;
i__53250 = G__54123;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq53243){
var G__53244 = cljs.core.first(seq53243);
var seq53243__$1 = cljs.core.next(seq53243);
var G__53245 = cljs.core.first(seq53243__$1);
var seq53243__$2 = cljs.core.next(seq53243__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53244,G__53245,seq53243__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__53253 = arguments.length;
switch (G__53253) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___54125 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___54125)){
var class_list_54126 = temp__5733__auto___54125;
class_list_54126.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__53256 = arguments.length;
switch (G__53256) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__53264 = arguments.length;
switch (G__53264) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__53269 = arguments.length;
switch (G__53269) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___54131 = arguments.length;
var i__4790__auto___54132 = (0);
while(true){
if((i__4790__auto___54132 < len__4789__auto___54131)){
args_arr__4810__auto__.push((arguments[i__4790__auto___54132]));

var G__54133 = (i__4790__auto___54132 + (1));
i__4790__auto___54132 = G__54133;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__53271 = parent;
G__53271.appendChild(child);

return G__53271;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__53272_54134 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__53273_54135 = null;
var count__53274_54136 = (0);
var i__53275_54137 = (0);
while(true){
if((i__53275_54137 < count__53274_54136)){
var c_54138 = chunk__53273_54135.cljs$core$IIndexed$_nth$arity$2(null,i__53275_54137);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_54138);


var G__54139 = seq__53272_54134;
var G__54140 = chunk__53273_54135;
var G__54141 = count__53274_54136;
var G__54142 = (i__53275_54137 + (1));
seq__53272_54134 = G__54139;
chunk__53273_54135 = G__54140;
count__53274_54136 = G__54141;
i__53275_54137 = G__54142;
continue;
} else {
var temp__5735__auto___54143 = cljs.core.seq(seq__53272_54134);
if(temp__5735__auto___54143){
var seq__53272_54144__$1 = temp__5735__auto___54143;
if(cljs.core.chunked_seq_QMARK_(seq__53272_54144__$1)){
var c__4609__auto___54145 = cljs.core.chunk_first(seq__53272_54144__$1);
var G__54146 = cljs.core.chunk_rest(seq__53272_54144__$1);
var G__54147 = c__4609__auto___54145;
var G__54148 = cljs.core.count(c__4609__auto___54145);
var G__54149 = (0);
seq__53272_54134 = G__54146;
chunk__53273_54135 = G__54147;
count__53274_54136 = G__54148;
i__53275_54137 = G__54149;
continue;
} else {
var c_54150 = cljs.core.first(seq__53272_54144__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_54150);


var G__54151 = cljs.core.next(seq__53272_54144__$1);
var G__54152 = null;
var G__54153 = (0);
var G__54154 = (0);
seq__53272_54134 = G__54151;
chunk__53273_54135 = G__54152;
count__53274_54136 = G__54153;
i__53275_54137 = G__54154;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq53266){
var G__53267 = cljs.core.first(seq53266);
var seq53266__$1 = cljs.core.next(seq53266);
var G__53268 = cljs.core.first(seq53266__$1);
var seq53266__$2 = cljs.core.next(seq53266__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53267,G__53268,seq53266__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__53285 = arguments.length;
switch (G__53285) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___54156 = arguments.length;
var i__4790__auto___54157 = (0);
while(true){
if((i__4790__auto___54157 < len__4789__auto___54156)){
args_arr__4810__auto__.push((arguments[i__4790__auto___54157]));

var G__54158 = (i__4790__auto___54157 + (1));
i__4790__auto___54157 = G__54158;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__53286 = parent;
G__53286.insertBefore(child,parent.firstChild);

return G__53286;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__53287_54159 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__53288_54160 = null;
var count__53289_54161 = (0);
var i__53290_54162 = (0);
while(true){
if((i__53290_54162 < count__53289_54161)){
var c_54163 = chunk__53288_54160.cljs$core$IIndexed$_nth$arity$2(null,i__53290_54162);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_54163);


var G__54164 = seq__53287_54159;
var G__54165 = chunk__53288_54160;
var G__54166 = count__53289_54161;
var G__54167 = (i__53290_54162 + (1));
seq__53287_54159 = G__54164;
chunk__53288_54160 = G__54165;
count__53289_54161 = G__54166;
i__53290_54162 = G__54167;
continue;
} else {
var temp__5735__auto___54168 = cljs.core.seq(seq__53287_54159);
if(temp__5735__auto___54168){
var seq__53287_54169__$1 = temp__5735__auto___54168;
if(cljs.core.chunked_seq_QMARK_(seq__53287_54169__$1)){
var c__4609__auto___54170 = cljs.core.chunk_first(seq__53287_54169__$1);
var G__54171 = cljs.core.chunk_rest(seq__53287_54169__$1);
var G__54172 = c__4609__auto___54170;
var G__54173 = cljs.core.count(c__4609__auto___54170);
var G__54174 = (0);
seq__53287_54159 = G__54171;
chunk__53288_54160 = G__54172;
count__53289_54161 = G__54173;
i__53290_54162 = G__54174;
continue;
} else {
var c_54175 = cljs.core.first(seq__53287_54169__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_54175);


var G__54176 = cljs.core.next(seq__53287_54169__$1);
var G__54177 = null;
var G__54178 = (0);
var G__54179 = (0);
seq__53287_54159 = G__54176;
chunk__53288_54160 = G__54177;
count__53289_54161 = G__54178;
i__53290_54162 = G__54179;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq53282){
var G__53283 = cljs.core.first(seq53282);
var seq53282__$1 = cljs.core.next(seq53282);
var G__53284 = cljs.core.first(seq53282__$1);
var seq53282__$2 = cljs.core.next(seq53282__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53283,G__53284,seq53282__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___54180 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___54180)){
var next_54181 = temp__5733__auto___54180;
dommy.core.insert_before_BANG_(elem,next_54181);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__53302 = arguments.length;
switch (G__53302) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__53303 = p;
G__53303.removeChild(elem);

return G__53303;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53304){
var vec__53305 = p__53304;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53305,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53305,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4185__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = related_target;
if(cljs.core.truth_(and__4174__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4174__auto__ = selected_target;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4174__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4185__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54183 = arguments.length;
var i__4790__auto___54184 = (0);
while(true){
if((i__4790__auto___54184 < len__4789__auto___54183)){
args__4795__auto__.push((arguments[i__4790__auto___54184]));

var G__54185 = (i__4790__auto___54184 + (1));
i__4790__auto___54184 = G__54185;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq53308){
var G__53309 = cljs.core.first(seq53308);
var seq53308__$1 = cljs.core.next(seq53308);
var G__53310 = cljs.core.first(seq53308__$1);
var seq53308__$2 = cljs.core.next(seq53308__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53309,G__53310,seq53308__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__53311 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__53311.cljs$core$IFn$_invoke$arity$1 ? fexpr__53311.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__53311.call(null,elem_sel));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54186 = arguments.length;
var i__4790__auto___54187 = (0);
while(true){
if((i__4790__auto___54187 < len__4789__auto___54186)){
args__4795__auto__.push((arguments[i__4790__auto___54187]));

var G__54188 = (i__4790__auto___54187 + (1));
i__4790__auto___54187 = G__54188;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__53316_54189 = dommy.core.elem_and_selector(elem_sel);
var elem_54190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53316_54189,(0),null);
var selector_54191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53316_54189,(1),null);
var seq__53319_54192 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__53326_54193 = null;
var count__53327_54194 = (0);
var i__53328_54195 = (0);
while(true){
if((i__53328_54195 < count__53327_54194)){
var vec__53383_54197 = chunk__53326_54193.cljs$core$IIndexed$_nth$arity$2(null,i__53328_54195);
var orig_type_54198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53383_54197,(0),null);
var f_54199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53383_54197,(1),null);
var seq__53329_54200 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_54198,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_54198,cljs.core.identity])));
var chunk__53331_54201 = null;
var count__53332_54202 = (0);
var i__53333_54203 = (0);
while(true){
if((i__53333_54203 < count__53332_54202)){
var vec__53425_54204 = chunk__53331_54201.cljs$core$IIndexed$_nth$arity$2(null,i__53333_54203);
var actual_type_54205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53425_54204,(0),null);
var factory_54206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53425_54204,(1),null);
var canonical_f_54207 = (function (){var G__53429 = (factory_54206.cljs$core$IFn$_invoke$arity$1 ? factory_54206.cljs$core$IFn$_invoke$arity$1(f_54199) : factory_54206.call(null,f_54199));
var fexpr__53428 = (cljs.core.truth_(selector_54191)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_54190,selector_54191):cljs.core.identity);
return (fexpr__53428.cljs$core$IFn$_invoke$arity$1 ? fexpr__53428.cljs$core$IFn$_invoke$arity$1(G__53429) : fexpr__53428.call(null,G__53429));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_54190,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_54191,actual_type_54205,f_54199], null),canonical_f_54207], 0));

if(cljs.core.truth_(elem_54190.addEventListener)){
elem_54190.addEventListener(cljs.core.name(actual_type_54205),canonical_f_54207);
} else {
elem_54190.attachEvent(cljs.core.name(actual_type_54205),canonical_f_54207);
}


var G__54208 = seq__53329_54200;
var G__54209 = chunk__53331_54201;
var G__54210 = count__53332_54202;
var G__54211 = (i__53333_54203 + (1));
seq__53329_54200 = G__54208;
chunk__53331_54201 = G__54209;
count__53332_54202 = G__54210;
i__53333_54203 = G__54211;
continue;
} else {
var temp__5735__auto___54212 = cljs.core.seq(seq__53329_54200);
if(temp__5735__auto___54212){
var seq__53329_54213__$1 = temp__5735__auto___54212;
if(cljs.core.chunked_seq_QMARK_(seq__53329_54213__$1)){
var c__4609__auto___54214 = cljs.core.chunk_first(seq__53329_54213__$1);
var G__54215 = cljs.core.chunk_rest(seq__53329_54213__$1);
var G__54216 = c__4609__auto___54214;
var G__54217 = cljs.core.count(c__4609__auto___54214);
var G__54218 = (0);
seq__53329_54200 = G__54215;
chunk__53331_54201 = G__54216;
count__53332_54202 = G__54217;
i__53333_54203 = G__54218;
continue;
} else {
var vec__53430_54219 = cljs.core.first(seq__53329_54213__$1);
var actual_type_54220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53430_54219,(0),null);
var factory_54221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53430_54219,(1),null);
var canonical_f_54222 = (function (){var G__53434 = (factory_54221.cljs$core$IFn$_invoke$arity$1 ? factory_54221.cljs$core$IFn$_invoke$arity$1(f_54199) : factory_54221.call(null,f_54199));
var fexpr__53433 = (cljs.core.truth_(selector_54191)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_54190,selector_54191):cljs.core.identity);
return (fexpr__53433.cljs$core$IFn$_invoke$arity$1 ? fexpr__53433.cljs$core$IFn$_invoke$arity$1(G__53434) : fexpr__53433.call(null,G__53434));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_54190,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_54191,actual_type_54220,f_54199], null),canonical_f_54222], 0));

if(cljs.core.truth_(elem_54190.addEventListener)){
elem_54190.addEventListener(cljs.core.name(actual_type_54220),canonical_f_54222);
} else {
elem_54190.attachEvent(cljs.core.name(actual_type_54220),canonical_f_54222);
}


var G__54223 = cljs.core.next(seq__53329_54213__$1);
var G__54224 = null;
var G__54225 = (0);
var G__54226 = (0);
seq__53329_54200 = G__54223;
chunk__53331_54201 = G__54224;
count__53332_54202 = G__54225;
i__53333_54203 = G__54226;
continue;
}
} else {
}
}
break;
}

var G__54227 = seq__53319_54192;
var G__54228 = chunk__53326_54193;
var G__54229 = count__53327_54194;
var G__54230 = (i__53328_54195 + (1));
seq__53319_54192 = G__54227;
chunk__53326_54193 = G__54228;
count__53327_54194 = G__54229;
i__53328_54195 = G__54230;
continue;
} else {
var temp__5735__auto___54231 = cljs.core.seq(seq__53319_54192);
if(temp__5735__auto___54231){
var seq__53319_54232__$1 = temp__5735__auto___54231;
if(cljs.core.chunked_seq_QMARK_(seq__53319_54232__$1)){
var c__4609__auto___54233 = cljs.core.chunk_first(seq__53319_54232__$1);
var G__54234 = cljs.core.chunk_rest(seq__53319_54232__$1);
var G__54235 = c__4609__auto___54233;
var G__54236 = cljs.core.count(c__4609__auto___54233);
var G__54237 = (0);
seq__53319_54192 = G__54234;
chunk__53326_54193 = G__54235;
count__53327_54194 = G__54236;
i__53328_54195 = G__54237;
continue;
} else {
var vec__53439_54238 = cljs.core.first(seq__53319_54232__$1);
var orig_type_54239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53439_54238,(0),null);
var f_54240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53439_54238,(1),null);
var seq__53320_54241 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_54239,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_54239,cljs.core.identity])));
var chunk__53322_54242 = null;
var count__53323_54243 = (0);
var i__53324_54244 = (0);
while(true){
if((i__53324_54244 < count__53323_54243)){
var vec__53453_54245 = chunk__53322_54242.cljs$core$IIndexed$_nth$arity$2(null,i__53324_54244);
var actual_type_54246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53453_54245,(0),null);
var factory_54247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53453_54245,(1),null);
var canonical_f_54248 = (function (){var G__53459 = (factory_54247.cljs$core$IFn$_invoke$arity$1 ? factory_54247.cljs$core$IFn$_invoke$arity$1(f_54240) : factory_54247.call(null,f_54240));
var fexpr__53458 = (cljs.core.truth_(selector_54191)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_54190,selector_54191):cljs.core.identity);
return (fexpr__53458.cljs$core$IFn$_invoke$arity$1 ? fexpr__53458.cljs$core$IFn$_invoke$arity$1(G__53459) : fexpr__53458.call(null,G__53459));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_54190,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_54191,actual_type_54246,f_54240], null),canonical_f_54248], 0));

if(cljs.core.truth_(elem_54190.addEventListener)){
elem_54190.addEventListener(cljs.core.name(actual_type_54246),canonical_f_54248);
} else {
elem_54190.attachEvent(cljs.core.name(actual_type_54246),canonical_f_54248);
}


var G__54249 = seq__53320_54241;
var G__54250 = chunk__53322_54242;
var G__54251 = count__53323_54243;
var G__54252 = (i__53324_54244 + (1));
seq__53320_54241 = G__54249;
chunk__53322_54242 = G__54250;
count__53323_54243 = G__54251;
i__53324_54244 = G__54252;
continue;
} else {
var temp__5735__auto___54253__$1 = cljs.core.seq(seq__53320_54241);
if(temp__5735__auto___54253__$1){
var seq__53320_54255__$1 = temp__5735__auto___54253__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53320_54255__$1)){
var c__4609__auto___54256 = cljs.core.chunk_first(seq__53320_54255__$1);
var G__54257 = cljs.core.chunk_rest(seq__53320_54255__$1);
var G__54258 = c__4609__auto___54256;
var G__54259 = cljs.core.count(c__4609__auto___54256);
var G__54260 = (0);
seq__53320_54241 = G__54257;
chunk__53322_54242 = G__54258;
count__53323_54243 = G__54259;
i__53324_54244 = G__54260;
continue;
} else {
var vec__53462_54261 = cljs.core.first(seq__53320_54255__$1);
var actual_type_54262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53462_54261,(0),null);
var factory_54263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53462_54261,(1),null);
var canonical_f_54264 = (function (){var G__53467 = (factory_54263.cljs$core$IFn$_invoke$arity$1 ? factory_54263.cljs$core$IFn$_invoke$arity$1(f_54240) : factory_54263.call(null,f_54240));
var fexpr__53466 = (cljs.core.truth_(selector_54191)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_54190,selector_54191):cljs.core.identity);
return (fexpr__53466.cljs$core$IFn$_invoke$arity$1 ? fexpr__53466.cljs$core$IFn$_invoke$arity$1(G__53467) : fexpr__53466.call(null,G__53467));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_54190,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_54191,actual_type_54262,f_54240], null),canonical_f_54264], 0));

if(cljs.core.truth_(elem_54190.addEventListener)){
elem_54190.addEventListener(cljs.core.name(actual_type_54262),canonical_f_54264);
} else {
elem_54190.attachEvent(cljs.core.name(actual_type_54262),canonical_f_54264);
}


var G__54265 = cljs.core.next(seq__53320_54255__$1);
var G__54266 = null;
var G__54267 = (0);
var G__54268 = (0);
seq__53320_54241 = G__54265;
chunk__53322_54242 = G__54266;
count__53323_54243 = G__54267;
i__53324_54244 = G__54268;
continue;
}
} else {
}
}
break;
}

var G__54269 = cljs.core.next(seq__53319_54232__$1);
var G__54270 = null;
var G__54271 = (0);
var G__54272 = (0);
seq__53319_54192 = G__54269;
chunk__53326_54193 = G__54270;
count__53327_54194 = G__54271;
i__53328_54195 = G__54272;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq53314){
var G__53315 = cljs.core.first(seq53314);
var seq53314__$1 = cljs.core.next(seq53314);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53315,seq53314__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54273 = arguments.length;
var i__4790__auto___54274 = (0);
while(true){
if((i__4790__auto___54274 < len__4789__auto___54273)){
args__4795__auto__.push((arguments[i__4790__auto___54274]));

var G__54275 = (i__4790__auto___54274 + (1));
i__4790__auto___54274 = G__54275;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__53473_54276 = dommy.core.elem_and_selector(elem_sel);
var elem_54277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53473_54276,(0),null);
var selector_54278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53473_54276,(1),null);
var seq__53476_54279 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__53483_54280 = null;
var count__53484_54281 = (0);
var i__53485_54282 = (0);
while(true){
if((i__53485_54282 < count__53484_54281)){
var vec__53633_54286 = chunk__53483_54280.cljs$core$IIndexed$_nth$arity$2(null,i__53485_54282);
var orig_type_54287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53633_54286,(0),null);
var f_54288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53633_54286,(1),null);
var seq__53486_54289 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_54287,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_54287,cljs.core.identity])));
var chunk__53488_54290 = null;
var count__53489_54291 = (0);
var i__53490_54292 = (0);
while(true){
if((i__53490_54292 < count__53489_54291)){
var vec__53649_54293 = chunk__53488_54290.cljs$core$IIndexed$_nth$arity$2(null,i__53490_54292);
var actual_type_54294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53649_54293,(0),null);
var __54295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53649_54293,(1),null);
var keys_54296 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_54278,actual_type_54294,f_54288], null);
var canonical_f_54297 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_54277),keys_54296);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_54277,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_54296], 0));

if(cljs.core.truth_(elem_54277.removeEventListener)){
elem_54277.removeEventListener(cljs.core.name(actual_type_54294),canonical_f_54297);
} else {
elem_54277.detachEvent(cljs.core.name(actual_type_54294),canonical_f_54297);
}


var G__54298 = seq__53486_54289;
var G__54299 = chunk__53488_54290;
var G__54300 = count__53489_54291;
var G__54301 = (i__53490_54292 + (1));
seq__53486_54289 = G__54298;
chunk__53488_54290 = G__54299;
count__53489_54291 = G__54300;
i__53490_54292 = G__54301;
continue;
} else {
var temp__5735__auto___54302 = cljs.core.seq(seq__53486_54289);
if(temp__5735__auto___54302){
var seq__53486_54303__$1 = temp__5735__auto___54302;
if(cljs.core.chunked_seq_QMARK_(seq__53486_54303__$1)){
var c__4609__auto___54304 = cljs.core.chunk_first(seq__53486_54303__$1);
var G__54305 = cljs.core.chunk_rest(seq__53486_54303__$1);
var G__54306 = c__4609__auto___54304;
var G__54307 = cljs.core.count(c__4609__auto___54304);
var G__54308 = (0);
seq__53486_54289 = G__54305;
chunk__53488_54290 = G__54306;
count__53489_54291 = G__54307;
i__53490_54292 = G__54308;
continue;
} else {
var vec__53656_54309 = cljs.core.first(seq__53486_54303__$1);
var actual_type_54310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53656_54309,(0),null);
var __54311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53656_54309,(1),null);
var keys_54312 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_54278,actual_type_54310,f_54288], null);
var canonical_f_54313 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_54277),keys_54312);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_54277,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_54312], 0));

if(cljs.core.truth_(elem_54277.removeEventListener)){
elem_54277.removeEventListener(cljs.core.name(actual_type_54310),canonical_f_54313);
} else {
elem_54277.detachEvent(cljs.core.name(actual_type_54310),canonical_f_54313);
}


var G__54314 = cljs.core.next(seq__53486_54303__$1);
var G__54315 = null;
var G__54316 = (0);
var G__54317 = (0);
seq__53486_54289 = G__54314;
chunk__53488_54290 = G__54315;
count__53489_54291 = G__54316;
i__53490_54292 = G__54317;
continue;
}
} else {
}
}
break;
}

var G__54318 = seq__53476_54279;
var G__54319 = chunk__53483_54280;
var G__54320 = count__53484_54281;
var G__54321 = (i__53485_54282 + (1));
seq__53476_54279 = G__54318;
chunk__53483_54280 = G__54319;
count__53484_54281 = G__54320;
i__53485_54282 = G__54321;
continue;
} else {
var temp__5735__auto___54322 = cljs.core.seq(seq__53476_54279);
if(temp__5735__auto___54322){
var seq__53476_54323__$1 = temp__5735__auto___54322;
if(cljs.core.chunked_seq_QMARK_(seq__53476_54323__$1)){
var c__4609__auto___54324 = cljs.core.chunk_first(seq__53476_54323__$1);
var G__54325 = cljs.core.chunk_rest(seq__53476_54323__$1);
var G__54326 = c__4609__auto___54324;
var G__54327 = cljs.core.count(c__4609__auto___54324);
var G__54328 = (0);
seq__53476_54279 = G__54325;
chunk__53483_54280 = G__54326;
count__53484_54281 = G__54327;
i__53485_54282 = G__54328;
continue;
} else {
var vec__53666_54329 = cljs.core.first(seq__53476_54323__$1);
var orig_type_54330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53666_54329,(0),null);
var f_54331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53666_54329,(1),null);
var seq__53477_54332 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_54330,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_54330,cljs.core.identity])));
var chunk__53479_54333 = null;
var count__53480_54334 = (0);
var i__53481_54335 = (0);
while(true){
if((i__53481_54335 < count__53480_54334)){
var vec__53683_54336 = chunk__53479_54333.cljs$core$IIndexed$_nth$arity$2(null,i__53481_54335);
var actual_type_54337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53683_54336,(0),null);
var __54338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53683_54336,(1),null);
var keys_54339 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_54278,actual_type_54337,f_54331], null);
var canonical_f_54340 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_54277),keys_54339);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_54277,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_54339], 0));

if(cljs.core.truth_(elem_54277.removeEventListener)){
elem_54277.removeEventListener(cljs.core.name(actual_type_54337),canonical_f_54340);
} else {
elem_54277.detachEvent(cljs.core.name(actual_type_54337),canonical_f_54340);
}


var G__54341 = seq__53477_54332;
var G__54342 = chunk__53479_54333;
var G__54343 = count__53480_54334;
var G__54344 = (i__53481_54335 + (1));
seq__53477_54332 = G__54341;
chunk__53479_54333 = G__54342;
count__53480_54334 = G__54343;
i__53481_54335 = G__54344;
continue;
} else {
var temp__5735__auto___54345__$1 = cljs.core.seq(seq__53477_54332);
if(temp__5735__auto___54345__$1){
var seq__53477_54346__$1 = temp__5735__auto___54345__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53477_54346__$1)){
var c__4609__auto___54347 = cljs.core.chunk_first(seq__53477_54346__$1);
var G__54348 = cljs.core.chunk_rest(seq__53477_54346__$1);
var G__54349 = c__4609__auto___54347;
var G__54350 = cljs.core.count(c__4609__auto___54347);
var G__54351 = (0);
seq__53477_54332 = G__54348;
chunk__53479_54333 = G__54349;
count__53480_54334 = G__54350;
i__53481_54335 = G__54351;
continue;
} else {
var vec__53687_54352 = cljs.core.first(seq__53477_54346__$1);
var actual_type_54353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53687_54352,(0),null);
var __54354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53687_54352,(1),null);
var keys_54355 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_54278,actual_type_54353,f_54331], null);
var canonical_f_54356 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_54277),keys_54355);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_54277,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_54355], 0));

if(cljs.core.truth_(elem_54277.removeEventListener)){
elem_54277.removeEventListener(cljs.core.name(actual_type_54353),canonical_f_54356);
} else {
elem_54277.detachEvent(cljs.core.name(actual_type_54353),canonical_f_54356);
}


var G__54357 = cljs.core.next(seq__53477_54346__$1);
var G__54358 = null;
var G__54359 = (0);
var G__54360 = (0);
seq__53477_54332 = G__54357;
chunk__53479_54333 = G__54358;
count__53480_54334 = G__54359;
i__53481_54335 = G__54360;
continue;
}
} else {
}
}
break;
}

var G__54361 = cljs.core.next(seq__53476_54323__$1);
var G__54362 = null;
var G__54363 = (0);
var G__54364 = (0);
seq__53476_54279 = G__54361;
chunk__53483_54280 = G__54362;
count__53484_54281 = G__54363;
i__53485_54282 = G__54364;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq53471){
var G__53472 = cljs.core.first(seq53471);
var seq53471__$1 = cljs.core.next(seq53471);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53472,seq53471__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54365 = arguments.length;
var i__4790__auto___54366 = (0);
while(true){
if((i__4790__auto___54366 < len__4789__auto___54365)){
args__4795__auto__.push((arguments[i__4790__auto___54366]));

var G__54367 = (i__4790__auto___54366 + (1));
i__4790__auto___54366 = G__54367;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__53695_54368 = dommy.core.elem_and_selector(elem_sel);
var elem_54369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53695_54368,(0),null);
var selector_54370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53695_54368,(1),null);
var seq__53698_54371 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__53699_54372 = null;
var count__53700_54373 = (0);
var i__53701_54374 = (0);
while(true){
if((i__53701_54374 < count__53700_54373)){
var vec__53711_54375 = chunk__53699_54372.cljs$core$IIndexed$_nth$arity$2(null,i__53701_54374);
var type_54376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53711_54375,(0),null);
var f_54377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53711_54375,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_54376,((function (seq__53698_54371,chunk__53699_54372,count__53700_54373,i__53701_54374,vec__53711_54375,type_54376,f_54377,vec__53695_54368,elem_54369,selector_54370){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_54376,dommy$core$this_fn], 0));

return (f_54377.cljs$core$IFn$_invoke$arity$1 ? f_54377.cljs$core$IFn$_invoke$arity$1(e) : f_54377.call(null,e));
});})(seq__53698_54371,chunk__53699_54372,count__53700_54373,i__53701_54374,vec__53711_54375,type_54376,f_54377,vec__53695_54368,elem_54369,selector_54370))
], 0));


var G__54378 = seq__53698_54371;
var G__54379 = chunk__53699_54372;
var G__54380 = count__53700_54373;
var G__54381 = (i__53701_54374 + (1));
seq__53698_54371 = G__54378;
chunk__53699_54372 = G__54379;
count__53700_54373 = G__54380;
i__53701_54374 = G__54381;
continue;
} else {
var temp__5735__auto___54382 = cljs.core.seq(seq__53698_54371);
if(temp__5735__auto___54382){
var seq__53698_54383__$1 = temp__5735__auto___54382;
if(cljs.core.chunked_seq_QMARK_(seq__53698_54383__$1)){
var c__4609__auto___54384 = cljs.core.chunk_first(seq__53698_54383__$1);
var G__54385 = cljs.core.chunk_rest(seq__53698_54383__$1);
var G__54386 = c__4609__auto___54384;
var G__54387 = cljs.core.count(c__4609__auto___54384);
var G__54388 = (0);
seq__53698_54371 = G__54385;
chunk__53699_54372 = G__54386;
count__53700_54373 = G__54387;
i__53701_54374 = G__54388;
continue;
} else {
var vec__53714_54389 = cljs.core.first(seq__53698_54383__$1);
var type_54390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53714_54389,(0),null);
var f_54391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53714_54389,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_54390,((function (seq__53698_54371,chunk__53699_54372,count__53700_54373,i__53701_54374,vec__53714_54389,type_54390,f_54391,seq__53698_54383__$1,temp__5735__auto___54382,vec__53695_54368,elem_54369,selector_54370){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_54390,dommy$core$this_fn], 0));

return (f_54391.cljs$core$IFn$_invoke$arity$1 ? f_54391.cljs$core$IFn$_invoke$arity$1(e) : f_54391.call(null,e));
});})(seq__53698_54371,chunk__53699_54372,count__53700_54373,i__53701_54374,vec__53714_54389,type_54390,f_54391,seq__53698_54383__$1,temp__5735__auto___54382,vec__53695_54368,elem_54369,selector_54370))
], 0));


var G__54392 = cljs.core.next(seq__53698_54383__$1);
var G__54393 = null;
var G__54394 = (0);
var G__54395 = (0);
seq__53698_54371 = G__54392;
chunk__53699_54372 = G__54393;
count__53700_54373 = G__54394;
i__53701_54374 = G__54395;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq53693){
var G__53694 = cljs.core.first(seq53693);
var seq53693__$1 = cljs.core.next(seq53693);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53694,seq53693__$1);
}));


//# sourceMappingURL=dommy.core.js.map
