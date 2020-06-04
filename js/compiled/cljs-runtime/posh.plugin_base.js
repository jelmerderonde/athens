goog.provide('posh.plugin_base');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('posh.stateful');
goog.require('posh.lib.db');
goog.require('posh.lib.update');
posh.plugin_base.missing_pull_result = (function posh$plugin_base$missing_pull_result(dcfg,pull_expr){
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null), null),pull_expr))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null);
} else {
return null;
}
});
posh.plugin_base.safe_pull = (function posh$plugin_base$safe_pull(dcfg,db,query,id){
if(cljs.core.integer_QMARK_(id)){
var fexpr__66048 = new cljs.core.Keyword(null,"pull*","pull*",413297819).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66048.cljs$core$IFn$_invoke$arity$3 ? fexpr__66048.cljs$core$IFn$_invoke$arity$3(db,query,id) : fexpr__66048.call(null,db,query,id));
} else {
if(cljs.core.vector_QMARK_(id)){
var temp__5733__auto__ = (function (){var fexpr__66049 = new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66049.cljs$core$IFn$_invoke$arity$2 ? fexpr__66049.cljs$core$IFn$_invoke$arity$2(db,id) : fexpr__66049.call(null,db,id));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var eid = temp__5733__auto__;
var fexpr__66050 = new cljs.core.Keyword(null,"pull*","pull*",413297819).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66050.cljs$core$IFn$_invoke$arity$3 ? fexpr__66050.cljs$core$IFn$_invoke$arity$3(db,query,eid) : fexpr__66050.call(null,db,query,eid));
} else {
return posh.plugin_base.missing_pull_result(dcfg,query);
}
} else {
if((id == null)){
return posh.plugin_base.missing_pull_result(dcfg,query);
} else {
return null;
}
}
}
});
posh.plugin_base.set_conn_listener_BANG_ = (function posh$plugin_base$set_conn_listener_BANG_(dcfg,posh_atom,conn,db_id){
var posh_vars = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810),posh_atom,new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
var G__66052_66247 = conn;
var G__66053_66248 = new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766);
var G__66054_66249 = (function (var$){
if((var$ instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(posh_vars,var$);
} else {
return null;
}
});
var fexpr__66051_66250 = new cljs.core.Keyword(null,"listen!","listen!",-1756109477).cljs$core$IFn$_invoke$arity$1(dcfg);
(fexpr__66051_66250.cljs$core$IFn$_invoke$arity$3 ? fexpr__66051_66250.cljs$core$IFn$_invoke$arity$3(G__66052_66247,G__66053_66248,G__66054_66249) : fexpr__66051_66250.call(null,G__66052_66247,G__66053_66248,G__66054_66249));

cljs.core.add_watch(conn,new cljs.core.Keyword(null,"posh-schema-listener","posh-schema-listener",-158129486),(function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(posh_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),db_id], null),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state));
} else {
return null;
}
}));

var G__66059_66251 = conn;
var G__66060_66252 = new cljs.core.Keyword(null,"posh-listener","posh-listener",-6636061);
var G__66061_66253 = (function (tx_report){
var map__66062 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(posh_atom,posh.core.after_transact,cljs.core.PersistentArrayMap.createAsIfByAssoc([conn,tx_report]));
var map__66062__$1 = (((((!((map__66062 == null))))?(((((map__66062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66062):map__66062);
var ratoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66062__$1,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364));
var changed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66062__$1,new cljs.core.Keyword(null,"changed","changed",570724917));
var seq__66064 = cljs.core.seq(changed);
var chunk__66065 = null;
var count__66066 = (0);
var i__66067 = (0);
while(true){
if((i__66067 < count__66066)){
var vec__66074 = chunk__66065.cljs$core$IIndexed$_nth$arity$2(null,i__66067);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66074,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66074,(1),null);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));


var G__66256 = seq__66064;
var G__66257 = chunk__66065;
var G__66258 = count__66066;
var G__66259 = (i__66067 + (1));
seq__66064 = G__66256;
chunk__66065 = G__66257;
count__66066 = G__66258;
i__66067 = G__66259;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66064);
if(temp__5735__auto__){
var seq__66064__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66064__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__66064__$1);
var G__66263 = cljs.core.chunk_rest(seq__66064__$1);
var G__66264 = c__4609__auto__;
var G__66265 = cljs.core.count(c__4609__auto__);
var G__66266 = (0);
seq__66064 = G__66263;
chunk__66065 = G__66264;
count__66066 = G__66265;
i__66067 = G__66266;
continue;
} else {
var vec__66077 = cljs.core.first(seq__66064__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66077,(1),null);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));


var G__66267 = cljs.core.next(seq__66064__$1);
var G__66268 = null;
var G__66269 = (0);
var G__66270 = (0);
seq__66064 = G__66267;
chunk__66065 = G__66268;
count__66066 = G__66269;
i__66067 = G__66270;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__66058_66254 = new cljs.core.Keyword(null,"listen!","listen!",-1756109477).cljs$core$IFn$_invoke$arity$1(dcfg);
(fexpr__66058_66254.cljs$core$IFn$_invoke$arity$3 ? fexpr__66058_66254.cljs$core$IFn$_invoke$arity$3(G__66059_66251,G__66060_66252,G__66061_66253) : fexpr__66058_66254.call(null,G__66059_66251,G__66060_66252,G__66061_66253));

return conn;
});
posh.plugin_base.posh_BANG_ = (function posh$plugin_base$posh_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___66271 = arguments.length;
var i__4790__auto___66272 = (0);
while(true){
if((i__4790__auto___66272 < len__4789__auto___66271)){
args__4795__auto__.push((arguments[i__4790__auto___66272]));

var G__66273 = (i__4790__auto___66272 + (1));
i__4790__auto___66272 = G__66273;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return posh.plugin_base.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(posh.plugin_base.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,conns){
var posh_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reset_BANG_(posh_atom,(function (){var n = (0);
var conns__$1 = conns;
var posh_tree = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.empty_tree(dcfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113)], null)),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.PersistentArrayMap.EMPTY], 0));
while(true){
if(cljs.core.empty_QMARK_(conns__$1)){
return posh_tree;
} else {
var G__66274 = (n + (1));
var G__66275 = cljs.core.rest(conns__$1);
var G__66276 = (function (){var db_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["conn",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4(posh_tree,db_id,posh.plugin_base.set_conn_listener_BANG_(dcfg,posh_atom,cljs.core.first(conns__$1),db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.first(conns__$1))));
})();
n = G__66274;
conns__$1 = G__66275;
posh_tree = G__66276;
continue;
}
break;
}
})());
}));

(posh.plugin_base.posh_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(posh.plugin_base.posh_BANG_.cljs$lang$applyTo = (function (seq66080){
var G__66081 = cljs.core.first(seq66080);
var seq66080__$1 = cljs.core.next(seq66080);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66081,seq66080__$1);
}));

posh.plugin_base.get_conn_var = (function posh$plugin_base$get_conn_var(dcfg,conn,var$){
var fexpr__66083 = new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn))));
return (fexpr__66083.cljs$core$IFn$_invoke$arity$1 ? fexpr__66083.cljs$core$IFn$_invoke$arity$1(var$) : fexpr__66083.call(null,var$));
});
posh.plugin_base.get_posh_atom = (function posh$plugin_base$get_posh_atom(dcfg,poshdb_or_conn){
if(cljs.core.truth_((function (){var fexpr__66093 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66093.cljs$core$IFn$_invoke$arity$1 ? fexpr__66093.cljs$core$IFn$_invoke$arity$1(poshdb_or_conn) : fexpr__66093.call(null,poshdb_or_conn));
})())){
return posh.plugin_base.get_conn_var(dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810));
} else {
return posh.stateful.get_posh_atom(poshdb_or_conn);
}
});
posh.plugin_base.get_db = (function posh$plugin_base$get_db(dcfg,poshdb_or_conn){
if(cljs.core.truth_((function (){var fexpr__66098 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66098.cljs$core$IFn$_invoke$arity$1 ? fexpr__66098.cljs$core$IFn$_invoke$arity$1(poshdb_or_conn) : fexpr__66098.call(null,poshdb_or_conn));
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),posh.plugin_base.get_conn_var(dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"db-id","db-id",747248515))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh.plugin_base.get_conn_var(dcfg,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810))], null));
} else {
return poshdb_or_conn;
}
});
posh.plugin_base.rm_posh_item = (function posh$plugin_base$rm_posh_item(dcfg,posh_atom,storage_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.remove_item(posh_atom_val,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key)], 0));
}));
});
posh.plugin_base.make_query_reaction = (function posh$plugin_base$make_query_reaction(var_args){
var G__66101 = arguments.length;
switch (G__66101) {
case 5:
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5 = (function (dcfg,posh_atom,storage_key,add_query_fn,options){
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(posh_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reactions","reactions",2029850654),storage_key], null));
if(cljs.core.truth_(temp__5733__auto__)){
var r = temp__5733__auto__;
return r;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val){
var posh_atom_with_query = (add_query_fn.cljs$core$IFn$_invoke$arity$1 ? add_query_fn.cljs$core$IFn$_invoke$arity$1(posh_atom_val) : add_query_fn.call(null,posh_atom_val));
var query_result = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key));
var query_ratom = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var fexpr__66102 = new cljs.core.Keyword(null,"ratom","ratom",-126521267).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66102.cljs$core$IFn$_invoke$arity$1 ? fexpr__66102.cljs$core$IFn$_invoke$arity$1(query_result) : fexpr__66102.call(null,query_result));
}
})();
var query_reaction = (function (){var G__66104 = (function (){
return cljs.core.deref(query_ratom);
});
var G__66105 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__66106 = (function (_,___$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"forever","forever",2103455015))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(posh_atom,(function (posh_atom_val__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh.core.remove_item(posh_atom_val__$1,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key)], 0));
}));
}
});
var fexpr__66103 = new cljs.core.Keyword(null,"make-reaction","make-reaction",295148585).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66103.cljs$core$IFn$_invoke$arity$3 ? fexpr__66103.cljs$core$IFn$_invoke$arity$3(G__66104,G__66105,G__66106) : fexpr__66103.call(null,G__66104,G__66105,G__66106));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh_atom_with_query,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_ratom),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_reaction)], 0));
}))),storage_key);
}
}));

(posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,posh_atom,storage_key,add_query_fn){
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,add_query_fn,cljs.core.PersistentArrayMap.EMPTY);
}));

(posh.plugin_base.make_query_reaction.cljs$lang$maxFixedArity = 5);

/**
 * Returns a reaction of a pull expression. The options argument may specify `:cache :forever`, which keeps query results
 *   cached indefinitely, even if the reaction is disposed.
 */
posh.plugin_base.pull = (function posh$plugin_base$pull(var_args){
var G__66111 = arguments.length;
switch (G__66111) {
case 5:
return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$5 = (function (dcfg,poshdb,pull_pattern,eid,options){
var true_poshdb = posh.plugin_base.get_db(dcfg,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.plugin_base.get_posh_atom(dcfg,poshdb);
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,(function (p1__66108_SHARP_){
return posh.core.add_pull(p1__66108_SHARP_,true_poshdb,pull_pattern,eid);
}),options);
}));

(posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,poshdb,pull_pattern,eid){
return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$5(dcfg,poshdb,pull_pattern,eid,cljs.core.PersistentArrayMap.EMPTY);
}));

(posh.plugin_base.pull.cljs$lang$maxFixedArity = 5);

posh.plugin_base.pull_info = (function posh$plugin_base$pull_info(dcfg,poshdb,pull_pattern,eid){
var true_poshdb = posh.plugin_base.get_db(dcfg,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.plugin_base.get_posh_atom(dcfg,poshdb);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(posh.lib.update.update_pull(cljs.core.deref(posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
});
posh.plugin_base.pull_many = (function posh$plugin_base$pull_many(var_args){
var G__66128 = arguments.length;
switch (G__66128) {
case 5:
return posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 4:
return posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$5 = (function (dcfg,poshdb,pull_pattern,eids,options){
var true_poshdb = posh.plugin_base.get_db(dcfg,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-many","pull-many",217148130),true_poshdb,pull_pattern,eids], null);
var posh_atom = posh.plugin_base.get_posh_atom(dcfg,poshdb);
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,(function (p1__66120_SHARP_){
return posh.core.add_pull_many(p1__66120_SHARP_,true_poshdb,pull_pattern,eids);
}),options);
}));

(posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,poshdb,pull_pattern,eids){
return posh.plugin_base.pull_many.cljs$core$IFn$_invoke$arity$5(dcfg,poshdb,pull_pattern,eids,cljs.core.PersistentArrayMap.EMPTY);
}));

(posh.plugin_base.pull_many.cljs$lang$maxFixedArity = 5);

posh.plugin_base.pull_tx = (function posh$plugin_base$pull_tx(dcfg,tx_patterns,poshdb,pull_pattern,eid){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pull-tx is deprecated. Calling pull without your tx-patterns."], 0));

return posh.plugin_base.pull.cljs$core$IFn$_invoke$arity$4(dcfg,poshdb,pull_pattern,eid);
});
posh.plugin_base.parse_q_query = (function posh$plugin_base$parse_q_query(dcfg,query){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__66135,query_item){
var vec__66136 = p__66135;
var parsed_query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66136,(0),null);
var last_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66136,(1),null);
if((query_item instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parsed_query,query_item,cljs.core.PersistentVector.EMPTY),query_item], null);
} else {
if(cljs.core.truth_(last_key)){
} else {
throw (new Error("Assert failed: last-key"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$4(parsed_query,last_key,cljs.core.conj,query_item),last_key], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,null], null),query));
});
posh.plugin_base.q_args_count = (function posh$plugin_base$q_args_count(dcfg,query){
var parsed_query = posh.plugin_base.parse_q_query(dcfg,query);
var temp__5733__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(parsed_query);
if(cljs.core.truth_(temp__5733__auto__)){
var in_clause = temp__5733__auto__;
return cljs.core.count(in_clause);
} else {
return (1);
}
});
/**
 * Returns a datalog query reaction. If args count doens't match the query's input count, a final options map argument
 *   is accepted. This options map may specify `:cache :forever`, which keeps query results cached even if the reaction is
 *   disposed.
 */
posh.plugin_base.q = (function posh$plugin_base$q(var_args){
var args__4795__auto__ = [];
var len__4789__auto___66327 = arguments.length;
var i__4790__auto___66328 = (0);
while(true){
if((i__4790__auto___66328 < len__4789__auto___66327)){
args__4795__auto__.push((arguments[i__4790__auto___66328]));

var G__66332 = (i__4790__auto___66328 + (1));
i__4790__auto___66328 = G__66332;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(posh.plugin_base.q.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var n_query_args = posh.plugin_base.q_args_count(dcfg,query);
var vec__66159 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n_query_args,cljs.core.count(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((n_query_args + (1)),cljs.core.count(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast(args),cljs.core.last(args)], null):(function(){throw "Incorrect number of args passed to posh query"})()
));
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66159,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66159,(1),null);
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66143_SHARP_){
if(cljs.core.truth_((function (){var fexpr__66162 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66162.cljs$core$IFn$_invoke$arity$1 ? fexpr__66162.cljs$core$IFn$_invoke$arity$1(p1__66143_SHARP_) : fexpr__66162.call(null,p1__66143_SHARP_));
})())){
return posh.plugin_base.get_db(dcfg,p1__66143_SHARP_);
} else {
return p1__66143_SHARP_;
}
}),args__$1);
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66144_SHARP_){
return posh.plugin_base.get_posh_atom(dcfg,p1__66144_SHARP_);
}),args__$1)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return posh.plugin_base.make_query_reaction.cljs$core$IFn$_invoke$arity$5(dcfg,posh_atom,storage_key,(function (p1__66145_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(posh.core.add_q,p1__66145_SHARP_,query),true_poshdb_args);
}),options);
}));

(posh.plugin_base.q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.plugin_base.q.cljs$lang$applyTo = (function (seq66146){
var G__66147 = cljs.core.first(seq66146);
var seq66146__$1 = cljs.core.next(seq66146);
var G__66148 = cljs.core.first(seq66146__$1);
var seq66146__$2 = cljs.core.next(seq66146__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66147,G__66148,seq66146__$2);
}));

posh.plugin_base.q_info = (function posh$plugin_base$q_info(var_args){
var args__4795__auto__ = [];
var len__4789__auto___66343 = arguments.length;
var i__4790__auto___66344 = (0);
while(true){
if((i__4790__auto___66344 < len__4789__auto___66343)){
args__4795__auto__.push((arguments[i__4790__auto___66344]));

var G__66347 = (i__4790__auto___66344 + (1));
i__4790__auto___66344 = G__66347;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.q_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(posh.plugin_base.q_info.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66167_SHARP_){
if(cljs.core.truth_((function (){var fexpr__66173 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66173.cljs$core$IFn$_invoke$arity$1 ? fexpr__66173.cljs$core$IFn$_invoke$arity$1(p1__66167_SHARP_) : fexpr__66173.call(null,p1__66167_SHARP_));
})())){
return posh.plugin_base.get_db(dcfg,p1__66167_SHARP_);
} else {
return p1__66167_SHARP_;
}
}),args);
var posh_atom = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66168_SHARP_){
return posh.plugin_base.get_posh_atom(dcfg,p1__66168_SHARP_);
}),args)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(posh.lib.update.update_q(cljs.core.deref(posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
}));

(posh.plugin_base.q_info.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.plugin_base.q_info.cljs$lang$applyTo = (function (seq66169){
var G__66170 = cljs.core.first(seq66169);
var seq66169__$1 = cljs.core.next(seq66169);
var G__66171 = cljs.core.first(seq66169__$1);
var seq66169__$2 = cljs.core.next(seq66169__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66170,G__66171,seq66169__$2);
}));

posh.plugin_base.q_tx = (function posh$plugin_base$q_tx(var_args){
var args__4795__auto__ = [];
var len__4789__auto___66351 = arguments.length;
var i__4790__auto___66352 = (0);
while(true){
if((i__4790__auto___66352 < len__4789__auto___66351)){
args__4795__auto__.push((arguments[i__4790__auto___66352]));

var G__66353 = (i__4790__auto___66352 + (1));
i__4790__auto___66352 = G__66353;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return posh.plugin_base.q_tx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(posh.plugin_base.q_tx.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,tx_patterns,query,args){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["q-tx is deprecated. Calling q without your tx-patterns."], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(posh.plugin_base.q,dcfg,query,args);
}));

(posh.plugin_base.q_tx.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(posh.plugin_base.q_tx.cljs$lang$applyTo = (function (seq66186){
var G__66187 = cljs.core.first(seq66186);
var seq66186__$1 = cljs.core.next(seq66186);
var G__66188 = cljs.core.first(seq66186__$1);
var seq66186__$2 = cljs.core.next(seq66186__$1);
var G__66189 = cljs.core.first(seq66186__$2);
var seq66186__$3 = cljs.core.next(seq66186__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66187,G__66188,G__66189,seq66186__$3);
}));

posh.plugin_base.filter_tx = (function posh$plugin_base$filter_tx(dcfg,poshdb,tx_patterns){
return posh.stateful.add_filter_tx(posh.plugin_base.get_db(dcfg,poshdb),tx_patterns);
});
posh.plugin_base.filter_pull = (function posh$plugin_base$filter_pull(dcfg,poshdb,pull_pattern,eid){
return posh.stateful.add_filter_pull(posh.plugin_base.get_db(dcfg,poshdb),pull_pattern,eid);
});
posh.plugin_base.filter_q = (function posh$plugin_base$filter_q(var_args){
var args__4795__auto__ = [];
var len__4789__auto___66360 = arguments.length;
var i__4790__auto___66361 = (0);
while(true){
if((i__4790__auto___66361 < len__4789__auto___66360)){
args__4795__auto__.push((arguments[i__4790__auto___66361]));

var G__66362 = (i__4790__auto___66361 + (1));
i__4790__auto___66361 = G__66362;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return posh.plugin_base.filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(posh.plugin_base.filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (dcfg,query,args){
var true_poshdb_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66214_SHARP_){
if(cljs.core.truth_((function (){var fexpr__66226 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66226.cljs$core$IFn$_invoke$arity$1 ? fexpr__66226.cljs$core$IFn$_invoke$arity$1(p1__66214_SHARP_) : fexpr__66226.call(null,p1__66214_SHARP_));
})())){
return posh.plugin_base.get_db(dcfg,p1__66214_SHARP_);
} else {
return p1__66214_SHARP_;
}
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(posh.stateful.add_filter_q,query,true_poshdb_args);
}));

(posh.plugin_base.filter_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.plugin_base.filter_q.cljs$lang$applyTo = (function (seq66215){
var G__66216 = cljs.core.first(seq66215);
var seq66215__$1 = cljs.core.next(seq66215);
var G__66217 = cljs.core.first(seq66215__$1);
var seq66215__$2 = cljs.core.next(seq66215__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66216,G__66217,seq66215__$2);
}));

posh.plugin_base.transact_BANG_ = (function posh$plugin_base$transact_BANG_(dcfg,poshdb_or_conn,txs){
var G__66228 = (cljs.core.truth_((function (){var fexpr__66230 = new cljs.core.Keyword(null,"conn?","conn?",167224275).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66230.cljs$core$IFn$_invoke$arity$1 ? fexpr__66230.cljs$core$IFn$_invoke$arity$1(poshdb_or_conn) : fexpr__66230.call(null,poshdb_or_conn));
})())?poshdb_or_conn:posh.stateful.poshdb__GT_conn(poshdb_or_conn));
var G__66229 = txs;
var fexpr__66227 = new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66227.cljs$core$IFn$_invoke$arity$2 ? fexpr__66227.cljs$core$IFn$_invoke$arity$2(G__66228,G__66229) : fexpr__66227.call(null,G__66228,G__66229));
});

//# sourceMappingURL=posh.plugin_base.js.map
