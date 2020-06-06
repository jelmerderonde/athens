goog.provide('athens.devcards.left_sidebar');
goog.require('cljs.core');
goog.require('athens.devcards.athena');
goog.require('athens.devcards.db');
goog.require('athens.lib.dom.attributes');
goog.require('athens.router');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55482 = (function (meta55483){
this.meta55483 = meta55483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55484,meta55483__$1){
var self__ = this;
var _55484__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55482(meta55483__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55484){
var self__ = this;
var _55484__$1 = this;
return self__.meta55483;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55482.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55482.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
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

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55483","meta55483",1460181517,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55482.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55482.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar55482");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55482.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar55482");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar55482.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar55482 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar55482(meta55483){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55482(meta55483));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55482(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Instantiate-Dsdb","Instantiate-Dsdb",-544389239)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Instantiate-Dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55488 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55488 = (function (meta55489){
this.meta55489 = meta55489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55490,meta55489__$1){
var self__ = this;
var _55490__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55488(meta55489__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55490){
var self__ = this;
var _55490__$1 = this;
return self__.meta55489;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55488.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55488.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
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

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55489","meta55489",-309402179,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55488.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55488.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar55488");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55488.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar55488");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar55488.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar55488 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar55488(meta55489){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55488(meta55489));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55488(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.conn !== 'undefined')){
} else {
athens.devcards.left_sidebar.conn = athens.devcards.db.new_conn();
}
athens.devcards.db.posh_conn_BANG_(athens.devcards.left_sidebar.conn);
athens.devcards.left_sidebar.handler = (function athens$devcards$left_sidebar$handler(){
var n = new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.devcards.left_sidebar.conn));
var G__55501 = athens.devcards.left_sidebar.conn;
var G__55502 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),n,new cljs.core.Keyword("node","title","node/title",628940777),["Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null)], null);
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__55501,G__55502) : posh.reagent.transact_BANG_.call(null,G__55501,G__55502));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Create-Shortcut","Create-Shortcut",1916776015)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Shortcut",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55503 = (function (meta55504){
this.meta55504 = meta55504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55505,meta55504__$1){
var self__ = this;
var _55505__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55503(meta55504__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55505){
var self__ = this;
var _55505__$1 = this;
return self__.meta55504;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55503.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55503.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),athens.devcards.left_sidebar.handler], null),"Create Shortcut"], null);
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55504","meta55504",-1184876977,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55503.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55503.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar55503");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55503.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar55503");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar55503.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar55503 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar55503(meta55504){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55503(meta55504));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55503(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.left_sidebar._PLUS_flex_column_align_start = athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.style._PLUS_flex_column,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-start"], null)], 0));
athens.devcards.left_sidebar._PLUS_left_sidebar = athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.left_sidebar._PLUS_flex_column_align_start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"288px",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"padding","padding",1660304693),"32px 32px 16px 32px",new cljs.core.Keyword(null,"border-right-width","border-right-width",750273868),"1px",new cljs.core.Keyword(null,"border-right-style","border-right-style",-1606013368),"solid",new cljs.core.Keyword(null,"border-right-color","border-right-color",2017953775),"#433f3880",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed"], null)], 0));
athens.devcards.left_sidebar._PLUS_left_sidebar_collapsed = athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.left_sidebar._PLUS_left_sidebar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"32px",new cljs.core.Keyword(null,"padding","padding",1660304693),"32px 0px",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"hidden"], null)], 0));
athens.devcards.left_sidebar.q_shortcuts = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?uid","?uid",-1894399761,null)], null)], null);
athens.devcards.left_sidebar.left_sidebar = (function athens$devcards$left_sidebar$left_sidebar(conn){
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var shortcuts = (posh.reagent.q.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$2(athens.devcards.left_sidebar.q_shortcuts,conn) : posh.reagent.q.call(null,athens.devcards.left_sidebar.q_shortcuts,conn));
return (function (){
var sorted_shortcuts = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.deref(shortcuts)));
if(cljs.core.not(cljs.core.deref(open_QMARK_))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.devcards.left_sidebar._PLUS_left_sidebar_collapsed,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);
})], null),">"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__55506 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__55506) : re_frame.core.dispatch.call(null,G__55506));
})], null),"\uD83D\uDD0D"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"auto"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.style._PLUS_flex_column], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"5px"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], 0)),"\uD83C\uDD70"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"\u2743"], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.devcards.left_sidebar._PLUS_left_sidebar,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"40px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.style._PLUS_flex_space_between], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.athena.athena_prompt], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);
})], null),"<"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.left_sidebar._PLUS_flex_column_align_start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"40px"], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Daily Notes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.router.navigate(new cljs.core.Keyword(null,"home","home",-74557309));
})], null),"All Pages"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Graph Overview"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.left_sidebar._PLUS_flex_column_align_start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.style._PLUS_width_100,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"60vh"], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.small","span.small",1761756015),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5], null)),"Shortcuts"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.style._PLUS_width_100,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null)], 0)),(function (){var iter__4582__auto__ = (function athens$devcards$left_sidebar$left_sidebar_$_iter__55510(s__55511){
return (new cljs.core.LazySeq(null,(function (){
var s__55511__$1 = s__55511;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55511__$1);
if(temp__5735__auto__){
var s__55511__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55511__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55511__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55513 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55512 = (0);
while(true){
if((i__55512 < size__4581__auto__)){
var vec__55518 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55512);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55518,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55518,(1),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55518,(2),null);
cljs.core.chunk_append(b__55513,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"12px 0"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.style._PLUS_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55512,vec__55518,_order,title,uid,c__4580__auto__,size__4581__auto__,b__55513,s__55511__$2,temp__5735__auto__,sorted_shortcuts,open_QMARK_,shortcuts){
return (function (){
return athens.router.navigate_page(uid);
});})(i__55512,vec__55518,_order,title,uid,c__4580__auto__,size__4581__auto__,b__55513,s__55511__$2,temp__5735__auto__,sorted_shortcuts,open_QMARK_,shortcuts))
], null)], 0)),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__55554 = (i__55512 + (1));
i__55512 = G__55554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55513),athens$devcards$left_sidebar$left_sidebar_$_iter__55510(cljs.core.chunk_rest(s__55511__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55513),null);
}
} else {
var vec__55521 = cljs.core.first(s__55511__$2);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55521,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55521,(1),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55521,(2),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"12px 0"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.style._PLUS_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__55521,_order,title,uid,s__55511__$2,temp__5735__auto__,sorted_shortcuts,open_QMARK_,shortcuts){
return (function (){
return athens.router.navigate_page(uid);
});})(vec__55521,_order,title,uid,s__55511__$2,temp__5735__auto__,sorted_shortcuts,open_QMARK_,shortcuts))
], null)], 0)),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),athens$devcards$left_sidebar$left_sidebar_$_iter__55510(cljs.core.rest(s__55511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sorted_shortcuts);
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$variadic(athens.style._PLUS_flex_space_between,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/athensresearch/athens",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'IBM Plex Serif', Sans-Serif"], null)),"Athens"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),athens.lib.dom.attributes.with_attributes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], 0)),"\uD83C\uDD70"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"\u2743"], null)], null)], null)], null);
}
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Comments","Comments",1933620116)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Comments",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"`position: fixed` for left-sidebar doesn't work with DevCards.\n\n  But `position: sticky` doesn't work well when in app.\n\n  Has to do with absolute vs relative positioning I believe.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55524 = (function (meta55525){
this.meta55525 = meta55525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55526,meta55525__$1){
var self__ = this;
var _55526__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55524(meta55525__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55526){
var self__ = this;
var _55526__$1 = this;
return self__.meta55525;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55524.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55524.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
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

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55525","meta55525",1803108033,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55524.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55524.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar55524");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55524.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar55524");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar55524.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar55524 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar55524(meta55525){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55524(meta55525));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55524(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.left_sidebar","athens.devcards.left_sidebar",-1110254216),new cljs.core.Keyword(null,"Left-Sidebar","Left-Sidebar",8868535)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Left-Sidebar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.left_sidebar !== 'undefined') && (typeof athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55534 = (function (meta55535){
this.meta55535 = meta55535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55536,meta55535__$1){
var self__ = this;
var _55536__$1 = this;
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55534(meta55535__$1));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55536){
var self__ = this;
var _55536__$1 = this;
return self__.meta55535;
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55534.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55534.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.left_sidebar.left_sidebar,athens.devcards.left_sidebar.conn], null)], null);
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55535","meta55535",-1737404468,null)], null);
}));

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55534.cljs$lang$type = true);

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55534.cljs$lang$ctorStr = "athens.devcards.left-sidebar/t_athens$devcards$left_sidebar55534");

(athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55534.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.left-sidebar/t_athens$devcards$left_sidebar55534");
}));

/**
 * Positional factory function for athens.devcards.left-sidebar/t_athens$devcards$left_sidebar55534.
 */
athens.devcards.left_sidebar.__GT_t_athens$devcards$left_sidebar55534 = (function athens$devcards$left_sidebar$__GT_t_athens$devcards$left_sidebar55534(meta55535){
return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55534(meta55535));
});

}

return (new athens.devcards.left_sidebar.t_athens$devcards$left_sidebar55534(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.left_sidebar.js.map
