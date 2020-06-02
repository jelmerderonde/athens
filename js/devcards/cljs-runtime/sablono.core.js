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
var G__62419__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__62214 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__62215 = cljs.core.seq(vec__62214);
var first__62216 = cljs.core.first(seq__62215);
var seq__62215__$1 = cljs.core.next(seq__62215);
var tag = first__62216;
var body = seq__62215__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__62419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62420__i = 0, G__62420__a = new Array(arguments.length -  0);
while (G__62420__i < G__62420__a.length) {G__62420__a[G__62420__i] = arguments[G__62420__i + 0]; ++G__62420__i;}
  args = new cljs.core.IndexedSeq(G__62420__a,0,null);
} 
return G__62419__delegate.call(this,args);};
G__62419.cljs$lang$maxFixedArity = 0;
G__62419.cljs$lang$applyTo = (function (arglist__62421){
var args = cljs.core.seq(arglist__62421);
return G__62419__delegate(args);
});
G__62419.cljs$core$IFn$_invoke$arity$variadic = G__62419__delegate;
return G__62419;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__62219(s__62220){
return (new cljs.core.LazySeq(null,(function (){
var s__62220__$1 = s__62220;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62220__$1);
if(temp__5735__auto__){
var s__62220__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62220__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62220__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62222 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62221 = (0);
while(true){
if((i__62221 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62221);
cljs.core.chunk_append(b__62222,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__62422 = (i__62221 + (1));
i__62221 = G__62422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62222),sablono$core$update_arglists_$_iter__62219(cljs.core.chunk_rest(s__62220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62222),null);
}
} else {
var args = cljs.core.first(s__62220__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__62219(cljs.core.rest(s__62220__$2)));
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
var len__4789__auto___62424 = arguments.length;
var i__4790__auto___62425 = (0);
while(true){
if((i__4790__auto___62425 < len__4789__auto___62424)){
args__4795__auto__.push((arguments[i__4790__auto___62425]));

var G__62427 = (i__4790__auto___62425 + (1));
i__4790__auto___62425 = G__62427;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__62234(s__62235){
return (new cljs.core.LazySeq(null,(function (){
var s__62235__$1 = s__62235;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62235__$1);
if(temp__5735__auto__){
var s__62235__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62235__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62235__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62237 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62236 = (0);
while(true){
if((i__62236 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62236);
cljs.core.chunk_append(b__62237,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__62429 = (i__62236 + (1));
i__62236 = G__62429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62237),sablono$core$iter__62234(cljs.core.chunk_rest(s__62235__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62237),null);
}
} else {
var style = cljs.core.first(s__62235__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__62234(cljs.core.rest(s__62235__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq62227){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62227));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__62251 = goog.dom.getDocument().body;
var G__62252 = (function (){var G__62253 = "script";
var G__62254 = ({"src": src});
return goog.dom.createDom(G__62253,G__62254);
})();
return goog.dom.appendChild(G__62251,G__62252);
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
sablono.core.link_to62258 = (function sablono$core$link_to62258(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62433 = arguments.length;
var i__4790__auto___62434 = (0);
while(true){
if((i__4790__auto___62434 < len__4789__auto___62433)){
args__4795__auto__.push((arguments[i__4790__auto___62434]));

var G__62435 = (i__4790__auto___62434 + (1));
i__4790__auto___62434 = G__62435;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to62258.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to62258.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to62258.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to62258.cljs$lang$applyTo = (function (seq62260){
var G__62261 = cljs.core.first(seq62260);
var seq62260__$1 = cljs.core.next(seq62260);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62261,seq62260__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to62258);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to62266 = (function sablono$core$mail_to62266(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62436 = arguments.length;
var i__4790__auto___62437 = (0);
while(true){
if((i__4790__auto___62437 < len__4789__auto___62436)){
args__4795__auto__.push((arguments[i__4790__auto___62437]));

var G__62438 = (i__4790__auto___62437 + (1));
i__4790__auto___62437 = G__62438;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to62266.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to62266.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__62274){
var vec__62275 = p__62274;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62275,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to62266.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to62266.cljs$lang$applyTo = (function (seq62268){
var G__62269 = cljs.core.first(seq62268);
var seq62268__$1 = cljs.core.next(seq62268);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62269,seq62268__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to62266);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list62278 = (function sablono$core$unordered_list62278(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list62278_$_iter__62279(s__62280){
return (new cljs.core.LazySeq(null,(function (){
var s__62280__$1 = s__62280;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62280__$1);
if(temp__5735__auto__){
var s__62280__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62280__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62280__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62282 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62281 = (0);
while(true){
if((i__62281 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62281);
cljs.core.chunk_append(b__62282,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__62441 = (i__62281 + (1));
i__62281 = G__62441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62282),sablono$core$unordered_list62278_$_iter__62279(cljs.core.chunk_rest(s__62280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62282),null);
}
} else {
var x = cljs.core.first(s__62280__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list62278_$_iter__62279(cljs.core.rest(s__62280__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list62278);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list62289 = (function sablono$core$ordered_list62289(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list62289_$_iter__62290(s__62291){
return (new cljs.core.LazySeq(null,(function (){
var s__62291__$1 = s__62291;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62291__$1);
if(temp__5735__auto__){
var s__62291__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62291__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62291__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62293 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62292 = (0);
while(true){
if((i__62292 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62292);
cljs.core.chunk_append(b__62293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__62443 = (i__62292 + (1));
i__62292 = G__62443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62293),sablono$core$ordered_list62289_$_iter__62290(cljs.core.chunk_rest(s__62291__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62293),null);
}
} else {
var x = cljs.core.first(s__62291__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list62289_$_iter__62290(cljs.core.rest(s__62291__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list62289);
/**
 * Create an image element.
 */
sablono.core.image62300 = (function sablono$core$image62300(var_args){
var G__62302 = arguments.length;
switch (G__62302) {
case 1:
return sablono.core.image62300.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image62300.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image62300.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image62300.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image62300.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image62300);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__62303_SHARP_,p2__62304_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__62303_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__62304_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__62305_SHARP_,p2__62306_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__62305_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__62306_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__62308 = arguments.length;
switch (G__62308) {
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
sablono.core.color_field62309 = (function sablono$core$color_field62309(var_args){
var G__62311 = arguments.length;
switch (G__62311) {
case 1:
return sablono.core.color_field62309.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field62309.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field62309.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__62201__auto__);
}));

(sablono.core.color_field62309.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.color_field62309.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field62309);

/**
 * Creates a date input field.
 */
sablono.core.date_field62312 = (function sablono$core$date_field62312(var_args){
var G__62314 = arguments.length;
switch (G__62314) {
case 1:
return sablono.core.date_field62312.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field62312.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field62312.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__62201__auto__);
}));

(sablono.core.date_field62312.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.date_field62312.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field62312);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field62315 = (function sablono$core$datetime_field62315(var_args){
var G__62317 = arguments.length;
switch (G__62317) {
case 1:
return sablono.core.datetime_field62315.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field62315.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field62315.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__62201__auto__);
}));

(sablono.core.datetime_field62315.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.datetime_field62315.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field62315);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field62318 = (function sablono$core$datetime_local_field62318(var_args){
var G__62320 = arguments.length;
switch (G__62320) {
case 1:
return sablono.core.datetime_local_field62318.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field62318.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field62318.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__62201__auto__);
}));

(sablono.core.datetime_local_field62318.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.datetime_local_field62318.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field62318);

/**
 * Creates a email input field.
 */
sablono.core.email_field62321 = (function sablono$core$email_field62321(var_args){
var G__62323 = arguments.length;
switch (G__62323) {
case 1:
return sablono.core.email_field62321.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field62321.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field62321.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__62201__auto__);
}));

(sablono.core.email_field62321.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.email_field62321.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field62321);

/**
 * Creates a file input field.
 */
sablono.core.file_field62324 = (function sablono$core$file_field62324(var_args){
var G__62326 = arguments.length;
switch (G__62326) {
case 1:
return sablono.core.file_field62324.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field62324.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field62324.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__62201__auto__);
}));

(sablono.core.file_field62324.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.file_field62324.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field62324);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field62327 = (function sablono$core$hidden_field62327(var_args){
var G__62329 = arguments.length;
switch (G__62329) {
case 1:
return sablono.core.hidden_field62327.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field62327.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field62327.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__62201__auto__);
}));

(sablono.core.hidden_field62327.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.hidden_field62327.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field62327);

/**
 * Creates a month input field.
 */
sablono.core.month_field62330 = (function sablono$core$month_field62330(var_args){
var G__62332 = arguments.length;
switch (G__62332) {
case 1:
return sablono.core.month_field62330.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field62330.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field62330.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__62201__auto__);
}));

(sablono.core.month_field62330.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.month_field62330.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field62330);

/**
 * Creates a number input field.
 */
sablono.core.number_field62333 = (function sablono$core$number_field62333(var_args){
var G__62335 = arguments.length;
switch (G__62335) {
case 1:
return sablono.core.number_field62333.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field62333.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field62333.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__62201__auto__);
}));

(sablono.core.number_field62333.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.number_field62333.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field62333);

/**
 * Creates a password input field.
 */
sablono.core.password_field62336 = (function sablono$core$password_field62336(var_args){
var G__62338 = arguments.length;
switch (G__62338) {
case 1:
return sablono.core.password_field62336.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field62336.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field62336.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__62201__auto__);
}));

(sablono.core.password_field62336.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.password_field62336.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field62336);

/**
 * Creates a range input field.
 */
sablono.core.range_field62339 = (function sablono$core$range_field62339(var_args){
var G__62341 = arguments.length;
switch (G__62341) {
case 1:
return sablono.core.range_field62339.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field62339.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field62339.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__62201__auto__);
}));

(sablono.core.range_field62339.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.range_field62339.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field62339);

/**
 * Creates a search input field.
 */
sablono.core.search_field62342 = (function sablono$core$search_field62342(var_args){
var G__62344 = arguments.length;
switch (G__62344) {
case 1:
return sablono.core.search_field62342.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field62342.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field62342.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__62201__auto__);
}));

(sablono.core.search_field62342.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.search_field62342.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field62342);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field62345 = (function sablono$core$tel_field62345(var_args){
var G__62347 = arguments.length;
switch (G__62347) {
case 1:
return sablono.core.tel_field62345.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field62345.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field62345.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__62201__auto__);
}));

(sablono.core.tel_field62345.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.tel_field62345.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field62345);

/**
 * Creates a text input field.
 */
sablono.core.text_field62348 = (function sablono$core$text_field62348(var_args){
var G__62350 = arguments.length;
switch (G__62350) {
case 1:
return sablono.core.text_field62348.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field62348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field62348.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__62201__auto__);
}));

(sablono.core.text_field62348.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.text_field62348.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field62348);

/**
 * Creates a time input field.
 */
sablono.core.time_field62351 = (function sablono$core$time_field62351(var_args){
var G__62353 = arguments.length;
switch (G__62353) {
case 1:
return sablono.core.time_field62351.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field62351.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field62351.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__62201__auto__);
}));

(sablono.core.time_field62351.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.time_field62351.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field62351);

/**
 * Creates a url input field.
 */
sablono.core.url_field62354 = (function sablono$core$url_field62354(var_args){
var G__62356 = arguments.length;
switch (G__62356) {
case 1:
return sablono.core.url_field62354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field62354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field62354.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__62201__auto__);
}));

(sablono.core.url_field62354.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.url_field62354.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field62354);

/**
 * Creates a week input field.
 */
sablono.core.week_field62379 = (function sablono$core$week_field62379(var_args){
var G__62381 = arguments.length;
switch (G__62381) {
case 1:
return sablono.core.week_field62379.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field62379.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field62379.cljs$core$IFn$_invoke$arity$1 = (function (name__62201__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__62201__auto__);
}));

(sablono.core.week_field62379.cljs$core$IFn$_invoke$arity$2 = (function (name__62201__auto__,value__62202__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__62201__auto__,value__62202__auto__);
}));

(sablono.core.week_field62379.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field62379);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box62382 = (function sablono$core$check_box62382(var_args){
var G__62384 = arguments.length;
switch (G__62384) {
case 1:
return sablono.core.check_box62382.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box62382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box62382.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box62382.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box62382.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box62382.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box62382.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box62382);
/**
 * Creates a radio button.
 */
sablono.core.radio_button62385 = (function sablono$core$radio_button62385(var_args){
var G__62387 = arguments.length;
switch (G__62387) {
case 1:
return sablono.core.radio_button62385.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button62385.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button62385.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button62385.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button62385.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button62385.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button62385.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button62385);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__62388 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__62388);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options62389 = (function sablono$core$select_options62389(coll){
var iter__4582__auto__ = (function sablono$core$select_options62389_$_iter__62390(s__62391){
return (new cljs.core.LazySeq(null,(function (){
var s__62391__$1 = s__62391;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62391__$1);
if(temp__5735__auto__){
var s__62391__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62391__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__62391__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__62393 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__62392 = (0);
while(true){
if((i__62392 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__62392);
cljs.core.chunk_append(b__62393,((cljs.core.sequential_QMARK_(x))?(function (){var vec__62394 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62394,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62394,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62394,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options62389.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options62389.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options62389.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__62543 = (i__62392 + (1));
i__62392 = G__62543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62393),sablono$core$select_options62389_$_iter__62390(cljs.core.chunk_rest(s__62391__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62393),null);
}
} else {
var x = cljs.core.first(s__62391__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__62397 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62397,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62397,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62397,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options62389.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options62389.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options62389.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options62389_$_iter__62390(cljs.core.rest(s__62391__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options62389);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down62400 = (function sablono$core$drop_down62400(var_args){
var G__62402 = arguments.length;
switch (G__62402) {
case 2:
return sablono.core.drop_down62400.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down62400.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down62400.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down62400.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down62400.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down62400.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down62400);
/**
 * Creates a text area element.
 */
sablono.core.text_area62403 = (function sablono$core$text_area62403(var_args){
var G__62405 = arguments.length;
switch (G__62405) {
case 1:
return sablono.core.text_area62403.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area62403.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area62403.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area62403.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area62403.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area62403);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label62406 = (function sablono$core$label62406(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label62406);
/**
 * Creates a submit button.
 */
sablono.core.submit_button62407 = (function sablono$core$submit_button62407(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button62407);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button62408 = (function sablono$core$reset_button62408(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button62408);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to62409 = (function sablono$core$form_to62409(var_args){
var args__4795__auto__ = [];
var len__4789__auto___62549 = arguments.length;
var i__4790__auto___62550 = (0);
while(true){
if((i__4790__auto___62550 < len__4789__auto___62549)){
args__4795__auto__.push((arguments[i__4790__auto___62550]));

var G__62551 = (i__4790__auto___62550 + (1));
i__4790__auto___62550 = G__62551;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to62409.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to62409.cljs$core$IFn$_invoke$arity$variadic = (function (p__62412,body){
var vec__62413 = p__62412;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62413,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62413,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__62416 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__62417 = "_method";
var G__62418 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__62416,G__62417,G__62418) : sablono.core.hidden_field.call(null,G__62416,G__62417,G__62418));
})()], null)),body));
}));

(sablono.core.form_to62409.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to62409.cljs$lang$applyTo = (function (seq62410){
var G__62411 = cljs.core.first(seq62410);
var seq62410__$1 = cljs.core.next(seq62410);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62411,seq62410__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to62409);

//# sourceMappingURL=sablono.core.js.map
