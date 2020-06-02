goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__53117 = arguments.length;
switch (G__53117) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__53135 = cljs.core.seq(Object.keys(localStorage));
var chunk__53136 = null;
var count__53137 = (0);
var i__53138 = (0);
while(true){
if((i__53138 < count__53137)){
var k = chunk__53136.cljs$core$IIndexed$_nth$arity$2(null,i__53138);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53179 = seq__53135;
var G__53180 = chunk__53136;
var G__53181 = count__53137;
var G__53182 = (i__53138 + (1));
seq__53135 = G__53179;
chunk__53136 = G__53180;
count__53137 = G__53181;
i__53138 = G__53182;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53135);
if(temp__5735__auto__){
var seq__53135__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53135__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53135__$1);
var G__53187 = cljs.core.chunk_rest(seq__53135__$1);
var G__53188 = c__4609__auto__;
var G__53189 = cljs.core.count(c__4609__auto__);
var G__53190 = (0);
seq__53135 = G__53187;
chunk__53136 = G__53188;
count__53137 = G__53189;
i__53138 = G__53190;
continue;
} else {
var k = cljs.core.first(seq__53135__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53195 = cljs.core.next(seq__53135__$1);
var G__53196 = null;
var G__53197 = (0);
var G__53198 = (0);
seq__53135 = G__53195;
chunk__53136 = G__53196;
count__53137 = G__53197;
i__53138 = G__53198;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
