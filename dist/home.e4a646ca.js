// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kBoZe":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "f55985f1e4a646ca";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2RaVp":[function(require,module,exports) {
var _productArray = require("../typescript/models/productArray");
var _cartClass = require("./models/CartClass");
let cartArray = [];
let total;
window.onload = function() {
    document.getElementById("home-cart-button").addEventListener("click", goToCartSite);
    createHomeHtml();
    getCartFromLocalStorage();
    productsInCartArrayCounter();
};
function createHomeHtml() {
    let homeAllProductsWrapper = document.getElementById("home-all-products-wrapper");
    for(let i = 0; i < _productArray.productArray.length; i++){
        let homeSingleProductWrapper = document.createElement("div");
        let homeImageWrapper = document.createElement("div");
        let homeProductImage = document.createElement("img");
        let homeProductCartLink = document.createElement("div");
        let homeBiBagPlus = document.createElement("i");
        let homeProductName = document.createElement("h5");
        let homeProductPrice = document.createElement("h5");
        homeSingleProductWrapper.className = "home-single-product-wrapper";
        homeImageWrapper.className = "home-image-wrapper";
        homeProductCartLink.className = "home-product-cart-link";
        homeBiBagPlus.classList.add("bi", "bi-bag-plus");
        homeProductName.className = "home-product-name";
        homeProductPrice.className = "home-product-price";
        homeImageWrapper.addEventListener("click", ()=>{
            goToProductPage(i);
        });
        homeProductCartLink.addEventListener("click", ()=>{
            addProductToCart(i);
        });
        homeProductImage.src = _productArray.productArray[i].image;
        homeProductName.innerHTML = _productArray.productArray[i].name;
        homeProductPrice.innerHTML = _productArray.productArray[i].price.toString() + ":-";
        homeSingleProductWrapper.appendChild(homeImageWrapper);
        homeImageWrapper.appendChild(homeProductImage);
        homeSingleProductWrapper.appendChild(homeProductCartLink);
        homeProductCartLink.appendChild(homeBiBagPlus);
        homeSingleProductWrapper.appendChild(homeProductName);
        homeSingleProductWrapper.appendChild(homeProductPrice);
        homeAllProductsWrapper.appendChild(homeSingleProductWrapper);
    }
}
function goToProductPage(i) {
    let productToProductPage = JSON.stringify(_productArray.productArray[i]);
    sessionStorage.setItem("productToProductPage", productToProductPage);
    window.location.href = "product.html";
}
function addProductToCart(i) {
    if (cartArray.length === 0) {
        sendProductFromProductArrayToCartArray(i);
        sendToCartInLocalStorage();
    } else if (cartArray.some((product)=>product.name === _productArray.productArray[i].name
    )) {
        let findProduct = cartArray.find((theProduct)=>theProduct.name === _productArray.productArray[i].name
        );
        findProduct.amount++;
        sendToCartInLocalStorage();
    } else {
        sendProductFromProductArrayToCartArray(i);
        sendToCartInLocalStorage();
    }
    productsInCartArrayCounter();
}
function sendProductFromProductArrayToCartArray(i) {
    let cartArrayItem = new _cartClass.CartProduct(_productArray.productArray[i].name, _productArray.productArray[i].image, _productArray.productArray[i].price, _productArray.productArray[i].amount);
    cartArray.push(cartArrayItem);
}
function goToCartSite() {
    window.location.href = "cart.html";
}
function sendToCartInLocalStorage() {
    let cartArrayToLocalStorageJson = JSON.stringify(cartArray);
    window.localStorage.setItem("cartArray", cartArrayToLocalStorageJson);
}
function getCartFromLocalStorage() {
    let cartLS = window.localStorage.getItem("cartArray");
    if (!cartLS) sendToCartInLocalStorage();
    else cartArray = JSON.parse(cartLS);
}
function productsInCartArrayCounter() {
    getCartFromLocalStorage();
    let totalItemsInArray = 0;
    cartArray.forEach((quantity)=>{
        totalItemsInArray += quantity.amount;
    });
    console.log(totalItemsInArray);
    let cartCount = document.getElementById("cart-counter");
    cartCount.innerHTML = totalItemsInArray.toString();
    if (totalItemsInArray > 0) cartCount.classList.add("visible");
}

},{"../typescript/models/productArray":"cShP2","./models/CartClass":"eQD2C"}],"cShP2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "productArray", ()=>productArray
);
var _product = require("./Product");
let eucalyptus = new _product.Product("Eucalyptus", "../../assets.Eucalyptus_cropped.jpg", "Upgrade your life with a wondeful twig of eucalyptus. Great for your home office and for your living room.", 10, 1);
let peaceLily = new _product.Product("Peace Lily", "", "The Pice Lily sybolizes peace, sympathy, prosparety and innocence. This plant will brighten upp your darkest corners.", 10, 1);
let monstera = new _product.Product("Monstera", "", "The extravagant Monstera is greatly poular and rightfully so, if taken care of correctly it can get up to 10 meters high and the leaves are big as a giants hand", 15, 1);
let porcelainFlower = new _product.Product("Porcelain Flower", "", "The leaves are thick and the smell of the bold, beautiful flowers will remind you of grandma, in her glory days.", 15, 1);
let peony = new _product.Product("Peony", "", "This ball off deliciousness comes from the countries who’s beaches you really wanna visit. You’ll love it!", 10, 1);
let lily = new _product.Product("Lily", "", "Since 1753 when Carl von Linné braught this beauty to Europe, People have loved and chairiched the magestic Lily!", 15, 1);
let tulip = new _product.Product("Tulip", "", "This dutch majesty grows in the spring time. when the sun is warm and you’re full of love you’ll know it’s time to buy some tulips.", 10, 1);
let hortensia = new _product.Product("Hortensia", "", "This beauty is easy to grow in your garden and magificent on your dining table. Buy it now, thank us later!", 15, 1);
let mixedCacti = new _product.Product("Mixed Cacti", "", "This party of cacti will keep you company through the darkest nights and the brightest days. It’s social skills are uncanny.", 20, 1);
let miniatureCactus = new _product.Product("Miniature Cactus", "", "This unfriendly little bastard is both beautifuland disturbing, your eyes will love it, your fingers won’t.", 10, 1);
let aloe = new _product.Product("Aloe", "", "This guy will heal both your wounds and your soul. On top of that it’s great if you lack a green thumb.", 10, 1);
let fingerCactus = new _product.Product("Finger Cactus", "", "Do you love fishing? If that’s the case, this is the plant for you. Focus on fishing gear beacuse this cactus will survive during your long fishing trips.", 20, 1);
let turquoisePartyPot = new _product.Product("Turquoise Party Pot", "", "This turquois flowerpot is the life of a party, a must to any serious collection of flower pots.", 15, 1);
let ruggedCeramicPot = new _product.Product("Rugged Ceramic Pot", "", "A rugged ceramic pot, great for flowers and great for soup. Get your groove on and get your plant in one of thies fine things.", 20, 1);
let whitePlasticPot = new _product.Product("White Plastic Pot", "", "White, plastic and romantic. Stick your favorite plant in one of these and you’ll never walk alone.", 20, 1);
let plainWhiteCeramicPot = new _product.Product("Plain White Ceramic Pot", "", "The Plain White Ceramic Pot is simplicity in its purest form, great for any type of interior design.", 15, 1);
let productArray = [
    eucalyptus,
    peaceLily,
    monstera,
    porcelainFlower,
    peony,
    lily,
    tulip,
    hortensia,
    mixedCacti,
    miniatureCactus,
    aloe,
    fingerCactus,
    turquoisePartyPot,
    ruggedCeramicPot,
    whitePlasticPot,
    plainWhiteCeramicPot, 
];

},{"./Product":"6P9rs","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6P9rs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Product", ()=>Product
);
class Product {
    constructor(name, image, description, price, amount){
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.amount = amount;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eQD2C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CartProduct", ()=>CartProduct
);
class CartProduct {
    constructor(name, image, price, amount){
        this.name = name;
        this.image = image;
        this.price = price;
        this.amount = amount;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["kBoZe","2RaVp"], "2RaVp", "parcelRequire8272")

//# sourceMappingURL=home.e4a646ca.js.map
