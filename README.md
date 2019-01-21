Demo of Babel Loader bug
========================

Files
-----

- `src/index.js` contains an arrow function, imports a package with arrow functions
- `dist/index.js` built file (after running `npm run build`, correctly transpiles our arrow function
  but not the imported ones
- `webpack.config.js` includes configuration for babel including include/exclude rules.

Usage
-----

Download and run `npm i && npm run build`

*Expected behaviour*

`exclude: () => false` means not excluded
`include: () => true` means included

*Actual behaviour*

query-string is not transformed, despite output from babel suggesting it will be.
