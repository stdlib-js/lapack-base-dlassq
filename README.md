<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dlassq

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an updated sum of squares represented in scaled form.

<section class="intro">

This routine returns the values $s_{textrm{out}}$ and $\\textrm{ss}_{\\textrm{out}}$ such that

<!-- <equation class="equation" label="eq:sum_of_squares" align="center" raw="s_{\textrm{out}}^2 \cdot \textrm{ss}_{\textrm{out}} = x_0^2 + \ldots + x_{N-1}^2 + s_{\textrm{in}}^2 \cdot \textrm{ss}_{\textrm{in}}" alt="Sum of squares represented in scaled form"> -->

<div class="equation" align="center" data-raw-text="s_{\textrm{out}}^2 \cdot \textrm{ss}_{\textrm{out}} = x_0^2 + \ldots + x_{N-1}^2 + s_{\textrm{in}}^2 \cdot \textrm{ss}_{\textrm{in}}" data-equation="eq:sum_of_squares">
    <img src="" alt="Sum of squares represented in scaled form">
    <br>
</div>

<!-- </equation> -->

where $x_i = X_{(i-1) \\cdot \\textrm{sx}}$ and $\\textrm{sx}$ is the stride of `X`. The value of $\\textrm{ss}\_{\\textrm{in}}$ is assumed to be nonnegative.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
dlassq = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dlassq@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/lapack-base-dlassq/tags). For example,

```javascript
dlassq = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dlassq@v0.1.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var dlassq = require( 'path/to/vendor/umd/lapack-base-dlassq/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dlassq@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.dlassq;
})();
</script>
```

#### dlassq( N, X, strideX, scale, sumsq )

Returns an updated sum of squares represented in scaled form.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

var out = dlassq( 4, X, 1, 1.0, 0.0 );
// returns <Float64Array>[ 1.0, 30.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **X**: input [`Float64Array`][mdn-float64array].
-   **strideX**: stride length for `X`.
-   **scale**: scaling factor.
-   **sumsq**: basic sum of squares from which output is factored out.

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial array:
var X0 = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );

// Create an offset view:
var X1 = new Float64Array( X0.buffer, X0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Compute the sum of squares:
var out = dlassq( X1.length, X1, 1, 1.0, 0.0 );
// returns <Float64Array>[ 1.0, 30.0 ]
```

The returned [`Float64Array`][mdn-float64array] contains an updated scale factor and an updated sum of squares, respectively.

#### dlassq.ndarray( N, X, sx, ox, scale, sumsq, out, so, oo )

Returns an updated sum of squares represented in scaled form using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var out = new Float64Array( [ 0.0, 0.0 ] );

dlassq.ndarray( 4, X, 1, 0, 1.0, 0.0, out, 1, 0 );
// out => <Float64Array>[ 1.0, 30.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `X`.
-   **out**: output [`Float64Array`][mdn-float64array].
-   **so**: stride length for `out`.
-   **oo**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var X = new Float64Array( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0 ] );
var out = new Float64Array( [ 0.0, 0.0, 999.9, 0.0, 999.9 ] );

dlassq.ndarray( 4, X, 2, 0, 1.0, 0.0, out, 2, 1 );
// out => <Float64Array>[ 0.0, 1.0, 999.9, 30.0, 999.9 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dlassq()` corresponds to the [LAPACK][LAPACK] function [`dlassq`][lapack-dlassq].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-dlassq@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var X = discreteUniform( 10, -10, 10, {
    'dtype': 'float64'
});
console.log( X );

var out = dlassq( X.length, X, 1, 1.0, 0.0 );
console.log( out );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



* * *

<section class="references">

## References

-   Blue, James L. 1978. "A Portable Fortran Program to Find the Euclidean Norm of a Vector." _ACM Transactions on Mathematical Software_ 4 (1). New York, NY, USA: Association for Computing Machinery: 15–23. doi:[10.1145/355769.355771][@blue:1978a].
-   Anderson, Edward. 2017. "Algorithm 978: Safe Scaling in the Level 1 BLAS." _ACM Transactions on Mathematical Software_ 44 (1). New York, NY, USA: Association for Computing Machinery: 1–28. doi:[10.1145/3061665][@anderson:2017a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/lapack-base-dlassq.svg
[npm-url]: https://npmjs.org/package/@stdlib/lapack-base-dlassq

[test-image]: https://github.com/stdlib-js/lapack-base-dlassq/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/lapack-base-dlassq/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/lapack-base-dlassq/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/lapack-base-dlassq?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/lapack-base-dlassq.svg
[dependencies-url]: https://david-dm.org/stdlib-js/lapack-base-dlassq/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/lapack-base-dlassq/tree/deno
[deno-readme]: https://github.com/stdlib-js/lapack-base-dlassq/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/lapack-base-dlassq/tree/umd
[umd-readme]: https://github.com/stdlib-js/lapack-base-dlassq/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/lapack-base-dlassq/tree/esm
[esm-readme]: https://github.com/stdlib-js/lapack-base-dlassq/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/lapack-base-dlassq/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/lapack-base-dlassq/main/LICENSE

[lapack]: https://www.netlib.org/lapack/explore-html/

[lapack-dlassq]: https://www.netlib.org/lapack/explore-html/d8/d76/group__lassq_gae8f40b0a34771b4f2d9c863de3af7be5.html#gae8f40b0a34771b4f2d9c863de3af7be5

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@blue:1978a]: https://doi.org/10.1145/355769.355771

[@anderson:2017a]: https://doi.org/10.1145/3061665

</section>

<!-- /.links -->
