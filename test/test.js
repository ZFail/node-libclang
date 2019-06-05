const libclang = require('../libclang')
console.log(process.pid)
const index = new libclang.Index(0, 1)
const headerFilename = './test.h'
const tu = new libclang.TranslationUnit.fromSource(index, headerFilename, []);

function cb() {
    if (this.location.presumedLocation.filename === headerFilename) {
        console.log(this.spelling)
    }
    return 1
}
tu.cursor.visitChildren(cb);
index.dispose();
