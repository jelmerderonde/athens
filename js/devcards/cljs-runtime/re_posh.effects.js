goog.provide('re_posh.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
var G__60253_60260 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60254_60261 = (function (datoms){
var G__60255 = cljs.core.deref(re_posh.db.store);
var G__60256 = datoms;
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__60255,G__60256) : posh.reagent.transact_BANG_.call(null,G__60255,G__60256));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60253_60260,G__60254_60261) : re_frame.core.reg_fx.call(null,G__60253_60260,G__60254_60261));

//# sourceMappingURL=re_posh.effects.js.map
