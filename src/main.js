
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

// check if HMR is enabled
if (module.hot) {

	// accept itself
	module.hot.accept();

	// accept update of dependency
	module.hot.accept('./lib1', function () {

		// reload the dependency and use it
		lib1 = require('./lib1');
		console.log('lib1 version: ', lib1.version());
		console.log('lib1 data: ', lib1.data);

	});
}
