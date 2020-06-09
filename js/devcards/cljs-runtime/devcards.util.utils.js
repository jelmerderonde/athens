goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5733__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5733__auto__)){
var doc = temp__5733__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__62285_62296 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__62286_62297 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__62287_62298 = true;
var _STAR_print_fn_STAR__temp_val__62288_62299 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__62287_62298);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__62288_62299);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__62286_62297);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__62285_62296);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
}catch (e62283){if((e62283 instanceof Error)){
var e1 = e62283;
try{return obj.toString();
}catch (e62284){if((e62284 instanceof Error)){
var e2 = e62284;
return "<<Un-printable Type>>";
} else {
throw e62284;

}
}} else {
throw e62283;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__62294 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__62295 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__62295);

try{return devcards.util.utils.pprint_str(code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__62294);
}});

//# sourceMappingURL=devcards.util.utils.js.map
