goog.provide('re_posh.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
var G__67733_67737 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__67734_67738 = (function (datoms){
var G__67735 = cljs.core.deref(re_posh.db.store);
var G__67736 = datoms;
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__67735,G__67736) : posh.reagent.transact_BANG_.call(null,G__67735,G__67736));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__67733_67737,G__67734_67738) : re_frame.core.reg_fx.call(null,G__67733_67737,G__67734_67738));

//# sourceMappingURL=re_posh.effects.js.map
