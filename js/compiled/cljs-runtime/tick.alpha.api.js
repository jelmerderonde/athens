goog.provide('tick.alpha.api');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('tick.core');
goog.require('tick.format');
goog.require('tick.interval');
goog.require('clojure.set');
goog.require('java.time');
goog.require('java.time.format');
tick.alpha.api.new_time = tick.core.new_time;
tick.alpha.api.new_date = tick.core.new_date;
tick.alpha.api.unit_map = tick.core.unit_map;
tick.alpha.api.now = (function tick$alpha$api$now(){
return tick.core.now();
});
tick.alpha.api.today = (function tick$alpha$api$today(){
return tick.core.today();
});
tick.alpha.api.tomorrow = (function tick$alpha$api$tomorrow(){
return tick.core.tomorrow();
});
tick.alpha.api.yesterday = (function tick$alpha$api$yesterday(){
return tick.core.yesterday();
});
tick.alpha.api.time = (function tick$alpha$api$time(var_args){
var G__63250 = arguments.length;
switch (G__63250) {
case 0:
return tick.alpha.api.time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.time(tick.alpha.api.now());
}));

(tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.time(v);
}));

(tick.alpha.api.time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.date = (function tick$alpha$api$date(var_args){
var G__63252 = arguments.length;
switch (G__63252) {
case 0:
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.date.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.alpha.api.today();
}));

(tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.date(v);
}));

(tick.alpha.api.date.cljs$lang$maxFixedArity = 1);

tick.alpha.api.inst = (function tick$alpha$api$inst(var_args){
var G__63254 = arguments.length;
switch (G__63254) {
case 0:
return tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.inst(tick.alpha.api.now());
}));

(tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.inst(v);
}));

(tick.alpha.api.inst.cljs$lang$maxFixedArity = 1);

tick.alpha.api.instant = (function tick$alpha$api$instant(var_args){
var G__63256 = arguments.length;
switch (G__63256) {
case 0:
return tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.instant(tick.alpha.api.now());
}));

(tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.instant(v);
}));

(tick.alpha.api.instant.cljs$lang$maxFixedArity = 1);

tick.alpha.api.date_time = (function tick$alpha$api$date_time(var_args){
var G__63258 = arguments.length;
switch (G__63258) {
case 0:
return tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.date_time(tick.alpha.api.now());
}));

(tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.date_time(v);
}));

(tick.alpha.api.date_time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.offset_date_time = (function tick$alpha$api$offset_date_time(var_args){
var G__63260 = arguments.length;
switch (G__63260) {
case 0:
return tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.offset_date_time(tick.alpha.api.now());
}));

(tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.offset_date_time(v);
}));

(tick.alpha.api.offset_date_time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.zoned_date_time = (function tick$alpha$api$zoned_date_time(var_args){
var G__63262 = arguments.length;
switch (G__63262) {
case 0:
return tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.zoned_date_time(tick.alpha.api.now());
}));

(tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.zoned_date_time(v);
}));

(tick.alpha.api.zoned_date_time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.nanosecond = (function tick$alpha$api$nanosecond(t){
return tick.core.nanosecond(t);
});
tick.alpha.api.microsecond = (function tick$alpha$api$microsecond(t){
return tick.core.microsecond(t);
});
tick.alpha.api.millisecond = (function tick$alpha$api$millisecond(t){
return tick.core.millisecond(t);
});
tick.alpha.api.second = (function tick$alpha$api$second(t){
return tick.core.second(t);
});
tick.alpha.api.minute = (function tick$alpha$api$minute(t){
return tick.core.minute(t);
});
tick.alpha.api.hour = (function tick$alpha$api$hour(t){
return tick.core.hour(t);
});
tick.alpha.api.day_of_week = (function tick$alpha$api$day_of_week(var_args){
var G__63264 = arguments.length;
switch (G__63264) {
case 0:
return tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.day_of_week(tick.alpha.api.today());
}));

(tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.day_of_week(v);
}));

(tick.alpha.api.day_of_week.cljs$lang$maxFixedArity = 1);

tick.alpha.api.day_of_month = (function tick$alpha$api$day_of_month(var_args){
var G__63266 = arguments.length;
switch (G__63266) {
case 0:
return tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.day_of_month(tick.alpha.api.today());
}));

(tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.day_of_month(v);
}));

(tick.alpha.api.day_of_month.cljs$lang$maxFixedArity = 1);

tick.alpha.api.month = (function tick$alpha$api$month(var_args){
var G__63268 = arguments.length;
switch (G__63268) {
case 0:
return tick.alpha.api.month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.month(tick.alpha.api.today());
}));

(tick.alpha.api.month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.month(v);
}));

(tick.alpha.api.month.cljs$lang$maxFixedArity = 1);

tick.alpha.api.year = (function tick$alpha$api$year(var_args){
var G__63270 = arguments.length;
switch (G__63270) {
case 0:
return tick.alpha.api.year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.year.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.year(tick.alpha.api.today());
}));

(tick.alpha.api.year.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.year(v);
}));

(tick.alpha.api.year.cljs$lang$maxFixedArity = 1);

tick.alpha.api.year_month = (function tick$alpha$api$year_month(var_args){
var G__63272 = arguments.length;
switch (G__63272) {
case 0:
return tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.year_month(tick.alpha.api.today());
}));

(tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.year_month(v);
}));

(tick.alpha.api.year_month.cljs$lang$maxFixedArity = 1);

tick.alpha.api.zone = (function tick$alpha$api$zone(var_args){
var G__63274 = arguments.length;
switch (G__63274) {
case 0:
return tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.current_zone();
}));

(tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1 = (function (z){
return tick.core.zone(z);
}));

(tick.alpha.api.zone.cljs$lang$maxFixedArity = 1);

tick.alpha.api.zone_offset = (function tick$alpha$api$zone_offset(var_args){
var G__63276 = arguments.length;
switch (G__63276) {
case 1:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1 = (function (offset){
return tick.core.zone_offset(offset);
}));

(tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return java.time.ZoneOffset.ofHoursMinutes(hours,minutes);
}));

(tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return java.time.ZoneOffset.ofHoursMinutesSeconds(hours,minutes,seconds);
}));

(tick.alpha.api.zone_offset.cljs$lang$maxFixedArity = 3);

tick.alpha.api.on = (function tick$alpha$api$on(t,d){
return tick.core.on(t,tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(d));
});
tick.alpha.api.at = (function tick$alpha$api$at(d,t){
return tick.core.at(d,tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1(t));
});
tick.alpha.api.in$ = (function tick$alpha$api$in(ldt,z){
return tick.core.in$(ldt,tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1(z));
});
tick.alpha.api.offset_by = (function tick$alpha$api$offset_by(ldt,offset){
return tick.core.offset_by(ldt,tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1(offset));
});
tick.alpha.api.MONDAY = java.time.DayOfWeek.MONDAY;
tick.alpha.api.TUESDAY = java.time.DayOfWeek.TUESDAY;
tick.alpha.api.WEDNESDAY = java.time.DayOfWeek.WEDNESDAY;
tick.alpha.api.THURSDAY = java.time.DayOfWeek.THURSDAY;
tick.alpha.api.FRIDAY = java.time.DayOfWeek.FRIDAY;
tick.alpha.api.SATURDAY = java.time.DayOfWeek.SATURDAY;
tick.alpha.api.SUNDAY = java.time.DayOfWeek.SUNDAY;
tick.alpha.api.JANUARY = java.time.Month.JANUARY;
tick.alpha.api.FEBRUARY = java.time.Month.FEBRUARY;
tick.alpha.api.MARCH = java.time.Month.MARCH;
tick.alpha.api.APRIL = java.time.Month.APRIL;
tick.alpha.api.MAY = java.time.Month.MAY;
tick.alpha.api.JUNE = java.time.Month.JUNE;
tick.alpha.api.JULY = java.time.Month.JULY;
tick.alpha.api.AUGUST = java.time.Month.AUGUST;
tick.alpha.api.SEPTEMBER = java.time.Month.SEPTEMBER;
tick.alpha.api.OCTOBER = java.time.Month.OCTOBER;
tick.alpha.api.NOVEMBER = java.time.Month.NOVEMBER;
tick.alpha.api.DECEMBER = java.time.Month.DECEMBER;
tick.alpha.api.beginning = (function tick$alpha$api$beginning(v){
return tick.core.beginning(v);
});
tick.alpha.api.end = (function tick$alpha$api$end(v){
return tick.core.end(v);
});
tick.alpha.api.duration = (function tick$alpha$api$duration(v){
return tick.core.duration(v);
});
tick.alpha.api.coincident_QMARK_ = tick.core.coincident_QMARK_;
tick.alpha.api.noon = tick.core.noon;
tick.alpha.api.midnight = tick.core.midnight;
tick.alpha.api.midnight_QMARK_ = tick.core.midnight_QMARK_;
tick.alpha.api.epoch = tick.core.epoch;
tick.alpha.api.fields = tick.core.fields;
tick.alpha.api.with$ = tick.core.with$;
tick.alpha.api.ago = tick.core.ago;
tick.alpha.api.hence = tick.core.hence;
tick.alpha.api.UTC = tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1("UTC");
tick.alpha.api.parse = tick.core.parse;
tick.alpha.api._PLUS_ = (function tick$alpha$api$_PLUS_(var_args){
var G__63282 = arguments.length;
switch (G__63282) {
case 0:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___63355 = arguments.length;
var i__4790__auto___63356 = (0);
while(true){
if((i__4790__auto___63356 < len__4789__auto___63355)){
args_arr__4810__auto__.push((arguments[i__4790__auto___63356]));

var G__63357 = (i__4790__auto___63356 + (1));
i__4790__auto___63356 = G__63357;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.Duration.ZERO;
}));

(tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return arg;
}));

(tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__63277_SHARP_,p2__63278_SHARP_){
return tick.core._PLUS_(p1__63277_SHARP_,p2__63278_SHARP_);
}),arg,args);
}));

/** @this {Function} */
(tick.alpha.api._PLUS_.cljs$lang$applyTo = (function (seq63280){
var G__63281 = cljs.core.first(seq63280);
var seq63280__$1 = cljs.core.next(seq63280);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63281,seq63280__$1);
}));

(tick.alpha.api._PLUS_.cljs$lang$maxFixedArity = (1));

tick.alpha.api._ = (function tick$alpha$api$_(var_args){
var G__63288 = arguments.length;
switch (G__63288) {
case 0:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___63359 = arguments.length;
var i__4790__auto___63360 = (0);
while(true){
if((i__4790__auto___63360 < len__4789__auto___63359)){
args_arr__4810__auto__.push((arguments[i__4790__auto___63360]));

var G__63361 = (i__4790__auto___63360 + (1));
i__4790__auto___63360 = G__63361;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(tick.alpha.api._.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.Duration.ZERO;
}));

(tick.alpha.api._.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return tick.core.negated(arg);
}));

(tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__63283_SHARP_,p2__63284_SHARP_){
return tick.core._(p1__63283_SHARP_,p2__63284_SHARP_);
}),arg,args);
}));

/** @this {Function} */
(tick.alpha.api._.cljs$lang$applyTo = (function (seq63286){
var G__63287 = cljs.core.first(seq63286);
var seq63286__$1 = cljs.core.next(seq63286);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63287,seq63286__$1);
}));

(tick.alpha.api._.cljs$lang$maxFixedArity = (1));

tick.alpha.api.inc = (function tick$alpha$api$inc(t){
return tick.core.inc(t);
});
tick.alpha.api.dec = (function tick$alpha$api$dec(t){
return tick.core.dec(t);
});
tick.alpha.api._GT__GT_ = (function tick$alpha$api$_GT__GT_(t,amt){
return tick.core._GT__GT_(t,amt);
});
tick.alpha.api._LT__LT_ = (function tick$alpha$api$_LT__LT_(t,amt){
return tick.core._LT__LT_(t,amt);
});
tick.alpha.api.max = tick.core.max;
tick.alpha.api.min = tick.core.min;
tick.alpha.api.min_of_type = tick.core.min_of_type;
tick.alpha.api.max_of_type = tick.core.max_of_type;
tick.alpha.api.range = tick.core.range;
tick.alpha.api.int$ = (function tick$alpha$api$int(arg){
return tick.core.int$(arg);
});
tick.alpha.api.long$ = (function tick$alpha$api$long(arg){
return tick.core.long$(arg);
});
tick.alpha.api.nanos = (function tick$alpha$api$nanos(v){
return tick.core.nanos(v);
});
tick.alpha.api.micros = (function tick$alpha$api$micros(v){
return tick.core.micros(v);
});
tick.alpha.api.millis = (function tick$alpha$api$millis(v){
return tick.core.millis(v);
});
tick.alpha.api.seconds = (function tick$alpha$api$seconds(v){
return tick.core.seconds(v);
});
tick.alpha.api.minutes = (function tick$alpha$api$minutes(v){
return tick.core.minutes(v);
});
tick.alpha.api.hours = (function tick$alpha$api$hours(v){
return tick.core.hours(v);
});
tick.alpha.api.days = (function tick$alpha$api$days(v){
return tick.core.days(v);
});
tick.alpha.api.months = (function tick$alpha$api$months(v){
return tick.core.months(v);
});
tick.alpha.api.years = (function tick$alpha$api$years(v){
return tick.core.years(v);
});
tick.alpha.api.units = tick.core.units;
tick.alpha.api.truncate = tick.core.truncate;
tick.alpha.api._LT_ = (function tick$alpha$api$_LT_(var_args){
var G__63293 = arguments.length;
switch (G__63293) {
case 1:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___63364 = arguments.length;
var i__4790__auto___63365 = (0);
while(true){
if((i__4790__auto___63365 < len__4789__auto___63364)){
args_arr__4810__auto__.push((arguments[i__4790__auto___63365]));

var G__63366 = (i__4790__auto___63365 + (1));
i__4790__auto___63365 = G__63366;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
}));

(tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._LT_(x,y);
}));

(tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._LT_(x,y))){
if(cljs.core.next(more)){
var G__63367 = y;
var G__63368 = cljs.core.first(more);
var G__63369 = cljs.core.next(more);
x = G__63367;
y = G__63368;
more = G__63369;
continue;
} else {
return tick.core._LT_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._LT_.cljs$lang$applyTo = (function (seq63290){
var G__63291 = cljs.core.first(seq63290);
var seq63290__$1 = cljs.core.next(seq63290);
var G__63292 = cljs.core.first(seq63290__$1);
var seq63290__$2 = cljs.core.next(seq63290__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63291,G__63292,seq63290__$2);
}));

(tick.alpha.api._LT_.cljs$lang$maxFixedArity = (2));

tick.alpha.api._LT__EQ_ = (function tick$alpha$api$_LT__EQ_(var_args){
var G__63298 = arguments.length;
switch (G__63298) {
case 1:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___63371 = arguments.length;
var i__4790__auto___63372 = (0);
while(true){
if((i__4790__auto___63372 < len__4789__auto___63371)){
args_arr__4810__auto__.push((arguments[i__4790__auto___63372]));

var G__63373 = (i__4790__auto___63372 + (1));
i__4790__auto___63372 = G__63373;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
}));

(tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._LT__EQ_(x,y);
}));

(tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._LT__EQ_(x,y))){
if(cljs.core.next(more)){
var G__63374 = y;
var G__63375 = cljs.core.first(more);
var G__63376 = cljs.core.next(more);
x = G__63374;
y = G__63375;
more = G__63376;
continue;
} else {
return tick.core._LT__EQ_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._LT__EQ_.cljs$lang$applyTo = (function (seq63295){
var G__63296 = cljs.core.first(seq63295);
var seq63295__$1 = cljs.core.next(seq63295);
var G__63297 = cljs.core.first(seq63295__$1);
var seq63295__$2 = cljs.core.next(seq63295__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63296,G__63297,seq63295__$2);
}));

(tick.alpha.api._LT__EQ_.cljs$lang$maxFixedArity = (2));

tick.alpha.api._GT_ = (function tick$alpha$api$_GT_(var_args){
var G__63303 = arguments.length;
switch (G__63303) {
case 1:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___63378 = arguments.length;
var i__4790__auto___63379 = (0);
while(true){
if((i__4790__auto___63379 < len__4789__auto___63378)){
args_arr__4810__auto__.push((arguments[i__4790__auto___63379]));

var G__63380 = (i__4790__auto___63379 + (1));
i__4790__auto___63379 = G__63380;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
}));

(tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._GT_(x,y);
}));

(tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._GT_(x,y))){
if(cljs.core.next(more)){
var G__63381 = y;
var G__63382 = cljs.core.first(more);
var G__63383 = cljs.core.next(more);
x = G__63381;
y = G__63382;
more = G__63383;
continue;
} else {
return tick.core._GT_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._GT_.cljs$lang$applyTo = (function (seq63300){
var G__63301 = cljs.core.first(seq63300);
var seq63300__$1 = cljs.core.next(seq63300);
var G__63302 = cljs.core.first(seq63300__$1);
var seq63300__$2 = cljs.core.next(seq63300__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63301,G__63302,seq63300__$2);
}));

(tick.alpha.api._GT_.cljs$lang$maxFixedArity = (2));

tick.alpha.api._GT__EQ_ = (function tick$alpha$api$_GT__EQ_(var_args){
var G__63308 = arguments.length;
switch (G__63308) {
case 1:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___63385 = arguments.length;
var i__4790__auto___63386 = (0);
while(true){
if((i__4790__auto___63386 < len__4789__auto___63385)){
args_arr__4810__auto__.push((arguments[i__4790__auto___63386]));

var G__63387 = (i__4790__auto___63386 + (1));
i__4790__auto___63386 = G__63387;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
}));

(tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._GT__EQ_(x,y);
}));

(tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._GT__EQ_(x,y))){
if(cljs.core.next(more)){
var G__63388 = y;
var G__63389 = cljs.core.first(more);
var G__63390 = cljs.core.next(more);
x = G__63388;
y = G__63389;
more = G__63390;
continue;
} else {
return tick.core._GT__EQ_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._GT__EQ_.cljs$lang$applyTo = (function (seq63305){
var G__63306 = cljs.core.first(seq63305);
var seq63305__$1 = cljs.core.next(seq63305);
var G__63307 = cljs.core.first(seq63305__$1);
var seq63305__$2 = cljs.core.next(seq63305__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63306,G__63307,seq63305__$2);
}));

(tick.alpha.api._GT__EQ_.cljs$lang$maxFixedArity = (2));

tick.alpha.api.clock = (function tick$alpha$api$clock(var_args){
var G__63310 = arguments.length;
switch (G__63310) {
case 0:
return tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.current_clock();
}));

(tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$1 = (function (i){
return tick.core.clock(i);
}));

(tick.alpha.api.clock.cljs$lang$maxFixedArity = 1);

tick.alpha.api.atom = tick.core.atom;
tick.alpha.api.swap_BANG_ = tick.core.swap_BANG_;
tick.alpha.api.swap_vals_BANG_ = tick.core.swap_vals_BANG_;
tick.alpha.api.compare_and_set_BANG_ = tick.core.compare_and_set_BANG_;
tick.alpha.api.reset_BANG_ = tick.core.reset_BANG_;
tick.alpha.api.reset_vals_BANG_ = tick.core.reset_vals_BANG_;
tick.alpha.api.new_interval = (function tick$alpha$api$new_interval(x,y){
return tick.interval.new_interval(x,y);
});
tick.alpha.api.extend = (function tick$alpha$api$extend(var_args){
var args__4795__auto__ = [];
var len__4789__auto___63392 = arguments.length;
var i__4790__auto___63393 = (0);
while(true){
if((i__4790__auto___63393 < len__4789__auto___63392)){
args__4795__auto__.push((arguments[i__4790__auto___63393]));

var G__63394 = (i__4790__auto___63393 + (1));
i__4790__auto___63393 = G__63394;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return tick.alpha.api.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(tick.alpha.api.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ival,durations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.extend,ival,durations);
}));

(tick.alpha.api.extend.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tick.alpha.api.extend.cljs$lang$applyTo = (function (seq63311){
var G__63312 = cljs.core.first(seq63311);
var seq63311__$1 = cljs.core.next(seq63311);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63312,seq63311__$1);
}));

tick.alpha.api.scale = (function tick$alpha$api$scale(var_args){
var args__4795__auto__ = [];
var len__4789__auto___63395 = arguments.length;
var i__4790__auto___63396 = (0);
while(true){
if((i__4790__auto___63396 < len__4789__auto___63395)){
args__4795__auto__.push((arguments[i__4790__auto___63396]));

var G__63397 = (i__4790__auto___63396 + (1));
i__4790__auto___63396 = G__63397;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return tick.alpha.api.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(tick.alpha.api.scale.cljs$core$IFn$_invoke$arity$variadic = (function (ival,durations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.extend,ival,durations);
}));

(tick.alpha.api.scale.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tick.alpha.api.scale.cljs$lang$applyTo = (function (seq63313){
var G__63314 = cljs.core.first(seq63313);
var seq63313__$1 = cljs.core.next(seq63313);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63314,seq63313__$1);
}));

/**
 * Return an interval which forms the bounding-box of the given arguments.
 */
tick.alpha.api.bounds = tick.interval.bounds;
tick.alpha.api.am = (function tick$alpha$api$am(date){
return tick.interval.am(date);
});
tick.alpha.api.pm = (function tick$alpha$api$pm(date){
return tick.interval.pm(date);
});
tick.alpha.api.relation = (function tick$alpha$api$relation(i1,i2){
return tick.interval.relation(i1,i2);
});
tick.alpha.api.new_duration = (function tick$alpha$api$new_duration(n,u){
return tick.core.new_duration(n,u);
});
tick.alpha.api.new_period = (function tick$alpha$api$new_period(n,u){
return tick.core.new_period(n,u);
});
tick.alpha.api.between = (function tick$alpha$api$between(v1,v2){
return tick.core.between(v1,v2);
});
tick.alpha.api.concur = (function tick$alpha$api$concur(var_args){
var G__63318 = arguments.length;
switch (G__63318) {
case 0:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___63399 = arguments.length;
var i__4790__auto___63400 = (0);
while(true){
if((i__4790__auto___63400 < len__4789__auto___63399)){
args_arr__4810__auto__.push((arguments[i__4790__auto___63400]));

var G__63401 = (i__4790__auto___63400 + (1));
i__4790__auto___63400 = G__63401;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$variadic = (function (x,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.concur,x,args);
}));

/** @this {Function} */
(tick.alpha.api.concur.cljs$lang$applyTo = (function (seq63316){
var G__63317 = cljs.core.first(seq63316);
var seq63316__$1 = cljs.core.next(seq63316);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63317,seq63316__$1);
}));

(tick.alpha.api.concur.cljs$lang$maxFixedArity = (1));

tick.alpha.api.concurrencies = (function tick$alpha$api$concurrencies(var_args){
var args__4795__auto__ = [];
var len__4789__auto___63402 = arguments.length;
var i__4790__auto___63403 = (0);
while(true){
if((i__4790__auto___63403 < len__4789__auto___63402)){
args__4795__auto__.push((arguments[i__4790__auto___63403]));

var G__63404 = (i__4790__auto___63403 + (1));
i__4790__auto___63403 = G__63404;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return tick.alpha.api.concurrencies.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(tick.alpha.api.concurrencies.cljs$core$IFn$_invoke$arity$variadic = (function (intervals){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.interval.concurrencies,intervals);
}));

(tick.alpha.api.concurrencies.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.alpha.api.concurrencies.cljs$lang$applyTo = (function (seq63319){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63319));
}));

tick.alpha.api.divide_by = (function tick$alpha$api$divide_by(divisor,t){
return tick.core.divide(t,divisor);
});
tick.alpha.api.divide = (function tick$alpha$api$divide(t,divisor){
return tick.core.divide(t,divisor);
});
tick.alpha.api.ordered_disjoint_intervals_QMARK_ = tick.interval.ordered_disjoint_intervals_QMARK_;
tick.alpha.api.unite = tick.interval.unite;
tick.alpha.api.normalize = tick.interval.normalize;
tick.alpha.api.union = tick.interval.union;
tick.alpha.api.conj = tick.interval.conj;
tick.alpha.api.intersection = tick.interval.intersection;
tick.alpha.api.intersects_QMARK_ = tick.interval.intersects_QMARK_;
tick.alpha.api.difference = tick.interval.difference;
tick.alpha.api.complement = tick.interval.complement;
tick.alpha.api.group_by = tick.interval.group_by;
tick.alpha.api.format = (function tick$alpha$api$format(var_args){
var G__63321 = arguments.length;
switch (G__63321) {
case 1:
return tick.alpha.api.format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.format.cljs$core$IFn$_invoke$arity$1 = (function (o){
return tick.format.format.cljs$core$IFn$_invoke$arity$1(o);
}));

(tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2 = (function (fmt,o){
return tick.format.format.cljs$core$IFn$_invoke$arity$2(fmt,o);
}));

(tick.alpha.api.format.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a DateTimeFormatter out of either a
 * 
 *   * format string - "YYYY/mm/DD" "YYY HH:MM" etc.
 *   or
 *   * formatter name - :iso-instant :iso-date etc
 */
tick.alpha.api.formatter = (function tick$alpha$api$formatter(var_args){
var G__63323 = arguments.length;
switch (G__63323) {
case 1:
return tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmt){
return tick.format.formatter.cljs$core$IFn$_invoke$arity$1(fmt);
}));

(tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmt,locale){
return tick.format.formatter.cljs$core$IFn$_invoke$arity$2(fmt,locale);
}));

(tick.alpha.api.formatter.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=tick.alpha.api.js.map
