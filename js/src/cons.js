
var cons = function ( hd , tl ) {

	return function ( which ) {

		return which( hd , tl ) ;

	} ;

} ;

exports.cons = cons ;

