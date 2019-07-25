const Babel = require('@babel/standalone');

let result = null;
const regexpStr = `/^([\\p{P}\\p{S}]+)?(\\S{1,64})@([\\p{L}\\d]{1}[\\S]{0,}\\.)(\\p{L}+)/gimu`;

const getEvaluatableRegExpString = (r) => `
  const r = ${r};
  result = r.exec('ihor@uplab.ігор');
`;

const output = Babel.transform(getEvaluatableRegExpString(regexpStr), {
  presets: [
    [require('@babel/preset-env'), {
      exclude: ['@babel/plugin-transform-unicode-regex'],
    }],
  ],
});

eval(output.code);

console.log(JSON.stringify(result));
