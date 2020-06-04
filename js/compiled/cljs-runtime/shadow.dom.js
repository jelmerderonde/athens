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
return cljs.core.cons((coll[idx]),(function (){var G__57632 = coll;
var G__57633 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__57632,G__57633) : shadow.dom.lazy_native_coll_seq.call(null,G__57632,G__57633));
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
var G__57678 = arguments.length;
switch (G__57678) {
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
var G__57689 = arguments.length;
switch (G__57689) {
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
var G__57700 = arguments.length;
switch (G__57700) {
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
var G__57708 = arguments.length;
switch (G__57708) {
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
var G__57720 = arguments.length;
switch (G__57720) {
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
var G__57722 = document;
var G__57723 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57722,G__57723);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__57726 = shadow.dom.dom_node(parent);
var G__57727 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57726,G__57727);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__57731 = shadow.dom.dom_node(el);
var G__57732 = cls;
return goog.dom.classlist.add(G__57731,G__57732);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__57741 = shadow.dom.dom_node(el);
var G__57742 = cls;
return goog.dom.classlist.remove(G__57741,G__57742);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__57747 = arguments.length;
switch (G__57747) {
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
var G__57749 = shadow.dom.dom_node(el);
var G__57750 = cls;
return goog.dom.classlist.toggle(G__57749,G__57750);
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
}catch (e57755){if((e57755 instanceof Object)){
var e = e57755;
return console.log("didnt support attachEvent",el,e);
} else {
throw e57755;

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
var seq__57760 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__57761 = null;
var count__57762 = (0);
var i__57763 = (0);
while(true){
if((i__57763 < count__57762)){
var el = chunk__57761.cljs$core$IIndexed$_nth$arity$2(null,i__57763);
var handler_58561__$1 = ((function (seq__57760,chunk__57761,count__57762,i__57763,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57760,chunk__57761,count__57762,i__57763,el))
;
var G__57780_58563 = el;
var G__57781_58564 = cljs.core.name(ev);
var G__57782_58565 = handler_58561__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57780_58563,G__57781_58564,G__57782_58565) : shadow.dom.dom_listen.call(null,G__57780_58563,G__57781_58564,G__57782_58565));


var G__58567 = seq__57760;
var G__58568 = chunk__57761;
var G__58569 = count__57762;
var G__58570 = (i__57763 + (1));
seq__57760 = G__58567;
chunk__57761 = G__58568;
count__57762 = G__58569;
i__57763 = G__58570;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57760);
if(temp__5735__auto__){
var seq__57760__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57760__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57760__$1);
var G__58572 = cljs.core.chunk_rest(seq__57760__$1);
var G__58573 = c__4609__auto__;
var G__58574 = cljs.core.count(c__4609__auto__);
var G__58575 = (0);
seq__57760 = G__58572;
chunk__57761 = G__58573;
count__57762 = G__58574;
i__57763 = G__58575;
continue;
} else {
var el = cljs.core.first(seq__57760__$1);
var handler_58577__$1 = ((function (seq__57760,chunk__57761,count__57762,i__57763,el,seq__57760__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57760,chunk__57761,count__57762,i__57763,el,seq__57760__$1,temp__5735__auto__))
;
var G__57786_58580 = el;
var G__57787_58581 = cljs.core.name(ev);
var G__57788_58582 = handler_58577__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57786_58580,G__57787_58581,G__57788_58582) : shadow.dom.dom_listen.call(null,G__57786_58580,G__57787_58581,G__57788_58582));


var G__58583 = cljs.core.next(seq__57760__$1);
var G__58584 = null;
var G__58585 = (0);
var G__58586 = (0);
seq__57760 = G__58583;
chunk__57761 = G__58584;
count__57762 = G__58585;
i__57763 = G__58586;
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
var G__57794 = arguments.length;
switch (G__57794) {
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
var G__57806 = shadow.dom.dom_node(el);
var G__57807 = cljs.core.name(ev);
var G__57808 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57806,G__57807,G__57808) : shadow.dom.dom_listen.call(null,G__57806,G__57807,G__57808));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__57815 = shadow.dom.dom_node(el);
var G__57816 = cljs.core.name(ev);
var G__57817 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__57815,G__57816,G__57817) : shadow.dom.dom_listen_remove.call(null,G__57815,G__57816,G__57817));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__57822 = cljs.core.seq(events);
var chunk__57823 = null;
var count__57824 = (0);
var i__57825 = (0);
while(true){
if((i__57825 < count__57824)){
var vec__57838 = chunk__57823.cljs$core$IIndexed$_nth$arity$2(null,i__57825);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57838,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57838,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58596 = seq__57822;
var G__58597 = chunk__57823;
var G__58598 = count__57824;
var G__58599 = (i__57825 + (1));
seq__57822 = G__58596;
chunk__57823 = G__58597;
count__57824 = G__58598;
i__57825 = G__58599;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57822);
if(temp__5735__auto__){
var seq__57822__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57822__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57822__$1);
var G__58600 = cljs.core.chunk_rest(seq__57822__$1);
var G__58601 = c__4609__auto__;
var G__58602 = cljs.core.count(c__4609__auto__);
var G__58603 = (0);
seq__57822 = G__58600;
chunk__57823 = G__58601;
count__57824 = G__58602;
i__57825 = G__58603;
continue;
} else {
var vec__57842 = cljs.core.first(seq__57822__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57842,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57842,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58605 = cljs.core.next(seq__57822__$1);
var G__58606 = null;
var G__58607 = (0);
var G__58608 = (0);
seq__57822 = G__58605;
chunk__57823 = G__58606;
count__57824 = G__58607;
i__57825 = G__58608;
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
var seq__57847 = cljs.core.seq(styles);
var chunk__57848 = null;
var count__57849 = (0);
var i__57850 = (0);
while(true){
if((i__57850 < count__57849)){
var vec__57864 = chunk__57848.cljs$core$IIndexed$_nth$arity$2(null,i__57850);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57864,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57864,(1),null);
var G__57868_58610 = dom;
var G__57869_58611 = cljs.core.name(k);
var G__57870_58612 = (((v == null))?"":v);
goog.style.setStyle(G__57868_58610,G__57869_58611,G__57870_58612);


var G__58614 = seq__57847;
var G__58615 = chunk__57848;
var G__58616 = count__57849;
var G__58617 = (i__57850 + (1));
seq__57847 = G__58614;
chunk__57848 = G__58615;
count__57849 = G__58616;
i__57850 = G__58617;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57847);
if(temp__5735__auto__){
var seq__57847__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57847__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57847__$1);
var G__58619 = cljs.core.chunk_rest(seq__57847__$1);
var G__58620 = c__4609__auto__;
var G__58621 = cljs.core.count(c__4609__auto__);
var G__58622 = (0);
seq__57847 = G__58619;
chunk__57848 = G__58620;
count__57849 = G__58621;
i__57850 = G__58622;
continue;
} else {
var vec__57874 = cljs.core.first(seq__57847__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57874,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57874,(1),null);
var G__57877_58625 = dom;
var G__57878_58626 = cljs.core.name(k);
var G__57879_58627 = (((v == null))?"":v);
goog.style.setStyle(G__57877_58625,G__57878_58626,G__57879_58627);


var G__58628 = cljs.core.next(seq__57847__$1);
var G__58629 = null;
var G__58630 = (0);
var G__58631 = (0);
seq__57847 = G__58628;
chunk__57848 = G__58629;
count__57849 = G__58630;
i__57850 = G__58631;
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
var G__57885_58635 = key;
var G__57885_58636__$1 = (((G__57885_58635 instanceof cljs.core.Keyword))?G__57885_58635.fqn:null);
switch (G__57885_58636__$1) {
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
var ks_58642 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_58642,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_58642,"aria-");
}
})())){
el.setAttribute(ks_58642,value);
} else {
(el[ks_58642] = value);
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
var G__57893 = shadow.dom.dom_node(el);
var G__57894 = cls;
return goog.dom.classlist.contains(G__57893,G__57894);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__57901){
var map__57903 = p__57901;
var map__57903__$1 = (((((!((map__57903 == null))))?(((((map__57903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57903):map__57903);
var props = map__57903__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57903__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__57906 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57906,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57906,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57906,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__57910 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__57910,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__57910;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__57915 = arguments.length;
switch (G__57915) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__57918){
var vec__57919 = p__57918;
var seq__57920 = cljs.core.seq(vec__57919);
var first__57921 = cljs.core.first(seq__57920);
var seq__57920__$1 = cljs.core.next(seq__57920);
var nn = first__57921;
var first__57921__$1 = cljs.core.first(seq__57920__$1);
var seq__57920__$2 = cljs.core.next(seq__57920__$1);
var np = first__57921__$1;
var nc = seq__57920__$2;
var node = vec__57919;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57924 = nn;
var G__57925 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57924,G__57925) : create_fn.call(null,G__57924,G__57925));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57926 = nn;
var G__57927 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57926,G__57927) : create_fn.call(null,G__57926,G__57927));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__57929 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57929,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57929,(1),null);
var seq__57932_58670 = cljs.core.seq(node_children);
var chunk__57933_58671 = null;
var count__57934_58672 = (0);
var i__57935_58673 = (0);
while(true){
if((i__57935_58673 < count__57934_58672)){
var child_struct_58676 = chunk__57933_58671.cljs$core$IIndexed$_nth$arity$2(null,i__57935_58673);
var children_58677 = shadow.dom.dom_node(child_struct_58676);
if(cljs.core.seq_QMARK_(children_58677)){
var seq__57964_58678 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58677));
var chunk__57966_58679 = null;
var count__57967_58680 = (0);
var i__57968_58681 = (0);
while(true){
if((i__57968_58681 < count__57967_58680)){
var child_58682 = chunk__57966_58679.cljs$core$IIndexed$_nth$arity$2(null,i__57968_58681);
if(cljs.core.truth_(child_58682)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58682);


var G__58683 = seq__57964_58678;
var G__58684 = chunk__57966_58679;
var G__58685 = count__57967_58680;
var G__58686 = (i__57968_58681 + (1));
seq__57964_58678 = G__58683;
chunk__57966_58679 = G__58684;
count__57967_58680 = G__58685;
i__57968_58681 = G__58686;
continue;
} else {
var G__58689 = seq__57964_58678;
var G__58690 = chunk__57966_58679;
var G__58691 = count__57967_58680;
var G__58692 = (i__57968_58681 + (1));
seq__57964_58678 = G__58689;
chunk__57966_58679 = G__58690;
count__57967_58680 = G__58691;
i__57968_58681 = G__58692;
continue;
}
} else {
var temp__5735__auto___58694 = cljs.core.seq(seq__57964_58678);
if(temp__5735__auto___58694){
var seq__57964_58695__$1 = temp__5735__auto___58694;
if(cljs.core.chunked_seq_QMARK_(seq__57964_58695__$1)){
var c__4609__auto___58697 = cljs.core.chunk_first(seq__57964_58695__$1);
var G__58698 = cljs.core.chunk_rest(seq__57964_58695__$1);
var G__58699 = c__4609__auto___58697;
var G__58700 = cljs.core.count(c__4609__auto___58697);
var G__58701 = (0);
seq__57964_58678 = G__58698;
chunk__57966_58679 = G__58699;
count__57967_58680 = G__58700;
i__57968_58681 = G__58701;
continue;
} else {
var child_58703 = cljs.core.first(seq__57964_58695__$1);
if(cljs.core.truth_(child_58703)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58703);


var G__58705 = cljs.core.next(seq__57964_58695__$1);
var G__58706 = null;
var G__58707 = (0);
var G__58708 = (0);
seq__57964_58678 = G__58705;
chunk__57966_58679 = G__58706;
count__57967_58680 = G__58707;
i__57968_58681 = G__58708;
continue;
} else {
var G__58710 = cljs.core.next(seq__57964_58695__$1);
var G__58711 = null;
var G__58712 = (0);
var G__58713 = (0);
seq__57964_58678 = G__58710;
chunk__57966_58679 = G__58711;
count__57967_58680 = G__58712;
i__57968_58681 = G__58713;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58677);
}


var G__58718 = seq__57932_58670;
var G__58719 = chunk__57933_58671;
var G__58720 = count__57934_58672;
var G__58721 = (i__57935_58673 + (1));
seq__57932_58670 = G__58718;
chunk__57933_58671 = G__58719;
count__57934_58672 = G__58720;
i__57935_58673 = G__58721;
continue;
} else {
var temp__5735__auto___58722 = cljs.core.seq(seq__57932_58670);
if(temp__5735__auto___58722){
var seq__57932_58723__$1 = temp__5735__auto___58722;
if(cljs.core.chunked_seq_QMARK_(seq__57932_58723__$1)){
var c__4609__auto___58725 = cljs.core.chunk_first(seq__57932_58723__$1);
var G__58726 = cljs.core.chunk_rest(seq__57932_58723__$1);
var G__58727 = c__4609__auto___58725;
var G__58728 = cljs.core.count(c__4609__auto___58725);
var G__58729 = (0);
seq__57932_58670 = G__58726;
chunk__57933_58671 = G__58727;
count__57934_58672 = G__58728;
i__57935_58673 = G__58729;
continue;
} else {
var child_struct_58730 = cljs.core.first(seq__57932_58723__$1);
var children_58732 = shadow.dom.dom_node(child_struct_58730);
if(cljs.core.seq_QMARK_(children_58732)){
var seq__57977_58733 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58732));
var chunk__57979_58734 = null;
var count__57980_58735 = (0);
var i__57981_58736 = (0);
while(true){
if((i__57981_58736 < count__57980_58735)){
var child_58737 = chunk__57979_58734.cljs$core$IIndexed$_nth$arity$2(null,i__57981_58736);
if(cljs.core.truth_(child_58737)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58737);


var G__58738 = seq__57977_58733;
var G__58739 = chunk__57979_58734;
var G__58740 = count__57980_58735;
var G__58741 = (i__57981_58736 + (1));
seq__57977_58733 = G__58738;
chunk__57979_58734 = G__58739;
count__57980_58735 = G__58740;
i__57981_58736 = G__58741;
continue;
} else {
var G__58746 = seq__57977_58733;
var G__58747 = chunk__57979_58734;
var G__58748 = count__57980_58735;
var G__58749 = (i__57981_58736 + (1));
seq__57977_58733 = G__58746;
chunk__57979_58734 = G__58747;
count__57980_58735 = G__58748;
i__57981_58736 = G__58749;
continue;
}
} else {
var temp__5735__auto___58750__$1 = cljs.core.seq(seq__57977_58733);
if(temp__5735__auto___58750__$1){
var seq__57977_58752__$1 = temp__5735__auto___58750__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57977_58752__$1)){
var c__4609__auto___58753 = cljs.core.chunk_first(seq__57977_58752__$1);
var G__58754 = cljs.core.chunk_rest(seq__57977_58752__$1);
var G__58755 = c__4609__auto___58753;
var G__58756 = cljs.core.count(c__4609__auto___58753);
var G__58757 = (0);
seq__57977_58733 = G__58754;
chunk__57979_58734 = G__58755;
count__57980_58735 = G__58756;
i__57981_58736 = G__58757;
continue;
} else {
var child_58758 = cljs.core.first(seq__57977_58752__$1);
if(cljs.core.truth_(child_58758)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58758);


var G__58760 = cljs.core.next(seq__57977_58752__$1);
var G__58761 = null;
var G__58762 = (0);
var G__58763 = (0);
seq__57977_58733 = G__58760;
chunk__57979_58734 = G__58761;
count__57980_58735 = G__58762;
i__57981_58736 = G__58763;
continue;
} else {
var G__58764 = cljs.core.next(seq__57977_58752__$1);
var G__58765 = null;
var G__58766 = (0);
var G__58767 = (0);
seq__57977_58733 = G__58764;
chunk__57979_58734 = G__58765;
count__57980_58735 = G__58766;
i__57981_58736 = G__58767;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58732);
}


var G__58771 = cljs.core.next(seq__57932_58723__$1);
var G__58772 = null;
var G__58773 = (0);
var G__58774 = (0);
seq__57932_58670 = G__58771;
chunk__57933_58671 = G__58772;
count__57934_58672 = G__58773;
i__57935_58673 = G__58774;
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
var G__58009 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__58009);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__58015 = cljs.core.seq(node);
var chunk__58016 = null;
var count__58017 = (0);
var i__58018 = (0);
while(true){
if((i__58018 < count__58017)){
var n = chunk__58016.cljs$core$IIndexed$_nth$arity$2(null,i__58018);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58782 = seq__58015;
var G__58783 = chunk__58016;
var G__58784 = count__58017;
var G__58785 = (i__58018 + (1));
seq__58015 = G__58782;
chunk__58016 = G__58783;
count__58017 = G__58784;
i__58018 = G__58785;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58015);
if(temp__5735__auto__){
var seq__58015__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58015__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58015__$1);
var G__58790 = cljs.core.chunk_rest(seq__58015__$1);
var G__58791 = c__4609__auto__;
var G__58792 = cljs.core.count(c__4609__auto__);
var G__58793 = (0);
seq__58015 = G__58790;
chunk__58016 = G__58791;
count__58017 = G__58792;
i__58018 = G__58793;
continue;
} else {
var n = cljs.core.first(seq__58015__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58795 = cljs.core.next(seq__58015__$1);
var G__58796 = null;
var G__58797 = (0);
var G__58798 = (0);
seq__58015 = G__58795;
chunk__58016 = G__58796;
count__58017 = G__58797;
i__58018 = G__58798;
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
var G__58032 = shadow.dom.dom_node(new$);
var G__58033 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__58032,G__58033);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__58036 = arguments.length;
switch (G__58036) {
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
var G__58042 = arguments.length;
switch (G__58042) {
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
var G__58049 = arguments.length;
switch (G__58049) {
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
var len__4789__auto___58822 = arguments.length;
var i__4790__auto___58823 = (0);
while(true){
if((i__4790__auto___58823 < len__4789__auto___58822)){
args__4795__auto__.push((arguments[i__4790__auto___58823]));

var G__58826 = (i__4790__auto___58823 + (1));
i__4790__auto___58823 = G__58826;
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
var seq__58086_58833 = cljs.core.seq(nodes);
var chunk__58087_58834 = null;
var count__58088_58835 = (0);
var i__58089_58836 = (0);
while(true){
if((i__58089_58836 < count__58088_58835)){
var node_58837 = chunk__58087_58834.cljs$core$IIndexed$_nth$arity$2(null,i__58089_58836);
fragment.appendChild(shadow.dom._to_dom(node_58837));


var G__58839 = seq__58086_58833;
var G__58840 = chunk__58087_58834;
var G__58841 = count__58088_58835;
var G__58842 = (i__58089_58836 + (1));
seq__58086_58833 = G__58839;
chunk__58087_58834 = G__58840;
count__58088_58835 = G__58841;
i__58089_58836 = G__58842;
continue;
} else {
var temp__5735__auto___58844 = cljs.core.seq(seq__58086_58833);
if(temp__5735__auto___58844){
var seq__58086_58846__$1 = temp__5735__auto___58844;
if(cljs.core.chunked_seq_QMARK_(seq__58086_58846__$1)){
var c__4609__auto___58848 = cljs.core.chunk_first(seq__58086_58846__$1);
var G__58849 = cljs.core.chunk_rest(seq__58086_58846__$1);
var G__58850 = c__4609__auto___58848;
var G__58851 = cljs.core.count(c__4609__auto___58848);
var G__58852 = (0);
seq__58086_58833 = G__58849;
chunk__58087_58834 = G__58850;
count__58088_58835 = G__58851;
i__58089_58836 = G__58852;
continue;
} else {
var node_58854 = cljs.core.first(seq__58086_58846__$1);
fragment.appendChild(shadow.dom._to_dom(node_58854));


var G__58855 = cljs.core.next(seq__58086_58846__$1);
var G__58856 = null;
var G__58857 = (0);
var G__58858 = (0);
seq__58086_58833 = G__58855;
chunk__58087_58834 = G__58856;
count__58088_58835 = G__58857;
i__58089_58836 = G__58858;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq58081){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58081));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__58103_58863 = cljs.core.seq(scripts);
var chunk__58104_58864 = null;
var count__58105_58865 = (0);
var i__58106_58866 = (0);
while(true){
if((i__58106_58866 < count__58105_58865)){
var vec__58123_58869 = chunk__58104_58864.cljs$core$IIndexed$_nth$arity$2(null,i__58106_58866);
var script_tag_58870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58123_58869,(0),null);
var script_body_58871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58123_58869,(1),null);
eval(script_body_58871);


var G__58877 = seq__58103_58863;
var G__58878 = chunk__58104_58864;
var G__58879 = count__58105_58865;
var G__58880 = (i__58106_58866 + (1));
seq__58103_58863 = G__58877;
chunk__58104_58864 = G__58878;
count__58105_58865 = G__58879;
i__58106_58866 = G__58880;
continue;
} else {
var temp__5735__auto___58882 = cljs.core.seq(seq__58103_58863);
if(temp__5735__auto___58882){
var seq__58103_58883__$1 = temp__5735__auto___58882;
if(cljs.core.chunked_seq_QMARK_(seq__58103_58883__$1)){
var c__4609__auto___58884 = cljs.core.chunk_first(seq__58103_58883__$1);
var G__58885 = cljs.core.chunk_rest(seq__58103_58883__$1);
var G__58886 = c__4609__auto___58884;
var G__58887 = cljs.core.count(c__4609__auto___58884);
var G__58888 = (0);
seq__58103_58863 = G__58885;
chunk__58104_58864 = G__58886;
count__58105_58865 = G__58887;
i__58106_58866 = G__58888;
continue;
} else {
var vec__58127_58890 = cljs.core.first(seq__58103_58883__$1);
var script_tag_58892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58127_58890,(0),null);
var script_body_58893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58127_58890,(1),null);
eval(script_body_58893);


var G__58894 = cljs.core.next(seq__58103_58883__$1);
var G__58895 = null;
var G__58896 = (0);
var G__58897 = (0);
seq__58103_58863 = G__58894;
chunk__58104_58864 = G__58895;
count__58105_58865 = G__58896;
i__58106_58866 = G__58897;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58132){
var vec__58134 = p__58132;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58134,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58134,(1),null);
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
var G__58159 = shadow.dom.dom_node(el);
var G__58160 = cls;
return goog.dom.getAncestorByClass(G__58159,G__58160);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58175 = arguments.length;
switch (G__58175) {
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
var G__58176 = shadow.dom.dom_node(el);
var G__58177 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__58176,G__58177);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__58183 = shadow.dom.dom_node(el);
var G__58184 = cljs.core.name(tag);
var G__58185 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__58183,G__58184,G__58185);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__58186 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__58186);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__58187 = shadow.dom.dom_node(dom);
var G__58188 = value;
return goog.dom.forms.setValue(G__58187,G__58188);
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
var seq__58214 = cljs.core.seq(style_keys);
var chunk__58215 = null;
var count__58216 = (0);
var i__58217 = (0);
while(true){
if((i__58217 < count__58216)){
var it = chunk__58215.cljs$core$IIndexed$_nth$arity$2(null,i__58217);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58917 = seq__58214;
var G__58918 = chunk__58215;
var G__58919 = count__58216;
var G__58920 = (i__58217 + (1));
seq__58214 = G__58917;
chunk__58215 = G__58918;
count__58216 = G__58919;
i__58217 = G__58920;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58214);
if(temp__5735__auto__){
var seq__58214__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58214__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58214__$1);
var G__58928 = cljs.core.chunk_rest(seq__58214__$1);
var G__58929 = c__4609__auto__;
var G__58930 = cljs.core.count(c__4609__auto__);
var G__58931 = (0);
seq__58214 = G__58928;
chunk__58215 = G__58929;
count__58216 = G__58930;
i__58217 = G__58931;
continue;
} else {
var it = cljs.core.first(seq__58214__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58933 = cljs.core.next(seq__58214__$1);
var G__58934 = null;
var G__58935 = (0);
var G__58936 = (0);
seq__58214 = G__58933;
chunk__58215 = G__58934;
count__58216 = G__58935;
i__58217 = G__58936;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58237,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58257 = k58237;
var G__58257__$1 = (((G__58257 instanceof cljs.core.Keyword))?G__58257.fqn:null);
switch (G__58257__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58237,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58264){
var vec__58265 = p__58264;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58265,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58265,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58236){
var self__ = this;
var G__58236__$1 = this;
return (new cljs.core.RecordIter((0),G__58236__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__58281 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58281(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58238,other58239){
var self__ = this;
var this58238__$1 = this;
return (((!((other58239 == null)))) && ((this58238__$1.constructor === other58239.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58238__$1.x,other58239.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58238__$1.y,other58239.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58238__$1.__extmap,other58239.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58236){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58287 = cljs.core.keyword_identical_QMARK_;
var expr__58288 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58290 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__58291 = expr__58288;
return (pred__58287.cljs$core$IFn$_invoke$arity$2 ? pred__58287.cljs$core$IFn$_invoke$arity$2(G__58290,G__58291) : pred__58287.call(null,G__58290,G__58291));
})())){
return (new shadow.dom.Coordinate(G__58236,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58294 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__58295 = expr__58288;
return (pred__58287.cljs$core$IFn$_invoke$arity$2 ? pred__58287.cljs$core$IFn$_invoke$arity$2(G__58294,G__58295) : pred__58287.call(null,G__58294,G__58295));
})())){
return (new shadow.dom.Coordinate(self__.x,G__58236,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58236),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58236){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58236,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58252){
var extmap__4478__auto__ = (function (){var G__58306 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58252,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58252)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58306);
} else {
return G__58306;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58252),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58252),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__58309 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__58309);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__58313 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__58313);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__58315 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__58315);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58318,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58325 = k58318;
var G__58325__$1 = (((G__58325 instanceof cljs.core.Keyword))?G__58325.fqn:null);
switch (G__58325__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58318,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58328){
var vec__58330 = p__58328;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58330,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58330,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58317){
var self__ = this;
var G__58317__$1 = this;
return (new cljs.core.RecordIter((0),G__58317__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__58347 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58347(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58319,other58320){
var self__ = this;
var this58319__$1 = this;
return (((!((other58320 == null)))) && ((this58319__$1.constructor === other58320.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58319__$1.w,other58320.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58319__$1.h,other58320.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58319__$1.__extmap,other58320.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58317){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58352 = cljs.core.keyword_identical_QMARK_;
var expr__58353 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58355 = new cljs.core.Keyword(null,"w","w",354169001);
var G__58356 = expr__58353;
return (pred__58352.cljs$core$IFn$_invoke$arity$2 ? pred__58352.cljs$core$IFn$_invoke$arity$2(G__58355,G__58356) : pred__58352.call(null,G__58355,G__58356));
})())){
return (new shadow.dom.Size(G__58317,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58362 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__58363 = expr__58353;
return (pred__58352.cljs$core$IFn$_invoke$arity$2 ? pred__58352.cljs$core$IFn$_invoke$arity$2(G__58362,G__58363) : pred__58352.call(null,G__58362,G__58363));
})())){
return (new shadow.dom.Size(self__.w,G__58317,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58317),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58317){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58317,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58322){
var extmap__4478__auto__ = (function (){var G__58369 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58322,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58322)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58369);
} else {
return G__58369;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58322),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58322),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__58370 = shadow.dom.dom_node(el);
return goog.style.getSize(G__58370);
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
var G__59004 = (i + (1));
var G__59005 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__59004;
ret = G__59005;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58377){
var vec__58378 = p__58377;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58378,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58378,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58382 = arguments.length;
switch (G__58382) {
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
var G__58383_59010 = new_node;
var G__58384_59011 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__58383_59010,G__58384_59011);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58387_59012 = new_node;
var G__58388_59013 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__58387_59012,G__58388_59013);

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
var G__59019 = ps;
var G__59020 = (i + (1));
el__$1 = G__59019;
i = G__59020;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__58399 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__58399);
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
var G__58404 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__58404);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__58406 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__58406);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58409 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58409,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58409,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58409,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58414_59022 = cljs.core.seq(props);
var chunk__58415_59023 = null;
var count__58416_59024 = (0);
var i__58417_59025 = (0);
while(true){
if((i__58417_59025 < count__58416_59024)){
var vec__58427_59026 = chunk__58415_59023.cljs$core$IIndexed$_nth$arity$2(null,i__58417_59025);
var k_59027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58427_59026,(0),null);
var v_59028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58427_59026,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_59027);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59027),v_59028);


var G__59033 = seq__58414_59022;
var G__59034 = chunk__58415_59023;
var G__59035 = count__58416_59024;
var G__59036 = (i__58417_59025 + (1));
seq__58414_59022 = G__59033;
chunk__58415_59023 = G__59034;
count__58416_59024 = G__59035;
i__58417_59025 = G__59036;
continue;
} else {
var temp__5735__auto___59037 = cljs.core.seq(seq__58414_59022);
if(temp__5735__auto___59037){
var seq__58414_59038__$1 = temp__5735__auto___59037;
if(cljs.core.chunked_seq_QMARK_(seq__58414_59038__$1)){
var c__4609__auto___59039 = cljs.core.chunk_first(seq__58414_59038__$1);
var G__59040 = cljs.core.chunk_rest(seq__58414_59038__$1);
var G__59041 = c__4609__auto___59039;
var G__59042 = cljs.core.count(c__4609__auto___59039);
var G__59043 = (0);
seq__58414_59022 = G__59040;
chunk__58415_59023 = G__59041;
count__58416_59024 = G__59042;
i__58417_59025 = G__59043;
continue;
} else {
var vec__58431_59044 = cljs.core.first(seq__58414_59038__$1);
var k_59045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58431_59044,(0),null);
var v_59046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58431_59044,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_59045);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59045),v_59046);


var G__59047 = cljs.core.next(seq__58414_59038__$1);
var G__59048 = null;
var G__59049 = (0);
var G__59050 = (0);
seq__58414_59022 = G__59047;
chunk__58415_59023 = G__59048;
count__58416_59024 = G__59049;
i__58417_59025 = G__59050;
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
var vec__58440 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58440,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58440,(1),null);
var seq__58443_59051 = cljs.core.seq(node_children);
var chunk__58445_59052 = null;
var count__58446_59053 = (0);
var i__58447_59054 = (0);
while(true){
if((i__58447_59054 < count__58446_59053)){
var child_struct_59055 = chunk__58445_59052.cljs$core$IIndexed$_nth$arity$2(null,i__58447_59054);
if((!((child_struct_59055 == null)))){
if(typeof child_struct_59055 === 'string'){
var text_59056 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59056),child_struct_59055].join(''));
} else {
var children_59057 = shadow.dom.svg_node(child_struct_59055);
if(cljs.core.seq_QMARK_(children_59057)){
var seq__58473_59058 = cljs.core.seq(children_59057);
var chunk__58475_59059 = null;
var count__58476_59060 = (0);
var i__58477_59061 = (0);
while(true){
if((i__58477_59061 < count__58476_59060)){
var child_59062 = chunk__58475_59059.cljs$core$IIndexed$_nth$arity$2(null,i__58477_59061);
if(cljs.core.truth_(child_59062)){
node.appendChild(child_59062);


var G__59063 = seq__58473_59058;
var G__59064 = chunk__58475_59059;
var G__59065 = count__58476_59060;
var G__59066 = (i__58477_59061 + (1));
seq__58473_59058 = G__59063;
chunk__58475_59059 = G__59064;
count__58476_59060 = G__59065;
i__58477_59061 = G__59066;
continue;
} else {
var G__59067 = seq__58473_59058;
var G__59068 = chunk__58475_59059;
var G__59069 = count__58476_59060;
var G__59070 = (i__58477_59061 + (1));
seq__58473_59058 = G__59067;
chunk__58475_59059 = G__59068;
count__58476_59060 = G__59069;
i__58477_59061 = G__59070;
continue;
}
} else {
var temp__5735__auto___59071 = cljs.core.seq(seq__58473_59058);
if(temp__5735__auto___59071){
var seq__58473_59073__$1 = temp__5735__auto___59071;
if(cljs.core.chunked_seq_QMARK_(seq__58473_59073__$1)){
var c__4609__auto___59074 = cljs.core.chunk_first(seq__58473_59073__$1);
var G__59075 = cljs.core.chunk_rest(seq__58473_59073__$1);
var G__59076 = c__4609__auto___59074;
var G__59077 = cljs.core.count(c__4609__auto___59074);
var G__59078 = (0);
seq__58473_59058 = G__59075;
chunk__58475_59059 = G__59076;
count__58476_59060 = G__59077;
i__58477_59061 = G__59078;
continue;
} else {
var child_59079 = cljs.core.first(seq__58473_59073__$1);
if(cljs.core.truth_(child_59079)){
node.appendChild(child_59079);


var G__59080 = cljs.core.next(seq__58473_59073__$1);
var G__59081 = null;
var G__59082 = (0);
var G__59083 = (0);
seq__58473_59058 = G__59080;
chunk__58475_59059 = G__59081;
count__58476_59060 = G__59082;
i__58477_59061 = G__59083;
continue;
} else {
var G__59084 = cljs.core.next(seq__58473_59073__$1);
var G__59085 = null;
var G__59086 = (0);
var G__59087 = (0);
seq__58473_59058 = G__59084;
chunk__58475_59059 = G__59085;
count__58476_59060 = G__59086;
i__58477_59061 = G__59087;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59057);
}
}


var G__59088 = seq__58443_59051;
var G__59089 = chunk__58445_59052;
var G__59090 = count__58446_59053;
var G__59091 = (i__58447_59054 + (1));
seq__58443_59051 = G__59088;
chunk__58445_59052 = G__59089;
count__58446_59053 = G__59090;
i__58447_59054 = G__59091;
continue;
} else {
var G__59092 = seq__58443_59051;
var G__59093 = chunk__58445_59052;
var G__59094 = count__58446_59053;
var G__59095 = (i__58447_59054 + (1));
seq__58443_59051 = G__59092;
chunk__58445_59052 = G__59093;
count__58446_59053 = G__59094;
i__58447_59054 = G__59095;
continue;
}
} else {
var temp__5735__auto___59096 = cljs.core.seq(seq__58443_59051);
if(temp__5735__auto___59096){
var seq__58443_59097__$1 = temp__5735__auto___59096;
if(cljs.core.chunked_seq_QMARK_(seq__58443_59097__$1)){
var c__4609__auto___59098 = cljs.core.chunk_first(seq__58443_59097__$1);
var G__59099 = cljs.core.chunk_rest(seq__58443_59097__$1);
var G__59100 = c__4609__auto___59098;
var G__59101 = cljs.core.count(c__4609__auto___59098);
var G__59102 = (0);
seq__58443_59051 = G__59099;
chunk__58445_59052 = G__59100;
count__58446_59053 = G__59101;
i__58447_59054 = G__59102;
continue;
} else {
var child_struct_59103 = cljs.core.first(seq__58443_59097__$1);
if((!((child_struct_59103 == null)))){
if(typeof child_struct_59103 === 'string'){
var text_59104 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59104),child_struct_59103].join(''));
} else {
var children_59105 = shadow.dom.svg_node(child_struct_59103);
if(cljs.core.seq_QMARK_(children_59105)){
var seq__58489_59109 = cljs.core.seq(children_59105);
var chunk__58491_59110 = null;
var count__58492_59111 = (0);
var i__58493_59112 = (0);
while(true){
if((i__58493_59112 < count__58492_59111)){
var child_59115 = chunk__58491_59110.cljs$core$IIndexed$_nth$arity$2(null,i__58493_59112);
if(cljs.core.truth_(child_59115)){
node.appendChild(child_59115);


var G__59118 = seq__58489_59109;
var G__59119 = chunk__58491_59110;
var G__59120 = count__58492_59111;
var G__59121 = (i__58493_59112 + (1));
seq__58489_59109 = G__59118;
chunk__58491_59110 = G__59119;
count__58492_59111 = G__59120;
i__58493_59112 = G__59121;
continue;
} else {
var G__59122 = seq__58489_59109;
var G__59123 = chunk__58491_59110;
var G__59124 = count__58492_59111;
var G__59125 = (i__58493_59112 + (1));
seq__58489_59109 = G__59122;
chunk__58491_59110 = G__59123;
count__58492_59111 = G__59124;
i__58493_59112 = G__59125;
continue;
}
} else {
var temp__5735__auto___59126__$1 = cljs.core.seq(seq__58489_59109);
if(temp__5735__auto___59126__$1){
var seq__58489_59127__$1 = temp__5735__auto___59126__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58489_59127__$1)){
var c__4609__auto___59128 = cljs.core.chunk_first(seq__58489_59127__$1);
var G__59129 = cljs.core.chunk_rest(seq__58489_59127__$1);
var G__59130 = c__4609__auto___59128;
var G__59131 = cljs.core.count(c__4609__auto___59128);
var G__59132 = (0);
seq__58489_59109 = G__59129;
chunk__58491_59110 = G__59130;
count__58492_59111 = G__59131;
i__58493_59112 = G__59132;
continue;
} else {
var child_59133 = cljs.core.first(seq__58489_59127__$1);
if(cljs.core.truth_(child_59133)){
node.appendChild(child_59133);


var G__59134 = cljs.core.next(seq__58489_59127__$1);
var G__59135 = null;
var G__59136 = (0);
var G__59137 = (0);
seq__58489_59109 = G__59134;
chunk__58491_59110 = G__59135;
count__58492_59111 = G__59136;
i__58493_59112 = G__59137;
continue;
} else {
var G__59138 = cljs.core.next(seq__58489_59127__$1);
var G__59139 = null;
var G__59140 = (0);
var G__59141 = (0);
seq__58489_59109 = G__59138;
chunk__58491_59110 = G__59139;
count__58492_59111 = G__59140;
i__58493_59112 = G__59141;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59105);
}
}


var G__59142 = cljs.core.next(seq__58443_59097__$1);
var G__59143 = null;
var G__59144 = (0);
var G__59145 = (0);
seq__58443_59051 = G__59142;
chunk__58445_59052 = G__59143;
count__58446_59053 = G__59144;
i__58447_59054 = G__59145;
continue;
} else {
var G__59146 = cljs.core.next(seq__58443_59097__$1);
var G__59147 = null;
var G__59148 = (0);
var G__59149 = (0);
seq__58443_59051 = G__59146;
chunk__58445_59052 = G__59147;
count__58446_59053 = G__59148;
i__58447_59054 = G__59149;
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

var G__58501_59150 = shadow.dom._to_svg;
var G__58502_59151 = "string";
var G__58503_59152 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__58501_59150,G__58502_59151,G__58503_59152);

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

var G__58508_59153 = shadow.dom._to_svg;
var G__58509_59154 = "null";
var G__58510_59155 = (function (_){
return null;
});
goog.object.set(G__58508_59153,G__58509_59154,G__58510_59155);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59157 = arguments.length;
var i__4790__auto___59158 = (0);
while(true){
if((i__4790__auto___59158 < len__4789__auto___59157)){
args__4795__auto__.push((arguments[i__4790__auto___59158]));

var G__59159 = (i__4790__auto___59158 + (1));
i__4790__auto___59158 = G__59159;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58512){
var G__58513 = cljs.core.first(seq58512);
var seq58512__$1 = cljs.core.next(seq58512);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58513,seq58512__$1);
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
var G__58519 = arguments.length;
switch (G__58519) {
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
var G__58524_59162 = shadow.dom.dom_node(el);
var G__58525_59163 = cljs.core.name(event);
var G__58526_59164 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58524_59162,G__58525_59163,G__58526_59164) : shadow.dom.dom_listen.call(null,G__58524_59162,G__58525_59163,G__58526_59164));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__56096__auto___59165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_58532){
var state_val_58533 = (state_58532[(1)]);
if((state_val_58533 === (1))){
var state_58532__$1 = state_58532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58532__$1,(2),once_or_cleanup);
} else {
if((state_val_58533 === (2))){
var inst_58529 = (state_58532[(2)]);
var inst_58530 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58532__$1 = (function (){var statearr_58537 = state_58532;
(statearr_58537[(7)] = inst_58529);

return statearr_58537;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58532__$1,inst_58530);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__55996__auto__ = null;
var shadow$dom$state_machine__55996__auto____0 = (function (){
var statearr_58540 = [null,null,null,null,null,null,null,null];
(statearr_58540[(0)] = shadow$dom$state_machine__55996__auto__);

(statearr_58540[(1)] = (1));

return statearr_58540;
});
var shadow$dom$state_machine__55996__auto____1 = (function (state_58532){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_58532);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e58542){if((e58542 instanceof Object)){
var ex__55999__auto__ = e58542;
var statearr_58543_59167 = state_58532;
(statearr_58543_59167[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58542;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59168 = state_58532;
state_58532 = G__59168;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
shadow$dom$state_machine__55996__auto__ = function(state_58532){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__55996__auto____0.call(this);
case 1:
return shadow$dom$state_machine__55996__auto____1.call(this,state_58532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__55996__auto____0;
shadow$dom$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__55996__auto____1;
return shadow$dom$state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_58544 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_58544[(6)] = c__56096__auto___59165);

return statearr_58544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
