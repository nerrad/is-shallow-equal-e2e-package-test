import isShallowEqualArrays from '@wordpress/is-shallow-equal/arrays';

const a = [ 1, 2, 3 ];
const b = [ 3, 2, 1 ];

console.log( isShallowEqualArrays( a, b ) );