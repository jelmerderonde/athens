goog.provide('re_posh.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
var G__45535_45541 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__45536_45542 = (function (datoms){
var G__45537 = cljs.core.deref(re_posh.db.store);
var G__45538 = datoms;
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__45537,G__45538) : posh.reagent.transact_BANG_.call(null,G__45537,G__45538));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__45535_45541,G__45536_45542) : re_frame.core.reg_fx.call(null,G__45535_45541,G__45536_45542));

//# sourceMappingURL=re_posh.effects.js.map
