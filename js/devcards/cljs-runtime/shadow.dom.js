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
return cljs.core.cons((coll[idx]),(function (){var G__47752 = coll;
var G__47753 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47752,G__47753) : shadow.dom.lazy_native_coll_seq.call(null,G__47752,G__47753));
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
var G__47780 = arguments.length;
switch (G__47780) {
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
var G__47786 = arguments.length;
switch (G__47786) {
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
var G__47792 = arguments.length;
switch (G__47792) {
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
var G__47796 = arguments.length;
switch (G__47796) {
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
var G__47800 = arguments.length;
switch (G__47800) {
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
var G__47804 = document;
var G__47805 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47804,G__47805);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__47808 = shadow.dom.dom_node(parent);
var G__47809 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47808,G__47809);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__47811 = shadow.dom.dom_node(el);
var G__47812 = cls;
return goog.dom.classlist.add(G__47811,G__47812);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__47814 = shadow.dom.dom_node(el);
var G__47815 = cls;
return goog.dom.classlist.remove(G__47814,G__47815);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47819 = arguments.length;
switch (G__47819) {
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
var G__47822 = shadow.dom.dom_node(el);
var G__47823 = cls;
return goog.dom.classlist.toggle(G__47822,G__47823);
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
}catch (e47831){if((e47831 instanceof Object)){
var e = e47831;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47831;

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
var seq__47834 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47835 = null;
var count__47836 = (0);
var i__47837 = (0);
while(true){
if((i__47837 < count__47836)){
var el = chunk__47835.cljs$core$IIndexed$_nth$arity$2(null,i__47837);
var handler_48480__$1 = ((function (seq__47834,chunk__47835,count__47836,i__47837,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47834,chunk__47835,count__47836,i__47837,el))
;
var G__47847_48481 = el;
var G__47848_48482 = cljs.core.name(ev);
var G__47849_48483 = handler_48480__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47847_48481,G__47848_48482,G__47849_48483) : shadow.dom.dom_listen.call(null,G__47847_48481,G__47848_48482,G__47849_48483));


var G__48484 = seq__47834;
var G__48485 = chunk__47835;
var G__48486 = count__47836;
var G__48487 = (i__47837 + (1));
seq__47834 = G__48484;
chunk__47835 = G__48485;
count__47836 = G__48486;
i__47837 = G__48487;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47834);
if(temp__5735__auto__){
var seq__47834__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47834__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47834__$1);
var G__48488 = cljs.core.chunk_rest(seq__47834__$1);
var G__48489 = c__4609__auto__;
var G__48490 = cljs.core.count(c__4609__auto__);
var G__48491 = (0);
seq__47834 = G__48488;
chunk__47835 = G__48489;
count__47836 = G__48490;
i__47837 = G__48491;
continue;
} else {
var el = cljs.core.first(seq__47834__$1);
var handler_48494__$1 = ((function (seq__47834,chunk__47835,count__47836,i__47837,el,seq__47834__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47834,chunk__47835,count__47836,i__47837,el,seq__47834__$1,temp__5735__auto__))
;
var G__47851_48496 = el;
var G__47852_48497 = cljs.core.name(ev);
var G__47853_48498 = handler_48494__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47851_48496,G__47852_48497,G__47853_48498) : shadow.dom.dom_listen.call(null,G__47851_48496,G__47852_48497,G__47853_48498));


var G__48499 = cljs.core.next(seq__47834__$1);
var G__48500 = null;
var G__48501 = (0);
var G__48502 = (0);
seq__47834 = G__48499;
chunk__47835 = G__48500;
count__47836 = G__48501;
i__47837 = G__48502;
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
var G__47855 = arguments.length;
switch (G__47855) {
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
var G__47859 = shadow.dom.dom_node(el);
var G__47860 = cljs.core.name(ev);
var G__47861 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47859,G__47860,G__47861) : shadow.dom.dom_listen.call(null,G__47859,G__47860,G__47861));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__47865 = shadow.dom.dom_node(el);
var G__47866 = cljs.core.name(ev);
var G__47867 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__47865,G__47866,G__47867) : shadow.dom.dom_listen_remove.call(null,G__47865,G__47866,G__47867));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47870 = cljs.core.seq(events);
var chunk__47871 = null;
var count__47872 = (0);
var i__47873 = (0);
while(true){
if((i__47873 < count__47872)){
var vec__47883 = chunk__47871.cljs$core$IIndexed$_nth$arity$2(null,i__47873);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47883,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47883,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48509 = seq__47870;
var G__48510 = chunk__47871;
var G__48511 = count__47872;
var G__48512 = (i__47873 + (1));
seq__47870 = G__48509;
chunk__47871 = G__48510;
count__47872 = G__48511;
i__47873 = G__48512;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47870);
if(temp__5735__auto__){
var seq__47870__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47870__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47870__$1);
var G__48513 = cljs.core.chunk_rest(seq__47870__$1);
var G__48514 = c__4609__auto__;
var G__48515 = cljs.core.count(c__4609__auto__);
var G__48516 = (0);
seq__47870 = G__48513;
chunk__47871 = G__48514;
count__47872 = G__48515;
i__47873 = G__48516;
continue;
} else {
var vec__47888 = cljs.core.first(seq__47870__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47888,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47888,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48520 = cljs.core.next(seq__47870__$1);
var G__48521 = null;
var G__48522 = (0);
var G__48523 = (0);
seq__47870 = G__48520;
chunk__47871 = G__48521;
count__47872 = G__48522;
i__47873 = G__48523;
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
var seq__47893 = cljs.core.seq(styles);
var chunk__47895 = null;
var count__47896 = (0);
var i__47897 = (0);
while(true){
if((i__47897 < count__47896)){
var vec__47914 = chunk__47895.cljs$core$IIndexed$_nth$arity$2(null,i__47897);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47914,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47914,(1),null);
var G__47917_48528 = dom;
var G__47918_48529 = cljs.core.name(k);
var G__47919_48530 = (((v == null))?"":v);
goog.style.setStyle(G__47917_48528,G__47918_48529,G__47919_48530);


var G__48532 = seq__47893;
var G__48533 = chunk__47895;
var G__48534 = count__47896;
var G__48535 = (i__47897 + (1));
seq__47893 = G__48532;
chunk__47895 = G__48533;
count__47896 = G__48534;
i__47897 = G__48535;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47893);
if(temp__5735__auto__){
var seq__47893__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47893__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47893__$1);
var G__48536 = cljs.core.chunk_rest(seq__47893__$1);
var G__48537 = c__4609__auto__;
var G__48538 = cljs.core.count(c__4609__auto__);
var G__48539 = (0);
seq__47893 = G__48536;
chunk__47895 = G__48537;
count__47896 = G__48538;
i__47897 = G__48539;
continue;
} else {
var vec__47922 = cljs.core.first(seq__47893__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47922,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47922,(1),null);
var G__47926_48543 = dom;
var G__47927_48544 = cljs.core.name(k);
var G__47928_48545 = (((v == null))?"":v);
goog.style.setStyle(G__47926_48543,G__47927_48544,G__47928_48545);


var G__48546 = cljs.core.next(seq__47893__$1);
var G__48547 = null;
var G__48548 = (0);
var G__48549 = (0);
seq__47893 = G__48546;
chunk__47895 = G__48547;
count__47896 = G__48548;
i__47897 = G__48549;
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
var G__47932_48550 = key;
var G__47932_48551__$1 = (((G__47932_48550 instanceof cljs.core.Keyword))?G__47932_48550.fqn:null);
switch (G__47932_48551__$1) {
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
var ks_48558 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_48558,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_48558,"aria-");
}
})())){
el.setAttribute(ks_48558,value);
} else {
(el[ks_48558] = value);
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
var map__47944 = p__47943;
var map__47944__$1 = (((((!((map__47944 == null))))?(((((map__47944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47944):map__47944);
var props = map__47944__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47944__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47947 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47947,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47947,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47947,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47951 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47951,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47951;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47956 = arguments.length;
switch (G__47956) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47964){
var vec__47965 = p__47964;
var seq__47966 = cljs.core.seq(vec__47965);
var first__47967 = cljs.core.first(seq__47966);
var seq__47966__$1 = cljs.core.next(seq__47966);
var nn = first__47967;
var first__47967__$1 = cljs.core.first(seq__47966__$1);
var seq__47966__$2 = cljs.core.next(seq__47966__$1);
var np = first__47967__$1;
var nc = seq__47966__$2;
var node = vec__47965;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47969 = nn;
var G__47970 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47969,G__47970) : create_fn.call(null,G__47969,G__47970));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47971 = nn;
var G__47972 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47971,G__47972) : create_fn.call(null,G__47971,G__47972));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47975 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47975,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47975,(1),null);
var seq__47978_48583 = cljs.core.seq(node_children);
var chunk__47979_48584 = null;
var count__47980_48585 = (0);
var i__47981_48586 = (0);
while(true){
if((i__47981_48586 < count__47980_48585)){
var child_struct_48587 = chunk__47979_48584.cljs$core$IIndexed$_nth$arity$2(null,i__47981_48586);
var children_48589 = shadow.dom.dom_node(child_struct_48587);
if(cljs.core.seq_QMARK_(children_48589)){
var seq__47994_48591 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48589));
var chunk__47996_48592 = null;
var count__47997_48593 = (0);
var i__47998_48594 = (0);
while(true){
if((i__47998_48594 < count__47997_48593)){
var child_48597 = chunk__47996_48592.cljs$core$IIndexed$_nth$arity$2(null,i__47998_48594);
if(cljs.core.truth_(child_48597)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48597);


var G__48599 = seq__47994_48591;
var G__48600 = chunk__47996_48592;
var G__48601 = count__47997_48593;
var G__48602 = (i__47998_48594 + (1));
seq__47994_48591 = G__48599;
chunk__47996_48592 = G__48600;
count__47997_48593 = G__48601;
i__47998_48594 = G__48602;
continue;
} else {
var G__48603 = seq__47994_48591;
var G__48604 = chunk__47996_48592;
var G__48605 = count__47997_48593;
var G__48606 = (i__47998_48594 + (1));
seq__47994_48591 = G__48603;
chunk__47996_48592 = G__48604;
count__47997_48593 = G__48605;
i__47998_48594 = G__48606;
continue;
}
} else {
var temp__5735__auto___48607 = cljs.core.seq(seq__47994_48591);
if(temp__5735__auto___48607){
var seq__47994_48608__$1 = temp__5735__auto___48607;
if(cljs.core.chunked_seq_QMARK_(seq__47994_48608__$1)){
var c__4609__auto___48610 = cljs.core.chunk_first(seq__47994_48608__$1);
var G__48611 = cljs.core.chunk_rest(seq__47994_48608__$1);
var G__48612 = c__4609__auto___48610;
var G__48613 = cljs.core.count(c__4609__auto___48610);
var G__48614 = (0);
seq__47994_48591 = G__48611;
chunk__47996_48592 = G__48612;
count__47997_48593 = G__48613;
i__47998_48594 = G__48614;
continue;
} else {
var child_48618 = cljs.core.first(seq__47994_48608__$1);
if(cljs.core.truth_(child_48618)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48618);


var G__48622 = cljs.core.next(seq__47994_48608__$1);
var G__48623 = null;
var G__48624 = (0);
var G__48625 = (0);
seq__47994_48591 = G__48622;
chunk__47996_48592 = G__48623;
count__47997_48593 = G__48624;
i__47998_48594 = G__48625;
continue;
} else {
var G__48628 = cljs.core.next(seq__47994_48608__$1);
var G__48629 = null;
var G__48630 = (0);
var G__48631 = (0);
seq__47994_48591 = G__48628;
chunk__47996_48592 = G__48629;
count__47997_48593 = G__48630;
i__47998_48594 = G__48631;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48589);
}


var G__48633 = seq__47978_48583;
var G__48634 = chunk__47979_48584;
var G__48635 = count__47980_48585;
var G__48636 = (i__47981_48586 + (1));
seq__47978_48583 = G__48633;
chunk__47979_48584 = G__48634;
count__47980_48585 = G__48635;
i__47981_48586 = G__48636;
continue;
} else {
var temp__5735__auto___48637 = cljs.core.seq(seq__47978_48583);
if(temp__5735__auto___48637){
var seq__47978_48642__$1 = temp__5735__auto___48637;
if(cljs.core.chunked_seq_QMARK_(seq__47978_48642__$1)){
var c__4609__auto___48643 = cljs.core.chunk_first(seq__47978_48642__$1);
var G__48644 = cljs.core.chunk_rest(seq__47978_48642__$1);
var G__48645 = c__4609__auto___48643;
var G__48646 = cljs.core.count(c__4609__auto___48643);
var G__48647 = (0);
seq__47978_48583 = G__48644;
chunk__47979_48584 = G__48645;
count__47980_48585 = G__48646;
i__47981_48586 = G__48647;
continue;
} else {
var child_struct_48650 = cljs.core.first(seq__47978_48642__$1);
var children_48651 = shadow.dom.dom_node(child_struct_48650);
if(cljs.core.seq_QMARK_(children_48651)){
var seq__48007_48653 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48651));
var chunk__48009_48654 = null;
var count__48010_48655 = (0);
var i__48011_48656 = (0);
while(true){
if((i__48011_48656 < count__48010_48655)){
var child_48657 = chunk__48009_48654.cljs$core$IIndexed$_nth$arity$2(null,i__48011_48656);
if(cljs.core.truth_(child_48657)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48657);


var G__48658 = seq__48007_48653;
var G__48659 = chunk__48009_48654;
var G__48660 = count__48010_48655;
var G__48661 = (i__48011_48656 + (1));
seq__48007_48653 = G__48658;
chunk__48009_48654 = G__48659;
count__48010_48655 = G__48660;
i__48011_48656 = G__48661;
continue;
} else {
var G__48663 = seq__48007_48653;
var G__48664 = chunk__48009_48654;
var G__48665 = count__48010_48655;
var G__48666 = (i__48011_48656 + (1));
seq__48007_48653 = G__48663;
chunk__48009_48654 = G__48664;
count__48010_48655 = G__48665;
i__48011_48656 = G__48666;
continue;
}
} else {
var temp__5735__auto___48667__$1 = cljs.core.seq(seq__48007_48653);
if(temp__5735__auto___48667__$1){
var seq__48007_48669__$1 = temp__5735__auto___48667__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48007_48669__$1)){
var c__4609__auto___48670 = cljs.core.chunk_first(seq__48007_48669__$1);
var G__48671 = cljs.core.chunk_rest(seq__48007_48669__$1);
var G__48672 = c__4609__auto___48670;
var G__48673 = cljs.core.count(c__4609__auto___48670);
var G__48674 = (0);
seq__48007_48653 = G__48671;
chunk__48009_48654 = G__48672;
count__48010_48655 = G__48673;
i__48011_48656 = G__48674;
continue;
} else {
var child_48675 = cljs.core.first(seq__48007_48669__$1);
if(cljs.core.truth_(child_48675)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48675);


var G__48676 = cljs.core.next(seq__48007_48669__$1);
var G__48677 = null;
var G__48678 = (0);
var G__48679 = (0);
seq__48007_48653 = G__48676;
chunk__48009_48654 = G__48677;
count__48010_48655 = G__48678;
i__48011_48656 = G__48679;
continue;
} else {
var G__48680 = cljs.core.next(seq__48007_48669__$1);
var G__48681 = null;
var G__48682 = (0);
var G__48683 = (0);
seq__48007_48653 = G__48680;
chunk__48009_48654 = G__48681;
count__48010_48655 = G__48682;
i__48011_48656 = G__48683;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48651);
}


var G__48685 = cljs.core.next(seq__47978_48642__$1);
var G__48686 = null;
var G__48687 = (0);
var G__48688 = (0);
seq__47978_48583 = G__48685;
chunk__47979_48584 = G__48686;
count__47980_48585 = G__48687;
i__47981_48586 = G__48688;
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
var G__48021 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48021);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48027 = cljs.core.seq(node);
var chunk__48028 = null;
var count__48029 = (0);
var i__48030 = (0);
while(true){
if((i__48030 < count__48029)){
var n = chunk__48028.cljs$core$IIndexed$_nth$arity$2(null,i__48030);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48700 = seq__48027;
var G__48701 = chunk__48028;
var G__48702 = count__48029;
var G__48703 = (i__48030 + (1));
seq__48027 = G__48700;
chunk__48028 = G__48701;
count__48029 = G__48702;
i__48030 = G__48703;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48027);
if(temp__5735__auto__){
var seq__48027__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48027__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48027__$1);
var G__48710 = cljs.core.chunk_rest(seq__48027__$1);
var G__48711 = c__4609__auto__;
var G__48712 = cljs.core.count(c__4609__auto__);
var G__48713 = (0);
seq__48027 = G__48710;
chunk__48028 = G__48711;
count__48029 = G__48712;
i__48030 = G__48713;
continue;
} else {
var n = cljs.core.first(seq__48027__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48715 = cljs.core.next(seq__48027__$1);
var G__48716 = null;
var G__48717 = (0);
var G__48718 = (0);
seq__48027 = G__48715;
chunk__48028 = G__48716;
count__48029 = G__48717;
i__48030 = G__48718;
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
var G__48037 = shadow.dom.dom_node(new$);
var G__48038 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48037,G__48038);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48041 = arguments.length;
switch (G__48041) {
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
var G__48051 = arguments.length;
switch (G__48051) {
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
var G__48059 = arguments.length;
switch (G__48059) {
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
var len__4789__auto___48754 = arguments.length;
var i__4790__auto___48755 = (0);
while(true){
if((i__4790__auto___48755 < len__4789__auto___48754)){
args__4795__auto__.push((arguments[i__4790__auto___48755]));

var G__48756 = (i__4790__auto___48755 + (1));
i__4790__auto___48755 = G__48756;
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
var seq__48079_48758 = cljs.core.seq(nodes);
var chunk__48080_48759 = null;
var count__48081_48760 = (0);
var i__48082_48761 = (0);
while(true){
if((i__48082_48761 < count__48081_48760)){
var node_48762 = chunk__48080_48759.cljs$core$IIndexed$_nth$arity$2(null,i__48082_48761);
fragment.appendChild(shadow.dom._to_dom(node_48762));


var G__48764 = seq__48079_48758;
var G__48765 = chunk__48080_48759;
var G__48766 = count__48081_48760;
var G__48767 = (i__48082_48761 + (1));
seq__48079_48758 = G__48764;
chunk__48080_48759 = G__48765;
count__48081_48760 = G__48766;
i__48082_48761 = G__48767;
continue;
} else {
var temp__5735__auto___48771 = cljs.core.seq(seq__48079_48758);
if(temp__5735__auto___48771){
var seq__48079_48773__$1 = temp__5735__auto___48771;
if(cljs.core.chunked_seq_QMARK_(seq__48079_48773__$1)){
var c__4609__auto___48774 = cljs.core.chunk_first(seq__48079_48773__$1);
var G__48775 = cljs.core.chunk_rest(seq__48079_48773__$1);
var G__48776 = c__4609__auto___48774;
var G__48777 = cljs.core.count(c__4609__auto___48774);
var G__48778 = (0);
seq__48079_48758 = G__48775;
chunk__48080_48759 = G__48776;
count__48081_48760 = G__48777;
i__48082_48761 = G__48778;
continue;
} else {
var node_48779 = cljs.core.first(seq__48079_48773__$1);
fragment.appendChild(shadow.dom._to_dom(node_48779));


var G__48780 = cljs.core.next(seq__48079_48773__$1);
var G__48781 = null;
var G__48782 = (0);
var G__48783 = (0);
seq__48079_48758 = G__48780;
chunk__48080_48759 = G__48781;
count__48081_48760 = G__48782;
i__48082_48761 = G__48783;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48075){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48075));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48085_48788 = cljs.core.seq(scripts);
var chunk__48086_48789 = null;
var count__48087_48790 = (0);
var i__48088_48791 = (0);
while(true){
if((i__48088_48791 < count__48087_48790)){
var vec__48096_48793 = chunk__48086_48789.cljs$core$IIndexed$_nth$arity$2(null,i__48088_48791);
var script_tag_48794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48096_48793,(0),null);
var script_body_48795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48096_48793,(1),null);
eval(script_body_48795);


var G__48798 = seq__48085_48788;
var G__48799 = chunk__48086_48789;
var G__48800 = count__48087_48790;
var G__48801 = (i__48088_48791 + (1));
seq__48085_48788 = G__48798;
chunk__48086_48789 = G__48799;
count__48087_48790 = G__48800;
i__48088_48791 = G__48801;
continue;
} else {
var temp__5735__auto___48802 = cljs.core.seq(seq__48085_48788);
if(temp__5735__auto___48802){
var seq__48085_48803__$1 = temp__5735__auto___48802;
if(cljs.core.chunked_seq_QMARK_(seq__48085_48803__$1)){
var c__4609__auto___48805 = cljs.core.chunk_first(seq__48085_48803__$1);
var G__48806 = cljs.core.chunk_rest(seq__48085_48803__$1);
var G__48807 = c__4609__auto___48805;
var G__48808 = cljs.core.count(c__4609__auto___48805);
var G__48809 = (0);
seq__48085_48788 = G__48806;
chunk__48086_48789 = G__48807;
count__48087_48790 = G__48808;
i__48088_48791 = G__48809;
continue;
} else {
var vec__48100_48810 = cljs.core.first(seq__48085_48803__$1);
var script_tag_48811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100_48810,(0),null);
var script_body_48812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48100_48810,(1),null);
eval(script_body_48812);


var G__48816 = cljs.core.next(seq__48085_48803__$1);
var G__48817 = null;
var G__48818 = (0);
var G__48819 = (0);
seq__48085_48788 = G__48816;
chunk__48086_48789 = G__48817;
count__48087_48790 = G__48818;
i__48088_48791 = G__48819;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48103){
var vec__48105 = p__48103;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48105,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48105,(1),null);
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
var G__48112 = shadow.dom.dom_node(el);
var G__48114 = cls;
return goog.dom.getAncestorByClass(G__48112,G__48114);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48119 = arguments.length;
switch (G__48119) {
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
var G__48120 = shadow.dom.dom_node(el);
var G__48121 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48120,G__48121);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48122 = shadow.dom.dom_node(el);
var G__48123 = cljs.core.name(tag);
var G__48124 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48122,G__48123,G__48124);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48126 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48126);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48127 = shadow.dom.dom_node(dom);
var G__48128 = value;
return goog.dom.forms.setValue(G__48127,G__48128);
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
var seq__48136 = cljs.core.seq(style_keys);
var chunk__48137 = null;
var count__48138 = (0);
var i__48139 = (0);
while(true){
if((i__48139 < count__48138)){
var it = chunk__48137.cljs$core$IIndexed$_nth$arity$2(null,i__48139);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48832 = seq__48136;
var G__48833 = chunk__48137;
var G__48834 = count__48138;
var G__48835 = (i__48139 + (1));
seq__48136 = G__48832;
chunk__48137 = G__48833;
count__48138 = G__48834;
i__48139 = G__48835;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48136);
if(temp__5735__auto__){
var seq__48136__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48136__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48136__$1);
var G__48839 = cljs.core.chunk_rest(seq__48136__$1);
var G__48840 = c__4609__auto__;
var G__48841 = cljs.core.count(c__4609__auto__);
var G__48842 = (0);
seq__48136 = G__48839;
chunk__48137 = G__48840;
count__48138 = G__48841;
i__48139 = G__48842;
continue;
} else {
var it = cljs.core.first(seq__48136__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48843 = cljs.core.next(seq__48136__$1);
var G__48844 = null;
var G__48845 = (0);
var G__48846 = (0);
seq__48136 = G__48843;
chunk__48137 = G__48844;
count__48138 = G__48845;
i__48139 = G__48846;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48149,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48157 = k48149;
var G__48157__$1 = (((G__48157 instanceof cljs.core.Keyword))?G__48157.fqn:null);
switch (G__48157__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48149,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48161){
var vec__48162 = p__48161;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48162,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48162,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48148){
var self__ = this;
var G__48148__$1 = this;
return (new cljs.core.RecordIter((0),G__48148__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__48174 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48174(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48150,other48151){
var self__ = this;
var this48150__$1 = this;
return (((!((other48151 == null)))) && ((this48150__$1.constructor === other48151.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48150__$1.x,other48151.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48150__$1.y,other48151.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48150__$1.__extmap,other48151.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48148){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48185 = cljs.core.keyword_identical_QMARK_;
var expr__48186 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48189 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48190 = expr__48186;
return (pred__48185.cljs$core$IFn$_invoke$arity$2 ? pred__48185.cljs$core$IFn$_invoke$arity$2(G__48189,G__48190) : pred__48185.call(null,G__48189,G__48190));
})())){
return (new shadow.dom.Coordinate(G__48148,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48192 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48193 = expr__48186;
return (pred__48185.cljs$core$IFn$_invoke$arity$2 ? pred__48185.cljs$core$IFn$_invoke$arity$2(G__48192,G__48193) : pred__48185.call(null,G__48192,G__48193));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48148,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48148),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48148){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48148,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48152){
var extmap__4478__auto__ = (function (){var G__48200 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48152,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48152)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48200);
} else {
return G__48200;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48152),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48152),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48203 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48203);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48205 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48205);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48208 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48208);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48211,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48217 = k48211;
var G__48217__$1 = (((G__48217 instanceof cljs.core.Keyword))?G__48217.fqn:null);
switch (G__48217__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48211,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48218){
var vec__48219 = p__48218;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48219,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48219,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48210){
var self__ = this;
var G__48210__$1 = this;
return (new cljs.core.RecordIter((0),G__48210__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__48225 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48225(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48212,other48213){
var self__ = this;
var this48212__$1 = this;
return (((!((other48213 == null)))) && ((this48212__$1.constructor === other48213.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48212__$1.w,other48213.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48212__$1.h,other48213.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48212__$1.__extmap,other48213.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48210){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48227 = cljs.core.keyword_identical_QMARK_;
var expr__48228 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48230 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48231 = expr__48228;
return (pred__48227.cljs$core$IFn$_invoke$arity$2 ? pred__48227.cljs$core$IFn$_invoke$arity$2(G__48230,G__48231) : pred__48227.call(null,G__48230,G__48231));
})())){
return (new shadow.dom.Size(G__48210,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48232 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48233 = expr__48228;
return (pred__48227.cljs$core$IFn$_invoke$arity$2 ? pred__48227.cljs$core$IFn$_invoke$arity$2(G__48232,G__48233) : pred__48227.call(null,G__48232,G__48233));
})())){
return (new shadow.dom.Size(self__.w,G__48210,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48210),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48210){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48210,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48215){
var extmap__4478__auto__ = (function (){var G__48240 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48215,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48215)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48240);
} else {
return G__48240;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48215),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48215),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48246 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48246);
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
var G__48920 = (i + (1));
var G__48921 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48920;
ret = G__48921;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48266){
var vec__48267 = p__48266;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48267,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48267,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48275 = arguments.length;
switch (G__48275) {
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
var G__48283_48928 = new_node;
var G__48284_48929 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48283_48928,G__48284_48929);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48286_48930 = new_node;
var G__48287_48931 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48286_48930,G__48287_48931);

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
var G__48935 = ps;
var G__48936 = (i + (1));
el__$1 = G__48935;
i = G__48936;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48291 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48291);
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
var G__48299 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48299);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48302 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48302);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48306 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48306,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48306,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48306,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48310_48946 = cljs.core.seq(props);
var chunk__48311_48947 = null;
var count__48312_48948 = (0);
var i__48313_48949 = (0);
while(true){
if((i__48313_48949 < count__48312_48948)){
var vec__48326_48951 = chunk__48311_48947.cljs$core$IIndexed$_nth$arity$2(null,i__48313_48949);
var k_48952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48326_48951,(0),null);
var v_48953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48326_48951,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48952);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48952),v_48953);


var G__48956 = seq__48310_48946;
var G__48957 = chunk__48311_48947;
var G__48958 = count__48312_48948;
var G__48959 = (i__48313_48949 + (1));
seq__48310_48946 = G__48956;
chunk__48311_48947 = G__48957;
count__48312_48948 = G__48958;
i__48313_48949 = G__48959;
continue;
} else {
var temp__5735__auto___48960 = cljs.core.seq(seq__48310_48946);
if(temp__5735__auto___48960){
var seq__48310_48961__$1 = temp__5735__auto___48960;
if(cljs.core.chunked_seq_QMARK_(seq__48310_48961__$1)){
var c__4609__auto___48962 = cljs.core.chunk_first(seq__48310_48961__$1);
var G__48963 = cljs.core.chunk_rest(seq__48310_48961__$1);
var G__48964 = c__4609__auto___48962;
var G__48965 = cljs.core.count(c__4609__auto___48962);
var G__48966 = (0);
seq__48310_48946 = G__48963;
chunk__48311_48947 = G__48964;
count__48312_48948 = G__48965;
i__48313_48949 = G__48966;
continue;
} else {
var vec__48333_48969 = cljs.core.first(seq__48310_48961__$1);
var k_48970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48333_48969,(0),null);
var v_48971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48333_48969,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48970);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48970),v_48971);


var G__48978 = cljs.core.next(seq__48310_48961__$1);
var G__48979 = null;
var G__48980 = (0);
var G__48981 = (0);
seq__48310_48946 = G__48978;
chunk__48311_48947 = G__48979;
count__48312_48948 = G__48980;
i__48313_48949 = G__48981;
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
var vec__48345 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48345,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48345,(1),null);
var seq__48348_48985 = cljs.core.seq(node_children);
var chunk__48350_48986 = null;
var count__48351_48987 = (0);
var i__48352_48988 = (0);
while(true){
if((i__48352_48988 < count__48351_48987)){
var child_struct_48990 = chunk__48350_48986.cljs$core$IIndexed$_nth$arity$2(null,i__48352_48988);
if((!((child_struct_48990 == null)))){
if(typeof child_struct_48990 === 'string'){
var text_48992 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48992),child_struct_48990].join(''));
} else {
var children_48993 = shadow.dom.svg_node(child_struct_48990);
if(cljs.core.seq_QMARK_(children_48993)){
var seq__48382_48994 = cljs.core.seq(children_48993);
var chunk__48384_48995 = null;
var count__48385_48996 = (0);
var i__48386_48997 = (0);
while(true){
if((i__48386_48997 < count__48385_48996)){
var child_48999 = chunk__48384_48995.cljs$core$IIndexed$_nth$arity$2(null,i__48386_48997);
if(cljs.core.truth_(child_48999)){
node.appendChild(child_48999);


var G__49000 = seq__48382_48994;
var G__49001 = chunk__48384_48995;
var G__49002 = count__48385_48996;
var G__49003 = (i__48386_48997 + (1));
seq__48382_48994 = G__49000;
chunk__48384_48995 = G__49001;
count__48385_48996 = G__49002;
i__48386_48997 = G__49003;
continue;
} else {
var G__49004 = seq__48382_48994;
var G__49005 = chunk__48384_48995;
var G__49006 = count__48385_48996;
var G__49007 = (i__48386_48997 + (1));
seq__48382_48994 = G__49004;
chunk__48384_48995 = G__49005;
count__48385_48996 = G__49006;
i__48386_48997 = G__49007;
continue;
}
} else {
var temp__5735__auto___49011 = cljs.core.seq(seq__48382_48994);
if(temp__5735__auto___49011){
var seq__48382_49016__$1 = temp__5735__auto___49011;
if(cljs.core.chunked_seq_QMARK_(seq__48382_49016__$1)){
var c__4609__auto___49017 = cljs.core.chunk_first(seq__48382_49016__$1);
var G__49018 = cljs.core.chunk_rest(seq__48382_49016__$1);
var G__49019 = c__4609__auto___49017;
var G__49020 = cljs.core.count(c__4609__auto___49017);
var G__49021 = (0);
seq__48382_48994 = G__49018;
chunk__48384_48995 = G__49019;
count__48385_48996 = G__49020;
i__48386_48997 = G__49021;
continue;
} else {
var child_49022 = cljs.core.first(seq__48382_49016__$1);
if(cljs.core.truth_(child_49022)){
node.appendChild(child_49022);


var G__49023 = cljs.core.next(seq__48382_49016__$1);
var G__49024 = null;
var G__49025 = (0);
var G__49026 = (0);
seq__48382_48994 = G__49023;
chunk__48384_48995 = G__49024;
count__48385_48996 = G__49025;
i__48386_48997 = G__49026;
continue;
} else {
var G__49028 = cljs.core.next(seq__48382_49016__$1);
var G__49029 = null;
var G__49030 = (0);
var G__49031 = (0);
seq__48382_48994 = G__49028;
chunk__48384_48995 = G__49029;
count__48385_48996 = G__49030;
i__48386_48997 = G__49031;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48993);
}
}


var G__49032 = seq__48348_48985;
var G__49033 = chunk__48350_48986;
var G__49034 = count__48351_48987;
var G__49035 = (i__48352_48988 + (1));
seq__48348_48985 = G__49032;
chunk__48350_48986 = G__49033;
count__48351_48987 = G__49034;
i__48352_48988 = G__49035;
continue;
} else {
var G__49036 = seq__48348_48985;
var G__49037 = chunk__48350_48986;
var G__49038 = count__48351_48987;
var G__49039 = (i__48352_48988 + (1));
seq__48348_48985 = G__49036;
chunk__48350_48986 = G__49037;
count__48351_48987 = G__49038;
i__48352_48988 = G__49039;
continue;
}
} else {
var temp__5735__auto___49042 = cljs.core.seq(seq__48348_48985);
if(temp__5735__auto___49042){
var seq__48348_49044__$1 = temp__5735__auto___49042;
if(cljs.core.chunked_seq_QMARK_(seq__48348_49044__$1)){
var c__4609__auto___49045 = cljs.core.chunk_first(seq__48348_49044__$1);
var G__49046 = cljs.core.chunk_rest(seq__48348_49044__$1);
var G__49047 = c__4609__auto___49045;
var G__49048 = cljs.core.count(c__4609__auto___49045);
var G__49049 = (0);
seq__48348_48985 = G__49046;
chunk__48350_48986 = G__49047;
count__48351_48987 = G__49048;
i__48352_48988 = G__49049;
continue;
} else {
var child_struct_49050 = cljs.core.first(seq__48348_49044__$1);
if((!((child_struct_49050 == null)))){
if(typeof child_struct_49050 === 'string'){
var text_49051 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49051),child_struct_49050].join(''));
} else {
var children_49053 = shadow.dom.svg_node(child_struct_49050);
if(cljs.core.seq_QMARK_(children_49053)){
var seq__48396_49054 = cljs.core.seq(children_49053);
var chunk__48398_49055 = null;
var count__48399_49056 = (0);
var i__48400_49057 = (0);
while(true){
if((i__48400_49057 < count__48399_49056)){
var child_49058 = chunk__48398_49055.cljs$core$IIndexed$_nth$arity$2(null,i__48400_49057);
if(cljs.core.truth_(child_49058)){
node.appendChild(child_49058);


var G__49059 = seq__48396_49054;
var G__49060 = chunk__48398_49055;
var G__49061 = count__48399_49056;
var G__49062 = (i__48400_49057 + (1));
seq__48396_49054 = G__49059;
chunk__48398_49055 = G__49060;
count__48399_49056 = G__49061;
i__48400_49057 = G__49062;
continue;
} else {
var G__49065 = seq__48396_49054;
var G__49066 = chunk__48398_49055;
var G__49067 = count__48399_49056;
var G__49068 = (i__48400_49057 + (1));
seq__48396_49054 = G__49065;
chunk__48398_49055 = G__49066;
count__48399_49056 = G__49067;
i__48400_49057 = G__49068;
continue;
}
} else {
var temp__5735__auto___49070__$1 = cljs.core.seq(seq__48396_49054);
if(temp__5735__auto___49070__$1){
var seq__48396_49071__$1 = temp__5735__auto___49070__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48396_49071__$1)){
var c__4609__auto___49072 = cljs.core.chunk_first(seq__48396_49071__$1);
var G__49073 = cljs.core.chunk_rest(seq__48396_49071__$1);
var G__49074 = c__4609__auto___49072;
var G__49075 = cljs.core.count(c__4609__auto___49072);
var G__49076 = (0);
seq__48396_49054 = G__49073;
chunk__48398_49055 = G__49074;
count__48399_49056 = G__49075;
i__48400_49057 = G__49076;
continue;
} else {
var child_49078 = cljs.core.first(seq__48396_49071__$1);
if(cljs.core.truth_(child_49078)){
node.appendChild(child_49078);


var G__49080 = cljs.core.next(seq__48396_49071__$1);
var G__49081 = null;
var G__49082 = (0);
var G__49083 = (0);
seq__48396_49054 = G__49080;
chunk__48398_49055 = G__49081;
count__48399_49056 = G__49082;
i__48400_49057 = G__49083;
continue;
} else {
var G__49084 = cljs.core.next(seq__48396_49071__$1);
var G__49085 = null;
var G__49086 = (0);
var G__49087 = (0);
seq__48396_49054 = G__49084;
chunk__48398_49055 = G__49085;
count__48399_49056 = G__49086;
i__48400_49057 = G__49087;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49053);
}
}


var G__49088 = cljs.core.next(seq__48348_49044__$1);
var G__49089 = null;
var G__49090 = (0);
var G__49091 = (0);
seq__48348_48985 = G__49088;
chunk__48350_48986 = G__49089;
count__48351_48987 = G__49090;
i__48352_48988 = G__49091;
continue;
} else {
var G__49094 = cljs.core.next(seq__48348_49044__$1);
var G__49095 = null;
var G__49096 = (0);
var G__49097 = (0);
seq__48348_48985 = G__49094;
chunk__48350_48986 = G__49095;
count__48351_48987 = G__49096;
i__48352_48988 = G__49097;
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

var G__48403_49099 = shadow.dom._to_svg;
var G__48404_49100 = "string";
var G__48405_49101 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__48403_49099,G__48404_49100,G__48405_49101);

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

var G__48407_49103 = shadow.dom._to_svg;
var G__48408_49104 = "null";
var G__48409_49105 = (function (_){
return null;
});
goog.object.set(G__48407_49103,G__48408_49104,G__48409_49105);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___49111 = arguments.length;
var i__4790__auto___49112 = (0);
while(true){
if((i__4790__auto___49112 < len__4789__auto___49111)){
args__4795__auto__.push((arguments[i__4790__auto___49112]));

var G__49116 = (i__4790__auto___49112 + (1));
i__4790__auto___49112 = G__49116;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48410){
var G__48411 = cljs.core.first(seq48410);
var seq48410__$1 = cljs.core.next(seq48410);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48411,seq48410__$1);
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
var G__48415 = arguments.length;
switch (G__48415) {
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
var G__48419_49125 = shadow.dom.dom_node(el);
var G__48420_49126 = cljs.core.name(event);
var G__48421_49127 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48419_49125,G__48420_49126,G__48421_49127) : shadow.dom.dom_listen.call(null,G__48419_49125,G__48420_49126,G__48421_49127));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__46126__auto___49130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46127__auto__ = (function (){var switch__46058__auto__ = (function (state_48428){
var state_val_48429 = (state_48428[(1)]);
if((state_val_48429 === (1))){
var state_48428__$1 = state_48428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48428__$1,(2),once_or_cleanup);
} else {
if((state_val_48429 === (2))){
var inst_48424 = (state_48428[(2)]);
var inst_48425 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48428__$1 = (function (){var statearr_48434 = state_48428;
(statearr_48434[(7)] = inst_48424);

return statearr_48434;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48428__$1,inst_48425);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46059__auto__ = null;
var shadow$dom$state_machine__46059__auto____0 = (function (){
var statearr_48436 = [null,null,null,null,null,null,null,null];
(statearr_48436[(0)] = shadow$dom$state_machine__46059__auto__);

(statearr_48436[(1)] = (1));

return statearr_48436;
});
var shadow$dom$state_machine__46059__auto____1 = (function (state_48428){
while(true){
var ret_value__46060__auto__ = (function (){try{while(true){
var result__46061__auto__ = switch__46058__auto__(state_48428);
if(cljs.core.keyword_identical_QMARK_(result__46061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46061__auto__;
}
break;
}
}catch (e48438){if((e48438 instanceof Object)){
var ex__46062__auto__ = e48438;
var statearr_48440_49139 = state_48428;
(statearr_48440_49139[(5)] = ex__46062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48438;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49140 = state_48428;
state_48428 = G__49140;
continue;
} else {
return ret_value__46060__auto__;
}
break;
}
});
shadow$dom$state_machine__46059__auto__ = function(state_48428){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46059__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46059__auto____1.call(this,state_48428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46059__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46059__auto____0;
shadow$dom$state_machine__46059__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46059__auto____1;
return shadow$dom$state_machine__46059__auto__;
})()
})();
var state__46128__auto__ = (function (){var statearr_48442 = (f__46127__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46127__auto__.cljs$core$IFn$_invoke$arity$0() : f__46127__auto__.call(null));
(statearr_48442[(6)] = c__46126__auto___49130);

return statearr_48442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46128__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
