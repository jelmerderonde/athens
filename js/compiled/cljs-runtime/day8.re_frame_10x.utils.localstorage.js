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
var G__53059 = arguments.length;
switch (G__53059) {
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
var seq__53070 = cljs.core.seq(Object.keys(localStorage));
var chunk__53071 = null;
var count__53072 = (0);
var i__53073 = (0);
while(true){
if((i__53073 < count__53072)){
var k = chunk__53071.cljs$core$IIndexed$_nth$arity$2(null,i__53073);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53118 = seq__53070;
var G__53119 = chunk__53071;
var G__53120 = count__53072;
var G__53121 = (i__53073 + (1));
seq__53070 = G__53118;
chunk__53071 = G__53119;
count__53072 = G__53120;
i__53073 = G__53121;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53070);
if(temp__5735__auto__){
var seq__53070__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53070__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53070__$1);
var G__53126 = cljs.core.chunk_rest(seq__53070__$1);
var G__53127 = c__4609__auto__;
var G__53128 = cljs.core.count(c__4609__auto__);
var G__53129 = (0);
seq__53070 = G__53126;
chunk__53071 = G__53127;
count__53072 = G__53128;
i__53073 = G__53129;
continue;
} else {
var k = cljs.core.first(seq__53070__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53130 = cljs.core.next(seq__53070__$1);
var G__53131 = null;
var G__53132 = (0);
var G__53133 = (0);
seq__53070 = G__53130;
chunk__53071 = G__53131;
count__53072 = G__53132;
i__53073 = G__53133;
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
