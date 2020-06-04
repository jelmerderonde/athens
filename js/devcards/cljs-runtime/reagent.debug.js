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
var G__52308__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__52308 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52309__i = 0, G__52309__a = new Array(arguments.length -  0);
while (G__52309__i < G__52309__a.length) {G__52309__a[G__52309__i] = arguments[G__52309__i + 0]; ++G__52309__i;}
  args = new cljs.core.IndexedSeq(G__52309__a,0,null);
} 
return G__52308__delegate.call(this,args);};
G__52308.cljs$lang$maxFixedArity = 0;
G__52308.cljs$lang$applyTo = (function (arglist__52310){
var args = cljs.core.seq(arglist__52310);
return G__52308__delegate(args);
});
G__52308.cljs$core$IFn$_invoke$arity$variadic = G__52308__delegate;
return G__52308;
})()
);

(o.error = (function() { 
var G__52311__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__52311 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52312__i = 0, G__52312__a = new Array(arguments.length -  0);
while (G__52312__i < G__52312__a.length) {G__52312__a[G__52312__i] = arguments[G__52312__i + 0]; ++G__52312__i;}
  args = new cljs.core.IndexedSeq(G__52312__a,0,null);
} 
return G__52311__delegate.call(this,args);};
G__52311.cljs$lang$maxFixedArity = 0;
G__52311.cljs$lang$applyTo = (function (arglist__52313){
var args = cljs.core.seq(arglist__52313);
return G__52311__delegate(args);
});
G__52311.cljs$core$IFn$_invoke$arity$variadic = G__52311__delegate;
return G__52311;
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
