goog.provide('cljs_http.util');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.string');
goog.require('cognitect.transit');
goog.require('goog.userAgent');
goog.require('no.en.core');
/**
 * Returns the value of the HTTP basic authentication header for
 *   `credentials`.
 */
cljs_http.util.basic_auth = (function cljs_http$util$basic_auth(credentials){
if(cljs.core.truth_(credentials)){
var vec__67865 = ((cljs.core.map_QMARK_(credentials))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(credentials,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471)], null)):credentials);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67865,(0),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67865,(1),null);
return ["Basic ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.base64_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)].join('')))].join('');
} else {
return null;
}
});
/**
 * Build the url from the request map.
 */
cljs_http.util.build_url = (function cljs_http$util$build_url(p__67868){
var map__67869 = p__67868;
var map__67869__$1 = (((((!((map__67869 == null))))?(((((map__67869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67869):map__67869);
var scheme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67869__$1,new cljs.core.Keyword(null,"scheme","scheme",90199613));
var server_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67869__$1,new cljs.core.Keyword(null,"server-name","server-name",-1012104295));
var server_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67869__$1,new cljs.core.Keyword(null,"server-port","server-port",663745648));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67869__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var query_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67869__$1,new cljs.core.Keyword(null,"query-string","query-string",-1018845061));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__67872 = (new goog.Uri());
G__67872.setScheme(cljs.core.name((function (){var or__4185__auto__ = scheme;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
})()));

G__67872.setDomain(server_name);

G__67872.setPort(server_port);

G__67872.setPath(uri);

G__67872.setQuery(query_string,true);

return G__67872;
})());
});
/**
 * Returns dash separated string `s` in camel case.
 */
cljs_http.util.camelize = (function cljs_http$util$camelize(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/-/)));
});
/**
 * Build the headers from the map.
 */
cljs_http.util.build_headers = (function cljs_http$util$build_headers(m){
return cljs.core.clj__GT_js(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(m)),cljs.core.vals(m)));
});
/**
 * Returns the user agent.
 */
cljs_http.util.user_agent = (function cljs_http$util$user_agent(){
return goog.userAgent.getUserAgentString();
});
/**
 * Returns true if the user agent is an Android client.
 */
cljs_http.util.android_QMARK_ = (function cljs_http$util$android_QMARK_(){
return cljs.core.re_matches(/.*android.*/i,cljs_http.util.user_agent());
});
/**
 * Transit decode an object from `s`.
 */
cljs_http.util.transit_decode = (function cljs_http$util$transit_decode(s,type,opts){
var rdr = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,opts);
return cognitect.transit.read(rdr,s);
});
/**
 * Transit encode `x` into a String.
 */
cljs_http.util.transit_encode = (function cljs_http$util$transit_encode(x,type,opts){
var wrtr = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,opts);
return cognitect.transit.write(wrtr,x);
});
/**
 * JSON decode an object from `s`.
 */
cljs_http.util.json_decode = (function cljs_http$util$json_decode(s){
var v = (((!(clojure.string.blank_QMARK_(s))))?JSON.parse(s):null);
if((!((v == null)))){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
} else {
return null;
}
});
/**
 * JSON encode `x` into a String.
 */
cljs_http.util.json_encode = (function cljs_http$util$json_encode(x){
return JSON.stringify(cljs.core.clj__GT_js(x));
});
cljs_http.util.parse_headers = (function cljs_http$util$parse_headers(headers){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__67878_SHARP_,p2__67877_SHARP_){
var vec__67885 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__67877_SHARP_,/:\s+/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67885,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67885,(1),null);
if(((clojure.string.blank_QMARK_(k)) || (clojure.string.blank_QMARK_(v)))){
return p1__67878_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__67878_SHARP_,clojure.string.lower_case(k),v);
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((function (){var or__4185__auto__ = headers;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})(),/(\n)|(\r)|(\r\n)|(\n\r)/));
});

//# sourceMappingURL=cljs_http.util.js.map
