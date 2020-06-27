goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34332 = arguments.length;
switch (G__34332) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34333 = (function (f,blockable,meta34334){
this.f = f;
this.blockable = blockable;
this.meta34334 = meta34334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34335,meta34334__$1){
var self__ = this;
var _34335__$1 = this;
return (new cljs.core.async.t_cljs$core$async34333(self__.f,self__.blockable,meta34334__$1));
}));

(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34335){
var self__ = this;
var _34335__$1 = this;
return self__.meta34334;
}));

(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34334","meta34334",-578887715,null)], null);
}));

(cljs.core.async.t_cljs$core$async34333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34333");

(cljs.core.async.t_cljs$core$async34333.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34333.
 */
cljs.core.async.__GT_t_cljs$core$async34333 = (function cljs$core$async$__GT_t_cljs$core$async34333(f__$1,blockable__$1,meta34334){
return (new cljs.core.async.t_cljs$core$async34333(f__$1,blockable__$1,meta34334));
});

}

return (new cljs.core.async.t_cljs$core$async34333(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34340 = arguments.length;
switch (G__34340) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34342 = arguments.length;
switch (G__34342) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34344 = arguments.length;
switch (G__34344) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36779 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36779) : fn1.call(null,val_36779));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36779) : fn1.call(null,val_36779));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34346 = arguments.length;
switch (G__34346) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___36785 = n;
var x_36786 = (0);
while(true){
if((x_36786 < n__4666__auto___36785)){
(a[x_36786] = x_36786);

var G__36787 = (x_36786 + (1));
x_36786 = G__36787;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34347 = (function (flag,meta34348){
this.flag = flag;
this.meta34348 = meta34348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34349,meta34348__$1){
var self__ = this;
var _34349__$1 = this;
return (new cljs.core.async.t_cljs$core$async34347(self__.flag,meta34348__$1));
}));

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34349){
var self__ = this;
var _34349__$1 = this;
return self__.meta34348;
}));

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34348","meta34348",2664160,null)], null);
}));

(cljs.core.async.t_cljs$core$async34347.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34347");

(cljs.core.async.t_cljs$core$async34347.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34347");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34347.
 */
cljs.core.async.__GT_t_cljs$core$async34347 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34347(flag__$1,meta34348){
return (new cljs.core.async.t_cljs$core$async34347(flag__$1,meta34348));
});

}

return (new cljs.core.async.t_cljs$core$async34347(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34351 = (function (flag,cb,meta34352){
this.flag = flag;
this.cb = cb;
this.meta34352 = meta34352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34353,meta34352__$1){
var self__ = this;
var _34353__$1 = this;
return (new cljs.core.async.t_cljs$core$async34351(self__.flag,self__.cb,meta34352__$1));
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34353){
var self__ = this;
var _34353__$1 = this;
return self__.meta34352;
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34352","meta34352",58586617,null)], null);
}));

(cljs.core.async.t_cljs$core$async34351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34351");

(cljs.core.async.t_cljs$core$async34351.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34351.
 */
cljs.core.async.__GT_t_cljs$core$async34351 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34351(flag__$1,cb__$1,meta34352){
return (new cljs.core.async.t_cljs$core$async34351(flag__$1,cb__$1,meta34352));
});

}

return (new cljs.core.async.t_cljs$core$async34351(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34361_SHARP_){
var G__34364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34361_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34364) : fret.call(null,G__34364));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34363_SHARP_){
var G__34365 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34363_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34365) : fret.call(null,G__34365));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36796 = (i + (1));
i = G__36796;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36798 = arguments.length;
var i__4790__auto___36799 = (0);
while(true){
if((i__4790__auto___36799 < len__4789__auto___36798)){
args__4795__auto__.push((arguments[i__4790__auto___36799]));

var G__36800 = (i__4790__auto___36799 + (1));
i__4790__auto___36799 = G__36800;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34368){
var map__34369 = p__34368;
var map__34369__$1 = (((((!((map__34369 == null))))?(((((map__34369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34369):map__34369);
var opts = map__34369__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34366){
var G__34367 = cljs.core.first(seq34366);
var seq34366__$1 = cljs.core.next(seq34366);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34367,seq34366__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34378 = arguments.length;
switch (G__34378) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34274__auto___36805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34411){
var state_val_34412 = (state_34411[(1)]);
if((state_val_34412 === (7))){
var inst_34407 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34419_36807 = state_34411__$1;
(statearr_34419_36807[(2)] = inst_34407);

(statearr_34419_36807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (1))){
var state_34411__$1 = state_34411;
var statearr_34423_36808 = state_34411__$1;
(statearr_34423_36808[(2)] = null);

(statearr_34423_36808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (4))){
var inst_34389 = (state_34411[(7)]);
var inst_34389__$1 = (state_34411[(2)]);
var inst_34391 = (inst_34389__$1 == null);
var state_34411__$1 = (function (){var statearr_34427 = state_34411;
(statearr_34427[(7)] = inst_34389__$1);

return statearr_34427;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34428_36810 = state_34411__$1;
(statearr_34428_36810[(1)] = (5));

} else {
var statearr_34429_36811 = state_34411__$1;
(statearr_34429_36811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (13))){
var state_34411__$1 = state_34411;
var statearr_34430_36812 = state_34411__$1;
(statearr_34430_36812[(2)] = null);

(statearr_34430_36812[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (6))){
var inst_34389 = (state_34411[(7)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34411__$1,(11),to,inst_34389);
} else {
if((state_val_34412 === (3))){
var inst_34409 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34411__$1,inst_34409);
} else {
if((state_val_34412 === (12))){
var state_34411__$1 = state_34411;
var statearr_34431_36814 = state_34411__$1;
(statearr_34431_36814[(2)] = null);

(statearr_34431_36814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (2))){
var state_34411__$1 = state_34411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34411__$1,(4),from);
} else {
if((state_val_34412 === (11))){
var inst_34400 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
if(cljs.core.truth_(inst_34400)){
var statearr_34432_36816 = state_34411__$1;
(statearr_34432_36816[(1)] = (12));

} else {
var statearr_34433_36817 = state_34411__$1;
(statearr_34433_36817[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (9))){
var state_34411__$1 = state_34411;
var statearr_34434_36818 = state_34411__$1;
(statearr_34434_36818[(2)] = null);

(statearr_34434_36818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (5))){
var state_34411__$1 = state_34411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34435_36819 = state_34411__$1;
(statearr_34435_36819[(1)] = (8));

} else {
var statearr_34436_36820 = state_34411__$1;
(statearr_34436_36820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (14))){
var inst_34405 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34437_36822 = state_34411__$1;
(statearr_34437_36822[(2)] = inst_34405);

(statearr_34437_36822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (10))){
var inst_34397 = (state_34411[(2)]);
var state_34411__$1 = state_34411;
var statearr_34438_36823 = state_34411__$1;
(statearr_34438_36823[(2)] = inst_34397);

(statearr_34438_36823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34412 === (8))){
var inst_34394 = cljs.core.async.close_BANG_(to);
var state_34411__$1 = state_34411;
var statearr_34439_36824 = state_34411__$1;
(statearr_34439_36824[(2)] = inst_34394);

(statearr_34439_36824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_34440 = [null,null,null,null,null,null,null,null];
(statearr_34440[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34440[(1)] = (1));

return statearr_34440;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34411){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34411);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34441){if((e34441 instanceof Object)){
var ex__34210__auto__ = e34441;
var statearr_34442_36826 = state_34411;
(statearr_34442_36826[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36828 = state_34411;
state_34411 = G__36828;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34443 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34443[(6)] = c__34274__auto___36805);

return statearr_34443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__34444){
var vec__34445 = p__34444;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34445,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34445,(1),null);
var job = vec__34445;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34274__auto___36830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34452){
var state_val_34453 = (state_34452[(1)]);
if((state_val_34453 === (1))){
var state_34452__$1 = state_34452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34452__$1,(2),res,v);
} else {
if((state_val_34453 === (2))){
var inst_34449 = (state_34452[(2)]);
var inst_34450 = cljs.core.async.close_BANG_(res);
var state_34452__$1 = (function (){var statearr_34454 = state_34452;
(statearr_34454[(7)] = inst_34449);

return statearr_34454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34452__$1,inst_34450);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34455 = [null,null,null,null,null,null,null,null];
(statearr_34455[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34455[(1)] = (1));

return statearr_34455;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34452){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34452);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34456){if((e34456 instanceof Object)){
var ex__34210__auto__ = e34456;
var statearr_34457_36833 = state_34452;
(statearr_34457_36833[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36835 = state_34452;
state_34452 = G__36835;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34452){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34458 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34458[(6)] = c__34274__auto___36830);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34459){
var vec__34460 = p__34459;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34460,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34460,(1),null);
var job = vec__34460;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___36837 = n;
var __36838 = (0);
while(true){
if((__36838 < n__4666__auto___36837)){
var G__34467_36839 = type;
var G__34467_36840__$1 = (((G__34467_36839 instanceof cljs.core.Keyword))?G__34467_36839.fqn:null);
switch (G__34467_36840__$1) {
case "compute":
var c__34274__auto___36843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36838,c__34274__auto___36843,G__34467_36839,G__34467_36840__$1,n__4666__auto___36837,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36838,c__34274__auto___36843,G__34467_36839,G__34467_36840__$1,n__4666__auto___36837,jobs,results,process,async){
return (function (state_34480){
var state_val_34481 = (state_34480[(1)]);
if((state_val_34481 === (1))){
var state_34480__$1 = state_34480;
var statearr_34482_36844 = state_34480__$1;
(statearr_34482_36844[(2)] = null);

(statearr_34482_36844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (2))){
var state_34480__$1 = state_34480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34480__$1,(4),jobs);
} else {
if((state_val_34481 === (3))){
var inst_34478 = (state_34480[(2)]);
var state_34480__$1 = state_34480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34480__$1,inst_34478);
} else {
if((state_val_34481 === (4))){
var inst_34470 = (state_34480[(2)]);
var inst_34471 = process(inst_34470);
var state_34480__$1 = state_34480;
if(cljs.core.truth_(inst_34471)){
var statearr_34484_36846 = state_34480__$1;
(statearr_34484_36846[(1)] = (5));

} else {
var statearr_34485_36847 = state_34480__$1;
(statearr_34485_36847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (5))){
var state_34480__$1 = state_34480;
var statearr_34486_36849 = state_34480__$1;
(statearr_34486_36849[(2)] = null);

(statearr_34486_36849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (6))){
var state_34480__$1 = state_34480;
var statearr_34487_36850 = state_34480__$1;
(statearr_34487_36850[(2)] = null);

(statearr_34487_36850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34481 === (7))){
var inst_34476 = (state_34480[(2)]);
var state_34480__$1 = state_34480;
var statearr_34488_36851 = state_34480__$1;
(statearr_34488_36851[(2)] = inst_34476);

(statearr_34488_36851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36838,c__34274__auto___36843,G__34467_36839,G__34467_36840__$1,n__4666__auto___36837,jobs,results,process,async))
;
return ((function (__36838,switch__34206__auto__,c__34274__auto___36843,G__34467_36839,G__34467_36840__$1,n__4666__auto___36837,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34489 = [null,null,null,null,null,null,null];
(statearr_34489[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34489[(1)] = (1));

return statearr_34489;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34480){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34480);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34490){if((e34490 instanceof Object)){
var ex__34210__auto__ = e34490;
var statearr_34491_36853 = state_34480;
(statearr_34491_36853[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36855 = state_34480;
state_34480 = G__36855;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34480){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36838,switch__34206__auto__,c__34274__auto___36843,G__34467_36839,G__34467_36840__$1,n__4666__auto___36837,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34493 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34493[(6)] = c__34274__auto___36843);

return statearr_34493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36838,c__34274__auto___36843,G__34467_36839,G__34467_36840__$1,n__4666__auto___36837,jobs,results,process,async))
);


break;
case "async":
var c__34274__auto___36857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36838,c__34274__auto___36857,G__34467_36839,G__34467_36840__$1,n__4666__auto___36837,jobs,results,process,async){
return (function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = ((function (__36838,c__34274__auto___36857,G__34467_36839,G__34467_36840__$1,n__4666__auto___36837,jobs,results,process,async){
return (function (state_34507){
var state_val_34508 = (state_34507[(1)]);
if((state_val_34508 === (1))){
var state_34507__$1 = state_34507;
var statearr_34509_36858 = state_34507__$1;
(statearr_34509_36858[(2)] = null);

(statearr_34509_36858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (2))){
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34507__$1,(4),jobs);
} else {
if((state_val_34508 === (3))){
var inst_34505 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34507__$1,inst_34505);
} else {
if((state_val_34508 === (4))){
var inst_34496 = (state_34507[(2)]);
var inst_34497 = async(inst_34496);
var state_34507__$1 = state_34507;
if(cljs.core.truth_(inst_34497)){
var statearr_34511_36860 = state_34507__$1;
(statearr_34511_36860[(1)] = (5));

} else {
var statearr_34512_36861 = state_34507__$1;
(statearr_34512_36861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (5))){
var state_34507__$1 = state_34507;
var statearr_34513_36862 = state_34507__$1;
(statearr_34513_36862[(2)] = null);

(statearr_34513_36862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (6))){
var state_34507__$1 = state_34507;
var statearr_34514_36864 = state_34507__$1;
(statearr_34514_36864[(2)] = null);

(statearr_34514_36864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (7))){
var inst_34502 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34515_36865 = state_34507__$1;
(statearr_34515_36865[(2)] = inst_34502);

(statearr_34515_36865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36838,c__34274__auto___36857,G__34467_36839,G__34467_36840__$1,n__4666__auto___36837,jobs,results,process,async))
;
return ((function (__36838,switch__34206__auto__,c__34274__auto___36857,G__34467_36839,G__34467_36840__$1,n__4666__auto___36837,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34518 = [null,null,null,null,null,null,null];
(statearr_34518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34518[(1)] = (1));

return statearr_34518;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34507){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34507);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34522){if((e34522 instanceof Object)){
var ex__34210__auto__ = e34522;
var statearr_34523_36867 = state_34507;
(statearr_34523_36867[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34522;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36869 = state_34507;
state_34507 = G__36869;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
;})(__36838,switch__34206__auto__,c__34274__auto___36857,G__34467_36839,G__34467_36840__$1,n__4666__auto___36837,jobs,results,process,async))
})();
var state__34276__auto__ = (function (){var statearr_34526 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34526[(6)] = c__34274__auto___36857);

return statearr_34526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
});})(__36838,c__34274__auto___36857,G__34467_36839,G__34467_36840__$1,n__4666__auto___36837,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34467_36840__$1)].join('')));

}

var G__36871 = (__36838 + (1));
__36838 = G__36871;
continue;
} else {
}
break;
}

var c__34274__auto___36872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34548){
var state_val_34549 = (state_34548[(1)]);
if((state_val_34549 === (7))){
var inst_34544 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
var statearr_34551_36873 = state_34548__$1;
(statearr_34551_36873[(2)] = inst_34544);

(statearr_34551_36873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (1))){
var state_34548__$1 = state_34548;
var statearr_34552_36875 = state_34548__$1;
(statearr_34552_36875[(2)] = null);

(statearr_34552_36875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (4))){
var inst_34529 = (state_34548[(7)]);
var inst_34529__$1 = (state_34548[(2)]);
var inst_34530 = (inst_34529__$1 == null);
var state_34548__$1 = (function (){var statearr_34553 = state_34548;
(statearr_34553[(7)] = inst_34529__$1);

return statearr_34553;
})();
if(cljs.core.truth_(inst_34530)){
var statearr_34555_36876 = state_34548__$1;
(statearr_34555_36876[(1)] = (5));

} else {
var statearr_34559_36877 = state_34548__$1;
(statearr_34559_36877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (6))){
var inst_34529 = (state_34548[(7)]);
var inst_34534 = (state_34548[(8)]);
var inst_34534__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34535 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34536 = [inst_34529,inst_34534__$1];
var inst_34537 = (new cljs.core.PersistentVector(null,2,(5),inst_34535,inst_34536,null));
var state_34548__$1 = (function (){var statearr_34560 = state_34548;
(statearr_34560[(8)] = inst_34534__$1);

return statearr_34560;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34548__$1,(8),jobs,inst_34537);
} else {
if((state_val_34549 === (3))){
var inst_34546 = (state_34548[(2)]);
var state_34548__$1 = state_34548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34548__$1,inst_34546);
} else {
if((state_val_34549 === (2))){
var state_34548__$1 = state_34548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34548__$1,(4),from);
} else {
if((state_val_34549 === (9))){
var inst_34541 = (state_34548[(2)]);
var state_34548__$1 = (function (){var statearr_34564 = state_34548;
(statearr_34564[(9)] = inst_34541);

return statearr_34564;
})();
var statearr_34565_36880 = state_34548__$1;
(statearr_34565_36880[(2)] = null);

(statearr_34565_36880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (5))){
var inst_34532 = cljs.core.async.close_BANG_(jobs);
var state_34548__$1 = state_34548;
var statearr_34566_36881 = state_34548__$1;
(statearr_34566_36881[(2)] = inst_34532);

(statearr_34566_36881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34549 === (8))){
var inst_34534 = (state_34548[(8)]);
var inst_34539 = (state_34548[(2)]);
var state_34548__$1 = (function (){var statearr_34567 = state_34548;
(statearr_34567[(10)] = inst_34539);

return statearr_34567;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34548__$1,(9),results,inst_34534);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34568 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34568[(1)] = (1));

return statearr_34568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34548){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34548);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34569){if((e34569 instanceof Object)){
var ex__34210__auto__ = e34569;
var statearr_34570_36884 = state_34548;
(statearr_34570_36884[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34569;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36885 = state_34548;
state_34548 = G__36885;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34571 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34571[(6)] = c__34274__auto___36872);

return statearr_34571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34612){
var state_val_34613 = (state_34612[(1)]);
if((state_val_34613 === (7))){
var inst_34608 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34614_36887 = state_34612__$1;
(statearr_34614_36887[(2)] = inst_34608);

(statearr_34614_36887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var state_34612__$1 = state_34612;
var statearr_34615_36889 = state_34612__$1;
(statearr_34615_36889[(2)] = null);

(statearr_34615_36889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (1))){
var state_34612__$1 = state_34612;
var statearr_34616_36890 = state_34612__$1;
(statearr_34616_36890[(2)] = null);

(statearr_34616_36890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (4))){
var inst_34574 = (state_34612[(7)]);
var inst_34574__$1 = (state_34612[(2)]);
var inst_34575 = (inst_34574__$1 == null);
var state_34612__$1 = (function (){var statearr_34617 = state_34612;
(statearr_34617[(7)] = inst_34574__$1);

return statearr_34617;
})();
if(cljs.core.truth_(inst_34575)){
var statearr_34618_36891 = state_34612__$1;
(statearr_34618_36891[(1)] = (5));

} else {
var statearr_34619_36893 = state_34612__$1;
(statearr_34619_36893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (15))){
var inst_34590 = (state_34612[(8)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34612__$1,(18),to,inst_34590);
} else {
if((state_val_34613 === (21))){
var inst_34603 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34620_36894 = state_34612__$1;
(statearr_34620_36894[(2)] = inst_34603);

(statearr_34620_36894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34605 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34621 = state_34612;
(statearr_34621[(9)] = inst_34605);

return statearr_34621;
})();
var statearr_34622_36896 = state_34612__$1;
(statearr_34622_36896[(2)] = null);

(statearr_34622_36896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (6))){
var inst_34574 = (state_34612[(7)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(11),inst_34574);
} else {
if((state_val_34613 === (17))){
var inst_34598 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
if(cljs.core.truth_(inst_34598)){
var statearr_34623_36897 = state_34612__$1;
(statearr_34623_36897[(1)] = (19));

} else {
var statearr_34624_36898 = state_34612__$1;
(statearr_34624_36898[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (3))){
var inst_34610 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34612__$1,inst_34610);
} else {
if((state_val_34613 === (12))){
var inst_34584 = (state_34612[(10)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(14),inst_34584);
} else {
if((state_val_34613 === (2))){
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34612__$1,(4),results);
} else {
if((state_val_34613 === (19))){
var state_34612__$1 = state_34612;
var statearr_34625_36900 = state_34612__$1;
(statearr_34625_36900[(2)] = null);

(statearr_34625_36900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34584 = (state_34612[(2)]);
var state_34612__$1 = (function (){var statearr_34626 = state_34612;
(statearr_34626[(10)] = inst_34584);

return statearr_34626;
})();
var statearr_34627_36902 = state_34612__$1;
(statearr_34627_36902[(2)] = null);

(statearr_34627_36902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var state_34612__$1 = state_34612;
var statearr_34628_36903 = state_34612__$1;
(statearr_34628_36903[(2)] = null);

(statearr_34628_36903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var state_34612__$1 = state_34612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34629_36905 = state_34612__$1;
(statearr_34629_36905[(1)] = (8));

} else {
var statearr_34630_36906 = state_34612__$1;
(statearr_34630_36906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (14))){
var inst_34590 = (state_34612[(8)]);
var inst_34590__$1 = (state_34612[(2)]);
var inst_34591 = (inst_34590__$1 == null);
var inst_34592 = cljs.core.not(inst_34591);
var state_34612__$1 = (function (){var statearr_34631 = state_34612;
(statearr_34631[(8)] = inst_34590__$1);

return statearr_34631;
})();
if(inst_34592){
var statearr_34632_36907 = state_34612__$1;
(statearr_34632_36907[(1)] = (15));

} else {
var statearr_34633_36908 = state_34612__$1;
(statearr_34633_36908[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var state_34612__$1 = state_34612;
var statearr_34634_36910 = state_34612__$1;
(statearr_34634_36910[(2)] = false);

(statearr_34634_36910[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34581 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34635_36911 = state_34612__$1;
(statearr_34635_36911[(2)] = inst_34581);

(statearr_34635_36911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (18))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34636_36912 = state_34612__$1;
(statearr_34636_36912[(2)] = inst_34595);

(statearr_34636_36912[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34578 = cljs.core.async.close_BANG_(to);
var state_34612__$1 = state_34612;
var statearr_34637_36914 = state_34612__$1;
(statearr_34637_36914[(2)] = inst_34578);

(statearr_34637_36914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_34638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__);

(statearr_34638[(1)] = (1));

return statearr_34638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1 = (function (state_34612){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34612);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34639){if((e34639 instanceof Object)){
var ex__34210__auto__ = e34639;
var statearr_34640_36916 = state_34612;
(statearr_34640_36916[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36917 = state_34612;
state_34612 = G__36917;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__ = function(state_34612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1.call(this,state_34612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34641 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34641[(6)] = c__34274__auto__);

return statearr_34641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34643 = arguments.length;
switch (G__34643) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34645 = arguments.length;
switch (G__34645) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34647 = arguments.length;
switch (G__34647) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34274__auto___36926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34669 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34675_36928 = state_34673__$1;
(statearr_34675_36928[(2)] = inst_34669);

(statearr_34675_36928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var state_34673__$1 = state_34673;
var statearr_34676_36929 = state_34673__$1;
(statearr_34676_36929[(2)] = null);

(statearr_34676_36929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (4))){
var inst_34650 = (state_34673[(7)]);
var inst_34650__$1 = (state_34673[(2)]);
var inst_34651 = (inst_34650__$1 == null);
var state_34673__$1 = (function (){var statearr_34677 = state_34673;
(statearr_34677[(7)] = inst_34650__$1);

return statearr_34677;
})();
if(cljs.core.truth_(inst_34651)){
var statearr_34678_36931 = state_34673__$1;
(statearr_34678_36931[(1)] = (5));

} else {
var statearr_34679_36932 = state_34673__$1;
(statearr_34679_36932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (13))){
var state_34673__$1 = state_34673;
var statearr_34680_36933 = state_34673__$1;
(statearr_34680_36933[(2)] = null);

(statearr_34680_36933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34650 = (state_34673[(7)]);
var inst_34656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34650) : p.call(null,inst_34650));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34656)){
var statearr_34681_36935 = state_34673__$1;
(statearr_34681_36935[(1)] = (9));

} else {
var statearr_34682_36936 = state_34673__$1;
(statearr_34682_36936[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (3))){
var inst_34671 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34673__$1,inst_34671);
} else {
if((state_val_34674 === (12))){
var state_34673__$1 = state_34673;
var statearr_34683_36938 = state_34673__$1;
(statearr_34683_36938[(2)] = null);

(statearr_34683_36938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (2))){
var state_34673__$1 = state_34673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34673__$1,(4),ch);
} else {
if((state_val_34674 === (11))){
var inst_34650 = (state_34673[(7)]);
var inst_34660 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34673__$1,(8),inst_34660,inst_34650);
} else {
if((state_val_34674 === (9))){
var state_34673__$1 = state_34673;
var statearr_34684_36939 = state_34673__$1;
(statearr_34684_36939[(2)] = tc);

(statearr_34684_36939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34653 = cljs.core.async.close_BANG_(tc);
var inst_34654 = cljs.core.async.close_BANG_(fc);
var state_34673__$1 = (function (){var statearr_34685 = state_34673;
(statearr_34685[(8)] = inst_34653);

return statearr_34685;
})();
var statearr_34686_36941 = state_34673__$1;
(statearr_34686_36941[(2)] = inst_34654);

(statearr_34686_36941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34667 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34687_36942 = state_34673__$1;
(statearr_34687_36942[(2)] = inst_34667);

(statearr_34687_36942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var state_34673__$1 = state_34673;
var statearr_34688_36944 = state_34673__$1;
(statearr_34688_36944[(2)] = fc);

(statearr_34688_36944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34662 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34662)){
var statearr_34692_36945 = state_34673__$1;
(statearr_34692_36945[(1)] = (12));

} else {
var statearr_34693_36946 = state_34673__$1;
(statearr_34693_36946[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_34694 = [null,null,null,null,null,null,null,null,null];
(statearr_34694[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34694[(1)] = (1));

return statearr_34694;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34673){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34673);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34695){if((e34695 instanceof Object)){
var ex__34210__auto__ = e34695;
var statearr_34696_36948 = state_34673;
(statearr_34696_36948[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34695;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36950 = state_34673;
state_34673 = G__36950;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34700 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34700[(6)] = c__34274__auto___36926);

return statearr_34700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34724){
var state_val_34725 = (state_34724[(1)]);
if((state_val_34725 === (7))){
var inst_34720 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34728_36952 = state_34724__$1;
(statearr_34728_36952[(2)] = inst_34720);

(statearr_34728_36952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (1))){
var inst_34704 = init;
var state_34724__$1 = (function (){var statearr_34729 = state_34724;
(statearr_34729[(7)] = inst_34704);

return statearr_34729;
})();
var statearr_34730_36953 = state_34724__$1;
(statearr_34730_36953[(2)] = null);

(statearr_34730_36953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (4))){
var inst_34707 = (state_34724[(8)]);
var inst_34707__$1 = (state_34724[(2)]);
var inst_34708 = (inst_34707__$1 == null);
var state_34724__$1 = (function (){var statearr_34731 = state_34724;
(statearr_34731[(8)] = inst_34707__$1);

return statearr_34731;
})();
if(cljs.core.truth_(inst_34708)){
var statearr_34732_36955 = state_34724__$1;
(statearr_34732_36955[(1)] = (5));

} else {
var statearr_34733_36956 = state_34724__$1;
(statearr_34733_36956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (6))){
var inst_34711 = (state_34724[(9)]);
var inst_34704 = (state_34724[(7)]);
var inst_34707 = (state_34724[(8)]);
var inst_34711__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34704,inst_34707) : f.call(null,inst_34704,inst_34707));
var inst_34712 = cljs.core.reduced_QMARK_(inst_34711__$1);
var state_34724__$1 = (function (){var statearr_34734 = state_34724;
(statearr_34734[(9)] = inst_34711__$1);

return statearr_34734;
})();
if(inst_34712){
var statearr_34735_36958 = state_34724__$1;
(statearr_34735_36958[(1)] = (8));

} else {
var statearr_34736_36959 = state_34724__$1;
(statearr_34736_36959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (3))){
var inst_34722 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34724__$1,inst_34722);
} else {
if((state_val_34725 === (2))){
var state_34724__$1 = state_34724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34724__$1,(4),ch);
} else {
if((state_val_34725 === (9))){
var inst_34711 = (state_34724[(9)]);
var inst_34704 = inst_34711;
var state_34724__$1 = (function (){var statearr_34738 = state_34724;
(statearr_34738[(7)] = inst_34704);

return statearr_34738;
})();
var statearr_34739_36961 = state_34724__$1;
(statearr_34739_36961[(2)] = null);

(statearr_34739_36961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (5))){
var inst_34704 = (state_34724[(7)]);
var state_34724__$1 = state_34724;
var statearr_34741_36962 = state_34724__$1;
(statearr_34741_36962[(2)] = inst_34704);

(statearr_34741_36962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (10))){
var inst_34718 = (state_34724[(2)]);
var state_34724__$1 = state_34724;
var statearr_34742_36963 = state_34724__$1;
(statearr_34742_36963[(2)] = inst_34718);

(statearr_34742_36963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34725 === (8))){
var inst_34711 = (state_34724[(9)]);
var inst_34714 = cljs.core.deref(inst_34711);
var state_34724__$1 = state_34724;
var statearr_34743_36965 = state_34724__$1;
(statearr_34743_36965[(2)] = inst_34714);

(statearr_34743_36965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34744 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34744[(0)] = cljs$core$async$reduce_$_state_machine__34207__auto__);

(statearr_34744[(1)] = (1));

return statearr_34744;
});
var cljs$core$async$reduce_$_state_machine__34207__auto____1 = (function (state_34724){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34724);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34747){if((e34747 instanceof Object)){
var ex__34210__auto__ = e34747;
var statearr_34748_36967 = state_34724;
(statearr_34748_36967[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34747;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36968 = state_34724;
state_34724 = G__36968;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34207__auto__ = function(state_34724){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34207__auto____1.call(this,state_34724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34207__auto____0;
cljs$core$async$reduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34207__auto____1;
return cljs$core$async$reduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34749 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34749[(6)] = c__34274__auto__);

return statearr_34749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34758){
var state_val_34759 = (state_34758[(1)]);
if((state_val_34759 === (1))){
var inst_34753 = cljs.core.async.reduce(f__$1,init,ch);
var state_34758__$1 = state_34758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34758__$1,(2),inst_34753);
} else {
if((state_val_34759 === (2))){
var inst_34755 = (state_34758[(2)]);
var inst_34756 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34755) : f__$1.call(null,inst_34755));
var state_34758__$1 = state_34758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34758__$1,inst_34756);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34207__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34207__auto____0 = (function (){
var statearr_34761 = [null,null,null,null,null,null,null];
(statearr_34761[(0)] = cljs$core$async$transduce_$_state_machine__34207__auto__);

(statearr_34761[(1)] = (1));

return statearr_34761;
});
var cljs$core$async$transduce_$_state_machine__34207__auto____1 = (function (state_34758){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34758);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34762){if((e34762 instanceof Object)){
var ex__34210__auto__ = e34762;
var statearr_34763_36972 = state_34758;
(statearr_34763_36972[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36973 = state_34758;
state_34758 = G__36973;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34207__auto__ = function(state_34758){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34207__auto____1.call(this,state_34758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34207__auto____0;
cljs$core$async$transduce_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34207__auto____1;
return cljs$core$async$transduce_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34764 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34764[(6)] = c__34274__auto__);

return statearr_34764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34766 = arguments.length;
switch (G__34766) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34797){
var state_val_34798 = (state_34797[(1)]);
if((state_val_34798 === (7))){
var inst_34779 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34799_36978 = state_34797__$1;
(statearr_34799_36978[(2)] = inst_34779);

(statearr_34799_36978[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (1))){
var inst_34770 = cljs.core.seq(coll);
var inst_34771 = inst_34770;
var state_34797__$1 = (function (){var statearr_34800 = state_34797;
(statearr_34800[(7)] = inst_34771);

return statearr_34800;
})();
var statearr_34801_36979 = state_34797__$1;
(statearr_34801_36979[(2)] = null);

(statearr_34801_36979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (4))){
var inst_34771 = (state_34797[(7)]);
var inst_34777 = cljs.core.first(inst_34771);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34797__$1,(7),ch,inst_34777);
} else {
if((state_val_34798 === (13))){
var inst_34791 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34805_36981 = state_34797__$1;
(statearr_34805_36981[(2)] = inst_34791);

(statearr_34805_36981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (6))){
var inst_34782 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
if(cljs.core.truth_(inst_34782)){
var statearr_34806_36982 = state_34797__$1;
(statearr_34806_36982[(1)] = (8));

} else {
var statearr_34807_36983 = state_34797__$1;
(statearr_34807_36983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (3))){
var inst_34795 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34797__$1,inst_34795);
} else {
if((state_val_34798 === (12))){
var state_34797__$1 = state_34797;
var statearr_34808_36985 = state_34797__$1;
(statearr_34808_36985[(2)] = null);

(statearr_34808_36985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (2))){
var inst_34771 = (state_34797[(7)]);
var state_34797__$1 = state_34797;
if(cljs.core.truth_(inst_34771)){
var statearr_34809_36986 = state_34797__$1;
(statearr_34809_36986[(1)] = (4));

} else {
var statearr_34810_36988 = state_34797__$1;
(statearr_34810_36988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (11))){
var inst_34788 = cljs.core.async.close_BANG_(ch);
var state_34797__$1 = state_34797;
var statearr_34811_36989 = state_34797__$1;
(statearr_34811_36989[(2)] = inst_34788);

(statearr_34811_36989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (9))){
var state_34797__$1 = state_34797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34812_36990 = state_34797__$1;
(statearr_34812_36990[(1)] = (11));

} else {
var statearr_34813_36991 = state_34797__$1;
(statearr_34813_36991[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (5))){
var inst_34771 = (state_34797[(7)]);
var state_34797__$1 = state_34797;
var statearr_34814_36993 = state_34797__$1;
(statearr_34814_36993[(2)] = inst_34771);

(statearr_34814_36993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (10))){
var inst_34793 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34815_36994 = state_34797__$1;
(statearr_34815_36994[(2)] = inst_34793);

(statearr_34815_36994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (8))){
var inst_34771 = (state_34797[(7)]);
var inst_34784 = cljs.core.next(inst_34771);
var inst_34771__$1 = inst_34784;
var state_34797__$1 = (function (){var statearr_34816 = state_34797;
(statearr_34816[(7)] = inst_34771__$1);

return statearr_34816;
})();
var statearr_34817_36996 = state_34797__$1;
(statearr_34817_36996[(2)] = null);

(statearr_34817_36996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_34818 = [null,null,null,null,null,null,null,null];
(statearr_34818[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_34818[(1)] = (1));

return statearr_34818;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_34797){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34797);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e34819){if((e34819 instanceof Object)){
var ex__34210__auto__ = e34819;
var statearr_34820_36997 = state_34797;
(statearr_34820_36997[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36999 = state_34797;
state_34797 = G__36999;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_34797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_34797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_34821 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_34821[(6)] = c__34274__auto__);

return statearr_34821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34835 = (function (ch,cs,meta34836){
this.ch = ch;
this.cs = cs;
this.meta34836 = meta34836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34837,meta34836__$1){
var self__ = this;
var _34837__$1 = this;
return (new cljs.core.async.t_cljs$core$async34835(self__.ch,self__.cs,meta34836__$1));
}));

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34837){
var self__ = this;
var _34837__$1 = this;
return self__.meta34836;
}));

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34835.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34836","meta34836",-820760856,null)], null);
}));

(cljs.core.async.t_cljs$core$async34835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34835");

(cljs.core.async.t_cljs$core$async34835.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34835.
 */
cljs.core.async.__GT_t_cljs$core$async34835 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34835(ch__$1,cs__$1,meta34836){
return (new cljs.core.async.t_cljs$core$async34835(ch__$1,cs__$1,meta34836));
});

}

return (new cljs.core.async.t_cljs$core$async34835(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34274__auto___37009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_34978){
var state_val_34979 = (state_34978[(1)]);
if((state_val_34979 === (7))){
var inst_34974 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_34980_37010 = state_34978__$1;
(statearr_34980_37010[(2)] = inst_34974);

(statearr_34980_37010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (20))){
var inst_34877 = (state_34978[(7)]);
var inst_34889 = cljs.core.first(inst_34877);
var inst_34890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(0),null);
var inst_34891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34889,(1),null);
var state_34978__$1 = (function (){var statearr_34981 = state_34978;
(statearr_34981[(8)] = inst_34890);

return statearr_34981;
})();
if(cljs.core.truth_(inst_34891)){
var statearr_34982_37012 = state_34978__$1;
(statearr_34982_37012[(1)] = (22));

} else {
var statearr_34983_37013 = state_34978__$1;
(statearr_34983_37013[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (27))){
var inst_34846 = (state_34978[(9)]);
var inst_34926 = (state_34978[(10)]);
var inst_34919 = (state_34978[(11)]);
var inst_34921 = (state_34978[(12)]);
var inst_34926__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34919,inst_34921);
var inst_34927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34926__$1,inst_34846,done);
var state_34978__$1 = (function (){var statearr_34984 = state_34978;
(statearr_34984[(10)] = inst_34926__$1);

return statearr_34984;
})();
if(cljs.core.truth_(inst_34927)){
var statearr_34985_37015 = state_34978__$1;
(statearr_34985_37015[(1)] = (30));

} else {
var statearr_34986_37016 = state_34978__$1;
(statearr_34986_37016[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (1))){
var state_34978__$1 = state_34978;
var statearr_34987_37018 = state_34978__$1;
(statearr_34987_37018[(2)] = null);

(statearr_34987_37018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (24))){
var inst_34877 = (state_34978[(7)]);
var inst_34896 = (state_34978[(2)]);
var inst_34897 = cljs.core.next(inst_34877);
var inst_34855 = inst_34897;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_34988 = state_34978;
(statearr_34988[(13)] = inst_34857);

(statearr_34988[(14)] = inst_34856);

(statearr_34988[(15)] = inst_34858);

(statearr_34988[(16)] = inst_34896);

(statearr_34988[(17)] = inst_34855);

return statearr_34988;
})();
var statearr_34989_37020 = state_34978__$1;
(statearr_34989_37020[(2)] = null);

(statearr_34989_37020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (39))){
var state_34978__$1 = state_34978;
var statearr_34993_37021 = state_34978__$1;
(statearr_34993_37021[(2)] = null);

(statearr_34993_37021[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (4))){
var inst_34846 = (state_34978[(9)]);
var inst_34846__$1 = (state_34978[(2)]);
var inst_34847 = (inst_34846__$1 == null);
var state_34978__$1 = (function (){var statearr_34994 = state_34978;
(statearr_34994[(9)] = inst_34846__$1);

return statearr_34994;
})();
if(cljs.core.truth_(inst_34847)){
var statearr_34995_37023 = state_34978__$1;
(statearr_34995_37023[(1)] = (5));

} else {
var statearr_34996_37024 = state_34978__$1;
(statearr_34996_37024[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (15))){
var inst_34857 = (state_34978[(13)]);
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34855 = (state_34978[(17)]);
var inst_34873 = (state_34978[(2)]);
var inst_34874 = (inst_34858 + (1));
var tmp34990 = inst_34857;
var tmp34991 = inst_34856;
var tmp34992 = inst_34855;
var inst_34855__$1 = tmp34992;
var inst_34856__$1 = tmp34991;
var inst_34857__$1 = tmp34990;
var inst_34858__$1 = inst_34874;
var state_34978__$1 = (function (){var statearr_34997 = state_34978;
(statearr_34997[(18)] = inst_34873);

(statearr_34997[(13)] = inst_34857__$1);

(statearr_34997[(14)] = inst_34856__$1);

(statearr_34997[(15)] = inst_34858__$1);

(statearr_34997[(17)] = inst_34855__$1);

return statearr_34997;
})();
var statearr_34998_37026 = state_34978__$1;
(statearr_34998_37026[(2)] = null);

(statearr_34998_37026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (21))){
var inst_34900 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35002_37027 = state_34978__$1;
(statearr_35002_37027[(2)] = inst_34900);

(statearr_35002_37027[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (31))){
var inst_34926 = (state_34978[(10)]);
var inst_34930 = done(null);
var inst_34931 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34926);
var state_34978__$1 = (function (){var statearr_35003 = state_34978;
(statearr_35003[(19)] = inst_34930);

return statearr_35003;
})();
var statearr_35004_37029 = state_34978__$1;
(statearr_35004_37029[(2)] = inst_34931);

(statearr_35004_37029[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (32))){
var inst_34918 = (state_34978[(20)]);
var inst_34919 = (state_34978[(11)]);
var inst_34920 = (state_34978[(21)]);
var inst_34921 = (state_34978[(12)]);
var inst_34933 = (state_34978[(2)]);
var inst_34934 = (inst_34921 + (1));
var tmp34999 = inst_34918;
var tmp35000 = inst_34919;
var tmp35001 = inst_34920;
var inst_34918__$1 = tmp34999;
var inst_34919__$1 = tmp35000;
var inst_34920__$1 = tmp35001;
var inst_34921__$1 = inst_34934;
var state_34978__$1 = (function (){var statearr_35005 = state_34978;
(statearr_35005[(20)] = inst_34918__$1);

(statearr_35005[(22)] = inst_34933);

(statearr_35005[(11)] = inst_34919__$1);

(statearr_35005[(21)] = inst_34920__$1);

(statearr_35005[(12)] = inst_34921__$1);

return statearr_35005;
})();
var statearr_35006_37031 = state_34978__$1;
(statearr_35006_37031[(2)] = null);

(statearr_35006_37031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (40))){
var inst_34946 = (state_34978[(23)]);
var inst_34950 = done(null);
var inst_34951 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34946);
var state_34978__$1 = (function (){var statearr_35007 = state_34978;
(statearr_35007[(24)] = inst_34950);

return statearr_35007;
})();
var statearr_35008_37033 = state_34978__$1;
(statearr_35008_37033[(2)] = inst_34951);

(statearr_35008_37033[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (33))){
var inst_34937 = (state_34978[(25)]);
var inst_34939 = cljs.core.chunked_seq_QMARK_(inst_34937);
var state_34978__$1 = state_34978;
if(inst_34939){
var statearr_35009_37035 = state_34978__$1;
(statearr_35009_37035[(1)] = (36));

} else {
var statearr_35010_37036 = state_34978__$1;
(statearr_35010_37036[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (13))){
var inst_34867 = (state_34978[(26)]);
var inst_34870 = cljs.core.async.close_BANG_(inst_34867);
var state_34978__$1 = state_34978;
var statearr_35011_37037 = state_34978__$1;
(statearr_35011_37037[(2)] = inst_34870);

(statearr_35011_37037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (22))){
var inst_34890 = (state_34978[(8)]);
var inst_34893 = cljs.core.async.close_BANG_(inst_34890);
var state_34978__$1 = state_34978;
var statearr_35012_37039 = state_34978__$1;
(statearr_35012_37039[(2)] = inst_34893);

(statearr_35012_37039[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (36))){
var inst_34937 = (state_34978[(25)]);
var inst_34941 = cljs.core.chunk_first(inst_34937);
var inst_34942 = cljs.core.chunk_rest(inst_34937);
var inst_34943 = cljs.core.count(inst_34941);
var inst_34918 = inst_34942;
var inst_34919 = inst_34941;
var inst_34920 = inst_34943;
var inst_34921 = (0);
var state_34978__$1 = (function (){var statearr_35013 = state_34978;
(statearr_35013[(20)] = inst_34918);

(statearr_35013[(11)] = inst_34919);

(statearr_35013[(21)] = inst_34920);

(statearr_35013[(12)] = inst_34921);

return statearr_35013;
})();
var statearr_35014_37041 = state_34978__$1;
(statearr_35014_37041[(2)] = null);

(statearr_35014_37041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (41))){
var inst_34937 = (state_34978[(25)]);
var inst_34953 = (state_34978[(2)]);
var inst_34954 = cljs.core.next(inst_34937);
var inst_34918 = inst_34954;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34978__$1 = (function (){var statearr_35015 = state_34978;
(statearr_35015[(20)] = inst_34918);

(statearr_35015[(11)] = inst_34919);

(statearr_35015[(21)] = inst_34920);

(statearr_35015[(27)] = inst_34953);

(statearr_35015[(12)] = inst_34921);

return statearr_35015;
})();
var statearr_35016_37043 = state_34978__$1;
(statearr_35016_37043[(2)] = null);

(statearr_35016_37043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (43))){
var state_34978__$1 = state_34978;
var statearr_35017_37044 = state_34978__$1;
(statearr_35017_37044[(2)] = null);

(statearr_35017_37044[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (29))){
var inst_34962 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35018_37045 = state_34978__$1;
(statearr_35018_37045[(2)] = inst_34962);

(statearr_35018_37045[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (44))){
var inst_34971 = (state_34978[(2)]);
var state_34978__$1 = (function (){var statearr_35019 = state_34978;
(statearr_35019[(28)] = inst_34971);

return statearr_35019;
})();
var statearr_35020_37047 = state_34978__$1;
(statearr_35020_37047[(2)] = null);

(statearr_35020_37047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (6))){
var inst_34910 = (state_34978[(29)]);
var inst_34909 = cljs.core.deref(cs);
var inst_34910__$1 = cljs.core.keys(inst_34909);
var inst_34911 = cljs.core.count(inst_34910__$1);
var inst_34912 = cljs.core.reset_BANG_(dctr,inst_34911);
var inst_34917 = cljs.core.seq(inst_34910__$1);
var inst_34918 = inst_34917;
var inst_34919 = null;
var inst_34920 = (0);
var inst_34921 = (0);
var state_34978__$1 = (function (){var statearr_35021 = state_34978;
(statearr_35021[(20)] = inst_34918);

(statearr_35021[(29)] = inst_34910__$1);

(statearr_35021[(11)] = inst_34919);

(statearr_35021[(21)] = inst_34920);

(statearr_35021[(12)] = inst_34921);

(statearr_35021[(30)] = inst_34912);

return statearr_35021;
})();
var statearr_35022_37049 = state_34978__$1;
(statearr_35022_37049[(2)] = null);

(statearr_35022_37049[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (28))){
var inst_34918 = (state_34978[(20)]);
var inst_34937 = (state_34978[(25)]);
var inst_34937__$1 = cljs.core.seq(inst_34918);
var state_34978__$1 = (function (){var statearr_35023 = state_34978;
(statearr_35023[(25)] = inst_34937__$1);

return statearr_35023;
})();
if(inst_34937__$1){
var statearr_35024_37051 = state_34978__$1;
(statearr_35024_37051[(1)] = (33));

} else {
var statearr_35025_37052 = state_34978__$1;
(statearr_35025_37052[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (25))){
var inst_34920 = (state_34978[(21)]);
var inst_34921 = (state_34978[(12)]);
var inst_34923 = (inst_34921 < inst_34920);
var inst_34924 = inst_34923;
var state_34978__$1 = state_34978;
if(cljs.core.truth_(inst_34924)){
var statearr_35026_37054 = state_34978__$1;
(statearr_35026_37054[(1)] = (27));

} else {
var statearr_35027_37055 = state_34978__$1;
(statearr_35027_37055[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (34))){
var state_34978__$1 = state_34978;
var statearr_35028_37056 = state_34978__$1;
(statearr_35028_37056[(2)] = null);

(statearr_35028_37056[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (17))){
var state_34978__$1 = state_34978;
var statearr_35029_37057 = state_34978__$1;
(statearr_35029_37057[(2)] = null);

(statearr_35029_37057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (3))){
var inst_34976 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34978__$1,inst_34976);
} else {
if((state_val_34979 === (12))){
var inst_34905 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35030_37059 = state_34978__$1;
(statearr_35030_37059[(2)] = inst_34905);

(statearr_35030_37059[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (2))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(4),ch);
} else {
if((state_val_34979 === (23))){
var state_34978__$1 = state_34978;
var statearr_35031_37061 = state_34978__$1;
(statearr_35031_37061[(2)] = null);

(statearr_35031_37061[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (35))){
var inst_34960 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35032_37062 = state_34978__$1;
(statearr_35032_37062[(2)] = inst_34960);

(statearr_35032_37062[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (19))){
var inst_34877 = (state_34978[(7)]);
var inst_34881 = cljs.core.chunk_first(inst_34877);
var inst_34882 = cljs.core.chunk_rest(inst_34877);
var inst_34883 = cljs.core.count(inst_34881);
var inst_34855 = inst_34882;
var inst_34856 = inst_34881;
var inst_34857 = inst_34883;
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35033 = state_34978;
(statearr_35033[(13)] = inst_34857);

(statearr_35033[(14)] = inst_34856);

(statearr_35033[(15)] = inst_34858);

(statearr_35033[(17)] = inst_34855);

return statearr_35033;
})();
var statearr_35034_37064 = state_34978__$1;
(statearr_35034_37064[(2)] = null);

(statearr_35034_37064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (11))){
var inst_34855 = (state_34978[(17)]);
var inst_34877 = (state_34978[(7)]);
var inst_34877__$1 = cljs.core.seq(inst_34855);
var state_34978__$1 = (function (){var statearr_35037 = state_34978;
(statearr_35037[(7)] = inst_34877__$1);

return statearr_35037;
})();
if(inst_34877__$1){
var statearr_35039_37066 = state_34978__$1;
(statearr_35039_37066[(1)] = (16));

} else {
var statearr_35040_37067 = state_34978__$1;
(statearr_35040_37067[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (9))){
var inst_34907 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35043_37068 = state_34978__$1;
(statearr_35043_37068[(2)] = inst_34907);

(statearr_35043_37068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (5))){
var inst_34853 = cljs.core.deref(cs);
var inst_34854 = cljs.core.seq(inst_34853);
var inst_34855 = inst_34854;
var inst_34856 = null;
var inst_34857 = (0);
var inst_34858 = (0);
var state_34978__$1 = (function (){var statearr_35045 = state_34978;
(statearr_35045[(13)] = inst_34857);

(statearr_35045[(14)] = inst_34856);

(statearr_35045[(15)] = inst_34858);

(statearr_35045[(17)] = inst_34855);

return statearr_35045;
})();
var statearr_35046_37070 = state_34978__$1;
(statearr_35046_37070[(2)] = null);

(statearr_35046_37070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (14))){
var state_34978__$1 = state_34978;
var statearr_35047_37072 = state_34978__$1;
(statearr_35047_37072[(2)] = null);

(statearr_35047_37072[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (45))){
var inst_34968 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35048_37073 = state_34978__$1;
(statearr_35048_37073[(2)] = inst_34968);

(statearr_35048_37073[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (26))){
var inst_34910 = (state_34978[(29)]);
var inst_34964 = (state_34978[(2)]);
var inst_34965 = cljs.core.seq(inst_34910);
var state_34978__$1 = (function (){var statearr_35049 = state_34978;
(statearr_35049[(31)] = inst_34964);

return statearr_35049;
})();
if(inst_34965){
var statearr_35050_37075 = state_34978__$1;
(statearr_35050_37075[(1)] = (42));

} else {
var statearr_35051_37076 = state_34978__$1;
(statearr_35051_37076[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (16))){
var inst_34877 = (state_34978[(7)]);
var inst_34879 = cljs.core.chunked_seq_QMARK_(inst_34877);
var state_34978__$1 = state_34978;
if(inst_34879){
var statearr_35052_37077 = state_34978__$1;
(statearr_35052_37077[(1)] = (19));

} else {
var statearr_35053_37078 = state_34978__$1;
(statearr_35053_37078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (38))){
var inst_34957 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35054_37080 = state_34978__$1;
(statearr_35054_37080[(2)] = inst_34957);

(statearr_35054_37080[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (30))){
var state_34978__$1 = state_34978;
var statearr_35057_37081 = state_34978__$1;
(statearr_35057_37081[(2)] = null);

(statearr_35057_37081[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (10))){
var inst_34856 = (state_34978[(14)]);
var inst_34858 = (state_34978[(15)]);
var inst_34866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34856,inst_34858);
var inst_34867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(0),null);
var inst_34868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34866,(1),null);
var state_34978__$1 = (function (){var statearr_35060 = state_34978;
(statearr_35060[(26)] = inst_34867);

return statearr_35060;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_35062_37082 = state_34978__$1;
(statearr_35062_37082[(1)] = (13));

} else {
var statearr_35063_37083 = state_34978__$1;
(statearr_35063_37083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (18))){
var inst_34903 = (state_34978[(2)]);
var state_34978__$1 = state_34978;
var statearr_35065_37084 = state_34978__$1;
(statearr_35065_37084[(2)] = inst_34903);

(statearr_35065_37084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (42))){
var state_34978__$1 = state_34978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34978__$1,(45),dchan);
} else {
if((state_val_34979 === (37))){
var inst_34946 = (state_34978[(23)]);
var inst_34846 = (state_34978[(9)]);
var inst_34937 = (state_34978[(25)]);
var inst_34946__$1 = cljs.core.first(inst_34937);
var inst_34947 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34946__$1,inst_34846,done);
var state_34978__$1 = (function (){var statearr_35066 = state_34978;
(statearr_35066[(23)] = inst_34946__$1);

return statearr_35066;
})();
if(cljs.core.truth_(inst_34947)){
var statearr_35067_37092 = state_34978__$1;
(statearr_35067_37092[(1)] = (39));

} else {
var statearr_35068_37093 = state_34978__$1;
(statearr_35068_37093[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34979 === (8))){
var inst_34857 = (state_34978[(13)]);
var inst_34858 = (state_34978[(15)]);
var inst_34860 = (inst_34858 < inst_34857);
var inst_34861 = inst_34860;
var state_34978__$1 = state_34978;
if(cljs.core.truth_(inst_34861)){
var statearr_35071_37095 = state_34978__$1;
(statearr_35071_37095[(1)] = (10));

} else {
var statearr_35072_37096 = state_34978__$1;
(statearr_35072_37096[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__34207__auto__ = null;
var cljs$core$async$mult_$_state_machine__34207__auto____0 = (function (){
var statearr_35077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35077[(0)] = cljs$core$async$mult_$_state_machine__34207__auto__);

(statearr_35077[(1)] = (1));

return statearr_35077;
});
var cljs$core$async$mult_$_state_machine__34207__auto____1 = (function (state_34978){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_34978);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35078){if((e35078 instanceof Object)){
var ex__34210__auto__ = e35078;
var statearr_35079_37098 = state_34978;
(statearr_35079_37098[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37102 = state_34978;
state_34978 = G__37102;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34207__auto__ = function(state_34978){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34207__auto____1.call(this,state_34978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34207__auto____0;
cljs$core$async$mult_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34207__auto____1;
return cljs$core$async$mult_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35084 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35084[(6)] = c__34274__auto___37009);

return statearr_35084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35088 = arguments.length;
switch (G__35088) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37107 = arguments.length;
var i__4790__auto___37109 = (0);
while(true){
if((i__4790__auto___37109 < len__4789__auto___37107)){
args__4795__auto__.push((arguments[i__4790__auto___37109]));

var G__37111 = (i__4790__auto___37109 + (1));
i__4790__auto___37109 = G__37111;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35194){
var map__35195 = p__35194;
var map__35195__$1 = (((((!((map__35195 == null))))?(((((map__35195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35195):map__35195);
var opts = map__35195__$1;
var statearr_35197_37114 = state;
(statearr_35197_37114[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35198_37115 = state;
(statearr_35198_37115[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35201_37116 = state;
(statearr_35201_37116[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35176){
var G__35177 = cljs.core.first(seq35176);
var seq35176__$1 = cljs.core.next(seq35176);
var G__35178 = cljs.core.first(seq35176__$1);
var seq35176__$2 = cljs.core.next(seq35176__$1);
var G__35179 = cljs.core.first(seq35176__$2);
var seq35176__$3 = cljs.core.next(seq35176__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35177,G__35178,G__35179,seq35176__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35241 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35241 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35242){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35242 = meta35242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35243,meta35242__$1){
var self__ = this;
var _35243__$1 = this;
return (new cljs.core.async.t_cljs$core$async35241(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35242__$1));
}));

(cljs.core.async.t_cljs$core$async35241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35243){
var self__ = this;
var _35243__$1 = this;
return self__.meta35242;
}));

(cljs.core.async.t_cljs$core$async35241.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35241.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35241.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35241.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35241.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35241.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35241.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35241.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35242","meta35242",484798111,null)], null);
}));

(cljs.core.async.t_cljs$core$async35241.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35241");

(cljs.core.async.t_cljs$core$async35241.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35241");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35241.
 */
cljs.core.async.__GT_t_cljs$core$async35241 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35241(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35242){
return (new cljs.core.async.t_cljs$core$async35241(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35242));
});

}

return (new cljs.core.async.t_cljs$core$async35241(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35449){
var state_val_35450 = (state_35449[(1)]);
if((state_val_35450 === (7))){
var inst_35343 = (state_35449[(2)]);
var state_35449__$1 = state_35449;
var statearr_35468_37196 = state_35449__$1;
(statearr_35468_37196[(2)] = inst_35343);

(statearr_35468_37196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (20))){
var inst_35358 = (state_35449[(7)]);
var state_35449__$1 = state_35449;
var statearr_35473_37198 = state_35449__$1;
(statearr_35473_37198[(2)] = inst_35358);

(statearr_35473_37198[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (27))){
var state_35449__$1 = state_35449;
var statearr_35477_37199 = state_35449__$1;
(statearr_35477_37199[(2)] = null);

(statearr_35477_37199[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (1))){
var inst_35327 = (state_35449[(8)]);
var inst_35327__$1 = calc_state();
var inst_35331 = (inst_35327__$1 == null);
var inst_35332 = cljs.core.not(inst_35331);
var state_35449__$1 = (function (){var statearr_35478 = state_35449;
(statearr_35478[(8)] = inst_35327__$1);

return statearr_35478;
})();
if(inst_35332){
var statearr_35479_37202 = state_35449__$1;
(statearr_35479_37202[(1)] = (2));

} else {
var statearr_35480_37203 = state_35449__$1;
(statearr_35480_37203[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (24))){
var inst_35389 = (state_35449[(9)]);
var inst_35402 = (state_35449[(10)]);
var inst_35421 = (state_35449[(11)]);
var inst_35421__$1 = (inst_35389.cljs$core$IFn$_invoke$arity$1 ? inst_35389.cljs$core$IFn$_invoke$arity$1(inst_35402) : inst_35389.call(null,inst_35402));
var state_35449__$1 = (function (){var statearr_35481 = state_35449;
(statearr_35481[(11)] = inst_35421__$1);

return statearr_35481;
})();
if(cljs.core.truth_(inst_35421__$1)){
var statearr_35482_37205 = state_35449__$1;
(statearr_35482_37205[(1)] = (29));

} else {
var statearr_35483_37206 = state_35449__$1;
(statearr_35483_37206[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (4))){
var inst_35347 = (state_35449[(2)]);
var state_35449__$1 = state_35449;
if(cljs.core.truth_(inst_35347)){
var statearr_35484_37209 = state_35449__$1;
(statearr_35484_37209[(1)] = (8));

} else {
var statearr_35485_37210 = state_35449__$1;
(statearr_35485_37210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (15))){
var inst_35383 = (state_35449[(2)]);
var state_35449__$1 = state_35449;
if(cljs.core.truth_(inst_35383)){
var statearr_35486_37212 = state_35449__$1;
(statearr_35486_37212[(1)] = (19));

} else {
var statearr_35487_37213 = state_35449__$1;
(statearr_35487_37213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (21))){
var inst_35388 = (state_35449[(12)]);
var inst_35388__$1 = (state_35449[(2)]);
var inst_35389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35388__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35388__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35388__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35449__$1 = (function (){var statearr_35490 = state_35449;
(statearr_35490[(13)] = inst_35391);

(statearr_35490[(9)] = inst_35389);

(statearr_35490[(12)] = inst_35388__$1);

return statearr_35490;
})();
return cljs.core.async.ioc_alts_BANG_(state_35449__$1,(22),inst_35392);
} else {
if((state_val_35450 === (31))){
var inst_35430 = (state_35449[(2)]);
var state_35449__$1 = state_35449;
if(cljs.core.truth_(inst_35430)){
var statearr_35491_37218 = state_35449__$1;
(statearr_35491_37218[(1)] = (32));

} else {
var statearr_35492_37219 = state_35449__$1;
(statearr_35492_37219[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (32))){
var inst_35401 = (state_35449[(14)]);
var state_35449__$1 = state_35449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35449__$1,(35),out,inst_35401);
} else {
if((state_val_35450 === (33))){
var inst_35388 = (state_35449[(12)]);
var inst_35358 = inst_35388;
var state_35449__$1 = (function (){var statearr_35495 = state_35449;
(statearr_35495[(7)] = inst_35358);

return statearr_35495;
})();
var statearr_35498_37226 = state_35449__$1;
(statearr_35498_37226[(2)] = null);

(statearr_35498_37226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (13))){
var inst_35358 = (state_35449[(7)]);
var inst_35372 = inst_35358.cljs$lang$protocol_mask$partition0$;
var inst_35373 = (inst_35372 & (64));
var inst_35374 = inst_35358.cljs$core$ISeq$;
var inst_35375 = (cljs.core.PROTOCOL_SENTINEL === inst_35374);
var inst_35376 = ((inst_35373) || (inst_35375));
var state_35449__$1 = state_35449;
if(cljs.core.truth_(inst_35376)){
var statearr_35502_37229 = state_35449__$1;
(statearr_35502_37229[(1)] = (16));

} else {
var statearr_35504_37230 = state_35449__$1;
(statearr_35504_37230[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (22))){
var inst_35401 = (state_35449[(14)]);
var inst_35402 = (state_35449[(10)]);
var inst_35400 = (state_35449[(2)]);
var inst_35401__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35400,(0),null);
var inst_35402__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35400,(1),null);
var inst_35408 = (inst_35401__$1 == null);
var inst_35409 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35402__$1,change);
var inst_35410 = ((inst_35408) || (inst_35409));
var state_35449__$1 = (function (){var statearr_35508 = state_35449;
(statearr_35508[(14)] = inst_35401__$1);

(statearr_35508[(10)] = inst_35402__$1);

return statearr_35508;
})();
if(cljs.core.truth_(inst_35410)){
var statearr_35509_37234 = state_35449__$1;
(statearr_35509_37234[(1)] = (23));

} else {
var statearr_35510_37235 = state_35449__$1;
(statearr_35510_37235[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (36))){
var inst_35388 = (state_35449[(12)]);
var inst_35358 = inst_35388;
var state_35449__$1 = (function (){var statearr_35513 = state_35449;
(statearr_35513[(7)] = inst_35358);

return statearr_35513;
})();
var statearr_35517_37236 = state_35449__$1;
(statearr_35517_37236[(2)] = null);

(statearr_35517_37236[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (29))){
var inst_35421 = (state_35449[(11)]);
var state_35449__$1 = state_35449;
var statearr_35523_37238 = state_35449__$1;
(statearr_35523_37238[(2)] = inst_35421);

(statearr_35523_37238[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (6))){
var state_35449__$1 = state_35449;
var statearr_35526_37241 = state_35449__$1;
(statearr_35526_37241[(2)] = false);

(statearr_35526_37241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (28))){
var inst_35417 = (state_35449[(2)]);
var inst_35418 = calc_state();
var inst_35358 = inst_35418;
var state_35449__$1 = (function (){var statearr_35532 = state_35449;
(statearr_35532[(15)] = inst_35417);

(statearr_35532[(7)] = inst_35358);

return statearr_35532;
})();
var statearr_35533_37246 = state_35449__$1;
(statearr_35533_37246[(2)] = null);

(statearr_35533_37246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (25))){
var inst_35445 = (state_35449[(2)]);
var state_35449__$1 = state_35449;
var statearr_35534_37247 = state_35449__$1;
(statearr_35534_37247[(2)] = inst_35445);

(statearr_35534_37247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (34))){
var inst_35443 = (state_35449[(2)]);
var state_35449__$1 = state_35449;
var statearr_35535_37250 = state_35449__$1;
(statearr_35535_37250[(2)] = inst_35443);

(statearr_35535_37250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (17))){
var state_35449__$1 = state_35449;
var statearr_35536_37251 = state_35449__$1;
(statearr_35536_37251[(2)] = false);

(statearr_35536_37251[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (3))){
var state_35449__$1 = state_35449;
var statearr_35537_37252 = state_35449__$1;
(statearr_35537_37252[(2)] = false);

(statearr_35537_37252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (12))){
var inst_35447 = (state_35449[(2)]);
var state_35449__$1 = state_35449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35449__$1,inst_35447);
} else {
if((state_val_35450 === (2))){
var inst_35327 = (state_35449[(8)]);
var inst_35334 = inst_35327.cljs$lang$protocol_mask$partition0$;
var inst_35336 = (inst_35334 & (64));
var inst_35337 = inst_35327.cljs$core$ISeq$;
var inst_35338 = (cljs.core.PROTOCOL_SENTINEL === inst_35337);
var inst_35339 = ((inst_35336) || (inst_35338));
var state_35449__$1 = state_35449;
if(cljs.core.truth_(inst_35339)){
var statearr_35541_37272 = state_35449__$1;
(statearr_35541_37272[(1)] = (5));

} else {
var statearr_35543_37273 = state_35449__$1;
(statearr_35543_37273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (23))){
var inst_35401 = (state_35449[(14)]);
var inst_35412 = (inst_35401 == null);
var state_35449__$1 = state_35449;
if(cljs.core.truth_(inst_35412)){
var statearr_35547_37274 = state_35449__$1;
(statearr_35547_37274[(1)] = (26));

} else {
var statearr_35549_37275 = state_35449__$1;
(statearr_35549_37275[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (35))){
var inst_35433 = (state_35449[(2)]);
var state_35449__$1 = state_35449;
if(cljs.core.truth_(inst_35433)){
var statearr_35551_37280 = state_35449__$1;
(statearr_35551_37280[(1)] = (36));

} else {
var statearr_35552_37281 = state_35449__$1;
(statearr_35552_37281[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (19))){
var inst_35358 = (state_35449[(7)]);
var inst_35385 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35358);
var state_35449__$1 = state_35449;
var statearr_35553_37282 = state_35449__$1;
(statearr_35553_37282[(2)] = inst_35385);

(statearr_35553_37282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (11))){
var inst_35358 = (state_35449[(7)]);
var inst_35364 = (inst_35358 == null);
var inst_35365 = cljs.core.not(inst_35364);
var state_35449__$1 = state_35449;
if(inst_35365){
var statearr_35557_37287 = state_35449__$1;
(statearr_35557_37287[(1)] = (13));

} else {
var statearr_35559_37288 = state_35449__$1;
(statearr_35559_37288[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (9))){
var inst_35327 = (state_35449[(8)]);
var state_35449__$1 = state_35449;
var statearr_35560_37292 = state_35449__$1;
(statearr_35560_37292[(2)] = inst_35327);

(statearr_35560_37292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (5))){
var state_35449__$1 = state_35449;
var statearr_35562_37296 = state_35449__$1;
(statearr_35562_37296[(2)] = true);

(statearr_35562_37296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (14))){
var state_35449__$1 = state_35449;
var statearr_35565_37297 = state_35449__$1;
(statearr_35565_37297[(2)] = false);

(statearr_35565_37297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (26))){
var inst_35402 = (state_35449[(10)]);
var inst_35414 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35402);
var state_35449__$1 = state_35449;
var statearr_35570_37299 = state_35449__$1;
(statearr_35570_37299[(2)] = inst_35414);

(statearr_35570_37299[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (16))){
var state_35449__$1 = state_35449;
var statearr_35575_37303 = state_35449__$1;
(statearr_35575_37303[(2)] = true);

(statearr_35575_37303[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (38))){
var inst_35439 = (state_35449[(2)]);
var state_35449__$1 = state_35449;
var statearr_35578_37304 = state_35449__$1;
(statearr_35578_37304[(2)] = inst_35439);

(statearr_35578_37304[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (30))){
var inst_35391 = (state_35449[(13)]);
var inst_35389 = (state_35449[(9)]);
var inst_35402 = (state_35449[(10)]);
var inst_35425 = cljs.core.empty_QMARK_(inst_35389);
var inst_35426 = (inst_35391.cljs$core$IFn$_invoke$arity$1 ? inst_35391.cljs$core$IFn$_invoke$arity$1(inst_35402) : inst_35391.call(null,inst_35402));
var inst_35427 = cljs.core.not(inst_35426);
var inst_35428 = ((inst_35425) && (inst_35427));
var state_35449__$1 = state_35449;
var statearr_35579_37310 = state_35449__$1;
(statearr_35579_37310[(2)] = inst_35428);

(statearr_35579_37310[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (10))){
var inst_35327 = (state_35449[(8)]);
var inst_35352 = (state_35449[(2)]);
var inst_35354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35352,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35352,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35352,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35358 = inst_35327;
var state_35449__$1 = (function (){var statearr_35582 = state_35449;
(statearr_35582[(16)] = inst_35354);

(statearr_35582[(17)] = inst_35355);

(statearr_35582[(18)] = inst_35357);

(statearr_35582[(7)] = inst_35358);

return statearr_35582;
})();
var statearr_35585_37316 = state_35449__$1;
(statearr_35585_37316[(2)] = null);

(statearr_35585_37316[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (18))){
var inst_35380 = (state_35449[(2)]);
var state_35449__$1 = state_35449;
var statearr_35604_37318 = state_35449__$1;
(statearr_35604_37318[(2)] = inst_35380);

(statearr_35604_37318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (37))){
var state_35449__$1 = state_35449;
var statearr_35608_37322 = state_35449__$1;
(statearr_35608_37322[(2)] = null);

(statearr_35608_37322[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35450 === (8))){
var inst_35327 = (state_35449[(8)]);
var inst_35349 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35327);
var state_35449__$1 = state_35449;
var statearr_35609_37328 = state_35449__$1;
(statearr_35609_37328[(2)] = inst_35349);

(statearr_35609_37328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__34207__auto__ = null;
var cljs$core$async$mix_$_state_machine__34207__auto____0 = (function (){
var statearr_35614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35614[(0)] = cljs$core$async$mix_$_state_machine__34207__auto__);

(statearr_35614[(1)] = (1));

return statearr_35614;
});
var cljs$core$async$mix_$_state_machine__34207__auto____1 = (function (state_35449){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35449);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35615){if((e35615 instanceof Object)){
var ex__34210__auto__ = e35615;
var statearr_35616_37334 = state_35449;
(statearr_35616_37334[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37335 = state_35449;
state_35449 = G__37335;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34207__auto__ = function(state_35449){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34207__auto____1.call(this,state_35449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34207__auto____0;
cljs$core$async$mix_$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34207__auto____1;
return cljs$core$async$mix_$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35620 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35620[(6)] = c__34274__auto___37188);

return statearr_35620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35692 = arguments.length;
switch (G__35692) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35737 = arguments.length;
switch (G__35737) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35723_SHARP_){
if(cljs.core.truth_((p1__35723_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35723_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35723_SHARP_.call(null,topic)))){
return p1__35723_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35723_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35738 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35739){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35739 = meta35739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35740,meta35739__$1){
var self__ = this;
var _35740__$1 = this;
return (new cljs.core.async.t_cljs$core$async35738(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35739__$1));
}));

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35740){
var self__ = this;
var _35740__$1 = this;
return self__.meta35739;
}));

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35738.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35739","meta35739",-761283003,null)], null);
}));

(cljs.core.async.t_cljs$core$async35738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35738");

(cljs.core.async.t_cljs$core$async35738.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35738.
 */
cljs.core.async.__GT_t_cljs$core$async35738 = (function cljs$core$async$__GT_t_cljs$core$async35738(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35739){
return (new cljs.core.async.t_cljs$core$async35738(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35739));
});

}

return (new cljs.core.async.t_cljs$core$async35738(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34274__auto___37381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35824){
var state_val_35825 = (state_35824[(1)]);
if((state_val_35825 === (7))){
var inst_35820 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35826_37386 = state_35824__$1;
(statearr_35826_37386[(2)] = inst_35820);

(statearr_35826_37386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (20))){
var state_35824__$1 = state_35824;
var statearr_35827_37387 = state_35824__$1;
(statearr_35827_37387[(2)] = null);

(statearr_35827_37387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (1))){
var state_35824__$1 = state_35824;
var statearr_35829_37391 = state_35824__$1;
(statearr_35829_37391[(2)] = null);

(statearr_35829_37391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (24))){
var inst_35803 = (state_35824[(7)]);
var inst_35812 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35803);
var state_35824__$1 = state_35824;
var statearr_35833_37393 = state_35824__$1;
(statearr_35833_37393[(2)] = inst_35812);

(statearr_35833_37393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (4))){
var inst_35755 = (state_35824[(8)]);
var inst_35755__$1 = (state_35824[(2)]);
var inst_35756 = (inst_35755__$1 == null);
var state_35824__$1 = (function (){var statearr_35834 = state_35824;
(statearr_35834[(8)] = inst_35755__$1);

return statearr_35834;
})();
if(cljs.core.truth_(inst_35756)){
var statearr_35837_37398 = state_35824__$1;
(statearr_35837_37398[(1)] = (5));

} else {
var statearr_35838_37399 = state_35824__$1;
(statearr_35838_37399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (15))){
var inst_35797 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35841_37400 = state_35824__$1;
(statearr_35841_37400[(2)] = inst_35797);

(statearr_35841_37400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (21))){
var inst_35817 = (state_35824[(2)]);
var state_35824__$1 = (function (){var statearr_35843 = state_35824;
(statearr_35843[(9)] = inst_35817);

return statearr_35843;
})();
var statearr_35844_37401 = state_35824__$1;
(statearr_35844_37401[(2)] = null);

(statearr_35844_37401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (13))){
var inst_35779 = (state_35824[(10)]);
var inst_35781 = cljs.core.chunked_seq_QMARK_(inst_35779);
var state_35824__$1 = state_35824;
if(inst_35781){
var statearr_35846_37404 = state_35824__$1;
(statearr_35846_37404[(1)] = (16));

} else {
var statearr_35847_37405 = state_35824__$1;
(statearr_35847_37405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (22))){
var inst_35809 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
if(cljs.core.truth_(inst_35809)){
var statearr_35848_37407 = state_35824__$1;
(statearr_35848_37407[(1)] = (23));

} else {
var statearr_35849_37409 = state_35824__$1;
(statearr_35849_37409[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (6))){
var inst_35803 = (state_35824[(7)]);
var inst_35805 = (state_35824[(11)]);
var inst_35755 = (state_35824[(8)]);
var inst_35803__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35755) : topic_fn.call(null,inst_35755));
var inst_35804 = cljs.core.deref(mults);
var inst_35805__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35804,inst_35803__$1);
var state_35824__$1 = (function (){var statearr_35851 = state_35824;
(statearr_35851[(7)] = inst_35803__$1);

(statearr_35851[(11)] = inst_35805__$1);

return statearr_35851;
})();
if(cljs.core.truth_(inst_35805__$1)){
var statearr_35852_37412 = state_35824__$1;
(statearr_35852_37412[(1)] = (19));

} else {
var statearr_35853_37413 = state_35824__$1;
(statearr_35853_37413[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (25))){
var inst_35814 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35855_37414 = state_35824__$1;
(statearr_35855_37414[(2)] = inst_35814);

(statearr_35855_37414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (17))){
var inst_35779 = (state_35824[(10)]);
var inst_35788 = cljs.core.first(inst_35779);
var inst_35789 = cljs.core.async.muxch_STAR_(inst_35788);
var inst_35790 = cljs.core.async.close_BANG_(inst_35789);
var inst_35791 = cljs.core.next(inst_35779);
var inst_35765 = inst_35791;
var inst_35766 = null;
var inst_35767 = (0);
var inst_35768 = (0);
var state_35824__$1 = (function (){var statearr_35857 = state_35824;
(statearr_35857[(12)] = inst_35790);

(statearr_35857[(13)] = inst_35767);

(statearr_35857[(14)] = inst_35765);

(statearr_35857[(15)] = inst_35766);

(statearr_35857[(16)] = inst_35768);

return statearr_35857;
})();
var statearr_35858_37416 = state_35824__$1;
(statearr_35858_37416[(2)] = null);

(statearr_35858_37416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (3))){
var inst_35822 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35824__$1,inst_35822);
} else {
if((state_val_35825 === (12))){
var inst_35799 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35860_37420 = state_35824__$1;
(statearr_35860_37420[(2)] = inst_35799);

(statearr_35860_37420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (2))){
var state_35824__$1 = state_35824;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35824__$1,(4),ch);
} else {
if((state_val_35825 === (23))){
var state_35824__$1 = state_35824;
var statearr_35861_37426 = state_35824__$1;
(statearr_35861_37426[(2)] = null);

(statearr_35861_37426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (19))){
var inst_35805 = (state_35824[(11)]);
var inst_35755 = (state_35824[(8)]);
var inst_35807 = cljs.core.async.muxch_STAR_(inst_35805);
var state_35824__$1 = state_35824;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35824__$1,(22),inst_35807,inst_35755);
} else {
if((state_val_35825 === (11))){
var inst_35765 = (state_35824[(14)]);
var inst_35779 = (state_35824[(10)]);
var inst_35779__$1 = cljs.core.seq(inst_35765);
var state_35824__$1 = (function (){var statearr_35868 = state_35824;
(statearr_35868[(10)] = inst_35779__$1);

return statearr_35868;
})();
if(inst_35779__$1){
var statearr_35869_37431 = state_35824__$1;
(statearr_35869_37431[(1)] = (13));

} else {
var statearr_35870_37432 = state_35824__$1;
(statearr_35870_37432[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (9))){
var inst_35801 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35873_37434 = state_35824__$1;
(statearr_35873_37434[(2)] = inst_35801);

(statearr_35873_37434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (5))){
var inst_35762 = cljs.core.deref(mults);
var inst_35763 = cljs.core.vals(inst_35762);
var inst_35764 = cljs.core.seq(inst_35763);
var inst_35765 = inst_35764;
var inst_35766 = null;
var inst_35767 = (0);
var inst_35768 = (0);
var state_35824__$1 = (function (){var statearr_35876 = state_35824;
(statearr_35876[(13)] = inst_35767);

(statearr_35876[(14)] = inst_35765);

(statearr_35876[(15)] = inst_35766);

(statearr_35876[(16)] = inst_35768);

return statearr_35876;
})();
var statearr_35877_37441 = state_35824__$1;
(statearr_35877_37441[(2)] = null);

(statearr_35877_37441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (14))){
var state_35824__$1 = state_35824;
var statearr_35883_37447 = state_35824__$1;
(statearr_35883_37447[(2)] = null);

(statearr_35883_37447[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (16))){
var inst_35779 = (state_35824[(10)]);
var inst_35783 = cljs.core.chunk_first(inst_35779);
var inst_35784 = cljs.core.chunk_rest(inst_35779);
var inst_35785 = cljs.core.count(inst_35783);
var inst_35765 = inst_35784;
var inst_35766 = inst_35783;
var inst_35767 = inst_35785;
var inst_35768 = (0);
var state_35824__$1 = (function (){var statearr_35894 = state_35824;
(statearr_35894[(13)] = inst_35767);

(statearr_35894[(14)] = inst_35765);

(statearr_35894[(15)] = inst_35766);

(statearr_35894[(16)] = inst_35768);

return statearr_35894;
})();
var statearr_35896_37450 = state_35824__$1;
(statearr_35896_37450[(2)] = null);

(statearr_35896_37450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (10))){
var inst_35767 = (state_35824[(13)]);
var inst_35765 = (state_35824[(14)]);
var inst_35766 = (state_35824[(15)]);
var inst_35768 = (state_35824[(16)]);
var inst_35773 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35766,inst_35768);
var inst_35774 = cljs.core.async.muxch_STAR_(inst_35773);
var inst_35775 = cljs.core.async.close_BANG_(inst_35774);
var inst_35776 = (inst_35768 + (1));
var tmp35879 = inst_35767;
var tmp35880 = inst_35765;
var tmp35881 = inst_35766;
var inst_35765__$1 = tmp35880;
var inst_35766__$1 = tmp35881;
var inst_35767__$1 = tmp35879;
var inst_35768__$1 = inst_35776;
var state_35824__$1 = (function (){var statearr_35903 = state_35824;
(statearr_35903[(17)] = inst_35775);

(statearr_35903[(13)] = inst_35767__$1);

(statearr_35903[(14)] = inst_35765__$1);

(statearr_35903[(15)] = inst_35766__$1);

(statearr_35903[(16)] = inst_35768__$1);

return statearr_35903;
})();
var statearr_35904_37459 = state_35824__$1;
(statearr_35904_37459[(2)] = null);

(statearr_35904_37459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (18))){
var inst_35794 = (state_35824[(2)]);
var state_35824__$1 = state_35824;
var statearr_35907_37462 = state_35824__$1;
(statearr_35907_37462[(2)] = inst_35794);

(statearr_35907_37462[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35825 === (8))){
var inst_35767 = (state_35824[(13)]);
var inst_35768 = (state_35824[(16)]);
var inst_35770 = (inst_35768 < inst_35767);
var inst_35771 = inst_35770;
var state_35824__$1 = state_35824;
if(cljs.core.truth_(inst_35771)){
var statearr_35910_37465 = state_35824__$1;
(statearr_35910_37465[(1)] = (10));

} else {
var statearr_35911_37466 = state_35824__$1;
(statearr_35911_37466[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_35912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35912[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_35912[(1)] = (1));

return statearr_35912;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35824){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35824);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e35914){if((e35914 instanceof Object)){
var ex__34210__auto__ = e35914;
var statearr_35915_37477 = state_35824;
(statearr_35915_37477[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35914;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37481 = state_35824;
state_35824 = G__37481;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_35916 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_35916[(6)] = c__34274__auto___37381);

return statearr_35916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35921 = arguments.length;
switch (G__35921) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35928 = arguments.length;
switch (G__35928) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35936 = arguments.length;
switch (G__35936) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__34274__auto___37504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_35989){
var state_val_35990 = (state_35989[(1)]);
if((state_val_35990 === (7))){
var state_35989__$1 = state_35989;
var statearr_35992_37506 = state_35989__$1;
(statearr_35992_37506[(2)] = null);

(statearr_35992_37506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35990 === (1))){
var state_35989__$1 = state_35989;
var statearr_35993_37507 = state_35989__$1;
(statearr_35993_37507[(2)] = null);

(statearr_35993_37507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35990 === (4))){
var inst_35949 = (state_35989[(7)]);
var inst_35951 = (inst_35949 < cnt);
var state_35989__$1 = state_35989;
if(cljs.core.truth_(inst_35951)){
var statearr_35998_37511 = state_35989__$1;
(statearr_35998_37511[(1)] = (6));

} else {
var statearr_35999_37512 = state_35989__$1;
(statearr_35999_37512[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35990 === (15))){
var inst_35985 = (state_35989[(2)]);
var state_35989__$1 = state_35989;
var statearr_36000_37514 = state_35989__$1;
(statearr_36000_37514[(2)] = inst_35985);

(statearr_36000_37514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35990 === (13))){
var inst_35978 = cljs.core.async.close_BANG_(out);
var state_35989__$1 = state_35989;
var statearr_36001_37517 = state_35989__$1;
(statearr_36001_37517[(2)] = inst_35978);

(statearr_36001_37517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35990 === (6))){
var state_35989__$1 = state_35989;
var statearr_36005_37519 = state_35989__$1;
(statearr_36005_37519[(2)] = null);

(statearr_36005_37519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35990 === (3))){
var inst_35987 = (state_35989[(2)]);
var state_35989__$1 = state_35989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35989__$1,inst_35987);
} else {
if((state_val_35990 === (12))){
var inst_35974 = (state_35989[(8)]);
var inst_35974__$1 = (state_35989[(2)]);
var inst_35976 = cljs.core.some(cljs.core.nil_QMARK_,inst_35974__$1);
var state_35989__$1 = (function (){var statearr_36012 = state_35989;
(statearr_36012[(8)] = inst_35974__$1);

return statearr_36012;
})();
if(cljs.core.truth_(inst_35976)){
var statearr_36014_37522 = state_35989__$1;
(statearr_36014_37522[(1)] = (13));

} else {
var statearr_36016_37526 = state_35989__$1;
(statearr_36016_37526[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35990 === (2))){
var inst_35947 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35949 = (0);
var state_35989__$1 = (function (){var statearr_36018 = state_35989;
(statearr_36018[(9)] = inst_35947);

(statearr_36018[(7)] = inst_35949);

return statearr_36018;
})();
var statearr_36020_37529 = state_35989__$1;
(statearr_36020_37529[(2)] = null);

(statearr_36020_37529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35990 === (11))){
var inst_35949 = (state_35989[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_35989,(10),Object,null,(9));
var inst_35960 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35949) : chs__$1.call(null,inst_35949));
var inst_35961 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35949) : done.call(null,inst_35949));
var inst_35962 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35960,inst_35961);
var state_35989__$1 = state_35989;
var statearr_36024_37531 = state_35989__$1;
(statearr_36024_37531[(2)] = inst_35962);


cljs.core.async.impl.ioc_helpers.process_exception(state_35989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35990 === (9))){
var inst_35949 = (state_35989[(7)]);
var inst_35964 = (state_35989[(2)]);
var inst_35965 = (inst_35949 + (1));
var inst_35949__$1 = inst_35965;
var state_35989__$1 = (function (){var statearr_36025 = state_35989;
(statearr_36025[(10)] = inst_35964);

(statearr_36025[(7)] = inst_35949__$1);

return statearr_36025;
})();
var statearr_36028_37534 = state_35989__$1;
(statearr_36028_37534[(2)] = null);

(statearr_36028_37534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35990 === (5))){
var inst_35971 = (state_35989[(2)]);
var state_35989__$1 = (function (){var statearr_36030 = state_35989;
(statearr_36030[(11)] = inst_35971);

return statearr_36030;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35989__$1,(12),dchan);
} else {
if((state_val_35990 === (14))){
var inst_35974 = (state_35989[(8)]);
var inst_35980 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35974);
var state_35989__$1 = state_35989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35989__$1,(16),out,inst_35980);
} else {
if((state_val_35990 === (16))){
var inst_35982 = (state_35989[(2)]);
var state_35989__$1 = (function (){var statearr_36033 = state_35989;
(statearr_36033[(12)] = inst_35982);

return statearr_36033;
})();
var statearr_36034_37541 = state_35989__$1;
(statearr_36034_37541[(2)] = null);

(statearr_36034_37541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35990 === (10))){
var inst_35955 = (state_35989[(2)]);
var inst_35956 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35989__$1 = (function (){var statearr_36038 = state_35989;
(statearr_36038[(13)] = inst_35955);

return statearr_36038;
})();
var statearr_36039_37542 = state_35989__$1;
(statearr_36039_37542[(2)] = inst_35956);


cljs.core.async.impl.ioc_helpers.process_exception(state_35989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35990 === (8))){
var inst_35969 = (state_35989[(2)]);
var state_35989__$1 = state_35989;
var statearr_36042_37543 = state_35989__$1;
(statearr_36042_37543[(2)] = inst_35969);

(statearr_36042_37543[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36043[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36043[(1)] = (1));

return statearr_36043;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_35989){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_35989);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36046){if((e36046 instanceof Object)){
var ex__34210__auto__ = e36046;
var statearr_36048_37544 = state_35989;
(statearr_36048_37544[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36046;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37545 = state_35989;
state_35989 = G__37545;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_35989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_35989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36052 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36052[(6)] = c__34274__auto___37504);

return statearr_36052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36056 = arguments.length;
switch (G__36056) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34274__auto___37547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36088){
var state_val_36089 = (state_36088[(1)]);
if((state_val_36089 === (7))){
var inst_36068 = (state_36088[(7)]);
var inst_36067 = (state_36088[(8)]);
var inst_36067__$1 = (state_36088[(2)]);
var inst_36068__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36067__$1,(0),null);
var inst_36069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36067__$1,(1),null);
var inst_36070 = (inst_36068__$1 == null);
var state_36088__$1 = (function (){var statearr_36090 = state_36088;
(statearr_36090[(9)] = inst_36069);

(statearr_36090[(7)] = inst_36068__$1);

(statearr_36090[(8)] = inst_36067__$1);

return statearr_36090;
})();
if(cljs.core.truth_(inst_36070)){
var statearr_36091_37548 = state_36088__$1;
(statearr_36091_37548[(1)] = (8));

} else {
var statearr_36092_37549 = state_36088__$1;
(statearr_36092_37549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (1))){
var inst_36057 = cljs.core.vec(chs);
var inst_36058 = inst_36057;
var state_36088__$1 = (function (){var statearr_36093 = state_36088;
(statearr_36093[(10)] = inst_36058);

return statearr_36093;
})();
var statearr_36095_37550 = state_36088__$1;
(statearr_36095_37550[(2)] = null);

(statearr_36095_37550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (4))){
var inst_36058 = (state_36088[(10)]);
var state_36088__$1 = state_36088;
return cljs.core.async.ioc_alts_BANG_(state_36088__$1,(7),inst_36058);
} else {
if((state_val_36089 === (6))){
var inst_36084 = (state_36088[(2)]);
var state_36088__$1 = state_36088;
var statearr_36098_37551 = state_36088__$1;
(statearr_36098_37551[(2)] = inst_36084);

(statearr_36098_37551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (3))){
var inst_36086 = (state_36088[(2)]);
var state_36088__$1 = state_36088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36088__$1,inst_36086);
} else {
if((state_val_36089 === (2))){
var inst_36058 = (state_36088[(10)]);
var inst_36060 = cljs.core.count(inst_36058);
var inst_36061 = (inst_36060 > (0));
var state_36088__$1 = state_36088;
if(cljs.core.truth_(inst_36061)){
var statearr_36100_37553 = state_36088__$1;
(statearr_36100_37553[(1)] = (4));

} else {
var statearr_36101_37554 = state_36088__$1;
(statearr_36101_37554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (11))){
var inst_36058 = (state_36088[(10)]);
var inst_36077 = (state_36088[(2)]);
var tmp36099 = inst_36058;
var inst_36058__$1 = tmp36099;
var state_36088__$1 = (function (){var statearr_36102 = state_36088;
(statearr_36102[(10)] = inst_36058__$1);

(statearr_36102[(11)] = inst_36077);

return statearr_36102;
})();
var statearr_36103_37558 = state_36088__$1;
(statearr_36103_37558[(2)] = null);

(statearr_36103_37558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (9))){
var inst_36068 = (state_36088[(7)]);
var state_36088__$1 = state_36088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36088__$1,(11),out,inst_36068);
} else {
if((state_val_36089 === (5))){
var inst_36082 = cljs.core.async.close_BANG_(out);
var state_36088__$1 = state_36088;
var statearr_36108_37560 = state_36088__$1;
(statearr_36108_37560[(2)] = inst_36082);

(statearr_36108_37560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (10))){
var inst_36080 = (state_36088[(2)]);
var state_36088__$1 = state_36088;
var statearr_36109_37561 = state_36088__$1;
(statearr_36109_37561[(2)] = inst_36080);

(statearr_36109_37561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36089 === (8))){
var inst_36058 = (state_36088[(10)]);
var inst_36069 = (state_36088[(9)]);
var inst_36068 = (state_36088[(7)]);
var inst_36067 = (state_36088[(8)]);
var inst_36072 = (function (){var cs = inst_36058;
var vec__36063 = inst_36067;
var v = inst_36068;
var c = inst_36069;
return (function (p1__36054_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36054_SHARP_);
});
})();
var inst_36073 = cljs.core.filterv(inst_36072,inst_36058);
var inst_36058__$1 = inst_36073;
var state_36088__$1 = (function (){var statearr_36113 = state_36088;
(statearr_36113[(10)] = inst_36058__$1);

return statearr_36113;
})();
var statearr_36114_37562 = state_36088__$1;
(statearr_36114_37562[(2)] = null);

(statearr_36114_37562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36119 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36119[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36119[(1)] = (1));

return statearr_36119;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36088){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36088);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36120){if((e36120 instanceof Object)){
var ex__34210__auto__ = e36120;
var statearr_36121_37563 = state_36088;
(statearr_36121_37563[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36120;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37564 = state_36088;
state_36088 = G__37564;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36123 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36123[(6)] = c__34274__auto___37547);

return statearr_36123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36133 = arguments.length;
switch (G__36133) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34274__auto___37566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36160){
var state_val_36161 = (state_36160[(1)]);
if((state_val_36161 === (7))){
var inst_36142 = (state_36160[(7)]);
var inst_36142__$1 = (state_36160[(2)]);
var inst_36143 = (inst_36142__$1 == null);
var inst_36144 = cljs.core.not(inst_36143);
var state_36160__$1 = (function (){var statearr_36162 = state_36160;
(statearr_36162[(7)] = inst_36142__$1);

return statearr_36162;
})();
if(inst_36144){
var statearr_36165_37567 = state_36160__$1;
(statearr_36165_37567[(1)] = (8));

} else {
var statearr_36166_37568 = state_36160__$1;
(statearr_36166_37568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (1))){
var inst_36136 = (0);
var state_36160__$1 = (function (){var statearr_36167 = state_36160;
(statearr_36167[(8)] = inst_36136);

return statearr_36167;
})();
var statearr_36168_37569 = state_36160__$1;
(statearr_36168_37569[(2)] = null);

(statearr_36168_37569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (4))){
var state_36160__$1 = state_36160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36160__$1,(7),ch);
} else {
if((state_val_36161 === (6))){
var inst_36155 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
var statearr_36170_37573 = state_36160__$1;
(statearr_36170_37573[(2)] = inst_36155);

(statearr_36170_37573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (3))){
var inst_36157 = (state_36160[(2)]);
var inst_36158 = cljs.core.async.close_BANG_(out);
var state_36160__$1 = (function (){var statearr_36173 = state_36160;
(statearr_36173[(9)] = inst_36157);

return statearr_36173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36160__$1,inst_36158);
} else {
if((state_val_36161 === (2))){
var inst_36136 = (state_36160[(8)]);
var inst_36138 = (inst_36136 < n);
var state_36160__$1 = state_36160;
if(cljs.core.truth_(inst_36138)){
var statearr_36175_37576 = state_36160__$1;
(statearr_36175_37576[(1)] = (4));

} else {
var statearr_36176_37578 = state_36160__$1;
(statearr_36176_37578[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (11))){
var inst_36136 = (state_36160[(8)]);
var inst_36147 = (state_36160[(2)]);
var inst_36148 = (inst_36136 + (1));
var inst_36136__$1 = inst_36148;
var state_36160__$1 = (function (){var statearr_36177 = state_36160;
(statearr_36177[(10)] = inst_36147);

(statearr_36177[(8)] = inst_36136__$1);

return statearr_36177;
})();
var statearr_36178_37582 = state_36160__$1;
(statearr_36178_37582[(2)] = null);

(statearr_36178_37582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (9))){
var state_36160__$1 = state_36160;
var statearr_36179_37584 = state_36160__$1;
(statearr_36179_37584[(2)] = null);

(statearr_36179_37584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (5))){
var state_36160__$1 = state_36160;
var statearr_36185_37585 = state_36160__$1;
(statearr_36185_37585[(2)] = null);

(statearr_36185_37585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (10))){
var inst_36152 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
var statearr_36188_37588 = state_36160__$1;
(statearr_36188_37588[(2)] = inst_36152);

(statearr_36188_37588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (8))){
var inst_36142 = (state_36160[(7)]);
var state_36160__$1 = state_36160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36160__$1,(11),out,inst_36142);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36191 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36191[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36191[(1)] = (1));

return statearr_36191;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36160){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36160);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36194){if((e36194 instanceof Object)){
var ex__34210__auto__ = e36194;
var statearr_36195_37600 = state_36160;
(statearr_36195_37600[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36194;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37601 = state_36160;
state_36160 = G__37601;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36200 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36200[(6)] = c__34274__auto___37566);

return statearr_36200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36206 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36206 = (function (f,ch,meta36207){
this.f = f;
this.ch = ch;
this.meta36207 = meta36207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36208,meta36207__$1){
var self__ = this;
var _36208__$1 = this;
return (new cljs.core.async.t_cljs$core$async36206(self__.f,self__.ch,meta36207__$1));
}));

(cljs.core.async.t_cljs$core$async36206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36208){
var self__ = this;
var _36208__$1 = this;
return self__.meta36207;
}));

(cljs.core.async.t_cljs$core$async36206.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36206.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36206.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36206.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36206.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36216 = (function (f,ch,meta36207,_,fn1,meta36217){
this.f = f;
this.ch = ch;
this.meta36207 = meta36207;
this._ = _;
this.fn1 = fn1;
this.meta36217 = meta36217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36218,meta36217__$1){
var self__ = this;
var _36218__$1 = this;
return (new cljs.core.async.t_cljs$core$async36216(self__.f,self__.ch,self__.meta36207,self__._,self__.fn1,meta36217__$1));
}));

(cljs.core.async.t_cljs$core$async36216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36218){
var self__ = this;
var _36218__$1 = this;
return self__.meta36217;
}));

(cljs.core.async.t_cljs$core$async36216.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36216.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36203_SHARP_){
var G__36225 = (((p1__36203_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36203_SHARP_) : self__.f.call(null,p1__36203_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36225) : f1.call(null,G__36225));
});
}));

(cljs.core.async.t_cljs$core$async36216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36207","meta36207",-935669420,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36206","cljs.core.async/t_cljs$core$async36206",-1650598040,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36217","meta36217",-1182892909,null)], null);
}));

(cljs.core.async.t_cljs$core$async36216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36216");

(cljs.core.async.t_cljs$core$async36216.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36216.
 */
cljs.core.async.__GT_t_cljs$core$async36216 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36216(f__$1,ch__$1,meta36207__$1,___$2,fn1__$1,meta36217){
return (new cljs.core.async.t_cljs$core$async36216(f__$1,ch__$1,meta36207__$1,___$2,fn1__$1,meta36217));
});

}

return (new cljs.core.async.t_cljs$core$async36216(self__.f,self__.ch,self__.meta36207,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36227 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36227) : self__.f.call(null,G__36227));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36206.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36206.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36207","meta36207",-935669420,null)], null);
}));

(cljs.core.async.t_cljs$core$async36206.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36206");

(cljs.core.async.t_cljs$core$async36206.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36206");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36206.
 */
cljs.core.async.__GT_t_cljs$core$async36206 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36206(f__$1,ch__$1,meta36207){
return (new cljs.core.async.t_cljs$core$async36206(f__$1,ch__$1,meta36207));
});

}

return (new cljs.core.async.t_cljs$core$async36206(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36228 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36228 = (function (f,ch,meta36229){
this.f = f;
this.ch = ch;
this.meta36229 = meta36229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36230,meta36229__$1){
var self__ = this;
var _36230__$1 = this;
return (new cljs.core.async.t_cljs$core$async36228(self__.f,self__.ch,meta36229__$1));
}));

(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36230){
var self__ = this;
var _36230__$1 = this;
return self__.meta36229;
}));

(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36228.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36229","meta36229",697508311,null)], null);
}));

(cljs.core.async.t_cljs$core$async36228.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36228");

(cljs.core.async.t_cljs$core$async36228.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36228");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36228.
 */
cljs.core.async.__GT_t_cljs$core$async36228 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36228(f__$1,ch__$1,meta36229){
return (new cljs.core.async.t_cljs$core$async36228(f__$1,ch__$1,meta36229));
});

}

return (new cljs.core.async.t_cljs$core$async36228(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36240 = (function (p,ch,meta36241){
this.p = p;
this.ch = ch;
this.meta36241 = meta36241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36242,meta36241__$1){
var self__ = this;
var _36242__$1 = this;
return (new cljs.core.async.t_cljs$core$async36240(self__.p,self__.ch,meta36241__$1));
}));

(cljs.core.async.t_cljs$core$async36240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36242){
var self__ = this;
var _36242__$1 = this;
return self__.meta36241;
}));

(cljs.core.async.t_cljs$core$async36240.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36240.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36240.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36240.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36241","meta36241",-1651397265,null)], null);
}));

(cljs.core.async.t_cljs$core$async36240.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36240");

(cljs.core.async.t_cljs$core$async36240.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async36240");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36240.
 */
cljs.core.async.__GT_t_cljs$core$async36240 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36240(p__$1,ch__$1,meta36241){
return (new cljs.core.async.t_cljs$core$async36240(p__$1,ch__$1,meta36241));
});

}

return (new cljs.core.async.t_cljs$core$async36240(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36258 = arguments.length;
switch (G__36258) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34274__auto___37638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36279){
var state_val_36280 = (state_36279[(1)]);
if((state_val_36280 === (7))){
var inst_36275 = (state_36279[(2)]);
var state_36279__$1 = state_36279;
var statearr_36281_37640 = state_36279__$1;
(statearr_36281_37640[(2)] = inst_36275);

(statearr_36281_37640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (1))){
var state_36279__$1 = state_36279;
var statearr_36282_37642 = state_36279__$1;
(statearr_36282_37642[(2)] = null);

(statearr_36282_37642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (4))){
var inst_36261 = (state_36279[(7)]);
var inst_36261__$1 = (state_36279[(2)]);
var inst_36262 = (inst_36261__$1 == null);
var state_36279__$1 = (function (){var statearr_36283 = state_36279;
(statearr_36283[(7)] = inst_36261__$1);

return statearr_36283;
})();
if(cljs.core.truth_(inst_36262)){
var statearr_36284_37645 = state_36279__$1;
(statearr_36284_37645[(1)] = (5));

} else {
var statearr_36285_37649 = state_36279__$1;
(statearr_36285_37649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (6))){
var inst_36261 = (state_36279[(7)]);
var inst_36266 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36261) : p.call(null,inst_36261));
var state_36279__$1 = state_36279;
if(cljs.core.truth_(inst_36266)){
var statearr_36286_37652 = state_36279__$1;
(statearr_36286_37652[(1)] = (8));

} else {
var statearr_36287_37653 = state_36279__$1;
(statearr_36287_37653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (3))){
var inst_36277 = (state_36279[(2)]);
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36279__$1,inst_36277);
} else {
if((state_val_36280 === (2))){
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36279__$1,(4),ch);
} else {
if((state_val_36280 === (11))){
var inst_36269 = (state_36279[(2)]);
var state_36279__$1 = state_36279;
var statearr_36288_37655 = state_36279__$1;
(statearr_36288_37655[(2)] = inst_36269);

(statearr_36288_37655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (9))){
var state_36279__$1 = state_36279;
var statearr_36289_37661 = state_36279__$1;
(statearr_36289_37661[(2)] = null);

(statearr_36289_37661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (5))){
var inst_36264 = cljs.core.async.close_BANG_(out);
var state_36279__$1 = state_36279;
var statearr_36290_37663 = state_36279__$1;
(statearr_36290_37663[(2)] = inst_36264);

(statearr_36290_37663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (10))){
var inst_36272 = (state_36279[(2)]);
var state_36279__$1 = (function (){var statearr_36291 = state_36279;
(statearr_36291[(8)] = inst_36272);

return statearr_36291;
})();
var statearr_36292_37666 = state_36279__$1;
(statearr_36292_37666[(2)] = null);

(statearr_36292_37666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36280 === (8))){
var inst_36261 = (state_36279[(7)]);
var state_36279__$1 = state_36279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36279__$1,(11),out,inst_36261);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36293 = [null,null,null,null,null,null,null,null,null];
(statearr_36293[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36293[(1)] = (1));

return statearr_36293;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36279){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36279);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36294){if((e36294 instanceof Object)){
var ex__34210__auto__ = e36294;
var statearr_36295_37674 = state_36279;
(statearr_36295_37674[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37708 = state_36279;
state_36279 = G__37708;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36300 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36300[(6)] = c__34274__auto___37638);

return statearr_36300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36305 = arguments.length;
switch (G__36305) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36372){
var state_val_36373 = (state_36372[(1)]);
if((state_val_36373 === (7))){
var inst_36368 = (state_36372[(2)]);
var state_36372__$1 = state_36372;
var statearr_36375_37729 = state_36372__$1;
(statearr_36375_37729[(2)] = inst_36368);

(statearr_36375_37729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (20))){
var inst_36338 = (state_36372[(7)]);
var inst_36349 = (state_36372[(2)]);
var inst_36350 = cljs.core.next(inst_36338);
var inst_36323 = inst_36350;
var inst_36324 = null;
var inst_36325 = (0);
var inst_36326 = (0);
var state_36372__$1 = (function (){var statearr_36377 = state_36372;
(statearr_36377[(8)] = inst_36324);

(statearr_36377[(9)] = inst_36325);

(statearr_36377[(10)] = inst_36349);

(statearr_36377[(11)] = inst_36326);

(statearr_36377[(12)] = inst_36323);

return statearr_36377;
})();
var statearr_36378_37731 = state_36372__$1;
(statearr_36378_37731[(2)] = null);

(statearr_36378_37731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (1))){
var state_36372__$1 = state_36372;
var statearr_36379_37737 = state_36372__$1;
(statearr_36379_37737[(2)] = null);

(statearr_36379_37737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (4))){
var inst_36312 = (state_36372[(13)]);
var inst_36312__$1 = (state_36372[(2)]);
var inst_36313 = (inst_36312__$1 == null);
var state_36372__$1 = (function (){var statearr_36380 = state_36372;
(statearr_36380[(13)] = inst_36312__$1);

return statearr_36380;
})();
if(cljs.core.truth_(inst_36313)){
var statearr_36381_37744 = state_36372__$1;
(statearr_36381_37744[(1)] = (5));

} else {
var statearr_36384_37745 = state_36372__$1;
(statearr_36384_37745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (15))){
var state_36372__$1 = state_36372;
var statearr_36388_37747 = state_36372__$1;
(statearr_36388_37747[(2)] = null);

(statearr_36388_37747[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (21))){
var state_36372__$1 = state_36372;
var statearr_36399_37749 = state_36372__$1;
(statearr_36399_37749[(2)] = null);

(statearr_36399_37749[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (13))){
var inst_36324 = (state_36372[(8)]);
var inst_36325 = (state_36372[(9)]);
var inst_36326 = (state_36372[(11)]);
var inst_36323 = (state_36372[(12)]);
var inst_36334 = (state_36372[(2)]);
var inst_36335 = (inst_36326 + (1));
var tmp36385 = inst_36324;
var tmp36386 = inst_36325;
var tmp36387 = inst_36323;
var inst_36323__$1 = tmp36387;
var inst_36324__$1 = tmp36385;
var inst_36325__$1 = tmp36386;
var inst_36326__$1 = inst_36335;
var state_36372__$1 = (function (){var statearr_36405 = state_36372;
(statearr_36405[(8)] = inst_36324__$1);

(statearr_36405[(9)] = inst_36325__$1);

(statearr_36405[(11)] = inst_36326__$1);

(statearr_36405[(14)] = inst_36334);

(statearr_36405[(12)] = inst_36323__$1);

return statearr_36405;
})();
var statearr_36412_37754 = state_36372__$1;
(statearr_36412_37754[(2)] = null);

(statearr_36412_37754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (22))){
var state_36372__$1 = state_36372;
var statearr_36413_37759 = state_36372__$1;
(statearr_36413_37759[(2)] = null);

(statearr_36413_37759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (6))){
var inst_36312 = (state_36372[(13)]);
var inst_36321 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36312) : f.call(null,inst_36312));
var inst_36322 = cljs.core.seq(inst_36321);
var inst_36323 = inst_36322;
var inst_36324 = null;
var inst_36325 = (0);
var inst_36326 = (0);
var state_36372__$1 = (function (){var statearr_36416 = state_36372;
(statearr_36416[(8)] = inst_36324);

(statearr_36416[(9)] = inst_36325);

(statearr_36416[(11)] = inst_36326);

(statearr_36416[(12)] = inst_36323);

return statearr_36416;
})();
var statearr_36418_37761 = state_36372__$1;
(statearr_36418_37761[(2)] = null);

(statearr_36418_37761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (17))){
var inst_36338 = (state_36372[(7)]);
var inst_36342 = cljs.core.chunk_first(inst_36338);
var inst_36343 = cljs.core.chunk_rest(inst_36338);
var inst_36344 = cljs.core.count(inst_36342);
var inst_36323 = inst_36343;
var inst_36324 = inst_36342;
var inst_36325 = inst_36344;
var inst_36326 = (0);
var state_36372__$1 = (function (){var statearr_36421 = state_36372;
(statearr_36421[(8)] = inst_36324);

(statearr_36421[(9)] = inst_36325);

(statearr_36421[(11)] = inst_36326);

(statearr_36421[(12)] = inst_36323);

return statearr_36421;
})();
var statearr_36422_37773 = state_36372__$1;
(statearr_36422_37773[(2)] = null);

(statearr_36422_37773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (3))){
var inst_36370 = (state_36372[(2)]);
var state_36372__$1 = state_36372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36372__$1,inst_36370);
} else {
if((state_val_36373 === (12))){
var inst_36358 = (state_36372[(2)]);
var state_36372__$1 = state_36372;
var statearr_36425_37776 = state_36372__$1;
(statearr_36425_37776[(2)] = inst_36358);

(statearr_36425_37776[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (2))){
var state_36372__$1 = state_36372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36372__$1,(4),in$);
} else {
if((state_val_36373 === (23))){
var inst_36366 = (state_36372[(2)]);
var state_36372__$1 = state_36372;
var statearr_36428_37782 = state_36372__$1;
(statearr_36428_37782[(2)] = inst_36366);

(statearr_36428_37782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (19))){
var inst_36353 = (state_36372[(2)]);
var state_36372__$1 = state_36372;
var statearr_36429_37785 = state_36372__$1;
(statearr_36429_37785[(2)] = inst_36353);

(statearr_36429_37785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (11))){
var inst_36338 = (state_36372[(7)]);
var inst_36323 = (state_36372[(12)]);
var inst_36338__$1 = cljs.core.seq(inst_36323);
var state_36372__$1 = (function (){var statearr_36431 = state_36372;
(statearr_36431[(7)] = inst_36338__$1);

return statearr_36431;
})();
if(inst_36338__$1){
var statearr_36433_37786 = state_36372__$1;
(statearr_36433_37786[(1)] = (14));

} else {
var statearr_36435_37787 = state_36372__$1;
(statearr_36435_37787[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (9))){
var inst_36360 = (state_36372[(2)]);
var inst_36361 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36372__$1 = (function (){var statearr_36437 = state_36372;
(statearr_36437[(15)] = inst_36360);

return statearr_36437;
})();
if(cljs.core.truth_(inst_36361)){
var statearr_36438_37788 = state_36372__$1;
(statearr_36438_37788[(1)] = (21));

} else {
var statearr_36439_37789 = state_36372__$1;
(statearr_36439_37789[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (5))){
var inst_36315 = cljs.core.async.close_BANG_(out);
var state_36372__$1 = state_36372;
var statearr_36448_37790 = state_36372__$1;
(statearr_36448_37790[(2)] = inst_36315);

(statearr_36448_37790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (14))){
var inst_36338 = (state_36372[(7)]);
var inst_36340 = cljs.core.chunked_seq_QMARK_(inst_36338);
var state_36372__$1 = state_36372;
if(inst_36340){
var statearr_36450_37791 = state_36372__$1;
(statearr_36450_37791[(1)] = (17));

} else {
var statearr_36452_37792 = state_36372__$1;
(statearr_36452_37792[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (16))){
var inst_36356 = (state_36372[(2)]);
var state_36372__$1 = state_36372;
var statearr_36454_37793 = state_36372__$1;
(statearr_36454_37793[(2)] = inst_36356);

(statearr_36454_37793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36373 === (10))){
var inst_36324 = (state_36372[(8)]);
var inst_36326 = (state_36372[(11)]);
var inst_36332 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36324,inst_36326);
var state_36372__$1 = state_36372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36372__$1,(13),out,inst_36332);
} else {
if((state_val_36373 === (18))){
var inst_36338 = (state_36372[(7)]);
var inst_36347 = cljs.core.first(inst_36338);
var state_36372__$1 = state_36372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36372__$1,(20),out,inst_36347);
} else {
if((state_val_36373 === (8))){
var inst_36325 = (state_36372[(9)]);
var inst_36326 = (state_36372[(11)]);
var inst_36329 = (inst_36326 < inst_36325);
var inst_36330 = inst_36329;
var state_36372__$1 = state_36372;
if(cljs.core.truth_(inst_36330)){
var statearr_36457_37794 = state_36372__$1;
(statearr_36457_37794[(1)] = (10));

} else {
var statearr_36458_37795 = state_36372__$1;
(statearr_36458_37795[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0 = (function (){
var statearr_36461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36461[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__);

(statearr_36461[(1)] = (1));

return statearr_36461;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1 = (function (state_36372){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36372);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36467){if((e36467 instanceof Object)){
var ex__34210__auto__ = e36467;
var statearr_36469_37796 = state_36372;
(statearr_36469_37796[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36467;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37797 = state_36372;
state_36372 = G__37797;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__ = function(state_36372){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1.call(this,state_36372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34207__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36470 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36470[(6)] = c__34274__auto__);

return statearr_36470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));

return c__34274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36480 = arguments.length;
switch (G__36480) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36487 = arguments.length;
switch (G__36487) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36493 = arguments.length;
switch (G__36493) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34274__auto___37822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36526){
var state_val_36527 = (state_36526[(1)]);
if((state_val_36527 === (7))){
var inst_36521 = (state_36526[(2)]);
var state_36526__$1 = state_36526;
var statearr_36529_37825 = state_36526__$1;
(statearr_36529_37825[(2)] = inst_36521);

(statearr_36529_37825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (1))){
var inst_36496 = null;
var state_36526__$1 = (function (){var statearr_36531 = state_36526;
(statearr_36531[(7)] = inst_36496);

return statearr_36531;
})();
var statearr_36532_37827 = state_36526__$1;
(statearr_36532_37827[(2)] = null);

(statearr_36532_37827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (4))){
var inst_36502 = (state_36526[(8)]);
var inst_36502__$1 = (state_36526[(2)]);
var inst_36505 = (inst_36502__$1 == null);
var inst_36506 = cljs.core.not(inst_36505);
var state_36526__$1 = (function (){var statearr_36535 = state_36526;
(statearr_36535[(8)] = inst_36502__$1);

return statearr_36535;
})();
if(inst_36506){
var statearr_36537_37833 = state_36526__$1;
(statearr_36537_37833[(1)] = (5));

} else {
var statearr_36538_37834 = state_36526__$1;
(statearr_36538_37834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (6))){
var state_36526__$1 = state_36526;
var statearr_36539_37835 = state_36526__$1;
(statearr_36539_37835[(2)] = null);

(statearr_36539_37835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (3))){
var inst_36523 = (state_36526[(2)]);
var inst_36524 = cljs.core.async.close_BANG_(out);
var state_36526__$1 = (function (){var statearr_36540 = state_36526;
(statearr_36540[(9)] = inst_36523);

return statearr_36540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36526__$1,inst_36524);
} else {
if((state_val_36527 === (2))){
var state_36526__$1 = state_36526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36526__$1,(4),ch);
} else {
if((state_val_36527 === (11))){
var inst_36502 = (state_36526[(8)]);
var inst_36515 = (state_36526[(2)]);
var inst_36496 = inst_36502;
var state_36526__$1 = (function (){var statearr_36542 = state_36526;
(statearr_36542[(10)] = inst_36515);

(statearr_36542[(7)] = inst_36496);

return statearr_36542;
})();
var statearr_36543_37836 = state_36526__$1;
(statearr_36543_37836[(2)] = null);

(statearr_36543_37836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (9))){
var inst_36502 = (state_36526[(8)]);
var state_36526__$1 = state_36526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36526__$1,(11),out,inst_36502);
} else {
if((state_val_36527 === (5))){
var inst_36502 = (state_36526[(8)]);
var inst_36496 = (state_36526[(7)]);
var inst_36508 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36502,inst_36496);
var state_36526__$1 = state_36526;
if(inst_36508){
var statearr_36547_37837 = state_36526__$1;
(statearr_36547_37837[(1)] = (8));

} else {
var statearr_36548_37838 = state_36526__$1;
(statearr_36548_37838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (10))){
var inst_36518 = (state_36526[(2)]);
var state_36526__$1 = state_36526;
var statearr_36549_37839 = state_36526__$1;
(statearr_36549_37839[(2)] = inst_36518);

(statearr_36549_37839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36527 === (8))){
var inst_36496 = (state_36526[(7)]);
var tmp36545 = inst_36496;
var inst_36496__$1 = tmp36545;
var state_36526__$1 = (function (){var statearr_36550 = state_36526;
(statearr_36550[(7)] = inst_36496__$1);

return statearr_36550;
})();
var statearr_36551_37842 = state_36526__$1;
(statearr_36551_37842[(2)] = null);

(statearr_36551_37842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});
return (function() {
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36555 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36555[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36555[(1)] = (1));

return statearr_36555;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36526){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36526);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36556){if((e36556 instanceof Object)){
var ex__34210__auto__ = e36556;
var statearr_36559_37847 = state_36526;
(statearr_36559_37847[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36556;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37848 = state_36526;
state_36526 = G__37848;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36560 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36560[(6)] = c__34274__auto___37822);

return statearr_36560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36565 = arguments.length;
switch (G__36565) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34274__auto___37852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36611){
var state_val_36613 = (state_36611[(1)]);
if((state_val_36613 === (7))){
var inst_36607 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
var statearr_36616_37853 = state_36611__$1;
(statearr_36616_37853[(2)] = inst_36607);

(statearr_36616_37853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (1))){
var inst_36574 = (new Array(n));
var inst_36575 = inst_36574;
var inst_36576 = (0);
var state_36611__$1 = (function (){var statearr_36618 = state_36611;
(statearr_36618[(7)] = inst_36576);

(statearr_36618[(8)] = inst_36575);

return statearr_36618;
})();
var statearr_36619_37856 = state_36611__$1;
(statearr_36619_37856[(2)] = null);

(statearr_36619_37856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (4))){
var inst_36579 = (state_36611[(9)]);
var inst_36579__$1 = (state_36611[(2)]);
var inst_36580 = (inst_36579__$1 == null);
var inst_36581 = cljs.core.not(inst_36580);
var state_36611__$1 = (function (){var statearr_36620 = state_36611;
(statearr_36620[(9)] = inst_36579__$1);

return statearr_36620;
})();
if(inst_36581){
var statearr_36622_37857 = state_36611__$1;
(statearr_36622_37857[(1)] = (5));

} else {
var statearr_36624_37859 = state_36611__$1;
(statearr_36624_37859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (15))){
var inst_36601 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
var statearr_36625_37863 = state_36611__$1;
(statearr_36625_37863[(2)] = inst_36601);

(statearr_36625_37863[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (13))){
var state_36611__$1 = state_36611;
var statearr_36626_37864 = state_36611__$1;
(statearr_36626_37864[(2)] = null);

(statearr_36626_37864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (6))){
var inst_36576 = (state_36611[(7)]);
var inst_36597 = (inst_36576 > (0));
var state_36611__$1 = state_36611;
if(cljs.core.truth_(inst_36597)){
var statearr_36629_37865 = state_36611__$1;
(statearr_36629_37865[(1)] = (12));

} else {
var statearr_36630_37869 = state_36611__$1;
(statearr_36630_37869[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (3))){
var inst_36609 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36611__$1,inst_36609);
} else {
if((state_val_36613 === (12))){
var inst_36575 = (state_36611[(8)]);
var inst_36599 = cljs.core.vec(inst_36575);
var state_36611__$1 = state_36611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36611__$1,(15),out,inst_36599);
} else {
if((state_val_36613 === (2))){
var state_36611__$1 = state_36611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36611__$1,(4),ch);
} else {
if((state_val_36613 === (11))){
var inst_36591 = (state_36611[(2)]);
var inst_36592 = (new Array(n));
var inst_36575 = inst_36592;
var inst_36576 = (0);
var state_36611__$1 = (function (){var statearr_36641 = state_36611;
(statearr_36641[(7)] = inst_36576);

(statearr_36641[(10)] = inst_36591);

(statearr_36641[(8)] = inst_36575);

return statearr_36641;
})();
var statearr_36642_37871 = state_36611__$1;
(statearr_36642_37871[(2)] = null);

(statearr_36642_37871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (9))){
var inst_36575 = (state_36611[(8)]);
var inst_36589 = cljs.core.vec(inst_36575);
var state_36611__$1 = state_36611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36611__$1,(11),out,inst_36589);
} else {
if((state_val_36613 === (5))){
var inst_36576 = (state_36611[(7)]);
var inst_36579 = (state_36611[(9)]);
var inst_36584 = (state_36611[(11)]);
var inst_36575 = (state_36611[(8)]);
var inst_36583 = (inst_36575[inst_36576] = inst_36579);
var inst_36584__$1 = (inst_36576 + (1));
var inst_36585 = (inst_36584__$1 < n);
var state_36611__$1 = (function (){var statearr_36644 = state_36611;
(statearr_36644[(12)] = inst_36583);

(statearr_36644[(11)] = inst_36584__$1);

return statearr_36644;
})();
if(cljs.core.truth_(inst_36585)){
var statearr_36645_37873 = state_36611__$1;
(statearr_36645_37873[(1)] = (8));

} else {
var statearr_36647_37874 = state_36611__$1;
(statearr_36647_37874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (14))){
var inst_36604 = (state_36611[(2)]);
var inst_36605 = cljs.core.async.close_BANG_(out);
var state_36611__$1 = (function (){var statearr_36652 = state_36611;
(statearr_36652[(13)] = inst_36604);

return statearr_36652;
})();
var statearr_36653_37879 = state_36611__$1;
(statearr_36653_37879[(2)] = inst_36605);

(statearr_36653_37879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (10))){
var inst_36595 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
var statearr_36660_37881 = state_36611__$1;
(statearr_36660_37881[(2)] = inst_36595);

(statearr_36660_37881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36613 === (8))){
var inst_36584 = (state_36611[(11)]);
var inst_36575 = (state_36611[(8)]);
var tmp36651 = inst_36575;
var inst_36575__$1 = tmp36651;
var inst_36576 = inst_36584;
var state_36611__$1 = (function (){var statearr_36661 = state_36611;
(statearr_36661[(7)] = inst_36576);

(statearr_36661[(8)] = inst_36575__$1);

return statearr_36661;
})();
var statearr_36662_37887 = state_36611__$1;
(statearr_36662_37887[(2)] = null);

(statearr_36662_37887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36664[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36664[(1)] = (1));

return statearr_36664;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36611){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36611);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36670){if((e36670 instanceof Object)){
var ex__34210__auto__ = e36670;
var statearr_36671_37892 = state_36611;
(statearr_36671_37892[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37896 = state_36611;
state_36611 = G__37896;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36672 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36672[(6)] = c__34274__auto___37852);

return statearr_36672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36674 = arguments.length;
switch (G__36674) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34274__auto___37907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34275__auto__ = (function (){var switch__34206__auto__ = (function (state_36720){
var state_val_36721 = (state_36720[(1)]);
if((state_val_36721 === (7))){
var inst_36716 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
var statearr_36722_37910 = state_36720__$1;
(statearr_36722_37910[(2)] = inst_36716);

(statearr_36722_37910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (1))){
var inst_36675 = [];
var inst_36676 = inst_36675;
var inst_36677 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36720__$1 = (function (){var statearr_36725 = state_36720;
(statearr_36725[(7)] = inst_36676);

(statearr_36725[(8)] = inst_36677);

return statearr_36725;
})();
var statearr_36726_37912 = state_36720__$1;
(statearr_36726_37912[(2)] = null);

(statearr_36726_37912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (4))){
var inst_36680 = (state_36720[(9)]);
var inst_36680__$1 = (state_36720[(2)]);
var inst_36681 = (inst_36680__$1 == null);
var inst_36682 = cljs.core.not(inst_36681);
var state_36720__$1 = (function (){var statearr_36727 = state_36720;
(statearr_36727[(9)] = inst_36680__$1);

return statearr_36727;
})();
if(inst_36682){
var statearr_36728_37920 = state_36720__$1;
(statearr_36728_37920[(1)] = (5));

} else {
var statearr_36730_37921 = state_36720__$1;
(statearr_36730_37921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (15))){
var inst_36710 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
var statearr_36733_37923 = state_36720__$1;
(statearr_36733_37923[(2)] = inst_36710);

(statearr_36733_37923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (13))){
var state_36720__$1 = state_36720;
var statearr_36734_37924 = state_36720__$1;
(statearr_36734_37924[(2)] = null);

(statearr_36734_37924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (6))){
var inst_36676 = (state_36720[(7)]);
var inst_36704 = inst_36676.length;
var inst_36705 = (inst_36704 > (0));
var state_36720__$1 = state_36720;
if(cljs.core.truth_(inst_36705)){
var statearr_36737_37931 = state_36720__$1;
(statearr_36737_37931[(1)] = (12));

} else {
var statearr_36738_37932 = state_36720__$1;
(statearr_36738_37932[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (3))){
var inst_36718 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36720__$1,inst_36718);
} else {
if((state_val_36721 === (12))){
var inst_36676 = (state_36720[(7)]);
var inst_36708 = cljs.core.vec(inst_36676);
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36720__$1,(15),out,inst_36708);
} else {
if((state_val_36721 === (2))){
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36720__$1,(4),ch);
} else {
if((state_val_36721 === (11))){
var inst_36685 = (state_36720[(10)]);
var inst_36680 = (state_36720[(9)]);
var inst_36696 = (state_36720[(2)]);
var inst_36698 = [];
var inst_36699 = inst_36698.push(inst_36680);
var inst_36676 = inst_36698;
var inst_36677 = inst_36685;
var state_36720__$1 = (function (){var statearr_36743 = state_36720;
(statearr_36743[(7)] = inst_36676);

(statearr_36743[(11)] = inst_36699);

(statearr_36743[(8)] = inst_36677);

(statearr_36743[(12)] = inst_36696);

return statearr_36743;
})();
var statearr_36744_37943 = state_36720__$1;
(statearr_36744_37943[(2)] = null);

(statearr_36744_37943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (9))){
var inst_36676 = (state_36720[(7)]);
var inst_36694 = cljs.core.vec(inst_36676);
var state_36720__$1 = state_36720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36720__$1,(11),out,inst_36694);
} else {
if((state_val_36721 === (5))){
var inst_36685 = (state_36720[(10)]);
var inst_36677 = (state_36720[(8)]);
var inst_36680 = (state_36720[(9)]);
var inst_36685__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36680) : f.call(null,inst_36680));
var inst_36687 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36685__$1,inst_36677);
var inst_36688 = cljs.core.keyword_identical_QMARK_(inst_36677,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36689 = ((inst_36687) || (inst_36688));
var state_36720__$1 = (function (){var statearr_36746 = state_36720;
(statearr_36746[(10)] = inst_36685__$1);

return statearr_36746;
})();
if(cljs.core.truth_(inst_36689)){
var statearr_36747_37947 = state_36720__$1;
(statearr_36747_37947[(1)] = (8));

} else {
var statearr_36748_37948 = state_36720__$1;
(statearr_36748_37948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (14))){
var inst_36713 = (state_36720[(2)]);
var inst_36714 = cljs.core.async.close_BANG_(out);
var state_36720__$1 = (function (){var statearr_36751 = state_36720;
(statearr_36751[(13)] = inst_36713);

return statearr_36751;
})();
var statearr_36752_37951 = state_36720__$1;
(statearr_36752_37951[(2)] = inst_36714);

(statearr_36752_37951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (10))){
var inst_36702 = (state_36720[(2)]);
var state_36720__$1 = state_36720;
var statearr_36754_37955 = state_36720__$1;
(statearr_36754_37955[(2)] = inst_36702);

(statearr_36754_37955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36721 === (8))){
var inst_36676 = (state_36720[(7)]);
var inst_36685 = (state_36720[(10)]);
var inst_36680 = (state_36720[(9)]);
var inst_36691 = inst_36676.push(inst_36680);
var tmp36749 = inst_36676;
var inst_36676__$1 = tmp36749;
var inst_36677 = inst_36685;
var state_36720__$1 = (function (){var statearr_36758 = state_36720;
(statearr_36758[(14)] = inst_36691);

(statearr_36758[(7)] = inst_36676__$1);

(statearr_36758[(8)] = inst_36677);

return statearr_36758;
})();
var statearr_36759_37960 = state_36720__$1;
(statearr_36759_37960[(2)] = null);

(statearr_36759_37960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34207__auto__ = null;
var cljs$core$async$state_machine__34207__auto____0 = (function (){
var statearr_36761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36761[(0)] = cljs$core$async$state_machine__34207__auto__);

(statearr_36761[(1)] = (1));

return statearr_36761;
});
var cljs$core$async$state_machine__34207__auto____1 = (function (state_36720){
while(true){
var ret_value__34208__auto__ = (function (){try{while(true){
var result__34209__auto__ = switch__34206__auto__(state_36720);
if(cljs.core.keyword_identical_QMARK_(result__34209__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34209__auto__;
}
break;
}
}catch (e36762){if((e36762 instanceof Object)){
var ex__34210__auto__ = e36762;
var statearr_36763_37963 = state_36720;
(statearr_36763_37963[(5)] = ex__34210__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34208__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37969 = state_36720;
state_36720 = G__37969;
continue;
} else {
return ret_value__34208__auto__;
}
break;
}
});
cljs$core$async$state_machine__34207__auto__ = function(state_36720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34207__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34207__auto____1.call(this,state_36720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34207__auto____0;
cljs$core$async$state_machine__34207__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34207__auto____1;
return cljs$core$async$state_machine__34207__auto__;
})()
})();
var state__34276__auto__ = (function (){var statearr_36765 = (f__34275__auto__.cljs$core$IFn$_invoke$arity$0 ? f__34275__auto__.cljs$core$IFn$_invoke$arity$0() : f__34275__auto__.call(null));
(statearr_36765[(6)] = c__34274__auto___37907);

return statearr_36765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
