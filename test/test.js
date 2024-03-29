/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var randu = require( '@stdlib/random-iter-randu' );
var array2iterator = require( '@stdlib/array-to-iterator' );
var iteratorSymbol = require( '@stdlib/symbol-iterator' );
var iterEmpty = require( '@stdlib/iter-empty' );
var iterMapN = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterMapN, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided fewer than two iterators', function test( t ) {
	t.throws( iterMapN, Error, 'throws an error' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		iterMapN( randu(), transform );
	}

	function transform( x, y ) {
		return x + y;
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (first argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterMapN( value, randu(), transform );
		};
	}

	function transform( x, y ) {
		return x + y;
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (first argument, context)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterMapN( value, randu(), transform, {} );
		};
	}

	function transform( x, y ) {
		return x + y;
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (second argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterMapN( randu(), value, transform );
		};
	}

	function transform( x, y ) {
		return x + y;
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (second argument, context)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterMapN( randu(), value, transform, {} );
		};
	}

	function transform( x, y ) {
		return x + y;
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (third argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterMapN( randu(), randu(), value, transform );
		};
	}

	function transform( x, y, z ) {
		return x + y + z;
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (third argument, context)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterMapN( randu(), randu(), value, transform, {} );
		};
	}

	function transform( x, y, z ) {
		return x + y + z;
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (fourth argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterMapN( randu(), randu(), randu(), value, transform );
		};
	}

	function transform( x, y, z, w ) {
		return x + y + z + w;
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (fourth argument, context)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterMapN( randu(), randu(), randu(), value, transform, {} );
		};
	}

	function transform( x, y, z, w ) {
		return x + y + z + w;
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterMapN( randu(), randu(), value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (context)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterMapN( randu(), randu(), value, {} );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object (infinite iterators)', function test( t ) {
	var it;
	var v;
	var i;

	it = iterMapN( randu(), randu(), transform );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		v = it.next();
		t.equal( typeof v.value, 'number', 'returns expected value' );
		t.equal( v.done, false, 'returns expected value' );
	}
	t.end();

	function transform( x, y ) {
		return x + y;
	}
});

tape( 'the function returns an iterator protocol-compliant object which applies a function to iterated values (2 finite iterators)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var actual;
	var it;
	var i;

	values1 = [ 1.0, 2.0 ];
	values2 = [ 3.0, 4.0 ];
	expected = [
		{
			'value': 4.0,
			'done': false
		},
		{
			'value': 6.0,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterMapN( array2iterator( values1 ), array2iterator( values2 ), transform ); // eslint-disable-line max-len
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function transform( x, y ) {
		return x + y;
	}
});

tape( 'the function returns an iterator protocol-compliant object which applies a function to iterated values (2 finite iterators; unequal length)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var actual;
	var it;
	var i;

	values1 = [ 1.0, 2.0 ];
	values2 = [ 3.0, 4.0, 5.0, 6.0, 7.0 ];
	expected = [
		{
			'value': 4.0,
			'done': false
		},
		{
			'value': 6.0,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterMapN( array2iterator( values1 ), array2iterator( values2 ), transform ); // eslint-disable-line max-len
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function transform( x, y ) {
		return x + y;
	}
});

tape( 'the function returns an iterator protocol-compliant object which applies a function to iterated values (2 finite iterators; unequal length)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var actual;
	var it;
	var i;

	values1 = [ 1.0, 2.0, 5.0, 6.0, 7.0 ];
	values2 = [ 3.0, 4.0 ];
	expected = [
		{
			'value': 4.0,
			'done': false
		},
		{
			'value': 6.0,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterMapN( array2iterator( values1 ), array2iterator( values2 ), transform ); // eslint-disable-line max-len
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function transform( x, y ) {
		return x + y;
	}
});

tape( 'the function returns an iterator protocol-compliant object which applies a function to iterated values (3 finite iterators)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var values3;
	var actual;
	var it;
	var i;

	values1 = [ 1.0, 2.0 ];
	values2 = [ 3.0, 4.0 ];
	values3 = [ 5.0, 6.0 ];
	expected = [
		{
			'value': 9.0,
			'done': false
		},
		{
			'value': 12.0,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterMapN( array2iterator( values1 ), array2iterator( values2 ), array2iterator( values3 ), transform ); // eslint-disable-line max-len
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function transform( x, y, z ) {
		return x + y + z;
	}
});

tape( 'the function returns an iterator protocol-compliant object which applies a function to iterated values (3 finite iterators; unequal length)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var values3;
	var actual;
	var it;
	var i;

	values1 = [ 1.0, 2.0 ];
	values2 = [ 3.0, 4.0, 7.0 ];
	values3 = [ 5.0, 6.0, 8.0, 9.0, 10.0 ];
	expected = [
		{
			'value': 9.0,
			'done': false
		},
		{
			'value': 12.0,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterMapN( array2iterator( values1 ), array2iterator( values2 ), array2iterator( values3 ), transform ); // eslint-disable-line max-len
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function transform( x, y, z ) {
		return x + y + z;
	}
});

tape( 'the function returns an iterator protocol-compliant object which applies a function to iterated values (3 finite iterators; unequal length)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var values3;
	var actual;
	var it;
	var i;

	values1 = [ 1.0, 2.0, 7.0 ];
	values2 = [ 3.0, 4.0 ];
	values3 = [ 5.0, 6.0, 8.0, 9.0, 10.0 ];
	expected = [
		{
			'value': 9.0,
			'done': false
		},
		{
			'value': 12.0,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterMapN( array2iterator( values1 ), array2iterator( values2 ), array2iterator( values3 ), transform ); // eslint-disable-line max-len
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function transform( x, y, z ) {
		return x + y + z;
	}
});

tape( 'the function returns an iterator protocol-compliant object which applies a function to iterated values (3 finite iterators; unequal length)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var values3;
	var actual;
	var it;
	var i;

	values1 = [ 1.0, 2.0, 7.0 ];
	values2 = [ 3.0, 4.0, 8.0, 9.0 ];
	values3 = [ 5.0, 6.0 ];
	expected = [
		{
			'value': 9.0,
			'done': false
		},
		{
			'value': 12.0,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterMapN( array2iterator( values1 ), array2iterator( values2 ), array2iterator( values3 ), transform ); // eslint-disable-line max-len
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function transform( x, y, z ) {
		return x + y + z;
	}
});

tape( 'the function returns an iterator protocol-compliant object which applies a function to iterated values (3 finite iterators; 1 empty iterator)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var values3;
	var actual;
	var it;

	values1 = [ 1.0, 2.0 ];
	values2 = [];
	values3 = [ 5.0, 6.0 ];
	expected = [
		{
			'done': true
		}
	];

	it = iterMapN( array2iterator( values1 ), array2iterator( values2 ), array2iterator( values3 ), transform ); // eslint-disable-line max-len
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function transform( x, y, z ) {
		return x + y + z;
	}
});

tape( 'the function returns an iterator protocol-compliant object which applies a function to iterated values (empty iterators)', function test( t ) {
	var expected;
	var actual;
	var it;

	expected = [
		{
			'done': true
		}
	];

	it = iterMapN( iterEmpty(), iterEmpty(), iterEmpty(), iterEmpty(), transform ); // eslint-disable-line max-len
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function transform( x, y, z, w ) {
		return x + y + z + w;
	}
});

tape( 'the function invokes a provided callback with iterated values and the iteration index', function test( t ) {
	var expected;
	var values1;
	var values2;
	var actual;
	var it;
	var i;

	values1 = [ 1.0, 2.0 ];
	values2 = [ 3.0, 4.0 ];
	expected = [
		{
			'value': 4.0,
			'done': false
		},
		{
			'value': 7.0,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterMapN( array2iterator( values1 ), array2iterator( values2 ), transform ); // eslint-disable-line max-len
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function transform( x, y, i ) {
		return x + y + i;
	}
});

tape( 'the function supports specifying the callback execution context', function test( t ) {
	var expected;
	var values1;
	var values2;
	var actual;
	var ctx;
	var it;
	var i;

	ctx = {
		'count': 0
	};
	values1 = [ 1.0, 2.0 ];
	values2 = [ 3.0, 4.0 ];
	expected = [
		{
			'value': 4.0,
			'done': false
		},
		{
			'value': 6.0,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterMapN( array2iterator( values1 ), array2iterator( values2 ), transform, ctx ); // eslint-disable-line max-len
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.equal( ctx.count, expected.length-1 );
	t.end();

	function transform( x, y ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return x + y;
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterMapN( randu(), randu(), transform );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();

	function transform( x, y ) {
		return x + y;
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = iterMapN( randu(), randu(), transform );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.equal( r.value, 'finished', 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();

	function transform( x, y ) {
		return x + y;
	}
});

tape( 'if an environment supports `Symbol.iterator` and the provided iterators are iterable, the returned iterator is iterable', function test( t ) {
	var iterMapN;
	var rand1;
	var rand2;
	var opts;
	var it1;
	var it2;
	var i;

	iterMapN = proxyquire( './../lib/main.js', {
		'@stdlib/symbol-iterator': '__ITERATOR_SYMBOL__'
	});

	opts = {
		'seed': 12345
	};

	rand1 = randu( opts );
	rand1[ '__ITERATOR_SYMBOL__' ] = factory;

	rand2 = randu( opts );
	rand2[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterMapN( rand1, rand2, transform );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < 100; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();

	function factory() {
		return randu( opts );
	}

	function transform( x, y ) {
		return x + y;
	}
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var iterMapN;
	var it;

	iterMapN = proxyquire( './../lib/main.js', {
		'@stdlib/symbol-iterator': false
	});

	it = iterMapN( randu(), randu(), transform );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();

	function transform( x, y ) {
		return x + y;
	}
});

tape( 'if a provided iterator is not iterable, the returned iterator is not iterable', function test( t ) {
	var iterMapN;
	var rand;
	var it;

	iterMapN = proxyquire( './../lib/main.js', {
		'@stdlib/symbol-iterator': '__ITERATOR_SYMBOL__'
	});

	rand = randu();
	rand[ '__ITERATOR_SYMBOL__' ] = null;

	it = iterMapN( rand, rand, transform );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();

	function transform( x, y ) {
		return x + y;
	}
});
