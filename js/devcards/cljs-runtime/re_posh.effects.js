goog.provide('re_posh.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
var G__60294_60298 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60295_60299 = (function (datoms){
var G__60296 = cljs.core.deref(re_posh.db.store);
var G__60297 = datoms;
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__60296,G__60297) : posh.reagent.transact_BANG_.call(null,G__60296,G__60297));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60294_60298,G__60295_60299) : re_frame.core.reg_fx.call(null,G__60294_60298,G__60295_60299));

//# sourceMappingURL=re_posh.effects.js.map