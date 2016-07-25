
let lib1 = require('./lib1');
let counter = 0;

console.log('\n------- app startup -------\n');


console.log('lib1 version: ', lib1.version());
console.log('lib1 data: ', lib1.data);


setInterval(
	function () {
		counter += 1;
		console.log('counter:',counter);
	}, 3000);

if (module.hot) {

	module.hot.accept('./lib1', function () {

		lib1 = require('./lib1');
		console.log('lib1 version: ', lib1.version());
		console.log('lib1 data: ', lib1.data);

	});
}
