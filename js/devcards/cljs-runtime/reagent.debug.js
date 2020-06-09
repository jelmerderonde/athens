goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__54307__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__54307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54308__i = 0, G__54308__a = new Array(arguments.length -  0);
while (G__54308__i < G__54308__a.length) {G__54308__a[G__54308__i] = arguments[G__54308__i + 0]; ++G__54308__i;}
  args = new cljs.core.IndexedSeq(G__54308__a,0,null);
} 
return G__54307__delegate.call(this,args);};
G__54307.cljs$lang$maxFixedArity = 0;
G__54307.cljs$lang$applyTo = (function (arglist__54309){
var args = cljs.core.seq(arglist__54309);
return G__54307__delegate(args);
});
G__54307.cljs$core$IFn$_invoke$arity$variadic = G__54307__delegate;
return G__54307;
})()
);

(o.error = (function() { 
var G__54310__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__54310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54311__i = 0, G__54311__a = new Array(arguments.length -  0);
while (G__54311__i < G__54311__a.length) {G__54311__a[G__54311__i] = arguments[G__54311__i + 0]; ++G__54311__i;}
  args = new cljs.core.IndexedSeq(G__54311__a,0,null);
} 
return G__54310__delegate.call(this,args);};
G__54310.cljs$lang$maxFixedArity = 0;
G__54310.cljs$lang$applyTo = (function (arglist__54312){
var args = cljs.core.seq(arglist__54312);
return G__54310__delegate(args);
});
G__54310.cljs$core$IFn$_invoke$arity$variadic = G__54310__delegate;
return G__54310;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
