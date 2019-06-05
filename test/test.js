const libclang = require('../libclang')
console.log(process.pid)
const index = new libclang.Index(0, 1)
const tu = new libclang.TranslationUnit.fromSource(index, 'd:\\projects\\skytech\\include\\st\\harvester\\jobs.h', ['-Id:\\projects\\skytech\\include']);

function cb() {
    console.log(this)
    return 1
}
tu.cursor.visitChildren(cb);
index.dispose();
