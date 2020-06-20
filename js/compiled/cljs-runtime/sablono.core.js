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
var G__52307__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__52096 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__52097 = cljs.core.seq(vec__52096);
var first__52098 = cljs.core.first(seq__52097);
var seq__52097__$1 = cljs.core.next(seq__52097);
var tag = first__52098;
var body = seq__52097__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__52307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52308__i = 0, G__52308__a = new Array(arguments.length -  0);
while (G__52308__i < G__52308__a.length) {G__52308__a[G__52308__i] = arguments[G__52308__i + 0]; ++G__52308__i;}
  args = new cljs.core.IndexedSeq(G__52308__a,0,null);
} 
return G__52307__delegate.call(this,args);};
G__52307.cljs$lang$maxFixedArity = 0;
G__52307.cljs$lang$applyTo = (function (arglist__52309){
var args = cljs.core.seq(arglist__52309);
return G__52307__delegate(args);
});
G__52307.cljs$core$IFn$_invoke$arity$variadic = G__52307__delegate;
return G__52307;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__52099(s__52100){
return (new cljs.core.LazySeq(null,(function (){
var s__52100__$1 = s__52100;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52100__$1);
if(temp__5735__auto__){
var s__52100__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52100__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52100__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52102 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52101 = (0);
while(true){
if((i__52101 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__52101);
cljs.core.chunk_append(b__52102,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__52312 = (i__52101 + (1));
i__52101 = G__52312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52102),sablono$core$update_arglists_$_iter__52099(cljs.core.chunk_rest(s__52100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52102),null);
}
} else {
var args = cljs.core.first(s__52100__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__52099(cljs.core.rest(s__52100__$2)));
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
var len__4789__auto___52315 = arguments.length;
var i__4790__auto___52316 = (0);
while(true){
if((i__4790__auto___52316 < len__4789__auto___52315)){
args__4795__auto__.push((arguments[i__4790__auto___52316]));

var G__52317 = (i__4790__auto___52316 + (1));
i__4790__auto___52316 = G__52317;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__52104(s__52105){
return (new cljs.core.LazySeq(null,(function (){
var s__52105__$1 = s__52105;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52105__$1);
if(temp__5735__auto__){
var s__52105__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52105__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52105__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52107 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52106 = (0);
while(true){
if((i__52106 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__52106);
cljs.core.chunk_append(b__52107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__52319 = (i__52106 + (1));
i__52106 = G__52319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52107),sablono$core$iter__52104(cljs.core.chunk_rest(s__52105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52107),null);
}
} else {
var style = cljs.core.first(s__52105__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__52104(cljs.core.rest(s__52105__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq52103){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52103));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__52116 = goog.dom.getDocument().body;
var G__52117 = (function (){var G__52120 = "script";
var G__52121 = ({"src": src});
return goog.dom.createDom(G__52120,G__52121);
})();
return goog.dom.appendChild(G__52116,G__52117);
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
sablono.core.link_to52122 = (function sablono$core$link_to52122(var_args){
var args__4795__auto__ = [];
var len__4789__auto___52321 = arguments.length;
var i__4790__auto___52322 = (0);
while(true){
if((i__4790__auto___52322 < len__4789__auto___52321)){
args__4795__auto__.push((arguments[i__4790__auto___52322]));

var G__52323 = (i__4790__auto___52322 + (1));
i__4790__auto___52322 = G__52323;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to52122.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to52122.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to52122.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to52122.cljs$lang$applyTo = (function (seq52126){
var G__52127 = cljs.core.first(seq52126);
var seq52126__$1 = cljs.core.next(seq52126);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52127,seq52126__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to52122);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to52134 = (function sablono$core$mail_to52134(var_args){
var args__4795__auto__ = [];
var len__4789__auto___52324 = arguments.length;
var i__4790__auto___52325 = (0);
while(true){
if((i__4790__auto___52325 < len__4789__auto___52324)){
args__4795__auto__.push((arguments[i__4790__auto___52325]));

var G__52326 = (i__4790__auto___52325 + (1));
i__4790__auto___52325 = G__52326;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to52134.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to52134.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__52140){
var vec__52141 = p__52140;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52141,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to52134.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to52134.cljs$lang$applyTo = (function (seq52136){
var G__52137 = cljs.core.first(seq52136);
var seq52136__$1 = cljs.core.next(seq52136);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52137,seq52136__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to52134);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list52144 = (function sablono$core$unordered_list52144(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list52144_$_iter__52145(s__52146){
return (new cljs.core.LazySeq(null,(function (){
var s__52146__$1 = s__52146;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52146__$1);
if(temp__5735__auto__){
var s__52146__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52146__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52146__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52148 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52147 = (0);
while(true){
if((i__52147 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__52147);
cljs.core.chunk_append(b__52148,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__52330 = (i__52147 + (1));
i__52147 = G__52330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52148),sablono$core$unordered_list52144_$_iter__52145(cljs.core.chunk_rest(s__52146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52148),null);
}
} else {
var x = cljs.core.first(s__52146__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list52144_$_iter__52145(cljs.core.rest(s__52146__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list52144);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list52149 = (function sablono$core$ordered_list52149(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list52149_$_iter__52150(s__52151){
return (new cljs.core.LazySeq(null,(function (){
var s__52151__$1 = s__52151;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52151__$1);
if(temp__5735__auto__){
var s__52151__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52151__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52151__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52153 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52152 = (0);
while(true){
if((i__52152 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__52152);
cljs.core.chunk_append(b__52153,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__52332 = (i__52152 + (1));
i__52152 = G__52332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52153),sablono$core$ordered_list52149_$_iter__52150(cljs.core.chunk_rest(s__52151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52153),null);
}
} else {
var x = cljs.core.first(s__52151__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list52149_$_iter__52150(cljs.core.rest(s__52151__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list52149);
/**
 * Create an image element.
 */
sablono.core.image52154 = (function sablono$core$image52154(var_args){
var G__52156 = arguments.length;
switch (G__52156) {
case 1:
return sablono.core.image52154.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image52154.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image52154.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image52154.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image52154.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image52154);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__52157_SHARP_,p2__52158_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52157_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__52158_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__52159_SHARP_,p2__52160_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52159_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__52160_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__52162 = arguments.length;
switch (G__52162) {
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
sablono.core.color_field52163 = (function sablono$core$color_field52163(var_args){
var G__52165 = arguments.length;
switch (G__52165) {
case 1:
return sablono.core.color_field52163.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field52163.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field52163.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__52088__auto__);
}));

(sablono.core.color_field52163.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.color_field52163.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field52163);

/**
 * Creates a date input field.
 */
sablono.core.date_field52166 = (function sablono$core$date_field52166(var_args){
var G__52168 = arguments.length;
switch (G__52168) {
case 1:
return sablono.core.date_field52166.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field52166.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field52166.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__52088__auto__);
}));

(sablono.core.date_field52166.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.date_field52166.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field52166);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field52169 = (function sablono$core$datetime_field52169(var_args){
var G__52171 = arguments.length;
switch (G__52171) {
case 1:
return sablono.core.datetime_field52169.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field52169.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field52169.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__52088__auto__);
}));

(sablono.core.datetime_field52169.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.datetime_field52169.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field52169);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field52172 = (function sablono$core$datetime_local_field52172(var_args){
var G__52174 = arguments.length;
switch (G__52174) {
case 1:
return sablono.core.datetime_local_field52172.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field52172.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field52172.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__52088__auto__);
}));

(sablono.core.datetime_local_field52172.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.datetime_local_field52172.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field52172);

/**
 * Creates a email input field.
 */
sablono.core.email_field52175 = (function sablono$core$email_field52175(var_args){
var G__52177 = arguments.length;
switch (G__52177) {
case 1:
return sablono.core.email_field52175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field52175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field52175.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__52088__auto__);
}));

(sablono.core.email_field52175.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.email_field52175.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field52175);

/**
 * Creates a file input field.
 */
sablono.core.file_field52178 = (function sablono$core$file_field52178(var_args){
var G__52180 = arguments.length;
switch (G__52180) {
case 1:
return sablono.core.file_field52178.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field52178.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field52178.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__52088__auto__);
}));

(sablono.core.file_field52178.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.file_field52178.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field52178);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field52181 = (function sablono$core$hidden_field52181(var_args){
var G__52183 = arguments.length;
switch (G__52183) {
case 1:
return sablono.core.hidden_field52181.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field52181.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field52181.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__52088__auto__);
}));

(sablono.core.hidden_field52181.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.hidden_field52181.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field52181);

/**
 * Creates a month input field.
 */
sablono.core.month_field52186 = (function sablono$core$month_field52186(var_args){
var G__52189 = arguments.length;
switch (G__52189) {
case 1:
return sablono.core.month_field52186.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field52186.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field52186.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__52088__auto__);
}));

(sablono.core.month_field52186.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.month_field52186.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field52186);

/**
 * Creates a number input field.
 */
sablono.core.number_field52193 = (function sablono$core$number_field52193(var_args){
var G__52195 = arguments.length;
switch (G__52195) {
case 1:
return sablono.core.number_field52193.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field52193.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field52193.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__52088__auto__);
}));

(sablono.core.number_field52193.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.number_field52193.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field52193);

/**
 * Creates a password input field.
 */
sablono.core.password_field52196 = (function sablono$core$password_field52196(var_args){
var G__52198 = arguments.length;
switch (G__52198) {
case 1:
return sablono.core.password_field52196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field52196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field52196.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__52088__auto__);
}));

(sablono.core.password_field52196.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.password_field52196.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field52196);

/**
 * Creates a range input field.
 */
sablono.core.range_field52202 = (function sablono$core$range_field52202(var_args){
var G__52204 = arguments.length;
switch (G__52204) {
case 1:
return sablono.core.range_field52202.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field52202.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field52202.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__52088__auto__);
}));

(sablono.core.range_field52202.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.range_field52202.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field52202);

/**
 * Creates a search input field.
 */
sablono.core.search_field52205 = (function sablono$core$search_field52205(var_args){
var G__52207 = arguments.length;
switch (G__52207) {
case 1:
return sablono.core.search_field52205.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field52205.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field52205.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__52088__auto__);
}));

(sablono.core.search_field52205.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.search_field52205.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field52205);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field52209 = (function sablono$core$tel_field52209(var_args){
var G__52211 = arguments.length;
switch (G__52211) {
case 1:
return sablono.core.tel_field52209.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field52209.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field52209.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__52088__auto__);
}));

(sablono.core.tel_field52209.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.tel_field52209.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field52209);

/**
 * Creates a text input field.
 */
sablono.core.text_field52214 = (function sablono$core$text_field52214(var_args){
var G__52216 = arguments.length;
switch (G__52216) {
case 1:
return sablono.core.text_field52214.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field52214.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field52214.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__52088__auto__);
}));

(sablono.core.text_field52214.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.text_field52214.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field52214);

/**
 * Creates a time input field.
 */
sablono.core.time_field52217 = (function sablono$core$time_field52217(var_args){
var G__52219 = arguments.length;
switch (G__52219) {
case 1:
return sablono.core.time_field52217.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field52217.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field52217.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__52088__auto__);
}));

(sablono.core.time_field52217.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.time_field52217.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field52217);

/**
 * Creates a url input field.
 */
sablono.core.url_field52220 = (function sablono$core$url_field52220(var_args){
var G__52222 = arguments.length;
switch (G__52222) {
case 1:
return sablono.core.url_field52220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field52220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field52220.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__52088__auto__);
}));

(sablono.core.url_field52220.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.url_field52220.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field52220);

/**
 * Creates a week input field.
 */
sablono.core.week_field52223 = (function sablono$core$week_field52223(var_args){
var G__52226 = arguments.length;
switch (G__52226) {
case 1:
return sablono.core.week_field52223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field52223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field52223.cljs$core$IFn$_invoke$arity$1 = (function (name__52088__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__52088__auto__);
}));

(sablono.core.week_field52223.cljs$core$IFn$_invoke$arity$2 = (function (name__52088__auto__,value__52089__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__52088__auto__,value__52089__auto__);
}));

(sablono.core.week_field52223.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field52223);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box52227 = (function sablono$core$check_box52227(var_args){
var G__52229 = arguments.length;
switch (G__52229) {
case 1:
return sablono.core.check_box52227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box52227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box52227.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box52227.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box52227.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box52227.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box52227.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box52227);
/**
 * Creates a radio button.
 */
sablono.core.radio_button52246 = (function sablono$core$radio_button52246(var_args){
var G__52249 = arguments.length;
switch (G__52249) {
case 1:
return sablono.core.radio_button52246.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button52246.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button52246.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button52246.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button52246.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button52246.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button52246.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button52246);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__52263 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__52263);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options52264 = (function sablono$core$select_options52264(coll){
var iter__4582__auto__ = (function sablono$core$select_options52264_$_iter__52265(s__52266){
return (new cljs.core.LazySeq(null,(function (){
var s__52266__$1 = s__52266;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52266__$1);
if(temp__5735__auto__){
var s__52266__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52266__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52266__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52268 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52267 = (0);
while(true){
if((i__52267 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__52267);
cljs.core.chunk_append(b__52268,((cljs.core.sequential_QMARK_(x))?(function (){var vec__52274 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52274,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52274,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52274,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options52264.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options52264.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options52264.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__52405 = (i__52267 + (1));
i__52267 = G__52405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52268),sablono$core$select_options52264_$_iter__52265(cljs.core.chunk_rest(s__52266__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52268),null);
}
} else {
var x = cljs.core.first(s__52266__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__52277 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52277,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52277,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52277,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options52264.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options52264.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options52264.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options52264_$_iter__52265(cljs.core.rest(s__52266__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options52264);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down52281 = (function sablono$core$drop_down52281(var_args){
var G__52284 = arguments.length;
switch (G__52284) {
case 2:
return sablono.core.drop_down52281.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down52281.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down52281.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down52281.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down52281.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down52281.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down52281);
/**
 * Creates a text area element.
 */
sablono.core.text_area52286 = (function sablono$core$text_area52286(var_args){
var G__52289 = arguments.length;
switch (G__52289) {
case 1:
return sablono.core.text_area52286.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area52286.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area52286.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area52286.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area52286.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area52286);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label52291 = (function sablono$core$label52291(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label52291);
/**
 * Creates a submit button.
 */
sablono.core.submit_button52292 = (function sablono$core$submit_button52292(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button52292);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button52293 = (function sablono$core$reset_button52293(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button52293);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to52297 = (function sablono$core$form_to52297(var_args){
var args__4795__auto__ = [];
var len__4789__auto___52412 = arguments.length;
var i__4790__auto___52413 = (0);
while(true){
if((i__4790__auto___52413 < len__4789__auto___52412)){
args__4795__auto__.push((arguments[i__4790__auto___52413]));

var G__52414 = (i__4790__auto___52413 + (1));
i__4790__auto___52413 = G__52414;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to52297.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to52297.cljs$core$IFn$_invoke$arity$variadic = (function (p__52300,body){
var vec__52301 = p__52300;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52301,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52301,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__52304 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__52305 = "_method";
var G__52306 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__52304,G__52305,G__52306) : sablono.core.hidden_field.call(null,G__52304,G__52305,G__52306));
})()], null)),body));
}));

(sablono.core.form_to52297.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to52297.cljs$lang$applyTo = (function (seq52298){
var G__52299 = cljs.core.first(seq52298);
var seq52298__$1 = cljs.core.next(seq52298);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52299,seq52298__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to52297);

//# sourceMappingURL=sablono.core.js.map
