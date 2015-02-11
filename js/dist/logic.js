(function(exports, undefined){

	'use strict';


/* js/src/car.js */

var car = function ( l ) {

	return l( tru ) ;

} ;

exports.car = car ;

/* js/src/cdr.js */

var cdr = function ( l ) {

	return l( fls ) ;

} ;

exports.cdr = cdr ;


/* js/src/cons.js */

var cons = function ( hd , tl ) {

	return function ( which ) {

		return which( hd , tl ) ;

	} ;

} ;

exports.cons = cons ;


/* js/src/fls.js */

var fls = function ( _ , els ) {

	return els ;

} ;

exports.fls = fls ;

/* js/src/iff.js */

var iff = function ( cnd , thn , els ) {

	return cnd( thn , els )( ) ;

} ;

exports.iff = iff ;

/* js/src/nnd.js */

var nnd = function ( a , b )  {

	return a( b , a ) ;

} ;

exports.nnd = nnd ;

/* js/src/ntt.js */

var ntt = function ( a ) {

	return a( fls , tru ) ;

} ;

exports.ntt = ntt ;

/* js/src/orr.js */

var orr = function ( a , b ) {

	return a( a , b ) ;

} ;

exports.orr = orr ;

/* js/src/tru.js */

var tru = function ( thn , _ ) {

	return thn ;

} ;

exports.tru = tru ;


/* js/src/xor.js */

var xor = function ( a , b ) {

	return a( ntt( b ) , b ) ;

} ;

exports.xor = xor ;

})(typeof exports === 'undefined' ? this['logic'] = {} : exports);
