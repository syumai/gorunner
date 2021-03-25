const fs = require('fs').promises;
require("./thirdparty/wasm_exec.js");
const go = new Go();

(async () => {
  const wasm = await WebAssembly.compile(await fs.readFile("./main.wasm"));
  const instance = await WebAssembly.instantiate(wasm, go.importObject);
  await go.run(instance);
})();

