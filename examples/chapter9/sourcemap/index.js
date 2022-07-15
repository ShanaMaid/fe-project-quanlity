const {
  SourceMapConsumer
} = require('source-map');
const path = require('path');
const fs = require('fs');


const rawSourceMap = JSON.parse(fs.readFileSync('./build/main.js.map'));

(async () => {
  await SourceMapConsumer.with(rawSourceMap, null, consumer => {
    console.log(
      consumer.originalPositionFor({
        line: 11,
        column: 132878
      })
    );
  });
})();