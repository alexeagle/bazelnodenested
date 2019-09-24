const _ = require("lodash")
const fs = require("fs")
const path = require("path")
const ver = _.VERSION

function mkdirp(p) {
  if (!fs.existsSync(p)) {
    mkdirp(path.dirname(p));
    fs.mkdirSync(p);
  }
}

const out = process.argv[2];
mkdirp(path.dirname(out));
require("fs").writeFileSync(out, `
console.log('Node Version: ', ${process.version});
console.log('Lodash Version: ', ${ver});
`, 'utf-8');
console.error('wrote', out);
