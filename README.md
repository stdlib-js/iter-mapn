<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterMapN

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Create an [iterator][mdn-iterator-protocol] which transforms iterated values from two or more [iterators][mdn-iterator-protocol] by applying the iterated values as arguments to a provided function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/iter-mapn
```

</section>

<section class="usage">

## Usage

```javascript
var iterMapN = require( '@stdlib/iter-mapn' );
```

#### iterMapN( iter0, ...iterator, fcn\[, thisArg] )

Returns an [iterator][mdn-iterator-protocol] which transforms iterated values from two or more [iterators][mdn-iterator-protocol] by applying the iterated values as arguments to a provided function.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function transform( x, y ) {
    return x + y;
}

var it1 = array2iterator( [ 1.0, 2.0 ] );
var it2 = array2iterator( [ 3.0, 4.0 ] );

var it = iterMapN( it1, it2, transform );
// returns <Object>

var v = it.next().value;
// returns 4.0

v = it.next().value;
// returns 6.0

var bool = it.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

The invoked `function` is provided `N+1` arguments, where `N` is the number of provided [iterators][mdn-iterator-protocol] and the last argument is the iteration index:

-   `...value`: iterated values
-   `index`: iteration index (zero-based)

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function transform( x, y, i ) {
    return x + y + i;
}

var it1 = array2iterator( [ 1.0, 2.0 ] );
var it2 = array2iterator( [ 3.0, 4.0 ] );

var it = iterMapN( it1, it2, transform );
// returns <Object>

var v = it.next().value;
// returns 4.0

v = it.next().value;
// returns 7.0

var bool = it.next().done;
// returns true
```

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

function transform( x, y ) {
    this.count += 1;
    return x + y;
}

var it1 = array2iterator( [ 1.0, 2.0 ] );
var it2 = array2iterator( [ 3.0, 4.0 ] );

var ctx = {
    'count': 0
};
var it = iterMapN( it1, it2, transform, ctx );
// returns <Object>

var v = it.next().value;
// returns 4.0

v = it.next().value;
// returns 6.0

var bool = it.next().done;
// returns true

var count = ctx.count;
// returns 2
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The length of the returned [iterator][mdn-iterator-protocol] is equal to the length of the shortest provided [iterator][mdn-iterator-protocol]. In other words, the returned [iterator][mdn-iterator-protocol] ends once **one** of the provided [iterators][mdn-iterator-protocol] ends.
-   If an environment supports `Symbol.iterator` **and** provided [iterators][mdn-iterator-protocol] are iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var iterSineWave = require( '@stdlib/simulate-iter-sine-wave' );
var iterMapN = require( '@stdlib/iter-mapn' );

function add( x, y ) {
    return x + y;
}

// Create an iterator which generates a sine wave:
var sine1 = iterSineWave({
    'period': 50,
    'offset': 0,
    'iter': 100
});

// Create another iterator which generates a higher frequency sine wave:
var sine2 = iterSineWave({
    'period': 10,
    'offset': 0,
    'iter': 100
});

// Create an iterator which adds the two waveforms:
var it = iterMapN( sine1, sine2, add );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-mapn.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-mapn

[test-image]: https://github.com/stdlib-js/iter-mapn/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/iter-mapn/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-mapn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-mapn?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-mapn
[dependencies-url]: https://david-dm.org/stdlib-js/iter-mapn/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-mapn/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
