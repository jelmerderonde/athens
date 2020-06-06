goog.provide('athens.devcards.athena');
goog.require('cljs.core');
goog.require('athens.devcards.db');
goog.require('athens.events');
goog.require('athens.lib.dom.attributes');
goog.require('athens.router');
goog.require('athens.style');
goog.require('athens.subs');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('re_frame.core');
goog.require('reagent.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena55401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena55401 = (function (meta55402){
this.meta55402 = meta55402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena55401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55403,meta55402__$1){
var self__ = this;
var _55403__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena55401(meta55402__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena55401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55403){
var self__ = this;
var _55403__$1 = this;
return self__.meta55402;
}));

(athens.devcards.athena.t_athens$devcards$athena55401.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena55401.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.style.style_guide_css], null);
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena55401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55402","meta55402",1639555661,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena55401.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena55401.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena55401");

(athens.devcards.athena.t_athens$devcards$athena55401.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena55401");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena55401.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena55401 = (function athens$devcards$athena$__GT_t_athens$devcards$athena55401(meta55402){
return (new athens.devcards.athena.t_athens$devcards$athena55401(meta55402));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena55401(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Instantiate-app-db","Instantiate-app-db",-1843494547)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Instantiate-app-db",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Using re-frame, even though DevCards </3 re-frame. Not using re-frame elsewhere for subs, but will probably\n  need refactoring or real isolation later.\n\n  - https://github.com/athensresearch/athens/issues/126\n  - https://github.com/bhauman/devcards/issues/105\n  - https://github.com/bhauman/devcards/pull/131/\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena55414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena55414 = (function (meta55415){
this.meta55415 = meta55415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena55414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55416,meta55415__$1){
var self__ = this;
var _55416__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena55414(meta55415__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena55414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55416){
var self__ = this;
var _55416__$1 = this;
return self__.meta55415;
}));

(athens.devcards.athena.t_athens$devcards$athena55414.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena55414.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = null;
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena55414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55415","meta55415",896917723,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena55414.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena55414.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena55414");

(athens.devcards.athena.t_athens$devcards$athena55414.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena55414");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena55414.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena55414 = (function athens$devcards$athena$__GT_t_athens$devcards$athena55414(meta55415){
return (new athens.devcards.athena.t_athens$devcards$athena55414(meta55415));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena55414(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
var G__55425_55476 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55425_55476) : re_frame.core.dispatch.call(null,G__55425_55476));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Instantiate-Dsdb","Instantiate-Dsdb",-544389239)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Instantiate-Dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena55426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena55426 = (function (meta55427){
this.meta55427 = meta55427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena55426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55428,meta55427__$1){
var self__ = this;
var _55428__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena55426(meta55427__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena55426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55428){
var self__ = this;
var _55428__$1 = this;
return self__.meta55427;
}));

(athens.devcards.athena.t_athens$devcards$athena55426.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena55426.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = null;
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena55426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55427","meta55427",-273272445,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena55426.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena55426.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena55426");

(athens.devcards.athena.t_athens$devcards$athena55426.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena55426");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena55426.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena55426 = (function athens$devcards$athena$__GT_t_athens$devcards$athena55426(meta55427){
return (new athens.devcards.athena.t_athens$devcards$athena55426(meta55427));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena55426(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.conn !== 'undefined')){
} else {
athens.devcards.athena.conn = athens.devcards.db.new_conn();
}
athens.devcards.db.posh_conn_BANG_(athens.devcards.athena.conn);
athens.devcards.athena.handler = (function athens$devcards$athena$handler(){
var n = (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.devcards.athena.conn)) + (1));
var n_child = (n + (1));
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("node","title","node/title",628940777),["Test Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","string","block/string",-2066596447),["Test Block",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join('')], null)], null)], null)], null));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Press button and then search \"test\" ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena55431 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena55431 = (function (meta55432){
this.meta55432 = meta55432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena55431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55433,meta55432__$1){
var self__ = this;
var _55433__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena55431(meta55432__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena55431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55433){
var self__ = this;
var _55433__$1 = this;
return self__.meta55432;
}));

(athens.devcards.athena.t_athens$devcards$athena55431.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena55431.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),athens.devcards.athena.handler], null),"Create Test Pages and Blocks"], null);
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena55431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55432","meta55432",1682772848,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena55431.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena55431.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena55431");

(athens.devcards.athena.t_athens$devcards$athena55431.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena55431");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena55431.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena55431 = (function athens$devcards$athena$__GT_t_athens$devcards$athena55431(meta55432){
return (new athens.devcards.athena.t_athens$devcards$athena55431(meta55432));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena55431(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena55437 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena55437 = (function (meta55438){
this.meta55438 = meta55438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena55437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55439,meta55438__$1){
var self__ = this;
var _55439__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena55437(meta55438__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena55437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55439){
var self__ = this;
var _55439__$1 = this;
return self__.meta55438;
}));

(athens.devcards.athena.t_athens$devcards$athena55437.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena55437.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.devcards.athena.conn], null);
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena55437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55438","meta55438",-1790170542,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena55437.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena55437.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena55437");

(athens.devcards.athena.t_athens$devcards$athena55437.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena55437");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena55437.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena55437 = (function athens$devcards$athena$__GT_t_athens$devcards$athena55437(meta55438){
return (new athens.devcards.athena.t_athens$devcards$athena55437(meta55438));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena55437(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.athena.athena_prompt = (function athens$devcards$athena$athena_prompt(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__55446 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55446) : re_frame.core.dispatch.call(null,G__55446));
})], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 0 6px 8px"], null)),"\uD83D\uDD0D"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 16px",new cljs.core.Keyword(null,"color","color",1011675173),"#322F38"], null)),"Find or Create a Page"], null)], null);
});
/**
 * More options here https://clojuredocs.org/clojure.core/re-pattern
 */
athens.devcards.athena.re_case_insensitive = (function athens$devcards$athena$re_case_insensitive(query){
return cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join(''));
});
athens.devcards.athena.search_in_block_title = (function athens$devcards$athena$search_in_block_title(db,query){
var G__55447 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Keyword("block","uid","block/uid",-1623585167)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?node","?node",-1927699885,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null))], null)], null);
var G__55448 = db;
var G__55449 = athens.devcards.athena.re_case_insensitive(query);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__55447,G__55448,G__55449) : datascript.core.q.call(null,G__55447,G__55448,G__55449));
});
athens.devcards.athena.get_parent_node = (function athens$devcards$athena$get_parent_node(block){
var b = block;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword("block","parent","block/parent",-918309064),b);
} else {
var G__55477 = cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(b));
b = G__55477;
continue;
}
break;
}
});
athens.devcards.athena.search_in_block_content = (function athens$devcards$athena$search_in_block_content(db,query){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55452_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55452_SHARP_,new cljs.core.Keyword("block","_children","block/_children",1128070632));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(athens.devcards.athena.get_parent_node,(function (){var G__55453 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?block","?block",1541466123,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?query-pattern","?query-pattern",-1202525912,null),new cljs.core.Symbol(null,"?txt","?txt",-116144703,null))], null)], null);
var G__55454 = db;
var G__55455 = athens.devcards.athena.re_case_insensitive(query);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__55453,G__55454,G__55455) : datascript.core.q.call(null,G__55453,G__55454,G__55455));
})()));
});
athens.devcards.athena.highlight_match = (function athens$devcards$athena$highlight_match(query,txt){
var query_pattern = athens.devcards.athena.re_case_insensitive(["((?<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),")|(?=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),"))"].join(''));
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,part){
if(cljs.core.truth_(cljs.core.re_find(query_pattern,part))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#F9A132",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"inherit",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"inherit"], null)], null),part], null);
} else {
return part;
}
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(txt,query_pattern));
});
athens.devcards.athena._PLUS_query = athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.style._PLUS_depth_64,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(99),new cljs.core.Keyword(null,"top","top",-1856271961),"100%",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"500px"], null)], 0));
athens.devcards.athena._PLUS_athena_input = athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323)],["49px","#433F38","38px","300","100%","text","25px 0 25px 35px","-0.03em",(0)]));
athens.devcards.athena.recent = (function athens$devcards$athena$recent(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.style._PLUS_flex_space_between,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 18px 0px 32px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid rgba(67, 63, 56, .5)"], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"Recent"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Press "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Sans Condensed",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(600),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid rgba(67, 63, 56, 0.25)",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 4px"], null)),"shift + enter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," to open in right sidebar."], null)], null)], null);
});
athens.devcards.athena._PLUS_container = athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.style._PLUS_depth_64,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"784px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),"30%",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-50%, -50%)",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2)], null)], 0));
athens.devcards.athena.athena = (function athens$devcards$athena$athena(conn){
var _STAR_cache = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var _STAR_match = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var db = datascript.core.db(conn);
var athena_QMARK_ = (function (){var G__55456 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athena","athena",-1523991628)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__55456) : re_frame.core.subscribe.call(null,G__55456));
})();
var handler = (function (e){
var query = e.target.value;
if(clojure.string.blank_QMARK_(query)){
return cljs.core.reset_BANG_(_STAR_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,null], null));
} else {
var result = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_STAR_cache),query);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var G__55457 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pages","pages",-285406513),athens.devcards.athena.search_in_block_title(db,query)], null);
if(cljs.core.truth_(cljs.core.count(query))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55457,new cljs.core.Keyword(null,"blocks","blocks",-610462153),athens.devcards.athena.search_in_block_content(db,query));
} else {
return G__55457;
}
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(_STAR_cache,cljs.core.assoc,query,result);

return cljs.core.reset_BANG_(_STAR_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,result], null));
}
});
if(cljs.core.truth_(cljs.core.deref(athena_QMARK_))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.devcards.athena._PLUS_container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"inset 0px -1px 0px rgba(0, 0, 0, 0.1)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.devcards.athena._PLUS_athena_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Find or Create Page",new cljs.core.Keyword(null,"on-change","on-change",-732046149),handler], null)], 0))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.athena.recent], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var vec__55458 = cljs.core.deref(_STAR_match);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55458,(0),null);
var map__55461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55458,(1),null);
var map__55461__$1 = (((((!((map__55461 == null))))?(((((map__55461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55461):map__55461);
var result = map__55461__$1;
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55461__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var blocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55461__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
if(cljs.core.truth_(result)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(athens.devcards.athena._PLUS_query),(function (){var iter__4582__auto__ = (function athens$devcards$athena$athena_$_iter__55463(s__55464){
return (new cljs.core.LazySeq(null,(function (){
var s__55464__$1 = s__55464;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55464__$1);
if(temp__5735__auto__){
var s__55464__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55464__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55464__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55466 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55465 = (0);
while(true){
if((i__55465 < size__4581__auto__)){
var vec__55467 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55465);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55467,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55467,(1),null);
cljs.core.chunk_append(b__55466,(function (){var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(x);
var page_title = (function (){var or__4185__auto__ = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var block_uid = (function (){var or__4185__auto__ = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var block_string = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(x);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"athena-result",new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55465,parent,page_title,block_uid,block_string,vec__55467,i,x,c__4580__auto__,size__4581__auto__,b__55466,s__55464__$2,temp__5735__auto__,vec__55458,query,map__55461,map__55461__$1,result,pages,blocks,_STAR_cache,_STAR_match,db,athena_QMARK_,handler){
return (function (){
return athens.router.navigate_page(block_uid);
});})(i__55465,parent,page_title,block_uid,block_string,vec__55467,i,x,c__4580__auto__,size__4581__auto__,b__55466,s__55464__$2,temp__5735__auto__,vec__55458,query,map__55461,map__55461__$1,result,pages,blocks,_STAR_cache,_STAR_match,db,athena_QMARK_,handler))
], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),athens.devcards.athena.highlight_match(query,page_title)], null),(cljs.core.truth_(block_string)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),athens.devcards.athena.highlight_match(query,block_string)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"auto"], null)),"\u27A1\uFE0F"], null)], null);
})());

var G__55478 = (i__55465 + (1));
i__55465 = G__55478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55466),athens$devcards$athena$athena_$_iter__55463(cljs.core.chunk_rest(s__55464__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55466),null);
}
} else {
var vec__55470 = cljs.core.first(s__55464__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55470,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55470,(1),null);
return cljs.core.cons((function (){var parent = new cljs.core.Keyword("block","parent","block/parent",-918309064).cljs$core$IFn$_invoke$arity$1(x);
var page_title = (function (){var or__4185__auto__ = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var block_uid = (function (){var or__4185__auto__ = new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(parent);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("block","uid","block/uid",-1623585167).cljs$core$IFn$_invoke$arity$1(x);
}
})();
var block_string = new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(x);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"athena-result",new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (parent,page_title,block_uid,block_string,vec__55470,i,x,s__55464__$2,temp__5735__auto__,vec__55458,query,map__55461,map__55461__$1,result,pages,blocks,_STAR_cache,_STAR_match,db,athena_QMARK_,handler){
return (function (){
return athens.router.navigate_page(block_uid);
});})(parent,page_title,block_uid,block_string,vec__55470,i,x,s__55464__$2,temp__5735__auto__,vec__55458,query,map__55461,map__55461__$1,result,pages,blocks,_STAR_cache,_STAR_match,db,athena_QMARK_,handler))
], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),athens.devcards.athena.highlight_match(query,page_title)], null),(cljs.core.truth_(block_string)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),athens.devcards.athena.highlight_match(query,block_string)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"auto"], null)),"\u27A1\uFE0F"], null)], null);
})(),athens$devcards$athena$athena_$_iter__55463(cljs.core.rest(s__55464__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.take.cljs$core$IFn$_invoke$arity$2((40),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((20),pages),blocks))));
})()], null);
} else {
return null;
}
})], null)], null);
} else {
return null;
}
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Athena-Prompt","Athena-Prompt",-1346277474)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Athena-Prompt",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Must press again to close. Doesn't go away if you click outside.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena55473 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena55473 = (function (meta55474){
this.meta55474 = meta55474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena55473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55475,meta55474__$1){
var self__ = this;
var _55475__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena55473(meta55474__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena55473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55475){
var self__ = this;
var _55475__$1 = this;
return self__.meta55474;
}));

(athens.devcards.athena.t_athens$devcards$athena55473.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena55473.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.athena.athena_prompt], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.athena.athena,athens.devcards.athena.conn], null)], null);
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena55473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55474","meta55474",-253971793,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena55473.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena55473.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena55473");

(athens.devcards.athena.t_athens$devcards$athena55473.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena55473");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena55473.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena55473 = (function athens$devcards$athena$__GT_t_athens$devcards$athena55473(meta55474){
return (new athens.devcards.athena.t_athens$devcards$athena55473(meta55474));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena55473(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.athena.js.map
