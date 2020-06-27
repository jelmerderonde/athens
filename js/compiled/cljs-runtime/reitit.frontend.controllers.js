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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57891,match){
var map__57892 = p__57891;
var map__57892__$1 = (((((!((map__57892 == null))))?(((((map__57892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57892):map__57892);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57892__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57892__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57892__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57894(s__57895){
return (new cljs.core.LazySeq(null,(function (){
var s__57895__$1 = s__57895;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57895__$1);
if(temp__5735__auto__){
var s__57895__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57895__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57895__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57897 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57896 = (0);
while(true){
if((i__57896 < size__4581__auto__)){
var vec__57898 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57896);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57898,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57898,(1),null);
cljs.core.chunk_append(b__57897,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57916 = (i__57896 + (1));
i__57896 = G__57916;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57897),reitit$frontend$controllers$get_identity_$_iter__57894(cljs.core.chunk_rest(s__57895__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57897),null);
}
} else {
var vec__57901 = cljs.core.first(s__57895__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57901,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57901,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57894(cljs.core.rest(s__57895__$2)));
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
var G__57904 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57904) : f.call(null,G__57904));
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
var seq__57905_57918 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57906_57919 = null;
var count__57907_57920 = (0);
var i__57908_57921 = (0);
while(true){
if((i__57908_57921 < count__57907_57920)){
var controller_57922 = chunk__57906_57919.cljs$core$IIndexed$_nth$arity$2(null,i__57908_57921);
reitit.frontend.controllers.apply_controller(controller_57922,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57923 = seq__57905_57918;
var G__57924 = chunk__57906_57919;
var G__57925 = count__57907_57920;
var G__57926 = (i__57908_57921 + (1));
seq__57905_57918 = G__57923;
chunk__57906_57919 = G__57924;
count__57907_57920 = G__57925;
i__57908_57921 = G__57926;
continue;
} else {
var temp__5735__auto___57927 = cljs.core.seq(seq__57905_57918);
if(temp__5735__auto___57927){
var seq__57905_57928__$1 = temp__5735__auto___57927;
if(cljs.core.chunked_seq_QMARK_(seq__57905_57928__$1)){
var c__4609__auto___57929 = cljs.core.chunk_first(seq__57905_57928__$1);
var G__57930 = cljs.core.chunk_rest(seq__57905_57928__$1);
var G__57931 = c__4609__auto___57929;
var G__57932 = cljs.core.count(c__4609__auto___57929);
var G__57933 = (0);
seq__57905_57918 = G__57930;
chunk__57906_57919 = G__57931;
count__57907_57920 = G__57932;
i__57908_57921 = G__57933;
continue;
} else {
var controller_57934 = cljs.core.first(seq__57905_57928__$1);
reitit.frontend.controllers.apply_controller(controller_57934,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__57935 = cljs.core.next(seq__57905_57928__$1);
var G__57936 = null;
var G__57937 = (0);
var G__57938 = (0);
seq__57905_57918 = G__57935;
chunk__57906_57919 = G__57936;
count__57907_57920 = G__57937;
i__57908_57921 = G__57938;
continue;
}
} else {
}
}
break;
}

var seq__57910_57939 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57911_57940 = null;
var count__57912_57941 = (0);
var i__57913_57942 = (0);
while(true){
if((i__57913_57942 < count__57912_57941)){
var controller_57943 = chunk__57911_57940.cljs$core$IIndexed$_nth$arity$2(null,i__57913_57942);
reitit.frontend.controllers.apply_controller(controller_57943,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57944 = seq__57910_57939;
var G__57945 = chunk__57911_57940;
var G__57946 = count__57912_57941;
var G__57947 = (i__57913_57942 + (1));
seq__57910_57939 = G__57944;
chunk__57911_57940 = G__57945;
count__57912_57941 = G__57946;
i__57913_57942 = G__57947;
continue;
} else {
var temp__5735__auto___57948 = cljs.core.seq(seq__57910_57939);
if(temp__5735__auto___57948){
var seq__57910_57949__$1 = temp__5735__auto___57948;
if(cljs.core.chunked_seq_QMARK_(seq__57910_57949__$1)){
var c__4609__auto___57950 = cljs.core.chunk_first(seq__57910_57949__$1);
var G__57951 = cljs.core.chunk_rest(seq__57910_57949__$1);
var G__57952 = c__4609__auto___57950;
var G__57953 = cljs.core.count(c__4609__auto___57950);
var G__57954 = (0);
seq__57910_57939 = G__57951;
chunk__57911_57940 = G__57952;
count__57912_57941 = G__57953;
i__57913_57942 = G__57954;
continue;
} else {
var controller_57955 = cljs.core.first(seq__57910_57949__$1);
reitit.frontend.controllers.apply_controller(controller_57955,new cljs.core.Keyword(null,"start","start",-355208981));


var G__57956 = cljs.core.next(seq__57910_57949__$1);
var G__57957 = null;
var G__57958 = (0);
var G__57959 = (0);
seq__57910_57939 = G__57956;
chunk__57911_57940 = G__57957;
count__57912_57941 = G__57958;
i__57913_57942 = G__57959;
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
