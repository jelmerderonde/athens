goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__62504__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__62368 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__62369 = cljs.core.seq(vec__62368);
var first__62370 = cljs.core.first(seq__62369);
var seq__62369__$1 = cljs.core.next(seq__62369);
var tag = first__62370;
var body = seq__62369__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__62504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62505__i = 0, G__62505__a = new Array(arguments.length -  0);
while (G__62505__i < G__62505__a.length) {G__62505__a[G__62505__i] = arguments[G__62505__i + 0]; ++G__62505__i;}
  args = new cljs.core.IndexedSeq(G__62505__a,0,null);
} 
return G__62504__delegate.call(this,args);};
G__62504.cljs$lang$maxFixedArity = 0;
G__62504.cljs$lang$applyTo = (function (arglist__62506){
var args = cljs.core.seq(arglist__62506);
return G__62504__delegate(args);
});
G__62504.cljs$core$IFn$_invoke$arity$variadic = G__62504__delegate;
return G__62504;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__62371(s__62372){
return (new cljs.core.LazySeq(null,(function (){
var s__62372__$1 = s__62372;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62372__$1);
if(temp__5735__auto__){
var s__62372__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62372__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62372__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62374 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62373 = (0);
while(true){
if((i__62373 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62373);
cljs.core.chunk_append(b__62374,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__62507 = (i__62373 + (1));
i__62373 = G__62507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62374),sablono$core$update_arglists_$_iter__62371(cljs.core.chunk_rest(s__62372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62374),null);
}
} else {
var args = cljs.core.first(s__62372__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__62371(cljs.core.rest(s__62372__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62508 = arguments.length;
var i__4790__auto___62509 = (0);
while(true){
if((i__4790__auto___62509 < len__4789__auto___62508)){
args__4795__auto__.push((arguments[i__4790__auto___62509]));

var G__62510 = (i__4790__auto___62509 + (1));
i__4790__auto___62509 = G__62510;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__62376(s__62377){
return (new cljs.core.LazySeq(null,(function (){
var s__62377__$1 = s__62377;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62377__$1);
if(temp__5735__auto__){
var s__62377__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62377__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62377__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62379 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62378 = (0);
while(true){
if((i__62378 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62378);
cljs.core.chunk_append(b__62379,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__62511 = (i__62378 + (1));
i__62378 = G__62511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62379),sablono$core$iter__62376(cljs.core.chunk_rest(s__62377__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62379),null);
}
} else {
var style = cljs.core.first(s__62377__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__62376(cljs.core.rest(s__62377__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq62375){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62375));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__62380 = goog.dom.getDocument().body;
var G__62381 = (function (){var G__62382 = "script";
var G__62383 = ({"src": src});
return goog.dom.createDom(G__62382,G__62383);
})();
return goog.dom.appendChild(G__62380,G__62381);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to62384 = (function sablono$core$link_to62384(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62512 = arguments.length;
var i__4790__auto___62513 = (0);
while(true){
if((i__4790__auto___62513 < len__4789__auto___62512)){
args__4795__auto__.push((arguments[i__4790__auto___62513]));

var G__62514 = (i__4790__auto___62513 + (1));
i__4790__auto___62513 = G__62514;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to62384.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to62384.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to62384.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to62384.cljs$lang$applyTo = (function (seq62385){
var G__62386 = cljs.core.first(seq62385);
var seq62385__$1 = cljs.core.next(seq62385);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62386,seq62385__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to62384);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to62387 = (function sablono$core$mail_to62387(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62515 = arguments.length;
var i__4790__auto___62516 = (0);
while(true){
if((i__4790__auto___62516 < len__4789__auto___62515)){
args__4795__auto__.push((arguments[i__4790__auto___62516]));

var G__62517 = (i__4790__auto___62516 + (1));
i__4790__auto___62516 = G__62517;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to62387.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to62387.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__62390){
var vec__62391 = p__62390;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62391,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to62387.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to62387.cljs$lang$applyTo = (function (seq62388){
var G__62389 = cljs.core.first(seq62388);
var seq62388__$1 = cljs.core.next(seq62388);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62389,seq62388__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to62387);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list62394 = (function sablono$core$unordered_list62394(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list62394_$_iter__62395(s__62396){
return (new cljs.core.LazySeq(null,(function (){
var s__62396__$1 = s__62396;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62396__$1);
if(temp__5735__auto__){
var s__62396__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62396__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62396__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62398 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62397 = (0);
while(true){
if((i__62397 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62397);
cljs.core.chunk_append(b__62398,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__62522 = (i__62397 + (1));
i__62397 = G__62522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62398),sablono$core$unordered_list62394_$_iter__62395(cljs.core.chunk_rest(s__62396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62398),null);
}
} else {
var x = cljs.core.first(s__62396__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list62394_$_iter__62395(cljs.core.rest(s__62396__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list62394);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list62399 = (function sablono$core$ordered_list62399(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list62399_$_iter__62400(s__62401){
return (new cljs.core.LazySeq(null,(function (){
var s__62401__$1 = s__62401;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62401__$1);
if(temp__5735__auto__){
var s__62401__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62401__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62401__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62403 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62402 = (0);
while(true){
if((i__62402 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62402);
cljs.core.chunk_append(b__62403,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__62529 = (i__62402 + (1));
i__62402 = G__62529;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62403),sablono$core$ordered_list62399_$_iter__62400(cljs.core.chunk_rest(s__62401__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62403),null);
}
} else {
var x = cljs.core.first(s__62401__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list62399_$_iter__62400(cljs.core.rest(s__62401__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list62399);
/**
 * Create an image element.
 */
sablono.core.image62404 = (function sablono$core$image62404(var_args){
var G__62406 = arguments.length;
switch (G__62406) {
case 1:
return sablono.core.image62404.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image62404.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image62404.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image62404.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image62404.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image62404);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__62407_SHARP_,p2__62408_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__62407_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__62408_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__62409_SHARP_,p2__62410_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__62409_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__62410_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__62412 = arguments.length;
switch (G__62412) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field62413 = (function sablono$core$color_field62413(var_args){
var G__62415 = arguments.length;
switch (G__62415) {
case 1:
return sablono.core.color_field62413.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field62413.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field62413.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__62360__auto__);
}));

(sablono.core.color_field62413.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.color_field62413.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field62413);

/**
 * Creates a date input field.
 */
sablono.core.date_field62416 = (function sablono$core$date_field62416(var_args){
var G__62418 = arguments.length;
switch (G__62418) {
case 1:
return sablono.core.date_field62416.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field62416.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field62416.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__62360__auto__);
}));

(sablono.core.date_field62416.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.date_field62416.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field62416);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field62419 = (function sablono$core$datetime_field62419(var_args){
var G__62421 = arguments.length;
switch (G__62421) {
case 1:
return sablono.core.datetime_field62419.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field62419.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field62419.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__62360__auto__);
}));

(sablono.core.datetime_field62419.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.datetime_field62419.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field62419);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field62422 = (function sablono$core$datetime_local_field62422(var_args){
var G__62424 = arguments.length;
switch (G__62424) {
case 1:
return sablono.core.datetime_local_field62422.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field62422.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field62422.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__62360__auto__);
}));

(sablono.core.datetime_local_field62422.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.datetime_local_field62422.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field62422);

/**
 * Creates a email input field.
 */
sablono.core.email_field62425 = (function sablono$core$email_field62425(var_args){
var G__62427 = arguments.length;
switch (G__62427) {
case 1:
return sablono.core.email_field62425.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field62425.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field62425.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__62360__auto__);
}));

(sablono.core.email_field62425.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.email_field62425.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field62425);

/**
 * Creates a file input field.
 */
sablono.core.file_field62428 = (function sablono$core$file_field62428(var_args){
var G__62430 = arguments.length;
switch (G__62430) {
case 1:
return sablono.core.file_field62428.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field62428.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field62428.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__62360__auto__);
}));

(sablono.core.file_field62428.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.file_field62428.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field62428);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field62431 = (function sablono$core$hidden_field62431(var_args){
var G__62433 = arguments.length;
switch (G__62433) {
case 1:
return sablono.core.hidden_field62431.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field62431.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field62431.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__62360__auto__);
}));

(sablono.core.hidden_field62431.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.hidden_field62431.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field62431);

/**
 * Creates a month input field.
 */
sablono.core.month_field62434 = (function sablono$core$month_field62434(var_args){
var G__62436 = arguments.length;
switch (G__62436) {
case 1:
return sablono.core.month_field62434.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field62434.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field62434.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__62360__auto__);
}));

(sablono.core.month_field62434.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.month_field62434.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field62434);

/**
 * Creates a number input field.
 */
sablono.core.number_field62437 = (function sablono$core$number_field62437(var_args){
var G__62439 = arguments.length;
switch (G__62439) {
case 1:
return sablono.core.number_field62437.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field62437.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field62437.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__62360__auto__);
}));

(sablono.core.number_field62437.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.number_field62437.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field62437);

/**
 * Creates a password input field.
 */
sablono.core.password_field62440 = (function sablono$core$password_field62440(var_args){
var G__62442 = arguments.length;
switch (G__62442) {
case 1:
return sablono.core.password_field62440.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field62440.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field62440.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__62360__auto__);
}));

(sablono.core.password_field62440.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.password_field62440.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field62440);

/**
 * Creates a range input field.
 */
sablono.core.range_field62443 = (function sablono$core$range_field62443(var_args){
var G__62445 = arguments.length;
switch (G__62445) {
case 1:
return sablono.core.range_field62443.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field62443.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field62443.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__62360__auto__);
}));

(sablono.core.range_field62443.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.range_field62443.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field62443);

/**
 * Creates a search input field.
 */
sablono.core.search_field62446 = (function sablono$core$search_field62446(var_args){
var G__62448 = arguments.length;
switch (G__62448) {
case 1:
return sablono.core.search_field62446.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field62446.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field62446.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__62360__auto__);
}));

(sablono.core.search_field62446.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.search_field62446.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field62446);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field62449 = (function sablono$core$tel_field62449(var_args){
var G__62451 = arguments.length;
switch (G__62451) {
case 1:
return sablono.core.tel_field62449.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field62449.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field62449.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__62360__auto__);
}));

(sablono.core.tel_field62449.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.tel_field62449.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field62449);

/**
 * Creates a text input field.
 */
sablono.core.text_field62452 = (function sablono$core$text_field62452(var_args){
var G__62454 = arguments.length;
switch (G__62454) {
case 1:
return sablono.core.text_field62452.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field62452.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field62452.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__62360__auto__);
}));

(sablono.core.text_field62452.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.text_field62452.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field62452);

/**
 * Creates a time input field.
 */
sablono.core.time_field62455 = (function sablono$core$time_field62455(var_args){
var G__62457 = arguments.length;
switch (G__62457) {
case 1:
return sablono.core.time_field62455.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field62455.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field62455.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__62360__auto__);
}));

(sablono.core.time_field62455.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.time_field62455.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field62455);

/**
 * Creates a url input field.
 */
sablono.core.url_field62458 = (function sablono$core$url_field62458(var_args){
var G__62460 = arguments.length;
switch (G__62460) {
case 1:
return sablono.core.url_field62458.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field62458.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field62458.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__62360__auto__);
}));

(sablono.core.url_field62458.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.url_field62458.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field62458);

/**
 * Creates a week input field.
 */
sablono.core.week_field62461 = (function sablono$core$week_field62461(var_args){
var G__62463 = arguments.length;
switch (G__62463) {
case 1:
return sablono.core.week_field62461.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field62461.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field62461.cljs$core$IFn$_invoke$arity$1 = (function (name__62360__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__62360__auto__);
}));

(sablono.core.week_field62461.cljs$core$IFn$_invoke$arity$2 = (function (name__62360__auto__,value__62361__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__62360__auto__,value__62361__auto__);
}));

(sablono.core.week_field62461.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field62461);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box62464 = (function sablono$core$check_box62464(var_args){
var G__62466 = arguments.length;
switch (G__62466) {
case 1:
return sablono.core.check_box62464.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box62464.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box62464.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box62464.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box62464.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box62464.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box62464.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box62464);
/**
 * Creates a radio button.
 */
sablono.core.radio_button62467 = (function sablono$core$radio_button62467(var_args){
var G__62469 = arguments.length;
switch (G__62469) {
case 1:
return sablono.core.radio_button62467.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button62467.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button62467.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button62467.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button62467.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button62467.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button62467.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button62467);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__62470 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__62470);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options62471 = (function sablono$core$select_options62471(coll){
var iter__4582__auto__ = (function sablono$core$select_options62471_$_iter__62472(s__62473){
return (new cljs.core.LazySeq(null,(function (){
var s__62473__$1 = s__62473;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62473__$1);
if(temp__5735__auto__){
var s__62473__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62473__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62473__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62475 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62474 = (0);
while(true){
if((i__62474 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62474);
cljs.core.chunk_append(b__62475,((cljs.core.sequential_QMARK_(x))?(function (){var vec__62476 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62476,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62476,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62476,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options62471.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options62471.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options62471.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__62572 = (i__62474 + (1));
i__62474 = G__62572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62475),sablono$core$select_options62471_$_iter__62472(cljs.core.chunk_rest(s__62473__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62475),null);
}
} else {
var x = cljs.core.first(s__62473__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__62479 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62479,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62479,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62479,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options62471.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options62471.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options62471.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options62471_$_iter__62472(cljs.core.rest(s__62473__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options62471);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down62482 = (function sablono$core$drop_down62482(var_args){
var G__62484 = arguments.length;
switch (G__62484) {
case 2:
return sablono.core.drop_down62482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down62482.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down62482.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down62482.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down62482.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down62482.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down62482);
/**
 * Creates a text area element.
 */
sablono.core.text_area62485 = (function sablono$core$text_area62485(var_args){
var G__62487 = arguments.length;
switch (G__62487) {
case 1:
return sablono.core.text_area62485.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area62485.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area62485.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area62485.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area62485.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area62485);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label62488 = (function sablono$core$label62488(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label62488);
/**
 * Creates a submit button.
 */
sablono.core.submit_button62489 = (function sablono$core$submit_button62489(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button62489);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button62490 = (function sablono$core$reset_button62490(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button62490);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to62491 = (function sablono$core$form_to62491(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62581 = arguments.length;
var i__4790__auto___62582 = (0);
while(true){
if((i__4790__auto___62582 < len__4789__auto___62581)){
args__4795__auto__.push((arguments[i__4790__auto___62582]));

var G__62583 = (i__4790__auto___62582 + (1));
i__4790__auto___62582 = G__62583;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to62491.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to62491.cljs$core$IFn$_invoke$arity$variadic = (function (p__62497,body){
var vec__62498 = p__62497;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62498,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62498,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__62501 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__62502 = "_method";
var G__62503 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__62501,G__62502,G__62503) : sablono.core.hidden_field.call(null,G__62501,G__62502,G__62503));
})()], null)),body));
}));

(sablono.core.form_to62491.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to62491.cljs$lang$applyTo = (function (seq62492){
var G__62493 = cljs.core.first(seq62492);
var seq62492__$1 = cljs.core.next(seq62492);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62493,seq62492__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to62491);

//# sourceMappingURL=sablono.core.js.map
