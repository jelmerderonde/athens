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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__52052,match){
var map__52053 = p__52052;
var map__52053__$1 = (((((!((map__52053 == null))))?(((((map__52053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52053):map__52053);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52053__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52053__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52053__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__52055(s__52056){
return (new cljs.core.LazySeq(null,(function (){
var s__52056__$1 = s__52056;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52056__$1);
if(temp__5735__auto__){
var s__52056__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52056__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52056__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52058 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52057 = (0);
while(true){
if((i__52057 < size__4581__auto__)){
var vec__52059 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__52057);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52059,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52059,(1),null);
cljs.core.chunk_append(b__52058,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__52094 = (i__52057 + (1));
i__52057 = G__52094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52058),reitit$frontend$controllers$get_identity_$_iter__52055(cljs.core.chunk_rest(s__52056__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52058),null);
}
} else {
var vec__52062 = cljs.core.first(s__52056__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52062,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52062,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__52055(cljs.core.rest(s__52056__$2)));
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
var G__52065 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52065) : f.call(null,G__52065));
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
var seq__52066_52095 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__52067_52096 = null;
var count__52068_52097 = (0);
var i__52069_52098 = (0);
while(true){
if((i__52069_52098 < count__52068_52097)){
var controller_52099 = chunk__52067_52096.cljs$core$IIndexed$_nth$arity$2(null,i__52069_52098);
reitit.frontend.controllers.apply_controller(controller_52099,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__52100 = seq__52066_52095;
var G__52101 = chunk__52067_52096;
var G__52102 = count__52068_52097;
var G__52103 = (i__52069_52098 + (1));
seq__52066_52095 = G__52100;
chunk__52067_52096 = G__52101;
count__52068_52097 = G__52102;
i__52069_52098 = G__52103;
continue;
} else {
var temp__5735__auto___52104 = cljs.core.seq(seq__52066_52095);
if(temp__5735__auto___52104){
var seq__52066_52105__$1 = temp__5735__auto___52104;
if(cljs.core.chunked_seq_QMARK_(seq__52066_52105__$1)){
var c__4609__auto___52106 = cljs.core.chunk_first(seq__52066_52105__$1);
var G__52107 = cljs.core.chunk_rest(seq__52066_52105__$1);
var G__52108 = c__4609__auto___52106;
var G__52109 = cljs.core.count(c__4609__auto___52106);
var G__52110 = (0);
seq__52066_52095 = G__52107;
chunk__52067_52096 = G__52108;
count__52068_52097 = G__52109;
i__52069_52098 = G__52110;
continue;
} else {
var controller_52112 = cljs.core.first(seq__52066_52105__$1);
reitit.frontend.controllers.apply_controller(controller_52112,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__52113 = cljs.core.next(seq__52066_52105__$1);
var G__52114 = null;
var G__52115 = (0);
var G__52116 = (0);
seq__52066_52095 = G__52113;
chunk__52067_52096 = G__52114;
count__52068_52097 = G__52115;
i__52069_52098 = G__52116;
continue;
}
} else {
}
}
break;
}

var seq__52071_52117 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__52072_52118 = null;
var count__52073_52119 = (0);
var i__52074_52120 = (0);
while(true){
if((i__52074_52120 < count__52073_52119)){
var controller_52121 = chunk__52072_52118.cljs$core$IIndexed$_nth$arity$2(null,i__52074_52120);
reitit.frontend.controllers.apply_controller(controller_52121,new cljs.core.Keyword(null,"start","start",-355208981));


var G__52122 = seq__52071_52117;
var G__52123 = chunk__52072_52118;
var G__52124 = count__52073_52119;
var G__52125 = (i__52074_52120 + (1));
seq__52071_52117 = G__52122;
chunk__52072_52118 = G__52123;
count__52073_52119 = G__52124;
i__52074_52120 = G__52125;
continue;
} else {
var temp__5735__auto___52126 = cljs.core.seq(seq__52071_52117);
if(temp__5735__auto___52126){
var seq__52071_52127__$1 = temp__5735__auto___52126;
if(cljs.core.chunked_seq_QMARK_(seq__52071_52127__$1)){
var c__4609__auto___52128 = cljs.core.chunk_first(seq__52071_52127__$1);
var G__52129 = cljs.core.chunk_rest(seq__52071_52127__$1);
var G__52130 = c__4609__auto___52128;
var G__52131 = cljs.core.count(c__4609__auto___52128);
var G__52132 = (0);
seq__52071_52117 = G__52129;
chunk__52072_52118 = G__52130;
count__52073_52119 = G__52131;
i__52074_52120 = G__52132;
continue;
} else {
var controller_52133 = cljs.core.first(seq__52071_52127__$1);
reitit.frontend.controllers.apply_controller(controller_52133,new cljs.core.Keyword(null,"start","start",-355208981));


var G__52134 = cljs.core.next(seq__52071_52127__$1);
var G__52135 = null;
var G__52136 = (0);
var G__52137 = (0);
seq__52071_52117 = G__52134;
chunk__52072_52118 = G__52135;
count__52073_52119 = G__52136;
i__52074_52120 = G__52137;
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
