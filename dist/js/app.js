(function (factory) {
	typeof define === 'function' && define.amd ? define('app', factory) :
	factory();
}((function () { 'use strict';

	const hello = "Hello";
	console.log(hello);

})));
