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
var G__56021 = arguments.length;
switch (G__56021) {
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
var G__56023 = arguments.length;
switch (G__56023) {
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
var G__56026 = arguments.length;
switch (G__56026) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__56024_SHARP_){
return (!((p1__56024_SHARP_ === base)));
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
var len__4789__auto___56390 = arguments.length;
var i__4790__auto___56391 = (0);
while(true){
if((i__4790__auto___56391 < len__4789__auto___56390)){
args__4795__auto__.push((arguments[i__4790__auto___56391]));

var G__56392 = (i__4790__auto___56391 + (1));
i__4790__auto___56391 = G__56392;
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
var seq__56029_56393 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__56030_56394 = null;
var count__56031_56395 = (0);
var i__56032_56396 = (0);
while(true){
if((i__56032_56396 < count__56031_56395)){
var vec__56039_56397 = chunk__56030_56394.cljs$core$IIndexed$_nth$arity$2(null,i__56032_56396);
var k_56398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56039_56397,(0),null);
var v_56399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56039_56397,(1),null);
style.setProperty(dommy.utils.as_str(k_56398),v_56399);


var G__56401 = seq__56029_56393;
var G__56402 = chunk__56030_56394;
var G__56403 = count__56031_56395;
var G__56404 = (i__56032_56396 + (1));
seq__56029_56393 = G__56401;
chunk__56030_56394 = G__56402;
count__56031_56395 = G__56403;
i__56032_56396 = G__56404;
continue;
} else {
var temp__5735__auto___56405 = cljs.core.seq(seq__56029_56393);
if(temp__5735__auto___56405){
var seq__56029_56406__$1 = temp__5735__auto___56405;
if(cljs.core.chunked_seq_QMARK_(seq__56029_56406__$1)){
var c__4609__auto___56407 = cljs.core.chunk_first(seq__56029_56406__$1);
var G__56408 = cljs.core.chunk_rest(seq__56029_56406__$1);
var G__56409 = c__4609__auto___56407;
var G__56410 = cljs.core.count(c__4609__auto___56407);
var G__56411 = (0);
seq__56029_56393 = G__56408;
chunk__56030_56394 = G__56409;
count__56031_56395 = G__56410;
i__56032_56396 = G__56411;
continue;
} else {
var vec__56042_56412 = cljs.core.first(seq__56029_56406__$1);
var k_56413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56042_56412,(0),null);
var v_56414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56042_56412,(1),null);
style.setProperty(dommy.utils.as_str(k_56413),v_56414);


var G__56415 = cljs.core.next(seq__56029_56406__$1);
var G__56416 = null;
var G__56417 = (0);
var G__56418 = (0);
seq__56029_56393 = G__56415;
chunk__56030_56394 = G__56416;
count__56031_56395 = G__56417;
i__56032_56396 = G__56418;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq56027){
var G__56028 = cljs.core.first(seq56027);
var seq56027__$1 = cljs.core.next(seq56027);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56028,seq56027__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56422 = arguments.length;
var i__4790__auto___56424 = (0);
while(true){
if((i__4790__auto___56424 < len__4789__auto___56422)){
args__4795__auto__.push((arguments[i__4790__auto___56424]));

var G__56425 = (i__4790__auto___56424 + (1));
i__4790__auto___56424 = G__56425;
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
var seq__56047_56426 = cljs.core.seq(keywords);
var chunk__56048_56427 = null;
var count__56049_56428 = (0);
var i__56050_56429 = (0);
while(true){
if((i__56050_56429 < count__56049_56428)){
var kw_56430 = chunk__56048_56427.cljs$core$IIndexed$_nth$arity$2(null,i__56050_56429);
style.removeProperty(dommy.utils.as_str(kw_56430));


var G__56431 = seq__56047_56426;
var G__56432 = chunk__56048_56427;
var G__56433 = count__56049_56428;
var G__56434 = (i__56050_56429 + (1));
seq__56047_56426 = G__56431;
chunk__56048_56427 = G__56432;
count__56049_56428 = G__56433;
i__56050_56429 = G__56434;
continue;
} else {
var temp__5735__auto___56435 = cljs.core.seq(seq__56047_56426);
if(temp__5735__auto___56435){
var seq__56047_56436__$1 = temp__5735__auto___56435;
if(cljs.core.chunked_seq_QMARK_(seq__56047_56436__$1)){
var c__4609__auto___56437 = cljs.core.chunk_first(seq__56047_56436__$1);
var G__56439 = cljs.core.chunk_rest(seq__56047_56436__$1);
var G__56440 = c__4609__auto___56437;
var G__56441 = cljs.core.count(c__4609__auto___56437);
var G__56442 = (0);
seq__56047_56426 = G__56439;
chunk__56048_56427 = G__56440;
count__56049_56428 = G__56441;
i__56050_56429 = G__56442;
continue;
} else {
var kw_56443 = cljs.core.first(seq__56047_56436__$1);
style.removeProperty(dommy.utils.as_str(kw_56443));


var G__56444 = cljs.core.next(seq__56047_56436__$1);
var G__56445 = null;
var G__56446 = (0);
var G__56447 = (0);
seq__56047_56426 = G__56444;
chunk__56048_56427 = G__56445;
count__56049_56428 = G__56446;
i__56050_56429 = G__56447;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq56045){
var G__56046 = cljs.core.first(seq56045);
var seq56045__$1 = cljs.core.next(seq56045);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56046,seq56045__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56450 = arguments.length;
var i__4790__auto___56451 = (0);
while(true){
if((i__4790__auto___56451 < len__4789__auto___56450)){
args__4795__auto__.push((arguments[i__4790__auto___56451]));

var G__56452 = (i__4790__auto___56451 + (1));
i__4790__auto___56451 = G__56452;
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

var seq__56053_56453 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__56054_56454 = null;
var count__56055_56455 = (0);
var i__56056_56456 = (0);
while(true){
if((i__56056_56456 < count__56055_56455)){
var vec__56063_56458 = chunk__56054_56454.cljs$core$IIndexed$_nth$arity$2(null,i__56056_56456);
var k_56459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56063_56458,(0),null);
var v_56460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56063_56458,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_56459,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_56460),"px"].join('')], 0));


var G__56461 = seq__56053_56453;
var G__56462 = chunk__56054_56454;
var G__56463 = count__56055_56455;
var G__56464 = (i__56056_56456 + (1));
seq__56053_56453 = G__56461;
chunk__56054_56454 = G__56462;
count__56055_56455 = G__56463;
i__56056_56456 = G__56464;
continue;
} else {
var temp__5735__auto___56465 = cljs.core.seq(seq__56053_56453);
if(temp__5735__auto___56465){
var seq__56053_56466__$1 = temp__5735__auto___56465;
if(cljs.core.chunked_seq_QMARK_(seq__56053_56466__$1)){
var c__4609__auto___56468 = cljs.core.chunk_first(seq__56053_56466__$1);
var G__56469 = cljs.core.chunk_rest(seq__56053_56466__$1);
var G__56471 = c__4609__auto___56468;
var G__56473 = cljs.core.count(c__4609__auto___56468);
var G__56474 = (0);
seq__56053_56453 = G__56469;
chunk__56054_56454 = G__56471;
count__56055_56455 = G__56473;
i__56056_56456 = G__56474;
continue;
} else {
var vec__56066_56475 = cljs.core.first(seq__56053_56466__$1);
var k_56476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56066_56475,(0),null);
var v_56477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56066_56475,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_56476,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_56477),"px"].join('')], 0));


var G__56478 = cljs.core.next(seq__56053_56466__$1);
var G__56479 = null;
var G__56480 = (0);
var G__56481 = (0);
seq__56053_56453 = G__56478;
chunk__56054_56454 = G__56479;
count__56055_56455 = G__56480;
i__56056_56456 = G__56481;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq56051){
var G__56052 = cljs.core.first(seq56051);
var seq56051__$1 = cljs.core.next(seq56051);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56052,seq56051__$1);
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
var G__56074 = arguments.length;
switch (G__56074) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___56483 = arguments.length;
var i__4790__auto___56484 = (0);
while(true){
if((i__4790__auto___56484 < len__4789__auto___56483)){
args_arr__4810__auto__.push((arguments[i__4790__auto___56484]));

var G__56485 = (i__4790__auto___56484 + (1));
i__4790__auto___56484 = G__56485;
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
var G__56075 = elem;
(G__56075[k__$1] = v);

return G__56075;
} else {
var G__56076 = elem;
G__56076.setAttribute(k__$1,v);

return G__56076;
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

var seq__56077_56487 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__56078_56488 = null;
var count__56079_56489 = (0);
var i__56080_56490 = (0);
while(true){
if((i__56080_56490 < count__56079_56489)){
var vec__56087_56491 = chunk__56078_56488.cljs$core$IIndexed$_nth$arity$2(null,i__56080_56490);
var k_56492__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56087_56491,(0),null);
var v_56493__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56087_56491,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_56492__$1,v_56493__$1);


var G__56494 = seq__56077_56487;
var G__56495 = chunk__56078_56488;
var G__56496 = count__56079_56489;
var G__56497 = (i__56080_56490 + (1));
seq__56077_56487 = G__56494;
chunk__56078_56488 = G__56495;
count__56079_56489 = G__56496;
i__56080_56490 = G__56497;
continue;
} else {
var temp__5735__auto___56498 = cljs.core.seq(seq__56077_56487);
if(temp__5735__auto___56498){
var seq__56077_56499__$1 = temp__5735__auto___56498;
if(cljs.core.chunked_seq_QMARK_(seq__56077_56499__$1)){
var c__4609__auto___56500 = cljs.core.chunk_first(seq__56077_56499__$1);
var G__56501 = cljs.core.chunk_rest(seq__56077_56499__$1);
var G__56502 = c__4609__auto___56500;
var G__56503 = cljs.core.count(c__4609__auto___56500);
var G__56504 = (0);
seq__56077_56487 = G__56501;
chunk__56078_56488 = G__56502;
count__56079_56489 = G__56503;
i__56080_56490 = G__56504;
continue;
} else {
var vec__56090_56505 = cljs.core.first(seq__56077_56499__$1);
var k_56506__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56090_56505,(0),null);
var v_56507__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56090_56505,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_56506__$1,v_56507__$1);


var G__56508 = cljs.core.next(seq__56077_56499__$1);
var G__56509 = null;
var G__56510 = (0);
var G__56511 = (0);
seq__56077_56487 = G__56508;
chunk__56078_56488 = G__56509;
count__56079_56489 = G__56510;
i__56080_56490 = G__56511;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq56070){
var G__56071 = cljs.core.first(seq56070);
var seq56070__$1 = cljs.core.next(seq56070);
var G__56072 = cljs.core.first(seq56070__$1);
var seq56070__$2 = cljs.core.next(seq56070__$1);
var G__56073 = cljs.core.first(seq56070__$2);
var seq56070__$3 = cljs.core.next(seq56070__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56071,G__56072,G__56073,seq56070__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__56097 = arguments.length;
switch (G__56097) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___56516 = arguments.length;
var i__4790__auto___56517 = (0);
while(true){
if((i__4790__auto___56517 < len__4789__auto___56516)){
args_arr__4810__auto__.push((arguments[i__4790__auto___56517]));

var G__56518 = (i__4790__auto___56517 + (1));
i__4790__auto___56517 = G__56518;
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
var k_56519__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__56098 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__56098.cljs$core$IFn$_invoke$arity$1 ? fexpr__56098.cljs$core$IFn$_invoke$arity$1(k_56519__$1) : fexpr__56098.call(null,k_56519__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_56519__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__56099_56520 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__56100_56521 = null;
var count__56101_56522 = (0);
var i__56102_56523 = (0);
while(true){
if((i__56102_56523 < count__56101_56522)){
var k_56524__$1 = chunk__56100_56521.cljs$core$IIndexed$_nth$arity$2(null,i__56102_56523);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_56524__$1);


var G__56525 = seq__56099_56520;
var G__56526 = chunk__56100_56521;
var G__56527 = count__56101_56522;
var G__56528 = (i__56102_56523 + (1));
seq__56099_56520 = G__56525;
chunk__56100_56521 = G__56526;
count__56101_56522 = G__56527;
i__56102_56523 = G__56528;
continue;
} else {
var temp__5735__auto___56529 = cljs.core.seq(seq__56099_56520);
if(temp__5735__auto___56529){
var seq__56099_56530__$1 = temp__5735__auto___56529;
if(cljs.core.chunked_seq_QMARK_(seq__56099_56530__$1)){
var c__4609__auto___56531 = cljs.core.chunk_first(seq__56099_56530__$1);
var G__56532 = cljs.core.chunk_rest(seq__56099_56530__$1);
var G__56533 = c__4609__auto___56531;
var G__56534 = cljs.core.count(c__4609__auto___56531);
var G__56535 = (0);
seq__56099_56520 = G__56532;
chunk__56100_56521 = G__56533;
count__56101_56522 = G__56534;
i__56102_56523 = G__56535;
continue;
} else {
var k_56536__$1 = cljs.core.first(seq__56099_56530__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_56536__$1);


var G__56537 = cljs.core.next(seq__56099_56530__$1);
var G__56538 = null;
var G__56539 = (0);
var G__56540 = (0);
seq__56099_56520 = G__56537;
chunk__56100_56521 = G__56538;
count__56101_56522 = G__56539;
i__56102_56523 = G__56540;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq56094){
var G__56095 = cljs.core.first(seq56094);
var seq56094__$1 = cljs.core.next(seq56094);
var G__56096 = cljs.core.first(seq56094__$1);
var seq56094__$2 = cljs.core.next(seq56094__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56095,G__56096,seq56094__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__56104 = arguments.length;
switch (G__56104) {
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
var G__56109 = arguments.length;
switch (G__56109) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___56543 = arguments.length;
var i__4790__auto___56544 = (0);
while(true){
if((i__4790__auto___56544 < len__4789__auto___56543)){
args_arr__4810__auto__.push((arguments[i__4790__auto___56544]));

var G__56545 = (i__4790__auto___56544 + (1));
i__4790__auto___56544 = G__56545;
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
var temp__5733__auto___56546 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___56546)){
var class_list_56547 = temp__5733__auto___56546;
var seq__56110_56548 = cljs.core.seq(classes__$1);
var chunk__56111_56549 = null;
var count__56112_56550 = (0);
var i__56113_56551 = (0);
while(true){
if((i__56113_56551 < count__56112_56550)){
var c_56552 = chunk__56111_56549.cljs$core$IIndexed$_nth$arity$2(null,i__56113_56551);
class_list_56547.add(c_56552);


var G__56553 = seq__56110_56548;
var G__56554 = chunk__56111_56549;
var G__56555 = count__56112_56550;
var G__56556 = (i__56113_56551 + (1));
seq__56110_56548 = G__56553;
chunk__56111_56549 = G__56554;
count__56112_56550 = G__56555;
i__56113_56551 = G__56556;
continue;
} else {
var temp__5735__auto___56557 = cljs.core.seq(seq__56110_56548);
if(temp__5735__auto___56557){
var seq__56110_56558__$1 = temp__5735__auto___56557;
if(cljs.core.chunked_seq_QMARK_(seq__56110_56558__$1)){
var c__4609__auto___56559 = cljs.core.chunk_first(seq__56110_56558__$1);
var G__56560 = cljs.core.chunk_rest(seq__56110_56558__$1);
var G__56561 = c__4609__auto___56559;
var G__56562 = cljs.core.count(c__4609__auto___56559);
var G__56563 = (0);
seq__56110_56548 = G__56560;
chunk__56111_56549 = G__56561;
count__56112_56550 = G__56562;
i__56113_56551 = G__56563;
continue;
} else {
var c_56564 = cljs.core.first(seq__56110_56558__$1);
class_list_56547.add(c_56564);


var G__56569 = cljs.core.next(seq__56110_56558__$1);
var G__56570 = null;
var G__56571 = (0);
var G__56572 = (0);
seq__56110_56548 = G__56569;
chunk__56111_56549 = G__56570;
count__56112_56550 = G__56571;
i__56113_56551 = G__56572;
continue;
}
} else {
}
}
break;
}
} else {
var seq__56114_56573 = cljs.core.seq(classes__$1);
var chunk__56115_56574 = null;
var count__56116_56575 = (0);
var i__56117_56576 = (0);
while(true){
if((i__56117_56576 < count__56116_56575)){
var c_56581 = chunk__56115_56574.cljs$core$IIndexed$_nth$arity$2(null,i__56117_56576);
var class_name_56582 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_56582,c_56581))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_56582 === ""))?c_56581:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_56582)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_56581)].join('')));
}


var G__56587 = seq__56114_56573;
var G__56588 = chunk__56115_56574;
var G__56589 = count__56116_56575;
var G__56590 = (i__56117_56576 + (1));
seq__56114_56573 = G__56587;
chunk__56115_56574 = G__56588;
count__56116_56575 = G__56589;
i__56117_56576 = G__56590;
continue;
} else {
var temp__5735__auto___56591 = cljs.core.seq(seq__56114_56573);
if(temp__5735__auto___56591){
var seq__56114_56592__$1 = temp__5735__auto___56591;
if(cljs.core.chunked_seq_QMARK_(seq__56114_56592__$1)){
var c__4609__auto___56593 = cljs.core.chunk_first(seq__56114_56592__$1);
var G__56594 = cljs.core.chunk_rest(seq__56114_56592__$1);
var G__56595 = c__4609__auto___56593;
var G__56596 = cljs.core.count(c__4609__auto___56593);
var G__56597 = (0);
seq__56114_56573 = G__56594;
chunk__56115_56574 = G__56595;
count__56116_56575 = G__56596;
i__56117_56576 = G__56597;
continue;
} else {
var c_56598 = cljs.core.first(seq__56114_56592__$1);
var class_name_56599 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_56599,c_56598))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_56599 === ""))?c_56598:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_56599)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_56598)].join('')));
}


var G__56600 = cljs.core.next(seq__56114_56592__$1);
var G__56601 = null;
var G__56602 = (0);
var G__56603 = (0);
seq__56114_56573 = G__56600;
chunk__56115_56574 = G__56601;
count__56116_56575 = G__56602;
i__56117_56576 = G__56603;
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
var seq__56118_56604 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__56119_56605 = null;
var count__56120_56606 = (0);
var i__56121_56607 = (0);
while(true){
if((i__56121_56607 < count__56120_56606)){
var c_56608 = chunk__56119_56605.cljs$core$IIndexed$_nth$arity$2(null,i__56121_56607);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_56608);


var G__56610 = seq__56118_56604;
var G__56611 = chunk__56119_56605;
var G__56612 = count__56120_56606;
var G__56613 = (i__56121_56607 + (1));
seq__56118_56604 = G__56610;
chunk__56119_56605 = G__56611;
count__56120_56606 = G__56612;
i__56121_56607 = G__56613;
continue;
} else {
var temp__5735__auto___56614 = cljs.core.seq(seq__56118_56604);
if(temp__5735__auto___56614){
var seq__56118_56615__$1 = temp__5735__auto___56614;
if(cljs.core.chunked_seq_QMARK_(seq__56118_56615__$1)){
var c__4609__auto___56616 = cljs.core.chunk_first(seq__56118_56615__$1);
var G__56617 = cljs.core.chunk_rest(seq__56118_56615__$1);
var G__56618 = c__4609__auto___56616;
var G__56619 = cljs.core.count(c__4609__auto___56616);
var G__56620 = (0);
seq__56118_56604 = G__56617;
chunk__56119_56605 = G__56618;
count__56120_56606 = G__56619;
i__56121_56607 = G__56620;
continue;
} else {
var c_56621 = cljs.core.first(seq__56118_56615__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_56621);


var G__56623 = cljs.core.next(seq__56118_56615__$1);
var G__56624 = null;
var G__56625 = (0);
var G__56626 = (0);
seq__56118_56604 = G__56623;
chunk__56119_56605 = G__56624;
count__56120_56606 = G__56625;
i__56121_56607 = G__56626;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq56106){
var G__56107 = cljs.core.first(seq56106);
var seq56106__$1 = cljs.core.next(seq56106);
var G__56108 = cljs.core.first(seq56106__$1);
var seq56106__$2 = cljs.core.next(seq56106__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56107,G__56108,seq56106__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__56126 = arguments.length;
switch (G__56126) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___56628 = arguments.length;
var i__4790__auto___56629 = (0);
while(true){
if((i__4790__auto___56629 < len__4789__auto___56628)){
args_arr__4810__auto__.push((arguments[i__4790__auto___56629]));

var G__56631 = (i__4790__auto___56629 + (1));
i__4790__auto___56629 = G__56631;
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
var temp__5733__auto___56636 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___56636)){
var class_list_56637 = temp__5733__auto___56636;
class_list_56637.remove(c__$1);
} else {
var class_name_56638 = dommy.core.class$(elem);
var new_class_name_56639 = dommy.utils.remove_class_str(class_name_56638,c__$1);
if((class_name_56638 === new_class_name_56639)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_56639);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__56127 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__56128 = null;
var count__56129 = (0);
var i__56130 = (0);
while(true){
if((i__56130 < count__56129)){
var c = chunk__56128.cljs$core$IIndexed$_nth$arity$2(null,i__56130);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__56641 = seq__56127;
var G__56642 = chunk__56128;
var G__56643 = count__56129;
var G__56644 = (i__56130 + (1));
seq__56127 = G__56641;
chunk__56128 = G__56642;
count__56129 = G__56643;
i__56130 = G__56644;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56127);
if(temp__5735__auto__){
var seq__56127__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56127__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__56127__$1);
var G__56649 = cljs.core.chunk_rest(seq__56127__$1);
var G__56650 = c__4609__auto__;
var G__56651 = cljs.core.count(c__4609__auto__);
var G__56652 = (0);
seq__56127 = G__56649;
chunk__56128 = G__56650;
count__56129 = G__56651;
i__56130 = G__56652;
continue;
} else {
var c = cljs.core.first(seq__56127__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__56655 = cljs.core.next(seq__56127__$1);
var G__56656 = null;
var G__56657 = (0);
var G__56658 = (0);
seq__56127 = G__56655;
chunk__56128 = G__56656;
count__56129 = G__56657;
i__56130 = G__56658;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq56123){
var G__56124 = cljs.core.first(seq56123);
var seq56123__$1 = cljs.core.next(seq56123);
var G__56125 = cljs.core.first(seq56123__$1);
var seq56123__$2 = cljs.core.next(seq56123__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56124,G__56125,seq56123__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__56132 = arguments.length;
switch (G__56132) {
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
var temp__5733__auto___56662 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___56662)){
var class_list_56663 = temp__5733__auto___56662;
class_list_56663.toggle(c__$1);
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
var G__56134 = arguments.length;
switch (G__56134) {
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
var G__56136 = arguments.length;
switch (G__56136) {
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
var G__56141 = arguments.length;
switch (G__56141) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___56672 = arguments.length;
var i__4790__auto___56673 = (0);
while(true){
if((i__4790__auto___56673 < len__4789__auto___56672)){
args_arr__4810__auto__.push((arguments[i__4790__auto___56673]));

var G__56674 = (i__4790__auto___56673 + (1));
i__4790__auto___56673 = G__56674;
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
var G__56142 = parent;
G__56142.appendChild(child);

return G__56142;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__56143_56675 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__56144_56676 = null;
var count__56145_56677 = (0);
var i__56146_56678 = (0);
while(true){
if((i__56146_56678 < count__56145_56677)){
var c_56679 = chunk__56144_56676.cljs$core$IIndexed$_nth$arity$2(null,i__56146_56678);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_56679);


var G__56680 = seq__56143_56675;
var G__56681 = chunk__56144_56676;
var G__56682 = count__56145_56677;
var G__56683 = (i__56146_56678 + (1));
seq__56143_56675 = G__56680;
chunk__56144_56676 = G__56681;
count__56145_56677 = G__56682;
i__56146_56678 = G__56683;
continue;
} else {
var temp__5735__auto___56684 = cljs.core.seq(seq__56143_56675);
if(temp__5735__auto___56684){
var seq__56143_56685__$1 = temp__5735__auto___56684;
if(cljs.core.chunked_seq_QMARK_(seq__56143_56685__$1)){
var c__4609__auto___56686 = cljs.core.chunk_first(seq__56143_56685__$1);
var G__56687 = cljs.core.chunk_rest(seq__56143_56685__$1);
var G__56688 = c__4609__auto___56686;
var G__56689 = cljs.core.count(c__4609__auto___56686);
var G__56690 = (0);
seq__56143_56675 = G__56687;
chunk__56144_56676 = G__56688;
count__56145_56677 = G__56689;
i__56146_56678 = G__56690;
continue;
} else {
var c_56691 = cljs.core.first(seq__56143_56685__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_56691);


var G__56692 = cljs.core.next(seq__56143_56685__$1);
var G__56693 = null;
var G__56694 = (0);
var G__56695 = (0);
seq__56143_56675 = G__56692;
chunk__56144_56676 = G__56693;
count__56145_56677 = G__56694;
i__56146_56678 = G__56695;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq56138){
var G__56139 = cljs.core.first(seq56138);
var seq56138__$1 = cljs.core.next(seq56138);
var G__56140 = cljs.core.first(seq56138__$1);
var seq56138__$2 = cljs.core.next(seq56138__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56139,G__56140,seq56138__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__56151 = arguments.length;
switch (G__56151) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___56697 = arguments.length;
var i__4790__auto___56698 = (0);
while(true){
if((i__4790__auto___56698 < len__4789__auto___56697)){
args_arr__4810__auto__.push((arguments[i__4790__auto___56698]));

var G__56703 = (i__4790__auto___56698 + (1));
i__4790__auto___56698 = G__56703;
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
var G__56152 = parent;
G__56152.insertBefore(child,parent.firstChild);

return G__56152;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__56153_56705 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__56154_56706 = null;
var count__56155_56707 = (0);
var i__56156_56708 = (0);
while(true){
if((i__56156_56708 < count__56155_56707)){
var c_56710 = chunk__56154_56706.cljs$core$IIndexed$_nth$arity$2(null,i__56156_56708);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_56710);


var G__56711 = seq__56153_56705;
var G__56712 = chunk__56154_56706;
var G__56713 = count__56155_56707;
var G__56714 = (i__56156_56708 + (1));
seq__56153_56705 = G__56711;
chunk__56154_56706 = G__56712;
count__56155_56707 = G__56713;
i__56156_56708 = G__56714;
continue;
} else {
var temp__5735__auto___56715 = cljs.core.seq(seq__56153_56705);
if(temp__5735__auto___56715){
var seq__56153_56716__$1 = temp__5735__auto___56715;
if(cljs.core.chunked_seq_QMARK_(seq__56153_56716__$1)){
var c__4609__auto___56717 = cljs.core.chunk_first(seq__56153_56716__$1);
var G__56718 = cljs.core.chunk_rest(seq__56153_56716__$1);
var G__56719 = c__4609__auto___56717;
var G__56720 = cljs.core.count(c__4609__auto___56717);
var G__56721 = (0);
seq__56153_56705 = G__56718;
chunk__56154_56706 = G__56719;
count__56155_56707 = G__56720;
i__56156_56708 = G__56721;
continue;
} else {
var c_56722 = cljs.core.first(seq__56153_56716__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_56722);


var G__56723 = cljs.core.next(seq__56153_56716__$1);
var G__56724 = null;
var G__56725 = (0);
var G__56726 = (0);
seq__56153_56705 = G__56723;
chunk__56154_56706 = G__56724;
count__56155_56707 = G__56725;
i__56156_56708 = G__56726;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq56148){
var G__56149 = cljs.core.first(seq56148);
var seq56148__$1 = cljs.core.next(seq56148);
var G__56150 = cljs.core.first(seq56148__$1);
var seq56148__$2 = cljs.core.next(seq56148__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56149,G__56150,seq56148__$2);
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
var temp__5733__auto___56734 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___56734)){
var next_56735 = temp__5733__auto___56734;
dommy.core.insert_before_BANG_(elem,next_56735);
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
var G__56158 = arguments.length;
switch (G__56158) {
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
var G__56159 = p;
G__56159.removeChild(elem);

return G__56159;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56160){
var vec__56161 = p__56160;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56161,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56161,(1),null);
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
var len__4789__auto___56737 = arguments.length;
var i__4790__auto___56738 = (0);
while(true){
if((i__4790__auto___56738 < len__4789__auto___56737)){
args__4795__auto__.push((arguments[i__4790__auto___56738]));

var G__56740 = (i__4790__auto___56738 + (1));
i__4790__auto___56738 = G__56740;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq56164){
var G__56165 = cljs.core.first(seq56164);
var seq56164__$1 = cljs.core.next(seq56164);
var G__56166 = cljs.core.first(seq56164__$1);
var seq56164__$2 = cljs.core.next(seq56164__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56165,G__56166,seq56164__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__56167 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__56167.cljs$core$IFn$_invoke$arity$1 ? fexpr__56167.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__56167.call(null,elem_sel));
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
var len__4789__auto___56761 = arguments.length;
var i__4790__auto___56762 = (0);
while(true){
if((i__4790__auto___56762 < len__4789__auto___56761)){
args__4795__auto__.push((arguments[i__4790__auto___56762]));

var G__56763 = (i__4790__auto___56762 + (1));
i__4790__auto___56762 = G__56763;
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

var vec__56170_56767 = dommy.core.elem_and_selector(elem_sel);
var elem_56768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56170_56767,(0),null);
var selector_56769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56170_56767,(1),null);
var seq__56173_56772 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__56180_56773 = null;
var count__56181_56774 = (0);
var i__56182_56775 = (0);
while(true){
if((i__56182_56775 < count__56181_56774)){
var vec__56235_56776 = chunk__56180_56773.cljs$core$IIndexed$_nth$arity$2(null,i__56182_56775);
var orig_type_56777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56235_56776,(0),null);
var f_56778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56235_56776,(1),null);
var seq__56183_56779 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_56777,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_56777,cljs.core.identity])));
var chunk__56185_56780 = null;
var count__56186_56781 = (0);
var i__56187_56782 = (0);
while(true){
if((i__56187_56782 < count__56186_56781)){
var vec__56248_56783 = chunk__56185_56780.cljs$core$IIndexed$_nth$arity$2(null,i__56187_56782);
var actual_type_56784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56248_56783,(0),null);
var factory_56785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56248_56783,(1),null);
var canonical_f_56786 = (function (){var G__56252 = (factory_56785.cljs$core$IFn$_invoke$arity$1 ? factory_56785.cljs$core$IFn$_invoke$arity$1(f_56778) : factory_56785.call(null,f_56778));
var fexpr__56251 = (cljs.core.truth_(selector_56769)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_56768,selector_56769):cljs.core.identity);
return (fexpr__56251.cljs$core$IFn$_invoke$arity$1 ? fexpr__56251.cljs$core$IFn$_invoke$arity$1(G__56252) : fexpr__56251.call(null,G__56252));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56768,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56769,actual_type_56784,f_56778], null),canonical_f_56786], 0));

if(cljs.core.truth_(elem_56768.addEventListener)){
elem_56768.addEventListener(cljs.core.name(actual_type_56784),canonical_f_56786);
} else {
elem_56768.attachEvent(cljs.core.name(actual_type_56784),canonical_f_56786);
}


var G__56788 = seq__56183_56779;
var G__56789 = chunk__56185_56780;
var G__56790 = count__56186_56781;
var G__56791 = (i__56187_56782 + (1));
seq__56183_56779 = G__56788;
chunk__56185_56780 = G__56789;
count__56186_56781 = G__56790;
i__56187_56782 = G__56791;
continue;
} else {
var temp__5735__auto___56792 = cljs.core.seq(seq__56183_56779);
if(temp__5735__auto___56792){
var seq__56183_56793__$1 = temp__5735__auto___56792;
if(cljs.core.chunked_seq_QMARK_(seq__56183_56793__$1)){
var c__4609__auto___56794 = cljs.core.chunk_first(seq__56183_56793__$1);
var G__56795 = cljs.core.chunk_rest(seq__56183_56793__$1);
var G__56796 = c__4609__auto___56794;
var G__56797 = cljs.core.count(c__4609__auto___56794);
var G__56798 = (0);
seq__56183_56779 = G__56795;
chunk__56185_56780 = G__56796;
count__56186_56781 = G__56797;
i__56187_56782 = G__56798;
continue;
} else {
var vec__56253_56805 = cljs.core.first(seq__56183_56793__$1);
var actual_type_56806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56253_56805,(0),null);
var factory_56807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56253_56805,(1),null);
var canonical_f_56810 = (function (){var G__56257 = (factory_56807.cljs$core$IFn$_invoke$arity$1 ? factory_56807.cljs$core$IFn$_invoke$arity$1(f_56778) : factory_56807.call(null,f_56778));
var fexpr__56256 = (cljs.core.truth_(selector_56769)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_56768,selector_56769):cljs.core.identity);
return (fexpr__56256.cljs$core$IFn$_invoke$arity$1 ? fexpr__56256.cljs$core$IFn$_invoke$arity$1(G__56257) : fexpr__56256.call(null,G__56257));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56768,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56769,actual_type_56806,f_56778], null),canonical_f_56810], 0));

if(cljs.core.truth_(elem_56768.addEventListener)){
elem_56768.addEventListener(cljs.core.name(actual_type_56806),canonical_f_56810);
} else {
elem_56768.attachEvent(cljs.core.name(actual_type_56806),canonical_f_56810);
}


var G__56818 = cljs.core.next(seq__56183_56793__$1);
var G__56819 = null;
var G__56820 = (0);
var G__56821 = (0);
seq__56183_56779 = G__56818;
chunk__56185_56780 = G__56819;
count__56186_56781 = G__56820;
i__56187_56782 = G__56821;
continue;
}
} else {
}
}
break;
}

var G__56824 = seq__56173_56772;
var G__56825 = chunk__56180_56773;
var G__56826 = count__56181_56774;
var G__56827 = (i__56182_56775 + (1));
seq__56173_56772 = G__56824;
chunk__56180_56773 = G__56825;
count__56181_56774 = G__56826;
i__56182_56775 = G__56827;
continue;
} else {
var temp__5735__auto___56832 = cljs.core.seq(seq__56173_56772);
if(temp__5735__auto___56832){
var seq__56173_56834__$1 = temp__5735__auto___56832;
if(cljs.core.chunked_seq_QMARK_(seq__56173_56834__$1)){
var c__4609__auto___56835 = cljs.core.chunk_first(seq__56173_56834__$1);
var G__56837 = cljs.core.chunk_rest(seq__56173_56834__$1);
var G__56838 = c__4609__auto___56835;
var G__56839 = cljs.core.count(c__4609__auto___56835);
var G__56840 = (0);
seq__56173_56772 = G__56837;
chunk__56180_56773 = G__56838;
count__56181_56774 = G__56839;
i__56182_56775 = G__56840;
continue;
} else {
var vec__56258_56842 = cljs.core.first(seq__56173_56834__$1);
var orig_type_56843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56258_56842,(0),null);
var f_56844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56258_56842,(1),null);
var seq__56174_56849 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_56843,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_56843,cljs.core.identity])));
var chunk__56176_56850 = null;
var count__56177_56851 = (0);
var i__56178_56852 = (0);
while(true){
if((i__56178_56852 < count__56177_56851)){
var vec__56271_56855 = chunk__56176_56850.cljs$core$IIndexed$_nth$arity$2(null,i__56178_56852);
var actual_type_56856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56271_56855,(0),null);
var factory_56857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56271_56855,(1),null);
var canonical_f_56858 = (function (){var G__56275 = (factory_56857.cljs$core$IFn$_invoke$arity$1 ? factory_56857.cljs$core$IFn$_invoke$arity$1(f_56844) : factory_56857.call(null,f_56844));
var fexpr__56274 = (cljs.core.truth_(selector_56769)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_56768,selector_56769):cljs.core.identity);
return (fexpr__56274.cljs$core$IFn$_invoke$arity$1 ? fexpr__56274.cljs$core$IFn$_invoke$arity$1(G__56275) : fexpr__56274.call(null,G__56275));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56768,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56769,actual_type_56856,f_56844], null),canonical_f_56858], 0));

if(cljs.core.truth_(elem_56768.addEventListener)){
elem_56768.addEventListener(cljs.core.name(actual_type_56856),canonical_f_56858);
} else {
elem_56768.attachEvent(cljs.core.name(actual_type_56856),canonical_f_56858);
}


var G__56859 = seq__56174_56849;
var G__56860 = chunk__56176_56850;
var G__56861 = count__56177_56851;
var G__56862 = (i__56178_56852 + (1));
seq__56174_56849 = G__56859;
chunk__56176_56850 = G__56860;
count__56177_56851 = G__56861;
i__56178_56852 = G__56862;
continue;
} else {
var temp__5735__auto___56863__$1 = cljs.core.seq(seq__56174_56849);
if(temp__5735__auto___56863__$1){
var seq__56174_56864__$1 = temp__5735__auto___56863__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56174_56864__$1)){
var c__4609__auto___56865 = cljs.core.chunk_first(seq__56174_56864__$1);
var G__56866 = cljs.core.chunk_rest(seq__56174_56864__$1);
var G__56867 = c__4609__auto___56865;
var G__56868 = cljs.core.count(c__4609__auto___56865);
var G__56869 = (0);
seq__56174_56849 = G__56866;
chunk__56176_56850 = G__56867;
count__56177_56851 = G__56868;
i__56178_56852 = G__56869;
continue;
} else {
var vec__56276_56870 = cljs.core.first(seq__56174_56864__$1);
var actual_type_56871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56276_56870,(0),null);
var factory_56872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56276_56870,(1),null);
var canonical_f_56873 = (function (){var G__56280 = (factory_56872.cljs$core$IFn$_invoke$arity$1 ? factory_56872.cljs$core$IFn$_invoke$arity$1(f_56844) : factory_56872.call(null,f_56844));
var fexpr__56279 = (cljs.core.truth_(selector_56769)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_56768,selector_56769):cljs.core.identity);
return (fexpr__56279.cljs$core$IFn$_invoke$arity$1 ? fexpr__56279.cljs$core$IFn$_invoke$arity$1(G__56280) : fexpr__56279.call(null,G__56280));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56768,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56769,actual_type_56871,f_56844], null),canonical_f_56873], 0));

if(cljs.core.truth_(elem_56768.addEventListener)){
elem_56768.addEventListener(cljs.core.name(actual_type_56871),canonical_f_56873);
} else {
elem_56768.attachEvent(cljs.core.name(actual_type_56871),canonical_f_56873);
}


var G__56874 = cljs.core.next(seq__56174_56864__$1);
var G__56875 = null;
var G__56876 = (0);
var G__56877 = (0);
seq__56174_56849 = G__56874;
chunk__56176_56850 = G__56875;
count__56177_56851 = G__56876;
i__56178_56852 = G__56877;
continue;
}
} else {
}
}
break;
}

var G__56878 = cljs.core.next(seq__56173_56834__$1);
var G__56879 = null;
var G__56880 = (0);
var G__56881 = (0);
seq__56173_56772 = G__56878;
chunk__56180_56773 = G__56879;
count__56181_56774 = G__56880;
i__56182_56775 = G__56881;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq56168){
var G__56169 = cljs.core.first(seq56168);
var seq56168__$1 = cljs.core.next(seq56168);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56169,seq56168__$1);
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
var len__4789__auto___56882 = arguments.length;
var i__4790__auto___56883 = (0);
while(true){
if((i__4790__auto___56883 < len__4789__auto___56882)){
args__4795__auto__.push((arguments[i__4790__auto___56883]));

var G__56884 = (i__4790__auto___56883 + (1));
i__4790__auto___56883 = G__56884;
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

var vec__56283_56885 = dommy.core.elem_and_selector(elem_sel);
var elem_56886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56283_56885,(0),null);
var selector_56887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56283_56885,(1),null);
var seq__56286_56888 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__56293_56889 = null;
var count__56294_56890 = (0);
var i__56295_56891 = (0);
while(true){
if((i__56295_56891 < count__56294_56890)){
var vec__56332_56892 = chunk__56293_56889.cljs$core$IIndexed$_nth$arity$2(null,i__56295_56891);
var orig_type_56893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56332_56892,(0),null);
var f_56894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56332_56892,(1),null);
var seq__56296_56895 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_56893,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_56893,cljs.core.identity])));
var chunk__56298_56896 = null;
var count__56299_56897 = (0);
var i__56300_56898 = (0);
while(true){
if((i__56300_56898 < count__56299_56897)){
var vec__56341_56899 = chunk__56298_56896.cljs$core$IIndexed$_nth$arity$2(null,i__56300_56898);
var actual_type_56900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56341_56899,(0),null);
var __56901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56341_56899,(1),null);
var keys_56902 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56887,actual_type_56900,f_56894], null);
var canonical_f_56903 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_56886),keys_56902);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56886,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_56902], 0));

if(cljs.core.truth_(elem_56886.removeEventListener)){
elem_56886.removeEventListener(cljs.core.name(actual_type_56900),canonical_f_56903);
} else {
elem_56886.detachEvent(cljs.core.name(actual_type_56900),canonical_f_56903);
}


var G__56904 = seq__56296_56895;
var G__56905 = chunk__56298_56896;
var G__56906 = count__56299_56897;
var G__56907 = (i__56300_56898 + (1));
seq__56296_56895 = G__56904;
chunk__56298_56896 = G__56905;
count__56299_56897 = G__56906;
i__56300_56898 = G__56907;
continue;
} else {
var temp__5735__auto___56908 = cljs.core.seq(seq__56296_56895);
if(temp__5735__auto___56908){
var seq__56296_56909__$1 = temp__5735__auto___56908;
if(cljs.core.chunked_seq_QMARK_(seq__56296_56909__$1)){
var c__4609__auto___56910 = cljs.core.chunk_first(seq__56296_56909__$1);
var G__56911 = cljs.core.chunk_rest(seq__56296_56909__$1);
var G__56912 = c__4609__auto___56910;
var G__56913 = cljs.core.count(c__4609__auto___56910);
var G__56914 = (0);
seq__56296_56895 = G__56911;
chunk__56298_56896 = G__56912;
count__56299_56897 = G__56913;
i__56300_56898 = G__56914;
continue;
} else {
var vec__56344_56915 = cljs.core.first(seq__56296_56909__$1);
var actual_type_56916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56344_56915,(0),null);
var __56917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56344_56915,(1),null);
var keys_56919 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56887,actual_type_56916,f_56894], null);
var canonical_f_56920 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_56886),keys_56919);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56886,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_56919], 0));

if(cljs.core.truth_(elem_56886.removeEventListener)){
elem_56886.removeEventListener(cljs.core.name(actual_type_56916),canonical_f_56920);
} else {
elem_56886.detachEvent(cljs.core.name(actual_type_56916),canonical_f_56920);
}


var G__56929 = cljs.core.next(seq__56296_56909__$1);
var G__56930 = null;
var G__56931 = (0);
var G__56932 = (0);
seq__56296_56895 = G__56929;
chunk__56298_56896 = G__56930;
count__56299_56897 = G__56931;
i__56300_56898 = G__56932;
continue;
}
} else {
}
}
break;
}

var G__56933 = seq__56286_56888;
var G__56934 = chunk__56293_56889;
var G__56935 = count__56294_56890;
var G__56936 = (i__56295_56891 + (1));
seq__56286_56888 = G__56933;
chunk__56293_56889 = G__56934;
count__56294_56890 = G__56935;
i__56295_56891 = G__56936;
continue;
} else {
var temp__5735__auto___56937 = cljs.core.seq(seq__56286_56888);
if(temp__5735__auto___56937){
var seq__56286_56938__$1 = temp__5735__auto___56937;
if(cljs.core.chunked_seq_QMARK_(seq__56286_56938__$1)){
var c__4609__auto___56939 = cljs.core.chunk_first(seq__56286_56938__$1);
var G__56940 = cljs.core.chunk_rest(seq__56286_56938__$1);
var G__56941 = c__4609__auto___56939;
var G__56942 = cljs.core.count(c__4609__auto___56939);
var G__56943 = (0);
seq__56286_56888 = G__56940;
chunk__56293_56889 = G__56941;
count__56294_56890 = G__56942;
i__56295_56891 = G__56943;
continue;
} else {
var vec__56347_56944 = cljs.core.first(seq__56286_56938__$1);
var orig_type_56945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56347_56944,(0),null);
var f_56946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56347_56944,(1),null);
var seq__56287_56947 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_56945,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_56945,cljs.core.identity])));
var chunk__56289_56948 = null;
var count__56290_56949 = (0);
var i__56291_56950 = (0);
while(true){
if((i__56291_56950 < count__56290_56949)){
var vec__56356_56951 = chunk__56289_56948.cljs$core$IIndexed$_nth$arity$2(null,i__56291_56950);
var actual_type_56952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56356_56951,(0),null);
var __56953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56356_56951,(1),null);
var keys_56954 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56887,actual_type_56952,f_56946], null);
var canonical_f_56955 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_56886),keys_56954);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56886,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_56954], 0));

if(cljs.core.truth_(elem_56886.removeEventListener)){
elem_56886.removeEventListener(cljs.core.name(actual_type_56952),canonical_f_56955);
} else {
elem_56886.detachEvent(cljs.core.name(actual_type_56952),canonical_f_56955);
}


var G__56956 = seq__56287_56947;
var G__56957 = chunk__56289_56948;
var G__56958 = count__56290_56949;
var G__56959 = (i__56291_56950 + (1));
seq__56287_56947 = G__56956;
chunk__56289_56948 = G__56957;
count__56290_56949 = G__56958;
i__56291_56950 = G__56959;
continue;
} else {
var temp__5735__auto___56960__$1 = cljs.core.seq(seq__56287_56947);
if(temp__5735__auto___56960__$1){
var seq__56287_56961__$1 = temp__5735__auto___56960__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56287_56961__$1)){
var c__4609__auto___56962 = cljs.core.chunk_first(seq__56287_56961__$1);
var G__56963 = cljs.core.chunk_rest(seq__56287_56961__$1);
var G__56964 = c__4609__auto___56962;
var G__56965 = cljs.core.count(c__4609__auto___56962);
var G__56966 = (0);
seq__56287_56947 = G__56963;
chunk__56289_56948 = G__56964;
count__56290_56949 = G__56965;
i__56291_56950 = G__56966;
continue;
} else {
var vec__56359_56967 = cljs.core.first(seq__56287_56961__$1);
var actual_type_56968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56359_56967,(0),null);
var __56969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56359_56967,(1),null);
var keys_56970 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_56887,actual_type_56968,f_56946], null);
var canonical_f_56971 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_56886),keys_56970);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_56886,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_56970], 0));

if(cljs.core.truth_(elem_56886.removeEventListener)){
elem_56886.removeEventListener(cljs.core.name(actual_type_56968),canonical_f_56971);
} else {
elem_56886.detachEvent(cljs.core.name(actual_type_56968),canonical_f_56971);
}


var G__56972 = cljs.core.next(seq__56287_56961__$1);
var G__56973 = null;
var G__56974 = (0);
var G__56975 = (0);
seq__56287_56947 = G__56972;
chunk__56289_56948 = G__56973;
count__56290_56949 = G__56974;
i__56291_56950 = G__56975;
continue;
}
} else {
}
}
break;
}

var G__56976 = cljs.core.next(seq__56286_56938__$1);
var G__56977 = null;
var G__56978 = (0);
var G__56979 = (0);
seq__56286_56888 = G__56976;
chunk__56293_56889 = G__56977;
count__56294_56890 = G__56978;
i__56295_56891 = G__56979;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq56281){
var G__56282 = cljs.core.first(seq56281);
var seq56281__$1 = cljs.core.next(seq56281);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56282,seq56281__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___56980 = arguments.length;
var i__4790__auto___56981 = (0);
while(true){
if((i__4790__auto___56981 < len__4789__auto___56980)){
args__4795__auto__.push((arguments[i__4790__auto___56981]));

var G__56982 = (i__4790__auto___56981 + (1));
i__4790__auto___56981 = G__56982;
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

var vec__56364_56983 = dommy.core.elem_and_selector(elem_sel);
var elem_56984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56364_56983,(0),null);
var selector_56985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56364_56983,(1),null);
var seq__56367_56986 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__56368_56987 = null;
var count__56369_56988 = (0);
var i__56370_56989 = (0);
while(true){
if((i__56370_56989 < count__56369_56988)){
var vec__56377_56990 = chunk__56368_56987.cljs$core$IIndexed$_nth$arity$2(null,i__56370_56989);
var type_56991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56377_56990,(0),null);
var f_56992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56377_56990,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_56991,((function (seq__56367_56986,chunk__56368_56987,count__56369_56988,i__56370_56989,vec__56377_56990,type_56991,f_56992,vec__56364_56983,elem_56984,selector_56985){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_56991,dommy$core$this_fn], 0));

return (f_56992.cljs$core$IFn$_invoke$arity$1 ? f_56992.cljs$core$IFn$_invoke$arity$1(e) : f_56992.call(null,e));
});})(seq__56367_56986,chunk__56368_56987,count__56369_56988,i__56370_56989,vec__56377_56990,type_56991,f_56992,vec__56364_56983,elem_56984,selector_56985))
], 0));


var G__56993 = seq__56367_56986;
var G__56994 = chunk__56368_56987;
var G__56995 = count__56369_56988;
var G__56996 = (i__56370_56989 + (1));
seq__56367_56986 = G__56993;
chunk__56368_56987 = G__56994;
count__56369_56988 = G__56995;
i__56370_56989 = G__56996;
continue;
} else {
var temp__5735__auto___56997 = cljs.core.seq(seq__56367_56986);
if(temp__5735__auto___56997){
var seq__56367_56998__$1 = temp__5735__auto___56997;
if(cljs.core.chunked_seq_QMARK_(seq__56367_56998__$1)){
var c__4609__auto___56999 = cljs.core.chunk_first(seq__56367_56998__$1);
var G__57000 = cljs.core.chunk_rest(seq__56367_56998__$1);
var G__57001 = c__4609__auto___56999;
var G__57002 = cljs.core.count(c__4609__auto___56999);
var G__57003 = (0);
seq__56367_56986 = G__57000;
chunk__56368_56987 = G__57001;
count__56369_56988 = G__57002;
i__56370_56989 = G__57003;
continue;
} else {
var vec__56380_57004 = cljs.core.first(seq__56367_56998__$1);
var type_57005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56380_57004,(0),null);
var f_57006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56380_57004,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_57005,((function (seq__56367_56986,chunk__56368_56987,count__56369_56988,i__56370_56989,vec__56380_57004,type_57005,f_57006,seq__56367_56998__$1,temp__5735__auto___56997,vec__56364_56983,elem_56984,selector_56985){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_57005,dommy$core$this_fn], 0));

return (f_57006.cljs$core$IFn$_invoke$arity$1 ? f_57006.cljs$core$IFn$_invoke$arity$1(e) : f_57006.call(null,e));
});})(seq__56367_56986,chunk__56368_56987,count__56369_56988,i__56370_56989,vec__56380_57004,type_57005,f_57006,seq__56367_56998__$1,temp__5735__auto___56997,vec__56364_56983,elem_56984,selector_56985))
], 0));


var G__57007 = cljs.core.next(seq__56367_56998__$1);
var G__57008 = null;
var G__57009 = (0);
var G__57010 = (0);
seq__56367_56986 = G__57007;
chunk__56368_56987 = G__57008;
count__56369_56988 = G__57009;
i__56370_56989 = G__57010;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq56362){
var G__56363 = cljs.core.first(seq56362);
var seq56362__$1 = cljs.core.next(seq56362);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56363,seq56362__$1);
}));


//# sourceMappingURL=dommy.core.js.map
