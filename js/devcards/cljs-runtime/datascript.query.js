goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('datascript.db');
goog.require('me.tonsky.persistent_sorted_set.arrays');
goog.require('datascript.lru');
goog.require('datascript.impl.entity');
goog.require('datascript.parser');
goog.require('datascript.pull_api');
goog.require('datascript.pull_parser');
datascript.query.lru_cache_size = (100);



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k55878,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__55882 = k55878;
var G__55882__$1 = (((G__55882 instanceof cljs.core.Keyword))?G__55882.fqn:null);
switch (G__55882__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55878,else__4442__auto__);

}
}));

(datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__55883){
var vec__55884 = p__55883;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55884,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55884,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#datascript.query.Context{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55877){
var self__ = this;
var G__55877__$1 = this;
return (new cljs.core.RecordIter((0),G__55877__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__55894 = (function (coll__4436__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__55894(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55879,other55880){
var self__ = this;
var this55879__$1 = this;
return (((!((other55880 == null)))) && ((this55879__$1.constructor === other55880.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55879__$1.rels,other55880.rels)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55879__$1.sources,other55880.sources)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55879__$1.rules,other55880.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55879__$1.__extmap,other55880.__extmap)));
}));

(datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__55877){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__55904 = cljs.core.keyword_identical_QMARK_;
var expr__55905 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__55907 = new cljs.core.Keyword(null,"rels","rels",1770187185);
var G__55908 = expr__55905;
return (pred__55904.cljs$core$IFn$_invoke$arity$2 ? pred__55904.cljs$core$IFn$_invoke$arity$2(G__55907,G__55908) : pred__55904.call(null,G__55907,G__55908));
})())){
return (new datascript.query.Context(G__55877,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__55910 = new cljs.core.Keyword(null,"sources","sources",-321166424);
var G__55911 = expr__55905;
return (pred__55904.cljs$core$IFn$_invoke$arity$2 ? pred__55904.cljs$core$IFn$_invoke$arity$2(G__55910,G__55911) : pred__55904.call(null,G__55910,G__55911));
})())){
return (new datascript.query.Context(self__.rels,G__55877,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__55912 = new cljs.core.Keyword(null,"rules","rules",1198912366);
var G__55913 = expr__55905;
return (pred__55904.cljs$core$IFn$_invoke$arity$2 ? pred__55904.cljs$core$IFn$_invoke$arity$2(G__55912,G__55913) : pred__55904.call(null,G__55912,G__55913));
})())){
return (new datascript.query.Context(self__.rels,self__.sources,G__55877,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__55877),null));
}
}
}
}));

(datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__55877){
var self__ = this;
var this__4438__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__55877,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
}));

(datascript.query.Context.cljs$lang$type = true);

(datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"datascript.query/Context",null,(1),null));
}));

(datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"datascript.query/Context");
}));

/**
 * Positional factory function for datascript.query/Context.
 */
datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

/**
 * Factory function for datascript.query/Context, taking a map of keywords to field values.
 */
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__55881){
var extmap__4478__auto__ = (function (){var G__55924 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55881,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], 0));
if(cljs.core.record_QMARK_(G__55881)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55924);
} else {
return G__55924;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__55881),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__55881),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__55881),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k55929,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__55934 = k55929;
var G__55934__$1 = (((G__55934 instanceof cljs.core.Keyword))?G__55934.fqn:null);
switch (G__55934__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55929,else__4442__auto__);

}
}));

(datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__55935){
var vec__55936 = p__55935;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55936,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55936,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#datascript.query.Relation{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55928){
var self__ = this;
var G__55928__$1 = this;
return (new cljs.core.RecordIter((0),G__55928__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__55973 = (function (coll__4436__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__55973(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55930,other55931){
var self__ = this;
var this55930__$1 = this;
return (((!((other55931 == null)))) && ((this55930__$1.constructor === other55931.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55930__$1.attrs,other55931.attrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55930__$1.tuples,other55931.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55930__$1.__extmap,other55931.__extmap)));
}));

(datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__55928){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__55991 = cljs.core.keyword_identical_QMARK_;
var expr__55992 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__55994 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713);
var G__55995 = expr__55992;
return (pred__55991.cljs$core$IFn$_invoke$arity$2 ? pred__55991.cljs$core$IFn$_invoke$arity$2(G__55994,G__55995) : pred__55991.call(null,G__55994,G__55995));
})())){
return (new datascript.query.Relation(G__55928,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__55996 = new cljs.core.Keyword(null,"tuples","tuples",-676032639);
var G__55997 = expr__55992;
return (pred__55991.cljs$core$IFn$_invoke$arity$2 ? pred__55991.cljs$core$IFn$_invoke$arity$2(G__55996,G__55997) : pred__55991.call(null,G__55996,G__55997));
})())){
return (new datascript.query.Relation(self__.attrs,G__55928,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__55928),null));
}
}
}));

(datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__55928){
var self__ = this;
var this__4438__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__55928,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
}));

(datascript.query.Relation.cljs$lang$type = true);

(datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"datascript.query/Relation",null,(1),null));
}));

(datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"datascript.query/Relation");
}));

/**
 * Positional factory function for datascript.query/Relation.
 */
datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

/**
 * Factory function for datascript.query/Relation, taking a map of keywords to field values.
 */
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__55933){
var extmap__4478__auto__ = (function (){var G__56004 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55933,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tuples","tuples",-676032639)], 0));
if(cljs.core.record_QMARK_(G__55933)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56004);
} else {
return G__56004;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__55933),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__55933),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

datascript.query.single = (function datascript$query$single(coll){
if((cljs.core.next(coll) == null)){
} else {
throw (new Error(["Assert failed: ","Expected single element","\n","(nil? (next coll))"].join('')));
}

return cljs.core.first(coll);
});
datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57015 = arguments.length;
var i__4790__auto___57016 = (0);
while(true){
if((i__4790__auto___57016 < len__4789__auto___57015)){
args__4795__auto__.push((arguments[i__4790__auto___57016]));

var G__57017 = (i__4790__auto___57016 + (1));
i__4790__auto___57016 = G__57017;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
}));

(datascript.query.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.concatv.cljs$lang$applyTo = (function (seq56008){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56008));
}));

datascript.query.zip = (function datascript$query$zip(var_args){
var G__56019 = arguments.length;
switch (G__56019) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___57021 = arguments.length;
var i__4790__auto___57022 = (0);
while(true){
if((i__4790__auto___57022 < len__4789__auto___57021)){
args_arr__4810__auto__.push((arguments[i__4790__auto___57022]));

var G__57023 = (i__4790__auto___57022 + (1));
i__4790__auto___57022 = G__57023;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(datascript.query.zip.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,a,b);
}));

(datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.mapv,cljs.core.vector,a,b,rest);
}));

/** @this {Function} */
(datascript.query.zip.cljs$lang$applyTo = (function (seq56016){
var G__56017 = cljs.core.first(seq56016);
var seq56016__$1 = cljs.core.next(seq56016);
var G__56018 = cljs.core.first(seq56016__$1);
var seq56016__$2 = cljs.core.next(seq56016__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56017,G__56018,seq56016__$2);
}));

(datascript.query.zip.cljs$lang$maxFixedArity = (2));

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(a),cljs.core.count(b))) && (cljs.core.every_QMARK_((function (p1__56024_SHARP_){
return cljs.core.contains_QMARK_(b,p1__56024_SHARP_);
}),cljs.core.keys(a))) && (cljs.core.every_QMARK_((function (p1__56025_SHARP_){
return cljs.core.contains_QMARK_(b,p1__56025_SHARP_);
}),cljs.core.keys(a))));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_(form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__56031){
var vec__56033 = p__56031;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56033,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56033,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__56043){
var vec__56044 = p__56043;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56044,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56044,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form))));
}
} else {
return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(form) : pattern.call(null,form));

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return (((form instanceof cljs.core.Keyword)) || (typeof form === 'string'));
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = me.tonsky.persistent_sorted_set.arrays.make_array((l1 + l2));
var n__4666__auto___57041 = l1;
var i_57042 = (0);
while(true){
if((i_57042 < n__4666__auto___57041)){
(res[i_57042] = (t1[(idxs1[i_57042])]));

var G__57043 = (i_57042 + (1));
i_57042 = G__57043;
continue;
} else {
}
break;
}

var n__4666__auto___57044 = l2;
var i_57045 = (0);
while(true){
if((i_57045 < n__4666__auto___57044)){
(res[(l1 + i_57045)] = (t2[(idxs2[i_57045])]));

var G__57046 = (i_57045 + (1));
i_57045 = G__57046;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__56056 = a;
var map__56056__$1 = (((((!((map__56056 == null))))?(((((map__56056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56056):map__56056);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56056__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56056__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__56057 = b;
var map__56057__$1 = (((((!((map__56057 == null))))?(((((map__56057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56057):map__56057);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56057__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56057__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(tuples_a),tuples_b),null,null,null));
} else {
if((!(datascript.query.same_keys_QMARK_(attrs_a,attrs_b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t sum relations with different attrs: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_b], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(attrs_a))){
var idxb__GT_idxa = cljs.core.vec((function (){var iter__4582__auto__ = (function datascript$query$sum_rel_$_iter__56066(s__56067){
return (new cljs.core.LazySeq(null,(function (){
var s__56067__$1 = s__56067;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56067__$1);
if(temp__5735__auto__){
var s__56067__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56067__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56067__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56069 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56068 = (0);
while(true){
if((i__56068 < size__4581__auto__)){
var vec__56076 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56068);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56076,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56076,(1),null);
cljs.core.chunk_append(b__56069,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null));

var G__57054 = (i__56068 + (1));
i__56068 = G__57054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56069),datascript$query$sum_rel_$_iter__56066(cljs.core.chunk_rest(s__56067__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56069),null);
}
} else {
var vec__56080 = cljs.core.first(s__56067__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56080,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56080,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null),datascript$query$sum_rel_$_iter__56066(cljs.core.rest(s__56067__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(attrs_b);
})());
var tlen = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(attrs_a)) + (1));
var tuples_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple_b){
var tuple_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.arrays.make_array(tlen);
var seq__56083_57059 = cljs.core.seq(idxb__GT_idxa);
var chunk__56084_57060 = null;
var count__56085_57061 = (0);
var i__56086_57062 = (0);
while(true){
if((i__56086_57062 < count__56085_57061)){
var vec__56096_57063 = chunk__56084_57060.cljs$core$IIndexed$_nth$arity$2(null,i__56086_57062);
var idx_b_57064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56096_57063,(0),null);
var idx_a_57065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56096_57063,(1),null);
(tuple_SINGLEQUOTE_[idx_a_57065] = (tuple_b[idx_b_57064]));


var G__57067 = seq__56083_57059;
var G__57068 = chunk__56084_57060;
var G__57069 = count__56085_57061;
var G__57070 = (i__56086_57062 + (1));
seq__56083_57059 = G__57067;
chunk__56084_57060 = G__57068;
count__56085_57061 = G__57069;
i__56086_57062 = G__57070;
continue;
} else {
var temp__5735__auto___57071 = cljs.core.seq(seq__56083_57059);
if(temp__5735__auto___57071){
var seq__56083_57073__$1 = temp__5735__auto___57071;
if(cljs.core.chunked_seq_QMARK_(seq__56083_57073__$1)){
var c__4609__auto___57074 = cljs.core.chunk_first(seq__56083_57073__$1);
var G__57075 = cljs.core.chunk_rest(seq__56083_57073__$1);
var G__57076 = c__4609__auto___57074;
var G__57077 = cljs.core.count(c__4609__auto___57074);
var G__57078 = (0);
seq__56083_57059 = G__57075;
chunk__56084_57060 = G__57076;
count__56085_57061 = G__57077;
i__56086_57062 = G__57078;
continue;
} else {
var vec__56099_57079 = cljs.core.first(seq__56083_57073__$1);
var idx_b_57080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56099_57079,(0),null);
var idx_a_57081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56099_57079,(1),null);
(tuple_SINGLEQUOTE_[idx_a_57081] = (tuple_b[idx_b_57080]));


var G__57084 = cljs.core.next(seq__56083_57073__$1);
var G__57085 = null;
var G__57086 = (0);
var G__57087 = (0);
seq__56083_57059 = G__57084;
chunk__56084_57060 = G__57085;
count__56085_57061 = G__57086;
i__56086_57062 = G__57087;
continue;
}
} else {
}
}
break;
}

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,tuple_SINGLEQUOTE_);
}),cljs.core.transient$(cljs.core.vec(tuples_a)),tuples_b));
return (new datascript.query.Relation(attrs_a,tuples_SINGLEQUOTE_,null,null,null));
} else {
var all_attrs = cljs.core.zipmap(cljs.core.keys(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a,attrs_b], 0))),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__56105 = (function (){var G__56107 = (new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null));
var G__56108 = a;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__56107,G__56108) : datascript.query.sum_rel.call(null,G__56107,G__56108));
})();
var G__56106 = b;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__56105,G__56106) : datascript.query.sum_rel.call(null,G__56105,G__56106));

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__56113 = arguments.length;
switch (G__56113) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array((0))], null),null,null,null));
}));

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,t1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,t2){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
}),acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
}));

(datascript.query.prod_rel.cljs$lang$maxFixedArity = 2);

datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57097 = arguments.length;
var i__4790__auto___57098 = (0);
while(true){
if((i__4790__auto___57098 < len__4789__auto___57097)){
args__4795__auto__.push((arguments[i__4790__auto___57098]));

var G__57099 = (i__4790__auto___57098 + (1));
i__4790__auto___57098 = G__57099;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count(xs);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((l / (2)),xs),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((l / (2)),xs));
}));

(datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq56121){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56121));
}));

datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("get-else: nil default value is not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
}

var temp__5737__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5737__auto__ == null)){
return else_val;
} else {
var datom = temp__5737__auto__;
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom);
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57102 = arguments.length;
var i__4790__auto___57103 = (0);
while(true){
if((i__4790__auto___57103 < len__4789__auto___57102)){
args__4795__auto__.push((arguments[i__4790__auto___57103]));

var G__57104 = (i__4790__auto___57103 + (1));
i__4790__auto___57103 = G__57104;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,a){
var temp__5739__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5739__auto__ == null)){
return null;
} else {
var datom = temp__5739__auto__;
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom)], null));
}
}),null,as);
}));

(datascript.query._get_some.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(datascript.query._get_some.cljs$lang$applyTo = (function (seq56129){
var G__56130 = cljs.core.first(seq56129);
var seq56129__$1 = cljs.core.next(seq56129);
var G__56131 = cljs.core.first(seq56129__$1);
var seq56129__$2 = cljs.core.next(seq56129__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56130,G__56131,seq56129__$2);
}));

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity(db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57110 = arguments.length;
var i__4790__auto___57111 = (0);
while(true){
if((i__4790__auto___57111 < len__4789__auto___57110)){
args__4795__auto__.push((arguments[i__4790__auto___57111]));

var G__57112 = (i__4790__auto___57111 + (1));
i__4790__auto___57111 = G__57112;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return b;
} else {
return cljs.core.reduced(b);
}
}),true,args);
}));

(datascript.query.and_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.and_fn.cljs$lang$applyTo = (function (seq56152){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56152));
}));

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57119 = arguments.length;
var i__4790__auto___57120 = (0);
while(true){
if((i__4790__auto___57120 < len__4789__auto___57119)){
args__4795__auto__.push((arguments[i__4790__auto___57120]));

var G__57121 = (i__4790__auto___57120 + (1));
i__4790__auto___57120 = G__57121;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return cljs.core.reduced(b);
} else {
return b;
}
}),null,args);
}));

(datascript.query.or_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.or_fn.cljs$lang$applyTo = (function (seq56174){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56174));
}));

datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"print-str","print-str",-699700354,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"re-seq","re-seq",-2105554076,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol("clojure.string","starts-with?","clojure.string/starts-with?",656256322,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Symbol(null,"println-str","println-str",-2049216703,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"prn-str","prn-str",-145225943,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol("clojure.string","ends-with?","clojure.string/ends-with?",-745964149,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol("clojure.string","includes?","clojure.string/includes?",-1842146260,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol("clojure.string","blank?","clojure.string/blank?",1772874244,null),new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"identical?","identical?",-745864205,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null)],[cljs.core.true_QMARK_,datascript.query.and_fn,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core.print_str,cljs.core._GT_,cljs.core.count,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.not,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core.re_seq,cljs.core._LT__EQ_,clojure.string.starts_with_QMARK_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core.name,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core.rand_int,cljs.core.complement,cljs.core._EQ__EQ_,cljs.core.hash_map,cljs.core.compare,cljs.core.range,cljs.core.max,cljs.core.empty,cljs.core._STAR_,cljs.core.pr_str,cljs.core.println_str,cljs.core.meta,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.prn_str,cljs.core.dec,cljs.core.re_pattern,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core.namespace,cljs.core._,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.rand,cljs.core.re_matches,cljs.core.list,cljs.core.contains_QMARK_,clojure.string.ends_with_QMARK_,cljs.core.subs,cljs.core.mod,clojure.string.includes_QMARK_,cljs.core.array_map,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,clojure.string.blank_QMARK_,cljs.core.not_empty,datascript.query.or_fn,cljs.core.identical_QMARK_,cljs.core.set,cljs.core.re_find]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum(coll) / cljs.core.count(coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(coll);
var size = cljs.core.count(coll);
var med = (size >> (1));
var G__56192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,med);
if(cljs.core.even_QMARK_(size)){
return ((G__56192 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(med - (1)))) / (2));
} else {
return G__56192;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg(coll);
var sum__$1 = sum((function (){var iter__4582__auto__ = (function datascript$query$variance_$_iter__56194(s__56195){
return (new cljs.core.LazySeq(null,(function (){
var s__56195__$1 = s__56195;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56195__$1);
if(temp__5735__auto__){
var s__56195__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56195__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56195__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56197 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56196 = (0);
while(true){
if((i__56196 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56196);
var delta = (x - mean);
cljs.core.chunk_append(b__56197,(delta * delta));

var G__57143 = (i__56196 + (1));
i__56196 = G__57143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56197),datascript$query$variance_$_iter__56194(cljs.core.chunk_rest(s__56195__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56197),null);
}
} else {
var x = cljs.core.first(s__56195__$2);
var delta = (x - mean);
return cljs.core.cons((delta * delta),datascript$query$variance_$_iter__56194(cljs.core.rest(s__56195__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})());
return (sum__$1 / cljs.core.count(coll));
});
var stddev = (function datascript$query$stddev(coll){
return Math.sqrt(variance(coll));
});
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"variance","variance",-1522424942,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"median","median",-2084869638,null),new cljs.core.Symbol(null,"sum","sum",1777518341,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"count-distinct","count-distinct",-1566572514,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"avg","avg",1837937727,null),new cljs.core.Symbol(null,"stddev","stddev",775056588,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"sample","sample",1719555128,null)],[variance,cljs.core.count,median,sum,(function() {
var G__57149 = null;
var G__57149__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__57149__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.last(acc)) < (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__57149 = function(n,coll){
switch(arguments.length){
case 1:
return G__57149__1.call(this,n);
case 2:
return G__57149__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__57149.cljs$core$IFn$_invoke$arity$1 = G__57149__1;
G__57149.cljs$core$IFn$_invoke$arity$2 = G__57149__2;
return G__57149;
})()
,(function() {
var G__57157 = null;
var G__57157__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__57157__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.first(acc)) > (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.next(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__57157 = function(n,coll){
switch(arguments.length){
case 1:
return G__57157__1.call(this,n);
case 2:
return G__57157__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__57157.cljs$core$IFn$_invoke$arity$1 = G__57157__1;
G__57157.cljs$core$IFn$_invoke$arity$2 = G__57157__2;
return G__57157;
})()
,(function (coll){
return cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(coll));
}),cljs.core.set,avg,stddev,(function() {
var G__57180 = null;
var G__57180__1 = (function (coll){
return cljs.core.rand_nth(coll);
});
var G__57180__2 = (function (n,coll){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_nth(coll);
})));
});
G__57180 = function(n,coll){
switch(arguments.length){
case 1:
return G__57180__1.call(this,n);
case 2:
return G__57180__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__57180.cljs$core$IFn$_invoke$arity$1 = G__57180__1;
G__57180.cljs$core$IFn$_invoke$arity$2 = G__57180__2;
return G__57180;
})()
,(function (n,coll){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(rules):rules);
return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datascript.parser.collect_vars_distinct(binding));
return (new datascript.query.Relation(cljs.core.zipmap(vars,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((((!((binding == null)))) && ((!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
var x__4487__auto__ = (((binding == null))?null:binding);
var m__4488__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4488__auto__.call(null,binding,value));
} else {
var m__4485__auto__ = (datascript.query.in__GT_rel["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4485__auto__.call(null,binding,value));
} else {
throw cljs.core.missing_protocol("IBinding.in->rel",binding);
}
}
}
});

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();
}));

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
}));

(datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_(coll)){
return datascript.query.empty_rel(binding__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56219_SHARP_){
return datascript.query.in__GT_rel(binding__$1.binding,p1__56219_SHARP_);
}),coll));

}
}
}));

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if((cljs.core.count(coll) < cljs.core.count(binding__$1.bindings))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not enough elements in a collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to bind tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__56220_SHARP_,p2__56221_SHARP_){
return datascript.query.in__GT_rel(p1__56220_SHARP_,p2__56221_SHARP_);
}),binding__$1.bindings,coll));

}
}
}));
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__56230){
var vec__56231 = p__56230;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56231,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56231,(1),null);
if((((binding instanceof datascript.parser.BindScalar)) && ((binding.variable instanceof datascript.parser.SrcVar)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(context,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.assoc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),value);
} else {
if((((binding instanceof datascript.parser.BindScalar)) && ((binding.variable instanceof datascript.parser.RulesVar)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules(value));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,datascript.query.in__GT_rel(binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_in,context,cljs.core.zipmap(bindings,values));
});
/**
 * List of symbols in current pattern that might potentiall be resolved to refs
 */
datascript.query._STAR_lookup_attrs_STAR_ = null;
/**
 * Default pattern source. Lookup refs, patterns, rules will be resolved with it
 */
datascript.query._STAR_implicit_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(attr) : attrs.call(null,attr));
if(cljs.core.contains_QMARK_(datascript.query._STAR_lookup_attrs_STAR_,attr)){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
} else {
return (function (tuple){
return (tuple[idx]);
});
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count(getters) === (1))){
return cljs.core.first(getters);
} else {
var getters__$1 = cljs.core.to_array(getters);
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters__$1.map((function (p1__56245_SHARP_){
return (p1__56245_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__56245_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__56245_SHARP_.call(null,tuple));
})));
});
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__5737__auto__ = cljs.core.first(tuples__$1);
if((temp__5737__auto__ == null)){
return cljs.core.persistent_BANG_(hash_table);
} else {
var tuple = temp__5737__auto__;
var key = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(tuple) : key_fn.call(null,tuple));
var G__57203 = cljs.core.next(tuples__$1);
var G__57204 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__57203;
hash_table = G__57204;
continue;
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56248_SHARP_){
return datascript.query.getter_fn(attrs1,p1__56248_SHARP_);
}),common_attrs);
var common_gtrs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56249_SHARP_){
return datascript.query.getter_fn(attrs2,p1__56249_SHARP_);
}),common_attrs);
var keep_attrs1 = cljs.core.keys(attrs1);
var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));
var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn(common_gtrs1);
var hash = datascript.query.hash_attrs(key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn(common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple2){
var key = (key_fn2.cljs$core$IFn$_invoke$arity$1 ? key_fn2.cljs$core$IFn$_invoke$arity$1(tuple2) : key_fn2.call(null,tuple2));
var temp__5737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);
if((temp__5737__auto__ == null)){
return acc;
} else {
var tuples1__$1 = temp__5737__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,tuple1){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
}),acc,tuples1__$1);
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples,null,null,null));
});
datascript.query.subtract_rel = (function datascript$query$subtract_rel(a,b){
var map__56261 = a;
var map__56261__$1 = (((((!((map__56261 == null))))?(((((map__56261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56261):map__56261);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56261__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56261__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__56262 = b;
var map__56262__$1 = (((((!((map__56262 == null))))?(((((map__56262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56262):map__56262);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56262__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56262__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = datascript.query.intersect_keys(attrs_a,attrs_b);
var getters_b = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56254_SHARP_){
return datascript.query.getter_fn(attrs_b,p1__56254_SHARP_);
}),attrs);
var key_fn_b = datascript.query.tuple_key_fn(getters_b);
var hash = datascript.query.hash_attrs(key_fn_b,tuples_b);
var getters_a = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56255_SHARP_){
return datascript.query.getter_fn(attrs_a,p1__56255_SHARP_);
}),attrs);
var key_fn_a = datascript.query.tuple_key_fn(getters_a);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv((function (p1__56259_SHARP_){
return ((function (){var G__56267 = (key_fn_a.cljs$core$IFn$_invoke$arity$1 ? key_fn_a.cljs$core$IFn$_invoke$arity$1(p1__56259_SHARP_) : key_fn_a.call(null,p1__56259_SHARP_));
return (hash.cljs$core$IFn$_invoke$arity$1 ? hash.cljs$core$IFn$_invoke$arity$1(G__56267) : hash.call(null,G__56267));
})() == null);
}),tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56269_SHARP_){
if((p1__56269_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__56269_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__56272){
var vec__56273 = p__56272;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56273,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56273,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__4174__auto__ = tuple__$1;
if(cljs.core.truth_(and__4174__auto__)){
return pattern__$1;
} else {
return and__4174__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if((((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))){
var G__57224 = cljs.core.next(tuple__$1);
var G__57225 = cljs.core.next(pattern__$1);
tuple__$1 = G__57224;
pattern__$1 = G__57225;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56280_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__56280_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__56281){
var vec__56282 = p__56281;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56282,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56282,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
return clause;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db(source,pattern);
} else {
return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5737__auto__ = cljs.core.first(rels__$1);
if((temp__5737__auto__ == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
} else {
var rel = temp__5737__auto__;
if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__57233 = cljs.core.next(rels__$1);
var G__57234 = datascript.query.hash_join(rel,new_rel__$1);
var G__57235 = acc;
rels__$1 = G__57233;
new_rel__$1 = G__57234;
acc = G__57235;
continue;
} else {
var G__57236 = cljs.core.next(rels__$1);
var G__57237 = new_rel__$1;
var G__57238 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__57236;
new_rel__$1 = G__57237;
acc = G__57238;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__56312_SHARP_){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__56312_SHARP_),sym)){
return p1__56312_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5739__auto__ = datascript.query.rel_with_attr(context,sym);
if((temp__5739__auto__ == null)){
return null;
} else {
var rel = temp__5739__auto__;
var temp__5739__auto____$1 = cljs.core.first(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5739__auto____$1 == null)){
return null;
} else {
var tuple = temp__5739__auto____$1;
return (tuple[(function (){var fexpr__56327 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__56327.cljs$core$IFn$_invoke$arity$1 ? fexpr__56327.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__56327.call(null,sym));
})()]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some((function (p1__56328_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__56328_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56333_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__56333_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),(function (p1__56334_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__56334_SHARP_);
})),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var n__4666__auto___57247 = len;
var i_57248 = (0);
while(true){
if((i_57248 < n__4666__auto___57247)){
var arg_57249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_57248);
if((arg_57249 instanceof cljs.core.Symbol)){
var temp__5737__auto___57250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_57249);
if((temp__5737__auto___57250 == null)){
(tuples_args[i_57248] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_57249));
} else {
var source_57251 = temp__5737__auto___57250;
(static_args[i_57248] = source_57251);
}
} else {
(static_args[i_57248] = arg_57249);
}

var G__57252 = (i_57248 + (1));
i_57248 = G__57252;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone(static_args);
var n__4666__auto___57253 = len;
var i_57254 = (0);
while(true){
if((i_57254 < n__4666__auto___57253)){
var temp__5739__auto___57255 = (tuples_args[i_57254]);
if((temp__5739__auto___57255 == null)){
} else {
var tuple_idx_57256 = temp__5739__auto___57255;
var v_57257 = (tuple[tuple_idx_57256]);
(args__$1[i_57254] = v_57257);
}

var G__57259 = (i_57254 + (1));
i_57254 = G__57259;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});
} else {
return (function (tuple){
var n__4666__auto___57260 = len;
var i_57261 = (0);
while(true){
if((i_57261 < n__4666__auto___57260)){
var temp__5739__auto___57262 = (tuples_args[i_57261]);
if((temp__5739__auto___57262 == null)){
} else {
var tuple_idx_57263 = temp__5739__auto___57262;
var v_57264 = (tuple[tuple_idx_57263]);
(static_args[i_57261] = v_57264);
}

var G__57265 = (i_57261 + (1));
i_57261 = G__57265;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,static_args);
});
}
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__56354 = clause;
var vec__56357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56354,(0),null);
var seq__56358 = cljs.core.seq(vec__56357);
var first__56359 = cljs.core.first(seq__56358);
var seq__56358__$1 = cljs.core.next(seq__56358);
var f = first__56359;
var args = seq__56358__$1;
var pred = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown predicate '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__56360 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56360,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56360,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),(function (p1__56353_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__56353_SHARP_);
}));
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__56379 = clause;
var vec__56382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56379,(0),null);
var seq__56383 = cljs.core.seq(vec__56382);
var first__56384 = cljs.core.first(seq__56383);
var seq__56383__$1 = cljs.core.next(seq__56383);
var f = first__56384;
var args = seq__56383__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56379,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown function '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__56385 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56385,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56385,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__4582__auto__ = (function datascript$query$bind_by_fn_$_iter__56390(s__56391){
return (new cljs.core.LazySeq(null,(function (){
var s__56391__$1 = s__56391;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56391__$1);
if(temp__5735__auto__){
var s__56391__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56391__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56391__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56393 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56392 = (0);
while(true){
if((i__56392 < size__4581__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56392);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if((!((val == null)))){
cljs.core.chunk_append(b__56393,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__57278 = (i__56392 + (1));
i__56392 = G__57278;
continue;
} else {
var G__57279 = (i__56392 + (1));
i__56392 = G__57279;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56393),datascript$query$bind_by_fn_$_iter__56390(cljs.core.chunk_rest(s__56391__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56393),null);
}
} else {
var tuple = cljs.core.first(s__56391__$2);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if((!((val == null)))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__56390(cljs.core.rest(s__56391__$2)));
} else {
var G__57288 = cljs.core.rest(s__56391__$2);
s__56391__$1 = G__57288;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_(rels)){
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(production,datascript.query.empty_rel(binding));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel(binding)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
return ((cljs.core.sequential_QMARK_(clause)) && (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),((datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause)))));
});
datascript.query.rule_seqid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__56410 = clause;
var seq__56411 = cljs.core.seq(vec__56410);
var first__56412 = cljs.core.first(seq__56411);
var seq__56411__$1 = cljs.core.next(seq__56411);
var rule = first__56412;
var call_args = seq__56411__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__4582__auto__ = (function datascript$query$expand_rule_$_iter__56419(s__56420){
return (new cljs.core.LazySeq(null,(function (){
var s__56420__$1 = s__56420;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56420__$1);
if(temp__5735__auto__){
var s__56420__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56420__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56420__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56422 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56421 = (0);
while(true){
if((i__56421 < size__4581__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56421);
var vec__56437 = branch;
var seq__56438 = cljs.core.seq(vec__56437);
var first__56439 = cljs.core.first(seq__56438);
var seq__56438__$1 = cljs.core.next(seq__56438);
var vec__56440 = first__56439;
var seq__56441 = cljs.core.seq(vec__56440);
var first__56442 = cljs.core.first(seq__56441);
var seq__56441__$1 = cljs.core.next(seq__56441);
var _ = first__56442;
var rule_args = seq__56441__$1;
var clauses = seq__56438__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__56422,clojure.walk.postwalk(((function (i__56421,vec__56437,seq__56438,first__56439,seq__56438__$1,vec__56440,seq__56441,first__56442,seq__56441__$1,_,rule_args,clauses,replacements,branch,c__4580__auto__,size__4581__auto__,b__56422,s__56420__$2,temp__5735__auto__,vec__56410,seq__56411,first__56412,seq__56411__$1,rule,call_args,seqid,branches){
return (function (p1__56399_SHARP_){
if(datascript.query.free_var_QMARK_(p1__56399_SHARP_)){
var x__51070__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__56399_SHARP_) : replacements.call(null,p1__56399_SHARP_));
if((x__51070__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__56399_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__51070__auto__;
}
} else {
return p1__56399_SHARP_;
}
});})(i__56421,vec__56437,seq__56438,first__56439,seq__56438__$1,vec__56440,seq__56441,first__56442,seq__56441__$1,_,rule_args,clauses,replacements,branch,c__4580__auto__,size__4581__auto__,b__56422,s__56420__$2,temp__5735__auto__,vec__56410,seq__56411,first__56412,seq__56411__$1,rule,call_args,seqid,branches))
,clauses));

var G__57302 = (i__56421 + (1));
i__56421 = G__57302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56422),datascript$query$expand_rule_$_iter__56419(cljs.core.chunk_rest(s__56420__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56422),null);
}
} else {
var branch = cljs.core.first(s__56420__$2);
var vec__56464 = branch;
var seq__56465 = cljs.core.seq(vec__56464);
var first__56466 = cljs.core.first(seq__56465);
var seq__56465__$1 = cljs.core.next(seq__56465);
var vec__56467 = first__56466;
var seq__56468 = cljs.core.seq(vec__56467);
var first__56469 = cljs.core.first(seq__56468);
var seq__56468__$1 = cljs.core.next(seq__56468);
var _ = first__56469;
var rule_args = seq__56468__$1;
var clauses = seq__56465__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__56464,seq__56465,first__56466,seq__56465__$1,vec__56467,seq__56468,first__56469,seq__56468__$1,_,rule_args,clauses,replacements,branch,s__56420__$2,temp__5735__auto__,vec__56410,seq__56411,first__56412,seq__56411__$1,rule,call_args,seqid,branches){
return (function (p1__56399_SHARP_){
if(datascript.query.free_var_QMARK_(p1__56399_SHARP_)){
var x__51070__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__56399_SHARP_) : replacements.call(null,p1__56399_SHARP_));
if((x__51070__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__56399_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__51070__auto__;
}
} else {
return p1__56399_SHARP_;
}
});})(vec__56464,seq__56465,first__56466,seq__56465__$1,vec__56467,seq__56468,first__56469,seq__56468__$1,_,rule_args,clauses,replacements,branch,s__56420__$2,temp__5735__auto__,vec__56410,seq__56411,first__56412,seq__56411__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__56419(cljs.core.rest(s__56420__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__56479){
var vec__56480 = p__56479;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56480,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56480,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__56489 = rule_clause;
var seq__56490 = cljs.core.seq(vec__56489);
var first__56491 = cljs.core.first(seq__56490);
var seq__56490__$1 = cljs.core.next(seq__56490);
var rule = first__56491;
var call_args = seq__56490__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__4582__auto__ = (function datascript$query$rule_gen_guards_$_iter__56492(s__56493){
return (new cljs.core.LazySeq(null,(function (){
var s__56493__$1 = s__56493;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56493__$1);
if(temp__5735__auto__){
var s__56493__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56493__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56493__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56495 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56494 = (0);
while(true){
if((i__56494 < size__4581__auto__)){
var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56494);
var vec__56500 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56500,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56500,(1),null);
cljs.core.chunk_append(b__56495,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__57307 = (i__56494 + (1));
i__56494 = G__57307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56495),datascript$query$rule_gen_guards_$_iter__56492(cljs.core.chunk_rest(s__56493__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56495),null);
}
} else {
var prev_args = cljs.core.first(s__56493__$2);
var vec__56511 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56511,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56511,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__56492(cljs.core.rest(s__56493__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (p1__56518_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__56518_SHARP_) : pred.call(null,p1__56518_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__56518_SHARP_);
} else {
}

return p1__56518_SHARP_;
}),form);

return cljs.core.deref(res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set(datascript.query.walk_collect(clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars(clauses);
var pred = (function (p__56539){
var vec__56540 = p__56539;
var vec__56543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56540,(0),null);
var seq__56544 = cljs.core.seq(vec__56543);
var first__56545 = cljs.core.first(seq__56544);
var seq__56544__$1 = cljs.core.next(seq__56544);
var _ = first__56545;
var vars = seq__56544__$1;
return cljs.core.every_QMARK_(bound_vars,vars);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var solve = (function (prefix_context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});
var empty_rels_QMARK_ = (function (context__$1){
return cljs.core.some((function (p1__56546_SHARP_){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__56546_SHARP_));
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});
var stack = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5737__auto__ = cljs.core.first(stack);
if((temp__5737__auto__ == null)){
return rel;
} else {
var frame = temp__5737__auto__;
var vec__56577 = cljs.core.split_with(((function (stack,rel,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__56547_SHARP_){
return (!(datascript.query.rule_QMARK_(context,p1__56547_SHARP_)));
});})(stack,rel,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56577,(0),null);
var vec__56580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56577,(1),null);
var seq__56581 = cljs.core.seq(vec__56580);
var first__56582 = cljs.core.first(seq__56581);
var seq__56581__$1 = cljs.core.next(seq__56581);
var rule_clause = first__56582;
var next_clauses = seq__56581__$1;
if((rule_clause == null)){
var context__$1 = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__57314 = cljs.core.next(stack);
var G__57315 = datascript.query.sum_rel(rel,new_rel);
stack = G__57314;
rel = G__57315;
continue;
} else {
var vec__56586 = rule_clause;
var seq__56587 = cljs.core.seq(vec__56586);
var first__56588 = cljs.core.first(seq__56587);
var seq__56587__$1 = cljs.core.next(seq__56587);
var rule = first__56588;
var call_args = seq__56587__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__56589 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56589,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56589,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__56586,seq__56587,first__56588,seq__56587__$1,rule,call_args,guards,vec__56589,active_gs,pending_gs,vec__56577,clauses,vec__56580,seq__56581,first__56582,seq__56581__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__56548_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56548_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__56586,seq__56587,first__56588,seq__56587__$1,rule,call_args,guards,vec__56589,active_gs,pending_gs,vec__56577,clauses,vec__56580,seq__56581,first__56582,seq__56581__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__57330 = cljs.core.next(stack);
var G__57331 = rel;
stack = G__57330;
rel = G__57331;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__57333 = cljs.core.next(stack);
var G__57334 = rel;
stack = G__57333;
rel = G__57334;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__57337 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4582__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__56586,seq__56587,first__56588,seq__56587__$1,rule,call_args,guards,vec__56589,active_gs,pending_gs,vec__56577,clauses,vec__56580,seq__56581,first__56582,seq__56581__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__56593(s__56594){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__56586,seq__56587,first__56588,seq__56587__$1,rule,call_args,guards,vec__56589,active_gs,pending_gs,vec__56577,clauses,vec__56580,seq__56581,first__56582,seq__56581__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__56594__$1 = s__56594;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56594__$1);
if(temp__5735__auto__){
var s__56594__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56594__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56594__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56596 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56595 = (0);
while(true){
if((i__56595 < size__4581__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56595);
cljs.core.chunk_append(b__56596,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__57363 = (i__56595 + (1));
i__56595 = G__57363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56596),datascript$query$solve_rule_$_iter__56593(cljs.core.chunk_rest(s__56594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56596),null);
}
} else {
var branch = cljs.core.first(s__56594__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__56593(cljs.core.rest(s__56594__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__56586,seq__56587,first__56588,seq__56587__$1,rule,call_args,guards,vec__56589,active_gs,pending_gs,vec__56577,clauses,vec__56580,seq__56581,first__56582,seq__56581__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__56586,seq__56587,first__56588,seq__56587__$1,rule,call_args,guards,vec__56589,active_gs,pending_gs,vec__56577,clauses,vec__56580,seq__56581,first__56582,seq__56581__$1,rule_clause,next_clauses,frame,temp__5737__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__4582__auto__(branches);
})(),cljs.core.next(stack));
var G__57338 = rel;
stack = G__57337;
rel = G__57338;
continue;
}
}
}
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source))){
var vec__56639 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56639,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56639,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56639,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56639,(3),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4185__auto__ = datascript.query.lookup_ref_QMARK_(e);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return datascript.query.attr_QMARK_(e);
}
})())?datascript.db.entid_strict(source,e):e),a,(cljs.core.truth_((function (){var and__4174__auto__ = v;
if(cljs.core.truth_(and__4174__auto__)){
if(datascript.query.attr_QMARK_(a)){
if(datascript.db.ref_QMARK_(source,a)){
var or__4185__auto__ = datascript.query.lookup_ref_QMARK_(v);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return datascript.query.attr_QMARK_(v);
}
} else {
return false;
}
} else {
return false;
}
} else {
return and__4174__auto__;
}
})())?datascript.db.entid_strict(source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx)], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__56642 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56642,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56642,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56642,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56642,(3),null);
var G__56645 = cljs.core.PersistentHashSet.EMPTY;
var G__56645__$1 = ((datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56645,e):G__56645);
var G__56645__$2 = ((datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56645__$1,tx):G__56645__$1);
if(((datascript.query.free_var_QMARK_(v)) && ((!(datascript.query.free_var_QMARK_(a)))) && (datascript.db.ref_QMARK_(source,a)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56645__$2,v);
} else {
return G__56645__$2;
}
});
datascript.query.limit_rel = (function datascript$query$limit_rel(rel,vars){
var temp__5739__auto__ = cljs.core.not_empty(cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),vars));
if((temp__5739__auto__ == null)){
return null;
} else {
var attrs_SINGLEQUOTE_ = temp__5739__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rel,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs_SINGLEQUOTE_);
}
});
datascript.query.limit_context = (function datascript$query$limit_context(context,vars){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__56646_SHARP_){
return datascript.query.limit_rel(p1__56646_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.check_bound = (function datascript$query$check_bound(context,vars,form){
var bound = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__56647_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__56647_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)], 0)));
if(clojure.set.subset_QMARK_(vars,bound)){
return null;
} else {
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(vars),bound);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing], null));
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(var_args){
var G__56654 = arguments.length;
switch (G__56654) {
case 2:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2 = (function (context,clause){
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,clause,clause);
}));

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3 = (function (context,clause,orig_clause){
while(true){
var pred__56659 = datascript.query.looks_like_QMARK_;
var expr__56660 = clause;
if(cljs.core.truth_((function (){var G__56663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);
var G__56664 = expr__56660;
return (pred__56659.cljs$core$IFn$_invoke$arity$2 ? pred__56659.cljs$core$IFn$_invoke$arity$2(G__56663,G__56664) : pred__56659.call(null,G__56663,G__56664));
})())){
return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__56665 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
var G__56666 = expr__56660;
return (pred__56659.cljs$core$IFn$_invoke$arity$2 ? pred__56659.cljs$core$IFn$_invoke$arity$2(G__56665,G__56666) : pred__56659.call(null,G__56665,G__56666));
})())){
return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__56668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__56669 = expr__56660;
return (pred__56659.cljs$core$IFn$_invoke$arity$2 ? pred__56659.cljs$core$IFn$_invoke$arity$2(G__56668,G__56669) : pred__56659.call(null,G__56668,G__56669));
})())){
var vec__56670 = clause;
var seq__56671 = cljs.core.seq(vec__56670);
var first__56672 = cljs.core.first(seq__56671);
var seq__56671__$1 = cljs.core.next(seq__56671);
var source_sym = first__56672;
var rest = seq__56671__$1;
var _STAR_implicit_source_STAR__orig_val__56673 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__56674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__56674);

try{return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,rest,clause);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__56673);
}} else {
if(cljs.core.truth_((function (){var G__56675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__56676 = expr__56660;
return (pred__56659.cljs$core$IFn$_invoke$arity$2 ? pred__56659.cljs$core$IFn$_invoke$arity$2(G__56675,G__56676) : pred__56659.call(null,G__56675,G__56676));
})())){
var vec__56677 = clause;
var seq__56678 = cljs.core.seq(vec__56677);
var first__56679 = cljs.core.first(seq__56678);
var seq__56678__$1 = cljs.core.next(seq__56678);
var _ = first__56679;
var branches = seq__56678__$1;
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__56677,seq__56678,first__56679,seq__56678__$1,_,branches,pred__56659,expr__56660){
return (function (p1__56648_SHARP_){
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(context,p1__56648_SHARP_) : datascript.query.resolve_clause.call(null,context,p1__56648_SHARP_));
});})(context,clause,orig_clause,vec__56677,seq__56678,first__56679,seq__56678__$1,_,branches,pred__56659,expr__56660))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__56677,seq__56678,first__56679,seq__56678__$1,_,branches,contexts,pred__56659,expr__56660){
return (function (p1__56649_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__56649_SHARP_));
});})(context,clause,orig_clause,vec__56677,seq__56678,first__56679,seq__56678__$1,_,branches,contexts,pred__56659,expr__56660))
,contexts);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_((function (){var G__56680 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__56681 = expr__56660;
return (pred__56659.cljs$core$IFn$_invoke$arity$2 ? pred__56659.cljs$core$IFn$_invoke$arity$2(G__56680,G__56681) : pred__56659.call(null,G__56680,G__56681));
})())){
var vec__56684 = clause;
var seq__56685 = cljs.core.seq(vec__56684);
var first__56686 = cljs.core.first(seq__56685);
var seq__56685__$1 = cljs.core.next(seq__56685);
var _ = first__56686;
var first__56686__$1 = cljs.core.first(seq__56685__$1);
var seq__56685__$2 = cljs.core.next(seq__56685__$1);
var vec__56687 = first__56686__$1;
var seq__56688 = cljs.core.seq(vec__56687);
var first__56689 = cljs.core.first(seq__56688);
var seq__56688__$1 = cljs.core.next(seq__56688);
var req_vars = first__56689;
var vars = seq__56688__$1;
var branches = seq__56685__$2;
datascript.query.check_bound(context,req_vars,orig_clause);

var G__57390 = context;
var G__57391 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_vars,vars),branches);
var G__57392 = clause;
context = G__57390;
clause = G__57391;
orig_clause = G__57392;
continue;
} else {
if(cljs.core.truth_((function (){var G__56692 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__56693 = expr__56660;
return (pred__56659.cljs$core$IFn$_invoke$arity$2 ? pred__56659.cljs$core$IFn$_invoke$arity$2(G__56692,G__56693) : pred__56659.call(null,G__56692,G__56693));
})())){
var vec__56695 = clause;
var seq__56696 = cljs.core.seq(vec__56695);
var first__56697 = cljs.core.first(seq__56696);
var seq__56696__$1 = cljs.core.next(seq__56696);
var _ = first__56697;
var first__56697__$1 = cljs.core.first(seq__56696__$1);
var seq__56696__$2 = cljs.core.next(seq__56696__$1);
var vars = first__56697__$1;
var branches = seq__56696__$2;
var vars__$1 = cljs.core.set(vars);
var join_context = datascript.query.limit_context(context,vars__$1);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__56695,seq__56696,first__56697,seq__56696__$1,_,first__56697__$1,seq__56696__$2,vars,branches,vars__$1,join_context,pred__56659,expr__56660){
return (function (p1__56650_SHARP_){
return datascript.query.limit_context((datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(join_context,p1__56650_SHARP_) : datascript.query.resolve_clause.call(null,join_context,p1__56650_SHARP_)),vars__$1);
});})(context,clause,orig_clause,vec__56695,seq__56696,first__56697,seq__56696__$1,_,first__56697__$1,seq__56696__$2,vars,branches,vars__$1,join_context,pred__56659,expr__56660))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__56695,seq__56696,first__56697,seq__56696__$1,_,first__56697__$1,seq__56696__$2,vars,branches,vars__$1,join_context,contexts,pred__56659,expr__56660){
return (function (p1__56651_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__56651_SHARP_));
});})(context,clause,orig_clause,vec__56695,seq__56696,first__56697,seq__56696__$1,_,first__56697__$1,seq__56696__$2,vars,branches,vars__$1,join_context,contexts,pred__56659,expr__56660))
,contexts);
var sum_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_((function (){var G__56700 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__56701 = expr__56660;
return (pred__56659.cljs$core$IFn$_invoke$arity$2 ? pred__56659.cljs$core$IFn$_invoke$arity$2(G__56700,G__56701) : pred__56659.call(null,G__56700,G__56701));
})())){
var vec__56702 = clause;
var seq__56703 = cljs.core.seq(vec__56702);
var first__56704 = cljs.core.first(seq__56703);
var seq__56703__$1 = cljs.core.next(seq__56703);
var _ = first__56704;
var clauses = seq__56703__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_((function (){var G__56705 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__56706 = expr__56660;
return (pred__56659.cljs$core$IFn$_invoke$arity$2 ? pred__56659.cljs$core$IFn$_invoke$arity$2(G__56705,G__56706) : pred__56659.call(null,G__56705,G__56706));
})())){
var vec__56707 = clause;
var seq__56708 = cljs.core.seq(vec__56707);
var first__56709 = cljs.core.first(seq__56708);
var seq__56708__$1 = cljs.core.next(seq__56708);
var _ = first__56709;
var clauses = seq__56708__$1;
var bound_vars = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (context,clause,orig_clause,vec__56707,seq__56708,first__56709,seq__56708__$1,_,clauses,pred__56659,expr__56660){
return (function (p1__56652_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__56652_SHARP_));
});})(context,clause,orig_clause,vec__56707,seq__56708,first__56709,seq__56708__$1,_,clauses,pred__56659,expr__56660))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)], 0)));
var negation_vars = datascript.query.collect_vars(clauses);
var ___$1 = ((cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(bound_vars,negation_vars)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: none of ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([negation_vars], 0))," is bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orig_clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__56710 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__56711 = expr__56660;
return (pred__56659.cljs$core$IFn$_invoke$arity$2 ? pred__56659.cljs$core$IFn$_invoke$arity$2(G__56710,G__56711) : pred__56659.call(null,G__56710,G__56711));
})())){
var vec__56714 = clause;
var seq__56715 = cljs.core.seq(vec__56714);
var first__56716 = cljs.core.first(seq__56715);
var seq__56715__$1 = cljs.core.next(seq__56715);
var _ = first__56716;
var first__56716__$1 = cljs.core.first(seq__56715__$1);
var seq__56715__$2 = cljs.core.next(seq__56715__$1);
var vars = first__56716__$1;
var clauses = seq__56715__$2;
var ___$1 = datascript.query.check_bound(context,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context(context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__56718 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__56719 = expr__56660;
return (pred__56659.cljs$core$IFn$_invoke$arity$2 ? pred__56659.cljs$core$IFn$_invoke$arity$2(G__56718,G__56719) : pred__56659.call(null,G__56718,G__56719));
})())){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs(source,clause);
var relation = datascript.query.lookup_pattern(source,pattern);
var _STAR_lookup_attrs_STAR__orig_val__56723 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__56724 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs(source,pattern):datascript.query._STAR_lookup_attrs_STAR_);
(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__56724);

try{return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__56723);
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__56660)].join('')));
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
break;
}
}));

(datascript.query._resolve_clause.cljs$lang$maxFixedArity = 3);

datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(datascript.query.rule_QMARK_(context,clause)){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
var _STAR_implicit_source_STAR__orig_val__56730 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__56731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first(clause));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__56731);

try{var G__56732 = context;
var G__56733 = cljs.core.next(clause);
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(G__56732,G__56733) : datascript.query.resolve_clause.call(null,G__56732,G__56733));
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__56730);
}} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule(context,clause));
}
} else {
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__56739 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__56740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__56740);

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__56739);
}});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__56745 = arguments.length;
switch (G__56745) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array(cljs.core.count(symbols))], null),rels,symbols);
}));

(datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__5737__auto__ = cljs.core.first(rels);
if((temp__5737__auto__ == null)){
return acc;
} else {
var rel = temp__5737__auto__;
var keep_attrs = cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_(keep_attrs)){
var G__57416 = acc;
var G__57417 = cljs.core.next(rels);
var G__57418 = symbols;
acc = G__57416;
rels = G__57417;
symbols = G__57418;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__5737__auto__){
return (function (p1__56741_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__56741_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__5737__auto__))
,symbols));
var len = cljs.core.count(symbols);
var G__57419 = (function (){var iter__4582__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function datascript$query$iter__56761(s__56762){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function (){
var s__56762__$1 = s__56762;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56762__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var t1 = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__56762__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function datascript$query$iter__56761_$_iter__56763(s__56764){
return (new cljs.core.LazySeq(null,((function (s__56762__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__){
return (function (){
var s__56764__$1 = s__56764;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__56764__$1);
if(temp__5735__auto____$1){
var s__56764__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56764__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56764__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56766 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56765 = (0);
while(true){
if((i__56765 < size__4581__auto__)){
var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56765);
cljs.core.chunk_append(b__56766,(function (){var res = cljs.core.aclone(t1);
var n__4666__auto___57424 = len;
var i_57425 = (0);
while(true){
if((i_57425 < n__4666__auto___57424)){
var temp__5739__auto___57426 = (copy_map[i_57425]);
if((temp__5739__auto___57426 == null)){
} else {
var idx_57427 = temp__5739__auto___57426;
(res[i_57425] = (t2[idx_57427]));
}

var G__57429 = (i_57425 + (1));
i_57425 = G__57429;
continue;
} else {
}
break;
}

return res;
})());

var G__57430 = (i__56765 + (1));
i__56765 = G__57430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56766),datascript$query$iter__56761_$_iter__56763(cljs.core.chunk_rest(s__56764__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56766),null);
}
} else {
var t2 = cljs.core.first(s__56764__$2);
return cljs.core.cons((function (){var res = cljs.core.aclone(t1);
var n__4666__auto___57431 = len;
var i_57432 = (0);
while(true){
if((i_57432 < n__4666__auto___57431)){
var temp__5739__auto___57433 = (copy_map[i_57432]);
if((temp__5739__auto___57433 == null)){
} else {
var idx_57434 = temp__5739__auto___57433;
(res[i_57432] = (t2[idx_57434]));
}

var G__57435 = (i_57432 + (1));
i_57432 = G__57435;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__56761_$_iter__56763(cljs.core.rest(s__56764__$2)));
}
} else {
return null;
}
break;
}
});})(s__56762__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__))
,null,null));
});})(s__56762__$1,acc,rels,symbols,t1,xs__6292__auto__,temp__5735__auto__,copy_map,len,keep_attrs,rel,temp__5737__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,datascript$query$iter__56761(cljs.core.rest(s__56762__$1)));
} else {
var G__57436 = cljs.core.rest(s__56762__$1);
s__56762__$1 = G__57436;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5737__auto__))
;
return iter__4582__auto__(acc);
})();
var G__57420 = cljs.core.next(rels);
var G__57421 = symbols;
acc = G__57419;
rels = G__57420;
symbols = G__57421;
continue;
}
}
break;
}
}));

(datascript.query._collect.cljs$lang$maxFixedArity = 3);

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((((!((var$ == null)))) && ((!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
var x__4487__auto__ = (((var$ == null))?null:var$);
var m__4488__auto__ = (datascript.query._context_resolve[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4488__auto__.call(null,var$,context));
} else {
var m__4485__auto__ = (datascript.query._context_resolve["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4485__auto__.call(null,var$,context));
} else {
throw cljs.core.missing_protocol("IContextResolve.-context-resolve",var$);
}
}
}
});

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val(context,var$__$1.symbol);
}));

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
}));

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return datascript.query.resolve_sym(var$__$1.symbol);
}
}));

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
}));
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (element,fixed_value,i){
if(datascript.parser.aggregate_QMARK_(element)){
var f = datascript.query._context_resolve(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56797_SHARP_){
return datascript.query._context_resolve(p1__56797_SHARP_,context);
}),cljs.core.butlast(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56798_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__56798_SHARP_,i);
}),tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__56803_SHARP_,p2__56804_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__56803_SHARP_) : pred.call(null,p1__56803_SHARP_)))){
return p2__56804_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56810_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__56810_SHARP_);
}),group_idxs);
});
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__4582__auto__ = (function datascript$query$aggregate_$_iter__56815(s__56816){
return (new cljs.core.LazySeq(null,(function (){
var s__56816__$1 = s__56816;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56816__$1);
if(temp__5735__auto__){
var s__56816__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56816__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56816__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56818 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56817 = (0);
while(true){
if((i__56817 < size__4581__auto__)){
var vec__56830 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56817);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56830,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56830,(1),null);
cljs.core.chunk_append(b__56818,datascript.query._aggregate(find_elements,context,tuples));

var G__57454 = (i__56817 + (1));
i__56817 = G__57454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56818),datascript$query$aggregate_$_iter__56815(cljs.core.chunk_rest(s__56816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56818),null);
}
} else {
var vec__56839 = cljs.core.first(s__56816__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56839,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56839,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__56815(cljs.core.rest(s__56816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(grouped);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

datascript.query._post_process = (function datascript$query$_post_process(find,tuples){
if((((!((find == null)))) && ((!((find.datascript$query$IPostProcess$_post_process$arity$2 == null)))))){
return find.datascript$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__4487__auto__ = (((find == null))?null:find);
var m__4488__auto__ = (datascript.query._post_process[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__4488__auto__.call(null,find,tuples));
} else {
var m__4485__auto__ = (datascript.query._post_process["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__4485__auto__.call(null,find,tuples));
} else {
throw cljs.core.missing_protocol("IPostProcess.-post-process",find);
}
}
}
});

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return tuples;
}));

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),tuples);
}));

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.ffirst(tuples);
}));

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.first(tuples);
}));
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__4582__auto__ = (function datascript$query$pull_$_iter__56866(s__56867){
return (new cljs.core.LazySeq(null,(function (){
var s__56867__$1 = s__56867;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56867__$1);
if(temp__5735__auto__){
var s__56867__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56867__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56867__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56869 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56868 = (0);
while(true){
if((i__56868 < size__4581__auto__)){
var find = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56868);
cljs.core.chunk_append(b__56869,((datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__57461 = (i__56868 + (1));
i__56868 = G__57461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56869),datascript$query$pull_$_iter__56866(cljs.core.chunk_rest(s__56867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56869),null);
}
} else {
var find = cljs.core.first(s__56867__$2);
return cljs.core.cons(((datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__56866(cljs.core.rest(s__56867__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(find_elements);
})();
var iter__4582__auto__ = (function datascript$query$pull_$_iter__56875(s__56876){
return (new cljs.core.LazySeq(null,(function (){
var s__56876__$1 = s__56876;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__56876__$1);
if(temp__5735__auto__){
var s__56876__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56876__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__56876__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__56878 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__56877 = (0);
while(true){
if((i__56877 < size__4581__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__56877);
cljs.core.chunk_append(b__56878,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__56877,tuple,c__4580__auto__,size__4581__auto__,b__56878,s__56876__$2,temp__5735__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__56881 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56881,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56881,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__56877,tuple,c__4580__auto__,size__4581__auto__,b__56878,s__56876__$2,temp__5735__auto__,resolved))
,resolved,tuple));

var G__57465 = (i__56877 + (1));
i__56877 = G__57465;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56878),datascript$query$pull_$_iter__56875(cljs.core.chunk_rest(s__56876__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56878),null);
}
} else {
var tuple = cljs.core.first(s__56876__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__56876__$2,temp__5735__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__56889 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56889,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56889,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__56876__$2,temp__5735__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__56875(cljs.core.rest(s__56876__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_(datascript.lru.lru((100)));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__5737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(datascript.query.query_cache),q,null);
if((temp__5737__auto__ == null)){
var qp = datascript.parser.parse_query(q);
datascript.query.query_cache.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(datascript.query.query_cache.cljs$core$IDeref$_deref$arity$1(null),q,qp));

return qp;
} else {
var cached = temp__5737__auto__;
return cached;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57470 = arguments.length;
var i__4790__auto___57471 = (0);
while(true){
if((i__4790__auto___57471 < len__4789__auto___57470)){
args__4795__auto__.push((arguments[i__4790__auto___57471]));

var G__57472 = (i__4790__auto___57471 + (1));
i__4790__auto___57471 = G__57472;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query(q);
var find = new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__56912 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__56912);
} else {
return G__56912;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__56915 = resultset;
var G__56915__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56896_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__56896_SHARP_,(0),result_arity));
}),G__56915):G__56915);
var G__56915__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__56915__$1):G__56915__$1);
var G__56915__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__56915__$2):G__56915__$2);
return datascript.query._post_process(find,G__56915__$3);

}));

(datascript.query.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(datascript.query.q.cljs$lang$applyTo = (function (seq56897){
var G__56899 = cljs.core.first(seq56897);
var seq56897__$1 = cljs.core.next(seq56897);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56899,seq56897__$1);
}));


//# sourceMappingURL=datascript.query.js.map
