goog.provide('athens.lib.dom.attributes');
goog.require('cljs.core');
goog.require('clojure.string');
athens.lib.dom.attributes.merge_dom_classes = (function athens$lib$dom$attributes$merge_dom_classes(attrs,dom_classes){
var class_str = ((typeof dom_classes === 'string')?dom_classes:clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",dom_classes));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),(function (s){
if(cljs.core.truth_(s)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," ",class_str].join('');
} else {
return class_str;
}
}));
});
athens.lib.dom.attributes.with_classes = (function athens$lib$dom$attributes$with_classes(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46712 = arguments.length;
var i__4790__auto___46714 = (0);
while(true){
if((i__4790__auto___46714 < len__4789__auto___46712)){
args__4795__auto__.push((arguments[i__4790__auto___46714]));

var G__46717 = (i__4790__auto___46714 + (1));
i__4790__auto___46714 = G__46717;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return athens.lib.dom.attributes.with_classes.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(athens.lib.dom.attributes.with_classes.cljs$core$IFn$_invoke$arity$variadic = (function (dom_classes){
return (function() {
var athens$lib$dom$attributes$f = null;
var athens$lib$dom$attributes$f__0 = (function (){
return athens$lib$dom$attributes$f.cljs$core$IFn$_invoke$arity$1(null);
});
var athens$lib$dom$attributes$f__1 = (function (attrs){
return athens.lib.dom.attributes.merge_dom_classes(attrs,dom_classes);
});
athens$lib$dom$attributes$f = function(attrs){
switch(arguments.length){
case 0:
return athens$lib$dom$attributes$f__0.call(this);
case 1:
return athens$lib$dom$attributes$f__1.call(this,attrs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$lib$dom$attributes$f.cljs$core$IFn$_invoke$arity$0 = athens$lib$dom$attributes$f__0;
athens$lib$dom$attributes$f.cljs$core$IFn$_invoke$arity$1 = athens$lib$dom$attributes$f__1;
return athens$lib$dom$attributes$f;
})()
}));

(athens.lib.dom.attributes.with_classes.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(athens.lib.dom.attributes.with_classes.cljs$lang$applyTo = (function (seq46623){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46623));
}));

athens.lib.dom.attributes.merge_styles = (function athens$lib$dom$attributes$merge_styles(attrs,styles){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(attrs,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,styles);
});
athens.lib.dom.attributes.with_styles = (function athens$lib$dom$attributes$with_styles(var_args){
var G__46645 = arguments.length;
switch (G__46645) {
case 1:
return athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___46732 = arguments.length;
var i__4790__auto___46733 = (0);
while(true){
if((i__4790__auto___46733 < len__4789__auto___46732)){
args_arr__4810__auto__.push((arguments[i__4790__auto___46733]));

var G__46734 = (i__4790__auto___46733 + (1));
i__4790__auto___46733 = G__46734;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1 = (function (map_or_fn){
if(cljs.core.fn_QMARK_(map_or_fn)){
return athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1((map_or_fn.cljs$core$IFn$_invoke$arity$0 ? map_or_fn.cljs$core$IFn$_invoke$arity$0() : map_or_fn.call(null)));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(map_or_fn))){
return map_or_fn;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),map_or_fn], null);
}
}
}));

(athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic = (function (map_or_fn,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(x)));
}),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(map_or_fn),more);
}));

/** @this {Function} */
(athens.lib.dom.attributes.with_styles.cljs$lang$applyTo = (function (seq46643){
var G__46644 = cljs.core.first(seq46643);
var seq46643__$1 = cljs.core.next(seq46643);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46644,seq46643__$1);
}));

(athens.lib.dom.attributes.with_styles.cljs$lang$maxFixedArity = (1));

athens.lib.dom.attributes.with_attributes = (function athens$lib$dom$attributes$with_attributes(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46745 = arguments.length;
var i__4790__auto___46746 = (0);
while(true){
if((i__4790__auto___46746 < len__4789__auto___46745)){
args__4795__auto__.push((arguments[i__4790__auto___46746]));

var G__46747 = (i__4790__auto___46746 + (1));
i__4790__auto___46746 = G__46747;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic = (function (attributes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,map_or_fn){
if(cljs.core.fn_QMARK_(map_or_fn)){
return (map_or_fn.cljs$core$IFn$_invoke$arity$1 ? map_or_fn.cljs$core$IFn$_invoke$arity$1(acc) : map_or_fn.call(null,acc));
} else {
if(cljs.core.map_QMARK_(map_or_fn)){
return cljs.core.reduce_kv((function (acc0,attribute,v){
var G__46689 = attribute;
var G__46689__$1 = (((G__46689 instanceof cljs.core.Keyword))?G__46689.fqn:null);
switch (G__46689__$1) {
case "style":
return athens.lib.dom.attributes.merge_styles(acc0,v);

break;
case "class":
return athens.lib.dom.attributes.merge_dom_classes(acc0,v);

break;
default:
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc0,attribute,v);

}
}),acc,map_or_fn);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Expected map or function",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),map_or_fn], null));

}
}
}),cljs.core.PersistentArrayMap.EMPTY,attributes);
}));

(athens.lib.dom.attributes.with_attributes.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(athens.lib.dom.attributes.with_attributes.cljs$lang$applyTo = (function (seq46682){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46682));
}));


//# sourceMappingURL=athens.lib.dom.attributes.js.map
