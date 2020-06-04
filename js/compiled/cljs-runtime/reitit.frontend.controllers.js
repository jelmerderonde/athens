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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__73210,match){
var map__73211 = p__73210;
var map__73211__$1 = (((((!((map__73211 == null))))?(((((map__73211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73211):map__73211);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73211__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73211__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73211__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__73217(s__73218){
return (new cljs.core.LazySeq(null,(function (){
var s__73218__$1 = s__73218;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__73218__$1);
if(temp__5735__auto__){
var s__73218__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73218__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__73218__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__73220 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__73219 = (0);
while(true){
if((i__73219 < size__4581__auto__)){
var vec__73221 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__73219);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73221,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73221,(1),null);
cljs.core.chunk_append(b__73220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__73292 = (i__73219 + (1));
i__73219 = G__73292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73220),reitit$frontend$controllers$get_identity_$_iter__73217(cljs.core.chunk_rest(s__73218__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73220),null);
}
} else {
var vec__73226 = cljs.core.first(s__73218__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73226,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73226,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__73217(cljs.core.rest(s__73218__$2)));
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
var G__73232 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__73232) : f.call(null,G__73232));
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
var seq__73245_73314 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__73246_73315 = null;
var count__73247_73316 = (0);
var i__73248_73317 = (0);
while(true){
if((i__73248_73317 < count__73247_73316)){
var controller_73322 = chunk__73246_73315.cljs$core$IIndexed$_nth$arity$2(null,i__73248_73317);
reitit.frontend.controllers.apply_controller(controller_73322,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__73326 = seq__73245_73314;
var G__73327 = chunk__73246_73315;
var G__73328 = count__73247_73316;
var G__73329 = (i__73248_73317 + (1));
seq__73245_73314 = G__73326;
chunk__73246_73315 = G__73327;
count__73247_73316 = G__73328;
i__73248_73317 = G__73329;
continue;
} else {
var temp__5735__auto___73330 = cljs.core.seq(seq__73245_73314);
if(temp__5735__auto___73330){
var seq__73245_73331__$1 = temp__5735__auto___73330;
if(cljs.core.chunked_seq_QMARK_(seq__73245_73331__$1)){
var c__4609__auto___73336 = cljs.core.chunk_first(seq__73245_73331__$1);
var G__73337 = cljs.core.chunk_rest(seq__73245_73331__$1);
var G__73338 = c__4609__auto___73336;
var G__73339 = cljs.core.count(c__4609__auto___73336);
var G__73340 = (0);
seq__73245_73314 = G__73337;
chunk__73246_73315 = G__73338;
count__73247_73316 = G__73339;
i__73248_73317 = G__73340;
continue;
} else {
var controller_73344 = cljs.core.first(seq__73245_73331__$1);
reitit.frontend.controllers.apply_controller(controller_73344,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__73345 = cljs.core.next(seq__73245_73331__$1);
var G__73346 = null;
var G__73347 = (0);
var G__73348 = (0);
seq__73245_73314 = G__73345;
chunk__73246_73315 = G__73346;
count__73247_73316 = G__73347;
i__73248_73317 = G__73348;
continue;
}
} else {
}
}
break;
}

var seq__73254_73349 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__73255_73350 = null;
var count__73256_73351 = (0);
var i__73257_73352 = (0);
while(true){
if((i__73257_73352 < count__73256_73351)){
var controller_73354 = chunk__73255_73350.cljs$core$IIndexed$_nth$arity$2(null,i__73257_73352);
reitit.frontend.controllers.apply_controller(controller_73354,new cljs.core.Keyword(null,"start","start",-355208981));


var G__73355 = seq__73254_73349;
var G__73356 = chunk__73255_73350;
var G__73357 = count__73256_73351;
var G__73358 = (i__73257_73352 + (1));
seq__73254_73349 = G__73355;
chunk__73255_73350 = G__73356;
count__73256_73351 = G__73357;
i__73257_73352 = G__73358;
continue;
} else {
var temp__5735__auto___73359 = cljs.core.seq(seq__73254_73349);
if(temp__5735__auto___73359){
var seq__73254_73361__$1 = temp__5735__auto___73359;
if(cljs.core.chunked_seq_QMARK_(seq__73254_73361__$1)){
var c__4609__auto___73362 = cljs.core.chunk_first(seq__73254_73361__$1);
var G__73363 = cljs.core.chunk_rest(seq__73254_73361__$1);
var G__73364 = c__4609__auto___73362;
var G__73365 = cljs.core.count(c__4609__auto___73362);
var G__73366 = (0);
seq__73254_73349 = G__73363;
chunk__73255_73350 = G__73364;
count__73256_73351 = G__73365;
i__73257_73352 = G__73366;
continue;
} else {
var controller_73370 = cljs.core.first(seq__73254_73361__$1);
reitit.frontend.controllers.apply_controller(controller_73370,new cljs.core.Keyword(null,"start","start",-355208981));


var G__73371 = cljs.core.next(seq__73254_73361__$1);
var G__73372 = null;
var G__73373 = (0);
var G__73374 = (0);
seq__73254_73349 = G__73371;
chunk__73255_73350 = G__73372;
count__73256_73351 = G__73373;
i__73257_73352 = G__73374;
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
