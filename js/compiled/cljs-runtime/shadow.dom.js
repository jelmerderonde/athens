goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__57708 = coll;
var G__57709 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__57708,G__57709) : shadow.dom.lazy_native_coll_seq.call(null,G__57708,G__57709));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__57729 = arguments.length;
switch (G__57729) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__57738 = arguments.length;
switch (G__57738) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__57745 = arguments.length;
switch (G__57745) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__57751 = arguments.length;
switch (G__57751) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__57758 = arguments.length;
switch (G__57758) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__57760 = document;
var G__57761 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57760,G__57761);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__57763 = shadow.dom.dom_node(parent);
var G__57764 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57763,G__57764);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__57768 = shadow.dom.dom_node(el);
var G__57769 = cls;
return goog.dom.classlist.add(G__57768,G__57769);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__57771 = shadow.dom.dom_node(el);
var G__57772 = cls;
return goog.dom.classlist.remove(G__57771,G__57772);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__57776 = arguments.length;
switch (G__57776) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__57777 = shadow.dom.dom_node(el);
var G__57778 = cls;
return goog.dom.classlist.toggle(G__57777,G__57778);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e57781){if((e57781 instanceof Object)){
var e = e57781;
return console.log("didnt support attachEvent",el,e);
} else {
throw e57781;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__57787 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__57788 = null;
var count__57789 = (0);
var i__57790 = (0);
while(true){
if((i__57790 < count__57789)){
var el = chunk__57788.cljs$core$IIndexed$_nth$arity$2(null,i__57790);
var handler_58331__$1 = ((function (seq__57787,chunk__57788,count__57789,i__57790,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57787,chunk__57788,count__57789,i__57790,el))
;
var G__57804_58336 = el;
var G__57805_58337 = cljs.core.name(ev);
var G__57806_58338 = handler_58331__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57804_58336,G__57805_58337,G__57806_58338) : shadow.dom.dom_listen.call(null,G__57804_58336,G__57805_58337,G__57806_58338));


var G__58339 = seq__57787;
var G__58340 = chunk__57788;
var G__58341 = count__57789;
var G__58342 = (i__57790 + (1));
seq__57787 = G__58339;
chunk__57788 = G__58340;
count__57789 = G__58341;
i__57790 = G__58342;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57787);
if(temp__5735__auto__){
var seq__57787__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57787__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57787__$1);
var G__58343 = cljs.core.chunk_rest(seq__57787__$1);
var G__58344 = c__4609__auto__;
var G__58345 = cljs.core.count(c__4609__auto__);
var G__58346 = (0);
seq__57787 = G__58343;
chunk__57788 = G__58344;
count__57789 = G__58345;
i__57790 = G__58346;
continue;
} else {
var el = cljs.core.first(seq__57787__$1);
var handler_58347__$1 = ((function (seq__57787,chunk__57788,count__57789,i__57790,el,seq__57787__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57787,chunk__57788,count__57789,i__57790,el,seq__57787__$1,temp__5735__auto__))
;
var G__57811_58348 = el;
var G__57812_58349 = cljs.core.name(ev);
var G__57813_58350 = handler_58347__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57811_58348,G__57812_58349,G__57813_58350) : shadow.dom.dom_listen.call(null,G__57811_58348,G__57812_58349,G__57813_58350));


var G__58351 = cljs.core.next(seq__57787__$1);
var G__58352 = null;
var G__58353 = (0);
var G__58354 = (0);
seq__57787 = G__58351;
chunk__57788 = G__58352;
count__57789 = G__58353;
i__57790 = G__58354;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__57819 = arguments.length;
switch (G__57819) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__57823 = shadow.dom.dom_node(el);
var G__57824 = cljs.core.name(ev);
var G__57825 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57823,G__57824,G__57825) : shadow.dom.dom_listen.call(null,G__57823,G__57824,G__57825));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__57828 = shadow.dom.dom_node(el);
var G__57829 = cljs.core.name(ev);
var G__57830 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__57828,G__57829,G__57830) : shadow.dom.dom_listen_remove.call(null,G__57828,G__57829,G__57830));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__57831 = cljs.core.seq(events);
var chunk__57832 = null;
var count__57833 = (0);
var i__57834 = (0);
while(true){
if((i__57834 < count__57833)){
var vec__57842 = chunk__57832.cljs$core$IIndexed$_nth$arity$2(null,i__57834);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57842,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57842,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58375 = seq__57831;
var G__58376 = chunk__57832;
var G__58377 = count__57833;
var G__58378 = (i__57834 + (1));
seq__57831 = G__58375;
chunk__57832 = G__58376;
count__57833 = G__58377;
i__57834 = G__58378;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57831);
if(temp__5735__auto__){
var seq__57831__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57831__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57831__$1);
var G__58379 = cljs.core.chunk_rest(seq__57831__$1);
var G__58380 = c__4609__auto__;
var G__58381 = cljs.core.count(c__4609__auto__);
var G__58382 = (0);
seq__57831 = G__58379;
chunk__57832 = G__58380;
count__57833 = G__58381;
i__57834 = G__58382;
continue;
} else {
var vec__57846 = cljs.core.first(seq__57831__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57846,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57846,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58384 = cljs.core.next(seq__57831__$1);
var G__58385 = null;
var G__58386 = (0);
var G__58387 = (0);
seq__57831 = G__58384;
chunk__57832 = G__58385;
count__57833 = G__58386;
i__57834 = G__58387;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__57850 = cljs.core.seq(styles);
var chunk__57851 = null;
var count__57852 = (0);
var i__57853 = (0);
while(true){
if((i__57853 < count__57852)){
var vec__57872 = chunk__57851.cljs$core$IIndexed$_nth$arity$2(null,i__57853);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57872,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57872,(1),null);
var G__57876_58388 = dom;
var G__57877_58389 = cljs.core.name(k);
var G__57878_58390 = (((v == null))?"":v);
goog.style.setStyle(G__57876_58388,G__57877_58389,G__57878_58390);


var G__58391 = seq__57850;
var G__58392 = chunk__57851;
var G__58393 = count__57852;
var G__58394 = (i__57853 + (1));
seq__57850 = G__58391;
chunk__57851 = G__58392;
count__57852 = G__58393;
i__57853 = G__58394;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57850);
if(temp__5735__auto__){
var seq__57850__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57850__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57850__$1);
var G__58399 = cljs.core.chunk_rest(seq__57850__$1);
var G__58400 = c__4609__auto__;
var G__58401 = cljs.core.count(c__4609__auto__);
var G__58402 = (0);
seq__57850 = G__58399;
chunk__57851 = G__58400;
count__57852 = G__58401;
i__57853 = G__58402;
continue;
} else {
var vec__57880 = cljs.core.first(seq__57850__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57880,(1),null);
var G__57883_58403 = dom;
var G__57884_58404 = cljs.core.name(k);
var G__57885_58405 = (((v == null))?"":v);
goog.style.setStyle(G__57883_58403,G__57884_58404,G__57885_58405);


var G__58406 = cljs.core.next(seq__57850__$1);
var G__58407 = null;
var G__58408 = (0);
var G__58409 = (0);
seq__57850 = G__58406;
chunk__57851 = G__58407;
count__57852 = G__58408;
i__57853 = G__58409;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__57890_58411 = key;
var G__57890_58412__$1 = (((G__57890_58411 instanceof cljs.core.Keyword))?G__57890_58411.fqn:null);
switch (G__57890_58412__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_58420 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_58420,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_58420,"aria-");
}
})())){
el.setAttribute(ks_58420,value);
} else {
(el[ks_58420] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__57897 = shadow.dom.dom_node(el);
var G__57898 = cls;
return goog.dom.classlist.contains(G__57897,G__57898);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__57907){
var map__57908 = p__57907;
var map__57908__$1 = (((((!((map__57908 == null))))?(((((map__57908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57908):map__57908);
var props = map__57908__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57908__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__57911 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57911,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57911,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57911,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__57915 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__57915,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__57915;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__57917 = arguments.length;
switch (G__57917) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__57921){
var vec__57922 = p__57921;
var seq__57923 = cljs.core.seq(vec__57922);
var first__57924 = cljs.core.first(seq__57923);
var seq__57923__$1 = cljs.core.next(seq__57923);
var nn = first__57924;
var first__57924__$1 = cljs.core.first(seq__57923__$1);
var seq__57923__$2 = cljs.core.next(seq__57923__$1);
var np = first__57924__$1;
var nc = seq__57923__$2;
var node = vec__57922;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57925 = nn;
var G__57926 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57925,G__57926) : create_fn.call(null,G__57925,G__57926));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57927 = nn;
var G__57928 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57927,G__57928) : create_fn.call(null,G__57927,G__57928));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__57931 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57931,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57931,(1),null);
var seq__57934_58448 = cljs.core.seq(node_children);
var chunk__57935_58449 = null;
var count__57936_58450 = (0);
var i__57937_58451 = (0);
while(true){
if((i__57937_58451 < count__57936_58450)){
var child_struct_58454 = chunk__57935_58449.cljs$core$IIndexed$_nth$arity$2(null,i__57937_58451);
var children_58455 = shadow.dom.dom_node(child_struct_58454);
if(cljs.core.seq_QMARK_(children_58455)){
var seq__57964_58456 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58455));
var chunk__57966_58457 = null;
var count__57967_58458 = (0);
var i__57968_58459 = (0);
while(true){
if((i__57968_58459 < count__57967_58458)){
var child_58461 = chunk__57966_58457.cljs$core$IIndexed$_nth$arity$2(null,i__57968_58459);
if(cljs.core.truth_(child_58461)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58461);


var G__58462 = seq__57964_58456;
var G__58463 = chunk__57966_58457;
var G__58464 = count__57967_58458;
var G__58465 = (i__57968_58459 + (1));
seq__57964_58456 = G__58462;
chunk__57966_58457 = G__58463;
count__57967_58458 = G__58464;
i__57968_58459 = G__58465;
continue;
} else {
var G__58467 = seq__57964_58456;
var G__58468 = chunk__57966_58457;
var G__58469 = count__57967_58458;
var G__58470 = (i__57968_58459 + (1));
seq__57964_58456 = G__58467;
chunk__57966_58457 = G__58468;
count__57967_58458 = G__58469;
i__57968_58459 = G__58470;
continue;
}
} else {
var temp__5735__auto___58474 = cljs.core.seq(seq__57964_58456);
if(temp__5735__auto___58474){
var seq__57964_58475__$1 = temp__5735__auto___58474;
if(cljs.core.chunked_seq_QMARK_(seq__57964_58475__$1)){
var c__4609__auto___58477 = cljs.core.chunk_first(seq__57964_58475__$1);
var G__58478 = cljs.core.chunk_rest(seq__57964_58475__$1);
var G__58479 = c__4609__auto___58477;
var G__58480 = cljs.core.count(c__4609__auto___58477);
var G__58481 = (0);
seq__57964_58456 = G__58478;
chunk__57966_58457 = G__58479;
count__57967_58458 = G__58480;
i__57968_58459 = G__58481;
continue;
} else {
var child_58483 = cljs.core.first(seq__57964_58475__$1);
if(cljs.core.truth_(child_58483)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58483);


var G__58485 = cljs.core.next(seq__57964_58475__$1);
var G__58486 = null;
var G__58487 = (0);
var G__58488 = (0);
seq__57964_58456 = G__58485;
chunk__57966_58457 = G__58486;
count__57967_58458 = G__58487;
i__57968_58459 = G__58488;
continue;
} else {
var G__58489 = cljs.core.next(seq__57964_58475__$1);
var G__58490 = null;
var G__58491 = (0);
var G__58492 = (0);
seq__57964_58456 = G__58489;
chunk__57966_58457 = G__58490;
count__57967_58458 = G__58491;
i__57968_58459 = G__58492;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58455);
}


var G__58493 = seq__57934_58448;
var G__58494 = chunk__57935_58449;
var G__58495 = count__57936_58450;
var G__58496 = (i__57937_58451 + (1));
seq__57934_58448 = G__58493;
chunk__57935_58449 = G__58494;
count__57936_58450 = G__58495;
i__57937_58451 = G__58496;
continue;
} else {
var temp__5735__auto___58501 = cljs.core.seq(seq__57934_58448);
if(temp__5735__auto___58501){
var seq__57934_58502__$1 = temp__5735__auto___58501;
if(cljs.core.chunked_seq_QMARK_(seq__57934_58502__$1)){
var c__4609__auto___58504 = cljs.core.chunk_first(seq__57934_58502__$1);
var G__58505 = cljs.core.chunk_rest(seq__57934_58502__$1);
var G__58506 = c__4609__auto___58504;
var G__58507 = cljs.core.count(c__4609__auto___58504);
var G__58508 = (0);
seq__57934_58448 = G__58505;
chunk__57935_58449 = G__58506;
count__57936_58450 = G__58507;
i__57937_58451 = G__58508;
continue;
} else {
var child_struct_58509 = cljs.core.first(seq__57934_58502__$1);
var children_58510 = shadow.dom.dom_node(child_struct_58509);
if(cljs.core.seq_QMARK_(children_58510)){
var seq__57970_58511 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58510));
var chunk__57972_58512 = null;
var count__57973_58513 = (0);
var i__57974_58514 = (0);
while(true){
if((i__57974_58514 < count__57973_58513)){
var child_58515 = chunk__57972_58512.cljs$core$IIndexed$_nth$arity$2(null,i__57974_58514);
if(cljs.core.truth_(child_58515)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58515);


var G__58517 = seq__57970_58511;
var G__58518 = chunk__57972_58512;
var G__58519 = count__57973_58513;
var G__58520 = (i__57974_58514 + (1));
seq__57970_58511 = G__58517;
chunk__57972_58512 = G__58518;
count__57973_58513 = G__58519;
i__57974_58514 = G__58520;
continue;
} else {
var G__58521 = seq__57970_58511;
var G__58522 = chunk__57972_58512;
var G__58523 = count__57973_58513;
var G__58524 = (i__57974_58514 + (1));
seq__57970_58511 = G__58521;
chunk__57972_58512 = G__58522;
count__57973_58513 = G__58523;
i__57974_58514 = G__58524;
continue;
}
} else {
var temp__5735__auto___58525__$1 = cljs.core.seq(seq__57970_58511);
if(temp__5735__auto___58525__$1){
var seq__57970_58526__$1 = temp__5735__auto___58525__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57970_58526__$1)){
var c__4609__auto___58527 = cljs.core.chunk_first(seq__57970_58526__$1);
var G__58528 = cljs.core.chunk_rest(seq__57970_58526__$1);
var G__58529 = c__4609__auto___58527;
var G__58530 = cljs.core.count(c__4609__auto___58527);
var G__58531 = (0);
seq__57970_58511 = G__58528;
chunk__57972_58512 = G__58529;
count__57973_58513 = G__58530;
i__57974_58514 = G__58531;
continue;
} else {
var child_58532 = cljs.core.first(seq__57970_58526__$1);
if(cljs.core.truth_(child_58532)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58532);


var G__58535 = cljs.core.next(seq__57970_58526__$1);
var G__58536 = null;
var G__58537 = (0);
var G__58538 = (0);
seq__57970_58511 = G__58535;
chunk__57972_58512 = G__58536;
count__57973_58513 = G__58537;
i__57974_58514 = G__58538;
continue;
} else {
var G__58542 = cljs.core.next(seq__57970_58526__$1);
var G__58543 = null;
var G__58544 = (0);
var G__58545 = (0);
seq__57970_58511 = G__58542;
chunk__57972_58512 = G__58543;
count__57973_58513 = G__58544;
i__57974_58514 = G__58545;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58510);
}


var G__58547 = cljs.core.next(seq__57934_58502__$1);
var G__58548 = null;
var G__58549 = (0);
var G__58550 = (0);
seq__57934_58448 = G__58547;
chunk__57935_58449 = G__58548;
count__57936_58450 = G__58549;
i__57937_58451 = G__58550;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__57977 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__57977);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__57979 = cljs.core.seq(node);
var chunk__57980 = null;
var count__57981 = (0);
var i__57982 = (0);
while(true){
if((i__57982 < count__57981)){
var n = chunk__57980.cljs$core$IIndexed$_nth$arity$2(null,i__57982);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58557 = seq__57979;
var G__58558 = chunk__57980;
var G__58559 = count__57981;
var G__58560 = (i__57982 + (1));
seq__57979 = G__58557;
chunk__57980 = G__58558;
count__57981 = G__58559;
i__57982 = G__58560;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57979);
if(temp__5735__auto__){
var seq__57979__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57979__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57979__$1);
var G__58563 = cljs.core.chunk_rest(seq__57979__$1);
var G__58564 = c__4609__auto__;
var G__58565 = cljs.core.count(c__4609__auto__);
var G__58566 = (0);
seq__57979 = G__58563;
chunk__57980 = G__58564;
count__57981 = G__58565;
i__57982 = G__58566;
continue;
} else {
var n = cljs.core.first(seq__57979__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58569 = cljs.core.next(seq__57979__$1);
var G__58570 = null;
var G__58571 = (0);
var G__58572 = (0);
seq__57979 = G__58569;
chunk__57980 = G__58570;
count__57981 = G__58571;
i__57982 = G__58572;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__57984 = shadow.dom.dom_node(new$);
var G__57985 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__57984,G__57985);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__57987 = arguments.length;
switch (G__57987) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__57989 = arguments.length;
switch (G__57989) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__57991 = arguments.length;
switch (G__57991) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58584 = arguments.length;
var i__4790__auto___58586 = (0);
while(true){
if((i__4790__auto___58586 < len__4789__auto___58584)){
args__4795__auto__.push((arguments[i__4790__auto___58586]));

var G__58587 = (i__4790__auto___58586 + (1));
i__4790__auto___58586 = G__58587;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__57993_58588 = cljs.core.seq(nodes);
var chunk__57994_58589 = null;
var count__57995_58590 = (0);
var i__57996_58591 = (0);
while(true){
if((i__57996_58591 < count__57995_58590)){
var node_58592 = chunk__57994_58589.cljs$core$IIndexed$_nth$arity$2(null,i__57996_58591);
fragment.appendChild(shadow.dom._to_dom(node_58592));


var G__58593 = seq__57993_58588;
var G__58594 = chunk__57994_58589;
var G__58595 = count__57995_58590;
var G__58596 = (i__57996_58591 + (1));
seq__57993_58588 = G__58593;
chunk__57994_58589 = G__58594;
count__57995_58590 = G__58595;
i__57996_58591 = G__58596;
continue;
} else {
var temp__5735__auto___58597 = cljs.core.seq(seq__57993_58588);
if(temp__5735__auto___58597){
var seq__57993_58598__$1 = temp__5735__auto___58597;
if(cljs.core.chunked_seq_QMARK_(seq__57993_58598__$1)){
var c__4609__auto___58599 = cljs.core.chunk_first(seq__57993_58598__$1);
var G__58601 = cljs.core.chunk_rest(seq__57993_58598__$1);
var G__58602 = c__4609__auto___58599;
var G__58603 = cljs.core.count(c__4609__auto___58599);
var G__58604 = (0);
seq__57993_58588 = G__58601;
chunk__57994_58589 = G__58602;
count__57995_58590 = G__58603;
i__57996_58591 = G__58604;
continue;
} else {
var node_58605 = cljs.core.first(seq__57993_58598__$1);
fragment.appendChild(shadow.dom._to_dom(node_58605));


var G__58606 = cljs.core.next(seq__57993_58598__$1);
var G__58607 = null;
var G__58608 = (0);
var G__58609 = (0);
seq__57993_58588 = G__58606;
chunk__57994_58589 = G__58607;
count__57995_58590 = G__58608;
i__57996_58591 = G__58609;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq57992){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57992));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__57997_58614 = cljs.core.seq(scripts);
var chunk__57998_58615 = null;
var count__57999_58616 = (0);
var i__58000_58617 = (0);
while(true){
if((i__58000_58617 < count__57999_58616)){
var vec__58007_58619 = chunk__57998_58615.cljs$core$IIndexed$_nth$arity$2(null,i__58000_58617);
var script_tag_58620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58007_58619,(0),null);
var script_body_58621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58007_58619,(1),null);
eval(script_body_58621);


var G__58622 = seq__57997_58614;
var G__58623 = chunk__57998_58615;
var G__58624 = count__57999_58616;
var G__58625 = (i__58000_58617 + (1));
seq__57997_58614 = G__58622;
chunk__57998_58615 = G__58623;
count__57999_58616 = G__58624;
i__58000_58617 = G__58625;
continue;
} else {
var temp__5735__auto___58626 = cljs.core.seq(seq__57997_58614);
if(temp__5735__auto___58626){
var seq__57997_58627__$1 = temp__5735__auto___58626;
if(cljs.core.chunked_seq_QMARK_(seq__57997_58627__$1)){
var c__4609__auto___58628 = cljs.core.chunk_first(seq__57997_58627__$1);
var G__58629 = cljs.core.chunk_rest(seq__57997_58627__$1);
var G__58630 = c__4609__auto___58628;
var G__58631 = cljs.core.count(c__4609__auto___58628);
var G__58632 = (0);
seq__57997_58614 = G__58629;
chunk__57998_58615 = G__58630;
count__57999_58616 = G__58631;
i__58000_58617 = G__58632;
continue;
} else {
var vec__58010_58633 = cljs.core.first(seq__57997_58627__$1);
var script_tag_58634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58010_58633,(0),null);
var script_body_58635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58010_58633,(1),null);
eval(script_body_58635);


var G__58637 = cljs.core.next(seq__57997_58627__$1);
var G__58638 = null;
var G__58639 = (0);
var G__58640 = (0);
seq__57997_58614 = G__58637;
chunk__57998_58615 = G__58638;
count__57999_58616 = G__58639;
i__58000_58617 = G__58640;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58013){
var vec__58014 = p__58013;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58014,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58014,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__58023 = shadow.dom.dom_node(el);
var G__58024 = cls;
return goog.dom.getAncestorByClass(G__58023,G__58024);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58029 = arguments.length;
switch (G__58029) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__58030 = shadow.dom.dom_node(el);
var G__58031 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__58030,G__58031);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__58033 = shadow.dom.dom_node(el);
var G__58034 = cljs.core.name(tag);
var G__58035 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__58033,G__58034,G__58035);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__58038 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__58038);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__58039 = shadow.dom.dom_node(dom);
var G__58040 = value;
return goog.dom.forms.setValue(G__58039,G__58040);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__58047 = cljs.core.seq(style_keys);
var chunk__58048 = null;
var count__58049 = (0);
var i__58050 = (0);
while(true){
if((i__58050 < count__58049)){
var it = chunk__58048.cljs$core$IIndexed$_nth$arity$2(null,i__58050);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58648 = seq__58047;
var G__58649 = chunk__58048;
var G__58650 = count__58049;
var G__58651 = (i__58050 + (1));
seq__58047 = G__58648;
chunk__58048 = G__58649;
count__58049 = G__58650;
i__58050 = G__58651;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58047);
if(temp__5735__auto__){
var seq__58047__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58047__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58047__$1);
var G__58653 = cljs.core.chunk_rest(seq__58047__$1);
var G__58654 = c__4609__auto__;
var G__58655 = cljs.core.count(c__4609__auto__);
var G__58656 = (0);
seq__58047 = G__58653;
chunk__58048 = G__58654;
count__58049 = G__58655;
i__58050 = G__58656;
continue;
} else {
var it = cljs.core.first(seq__58047__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58657 = cljs.core.next(seq__58047__$1);
var G__58658 = null;
var G__58659 = (0);
var G__58660 = (0);
seq__58047 = G__58657;
chunk__58048 = G__58658;
count__58049 = G__58659;
i__58050 = G__58660;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58052,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58057 = k58052;
var G__58057__$1 = (((G__58057 instanceof cljs.core.Keyword))?G__58057.fqn:null);
switch (G__58057__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58052,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58060){
var vec__58061 = p__58060;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58061,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58061,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58051){
var self__ = this;
var G__58051__$1 = this;
return (new cljs.core.RecordIter((0),G__58051__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__58064 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58064(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58053,other58054){
var self__ = this;
var this58053__$1 = this;
return (((!((other58054 == null)))) && ((this58053__$1.constructor === other58054.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58053__$1.x,other58054.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58053__$1.y,other58054.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58053__$1.__extmap,other58054.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58051){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58065 = cljs.core.keyword_identical_QMARK_;
var expr__58066 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58068 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__58069 = expr__58066;
return (pred__58065.cljs$core$IFn$_invoke$arity$2 ? pred__58065.cljs$core$IFn$_invoke$arity$2(G__58068,G__58069) : pred__58065.call(null,G__58068,G__58069));
})())){
return (new shadow.dom.Coordinate(G__58051,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58070 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__58071 = expr__58066;
return (pred__58065.cljs$core$IFn$_invoke$arity$2 ? pred__58065.cljs$core$IFn$_invoke$arity$2(G__58070,G__58071) : pred__58065.call(null,G__58070,G__58071));
})())){
return (new shadow.dom.Coordinate(self__.x,G__58051,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58051),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58051){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58051,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58055){
var extmap__4478__auto__ = (function (){var G__58074 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58055,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58055)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58074);
} else {
return G__58074;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58055),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58055),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__58076 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__58076);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__58080 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__58080);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__58085 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__58085);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58087,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58096 = k58087;
var G__58096__$1 = (((G__58096 instanceof cljs.core.Keyword))?G__58096.fqn:null);
switch (G__58096__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58087,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58098){
var vec__58099 = p__58098;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58099,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58099,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58086){
var self__ = this;
var G__58086__$1 = this;
return (new cljs.core.RecordIter((0),G__58086__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__58114 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58114(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58088,other58089){
var self__ = this;
var this58088__$1 = this;
return (((!((other58089 == null)))) && ((this58088__$1.constructor === other58089.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58088__$1.w,other58089.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58088__$1.h,other58089.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58088__$1.__extmap,other58089.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58086){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58120 = cljs.core.keyword_identical_QMARK_;
var expr__58121 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58124 = new cljs.core.Keyword(null,"w","w",354169001);
var G__58125 = expr__58121;
return (pred__58120.cljs$core$IFn$_invoke$arity$2 ? pred__58120.cljs$core$IFn$_invoke$arity$2(G__58124,G__58125) : pred__58120.call(null,G__58124,G__58125));
})())){
return (new shadow.dom.Size(G__58086,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58126 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__58127 = expr__58121;
return (pred__58120.cljs$core$IFn$_invoke$arity$2 ? pred__58120.cljs$core$IFn$_invoke$arity$2(G__58126,G__58127) : pred__58120.call(null,G__58126,G__58127));
})())){
return (new shadow.dom.Size(self__.w,G__58086,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58086),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58086){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58086,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58092){
var extmap__4478__auto__ = (function (){var G__58129 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58092,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58092)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58129);
} else {
return G__58129;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58092),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58092),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__58130 = shadow.dom.dom_node(el);
return goog.style.getSize(G__58130);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__58750 = (i + (1));
var G__58751 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__58750;
ret = G__58751;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58140){
var vec__58141 = p__58140;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58141,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58141,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58146 = arguments.length;
switch (G__58146) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58147_58759 = new_node;
var G__58148_58760 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__58147_58759,G__58148_58760);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58149_58761 = new_node;
var G__58150_58762 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__58149_58761,G__58150_58762);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__58766 = ps;
var G__58767 = (i + (1));
el__$1 = G__58766;
i = G__58767;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__58151 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__58151);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__58152 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__58152);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__58153 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__58153);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58154 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58154,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58154,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58154,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58157_58772 = cljs.core.seq(props);
var chunk__58158_58773 = null;
var count__58159_58774 = (0);
var i__58160_58775 = (0);
while(true){
if((i__58160_58775 < count__58159_58774)){
var vec__58167_58776 = chunk__58158_58773.cljs$core$IIndexed$_nth$arity$2(null,i__58160_58775);
var k_58777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58167_58776,(0),null);
var v_58778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58167_58776,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_58777);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58777),v_58778);


var G__58779 = seq__58157_58772;
var G__58780 = chunk__58158_58773;
var G__58781 = count__58159_58774;
var G__58782 = (i__58160_58775 + (1));
seq__58157_58772 = G__58779;
chunk__58158_58773 = G__58780;
count__58159_58774 = G__58781;
i__58160_58775 = G__58782;
continue;
} else {
var temp__5735__auto___58783 = cljs.core.seq(seq__58157_58772);
if(temp__5735__auto___58783){
var seq__58157_58784__$1 = temp__5735__auto___58783;
if(cljs.core.chunked_seq_QMARK_(seq__58157_58784__$1)){
var c__4609__auto___58785 = cljs.core.chunk_first(seq__58157_58784__$1);
var G__58786 = cljs.core.chunk_rest(seq__58157_58784__$1);
var G__58787 = c__4609__auto___58785;
var G__58788 = cljs.core.count(c__4609__auto___58785);
var G__58789 = (0);
seq__58157_58772 = G__58786;
chunk__58158_58773 = G__58787;
count__58159_58774 = G__58788;
i__58160_58775 = G__58789;
continue;
} else {
var vec__58171_58790 = cljs.core.first(seq__58157_58784__$1);
var k_58791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58171_58790,(0),null);
var v_58792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58171_58790,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_58791);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58791),v_58792);


var G__58793 = cljs.core.next(seq__58157_58784__$1);
var G__58794 = null;
var G__58795 = (0);
var G__58796 = (0);
seq__58157_58772 = G__58793;
chunk__58158_58773 = G__58794;
count__58159_58774 = G__58795;
i__58160_58775 = G__58796;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__58180 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58180,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58180,(1),null);
var seq__58183_58802 = cljs.core.seq(node_children);
var chunk__58185_58803 = null;
var count__58186_58804 = (0);
var i__58187_58805 = (0);
while(true){
if((i__58187_58805 < count__58186_58804)){
var child_struct_58806 = chunk__58185_58803.cljs$core$IIndexed$_nth$arity$2(null,i__58187_58805);
if((!((child_struct_58806 == null)))){
if(typeof child_struct_58806 === 'string'){
var text_58807 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58807),child_struct_58806].join(''));
} else {
var children_58809 = shadow.dom.svg_node(child_struct_58806);
if(cljs.core.seq_QMARK_(children_58809)){
var seq__58207_58810 = cljs.core.seq(children_58809);
var chunk__58209_58811 = null;
var count__58210_58812 = (0);
var i__58211_58813 = (0);
while(true){
if((i__58211_58813 < count__58210_58812)){
var child_58818 = chunk__58209_58811.cljs$core$IIndexed$_nth$arity$2(null,i__58211_58813);
if(cljs.core.truth_(child_58818)){
node.appendChild(child_58818);


var G__58819 = seq__58207_58810;
var G__58820 = chunk__58209_58811;
var G__58821 = count__58210_58812;
var G__58822 = (i__58211_58813 + (1));
seq__58207_58810 = G__58819;
chunk__58209_58811 = G__58820;
count__58210_58812 = G__58821;
i__58211_58813 = G__58822;
continue;
} else {
var G__58826 = seq__58207_58810;
var G__58827 = chunk__58209_58811;
var G__58828 = count__58210_58812;
var G__58829 = (i__58211_58813 + (1));
seq__58207_58810 = G__58826;
chunk__58209_58811 = G__58827;
count__58210_58812 = G__58828;
i__58211_58813 = G__58829;
continue;
}
} else {
var temp__5735__auto___58834 = cljs.core.seq(seq__58207_58810);
if(temp__5735__auto___58834){
var seq__58207_58835__$1 = temp__5735__auto___58834;
if(cljs.core.chunked_seq_QMARK_(seq__58207_58835__$1)){
var c__4609__auto___58836 = cljs.core.chunk_first(seq__58207_58835__$1);
var G__58837 = cljs.core.chunk_rest(seq__58207_58835__$1);
var G__58838 = c__4609__auto___58836;
var G__58839 = cljs.core.count(c__4609__auto___58836);
var G__58840 = (0);
seq__58207_58810 = G__58837;
chunk__58209_58811 = G__58838;
count__58210_58812 = G__58839;
i__58211_58813 = G__58840;
continue;
} else {
var child_58841 = cljs.core.first(seq__58207_58835__$1);
if(cljs.core.truth_(child_58841)){
node.appendChild(child_58841);


var G__58843 = cljs.core.next(seq__58207_58835__$1);
var G__58844 = null;
var G__58845 = (0);
var G__58846 = (0);
seq__58207_58810 = G__58843;
chunk__58209_58811 = G__58844;
count__58210_58812 = G__58845;
i__58211_58813 = G__58846;
continue;
} else {
var G__58847 = cljs.core.next(seq__58207_58835__$1);
var G__58848 = null;
var G__58849 = (0);
var G__58850 = (0);
seq__58207_58810 = G__58847;
chunk__58209_58811 = G__58848;
count__58210_58812 = G__58849;
i__58211_58813 = G__58850;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58809);
}
}


var G__58854 = seq__58183_58802;
var G__58855 = chunk__58185_58803;
var G__58856 = count__58186_58804;
var G__58857 = (i__58187_58805 + (1));
seq__58183_58802 = G__58854;
chunk__58185_58803 = G__58855;
count__58186_58804 = G__58856;
i__58187_58805 = G__58857;
continue;
} else {
var G__58862 = seq__58183_58802;
var G__58863 = chunk__58185_58803;
var G__58864 = count__58186_58804;
var G__58865 = (i__58187_58805 + (1));
seq__58183_58802 = G__58862;
chunk__58185_58803 = G__58863;
count__58186_58804 = G__58864;
i__58187_58805 = G__58865;
continue;
}
} else {
var temp__5735__auto___58866 = cljs.core.seq(seq__58183_58802);
if(temp__5735__auto___58866){
var seq__58183_58867__$1 = temp__5735__auto___58866;
if(cljs.core.chunked_seq_QMARK_(seq__58183_58867__$1)){
var c__4609__auto___58868 = cljs.core.chunk_first(seq__58183_58867__$1);
var G__58869 = cljs.core.chunk_rest(seq__58183_58867__$1);
var G__58870 = c__4609__auto___58868;
var G__58871 = cljs.core.count(c__4609__auto___58868);
var G__58872 = (0);
seq__58183_58802 = G__58869;
chunk__58185_58803 = G__58870;
count__58186_58804 = G__58871;
i__58187_58805 = G__58872;
continue;
} else {
var child_struct_58873 = cljs.core.first(seq__58183_58867__$1);
if((!((child_struct_58873 == null)))){
if(typeof child_struct_58873 === 'string'){
var text_58877 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58877),child_struct_58873].join(''));
} else {
var children_58878 = shadow.dom.svg_node(child_struct_58873);
if(cljs.core.seq_QMARK_(children_58878)){
var seq__58215_58883 = cljs.core.seq(children_58878);
var chunk__58218_58884 = null;
var count__58219_58885 = (0);
var i__58220_58886 = (0);
while(true){
if((i__58220_58886 < count__58219_58885)){
var child_58887 = chunk__58218_58884.cljs$core$IIndexed$_nth$arity$2(null,i__58220_58886);
if(cljs.core.truth_(child_58887)){
node.appendChild(child_58887);


var G__58888 = seq__58215_58883;
var G__58889 = chunk__58218_58884;
var G__58890 = count__58219_58885;
var G__58891 = (i__58220_58886 + (1));
seq__58215_58883 = G__58888;
chunk__58218_58884 = G__58889;
count__58219_58885 = G__58890;
i__58220_58886 = G__58891;
continue;
} else {
var G__58892 = seq__58215_58883;
var G__58893 = chunk__58218_58884;
var G__58894 = count__58219_58885;
var G__58895 = (i__58220_58886 + (1));
seq__58215_58883 = G__58892;
chunk__58218_58884 = G__58893;
count__58219_58885 = G__58894;
i__58220_58886 = G__58895;
continue;
}
} else {
var temp__5735__auto___58896__$1 = cljs.core.seq(seq__58215_58883);
if(temp__5735__auto___58896__$1){
var seq__58215_58900__$1 = temp__5735__auto___58896__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58215_58900__$1)){
var c__4609__auto___58905 = cljs.core.chunk_first(seq__58215_58900__$1);
var G__58906 = cljs.core.chunk_rest(seq__58215_58900__$1);
var G__58907 = c__4609__auto___58905;
var G__58908 = cljs.core.count(c__4609__auto___58905);
var G__58909 = (0);
seq__58215_58883 = G__58906;
chunk__58218_58884 = G__58907;
count__58219_58885 = G__58908;
i__58220_58886 = G__58909;
continue;
} else {
var child_58910 = cljs.core.first(seq__58215_58900__$1);
if(cljs.core.truth_(child_58910)){
node.appendChild(child_58910);


var G__58911 = cljs.core.next(seq__58215_58900__$1);
var G__58912 = null;
var G__58913 = (0);
var G__58914 = (0);
seq__58215_58883 = G__58911;
chunk__58218_58884 = G__58912;
count__58219_58885 = G__58913;
i__58220_58886 = G__58914;
continue;
} else {
var G__58915 = cljs.core.next(seq__58215_58900__$1);
var G__58916 = null;
var G__58917 = (0);
var G__58918 = (0);
seq__58215_58883 = G__58915;
chunk__58218_58884 = G__58916;
count__58219_58885 = G__58917;
i__58220_58886 = G__58918;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58878);
}
}


var G__58919 = cljs.core.next(seq__58183_58867__$1);
var G__58920 = null;
var G__58921 = (0);
var G__58922 = (0);
seq__58183_58802 = G__58919;
chunk__58185_58803 = G__58920;
count__58186_58804 = G__58921;
i__58187_58805 = G__58922;
continue;
} else {
var G__58923 = cljs.core.next(seq__58183_58867__$1);
var G__58924 = null;
var G__58925 = (0);
var G__58926 = (0);
seq__58183_58802 = G__58923;
chunk__58185_58803 = G__58924;
count__58186_58804 = G__58925;
i__58187_58805 = G__58926;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__58231_58927 = shadow.dom._to_svg;
var G__58232_58928 = "string";
var G__58233_58929 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__58231_58927,G__58232_58928,G__58233_58929);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__58239_58931 = shadow.dom._to_svg;
var G__58240_58932 = "null";
var G__58241_58933 = (function (_){
return null;
});
goog.object.set(G__58239_58931,G__58240_58932,G__58241_58933);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58934 = arguments.length;
var i__4790__auto___58935 = (0);
while(true){
if((i__4790__auto___58935 < len__4789__auto___58934)){
args__4795__auto__.push((arguments[i__4790__auto___58935]));

var G__58936 = (i__4790__auto___58935 + (1));
i__4790__auto___58935 = G__58936;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58252){
var G__58253 = cljs.core.first(seq58252);
var seq58252__$1 = cljs.core.next(seq58252);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58253,seq58252__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__58263 = arguments.length;
switch (G__58263) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__58266_58941 = shadow.dom.dom_node(el);
var G__58267_58942 = cljs.core.name(event);
var G__58268_58943 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58266_58941,G__58267_58942,G__58268_58943) : shadow.dom.dom_listen.call(null,G__58266_58941,G__58267_58942,G__58268_58943));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__56096__auto___58946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_58273){
var state_val_58274 = (state_58273[(1)]);
if((state_val_58274 === (1))){
var state_58273__$1 = state_58273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58273__$1,(2),once_or_cleanup);
} else {
if((state_val_58274 === (2))){
var inst_58270 = (state_58273[(2)]);
var inst_58271 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58273__$1 = (function (){var statearr_58275 = state_58273;
(statearr_58275[(7)] = inst_58270);

return statearr_58275;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58273__$1,inst_58271);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__55996__auto__ = null;
var shadow$dom$state_machine__55996__auto____0 = (function (){
var statearr_58276 = [null,null,null,null,null,null,null,null];
(statearr_58276[(0)] = shadow$dom$state_machine__55996__auto__);

(statearr_58276[(1)] = (1));

return statearr_58276;
});
var shadow$dom$state_machine__55996__auto____1 = (function (state_58273){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_58273);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e58277){if((e58277 instanceof Object)){
var ex__55999__auto__ = e58277;
var statearr_58278_58949 = state_58273;
(statearr_58278_58949[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58277;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58950 = state_58273;
state_58273 = G__58950;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
shadow$dom$state_machine__55996__auto__ = function(state_58273){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__55996__auto____0.call(this);
case 1:
return shadow$dom$state_machine__55996__auto____1.call(this,state_58273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__55996__auto____0;
shadow$dom$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__55996__auto____1;
return shadow$dom$state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_58279 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_58279[(6)] = c__56096__auto___58946);

return statearr_58279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
