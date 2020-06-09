goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__73651,match){
var map__73652 = p__73651;
var map__73652__$1 = (((((!((map__73652 == null))))?(((((map__73652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73652):map__73652);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73652__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73652__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73652__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__73654(s__73655){
return (new cljs.core.LazySeq(null,(function (){
var s__73655__$1 = s__73655;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__73655__$1);
if(temp__5735__auto__){
var s__73655__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73655__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__73655__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__73657 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__73656 = (0);
while(true){
if((i__73656 < size__4581__auto__)){
var vec__73660 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__73656);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73660,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73660,(1),null);
cljs.core.chunk_append(b__73657,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__73688 = (i__73656 + (1));
i__73656 = G__73688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73657),reitit$frontend$controllers$get_identity_$_iter__73654(cljs.core.chunk_rest(s__73655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73657),null);
}
} else {
var vec__73664 = cljs.core.first(s__73655__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73664,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73664,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__73654(cljs.core.rest(s__73655__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__73671 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__73671) : f.call(null,G__73671));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__73672_73689 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__73673_73690 = null;
var count__73674_73691 = (0);
var i__73675_73692 = (0);
while(true){
if((i__73675_73692 < count__73674_73691)){
var controller_73693 = chunk__73673_73690.cljs$core$IIndexed$_nth$arity$2(null,i__73675_73692);
reitit.frontend.controllers.apply_controller(controller_73693,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__73694 = seq__73672_73689;
var G__73695 = chunk__73673_73690;
var G__73696 = count__73674_73691;
var G__73697 = (i__73675_73692 + (1));
seq__73672_73689 = G__73694;
chunk__73673_73690 = G__73695;
count__73674_73691 = G__73696;
i__73675_73692 = G__73697;
continue;
} else {
var temp__5735__auto___73698 = cljs.core.seq(seq__73672_73689);
if(temp__5735__auto___73698){
var seq__73672_73699__$1 = temp__5735__auto___73698;
if(cljs.core.chunked_seq_QMARK_(seq__73672_73699__$1)){
var c__4609__auto___73700 = cljs.core.chunk_first(seq__73672_73699__$1);
var G__73701 = cljs.core.chunk_rest(seq__73672_73699__$1);
var G__73702 = c__4609__auto___73700;
var G__73703 = cljs.core.count(c__4609__auto___73700);
var G__73704 = (0);
seq__73672_73689 = G__73701;
chunk__73673_73690 = G__73702;
count__73674_73691 = G__73703;
i__73675_73692 = G__73704;
continue;
} else {
var controller_73705 = cljs.core.first(seq__73672_73699__$1);
reitit.frontend.controllers.apply_controller(controller_73705,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__73706 = cljs.core.next(seq__73672_73699__$1);
var G__73707 = null;
var G__73708 = (0);
var G__73709 = (0);
seq__73672_73689 = G__73706;
chunk__73673_73690 = G__73707;
count__73674_73691 = G__73708;
i__73675_73692 = G__73709;
continue;
}
} else {
}
}
break;
}

var seq__73676_73710 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__73677_73711 = null;
var count__73678_73712 = (0);
var i__73679_73713 = (0);
while(true){
if((i__73679_73713 < count__73678_73712)){
var controller_73714 = chunk__73677_73711.cljs$core$IIndexed$_nth$arity$2(null,i__73679_73713);
reitit.frontend.controllers.apply_controller(controller_73714,new cljs.core.Keyword(null,"start","start",-355208981));


var G__73715 = seq__73676_73710;
var G__73716 = chunk__73677_73711;
var G__73717 = count__73678_73712;
var G__73718 = (i__73679_73713 + (1));
seq__73676_73710 = G__73715;
chunk__73677_73711 = G__73716;
count__73678_73712 = G__73717;
i__73679_73713 = G__73718;
continue;
} else {
var temp__5735__auto___73719 = cljs.core.seq(seq__73676_73710);
if(temp__5735__auto___73719){
var seq__73676_73720__$1 = temp__5735__auto___73719;
if(cljs.core.chunked_seq_QMARK_(seq__73676_73720__$1)){
var c__4609__auto___73721 = cljs.core.chunk_first(seq__73676_73720__$1);
var G__73722 = cljs.core.chunk_rest(seq__73676_73720__$1);
var G__73723 = c__4609__auto___73721;
var G__73724 = cljs.core.count(c__4609__auto___73721);
var G__73725 = (0);
seq__73676_73710 = G__73722;
chunk__73677_73711 = G__73723;
count__73678_73712 = G__73724;
i__73679_73713 = G__73725;
continue;
} else {
var controller_73726 = cljs.core.first(seq__73676_73720__$1);
reitit.frontend.controllers.apply_controller(controller_73726,new cljs.core.Keyword(null,"start","start",-355208981));


var G__73727 = cljs.core.next(seq__73676_73720__$1);
var G__73728 = null;
var G__73729 = (0);
var G__73730 = (0);
seq__73676_73710 = G__73727;
chunk__73677_73711 = G__73728;
count__73678_73712 = G__73729;
i__73679_73713 = G__73730;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
