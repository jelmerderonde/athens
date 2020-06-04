goog.provide('re_posh.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
var G__67703_67707 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__67704_67708 = (function (datoms){
var G__67705 = cljs.core.deref(re_posh.db.store);
var G__67706 = datoms;
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__67705,G__67706) : posh.reagent.transact_BANG_.call(null,G__67705,G__67706));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__67703_67707,G__67704_67708) : re_frame.core.reg_fx.call(null,G__67703_67707,G__67704_67708));

//# sourceMappingURL=re_posh.effects.js.map
