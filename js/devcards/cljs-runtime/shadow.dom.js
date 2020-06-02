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
return cljs.core.cons((coll[idx]),(function (){var G__47771 = coll;
var G__47772 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47771,G__47772) : shadow.dom.lazy_native_coll_seq.call(null,G__47771,G__47772));
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
var G__47794 = arguments.length;
switch (G__47794) {
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
var G__47801 = arguments.length;
switch (G__47801) {
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
var G__47808 = arguments.length;
switch (G__47808) {
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
var G__47812 = arguments.length;
switch (G__47812) {
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
var G__47822 = arguments.length;
switch (G__47822) {
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
var G__47823 = document;
var G__47824 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47823,G__47824);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__47825 = shadow.dom.dom_node(parent);
var G__47826 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47825,G__47826);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__47827 = shadow.dom.dom_node(el);
var G__47828 = cls;
return goog.dom.classlist.add(G__47827,G__47828);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__47829 = shadow.dom.dom_node(el);
var G__47830 = cls;
return goog.dom.classlist.remove(G__47829,G__47830);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47832 = arguments.length;
switch (G__47832) {
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
var G__47833 = shadow.dom.dom_node(el);
var G__47834 = cls;
return goog.dom.classlist.toggle(G__47833,G__47834);
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
}catch (e47835){if((e47835 instanceof Object)){
var e = e47835;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47835;

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
var seq__47837 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47838 = null;
var count__47839 = (0);
var i__47840 = (0);
while(true){
if((i__47840 < count__47839)){
var el = chunk__47838.cljs$core$IIndexed$_nth$arity$2(null,i__47840);
var handler_48412__$1 = ((function (seq__47837,chunk__47838,count__47839,i__47840,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47837,chunk__47838,count__47839,i__47840,el))
;
var G__47849_48413 = el;
var G__47850_48414 = cljs.core.name(ev);
var G__47851_48415 = handler_48412__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47849_48413,G__47850_48414,G__47851_48415) : shadow.dom.dom_listen.call(null,G__47849_48413,G__47850_48414,G__47851_48415));


var G__48417 = seq__47837;
var G__48418 = chunk__47838;
var G__48419 = count__47839;
var G__48420 = (i__47840 + (1));
seq__47837 = G__48417;
chunk__47838 = G__48418;
count__47839 = G__48419;
i__47840 = G__48420;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47837);
if(temp__5735__auto__){
var seq__47837__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47837__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47837__$1);
var G__48421 = cljs.core.chunk_rest(seq__47837__$1);
var G__48422 = c__4609__auto__;
var G__48423 = cljs.core.count(c__4609__auto__);
var G__48424 = (0);
seq__47837 = G__48421;
chunk__47838 = G__48422;
count__47839 = G__48423;
i__47840 = G__48424;
continue;
} else {
var el = cljs.core.first(seq__47837__$1);
var handler_48425__$1 = ((function (seq__47837,chunk__47838,count__47839,i__47840,el,seq__47837__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47837,chunk__47838,count__47839,i__47840,el,seq__47837__$1,temp__5735__auto__))
;
var G__47854_48426 = el;
var G__47855_48427 = cljs.core.name(ev);
var G__47856_48428 = handler_48425__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47854_48426,G__47855_48427,G__47856_48428) : shadow.dom.dom_listen.call(null,G__47854_48426,G__47855_48427,G__47856_48428));


var G__48429 = cljs.core.next(seq__47837__$1);
var G__48430 = null;
var G__48431 = (0);
var G__48432 = (0);
seq__47837 = G__48429;
chunk__47838 = G__48430;
count__47839 = G__48431;
i__47840 = G__48432;
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
var G__47862 = arguments.length;
switch (G__47862) {
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
var G__47863 = shadow.dom.dom_node(el);
var G__47864 = cljs.core.name(ev);
var G__47865 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47863,G__47864,G__47865) : shadow.dom.dom_listen.call(null,G__47863,G__47864,G__47865));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__47866 = shadow.dom.dom_node(el);
var G__47867 = cljs.core.name(ev);
var G__47868 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__47866,G__47867,G__47868) : shadow.dom.dom_listen_remove.call(null,G__47866,G__47867,G__47868));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47869 = cljs.core.seq(events);
var chunk__47870 = null;
var count__47871 = (0);
var i__47872 = (0);
while(true){
if((i__47872 < count__47871)){
var vec__47882 = chunk__47870.cljs$core$IIndexed$_nth$arity$2(null,i__47872);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47882,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47882,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48443 = seq__47869;
var G__48444 = chunk__47870;
var G__48445 = count__47871;
var G__48446 = (i__47872 + (1));
seq__47869 = G__48443;
chunk__47870 = G__48444;
count__47871 = G__48445;
i__47872 = G__48446;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47869);
if(temp__5735__auto__){
var seq__47869__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47869__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47869__$1);
var G__48447 = cljs.core.chunk_rest(seq__47869__$1);
var G__48448 = c__4609__auto__;
var G__48449 = cljs.core.count(c__4609__auto__);
var G__48450 = (0);
seq__47869 = G__48447;
chunk__47870 = G__48448;
count__47871 = G__48449;
i__47872 = G__48450;
continue;
} else {
var vec__47885 = cljs.core.first(seq__47869__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47885,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47885,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48453 = cljs.core.next(seq__47869__$1);
var G__48454 = null;
var G__48455 = (0);
var G__48456 = (0);
seq__47869 = G__48453;
chunk__47870 = G__48454;
count__47871 = G__48455;
i__47872 = G__48456;
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
var seq__47890 = cljs.core.seq(styles);
var chunk__47891 = null;
var count__47892 = (0);
var i__47893 = (0);
while(true){
if((i__47893 < count__47892)){
var vec__47912 = chunk__47891.cljs$core$IIndexed$_nth$arity$2(null,i__47893);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47912,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47912,(1),null);
var G__47915_48458 = dom;
var G__47916_48459 = cljs.core.name(k);
var G__47917_48460 = (((v == null))?"":v);
goog.style.setStyle(G__47915_48458,G__47916_48459,G__47917_48460);


var G__48461 = seq__47890;
var G__48462 = chunk__47891;
var G__48463 = count__47892;
var G__48464 = (i__47893 + (1));
seq__47890 = G__48461;
chunk__47891 = G__48462;
count__47892 = G__48463;
i__47893 = G__48464;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47890);
if(temp__5735__auto__){
var seq__47890__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47890__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47890__$1);
var G__48466 = cljs.core.chunk_rest(seq__47890__$1);
var G__48467 = c__4609__auto__;
var G__48468 = cljs.core.count(c__4609__auto__);
var G__48469 = (0);
seq__47890 = G__48466;
chunk__47891 = G__48467;
count__47892 = G__48468;
i__47893 = G__48469;
continue;
} else {
var vec__47920 = cljs.core.first(seq__47890__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47920,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47920,(1),null);
var G__47924_48470 = dom;
var G__47925_48471 = cljs.core.name(k);
var G__47926_48472 = (((v == null))?"":v);
goog.style.setStyle(G__47924_48470,G__47925_48471,G__47926_48472);


var G__48475 = cljs.core.next(seq__47890__$1);
var G__48476 = null;
var G__48477 = (0);
var G__48478 = (0);
seq__47890 = G__48475;
chunk__47891 = G__48476;
count__47892 = G__48477;
i__47893 = G__48478;
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
var G__47930_48480 = key;
var G__47930_48481__$1 = (((G__47930_48480 instanceof cljs.core.Keyword))?G__47930_48480.fqn:null);
switch (G__47930_48481__$1) {
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
var ks_48490 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_48490,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_48490,"aria-");
}
})())){
el.setAttribute(ks_48490,value);
} else {
(el[ks_48490] = value);
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
var G__47937 = shadow.dom.dom_node(el);
var G__47938 = cls;
return goog.dom.classlist.contains(G__47937,G__47938);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47943){
var map__47945 = p__47943;
var map__47945__$1 = (((((!((map__47945 == null))))?(((((map__47945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47945):map__47945);
var props = map__47945__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47945__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47948 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47948,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47948,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47948,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47953 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47953,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47953;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47959 = arguments.length;
switch (G__47959) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47965){
var vec__47967 = p__47965;
var seq__47968 = cljs.core.seq(vec__47967);
var first__47969 = cljs.core.first(seq__47968);
var seq__47968__$1 = cljs.core.next(seq__47968);
var nn = first__47969;
var first__47969__$1 = cljs.core.first(seq__47968__$1);
var seq__47968__$2 = cljs.core.next(seq__47968__$1);
var np = first__47969__$1;
var nc = seq__47968__$2;
var node = vec__47967;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47971 = nn;
var G__47972 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47971,G__47972) : create_fn.call(null,G__47971,G__47972));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47973 = nn;
var G__47974 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47973,G__47974) : create_fn.call(null,G__47973,G__47974));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47975 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47975,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47975,(1),null);
var seq__47978_48509 = cljs.core.seq(node_children);
var chunk__47979_48510 = null;
var count__47980_48511 = (0);
var i__47981_48512 = (0);
while(true){
if((i__47981_48512 < count__47980_48511)){
var child_struct_48515 = chunk__47979_48510.cljs$core$IIndexed$_nth$arity$2(null,i__47981_48512);
var children_48517 = shadow.dom.dom_node(child_struct_48515);
if(cljs.core.seq_QMARK_(children_48517)){
var seq__47994_48518 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48517));
var chunk__47996_48519 = null;
var count__47997_48520 = (0);
var i__47998_48521 = (0);
while(true){
if((i__47998_48521 < count__47997_48520)){
var child_48523 = chunk__47996_48519.cljs$core$IIndexed$_nth$arity$2(null,i__47998_48521);
if(cljs.core.truth_(child_48523)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48523);


var G__48524 = seq__47994_48518;
var G__48525 = chunk__47996_48519;
var G__48526 = count__47997_48520;
var G__48527 = (i__47998_48521 + (1));
seq__47994_48518 = G__48524;
chunk__47996_48519 = G__48525;
count__47997_48520 = G__48526;
i__47998_48521 = G__48527;
continue;
} else {
var G__48529 = seq__47994_48518;
var G__48530 = chunk__47996_48519;
var G__48531 = count__47997_48520;
var G__48532 = (i__47998_48521 + (1));
seq__47994_48518 = G__48529;
chunk__47996_48519 = G__48530;
count__47997_48520 = G__48531;
i__47998_48521 = G__48532;
continue;
}
} else {
var temp__5735__auto___48533 = cljs.core.seq(seq__47994_48518);
if(temp__5735__auto___48533){
var seq__47994_48534__$1 = temp__5735__auto___48533;
if(cljs.core.chunked_seq_QMARK_(seq__47994_48534__$1)){
var c__4609__auto___48535 = cljs.core.chunk_first(seq__47994_48534__$1);
var G__48536 = cljs.core.chunk_rest(seq__47994_48534__$1);
var G__48537 = c__4609__auto___48535;
var G__48538 = cljs.core.count(c__4609__auto___48535);
var G__48539 = (0);
seq__47994_48518 = G__48536;
chunk__47996_48519 = G__48537;
count__47997_48520 = G__48538;
i__47998_48521 = G__48539;
continue;
} else {
var child_48542 = cljs.core.first(seq__47994_48534__$1);
if(cljs.core.truth_(child_48542)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48542);


var G__48544 = cljs.core.next(seq__47994_48534__$1);
var G__48545 = null;
var G__48546 = (0);
var G__48547 = (0);
seq__47994_48518 = G__48544;
chunk__47996_48519 = G__48545;
count__47997_48520 = G__48546;
i__47998_48521 = G__48547;
continue;
} else {
var G__48548 = cljs.core.next(seq__47994_48534__$1);
var G__48549 = null;
var G__48550 = (0);
var G__48551 = (0);
seq__47994_48518 = G__48548;
chunk__47996_48519 = G__48549;
count__47997_48520 = G__48550;
i__47998_48521 = G__48551;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48517);
}


var G__48553 = seq__47978_48509;
var G__48554 = chunk__47979_48510;
var G__48555 = count__47980_48511;
var G__48556 = (i__47981_48512 + (1));
seq__47978_48509 = G__48553;
chunk__47979_48510 = G__48554;
count__47980_48511 = G__48555;
i__47981_48512 = G__48556;
continue;
} else {
var temp__5735__auto___48557 = cljs.core.seq(seq__47978_48509);
if(temp__5735__auto___48557){
var seq__47978_48558__$1 = temp__5735__auto___48557;
if(cljs.core.chunked_seq_QMARK_(seq__47978_48558__$1)){
var c__4609__auto___48560 = cljs.core.chunk_first(seq__47978_48558__$1);
var G__48561 = cljs.core.chunk_rest(seq__47978_48558__$1);
var G__48562 = c__4609__auto___48560;
var G__48563 = cljs.core.count(c__4609__auto___48560);
var G__48564 = (0);
seq__47978_48509 = G__48561;
chunk__47979_48510 = G__48562;
count__47980_48511 = G__48563;
i__47981_48512 = G__48564;
continue;
} else {
var child_struct_48565 = cljs.core.first(seq__47978_48558__$1);
var children_48566 = shadow.dom.dom_node(child_struct_48565);
if(cljs.core.seq_QMARK_(children_48566)){
var seq__48007_48567 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48566));
var chunk__48009_48568 = null;
var count__48010_48569 = (0);
var i__48011_48570 = (0);
while(true){
if((i__48011_48570 < count__48010_48569)){
var child_48571 = chunk__48009_48568.cljs$core$IIndexed$_nth$arity$2(null,i__48011_48570);
if(cljs.core.truth_(child_48571)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48571);


var G__48572 = seq__48007_48567;
var G__48573 = chunk__48009_48568;
var G__48574 = count__48010_48569;
var G__48575 = (i__48011_48570 + (1));
seq__48007_48567 = G__48572;
chunk__48009_48568 = G__48573;
count__48010_48569 = G__48574;
i__48011_48570 = G__48575;
continue;
} else {
var G__48576 = seq__48007_48567;
var G__48577 = chunk__48009_48568;
var G__48578 = count__48010_48569;
var G__48579 = (i__48011_48570 + (1));
seq__48007_48567 = G__48576;
chunk__48009_48568 = G__48577;
count__48010_48569 = G__48578;
i__48011_48570 = G__48579;
continue;
}
} else {
var temp__5735__auto___48580__$1 = cljs.core.seq(seq__48007_48567);
if(temp__5735__auto___48580__$1){
var seq__48007_48581__$1 = temp__5735__auto___48580__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48007_48581__$1)){
var c__4609__auto___48582 = cljs.core.chunk_first(seq__48007_48581__$1);
var G__48583 = cljs.core.chunk_rest(seq__48007_48581__$1);
var G__48584 = c__4609__auto___48582;
var G__48585 = cljs.core.count(c__4609__auto___48582);
var G__48586 = (0);
seq__48007_48567 = G__48583;
chunk__48009_48568 = G__48584;
count__48010_48569 = G__48585;
i__48011_48570 = G__48586;
continue;
} else {
var child_48587 = cljs.core.first(seq__48007_48581__$1);
if(cljs.core.truth_(child_48587)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48587);


var G__48588 = cljs.core.next(seq__48007_48581__$1);
var G__48589 = null;
var G__48590 = (0);
var G__48591 = (0);
seq__48007_48567 = G__48588;
chunk__48009_48568 = G__48589;
count__48010_48569 = G__48590;
i__48011_48570 = G__48591;
continue;
} else {
var G__48592 = cljs.core.next(seq__48007_48581__$1);
var G__48593 = null;
var G__48594 = (0);
var G__48595 = (0);
seq__48007_48567 = G__48592;
chunk__48009_48568 = G__48593;
count__48010_48569 = G__48594;
i__48011_48570 = G__48595;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48566);
}


var G__48597 = cljs.core.next(seq__47978_48558__$1);
var G__48598 = null;
var G__48599 = (0);
var G__48600 = (0);
seq__47978_48509 = G__48597;
chunk__47979_48510 = G__48598;
count__47980_48511 = G__48599;
i__47981_48512 = G__48600;
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
var G__48027 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48027);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48031 = cljs.core.seq(node);
var chunk__48033 = null;
var count__48034 = (0);
var i__48035 = (0);
while(true){
if((i__48035 < count__48034)){
var n = chunk__48033.cljs$core$IIndexed$_nth$arity$2(null,i__48035);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48608 = seq__48031;
var G__48609 = chunk__48033;
var G__48610 = count__48034;
var G__48611 = (i__48035 + (1));
seq__48031 = G__48608;
chunk__48033 = G__48609;
count__48034 = G__48610;
i__48035 = G__48611;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48031);
if(temp__5735__auto__){
var seq__48031__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48031__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48031__$1);
var G__48613 = cljs.core.chunk_rest(seq__48031__$1);
var G__48614 = c__4609__auto__;
var G__48615 = cljs.core.count(c__4609__auto__);
var G__48616 = (0);
seq__48031 = G__48613;
chunk__48033 = G__48614;
count__48034 = G__48615;
i__48035 = G__48616;
continue;
} else {
var n = cljs.core.first(seq__48031__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48617 = cljs.core.next(seq__48031__$1);
var G__48618 = null;
var G__48619 = (0);
var G__48620 = (0);
seq__48031 = G__48617;
chunk__48033 = G__48618;
count__48034 = G__48619;
i__48035 = G__48620;
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
var G__48042 = shadow.dom.dom_node(new$);
var G__48043 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48042,G__48043);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48048 = arguments.length;
switch (G__48048) {
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
var G__48053 = arguments.length;
switch (G__48053) {
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
var G__48067 = arguments.length;
switch (G__48067) {
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
var len__4789__auto___48644 = arguments.length;
var i__4790__auto___48645 = (0);
while(true){
if((i__4790__auto___48645 < len__4789__auto___48644)){
args__4795__auto__.push((arguments[i__4790__auto___48645]));

var G__48646 = (i__4790__auto___48645 + (1));
i__4790__auto___48645 = G__48646;
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
var seq__48079_48647 = cljs.core.seq(nodes);
var chunk__48080_48648 = null;
var count__48081_48649 = (0);
var i__48082_48650 = (0);
while(true){
if((i__48082_48650 < count__48081_48649)){
var node_48651 = chunk__48080_48648.cljs$core$IIndexed$_nth$arity$2(null,i__48082_48650);
fragment.appendChild(shadow.dom._to_dom(node_48651));


var G__48653 = seq__48079_48647;
var G__48654 = chunk__48080_48648;
var G__48655 = count__48081_48649;
var G__48656 = (i__48082_48650 + (1));
seq__48079_48647 = G__48653;
chunk__48080_48648 = G__48654;
count__48081_48649 = G__48655;
i__48082_48650 = G__48656;
continue;
} else {
var temp__5735__auto___48657 = cljs.core.seq(seq__48079_48647);
if(temp__5735__auto___48657){
var seq__48079_48658__$1 = temp__5735__auto___48657;
if(cljs.core.chunked_seq_QMARK_(seq__48079_48658__$1)){
var c__4609__auto___48659 = cljs.core.chunk_first(seq__48079_48658__$1);
var G__48660 = cljs.core.chunk_rest(seq__48079_48658__$1);
var G__48661 = c__4609__auto___48659;
var G__48662 = cljs.core.count(c__4609__auto___48659);
var G__48663 = (0);
seq__48079_48647 = G__48660;
chunk__48080_48648 = G__48661;
count__48081_48649 = G__48662;
i__48082_48650 = G__48663;
continue;
} else {
var node_48664 = cljs.core.first(seq__48079_48658__$1);
fragment.appendChild(shadow.dom._to_dom(node_48664));


var G__48665 = cljs.core.next(seq__48079_48658__$1);
var G__48666 = null;
var G__48667 = (0);
var G__48668 = (0);
seq__48079_48647 = G__48665;
chunk__48080_48648 = G__48666;
count__48081_48649 = G__48667;
i__48082_48650 = G__48668;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48078){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48078));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48083_48675 = cljs.core.seq(scripts);
var chunk__48084_48676 = null;
var count__48085_48677 = (0);
var i__48086_48678 = (0);
while(true){
if((i__48086_48678 < count__48085_48677)){
var vec__48093_48680 = chunk__48084_48676.cljs$core$IIndexed$_nth$arity$2(null,i__48086_48678);
var script_tag_48681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48093_48680,(0),null);
var script_body_48682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48093_48680,(1),null);
eval(script_body_48682);


var G__48683 = seq__48083_48675;
var G__48684 = chunk__48084_48676;
var G__48685 = count__48085_48677;
var G__48686 = (i__48086_48678 + (1));
seq__48083_48675 = G__48683;
chunk__48084_48676 = G__48684;
count__48085_48677 = G__48685;
i__48086_48678 = G__48686;
continue;
} else {
var temp__5735__auto___48687 = cljs.core.seq(seq__48083_48675);
if(temp__5735__auto___48687){
var seq__48083_48689__$1 = temp__5735__auto___48687;
if(cljs.core.chunked_seq_QMARK_(seq__48083_48689__$1)){
var c__4609__auto___48690 = cljs.core.chunk_first(seq__48083_48689__$1);
var G__48691 = cljs.core.chunk_rest(seq__48083_48689__$1);
var G__48692 = c__4609__auto___48690;
var G__48693 = cljs.core.count(c__4609__auto___48690);
var G__48694 = (0);
seq__48083_48675 = G__48691;
chunk__48084_48676 = G__48692;
count__48085_48677 = G__48693;
i__48086_48678 = G__48694;
continue;
} else {
var vec__48096_48695 = cljs.core.first(seq__48083_48689__$1);
var script_tag_48696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48096_48695,(0),null);
var script_body_48697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48096_48695,(1),null);
eval(script_body_48697);


var G__48698 = cljs.core.next(seq__48083_48689__$1);
var G__48699 = null;
var G__48700 = (0);
var G__48701 = (0);
seq__48083_48675 = G__48698;
chunk__48084_48676 = G__48699;
count__48085_48677 = G__48700;
i__48086_48678 = G__48701;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48099){
var vec__48100 = p__48099;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100,(1),null);
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
var G__48109 = shadow.dom.dom_node(el);
var G__48110 = cls;
return goog.dom.getAncestorByClass(G__48109,G__48110);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48112 = arguments.length;
switch (G__48112) {
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
var G__48113 = shadow.dom.dom_node(el);
var G__48114 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48113,G__48114);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48115 = shadow.dom.dom_node(el);
var G__48116 = cljs.core.name(tag);
var G__48117 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48115,G__48116,G__48117);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48118 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48118);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48119 = shadow.dom.dom_node(dom);
var G__48120 = value;
return goog.dom.forms.setValue(G__48119,G__48120);
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
var seq__48125 = cljs.core.seq(style_keys);
var chunk__48126 = null;
var count__48127 = (0);
var i__48128 = (0);
while(true){
if((i__48128 < count__48127)){
var it = chunk__48126.cljs$core$IIndexed$_nth$arity$2(null,i__48128);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48714 = seq__48125;
var G__48715 = chunk__48126;
var G__48716 = count__48127;
var G__48717 = (i__48128 + (1));
seq__48125 = G__48714;
chunk__48126 = G__48715;
count__48127 = G__48716;
i__48128 = G__48717;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48125);
if(temp__5735__auto__){
var seq__48125__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48125__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48125__$1);
var G__48719 = cljs.core.chunk_rest(seq__48125__$1);
var G__48720 = c__4609__auto__;
var G__48721 = cljs.core.count(c__4609__auto__);
var G__48722 = (0);
seq__48125 = G__48719;
chunk__48126 = G__48720;
count__48127 = G__48721;
i__48128 = G__48722;
continue;
} else {
var it = cljs.core.first(seq__48125__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48723 = cljs.core.next(seq__48125__$1);
var G__48724 = null;
var G__48725 = (0);
var G__48726 = (0);
seq__48125 = G__48723;
chunk__48126 = G__48724;
count__48127 = G__48725;
i__48128 = G__48726;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48138,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48147 = k48138;
var G__48147__$1 = (((G__48147 instanceof cljs.core.Keyword))?G__48147.fqn:null);
switch (G__48147__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48138,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48150){
var vec__48151 = p__48150;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48151,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48151,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48137){
var self__ = this;
var G__48137__$1 = this;
return (new cljs.core.RecordIter((0),G__48137__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__48169 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48169(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48139,other48140){
var self__ = this;
var this48139__$1 = this;
return (((!((other48140 == null)))) && ((this48139__$1.constructor === other48140.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48139__$1.x,other48140.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48139__$1.y,other48140.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48139__$1.__extmap,other48140.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48137){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48178 = cljs.core.keyword_identical_QMARK_;
var expr__48179 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48182 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48183 = expr__48179;
return (pred__48178.cljs$core$IFn$_invoke$arity$2 ? pred__48178.cljs$core$IFn$_invoke$arity$2(G__48182,G__48183) : pred__48178.call(null,G__48182,G__48183));
})())){
return (new shadow.dom.Coordinate(G__48137,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48184 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48185 = expr__48179;
return (pred__48178.cljs$core$IFn$_invoke$arity$2 ? pred__48178.cljs$core$IFn$_invoke$arity$2(G__48184,G__48185) : pred__48178.call(null,G__48184,G__48185));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48137,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48137),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48137){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48137,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48142){
var extmap__4478__auto__ = (function (){var G__48192 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48142,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48142)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48192);
} else {
return G__48192;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48142),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48142),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48193 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48193);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48194 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48194);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48195 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48195);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48197,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48202 = k48197;
var G__48202__$1 = (((G__48202 instanceof cljs.core.Keyword))?G__48202.fqn:null);
switch (G__48202__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48197,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48204){
var vec__48205 = p__48204;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48205,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48205,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48196){
var self__ = this;
var G__48196__$1 = this;
return (new cljs.core.RecordIter((0),G__48196__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__48209 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48209(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48198,other48199){
var self__ = this;
var this48198__$1 = this;
return (((!((other48199 == null)))) && ((this48198__$1.constructor === other48199.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48198__$1.w,other48199.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48198__$1.h,other48199.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48198__$1.__extmap,other48199.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48196){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48218 = cljs.core.keyword_identical_QMARK_;
var expr__48219 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48222 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48223 = expr__48219;
return (pred__48218.cljs$core$IFn$_invoke$arity$2 ? pred__48218.cljs$core$IFn$_invoke$arity$2(G__48222,G__48223) : pred__48218.call(null,G__48222,G__48223));
})())){
return (new shadow.dom.Size(G__48196,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48225 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48226 = expr__48219;
return (pred__48218.cljs$core$IFn$_invoke$arity$2 ? pred__48218.cljs$core$IFn$_invoke$arity$2(G__48225,G__48226) : pred__48218.call(null,G__48225,G__48226));
})())){
return (new shadow.dom.Size(self__.w,G__48196,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48196),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48196){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48196,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48201){
var extmap__4478__auto__ = (function (){var G__48235 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48201,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48201)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48235);
} else {
return G__48235;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48201),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48201),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48241 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48241);
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
var G__48767 = (i + (1));
var G__48768 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48767;
ret = G__48768;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48254){
var vec__48255 = p__48254;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48255,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48255,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48261 = arguments.length;
switch (G__48261) {
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
var G__48272_48772 = new_node;
var G__48273_48773 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48272_48772,G__48273_48773);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48275_48774 = new_node;
var G__48276_48775 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48275_48774,G__48276_48775);

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
var G__48776 = ps;
var G__48777 = (i + (1));
el__$1 = G__48776;
i = G__48777;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48278 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48278);
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
var G__48283 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48283);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48284 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48284);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48287 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48287,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48287,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48287,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48291_48779 = cljs.core.seq(props);
var chunk__48292_48780 = null;
var count__48293_48781 = (0);
var i__48294_48782 = (0);
while(true){
if((i__48294_48782 < count__48293_48781)){
var vec__48304_48783 = chunk__48292_48780.cljs$core$IIndexed$_nth$arity$2(null,i__48294_48782);
var k_48784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48304_48783,(0),null);
var v_48785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48304_48783,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48784);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48784),v_48785);


var G__48786 = seq__48291_48779;
var G__48787 = chunk__48292_48780;
var G__48788 = count__48293_48781;
var G__48789 = (i__48294_48782 + (1));
seq__48291_48779 = G__48786;
chunk__48292_48780 = G__48787;
count__48293_48781 = G__48788;
i__48294_48782 = G__48789;
continue;
} else {
var temp__5735__auto___48790 = cljs.core.seq(seq__48291_48779);
if(temp__5735__auto___48790){
var seq__48291_48791__$1 = temp__5735__auto___48790;
if(cljs.core.chunked_seq_QMARK_(seq__48291_48791__$1)){
var c__4609__auto___48792 = cljs.core.chunk_first(seq__48291_48791__$1);
var G__48793 = cljs.core.chunk_rest(seq__48291_48791__$1);
var G__48794 = c__4609__auto___48792;
var G__48795 = cljs.core.count(c__4609__auto___48792);
var G__48796 = (0);
seq__48291_48779 = G__48793;
chunk__48292_48780 = G__48794;
count__48293_48781 = G__48795;
i__48294_48782 = G__48796;
continue;
} else {
var vec__48309_48797 = cljs.core.first(seq__48291_48791__$1);
var k_48798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48309_48797,(0),null);
var v_48799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48309_48797,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48798);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48798),v_48799);


var G__48802 = cljs.core.next(seq__48291_48791__$1);
var G__48803 = null;
var G__48804 = (0);
var G__48805 = (0);
seq__48291_48779 = G__48802;
chunk__48292_48780 = G__48803;
count__48293_48781 = G__48804;
i__48294_48782 = G__48805;
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
var vec__48318 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48318,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48318,(1),null);
var seq__48321_48806 = cljs.core.seq(node_children);
var chunk__48323_48807 = null;
var count__48324_48808 = (0);
var i__48325_48809 = (0);
while(true){
if((i__48325_48809 < count__48324_48808)){
var child_struct_48810 = chunk__48323_48807.cljs$core$IIndexed$_nth$arity$2(null,i__48325_48809);
if((!((child_struct_48810 == null)))){
if(typeof child_struct_48810 === 'string'){
var text_48811 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48811),child_struct_48810].join(''));
} else {
var children_48812 = shadow.dom.svg_node(child_struct_48810);
if(cljs.core.seq_QMARK_(children_48812)){
var seq__48340_48814 = cljs.core.seq(children_48812);
var chunk__48342_48815 = null;
var count__48343_48816 = (0);
var i__48344_48817 = (0);
while(true){
if((i__48344_48817 < count__48343_48816)){
var child_48818 = chunk__48342_48815.cljs$core$IIndexed$_nth$arity$2(null,i__48344_48817);
if(cljs.core.truth_(child_48818)){
node.appendChild(child_48818);


var G__48819 = seq__48340_48814;
var G__48820 = chunk__48342_48815;
var G__48821 = count__48343_48816;
var G__48822 = (i__48344_48817 + (1));
seq__48340_48814 = G__48819;
chunk__48342_48815 = G__48820;
count__48343_48816 = G__48821;
i__48344_48817 = G__48822;
continue;
} else {
var G__48823 = seq__48340_48814;
var G__48824 = chunk__48342_48815;
var G__48825 = count__48343_48816;
var G__48826 = (i__48344_48817 + (1));
seq__48340_48814 = G__48823;
chunk__48342_48815 = G__48824;
count__48343_48816 = G__48825;
i__48344_48817 = G__48826;
continue;
}
} else {
var temp__5735__auto___48827 = cljs.core.seq(seq__48340_48814);
if(temp__5735__auto___48827){
var seq__48340_48828__$1 = temp__5735__auto___48827;
if(cljs.core.chunked_seq_QMARK_(seq__48340_48828__$1)){
var c__4609__auto___48829 = cljs.core.chunk_first(seq__48340_48828__$1);
var G__48830 = cljs.core.chunk_rest(seq__48340_48828__$1);
var G__48831 = c__4609__auto___48829;
var G__48832 = cljs.core.count(c__4609__auto___48829);
var G__48833 = (0);
seq__48340_48814 = G__48830;
chunk__48342_48815 = G__48831;
count__48343_48816 = G__48832;
i__48344_48817 = G__48833;
continue;
} else {
var child_48838 = cljs.core.first(seq__48340_48828__$1);
if(cljs.core.truth_(child_48838)){
node.appendChild(child_48838);


var G__48839 = cljs.core.next(seq__48340_48828__$1);
var G__48840 = null;
var G__48841 = (0);
var G__48842 = (0);
seq__48340_48814 = G__48839;
chunk__48342_48815 = G__48840;
count__48343_48816 = G__48841;
i__48344_48817 = G__48842;
continue;
} else {
var G__48843 = cljs.core.next(seq__48340_48828__$1);
var G__48844 = null;
var G__48845 = (0);
var G__48846 = (0);
seq__48340_48814 = G__48843;
chunk__48342_48815 = G__48844;
count__48343_48816 = G__48845;
i__48344_48817 = G__48846;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48812);
}
}


var G__48848 = seq__48321_48806;
var G__48849 = chunk__48323_48807;
var G__48850 = count__48324_48808;
var G__48851 = (i__48325_48809 + (1));
seq__48321_48806 = G__48848;
chunk__48323_48807 = G__48849;
count__48324_48808 = G__48850;
i__48325_48809 = G__48851;
continue;
} else {
var G__48852 = seq__48321_48806;
var G__48853 = chunk__48323_48807;
var G__48854 = count__48324_48808;
var G__48855 = (i__48325_48809 + (1));
seq__48321_48806 = G__48852;
chunk__48323_48807 = G__48853;
count__48324_48808 = G__48854;
i__48325_48809 = G__48855;
continue;
}
} else {
var temp__5735__auto___48856 = cljs.core.seq(seq__48321_48806);
if(temp__5735__auto___48856){
var seq__48321_48857__$1 = temp__5735__auto___48856;
if(cljs.core.chunked_seq_QMARK_(seq__48321_48857__$1)){
var c__4609__auto___48858 = cljs.core.chunk_first(seq__48321_48857__$1);
var G__48859 = cljs.core.chunk_rest(seq__48321_48857__$1);
var G__48860 = c__4609__auto___48858;
var G__48861 = cljs.core.count(c__4609__auto___48858);
var G__48862 = (0);
seq__48321_48806 = G__48859;
chunk__48323_48807 = G__48860;
count__48324_48808 = G__48861;
i__48325_48809 = G__48862;
continue;
} else {
var child_struct_48863 = cljs.core.first(seq__48321_48857__$1);
if((!((child_struct_48863 == null)))){
if(typeof child_struct_48863 === 'string'){
var text_48864 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48864),child_struct_48863].join(''));
} else {
var children_48865 = shadow.dom.svg_node(child_struct_48863);
if(cljs.core.seq_QMARK_(children_48865)){
var seq__48350_48866 = cljs.core.seq(children_48865);
var chunk__48352_48867 = null;
var count__48353_48868 = (0);
var i__48354_48869 = (0);
while(true){
if((i__48354_48869 < count__48353_48868)){
var child_48871 = chunk__48352_48867.cljs$core$IIndexed$_nth$arity$2(null,i__48354_48869);
if(cljs.core.truth_(child_48871)){
node.appendChild(child_48871);


var G__48872 = seq__48350_48866;
var G__48873 = chunk__48352_48867;
var G__48874 = count__48353_48868;
var G__48875 = (i__48354_48869 + (1));
seq__48350_48866 = G__48872;
chunk__48352_48867 = G__48873;
count__48353_48868 = G__48874;
i__48354_48869 = G__48875;
continue;
} else {
var G__48876 = seq__48350_48866;
var G__48877 = chunk__48352_48867;
var G__48878 = count__48353_48868;
var G__48879 = (i__48354_48869 + (1));
seq__48350_48866 = G__48876;
chunk__48352_48867 = G__48877;
count__48353_48868 = G__48878;
i__48354_48869 = G__48879;
continue;
}
} else {
var temp__5735__auto___48880__$1 = cljs.core.seq(seq__48350_48866);
if(temp__5735__auto___48880__$1){
var seq__48350_48881__$1 = temp__5735__auto___48880__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48350_48881__$1)){
var c__4609__auto___48882 = cljs.core.chunk_first(seq__48350_48881__$1);
var G__48883 = cljs.core.chunk_rest(seq__48350_48881__$1);
var G__48884 = c__4609__auto___48882;
var G__48885 = cljs.core.count(c__4609__auto___48882);
var G__48886 = (0);
seq__48350_48866 = G__48883;
chunk__48352_48867 = G__48884;
count__48353_48868 = G__48885;
i__48354_48869 = G__48886;
continue;
} else {
var child_48891 = cljs.core.first(seq__48350_48881__$1);
if(cljs.core.truth_(child_48891)){
node.appendChild(child_48891);


var G__48892 = cljs.core.next(seq__48350_48881__$1);
var G__48893 = null;
var G__48894 = (0);
var G__48895 = (0);
seq__48350_48866 = G__48892;
chunk__48352_48867 = G__48893;
count__48353_48868 = G__48894;
i__48354_48869 = G__48895;
continue;
} else {
var G__48896 = cljs.core.next(seq__48350_48881__$1);
var G__48897 = null;
var G__48898 = (0);
var G__48899 = (0);
seq__48350_48866 = G__48896;
chunk__48352_48867 = G__48897;
count__48353_48868 = G__48898;
i__48354_48869 = G__48899;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48865);
}
}


var G__48900 = cljs.core.next(seq__48321_48857__$1);
var G__48901 = null;
var G__48902 = (0);
var G__48903 = (0);
seq__48321_48806 = G__48900;
chunk__48323_48807 = G__48901;
count__48324_48808 = G__48902;
i__48325_48809 = G__48903;
continue;
} else {
var G__48904 = cljs.core.next(seq__48321_48857__$1);
var G__48905 = null;
var G__48906 = (0);
var G__48907 = (0);
seq__48321_48806 = G__48904;
chunk__48323_48807 = G__48905;
count__48324_48808 = G__48906;
i__48325_48809 = G__48907;
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

var G__48364_48908 = shadow.dom._to_svg;
var G__48365_48909 = "string";
var G__48366_48910 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__48364_48908,G__48365_48909,G__48366_48910);

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

var G__48370_48911 = shadow.dom._to_svg;
var G__48371_48912 = "null";
var G__48372_48913 = (function (_){
return null;
});
goog.object.set(G__48370_48911,G__48371_48912,G__48372_48913);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48914 = arguments.length;
var i__4790__auto___48915 = (0);
while(true){
if((i__4790__auto___48915 < len__4789__auto___48914)){
args__4795__auto__.push((arguments[i__4790__auto___48915]));

var G__48916 = (i__4790__auto___48915 + (1));
i__4790__auto___48915 = G__48916;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48374){
var G__48375 = cljs.core.first(seq48374);
var seq48374__$1 = cljs.core.next(seq48374);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48375,seq48374__$1);
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
var G__48377 = arguments.length;
switch (G__48377) {
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
var G__48378_48919 = shadow.dom.dom_node(el);
var G__48379_48920 = cljs.core.name(event);
var G__48380_48921 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48378_48919,G__48379_48920,G__48380_48921) : shadow.dom.dom_listen.call(null,G__48378_48919,G__48379_48920,G__48380_48921));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__46126__auto___48922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46025__auto__ = (function (state_48385){
var state_val_48386 = (state_48385[(1)]);
if((state_val_48386 === (1))){
var state_48385__$1 = state_48385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48385__$1,(2),once_or_cleanup);
} else {
if((state_val_48386 === (2))){
var inst_48382 = (state_48385[(2)]);
var inst_48383 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48385__$1 = (function (){var statearr_48387 = state_48385;
(statearr_48387[(7)] = inst_48382);

return statearr_48387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48385__$1,inst_48383);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46026__auto__ = null;
var shadow$dom$state_machine__46026__auto____0 = (function (){
var statearr_48388 = [null,null,null,null,null,null,null,null];
(statearr_48388[(0)] = shadow$dom$state_machine__46026__auto__);

(statearr_48388[(1)] = (1));

return statearr_48388;
});
var shadow$dom$state_machine__46026__auto____1 = (function (state_48385){
while(true){
var ret_value__46027__auto__ = (function (){try{while(true){
var result__46028__auto__ = switch__46025__auto__(state_48385);
if(cljs.core.keyword_identical_QMARK_(result__46028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46028__auto__;
}
break;
}
}catch (e48389){if((e48389 instanceof Object)){
var ex__46029__auto__ = e48389;
var statearr_48390_48930 = state_48385;
(statearr_48390_48930[(5)] = ex__46029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48389;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48931 = state_48385;
state_48385 = G__48931;
continue;
} else {
return ret_value__46027__auto__;
}
break;
}
});
shadow$dom$state_machine__46026__auto__ = function(state_48385){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46026__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46026__auto____1.call(this,state_48385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46026__auto____0;
shadow$dom$state_machine__46026__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46026__auto____1;
return shadow$dom$state_machine__46026__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_48391 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_48391[(6)] = c__46126__auto___48922);

return statearr_48391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
