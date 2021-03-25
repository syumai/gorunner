const fs = require("fs").promises;
const exit = process.exit;
require("./thirdparty/wasm_exec.js");
const go = new Go();

go.exit = (code) => {
  if (code === 0) {
    return;
  }
  exit(code);
}

(async () => {
  const wasm = await WebAssembly.compile(await fs.readFile("./main.wasm"));
  const instance = await WebAssembly.instantiate(wasm, go.importObject);
  await go.run(instance);
})();

