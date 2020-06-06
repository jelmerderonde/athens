goog.provide('athens.devcards.db_boxes');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.lib.dom.attributes');
goog.require('athens.style');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('garden.core');
goog.require('reagent.core');
goog.require('sci.core');
athens.devcards.db_boxes.key_code__GT_key = new cljs.core.PersistentArrayMap(null, 3, [(8),new cljs.core.Keyword(null,"backspace","backspace",-696007848),(9),new cljs.core.Keyword(null,"tab","tab",-559583621),(13),new cljs.core.Keyword(null,"return","return",-1891502105)], null);
athens.devcards.db_boxes.log = console.log;
athens.devcards.db_boxes.trace = (function athens$devcards$db_boxes$trace(x){
(athens.devcards.db_boxes.log.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.log.cljs$core$IFn$_invoke$arity$1(x) : athens.devcards.db_boxes.log.call(null,x));

return x;
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Import-Styles","Import-Styles",584958882)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Import-Styles",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes57881 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes57881 = (function (meta57882){
this.meta57882 = meta57882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes57881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57883,meta57882__$1){
var self__ = this;
var _57883__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes57881(meta57882__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57883){
var self__ = this;
var _57883__$1 = this;
return self__.meta57882;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57881.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57881.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57882","meta57882",-1256747161,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57881.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57881.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes57881");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57881.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes57881");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes57881.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes57881 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes57881(meta57882){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes57881(meta57882));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes57881(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  # An experiment in browsing the datascript database\n\n  You can use these devcards to explore the Athens datascript database.\n\n  Initial data:\n  - Start by loading initial data with the \"Load Real Data\" button.\n  - This will load some sample datoms from the ego.datoms file\n\n  Executing queries:\n  - The browse-box uses [sci](https://github.com/borkdude/sci) to execute datascript queries.\n  - In addition to the (non-side-effecting) clojure.core functions, the following bindings are available:\n  - `athens/db` -> the datascript connection, dereference (`@`) to get the current database value\n  - `d/q` -> for querying the database\n  - `d/pull` -> pull one or more attributes of an entity, returns a map\n  - `d/pull-many` -> like `d/pull`, but pulls many entities at once\n  - Execute the query by pressing `shift-enter`\n\n  Browsing:\n  - The browser is a simple html table translating the query result into rows and cells.\n  - Browsing is possible if you've used a pull expression (in a query or with `d/pull` or `d/pull-many`).\n  - If you click a link, it will generate a new query and evaluate it.\n\n  History:\n  - Devcards keeps a history for us. Use the arrows at the bottom to navigate back to earlier states.\n\n  Possible improvements:\n  - Right now navigation is only possible by using a pull expression. By analysing queries it might also be possible for all other queries.\n  - No transctions are currently allowed, but this can easily be changed by adding `d/transact` to sci's bindings.\n  - There is absolutely no styling, some minimal styling would probably make reading the table easier.\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
athens.devcards.db_boxes.initial_box = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"str-content","str-content",297549190),"(d/q '[:find [(pull ?e [*]) ...]\n       :where [?e :node/title]]\n    @athens/db)",new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null);
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.box_state_STAR_ !== 'undefined')){
} else {
athens.devcards.db_boxes.box_state_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(athens.devcards.db_boxes.initial_box);
}
athens.devcards.db_boxes.eval_box = (function athens$devcards$db_boxes$eval_box(p__57884){
var map__57885 = p__57884;
var map__57885__$1 = (((((!((map__57885 == null))))?(((((map__57885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57885):map__57885);
var box = map__57885__$1;
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57885__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var bindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("athens","db","athens/db",815451867,null),athens.db.dsdb,new cljs.core.Symbol("d","q","d/q",-1965434044,null),datascript.core.q,new cljs.core.Symbol("d","pull","d/pull",779986566,null),datascript.core.pull,new cljs.core.Symbol("d","pull-many","d/pull-many",1857679693,null),datascript.core.pull_many], null);
var vec__57887 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(str_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),bindings], null))], null);
}catch (e57890){if((e57890 instanceof Error)){
var e = e57890;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,e], null);
} else {
throw e57890;

}
}})();
var ok_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57887,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57887,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(box,new cljs.core.Keyword(null,"result","result",1415092211),result),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.not(ok_QMARK_));
});
athens.devcards.db_boxes.eval_box_BANG_ = (function athens$devcards$db_boxes$eval_box_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
});
athens.devcards.db_boxes.update_box_BANG_ = (function athens$devcards$db_boxes$update_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(athens.devcards.db_boxes.box_state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"str-content","str-content",297549190),s);
});
athens.devcards.db_boxes.update_and_eval_box_BANG_ = (function athens$devcards$db_boxes$update_and_eval_box_BANG_(s){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,(function (p1__57891_SHARP_){
return athens.devcards.db_boxes.eval_box(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__57891_SHARP_,new cljs.core.Keyword(null,"str-content","str-content",297549190),s));
}));
});
athens.devcards.db_boxes.increase_limit_BANG_ = (function athens$devcards$db_boxes$increase_limit_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(athens.devcards.db_boxes.box_state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"limit","limit",-1355822363),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(10)], 0));
});
athens.devcards.db_boxes.load_real_db_BANG_ = (function athens$devcards$db_boxes$load_real_db_BANG_(conn){
var c__39615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39616__auto__ = (function (){var switch__39592__auto__ = (function (state_57931){
var state_val_57932 = (state_57931[(1)]);
if((state_val_57932 === (7))){
var state_57931__$1 = state_57931;
var statearr_57933_58038 = state_57931__$1;
(statearr_57933_58038[(2)] = false);

(statearr_57933_58038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (1))){
var inst_57893 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_57894 = [false];
var inst_57895 = cljs.core.PersistentHashMap.fromArrays(inst_57893,inst_57894);
var inst_57896 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_57895], 0));
var state_57931__$1 = state_57931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57931__$1,(2),inst_57896);
} else {
if((state_val_57932 === (4))){
var state_57931__$1 = state_57931;
var statearr_57934_58039 = state_57931__$1;
(statearr_57934_58039[(2)] = false);

(statearr_57934_58039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (13))){
var inst_57927 = alert("Failed to retrieve data from GitHub");
var state_57931__$1 = state_57931;
var statearr_57935_58040 = state_57931__$1;
(statearr_57935_58040[(2)] = inst_57927);

(statearr_57935_58040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (6))){
var state_57931__$1 = state_57931;
var statearr_57936_58041 = state_57931__$1;
(statearr_57936_58041[(2)] = true);

(statearr_57936_58041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (3))){
var inst_57898 = (state_57931[(7)]);
var inst_57903 = inst_57898.cljs$lang$protocol_mask$partition0$;
var inst_57904 = (inst_57903 & (64));
var inst_57905 = inst_57898.cljs$core$ISeq$;
var inst_57906 = (cljs.core.PROTOCOL_SENTINEL === inst_57905);
var inst_57907 = ((inst_57904) || (inst_57906));
var state_57931__$1 = state_57931;
if(cljs.core.truth_(inst_57907)){
var statearr_57937_58042 = state_57931__$1;
(statearr_57937_58042[(1)] = (6));

} else {
var statearr_57938_58043 = state_57931__$1;
(statearr_57938_58043[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (12))){
var inst_57921 = (state_57931[(8)]);
var inst_57923 = athens.db.str_to_db_tx(inst_57921);
var inst_57924 = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_57923);
var inst_57925 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.eval_box);
var state_57931__$1 = (function (){var statearr_57939 = state_57931;
(statearr_57939[(9)] = inst_57924);

return statearr_57939;
})();
var statearr_57940_58044 = state_57931__$1;
(statearr_57940_58044[(2)] = inst_57925);

(statearr_57940_58044[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (2))){
var inst_57898 = (state_57931[(7)]);
var inst_57898__$1 = (state_57931[(2)]);
var inst_57900 = (inst_57898__$1 == null);
var inst_57901 = cljs.core.not(inst_57900);
var state_57931__$1 = (function (){var statearr_57941 = state_57931;
(statearr_57941[(7)] = inst_57898__$1);

return statearr_57941;
})();
if(inst_57901){
var statearr_57942_58045 = state_57931__$1;
(statearr_57942_58045[(1)] = (3));

} else {
var statearr_57943_58046 = state_57931__$1;
(statearr_57943_58046[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (11))){
var inst_57919 = (state_57931[(2)]);
var inst_57920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57919,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_57921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57919,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_57931__$1 = (function (){var statearr_57944 = state_57931;
(statearr_57944[(8)] = inst_57921);

return statearr_57944;
})();
if(cljs.core.truth_(inst_57920)){
var statearr_57945_58047 = state_57931__$1;
(statearr_57945_58047[(1)] = (12));

} else {
var statearr_57946_58048 = state_57931__$1;
(statearr_57946_58048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (9))){
var inst_57898 = (state_57931[(7)]);
var inst_57916 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57898);
var state_57931__$1 = state_57931;
var statearr_57947_58049 = state_57931__$1;
(statearr_57947_58049[(2)] = inst_57916);

(statearr_57947_58049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (5))){
var inst_57914 = (state_57931[(2)]);
var state_57931__$1 = state_57931;
if(cljs.core.truth_(inst_57914)){
var statearr_57948_58050 = state_57931__$1;
(statearr_57948_58050[(1)] = (9));

} else {
var statearr_57949_58051 = state_57931__$1;
(statearr_57949_58051[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (14))){
var inst_57929 = (state_57931[(2)]);
var state_57931__$1 = state_57931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57931__$1,inst_57929);
} else {
if((state_val_57932 === (10))){
var inst_57898 = (state_57931[(7)]);
var state_57931__$1 = state_57931;
var statearr_57950_58052 = state_57931__$1;
(statearr_57950_58052[(2)] = inst_57898);

(statearr_57950_58052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (8))){
var inst_57911 = (state_57931[(2)]);
var state_57931__$1 = state_57931;
var statearr_57951_58053 = state_57931__$1;
(statearr_57951_58053[(2)] = inst_57911);

(statearr_57951_58053[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__ = null;
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____0 = (function (){
var statearr_57952 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57952[(0)] = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__);

(statearr_57952[(1)] = (1));

return statearr_57952;
});
var athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____1 = (function (state_57931){
while(true){
var ret_value__39594__auto__ = (function (){try{while(true){
var result__39595__auto__ = switch__39592__auto__(state_57931);
if(cljs.core.keyword_identical_QMARK_(result__39595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39595__auto__;
}
break;
}
}catch (e57953){if((e57953 instanceof Object)){
var ex__39596__auto__ = e57953;
var statearr_57954_58054 = state_57931;
(statearr_57954_58054[(5)] = ex__39596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57953;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58055 = state_57931;
state_57931 = G__58055;
continue;
} else {
return ret_value__39594__auto__;
}
break;
}
});
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__ = function(state_57931){
switch(arguments.length){
case 0:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____0.call(this);
case 1:
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____1.call(this,state_57931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____0;
athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto____1;
return athens$devcards$db_boxes$load_real_db_BANG__$_state_machine__39593__auto__;
})()
})();
var state__39617__auto__ = (function (){var statearr_57955 = (f__39616__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39616__auto__.cljs$core$IFn$_invoke$arity$0() : f__39616__auto__.call(null));
(statearr_57955[(6)] = c__39615__auto__);

return statearr_57955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39617__auto__);
}));

return c__39615__auto__;
});
athens.devcards.db_boxes.load_real_db_button = (function athens$devcards$db_boxes$load_real_db_button(conn){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db_boxes.load_real_db_BANG_(conn);
});
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),"Load Real Data"], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes57956 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes57956 = (function (meta57957){
this.meta57957 = meta57957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes57956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57958,meta57957__$1){
var self__ = this;
var _57958__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes57956(meta57957__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57958){
var self__ = this;
var _57958__$1 = this;
return self__.meta57957;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57956.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57956.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db_boxes.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57957","meta57957",-1124018767,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57956.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57956.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes57956");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57956.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes57956");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes57956.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes57956 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes57956(meta57957){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes57956(meta57957));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes57956(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Modify-Devcards","Modify-Devcards",-638556775)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Modify-Devcards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Increase width to 90% for table",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes57959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes57959 = (function (meta57960){
this.meta57960 = meta57960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes57959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57961,meta57960__$1){
var self__ = this;
var _57961__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes57959(meta57960__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57961){
var self__ = this;
var _57961__$1 = this;
return self__.meta57960;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57959.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57959.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
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

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57960","meta57960",-1487428233,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57959.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57959.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes57959");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes57959.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes57959");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes57959.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes57959 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes57959(meta57960){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes57959(meta57960));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes57959(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
athens.devcards.db_boxes.headings = (function athens$devcards$db_boxes$headings(data,mode){
var G__57962 = mode;
var G__57962__$1 = (((G__57962 instanceof cljs.core.Keyword))?G__57962.fqn:null);
switch (G__57962__$1) {
case "coll":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx","val"], null);

break;
case "map":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","val"], null);

break;
case "tuples":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,data))));

break;
case "maps":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["idx"], null),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57962__$1)].join('')));

}
});
athens.devcards.db_boxes.coll_rows = (function athens$devcards$db_boxes$coll_rows(coll){
var row = (function (p__57963){
var vec__57964 = p__57963;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57964,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57964,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,coll));
});
athens.devcards.db_boxes.map_rows = (function athens$devcards$db_boxes$map_rows(m){
var row = (function (p__57967){
var vec__57968 = p__57967;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57968,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57968,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"key",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),k,new cljs.core.Keyword(null,"heading","heading",-1312171873),"val",new cljs.core.Keyword(null,"idx","idx",1053688473),k], null)], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,m);
});
athens.devcards.db_boxes.tuple_rows = (function athens$devcards$db_boxes$tuple_rows(tuples){
var row = (function (p__57971){
var vec__57972 = p__57971;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57972,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57972,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (heading,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null);
}),values));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(row,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,tuples));
});
athens.devcards.db_boxes.maps_rows = (function athens$devcards$db_boxes$maps_rows(ms){
var hs = athens.devcards.db_boxes.headings(ms,new cljs.core.Keyword(null,"maps","maps",-1711561134));
var iter__4582__auto__ = (function athens$devcards$db_boxes$maps_rows_$_iter__57975(s__57976){
return (new cljs.core.LazySeq(null,(function (){
var s__57976__$1 = s__57976;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57976__$1);
if(temp__5735__auto__){
var s__57976__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57976__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57976__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57978 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57977 = (0);
while(true){
if((i__57977 < size__4581__auto__)){
var idx = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57977);
cljs.core.chunk_append(b__57978,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (i__57977,idx,c__4580__auto__,size__4581__auto__,b__57978,s__57976__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$maps_rows_$_iter__57975_$_iter__57979(s__57980){
return (new cljs.core.LazySeq(null,((function (i__57977,idx,c__4580__auto__,size__4581__auto__,b__57978,s__57976__$2,temp__5735__auto__,hs){
return (function (){
var s__57980__$1 = s__57980;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57980__$1);
if(temp__5735__auto____$1){
var s__57980__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57980__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__57980__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__57982 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__57981 = (0);
while(true){
if((i__57981 < size__4581__auto____$1)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__57981);
cljs.core.chunk_append(b__57982,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__58057 = (i__57981 + (1));
i__57981 = G__58057;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57982),athens$devcards$db_boxes$maps_rows_$_iter__57975_$_iter__57979(cljs.core.chunk_rest(s__57980__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57982),null);
}
} else {
var h = cljs.core.first(s__57980__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$db_boxes$maps_rows_$_iter__57975_$_iter__57979(cljs.core.rest(s__57980__$2)));
}
} else {
return null;
}
break;
}
});})(i__57977,idx,c__4580__auto__,size__4581__auto__,b__57978,s__57976__$2,temp__5735__auto__,hs))
,null,null));
});})(i__57977,idx,c__4580__auto__,size__4581__auto__,b__57978,s__57976__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()));

var G__58058 = (i__57977 + (1));
i__57977 = G__58058;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57978),athens$devcards$db_boxes$maps_rows_$_iter__57975(cljs.core.chunk_rest(s__57976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57978),null);
}
} else {
var idx = cljs.core.first(s__57976__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),idx,new cljs.core.Keyword(null,"heading","heading",-1312171873),"idx",new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null)], null),(function (){var iter__4582__auto__ = ((function (idx,s__57976__$2,temp__5735__auto__,hs){
return (function athens$devcards$db_boxes$maps_rows_$_iter__57975_$_iter__57983(s__57984){
return (new cljs.core.LazySeq(null,(function (){
var s__57984__$1 = s__57984;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__57984__$1);
if(temp__5735__auto____$1){
var s__57984__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57984__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57984__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57986 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57985 = (0);
while(true){
if((i__57985 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57985);
cljs.core.chunk_append(b__57986,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null));

var G__58059 = (i__57985 + (1));
i__57985 = G__58059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57986),athens$devcards$db_boxes$maps_rows_$_iter__57975_$_iter__57983(cljs.core.chunk_rest(s__57984__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57986),null);
}
} else {
var h = cljs.core.first(s__57984__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,h], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),h,new cljs.core.Keyword(null,"heading","heading",-1312171873),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h),new cljs.core.Keyword(null,"idx","idx",1053688473),idx], null),athens$devcards$db_boxes$maps_rows_$_iter__57975_$_iter__57983(cljs.core.rest(s__57984__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(idx,s__57976__$2,temp__5735__auto__,hs))
;
return iter__4582__auto__(cljs.core.rest(hs));
})()),athens$devcards$db_boxes$maps_rows_$_iter__57975(cljs.core.rest(s__57976__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms)));
});
athens.devcards.db_boxes.get_rows = (function athens$devcards$db_boxes$get_rows(data,mode){
var G__57987 = mode;
var G__57987__$1 = (((G__57987 instanceof cljs.core.Keyword))?G__57987.fqn:null);
switch (G__57987__$1) {
case "coll":
return athens.devcards.db_boxes.coll_rows(data);

break;
case "map":
return athens.devcards.db_boxes.map_rows(data);

break;
case "tuples":
return athens.devcards.db_boxes.tuple_rows(data);

break;
case "maps":
return athens.devcards.db_boxes.maps_rows(data);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57987__$1)].join('')));

}
});
athens.devcards.db_boxes.attr_unique_QMARK_ = (function athens$devcards$db_boxes$attr_unique_QMARK_(attr){
return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(athens.db.schema,attr),new cljs.core.Keyword("db","unique","db/unique",329396388));
});
athens.devcards.db_boxes.attr_many_QMARK_ = (function athens$devcards$db_boxes$attr_many_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
athens.devcards.db_boxes.attr_ref_QMARK_ = (function athens$devcards$db_boxes$attr_ref_QMARK_(attr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(athens.db.schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
athens.devcards.db_boxes.pull_entity_str = (function athens$devcards$db_boxes$pull_entity_str(var_args){
var G__57989 = arguments.length;
switch (G__57989) {
case 1:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1 = (function (id){
return ["(d/pull @athens/db '[*] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),")"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2 = (function (attr,id){
return ["(d/pull @athens/db '[*] [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),"])"].join('');
}));

(athens.devcards.db_boxes.pull_entity_str.cljs$lang$maxFixedArity = 2);

athens.devcards.db_boxes.cell = (function athens$devcards$db_boxes$cell(p__57990){
var map__57991 = p__57990;
var map__57991__$1 = (((((!((map__57991 == null))))?(((((map__57991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57991):map__57991);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57991__$1,new cljs.core.Keyword(null,"value","value",305978217));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57991__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57991__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(value)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = id;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return value;
}
})()));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(athens.devcards.db_boxes.attr_unique_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return athens.devcards.db_boxes.update_and_eval_box_BANG_(athens.devcards.db_boxes.pull_entity_str.cljs$core$IFn$_invoke$arity$2(attr,value));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);
} else {
if(((athens.devcards.db_boxes.attr_many_QMARK_(attr)) && (athens.devcards.db_boxes.attr_ref_QMARK_(attr)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__57993(s__57994){
return (new cljs.core.LazySeq(null,(function (){
var s__57994__$1 = s__57994;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57994__$1);
if(temp__5735__auto__){
var s__57994__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57994__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57994__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57996 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57995 = (0);
while(true){
if((i__57995 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57995);
cljs.core.chunk_append(b__57996,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__57997 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__57997) : athens.devcards.db_boxes.cell.call(null,G__57997));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__58062 = (i__57995 + (1));
i__57995 = G__58062;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57996),athens$devcards$db_boxes$cell_$_iter__57993(cljs.core.chunk_rest(s__57994__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57996),null);
}
} else {
var v = cljs.core.first(s__57994__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__57998 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(v)], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__57998) : athens.devcards.db_boxes.cell.call(null,G__57998));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__57993(cljs.core.rest(s__57994__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
if(athens.devcards.db_boxes.attr_many_QMARK_(attr)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$cell_$_iter__57999(s__58000){
return (new cljs.core.LazySeq(null,(function (){
var s__58000__$1 = s__58000;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58000__$1);
if(temp__5735__auto__){
var s__58000__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58000__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58000__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58002 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58001 = (0);
while(true){
if((i__58001 < size__4581__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58001);
cljs.core.chunk_append(b__58002,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__58003 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__58003) : athens.devcards.db_boxes.cell.call(null,G__58003));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__58063 = (i__58001 + (1));
i__58001 = G__58063;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58002),athens$devcards$db_boxes$cell_$_iter__57999(cljs.core.chunk_rest(s__58000__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58002),null);
}
} else {
var v = cljs.core.first(s__58000__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var G__58004 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
return (athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.cell.cljs$core$IFn$_invoke$arity$1(G__58004) : athens.devcards.db_boxes.cell.call(null,G__58004));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),athens$devcards$db_boxes$cell_$_iter__57999(cljs.core.rest(s__58000__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(value);
})()], null);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

}
}
}
}
} else {
return "";
}
});
athens.devcards.db_boxes.table_view = (function athens$devcards$db_boxes$table_view(data,mode,limit){
var hs = athens.devcards.db_boxes.headings(data,mode);
var rows = athens.devcards.db_boxes.get_rows(data,mode);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__58005(s__58006){
return (new cljs.core.LazySeq(null,(function (){
var s__58006__$1 = s__58006;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58006__$1);
if(temp__5735__auto__){
var s__58006__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58006__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58006__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58008 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58007 = (0);
while(true){
if((i__58007 < size__4581__auto__)){
var h = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58007);
cljs.core.chunk_append(b__58008,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)));

var G__58064 = (i__58007 + (1));
i__58007 = G__58064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58008),athens$devcards$db_boxes$table_view_$_iter__58005(cljs.core.chunk_rest(s__58006__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58008),null);
}
} else {
var h = cljs.core.first(s__58006__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["heading-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__58005(cljs.core.rest(s__58006__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(hs);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$devcards$db_boxes$table_view_$_iter__58009(s__58010){
return (new cljs.core.LazySeq(null,(function (){
var s__58010__$1 = s__58010;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58010__$1);
if(temp__5735__auto__){
var s__58010__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58010__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58010__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58012 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58011 = (0);
while(true){
if((i__58011 < size__4581__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58011);
cljs.core.chunk_append(b__58012,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (i__58011,row,c__4580__auto__,size__4581__auto__,b__58012,s__58010__$2,temp__5735__auto__,hs,rows){
return (function athens$devcards$db_boxes$table_view_$_iter__58009_$_iter__58013(s__58014){
return (new cljs.core.LazySeq(null,((function (i__58011,row,c__4580__auto__,size__4581__auto__,b__58012,s__58010__$2,temp__5735__auto__,hs,rows){
return (function (){
var s__58014__$1 = s__58014;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58014__$1);
if(temp__5735__auto____$1){
var s__58014__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58014__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58014__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58016 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58015 = (0);
while(true){
if((i__58015 < size__4581__auto____$1)){
var map__58017 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58015);
var map__58017__$1 = (((((!((map__58017 == null))))?(((((map__58017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58017):map__58017);
var c = map__58017__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58017__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58017__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__58016,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__58065 = (i__58015 + (1));
i__58015 = G__58065;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58016),athens$devcards$db_boxes$table_view_$_iter__58009_$_iter__58013(cljs.core.chunk_rest(s__58014__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58016),null);
}
} else {
var map__58019 = cljs.core.first(s__58014__$2);
var map__58019__$1 = (((((!((map__58019 == null))))?(((((map__58019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58019):map__58019);
var c = map__58019__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58019__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58019__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__58009_$_iter__58013(cljs.core.rest(s__58014__$2)));
}
} else {
return null;
}
break;
}
});})(i__58011,row,c__4580__auto__,size__4581__auto__,b__58012,s__58010__$2,temp__5735__auto__,hs,rows))
,null,null));
});})(i__58011,row,c__4580__auto__,size__4581__auto__,b__58012,s__58010__$2,temp__5735__auto__,hs,rows))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)));

var G__58066 = (i__58011 + (1));
i__58011 = G__58066;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58012),athens$devcards$db_boxes$table_view_$_iter__58009(cljs.core.chunk_rest(s__58010__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58012),null);
}
} else {
var row = cljs.core.first(s__58010__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = ((function (row,s__58010__$2,temp__5735__auto__,hs,rows){
return (function athens$devcards$db_boxes$table_view_$_iter__58009_$_iter__58021(s__58022){
return (new cljs.core.LazySeq(null,(function (){
var s__58022__$1 = s__58022;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58022__$1);
if(temp__5735__auto____$1){
var s__58022__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58022__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58022__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58024 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58023 = (0);
while(true){
if((i__58023 < size__4581__auto__)){
var map__58025 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58023);
var map__58025__$1 = (((((!((map__58025 == null))))?(((((map__58025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58025):map__58025);
var c = map__58025__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58025__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58025__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
cljs.core.chunk_append(b__58024,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)));

var G__58067 = (i__58023 + (1));
i__58023 = G__58067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58024),athens$devcards$db_boxes$table_view_$_iter__58009_$_iter__58021(cljs.core.chunk_rest(s__58022__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58024),null);
}
} else {
var map__58027 = cljs.core.first(s__58022__$2);
var map__58027__$1 = (((((!((map__58027 == null))))?(((((map__58027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58027):map__58027);
var c = map__58027__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58027__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58027__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),athens.lib.dom.attributes.with_styles.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"none"], null)),athens.devcards.db_boxes.cell(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading)].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__58009_$_iter__58021(cljs.core.rest(s__58022__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__58010__$2,temp__5735__auto__,hs,rows))
;
return iter__4582__auto__(row);
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)))].join('')], null)),athens$devcards$db_boxes$table_view_$_iter__58009(cljs.core.rest(s__58010__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"map","map",1371690461)))?rows:cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,rows)));
})()], null)], null)], null);
});
athens.devcards.db_boxes.coll_of_maps_QMARK_ = (function athens$devcards$db_boxes$coll_of_maps_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,x)));
});
athens.devcards.db_boxes.tuples_QMARK_ = (function athens$devcards$db_boxes$tuples_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core.every_QMARK_(cljs.core.coll_QMARK_,x)));
});
athens.devcards.db_boxes.browser_component = (function athens$devcards$db_boxes$browser_component(result,limit){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((athens.devcards.db_boxes.coll_of_maps_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"maps","maps",-1711561134),limit):((cljs.core.map_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"map","map",1371690461),limit):((athens.devcards.db_boxes.tuples_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"tuples","tuples",-676032639),limit):((cljs.core.coll_QMARK_(result))?athens.devcards.db_boxes.table_view(result,new cljs.core.Keyword(null,"coll","coll",1647737163),limit):cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)
))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((((cljs.core.coll_QMARK_(result)) && ((!(cljs.core.map_QMARK_(result)))) && ((limit < cljs.core.count(result)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Showing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit)," out of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(result))," rows "].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),athens.devcards.db_boxes.increase_limit_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null),"load more"], null)], null):null)], null)], null);
});
athens.devcards.db_boxes.error_component = (function athens$devcards$db_boxes$error_component(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)], null);
});
athens.devcards.db_boxes.handle_box_change_BANG_ = (function athens$devcards$db_boxes$handle_box_change_BANG_(e){
return athens.devcards.db_boxes.update_box_BANG_(e.target.value);
});
athens.devcards.db_boxes.handle_return_key_BANG_ = (function athens$devcards$db_boxes$handle_return_key_BANG_(e){
e.preventDefault();

return athens.devcards.db_boxes.eval_box_BANG_();
});
athens.devcards.db_boxes.insert_tab = (function athens$devcards$db_boxes$insert_tab(s,pos){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),pos),"  ",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,pos)].join('');
});
athens.devcards.db_boxes.handle_tab_key_BANG_ = (function athens$devcards$db_boxes$handle_tab_key_BANG_(e){
var t = e.target;
var v = t.value;
var pos = t.selectionStart;
e.preventDefault();

athens.devcards.db_boxes.update_box_BANG_(athens.devcards.db_boxes.insert_tab(v,pos));

return (t.selectionEnd = ((2) + pos));
});
athens.devcards.db_boxes.handle_box_key_down_BANG_ = (function athens$devcards$db_boxes$handle_box_key_down_BANG_(e){
var key_code = e.keyCode;
var shift_QMARK_ = e.shiftKey;
var k = (athens.devcards.db_boxes.key_code__GT_key.cljs$core$IFn$_invoke$arity$1 ? athens.devcards.db_boxes.key_code__GT_key.cljs$core$IFn$_invoke$arity$1(key_code) : athens.devcards.db_boxes.key_code__GT_key.call(null,key_code));
var G__58029 = k;
var G__58029__$1 = (((G__58029 instanceof cljs.core.Keyword))?G__58029.fqn:null);
switch (G__58029__$1) {
case "return":
if(cljs.core.truth_(shift_QMARK_)){
return athens.devcards.db_boxes.handle_return_key_BANG_(e);
} else {
return null;
}

break;
case "tab":
return athens.devcards.db_boxes.handle_tab_key_BANG_(e);

break;
default:
return null;

}
});
athens.devcards.db_boxes.box_component = (function athens$devcards$db_boxes$box_component(box_state,_){
var map__58030 = cljs.core.deref(box_state);
var map__58030__$1 = (((((!((map__58030 == null))))?(((((map__58030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58030):map__58030);
var str_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58030__$1,new cljs.core.Keyword(null,"str-content","str-content",297549190));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58030__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58030__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58030__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),str_content,new cljs.core.Keyword(null,"on-change","on-change",-732046149),athens.devcards.db_boxes.handle_box_change_BANG_,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),athens.devcards.db_boxes.handle_box_key_down_BANG_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"150px",new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"IBM Plex Mono"], null)], null)], null),((cljs.core.not(error))?athens.devcards.db_boxes.browser_component(result,limit):athens.devcards.db_boxes.error_component(result))], null);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Reset-to-all-pages","Reset-to-all-pages",-1077601314)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset-to-all-pages",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes58032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes58032 = (function (meta58033){
this.meta58033 = meta58033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes58032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58034,meta58033__$1){
var self__ = this;
var _58034__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes58032(meta58033__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes58032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58034){
var self__ = this;
var _58034__$1 = this;
return self__.meta58033;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes58032.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes58032.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(athens.devcards.db_boxes.box_state_STAR_,athens.devcards.db_boxes.initial_box);

return athens.devcards.db_boxes.eval_box_BANG_();
})], null),"Reset"], null);
});
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes58032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58033","meta58033",124909867,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes58032.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes58032.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes58032");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes58032.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes58032");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes58032.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes58032 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes58032(meta58033){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes58032(meta58033));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes58032(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db_boxes","athens.devcards.db_boxes",1085098009),new cljs.core.Keyword(null,"Browse-db-box","Browse-db-box",1698976747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Browse-db-box",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db_boxes !== 'undefined') && (typeof athens.devcards.db_boxes.t_athens$devcards$db_boxes58035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db_boxes.t_athens$devcards$db_boxes58035 = (function (meta58036){
this.meta58036 = meta58036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db_boxes.t_athens$devcards$db_boxes58035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58037,meta58036__$1){
var self__ = this;
var _58037__$1 = this;
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes58035(meta58036__$1));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes58035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58037){
var self__ = this;
var _58037__$1 = this;
return self__.meta58036;
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes58035.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes58035.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__48082__auto__,devcard_opts__48083__auto__){
var self__ = this;
var this__48082__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__48083__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__48112__auto__ = athens.devcards.db_boxes.box_component;
if(cljs.core.fn_QMARK_(v__48112__auto__)){
return (function (data_atom__48113__auto__,owner__48114__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__48112__auto__,data_atom__48113__auto__,owner__48114__auto__], null));
});
} else {
return reagent.core.as_element(v__48112__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__48083__auto__))], 0))], 0));
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes58035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58036","meta58036",-85040102,null)], null);
}));

(athens.devcards.db_boxes.t_athens$devcards$db_boxes58035.cljs$lang$type = true);

(athens.devcards.db_boxes.t_athens$devcards$db_boxes58035.cljs$lang$ctorStr = "athens.devcards.db-boxes/t_athens$devcards$db_boxes58035");

(athens.devcards.db_boxes.t_athens$devcards$db_boxes58035.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db-boxes/t_athens$devcards$db_boxes58035");
}));

/**
 * Positional factory function for athens.devcards.db-boxes/t_athens$devcards$db_boxes58035.
 */
athens.devcards.db_boxes.__GT_t_athens$devcards$db_boxes58035 = (function athens$devcards$db_boxes$__GT_t_athens$devcards$db_boxes58035(meta58036){
return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes58035(meta58036));
});

}

return (new athens.devcards.db_boxes.t_athens$devcards$db_boxes58035(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),athens.devcards.db_boxes.box_state_STAR_,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.db_boxes.js.map
