goog.provide('athens.devcards.all_pages');
goog.require('cljs.core');
goog.require('athens.devcards.db');
goog.require('athens.lib.dom.attributes');
goog.require('athens.router');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('garden.core');
goog.require('posh.reagent');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages55145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages55145 = (function (meta55146){
this.meta55146 = meta55146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages55145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55147,meta55146__$1){
var self__ = this;
var _55147__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55145(meta55146__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55147){
var self__ = this;
var _55147__$1 = this;
return self__.meta55146;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55145.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages55145.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
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

(athens.devcards.all_pages.t_athens$devcards$all_pages55145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55146","meta55146",-630915779,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55145.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages55145.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages55145");

(athens.devcards.all_pages.t_athens$devcards$all_pages55145.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages55145");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages55145.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages55145 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages55145(meta55146){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55145(meta55146));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages55145(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages55186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages55186 = (function (meta55187){
this.meta55187 = meta55187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages55186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55188,meta55187__$1){
var self__ = this;
var _55188__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55186(meta55187__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55188){
var self__ = this;
var _55188__$1 = this;
return self__.meta55187;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55186.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages55186.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".com-rigsomelight-devcards-container",".com-rigsomelight-devcards-container",392447819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null)], null)], 0))], null);
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55187","meta55187",265862316,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55186.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages55186.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages55186");

(athens.devcards.all_pages.t_athens$devcards$all_pages55186.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages55186");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages55186.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages55186 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages55186(meta55187){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55186(meta55187));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages55186(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Instantiate-Dsdb","Instantiate-Dsdb",-544389239)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Instantiate-Dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.conn !== 'undefined')){
} else {
athens.devcards.all_pages.conn = athens.devcards.db.new_conn();
}
athens.devcards.db.posh_conn_BANG_(athens.devcards.all_pages.conn);
athens.devcards.all_pages.handler = (function athens$devcards$all_pages$handler(){
var n = new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.devcards.all_pages.conn));
var G__55193 = athens.devcards.all_pages.conn;
var G__55194 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("node","title","node/title",628940777),["Test Title ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","string","block/string",-2066596447),"a block string",new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join('')], null)], null),new cljs.core.Keyword("create","time","create/time",-1563077754),(new Date()).getTime(),new cljs.core.Keyword("edit","time","edit/time",1384867476),(new Date()).getTime()], null)], null);
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__55193,G__55194) : posh.reagent.transact_BANG_.call(null,G__55193,G__55194));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Page title increments by more than one each time because we create multiple entities (the child blocks).",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages55195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages55195 = (function (meta55196){
this.meta55196 = meta55196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages55195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55197,meta55196__$1){
var self__ = this;
var _55197__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55195(meta55196__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55197){
var self__ = this;
var _55197__$1 = this;
return self__.meta55196;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55195.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages55195.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),athens.devcards.all_pages.handler], null),"Create Page"], null);
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55196","meta55196",-562112016,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55195.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages55195.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages55195");

(athens.devcards.all_pages.t_athens$devcards$all_pages55195.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages55195");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages55195.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages55195 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages55195(meta55196){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55195(meta55196));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages55195(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages55214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages55214 = (function (meta55215){
this.meta55215 = meta55215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages55214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55216,meta55215__$1){
var self__ = this;
var _55216__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55214(meta55215__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55216){
var self__ = this;
var _55216__$1 = this;
return self__.meta55215;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55214.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages55214.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.devcards.all_pages.conn], null);
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55215","meta55215",-44198039,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55214.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages55214.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages55214");

(athens.devcards.all_pages.t_athens$devcards$all_pages55214.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages55214");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages55214.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages55214 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages55214(meta55215){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55214(meta55215));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages55214(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.all_pages.date_string = (function athens$devcards$all_pages$date_string(x){
if((x < (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"(unknown date)"], null);
} else {
return (new Date(x)).toLocaleString();
}
});
athens.devcards.all_pages.table = (function athens$devcards$all_pages$table(conn){
var page_eids = (function (){var G__55238 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null)], null);
var G__55239 = conn;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$2(G__55238,G__55239) : posh.reagent.q.call(null,G__55238,G__55239));
})();
var pages = (function (){var G__55242 = conn;
var G__55243 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","string","block/string",-2066596447)], null),new cljs.core.Keyword(null,"limit","limit",-1355822363),(5)], null)], null);
var G__55244 = cljs.core.deref(page_eids);
return (posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull_many.cljs$core$IFn$_invoke$arity$3(G__55242,G__55243,G__55244) : posh.reagent.pull_many.call(null,G__55242,G__55243,G__55244));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),athens.style._PLUS_text_align_left,"Title"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),athens.style._PLUS_text_align_left,"Body"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),athens.style._PLUS_text_align_right,"Modified"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),athens.style._PLUS_text_align_right,"Created"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$devcards$all_pages$table_$_iter__55248(s__55250){
return (new cljs.core.LazySeq(null,(function (){
var s__55250__$1 = s__55250;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55250__$1);
if(temp__5735__auto__){
var s__55250__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55250__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55250__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55252 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55251 = (0);
while(true){
if((i__55251 < size__4581__auto__)){
var map__55253 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55251);
var map__55253__$1 = (((((!((map__55253 == null))))?(((((map__55253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55253):map__55253);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55253__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55253__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var modified = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55253__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
var created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55253__$1,new cljs.core.Keyword("create","time","create/time",-1563077754));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55253__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
cljs.core.chunk_append(b__55252,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.style._PLUS_link,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-all"], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55251,map__55253,map__55253__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__55252,s__55250__$2,temp__5735__auto__,page_eids,pages){
return (function (){
return athens.router.navigate_page(uid);
});})(i__55251,map__55253,map__55253__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__55252,s__55250__$2,temp__5735__auto__,page_eids,pages))
], null)], 0)),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"700px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"40px",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"wrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis",new cljs.core.Keyword(null,"display","display",242065432),"block"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.style._PLUS_text_align_left], 0)),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__55251,map__55253,map__55253__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__55252,s__55250__$2,temp__5735__auto__,page_eids,pages){
return (function (p1__55237_SHARP_){
return ["\u2022 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(p1__55237_SHARP_))].join('');
});})(i__55251,map__55253,map__55253__$1,uid,title,modified,created,children,c__4580__auto__,size__4581__auto__,b__55252,s__55250__$2,temp__5735__auto__,page_eids,pages))
,children))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.style._PLUS_text_align_right,athens.devcards.all_pages.date_string(modified)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.style._PLUS_text_align_right,athens.devcards.all_pages.date_string(created)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__55345 = (i__55251 + (1));
i__55251 = G__55345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55252),athens$devcards$all_pages$table_$_iter__55248(cljs.core.chunk_rest(s__55250__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55252),null);
}
} else {
var map__55264 = cljs.core.first(s__55250__$2);
var map__55264__$1 = (((((!((map__55264 == null))))?(((((map__55264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55264):map__55264);
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55264__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55264__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var modified = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55264__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
var created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55264__$1,new cljs.core.Keyword("create","time","create/time",-1563077754));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55264__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.style._PLUS_link,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-all"], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__55264,map__55264__$1,uid,title,modified,created,children,s__55250__$2,temp__5735__auto__,page_eids,pages){
return (function (){
return athens.router.navigate_page(uid);
});})(map__55264,map__55264__$1,uid,title,modified,created,children,s__55250__$2,temp__5735__auto__,page_eids,pages))
], null)], 0)),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"700px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"40px",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"wrap",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis",new cljs.core.Keyword(null,"display","display",242065432),"block"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.style._PLUS_text_align_left], 0)),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__55264,map__55264__$1,uid,title,modified,created,children,s__55250__$2,temp__5735__auto__,page_eids,pages){
return (function (p1__55237_SHARP_){
return ["\u2022 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("block","string","block/string",-2066596447).cljs$core$IFn$_invoke$arity$1(p1__55237_SHARP_))].join('');
});})(map__55264,map__55264__$1,uid,title,modified,created,children,s__55250__$2,temp__5735__auto__,page_eids,pages))
,children))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.style._PLUS_text_align_right,athens.devcards.all_pages.date_string(modified)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.style._PLUS_text_align_right,athens.devcards.all_pages.date_string(created)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),athens$devcards$all_pages$table_$_iter__55248(cljs.core.rest(s__55250__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(pages));
})()], null)], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.all_pages","athens.devcards.all_pages",-311766867),new cljs.core.Keyword(null,"Table","Table",-45928924)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Table",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.all_pages !== 'undefined') && (typeof athens.devcards.all_pages.t_athens$devcards$all_pages55275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.all_pages.t_athens$devcards$all_pages55275 = (function (meta55276){
this.meta55276 = meta55276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.all_pages.t_athens$devcards$all_pages55275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55277,meta55276__$1){
var self__ = this;
var _55277__$1 = this;
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55275(meta55276__$1));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55277){
var self__ = this;
var _55277__$1 = this;
return self__.meta55276;
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55275.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.all_pages.t_athens$devcards$all_pages55275.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.all_pages.table,athens.devcards.all_pages.conn], null);
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55276","meta55276",-280704872,null)], null);
}));

(athens.devcards.all_pages.t_athens$devcards$all_pages55275.cljs$lang$type = true);

(athens.devcards.all_pages.t_athens$devcards$all_pages55275.cljs$lang$ctorStr = "athens.devcards.all-pages/t_athens$devcards$all_pages55275");

(athens.devcards.all_pages.t_athens$devcards$all_pages55275.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.all-pages/t_athens$devcards$all_pages55275");
}));

/**
 * Positional factory function for athens.devcards.all-pages/t_athens$devcards$all_pages55275.
 */
athens.devcards.all_pages.__GT_t_athens$devcards$all_pages55275 = (function athens$devcards$all_pages$__GT_t_athens$devcards$all_pages55275(meta55276){
return (new athens.devcards.all_pages.t_athens$devcards$all_pages55275(meta55276));
});

}

return (new athens.devcards.all_pages.t_athens$devcards$all_pages55275(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.all_pages.js.map
