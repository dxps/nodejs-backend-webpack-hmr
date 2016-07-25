
Node.js Backend with Webpack and HMR
---

> A Starter Package

### Usage

* Install the local packages using `npm install`
* Run using `npm run dev`
  * It starts webpack to package the build.js
  * Then it starts both:
       * `webpack --watch` to check for any source changes and rebuild the package.
       * `nodemon` to grab any build.js changes and restart the Node app.

Inspired by:
- https://github.com/jiyinyiyong/webpack-backend-HMR-demo
- http://jlongster.com/Backend-Apps-with-Webpack--Part-I
- https://github.com/webpack/docs/issues/45#issuecomment-149793458
