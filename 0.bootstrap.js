(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_snake.js":
/*!****************************!*\
  !*** ../pkg/wasm_snake.js ***!
  \****************************/
/*! exports provided: __wbg_set_wasm, Cell, Direction, ControlState, Universe, __wbindgen_string_new, __wbindgen_object_drop_ref, __wbg_new_abda76e883ba8a5f, __wbg_stack_658279fe44541cf6, __wbg_error_f851667af71bcfc6, __wbg_log_1d3ae0273d8f4f8a, __wbg_random_5f61cd0d6777a993, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_snake_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_snake_bg.wasm */ \"../pkg/wasm_snake_bg.wasm\");\n/* harmony import */ var _wasm_snake_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_snake_bg.js */ \"../pkg/wasm_snake_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return _wasm_snake_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return _wasm_snake_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Direction\", function() { return _wasm_snake_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Direction\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ControlState\", function() { return _wasm_snake_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"ControlState\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return _wasm_snake_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return _wasm_snake_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_string_new\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _wasm_snake_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_abda76e883ba8a5f\", function() { return _wasm_snake_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_abda76e883ba8a5f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_658279fe44541cf6\", function() { return _wasm_snake_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_stack_658279fe44541cf6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_f851667af71bcfc6\", function() { return _wasm_snake_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_error_f851667af71bcfc6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_1d3ae0273d8f4f8a\", function() { return _wasm_snake_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_log_1d3ae0273d8f4f8a\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_5f61cd0d6777a993\", function() { return _wasm_snake_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_5f61cd0d6777a993\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _wasm_snake_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\nObject(_wasm_snake_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"])(_wasm_snake_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_snake.js?");

/***/ }),

/***/ "../pkg/wasm_snake_bg.js":
/*!*******************************!*\
  !*** ../pkg/wasm_snake_bg.js ***!
  \*******************************/
/*! exports provided: __wbg_set_wasm, Cell, Direction, ControlState, Universe, __wbindgen_string_new, __wbindgen_object_drop_ref, __wbg_new_abda76e883ba8a5f, __wbg_stack_658279fe44541cf6, __wbg_error_f851667af71bcfc6, __wbg_log_1d3ae0273d8f4f8a, __wbg_random_5f61cd0d6777a993, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return __wbg_set_wasm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Direction\", function() { return Direction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ControlState\", function() { return ControlState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_abda76e883ba8a5f\", function() { return __wbg_new_abda76e883ba8a5f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_658279fe44541cf6\", function() { return __wbg_stack_658279fe44541cf6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_f851667af71bcfc6\", function() { return __wbg_error_f851667af71bcfc6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_1d3ae0273d8f4f8a\", function() { return __wbg_log_1d3ae0273d8f4f8a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_5f61cd0d6777a993\", function() { return __wbg_random_5f61cd0d6777a993; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(128).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 132) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length, 1) >>> 0;\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len, 1) >>> 0;\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nconst Cell = Object.freeze({ Dead:0,\"0\":\"Dead\",Alive:1,\"1\":\"Alive\",Apple:2,\"2\":\"Apple\", });\n/**\n*/\nconst Direction = Object.freeze({ Up:0,\"0\":\"Up\",Down:1,\"1\":\"Down\",Left:2,\"2\":\"Left\",Right:3,\"3\":\"Right\", });\n/**\n*/\nconst ControlState = Object.freeze({ Player:0,\"0\":\"Player\",Computer:1,\"1\":\"Computer\", });\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        ptr = ptr >>> 0;\n        const obj = Object.create(Universe.prototype);\n        obj.__wbg_ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_universe_free(ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @returns {Universe}\n    */\n    static new(width, height) {\n        const ret = wasm.universe_new(width, height);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    snake_head() {\n        const ret = wasm.universe_snake_head(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    apple() {\n        const ret = wasm.universe_apple(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = wasm.universe_width(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = wasm.universe_height(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    score() {\n        const ret = wasm.universe_score(this.__wbg_ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    cells() {\n        const ret = wasm.universe_cells(this.__wbg_ptr);\n        return ret;\n    }\n    /**\n    * @param {number} width\n    */\n    set_width(width) {\n        wasm.universe_set_width(this.__wbg_ptr, width);\n    }\n    /**\n    * @param {number} height\n    */\n    set_height(height) {\n        wasm.universe_set_height(this.__wbg_ptr, height);\n    }\n    /**\n    */\n    restart() {\n        wasm.universe_restart(this.__wbg_ptr);\n    }\n    /**\n    * @param {number} dir\n    */\n    set_direction(dir) {\n        wasm.universe_set_direction(this.__wbg_ptr, dir);\n    }\n    /**\n    * @param {number} row\n    * @param {number} column\n    */\n    place_apple(row, column) {\n        wasm.universe_place_apple(this.__wbg_ptr, row, column);\n    }\n    /**\n    */\n    place_random_apple() {\n        wasm.universe_place_random_apple(this.__wbg_ptr);\n    }\n    /**\n    * @returns {boolean}\n    */\n    tick() {\n        const ret = wasm.universe_tick(this.__wbg_ptr);\n        return ret !== 0;\n    }\n}\n\nfunction __wbindgen_string_new(arg0, arg1) {\n    const ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nfunction __wbg_new_abda76e883ba8a5f() {\n    const ret = new Error();\n    return addHeapObject(ret);\n};\n\nfunction __wbg_stack_658279fe44541cf6(arg0, arg1) {\n    const ret = getObject(arg1).stack;\n    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len1 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len1;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr1;\n};\n\nfunction __wbg_error_f851667af71bcfc6(arg0, arg1) {\n    let deferred0_0;\n    let deferred0_1;\n    try {\n        deferred0_0 = arg0;\n        deferred0_1 = arg1;\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);\n    }\n};\n\nfunction __wbg_log_1d3ae0273d8f4f8a(arg0) {\n    console.log(getObject(arg0));\n};\n\nconst __wbg_random_5f61cd0d6777a993 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/wasm_snake_bg.js?");

/***/ }),

/***/ "../pkg/wasm_snake_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/wasm_snake_bg.wasm ***!
  \*********************************/
/*! exports provided: memory, __wbg_universe_free, universe_new, universe_snake_head, universe_apple, universe_width, universe_height, universe_score, universe_cells, universe_set_width, universe_set_height, universe_restart, universe_set_direction, universe_place_apple, universe_place_random_apple, universe_tick, __wbindgen_free, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_snake_bg.js */ \"../pkg/wasm_snake_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_snake_bg.wasm?");

/***/ }),

/***/ "./controllers.js":
/*!************************!*\
  !*** ./controllers.js ***!
  \************************/
/*! exports provided: KeyboardController, SimpleAIController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KeyboardController\", function() { return KeyboardController; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SimpleAIController\", function() { return SimpleAIController; });\n/* harmony import */ var wasm_snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-snake */ \"../pkg/wasm_snake.js\");\n\n\nclass Controller {\n  constructor(game) {\n    this.game = game;\n  }\n\n  onStart() {\n    throw new Error(\"Not implemented\");\n  }\n\n  poll() {\n    throw new Error(\"Not implemented\");\n  }\n}\n\nclass KeyboardController extends Controller {\n  constructor(game) {\n    super(game);\n    this.keys = {\n      ArrowUp: wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Up,\n      ArrowDown: wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Down,\n      ArrowLeft: wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Left,\n      ArrowRight: wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Right,\n    };\n    this.currentDirection = wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Right;\n  }\n\n  toString() {\n    return \"You!\";\n  }\n\n  onStart() {\n    document.addEventListener(\"keydown\", (e) => {\n      if (e.key in this.keys) {\n        this.currentDirection = this.keys[e.key];\n      }\n    });\n  }\n\n  poll() {\n    return this.currentDirection;\n  }\n}\n\nclass SimpleAIController extends Controller {\n  constructor(game) {\n    super(game);\n    this.currentDirection = wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Right;\n  }\n\n  toString() {\n    return \"Computer\";\n  }\n\n  onStart() {}\n\n  poll() {\n    const head = this.game.universe.snake_head();\n    const [snakeRow, snakeCol] = this.game.getCoords(head);\n    const apple = this.game.universe.apple();\n    const [appleRow, appleCol] = this.game.getCoords(apple);\n\n    if (snakeRow === appleRow) {\n      if (snakeCol < appleCol) {\n        this.currentDirection = wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Right;\n      } else {\n        this.currentDirection = wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Left;\n      }\n    } else if (snakeCol === appleCol) {\n      if (snakeRow < appleRow) {\n        this.currentDirection = wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Down;\n      } else {\n        this.currentDirection = wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Up;\n      }\n    } else {\n      if (snakeRow < appleRow) {\n        this.currentDirection = wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Down;\n      } else {\n        this.currentDirection = wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Up;\n      }\n    }\n\n    return this.currentDirection;\n  }\n}\n\n\n//# sourceURL=webpack:///./controllers.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-snake */ \"../pkg/wasm_snake.js\");\n/* harmony import */ var wasm_snake_wasm_snake_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wasm-snake/wasm_snake_bg */ \"../pkg/wasm_snake_bg.wasm\");\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers */ \"./controllers.js\");\n\n\n\n\n\nconst CELL_SIZE = 20; // px\nconst GRID_COLOR = \"grey\";\nconst cellColors = {\n  [wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"].Dead]: \"#1E293B\",\n  [wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"].Alive]: \"#0B6623\",\n  [wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Cell\"].Apple]: \"#C7372F\",\n};\n\nclass SnakeGame {\n  constructor(canvas) {\n    this.universe = wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new(32, 32);\n    this.canvas = canvas;\n    this.controller = new _controllers__WEBPACK_IMPORTED_MODULE_2__[\"SimpleAIController\"](this);\n    this.results = document.getElementById(\"results-screen\");\n    this.scoreNodes = document.getElementsByClassName(\"score\");\n  }\n\n  get height() {\n    return this.universe.height();\n  }\n\n  get width() {\n    return this.universe.width();\n  }\n\n  getIndex(row, column) {\n    return row * this.width + column;\n  }\n\n  getCoords(index) {\n    const row = Math.floor(index / this.width);\n    const column = index % this.width;\n\n    return [row, column];\n  }\n\n  run() {\n    this.controller.onStart();\n    this.canvas.height = (CELL_SIZE + 1) * this.height + 1;\n    this.canvas.width = (CELL_SIZE + 1) * this.width + 1;\n    /** @type {CanvasRenderingContext2D} */\n    this.ctx = this.canvas.getContext(\"2d\");\n\n    this.setupListeners();\n    this.renderLoop();\n  }\n\n  setupListeners() {\n    document.body.addEventListener(\"keydown\", (e) => {\n      if (e.key === \" \") {\n        if (this.controller instanceof _controllers__WEBPACK_IMPORTED_MODULE_2__[\"KeyboardController\"]) {\n          this.controller = new _controllers__WEBPACK_IMPORTED_MODULE_2__[\"SimpleAIController\"](this);\n        } else {\n          this.controller = new _controllers__WEBPACK_IMPORTED_MODULE_2__[\"KeyboardController\"](this);\n        }\n        this.controller.onStart();\n\n        document.getElementById(\"player\").innerHTML =\n          this.controller.toString();\n      }\n    });\n\n    const restart = document.getElementById(\"restart\");\n\n    restart.addEventListener(\"click\", () => {\n      restart.blur();\n      this.results.style.opacity = \"0\";\n      this.restart();\n    });\n  }\n\n  restart() {\n    this.universe.restart();\n    this.controller.currentDirection = wasm_snake__WEBPACK_IMPORTED_MODULE_0__[\"Direction\"].Right;\n    this.renderLoop();\n  }\n\n  drawGrid() {\n    this.ctx.beginPath();\n    this.ctx.strokeStyle = GRID_COLOR;\n\n    // Vertical lines.\n    for (let i = 0; i <= this.width; i++) {\n      this.ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);\n      this.ctx.lineTo(\n        i * (CELL_SIZE + 1) + 1,\n        (CELL_SIZE + 1) * this.height + 1\n      );\n    }\n\n    // Horizontal lines.\n    for (let j = 0; j <= this.height; j++) {\n      this.ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);\n      this.ctx.lineTo(\n        (CELL_SIZE + 1) * this.width + 1,\n        j * (CELL_SIZE + 1) + 1\n      );\n    }\n\n    this.ctx.stroke();\n  }\n\n  drawCells() {\n    const cellsPtr = this.universe.cells();\n    const cells = new Uint8Array(\n      wasm_snake_wasm_snake_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer,\n      cellsPtr,\n      this.width * this.height\n    );\n\n    this.ctx.beginPath();\n\n    for (let row = 0; row < this.height; row++) {\n      for (let col = 0; col < this.width; col++) {\n        const idx = this.getIndex(row, col);\n\n        this.ctx.fillStyle = cellColors[cells[idx]];\n\n        this.ctx.fillRect(\n          col * (CELL_SIZE + 1) + 1,\n          row * (CELL_SIZE + 1) + 1,\n          CELL_SIZE,\n          CELL_SIZE\n        );\n      }\n    }\n\n    this.ctx.stroke();\n  }\n\n  renderLoop() {\n    const alive = this.universe.tick();\n    const direction = this.controller.poll();\n    this.universe.set_direction(direction);\n\n    for (let i = 0; i < this.scoreNodes.length; i++) {\n      this.scoreNodes[i].innerHTML = this.universe.score();\n    }\n\n    if (alive) {\n      this.drawGrid();\n      this.drawCells();\n      setTimeout(\n        () => requestAnimationFrame(this.renderLoop.bind(this)),\n        Math.log(100 / (this.universe.score() + 1)) * 20\n      );\n    } else {\n      this.results.style.opacity = \"1\";\n    }\n  }\n}\n\n/** @type {HTMLCanvasElement} */\nconst canvas = document.getElementById(\"game-of-life-canvas\");\n\nconst game = new SnakeGame(canvas);\ngame.run();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);