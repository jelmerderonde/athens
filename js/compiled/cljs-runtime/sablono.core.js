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
var G__51345__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__50984 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__50985 = cljs.core.seq(vec__50984);
var first__50986 = cljs.core.first(seq__50985);
var seq__50985__$1 = cljs.core.next(seq__50985);
var tag = first__50986;
var body = seq__50985__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__51345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51347__i = 0, G__51347__a = new Array(arguments.length -  0);
while (G__51347__i < G__51347__a.length) {G__51347__a[G__51347__i] = arguments[G__51347__i + 0]; ++G__51347__i;}
  args = new cljs.core.IndexedSeq(G__51347__a,0,null);
} 
return G__51345__delegate.call(this,args);};
G__51345.cljs$lang$maxFixedArity = 0;
G__51345.cljs$lang$applyTo = (function (arglist__51380){
var args = cljs.core.seq(arglist__51380);
return G__51345__delegate(args);
});
G__51345.cljs$core$IFn$_invoke$arity$variadic = G__51345__delegate;
return G__51345;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__50990(s__50991){
return (new cljs.core.LazySeq(null,(function (){
var s__50991__$1 = s__50991;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50991__$1);
if(temp__5735__auto__){
var s__50991__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50991__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50991__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50995 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50994 = (0);
while(true){
if((i__50994 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50994);
cljs.core.chunk_append(b__50995,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__51387 = (i__50994 + (1));
i__50994 = G__51387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50995),sablono$core$update_arglists_$_iter__50990(cljs.core.chunk_rest(s__50991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50995),null);
}
} else {
var args = cljs.core.first(s__50991__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__50990(cljs.core.rest(s__50991__$2)));
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
var len__4789__auto___51388 = arguments.length;
var i__4790__auto___51389 = (0);
while(true){
if((i__4790__auto___51389 < len__4789__auto___51388)){
args__4795__auto__.push((arguments[i__4790__auto___51389]));

var G__51390 = (i__4790__auto___51389 + (1));
i__4790__auto___51389 = G__51390;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__51014(s__51015){
return (new cljs.core.LazySeq(null,(function (){
var s__51015__$1 = s__51015;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51015__$1);
if(temp__5735__auto__){
var s__51015__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51015__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51015__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51017 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51016 = (0);
while(true){
if((i__51016 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51016);
cljs.core.chunk_append(b__51017,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__51391 = (i__51016 + (1));
i__51016 = G__51391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51017),sablono$core$iter__51014(cljs.core.chunk_rest(s__51015__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51017),null);
}
} else {
var style = cljs.core.first(s__51015__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__51014(cljs.core.rest(s__51015__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq51009){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51009));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__51028 = goog.dom.getDocument().body;
var G__51029 = (function (){var G__51030 = "script";
var G__51031 = ({"src": src});
return goog.dom.createDom(G__51030,G__51031);
})();
return goog.dom.appendChild(G__51028,G__51029);
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
sablono.core.link_to51035 = (function sablono$core$link_to51035(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51406 = arguments.length;
var i__4790__auto___51407 = (0);
while(true){
if((i__4790__auto___51407 < len__4789__auto___51406)){
args__4795__auto__.push((arguments[i__4790__auto___51407]));

var G__51408 = (i__4790__auto___51407 + (1));
i__4790__auto___51407 = G__51408;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to51035.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to51035.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to51035.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to51035.cljs$lang$applyTo = (function (seq51040){
var G__51041 = cljs.core.first(seq51040);
var seq51040__$1 = cljs.core.next(seq51040);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51041,seq51040__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to51035);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to51044 = (function sablono$core$mail_to51044(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51414 = arguments.length;
var i__4790__auto___51415 = (0);
while(true){
if((i__4790__auto___51415 < len__4789__auto___51414)){
args__4795__auto__.push((arguments[i__4790__auto___51415]));

var G__51416 = (i__4790__auto___51415 + (1));
i__4790__auto___51415 = G__51416;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to51044.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to51044.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__51050){
var vec__51051 = p__51050;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51051,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to51044.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to51044.cljs$lang$applyTo = (function (seq51045){
var G__51046 = cljs.core.first(seq51045);
var seq51045__$1 = cljs.core.next(seq51045);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51046,seq51045__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to51044);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list51054 = (function sablono$core$unordered_list51054(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list51054_$_iter__51056(s__51057){
return (new cljs.core.LazySeq(null,(function (){
var s__51057__$1 = s__51057;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51057__$1);
if(temp__5735__auto__){
var s__51057__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51057__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51057__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51059 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51058 = (0);
while(true){
if((i__51058 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51058);
cljs.core.chunk_append(b__51059,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__51432 = (i__51058 + (1));
i__51058 = G__51432;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51059),sablono$core$unordered_list51054_$_iter__51056(cljs.core.chunk_rest(s__51057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51059),null);
}
} else {
var x = cljs.core.first(s__51057__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list51054_$_iter__51056(cljs.core.rest(s__51057__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list51054);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list51063 = (function sablono$core$ordered_list51063(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list51063_$_iter__51064(s__51065){
return (new cljs.core.LazySeq(null,(function (){
var s__51065__$1 = s__51065;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51065__$1);
if(temp__5735__auto__){
var s__51065__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51065__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51065__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51067 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51066 = (0);
while(true){
if((i__51066 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51066);
cljs.core.chunk_append(b__51067,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__51434 = (i__51066 + (1));
i__51066 = G__51434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51067),sablono$core$ordered_list51063_$_iter__51064(cljs.core.chunk_rest(s__51065__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51067),null);
}
} else {
var x = cljs.core.first(s__51065__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list51063_$_iter__51064(cljs.core.rest(s__51065__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list51063);
/**
 * Create an image element.
 */
sablono.core.image51073 = (function sablono$core$image51073(var_args){
var G__51075 = arguments.length;
switch (G__51075) {
case 1:
return sablono.core.image51073.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image51073.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image51073.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image51073.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image51073.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image51073);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__51076_SHARP_,p2__51077_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51076_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__51077_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__51079_SHARP_,p2__51080_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51079_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__51080_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__51089 = arguments.length;
switch (G__51089) {
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
sablono.core.color_field51091 = (function sablono$core$color_field51091(var_args){
var G__51094 = arguments.length;
switch (G__51094) {
case 1:
return sablono.core.color_field51091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field51091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field51091.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__50976__auto__);
}));

(sablono.core.color_field51091.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.color_field51091.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field51091);

/**
 * Creates a date input field.
 */
sablono.core.date_field51096 = (function sablono$core$date_field51096(var_args){
var G__51099 = arguments.length;
switch (G__51099) {
case 1:
return sablono.core.date_field51096.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field51096.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field51096.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__50976__auto__);
}));

(sablono.core.date_field51096.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.date_field51096.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field51096);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field51102 = (function sablono$core$datetime_field51102(var_args){
var G__51104 = arguments.length;
switch (G__51104) {
case 1:
return sablono.core.datetime_field51102.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field51102.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field51102.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__50976__auto__);
}));

(sablono.core.datetime_field51102.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.datetime_field51102.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field51102);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field51105 = (function sablono$core$datetime_local_field51105(var_args){
var G__51109 = arguments.length;
switch (G__51109) {
case 1:
return sablono.core.datetime_local_field51105.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field51105.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field51105.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__50976__auto__);
}));

(sablono.core.datetime_local_field51105.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.datetime_local_field51105.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field51105);

/**
 * Creates a email input field.
 */
sablono.core.email_field51111 = (function sablono$core$email_field51111(var_args){
var G__51113 = arguments.length;
switch (G__51113) {
case 1:
return sablono.core.email_field51111.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field51111.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field51111.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__50976__auto__);
}));

(sablono.core.email_field51111.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.email_field51111.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field51111);

/**
 * Creates a file input field.
 */
sablono.core.file_field51114 = (function sablono$core$file_field51114(var_args){
var G__51116 = arguments.length;
switch (G__51116) {
case 1:
return sablono.core.file_field51114.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field51114.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field51114.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__50976__auto__);
}));

(sablono.core.file_field51114.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.file_field51114.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field51114);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field51117 = (function sablono$core$hidden_field51117(var_args){
var G__51119 = arguments.length;
switch (G__51119) {
case 1:
return sablono.core.hidden_field51117.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field51117.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field51117.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__50976__auto__);
}));

(sablono.core.hidden_field51117.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.hidden_field51117.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field51117);

/**
 * Creates a month input field.
 */
sablono.core.month_field51120 = (function sablono$core$month_field51120(var_args){
var G__51122 = arguments.length;
switch (G__51122) {
case 1:
return sablono.core.month_field51120.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field51120.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field51120.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__50976__auto__);
}));

(sablono.core.month_field51120.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.month_field51120.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field51120);

/**
 * Creates a number input field.
 */
sablono.core.number_field51146 = (function sablono$core$number_field51146(var_args){
var G__51152 = arguments.length;
switch (G__51152) {
case 1:
return sablono.core.number_field51146.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field51146.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field51146.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__50976__auto__);
}));

(sablono.core.number_field51146.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.number_field51146.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field51146);

/**
 * Creates a password input field.
 */
sablono.core.password_field51166 = (function sablono$core$password_field51166(var_args){
var G__51168 = arguments.length;
switch (G__51168) {
case 1:
return sablono.core.password_field51166.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field51166.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field51166.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__50976__auto__);
}));

(sablono.core.password_field51166.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.password_field51166.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field51166);

/**
 * Creates a range input field.
 */
sablono.core.range_field51180 = (function sablono$core$range_field51180(var_args){
var G__51185 = arguments.length;
switch (G__51185) {
case 1:
return sablono.core.range_field51180.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field51180.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field51180.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__50976__auto__);
}));

(sablono.core.range_field51180.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.range_field51180.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field51180);

/**
 * Creates a search input field.
 */
sablono.core.search_field51196 = (function sablono$core$search_field51196(var_args){
var G__51200 = arguments.length;
switch (G__51200) {
case 1:
return sablono.core.search_field51196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field51196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field51196.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__50976__auto__);
}));

(sablono.core.search_field51196.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.search_field51196.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field51196);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field51206 = (function sablono$core$tel_field51206(var_args){
var G__51208 = arguments.length;
switch (G__51208) {
case 1:
return sablono.core.tel_field51206.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field51206.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field51206.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__50976__auto__);
}));

(sablono.core.tel_field51206.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.tel_field51206.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field51206);

/**
 * Creates a text input field.
 */
sablono.core.text_field51220 = (function sablono$core$text_field51220(var_args){
var G__51230 = arguments.length;
switch (G__51230) {
case 1:
return sablono.core.text_field51220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field51220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field51220.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__50976__auto__);
}));

(sablono.core.text_field51220.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.text_field51220.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field51220);

/**
 * Creates a time input field.
 */
sablono.core.time_field51232 = (function sablono$core$time_field51232(var_args){
var G__51234 = arguments.length;
switch (G__51234) {
case 1:
return sablono.core.time_field51232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field51232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field51232.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__50976__auto__);
}));

(sablono.core.time_field51232.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.time_field51232.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field51232);

/**
 * Creates a url input field.
 */
sablono.core.url_field51237 = (function sablono$core$url_field51237(var_args){
var G__51240 = arguments.length;
switch (G__51240) {
case 1:
return sablono.core.url_field51237.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field51237.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field51237.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__50976__auto__);
}));

(sablono.core.url_field51237.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.url_field51237.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field51237);

/**
 * Creates a week input field.
 */
sablono.core.week_field51242 = (function sablono$core$week_field51242(var_args){
var G__51247 = arguments.length;
switch (G__51247) {
case 1:
return sablono.core.week_field51242.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field51242.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field51242.cljs$core$IFn$_invoke$arity$1 = (function (name__50976__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__50976__auto__);
}));

(sablono.core.week_field51242.cljs$core$IFn$_invoke$arity$2 = (function (name__50976__auto__,value__50977__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__50976__auto__,value__50977__auto__);
}));

(sablono.core.week_field51242.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field51242);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box51248 = (function sablono$core$check_box51248(var_args){
var G__51250 = arguments.length;
switch (G__51250) {
case 1:
return sablono.core.check_box51248.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box51248.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box51248.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box51248.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box51248.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box51248.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box51248.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box51248);
/**
 * Creates a radio button.
 */
sablono.core.radio_button51251 = (function sablono$core$radio_button51251(var_args){
var G__51255 = arguments.length;
switch (G__51255) {
case 1:
return sablono.core.radio_button51251.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button51251.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button51251.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button51251.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button51251.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button51251.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button51251.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button51251);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__51263 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__51263);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options51264 = (function sablono$core$select_options51264(coll){
var iter__4582__auto__ = (function sablono$core$select_options51264_$_iter__51267(s__51268){
return (new cljs.core.LazySeq(null,(function (){
var s__51268__$1 = s__51268;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51268__$1);
if(temp__5735__auto__){
var s__51268__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51268__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__51268__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__51270 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__51269 = (0);
while(true){
if((i__51269 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__51269);
cljs.core.chunk_append(b__51270,((cljs.core.sequential_QMARK_(x))?(function (){var vec__51273 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51273,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51273,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51273,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options51264.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options51264.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options51264.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__51594 = (i__51269 + (1));
i__51269 = G__51594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51270),sablono$core$select_options51264_$_iter__51267(cljs.core.chunk_rest(s__51268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51270),null);
}
} else {
var x = cljs.core.first(s__51268__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__51276 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51276,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51276,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51276,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options51264.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options51264.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options51264.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options51264_$_iter__51267(cljs.core.rest(s__51268__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options51264);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down51285 = (function sablono$core$drop_down51285(var_args){
var G__51289 = arguments.length;
switch (G__51289) {
case 2:
return sablono.core.drop_down51285.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down51285.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down51285.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down51285.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down51285.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down51285.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down51285);
/**
 * Creates a text area element.
 */
sablono.core.text_area51299 = (function sablono$core$text_area51299(var_args){
var G__51301 = arguments.length;
switch (G__51301) {
case 1:
return sablono.core.text_area51299.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area51299.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area51299.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area51299.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area51299.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area51299);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label51308 = (function sablono$core$label51308(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label51308);
/**
 * Creates a submit button.
 */
sablono.core.submit_button51313 = (function sablono$core$submit_button51313(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button51313);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button51314 = (function sablono$core$reset_button51314(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button51314);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to51323 = (function sablono$core$form_to51323(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51613 = arguments.length;
var i__4790__auto___51615 = (0);
while(true){
if((i__4790__auto___51615 < len__4789__auto___51613)){
args__4795__auto__.push((arguments[i__4790__auto___51615]));

var G__51625 = (i__4790__auto___51615 + (1));
i__4790__auto___51615 = G__51625;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to51323.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to51323.cljs$core$IFn$_invoke$arity$variadic = (function (p__51338,body){
var vec__51339 = p__51338;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51339,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51339,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__51342 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__51343 = "_method";
var G__51344 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__51342,G__51343,G__51344) : sablono.core.hidden_field.call(null,G__51342,G__51343,G__51344));
})()], null)),body));
}));

(sablono.core.form_to51323.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to51323.cljs$lang$applyTo = (function (seq51325){
var G__51326 = cljs.core.first(seq51325);
var seq51325__$1 = cljs.core.next(seq51325);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51326,seq51325__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to51323);

//# sourceMappingURL=sablono.core.js.map
