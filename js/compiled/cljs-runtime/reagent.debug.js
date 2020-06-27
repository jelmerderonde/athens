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
var G__32109__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__32109 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32110__i = 0, G__32110__a = new Array(arguments.length -  0);
while (G__32110__i < G__32110__a.length) {G__32110__a[G__32110__i] = arguments[G__32110__i + 0]; ++G__32110__i;}
  args = new cljs.core.IndexedSeq(G__32110__a,0,null);
} 
return G__32109__delegate.call(this,args);};
G__32109.cljs$lang$maxFixedArity = 0;
G__32109.cljs$lang$applyTo = (function (arglist__32111){
var args = cljs.core.seq(arglist__32111);
return G__32109__delegate(args);
});
G__32109.cljs$core$IFn$_invoke$arity$variadic = G__32109__delegate;
return G__32109;
})()
);

(o.error = (function() { 
var G__32112__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__32112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32120__i = 0, G__32120__a = new Array(arguments.length -  0);
while (G__32120__i < G__32120__a.length) {G__32120__a[G__32120__i] = arguments[G__32120__i + 0]; ++G__32120__i;}
  args = new cljs.core.IndexedSeq(G__32120__a,0,null);
} 
return G__32112__delegate.call(this,args);};
G__32112.cljs$lang$maxFixedArity = 0;
G__32112.cljs$lang$applyTo = (function (arglist__32121){
var args = cljs.core.seq(arglist__32121);
return G__32112__delegate(args);
});
G__32112.cljs$core$IFn$_invoke$arity$variadic = G__32112__delegate;
return G__32112;
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