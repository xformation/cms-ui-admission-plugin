define(['react', 'react-dom'], function(
  __WEBPACK_EXTERNAL_MODULE_react__,
  __WEBPACK_EXTERNAL_MODULE_react_dom__
) {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {enumerable: true, get: getter});
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', {value: true});
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule)
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, 'default', {enumerable: true, value: value});
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = './module.ts'));
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ '../node_modules/apollo-link-core/lib/index.js':
        /*!*****************************************************!*\
  !*** ../node_modules/apollo-link-core/lib/index.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          function __export(m) {
            for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
          }
          Object.defineProperty(exports, '__esModule', {value: true});
          var link_1 = __webpack_require__(
            /*! ./link */ '../node_modules/apollo-link-core/lib/link.js'
          );
          exports.execute = link_1.execute;
          exports.ApolloLink = link_1.ApolloLink;
          var linkUtils_1 = __webpack_require__(
            /*! ./linkUtils */ '../node_modules/apollo-link-core/lib/linkUtils.js'
          );
          exports.makePromise = linkUtils_1.makePromise;
          var zen_observable_ts_1 = __webpack_require__(
            /*! zen-observable-ts */ '../node_modules/apollo-link-core/node_modules/zen-observable-ts/lib/zenObservable.js'
          );
          exports.Observable = zen_observable_ts_1.default;
          __export(
            __webpack_require__(
              /*! zen-observable-ts */ '../node_modules/apollo-link-core/node_modules/zen-observable-ts/lib/zenObservable.js'
            )
          );
          exports.default = link_1.ApolloLink;
          //# sourceMappingURL=index.js.map

          /***/
        },

      /***/ '../node_modules/apollo-link-core/lib/link.js':
        /*!****************************************************!*\
  !*** ../node_modules/apollo-link-core/lib/link.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var __extends =
            (this && this.__extends) ||
            (function() {
              var extendStatics =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype =
                  b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
              };
            })();
          var __assign =
            (this && this.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };
          Object.defineProperty(exports, '__esModule', {value: true});
          var linkUtils_1 = __webpack_require__(
            /*! ./linkUtils */ '../node_modules/apollo-link-core/lib/linkUtils.js'
          );
          var graphql_tag_1 = __webpack_require__(
            /*! graphql-tag */ '../node_modules/graphql-tag/src/index.js'
          );
          var zen_observable_ts_1 = __webpack_require__(
            /*! zen-observable-ts */ '../node_modules/apollo-link-core/node_modules/zen-observable-ts/lib/zenObservable.js'
          );
          var ApolloLink = (function() {
            function ApolloLink() {}
            ApolloLink.from = function(links) {
              if (links.length === 0) {
                return ApolloLink.empty();
              }
              return links.map(linkUtils_1.toLink).reduce(function(x, y) {
                return x.concat(y);
              });
            };
            ApolloLink.empty = function() {
              return new FunctionLink(function(op, forward) {
                return zen_observable_ts_1.default.of();
              });
            };
            ApolloLink.passthrough = function() {
              return new FunctionLink(function(op, forward) {
                return forward ? forward(op) : zen_observable_ts_1.default.of();
              });
            };
            ApolloLink.split = function(test, left, right) {
              if (right === void 0) {
                right = ApolloLink.passthrough();
              }
              var leftLink = linkUtils_1.validateLink(linkUtils_1.toLink(left));
              var rightLink = linkUtils_1.validateLink(linkUtils_1.toLink(right));
              if (
                linkUtils_1.isTerminating(leftLink) &&
                linkUtils_1.isTerminating(rightLink)
              ) {
                return new FunctionLink(function(operation) {
                  return test(operation)
                    ? leftLink.request(operation) || zen_observable_ts_1.default.of()
                    : rightLink.request(operation) || zen_observable_ts_1.default.of();
                });
              } else {
                return new FunctionLink(function(operation, forward) {
                  return test(operation)
                    ? leftLink.request(operation, forward) ||
                        zen_observable_ts_1.default.of()
                    : rightLink.request(operation, forward) ||
                        zen_observable_ts_1.default.of();
                });
              }
            };
            ApolloLink.prototype.split = function(test, left, right) {
              if (right === void 0) {
                right = ApolloLink.passthrough();
              }
              return this.concat(ApolloLink.split(test, left, right));
            };
            ApolloLink.prototype.concat = function(next) {
              var _this = this;
              linkUtils_1.validateLink(this);
              if (linkUtils_1.isTerminating(this)) {
                console.warn(
                  new linkUtils_1.LinkError(
                    'You are calling concat on a terminating link, which will have no effect',
                    this
                  )
                );
                return this;
              }
              var nextLink = linkUtils_1.validateLink(linkUtils_1.toLink(next));
              if (linkUtils_1.isTerminating(nextLink)) {
                return new FunctionLink(function(operation) {
                  return (
                    _this.request(operation, function(op) {
                      return nextLink.request(op) || zen_observable_ts_1.default.of();
                    }) || zen_observable_ts_1.default.of()
                  );
                });
              } else {
                return new FunctionLink(function(operation, forward) {
                  return (
                    _this.request(operation, function(op) {
                      return (
                        nextLink.request(op, forward) || zen_observable_ts_1.default.of()
                      );
                    }) || zen_observable_ts_1.default.of()
                  );
                });
              }
            };
            return ApolloLink;
          })();
          exports.ApolloLink = ApolloLink;
          function execute(link, operation) {
            var copy = __assign({}, operation);
            linkUtils_1.validateOperation(copy);
            if (!copy.context) {
              copy.context = {};
            }
            if (!copy.variables) {
              copy.variables = {};
            }
            if (!copy.query) {
              console.warn('query should either be a string or GraphQL AST');
              copy.query = {};
            }
            return (
              link.request(transformOperation(copy)) || zen_observable_ts_1.default.of()
            );
          }
          exports.execute = execute;
          function getName(node) {
            return node && node.name && node.name.kind === 'Name' && node.name.value;
          }
          function transformOperation(operation) {
            var transformedOperation;
            if (typeof operation.query === 'string') {
              transformedOperation = __assign({}, operation, {
                query: graphql_tag_1.default(operation.query),
              });
            } else {
              transformedOperation = __assign({}, operation);
            }
            if (transformedOperation.query && transformedOperation.query.definitions) {
              if (!transformedOperation.operationName) {
                var operationTypes_1 = ['query', 'mutation', 'subscription'];
                var definitions = transformedOperation.query.definitions.filter(function(
                  x
                ) {
                  return (
                    x.kind === 'OperationDefinition' &&
                    operationTypes_1.indexOf(x.operation) >= 0
                  );
                });
                transformedOperation.operationName = getName(definitions[0]) || '';
              }
            } else if (!transformedOperation.operationName) {
              transformedOperation.operationName = '';
            }
            return transformedOperation;
          }
          var FunctionLink = (function(_super) {
            __extends(FunctionLink, _super);
            function FunctionLink(f) {
              var _this = _super.call(this) || this;
              _this.f = f;
              _this.request = f;
              return _this;
            }
            FunctionLink.prototype.request = function(operation, forward) {
              throw Error('should be overridden');
            };
            return FunctionLink;
          })(ApolloLink);
          exports.FunctionLink = FunctionLink;
          //# sourceMappingURL=link.js.map

          /***/
        },

      /***/ '../node_modules/apollo-link-core/lib/linkUtils.js':
        /*!*********************************************************!*\
  !*** ../node_modules/apollo-link-core/lib/linkUtils.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var __extends =
            (this && this.__extends) ||
            (function() {
              var extendStatics =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype =
                  b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
              };
            })();
          Object.defineProperty(exports, '__esModule', {value: true});
          var link_1 = __webpack_require__(
            /*! ./link */ '../node_modules/apollo-link-core/lib/link.js'
          );
          function validateLink(link) {
            if (link instanceof link_1.ApolloLink && typeof link.request === 'function') {
              return link;
            } else {
              throw new LinkError(
                'Link does not extend ApolloLink and implement request',
                link
              );
            }
          }
          exports.validateLink = validateLink;
          function validateOperation(operation) {
            var OPERATION_FIELDS = ['query', 'operationName', 'variables', 'context'];
            for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
              var key = _a[_i];
              if (OPERATION_FIELDS.indexOf(key) < 0) {
                throw new Error('illegal argument: ' + key);
              }
            }
            return operation;
          }
          exports.validateOperation = validateOperation;
          var LinkError = (function(_super) {
            __extends(LinkError, _super);
            function LinkError(message, link) {
              var _this = _super.call(this, message) || this;
              _this.link = link;
              return _this;
            }
            return LinkError;
          })(Error);
          exports.LinkError = LinkError;
          function toLink(link) {
            if (typeof link === 'function') {
              return new link_1.FunctionLink(link);
            } else {
              return link;
            }
          }
          exports.toLink = toLink;
          function isTerminating(link) {
            return link.request.length <= 1;
          }
          exports.isTerminating = isTerminating;
          function makePromise(observable) {
            var completed = false;
            return new Promise(function(resolve, reject) {
              observable.subscribe({
                next: function(data) {
                  if (completed) {
                    console.warn(
                      'Promise Wrapper does not support multiple results from Observable'
                    );
                  } else {
                    completed = true;
                    resolve(data);
                  }
                },
                error: reject,
              });
            });
          }
          exports.makePromise = makePromise;
          //# sourceMappingURL=linkUtils.js.map

          /***/
        },

      /***/ '../node_modules/apollo-link-core/node_modules/zen-observable-ts/lib/zenObservable.js':
        /*!********************************************************************************************!*\
  !*** ../node_modules/apollo-link-core/node_modules/zen-observable-ts/lib/zenObservable.js ***!
  \********************************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {value: true});
          function cleanupSubscription(subscription) {
            var cleanup = subscription._cleanup;
            if (!cleanup) {
              return;
            }
            subscription._cleanup = undefined;
            cleanup();
          }
          function subscriptionClosed(subscription) {
            return subscription._observer === undefined;
          }
          function closeSubscription(subscription) {
            if (subscriptionClosed(subscription)) {
              return;
            }
            subscription._observer = undefined;
            cleanupSubscription(subscription);
          }
          function cleanupFromSubscription(subscription) {
            return function() {
              subscription.unsubscribe();
            };
          }
          var Subscription = (function() {
            function Subscription(observer, subscriber) {
              if (Object(observer) !== observer) {
                throw new TypeError('Observer must be an object');
              }
              this._cleanup = undefined;
              this._observer = observer;
              if (observer.start) {
                observer.start(this);
              }
              if (subscriptionClosed(this)) {
                return;
              }
              var _observer = new SubscriptionObserver(this);
              try {
                var cleanup = subscriber(_observer);
                if (cleanup != null) {
                  if (typeof cleanup.unsubscribe === 'function') {
                    cleanup = cleanupFromSubscription(cleanup);
                  } else if (typeof cleanup !== 'function') {
                    throw new TypeError(cleanup + ' is not a function');
                  }
                  this._cleanup = cleanup;
                }
              } catch (e) {
                if (_observer.error) {
                  _observer.error(e);
                }
                return;
              }
              if (subscriptionClosed(this)) {
                cleanupSubscription(this);
              }
            }
            Object.defineProperty(Subscription.prototype, 'closed', {
              get: function() {
                return subscriptionClosed(this);
              },
              enumerable: true,
              configurable: true,
            });
            Subscription.prototype.unsubscribe = function() {
              closeSubscription(this);
            };
            return Subscription;
          })();
          exports.Subscription = Subscription;
          var SubscriptionObserver = (function() {
            function SubscriptionObserver(subscription) {
              this._subscription = subscription;
            }
            Object.defineProperty(SubscriptionObserver.prototype, 'closed', {
              get: function() {
                return subscriptionClosed(this._subscription);
              },
              enumerable: true,
              configurable: true,
            });
            SubscriptionObserver.prototype.next = function(value) {
              var subscription = this._subscription;
              if (subscriptionClosed(subscription)) {
                return;
              }
              var observer = subscription._observer;
              if (!observer.next) {
                return;
              }
              observer.next(value);
              return;
            };
            SubscriptionObserver.prototype.error = function(value) {
              var subscription = this._subscription;
              if (subscriptionClosed(subscription)) {
                throw value;
              }
              var observer = subscription._observer;
              subscription._observer = undefined;
              try {
                if (!observer.error) {
                  throw value;
                }
                observer.error(value);
              } catch (e) {
                try {
                  cleanupSubscription(subscription);
                } finally {
                  throw e;
                }
              }
              cleanupSubscription(subscription);
            };
            SubscriptionObserver.prototype.complete = function() {
              var subscription = this._subscription;
              if (subscriptionClosed(subscription)) {
                return;
              }
              var observer = subscription._observer;
              subscription._observer = undefined;
              try {
                if (observer.complete) {
                  observer.complete();
                }
              } catch (e) {
                try {
                  cleanupSubscription(subscription);
                } finally {
                  throw e;
                }
              }
              cleanupSubscription(subscription);
            };
            return SubscriptionObserver;
          })();
          exports.SubscriptionObserver = SubscriptionObserver;
          var Observable = (function() {
            function Observable(subscriber) {
              if (typeof subscriber !== 'function') {
                throw new TypeError('Observable initializer must be a function');
              }
              this._subscriber = subscriber;
            }
            Observable.from = function(observable) {
              if (observable.subscribe) {
                return new Observable(function(observer) {
                  return observable.subscribe(observer);
                });
              }
              if (Array.isArray(observable)) {
                return new Observable(function(observer) {
                  for (var i = 0; i < observable.length; ++i) {
                    observer.next(observable[i]);
                    if (observer.closed) {
                      return;
                    }
                  }
                  if (observer.complete) {
                    observer.complete();
                  }
                });
              }
              throw new TypeError(observable + ' is not observable');
            };
            Observable.of = function() {
              var items = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                items[_i] = arguments[_i];
              }
              return new Observable(function(observer) {
                for (var i = 0; i < items.length; ++i) {
                  observer.next(items[i]);
                  if (observer.closed) {
                    return;
                  }
                }
                if (observer.complete) {
                  observer.complete();
                }
              });
            };
            Observable.prototype.subscribe = function(observerOrNext, error, complete) {
              if (typeof observerOrNext === 'function') {
                return new Subscription(
                  {
                    next: observerOrNext,
                    error: error,
                    complete: complete,
                  },
                  this._subscriber
                );
              }
              return new Subscription(observerOrNext, this._subscriber);
            };
            Observable.prototype.forEach = function(fn) {
              var _this = this;
              return new Promise(function(resolve, reject) {
                if (typeof fn !== 'function') {
                  return Promise.reject(new TypeError(fn + ' is not a function'));
                }
                _this.subscribe({
                  start: function(subscription) {
                    this._subscription = subscription;
                  },
                  next: function(value) {
                    var subscription = this._subscription;
                    if (subscription.closed) {
                      return;
                    }
                    try {
                      fn(value);
                      return;
                    } catch (err) {
                      reject(err);
                      subscription.unsubscribe();
                    }
                  },
                  error: reject,
                  complete: resolve,
                });
              });
            };
            Observable.prototype.map = function(fn) {
              var _this = this;
              if (typeof fn !== 'function') {
                throw new TypeError(fn + ' is not a function');
              }
              return new Observable(function(observer) {
                return _this.subscribe({
                  next: function(value) {
                    if (observer.closed) {
                      return;
                    }
                    var _value;
                    try {
                      _value = fn(value);
                    } catch (e) {
                      observer.error(e);
                      return;
                    }
                    observer.next(_value);
                  },
                  error: function(e) {
                    observer.error(e);
                  },
                  complete: function() {
                    observer.complete();
                  },
                });
              });
            };
            Observable.prototype.filter = function(fn) {
              var _this = this;
              if (typeof fn !== 'function') {
                throw new TypeError(fn + ' is not a function');
              }
              return new Observable(function(observer) {
                _this.subscribe({
                  next: function(value) {
                    if (observer.closed) {
                      return;
                    }
                    try {
                      if (!fn(value)) {
                        return;
                      }
                    } catch (e) {
                      if (observer.error) {
                        observer.error(e);
                      }
                      return;
                    }
                    observer.next(value);
                  },
                  error: function(e) {
                    observer.error(e);
                  },
                  complete: function() {
                    observer.complete();
                  },
                });
              });
            };
            Observable.prototype.reduce = function(fn, initialValue) {
              var _this = this;
              if (typeof fn !== 'function') {
                throw new TypeError(fn + ' is not a function');
              }
              var hasSeed = arguments.length > 1;
              var hasValue = false;
              var seed = arguments[1];
              var acc = seed;
              return new Observable(function(observer) {
                _this.subscribe({
                  next: function(value) {
                    if (observer.closed) {
                      return;
                    }
                    var first = !hasValue;
                    hasValue = true;
                    if (!first || hasSeed) {
                      try {
                        acc = fn(acc, value);
                      } catch (e) {
                        observer.error(e);
                        return;
                      }
                    } else {
                      acc = value;
                    }
                  },
                  error: function(e) {
                    observer.error(e);
                  },
                  complete: function() {
                    if (!hasValue && !hasSeed) {
                      observer.error(new TypeError('Cannot reduce an empty sequence'));
                      return;
                    }
                    observer.next(acc);
                    observer.complete();
                  },
                });
              });
            };
            Observable.prototype.flatMap = function(fn) {
              var _this = this;
              if (typeof fn !== 'function') {
                throw new TypeError(fn + ' is not a function');
              }
              return new Observable(function(observer) {
                var completed = false;
                var subscriptions = [];
                var outer = _this.subscribe({
                  next: function(value) {
                    var _value;
                    if (fn) {
                      try {
                        _value = fn(value);
                      } catch (x) {
                        observer.error(x);
                        return;
                      }
                    }
                    Observable.from(_value).subscribe({
                      start: function(s) {
                        subscriptions.push((this._subscription = s));
                      },
                      next: function(data) {
                        observer.next(data);
                      },
                      error: function(e) {
                        observer.error(e);
                      },
                      complete: function() {
                        var i = subscriptions.indexOf(this._subscription);
                        if (i >= 0) {
                          subscriptions.splice(i, 1);
                        }
                        closeIfDone();
                      },
                    });
                  },
                  error: function(e) {
                    observer.error(e);
                  },
                  complete: function() {
                    completed = true;
                    closeIfDone();
                  },
                });
                function closeIfDone() {
                  if (completed && subscriptions.length === 0) {
                    observer.complete();
                  }
                }
                return function() {
                  subscriptions.forEach(function(s) {
                    return s.unsubscribe();
                  });
                  outer.unsubscribe();
                };
              });
            };
            return Observable;
          })();
          exports.default = Observable;
          //# sourceMappingURL=zenObservable.js.map

          /***/
        },

      /***/ '../node_modules/css-loader/index.js?!./css/dark.css':
        /*!***********************************************************!*\
  !*** ../node_modules/css-loader??ref--6-1!./css/dark.css ***!
  \***********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          exports = module.exports = __webpack_require__(
            /*! ../../node_modules/css-loader/lib/css-base.js */ '../node_modules/css-loader/lib/css-base.js'
          )(true);
          // imports

          // module
          exports.push([
            module.i,
            "/* .heading{\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.striped-table{\r\n    width: 100%;\r\n    border-collapse: separate;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.striped-table th{\r\n    width: auto;\r\n    text-align: left;\r\n    height: 30px;\r\n    white-space: nowrap;\r\n    font-weight: bold;\r\n    background-color: #3C3834 !important;\r\n    color: white;\r\n    padding-left: 10px;\r\n}\r\n\r\n.striped-table tr{\r\n    height: 40px;\r\n}\r\n\r\n.striped-table tbody tr td{\r\n    padding-left: 10px;\r\n    border-top: 1px solid #34302D;\r\n}\r\n.striped-table tbody tr:nth-child(odd) {\r\n    background: #F1F1F1;\r\n}\r\n\r\n.striped-table .table-link{\r\n    text-decoration: underline;\r\n    color: #5fa134;\r\n}\r\n\r\n.striped-table .table-link:hover{\r\n    text-decoration: none !important;\r\n}\r\n\r\n.customButton{\r\n    background-color: #34302D !important;\r\n    border: 1px solid #5fa134 !important;\r\n    color: white;\r\n    border-radius: 0px !important;\r\n}\r\n\r\n.customButton:hover {\r\n    border: 1px solid #34302D !important;\r\n    color: white;\r\n}\r\n\r\n.page-container {\r\n    margin: 0px !important;\r\n    max-width: 100%;\r\n    background-color: white;\r\n    padding: 10px !important;\r\n}\r\n\r\n.main-view {\r\n    padding: 20px;\r\n    background: #EFEFEF;\r\n}\r\n\r\n.page-header{\r\n padding: 0px;\r\n}\r\n\r\n.page-header__inner{\r\n    margin-bottom: 0px;\r\n}\r\n.page-header__logo {\r\n    margin: 0px;\r\n    height: 30px;\r\n}\r\n */\r\n.plugin-bg-white {\r\n  background: white;\r\n  min-height: 96vh;\r\n}\r\n.plr {\r\n  padding: 10px 13px;\r\n}\r\n.tooltip {\r\n  position: relative;\r\n  display: inline-block;\r\n  border-bottom: 1px dotted black;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n\r\n  /* // Position the tooltip / */\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n\r\n.hasTooltip a {\r\n  display: none;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  padding: 3px;\r\n}\r\n\r\n.hasTooltip:hover a {\r\n  display: block;\r\n  position: absolute;\r\n  background-color: #83daab;\r\n  border: 1px solid #83daab;\r\n  margin: 2px -14px;\r\n}\r\n.j-between {\r\n  display: flex;\r\n  justify-content: space-between !important;\r\n}\r\n.chooseDate > .react-datepicker-wrapper {\r\n  width: 100%;\r\n}\r\n.chooseDateN > .react-datepicker-wrapper {\r\n  width: 190px !important;\r\n  border: 1px solid #dde4ed !important;\r\n}\r\n.chooseDateN {\r\n  width: 190px !important;\r\n}\r\n\r\n.btn-danger-bg {\r\n  background: #f57846 !important;\r\n  color: #fff;\r\n}\r\n.tooltip-red {\r\n  background: #fabba2 !important;\r\n  margin: 0px -10px !important;\r\n  border: 1px solid #fabba2 !important;\r\n}\r\n.dgrid-6 {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto auto auto auto;\r\n  grid-gap: 10px;\r\n}\r\n\r\n.hflex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.hhflex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-right: 5px;\r\n}\r\n.h-center {\r\n  border: 1px solid #dde4ed;\r\n  background: white;\r\n  padding: 5px;\r\n}\r\ntable#matable td:first-child {\r\n  width: 15%;\r\n}\r\ntable#matable td:nth-child(2) {\r\n  width: 30%;\r\n}\r\ntable#matable td:nth-child(3) {\r\n  width: 10%;\r\n}\r\ntable#matable td:last-child {\r\n  width: 55%;\r\n}\r\n\r\n.markWidth select {\r\n  width: 190px !important;\r\n}\r\n.mx-2 {\r\n  margin-left: 5px !important;\r\n  margin-right: 5px !important;\r\n}\r\n.ma-select {\r\n  background-color: #b4b2b2;\r\n  border-radius: 5px;\r\n  color: white;\r\n}\r\n.ma-select::placeholder {\r\n  color: white;\r\n  opacity: 1;\r\n}\r\n\r\n/* REact Mark attendance toggle button */\r\n.react-toggle {\r\n  touch-action: pan-x;\r\n\r\n  display: inline-block;\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  border: 0;\r\n  padding: 0;\r\n\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.react-toggle-screenreader-only {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n}\r\n\r\n.react-toggle--disabled {\r\n  cursor: not-allowed;\r\n  opacity: 0.5;\r\n  -webkit-transition: opacity 0.25s;\r\n  transition: opacity 0.25s;\r\n}\r\n\r\n.react-toggle-track {\r\n  width: 50px;\r\n  height: 24px;\r\n  padding: 0;\r\n  border-radius: 30px;\r\n  background-color: #4d4d4d;\r\n  -webkit-transition: all 0.2s ease;\r\n  -moz-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {\r\n  background-color: #000000;\r\n}\r\n\r\n.react-toggle--checked .react-toggle-track {\r\n  background-color: #19ab27;\r\n}\r\n\r\n.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {\r\n  background-color: #128d15;\r\n}\r\n\r\n.react-toggle-track-check {\r\n  position: absolute;\r\n  width: 14px;\r\n  height: 10px;\r\n  top: 0px;\r\n  bottom: 0px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  line-height: 0;\r\n  left: 8px;\r\n  opacity: 0;\r\n  -webkit-transition: opacity 0.25s ease;\r\n  -moz-transition: opacity 0.25s ease;\r\n  transition: opacity 0.25s ease;\r\n}\r\n\r\n.react-toggle--checked .react-toggle-track-check {\r\n  opacity: 1;\r\n  -webkit-transition: opacity 0.25s ease;\r\n  -moz-transition: opacity 0.25s ease;\r\n  transition: opacity 0.25s ease;\r\n}\r\n\r\n.react-toggle-track-x {\r\n  position: absolute;\r\n  width: 10px;\r\n  height: 10px;\r\n  top: 0px;\r\n  bottom: 0px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  line-height: 0;\r\n  right: 10px;\r\n  opacity: 1;\r\n  -webkit-transition: opacity 0.25s ease;\r\n  -moz-transition: opacity 0.25s ease;\r\n  transition: opacity 0.25s ease;\r\n}\r\n\r\n.react-toggle--checked .react-toggle-track-x {\r\n  opacity: 0;\r\n}\r\n\r\n.react-toggle-thumb {\r\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\r\n  position: absolute;\r\n  top: 1px;\r\n  left: 1px;\r\n  width: 22px;\r\n  height: 22px;\r\n  border: 1px solid #4d4d4d;\r\n  border-radius: 50%;\r\n  background-color: #fafafa;\r\n\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n\r\n  -webkit-transition: all 0.25s ease;\r\n  -moz-transition: all 0.25s ease;\r\n  transition: all 0.25s ease;\r\n}\r\n\r\n.react-toggle--checked .react-toggle-thumb {\r\n  left: 27px;\r\n  border-color: #19ab27;\r\n}\r\n\r\n.react-toggle--focus .react-toggle-thumb {\r\n  -webkit-box-shadow: 0px 0px 3px 2px #0099e0;\r\n  -moz-box-shadow: 0px 0px 3px 2px #0099e0;\r\n  box-shadow: 0px 0px 2px 3px #0099e0;\r\n}\r\n\r\n.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {\r\n  -webkit-box-shadow: 0px 0px 5px 5px #0099e0;\r\n  -moz-box-shadow: 0px 0px 5px 5px #0099e0;\r\n  box-shadow: 0px 0px 5px 5px #0099e0;\r\n}\r\n/* REact Mark attendance toggle button */\r\n\r\n.ul-attend {\r\n  list-style: none;\r\n  display: inline-flex;\r\n}\r\n.pt-2 {\r\n  padding-top: 2rem;\r\n}\r\n.w-btn {\r\n  width: 3rem !important;\r\n  border-radius: 0px;\r\n}\r\n.mr-1 {\r\n  margin-right: 1rem;\r\n}\r\n.mr-18 {\r\n  margin-right: 18px;\r\n}\r\n.ml-18 {\r\n  margin-left: 18px;\r\n}\r\nul.ul-attend > li {\r\n  border-right: 1px solid gray;\r\n}\r\nul.ul-attend > li:last-child {\r\n  border-right: 0px solid gray;\r\n}\r\n.blr {\r\n  border-top-left-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.btr {\r\n  border-top-right-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n}\r\n.b-0 {\r\n  border: none;\r\n}\r\n.bt-radius {\r\n  border-radius: 4px;\r\n}\r\n.btn-width {\r\n  width: 10.5rem;\r\n}\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: 18% 82%;\r\n  grid-gap: 5px;\r\n  padding: 18px;\r\n}\r\n.leftbar {\r\n  padding: 5px;\r\n}\r\n.leftbar > img {\r\n  margin-left: 6px;\r\n}\r\n.rightbar {\r\n  border: 1px solid #cecece;\r\n}\r\n.border-plugin {\r\n  border: 1px solid #cecece;\r\n  border-radius: 5px;\r\n  padding: 4px;\r\n}\r\n.form-grid {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  grid-gap: 15px;\r\n  margin: 2rem;\r\n}\r\n.input-width {\r\n  width: 120px;\r\n  height: 20px;\r\n  margin-top: 10px;\r\n}\r\n.form-justify {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.b-1 {\r\n  border: 1px solid #cecece;\r\n}\r\n\r\n.reln {\r\n  padding-left: 2rem;\r\n  padding-top: 1rem;\r\n}\r\n.reln > select {\r\n  border-radius: 5px;\r\n  width: 300px !important;\r\n}\r\n.rel-radio {\r\n  display: grid;\r\n  border-radius: 5px;\r\n  border: 1px solid #cecece;\r\n  height: 30px;\r\n  grid-template-columns: auto auto;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 18px;\r\n  background-color: #efefef;\r\n}\r\n.main-grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr;\r\n  grid-gap: 20px;\r\n}\r\n.heading-flex {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.heading-flex > h3 {\r\n  color: #447aae !important;\r\n}\r\n.heading-flex > .hflex-h5 {\r\n  margin: 0 3rem;\r\n  border-left: 1px solid #cecece;\r\n  border-right: 1px solid #cecece;\r\n  padding-left: 2rem;\r\n  padding-right: 2rem;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n/* .hflex-h5::before {\r\n  content: '';\r\n  display: block;\r\n  width: 2px;\r\n  height: 6px;\r\n  background-color: #cecece;\r\n  position: absolute;\r\n}\r\n.hflex-h5::after {\r\n  content: '';\r\n  display: block;\r\n  width: 2px;\r\n  height: 6px;\r\n  background-color: #cecece;\r\n  position: absolute;\r\n} */\r\n.next-div {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n.next-div span {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  color: rgb(78, 144, 203) !important;\r\n}\r\n.next-div span span {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  color: black !important;\r\n}\r\n.family-details {\r\n  margin-top: 2rem;\r\n}\r\n.family-details,\r\n.contact-details,\r\n.id-details {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n.family-details > h5 {\r\n  color: rgb(78, 144, 203) !important;\r\n}\r\nh5 {\r\n  color: rgb(78, 144, 203) !important;\r\n}\r\n.contact-details > h5 {\r\n  color: rgb(78, 144, 203) !important;\r\n}\r\n.id-details > h5 {\r\n  color: rgb(78, 144, 203) !important;\r\n}\r\n.contact-details {\r\n  border-top: 1px solid #cecece;\r\n  border-bottom: 1px solid #cecece;\r\n  padding-top: 2rem;\r\n  padding-bottom: 2rem;\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n}\r\n.buttons {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 1.5rem;\r\n}\r\n.buttons a {\r\n  border-radius: 10px;\r\n}\r\n/* .buttons {\r\n  background-color: rgba(0, 153, 224, 0.4);\r\n} */\r\n.b-1 {\r\n  border: 1px solid #cecece;\r\n}\r\n.m-2 {\r\n  margin: 2rem;\r\n}\r\n\r\n.btn-disable {\r\n  background-color: rgba(54, 151, 239, 0.4) !important;\r\n  color: #fff;\r\n}\r\n.btn-disable:hover {\r\n  background-color: rgba(54, 151, 239, 0.5) !important;\r\n  color: #fff;\r\n}\r\n.check-square {\r\n  background: green;\r\n  color: white;\r\n  padding: 5px;\r\n}\r\n.check-square-red {\r\n  background: red;\r\n  color: white;\r\n  padding: 5px;\r\n}\r\n#t-attendance {\r\n  width: 100%;\r\n}\r\n#t-attendance select {\r\n  width: 100%;\r\n}\r\ntable#studentlistpage th,\r\ntd {\r\n  text-align: center !important;\r\n}\r\n.family-details > h5 > span {\r\n  color: #111111;\r\n}\r\n.contact-details > h5 > span {\r\n  color: #111111;\r\n}\r\n.id-details > h5 > span {\r\n  color: #111111;\r\n}\r\n\r\n.student-flex select {\r\n  width: 13vw;\r\n  margin-bottom: 25px;\r\n}\r\n.student-flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.student-flex input[type='search'] {\r\n  padding: 7px;\r\n  margin-top: 1.2%;\r\n}\r\n.margin-bott {\r\n  margin-bottom: 25px;\r\n}\r\n.bg-heading {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n.bg-heading h2 {\r\n  flex-grow: 1;\r\n}\r\n.bg-heading button:first-child {\r\n  width: 180px;\r\n  margin-right: 15px;\r\n}\r\n\r\n/* Fee Setup */\r\n.inDashboard {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.b-1 {\r\n  border: 1px solid darkgray;\r\n  border-radius: 5px;\r\n}\r\n.invoiceDashboard {\r\n  border: 1px solid gray;\r\n  border-radius: 5px;\r\n  width: 18rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n.invoiceDashboard h2 {\r\n  padding: 1rem;\r\n}\r\n.invoiceHeader {\r\n  background: #1870c2;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  text-align: left;\r\n  padding: 5px 5px;\r\n  width: 100%;\r\n}\r\n.invoiceHeader h6 {\r\n  flex-grow: 1;\r\n  color: white;\r\n}\r\n.belowDashboard {\r\n  display: grid;\r\n  padding: 8px 0;\r\n  grid-gap: 11rem;\r\n  grid-template-columns: auto auto;\r\n}\r\n.h5-fee-bg {\r\n  background-color: #d6d6d8;\r\n  color: #8b8b8b;\r\n}\r\n\r\n.white {\r\n  color: white !important;\r\n}\r\n.searchInvoice,\r\n.searchInvoiceButton {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n.invoiceDetails {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 5px 10px;\r\n}\r\n.w50 {\r\n  width: 55%;\r\n}\r\n.p05 {\r\n  padding: 5px;\r\n}\r\n.hr-top {\r\n  border-top: 1px solid #9acbf7;\r\n}\r\n.fee-blue {\r\n  color: #3697ef;\r\n}\r\n.fee-green {\r\n  color: #7adaa7;\r\n}\r\n.fee-orange {\r\n  color: #f68253;\r\n}\r\n.fee-red {\r\n  color: #e55a5a;\r\n}\r\n.remainder {\r\n  background: #1870c2;\r\n}\r\n\r\n.feeCategory form {\r\n  display: grid;\r\n  grid-gap: 10px 40px;\r\n  grid-template-columns: 1fr;\r\n  margin: 1rem;\r\n}\r\n.feeAppHead {\r\n  grid-column: 1/3;\r\n  grid-row: 3;\r\n}\r\n.feeSelect {\r\n  grid-column: 1/3;\r\n  grid-row: 4;\r\n}\r\n.feeSelect {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.feeSelect select {\r\n  width: 150px;\r\n  margin-right: 1.2rem;\r\n}\r\n.feeSelect input {\r\n  padding: 8px 0px;\r\n  margin-right: 0.5rem;\r\n}\r\n.f-12 {\r\n  width: 12%;\r\n}\r\n.f-25 {\r\n  width: 25%;\r\n}\r\n.f-20 {\r\n  width: 20%;\r\n}\r\n.m-1 {\r\n  margin: 10px;\r\n}\r\n.dfinline {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.mtf-8 {\r\n  margin-top: 8px;\r\n}\r\n.dark-gray {\r\n  color: #4d4d4d !important;\r\n}\r\n.px-1 {\r\n  padding: 0 10px;\r\n}\r\n.feeApplicable {\r\n  display: flex;\r\n}\r\n.mt-20 {\r\n  margin-top: 20px;\r\n}\r\n.mlb {\r\n  margin-left: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(1fr, 4);\r\n  grid-template-rows: 3;\r\n}\r\n.border {\r\n  border: 1px solid #8b8b8b;\r\n}\r\n.ReminderColumn _ {\r\n  grid-column: 1/5;\r\n}\r\n.FirstColumn,\r\n.SecondColumn,\r\n.ThirdColumn {\r\n  grid-column: 1/3;\r\n}\r\n.border.FirstRow {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n.border.SecondRow {\r\n}\r\n.border.ThirdRow {\r\n}\r\n.Srow {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n}\r\n\r\n.feeFlex {\r\n  display: flex;\r\n  justify-content: flexStart;\r\n}\r\n.feeFlex > .input[checkbox] {\r\n  margin-right: 0.8rem;\r\n}\r\n.feeFlex > .input[radio] {\r\n  margin-right: 0.8rem;\r\n}\r\n.feeMx {\r\n  margin-right: 1rem;\r\n  margin-left: 1rem;\r\n}\r\n.feeMr {\r\n  margin-right: 1rem;\r\n}\r\n.feeMy {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n.feeFlexEnd {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.center {\r\n  text-align: center !important;\r\n}\r\n\r\ntable.adminListPage {\r\n  border-spacing: 8px 0px;\r\n  border-collapse: separate !important;\r\n}\r\ntable.adminListPage th,\r\ntd {\r\n  text-align: left !important;\r\n}\r\ntable.adminListPage th {\r\n  border: 0px solid white !important;\r\n  padding: 3px !important;\r\n}\r\ntable.adminListPage td:last-child {\r\n  border: none;\r\n  float: right;\r\n}\r\ntable.adminListPage td {\r\n  border: 1px solid inherit;\r\n  padding: 5px !important;\r\n  border-radius: 5px;\r\n}\r\n.justify-Content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\ntable.adminListPage td:first-child {\r\n  width: 3rem;\r\n  margin-right: 2rem;\r\n}\r\n\r\n/* Fee Setup */\r\n",
            '',
            {
              version: 3,
              sources: ['C:/MyCode/plugins/cms-ui-admission-plugin/src/css/dark.css'],
              names: [],
              mappings:
                'AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA8EG;AACH;EACE,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,gCAAgC;CACjC;;AAED;EACE,mBAAmB;EACnB,aAAa;EACb,wBAAwB;EACxB,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;;EAEf,+BAA+B;EAC/B,mBAAmB;EACnB,WAAW;CACZ;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,cAAc;EACd,YAAY;EACZ,sBAAsB;EACtB,aAAa;CACd;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,0BAA0B;EAC1B,0BAA0B;EAC1B,kBAAkB;CACnB;AACD;EACE,cAAc;EACd,0CAA0C;CAC3C;AACD;EACE,YAAY;CACb;AACD;EACE,wBAAwB;EACxB,qCAAqC;CACtC;AACD;EACE,wBAAwB;CACzB;;AAED;EACE,+BAA+B;EAC/B,YAAY;CACb;AACD;EACE,+BAA+B;EAC/B,6BAA6B;EAC7B,qCAAqC;CACtC;AACD;EACE,cAAc;EACd,qDAAqD;EACrD,eAAe;CAChB;;AAED;EACE,cAAc;EACd,+BAA+B;EAC/B,oBAAoB;CACrB;;AAED;EACE,cAAc;EACd,+BAA+B;EAC/B,mBAAmB;CACpB;AACD;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,aAAa;CACd;AACD;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;;AAED;EACE,wBAAwB;CACzB;AACD;EACE,4BAA4B;EAC5B,6BAA6B;CAC9B;AACD;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,aAAa;CACd;AACD;EACE,aAAa;EACb,WAAW;CACZ;;AAED,yCAAyC;AACzC;EACE,oBAAoB;;EAEpB,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,8BAA8B;EAC9B,UAAU;EACV,WAAW;;EAEX,4BAA4B;EAC5B,0BAA0B;EAC1B,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;;EAElB,8CAA8C;EAC9C,yCAAyC;CAC1C;;AAED;EACE,UAAU;EACV,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,WAAW;EACX,mBAAmB;EACnB,WAAW;CACZ;;AAED;EACE,oBAAoB;EACpB,aAAa;EACb,kCAAkC;EAClC,0BAA0B;CAC3B;;AAED;EACE,YAAY;EACZ,aAAa;EACb,WAAW;EACX,oBAAoB;EACpB,0BAA0B;EAC1B,kCAAkC;EAClC,+BAA+B;EAC/B,0BAA0B;CAC3B;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;EACf,UAAU;EACV,WAAW;EACX,uCAAuC;EACvC,oCAAoC;EACpC,+BAA+B;CAChC;;AAED;EACE,WAAW;EACX,uCAAuC;EACvC,oCAAoC;EACpC,+BAA+B;CAChC;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,SAAS;EACT,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;EACf,YAAY;EACZ,WAAW;EACX,uCAAuC;EACvC,oCAAoC;EACpC,+BAA+B;CAChC;;AAED;EACE,WAAW;CACZ;;AAED;EACE,wDAAwD;EACxD,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,mBAAmB;EACnB,0BAA0B;;EAE1B,+BAA+B;EAC/B,4BAA4B;EAC5B,uBAAuB;;EAEvB,mCAAmC;EACnC,gCAAgC;EAChC,2BAA2B;CAC5B;;AAED;EACE,WAAW;EACX,sBAAsB;CACvB;;AAED;EACE,4CAA4C;EAC5C,yCAAyC;EACzC,oCAAoC;CACrC;;AAED;EACE,4CAA4C;EAC5C,yCAAyC;EACzC,oCAAoC;CACrC;AACD,yCAAyC;;AAEzC;EACE,iBAAiB;EACjB,qBAAqB;CACtB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,4BAA4B;EAC5B,+BAA+B;CAChC;AACD;EACE,6BAA6B;EAC7B,gCAAgC;CACjC;AACD;EACE,aAAa;CACd;AACD;EACE,mBAAmB;CACpB;AACD;EACE,eAAe;CAChB;AACD;EACE,cAAc;EACd,+BAA+B;EAC/B,cAAc;EACd,cAAc;CACf;AACD;EACE,aAAa;CACd;AACD;EACE,iBAAiB;CAClB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,aAAa;CACd;AACD;EACE,cAAc;EACd,sCAAsC;EACtC,eAAe;EACf,aAAa;CACd;AACD;EACE,aAAa;EACb,aAAa;EACb,iBAAiB;CAClB;AACD;EACE,cAAc;EACd,+BAA+B;CAChC;;AAED;EACE,0BAA0B;CAC3B;;AAED;EACE,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,wBAAwB;CACzB;AACD;EACE,cAAc;EACd,mBAAmB;EACnB,0BAA0B;EAC1B,aAAa;EACb,iCAAiC;EACjC,+BAA+B;EAC/B,oBAAoB;EACpB,iBAAiB;EACjB,0BAA0B;CAC3B;AACD;EACE,cAAc;EACd,+BAA+B;EAC/B,eAAe;CAChB;AACD;EACE,cAAc;EACd,4BAA4B;CAC7B;;AAED;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,+BAA+B;EAC/B,gCAAgC;EAChC,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,qBAAqB;CACtB;;AAED;;;;;;;;;;;;;;;IAeI;AACJ;EACE,cAAc;EACd,sCAAsC;CACvC;AACD;EACE,iBAAiB;EACjB,oBAAoB;EACpB,oCAAoC;CACrC;AACD;EACE,iBAAiB;EACjB,oBAAoB;EACpB,wBAAwB;CACzB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,cAAc;EACd,sCAAsC;CACvC;AACD;EACE,oCAAoC;CACrC;AACD;EACE,oCAAoC;CACrC;AACD;EACE,oCAAoC;CACrC;AACD;EACE,oCAAoC;CACrC;AACD;EACE,8BAA8B;EAC9B,iCAAiC;EACjC,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,cAAc;EACd,+BAA+B;EAC/B,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;;IAEI;AACJ;EACE,0BAA0B;CAC3B;AACD;EACE,aAAa;CACd;;AAED;EACE,qDAAqD;EACrD,YAAY;CACb;AACD;EACE,qDAAqD;EACrD,YAAY;CACb;AACD;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;CACd;AACD;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;CACd;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;;EAEE,8BAA8B;CAC/B;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;;AAED;EACE,YAAY;EACZ,oBAAoB;CACrB;AACD;EACE,cAAc;EACd,+BAA+B;EAC/B,oBAAoB;CACrB;;AAED;EACE,aAAa;EACb,iBAAiB;CAClB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,cAAc;EACd,oBAAoB;EACpB,4BAA4B;CAC7B;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;EACb,mBAAmB;CACpB;;AAED,eAAe;AACf;EACE,cAAc;EACd,+BAA+B;CAChC;AACD;EACE,2BAA2B;EAC3B,mBAAmB;CACpB;AACD;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,oBAAoB;EACpB,4BAA4B;CAC7B;AACD;EACE,cAAc;CACf;AACD;EACE,oBAAoB;EACpB,cAAc;EACd,+BAA+B;EAC/B,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;CACb;AACD;EACE,aAAa;EACb,aAAa;CACd;AACD;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,iCAAiC;CAClC;AACD;EACE,0BAA0B;EAC1B,eAAe;CAChB;;AAED;EACE,wBAAwB;CACzB;AACD;;EAEE,cAAc;EACd,8BAA8B;CAC/B;AACD;EACE,cAAc;EACd,+BAA+B;EAC/B,iBAAiB;CAClB;AACD;EACE,WAAW;CACZ;AACD;EACE,aAAa;CACd;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,oBAAoB;CACrB;;AAED;EACE,cAAc;EACd,oBAAoB;EACpB,2BAA2B;EAC3B,aAAa;CACd;AACD;EACE,iBAAiB;EACjB,YAAY;CACb;AACD;EACE,iBAAiB;EACjB,YAAY;CACb;AACD;EACE,cAAc;EACd,+BAA+B;EAC/B,oBAAoB;CACrB;AACD;EACE,aAAa;EACb,qBAAqB;CACtB;AACD;EACE,iBAAiB;EACjB,qBAAqB;CACtB;AACD;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD;EACE,aAAa;CACd;AACD;EACE,cAAc;EACd,+BAA+B;EAC/B,oBAAoB;CACrB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,gBAAgB;CACjB;AACD;EACE,cAAc;CACf;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,cAAc;EACd,sCAAsC;EACtC,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,cAAc;EACd,4BAA4B;EAC5B,oBAAoB;CACrB;AACD;CACC;AACD;CACC;AACD;EACE,cAAc;EACd,uCAAuC;CACxC;;AAED;EACE,cAAc;EACd,2BAA2B;CAC5B;AACD;EACE,qBAAqB;CACtB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,cAAc;EACd,0BAA0B;CAC3B;AACD;EACE,8BAA8B;CAC/B;;AAED;EACE,wBAAwB;EACxB,qCAAqC;CACtC;AACD;;EAEE,4BAA4B;CAC7B;AACD;EACE,mCAAmC;EACnC,wBAAwB;CACzB;AACD;EACE,aAAa;EACb,aAAa;CACd;AACD;EACE,0BAA0B;EAC1B,wBAAwB;EACxB,mBAAmB;CACpB;AACD;EACE,cAAc;EACd,+BAA+B;CAChC;AACD;EACE,YAAY;EACZ,mBAAmB;CACpB;;AAED,eAAe',
              file: 'dark.css',
              sourcesContent: [
                "/* .heading{\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.striped-table{\r\n    width: 100%;\r\n    border-collapse: separate;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.striped-table th{\r\n    width: auto;\r\n    text-align: left;\r\n    height: 30px;\r\n    white-space: nowrap;\r\n    font-weight: bold;\r\n    background-color: #3C3834 !important;\r\n    color: white;\r\n    padding-left: 10px;\r\n}\r\n\r\n.striped-table tr{\r\n    height: 40px;\r\n}\r\n\r\n.striped-table tbody tr td{\r\n    padding-left: 10px;\r\n    border-top: 1px solid #34302D;\r\n}\r\n.striped-table tbody tr:nth-child(odd) {\r\n    background: #F1F1F1;\r\n}\r\n\r\n.striped-table .table-link{\r\n    text-decoration: underline;\r\n    color: #5fa134;\r\n}\r\n\r\n.striped-table .table-link:hover{\r\n    text-decoration: none !important;\r\n}\r\n\r\n.customButton{\r\n    background-color: #34302D !important;\r\n    border: 1px solid #5fa134 !important;\r\n    color: white;\r\n    border-radius: 0px !important;\r\n}\r\n\r\n.customButton:hover {\r\n    border: 1px solid #34302D !important;\r\n    color: white;\r\n}\r\n\r\n.page-container {\r\n    margin: 0px !important;\r\n    max-width: 100%;\r\n    background-color: white;\r\n    padding: 10px !important;\r\n}\r\n\r\n.main-view {\r\n    padding: 20px;\r\n    background: #EFEFEF;\r\n}\r\n\r\n.page-header{\r\n padding: 0px;\r\n}\r\n\r\n.page-header__inner{\r\n    margin-bottom: 0px;\r\n}\r\n.page-header__logo {\r\n    margin: 0px;\r\n    height: 30px;\r\n}\r\n */\r\n.plugin-bg-white {\r\n  background: white;\r\n  min-height: 96vh;\r\n}\r\n.plr {\r\n  padding: 10px 13px;\r\n}\r\n.tooltip {\r\n  position: relative;\r\n  display: inline-block;\r\n  border-bottom: 1px dotted black;\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n\r\n  /* // Position the tooltip / */\r\n  position: absolute;\r\n  z-index: 1;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n  visibility: visible;\r\n}\r\n\r\n.hasTooltip a {\r\n  display: none;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  padding: 3px;\r\n}\r\n\r\n.hasTooltip:hover a {\r\n  display: block;\r\n  position: absolute;\r\n  background-color: #83daab;\r\n  border: 1px solid #83daab;\r\n  margin: 2px -14px;\r\n}\r\n.j-between {\r\n  display: flex;\r\n  justify-content: space-between !important;\r\n}\r\n.chooseDate > .react-datepicker-wrapper {\r\n  width: 100%;\r\n}\r\n.chooseDateN > .react-datepicker-wrapper {\r\n  width: 190px !important;\r\n  border: 1px solid #dde4ed !important;\r\n}\r\n.chooseDateN {\r\n  width: 190px !important;\r\n}\r\n\r\n.btn-danger-bg {\r\n  background: #f57846 !important;\r\n  color: #fff;\r\n}\r\n.tooltip-red {\r\n  background: #fabba2 !important;\r\n  margin: 0px -10px !important;\r\n  border: 1px solid #fabba2 !important;\r\n}\r\n.dgrid-6 {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto auto auto auto;\r\n  grid-gap: 10px;\r\n}\r\n\r\n.hflex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.hhflex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-right: 5px;\r\n}\r\n.h-center {\r\n  border: 1px solid #dde4ed;\r\n  background: white;\r\n  padding: 5px;\r\n}\r\ntable#matable td:first-child {\r\n  width: 15%;\r\n}\r\ntable#matable td:nth-child(2) {\r\n  width: 30%;\r\n}\r\ntable#matable td:nth-child(3) {\r\n  width: 10%;\r\n}\r\ntable#matable td:last-child {\r\n  width: 55%;\r\n}\r\n\r\n.markWidth select {\r\n  width: 190px !important;\r\n}\r\n.mx-2 {\r\n  margin-left: 5px !important;\r\n  margin-right: 5px !important;\r\n}\r\n.ma-select {\r\n  background-color: #b4b2b2;\r\n  border-radius: 5px;\r\n  color: white;\r\n}\r\n.ma-select::placeholder {\r\n  color: white;\r\n  opacity: 1;\r\n}\r\n\r\n/* REact Mark attendance toggle button */\r\n.react-toggle {\r\n  touch-action: pan-x;\r\n\r\n  display: inline-block;\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  border: 0;\r\n  padding: 0;\r\n\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.react-toggle-screenreader-only {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n}\r\n\r\n.react-toggle--disabled {\r\n  cursor: not-allowed;\r\n  opacity: 0.5;\r\n  -webkit-transition: opacity 0.25s;\r\n  transition: opacity 0.25s;\r\n}\r\n\r\n.react-toggle-track {\r\n  width: 50px;\r\n  height: 24px;\r\n  padding: 0;\r\n  border-radius: 30px;\r\n  background-color: #4d4d4d;\r\n  -webkit-transition: all 0.2s ease;\r\n  -moz-transition: all 0.2s ease;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {\r\n  background-color: #000000;\r\n}\r\n\r\n.react-toggle--checked .react-toggle-track {\r\n  background-color: #19ab27;\r\n}\r\n\r\n.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {\r\n  background-color: #128d15;\r\n}\r\n\r\n.react-toggle-track-check {\r\n  position: absolute;\r\n  width: 14px;\r\n  height: 10px;\r\n  top: 0px;\r\n  bottom: 0px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  line-height: 0;\r\n  left: 8px;\r\n  opacity: 0;\r\n  -webkit-transition: opacity 0.25s ease;\r\n  -moz-transition: opacity 0.25s ease;\r\n  transition: opacity 0.25s ease;\r\n}\r\n\r\n.react-toggle--checked .react-toggle-track-check {\r\n  opacity: 1;\r\n  -webkit-transition: opacity 0.25s ease;\r\n  -moz-transition: opacity 0.25s ease;\r\n  transition: opacity 0.25s ease;\r\n}\r\n\r\n.react-toggle-track-x {\r\n  position: absolute;\r\n  width: 10px;\r\n  height: 10px;\r\n  top: 0px;\r\n  bottom: 0px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  line-height: 0;\r\n  right: 10px;\r\n  opacity: 1;\r\n  -webkit-transition: opacity 0.25s ease;\r\n  -moz-transition: opacity 0.25s ease;\r\n  transition: opacity 0.25s ease;\r\n}\r\n\r\n.react-toggle--checked .react-toggle-track-x {\r\n  opacity: 0;\r\n}\r\n\r\n.react-toggle-thumb {\r\n  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\r\n  position: absolute;\r\n  top: 1px;\r\n  left: 1px;\r\n  width: 22px;\r\n  height: 22px;\r\n  border: 1px solid #4d4d4d;\r\n  border-radius: 50%;\r\n  background-color: #fafafa;\r\n\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n\r\n  -webkit-transition: all 0.25s ease;\r\n  -moz-transition: all 0.25s ease;\r\n  transition: all 0.25s ease;\r\n}\r\n\r\n.react-toggle--checked .react-toggle-thumb {\r\n  left: 27px;\r\n  border-color: #19ab27;\r\n}\r\n\r\n.react-toggle--focus .react-toggle-thumb {\r\n  -webkit-box-shadow: 0px 0px 3px 2px #0099e0;\r\n  -moz-box-shadow: 0px 0px 3px 2px #0099e0;\r\n  box-shadow: 0px 0px 2px 3px #0099e0;\r\n}\r\n\r\n.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {\r\n  -webkit-box-shadow: 0px 0px 5px 5px #0099e0;\r\n  -moz-box-shadow: 0px 0px 5px 5px #0099e0;\r\n  box-shadow: 0px 0px 5px 5px #0099e0;\r\n}\r\n/* REact Mark attendance toggle button */\r\n\r\n.ul-attend {\r\n  list-style: none;\r\n  display: inline-flex;\r\n}\r\n.pt-2 {\r\n  padding-top: 2rem;\r\n}\r\n.w-btn {\r\n  width: 3rem !important;\r\n  border-radius: 0px;\r\n}\r\n.mr-1 {\r\n  margin-right: 1rem;\r\n}\r\n.mr-18 {\r\n  margin-right: 18px;\r\n}\r\n.ml-18 {\r\n  margin-left: 18px;\r\n}\r\nul.ul-attend > li {\r\n  border-right: 1px solid gray;\r\n}\r\nul.ul-attend > li:last-child {\r\n  border-right: 0px solid gray;\r\n}\r\n.blr {\r\n  border-top-left-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n}\r\n.btr {\r\n  border-top-right-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n}\r\n.b-0 {\r\n  border: none;\r\n}\r\n.bt-radius {\r\n  border-radius: 4px;\r\n}\r\n.btn-width {\r\n  width: 10.5rem;\r\n}\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: 18% 82%;\r\n  grid-gap: 5px;\r\n  padding: 18px;\r\n}\r\n.leftbar {\r\n  padding: 5px;\r\n}\r\n.leftbar > img {\r\n  margin-left: 6px;\r\n}\r\n.rightbar {\r\n  border: 1px solid #cecece;\r\n}\r\n.border-plugin {\r\n  border: 1px solid #cecece;\r\n  border-radius: 5px;\r\n  padding: 4px;\r\n}\r\n.form-grid {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  grid-gap: 15px;\r\n  margin: 2rem;\r\n}\r\n.input-width {\r\n  width: 120px;\r\n  height: 20px;\r\n  margin-top: 10px;\r\n}\r\n.form-justify {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.b-1 {\r\n  border: 1px solid #cecece;\r\n}\r\n\r\n.reln {\r\n  padding-left: 2rem;\r\n  padding-top: 1rem;\r\n}\r\n.reln > select {\r\n  border-radius: 5px;\r\n  width: 300px !important;\r\n}\r\n.rel-radio {\r\n  display: grid;\r\n  border-radius: 5px;\r\n  border: 1px solid #cecece;\r\n  height: 30px;\r\n  grid-template-columns: auto auto;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 18px;\r\n  background-color: #efefef;\r\n}\r\n.main-grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 5fr;\r\n  grid-gap: 20px;\r\n}\r\n.heading-flex {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.heading-flex > h3 {\r\n  color: #447aae !important;\r\n}\r\n.heading-flex > .hflex-h5 {\r\n  margin: 0 3rem;\r\n  border-left: 1px solid #cecece;\r\n  border-right: 1px solid #cecece;\r\n  padding-left: 2rem;\r\n  padding-right: 2rem;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n/* .hflex-h5::before {\r\n  content: '';\r\n  display: block;\r\n  width: 2px;\r\n  height: 6px;\r\n  background-color: #cecece;\r\n  position: absolute;\r\n}\r\n.hflex-h5::after {\r\n  content: '';\r\n  display: block;\r\n  width: 2px;\r\n  height: 6px;\r\n  background-color: #cecece;\r\n  position: absolute;\r\n} */\r\n.next-div {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n.next-div span {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  color: rgb(78, 144, 203) !important;\r\n}\r\n.next-div span span {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  color: black !important;\r\n}\r\n.family-details {\r\n  margin-top: 2rem;\r\n}\r\n.family-details,\r\n.contact-details,\r\n.id-details {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n.family-details > h5 {\r\n  color: rgb(78, 144, 203) !important;\r\n}\r\nh5 {\r\n  color: rgb(78, 144, 203) !important;\r\n}\r\n.contact-details > h5 {\r\n  color: rgb(78, 144, 203) !important;\r\n}\r\n.id-details > h5 {\r\n  color: rgb(78, 144, 203) !important;\r\n}\r\n.contact-details {\r\n  border-top: 1px solid #cecece;\r\n  border-bottom: 1px solid #cecece;\r\n  padding-top: 2rem;\r\n  padding-bottom: 2rem;\r\n  margin-top: 2rem;\r\n  margin-bottom: 2rem;\r\n}\r\n.buttons {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 1.5rem;\r\n}\r\n.buttons a {\r\n  border-radius: 10px;\r\n}\r\n/* .buttons {\r\n  background-color: rgba(0, 153, 224, 0.4);\r\n} */\r\n.b-1 {\r\n  border: 1px solid #cecece;\r\n}\r\n.m-2 {\r\n  margin: 2rem;\r\n}\r\n\r\n.btn-disable {\r\n  background-color: rgba(54, 151, 239, 0.4) !important;\r\n  color: #fff;\r\n}\r\n.btn-disable:hover {\r\n  background-color: rgba(54, 151, 239, 0.5) !important;\r\n  color: #fff;\r\n}\r\n.check-square {\r\n  background: green;\r\n  color: white;\r\n  padding: 5px;\r\n}\r\n.check-square-red {\r\n  background: red;\r\n  color: white;\r\n  padding: 5px;\r\n}\r\n#t-attendance {\r\n  width: 100%;\r\n}\r\n#t-attendance select {\r\n  width: 100%;\r\n}\r\ntable#studentlistpage th,\r\ntd {\r\n  text-align: center !important;\r\n}\r\n.family-details > h5 > span {\r\n  color: #111111;\r\n}\r\n.contact-details > h5 > span {\r\n  color: #111111;\r\n}\r\n.id-details > h5 > span {\r\n  color: #111111;\r\n}\r\n\r\n.student-flex select {\r\n  width: 13vw;\r\n  margin-bottom: 25px;\r\n}\r\n.student-flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.student-flex input[type='search'] {\r\n  padding: 7px;\r\n  margin-top: 1.2%;\r\n}\r\n.margin-bott {\r\n  margin-bottom: 25px;\r\n}\r\n.bg-heading {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n.bg-heading h2 {\r\n  flex-grow: 1;\r\n}\r\n.bg-heading button:first-child {\r\n  width: 180px;\r\n  margin-right: 15px;\r\n}\r\n\r\n/* Fee Setup */\r\n.inDashboard {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.b-1 {\r\n  border: 1px solid darkgray;\r\n  border-radius: 5px;\r\n}\r\n.invoiceDashboard {\r\n  border: 1px solid gray;\r\n  border-radius: 5px;\r\n  width: 18rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n.invoiceDashboard h2 {\r\n  padding: 1rem;\r\n}\r\n.invoiceHeader {\r\n  background: #1870c2;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  text-align: left;\r\n  padding: 5px 5px;\r\n  width: 100%;\r\n}\r\n.invoiceHeader h6 {\r\n  flex-grow: 1;\r\n  color: white;\r\n}\r\n.belowDashboard {\r\n  display: grid;\r\n  padding: 8px 0;\r\n  grid-gap: 11rem;\r\n  grid-template-columns: auto auto;\r\n}\r\n.h5-fee-bg {\r\n  background-color: #d6d6d8;\r\n  color: #8b8b8b;\r\n}\r\n\r\n.white {\r\n  color: white !important;\r\n}\r\n.searchInvoice,\r\n.searchInvoiceButton {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n.invoiceDetails {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 5px 10px;\r\n}\r\n.w50 {\r\n  width: 55%;\r\n}\r\n.p05 {\r\n  padding: 5px;\r\n}\r\n.hr-top {\r\n  border-top: 1px solid #9acbf7;\r\n}\r\n.fee-blue {\r\n  color: #3697ef;\r\n}\r\n.fee-green {\r\n  color: #7adaa7;\r\n}\r\n.fee-orange {\r\n  color: #f68253;\r\n}\r\n.fee-red {\r\n  color: #e55a5a;\r\n}\r\n.remainder {\r\n  background: #1870c2;\r\n}\r\n\r\n.feeCategory form {\r\n  display: grid;\r\n  grid-gap: 10px 40px;\r\n  grid-template-columns: 1fr;\r\n  margin: 1rem;\r\n}\r\n.feeAppHead {\r\n  grid-column: 1/3;\r\n  grid-row: 3;\r\n}\r\n.feeSelect {\r\n  grid-column: 1/3;\r\n  grid-row: 4;\r\n}\r\n.feeSelect {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.feeSelect select {\r\n  width: 150px;\r\n  margin-right: 1.2rem;\r\n}\r\n.feeSelect input {\r\n  padding: 8px 0px;\r\n  margin-right: 0.5rem;\r\n}\r\n.f-12 {\r\n  width: 12%;\r\n}\r\n.f-25 {\r\n  width: 25%;\r\n}\r\n.f-20 {\r\n  width: 20%;\r\n}\r\n.m-1 {\r\n  margin: 10px;\r\n}\r\n.dfinline {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.mtf-8 {\r\n  margin-top: 8px;\r\n}\r\n.dark-gray {\r\n  color: #4d4d4d !important;\r\n}\r\n.px-1 {\r\n  padding: 0 10px;\r\n}\r\n.feeApplicable {\r\n  display: flex;\r\n}\r\n.mt-20 {\r\n  margin-top: 20px;\r\n}\r\n.mlb {\r\n  margin-left: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(1fr, 4);\r\n  grid-template-rows: 3;\r\n}\r\n.border {\r\n  border: 1px solid #8b8b8b;\r\n}\r\n.ReminderColumn _ {\r\n  grid-column: 1/5;\r\n}\r\n.FirstColumn,\r\n.SecondColumn,\r\n.ThirdColumn {\r\n  grid-column: 1/3;\r\n}\r\n.border.FirstRow {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n.border.SecondRow {\r\n}\r\n.border.ThirdRow {\r\n}\r\n.Srow {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n}\r\n\r\n.feeFlex {\r\n  display: flex;\r\n  justify-content: flexStart;\r\n}\r\n.feeFlex > .input[checkbox] {\r\n  margin-right: 0.8rem;\r\n}\r\n.feeFlex > .input[radio] {\r\n  margin-right: 0.8rem;\r\n}\r\n.feeMx {\r\n  margin-right: 1rem;\r\n  margin-left: 1rem;\r\n}\r\n.feeMr {\r\n  margin-right: 1rem;\r\n}\r\n.feeMy {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n.feeFlexEnd {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.center {\r\n  text-align: center !important;\r\n}\r\n\r\ntable.adminListPage {\r\n  border-spacing: 8px 0px;\r\n  border-collapse: separate !important;\r\n}\r\ntable.adminListPage th,\r\ntd {\r\n  text-align: left !important;\r\n}\r\ntable.adminListPage th {\r\n  border: 0px solid white !important;\r\n  padding: 3px !important;\r\n}\r\ntable.adminListPage td:last-child {\r\n  border: none;\r\n  float: right;\r\n}\r\ntable.adminListPage td {\r\n  border: 1px solid inherit;\r\n  padding: 5px !important;\r\n  border-radius: 5px;\r\n}\r\n.justify-Content {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\ntable.adminListPage td:first-child {\r\n  width: 3rem;\r\n  margin-right: 2rem;\r\n}\r\n\r\n/* Fee Setup */\r\n",
              ],
              sourceRoot: '',
            },
          ]);

          // exports

          /***/
        },

      /***/ '../node_modules/css-loader/lib/css-base.js':
        /*!**************************************************!*\
  !*** ../node_modules/css-loader/lib/css-base.js ***!
  \**************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
          // css base code, injected by the css-loader
          module.exports = function(useSourceMap) {
            var list = [];

            // return the list of modules as css string
            list.toString = function toString() {
              return this.map(function(item) {
                var content = cssWithMappingToString(item, useSourceMap);
                if (item[2]) {
                  return '@media ' + item[2] + '{' + content + '}';
                } else {
                  return content;
                }
              }).join('');
            };

            // import a list of modules into the list
            list.i = function(modules, mediaQuery) {
              if (typeof modules === 'string') modules = [[null, modules, '']];
              var alreadyImportedModules = {};
              for (var i = 0; i < this.length; i++) {
                var id = this[i][0];
                if (typeof id === 'number') alreadyImportedModules[id] = true;
              }
              for (i = 0; i < modules.length; i++) {
                var item = modules[i];
                // skip already imported module
                // this implementation is not 100% perfect for weird media query combinations
                //  when a module is imported multiple times with different media queries.
                //  I hope this will never occur (Hey this way we have smaller bundles)
                if (typeof item[0] !== 'number' || !alreadyImportedModules[item[0]]) {
                  if (mediaQuery && !item[2]) {
                    item[2] = mediaQuery;
                  } else if (mediaQuery) {
                    item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
                  }
                  list.push(item);
                }
              }
            };
            return list;
          };

          function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || '';
            var cssMapping = item[3];
            if (!cssMapping) {
              return content;
            }

            if (useSourceMap && typeof btoa === 'function') {
              var sourceMapping = toComment(cssMapping);
              var sourceURLs = cssMapping.sources.map(function(source) {
                return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
              });

              return [content]
                .concat(sourceURLs)
                .concat([sourceMapping])
                .join('\n');
            }

            return [content].join('\n');
          }

          // Adapted from convert-source-map (MIT)
          function toComment(sourceMap) {
            // eslint-disable-next-line no-undef
            var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
            var data =
              'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

            return '/*# ' + data + ' */';
          }

          /***/
        },

      /***/ '../node_modules/graphql-anywhere/lib/src/directives.js':
        /*!**************************************************************!*\
  !*** ../node_modules/graphql-anywhere/lib/src/directives.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var storeUtils_1 = __webpack_require__(
            /*! ./storeUtils */ '../node_modules/graphql-anywhere/lib/src/storeUtils.js'
          );
          function getDirectiveInfoFromField(field, variables) {
            if (field.directives && field.directives.length) {
              var directiveObj_1 = {};
              field.directives.forEach(function(directive) {
                directiveObj_1[
                  directive.name.value
                ] = storeUtils_1.argumentsObjectFromField(directive, variables);
              });
              return directiveObj_1;
            }
            return null;
          }
          exports.getDirectiveInfoFromField = getDirectiveInfoFromField;
          function shouldInclude(selection, variables) {
            if (variables === void 0) {
              variables = {};
            }
            if (!selection.directives) {
              return true;
            }
            var res = true;
            selection.directives.some(function(directive) {
              if (directive.name.value !== 'skip' && directive.name.value !== 'include') {
                return;
              }
              var directiveArguments = directive.arguments;
              var directiveName = directive.name.value;
              if (directiveArguments.length !== 1) {
                throw new Error(
                  'Incorrect number of arguments for the @' +
                    directiveName +
                    ' directive.'
                );
              }
              var ifArgument = directive.arguments[0];
              if (!ifArgument.name || ifArgument.name.value !== 'if') {
                throw new Error(
                  'Invalid argument for the @' + directiveName + ' directive.'
                );
              }
              var ifValue = directive.arguments[0].value;
              var evaledValue = false;
              if (!ifValue || ifValue.kind !== 'BooleanValue') {
                if (ifValue.kind !== 'Variable') {
                  throw new Error(
                    'Argument for the @' +
                      directiveName +
                      ' directive must be a variable or a bool ean value.'
                  );
                } else {
                  evaledValue = variables[ifValue.name.value];
                  if (evaledValue === undefined) {
                    throw new Error(
                      'Invalid variable referenced in @' + directiveName + ' directive.'
                    );
                  }
                }
              } else {
                evaledValue = ifValue.value;
              }
              if (directiveName === 'skip') {
                evaledValue = !evaledValue;
              }
              if (!evaledValue) {
                res = false;
                return true;
              }
              return false;
            });
            return res;
          }
          exports.shouldInclude = shouldInclude;
          //# sourceMappingURL=directives.js.map

          /***/
        },

      /***/ '../node_modules/graphql-anywhere/lib/src/getFromAST.js':
        /*!**************************************************************!*\
  !*** ../node_modules/graphql-anywhere/lib/src/getFromAST.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          function checkDocument(doc) {
            if (doc.kind !== 'Document') {
              throw new Error(
                'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
              );
            }
            var numOpDefinitions = doc.definitions.filter(function(definition) {
              return definition.kind === 'OperationDefinition';
            }).length;
            if (numOpDefinitions > 1) {
              throw new Error('Queries must have exactly one operation definition.');
            }
          }
          function getFragmentDefinitions(doc) {
            var fragmentDefinitions = doc.definitions.filter(function(definition) {
              if (definition.kind === 'FragmentDefinition') {
                return true;
              } else {
                return false;
              }
            });
            return fragmentDefinitions;
          }
          exports.getFragmentDefinitions = getFragmentDefinitions;
          function createFragmentMap(fragments) {
            if (fragments === void 0) {
              fragments = [];
            }
            var symTable = {};
            fragments.forEach(function(fragment) {
              symTable[fragment.name.value] = fragment;
            });
            return symTable;
          }
          exports.createFragmentMap = createFragmentMap;
          function getMainDefinition(queryDoc) {
            checkDocument(queryDoc);
            var fragmentDefinition;
            for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
              var definition = _a[_i];
              if (definition.kind === 'OperationDefinition') {
                var operation = definition.operation;
                if (
                  operation === 'query' ||
                  operation === 'mutation' ||
                  operation === 'subscription'
                ) {
                  return definition;
                }
              }
              if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
                fragmentDefinition = definition;
              }
            }
            if (fragmentDefinition) {
              return fragmentDefinition;
            }
            throw new Error(
              'Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.'
            );
          }
          exports.getMainDefinition = getMainDefinition;
          //# sourceMappingURL=getFromAST.js.map

          /***/
        },

      /***/ '../node_modules/graphql-anywhere/lib/src/graphql.js':
        /*!***********************************************************!*\
  !*** ../node_modules/graphql-anywhere/lib/src/graphql.js ***!
  \***********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var getFromAST_1 = __webpack_require__(
            /*! ./getFromAST */ '../node_modules/graphql-anywhere/lib/src/getFromAST.js'
          );
          var directives_1 = __webpack_require__(
            /*! ./directives */ '../node_modules/graphql-anywhere/lib/src/directives.js'
          );
          var storeUtils_1 = __webpack_require__(
            /*! ./storeUtils */ '../node_modules/graphql-anywhere/lib/src/storeUtils.js'
          );
          function graphql(
            resolver,
            document,
            rootValue,
            contextValue,
            variableValues,
            execOptions
          ) {
            if (execOptions === void 0) {
              execOptions = {};
            }
            var mainDefinition = getFromAST_1.getMainDefinition(document);
            var fragments = getFromAST_1.getFragmentDefinitions(document);
            var fragmentMap = getFromAST_1.createFragmentMap(fragments);
            var resultMapper = execOptions.resultMapper;
            var fragmentMatcher =
              execOptions.fragmentMatcher ||
              function() {
                return true;
              };
            var execContext = {
              fragmentMap: fragmentMap,
              contextValue: contextValue,
              variableValues: variableValues,
              resultMapper: resultMapper,
              resolver: resolver,
              fragmentMatcher: fragmentMatcher,
            };
            return executeSelectionSet(
              mainDefinition.selectionSet,
              rootValue,
              execContext
            );
          }
          exports.graphql = graphql;
          function executeSelectionSet(selectionSet, rootValue, execContext) {
            var fragmentMap = execContext.fragmentMap,
              contextValue = execContext.contextValue,
              variables = execContext.variableValues;
            var result = {};
            selectionSet.selections.forEach(function(selection) {
              if (!directives_1.shouldInclude(selection, variables)) {
                return;
              }
              if (storeUtils_1.isField(selection)) {
                var fieldResult = executeField(selection, rootValue, execContext);
                var resultFieldKey = storeUtils_1.resultKeyNameFromField(selection);
                if (fieldResult !== undefined) {
                  if (result[resultFieldKey] === undefined) {
                    result[resultFieldKey] = fieldResult;
                  } else {
                    merge(result[resultFieldKey], fieldResult);
                  }
                }
              } else {
                var fragment = void 0;
                if (storeUtils_1.isInlineFragment(selection)) {
                  fragment = selection;
                } else {
                  fragment = fragmentMap[selection.name.value];
                  if (!fragment) {
                    throw new Error('No fragment named ' + selection.name.value);
                  }
                }
                var typeCondition = fragment.typeCondition.name.value;
                if (execContext.fragmentMatcher(rootValue, typeCondition, contextValue)) {
                  var fragmentResult = executeSelectionSet(
                    fragment.selectionSet,
                    rootValue,
                    execContext
                  );
                  merge(result, fragmentResult);
                }
              }
            });
            if (execContext.resultMapper) {
              return execContext.resultMapper(result, rootValue);
            }
            return result;
          }
          function executeField(field, rootValue, execContext) {
            var variables = execContext.variableValues,
              contextValue = execContext.contextValue,
              resolver = execContext.resolver;
            var fieldName = field.name.value;
            var args = storeUtils_1.argumentsObjectFromField(field, variables);
            var info = {
              isLeaf: !field.selectionSet,
              resultKey: storeUtils_1.resultKeyNameFromField(field),
              directives: directives_1.getDirectiveInfoFromField(field, variables),
            };
            var result = resolver(fieldName, rootValue, args, contextValue, info);
            if (!field.selectionSet) {
              return result;
            }
            if (result == null) {
              return result;
            }
            if (Array.isArray(result)) {
              return executeSubSelectedArray(field, result, execContext);
            }
            return executeSelectionSet(field.selectionSet, result, execContext);
          }
          function executeSubSelectedArray(field, result, execContext) {
            return result.map(function(item) {
              if (item === null) {
                return null;
              }
              if (Array.isArray(item)) {
                return executeSubSelectedArray(field, item, execContext);
              }
              return executeSelectionSet(field.selectionSet, item, execContext);
            });
          }
          function merge(dest, src) {
            if (src === null || typeof src !== 'object') {
              return src;
            }
            Object.keys(dest).forEach(function(destKey) {
              if (src.hasOwnProperty(destKey)) {
                merge(dest[destKey], src[destKey]);
              }
            });
            Object.keys(src).forEach(function(srcKey) {
              if (!dest.hasOwnProperty(srcKey)) {
                dest[srcKey] = src[srcKey];
              }
            });
          }
          //# sourceMappingURL=graphql.js.map

          /***/
        },

      /***/ '../node_modules/graphql-anywhere/lib/src/index.js':
        /*!*********************************************************!*\
  !*** ../node_modules/graphql-anywhere/lib/src/index.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var utilities_1 = __webpack_require__(
            /*! ./utilities */ '../node_modules/graphql-anywhere/lib/src/utilities.js'
          );
          exports.filter = utilities_1.filter;
          exports.check = utilities_1.check;
          exports.propType = utilities_1.propType;
          var graphql_1 = __webpack_require__(
            /*! ./graphql */ '../node_modules/graphql-anywhere/lib/src/graphql.js'
          );
          Object.defineProperty(exports, '__esModule', {value: true});
          exports.default = graphql_1.graphql;
          //# sourceMappingURL=index.js.map

          /***/
        },

      /***/ '../node_modules/graphql-anywhere/lib/src/storeUtils.js':
        /*!**************************************************************!*\
  !*** ../node_modules/graphql-anywhere/lib/src/storeUtils.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var SCALAR_TYPES = {
            StringValue: true,
            BooleanValue: true,
            EnumValue: true,
          };
          function isScalarValue(value) {
            return !!SCALAR_TYPES[value.kind];
          }
          var NUMBER_TYPES = {
            IntValue: true,
            FloatValue: true,
          };
          function isNumberValue(value) {
            return NUMBER_TYPES[value.kind];
          }
          function isVariable(value) {
            return value.kind === 'Variable';
          }
          function isObject(value) {
            return value.kind === 'ObjectValue';
          }
          function isList(value) {
            return value.kind === 'ListValue';
          }
          function valueToObjectRepresentation(argObj, name, value, variables) {
            if (variables === void 0) {
              variables = {};
            }
            if (isNumberValue(value)) {
              argObj[name.value] = Number(value.value);
            } else if (isScalarValue(value)) {
              argObj[name.value] = value.value;
            } else if (isObject(value)) {
              var nestedArgObj_1 = {};
              value.fields.map(function(obj) {
                return valueToObjectRepresentation(
                  nestedArgObj_1,
                  obj.name,
                  obj.value,
                  variables
                );
              });
              argObj[name.value] = nestedArgObj_1;
            } else if (isVariable(value)) {
              var variableValue = variables[value.name.value];
              argObj[name.value] = variableValue;
            } else if (isList(value)) {
              argObj[name.value] = value.values.map(function(listValue) {
                var nestedArgArrayObj = {};
                valueToObjectRepresentation(
                  nestedArgArrayObj,
                  name,
                  listValue,
                  variables
                );
                return nestedArgArrayObj[name.value];
              });
            } else {
              throw new Error(
                'The inline argument "' +
                  name.value +
                  '" of kind "' +
                  value.kind +
                  '" is not supported. Use variables instead of inline arguments to overcome this limitation.'
              );
            }
          }
          function argumentsObjectFromField(field, variables) {
            if (field.arguments && field.arguments.length) {
              var argObj_1 = {};
              field.arguments.forEach(function(_a) {
                var name = _a.name,
                  value = _a.value;
                return valueToObjectRepresentation(argObj_1, name, value, variables);
              });
              return argObj_1;
            }
            return null;
          }
          exports.argumentsObjectFromField = argumentsObjectFromField;
          function resultKeyNameFromField(field) {
            return field.alias ? field.alias.value : field.name.value;
          }
          exports.resultKeyNameFromField = resultKeyNameFromField;
          function isField(selection) {
            return selection.kind === 'Field';
          }
          exports.isField = isField;
          function isInlineFragment(selection) {
            return selection.kind === 'InlineFragment';
          }
          exports.isInlineFragment = isInlineFragment;
          function graphQLResultHasError(result) {
            return result.errors && result.errors.length;
          }
          exports.graphQLResultHasError = graphQLResultHasError;
          //# sourceMappingURL=storeUtils.js.map

          /***/
        },

      /***/ '../node_modules/graphql-anywhere/lib/src/utilities.js':
        /*!*************************************************************!*\
  !*** ../node_modules/graphql-anywhere/lib/src/utilities.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var graphql_1 = __webpack_require__(
            /*! ./graphql */ '../node_modules/graphql-anywhere/lib/src/graphql.js'
          );
          function filter(doc, data) {
            var resolver = function(fieldName, root, args, context, info) {
              return root[info.resultKey];
            };
            return graphql_1.graphql(resolver, doc, data);
          }
          exports.filter = filter;
          function check(doc, data) {
            var resolver = function(fieldName, root, args, context, info) {
              if (!{}.hasOwnProperty.call(root, info.resultKey)) {
                throw new Error(info.resultKey + ' missing on ' + root);
              }
              return root[info.resultKey];
            };
            graphql_1.graphql(
              resolver,
              doc,
              data,
              {},
              {},
              {
                fragmentMatcher: function() {
                  return false;
                },
              }
            );
          }
          exports.check = check;
          var ANONYMOUS = '<<anonymous>>';
          function PropTypeError(message) {
            this.message = message;
            this.stack = '';
          }
          PropTypeError.prototype = Error.prototype;
          var reactPropTypeLocationNames = {
            prop: 'prop',
            context: 'context',
            childContext: 'child context',
          };
          function createChainableTypeChecker(validate) {
            function checkType(
              isRequired,
              props,
              propName,
              componentName,
              location,
              propFullName
            ) {
              componentName = componentName || ANONYMOUS;
              propFullName = propFullName || propName;
              if (props[propName] == null) {
                var locationName = reactPropTypeLocationNames[location];
                if (isRequired) {
                  if (props[propName] === null) {
                    return new PropTypeError(
                      'The ' +
                        locationName +
                        ' `' +
                        propFullName +
                        '` is marked as required ' +
                        ('in `' + componentName + '`, but its value is `null`.')
                    );
                  }
                  return new PropTypeError(
                    'The ' +
                      locationName +
                      ' `' +
                      propFullName +
                      '` is marked as required in ' +
                      ('`' + componentName + '`, but its value is `undefined`.')
                  );
                }
                return null;
              } else {
                return validate(props, propName, componentName, location, propFullName);
              }
            }
            var chainedCheckType = checkType.bind(null, false);
            chainedCheckType.isRequired = checkType.bind(null, true);
            return chainedCheckType;
          }
          function propType(doc) {
            return createChainableTypeChecker(function(props, propName) {
              var prop = props[propName];
              try {
                check(doc, prop);
                return null;
              } catch (e) {
                return e;
              }
            });
          }
          exports.propType = propType;
          //# sourceMappingURL=utilities.js.map

          /***/
        },

      /***/ '../node_modules/graphql-tag/src/index.js':
        /*!************************************************!*\
  !*** ../node_modules/graphql-tag/src/index.js ***!
  \************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var parser = __webpack_require__(
            /*! graphql/language/parser */ '../node_modules/graphql/language/parser.js'
          );

          var parse = parser.parse;

          // Strip insignificant whitespace
          // Note that this could do a lot more, such as reorder fields etc.
          function normalize(string) {
            return string.replace(/[\s,]+/g, ' ').trim();
          }

          // A map docString -> graphql document
          var docCache = {};

          // A map fragmentName -> [normalized source]
          var fragmentSourceMap = {};

          function cacheKeyFromLoc(loc) {
            return normalize(loc.source.body.substring(loc.start, loc.end));
          }

          // For testing.
          function resetCaches() {
            docCache = {};
            fragmentSourceMap = {};
          }

          // Take a unstripped parsed document (query/mutation or even fragment), and
          // check all fragment definitions, checking for name->source uniqueness.
          // We also want to make sure only unique fragments exist in the document.
          var printFragmentWarnings = true;
          function processFragments(ast) {
            var astFragmentMap = {};
            var definitions = [];

            for (var i = 0; i < ast.definitions.length; i++) {
              var fragmentDefinition = ast.definitions[i];

              if (fragmentDefinition.kind === 'FragmentDefinition') {
                var fragmentName = fragmentDefinition.name.value;
                var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);

                // We know something about this fragment
                if (
                  fragmentSourceMap.hasOwnProperty(fragmentName) &&
                  !fragmentSourceMap[fragmentName][sourceKey]
                ) {
                  // this is a problem because the app developer is trying to register another fragment with
                  // the same name as one previously registered. So, we tell them about it.
                  if (printFragmentWarnings) {
                    console.warn(
                      'Warning: fragment with name ' +
                        fragmentName +
                        ' already exists.\n' +
                        'graphql-tag enforces all fragment names across your application to be unique; read more about\n' +
                        'this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names'
                    );
                  }

                  fragmentSourceMap[fragmentName][sourceKey] = true;
                } else if (!fragmentSourceMap.hasOwnProperty(fragmentName)) {
                  fragmentSourceMap[fragmentName] = {};
                  fragmentSourceMap[fragmentName][sourceKey] = true;
                }

                if (!astFragmentMap[sourceKey]) {
                  astFragmentMap[sourceKey] = true;
                  definitions.push(fragmentDefinition);
                }
              } else {
                definitions.push(fragmentDefinition);
              }
            }

            ast.definitions = definitions;
            return ast;
          }

          function disableFragmentWarnings() {
            printFragmentWarnings = false;
          }

          function stripLoc(doc, removeLocAtThisLevel) {
            var docType = Object.prototype.toString.call(doc);

            if (docType === '[object Array]') {
              return doc.map(function(d) {
                return stripLoc(d, removeLocAtThisLevel);
              });
            }

            if (docType !== '[object Object]') {
              throw new Error('Unexpected input.');
            }

            // We don't want to remove the root loc field so we can use it
            // for fragment substitution (see below)
            if (removeLocAtThisLevel && doc.loc) {
              delete doc.loc;
            }

            // https://github.com/apollographql/graphql-tag/issues/40
            if (doc.loc) {
              delete doc.loc.startToken;
              delete doc.loc.endToken;
            }

            var keys = Object.keys(doc);
            var key;
            var value;
            var valueType;

            for (key in keys) {
              if (keys.hasOwnProperty(key)) {
                value = doc[keys[key]];
                valueType = Object.prototype.toString.call(value);

                if (valueType === '[object Object]' || valueType === '[object Array]') {
                  doc[keys[key]] = stripLoc(value, true);
                }
              }
            }

            return doc;
          }

          var experimentalFragmentVariables = false;
          function parseDocument(doc) {
            var cacheKey = normalize(doc);

            if (docCache[cacheKey]) {
              return docCache[cacheKey];
            }

            var parsed = parse(doc, {
              experimentalFragmentVariables: experimentalFragmentVariables,
            });
            if (!parsed || parsed.kind !== 'Document') {
              throw new Error('Not a valid GraphQL document.');
            }

            // check that all "new" fragments inside the documents are consistent with
            // existing fragments of the same name
            parsed = processFragments(parsed);
            parsed = stripLoc(parsed, false);
            docCache[cacheKey] = parsed;

            return parsed;
          }

          function enableExperimentalFragmentVariables() {
            experimentalFragmentVariables = true;
          }

          function disableExperimentalFragmentVariables() {
            experimentalFragmentVariables = false;
          }

          // XXX This should eventually disallow arbitrary string interpolation, like Relay does
          function gql(/* arguments */) {
            var args = Array.prototype.slice.call(arguments);

            var literals = args[0];

            // We always get literals[0] and then matching post literals for each arg given
            var result = typeof literals === 'string' ? literals : literals[0];

            for (var i = 1; i < args.length; i++) {
              if (args[i] && args[i].kind && args[i].kind === 'Document') {
                result += args[i].loc.source.body;
              } else {
                result += args[i];
              }

              result += literals[i];
            }

            return parseDocument(result);
          }

          // Support typescript, which isn't as nice as Babel about default exports
          gql.default = gql;
          gql.resetCaches = resetCaches;
          gql.disableFragmentWarnings = disableFragmentWarnings;
          gql.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
          gql.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;

          module.exports = gql;

          /***/
        },

      /***/ '../node_modules/graphql/error/GraphQLError.js':
        /*!*****************************************************!*\
  !*** ../node_modules/graphql/error/GraphQLError.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.GraphQLError = GraphQLError;

          var _printError = __webpack_require__(
            /*! ./printError */ '../node_modules/graphql/error/printError.js'
          );

          var _location = __webpack_require__(
            /*! ../language/location */ '../node_modules/graphql/language/location.js'
          );

          /**
           * Copyright (c) 2015-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *  strict
           */
          function GraphQLError( // eslint-disable-line no-redeclare
            message,
            nodes,
            source,
            positions,
            path,
            originalError,
            extensions
          ) {
            // Compute list of blame nodes.
            var _nodes = Array.isArray(nodes)
              ? nodes.length !== 0 ? nodes : undefined
              : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.

            var _source = source;

            if (!_source && _nodes) {
              var node = _nodes[0];
              _source = node && node.loc && node.loc.source;
            }

            var _positions = positions;

            if (!_positions && _nodes) {
              _positions = _nodes.reduce(function(list, node) {
                if (node.loc) {
                  list.push(node.loc.start);
                }

                return list;
              }, []);
            }

            if (_positions && _positions.length === 0) {
              _positions = undefined;
            }

            var _locations;

            if (positions && source) {
              _locations = positions.map(function(pos) {
                return (0, _location.getLocation)(source, pos);
              });
            } else if (_nodes) {
              _locations = _nodes.reduce(function(list, node) {
                if (node.loc) {
                  list.push((0, _location.getLocation)(node.loc.source, node.loc.start));
                }

                return list;
              }, []);
            }

            var _extensions = extensions || (originalError && originalError.extensions);

            Object.defineProperties(this, {
              message: {
                value: message,
                // By being enumerable, JSON.stringify will include `message` in the
                // resulting output. This ensures that the simplest possible GraphQL
                // service adheres to the spec.
                enumerable: true,
                writable: true,
              },
              locations: {
                // Coercing falsey values to undefined ensures they will not be included
                // in JSON.stringify() when not provided.
                value: _locations || undefined,
                // By being enumerable, JSON.stringify will include `locations` in the
                // resulting output. This ensures that the simplest possible GraphQL
                // service adheres to the spec.
                enumerable: Boolean(_locations),
              },
              path: {
                // Coercing falsey values to undefined ensures they will not be included
                // in JSON.stringify() when not provided.
                value: path || undefined,
                // By being enumerable, JSON.stringify will include `path` in the
                // resulting output. This ensures that the simplest possible GraphQL
                // service adheres to the spec.
                enumerable: Boolean(path),
              },
              nodes: {
                value: _nodes || undefined,
              },
              source: {
                value: _source || undefined,
              },
              positions: {
                value: _positions || undefined,
              },
              originalError: {
                value: originalError,
              },
              extensions: {
                // Coercing falsey values to undefined ensures they will not be included
                // in JSON.stringify() when not provided.
                value: _extensions || undefined,
                // By being enumerable, JSON.stringify will include `path` in the
                // resulting output. This ensures that the simplest possible GraphQL
                // service adheres to the spec.
                enumerable: Boolean(_extensions),
              },
            }); // Include (non-enumerable) stack trace.

            if (originalError && originalError.stack) {
              Object.defineProperty(this, 'stack', {
                value: originalError.stack,
                writable: true,
                configurable: true,
              });
            } else if (Error.captureStackTrace) {
              Error.captureStackTrace(this, GraphQLError);
            } else {
              Object.defineProperty(this, 'stack', {
                value: Error().stack,
                writable: true,
                configurable: true,
              });
            }
          }

          GraphQLError.prototype = Object.create(Error.prototype, {
            constructor: {
              value: GraphQLError,
            },
            name: {
              value: 'GraphQLError',
            },
            toString: {
              value: function toString() {
                return (0, _printError.printError)(this);
              },
            },
          });

          /***/
        },

      /***/ '../node_modules/graphql/error/formatError.js':
        /*!****************************************************!*\
  !*** ../node_modules/graphql/error/formatError.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.formatError = formatError;

          var _invariant = _interopRequireDefault(
            __webpack_require__(
              /*! ../jsutils/invariant */ '../node_modules/graphql/jsutils/invariant.js'
            )
          );

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
          }

          /**
           * Copyright (c) 2015-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *  strict
           */

          /**
           * Given a GraphQLError, format it according to the rules described by the
           * Response Format, Errors section of the GraphQL Specification.
           */
          function formatError(error) {
            !error
              ? (0, _invariant.default)(0, 'Received null or undefined error.')
              : void 0;
            var message = error.message || 'An unknown error occurred.';
            var locations = error.locations;
            var path = error.path;
            var extensions = error.extensions;
            return extensions
              ? {
                  message: message,
                  locations: locations,
                  path: path,
                  extensions: extensions,
                }
              : {
                  message: message,
                  locations: locations,
                  path: path,
                };
          }

          /***/
        },

      /***/ '../node_modules/graphql/error/index.js':
        /*!**********************************************!*\
  !*** ../node_modules/graphql/error/index.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          Object.defineProperty(exports, 'GraphQLError', {
            enumerable: true,
            get: function get() {
              return _GraphQLError.GraphQLError;
            },
          });
          Object.defineProperty(exports, 'syntaxError', {
            enumerable: true,
            get: function get() {
              return _syntaxError.syntaxError;
            },
          });
          Object.defineProperty(exports, 'locatedError', {
            enumerable: true,
            get: function get() {
              return _locatedError.locatedError;
            },
          });
          Object.defineProperty(exports, 'printError', {
            enumerable: true,
            get: function get() {
              return _printError.printError;
            },
          });
          Object.defineProperty(exports, 'formatError', {
            enumerable: true,
            get: function get() {
              return _formatError.formatError;
            },
          });

          var _GraphQLError = __webpack_require__(
            /*! ./GraphQLError */ '../node_modules/graphql/error/GraphQLError.js'
          );

          var _syntaxError = __webpack_require__(
            /*! ./syntaxError */ '../node_modules/graphql/error/syntaxError.js'
          );

          var _locatedError = __webpack_require__(
            /*! ./locatedError */ '../node_modules/graphql/error/locatedError.js'
          );

          var _printError = __webpack_require__(
            /*! ./printError */ '../node_modules/graphql/error/printError.js'
          );

          var _formatError = __webpack_require__(
            /*! ./formatError */ '../node_modules/graphql/error/formatError.js'
          );

          /***/
        },

      /***/ '../node_modules/graphql/error/locatedError.js':
        /*!*****************************************************!*\
  !*** ../node_modules/graphql/error/locatedError.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.locatedError = locatedError;

          var _GraphQLError = __webpack_require__(
            /*! ./GraphQLError */ '../node_modules/graphql/error/GraphQLError.js'
          );

          /**
           * Copyright (c) 2015-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *  strict
           */

          /**
           * Given an arbitrary Error, presumably thrown while attempting to execute a
           * GraphQL operation, produce a new GraphQLError aware of the location in the
           * document responsible for the original Error.
           */
          function locatedError(originalError, nodes, path) {
            // Note: this uses a brand-check to support GraphQL errors originating from
            // other contexts.
            if (originalError && Array.isArray(originalError.path)) {
              return originalError;
            }

            return new _GraphQLError.GraphQLError(
              originalError && originalError.message,
              (originalError && originalError.nodes) || nodes,
              originalError && originalError.source,
              originalError && originalError.positions,
              path,
              originalError
            );
          }

          /***/
        },

      /***/ '../node_modules/graphql/error/printError.js':
        /*!***************************************************!*\
  !*** ../node_modules/graphql/error/printError.js ***!
  \***************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.printError = printError;

          var _location = __webpack_require__(
            /*! ../language/location */ '../node_modules/graphql/language/location.js'
          );

          /**
           * Copyright (c) 2015-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *  strict
           */

          /**
           * Prints a GraphQLError to a string, representing useful location information
           * about the error's position in the source.
           */
          function printError(error) {
            var printedLocations = [];

            if (error.nodes) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (
                  var _iterator = error.nodes[Symbol.iterator](), _step;
                  !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                  _iteratorNormalCompletion = true
                ) {
                  var node = _step.value;

                  if (node.loc) {
                    printedLocations.push(
                      highlightSourceAtLocation(
                        node.loc.source,
                        (0, _location.getLocation)(node.loc.source, node.loc.start)
                      )
                    );
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            } else if (error.source && error.locations) {
              var source = error.source;
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (
                  var _iterator2 = error.locations[Symbol.iterator](), _step2;
                  !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
                  _iteratorNormalCompletion2 = true
                ) {
                  var location = _step2.value;
                  printedLocations.push(highlightSourceAtLocation(source, location));
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }

            return printedLocations.length === 0
              ? error.message
              : [error.message].concat(printedLocations).join('\n\n') + '\n';
          }
          /**
           * Render a helpful description of the location of the error in the GraphQL
           * Source document.
           */

          function highlightSourceAtLocation(source, location) {
            var firstLineColumnOffset = source.locationOffset.column - 1;
            var body = whitespace(firstLineColumnOffset) + source.body;
            var lineIndex = location.line - 1;
            var lineOffset = source.locationOffset.line - 1;
            var lineNum = location.line + lineOffset;
            var columnOffset = location.line === 1 ? firstLineColumnOffset : 0;
            var columnNum = location.column + columnOffset;
            var lines = body.split(/\r\n|[\n\r]/g);
            return (
              ''
                .concat(source.name, ' (')
                .concat(lineNum, ':')
                .concat(columnNum, ')\n') +
              printPrefixedLines([
                // Lines specified like this: ["prefix", "string"],
                [''.concat(lineNum - 1, ': '), lines[lineIndex - 1]],
                [''.concat(lineNum, ': '), lines[lineIndex]],
                ['', whitespace(columnNum - 1) + '^'],
                [''.concat(lineNum + 1, ': '), lines[lineIndex + 1]],
              ])
            );
          }

          function printPrefixedLines(lines) {
            var existingLines = lines.filter(function(_ref) {
              var _ = _ref[0],
                line = _ref[1];
              return line !== undefined;
            });
            var padLen = 0;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (
                var _iterator3 = existingLines[Symbol.iterator](), _step3;
                !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done);
                _iteratorNormalCompletion3 = true
              ) {
                var _ref4 = _step3.value;
                var prefix = _ref4[0];
                padLen = Math.max(padLen, prefix.length);
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            return existingLines
              .map(function(_ref3) {
                var prefix = _ref3[0],
                  line = _ref3[1];
                return lpad(padLen, prefix) + line;
              })
              .join('\n');
          }

          function whitespace(len) {
            return Array(len + 1).join(' ');
          }

          function lpad(len, str) {
            return whitespace(len - str.length) + str;
          }

          /***/
        },

      /***/ '../node_modules/graphql/error/syntaxError.js':
        /*!****************************************************!*\
  !*** ../node_modules/graphql/error/syntaxError.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.syntaxError = syntaxError;

          var _GraphQLError = __webpack_require__(
            /*! ./GraphQLError */ '../node_modules/graphql/error/GraphQLError.js'
          );

          /**
           * Copyright (c) 2015-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *  strict
           */

          /**
           * Produces a GraphQLError representing a syntax error, containing useful
           * descriptive information about the syntax error's position in the source.
           */
          function syntaxError(source, position, description) {
            return new _GraphQLError.GraphQLError(
              'Syntax Error: '.concat(description),
              undefined,
              source,
              [position]
            );
          }

          /***/
        },

      /***/ '../node_modules/graphql/jsutils/defineToStringTag.js':
        /*!************************************************************!*\
  !*** ../node_modules/graphql/jsutils/defineToStringTag.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.default = applyToStringTag;

          /**
           * Copyright (c) 2015-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *  strict
           */

          /**
           * The `applyToStringTag()` function checks first to see if the runtime
           * supports the `Symbol` class and then if the `Symbol.toStringTag` constant
           * is defined as a `Symbol` instance. If both conditions are met, the
           * Symbol.toStringTag property is defined as a getter that returns the
           * supplied class constructor's name.
           *
           * @method applyToStringTag
           *
           * @param {Class<any>} classObject a class such as Object, String, Number but
           * typically one of your own creation through the class keyword; `class A {}`,
           * for example.
           */
          function applyToStringTag(classObject) {
            if (typeof Symbol === 'function' && Symbol.toStringTag) {
              Object.defineProperty(classObject.prototype, Symbol.toStringTag, {
                get: function get() {
                  return this.constructor.name;
                },
              });
            }
          }

          /***/
        },

      /***/ '../node_modules/graphql/jsutils/inspect.js':
        /*!**************************************************!*\
  !*** ../node_modules/graphql/jsutils/inspect.js ***!
  \**************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.default = inspect;

          function _typeof(obj) {
            if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
              _typeof = function _typeof(obj) {
                return typeof obj;
              };
            } else {
              _typeof = function _typeof(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };
            }
            return _typeof(obj);
          }

          /**
           * Copyright (c) 2015-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *  strict
           */

          /**
           * Used to print values in error messages.
           */
          function inspect(value) {
            switch (_typeof(value)) {
              case 'string':
                return JSON.stringify(value);

              case 'function':
                return value.name ? '[function '.concat(value.name, ']') : '[function]';

              case 'object':
                if (value) {
                  if (typeof value.inspect === 'function') {
                    return value.inspect();
                  } else if (Array.isArray(value)) {
                    return '[' + value.map(inspect).join(', ') + ']';
                  }

                  var properties = Object.keys(value)
                    .map(function(k) {
                      return ''.concat(k, ': ').concat(inspect(value[k]));
                    })
                    .join(', ');
                  return properties ? '{ ' + properties + ' }' : '{}';
                }

                return String(value);

              default:
                return String(value);
            }
          }

          /***/
        },

      /***/ '../node_modules/graphql/jsutils/invariant.js':
        /*!****************************************************!*\
  !*** ../node_modules/graphql/jsutils/invariant.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.default = invariant;

          /**
           * Copyright (c) 2015-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *  strict
           */
          function invariant(condition, message) {
            /* istanbul ignore else */
            if (!condition) {
              throw new Error(message);
            }
          }

          /***/
        },

      /***/ '../node_modules/graphql/language/blockStringValue.js':
        /*!************************************************************!*\
  !*** ../node_modules/graphql/language/blockStringValue.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.default = blockStringValue;

          /**
           * Copyright (c) 2015-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *  strict
           */

          /**
           * Produces the value of a block string from its parsed raw value, similar to
           * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
           *
           * This implements the GraphQL spec's BlockStringValue() static algorithm.
           */
          function blockStringValue(rawString) {
            // Expand a block string's raw value into independent lines.
            var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

            var commonIndent = null;

            for (var i = 1; i < lines.length; i++) {
              var line = lines[i];
              var indent = leadingWhitespace(line);

              if (
                indent < line.length &&
                (commonIndent === null || indent < commonIndent)
              ) {
                commonIndent = indent;

                if (commonIndent === 0) {
                  break;
                }
              }
            }

            if (commonIndent) {
              for (var _i = 1; _i < lines.length; _i++) {
                lines[_i] = lines[_i].slice(commonIndent);
              }
            } // Remove leading and trailing blank lines.

            while (lines.length > 0 && isBlank(lines[0])) {
              lines.shift();
            }

            while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
              lines.pop();
            } // Return a string of the lines joined with U+000A.

            return lines.join('\n');
          }

          function leadingWhitespace(str) {
            var i = 0;

            while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
              i++;
            }

            return i;
          }

          function isBlank(str) {
            return leadingWhitespace(str) === str.length;
          }

          /***/
        },

      /***/ '../node_modules/graphql/language/directiveLocation.js':
        /*!*************************************************************!*\
  !*** ../node_modules/graphql/language/directiveLocation.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.DirectiveLocation = void 0;

          /**
           * Copyright (c) 2015-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *  strict
           */

          /**
           * The set of allowed directive location values.
           */
          var DirectiveLocation = Object.freeze({
            // Request Definitions
            QUERY: 'QUERY',
            MUTATION: 'MUTATION',
            SUBSCRIPTION: 'SUBSCRIPTION',
            FIELD: 'FIELD',
            FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
            FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
            INLINE_FRAGMENT: 'INLINE_FRAGMENT',
            VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
            // Type System Definitions
            SCHEMA: 'SCHEMA',
            SCALAR: 'SCALAR',
            OBJECT: 'OBJECT',
            FIELD_DEFINITION: 'FIELD_DEFINITION',
            ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
            INTERFACE: 'INTERFACE',
            UNION: 'UNION',
            ENUM: 'ENUM',
            ENUM_VALUE: 'ENUM_VALUE',
            INPUT_OBJECT: 'INPUT_OBJECT',
            INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION',
          });
          /**
           * The enum type representing the directive location values.
           */

          exports.DirectiveLocation = DirectiveLocation;

          /***/
        },

      /***/ '../node_modules/graphql/language/kinds.js':
        /*!*************************************************!*\
  !*** ../node_modules/graphql/language/kinds.js ***!
  \*************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.Kind = void 0;

          /**
           * Copyright (c) 2015-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *  strict
           */

          /**
           * The set of allowed kind values for AST nodes.
           */
          var Kind = Object.freeze({
            // Name
            NAME: 'Name',
            // Document
            DOCUMENT: 'Document',
            OPERATION_DEFINITION: 'OperationDefinition',
            VARIABLE_DEFINITION: 'VariableDefinition',
            SELECTION_SET: 'SelectionSet',
            FIELD: 'Field',
            ARGUMENT: 'Argument',
            // Fragments
            FRAGMENT_SPREAD: 'FragmentSpread',
            INLINE_FRAGMENT: 'InlineFragment',
            FRAGMENT_DEFINITION: 'FragmentDefinition',
            // Values
            VARIABLE: 'Variable',
            INT: 'IntValue',
            FLOAT: 'FloatValue',
            STRING: 'StringValue',
            BOOLEAN: 'BooleanValue',
            NULL: 'NullValue',
            ENUM: 'EnumValue',
            LIST: 'ListValue',
            OBJECT: 'ObjectValue',
            OBJECT_FIELD: 'ObjectField',
            // Directives
            DIRECTIVE: 'Directive',
            // Types
            NAMED_TYPE: 'NamedType',
            LIST_TYPE: 'ListType',
            NON_NULL_TYPE: 'NonNullType',
            // Type System Definitions
            SCHEMA_DEFINITION: 'SchemaDefinition',
            OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
            // Type Definitions
            SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
            OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
            FIELD_DEFINITION: 'FieldDefinition',
            INPUT_VALUE_DEFINITION: 'InputValueDefinition',
            INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
            UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
            ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
            ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
            INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
            // Directive Definitions
            DIRECTIVE_DEFINITION: 'DirectiveDefinition',
            // Type System Extensions
            SCHEMA_EXTENSION: 'SchemaExtension',
            // Type Extensions
            SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
            OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
            INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
            UNION_TYPE_EXTENSION: 'UnionTypeExtension',
            ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
            INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension',
          });
          /**
           * The enum type representing the possible kind values of AST nodes.
           */

          exports.Kind = Kind;

          /***/
        },

      /***/ '../node_modules/graphql/language/lexer.js':
        /*!*************************************************!*\
  !*** ../node_modules/graphql/language/lexer.js ***!
  \*************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.createLexer = createLexer;
          exports.getTokenDesc = getTokenDesc;
          exports.TokenKind = void 0;

          var _error = __webpack_require__(
            /*! ../error */ '../node_modules/graphql/error/index.js'
          );

          var _blockStringValue = _interopRequireDefault(
            __webpack_require__(
              /*! ./blockStringValue */ '../node_modules/graphql/language/blockStringValue.js'
            )
          );

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
          }

          /**
           * Copyright (c) 2015-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *  strict
           */

          /**
           * Given a Source object, this returns a Lexer for that source.
           * A Lexer is a stateful stream generator in that every time
           * it is advanced, it returns the next token in the Source. Assuming the
           * source lexes, the final Token emitted by the lexer will be of kind
           * EOF, after which the lexer will repeatedly return the same EOF token
           * whenever called.
           */
          function createLexer(source, options) {
            var startOfFileToken = new Tok(TokenKind.SOF, 0, 0, 0, 0, null);
            var lexer = {
              source: source,
              options: options,
              lastToken: startOfFileToken,
              token: startOfFileToken,
              line: 1,
              lineStart: 0,
              advance: advanceLexer,
              lookahead: lookahead,
            };
            return lexer;
          }

          function advanceLexer() {
            this.lastToken = this.token;
            var token = (this.token = this.lookahead());
            return token;
          }

          function lookahead() {
            var token = this.token;

            if (token.kind !== TokenKind.EOF) {
              do {
                // Note: next is only mutable during parsing, so we cast to allow this.
                token = token.next || (token.next = readToken(this, token));
              } while (token.kind === TokenKind.COMMENT);
            }

            return token;
          }
          /**
           * The return type of createLexer.
           */

          /**
           * An exported enum describing the different kinds of tokens that the
           * lexer emits.
           */
          var TokenKind = Object.freeze({
            SOF: '<SOF>',
            EOF: '<EOF>',
            BANG: '!',
            DOLLAR: '$',
            AMP: '&',
            PAREN_L: '(',
            PAREN_R: ')',
            SPREAD: '...',
            COLON: ':',
            EQUALS: '=',
            AT: '@',
            BRACKET_L: '[',
            BRACKET_R: ']',
            BRACE_L: '{',
            PIPE: '|',
            BRACE_R: '}',
            NAME: 'Name',
            INT: 'Int',
            FLOAT: 'Float',
            STRING: 'String',
            BLOCK_STRING: 'BlockString',
            COMMENT: 'Comment',
          });
          /**
           * The enum type representing the token kinds values.
           */

          exports.TokenKind = TokenKind;

          /**
           * A helper function to describe a token as a string for debugging
           */
          function getTokenDesc(token) {
            var value = token.value;
            return value ? ''.concat(token.kind, ' "').concat(value, '"') : token.kind;
          }

          var charCodeAt = String.prototype.charCodeAt;
          var slice = String.prototype.slice;
          /**
           * Helper function for constructing the Token object.
           */

          function Tok(kind, start, end, line, column, prev, value) {
            this.kind = kind;
            this.start = start;
            this.end = end;
            this.line = line;
            this.column = column;
            this.value = value;
            this.prev = prev;
            this.next = null;
          } // Print a simplified form when appearing in JSON/util.inspect.

          Tok.prototype.toJSON = Tok.prototype.inspect = function toJSON() {
            return {
              kind: this.kind,
              value: this.value,
              line: this.line,
              column: this.column,
            };
          };

          function printCharCode(code) {
            return (
              // NaN/undefined represents access beyond the end of the file.
              isNaN(code)
                ? TokenKind.EOF // Trust JSON for ASCII.
                : code < 0x007f
                  ? JSON.stringify(String.fromCharCode(code)) // Otherwise print the escaped form.
                  : '"\\u'.concat(('00' + code.toString(16).toUpperCase()).slice(-4), '"')
            );
          }
          /**
           * Gets the next token from the source starting at the given position.
           *
           * This skips over whitespace and comments until it finds the next lexable
           * token, then lexes punctuators immediately or calls the appropriate helper
           * function for more complicated tokens.
           */

          function readToken(lexer, prev) {
            var source = lexer.source;
            var body = source.body;
            var bodyLength = body.length;
            var pos = positionAfterWhitespace(body, prev.end, lexer);
            var line = lexer.line;
            var col = 1 + pos - lexer.lineStart;

            if (pos >= bodyLength) {
              return new Tok(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
            }

            var code = charCodeAt.call(body, pos); // SourceCharacter

            switch (code) {
              // !
              case 33:
                return new Tok(TokenKind.BANG, pos, pos + 1, line, col, prev);
              // #

              case 35:
                return readComment(source, pos, line, col, prev);
              // $

              case 36:
                return new Tok(TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
              // &

              case 38:
                return new Tok(TokenKind.AMP, pos, pos + 1, line, col, prev);
              // (

              case 40:
                return new Tok(TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
              // )

              case 41:
                return new Tok(TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
              // .

              case 46:
                if (
                  charCodeAt.call(body, pos + 1) === 46 &&
                  charCodeAt.call(body, pos + 2) === 46
                ) {
                  return new Tok(TokenKind.SPREAD, pos, pos + 3, line, col, prev);
                }

                break;
              // :

              case 58:
                return new Tok(TokenKind.COLON, pos, pos + 1, line, col, prev);
              // =

              case 61:
                return new Tok(TokenKind.EQUALS, pos, pos + 1, line, col, prev);
              // @

              case 64:
                return new Tok(TokenKind.AT, pos, pos + 1, line, col, prev);
              // [

              case 91:
                return new Tok(TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
              // ]

              case 93:
                return new Tok(TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
              // {

              case 123:
                return new Tok(TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
              // |

              case 124:
                return new Tok(TokenKind.PIPE, pos, pos + 1, line, col, prev);
              // }

              case 125:
                return new Tok(TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
              // A-Z _ a-z

              case 65:
              case 66:
              case 67:
              case 68:
              case 69:
              case 70:
              case 71:
              case 72:
              case 73:
              case 74:
              case 75:
              case 76:
              case 77:
              case 78:
              case 79:
              case 80:
              case 81:
              case 82:
              case 83:
              case 84:
              case 85:
              case 86:
              case 87:
              case 88:
              case 89:
              case 90:
              case 95:
              case 97:
              case 98:
              case 99:
              case 100:
              case 101:
              case 102:
              case 103:
              case 104:
              case 105:
              case 106:
              case 107:
              case 108:
              case 109:
              case 110:
              case 111:
              case 112:
              case 113:
              case 114:
              case 115:
              case 116:
              case 117:
              case 118:
              case 119:
              case 120:
              case 121:
              case 122:
                return readName(source, pos, line, col, prev);
              // - 0-9

              case 45:
              case 48:
              case 49:
              case 50:
              case 51:
              case 52:
              case 53:
              case 54:
              case 55:
              case 56:
              case 57:
                return readNumber(source, pos, code, line, col, prev);
              // "

              case 34:
                if (
                  charCodeAt.call(body, pos + 1) === 34 &&
                  charCodeAt.call(body, pos + 2) === 34
                ) {
                  return readBlockString(source, pos, line, col, prev);
                }

                return readString(source, pos, line, col, prev);
            }

            throw (0, _error.syntaxError)(source, pos, unexpectedCharacterMessage(code));
          }
          /**
           * Report a message that an unexpected character was encountered.
           */

          function unexpectedCharacterMessage(code) {
            if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
              return 'Cannot contain the invalid character '.concat(
                printCharCode(code),
                '.'
              );
            }

            if (code === 39) {
              // '
              return (
                "Unexpected single quote character ('), did you mean to use " +
                'a double quote (")?'
              );
            }

            return 'Cannot parse the unexpected character '.concat(
              printCharCode(code),
              '.'
            );
          }
          /**
           * Reads from body starting at startPosition until it finds a non-whitespace
           * or commented character, then returns the position of that character for
           * lexing.
           */

          function positionAfterWhitespace(body, startPosition, lexer) {
            var bodyLength = body.length;
            var position = startPosition;

            while (position < bodyLength) {
              var code = charCodeAt.call(body, position); // tab | space | comma | BOM

              if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
                ++position;
              } else if (code === 10) {
                // new line
                ++position;
                ++lexer.line;
                lexer.lineStart = position;
              } else if (code === 13) {
                // carriage return
                if (charCodeAt.call(body, position + 1) === 10) {
                  position += 2;
                } else {
                  ++position;
                }

                ++lexer.line;
                lexer.lineStart = position;
              } else {
                break;
              }
            }

            return position;
          }
          /**
           * Reads a comment token from the source file.
           *
           * #[\u0009\u0020-\uFFFF]*
           */

          function readComment(source, start, line, col, prev) {
            var body = source.body;
            var code;
            var position = start;

            do {
              code = charCodeAt.call(body, ++position);
            } while (
              code !== null && // SourceCharacter but not LineTerminator
              (code > 0x001f || code === 0x0009)
            );

            return new Tok(
              TokenKind.COMMENT,
              start,
              position,
              line,
              col,
              prev,
              slice.call(body, start + 1, position)
            );
          }
          /**
           * Reads a number token from the source file, either a float
           * or an int depending on whether a decimal point appears.
           *
           * Int:   -?(0|[1-9][0-9]*)
           * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
           */

          function readNumber(source, start, firstCode, line, col, prev) {
            var body = source.body;
            var code = firstCode;
            var position = start;
            var isFloat = false;

            if (code === 45) {
              // -
              code = charCodeAt.call(body, ++position);
            }

            if (code === 48) {
              // 0
              code = charCodeAt.call(body, ++position);

              if (code >= 48 && code <= 57) {
                throw (0, _error.syntaxError)(
                  source,
                  position,
                  'Invalid number, unexpected digit after 0: '.concat(
                    printCharCode(code),
                    '.'
                  )
                );
              }
            } else {
              position = readDigits(source, position, code);
              code = charCodeAt.call(body, position);
            }

            if (code === 46) {
              // .
              isFloat = true;
              code = charCodeAt.call(body, ++position);
              position = readDigits(source, position, code);
              code = charCodeAt.call(body, position);
            }

            if (code === 69 || code === 101) {
              // E e
              isFloat = true;
              code = charCodeAt.call(body, ++position);

              if (code === 43 || code === 45) {
                // + -
                code = charCodeAt.call(body, ++position);
              }

              position = readDigits(source, position, code);
            }

            return new Tok(
              isFloat ? TokenKind.FLOAT : TokenKind.INT,
              start,
              position,
              line,
              col,
              prev,
              slice.call(body, start, position)
            );
          }
          /**
           * Returns the new position in the source after reading digits.
           */

          function readDigits(source, start, firstCode) {
            var body = source.body;
            var position = start;
            var code = firstCode;

            if (code >= 48 && code <= 57) {
              // 0 - 9
              do {
                code = charCodeAt.call(body, ++position);
              } while (code >= 48 && code <= 57); // 0 - 9

              return position;
            }

            throw (0, _error.syntaxError)(
              source,
              position,
              'Invalid number, expected digit but got: '.concat(printCharCode(code), '.')
            );
          }
          /**
           * Reads a string token from the source file.
           *
           * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
           */

          function readString(source, start, line, col, prev) {
            var body = source.body;
            var position = start + 1;
            var chunkStart = position;
            var code = 0;
            var value = '';

            while (
              position < body.length &&
              (code = charCodeAt.call(body, position)) !== null && // not LineTerminator
              code !== 0x000a &&
              code !== 0x000d
            ) {
              // Closing Quote (")
              if (code === 34) {
                value += slice.call(body, chunkStart, position);
                return new Tok(
                  TokenKind.STRING,
                  start,
                  position + 1,
                  line,
                  col,
                  prev,
                  value
                );
              } // SourceCharacter

              if (code < 0x0020 && code !== 0x0009) {
                throw (0, _error.syntaxError)(
                  source,
                  position,
                  'Invalid character within String: '.concat(printCharCode(code), '.')
                );
              }

              ++position;

              if (code === 92) {
                // \
                value += slice.call(body, chunkStart, position - 1);
                code = charCodeAt.call(body, position);

                switch (code) {
                  case 34:
                    value += '"';
                    break;

                  case 47:
                    value += '/';
                    break;

                  case 92:
                    value += '\\';
                    break;

                  case 98:
                    value += '\b';
                    break;

                  case 102:
                    value += '\f';
                    break;

                  case 110:
                    value += '\n';
                    break;

                  case 114:
                    value += '\r';
                    break;

                  case 116:
                    value += '\t';
                    break;

                  case 117:
                    // u
                    var charCode = uniCharCode(
                      charCodeAt.call(body, position + 1),
                      charCodeAt.call(body, position + 2),
                      charCodeAt.call(body, position + 3),
                      charCodeAt.call(body, position + 4)
                    );

                    if (charCode < 0) {
                      throw (0, _error.syntaxError)(
                        source,
                        position,
                        'Invalid character escape sequence: ' +
                          '\\u'.concat(body.slice(position + 1, position + 5), '.')
                      );
                    }

                    value += String.fromCharCode(charCode);
                    position += 4;
                    break;

                  default:
                    throw (0, _error.syntaxError)(
                      source,
                      position,
                      'Invalid character escape sequence: \\'.concat(
                        String.fromCharCode(code),
                        '.'
                      )
                    );
                }

                ++position;
                chunkStart = position;
              }
            }

            throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
          }
          /**
           * Reads a block string token from the source file.
           *
           * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
           */

          function readBlockString(source, start, line, col, prev) {
            var body = source.body;
            var position = start + 3;
            var chunkStart = position;
            var code = 0;
            var rawValue = '';

            while (
              position < body.length &&
              (code = charCodeAt.call(body, position)) !== null
            ) {
              // Closing Triple-Quote (""")
              if (
                code === 34 &&
                charCodeAt.call(body, position + 1) === 34 &&
                charCodeAt.call(body, position + 2) === 34
              ) {
                rawValue += slice.call(body, chunkStart, position);
                return new Tok(
                  TokenKind.BLOCK_STRING,
                  start,
                  position + 3,
                  line,
                  col,
                  prev,
                  (0, _blockStringValue.default)(rawValue)
                );
              } // SourceCharacter

              if (
                code < 0x0020 &&
                code !== 0x0009 &&
                code !== 0x000a &&
                code !== 0x000d
              ) {
                throw (0, _error.syntaxError)(
                  source,
                  position,
                  'Invalid character within String: '.concat(printCharCode(code), '.')
                );
              } // Escape Triple-Quote (\""")

              if (
                code === 92 &&
                charCodeAt.call(body, position + 1) === 34 &&
                charCodeAt.call(body, position + 2) === 34 &&
                charCodeAt.call(body, position + 3) === 34
              ) {
                rawValue += slice.call(body, chunkStart, position) + '"""';
                position += 4;
                chunkStart = position;
              } else {
                ++position;
              }
            }

            throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
          }
          /**
           * Converts four hexadecimal chars to the integer that the
           * string represents. For example, uniCharCode('0','0','0','f')
           * will return 15, and uniCharCode('0','0','f','f') returns 255.
           *
           * Returns a negative number on error, if a char was invalid.
           *
           * This is implemented by noting that char2hex() returns -1 on error,
           * which means the result of ORing the char2hex() will also be negative.
           */

          function uniCharCode(a, b, c, d) {
            return (
              (char2hex(a) << 12) | (char2hex(b) << 8) | (char2hex(c) << 4) | char2hex(d)
            );
          }
          /**
           * Converts a hex character to its integer value.
           * '0' becomes 0, '9' becomes 9
           * 'A' becomes 10, 'F' becomes 15
           * 'a' becomes 10, 'f' becomes 15
           *
           * Returns -1 on error.
           */

          function char2hex(a) {
            return a >= 48 && a <= 57
              ? a - 48 // 0-9
              : a >= 65 && a <= 70
                ? a - 55 // A-F
                : a >= 97 && a <= 102
                  ? a - 87 // a-f
                  : -1;
          }
          /**
           * Reads an alphanumeric + underscore name from the source.
           *
           * [_A-Za-z][_0-9A-Za-z]*
           */

          function readName(source, start, line, col, prev) {
            var body = source.body;
            var bodyLength = body.length;
            var position = start + 1;
            var code = 0;

            while (
              position !== bodyLength &&
              (code = charCodeAt.call(body, position)) !== null &&
              (code === 95 || // _
              (code >= 48 && code <= 57) || // 0-9
              (code >= 65 && code <= 90) || // A-Z
                (code >= 97 && code <= 122)) // a-z
            ) {
              ++position;
            }

            return new Tok(
              TokenKind.NAME,
              start,
              position,
              line,
              col,
              prev,
              slice.call(body, start, position)
            );
          }

          /***/
        },

      /***/ '../node_modules/graphql/language/location.js':
        /*!****************************************************!*\
  !*** ../node_modules/graphql/language/location.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.getLocation = getLocation;

          /**
           * Copyright (c) 2015-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *  strict
           */

          /**
           * Represents a location in a Source.
           */

          /**
           * Takes a Source and a UTF-8 character offset, and returns the corresponding
           * line and column as a SourceLocation.
           */
          function getLocation(source, position) {
            var lineRegexp = /\r\n|[\n\r]/g;
            var line = 1;
            var column = position + 1;
            var match;

            while ((match = lineRegexp.exec(source.body)) && match.index < position) {
              line += 1;
              column = position + 1 - (match.index + match[0].length);
            }

            return {
              line: line,
              column: column,
            };
          }

          /***/
        },

      /***/ '../node_modules/graphql/language/parser.js':
        /*!**************************************************!*\
  !*** ../node_modules/graphql/language/parser.js ***!
  \**************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.parse = parse;
          exports.parseValue = parseValue;
          exports.parseType = parseType;
          exports.parseConstValue = parseConstValue;
          exports.parseTypeReference = parseTypeReference;
          exports.parseNamedType = parseNamedType;

          var _inspect = _interopRequireDefault(
            __webpack_require__(
              /*! ../jsutils/inspect */ '../node_modules/graphql/jsutils/inspect.js'
            )
          );

          var _source = __webpack_require__(
            /*! ./source */ '../node_modules/graphql/language/source.js'
          );

          var _error = __webpack_require__(
            /*! ../error */ '../node_modules/graphql/error/index.js'
          );

          var _lexer = __webpack_require__(
            /*! ./lexer */ '../node_modules/graphql/language/lexer.js'
          );

          var _kinds = __webpack_require__(
            /*! ./kinds */ '../node_modules/graphql/language/kinds.js'
          );

          var _directiveLocation = __webpack_require__(
            /*! ./directiveLocation */ '../node_modules/graphql/language/directiveLocation.js'
          );

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
          }

          /**
           * Copyright (c) 2015-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           *
           *  strict
           */

          /**
           * Given a GraphQL source, parses it into a Document.
           * Throws GraphQLError if a syntax error is encountered.
           */
          function parse(source, options) {
            var sourceObj =
              typeof source === 'string' ? new _source.Source(source) : source;

            if (!(sourceObj instanceof _source.Source)) {
              throw new TypeError(
                'Must provide Source. Received: '.concat((0, _inspect.default)(sourceObj))
              );
            }

            var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
            return parseDocument(lexer);
          }
          /**
           * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
           * that value.
           * Throws GraphQLError if a syntax error is encountered.
           *
           * This is useful within tools that operate upon GraphQL Values directly and
           * in isolation of complete GraphQL documents.
           *
           * Consider providing the results to the utility function: valueFromAST().
           */

          function parseValue(source, options) {
            var sourceObj =
              typeof source === 'string' ? new _source.Source(source) : source;
            var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
            expect(lexer, _lexer.TokenKind.SOF);
            var value = parseValueLiteral(lexer, false);
            expect(lexer, _lexer.TokenKind.EOF);
            return value;
          }
          /**
           * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
           * that type.
           * Throws GraphQLError if a syntax error is encountered.
           *
           * This is useful within tools that operate upon GraphQL Types directly and
           * in isolation of complete GraphQL documents.
           *
           * Consider providing the results to the utility function: typeFromAST().
           */

          function parseType(source, options) {
            var sourceObj =
              typeof source === 'string' ? new _source.Source(source) : source;
            var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
            expect(lexer, _lexer.TokenKind.SOF);
            var type = parseTypeReference(lexer);
            expect(lexer, _lexer.TokenKind.EOF);
            return type;
          }
          /**
           * Converts a name lex token into a name parse node.
           */

          function parseName(lexer) {
            var token = expect(lexer, _lexer.TokenKind.NAME);
            return {
              kind: _kinds.Kind.NAME,
              value: token.value,
              loc: loc(lexer, token),
            };
          } // Implements the parsing rules in the Document section.

          /**
           * Document : Definition+
           */

          function parseDocument(lexer) {
            var start = lexer.token;
            return {
              kind: _kinds.Kind.DOCUMENT,
              definitions: many(
                lexer,
                _lexer.TokenKind.SOF,
                parseDefinition,
                _lexer.TokenKind.EOF
              ),
              loc: loc(lexer, start),
            };
          }
          /**
           * Definition :
           *   - ExecutableDefinition
           *   - TypeSystemDefinition
           *   - TypeSystemExtension
           */

          function parseDefinition(lexer) {
            if (peek(lexer, _lexer.TokenKind.NAME)) {
              switch (lexer.token.value) {
                case 'query':
                case 'mutation':
                case 'subscription':
                case 'fragment':
                  return parseExecutableDefinition(lexer);

                case 'schema':
                case 'scalar':
                case 'type':
                case 'interface':
                case 'union':
                case 'enum':
                case 'input':
                case 'directive':
                  return parseTypeSystemDefinition(lexer);

                case 'extend':
                  return parseTypeSystemExtension(lexer);
              }
            } else if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
              return parseExecutableDefinition(lexer);
            } else if (peekDescription(lexer)) {
              return parseTypeSystemDefinition(lexer);
            }

            throw unexpected(lexer);
          }
          /**
           * ExecutableDefinition :
           *   - OperationDefinition
           *   - FragmentDefinition
           */

          function parseExecutableDefinition(lexer) {
            if (peek(lexer, _lexer.TokenKind.NAME)) {
              switch (lexer.token.value) {
                case 'query':
                case 'mutation':
                case 'subscription':
                  return parseOperationDefinition(lexer);

                case 'fragment':
                  return parseFragmentDefinition(lexer);
              }
            } else if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
              return parseOperationDefinition(lexer);
            }

            throw unexpected(lexer);
          } // Implements the parsing rules in the Operations section.

          /**
           * OperationDefinition :
           *  - SelectionSet
           *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
           */

          function parseOperationDefinition(lexer) {
            var start = lexer.token;

            if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
              return {
                kind: _kinds.Kind.OPERATION_DEFINITION,
                operation: 'query',
                name: undefined,
                variableDefinitions: [],
                directives: [],
                selectionSet: parseSelectionSet(lexer),
                loc: loc(lexer, start),
              };
            }

            var operation = parseOperationType(lexer);
            var name;

            if (peek(lexer, _lexer.TokenKind.NAME)) {
              name = parseName(lexer);
            }

            return {
              kind: _kinds.Kind.OPERATION_DEFINITION,
              operation: operation,
              name: name,
              variableDefinitions: parseVariableDefinitions(lexer),
              directives: parseDirectives(lexer, false),
              selectionSet: parseSelectionSet(lexer),
              loc: loc(lexer, start),
            };
          }
          /**
           * OperationType : one of query mutation subscription
           */

          function parseOperationType(lexer) {
            var operationToken = expect(lexer, _lexer.TokenKind.NAME);

            switch (operationToken.value) {
              case 'query':
                return 'query';

              case 'mutation':
                return 'mutation';

              case 'subscription':
                return 'subscription';
            }

            throw unexpected(lexer, operationToken);
          }
          /**
           * VariableDefinitions : ( VariableDefinition+ )
           */

          function parseVariableDefinitions(lexer) {
            return peek(lexer, _lexer.TokenKind.PAREN_L)
              ? many(
                  lexer,
                  _lexer.TokenKind.PAREN_L,
                  parseVariableDefinition,
                  _lexer.TokenKind.PAREN_R
                )
              : [];
          }
          /**
           * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
           */

          function parseVariableDefinition(lexer) {
            var start = lexer.token;

            if (lexer.options.experimentalVariableDefinitionDirectives) {
              return {
                kind: _kinds.Kind.VARIABLE_DEFINITION,
                variable: parseVariable(lexer),
                type: (expect(lexer, _lexer.TokenKind.COLON), parseTypeReference(lexer)),
                defaultValue: skip(lexer, _lexer.TokenKind.EQUALS)
                  ? parseValueLiteral(lexer, true)
                  : undefined,
                directives: parseDirectives(lexer, true),
                loc: loc(lexer, start),
              };
            }

            return {
              kind: _kinds.Kind.VARIABLE_DEFINITION,
              variable: parseVariable(lexer),
              type: (expect(lexer, _lexer.TokenKind.COLON), parseTypeReference(lexer)),
              defaultValue: skip(lexer, _lexer.TokenKind.EQUALS)
                ? parseValueLiteral(lexer, true)
                : undefined,
              loc: loc(lexer, start),
            };
          }
          /**
           * Variable : $ Name
           */

          function parseVariable(lexer) {
            var start = lexer.token;
            expect(lexer, _lexer.TokenKind.DOLLAR);
            return {
              kind: _kinds.Kind.VARIABLE,
              name: parseName(lexer),
              loc: loc(lexer, start),
            };
          }
          /**
           * SelectionSet : { Selection+ }
           */

          function parseSelectionSet(lexer) {
            var start = lexer.token;
            return {
              kind: _kinds.Kind.SELECTION_SET,
              selections: many(
                lexer,
                _lexer.TokenKind.BRACE_L,
                parseSelection,
                _lexer.TokenKind.BRACE_R
              ),
              loc: loc(lexer, start),
            };
          }
          /**
           * Selection :
           *   - Field
           *   - FragmentSpread
           *   - InlineFragment
           */

          function parseSelection(lexer) {
            return peek(lexer, _lexer.TokenKind.SPREAD)
              ? parseFragment(lexer)
              : parseField(lexer);
          }
          /**
           * Field : Alias? Name Arguments? Directives? SelectionSet?
           *
           * Alias : Name :
           */

          function parseField(lexer) {
            var start = lexer.token;
            var nameOrAlias = parseName(lexer);
            var alias;
            var name;

            if (skip(lexer, _lexer.TokenKind.COLON)) {
              alias = nameOrAlias;
              name = parseName(lexer);
            } else {
              name = nameOrAlias;
            }

            return {
              kind: _kinds.Kind.FIELD,
              alias: alias,
              name: name,
              arguments: parseArguments(lexer, false),
              directives: parseDirectives(lexer, false),
              selectionSet: peek(lexer, _lexer.TokenKind.BRACE_L)
                ? parseSelectionSet(lexer)
                : undefined,
              loc: loc(lexer, start),
            };
          }
          /**
           * Arguments[Const] : ( Argument[?Const]+ )
           */

          function parseArguments(lexer, isConst) {
            var item = isConst ? parseConstArgument : parseArgument;
            return peek(lexer, _lexer.TokenKind.PAREN_L)
              ? many(lexer, _lexer.TokenKind.PAREN_L, item, _lexer.TokenKind.PAREN_R)
              : [];
          }
          /**
           * Argument[Const] : Name : Value[?Const]
           */

          function parseArgument(lexer) {
            var start = lexer.token;
            return {
              kind: _kinds.Kind.ARGUMENT,
              name: parseName(lexer),
              value: (expect(lexer, _lexer.TokenKind.COLON),
              parseValueLiteral(lexer, false)),
              loc: loc(lexer, start),
            };
          }

          function parseConstArgument(lexer) {
            var start = lexer.token;
            return {
              kind: _kinds.Kind.ARGUMENT,
              name: parseName(lexer),
              value: (expect(lexer, _lexer.TokenKind.COLON), parseConstValue(lexer)),
              loc: loc(lexer, start),
            };
          } // Implements the parsing rules in the Fragments section.

          /**
           * Corresponds to both FragmentSpread and InlineFragment in the spec.
           *
           * FragmentSpread : ... FragmentName Directives?
           *
           * InlineFragment : ... TypeCondition? Directives? SelectionSet
           */

          function parseFragment(lexer) {
            var start = lexer.token;
            expect(lexer, _lexer.TokenKind.SPREAD);

            if (peek(lexer, _lexer.TokenKind.NAME) && lexer.token.value !== 'on') {
              return {
                kind: _kinds.Kind.FRAGMENT_SPREAD,
                name: parseFragmentName(lexer),
                directives: parseDirectives(lexer, false),
                loc: loc(lexer, start),
              };
            }

            var typeCondition;

            if (lexer.token.value === 'on') {
              lexer.advance();
              typeCondition = parseNamedType(lexer);
            }

            return {
              kind: _kinds.Kind.INLINE_FRAGMENT,
              typeCondition: typeCondition,
              directives: parseDirectives(lexer, false),
              selectionSet: parseSelectionSet(lexer),
              loc: loc(lexer, start),
            };
          }
          /**
           * FragmentDefinition :
           *   - fragment FragmentName on TypeCondition Directives? SelectionSet
           *
           * TypeCondition : NamedType
           */

          function parseFragmentDefinition(lexer) {
            var start = lexer.token;
            expectKeyword(lexer, 'fragment'); // Experimental support for defining variables within fragments changes
            // the grammar of FragmentDefinition:
            //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

            if (lexer.options.experimentalFragmentVariables) {
              return {
                kind: _kinds.Kind.FRAGMENT_DEFINITION,
                name: parseFragmentName(lexer),
                variableDefinitions: parseVariableDefinitions(lexer),
                typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
                directives: parseDirectives(lexer, false),
                selectionSet: parseSelectionSet(lexer),
                loc: loc(lexer, start),
              };
            }

            return {
              kind: _kinds.Kind.FRAGMENT_DEFINITION,
              name: parseFragmentName(lexer),
              typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
              directives: parseDirectives(lexer, false),
              selectionSet: parseSelectionSet(lexer),
              loc: loc(lexer, start),
            };
          }
          /**
           * FragmentName : Name but not `on`
           */

          function parseFragmentName(lexer) {
            if (lexer.token.value === 'on') {
              throw unexpected(lexer);
            }

            return parseName(lexer);
          } // Implements the parsing rules in the Values section.

          /**
           * Value[Const] :
           *   - [~Const] Variable
           *   - IntValue
           *   - FloatValue
           *   - StringValue
           *   - BooleanValue
           *   - NullValue
           *   - EnumValue
           *   - ListValue[?Const]
           *   - ObjectValue[?Const]
           *
           * BooleanValue : one of `true` `false`
           *
           * NullValue : `null`
           *
           * EnumValue : Name but not `true`, `false` or `null`
           */

          function parseValueLiteral(lexer, isConst) {
            var token = lexer.token;

            switch (token.kind) {
              case _lexer.TokenKind.BRACKET_L:
                return parseList(lexer, isConst);

              case _lexer.TokenKind.BRACE_L:
                return parseObject(lexer, isConst);

              case _lexer.TokenKind.INT:
                lexer.advance();
                return {
                  kind: _kinds.Kind.INT,
                  value: token.value,
                  loc: loc(lexer, token),
                };

              case _lexer.TokenKind.FLOAT:
                lexer.advance();
                return {
                  kind: _kinds.Kind.FLOAT,
                  value: token.value,
                  loc: loc(lexer, token),
                };

              case _lexer.TokenKind.STRING:
              case _lexer.TokenKind.BLOCK_STRING:
                return parseStringLiteral(lexer);

              case _lexer.TokenKind.NAME:
                if (token.value === 'true' || token.value === 'false') {
                  lexer.advance();
                  return {
                    kind: _kinds.Kind.BOOLEAN,
                    value: token.value === 'true',
                    loc: loc(lexer, token),
                  };
                } else if (token.value === 'null') {
                  lexer.advance();
                  return {
                    kind: _kinds.Kind.NULL,
                    loc: loc(lexer, token),
                  };
                }

                lexer.advance();
                return {
                  kind: _kinds.Kind.ENUM,
                  value: token.value,
                  loc: loc(lexer, token),
                };

              case _lexer.TokenKind.DOLLAR:
                if (!isConst) {
                  return parseVariable(lexer);
                }

                break;
            }

            throw unexpected(lexer);
          }

          function parseStringLiteral(lexer) {
            var token = lexer.token;
            lexer.advance();
            return {
              kind: _kinds.Kind.STRING,
              value: token.value,
              block: token.kind === _lexer.TokenKind.BLOCK_STRING,
              loc: loc(lexer, token),
            };
          }

          function parseConstValue(lexer) {
            return parseValueLiteral(lexer, true);
          }

          function parseValueValue(lexer) {
            return parseValueLiteral(lexer, false);
          }
          /**
           * ListValue[Const] :
           *   - [ ]
           *   - [ Value[?Const]+ ]
           */

          function parseList(lexer, isConst) {
            var start = lexer.token;
            var item = isConst ? parseConstValue : parseValueValue;
            return {
              kind: _kinds.Kind.LIST,
              values: any(
                lexer,
                _lexer.TokenKind.BRACKET_L,
                item,
                _lexer.TokenKind.BRACKET_R
              ),
              loc: loc(lexer, start),
            };
          }
          /**
           * ObjectValue[Const] :
           *   - { }
           *   - { ObjectField[?Const]+ }
           */

          function parseObject(lexer, isConst) {
            var start = lexer.token;
            expect(lexer, _lexer.TokenKind.BRACE_L);
            var fields = [];

            while (!skip(lexer, _lexer.TokenKind.BRACE_R)) {
              fields.push(parseObjectField(lexer, isConst));
            }

            return {
              kind: _kinds.Kind.OBJECT,
              fields: fields,
              loc: loc(lexer, start),
            };
          }
          /**
           * ObjectField[Const] : Name : Value[?Const]
           */

          function parseObjectField(lexer, isConst) {
            var start = lexer.token;
            return {
              kind: _kinds.Kind.OBJECT_FIELD,
              name: parseName(lexer),
              value: (expect(lexer, _lexer.TokenKind.COLON),
              parseValueLiteral(lexer, isConst)),
              loc: loc(lexer, start),
            };
          } // Implements the parsing rules in the Directives section.

          /**
           * Directives[Const] : Directive[?Const]+
           */

          function parseDirectives(lexer, isConst) {
            var directives = [];

            while (peek(lexer, _lexer.TokenKind.AT)) {
              directives.push(parseDirective(lexer, isConst));
            }

            return directives;
          }
          /**
           * Directive[Const] : @ Name Arguments[?Const]?
           */

          function parseDirective(lexer, isConst) {
            var start = lexer.token;
            expect(lexer, _lexer.TokenKind.AT);
            return {
              kind: _kinds.Kind.DIRECTIVE,
              name: parseName(lexer),
              arguments: parseArguments(lexer, isConst),
              loc: loc(lexer, start),
            };
          } // Implements the parsing rules in the Types section.

          /**
           * Type :
           *   - NamedType
           *   - ListType
           *   - NonNullType
           */

          function parseTypeReference(lexer) {
            var start = lexer.token;
            var type;

            if (skip(lexer, _lexer.TokenKind.BRACKET_L)) {
              type = parseTypeReference(lexer);
              expect(lexer, _lexer.TokenKind.BRACKET_R);
              type = {
                kind: _kinds.Kind.LIST_TYPE,
                type: type,
                loc: loc(lexer, start),
              };
            } else {
              type = parseNamedType(lexer);
            }

            if (skip(lexer, _lexer.TokenKind.BANG)) {
              return {
                kind: _kinds.Kind.NON_NULL_TYPE,
                type: type,
                loc: loc(lexer, start),
              };
            }

            return type;
          }
          /**
           * NamedType : Name
           */

          function parseNamedType(lexer) {
            var start = lexer.token;
            return {
              kind: _kinds.Kind.NAMED_TYPE,
              name: parseName(lexer),
              loc: loc(lexer, start),
            };
          } // Implements the parsing rules in the Type Definition section.

          /**
           * TypeSystemDefinition :
           *   - SchemaDefinition
           *   - TypeDefinition
           *   - DirectiveDefinition
           *
           * TypeDefinition :
           *   - ScalarTypeDefinition
           *   - ObjectTypeDefinition
           *   - InterfaceTypeDefinition
           *   - UnionTypeDefinition
           *   - EnumTypeDefinition
           *   - InputObjectTypeDefinition
           */

          function parseTypeSystemDefinition(lexer) {
            // Many definitions begin with a description and require a lookahead.
            var keywordToken = peekDescription(lexer) ? lexer.lookahead() : lexer.token;

            if (keywordToken.kind === _lexer.TokenKind.NAME) {
              switch (keywordToken.value) {
                case 'schema':
                  return parseSchemaDefinition(lexer);

                case 'scalar':
                  return parseScalarTypeDefinition(lexer);

                case 'type':
                  return parseObjectTypeDefinition(lexer);

                case 'interface':
                  return parseInterfaceTypeDefinition(lexer);

                case 'union':
                  return parseUnionTypeDefinition(lexer);

                case 'enum':
                  return parseEnumTypeDefinition(lexer);

                case 'input':
                  return parseInputObjectTypeDefinition(lexer);

                case 'directive':
                  return parseDirectiveDefinition(lexer);
              }
            }

            throw unexpected(lexer, keywordToken);
          }

          function peekDescription(lexer) {
            return (
              peek(lexer, _lexer.TokenKind.STRING) ||
              peek(lexer, _lexer.TokenKind.BLOCK_STRING)
            );
          }
          /**
           * Description : StringValue
           */

          function parseDescription(lexer) {
            if (peekDescription(lexer)) {
              return parseStringLiteral(lexer);
            }
          }
          /**
           * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
           */

          function parseSchemaDefinition(lexer) {
            var start = lexer.token;
            expectKeyword(lexer, 'schema');
            var directives = parseDirectives(lexer, true);
            var operationTypes = many(
              lexer,
              _lexer.TokenKind.BRACE_L,
              parseOperationTypeDefinition,
              _lexer.TokenKind.BRACE_R
            );
            return {
              kind: _kinds.Kind.SCHEMA_DEFINITION,
              directives: directives,
              operationTypes: operationTypes,
              loc: loc(lexer, start),
            };
          }
          /**
           * OperationTypeDefinition : OperationType : NamedType
           */

          function parseOperationTypeDefinition(lexer) {
            var start = lexer.token;
            var operation = parseOperationType(lexer);
            expect(lexer, _lexer.TokenKind.COLON);
            var type = parseNamedType(lexer);
            return {
              kind: _kinds.Kind.OPERATION_TYPE_DEFINITION,
              operation: operation,
              type: type,
              loc: loc(lexer, start),
            };
          }
          /**
           * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
           */

          function parseScalarTypeDefinition(lexer) {
            var start = lexer.token;
            var description = parseDescription(lexer);
            expectKeyword(lexer, 'scalar');
            var name = parseName(lexer);
            var directives = parseDirectives(lexer, true);
            return {
              kind: _kinds.Kind.SCALAR_TYPE_DEFINITION,
              description: description,
              name: name,
              directives: directives,
              loc: loc(lexer, start),
            };
          }
          /**
           * ObjectTypeDefinition :
           *   Description?
           *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
           */

          function parseObjectTypeDefinition(lexer) {
            var start = lexer.token;
            var description = parseDescription(lexer);
            expectKeyword(lexer, 'type');
            var name = parseName(lexer);
            var interfaces = parseImplementsInterfaces(lexer);
            var directives = parseDirectives(lexer, true);
            var fields = parseFieldsDefinition(lexer);
            return {
              kind: _kinds.Kind.OBJECT_TYPE_DEFINITION,
              description: description,
              name: name,
              interfaces: interfaces,
              directives: directives,
              fields: fields,
              loc: loc(lexer, start),
            };
          }
          /**
           * ImplementsInterfaces :
           *   - implements `&`? NamedType
           *   - ImplementsInterfaces & NamedType
           */

          function parseImplementsInterfaces(lexer) {
            var types = [];

            if (lexer.token.value === 'implements') {
              lexer.advance(); // Optional leading ampersand

              skip(lexer, _lexer.TokenKind.AMP);

              do {
                types.push(parseNamedType(lexer));
              } while (
                skip(lexer, _lexer.TokenKind.AMP) || // Legacy support for the SDL?
                (lexer.options.allowLegacySDLImplementsInterfaces &&
                  peek(lexer, _lexer.TokenKind.NAME))
              );
            }

            return types;
          }
          /**
           * FieldsDefinition : { FieldDefinition+ }
           */

          function parseFieldsDefinition(lexer) {
            // Legacy support for the SDL?
            if (
              lexer.options.allowLegacySDLEmptyFields &&
              peek(lexer, _lexer.TokenKind.BRACE_L) &&
              lexer.lookahead().kind === _lexer.TokenKind.BRACE_R
            ) {
              lexer.advance();
              lexer.advance();
              return [];
            }

            return peek(lexer, _lexer.TokenKind.BRACE_L)
              ? many(
                  lexer,
                  _lexer.TokenKind.BRACE_L,
                  parseFieldDefinition,
                  _lexer.TokenKind.BRACE_R
                )
              : [];
          }
          /**
           * FieldDefinition :
           *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
           */

          function parseFieldDefinition(lexer) {
            var start = lexer.token;
            var description = parseDescription(lexer);
            var name = parseName(lexer);
            var args = parseArgumentDefs(lexer);
            expect(lexer, _lexer.TokenKind.COLON);
            var type = parseTypeReference(lexer);
            var directives = parseDirectives(lexer, true);
            return {
              kind: _kinds.Kind.FIELD_DEFINITION,
              description: description,
              name: name,
              arguments: args,
              type: type,
              directives: directives,
              loc: loc(lexer, start),
            };
          }
          /**
           * ArgumentsDefinition : ( InputValueDefinition+ )
           */

          function parseArgumentDefs(lexer) {
            if (!peek(lexer, _lexer.TokenKind.PAREN_L)) {
              return [];
            }

            return many(
              lexer,
              _lexer.TokenKind.PAREN_L,
              parseInputValueDef,
              _lexer.TokenKind.PAREN_R
            );
          }
          /**
           * InputValueDefinition :
           *   - Description? Name : Type DefaultValue? Directives[Const]?
           */

          function parseInputValueDef(lexer) {
            var start = lexer.token;
            var description = parseDescription(lexer);
            var name = parseName(lexer);
            expect(lexer, _lexer.TokenKind.COLON);
            var type = parseTypeReference(lexer);
            var defaultValue;

            if (skip(lexer, _lexer.TokenKind.EQUALS)) {
              defaultValue = parseConstValue(lexer);
            }

            var directives = parseDirectives(lexer, true);
            return {
              kind: _kinds.Kind.INPUT_VALUE_DEFINITION,
              description: description,
              name: name,
              type: type,
              defaultValue: defaultValue,
              directives: directives,
              loc: loc(lexer, start),
            };
          }
          /**
           * InterfaceTypeDefinition :
           *   - Description? interface Name Directives[Const]? FieldsDefinition?
           */

          function parseInterfaceTypeDefinition(lexer) {
            var start = lexer.token;
            var description = parseDescription(lexer);
            expectKeyword(lexer, 'interface');
            var name = parseName(lexer);
            var directives = parseDirectives(lexer, true);
            var fields = parseFieldsDefinition(lexer);
            return {
              kind: _kinds.Kind.INTERFACE_TYPE_DEFINITION,
              description: description,
              name: name,
              directives: directives,
              fields: fields,
              loc: loc(lexer, start),
            };
          }
          /**
           * UnionTypeDefinition :
           *   - Description? union Name Directives[Const]? UnionMemberTypes?
           */

          function parseUnionTypeDefinition(lexer) {
            var start = lexer.token;
            var description = parseDescription(lexer);
            expectKeyword(lexer, 'union');
            var name = parseName(lexer);
            var directives = parseDirectives(lexer, true);
            var types = parseUnionMemberTypes(lexer);
            return {
              kind: _kinds.Kind.UNION_TYPE_DEFINITION,
              description: description,
              name: name,
              directives: directives,
              types: types,
              loc: loc(lexer, start),
            };
          }
          /**
           * UnionMemberTypes :
           *   - = `|`? NamedType
           *   - UnionMemberTypes | NamedType
           */

          function parseUnionMemberTypes(lexer) {
            var types = [];

            if (skip(lexer, _lexer.TokenKind.EQUALS)) {
              // Optional leading pipe
              skip(lexer, _lexer.TokenKind.PIPE);

              do {
                types.push(parseNamedType(lexer));
              } while (skip(lexer, _lexer.TokenKind.PIPE));
            }

            return types;
          }
          /**
           * EnumTypeDefinition :
           *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
           */

          function parseEnumTypeDefinition(lexer) {
            var start = lexer.token;
            var description = parseDescription(lexer);
            expectKeyword(lexer, 'enum');
            var name = parseName(lexer);
            var directives = parseDirectives(lexer, true);
            var values = parseEnumValuesDefinition(lexer);
            return {
              kind: _kinds.Kind.ENUM_TYPE_DEFINITION,
              description: description,
              name: name,
              directives: directives,
              values: values,
              loc: loc(lexer, start),
            };
          }
          /**
           * EnumValuesDefinition : { EnumValueDefinition+ }
           */

          function parseEnumValuesDefinition(lexer) {
            return peek(lexer, _lexer.TokenKind.BRACE_L)
              ? many(
                  lexer,
                  _lexer.TokenKind.BRACE_L,
                  parseEnumValueDefinition,
                  _lexer.TokenKind.BRACE_R
                )
              : [];
          }
          /**
           * EnumValueDefinition : Description? EnumValue Directives[Const]?
           *
           * EnumValue : Name
           */

          function parseEnumValueDefinition(lexer) {
            var start = lexer.token;
            var description = parseDescription(lexer);
            var name = parseName(lexer);
            var directives = parseDirectives(lexer, true);
            return {
              kind: _kinds.Kind.ENUM_VALUE_DEFINITION,
              description: description,
              name: name,
              directives: directives,
              loc: loc(lexer, start),
            };
          }
          /**
           * InputObjectTypeDefinition :
           *   - Description? input Name Directives[Const]? InputFieldsDefinition?
           */

          function parseInputObjectTypeDefinition(lexer) {
            var start = lexer.token;
            var description = parseDescription(lexer);
            expectKeyword(lexer, 'input');
            var name = parseName(lexer);
            var directives = parseDirectives(lexer, true);
            var fields = parseInputFieldsDefinition(lexer);
            return {
              kind: _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION,
              description: description,
              name: name,
              directives: directives,
              fields: fields,
              loc: loc(lexer, start),
            };
          }
          /**
           * InputFieldsDefinition : { InputValueDefinition+ }
           */

          function parseInputFieldsDefinition(lexer) {
            return peek(lexer, _lexer.TokenKind.BRACE_L)
              ? many(
                  lexer,
                  _lexer.TokenKind.BRACE_L,
                  parseInputValueDef,
                  _lexer.TokenKind.BRACE_R
                )
              : [];
          }
          /**
           * TypeSystemExtension :
           *   - SchemaExtension
           *   - TypeExtension
           *
           * TypeExtension :
           *   - ScalarTypeExtension
           *   - ObjectTypeExtension
           *   - InterfaceTypeExtension
           *   - UnionTypeExtension
           *   - EnumTypeExtension
           *   - InputObjectTypeDefinition
           */

          function parseTypeSystemExtension(lexer) {
            var keywordToken = lexer.lookahead();

            if (keywordToken.kind === _lexer.TokenKind.NAME) {
              switch (keywordToken.value) {
                case 'schema':
                  return parseSchemaExtension(lexer);

                case 'scalar':
                  return parseScalarTypeExtension(lexer);

                case 'type':
                  return parseObjectTypeExtension(lexer);

                case 'interface':
                  return parseInterfaceTypeExtension(lexer);

                case 'union':
                  return parseUnionTypeExtension(lexer);

                case 'enum':
                  return parseEnumTypeExtension(lexer);

                case 'input':
                  return parseInputObjectTypeExtension(lexer);
              }
            }

            throw unexpected(lexer, keywordToken);
          }
          /**
           * SchemaExtension :
           *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
           *  - extend schema Directives[Const]
           */

          function parseSchemaExtension(lexer) {
            var start = lexer.token;
            expectKeyword(lexer, 'extend');
            expectKeyword(lexer, 'schema');
            var directives = parseDirectives(lexer, true);
            var operationTypes = peek(lexer, _lexer.TokenKind.BRACE_L)
              ? many(
                  lexer,
                  _lexer.TokenKind.BRACE_L,
                  parseOperationTypeDefinition,
                  _lexer.TokenKind.BRACE_R
                )
              : [];

            if (directives.length === 0 && operationTypes.length === 0) {
              throw unexpected(lexer);
            }

            return {
              kind: _kinds.Kind.SCHEMA_EXTENSION,
              directives: directives,
              operationTypes: operationTypes,
              loc: loc(lexer, start),
            };
          }
          /**
           * ScalarTypeExtension :
           *   - extend scalar Name Directives[Const]
           */

          function parseScalarTypeExtension(lexer) {
            var start = lexer.token;
            expectKeyword(lexer, 'extend');
            expectKeyword(lexer, 'scalar');
            var name = parseName(lexer);
            var directives = parseDirectives(lexer, true);

            if (directives.length === 0) {
              throw unexpected(lexer);
            }

            return {
              kind: _kinds.Kind.SCALAR_TYPE_EXTENSION,
              name: name,
              directives: directives,
              loc: loc(lexer, start),
            };
          }
          /**
           * ObjectTypeExtension :
           *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
           *  - extend type Name ImplementsInterfaces? Directives[Const]
           *  - extend type Name ImplementsInterfaces
           */

          function parseObjectTypeExtension(lexer) {
            var start = lexer.token;
            expectKeyword(lexer, 'extend');
            expectKeyword(lexer, 'type');
            var name = parseName(lexer);
            var interfaces = parseImplementsInterfaces(lexer);
            var directives = parseDirectives(lexer, true);
            var fields = parseFieldsDefinition(lexer);

            if (
              interfaces.length === 0 &&
              directives.length === 0 &&
              fields.length === 0
            ) {
              throw unexpected(lexer);
            }

            return {
              kind: _kinds.Kind.OBJECT_TYPE_EXTENSION,
              name: name,
              interfaces: interfaces,
              directives: directives,
              fields: fields,
              loc: loc(lexer, start),
            };
          }
          /**
           * InterfaceTypeExtension :
           *   - extend interface Name Directives[Const]? FieldsDefinition
           *   - extend interface Name Directives[Const]
           */

          function parseInterfaceTypeExtension(lexer) {
            var start = lexer.token;
            expectKeyword(lexer, 'extend');
            expectKeyword(lexer, 'interface');
            var name = parseName(lexer);
            var directives = parseDirectives(lexer, true);
            var fields = parseFieldsDefinition(lexer);

            if (directives.length === 0 && fields.length === 0) {
              throw unexpected(lexer);
            }

            return {
              kind: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
              name: name,
              directives: directives,
              fields: fields,
              loc: loc(lexer, start),
            };
          }
          /**
           * UnionTypeExtension :
           *   - extend union Name Directives[Const]? UnionMemberTypes
           *   - extend union Name Directives[Const]
           */

          function parseUnionTypeExtension(lexer) {
            var start = lexer.token;
            expectKeyword(lexer, 'extend');
            expectKeyword(lexer, 'union');
            var name = parseName(lexer);
            var directives = parseDirectives(lexer, true);
            var types = parseUnionMemberTypes(lexer);

            if (directives.length === 0 && types.length === 0) {
              throw unexpected(lexer);
            }

            return {
              kind: _kinds.Kind.UNION_TYPE_EXTENSION,
              name: name,
              directives: directives,
              types: types,
              loc: loc(lexer, start),
            };
          }
          /**
           * EnumTypeExtension :
           *   - extend enum Name Directives[Const]? EnumValuesDefinition
           *   - extend enum Name Directives[Const]
           */

          function parseEnumTypeExtension(lexer) {
            var start = lexer.token;
            expectKeyword(lexer, 'extend');
            expectKeyword(lexer, 'enum');
            var name = parseName(lexer);
            var directives = parseDirectives(lexer, true);
            var values = parseEnumValuesDefinition(lexer);

            if (directives.length === 0 && values.length === 0) {
              throw unexpected(lexer);
            }

            return {
              kind: _kinds.Kind.ENUM_TYPE_EXTENSION,
              name: name,
              directives: directives,
              values: values,
              loc: loc(lexer, start),
            };
          }
          /**
           * InputObjectTypeExtension :
           *   - extend input Name Directives[Const]? InputFieldsDefinition
           *   - extend input Name Directives[Const]
           */

          function parseInputObjectTypeExtension(lexer) {
            var start = lexer.token;
            expectKeyword(lexer, 'extend');
            expectKeyword(lexer, 'input');
            var name = parseName(lexer);
            var directives = parseDirectives(lexer, true);
            var fields = parseInputFieldsDefinition(lexer);

            if (directives.length === 0 && fields.length === 0) {
              throw unexpected(lexer);
            }

            return {
              kind: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION,
              name: name,
              directives: directives,
              fields: fields,
              loc: loc(lexer, start),
            };
          }
          /**
           * DirectiveDefinition :
           *   - Description? directive @ Name ArgumentsDefinition? on DirectiveLocations
           */

          function parseDirectiveDefinition(lexer) {
            var start = lexer.token;
            var description = parseDescription(lexer);
            expectKeyword(lexer, 'directive');
            expect(lexer, _lexer.TokenKind.AT);
            var name = parseName(lexer);
            var args = parseArgumentDefs(lexer);
            expectKeyword(lexer, 'on');
            var locations = parseDirectiveLocations(lexer);
            return {
              kind: _kinds.Kind.DIRECTIVE_DEFINITION,
              description: description,
              name: name,
              arguments: args,
              locations: locations,
              loc: loc(lexer, start),
            };
          }
          /**
           * DirectiveLocations :
           *   - `|`? DirectiveLocation
           *   - DirectiveLocations | DirectiveLocation
           */

          function parseDirectiveLocations(lexer) {
            // Optional leading pipe
            skip(lexer, _lexer.TokenKind.PIPE);
            var locations = [];

            do {
              locations.push(parseDirectiveLocation(lexer));
            } while (skip(lexer, _lexer.TokenKind.PIPE));

            return locations;
          }
          /*
 * DirectiveLocation :
 *   - ExecutableDirectiveLocation
 *   - TypeSystemDirectiveLocation
 *
 * ExecutableDirectiveLocation : one of
 *   `QUERY`
 *   `MUTATION`
 *   `SUBSCRIPTION`
 *   `FIELD`
 *   `FRAGMENT_DEFINITION`
 *   `FRAGMENT_SPREAD`
 *   `INLINE_FRAGMENT`
 *
 * TypeSystemDirectiveLocation : one of
 *   `SCHEMA`
 *   `SCALAR`
 *   `OBJECT`
 *   `FIELD_DEFINITION`
 *   `ARGUMENT_DEFINITION`
 *   `INTERFACE`
 *   `UNION`
 *   `ENUM`
 *   `ENUM_VALUE`
 *   `INPUT_OBJECT`
 *   `INPUT_FIELD_DEFINITION`
 */

          function parseDirectiveLocation(lexer) {
            var start = lexer.token;
            var name = parseName(lexer);

            if (_directiveLocation.DirectiveLocation.hasOwnProperty(name.value)) {
              return name;
            }

            throw unexpected(lexer, start);
          } // Core parsing utility functions

          /**
           * Returns a location object, used to identify the place in
           * the source that created a given parsed object.
           */

          function loc(lexer, startToken) {
            if (!lexer.options.noLocation) {
              return new Loc(startToken, lexer.lastToken, lexer.source);
            }
          }

          function Loc(startToken, endToken, source) {
            this.start = startToken.start;
            this.end = endToken.end;
            this.startToken = startToken;
            this.endToken = endToken;
            this.source = source;
          } // Print a simplified form when appearing in JSON/util.inspect.

          Loc.prototype.toJSON = Loc.prototype.inspect = function toJSON() {
            return {
              start: this.start,
              end: this.end,
            };
          };
          /**
           * Determines if the next token is of a given kind
           */

          function peek(lexer, kind) {
            return lexer.token.kind === kind;
          }
          /**
           * If the next token is of the given kind, return true after advancing
           * the lexer. Otherwise, do not change the parser state and return false.
           */

          function skip(lexer, kind) {
            var match = lexer.token.kind === kind;

            if (match) {
              lexer.advance();
            }

            return match;
          }
          /**
           * If the next token is of the given kind, return that token after advancing
           * the lexer. Otherwise, do not change the parser state and throw an error.
           */

          function expect(lexer, kind) {
            var token = lexer.token;

            if (token.kind === kind) {
              lexer.advance();
              return token;
            }

            throw (0, _error.syntaxError)(
              lexer.source,
              token.start,
              'Expected '.concat(kind, ', found ').concat((0, _lexer.getTokenDesc)(token))
            );
          }
          /**
           * If the next token is a keyword with the given value, return that token after
           * advancing the lexer. Otherwise, do not change the parser state and return
           * false.
           */

          function expectKeyword(lexer, value) {
            var token = lexer.token;

            if (token.kind === _lexer.TokenKind.NAME && token.value === value) {
              lexer.advance();
              return token;
            }

            throw (0, _error.syntaxError)(
              lexer.source,
              token.start,
              'Expected "'
                .concat(value, '", found ')
                .concat((0, _lexer.getTokenDesc)(token))
            );
          }
          /**
           * Helper function for creating an error when an unexpected lexed token
           * is encountered.
           */

          function unexpected(lexer, atToken) {
            var token = atToken || lexer.token;
            return (0, _error.syntaxError)(
              lexer.source,
              token.start,
              'Unexpected '.concat((0, _lexer.getTokenDesc)(token))
            );
          }
          /**
           * Returns a possibly empty list of parse nodes, determined by
           * the parseFn. This list begins with a lex token of openKind
           * and ends with a lex token of closeKind. Advances the parser
           * to the next lex token after the closing token.
           */

          function any(lexer, openKind, parseFn, closeKind) {
            expect(lexer, openKind);
            var nodes = [];

            while (!skip(lexer, closeKind)) {
              nodes.push(parseFn(lexer));
            }

            return nodes;
          }
          /**
           * Returns a non-empty list of parse nodes, determined by
           * the parseFn. This list begins with a lex token of openKind
           * and ends with a lex token of closeKind. Advances the parser
           * to the next lex token after the closing token.
           */

          function many(lexer, openKind, parseFn, closeKind) {
            expect(lexer, openKind);
            var nodes = [parseFn(lexer)];

            while (!skip(lexer, closeKind)) {
              nodes.push(parseFn(lexer));
            }

            return nodes;
          }

          /***/
        },

      /***/ '../node_modules/graphql/language/source.js':
        /*!**************************************************!*\
  !*** ../node_modules/graphql/language/source.js ***!
  \**************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.Source = void 0;

          var _invariant = _interopRequireDefault(
            __webpack_require__(
              /*! ../jsutils/invariant */ '../node_modules/graphql/jsutils/invariant.js'
            )
          );

          var _defineToStringTag = _interopRequireDefault(
            __webpack_require__(
              /*! ../jsutils/defineToStringTag */ '../node_modules/graphql/jsutils/defineToStringTag.js'
            )
          );

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
          }

          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }

          /**
           * A representation of source input to GraphQL.
           * `name` and `locationOffset` are optional. They are useful for clients who
           * store GraphQL documents in source files; for example, if the GraphQL input
           * starts at line 40 in a file named Foo.graphql, it might be useful for name to
           * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
           * line and column in locationOffset are 1-indexed
           */
          var Source = function Source(body, name, locationOffset) {
            _defineProperty(this, 'body', void 0);

            _defineProperty(this, 'name', void 0);

            _defineProperty(this, 'locationOffset', void 0);

            this.body = body;
            this.name = name || 'GraphQL request';
            this.locationOffset = locationOffset || {
              line: 1,
              column: 1,
            };
            !(this.locationOffset.line > 0)
              ? (0, _invariant.default)(
                  0,
                  'line in locationOffset is 1-indexed and must be positive'
                )
              : void 0;
            !(this.locationOffset.column > 0)
              ? (0, _invariant.default)(
                  0,
                  'column in locationOffset is 1-indexed and must be positive'
                )
              : void 0;
          }; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

          exports.Source = Source;
          (0, _defineToStringTag.default)(Source);

          /***/
        },

      /***/ '../node_modules/history/es/DOMUtils.js':
        /*!**********************************************!*\
  !*** ../node_modules/history/es/DOMUtils.js ***!
  \**********************************************/
        /*! exports provided: canUseDOM, addEventListener, removeEventListener, getConfirmation, supportsHistory, supportsPopStateOnHashChange, supportsGoWithoutReloadUsingHash, isExtraneousPopstateEvent */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'canUseDOM',
            function() {
              return canUseDOM;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'addEventListener',
            function() {
              return addEventListener;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'removeEventListener',
            function() {
              return removeEventListener;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getConfirmation',
            function() {
              return getConfirmation;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'supportsHistory',
            function() {
              return supportsHistory;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'supportsPopStateOnHashChange',
            function() {
              return supportsPopStateOnHashChange;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'supportsGoWithoutReloadUsingHash',
            function() {
              return supportsGoWithoutReloadUsingHash;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isExtraneousPopstateEvent',
            function() {
              return isExtraneousPopstateEvent;
            }
          );
          var canUseDOM = !!(
            typeof window !== 'undefined' &&
            window.document &&
            window.document.createElement
          );

          var addEventListener = function addEventListener(node, event, listener) {
            return node.addEventListener
              ? node.addEventListener(event, listener, false)
              : node.attachEvent('on' + event, listener);
          };

          var removeEventListener = function removeEventListener(node, event, listener) {
            return node.removeEventListener
              ? node.removeEventListener(event, listener, false)
              : node.detachEvent('on' + event, listener);
          };

          var getConfirmation = function getConfirmation(message, callback) {
            return callback(window.confirm(message));
          }; // eslint-disable-line no-alert

          /**
           * Returns true if the HTML5 history API is supported. Taken from Modernizr.
           *
           * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
           * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
           * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
           */
          var supportsHistory = function supportsHistory() {
            var ua = window.navigator.userAgent;

            if (
              (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
              ua.indexOf('Mobile Safari') !== -1 &&
              ua.indexOf('Chrome') === -1 &&
              ua.indexOf('Windows Phone') === -1
            )
              return false;

            return window.history && 'pushState' in window.history;
          };

          /**
           * Returns true if browser fires popstate on hash change.
           * IE10 and IE11 do not.
           */
          var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
            return window.navigator.userAgent.indexOf('Trident') === -1;
          };

          /**
           * Returns false if using go(n) with hash history causes a full page reload.
           */
          var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
            return window.navigator.userAgent.indexOf('Firefox') === -1;
          };

          /**
           * Returns true if a given popstate event is an extraneous WebKit event.
           * Accounts for the fact that Chrome on iOS fires real popstate events
           * containing undefined state when pressing the back button.
           */
          var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
            return (
              event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1
            );
          };

          /***/
        },

      /***/ '../node_modules/history/es/LocationUtils.js':
        /*!***************************************************!*\
  !*** ../node_modules/history/es/LocationUtils.js ***!
  \***************************************************/
        /*! exports provided: createLocation, locationsAreEqual */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createLocation',
            function() {
              return createLocation;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'locationsAreEqual',
            function() {
              return locationsAreEqual;
            }
          );
          /* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! resolve-pathname */ '../node_modules/resolve-pathname/index.js'
          );
          /* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! value-equal */ '../node_modules/value-equal/index.js'
          );
          /* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./PathUtils */ '../node_modules/history/es/PathUtils.js'
          );
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };

          var createLocation = function createLocation(
            path,
            state,
            key,
            currentLocation
          ) {
            var location = void 0;
            if (typeof path === 'string') {
              // Two-arg form: push(path, state)
              location = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_2__['parsePath'])(
                path
              );
              location.state = state;
            } else {
              // One-arg form: push(location)
              location = _extends({}, path);

              if (location.pathname === undefined) location.pathname = '';

              if (location.search) {
                if (location.search.charAt(0) !== '?')
                  location.search = '?' + location.search;
              } else {
                location.search = '';
              }

              if (location.hash) {
                if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
              } else {
                location.hash = '';
              }

              if (state !== undefined && location.state === undefined)
                location.state = state;
            }

            try {
              location.pathname = decodeURI(location.pathname);
            } catch (e) {
              if (e instanceof URIError) {
                throw new URIError(
                  'Pathname "' +
                    location.pathname +
                    '" could not be decoded. ' +
                    'This is likely caused by an invalid percent-encoding.'
                );
              } else {
                throw e;
              }
            }

            if (key) location.key = key;

            if (currentLocation) {
              // Resolve incomplete/relative pathname relative to current location.
              if (!location.pathname) {
                location.pathname = currentLocation.pathname;
              } else if (location.pathname.charAt(0) !== '/') {
                location.pathname = Object(
                  resolve_pathname__WEBPACK_IMPORTED_MODULE_0__['default']
                )(location.pathname, currentLocation.pathname);
              }
            } else {
              // When there is no prior location and pathname is empty, set it to /
              if (!location.pathname) {
                location.pathname = '/';
              }
            }

            return location;
          };

          var locationsAreEqual = function locationsAreEqual(a, b) {
            return (
              a.pathname === b.pathname &&
              a.search === b.search &&
              a.hash === b.hash &&
              a.key === b.key &&
              Object(value_equal__WEBPACK_IMPORTED_MODULE_1__['default'])(
                a.state,
                b.state
              )
            );
          };

          /***/
        },

      /***/ '../node_modules/history/es/PathUtils.js':
        /*!***********************************************!*\
  !*** ../node_modules/history/es/PathUtils.js ***!
  \***********************************************/
        /*! exports provided: addLeadingSlash, stripLeadingSlash, hasBasename, stripBasename, stripTrailingSlash, parsePath, createPath */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'addLeadingSlash',
            function() {
              return addLeadingSlash;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'stripLeadingSlash',
            function() {
              return stripLeadingSlash;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'hasBasename',
            function() {
              return hasBasename;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'stripBasename',
            function() {
              return stripBasename;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'stripTrailingSlash',
            function() {
              return stripTrailingSlash;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'parsePath',
            function() {
              return parsePath;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createPath',
            function() {
              return createPath;
            }
          );
          var addLeadingSlash = function addLeadingSlash(path) {
            return path.charAt(0) === '/' ? path : '/' + path;
          };

          var stripLeadingSlash = function stripLeadingSlash(path) {
            return path.charAt(0) === '/' ? path.substr(1) : path;
          };

          var hasBasename = function hasBasename(path, prefix) {
            return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
          };

          var stripBasename = function stripBasename(path, prefix) {
            return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
          };

          var stripTrailingSlash = function stripTrailingSlash(path) {
            return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
          };

          var parsePath = function parsePath(path) {
            var pathname = path || '/';
            var search = '';
            var hash = '';

            var hashIndex = pathname.indexOf('#');
            if (hashIndex !== -1) {
              hash = pathname.substr(hashIndex);
              pathname = pathname.substr(0, hashIndex);
            }

            var searchIndex = pathname.indexOf('?');
            if (searchIndex !== -1) {
              search = pathname.substr(searchIndex);
              pathname = pathname.substr(0, searchIndex);
            }

            return {
              pathname: pathname,
              search: search === '?' ? '' : search,
              hash: hash === '#' ? '' : hash,
            };
          };

          var createPath = function createPath(location) {
            var pathname = location.pathname,
              search = location.search,
              hash = location.hash;

            var path = pathname || '/';

            if (search && search !== '?')
              path += search.charAt(0) === '?' ? search : '?' + search;

            if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

            return path;
          };

          /***/
        },

      /***/ '../node_modules/history/es/createBrowserHistory.js':
        /*!**********************************************************!*\
  !*** ../node_modules/history/es/createBrowserHistory.js ***!
  \**********************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! warning */ '../node_modules/history/node_modules/warning/browser.js'
          );
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            warning__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! invariant */ '../node_modules/invariant/browser.js'
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            invariant__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./LocationUtils */ '../node_modules/history/es/LocationUtils.js'
          );
          /* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./PathUtils */ '../node_modules/history/es/PathUtils.js'
          );
          /* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./createTransitionManager */ '../node_modules/history/es/createTransitionManager.js'
          );
          /* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./DOMUtils */ '../node_modules/history/es/DOMUtils.js'
          );
          var _typeof =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function(obj) {
                  return typeof obj;
                }
              : function(obj) {
                  return obj &&
                    typeof Symbol === 'function' &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                };

          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };

          var PopStateEvent = 'popstate';
          var HashChangeEvent = 'hashchange';

          var getHistoryState = function getHistoryState() {
            try {
              return window.history.state || {};
            } catch (e) {
              // IE 11 sometimes throws when accessing window.history.state
              // See https://github.com/ReactTraining/history/pull/289
              return {};
            }
          };

          /**
           * Creates a history object that uses the HTML5 history API including
           * pushState, replaceState, and the popstate event.
           */
          var createBrowserHistory = function createBrowserHistory() {
            var props =
              arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            invariant__WEBPACK_IMPORTED_MODULE_1___default()(
              _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['canUseDOM'],
              'Browser history needs a DOM'
            );

            var globalHistory = window.history;
            var canUseHistory = Object(
              _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['supportsHistory']
            )();
            var needsHashChangeListener = !Object(
              _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['supportsPopStateOnHashChange']
            )();

            var _props$forceRefresh = props.forceRefresh,
              forceRefresh =
                _props$forceRefresh === undefined ? false : _props$forceRefresh,
              _props$getUserConfirm = props.getUserConfirmation,
              getUserConfirmation =
                _props$getUserConfirm === undefined
                  ? _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['getConfirmation']
                  : _props$getUserConfirm,
              _props$keyLength = props.keyLength,
              keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

            var basename = props.basename
              ? Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['stripTrailingSlash'])(
                  Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['addLeadingSlash'])(
                    props.basename
                  )
                )
              : '';

            var getDOMLocation = function getDOMLocation(historyState) {
              var _ref = historyState || {},
                key = _ref.key,
                state = _ref.state;

              var _window$location = window.location,
                pathname = _window$location.pathname,
                search = _window$location.search,
                hash = _window$location.hash;

              var path = pathname + search + hash;

              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                !basename ||
                  Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['hasBasename'])(
                    path,
                    basename
                  ),
                'You are attempting to use a basename on a page whose URL path does not begin ' +
                  'with the basename. Expected path "' +
                  path +
                  '" to begin with "' +
                  basename +
                  '".'
              );

              if (basename)
                path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['stripBasename'])(
                  path,
                  basename
                );

              return Object(
                _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation']
              )(path, state, key);
            };

            var createKey = function createKey() {
              return Math.random()
                .toString(36)
                .substr(2, keyLength);
            };

            var transitionManager = Object(
              _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__['default']
            )();

            var setState = function setState(nextState) {
              _extends(history, nextState);

              history.length = globalHistory.length;

              transitionManager.notifyListeners(history.location, history.action);
            };

            var handlePopState = function handlePopState(event) {
              // Ignore extraneous popstate events in WebKit.
              if (
                Object(
                  _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['isExtraneousPopstateEvent']
                )(event)
              )
                return;

              handlePop(getDOMLocation(event.state));
            };

            var handleHashChange = function handleHashChange() {
              handlePop(getDOMLocation(getHistoryState()));
            };

            var forceNextPop = false;

            var handlePop = function handlePop(location) {
              if (forceNextPop) {
                forceNextPop = false;
                setState();
              } else {
                var action = 'POP';

                transitionManager.confirmTransitionTo(
                  location,
                  action,
                  getUserConfirmation,
                  function(ok) {
                    if (ok) {
                      setState({action: action, location: location});
                    } else {
                      revertPop(location);
                    }
                  }
                );
              }
            };

            var revertPop = function revertPop(fromLocation) {
              var toLocation = history.location;

              // TODO: We could probably make this more reliable by
              // keeping a list of keys we've seen in sessionStorage.
              // Instead, we just default to 0 for keys we don't know.

              var toIndex = allKeys.indexOf(toLocation.key);

              if (toIndex === -1) toIndex = 0;

              var fromIndex = allKeys.indexOf(fromLocation.key);

              if (fromIndex === -1) fromIndex = 0;

              var delta = toIndex - fromIndex;

              if (delta) {
                forceNextPop = true;
                go(delta);
              }
            };

            var initialLocation = getDOMLocation(getHistoryState());
            var allKeys = [initialLocation.key];

            // Public interface

            var createHref = function createHref(location) {
              return (
                basename +
                Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'])(location)
              );
            };

            var push = function push(path, state) {
              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                !(
                  (typeof path === 'undefined' ? 'undefined' : _typeof(path)) ===
                    'object' &&
                  path.state !== undefined &&
                  state !== undefined
                ),
                'You should avoid providing a 2nd state argument to push when the 1st ' +
                  'argument is a location-like object that already has state; it is ignored'
              );

              var action = 'PUSH';
              var location = Object(
                _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation']
              )(path, state, createKey(), history.location);

              transitionManager.confirmTransitionTo(
                location,
                action,
                getUserConfirmation,
                function(ok) {
                  if (!ok) return;

                  var href = createHref(location);
                  var key = location.key,
                    state = location.state;

                  if (canUseHistory) {
                    globalHistory.pushState({key: key, state: state}, null, href);

                    if (forceRefresh) {
                      window.location.href = href;
                    } else {
                      var prevIndex = allKeys.indexOf(history.location.key);
                      var nextKeys = allKeys.slice(
                        0,
                        prevIndex === -1 ? 0 : prevIndex + 1
                      );

                      nextKeys.push(location.key);
                      allKeys = nextKeys;

                      setState({action: action, location: location});
                    }
                  } else {
                    warning__WEBPACK_IMPORTED_MODULE_0___default()(
                      state === undefined,
                      'Browser history cannot push state in browsers that do not support HTML5 history'
                    );

                    window.location.href = href;
                  }
                }
              );
            };

            var replace = function replace(path, state) {
              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                !(
                  (typeof path === 'undefined' ? 'undefined' : _typeof(path)) ===
                    'object' &&
                  path.state !== undefined &&
                  state !== undefined
                ),
                'You should avoid providing a 2nd state argument to replace when the 1st ' +
                  'argument is a location-like object that already has state; it is ignored'
              );

              var action = 'REPLACE';
              var location = Object(
                _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation']
              )(path, state, createKey(), history.location);

              transitionManager.confirmTransitionTo(
                location,
                action,
                getUserConfirmation,
                function(ok) {
                  if (!ok) return;

                  var href = createHref(location);
                  var key = location.key,
                    state = location.state;

                  if (canUseHistory) {
                    globalHistory.replaceState({key: key, state: state}, null, href);

                    if (forceRefresh) {
                      window.location.replace(href);
                    } else {
                      var prevIndex = allKeys.indexOf(history.location.key);

                      if (prevIndex !== -1) allKeys[prevIndex] = location.key;

                      setState({action: action, location: location});
                    }
                  } else {
                    warning__WEBPACK_IMPORTED_MODULE_0___default()(
                      state === undefined,
                      'Browser history cannot replace state in browsers that do not support HTML5 history'
                    );

                    window.location.replace(href);
                  }
                }
              );
            };

            var go = function go(n) {
              globalHistory.go(n);
            };

            var goBack = function goBack() {
              return go(-1);
            };

            var goForward = function goForward() {
              return go(1);
            };

            var listenerCount = 0;

            var checkDOMListeners = function checkDOMListeners(delta) {
              listenerCount += delta;

              if (listenerCount === 1) {
                Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__['addEventListener'])(
                  window,
                  PopStateEvent,
                  handlePopState
                );

                if (needsHashChangeListener)
                  Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__['addEventListener'])(
                    window,
                    HashChangeEvent,
                    handleHashChange
                  );
              } else if (listenerCount === 0) {
                Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__['removeEventListener'])(
                  window,
                  PopStateEvent,
                  handlePopState
                );

                if (needsHashChangeListener)
                  Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__['removeEventListener'])(
                    window,
                    HashChangeEvent,
                    handleHashChange
                  );
              }
            };

            var isBlocked = false;

            var block = function block() {
              var prompt =
                arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

              var unblock = transitionManager.setPrompt(prompt);

              if (!isBlocked) {
                checkDOMListeners(1);
                isBlocked = true;
              }

              return function() {
                if (isBlocked) {
                  isBlocked = false;
                  checkDOMListeners(-1);
                }

                return unblock();
              };
            };

            var listen = function listen(listener) {
              var unlisten = transitionManager.appendListener(listener);
              checkDOMListeners(1);

              return function() {
                checkDOMListeners(-1);
                unlisten();
              };
            };

            var history = {
              length: globalHistory.length,
              action: 'POP',
              location: initialLocation,
              createHref: createHref,
              push: push,
              replace: replace,
              go: go,
              goBack: goBack,
              goForward: goForward,
              block: block,
              listen: listen,
            };

            return history;
          };

          /* harmony default export */ __webpack_exports__[
            'default'
          ] = createBrowserHistory;

          /***/
        },

      /***/ '../node_modules/history/es/createHashHistory.js':
        /*!*******************************************************!*\
  !*** ../node_modules/history/es/createHashHistory.js ***!
  \*******************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! warning */ '../node_modules/history/node_modules/warning/browser.js'
          );
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            warning__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! invariant */ '../node_modules/invariant/browser.js'
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            invariant__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./LocationUtils */ '../node_modules/history/es/LocationUtils.js'
          );
          /* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./PathUtils */ '../node_modules/history/es/PathUtils.js'
          );
          /* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./createTransitionManager */ '../node_modules/history/es/createTransitionManager.js'
          );
          /* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./DOMUtils */ '../node_modules/history/es/DOMUtils.js'
          );
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };

          var HashChangeEvent = 'hashchange';

          var HashPathCoders = {
            hashbang: {
              encodePath: function encodePath(path) {
                return path.charAt(0) === '!'
                  ? path
                  : '!/' +
                      Object(
                        _PathUtils__WEBPACK_IMPORTED_MODULE_3__['stripLeadingSlash']
                      )(path);
              },
              decodePath: function decodePath(path) {
                return path.charAt(0) === '!' ? path.substr(1) : path;
              },
            },
            noslash: {
              encodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__['stripLeadingSlash'],
              decodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__['addLeadingSlash'],
            },
            slash: {
              encodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__['addLeadingSlash'],
              decodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__['addLeadingSlash'],
            },
          };

          var getHashPath = function getHashPath() {
            // We can't use window.location.hash here because it's not
            // consistent across browsers - Firefox will pre-decode it!
            var href = window.location.href;
            var hashIndex = href.indexOf('#');
            return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
          };

          var pushHashPath = function pushHashPath(path) {
            return (window.location.hash = path);
          };

          var replaceHashPath = function replaceHashPath(path) {
            var hashIndex = window.location.href.indexOf('#');

            window.location.replace(
              window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path
            );
          };

          var createHashHistory = function createHashHistory() {
            var props =
              arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            invariant__WEBPACK_IMPORTED_MODULE_1___default()(
              _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['canUseDOM'],
              'Hash history needs a DOM'
            );

            var globalHistory = window.history;
            var canGoWithoutReload = Object(
              _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['supportsGoWithoutReloadUsingHash']
            )();

            var _props$getUserConfirm = props.getUserConfirmation,
              getUserConfirmation =
                _props$getUserConfirm === undefined
                  ? _DOMUtils__WEBPACK_IMPORTED_MODULE_5__['getConfirmation']
                  : _props$getUserConfirm,
              _props$hashType = props.hashType,
              hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

            var basename = props.basename
              ? Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['stripTrailingSlash'])(
                  Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['addLeadingSlash'])(
                    props.basename
                  )
                )
              : '';

            var _HashPathCoders$hashT = HashPathCoders[hashType],
              encodePath = _HashPathCoders$hashT.encodePath,
              decodePath = _HashPathCoders$hashT.decodePath;

            var getDOMLocation = function getDOMLocation() {
              var path = decodePath(getHashPath());

              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                !basename ||
                  Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['hasBasename'])(
                    path,
                    basename
                  ),
                'You are attempting to use a basename on a page whose URL path does not begin ' +
                  'with the basename. Expected path "' +
                  path +
                  '" to begin with "' +
                  basename +
                  '".'
              );

              if (basename)
                path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['stripBasename'])(
                  path,
                  basename
                );

              return Object(
                _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation']
              )(path);
            };

            var transitionManager = Object(
              _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__['default']
            )();

            var setState = function setState(nextState) {
              _extends(history, nextState);

              history.length = globalHistory.length;

              transitionManager.notifyListeners(history.location, history.action);
            };

            var forceNextPop = false;
            var ignorePath = null;

            var handleHashChange = function handleHashChange() {
              var path = getHashPath();
              var encodedPath = encodePath(path);

              if (path !== encodedPath) {
                // Ensure we always have a properly-encoded hash.
                replaceHashPath(encodedPath);
              } else {
                var location = getDOMLocation();
                var prevLocation = history.location;

                if (
                  !forceNextPop &&
                  Object(
                    _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['locationsAreEqual']
                  )(prevLocation, location)
                )
                  return; // A hashchange doesn't always == location change.

                if (
                  ignorePath ===
                  Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'])(location)
                )
                  return; // Ignore this change; we already setState in push/replace.

                ignorePath = null;

                handlePop(location);
              }
            };

            var handlePop = function handlePop(location) {
              if (forceNextPop) {
                forceNextPop = false;
                setState();
              } else {
                var action = 'POP';

                transitionManager.confirmTransitionTo(
                  location,
                  action,
                  getUserConfirmation,
                  function(ok) {
                    if (ok) {
                      setState({action: action, location: location});
                    } else {
                      revertPop(location);
                    }
                  }
                );
              }
            };

            var revertPop = function revertPop(fromLocation) {
              var toLocation = history.location;

              // TODO: We could probably make this more reliable by
              // keeping a list of paths we've seen in sessionStorage.
              // Instead, we just default to 0 for paths we don't know.

              var toIndex = allPaths.lastIndexOf(
                Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'])(toLocation)
              );

              if (toIndex === -1) toIndex = 0;

              var fromIndex = allPaths.lastIndexOf(
                Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'])(
                  fromLocation
                )
              );

              if (fromIndex === -1) fromIndex = 0;

              var delta = toIndex - fromIndex;

              if (delta) {
                forceNextPop = true;
                go(delta);
              }
            };

            // Ensure the hash is encoded properly before doing anything else.
            var path = getHashPath();
            var encodedPath = encodePath(path);

            if (path !== encodedPath) replaceHashPath(encodedPath);

            var initialLocation = getDOMLocation();
            var allPaths = [
              Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'])(
                initialLocation
              ),
            ];

            // Public interface

            var createHref = function createHref(location) {
              return (
                '#' +
                encodePath(
                  basename +
                    Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'])(
                      location
                    )
                )
              );
            };

            var push = function push(path, state) {
              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                state === undefined,
                'Hash history cannot push state; it is ignored'
              );

              var action = 'PUSH';
              var location = Object(
                _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation']
              )(path, undefined, undefined, history.location);

              transitionManager.confirmTransitionTo(
                location,
                action,
                getUserConfirmation,
                function(ok) {
                  if (!ok) return;

                  var path = Object(
                    _PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath']
                  )(location);
                  var encodedPath = encodePath(basename + path);
                  var hashChanged = getHashPath() !== encodedPath;

                  if (hashChanged) {
                    // We cannot tell if a hashchange was caused by a PUSH, so we'd
                    // rather setState here and ignore the hashchange. The caveat here
                    // is that other hash histories in the page will consider it a POP.
                    ignorePath = path;
                    pushHashPath(encodedPath);

                    var prevIndex = allPaths.lastIndexOf(
                      Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'])(
                        history.location
                      )
                    );
                    var nextPaths = allPaths.slice(
                      0,
                      prevIndex === -1 ? 0 : prevIndex + 1
                    );

                    nextPaths.push(path);
                    allPaths = nextPaths;

                    setState({action: action, location: location});
                  } else {
                    warning__WEBPACK_IMPORTED_MODULE_0___default()(
                      false,
                      'Hash history cannot PUSH the same path; a new entry will not be added to the history stack'
                    );

                    setState();
                  }
                }
              );
            };

            var replace = function replace(path, state) {
              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                state === undefined,
                'Hash history cannot replace state; it is ignored'
              );

              var action = 'REPLACE';
              var location = Object(
                _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation']
              )(path, undefined, undefined, history.location);

              transitionManager.confirmTransitionTo(
                location,
                action,
                getUserConfirmation,
                function(ok) {
                  if (!ok) return;

                  var path = Object(
                    _PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath']
                  )(location);
                  var encodedPath = encodePath(basename + path);
                  var hashChanged = getHashPath() !== encodedPath;

                  if (hashChanged) {
                    // We cannot tell if a hashchange was caused by a REPLACE, so we'd
                    // rather setState here and ignore the hashchange. The caveat here
                    // is that other hash histories in the page will consider it a POP.
                    ignorePath = path;
                    replaceHashPath(encodedPath);
                  }

                  var prevIndex = allPaths.indexOf(
                    Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__['createPath'])(
                      history.location
                    )
                  );

                  if (prevIndex !== -1) allPaths[prevIndex] = path;

                  setState({action: action, location: location});
                }
              );
            };

            var go = function go(n) {
              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                canGoWithoutReload,
                'Hash history go(n) causes a full page reload in this browser'
              );

              globalHistory.go(n);
            };

            var goBack = function goBack() {
              return go(-1);
            };

            var goForward = function goForward() {
              return go(1);
            };

            var listenerCount = 0;

            var checkDOMListeners = function checkDOMListeners(delta) {
              listenerCount += delta;

              if (listenerCount === 1) {
                Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__['addEventListener'])(
                  window,
                  HashChangeEvent,
                  handleHashChange
                );
              } else if (listenerCount === 0) {
                Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__['removeEventListener'])(
                  window,
                  HashChangeEvent,
                  handleHashChange
                );
              }
            };

            var isBlocked = false;

            var block = function block() {
              var prompt =
                arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

              var unblock = transitionManager.setPrompt(prompt);

              if (!isBlocked) {
                checkDOMListeners(1);
                isBlocked = true;
              }

              return function() {
                if (isBlocked) {
                  isBlocked = false;
                  checkDOMListeners(-1);
                }

                return unblock();
              };
            };

            var listen = function listen(listener) {
              var unlisten = transitionManager.appendListener(listener);
              checkDOMListeners(1);

              return function() {
                checkDOMListeners(-1);
                unlisten();
              };
            };

            var history = {
              length: globalHistory.length,
              action: 'POP',
              location: initialLocation,
              createHref: createHref,
              push: push,
              replace: replace,
              go: go,
              goBack: goBack,
              goForward: goForward,
              block: block,
              listen: listen,
            };

            return history;
          };

          /* harmony default export */ __webpack_exports__['default'] = createHashHistory;

          /***/
        },

      /***/ '../node_modules/history/es/createMemoryHistory.js':
        /*!*********************************************************!*\
  !*** ../node_modules/history/es/createMemoryHistory.js ***!
  \*********************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! warning */ '../node_modules/history/node_modules/warning/browser.js'
          );
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            warning__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./PathUtils */ '../node_modules/history/es/PathUtils.js'
          );
          /* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./LocationUtils */ '../node_modules/history/es/LocationUtils.js'
          );
          /* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./createTransitionManager */ '../node_modules/history/es/createTransitionManager.js'
          );
          var _typeof =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function(obj) {
                  return typeof obj;
                }
              : function(obj) {
                  return obj &&
                    typeof Symbol === 'function' &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                };

          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };

          var clamp = function clamp(n, lowerBound, upperBound) {
            return Math.min(Math.max(n, lowerBound), upperBound);
          };

          /**
           * Creates a history object that stores locations in memory.
           */
          var createMemoryHistory = function createMemoryHistory() {
            var props =
              arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var getUserConfirmation = props.getUserConfirmation,
              _props$initialEntries = props.initialEntries,
              initialEntries =
                _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
              _props$initialIndex = props.initialIndex,
              initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
              _props$keyLength = props.keyLength,
              keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

            var transitionManager = Object(
              _createTransitionManager__WEBPACK_IMPORTED_MODULE_3__['default']
            )();

            var setState = function setState(nextState) {
              _extends(history, nextState);

              history.length = history.entries.length;

              transitionManager.notifyListeners(history.location, history.action);
            };

            var createKey = function createKey() {
              return Math.random()
                .toString(36)
                .substr(2, keyLength);
            };

            var index = clamp(initialIndex, 0, initialEntries.length - 1);
            var entries = initialEntries.map(function(entry) {
              return typeof entry === 'string'
                ? Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation'])(
                    entry,
                    undefined,
                    createKey()
                  )
                : Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation'])(
                    entry,
                    undefined,
                    entry.key || createKey()
                  );
            });

            // Public interface

            var createHref = _PathUtils__WEBPACK_IMPORTED_MODULE_1__['createPath'];

            var push = function push(path, state) {
              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                !(
                  (typeof path === 'undefined' ? 'undefined' : _typeof(path)) ===
                    'object' &&
                  path.state !== undefined &&
                  state !== undefined
                ),
                'You should avoid providing a 2nd state argument to push when the 1st ' +
                  'argument is a location-like object that already has state; it is ignored'
              );

              var action = 'PUSH';
              var location = Object(
                _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation']
              )(path, state, createKey(), history.location);

              transitionManager.confirmTransitionTo(
                location,
                action,
                getUserConfirmation,
                function(ok) {
                  if (!ok) return;

                  var prevIndex = history.index;
                  var nextIndex = prevIndex + 1;

                  var nextEntries = history.entries.slice(0);
                  if (nextEntries.length > nextIndex) {
                    nextEntries.splice(
                      nextIndex,
                      nextEntries.length - nextIndex,
                      location
                    );
                  } else {
                    nextEntries.push(location);
                  }

                  setState({
                    action: action,
                    location: location,
                    index: nextIndex,
                    entries: nextEntries,
                  });
                }
              );
            };

            var replace = function replace(path, state) {
              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                !(
                  (typeof path === 'undefined' ? 'undefined' : _typeof(path)) ===
                    'object' &&
                  path.state !== undefined &&
                  state !== undefined
                ),
                'You should avoid providing a 2nd state argument to replace when the 1st ' +
                  'argument is a location-like object that already has state; it is ignored'
              );

              var action = 'REPLACE';
              var location = Object(
                _LocationUtils__WEBPACK_IMPORTED_MODULE_2__['createLocation']
              )(path, state, createKey(), history.location);

              transitionManager.confirmTransitionTo(
                location,
                action,
                getUserConfirmation,
                function(ok) {
                  if (!ok) return;

                  history.entries[history.index] = location;

                  setState({action: action, location: location});
                }
              );
            };

            var go = function go(n) {
              var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

              var action = 'POP';
              var location = history.entries[nextIndex];

              transitionManager.confirmTransitionTo(
                location,
                action,
                getUserConfirmation,
                function(ok) {
                  if (ok) {
                    setState({
                      action: action,
                      location: location,
                      index: nextIndex,
                    });
                  } else {
                    // Mimic the behavior of DOM histories by
                    // causing a render after a cancelled POP.
                    setState();
                  }
                }
              );
            };

            var goBack = function goBack() {
              return go(-1);
            };

            var goForward = function goForward() {
              return go(1);
            };

            var canGo = function canGo(n) {
              var nextIndex = history.index + n;
              return nextIndex >= 0 && nextIndex < history.entries.length;
            };

            var block = function block() {
              var prompt =
                arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
              return transitionManager.setPrompt(prompt);
            };

            var listen = function listen(listener) {
              return transitionManager.appendListener(listener);
            };

            var history = {
              length: entries.length,
              action: 'POP',
              location: entries[index],
              index: index,
              entries: entries,
              createHref: createHref,
              push: push,
              replace: replace,
              go: go,
              goBack: goBack,
              goForward: goForward,
              canGo: canGo,
              block: block,
              listen: listen,
            };

            return history;
          };

          /* harmony default export */ __webpack_exports__[
            'default'
          ] = createMemoryHistory;

          /***/
        },

      /***/ '../node_modules/history/es/createTransitionManager.js':
        /*!*************************************************************!*\
  !*** ../node_modules/history/es/createTransitionManager.js ***!
  \*************************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! warning */ '../node_modules/history/node_modules/warning/browser.js'
          );
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            warning__WEBPACK_IMPORTED_MODULE_0__
          );

          var createTransitionManager = function createTransitionManager() {
            var prompt = null;

            var setPrompt = function setPrompt(nextPrompt) {
              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                prompt == null,
                'A history supports only one prompt at a time'
              );

              prompt = nextPrompt;

              return function() {
                if (prompt === nextPrompt) prompt = null;
              };
            };

            var confirmTransitionTo = function confirmTransitionTo(
              location,
              action,
              getUserConfirmation,
              callback
            ) {
              // TODO: If another transition starts while we're still confirming
              // the previous one, we may end up in a weird state. Figure out the
              // best way to handle this.
              if (prompt != null) {
                var result =
                  typeof prompt === 'function' ? prompt(location, action) : prompt;

                if (typeof result === 'string') {
                  if (typeof getUserConfirmation === 'function') {
                    getUserConfirmation(result, callback);
                  } else {
                    warning__WEBPACK_IMPORTED_MODULE_0___default()(
                      false,
                      'A history needs a getUserConfirmation function in order to use a prompt message'
                    );

                    callback(true);
                  }
                } else {
                  // Return false from a transition hook to cancel the transition.
                  callback(result !== false);
                }
              } else {
                callback(true);
              }
            };

            var listeners = [];

            var appendListener = function appendListener(fn) {
              var isActive = true;

              var listener = function listener() {
                if (isActive) fn.apply(undefined, arguments);
              };

              listeners.push(listener);

              return function() {
                isActive = false;
                listeners = listeners.filter(function(item) {
                  return item !== listener;
                });
              };
            };

            var notifyListeners = function notifyListeners() {
              for (
                var _len = arguments.length, args = Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              listeners.forEach(function(listener) {
                return listener.apply(undefined, args);
              });
            };

            return {
              setPrompt: setPrompt,
              confirmTransitionTo: confirmTransitionTo,
              appendListener: appendListener,
              notifyListeners: notifyListeners,
            };
          };

          /* harmony default export */ __webpack_exports__[
            'default'
          ] = createTransitionManager;

          /***/
        },

      /***/ '../node_modules/history/es/index.js':
        /*!*******************************************!*\
  !*** ../node_modules/history/es/index.js ***!
  \*******************************************/
        /*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./createBrowserHistory */ '../node_modules/history/es/createBrowserHistory.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'createBrowserHistory',
            function() {
              return _createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__['default'];
            }
          );

          /* harmony import */ var _createHashHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./createHashHistory */ '../node_modules/history/es/createHashHistory.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'createHashHistory',
            function() {
              return _createHashHistory__WEBPACK_IMPORTED_MODULE_1__['default'];
            }
          );

          /* harmony import */ var _createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./createMemoryHistory */ '../node_modules/history/es/createMemoryHistory.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'createMemoryHistory',
            function() {
              return _createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__['default'];
            }
          );

          /* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./LocationUtils */ '../node_modules/history/es/LocationUtils.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'createLocation',
            function() {
              return _LocationUtils__WEBPACK_IMPORTED_MODULE_3__['createLocation'];
            }
          );

          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'locationsAreEqual',
            function() {
              return _LocationUtils__WEBPACK_IMPORTED_MODULE_3__['locationsAreEqual'];
            }
          );

          /* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./PathUtils */ '../node_modules/history/es/PathUtils.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'parsePath',
            function() {
              return _PathUtils__WEBPACK_IMPORTED_MODULE_4__['parsePath'];
            }
          );

          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'createPath',
            function() {
              return _PathUtils__WEBPACK_IMPORTED_MODULE_4__['createPath'];
            }
          );

          /***/
        },

      /***/ '../node_modules/history/node_modules/warning/browser.js':
        /*!***************************************************************!*\
  !*** ../node_modules/history/node_modules/warning/browser.js ***!
  \***************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          /**
           * Copyright 2014-2015, Facebook, Inc.
           * All rights reserved.
           *
           * This source code is licensed under the BSD-style license found in the
           * LICENSE file in the root directory of this source tree. An additional grant
           * of patent rights can be found in the PATENTS file in the same directory.
           */

          /**
           * Similar to invariant but only logs a warning if the condition is not met.
           * This can be used to log issues in development environments in critical
           * paths. Removing the logging code for production environments will keep the
           * same logic and follow the same code paths.
           */

          var warning = function() {};

          if (true) {
            warning = function(condition, format, args) {
              var len = arguments.length;
              args = new Array(len > 2 ? len - 2 : 0);
              for (var key = 2; key < len; key++) {
                args[key - 2] = arguments[key];
              }
              if (format === undefined) {
                throw new Error(
                  '`warning(condition, format, ...args)` requires a warning ' +
                    'message argument'
                );
              }

              if (format.length < 10 || /^[s\W]*$/.test(format)) {
                throw new Error(
                  'The warning format should be able to uniquely identify this ' +
                    'warning. Please, use a more descriptive format than: ' +
                    format
                );
              }

              if (!condition) {
                var argIndex = 0;
                var message =
                  'Warning: ' +
                  format.replace(/%s/g, function() {
                    return args[argIndex++];
                  });
                if (typeof console !== 'undefined') {
                  console.error(message);
                }
                try {
                  // This error was thrown as a convenience so that you can use this stack
                  // to find the callsite that caused this warning to fire.
                  throw new Error(message);
                } catch (x) {}
              }
            };
          }

          module.exports = warning;

          /***/
        },

      /***/ '../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js':
        /*!***********************************************************************************!*\
  !*** ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \***********************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          /**
           * Copyright 2015, Yahoo! Inc.
           * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
           */
          var REACT_STATICS = {
            childContextTypes: true,
            contextTypes: true,
            defaultProps: true,
            displayName: true,
            getDefaultProps: true,
            getDerivedStateFromProps: true,
            mixins: true,
            propTypes: true,
            type: true,
          };

          var KNOWN_STATICS = {
            name: true,
            length: true,
            prototype: true,
            caller: true,
            callee: true,
            arguments: true,
            arity: true,
          };

          var defineProperty = Object.defineProperty;
          var getOwnPropertyNames = Object.getOwnPropertyNames;
          var getOwnPropertySymbols = Object.getOwnPropertySymbols;
          var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
          var getPrototypeOf = Object.getPrototypeOf;
          var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

          function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
            if (typeof sourceComponent !== 'string') {
              // don't hoist over string (html) components

              if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent);
                if (inheritedComponent && inheritedComponent !== objectPrototype) {
                  hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                }
              }

              var keys = getOwnPropertyNames(sourceComponent);

              if (getOwnPropertySymbols) {
                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
              }

              for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (
                  !REACT_STATICS[key] &&
                  !KNOWN_STATICS[key] &&
                  (!blacklist || !blacklist[key])
                ) {
                  var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                  try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                  } catch (e) {}
                }
              }

              return targetComponent;
            }

            return targetComponent;
          }

          module.exports = hoistNonReactStatics;

          /***/
        },

      /***/ '../node_modules/invariant/browser.js':
        /*!********************************************!*\
  !*** ../node_modules/invariant/browser.js ***!
  \********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          /**
           * Use invariant() to assert state which your program assumes to be true.
           *
           * Provide sprintf-style format (only %s is supported) and arguments
           * to provide information about what broke and what you were
           * expecting.
           *
           * The invariant message will be stripped in production, but the invariant
           * will remain to ensure logic does not differ in production.
           */

          var invariant = function(condition, format, a, b, c, d, e, f) {
            if (true) {
              if (format === undefined) {
                throw new Error('invariant requires an error message argument');
              }
            }

            if (!condition) {
              var error;
              if (format === undefined) {
                error = new Error(
                  'Minified exception occurred; use the non-minified dev environment ' +
                    'for the full error message and additional helpful warnings.'
                );
              } else {
                var args = [a, b, c, d, e, f];
                var argIndex = 0;
                error = new Error(
                  format.replace(/%s/g, function() {
                    return args[argIndex++];
                  })
                );
                error.name = 'Invariant Violation';
              }

              error.framesToPop = 1; // we don't care about invariant's own frame
              throw error;
            }
          };

          module.exports = invariant;

          /***/
        },

      /***/ '../node_modules/lodash-es/_Symbol.js':
        /*!********************************************!*\
  !*** ../node_modules/lodash-es/_Symbol.js ***!
  \********************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./_root.js */ '../node_modules/lodash-es/_root.js'
          );

          /** Built-in value references. */
          var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__['default'].Symbol;

          /* harmony default export */ __webpack_exports__['default'] = Symbol;

          /***/
        },

      /***/ '../node_modules/lodash-es/_baseGetTag.js':
        /*!************************************************!*\
  !*** ../node_modules/lodash-es/_baseGetTag.js ***!
  \************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./_Symbol.js */ '../node_modules/lodash-es/_Symbol.js'
          );
          /* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./_getRawTag.js */ '../node_modules/lodash-es/_getRawTag.js'
          );
          /* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./_objectToString.js */ '../node_modules/lodash-es/_objectToString.js'
          );

          /** `Object#toString` result references. */
          var nullTag = '[object Null]',
            undefinedTag = '[object Undefined]';

          /** Built-in value references. */
          var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__['default']
            ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__['default'].toStringTag
            : undefined;

          /**
           * The base implementation of `getTag` without fallbacks for buggy environments.
           *
           * @private
           * @param {*} value The value to query.
           * @returns {string} Returns the `toStringTag`.
           */
          function baseGetTag(value) {
            if (value == null) {
              return value === undefined ? undefinedTag : nullTag;
            }
            return symToStringTag && symToStringTag in Object(value)
              ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__['default'])(value)
              : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__['default'])(value);
          }

          /* harmony default export */ __webpack_exports__['default'] = baseGetTag;

          /***/
        },

      /***/ '../node_modules/lodash-es/_freeGlobal.js':
        /*!************************************************!*\
  !*** ../node_modules/lodash-es/_freeGlobal.js ***!
  \************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* WEBPACK VAR INJECTION */ (function(global) {
            /** Detect free variable `global` from Node.js. */
            var freeGlobal =
              typeof global == 'object' && global && global.Object === Object && global;

            /* harmony default export */ __webpack_exports__['default'] = freeGlobal;

            /* WEBPACK VAR INJECTION */
          }.call(
            this,
            __webpack_require__(
              /*! ./../webpack/buildin/global.js */ '../node_modules/webpack/buildin/global.js'
            )
          ));

          /***/
        },

      /***/ '../node_modules/lodash-es/_getPrototype.js':
        /*!**************************************************!*\
  !*** ../node_modules/lodash-es/_getPrototype.js ***!
  \**************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./_overArg.js */ '../node_modules/lodash-es/_overArg.js'
          );

          /** Built-in value references. */
          var getPrototype = Object(_overArg_js__WEBPACK_IMPORTED_MODULE_0__['default'])(
            Object.getPrototypeOf,
            Object
          );

          /* harmony default export */ __webpack_exports__['default'] = getPrototype;

          /***/
        },

      /***/ '../node_modules/lodash-es/_getRawTag.js':
        /*!***********************************************!*\
  !*** ../node_modules/lodash-es/_getRawTag.js ***!
  \***********************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./_Symbol.js */ '../node_modules/lodash-es/_Symbol.js'
          );

          /** Used for built-in method references. */
          var objectProto = Object.prototype;

          /** Used to check objects for own properties. */
          var hasOwnProperty = objectProto.hasOwnProperty;

          /**
           * Used to resolve the
           * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
           * of values.
           */
          var nativeObjectToString = objectProto.toString;

          /** Built-in value references. */
          var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__['default']
            ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__['default'].toStringTag
            : undefined;

          /**
           * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
           *
           * @private
           * @param {*} value The value to query.
           * @returns {string} Returns the raw `toStringTag`.
           */
          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag),
              tag = value[symToStringTag];

            try {
              value[symToStringTag] = undefined;
              var unmasked = true;
            } catch (e) {}

            var result = nativeObjectToString.call(value);
            if (unmasked) {
              if (isOwn) {
                value[symToStringTag] = tag;
              } else {
                delete value[symToStringTag];
              }
            }
            return result;
          }

          /* harmony default export */ __webpack_exports__['default'] = getRawTag;

          /***/
        },

      /***/ '../node_modules/lodash-es/_objectToString.js':
        /*!****************************************************!*\
  !*** ../node_modules/lodash-es/_objectToString.js ***!
  \****************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /** Used for built-in method references. */
          var objectProto = Object.prototype;

          /**
           * Used to resolve the
           * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
           * of values.
           */
          var nativeObjectToString = objectProto.toString;

          /**
           * Converts `value` to a string using `Object.prototype.toString`.
           *
           * @private
           * @param {*} value The value to convert.
           * @returns {string} Returns the converted string.
           */
          function objectToString(value) {
            return nativeObjectToString.call(value);
          }

          /* harmony default export */ __webpack_exports__['default'] = objectToString;

          /***/
        },

      /***/ '../node_modules/lodash-es/_overArg.js':
        /*!*********************************************!*\
  !*** ../node_modules/lodash-es/_overArg.js ***!
  \*********************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /**
           * Creates a unary function that invokes `func` with its argument transformed.
           *
           * @private
           * @param {Function} func The function to wrap.
           * @param {Function} transform The argument transform.
           * @returns {Function} Returns the new function.
           */
          function overArg(func, transform) {
            return function(arg) {
              return func(transform(arg));
            };
          }

          /* harmony default export */ __webpack_exports__['default'] = overArg;

          /***/
        },

      /***/ '../node_modules/lodash-es/_root.js':
        /*!******************************************!*\
  !*** ../node_modules/lodash-es/_root.js ***!
  \******************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./_freeGlobal.js */ '../node_modules/lodash-es/_freeGlobal.js'
          );

          /** Detect free variable `self`. */
          var freeSelf =
            typeof self == 'object' && self && self.Object === Object && self;

          /** Used as a reference to the global object. */
          var root =
            _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__['default'] ||
            freeSelf ||
            Function('return this')();

          /* harmony default export */ __webpack_exports__['default'] = root;

          /***/
        },

      /***/ '../node_modules/lodash-es/isObjectLike.js':
        /*!*************************************************!*\
  !*** ../node_modules/lodash-es/isObjectLike.js ***!
  \*************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /**
           * Checks if `value` is object-like. A value is object-like if it's not `null`
           * and has a `typeof` result of "object".
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
           * @example
           *
           * _.isObjectLike({});
           * // => true
           *
           * _.isObjectLike([1, 2, 3]);
           * // => true
           *
           * _.isObjectLike(_.noop);
           * // => false
           *
           * _.isObjectLike(null);
           * // => false
           */
          function isObjectLike(value) {
            return value != null && typeof value == 'object';
          }

          /* harmony default export */ __webpack_exports__['default'] = isObjectLike;

          /***/
        },

      /***/ '../node_modules/lodash-es/isPlainObject.js':
        /*!**************************************************!*\
  !*** ../node_modules/lodash-es/isPlainObject.js ***!
  \**************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./_baseGetTag.js */ '../node_modules/lodash-es/_baseGetTag.js'
          );
          /* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./_getPrototype.js */ '../node_modules/lodash-es/_getPrototype.js'
          );
          /* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./isObjectLike.js */ '../node_modules/lodash-es/isObjectLike.js'
          );

          /** `Object#toString` result references. */
          var objectTag = '[object Object]';

          /** Used for built-in method references. */
          var funcProto = Function.prototype,
            objectProto = Object.prototype;

          /** Used to resolve the decompiled source of functions. */
          var funcToString = funcProto.toString;

          /** Used to check objects for own properties. */
          var hasOwnProperty = objectProto.hasOwnProperty;

          /** Used to infer the `Object` constructor. */
          var objectCtorString = funcToString.call(Object);

          /**
           * Checks if `value` is a plain object, that is, an object created by the
           * `Object` constructor or one with a `[[Prototype]]` of `null`.
           *
           * @static
           * @memberOf _
           * @since 0.8.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
           * @example
           *
           * function Foo() {
           *   this.a = 1;
           * }
           *
           * _.isPlainObject(new Foo);
           * // => false
           *
           * _.isPlainObject([1, 2, 3]);
           * // => false
           *
           * _.isPlainObject({ 'x': 0, 'y': 0 });
           * // => true
           *
           * _.isPlainObject(Object.create(null));
           * // => true
           */
          function isPlainObject(value) {
            if (
              !Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__['default'])(value) ||
              Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__['default'])(value) !=
                objectTag
            ) {
              return false;
            }
            var proto = Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__['default'])(
              value
            );
            if (proto === null) {
              return true;
            }
            var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
            return (
              typeof Ctor == 'function' &&
              Ctor instanceof Ctor &&
              funcToString.call(Ctor) == objectCtorString
            );
          }

          /* harmony default export */ __webpack_exports__['default'] = isPlainObject;

          /***/
        },

      /***/ '../node_modules/lodash.pick/index.js':
        /*!********************************************!*\
  !*** ../node_modules/lodash.pick/index.js ***!
  \********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          /* WEBPACK VAR INJECTION */ (function(global) {
            /**
             * lodash (Custom Build) <https://lodash.com/>
             * Build: `lodash modularize exports="npm" -o ./`
             * Copyright jQuery Foundation and other contributors <https://jquery.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             */

            /** Used as references for various `Number` constants. */
            var INFINITY = 1 / 0,
              MAX_SAFE_INTEGER = 9007199254740991;

            /** `Object#toString` result references. */
            var argsTag = '[object Arguments]',
              funcTag = '[object Function]',
              genTag = '[object GeneratorFunction]',
              symbolTag = '[object Symbol]';

            /** Detect free variable `global` from Node.js. */
            var freeGlobal =
              typeof global == 'object' && global && global.Object === Object && global;

            /** Detect free variable `self`. */
            var freeSelf =
              typeof self == 'object' && self && self.Object === Object && self;

            /** Used as a reference to the global object. */
            var root = freeGlobal || freeSelf || Function('return this')();

            /**
             * A faster alternative to `Function#apply`, this function invokes `func`
             * with the `this` binding of `thisArg` and the arguments of `args`.
             *
             * @private
             * @param {Function} func The function to invoke.
             * @param {*} thisArg The `this` binding of `func`.
             * @param {Array} args The arguments to invoke `func` with.
             * @returns {*} Returns the result of `func`.
             */
            function apply(func, thisArg, args) {
              switch (args.length) {
                case 0:
                  return func.call(thisArg);
                case 1:
                  return func.call(thisArg, args[0]);
                case 2:
                  return func.call(thisArg, args[0], args[1]);
                case 3:
                  return func.call(thisArg, args[0], args[1], args[2]);
              }
              return func.apply(thisArg, args);
            }

            /**
             * A specialized version of `_.map` for arrays without support for iteratee
             * shorthands.
             *
             * @private
             * @param {Array} [array] The array to iterate over.
             * @param {Function} iteratee The function invoked per iteration.
             * @returns {Array} Returns the new mapped array.
             */
            function arrayMap(array, iteratee) {
              var index = -1,
                length = array ? array.length : 0,
                result = Array(length);

              while (++index < length) {
                result[index] = iteratee(array[index], index, array);
              }
              return result;
            }

            /**
             * Appends the elements of `values` to `array`.
             *
             * @private
             * @param {Array} array The array to modify.
             * @param {Array} values The values to append.
             * @returns {Array} Returns `array`.
             */
            function arrayPush(array, values) {
              var index = -1,
                length = values.length,
                offset = array.length;

              while (++index < length) {
                array[offset + index] = values[index];
              }
              return array;
            }

            /** Used for built-in method references. */
            var objectProto = Object.prototype;

            /** Used to check objects for own properties. */
            var hasOwnProperty = objectProto.hasOwnProperty;

            /**
             * Used to resolve the
             * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
             * of values.
             */
            var objectToString = objectProto.toString;

            /** Built-in value references. */
            var Symbol = root.Symbol,
              propertyIsEnumerable = objectProto.propertyIsEnumerable,
              spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

            /* Built-in method references for those with the same name as other `lodash` methods. */
            var nativeMax = Math.max;

            /**
             * The base implementation of `_.flatten` with support for restricting flattening.
             *
             * @private
             * @param {Array} array The array to flatten.
             * @param {number} depth The maximum recursion depth.
             * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
             * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
             * @param {Array} [result=[]] The initial result value.
             * @returns {Array} Returns the new flattened array.
             */
            function baseFlatten(array, depth, predicate, isStrict, result) {
              var index = -1,
                length = array.length;

              predicate || (predicate = isFlattenable);
              result || (result = []);

              while (++index < length) {
                var value = array[index];
                if (depth > 0 && predicate(value)) {
                  if (depth > 1) {
                    // Recursively flatten arrays (susceptible to call stack limits).
                    baseFlatten(value, depth - 1, predicate, isStrict, result);
                  } else {
                    arrayPush(result, value);
                  }
                } else if (!isStrict) {
                  result[result.length] = value;
                }
              }
              return result;
            }

            /**
             * The base implementation of `_.pick` without support for individual
             * property identifiers.
             *
             * @private
             * @param {Object} object The source object.
             * @param {string[]} props The property identifiers to pick.
             * @returns {Object} Returns the new object.
             */
            function basePick(object, props) {
              object = Object(object);
              return basePickBy(object, props, function(value, key) {
                return key in object;
              });
            }

            /**
             * The base implementation of  `_.pickBy` without support for iteratee shorthands.
             *
             * @private
             * @param {Object} object The source object.
             * @param {string[]} props The property identifiers to pick from.
             * @param {Function} predicate The function invoked per property.
             * @returns {Object} Returns the new object.
             */
            function basePickBy(object, props, predicate) {
              var index = -1,
                length = props.length,
                result = {};

              while (++index < length) {
                var key = props[index],
                  value = object[key];

                if (predicate(value, key)) {
                  result[key] = value;
                }
              }
              return result;
            }

            /**
             * The base implementation of `_.rest` which doesn't validate or coerce arguments.
             *
             * @private
             * @param {Function} func The function to apply a rest parameter to.
             * @param {number} [start=func.length-1] The start position of the rest parameter.
             * @returns {Function} Returns the new function.
             */
            function baseRest(func, start) {
              start = nativeMax(start === undefined ? func.length - 1 : start, 0);
              return function() {
                var args = arguments,
                  index = -1,
                  length = nativeMax(args.length - start, 0),
                  array = Array(length);

                while (++index < length) {
                  array[index] = args[start + index];
                }
                index = -1;
                var otherArgs = Array(start + 1);
                while (++index < start) {
                  otherArgs[index] = args[index];
                }
                otherArgs[start] = array;
                return apply(func, this, otherArgs);
              };
            }

            /**
             * Checks if `value` is a flattenable `arguments` object or array.
             *
             * @private
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
             */
            function isFlattenable(value) {
              return (
                isArray(value) ||
                isArguments(value) ||
                !!(spreadableSymbol && value && value[spreadableSymbol])
              );
            }

            /**
             * Converts `value` to a string key if it's not a string or symbol.
             *
             * @private
             * @param {*} value The value to inspect.
             * @returns {string|symbol} Returns the key.
             */
            function toKey(value) {
              if (typeof value == 'string' || isSymbol(value)) {
                return value;
              }
              var result = value + '';
              return result == '0' && 1 / value == -INFINITY ? '-0' : result;
            }

            /**
             * Checks if `value` is likely an `arguments` object.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an `arguments` object,
             *  else `false`.
             * @example
             *
             * _.isArguments(function() { return arguments; }());
             * // => true
             *
             * _.isArguments([1, 2, 3]);
             * // => false
             */
            function isArguments(value) {
              // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
              return (
                isArrayLikeObject(value) &&
                hasOwnProperty.call(value, 'callee') &&
                (!propertyIsEnumerable.call(value, 'callee') ||
                  objectToString.call(value) == argsTag)
              );
            }

            /**
             * Checks if `value` is classified as an `Array` object.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an array, else `false`.
             * @example
             *
             * _.isArray([1, 2, 3]);
             * // => true
             *
             * _.isArray(document.body.children);
             * // => false
             *
             * _.isArray('abc');
             * // => false
             *
             * _.isArray(_.noop);
             * // => false
             */
            var isArray = Array.isArray;

            /**
             * Checks if `value` is array-like. A value is considered array-like if it's
             * not a function and has a `value.length` that's an integer greater than or
             * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
             * @example
             *
             * _.isArrayLike([1, 2, 3]);
             * // => true
             *
             * _.isArrayLike(document.body.children);
             * // => true
             *
             * _.isArrayLike('abc');
             * // => true
             *
             * _.isArrayLike(_.noop);
             * // => false
             */
            function isArrayLike(value) {
              return value != null && isLength(value.length) && !isFunction(value);
            }

            /**
             * This method is like `_.isArrayLike` except that it also checks if `value`
             * is an object.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an array-like object,
             *  else `false`.
             * @example
             *
             * _.isArrayLikeObject([1, 2, 3]);
             * // => true
             *
             * _.isArrayLikeObject(document.body.children);
             * // => true
             *
             * _.isArrayLikeObject('abc');
             * // => false
             *
             * _.isArrayLikeObject(_.noop);
             * // => false
             */
            function isArrayLikeObject(value) {
              return isObjectLike(value) && isArrayLike(value);
            }

            /**
             * Checks if `value` is classified as a `Function` object.
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a function, else `false`.
             * @example
             *
             * _.isFunction(_);
             * // => true
             *
             * _.isFunction(/abc/);
             * // => false
             */
            function isFunction(value) {
              // The use of `Object#toString` avoids issues with the `typeof` operator
              // in Safari 8-9 which returns 'object' for typed array and other constructors.
              var tag = isObject(value) ? objectToString.call(value) : '';
              return tag == funcTag || tag == genTag;
            }

            /**
             * Checks if `value` is a valid array-like length.
             *
             * **Note:** This method is loosely based on
             * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
             * @example
             *
             * _.isLength(3);
             * // => true
             *
             * _.isLength(Number.MIN_VALUE);
             * // => false
             *
             * _.isLength(Infinity);
             * // => false
             *
             * _.isLength('3');
             * // => false
             */
            function isLength(value) {
              return (
                typeof value == 'number' &&
                value > -1 &&
                value % 1 == 0 &&
                value <= MAX_SAFE_INTEGER
              );
            }

            /**
             * Checks if `value` is the
             * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
             * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
             *
             * @static
             * @memberOf _
             * @since 0.1.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is an object, else `false`.
             * @example
             *
             * _.isObject({});
             * // => true
             *
             * _.isObject([1, 2, 3]);
             * // => true
             *
             * _.isObject(_.noop);
             * // => true
             *
             * _.isObject(null);
             * // => false
             */
            function isObject(value) {
              var type = typeof value;
              return !!value && (type == 'object' || type == 'function');
            }

            /**
             * Checks if `value` is object-like. A value is object-like if it's not `null`
             * and has a `typeof` result of "object".
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
             * @example
             *
             * _.isObjectLike({});
             * // => true
             *
             * _.isObjectLike([1, 2, 3]);
             * // => true
             *
             * _.isObjectLike(_.noop);
             * // => false
             *
             * _.isObjectLike(null);
             * // => false
             */
            function isObjectLike(value) {
              return !!value && typeof value == 'object';
            }

            /**
             * Checks if `value` is classified as a `Symbol` primitive or object.
             *
             * @static
             * @memberOf _
             * @since 4.0.0
             * @category Lang
             * @param {*} value The value to check.
             * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
             * @example
             *
             * _.isSymbol(Symbol.iterator);
             * // => true
             *
             * _.isSymbol('abc');
             * // => false
             */
            function isSymbol(value) {
              return (
                typeof value == 'symbol' ||
                (isObjectLike(value) && objectToString.call(value) == symbolTag)
              );
            }

            /**
             * Creates an object composed of the picked `object` properties.
             *
             * @static
             * @since 0.1.0
             * @memberOf _
             * @category Object
             * @param {Object} object The source object.
             * @param {...(string|string[])} [props] The property identifiers to pick.
             * @returns {Object} Returns the new object.
             * @example
             *
             * var object = { 'a': 1, 'b': '2', 'c': 3 };
             *
             * _.pick(object, ['a', 'c']);
             * // => { 'a': 1, 'c': 3 }
             */
            var pick = baseRest(function(object, props) {
              return object == null
                ? {}
                : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
            });

            module.exports = pick;

            /* WEBPACK VAR INJECTION */
          }.call(
            this,
            __webpack_require__(
              /*! ./../webpack/buildin/global.js */ '../node_modules/webpack/buildin/global.js'
            )
          ));

          /***/
        },

      /***/ '../node_modules/object-assign/index.js':
        /*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          /*
object-assign
(c) Sindre Sorhus
@license MIT
*/

          /* eslint-disable no-unused-vars */
          var getOwnPropertySymbols = Object.getOwnPropertySymbols;
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var propIsEnumerable = Object.prototype.propertyIsEnumerable;

          function toObject(val) {
            if (val === null || val === undefined) {
              throw new TypeError(
                'Object.assign cannot be called with null or undefined'
              );
            }

            return Object(val);
          }

          function shouldUseNative() {
            try {
              if (!Object.assign) {
                return false;
              }

              // Detect buggy property enumeration order in older V8 versions.

              // https://bugs.chromium.org/p/v8/issues/detail?id=4118
              var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
              test1[5] = 'de';
              if (Object.getOwnPropertyNames(test1)[0] === '5') {
                return false;
              }

              // https://bugs.chromium.org/p/v8/issues/detail?id=3056
              var test2 = {};
              for (var i = 0; i < 10; i++) {
                test2['_' + String.fromCharCode(i)] = i;
              }
              var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                return test2[n];
              });
              if (order2.join('') !== '0123456789') {
                return false;
              }

              // https://bugs.chromium.org/p/v8/issues/detail?id=3056
              var test3 = {};
              'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
                test3[letter] = letter;
              });
              if (
                Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst'
              ) {
                return false;
              }

              return true;
            } catch (err) {
              // We don't expect any of the above to throw, but better to be safe.
              return false;
            }
          }

          module.exports = shouldUseNative()
            ? Object.assign
            : function(target, source) {
                var from;
                var to = toObject(target);
                var symbols;

                for (var s = 1; s < arguments.length; s++) {
                  from = Object(arguments[s]);

                  for (var key in from) {
                    if (hasOwnProperty.call(from, key)) {
                      to[key] = from[key];
                    }
                  }

                  if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for (var i = 0; i < symbols.length; i++) {
                      if (propIsEnumerable.call(from, symbols[i])) {
                        to[symbols[i]] = from[symbols[i]];
                      }
                    }
                  }
                }

                return to;
              };

          /***/
        },

      /***/ '../node_modules/path-to-regexp/index.js':
        /*!***********************************************!*\
  !*** ../node_modules/path-to-regexp/index.js ***!
  \***********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var isarray = __webpack_require__(
            /*! isarray */ '../node_modules/path-to-regexp/node_modules/isarray/index.js'
          );

          /**
           * Expose `pathToRegexp`.
           */
          module.exports = pathToRegexp;
          module.exports.parse = parse;
          module.exports.compile = compile;
          module.exports.tokensToFunction = tokensToFunction;
          module.exports.tokensToRegExp = tokensToRegExp;

          /**
           * The main path matching regexp utility.
           *
           * @type {RegExp}
           */
          var PATH_REGEXP = new RegExp(
            [
              // Match escaped characters that would otherwise appear in future matches.
              // This allows the user to escape special characters that won't transform.
              '(\\\\.)',
              // Match Express-style parameters and un-named parameters with a prefix
              // and optional suffixes. Matches appear as:
              //
              // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
              // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
              // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
              '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
            ].join('|'),
            'g'
          );

          /**
           * Parse a string for the raw tokens.
           *
           * @param  {string}  str
           * @param  {Object=} options
           * @return {!Array}
           */
          function parse(str, options) {
            var tokens = [];
            var key = 0;
            var index = 0;
            var path = '';
            var defaultDelimiter = (options && options.delimiter) || '/';
            var res;

            while ((res = PATH_REGEXP.exec(str)) != null) {
              var m = res[0];
              var escaped = res[1];
              var offset = res.index;
              path += str.slice(index, offset);
              index = offset + m.length;

              // Ignore already escaped sequences.
              if (escaped) {
                path += escaped[1];
                continue;
              }

              var next = str[index];
              var prefix = res[2];
              var name = res[3];
              var capture = res[4];
              var group = res[5];
              var modifier = res[6];
              var asterisk = res[7];

              // Push the current path onto the tokens.
              if (path) {
                tokens.push(path);
                path = '';
              }

              var partial = prefix != null && next != null && next !== prefix;
              var repeat = modifier === '+' || modifier === '*';
              var optional = modifier === '?' || modifier === '*';
              var delimiter = res[2] || defaultDelimiter;
              var pattern = capture || group;

              tokens.push({
                name: name || key++,
                prefix: prefix || '',
                delimiter: delimiter,
                optional: optional,
                repeat: repeat,
                partial: partial,
                asterisk: !!asterisk,
                pattern: pattern
                  ? escapeGroup(pattern)
                  : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?',
              });
            }

            // Match any characters still remaining.
            if (index < str.length) {
              path += str.substr(index);
            }

            // If the path exists, push it onto the end.
            if (path) {
              tokens.push(path);
            }

            return tokens;
          }

          /**
           * Compile a string to a template function for the path.
           *
           * @param  {string}             str
           * @param  {Object=}            options
           * @return {!function(Object=, Object=)}
           */
          function compile(str, options) {
            return tokensToFunction(parse(str, options));
          }

          /**
           * Prettier encoding of URI path segments.
           *
           * @param  {string}
           * @return {string}
           */
          function encodeURIComponentPretty(str) {
            return encodeURI(str).replace(/[\/?#]/g, function(c) {
              return (
                '%' +
                c
                  .charCodeAt(0)
                  .toString(16)
                  .toUpperCase()
              );
            });
          }

          /**
           * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
           *
           * @param  {string}
           * @return {string}
           */
          function encodeAsterisk(str) {
            return encodeURI(str).replace(/[?#]/g, function(c) {
              return (
                '%' +
                c
                  .charCodeAt(0)
                  .toString(16)
                  .toUpperCase()
              );
            });
          }

          /**
           * Expose a method for transforming tokens into the path function.
           */
          function tokensToFunction(tokens) {
            // Compile all the tokens into regexps.
            var matches = new Array(tokens.length);

            // Compile all the patterns before compilation.
            for (var i = 0; i < tokens.length; i++) {
              if (typeof tokens[i] === 'object') {
                matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
              }
            }

            return function(obj, opts) {
              var path = '';
              var data = obj || {};
              var options = opts || {};
              var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

              for (var i = 0; i < tokens.length; i++) {
                var token = tokens[i];

                if (typeof token === 'string') {
                  path += token;

                  continue;
                }

                var value = data[token.name];
                var segment;

                if (value == null) {
                  if (token.optional) {
                    // Prepend partial segment prefixes.
                    if (token.partial) {
                      path += token.prefix;
                    }

                    continue;
                  } else {
                    throw new TypeError('Expected "' + token.name + '" to be defined');
                  }
                }

                if (isarray(value)) {
                  if (!token.repeat) {
                    throw new TypeError(
                      'Expected "' +
                        token.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(value) +
                        '`'
                    );
                  }

                  if (value.length === 0) {
                    if (token.optional) {
                      continue;
                    } else {
                      throw new TypeError(
                        'Expected "' + token.name + '" to not be empty'
                      );
                    }
                  }

                  for (var j = 0; j < value.length; j++) {
                    segment = encode(value[j]);

                    if (!matches[i].test(segment)) {
                      throw new TypeError(
                        'Expected all "' +
                          token.name +
                          '" to match "' +
                          token.pattern +
                          '", but received `' +
                          JSON.stringify(segment) +
                          '`'
                      );
                    }

                    path += (j === 0 ? token.prefix : token.delimiter) + segment;
                  }

                  continue;
                }

                segment = token.asterisk ? encodeAsterisk(value) : encode(value);

                if (!matches[i].test(segment)) {
                  throw new TypeError(
                    'Expected "' +
                      token.name +
                      '" to match "' +
                      token.pattern +
                      '", but received "' +
                      segment +
                      '"'
                  );
                }

                path += token.prefix + segment;
              }

              return path;
            };
          }

          /**
           * Escape a regular expression string.
           *
           * @param  {string} str
           * @return {string}
           */
          function escapeString(str) {
            return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
          }

          /**
           * Escape the capturing group by escaping special characters and meaning.
           *
           * @param  {string} group
           * @return {string}
           */
          function escapeGroup(group) {
            return group.replace(/([=!:$\/()])/g, '\\$1');
          }

          /**
           * Attach the keys as a property of the regexp.
           *
           * @param  {!RegExp} re
           * @param  {Array}   keys
           * @return {!RegExp}
           */
          function attachKeys(re, keys) {
            re.keys = keys;
            return re;
          }

          /**
           * Get the flags for a regexp from the options.
           *
           * @param  {Object} options
           * @return {string}
           */
          function flags(options) {
            return options.sensitive ? '' : 'i';
          }

          /**
           * Pull out keys from a regexp.
           *
           * @param  {!RegExp} path
           * @param  {!Array}  keys
           * @return {!RegExp}
           */
          function regexpToRegexp(path, keys) {
            // Use a negative lookahead to match only capturing groups.
            var groups = path.source.match(/\((?!\?)/g);

            if (groups) {
              for (var i = 0; i < groups.length; i++) {
                keys.push({
                  name: i,
                  prefix: null,
                  delimiter: null,
                  optional: false,
                  repeat: false,
                  partial: false,
                  asterisk: false,
                  pattern: null,
                });
              }
            }

            return attachKeys(path, keys);
          }

          /**
           * Transform an array into a regexp.
           *
           * @param  {!Array}  path
           * @param  {Array}   keys
           * @param  {!Object} options
           * @return {!RegExp}
           */
          function arrayToRegexp(path, keys, options) {
            var parts = [];

            for (var i = 0; i < path.length; i++) {
              parts.push(pathToRegexp(path[i], keys, options).source);
            }

            var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

            return attachKeys(regexp, keys);
          }

          /**
           * Create a path regexp from string input.
           *
           * @param  {string}  path
           * @param  {!Array}  keys
           * @param  {!Object} options
           * @return {!RegExp}
           */
          function stringToRegexp(path, keys, options) {
            return tokensToRegExp(parse(path, options), keys, options);
          }

          /**
           * Expose a function for taking tokens and returning a RegExp.
           *
           * @param  {!Array}          tokens
           * @param  {(Array|Object)=} keys
           * @param  {Object=}         options
           * @return {!RegExp}
           */
          function tokensToRegExp(tokens, keys, options) {
            if (!isarray(keys)) {
              options = /** @type {!Object} */ (keys || options);
              keys = [];
            }

            options = options || {};

            var strict = options.strict;
            var end = options.end !== false;
            var route = '';

            // Iterate over the tokens and create our regexp string.
            for (var i = 0; i < tokens.length; i++) {
              var token = tokens[i];

              if (typeof token === 'string') {
                route += escapeString(token);
              } else {
                var prefix = escapeString(token.prefix);
                var capture = '(?:' + token.pattern + ')';

                keys.push(token);

                if (token.repeat) {
                  capture += '(?:' + prefix + capture + ')*';
                }

                if (token.optional) {
                  if (!token.partial) {
                    capture = '(?:' + prefix + '(' + capture + '))?';
                  } else {
                    capture = prefix + '(' + capture + ')?';
                  }
                } else {
                  capture = prefix + '(' + capture + ')';
                }

                route += capture;
              }
            }

            var delimiter = escapeString(options.delimiter || '/');
            var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

            // In non-strict mode we allow a slash at the end of match. If the path to
            // match already ends with a slash, we remove it for consistency. The slash
            // is valid at the end of a path match, not in the middle. This is important
            // in non-ending mode, where "/test/" shouldn't match "/test//route".
            if (!strict) {
              route =
                (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) +
                '(?:' +
                delimiter +
                '(?=$))?';
            }

            if (end) {
              route += '$';
            } else {
              // In non-ending mode, we need the capturing groups to match as much as
              // possible by using a positive lookahead to the end or next path segment.
              route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
            }

            return attachKeys(new RegExp('^' + route, flags(options)), keys);
          }

          /**
           * Normalize the given path string, returning a regular expression.
           *
           * An empty array can be passed in for the keys, which will hold the
           * placeholder key descriptions. For example, using `/user/:id`, `keys` will
           * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
           *
           * @param  {(string|RegExp|Array)} path
           * @param  {(Array|Object)=}       keys
           * @param  {Object=}               options
           * @return {!RegExp}
           */
          function pathToRegexp(path, keys, options) {
            if (!isarray(keys)) {
              options = /** @type {!Object} */ (keys || options);
              keys = [];
            }

            options = options || {};

            if (path instanceof RegExp) {
              return regexpToRegexp(path, /** @type {!Array} */ (keys));
            }

            if (isarray(path)) {
              return arrayToRegexp(
                /** @type {!Array} */ (path),
                /** @type {!Array} */ (keys),
                options
              );
            }

            return stringToRegexp(
              /** @type {string} */ (path),
              /** @type {!Array} */ (keys),
              options
            );
          }

          /***/
        },

      /***/ '../node_modules/path-to-regexp/node_modules/isarray/index.js':
        /*!********************************************************************!*\
  !*** ../node_modules/path-to-regexp/node_modules/isarray/index.js ***!
  \********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports =
            Array.isArray ||
            function(arr) {
              return Object.prototype.toString.call(arr) == '[object Array]';
            };

          /***/
        },

      /***/ '../node_modules/process/browser.js':
        /*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          // shim for using process in browser
          var process = (module.exports = {});

          // cached from whatever global is present so that test runners that stub it
          // don't break things.  But we need to wrap it in a try catch in case it is
          // wrapped in strict mode code which doesn't define any globals.  It's inside a
          // function because try/catches deoptimize in certain engines.

          var cachedSetTimeout;
          var cachedClearTimeout;

          function defaultSetTimout() {
            throw new Error('setTimeout has not been defined');
          }
          function defaultClearTimeout() {
            throw new Error('clearTimeout has not been defined');
          }
          (function() {
            try {
              if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
              } else {
                cachedSetTimeout = defaultSetTimout;
              }
            } catch (e) {
              cachedSetTimeout = defaultSetTimout;
            }
            try {
              if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
              } else {
                cachedClearTimeout = defaultClearTimeout;
              }
            } catch (e) {
              cachedClearTimeout = defaultClearTimeout;
            }
          })();
          function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
              //normal enviroments in sane situations
              return setTimeout(fun, 0);
            }
            // if setTimeout wasn't available but was latter defined
            if (
              (cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
              setTimeout
            ) {
              cachedSetTimeout = setTimeout;
              return setTimeout(fun, 0);
            }
            try {
              // when when somebody has screwed with setTimeout but no I.E. maddness
              return cachedSetTimeout(fun, 0);
            } catch (e) {
              try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
              } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
              }
            }
          }
          function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
              //normal enviroments in sane situations
              return clearTimeout(marker);
            }
            // if clearTimeout wasn't available but was latter defined
            if (
              (cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) &&
              clearTimeout
            ) {
              cachedClearTimeout = clearTimeout;
              return clearTimeout(marker);
            }
            try {
              // when when somebody has screwed with setTimeout but no I.E. maddness
              return cachedClearTimeout(marker);
            } catch (e) {
              try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
              } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
              }
            }
          }
          var queue = [];
          var draining = false;
          var currentQueue;
          var queueIndex = -1;

          function cleanUpNextTick() {
            if (!draining || !currentQueue) {
              return;
            }
            draining = false;
            if (currentQueue.length) {
              queue = currentQueue.concat(queue);
            } else {
              queueIndex = -1;
            }
            if (queue.length) {
              drainQueue();
            }
          }

          function drainQueue() {
            if (draining) {
              return;
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;

            var len = queue.length;
            while (len) {
              currentQueue = queue;
              queue = [];
              while (++queueIndex < len) {
                if (currentQueue) {
                  currentQueue[queueIndex].run();
                }
              }
              queueIndex = -1;
              len = queue.length;
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout);
          }

          process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
              for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
              }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
              runTimeout(drainQueue);
            }
          };

          // v8 likes predictible objects
          function Item(fun, array) {
            this.fun = fun;
            this.array = array;
          }
          Item.prototype.run = function() {
            this.fun.apply(null, this.array);
          };
          process.title = 'browser';
          process.browser = true;
          process.env = {};
          process.argv = [];
          process.version = ''; // empty string to avoid regexp issues
          process.versions = {};

          function noop() {}

          process.on = noop;
          process.addListener = noop;
          process.once = noop;
          process.off = noop;
          process.removeListener = noop;
          process.removeAllListeners = noop;
          process.emit = noop;
          process.prependListener = noop;
          process.prependOnceListener = noop;

          process.listeners = function(name) {
            return [];
          };

          process.binding = function(name) {
            throw new Error('process.binding is not supported');
          };

          process.cwd = function() {
            return '/';
          };
          process.chdir = function(dir) {
            throw new Error('process.chdir is not supported');
          };
          process.umask = function() {
            return 0;
          };

          /***/
        },

      /***/ '../node_modules/prop-types/checkPropTypes.js':
        /*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          var printWarning = function() {};

          if (true) {
            var ReactPropTypesSecret = __webpack_require__(
              /*! ./lib/ReactPropTypesSecret */ '../node_modules/prop-types/lib/ReactPropTypesSecret.js'
            );
            var loggedTypeFailures = {};

            printWarning = function(text) {
              var message = 'Warning: ' + text;
              if (typeof console !== 'undefined') {
                console.error(message);
              }
              try {
                // --- Welcome to debugging React ---
                // This error was thrown as a convenience so that you can use this stack
                // to find the callsite that caused this warning to fire.
                throw new Error(message);
              } catch (x) {}
            };
          }

          /**
           * Assert that the values match with the type specs.
           * Error messages are memorized and will only be shown once.
           *
           * @param {object} typeSpecs Map of name to a ReactPropType
           * @param {object} values Runtime values that need to be type-checked
           * @param {string} location e.g. "prop", "context", "child context"
           * @param {string} componentName Name of the component for error messages.
           * @param {?Function} getStack Returns the component stack.
           * @private
           */
          function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
            if (true) {
              for (var typeSpecName in typeSpecs) {
                if (typeSpecs.hasOwnProperty(typeSpecName)) {
                  var error;
                  // Prop type validation may throw. In case they do, we don't want to
                  // fail the render phase where it didn't fail before. So we log it.
                  // After these have been cleaned up, we'll let them throw.
                  try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                      var err = Error(
                        (componentName || 'React class') +
                          ': ' +
                          location +
                          ' type `' +
                          typeSpecName +
                          '` is invalid; ' +
                          'it must be a function, usually from the `prop-types` package, but received `' +
                          typeof typeSpecs[typeSpecName] +
                          '`.'
                      );
                      err.name = 'Invariant Violation';
                      throw err;
                    }
                    error = typeSpecs[typeSpecName](
                      values,
                      typeSpecName,
                      componentName,
                      location,
                      null,
                      ReactPropTypesSecret
                    );
                  } catch (ex) {
                    error = ex;
                  }
                  if (error && !(error instanceof Error)) {
                    printWarning(
                      (componentName || 'React class') +
                        ': type specification of ' +
                        location +
                        ' `' +
                        typeSpecName +
                        '` is invalid; the type checker ' +
                        'function must return `null` or an `Error` but returned a ' +
                        typeof error +
                        '. ' +
                        'You may have forgotten to pass an argument to the type checker ' +
                        'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                        'shape all require an argument).'
                    );
                  }
                  if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;

                    var stack = getStack ? getStack() : '';

                    printWarning(
                      'Failed ' +
                        location +
                        ' type: ' +
                        error.message +
                        (stack != null ? stack : '')
                    );
                  }
                }
              }
            }
          }

          module.exports = checkPropTypes;

          /***/
        },

      /***/ '../node_modules/prop-types/factoryWithTypeCheckers.js':
        /*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          var assign = __webpack_require__(
            /*! object-assign */ '../node_modules/object-assign/index.js'
          );

          var ReactPropTypesSecret = __webpack_require__(
            /*! ./lib/ReactPropTypesSecret */ '../node_modules/prop-types/lib/ReactPropTypesSecret.js'
          );
          var checkPropTypes = __webpack_require__(
            /*! ./checkPropTypes */ '../node_modules/prop-types/checkPropTypes.js'
          );

          var printWarning = function() {};

          if (true) {
            printWarning = function(text) {
              var message = 'Warning: ' + text;
              if (typeof console !== 'undefined') {
                console.error(message);
              }
              try {
                // --- Welcome to debugging React ---
                // This error was thrown as a convenience so that you can use this stack
                // to find the callsite that caused this warning to fire.
                throw new Error(message);
              } catch (x) {}
            };
          }

          function emptyFunctionThatReturnsNull() {
            return null;
          }

          module.exports = function(isValidElement, throwOnDirectAccess) {
            /* global Symbol */
            var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
            var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

            /**
             * Returns the iterator method function contained on the iterable object.
             *
             * Be sure to invoke the function with the iterable as context:
             *
             *     var iteratorFn = getIteratorFn(myIterable);
             *     if (iteratorFn) {
             *       var iterator = iteratorFn.call(myIterable);
             *       ...
             *     }
             *
             * @param {?object} maybeIterable
             * @return {?function}
             */
            function getIteratorFn(maybeIterable) {
              var iteratorFn =
                maybeIterable &&
                ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
                  maybeIterable[FAUX_ITERATOR_SYMBOL]);
              if (typeof iteratorFn === 'function') {
                return iteratorFn;
              }
            }

            /**
             * Collection of methods that allow declaration and validation of props that are
             * supplied to React components. Example usage:
             *
             *   var Props = require('ReactPropTypes');
             *   var MyArticle = React.createClass({
             *     propTypes: {
             *       // An optional string prop named "description".
             *       description: Props.string,
             *
             *       // A required enum prop named "category".
             *       category: Props.oneOf(['News','Photos']).isRequired,
             *
             *       // A prop named "dialog" that requires an instance of Dialog.
             *       dialog: Props.instanceOf(Dialog).isRequired
             *     },
             *     render: function() { ... }
             *   });
             *
             * A more formal specification of how these methods are used:
             *
             *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
             *   decl := ReactPropTypes.{type}(.isRequired)?
             *
             * Each and every declaration produces a function with the same signature. This
             * allows the creation of custom validation functions. For example:
             *
             *  var MyLink = React.createClass({
             *    propTypes: {
             *      // An optional string or URI prop named "href".
             *      href: function(props, propName, componentName) {
             *        var propValue = props[propName];
             *        if (propValue != null && typeof propValue !== 'string' &&
             *            !(propValue instanceof URI)) {
             *          return new Error(
             *            'Expected a string or an URI for ' + propName + ' in ' +
             *            componentName
             *          );
             *        }
             *      }
             *    },
             *    render: function() {...}
             *  });
             *
             * @internal
             */

            var ANONYMOUS = '<<anonymous>>';

            // Important!
            // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
            var ReactPropTypes = {
              array: createPrimitiveTypeChecker('array'),
              bool: createPrimitiveTypeChecker('boolean'),
              func: createPrimitiveTypeChecker('function'),
              number: createPrimitiveTypeChecker('number'),
              object: createPrimitiveTypeChecker('object'),
              string: createPrimitiveTypeChecker('string'),
              symbol: createPrimitiveTypeChecker('symbol'),

              any: createAnyTypeChecker(),
              arrayOf: createArrayOfTypeChecker,
              element: createElementTypeChecker(),
              instanceOf: createInstanceTypeChecker,
              node: createNodeChecker(),
              objectOf: createObjectOfTypeChecker,
              oneOf: createEnumTypeChecker,
              oneOfType: createUnionTypeChecker,
              shape: createShapeTypeChecker,
              exact: createStrictShapeTypeChecker,
            };

            /**
             * inlined Object.is polyfill to avoid requiring consumers ship their own
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
             */
            /*eslint-disable no-self-compare*/
            function is(x, y) {
              // SameValue algorithm
              if (x === y) {
                // Steps 1-5, 7-10
                // Steps 6.b-6.e: +0 != -0
                return x !== 0 || 1 / x === 1 / y;
              } else {
                // Step 6.a: NaN == NaN
                return x !== x && y !== y;
              }
            }
            /*eslint-enable no-self-compare*/

            /**
             * We use an Error-like object for backward compatibility as people may call
             * PropTypes directly and inspect their output. However, we don't use real
             * Errors anymore. We don't inspect their stack anyway, and creating them
             * is prohibitively expensive if they are created too often, such as what
             * happens in oneOfType() for any type before the one that matched.
             */
            function PropTypeError(message) {
              this.message = message;
              this.stack = '';
            }
            // Make `instanceof Error` still work for returned errors.
            PropTypeError.prototype = Error.prototype;

            function createChainableTypeChecker(validate) {
              if (true) {
                var manualPropTypeCallCache = {};
                var manualPropTypeWarningCount = 0;
              }
              function checkType(
                isRequired,
                props,
                propName,
                componentName,
                location,
                propFullName,
                secret
              ) {
                componentName = componentName || ANONYMOUS;
                propFullName = propFullName || propName;

                if (secret !== ReactPropTypesSecret) {
                  if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error(
                      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                        'Use `PropTypes.checkPropTypes()` to call them. ' +
                        'Read more at http://fb.me/use-check-prop-types'
                    );
                    err.name = 'Invariant Violation';
                    throw err;
                  } else if (true && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (
                      !manualPropTypeCallCache[cacheKey] &&
                      // Avoid spamming the console because they are often not actionable except for lib authors
                      manualPropTypeWarningCount < 3
                    ) {
                      printWarning(
                        'You are manually calling a React.PropTypes validation ' +
                          'function for the `' +
                          propFullName +
                          '` prop on `' +
                          componentName +
                          '`. This is deprecated ' +
                          'and will throw in the standalone `prop-types` package. ' +
                          'You may be seeing this warning due to a third-party PropTypes ' +
                          'library. See https://fb.me/react-warning-dont-call-proptypes ' +
                          'for details.'
                      );
                      manualPropTypeCallCache[cacheKey] = true;
                      manualPropTypeWarningCount++;
                    }
                  }
                }
                if (props[propName] == null) {
                  if (isRequired) {
                    if (props[propName] === null) {
                      return new PropTypeError(
                        'The ' +
                          location +
                          ' `' +
                          propFullName +
                          '` is marked as required ' +
                          ('in `' + componentName + '`, but its value is `null`.')
                      );
                    }
                    return new PropTypeError(
                      'The ' +
                        location +
                        ' `' +
                        propFullName +
                        '` is marked as required in ' +
                        ('`' + componentName + '`, but its value is `undefined`.')
                    );
                  }
                  return null;
                } else {
                  return validate(props, propName, componentName, location, propFullName);
                }
              }

              var chainedCheckType = checkType.bind(null, false);
              chainedCheckType.isRequired = checkType.bind(null, true);

              return chainedCheckType;
            }

            function createPrimitiveTypeChecker(expectedType) {
              function validate(
                props,
                propName,
                componentName,
                location,
                propFullName,
                secret
              ) {
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== expectedType) {
                  // `propValue` being instance of, say, date/regexp, pass the 'object'
                  // check, but we can offer a more precise error message here rather than
                  // 'of type `object`'.
                  var preciseType = getPreciseType(propValue);

                  return new PropTypeError(
                    'Invalid ' +
                      location +
                      ' `' +
                      propFullName +
                      '` of type ' +
                      ('`' +
                        preciseType +
                        '` supplied to `' +
                        componentName +
                        '`, expected ') +
                      ('`' + expectedType + '`.')
                  );
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }

            function createAnyTypeChecker() {
              return createChainableTypeChecker(emptyFunctionThatReturnsNull);
            }

            function createArrayOfTypeChecker(typeChecker) {
              function validate(props, propName, componentName, location, propFullName) {
                if (typeof typeChecker !== 'function') {
                  return new PropTypeError(
                    'Property `' +
                      propFullName +
                      '` of component `' +
                      componentName +
                      '` has invalid PropType notation inside arrayOf.'
                  );
                }
                var propValue = props[propName];
                if (!Array.isArray(propValue)) {
                  var propType = getPropType(propValue);
                  return new PropTypeError(
                    'Invalid ' +
                      location +
                      ' `' +
                      propFullName +
                      '` of type ' +
                      ('`' +
                        propType +
                        '` supplied to `' +
                        componentName +
                        '`, expected an array.')
                  );
                }
                for (var i = 0; i < propValue.length; i++) {
                  var error = typeChecker(
                    propValue,
                    i,
                    componentName,
                    location,
                    propFullName + '[' + i + ']',
                    ReactPropTypesSecret
                  );
                  if (error instanceof Error) {
                    return error;
                  }
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }

            function createElementTypeChecker() {
              function validate(props, propName, componentName, location, propFullName) {
                var propValue = props[propName];
                if (!isValidElement(propValue)) {
                  var propType = getPropType(propValue);
                  return new PropTypeError(
                    'Invalid ' +
                      location +
                      ' `' +
                      propFullName +
                      '` of type ' +
                      ('`' +
                        propType +
                        '` supplied to `' +
                        componentName +
                        '`, expected a single ReactElement.')
                  );
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }

            function createInstanceTypeChecker(expectedClass) {
              function validate(props, propName, componentName, location, propFullName) {
                if (!(props[propName] instanceof expectedClass)) {
                  var expectedClassName = expectedClass.name || ANONYMOUS;
                  var actualClassName = getClassName(props[propName]);
                  return new PropTypeError(
                    'Invalid ' +
                      location +
                      ' `' +
                      propFullName +
                      '` of type ' +
                      ('`' +
                        actualClassName +
                        '` supplied to `' +
                        componentName +
                        '`, expected ') +
                      ('instance of `' + expectedClassName + '`.')
                  );
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }

            function createEnumTypeChecker(expectedValues) {
              if (!Array.isArray(expectedValues)) {
                true
                  ? printWarning(
                      'Invalid argument supplied to oneOf, expected an instance of array.'
                    )
                  : undefined;
                return emptyFunctionThatReturnsNull;
              }

              function validate(props, propName, componentName, location, propFullName) {
                var propValue = props[propName];
                for (var i = 0; i < expectedValues.length; i++) {
                  if (is(propValue, expectedValues[i])) {
                    return null;
                  }
                }

                var valuesString = JSON.stringify(expectedValues);
                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` of value `' +
                    propValue +
                    '` ' +
                    ('supplied to `' +
                      componentName +
                      '`, expected one of ' +
                      valuesString +
                      '.')
                );
              }
              return createChainableTypeChecker(validate);
            }

            function createObjectOfTypeChecker(typeChecker) {
              function validate(props, propName, componentName, location, propFullName) {
                if (typeof typeChecker !== 'function') {
                  return new PropTypeError(
                    'Property `' +
                      propFullName +
                      '` of component `' +
                      componentName +
                      '` has invalid PropType notation inside objectOf.'
                  );
                }
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== 'object') {
                  return new PropTypeError(
                    'Invalid ' +
                      location +
                      ' `' +
                      propFullName +
                      '` of type ' +
                      ('`' +
                        propType +
                        '` supplied to `' +
                        componentName +
                        '`, expected an object.')
                  );
                }
                for (var key in propValue) {
                  if (propValue.hasOwnProperty(key)) {
                    var error = typeChecker(
                      propValue,
                      key,
                      componentName,
                      location,
                      propFullName + '.' + key,
                      ReactPropTypesSecret
                    );
                    if (error instanceof Error) {
                      return error;
                    }
                  }
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }

            function createUnionTypeChecker(arrayOfTypeCheckers) {
              if (!Array.isArray(arrayOfTypeCheckers)) {
                true
                  ? printWarning(
                      'Invalid argument supplied to oneOfType, expected an instance of array.'
                    )
                  : undefined;
                return emptyFunctionThatReturnsNull;
              }

              for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                var checker = arrayOfTypeCheckers[i];
                if (typeof checker !== 'function') {
                  printWarning(
                    'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
                      'received ' +
                      getPostfixForTypeWarning(checker) +
                      ' at index ' +
                      i +
                      '.'
                  );
                  return emptyFunctionThatReturnsNull;
                }
              }

              function validate(props, propName, componentName, location, propFullName) {
                for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                  var checker = arrayOfTypeCheckers[i];
                  if (
                    checker(
                      props,
                      propName,
                      componentName,
                      location,
                      propFullName,
                      ReactPropTypesSecret
                    ) == null
                  ) {
                    return null;
                  }
                }

                return new PropTypeError(
                  'Invalid ' +
                    location +
                    ' `' +
                    propFullName +
                    '` supplied to ' +
                    ('`' + componentName + '`.')
                );
              }
              return createChainableTypeChecker(validate);
            }

            function createNodeChecker() {
              function validate(props, propName, componentName, location, propFullName) {
                if (!isNode(props[propName])) {
                  return new PropTypeError(
                    'Invalid ' +
                      location +
                      ' `' +
                      propFullName +
                      '` supplied to ' +
                      ('`' + componentName + '`, expected a ReactNode.')
                  );
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }

            function createShapeTypeChecker(shapeTypes) {
              function validate(props, propName, componentName, location, propFullName) {
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== 'object') {
                  return new PropTypeError(
                    'Invalid ' +
                      location +
                      ' `' +
                      propFullName +
                      '` of type `' +
                      propType +
                      '` ' +
                      ('supplied to `' + componentName + '`, expected `object`.')
                  );
                }
                for (var key in shapeTypes) {
                  var checker = shapeTypes[key];
                  if (!checker) {
                    continue;
                  }
                  var error = checker(
                    propValue,
                    key,
                    componentName,
                    location,
                    propFullName + '.' + key,
                    ReactPropTypesSecret
                  );
                  if (error) {
                    return error;
                  }
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }

            function createStrictShapeTypeChecker(shapeTypes) {
              function validate(props, propName, componentName, location, propFullName) {
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== 'object') {
                  return new PropTypeError(
                    'Invalid ' +
                      location +
                      ' `' +
                      propFullName +
                      '` of type `' +
                      propType +
                      '` ' +
                      ('supplied to `' + componentName + '`, expected `object`.')
                  );
                }
                // We need to check all keys in case some are required but missing from
                // props.
                var allKeys = assign({}, props[propName], shapeTypes);
                for (var key in allKeys) {
                  var checker = shapeTypes[key];
                  if (!checker) {
                    return new PropTypeError(
                      'Invalid ' +
                        location +
                        ' `' +
                        propFullName +
                        '` key `' +
                        key +
                        '` supplied to `' +
                        componentName +
                        '`.' +
                        '\nBad object: ' +
                        JSON.stringify(props[propName], null, '  ') +
                        '\nValid keys: ' +
                        JSON.stringify(Object.keys(shapeTypes), null, '  ')
                    );
                  }
                  var error = checker(
                    propValue,
                    key,
                    componentName,
                    location,
                    propFullName + '.' + key,
                    ReactPropTypesSecret
                  );
                  if (error) {
                    return error;
                  }
                }
                return null;
              }

              return createChainableTypeChecker(validate);
            }

            function isNode(propValue) {
              switch (typeof propValue) {
                case 'number':
                case 'string':
                case 'undefined':
                  return true;
                case 'boolean':
                  return !propValue;
                case 'object':
                  if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                  }
                  if (propValue === null || isValidElement(propValue)) {
                    return true;
                  }

                  var iteratorFn = getIteratorFn(propValue);
                  if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                      while (!(step = iterator.next()).done) {
                        if (!isNode(step.value)) {
                          return false;
                        }
                      }
                    } else {
                      // Iterator will provide entry [k,v] tuples rather than values.
                      while (!(step = iterator.next()).done) {
                        var entry = step.value;
                        if (entry) {
                          if (!isNode(entry[1])) {
                            return false;
                          }
                        }
                      }
                    }
                  } else {
                    return false;
                  }

                  return true;
                default:
                  return false;
              }
            }

            function isSymbol(propType, propValue) {
              // Native Symbol.
              if (propType === 'symbol') {
                return true;
              }

              // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
              if (propValue['@@toStringTag'] === 'Symbol') {
                return true;
              }

              // Fallback for non-spec compliant Symbols which are polyfilled.
              if (typeof Symbol === 'function' && propValue instanceof Symbol) {
                return true;
              }

              return false;
            }

            // Equivalent of `typeof` but with special handling for array and regexp.
            function getPropType(propValue) {
              var propType = typeof propValue;
              if (Array.isArray(propValue)) {
                return 'array';
              }
              if (propValue instanceof RegExp) {
                // Old webkits (at least until Android 4.0) return 'function' rather than
                // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
                // passes PropTypes.object.
                return 'object';
              }
              if (isSymbol(propType, propValue)) {
                return 'symbol';
              }
              return propType;
            }

            // This handles more types than `getPropType`. Only used for error messages.
            // See `createPrimitiveTypeChecker`.
            function getPreciseType(propValue) {
              if (typeof propValue === 'undefined' || propValue === null) {
                return '' + propValue;
              }
              var propType = getPropType(propValue);
              if (propType === 'object') {
                if (propValue instanceof Date) {
                  return 'date';
                } else if (propValue instanceof RegExp) {
                  return 'regexp';
                }
              }
              return propType;
            }

            // Returns a string that is postfixed to a warning about an invalid type.
            // For example, "undefined" or "of type array"
            function getPostfixForTypeWarning(value) {
              var type = getPreciseType(value);
              switch (type) {
                case 'array':
                case 'object':
                  return 'an ' + type;
                case 'boolean':
                case 'date':
                case 'regexp':
                  return 'a ' + type;
                default:
                  return type;
              }
            }

            // Returns class name of the object, if any.
            function getClassName(propValue) {
              if (!propValue.constructor || !propValue.constructor.name) {
                return ANONYMOUS;
              }
              return propValue.constructor.name;
            }

            ReactPropTypes.checkPropTypes = checkPropTypes;
            ReactPropTypes.PropTypes = ReactPropTypes;

            return ReactPropTypes;
          };

          /***/
        },

      /***/ '../node_modules/prop-types/index.js':
        /*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          if (true) {
            var REACT_ELEMENT_TYPE =
              (typeof Symbol === 'function' &&
                Symbol.for &&
                Symbol.for('react.element')) ||
              0xeac7;

            var isValidElement = function(object) {
              return (
                typeof object === 'object' &&
                object !== null &&
                object.$$typeof === REACT_ELEMENT_TYPE
              );
            };

            // By explicitly using `prop-types` you are opting into new development behavior.
            // http://fb.me/prop-types-in-prod
            var throwOnDirectAccess = true;
            module.exports = __webpack_require__(
              /*! ./factoryWithTypeCheckers */ '../node_modules/prop-types/factoryWithTypeCheckers.js'
            )(isValidElement, throwOnDirectAccess);
          } else {
          }

          /***/
        },

      /***/ '../node_modules/prop-types/lib/ReactPropTypesSecret.js':
        /*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          /**
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

          module.exports = ReactPropTypesSecret;

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/ApolloClient.js':
        /*!*******************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/ApolloClient.js ***!
  \*******************************************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _transport_networkInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./transport/networkInterface */ '../node_modules/react-apollo/node_modules/apollo-client/transport/networkInterface.js'
          );
          /* harmony import */ var apollo_link_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! apollo-link-core */ '../node_modules/apollo-link-core/lib/index.js'
          );
          /* harmony import */ var apollo_link_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            apollo_link_core__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var _data_fragmentMatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./data/fragmentMatcher */ '../node_modules/react-apollo/node_modules/apollo-client/data/fragmentMatcher.js'
          );
          /* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./store */ '../node_modules/react-apollo/node_modules/apollo-client/store.js'
          );
          /* harmony import */ var _core_QueryManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./core/QueryManager */ '../node_modules/react-apollo/node_modules/apollo-client/core/QueryManager.js'
          );
          /* harmony import */ var _util_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./util/environment */ '../node_modules/react-apollo/node_modules/apollo-client/util/environment.js'
          );
          /* harmony import */ var _data_storeUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! ./data/storeUtils */ '../node_modules/react-apollo/node_modules/apollo-client/data/storeUtils.js'
          );
          /* harmony import */ var _data_proxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! ./data/proxy */ '../node_modules/react-apollo/node_modules/apollo-client/data/proxy.js'
          );
          /* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            /*! ./version */ '../node_modules/react-apollo/node_modules/apollo-client/version.js'
          );
          /* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
            _version__WEBPACK_IMPORTED_MODULE_8__
          );
          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };

          var DEFAULT_REDUX_ROOT_KEY = 'apollo';
          function defaultReduxRootSelector(state) {
            return state[DEFAULT_REDUX_ROOT_KEY];
          }
          function defaultDataIdFromObject(result) {
            if (result.__typename) {
              if (result.id !== undefined) {
                return result.__typename + ':' + result.id;
              }
              if (result._id !== undefined) {
                return result.__typename + ':' + result._id;
              }
            }
            return null;
          }
          var hasSuggestedDevtools = false;
          var ApolloClient = (function() {
            function ApolloClient(options) {
              if (options === void 0) {
                options = {};
              }
              var _this = this;
              this.middleware = function() {
                return function(store) {
                  _this.setStore(store);
                  return function(next) {
                    return function(action) {
                      var previousApolloState = _this.queryManager.selectApolloState(
                        store
                      );
                      var returnValue = next(action);
                      var newApolloState = _this.queryManager.selectApolloState(store);
                      if (newApolloState !== previousApolloState) {
                        _this.queryManager.broadcastNewStore(store.getState());
                      }
                      if (_this.devToolsHookCb) {
                        _this.devToolsHookCb({
                          action: action,
                          state: {
                            queries: _this.queryManager.queryStore.getStore(),
                            mutations: _this.queryManager.mutationStore.getStore(),
                          },
                          dataWithOptimisticResults: _this.queryManager.getDataWithOptimisticResults(),
                        });
                      }
                      return returnValue;
                    };
                  };
                };
              };
              var dataIdFromObject = options.dataIdFromObject;
              var networkInterface = options.networkInterface,
                reduxRootSelector = options.reduxRootSelector,
                initialState = options.initialState,
                _a = options.ssrMode,
                ssrMode = _a === void 0 ? false : _a,
                _b = options.ssrForceFetchDelay,
                ssrForceFetchDelay = _b === void 0 ? 0 : _b,
                _c = options.addTypename,
                addTypename = _c === void 0 ? true : _c,
                customResolvers = options.customResolvers,
                connectToDevTools = options.connectToDevTools,
                fragmentMatcher = options.fragmentMatcher,
                _d = options.queryDeduplication,
                queryDeduplication = _d === void 0 ? true : _d;
              if (typeof reduxRootSelector === 'function') {
                this.reduxRootSelector = reduxRootSelector;
              } else if (typeof reduxRootSelector !== 'undefined') {
                throw new Error('"reduxRootSelector" must be a function.');
              }
              if (typeof fragmentMatcher === 'undefined') {
                this.fragmentMatcher = new _data_fragmentMatcher__WEBPACK_IMPORTED_MODULE_2__[
                  'HeuristicFragmentMatcher'
                ]();
              } else {
                this.fragmentMatcher = fragmentMatcher;
              }
              var createQuery = function(getResult) {
                return function(request) {
                  return new Promise(function(resolve, reject) {
                    var resolved = false;
                    var subscription = getResult(request).subscribe({
                      next: function(data) {
                        if (!resolved) {
                          resolve(data);
                          resolved = true;
                        } else {
                          console.warn(
                            'Apollo Client does not support multiple results from an Observable'
                          );
                        }
                      },
                      error: reject,
                      complete: function() {
                        return subscription.unsubscribe();
                      },
                    });
                  });
                };
              };
              if (
                networkInterface instanceof
                apollo_link_core__WEBPACK_IMPORTED_MODULE_1__['ApolloLink']
              ) {
                var count_1 = 0;
                this.networkInterface = {
                  query: createQuery(function(request) {
                    return Object(
                      apollo_link_core__WEBPACK_IMPORTED_MODULE_1__['execute']
                    )(networkInterface, request);
                  }),
                  subscribe: function(request, handler) {
                    if (!_this.subscriptionMap) {
                      _this.subscriptionMap = new Map();
                    }
                    var subscription = Object(
                      apollo_link_core__WEBPACK_IMPORTED_MODULE_1__['execute']
                    )(networkInterface, request).subscribe({
                      next: function(data) {
                        return handler(undefined, data);
                      },
                      error: function(error) {
                        return handler([error]);
                      },
                      complete: handler,
                    });
                    var id = count_1.toString();
                    _this.subscriptionMap.set(id, subscription);
                    count_1++;
                    return id;
                  },
                  unsubscribe: function(id) {
                    if (_this.subscriptionMap) {
                      var subscription = _this.subscriptionMap.get(id);
                      if (subscription) {
                        subscription.unsubscribe();
                      }
                    }
                  },
                };
              } else {
                this.networkInterface = networkInterface
                  ? networkInterface
                  : Object(
                      _transport_networkInterface__WEBPACK_IMPORTED_MODULE_0__[
                        'createNetworkInterface'
                      ]
                    )({uri: '/graphql'});
              }
              this.initialState = initialState ? initialState : {};
              this.addTypename = addTypename;
              this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
              this.dataId = dataIdFromObject =
                dataIdFromObject || defaultDataIdFromObject;
              this.dataIdFromObject = this.dataId;
              this.fieldWithArgs =
                _data_storeUtils__WEBPACK_IMPORTED_MODULE_6__['getStoreKeyName'];
              this.queryDeduplication = queryDeduplication;
              this.ssrMode = ssrMode;
              if (ssrForceFetchDelay) {
                setTimeout(function() {
                  return (_this.disableNetworkFetches = false);
                }, ssrForceFetchDelay);
              }
              this.reducerConfig = {
                dataIdFromObject: dataIdFromObject,
                customResolvers: customResolvers,
                addTypename: addTypename,
                fragmentMatcher: this.fragmentMatcher.match,
              };
              this.watchQuery = this.watchQuery.bind(this);
              this.query = this.query.bind(this);
              this.mutate = this.mutate.bind(this);
              this.setStore = this.setStore.bind(this);
              this.resetStore = this.resetStore.bind(this);
              var defaultConnectToDevTools =
                !Object(
                  _util_environment__WEBPACK_IMPORTED_MODULE_5__['isProduction']
                )() &&
                typeof window !== 'undefined' &&
                !window.__APOLLO_CLIENT__;
              if (
                typeof connectToDevTools === 'undefined'
                  ? defaultConnectToDevTools
                  : connectToDevTools
              ) {
                window.__APOLLO_CLIENT__ = this;
              }
              if (
                !hasSuggestedDevtools &&
                !Object(_util_environment__WEBPACK_IMPORTED_MODULE_5__['isProduction'])()
              ) {
                hasSuggestedDevtools = true;
                if (
                  typeof window !== 'undefined' &&
                  window.document &&
                  window.top === window.self
                ) {
                  if (typeof window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
                    if (navigator.userAgent.indexOf('Chrome') > -1) {
                      console.debug(
                        'Download the Apollo DevTools ' +
                          'for a better development experience: ' +
                          'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm'
                      );
                    }
                  }
                }
              }
              this.version = _version__WEBPACK_IMPORTED_MODULE_8__['version'];
            }
            ApolloClient.prototype.watchQuery = function(options) {
              this.initStore();
              if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
                options = __assign({}, options, {fetchPolicy: 'cache-first'});
              }
              return this.queryManager.watchQuery(options);
            };
            ApolloClient.prototype.query = function(options) {
              this.initStore();
              if (options.fetchPolicy === 'cache-and-network') {
                throw new Error(
                  'cache-and-network fetchPolicy can only be used with watchQuery'
                );
              }
              if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
                options = __assign({}, options, {fetchPolicy: 'cache-first'});
              }
              return this.queryManager.query(options);
            };
            ApolloClient.prototype.mutate = function(options) {
              this.initStore();
              return this.queryManager.mutate(options);
            };
            ApolloClient.prototype.subscribe = function(options) {
              this.initStore();
              return this.queryManager.startGraphQLSubscription(options);
            };
            ApolloClient.prototype.readQuery = function(options) {
              return this.initProxy().readQuery(options);
            };
            ApolloClient.prototype.readFragment = function(options) {
              return this.initProxy().readFragment(options);
            };
            ApolloClient.prototype.writeQuery = function(options) {
              return this.initProxy().writeQuery(options);
            };
            ApolloClient.prototype.writeFragment = function(options) {
              return this.initProxy().writeFragment(options);
            };
            ApolloClient.prototype.reducer = function() {
              return Object(_store__WEBPACK_IMPORTED_MODULE_3__['createApolloReducer'])(
                this.reducerConfig
              );
            };
            ApolloClient.prototype.__actionHookForDevTools = function(cb) {
              this.devToolsHookCb = cb;
            };
            ApolloClient.prototype.initStore = function() {
              var _this = this;
              if (this.store) {
                return;
              }
              if (this.reduxRootSelector) {
                throw new Error(
                  'Cannot initialize the store because "reduxRootSelector" is provided. ' +
                    'reduxRootSelector should only be used when the store is created outside of the client. ' +
                    'This may lead to unexpected results when querying the store internally. ' +
                    'Please remove that option from ApolloClient constructor.'
                );
              }
              this.setStore(
                Object(_store__WEBPACK_IMPORTED_MODULE_3__['createApolloStore'])({
                  reduxRootKey: DEFAULT_REDUX_ROOT_KEY,
                  initialState: this.initialState,
                  config: this.reducerConfig,
                  logger: function(store) {
                    return function(next) {
                      return function(action) {
                        var result = next(action);
                        if (_this.devToolsHookCb) {
                          _this.devToolsHookCb({
                            action: action,
                            state: {
                              queries: _this.queryManager.queryStore.getStore(),
                              mutations: _this.queryManager.mutationStore.getStore(),
                            },
                            dataWithOptimisticResults: _this.queryManager.getDataWithOptimisticResults(),
                          });
                        }
                        return result;
                      };
                    };
                  },
                })
              );
            };
            ApolloClient.prototype.resetStore = function() {
              return this.queryManager ? this.queryManager.resetStore() : null;
            };
            ApolloClient.prototype.getInitialState = function() {
              this.initStore();
              return this.queryManager.getInitialState();
            };
            ApolloClient.prototype.setStore = function(store) {
              var reduxRootSelector;
              if (this.reduxRootSelector) {
                reduxRootSelector = this.reduxRootSelector;
              } else {
                reduxRootSelector = defaultReduxRootSelector;
              }
              if (typeof reduxRootSelector(store.getState()) === 'undefined') {
                throw new Error(
                  'Existing store does not use apolloReducer. Please make sure the store ' +
                    'is properly configured and "reduxRootSelector" is correctly specified.'
                );
              }
              this.store = store;
              this.queryManager = new _core_QueryManager__WEBPACK_IMPORTED_MODULE_4__[
                'QueryManager'
              ]({
                networkInterface: this.networkInterface,
                reduxRootSelector: reduxRootSelector,
                store: store,
                addTypename: this.addTypename,
                reducerConfig: this.reducerConfig,
                queryDeduplication: this.queryDeduplication,
                fragmentMatcher: this.fragmentMatcher,
                ssrMode: this.ssrMode,
              });
            };
            ApolloClient.prototype.initProxy = function() {
              if (!this.proxy) {
                this.initStore();
                this.proxy = new _data_proxy__WEBPACK_IMPORTED_MODULE_7__[
                  'ReduxDataProxy'
                ](
                  this.store,
                  this.reduxRootSelector || defaultReduxRootSelector,
                  this.fragmentMatcher,
                  this.reducerConfig
                );
              }
              return this.proxy;
            };
            return ApolloClient;
          })();
          /* harmony default export */ __webpack_exports__['default'] = ApolloClient;
          //# sourceMappingURL=ApolloClient.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/actions.js':
        /*!**************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/actions.js ***!
  \**************************************************************************/
        /*! exports provided: isQueryResultAction, isQueryErrorAction, isQueryInitAction, isQueryResultClientAction, isQueryStopAction, isMutationInitAction, isMutationResultAction, isMutationErrorAction, isUpdateQueryResultAction, isStoreResetAction, isSubscriptionResultAction, isWriteAction */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isQueryResultAction',
            function() {
              return isQueryResultAction;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isQueryErrorAction',
            function() {
              return isQueryErrorAction;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isQueryInitAction',
            function() {
              return isQueryInitAction;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isQueryResultClientAction',
            function() {
              return isQueryResultClientAction;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isQueryStopAction',
            function() {
              return isQueryStopAction;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isMutationInitAction',
            function() {
              return isMutationInitAction;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isMutationResultAction',
            function() {
              return isMutationResultAction;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isMutationErrorAction',
            function() {
              return isMutationErrorAction;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isUpdateQueryResultAction',
            function() {
              return isUpdateQueryResultAction;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isStoreResetAction',
            function() {
              return isStoreResetAction;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isSubscriptionResultAction',
            function() {
              return isSubscriptionResultAction;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isWriteAction',
            function() {
              return isWriteAction;
            }
          );
          function isQueryResultAction(action) {
            return action.type === 'APOLLO_QUERY_RESULT';
          }
          function isQueryErrorAction(action) {
            return action.type === 'APOLLO_QUERY_ERROR';
          }
          function isQueryInitAction(action) {
            return action.type === 'APOLLO_QUERY_INIT';
          }
          function isQueryResultClientAction(action) {
            return action.type === 'APOLLO_QUERY_RESULT_CLIENT';
          }
          function isQueryStopAction(action) {
            return action.type === 'APOLLO_QUERY_STOP';
          }
          function isMutationInitAction(action) {
            return action.type === 'APOLLO_MUTATION_INIT';
          }
          function isMutationResultAction(action) {
            return action.type === 'APOLLO_MUTATION_RESULT';
          }
          function isMutationErrorAction(action) {
            return action.type === 'APOLLO_MUTATION_ERROR';
          }
          function isUpdateQueryResultAction(action) {
            return action.type === 'APOLLO_UPDATE_QUERY_RESULT';
          }
          function isStoreResetAction(action) {
            return action.type === 'APOLLO_STORE_RESET';
          }
          function isSubscriptionResultAction(action) {
            return action.type === 'APOLLO_SUBSCRIPTION_RESULT';
          }
          function isWriteAction(action) {
            return action.type === 'APOLLO_WRITE';
          }
          //# sourceMappingURL=actions.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/core/ObservableQuery.js':
        /*!***************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/core/ObservableQuery.js ***!
  \***************************************************************************************/
        /*! exports provided: ObservableQuery */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'ObservableQuery',
            function() {
              return ObservableQuery;
            }
          );
          /* harmony import */ var _util_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ../util/Observable */ '../node_modules/react-apollo/node_modules/apollo-client/util/Observable.js'
          );
          /* harmony import */ var _errors_ApolloError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ../errors/ApolloError */ '../node_modules/react-apollo/node_modules/apollo-client/errors/ApolloError.js'
          );
          /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./types */ '../node_modules/react-apollo/node_modules/apollo-client/core/types.js'
          );
          /* harmony import */ var _util_errorHandling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ../util/errorHandling */ '../node_modules/react-apollo/node_modules/apollo-client/util/errorHandling.js'
          );
          /* harmony import */ var _util_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ../util/isEqual */ '../node_modules/react-apollo/node_modules/apollo-client/util/isEqual.js'
          );
          /* harmony import */ var _util_maybeDeepFreeze__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ../util/maybeDeepFreeze */ '../node_modules/react-apollo/node_modules/apollo-client/util/maybeDeepFreeze.js'
          );
          /* harmony import */ var _queries_networkStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! ../queries/networkStatus */ '../node_modules/react-apollo/node_modules/apollo-client/queries/networkStatus.js'
          );
          /* harmony import */ var _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! ../queries/getFromAST */ '../node_modules/react-apollo/node_modules/apollo-client/queries/getFromAST.js'
          );
          var __extends =
            (undefined && undefined.__extends) ||
            (function() {
              var extendStatics =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype =
                  b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
              };
            })();
          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };

          var ObservableQuery = (function(_super) {
            __extends(ObservableQuery, _super);
            function ObservableQuery(_a) {
              var scheduler = _a.scheduler,
                options = _a.options,
                _b = _a.shouldSubscribe,
                shouldSubscribe = _b === void 0 ? true : _b;
              var _this = this;
              var queryManager = scheduler.queryManager;
              var queryId = queryManager.generateQueryId();
              var subscriberFunction = function(observer) {
                return _this.onSubscribe(observer);
              };
              _this = _super.call(this, subscriberFunction) || this;
              _this.isCurrentlyPolling = false;
              _this.options = options;
              _this.variables = _this.options.variables || {};
              _this.scheduler = scheduler;
              _this.queryManager = queryManager;
              _this.queryId = queryId;
              _this.shouldSubscribe = shouldSubscribe;
              _this.observers = [];
              _this.subscriptionHandles = [];
              return _this;
            }
            ObservableQuery.prototype.result = function() {
              var that = this;
              return new Promise(function(resolve, reject) {
                var subscription = null;
                var observer = {
                  next: function(result) {
                    resolve(result);
                    var selectedObservers = that.observers.filter(function(obs) {
                      return obs !== observer;
                    });
                    if (selectedObservers.length === 0) {
                      that.queryManager.removeQuery(that.queryId);
                    }
                    setTimeout(function() {
                      subscription.unsubscribe();
                    }, 0);
                  },
                  error: function(error) {
                    reject(error);
                  },
                };
                subscription = that.subscribe(observer);
              });
            };
            ObservableQuery.prototype.currentResult = function() {
              var _a = this.queryManager.getCurrentQueryResult(this, true),
                data = _a.data,
                partial = _a.partial;
              var queryStoreValue = this.queryManager.queryStore.get(this.queryId);
              if (
                queryStoreValue &&
                ((queryStoreValue.graphQLErrors &&
                  queryStoreValue.graphQLErrors.length > 0) ||
                  queryStoreValue.networkError)
              ) {
                var error = new _errors_ApolloError__WEBPACK_IMPORTED_MODULE_1__[
                  'ApolloError'
                ]({
                  graphQLErrors: queryStoreValue.graphQLErrors,
                  networkError: queryStoreValue.networkError,
                });
                return {
                  data: {},
                  loading: false,
                  networkStatus: queryStoreValue.networkStatus,
                  error: error,
                };
              }
              var queryLoading =
                !queryStoreValue ||
                queryStoreValue.networkStatus ===
                  _queries_networkStatus__WEBPACK_IMPORTED_MODULE_6__['NetworkStatus']
                    .loading;
              var loading =
                (this.options.fetchPolicy === 'network-only' && queryLoading) ||
                (partial && this.options.fetchPolicy !== 'cache-only');
              var networkStatus;
              if (queryStoreValue) {
                networkStatus = queryStoreValue.networkStatus;
              } else {
                networkStatus = loading
                  ? _queries_networkStatus__WEBPACK_IMPORTED_MODULE_6__['NetworkStatus']
                      .loading
                  : _queries_networkStatus__WEBPACK_IMPORTED_MODULE_6__['NetworkStatus']
                      .ready;
              }
              var result = {
                data: data,
                loading: Object(
                  _queries_networkStatus__WEBPACK_IMPORTED_MODULE_6__[
                    'isNetworkRequestInFlight'
                  ]
                )(networkStatus),
                networkStatus: networkStatus,
              };
              if (!partial) {
                var stale = false;
                this.lastResult = __assign({}, result, {stale: stale});
              }
              return __assign({}, result, {partial: partial});
            };
            ObservableQuery.prototype.getLastResult = function() {
              return this.lastResult;
            };
            ObservableQuery.prototype.refetch = function(variables) {
              this.variables = __assign({}, this.variables, variables);
              if (this.options.fetchPolicy === 'cache-only') {
                return Promise.reject(
                  new Error(
                    'cache-only fetchPolicy option should not be used together with query refetch.'
                  )
                );
              }
              this.options.variables = __assign(
                {},
                this.options.variables,
                this.variables
              );
              var combinedOptions = __assign({}, this.options, {
                fetchPolicy: 'network-only',
              });
              return this.queryManager
                .fetchQuery(
                  this.queryId,
                  combinedOptions,
                  _types__WEBPACK_IMPORTED_MODULE_2__['FetchType'].refetch
                )
                .then(function(result) {
                  return Object(
                    _util_maybeDeepFreeze__WEBPACK_IMPORTED_MODULE_5__['default']
                  )(result);
                });
            };
            ObservableQuery.prototype.fetchMore = function(fetchMoreOptions) {
              var _this = this;
              if (!fetchMoreOptions.updateQuery) {
                throw new Error(
                  'updateQuery option is required. This function defines how to update the query data with the new results.'
                );
              }
              return Promise.resolve()
                .then(function() {
                  var qid = _this.queryManager.generateQueryId();
                  var combinedOptions = null;
                  if (fetchMoreOptions.query) {
                    combinedOptions = fetchMoreOptions;
                  } else {
                    var variables = __assign(
                      {},
                      _this.variables,
                      fetchMoreOptions.variables
                    );
                    combinedOptions = __assign({}, _this.options, fetchMoreOptions, {
                      variables: variables,
                    });
                  }
                  combinedOptions = __assign({}, combinedOptions, {
                    query: combinedOptions.query,
                    fetchPolicy: 'network-only',
                  });
                  return _this.queryManager.fetchQuery(
                    qid,
                    combinedOptions,
                    _types__WEBPACK_IMPORTED_MODULE_2__['FetchType'].normal,
                    _this.queryId
                  );
                })
                .then(function(fetchMoreResult) {
                  var data = fetchMoreResult.data;
                  var reducer = fetchMoreOptions.updateQuery;
                  var mapFn = function(previousResult, _a) {
                    var variables = _a.variables;
                    var queryVariables = variables;
                    return reducer(previousResult, {
                      fetchMoreResult: data,
                      queryVariables: queryVariables,
                    });
                  };
                  _this.updateQuery(mapFn);
                  return fetchMoreResult;
                });
            };
            ObservableQuery.prototype.subscribeToMore = function(options) {
              var _this = this;
              var observable = this.queryManager.startGraphQLSubscription({
                query: options.document,
                variables: options.variables,
              });
              var subscription = observable.subscribe({
                next: function(data) {
                  if (options.updateQuery) {
                    var reducer_1 = options.updateQuery;
                    var mapFn = function(previousResult, _a) {
                      var variables = _a.variables;
                      return reducer_1(previousResult, {
                        subscriptionData: {data: data},
                        variables: variables,
                      });
                    };
                    _this.updateQuery(mapFn);
                  }
                },
                error: function(err) {
                  if (options.onError) {
                    options.onError(err);
                  } else {
                    console.error('Unhandled GraphQL subscription error', err);
                  }
                },
              });
              this.subscriptionHandles.push(subscription);
              return function() {
                var i = _this.subscriptionHandles.indexOf(subscription);
                if (i >= 0) {
                  _this.subscriptionHandles.splice(i, 1);
                  subscription.unsubscribe();
                }
              };
            };
            ObservableQuery.prototype.setOptions = function(opts) {
              var oldOptions = this.options;
              this.options = __assign({}, this.options, opts);
              if (opts.pollInterval) {
                this.startPolling(opts.pollInterval);
              } else if (opts.pollInterval === 0) {
                this.stopPolling();
              }
              var tryFetch =
                (oldOptions.fetchPolicy !== 'network-only' &&
                  opts.fetchPolicy === 'network-only') ||
                (oldOptions.fetchPolicy === 'cache-only' &&
                  opts.fetchPolicy !== 'cache-only') ||
                (oldOptions.fetchPolicy === 'standby' &&
                  opts.fetchPolicy !== 'standby') ||
                false;
              return this.setVariables(
                this.options.variables,
                tryFetch,
                opts.fetchResults
              );
            };
            ObservableQuery.prototype.setVariables = function(
              variables,
              tryFetch,
              fetchResults
            ) {
              if (tryFetch === void 0) {
                tryFetch = false;
              }
              if (fetchResults === void 0) {
                fetchResults = true;
              }
              var newVariables = __assign({}, this.variables, variables);
              if (
                Object(_util_isEqual__WEBPACK_IMPORTED_MODULE_4__['isEqual'])(
                  newVariables,
                  this.variables
                ) &&
                !tryFetch
              ) {
                if (this.observers.length === 0 || !fetchResults) {
                  return new Promise(function(resolve) {
                    return resolve();
                  });
                }
                return this.result();
              } else {
                this.variables = newVariables;
                this.options.variables = newVariables;
                if (this.observers.length === 0) {
                  return new Promise(function(resolve) {
                    return resolve();
                  });
                }
                return this.queryManager
                  .fetchQuery(
                    this.queryId,
                    __assign({}, this.options, {variables: this.variables})
                  )
                  .then(function(result) {
                    return Object(
                      _util_maybeDeepFreeze__WEBPACK_IMPORTED_MODULE_5__['default']
                    )(result);
                  });
              }
            };
            ObservableQuery.prototype.updateQuery = function(mapFn) {
              var _a = this.queryManager.getQueryWithPreviousResult(this.queryId),
                previousResult = _a.previousResult,
                variables = _a.variables,
                document = _a.document;
              var newResult = Object(
                _util_errorHandling__WEBPACK_IMPORTED_MODULE_3__['tryFunctionOrLogError']
              )(function() {
                return mapFn(previousResult, {variables: variables});
              });
              if (newResult) {
                this.queryManager.store.dispatch({
                  type: 'APOLLO_UPDATE_QUERY_RESULT',
                  newResult: newResult,
                  variables: variables,
                  document: document,
                  operationName: Object(
                    _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__['getOperationName']
                  )(document),
                });
              }
            };
            ObservableQuery.prototype.stopPolling = function() {
              if (this.isCurrentlyPolling) {
                this.scheduler.stopPollingQuery(this.queryId);
                this.options.pollInterval = undefined;
                this.isCurrentlyPolling = false;
              }
            };
            ObservableQuery.prototype.startPolling = function(pollInterval) {
              if (
                this.options.fetchPolicy === 'cache-first' ||
                this.options.fetchPolicy === 'cache-only'
              ) {
                throw new Error(
                  'Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.'
                );
              }
              if (this.isCurrentlyPolling) {
                this.scheduler.stopPollingQuery(this.queryId);
                this.isCurrentlyPolling = false;
              }
              this.options.pollInterval = pollInterval;
              this.isCurrentlyPolling = true;
              this.scheduler.startPollingQuery(this.options, this.queryId);
            };
            ObservableQuery.prototype.onSubscribe = function(observer) {
              var _this = this;
              this.observers.push(observer);
              if (observer.next && this.lastResult) {
                observer.next(this.lastResult);
              }
              if (observer.error && this.lastError) {
                observer.error(this.lastError);
              }
              if (this.observers.length === 1) {
                this.setUpQuery();
              }
              var retQuerySubscription = {
                unsubscribe: function() {
                  if (
                    !_this.observers.some(function(el) {
                      return el === observer;
                    })
                  ) {
                    return;
                  }
                  _this.observers = _this.observers.filter(function(obs) {
                    return obs !== observer;
                  });
                  if (_this.observers.length === 0) {
                    _this.tearDownQuery();
                  }
                },
              };
              return retQuerySubscription;
            };
            ObservableQuery.prototype.setUpQuery = function() {
              var _this = this;
              if (this.shouldSubscribe) {
                this.queryManager.addObservableQuery(this.queryId, this);
              }
              if (!!this.options.pollInterval) {
                if (
                  this.options.fetchPolicy === 'cache-first' ||
                  this.options.fetchPolicy === 'cache-only'
                ) {
                  throw new Error(
                    'Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.'
                  );
                }
                this.isCurrentlyPolling = true;
                this.scheduler.startPollingQuery(this.options, this.queryId);
              }
              var observer = {
                next: function(result) {
                  _this.lastResult = result;
                  _this.observers.forEach(function(obs) {
                    if (obs.next) {
                      obs.next(result);
                    }
                  });
                },
                error: function(error) {
                  _this.observers.forEach(function(obs) {
                    if (obs.error) {
                      obs.error(error);
                    } else {
                      console.error('Unhandled error', error.message, error.stack);
                    }
                  });
                  _this.lastError = error;
                },
              };
              this.queryManager.startQuery(
                this.queryId,
                this.options,
                this.queryManager.queryListenerForObserver(
                  this.queryId,
                  this.options,
                  observer
                )
              );
            };
            ObservableQuery.prototype.tearDownQuery = function() {
              if (this.isCurrentlyPolling) {
                this.scheduler.stopPollingQuery(this.queryId);
                this.isCurrentlyPolling = false;
              }
              this.subscriptionHandles.forEach(function(sub) {
                return sub.unsubscribe();
              });
              this.subscriptionHandles = [];
              this.queryManager.stopQuery(this.queryId);
              if (this.shouldSubscribe) {
                this.queryManager.removeObservableQuery(this.queryId);
              }
              this.observers = [];
            };
            return ObservableQuery;
          })(_util_Observable__WEBPACK_IMPORTED_MODULE_0__['Observable']);

          //# sourceMappingURL=ObservableQuery.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/core/QueryManager.js':
        /*!************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/core/QueryManager.js ***!
  \************************************************************************************/
        /*! exports provided: QueryManager */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'QueryManager',
            function() {
              return QueryManager;
            }
          );
          /* harmony import */ var _transport_Deduplicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ../transport/Deduplicator */ '../node_modules/react-apollo/node_modules/apollo-client/transport/Deduplicator.js'
          );
          /* harmony import */ var _util_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ../util/isEqual */ '../node_modules/react-apollo/node_modules/apollo-client/util/isEqual.js'
          );
          /* harmony import */ var _util_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ../util/assign */ '../node_modules/react-apollo/node_modules/apollo-client/util/assign.js'
          );
          /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./types */ '../node_modules/react-apollo/node_modules/apollo-client/core/types.js'
          );
          /* harmony import */ var _queries_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ../queries/store */ '../node_modules/react-apollo/node_modules/apollo-client/queries/store.js'
          );
          /* harmony import */ var _queries_networkStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ../queries/networkStatus */ '../node_modules/react-apollo/node_modules/apollo-client/queries/networkStatus.js'
          );
          /* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! ../store */ '../node_modules/react-apollo/node_modules/apollo-client/store.js'
          );
          /* harmony import */ var _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! ../queries/getFromAST */ '../node_modules/react-apollo/node_modules/apollo-client/queries/getFromAST.js'
          );
          /* harmony import */ var _queries_queryTransform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            /*! ../queries/queryTransform */ '../node_modules/react-apollo/node_modules/apollo-client/queries/queryTransform.js'
          );
          /* harmony import */ var _data_resultReducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
            /*! ../data/resultReducers */ '../node_modules/react-apollo/node_modules/apollo-client/data/resultReducers.js'
          );
          /* harmony import */ var _data_fragmentMatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
            /*! ../data/fragmentMatcher */ '../node_modules/react-apollo/node_modules/apollo-client/data/fragmentMatcher.js'
          );
          /* harmony import */ var _util_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
            /*! ../util/environment */ '../node_modules/react-apollo/node_modules/apollo-client/util/environment.js'
          );
          /* harmony import */ var _util_maybeDeepFreeze__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
            /*! ../util/maybeDeepFreeze */ '../node_modules/react-apollo/node_modules/apollo-client/util/maybeDeepFreeze.js'
          );
          /* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
            /*! graphql/language/printer */ '../node_modules/react-apollo/node_modules/graphql/language/printer.js'
          );
          /* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(
            graphql_language_printer__WEBPACK_IMPORTED_MODULE_13__
          );
          /* harmony import */ var _data_readFromStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
            /*! ../data/readFromStore */ '../node_modules/react-apollo/node_modules/apollo-client/data/readFromStore.js'
          );
          /* harmony import */ var _mutations_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
            /*! ../mutations/store */ '../node_modules/react-apollo/node_modules/apollo-client/mutations/store.js'
          );
          /* harmony import */ var _scheduler_scheduler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
            /*! ../scheduler/scheduler */ '../node_modules/react-apollo/node_modules/apollo-client/scheduler/scheduler.js'
          );
          /* harmony import */ var _util_Observable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
            /*! ../util/Observable */ '../node_modules/react-apollo/node_modules/apollo-client/util/Observable.js'
          );
          /* harmony import */ var _errors_ApolloError__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
            /*! ../errors/ApolloError */ '../node_modules/react-apollo/node_modules/apollo-client/errors/ApolloError.js'
          );
          /* harmony import */ var _ObservableQuery__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
            /*! ./ObservableQuery */ '../node_modules/react-apollo/node_modules/apollo-client/core/ObservableQuery.js'
          );
          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };

          var QueryManager = (function() {
            function QueryManager(_a) {
              var networkInterface = _a.networkInterface,
                store = _a.store,
                reduxRootSelector = _a.reduxRootSelector,
                _b = _a.reducerConfig,
                reducerConfig = _b === void 0 ? {} : _b,
                fragmentMatcher = _a.fragmentMatcher,
                _c = _a.addTypename,
                addTypename = _c === void 0 ? true : _c,
                _d = _a.queryDeduplication,
                queryDeduplication = _d === void 0 ? false : _d,
                _e = _a.ssrMode,
                ssrMode = _e === void 0 ? false : _e;
              var _this = this;
              this.mutationStore = new _mutations_store__WEBPACK_IMPORTED_MODULE_15__[
                'MutationStore'
              ]();
              this.queryStore = new _queries_store__WEBPACK_IMPORTED_MODULE_4__[
                'QueryStore'
              ]();
              this.idCounter = 1;
              this.lastRequestId = {};
              this.disableBroadcasting = false;
              this.networkInterface = networkInterface;
              this.deduplicator = new _transport_Deduplicator__WEBPACK_IMPORTED_MODULE_0__[
                'Deduplicator'
              ](networkInterface);
              this.store = store;
              this.reduxRootSelector = reduxRootSelector;
              this.reducerConfig = reducerConfig;
              this.pollingTimers = {};
              this.queryListeners = {};
              this.queryDocuments = {};
              this.addTypename = addTypename;
              this.queryDeduplication = queryDeduplication;
              this.ssrMode = ssrMode;
              if (typeof fragmentMatcher === 'undefined') {
                this.fragmentMatcher = new _data_fragmentMatcher__WEBPACK_IMPORTED_MODULE_10__[
                  'HeuristicFragmentMatcher'
                ]();
              } else {
                this.fragmentMatcher = fragmentMatcher;
              }
              this.scheduler = new _scheduler_scheduler__WEBPACK_IMPORTED_MODULE_16__[
                'QueryScheduler'
              ]({
                queryManager: this,
              });
              this.fetchQueryPromises = {};
              this.observableQueries = {};
              this.queryIdsByName = {};
              if (this.store['subscribe']) {
                var currentStoreData_1;
                this.store['subscribe'](function() {
                  var previousStoreData = currentStoreData_1 || {};
                  var previousStoreHasData = Object.keys(previousStoreData).length;
                  currentStoreData_1 = _this.getApolloState();
                  if (
                    Object(_util_isEqual__WEBPACK_IMPORTED_MODULE_1__['isEqual'])(
                      previousStoreData,
                      currentStoreData_1
                    ) &&
                    previousStoreHasData
                  ) {
                    return;
                  }
                  _this.broadcastQueries();
                });
              }
            }
            QueryManager.prototype.broadcastNewStore = function(store) {
              this.broadcastQueries();
            };
            QueryManager.prototype.mutate = function(_a) {
              var _this = this;
              var mutation = _a.mutation,
                variables = _a.variables,
                optimisticResponse = _a.optimisticResponse,
                updateQueriesByName = _a.updateQueries,
                _b = _a.refetchQueries,
                refetchQueries = _b === void 0 ? [] : _b,
                updateWithProxyFn = _a.update;
              if (!mutation) {
                throw new Error(
                  'mutation option is required. You must specify your GraphQL document in the mutation option.'
                );
              }
              var mutationId = this.generateQueryId();
              if (this.addTypename) {
                mutation = Object(
                  _queries_queryTransform__WEBPACK_IMPORTED_MODULE_8__[
                    'addTypenameToDocument'
                  ]
                )(mutation);
              }
              variables = Object(_util_assign__WEBPACK_IMPORTED_MODULE_2__['assign'])(
                {},
                Object(
                  _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__['getDefaultValues']
                )(
                  Object(
                    _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__[
                      'getMutationDefinition'
                    ]
                  )(mutation)
                ),
                variables
              );
              var mutationString = Object(
                graphql_language_printer__WEBPACK_IMPORTED_MODULE_13__['print']
              )(mutation);
              var request = {
                query: mutation,
                variables: variables,
                operationName: Object(
                  _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__['getOperationName']
                )(mutation),
              };
              this.queryDocuments[mutationId] = mutation;
              var generateUpdateQueriesInfo = function() {
                var ret = {};
                if (updateQueriesByName) {
                  Object.keys(updateQueriesByName).forEach(function(queryName) {
                    return (_this.queryIdsByName[queryName] || []).forEach(function(
                      queryId
                    ) {
                      ret[queryId] = {
                        reducer: updateQueriesByName[queryName],
                        query: _this.queryStore.get(queryId),
                      };
                    });
                  });
                }
                return ret;
              };
              this.store.dispatch({
                type: 'APOLLO_MUTATION_INIT',
                mutationString: mutationString,
                mutation: mutation,
                variables: variables || {},
                operationName: Object(
                  _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__['getOperationName']
                )(mutation),
                mutationId: mutationId,
                optimisticResponse: optimisticResponse,
                extraReducers: this.getExtraReducers(),
                updateQueries: generateUpdateQueriesInfo(),
                update: updateWithProxyFn,
              });
              this.mutationStore.initMutation(mutationId, mutationString, variables);
              return new Promise(function(resolve, reject) {
                _this.networkInterface
                  .query(request)
                  .then(function(result) {
                    if (result.errors) {
                      var error = new _errors_ApolloError__WEBPACK_IMPORTED_MODULE_18__[
                        'ApolloError'
                      ]({
                        graphQLErrors: result.errors,
                      });
                      _this.store.dispatch({
                        type: 'APOLLO_MUTATION_ERROR',
                        error: error,
                        mutationId: mutationId,
                      });
                      _this.mutationStore.markMutationError(mutationId, error);
                      delete _this.queryDocuments[mutationId];
                      reject(error);
                      return;
                    }
                    _this.store.dispatch({
                      type: 'APOLLO_MUTATION_RESULT',
                      result: result,
                      mutationId: mutationId,
                      document: mutation,
                      operationName: Object(
                        _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__[
                          'getOperationName'
                        ]
                      )(mutation),
                      variables: variables || {},
                      extraReducers: _this.getExtraReducers(),
                      updateQueries: generateUpdateQueriesInfo(),
                      update: updateWithProxyFn,
                    });
                    _this.mutationStore.markMutationResult(mutationId);
                    var reducerError = _this.getApolloState().reducerError;
                    if (reducerError && reducerError.mutationId === mutationId) {
                      reject(reducerError.error);
                      return;
                    }
                    if (typeof refetchQueries[0] === 'string') {
                      refetchQueries.forEach(function(name) {
                        _this.refetchQueryByName(name);
                      });
                    } else {
                      refetchQueries.forEach(function(pureQuery) {
                        _this.query({
                          query: pureQuery.query,
                          variables: pureQuery.variables,
                          fetchPolicy: 'network-only',
                        });
                      });
                    }
                    delete _this.queryDocuments[mutationId];
                    resolve(result);
                  })
                  .catch(function(err) {
                    _this.store.dispatch({
                      type: 'APOLLO_MUTATION_ERROR',
                      error: err,
                      mutationId: mutationId,
                    });
                    delete _this.queryDocuments[mutationId];
                    reject(
                      new _errors_ApolloError__WEBPACK_IMPORTED_MODULE_18__[
                        'ApolloError'
                      ]({
                        networkError: err,
                      })
                    );
                  });
              });
            };
            QueryManager.prototype.fetchQuery = function(
              queryId,
              options,
              fetchType,
              fetchMoreForQueryId
            ) {
              var _this = this;
              var _a = options.variables,
                variables = _a === void 0 ? {} : _a,
                _b = options.metadata,
                metadata = _b === void 0 ? null : _b,
                _c = options.fetchPolicy,
                fetchPolicy = _c === void 0 ? 'cache-first' : _c;
              var queryDoc = this.transformQueryDocument(options).queryDoc;
              var queryString = Object(
                graphql_language_printer__WEBPACK_IMPORTED_MODULE_13__['print']
              )(queryDoc);
              var storeResult;
              var needToFetch = fetchPolicy === 'network-only';
              if (
                fetchType !== _types__WEBPACK_IMPORTED_MODULE_3__['FetchType'].refetch &&
                fetchPolicy !== 'network-only'
              ) {
                var _d = Object(
                    _data_readFromStore__WEBPACK_IMPORTED_MODULE_14__[
                      'diffQueryAgainstStore'
                    ]
                  )({
                    query: queryDoc,
                    store: this.reduxRootSelector(this.store.getState()).data,
                    variables: variables,
                    returnPartialData: true,
                    fragmentMatcherFunction: this.fragmentMatcher.match,
                    config: this.reducerConfig,
                  }),
                  isMissing = _d.isMissing,
                  result = _d.result;
                needToFetch = isMissing || fetchPolicy === 'cache-and-network';
                storeResult = result;
              }
              var shouldFetch =
                needToFetch && fetchPolicy !== 'cache-only' && fetchPolicy !== 'standby';
              var requestId = this.generateRequestId();
              this.queryDocuments[queryId] = queryDoc;
              this.queryStore.initQuery({
                queryId: queryId,
                queryString: queryString,
                document: queryDoc,
                storePreviousVariables: shouldFetch,
                variables: variables,
                isPoll:
                  fetchType === _types__WEBPACK_IMPORTED_MODULE_3__['FetchType'].poll,
                isRefetch:
                  fetchType === _types__WEBPACK_IMPORTED_MODULE_3__['FetchType'].refetch,
                metadata: metadata,
                fetchMoreForQueryId: fetchMoreForQueryId,
              });
              this.broadcastQueries();
              if (QueryManager.EMIT_REDUX_ACTIONS) {
                this.store.dispatch({
                  type: 'APOLLO_QUERY_INIT',
                  queryString: queryString,
                  document: queryDoc,
                  operationName: Object(
                    _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__['getOperationName']
                  )(queryDoc),
                  variables: variables,
                  fetchPolicy: fetchPolicy,
                  queryId: queryId,
                  requestId: requestId,
                  storePreviousVariables: shouldFetch,
                  isPoll:
                    fetchType === _types__WEBPACK_IMPORTED_MODULE_3__['FetchType'].poll,
                  isRefetch:
                    fetchType ===
                    _types__WEBPACK_IMPORTED_MODULE_3__['FetchType'].refetch,
                  fetchMoreForQueryId: fetchMoreForQueryId,
                  metadata: metadata,
                });
              }
              this.lastRequestId[queryId] = requestId;
              var shouldDispatchClientResult =
                !shouldFetch || fetchPolicy === 'cache-and-network';
              if (shouldDispatchClientResult) {
                this.queryStore.markQueryResultClient(queryId, !shouldFetch);
                this.broadcastQueries();
                if (QueryManager.EMIT_REDUX_ACTIONS) {
                  this.store.dispatch({
                    type: 'APOLLO_QUERY_RESULT_CLIENT',
                    result: {data: storeResult},
                    variables: variables,
                    document: queryDoc,
                    operationName: Object(
                      _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__['getOperationName']
                    )(queryDoc),
                    complete: !shouldFetch,
                    queryId: queryId,
                    requestId: requestId,
                  });
                }
              }
              if (shouldFetch) {
                var networkResult = this.fetchRequest({
                  requestId: requestId,
                  queryId: queryId,
                  document: queryDoc,
                  options: options,
                  fetchMoreForQueryId: fetchMoreForQueryId,
                }).catch(function(error) {
                  if (
                    Object(
                      _errors_ApolloError__WEBPACK_IMPORTED_MODULE_18__['isApolloError']
                    )(error)
                  ) {
                    throw error;
                  } else {
                    if (requestId >= (_this.lastRequestId[queryId] || 1)) {
                      if (QueryManager.EMIT_REDUX_ACTIONS) {
                        _this.store.dispatch({
                          type: 'APOLLO_QUERY_ERROR',
                          error: error,
                          queryId: queryId,
                          requestId: requestId,
                          fetchMoreForQueryId: fetchMoreForQueryId,
                        });
                      }
                      _this.queryStore.markQueryError(
                        queryId,
                        error,
                        fetchMoreForQueryId
                      );
                      _this.broadcastQueries();
                    }
                    _this.removeFetchQueryPromise(requestId);
                    throw new _errors_ApolloError__WEBPACK_IMPORTED_MODULE_18__[
                      'ApolloError'
                    ]({
                      networkError: error,
                    });
                  }
                });
                if (fetchPolicy !== 'cache-and-network') {
                  return networkResult;
                }
              }
              return Promise.resolve({data: storeResult});
            };
            QueryManager.prototype.queryListenerForObserver = function(
              queryId,
              options,
              observer
            ) {
              var _this = this;
              var previouslyHadError = false;
              return function(queryStoreValue) {
                if (!queryStoreValue) {
                  return;
                }
                queryStoreValue = _this.queryStore.get(queryId);
                var storedQuery = _this.observableQueries[queryId];
                var observableQuery = storedQuery ? storedQuery.observableQuery : null;
                var fetchPolicy = observableQuery
                  ? observableQuery.options.fetchPolicy
                  : options.fetchPolicy;
                if (fetchPolicy === 'standby') {
                  return;
                }
                var lastResult = observableQuery ? observableQuery.getLastResult() : null;
                var shouldNotifyIfLoading =
                  queryStoreValue.previousVariables ||
                  fetchPolicy === 'cache-only' ||
                  fetchPolicy === 'cache-and-network';
                var networkStatusChanged =
                  lastResult &&
                  queryStoreValue.networkStatus !== lastResult.networkStatus;
                if (
                  !Object(
                    _queries_networkStatus__WEBPACK_IMPORTED_MODULE_5__[
                      'isNetworkRequestInFlight'
                    ]
                  )(queryStoreValue.networkStatus) ||
                  (networkStatusChanged && options.notifyOnNetworkStatusChange) ||
                  shouldNotifyIfLoading
                ) {
                  if (
                    (queryStoreValue.graphQLErrors &&
                      queryStoreValue.graphQLErrors.length > 0) ||
                    queryStoreValue.networkError
                  ) {
                    var apolloError_1 = new _errors_ApolloError__WEBPACK_IMPORTED_MODULE_18__[
                      'ApolloError'
                    ]({
                      graphQLErrors: queryStoreValue.graphQLErrors,
                      networkError: queryStoreValue.networkError,
                    });
                    previouslyHadError = true;
                    if (observer.error) {
                      try {
                        observer.error(apolloError_1);
                      } catch (e) {
                        setTimeout(function() {
                          throw e;
                        }, 0);
                      }
                    } else {
                      setTimeout(function() {
                        throw apolloError_1;
                      }, 0);
                      if (
                        !Object(
                          _util_environment__WEBPACK_IMPORTED_MODULE_11__['isProduction']
                        )()
                      ) {
                        console.info(
                          'An unhandled error was thrown because no error handler is registered ' +
                            'for the query ' +
                            queryStoreValue.queryString
                        );
                      }
                    }
                  } else {
                    try {
                      var _a = Object(
                          _data_readFromStore__WEBPACK_IMPORTED_MODULE_14__[
                            'diffQueryAgainstStore'
                          ]
                        )({
                          store: _this.getDataWithOptimisticResults(),
                          query: _this.queryDocuments[queryId],
                          variables:
                            queryStoreValue.previousVariables ||
                            queryStoreValue.variables,
                          config: _this.reducerConfig,
                          fragmentMatcherFunction: _this.fragmentMatcher.match,
                          previousResult: lastResult && lastResult.data,
                        }),
                        data = _a.result,
                        isMissing = _a.isMissing;
                      var resultFromStore = void 0;
                      if (isMissing && fetchPolicy !== 'cache-only') {
                        resultFromStore = {
                          data: lastResult && lastResult.data,
                          loading: Object(
                            _queries_networkStatus__WEBPACK_IMPORTED_MODULE_5__[
                              'isNetworkRequestInFlight'
                            ]
                          )(queryStoreValue.networkStatus),
                          networkStatus: queryStoreValue.networkStatus,
                          stale: true,
                        };
                      } else {
                        resultFromStore = {
                          data: data,
                          loading: Object(
                            _queries_networkStatus__WEBPACK_IMPORTED_MODULE_5__[
                              'isNetworkRequestInFlight'
                            ]
                          )(queryStoreValue.networkStatus),
                          networkStatus: queryStoreValue.networkStatus,
                          stale: false,
                        };
                      }
                      if (observer.next) {
                        var isDifferentResult = !(
                          lastResult &&
                          resultFromStore &&
                          lastResult.networkStatus === resultFromStore.networkStatus &&
                          lastResult.stale === resultFromStore.stale &&
                          lastResult.data === resultFromStore.data
                        );
                        if (isDifferentResult || previouslyHadError) {
                          try {
                            observer.next(
                              Object(
                                _util_maybeDeepFreeze__WEBPACK_IMPORTED_MODULE_12__[
                                  'default'
                                ]
                              )(resultFromStore)
                            );
                          } catch (e) {
                            setTimeout(function() {
                              throw e;
                            }, 0);
                          }
                        }
                      }
                      previouslyHadError = false;
                    } catch (error) {
                      previouslyHadError = true;
                      if (observer.error) {
                        observer.error(
                          new _errors_ApolloError__WEBPACK_IMPORTED_MODULE_18__[
                            'ApolloError'
                          ]({
                            networkError: error,
                          })
                        );
                      }
                      return;
                    }
                  }
                }
              };
            };
            QueryManager.prototype.watchQuery = function(options, shouldSubscribe) {
              if (shouldSubscribe === void 0) {
                shouldSubscribe = true;
              }
              if (options.returnPartialData) {
                throw new Error(
                  'returnPartialData option is no longer supported since Apollo Client 1.0.'
                );
              }
              if (options.forceFetch) {
                throw new Error(
                  'forceFetch option is no longer supported since Apollo Client 1.0. Use fetchPolicy instead.'
                );
              }
              if (options.noFetch) {
                throw new Error(
                  'noFetch option is no longer supported since Apollo Client 1.0. Use fetchPolicy instead.'
                );
              }
              if (options.fetchPolicy === 'standby') {
                throw new Error(
                  'client.watchQuery cannot be called with fetchPolicy set to "standby"'
                );
              }
              var queryDefinition = Object(
                _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__['getQueryDefinition']
              )(options.query);
              if (
                queryDefinition.variableDefinitions &&
                queryDefinition.variableDefinitions.length
              ) {
                var defaultValues = Object(
                  _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__['getDefaultValues']
                )(queryDefinition);
                options.variables = Object(
                  _util_assign__WEBPACK_IMPORTED_MODULE_2__['assign']
                )({}, defaultValues, options.variables);
              }
              if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
                options.notifyOnNetworkStatusChange = false;
              }
              var transformedOptions = __assign({}, options);
              var observableQuery = new _ObservableQuery__WEBPACK_IMPORTED_MODULE_19__[
                'ObservableQuery'
              ]({
                scheduler: this.scheduler,
                options: transformedOptions,
                shouldSubscribe: shouldSubscribe,
              });
              return observableQuery;
            };
            QueryManager.prototype.query = function(options) {
              var _this = this;
              if (!options.query) {
                throw new Error(
                  'query option is required. You must specify your GraphQL document in the query option.'
                );
              }
              if (options.query.kind !== 'Document') {
                throw new Error('You must wrap the query string in a "gql" tag.');
              }
              if (options.returnPartialData) {
                throw new Error('returnPartialData option only supported on watchQuery.');
              }
              if (options.pollInterval) {
                throw new Error('pollInterval option only supported on watchQuery.');
              }
              if (options.forceFetch) {
                throw new Error(
                  'forceFetch option is no longer supported since Apollo Client 1.0. Use fetchPolicy instead.'
                );
              }
              if (options.noFetch) {
                throw new Error(
                  'noFetch option is no longer supported since Apollo Client 1.0. Use fetchPolicy instead.'
                );
              }
              if (typeof options.notifyOnNetworkStatusChange !== 'undefined') {
                throw new Error(
                  'Cannot call "query" with "notifyOnNetworkStatusChange" option. Only "watchQuery" has that option.'
                );
              }
              options.notifyOnNetworkStatusChange = false;
              var requestId = this.idCounter;
              var resPromise = new Promise(function(resolve, reject) {
                _this.addFetchQueryPromise(requestId, resPromise, resolve, reject);
                return _this
                  .watchQuery(options, false)
                  .result()
                  .then(function(result) {
                    _this.removeFetchQueryPromise(requestId);
                    resolve(result);
                  })
                  .catch(function(error) {
                    _this.removeFetchQueryPromise(requestId);
                    reject(error);
                  });
              });
              return resPromise;
            };
            QueryManager.prototype.generateQueryId = function() {
              var queryId = this.idCounter.toString();
              this.idCounter++;
              return queryId;
            };
            QueryManager.prototype.stopQueryInStore = function(queryId) {
              this.queryStore.stopQuery(queryId);
              this.broadcastQueries();
              if (QueryManager.EMIT_REDUX_ACTIONS) {
                this.store.dispatch({
                  type: 'APOLLO_QUERY_STOP',
                  queryId: queryId,
                });
              }
            };
            QueryManager.prototype.getApolloState = function() {
              return this.reduxRootSelector(this.store.getState());
            };
            QueryManager.prototype.selectApolloState = function(store) {
              return this.reduxRootSelector(store.getState());
            };
            QueryManager.prototype.getInitialState = function() {
              return {data: this.getApolloState().data};
            };
            QueryManager.prototype.getDataWithOptimisticResults = function() {
              return Object(
                _store__WEBPACK_IMPORTED_MODULE_6__['getDataWithOptimisticResults']
              )(this.getApolloState());
            };
            QueryManager.prototype.addQueryListener = function(queryId, listener) {
              this.queryListeners[queryId] = this.queryListeners[queryId] || [];
              this.queryListeners[queryId].push(listener);
            };
            QueryManager.prototype.addFetchQueryPromise = function(
              requestId,
              promise,
              resolve,
              reject
            ) {
              this.fetchQueryPromises[requestId.toString()] = {
                promise: promise,
                resolve: resolve,
                reject: reject,
              };
            };
            QueryManager.prototype.removeFetchQueryPromise = function(requestId) {
              delete this.fetchQueryPromises[requestId.toString()];
            };
            QueryManager.prototype.addObservableQuery = function(
              queryId,
              observableQuery
            ) {
              this.observableQueries[queryId] = {observableQuery: observableQuery};
              var queryDef = Object(
                _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__['getQueryDefinition']
              )(observableQuery.options.query);
              if (queryDef.name && queryDef.name.value) {
                var queryName = queryDef.name.value;
                this.queryIdsByName[queryName] = this.queryIdsByName[queryName] || [];
                this.queryIdsByName[queryName].push(observableQuery.queryId);
              }
            };
            QueryManager.prototype.removeObservableQuery = function(queryId) {
              var observableQuery = this.observableQueries[queryId].observableQuery;
              var definition = Object(
                _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__['getQueryDefinition']
              )(observableQuery.options.query);
              var queryName = definition.name ? definition.name.value : null;
              delete this.observableQueries[queryId];
              if (queryName) {
                this.queryIdsByName[queryName] = this.queryIdsByName[queryName].filter(
                  function(val) {
                    return !(observableQuery.queryId === val);
                  }
                );
              }
            };
            QueryManager.prototype.resetStore = function() {
              var _this = this;
              Object.keys(this.fetchQueryPromises).forEach(function(key) {
                var reject = _this.fetchQueryPromises[key].reject;
                reject(new Error('Store reset while query was in flight.'));
              });
              this.queryStore.reset(Object.keys(this.observableQueries));
              this.store.dispatch({
                type: 'APOLLO_STORE_RESET',
                observableQueryIds: Object.keys(this.observableQueries),
              });
              this.mutationStore.reset();
              var observableQueryPromises = [];
              Object.keys(this.observableQueries).forEach(function(queryId) {
                var storeQuery = _this.queryStore.get(queryId);
                var fetchPolicy =
                  _this.observableQueries[queryId].observableQuery.options.fetchPolicy;
                if (fetchPolicy !== 'cache-only' && fetchPolicy !== 'standby') {
                  observableQueryPromises.push(
                    _this.observableQueries[queryId].observableQuery.refetch()
                  );
                }
              });
              return Promise.all(observableQueryPromises);
            };
            QueryManager.prototype.startQuery = function(queryId, options, listener) {
              this.addQueryListener(queryId, listener);
              this.fetchQuery(queryId, options).catch(function(error) {
                return undefined;
              });
              return queryId;
            };
            QueryManager.prototype.startGraphQLSubscription = function(options) {
              var _this = this;
              var query = options.query;
              var transformedDoc = query;
              if (this.addTypename) {
                transformedDoc = Object(
                  _queries_queryTransform__WEBPACK_IMPORTED_MODULE_8__[
                    'addTypenameToDocument'
                  ]
                )(transformedDoc);
              }
              var variables = Object(_util_assign__WEBPACK_IMPORTED_MODULE_2__['assign'])(
                {},
                Object(
                  _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__['getDefaultValues']
                )(
                  Object(
                    _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__[
                      'getOperationDefinition'
                    ]
                  )(query)
                ),
                options.variables
              );
              var request = {
                query: transformedDoc,
                variables: variables,
                operationName: Object(
                  _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__['getOperationName']
                )(transformedDoc),
              };
              var subId;
              var observers = [];
              return new _util_Observable__WEBPACK_IMPORTED_MODULE_17__['Observable'](
                function(observer) {
                  observers.push(observer);
                  if (observers.length === 1) {
                    var handler = function(error, result) {
                      if (error) {
                        observers.forEach(function(obs) {
                          if (obs.error) {
                            obs.error(error);
                          }
                        });
                      } else {
                        _this.store.dispatch({
                          type: 'APOLLO_SUBSCRIPTION_RESULT',
                          document: transformedDoc,
                          operationName: Object(
                            _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__[
                              'getOperationName'
                            ]
                          )(transformedDoc),
                          result: {data: result},
                          variables: variables,
                          subscriptionId: subId,
                          extraReducers: _this.getExtraReducers(),
                        });
                        observers.forEach(function(obs) {
                          if (obs.next) {
                            obs.next(result);
                          }
                        });
                      }
                    };
                    subId = _this.networkInterface.subscribe(request, handler);
                  }
                  return {
                    unsubscribe: function() {
                      observers = observers.filter(function(obs) {
                        return obs !== observer;
                      });
                      if (observers.length === 0) {
                        _this.networkInterface.unsubscribe(subId);
                      }
                    },
                    _networkSubscriptionId: subId,
                  };
                }
              );
            };
            QueryManager.prototype.removeQuery = function(queryId) {
              delete this.queryListeners[queryId];
              delete this.queryDocuments[queryId];
            };
            QueryManager.prototype.stopQuery = function(queryId) {
              this.removeQuery(queryId);
              this.stopQueryInStore(queryId);
            };
            QueryManager.prototype.getCurrentQueryResult = function(
              observableQuery,
              isOptimistic
            ) {
              if (isOptimistic === void 0) {
                isOptimistic = false;
              }
              var _a = this.getQueryParts(observableQuery),
                variables = _a.variables,
                document = _a.document;
              var lastResult = observableQuery.getLastResult();
              var queryOptions = observableQuery.options;
              var readOptions = {
                store: isOptimistic
                  ? this.getDataWithOptimisticResults()
                  : this.getApolloState().data,
                query: document,
                variables: variables,
                config: this.reducerConfig,
                previousResult: lastResult ? lastResult.data : undefined,
                fragmentMatcherFunction: this.fragmentMatcher.match,
              };
              try {
                var data = Object(
                  _data_readFromStore__WEBPACK_IMPORTED_MODULE_14__['readQueryFromStore']
                )(readOptions);
                return Object(
                  _util_maybeDeepFreeze__WEBPACK_IMPORTED_MODULE_12__['default']
                )({data: data, partial: false});
              } catch (e) {
                return Object(
                  _util_maybeDeepFreeze__WEBPACK_IMPORTED_MODULE_12__['default']
                )({data: {}, partial: true});
              }
            };
            QueryManager.prototype.getQueryWithPreviousResult = function(
              queryIdOrObservable,
              isOptimistic
            ) {
              if (isOptimistic === void 0) {
                isOptimistic = false;
              }
              var observableQuery;
              if (typeof queryIdOrObservable === 'string') {
                if (!this.observableQueries[queryIdOrObservable]) {
                  throw new Error(
                    "ObservableQuery with this id doesn't exist: " + queryIdOrObservable
                  );
                }
                observableQuery = this.observableQueries[queryIdOrObservable]
                  .observableQuery;
              } else {
                observableQuery = queryIdOrObservable;
              }
              var _a = this.getQueryParts(observableQuery),
                variables = _a.variables,
                document = _a.document;
              var data = this.getCurrentQueryResult(observableQuery, isOptimistic).data;
              return {
                previousResult: data,
                variables: variables,
                document: document,
              };
            };
            QueryManager.prototype.getQueryParts = function(observableQuery) {
              var queryOptions = observableQuery.options;
              var transformedDoc = observableQuery.options.query;
              if (this.addTypename) {
                transformedDoc = Object(
                  _queries_queryTransform__WEBPACK_IMPORTED_MODULE_8__[
                    'addTypenameToDocument'
                  ]
                )(transformedDoc);
              }
              return {
                variables: queryOptions.variables,
                document: transformedDoc,
              };
            };
            QueryManager.prototype.transformQueryDocument = function(options) {
              var queryDoc = options.query;
              if (this.addTypename) {
                queryDoc = Object(
                  _queries_queryTransform__WEBPACK_IMPORTED_MODULE_8__[
                    'addTypenameToDocument'
                  ]
                )(queryDoc);
              }
              return {
                queryDoc: queryDoc,
              };
            };
            QueryManager.prototype.getExtraReducers = function() {
              var _this = this;
              return Object.keys(this.observableQueries)
                .map(function(obsQueryId) {
                  var query = _this.observableQueries[obsQueryId].observableQuery;
                  var queryOptions = query.options;
                  if (queryOptions.reducer) {
                    return Object(
                      _data_resultReducers__WEBPACK_IMPORTED_MODULE_9__[
                        'createStoreReducer'
                      ]
                    )(
                      queryOptions.reducer,
                      _this.addTypename
                        ? Object(
                            _queries_queryTransform__WEBPACK_IMPORTED_MODULE_8__[
                              'addTypenameToDocument'
                            ]
                          )(queryOptions.query)
                        : queryOptions.query,
                      query.variables || {},
                      _this.reducerConfig
                    );
                  }
                  return null;
                })
                .filter(function(reducer) {
                  return reducer !== null;
                });
            };
            QueryManager.prototype.fetchRequest = function(_a) {
              var _this = this;
              var requestId = _a.requestId,
                queryId = _a.queryId,
                document = _a.document,
                options = _a.options,
                fetchMoreForQueryId = _a.fetchMoreForQueryId;
              var variables = options.variables;
              var request = {
                query: document,
                variables: variables,
                operationName: Object(
                  _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__['getOperationName']
                )(document),
              };
              var retPromise = new Promise(function(resolve, reject) {
                _this.addFetchQueryPromise(requestId, retPromise, resolve, reject);
                _this.deduplicator
                  .query(request, _this.queryDeduplication)
                  .then(function(result) {
                    var extraReducers = _this.getExtraReducers();
                    if (requestId >= (_this.lastRequestId[queryId] || 1)) {
                      _this.disableBroadcasting = true;
                      _this.store.dispatch({
                        type: 'APOLLO_QUERY_RESULT',
                        document: document,
                        variables: variables ? variables : {},
                        operationName: Object(
                          _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__[
                            'getOperationName'
                          ]
                        )(document),
                        result: result,
                        queryId: queryId,
                        requestId: requestId,
                        fetchMoreForQueryId: fetchMoreForQueryId,
                        extraReducers: extraReducers,
                      });
                      _this.disableBroadcasting = false;
                      var reducerError = _this.getApolloState().reducerError;
                      if (!reducerError || reducerError.queryId !== queryId) {
                        _this.queryStore.markQueryResult(
                          queryId,
                          result,
                          fetchMoreForQueryId
                        );
                        _this.broadcastQueries();
                      }
                    }
                    _this.removeFetchQueryPromise(requestId);
                    if (result.errors) {
                      throw new _errors_ApolloError__WEBPACK_IMPORTED_MODULE_18__[
                        'ApolloError'
                      ]({
                        graphQLErrors: result.errors,
                      });
                    }
                    return result;
                  })
                  .then(function(result) {
                    var resultFromStore;
                    if (fetchMoreForQueryId) {
                      resultFromStore = result.data;
                    } else {
                      try {
                        resultFromStore = Object(
                          _data_readFromStore__WEBPACK_IMPORTED_MODULE_14__[
                            'readQueryFromStore'
                          ]
                        )({
                          store: _this.getApolloState().data,
                          variables: variables,
                          query: document,
                          config: _this.reducerConfig,
                          fragmentMatcherFunction: _this.fragmentMatcher.match,
                        });
                      } catch (e) {}
                    }
                    var reducerError = _this.getApolloState().reducerError;
                    if (reducerError && reducerError.queryId === queryId) {
                      return Promise.reject(reducerError.error);
                    }
                    _this.removeFetchQueryPromise(requestId);
                    resolve({
                      data: resultFromStore,
                      loading: false,
                      networkStatus:
                        _queries_networkStatus__WEBPACK_IMPORTED_MODULE_5__[
                          'NetworkStatus'
                        ].ready,
                      stale: false,
                    });
                    return Promise.resolve();
                  })
                  .catch(function(error) {
                    reject(error);
                  });
              });
              return retPromise;
            };
            QueryManager.prototype.refetchQueryByName = function(queryName) {
              var _this = this;
              var refetchedQueries = this.queryIdsByName[queryName];
              if (refetchedQueries === undefined) {
                console.warn(
                  'Warning: unknown query with name ' + queryName + ' asked to refetch'
                );
                return;
              } else {
                return Promise.all(
                  refetchedQueries.map(function(queryId) {
                    return _this.observableQueries[queryId].observableQuery.refetch();
                  })
                );
              }
            };
            QueryManager.prototype.broadcastQueries = function() {
              var _this = this;
              if (this.disableBroadcasting) {
                return;
              }
              Object.keys(this.queryListeners).forEach(function(queryId) {
                var listeners = _this.queryListeners[queryId];
                if (listeners) {
                  listeners.forEach(function(listener) {
                    if (listener) {
                      var queryStoreValue = _this.queryStore.get(queryId);
                      listener(queryStoreValue);
                    }
                  });
                }
              });
            };
            QueryManager.prototype.generateRequestId = function() {
              var requestId = this.idCounter;
              this.idCounter++;
              return requestId;
            };
            QueryManager.EMIT_REDUX_ACTIONS = true;
            return QueryManager;
          })();

          //# sourceMappingURL=QueryManager.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/core/types.js':
        /*!*****************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/core/types.js ***!
  \*****************************************************************************/
        /*! exports provided: FetchType */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'FetchType',
            function() {
              return FetchType;
            }
          );
          var FetchType;
          (function(FetchType) {
            FetchType[(FetchType['normal'] = 1)] = 'normal';
            FetchType[(FetchType['refetch'] = 2)] = 'refetch';
            FetchType[(FetchType['poll'] = 3)] = 'poll';
          })(FetchType || (FetchType = {}));
          //# sourceMappingURL=types.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/data/fragmentMatcher.js':
        /*!***************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/data/fragmentMatcher.js ***!
  \***************************************************************************************/
        /*! exports provided: IntrospectionFragmentMatcher, HeuristicFragmentMatcher */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'IntrospectionFragmentMatcher',
            function() {
              return IntrospectionFragmentMatcher;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'HeuristicFragmentMatcher',
            function() {
              return HeuristicFragmentMatcher;
            }
          );
          /* harmony import */ var _util_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ../util/environment */ '../node_modules/react-apollo/node_modules/apollo-client/util/environment.js'
          );
          /* harmony import */ var _util_warnOnce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ../util/warnOnce */ '../node_modules/react-apollo/node_modules/apollo-client/util/warnOnce.js'
          );

          var IntrospectionFragmentMatcher = (function() {
            function IntrospectionFragmentMatcher(options) {
              if (options && options.introspectionQueryResultData) {
                this.possibleTypesMap = this.parseIntrospectionResult(
                  options.introspectionQueryResultData
                );
                this.isReady = true;
              } else {
                this.isReady = false;
              }
              this.match = this.match.bind(this);
            }
            IntrospectionFragmentMatcher.prototype.match = function(
              idValue,
              typeCondition,
              context
            ) {
              if (!this.isReady) {
                throw new Error(
                  'FragmentMatcher.match() was called before FragmentMatcher.init()'
                );
              }
              var obj = context.store[idValue.id];
              if (!obj) {
                return false;
              }
              if (!obj.__typename) {
                throw new Error(
                  'Cannot match fragment because __typename property is missing: ' +
                    JSON.stringify(obj)
                );
              }
              if (obj.__typename === typeCondition) {
                return true;
              }
              var implementingTypes = this.possibleTypesMap[typeCondition];
              if (implementingTypes && implementingTypes.indexOf(obj.__typename) > -1) {
                return true;
              }
              return false;
            };
            IntrospectionFragmentMatcher.prototype.parseIntrospectionResult = function(
              introspectionResultData
            ) {
              var typeMap = {};
              introspectionResultData.__schema.types.forEach(function(type) {
                if (type.kind === 'UNION' || type.kind === 'INTERFACE') {
                  typeMap[type.name] = type.possibleTypes.map(function(implementingType) {
                    return implementingType.name;
                  });
                }
              });
              return typeMap;
            };
            return IntrospectionFragmentMatcher;
          })();

          var haveWarned = false;
          var HeuristicFragmentMatcher = (function() {
            function HeuristicFragmentMatcher() {}
            HeuristicFragmentMatcher.prototype.ensureReady = function() {
              return Promise.resolve();
            };
            HeuristicFragmentMatcher.prototype.canBypassInit = function() {
              return true;
            };
            HeuristicFragmentMatcher.prototype.match = function(
              idValue,
              typeCondition,
              context
            ) {
              var obj = context.store[idValue.id];
              if (!obj) {
                return false;
              }
              if (!obj.__typename) {
                if (!haveWarned) {
                  console.warn(
                    "You're using fragments in your queries, but either don't have the addTypename:\n  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.\n   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client\n   can accurately match fragments."
                  );
                  console.warn(
                    'Could not find __typename on Fragment ',
                    typeCondition,
                    obj
                  );
                  console.warn(
                    'DEPRECATION WARNING: using fragments without __typename is unsupported behavior ' +
                      'and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now.'
                  );
                  if (
                    !Object(_util_environment__WEBPACK_IMPORTED_MODULE_0__['isTest'])()
                  ) {
                    haveWarned = true;
                  }
                }
                context.returnPartialData = true;
                return true;
              }
              if (obj.__typename === typeCondition) {
                return true;
              }
              Object(
                _util_warnOnce__WEBPACK_IMPORTED_MODULE_1__['warnOnceInDevelopment']
              )(
                'You are using the simple (heuristic) fragment matcher, but your queries contain union or interface types.\n     Apollo Client will not be able to able to accurately map fragments.' +
                  'To make this error go away, use the IntrospectionFragmentMatcher as described in the docs: ' +
                  'http://dev.apollodata.com/react/initialization.html#fragment-matcher',
                'error'
              );
              context.returnPartialData = true;
              return true;
            };
            return HeuristicFragmentMatcher;
          })();

          //# sourceMappingURL=fragmentMatcher.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/data/proxy.js':
        /*!*****************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/data/proxy.js ***!
  \*****************************************************************************/
        /*! exports provided: ReduxDataProxy, TransactionDataProxy */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'ReduxDataProxy',
            function() {
              return ReduxDataProxy;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'TransactionDataProxy',
            function() {
              return TransactionDataProxy;
            }
          );
          /* harmony import */ var _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ../queries/getFromAST */ '../node_modules/react-apollo/node_modules/apollo-client/queries/getFromAST.js'
          );
          /* harmony import */ var _optimistic_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ../optimistic-data/store */ '../node_modules/react-apollo/node_modules/apollo-client/optimistic-data/store.js'
          );
          /* harmony import */ var _readFromStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./readFromStore */ '../node_modules/react-apollo/node_modules/apollo-client/data/readFromStore.js'
          );
          /* harmony import */ var _writeToStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./writeToStore */ '../node_modules/react-apollo/node_modules/apollo-client/data/writeToStore.js'
          );
          /* harmony import */ var _queries_queryTransform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ../queries/queryTransform */ '../node_modules/react-apollo/node_modules/apollo-client/queries/queryTransform.js'
          );
          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };

          var ReduxDataProxy = (function() {
            function ReduxDataProxy(
              store,
              reduxRootSelector,
              fragmentMatcher,
              reducerConfig
            ) {
              this.store = store;
              this.reduxRootSelector = reduxRootSelector;
              this.reducerConfig = reducerConfig;
              this.fragmentMatcher = fragmentMatcher;
            }
            ReduxDataProxy.prototype.readQuery = function(_a) {
              var query = _a.query,
                variables = _a.variables;
              if (this.reducerConfig.addTypename) {
                query = Object(
                  _queries_queryTransform__WEBPACK_IMPORTED_MODULE_4__[
                    'addTypenameToDocument'
                  ]
                )(query);
              }
              return Object(
                _readFromStore__WEBPACK_IMPORTED_MODULE_2__['readQueryFromStore']
              )({
                rootId: 'ROOT_QUERY',
                store: Object(
                  _optimistic_data_store__WEBPACK_IMPORTED_MODULE_1__[
                    'getDataWithOptimisticResults'
                  ]
                )(this.reduxRootSelector(this.store.getState())),
                query: query,
                variables: variables,
                fragmentMatcherFunction: this.fragmentMatcher.match,
                config: this.reducerConfig,
              });
            };
            ReduxDataProxy.prototype.readFragment = function(_a) {
              var id = _a.id,
                fragment = _a.fragment,
                fragmentName = _a.fragmentName,
                variables = _a.variables;
              var query = Object(
                _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__[
                  'getFragmentQueryDocument'
                ]
              )(fragment, fragmentName);
              var data = Object(
                _optimistic_data_store__WEBPACK_IMPORTED_MODULE_1__[
                  'getDataWithOptimisticResults'
                ]
              )(this.reduxRootSelector(this.store.getState()));
              if (typeof data[id] === 'undefined') {
                return null;
              }
              if (this.reducerConfig.addTypename) {
                query = Object(
                  _queries_queryTransform__WEBPACK_IMPORTED_MODULE_4__[
                    'addTypenameToDocument'
                  ]
                )(query);
              }
              return Object(
                _readFromStore__WEBPACK_IMPORTED_MODULE_2__['readQueryFromStore']
              )({
                rootId: id,
                store: data,
                query: query,
                variables: variables,
                fragmentMatcherFunction: this.fragmentMatcher.match,
                config: this.reducerConfig,
              });
            };
            ReduxDataProxy.prototype.writeQuery = function(_a) {
              var data = _a.data,
                query = _a.query,
                variables = _a.variables;
              if (this.reducerConfig.addTypename) {
                query = Object(
                  _queries_queryTransform__WEBPACK_IMPORTED_MODULE_4__[
                    'addTypenameToDocument'
                  ]
                )(query);
              }
              this.store.dispatch({
                type: 'APOLLO_WRITE',
                writes: [
                  {
                    rootId: 'ROOT_QUERY',
                    result: data,
                    document: query,
                    operationName: Object(
                      _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__['getOperationName']
                    )(query),
                    variables: variables || {},
                  },
                ],
              });
            };
            ReduxDataProxy.prototype.writeFragment = function(_a) {
              var data = _a.data,
                id = _a.id,
                fragment = _a.fragment,
                fragmentName = _a.fragmentName,
                variables = _a.variables;
              var document = Object(
                _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__[
                  'getFragmentQueryDocument'
                ]
              )(fragment, fragmentName);
              if (this.reducerConfig.addTypename) {
                document = Object(
                  _queries_queryTransform__WEBPACK_IMPORTED_MODULE_4__[
                    'addTypenameToDocument'
                  ]
                )(document);
              }
              this.store.dispatch({
                type: 'APOLLO_WRITE',
                writes: [
                  {
                    rootId: id,
                    result: data,
                    document: document,
                    operationName: Object(
                      _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__['getOperationName']
                    )(document),
                    variables: variables || {},
                  },
                ],
              });
            };
            return ReduxDataProxy;
          })();

          var TransactionDataProxy = (function() {
            function TransactionDataProxy(data, reducerConfig) {
              this.data = __assign({}, data);
              this.reducerConfig = reducerConfig;
              this.writes = [];
              this.isFinished = false;
            }
            TransactionDataProxy.prototype.finish = function() {
              this.assertNotFinished();
              var writes = this.writes;
              this.writes = [];
              this.isFinished = true;
              return writes;
            };
            TransactionDataProxy.prototype.readQuery = function(_a) {
              var query = _a.query,
                variables = _a.variables;
              this.assertNotFinished();
              if (this.reducerConfig.addTypename) {
                query = Object(
                  _queries_queryTransform__WEBPACK_IMPORTED_MODULE_4__[
                    'addTypenameToDocument'
                  ]
                )(query);
              }
              return Object(
                _readFromStore__WEBPACK_IMPORTED_MODULE_2__['readQueryFromStore']
              )({
                rootId: 'ROOT_QUERY',
                store: this.data,
                query: query,
                variables: variables,
                config: this.reducerConfig,
                fragmentMatcherFunction: this.reducerConfig.fragmentMatcher,
              });
            };
            TransactionDataProxy.prototype.readFragment = function(_a) {
              var id = _a.id,
                fragment = _a.fragment,
                fragmentName = _a.fragmentName,
                variables = _a.variables;
              this.assertNotFinished();
              if (!fragment) {
                throw new Error(
                  'fragment option is required. Please pass a GraphQL fragment to readFragment.'
                );
              }
              var data = this.data;
              var query = Object(
                _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__[
                  'getFragmentQueryDocument'
                ]
              )(fragment, fragmentName);
              if (this.reducerConfig.addTypename) {
                query = Object(
                  _queries_queryTransform__WEBPACK_IMPORTED_MODULE_4__[
                    'addTypenameToDocument'
                  ]
                )(query);
              }
              if (typeof data[id] === 'undefined') {
                return null;
              }
              return Object(
                _readFromStore__WEBPACK_IMPORTED_MODULE_2__['readQueryFromStore']
              )({
                rootId: id,
                store: data,
                query: query,
                variables: variables,
                config: this.reducerConfig,
                fragmentMatcherFunction: this.reducerConfig.fragmentMatcher,
              });
            };
            TransactionDataProxy.prototype.writeQuery = function(_a) {
              var data = _a.data,
                query = _a.query,
                variables = _a.variables;
              this.assertNotFinished();
              if (this.reducerConfig.addTypename) {
                query = Object(
                  _queries_queryTransform__WEBPACK_IMPORTED_MODULE_4__[
                    'addTypenameToDocument'
                  ]
                )(query);
              }
              this.applyWrite({
                rootId: 'ROOT_QUERY',
                result: data,
                document: query,
                operationName: Object(
                  _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__['getOperationName']
                )(query),
                variables: variables || {},
              });
            };
            TransactionDataProxy.prototype.writeFragment = function(_a) {
              var data = _a.data,
                id = _a.id,
                fragment = _a.fragment,
                fragmentName = _a.fragmentName,
                variables = _a.variables;
              this.assertNotFinished();
              if (!fragment) {
                throw new Error(
                  'fragment option is required. Please pass a GraphQL fragment to writeFragment.'
                );
              }
              var query = Object(
                _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__[
                  'getFragmentQueryDocument'
                ]
              )(fragment, fragmentName);
              if (this.reducerConfig.addTypename) {
                query = Object(
                  _queries_queryTransform__WEBPACK_IMPORTED_MODULE_4__[
                    'addTypenameToDocument'
                  ]
                )(query);
              }
              this.applyWrite({
                rootId: id,
                result: data,
                document: query,
                operationName: Object(
                  _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__['getOperationName']
                )(query),
                variables: variables || {},
              });
            };
            TransactionDataProxy.prototype.assertNotFinished = function() {
              if (this.isFinished) {
                throw new Error(
                  'Cannot call transaction methods after the transaction has finished.'
                );
              }
            };
            TransactionDataProxy.prototype.applyWrite = function(write) {
              Object(_writeToStore__WEBPACK_IMPORTED_MODULE_3__['writeResultToStore'])({
                result: write.result,
                dataId: write.rootId,
                document: write.document,
                variables: write.variables,
                store: this.data,
                dataIdFromObject:
                  this.reducerConfig.dataIdFromObject ||
                  function() {
                    return null;
                  },
                fragmentMatcherFunction: this.reducerConfig.fragmentMatcher,
              });
              this.writes.push(write);
            };
            return TransactionDataProxy;
          })();

          //# sourceMappingURL=proxy.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/data/readFromStore.js':
        /*!*************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/data/readFromStore.js ***!
  \*************************************************************************************/
        /*! exports provided: ID_KEY, readQueryFromStore, diffQueryAgainstStore, assertIdValue */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'ID_KEY',
            function() {
              return ID_KEY;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'readQueryFromStore',
            function() {
              return readQueryFromStore;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'diffQueryAgainstStore',
            function() {
              return diffQueryAgainstStore;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'assertIdValue',
            function() {
              return assertIdValue;
            }
          );
          /* harmony import */ var graphql_anywhere__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! graphql-anywhere */ '../node_modules/graphql-anywhere/lib/src/index.js'
          );
          /* harmony import */ var graphql_anywhere__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            graphql_anywhere__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var _storeUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./storeUtils */ '../node_modules/react-apollo/node_modules/apollo-client/data/storeUtils.js'
          );
          /* harmony import */ var _queries_getFromAST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ../queries/getFromAST */ '../node_modules/react-apollo/node_modules/apollo-client/queries/getFromAST.js'
          );
          /* harmony import */ var _util_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ../util/isEqual */ '../node_modules/react-apollo/node_modules/apollo-client/util/isEqual.js'
          );
          /* harmony import */ var _util_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ../util/assign */ '../node_modules/react-apollo/node_modules/apollo-client/util/assign.js'
          );
          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };

          var ID_KEY = typeof Symbol !== 'undefined' ? Symbol('id') : '@@id';
          function readQueryFromStore(options) {
            var optsPatch = {returnPartialData: false};
            return diffQueryAgainstStore(__assign({}, options, optsPatch)).result;
          }
          var readStoreResolver = function(fieldName, idValue, args, context, _a) {
            var resultKey = _a.resultKey,
              directives = _a.directives;
            assertIdValue(idValue);
            var objId = idValue.id;
            var obj = context.store[objId];
            var storeKeyName = Object(
              _storeUtils__WEBPACK_IMPORTED_MODULE_1__['getStoreKeyName']
            )(fieldName, args, directives);
            var fieldValue = (obj || {})[storeKeyName];
            if (typeof fieldValue === 'undefined') {
              if (
                context.customResolvers &&
                obj &&
                (obj.__typename || objId === 'ROOT_QUERY')
              ) {
                var typename = obj.__typename || 'Query';
                var type = context.customResolvers[typename];
                if (type) {
                  var resolver = type[fieldName];
                  if (resolver) {
                    fieldValue = resolver(obj, args);
                  }
                }
              }
              if (typeof fieldValue === 'undefined') {
                if (!context.returnPartialData) {
                  throw new Error(
                    "Can't find field " +
                      storeKeyName +
                      ' on object (' +
                      objId +
                      ') ' +
                      JSON.stringify(obj, null, 2) +
                      '.'
                  );
                }
                context.hasMissingField = true;
                return fieldValue;
              }
            }
            if (
              Object(_storeUtils__WEBPACK_IMPORTED_MODULE_1__['isJsonValue'])(fieldValue)
            ) {
              if (
                idValue.previousResult &&
                Object(_util_isEqual__WEBPACK_IMPORTED_MODULE_3__['isEqual'])(
                  idValue.previousResult[resultKey],
                  fieldValue.json
                )
              ) {
                return idValue.previousResult[resultKey];
              }
              return fieldValue.json;
            }
            if (idValue.previousResult) {
              fieldValue = addPreviousResultToIdValues(
                fieldValue,
                idValue.previousResult[resultKey]
              );
            }
            return fieldValue;
          };
          function diffQueryAgainstStore(_a) {
            var store = _a.store,
              query = _a.query,
              variables = _a.variables,
              previousResult = _a.previousResult,
              _b = _a.returnPartialData,
              returnPartialData = _b === void 0 ? true : _b,
              _c = _a.rootId,
              rootId = _c === void 0 ? 'ROOT_QUERY' : _c,
              fragmentMatcherFunction = _a.fragmentMatcherFunction,
              config = _a.config;
            var queryDefinition = Object(
              _queries_getFromAST__WEBPACK_IMPORTED_MODULE_2__['getQueryDefinition']
            )(query);
            variables = Object(_util_assign__WEBPACK_IMPORTED_MODULE_4__['assign'])(
              {},
              Object(
                _queries_getFromAST__WEBPACK_IMPORTED_MODULE_2__['getDefaultValues']
              )(queryDefinition),
              variables
            );
            var context = {
              store: store,
              returnPartialData: returnPartialData,
              customResolvers: (config && config.customResolvers) || {},
              hasMissingField: false,
            };
            var rootIdValue = {
              type: 'id',
              id: rootId,
              previousResult: previousResult,
            };
            var result = graphql_anywhere__WEBPACK_IMPORTED_MODULE_0___default()(
              readStoreResolver,
              query,
              rootIdValue,
              context,
              variables,
              {
                fragmentMatcher: fragmentMatcherFunction,
                resultMapper: resultMapper,
              }
            );
            return {
              result: result,
              isMissing: context.hasMissingField,
            };
          }
          function assertIdValue(idValue) {
            if (!Object(_storeUtils__WEBPACK_IMPORTED_MODULE_1__['isIdValue'])(idValue)) {
              throw new Error(
                "Encountered a sub-selection on the query, but the store doesn't have an object reference. This should never happen during normal use unless you have custom code that is directly manipulating the store; please file an issue."
              );
            }
          }
          function addPreviousResultToIdValues(value, previousResult) {
            if (Object(_storeUtils__WEBPACK_IMPORTED_MODULE_1__['isIdValue'])(value)) {
              return __assign({}, value, {previousResult: previousResult});
            } else if (Array.isArray(value)) {
              var idToPreviousResult_1 = {};
              if (Array.isArray(previousResult)) {
                previousResult.forEach(function(item) {
                  if (item && item[ID_KEY]) {
                    idToPreviousResult_1[item[ID_KEY]] = item;
                  }
                });
              }
              return value.map(function(item, i) {
                var itemPreviousResult = previousResult && previousResult[i];
                if (Object(_storeUtils__WEBPACK_IMPORTED_MODULE_1__['isIdValue'])(item)) {
                  itemPreviousResult =
                    idToPreviousResult_1[item.id] || itemPreviousResult;
                }
                return addPreviousResultToIdValues(item, itemPreviousResult);
              });
            }
            return value;
          }
          function resultMapper(resultFields, idValue) {
            if (idValue.previousResult) {
              var currentResultKeys_1 = Object.keys(resultFields);
              var sameAsPreviousResult =
                Object.keys(idValue.previousResult).reduce(function(sameKeys, key) {
                  return sameKeys && currentResultKeys_1.indexOf(key) > -1;
                }, true) &&
                currentResultKeys_1.reduce(function(same, key) {
                  return (
                    same &&
                    areNestedArrayItemsStrictlyEqual(
                      resultFields[key],
                      idValue.previousResult[key]
                    )
                  );
                }, true);
              if (sameAsPreviousResult) {
                return idValue.previousResult;
              }
            }
            Object.defineProperty(resultFields, ID_KEY, {
              enumerable: false,
              configurable: false,
              writable: false,
              value: idValue.id,
            });
            return resultFields;
          }
          function areNestedArrayItemsStrictlyEqual(a, b) {
            if (a === b) {
              return true;
            }
            if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
              return false;
            }
            return a.reduce(function(same, item, i) {
              return same && areNestedArrayItemsStrictlyEqual(item, b[i]);
            }, true);
          }
          //# sourceMappingURL=readFromStore.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/data/replaceQueryResults.js':
        /*!*******************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/data/replaceQueryResults.js ***!
  \*******************************************************************************************/
        /*! exports provided: replaceQueryResults */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'replaceQueryResults',
            function() {
              return replaceQueryResults;
            }
          );
          /* harmony import */ var _writeToStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./writeToStore */ '../node_modules/react-apollo/node_modules/apollo-client/data/writeToStore.js'
          );
          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };

          function replaceQueryResults(state, _a, config) {
            var variables = _a.variables,
              document = _a.document,
              newResult = _a.newResult;
            var clonedState = __assign({}, state);
            return Object(
              _writeToStore__WEBPACK_IMPORTED_MODULE_0__['writeResultToStore']
            )({
              result: newResult,
              dataId: 'ROOT_QUERY',
              variables: variables,
              document: document,
              store: clonedState,
              dataIdFromObject: config.dataIdFromObject,
              fragmentMatcherFunction: config.fragmentMatcher,
            });
          }
          //# sourceMappingURL=replaceQueryResults.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/data/resultReducers.js':
        /*!**************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/data/resultReducers.js ***!
  \**************************************************************************************/
        /*! exports provided: createStoreReducer */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createStoreReducer',
            function() {
              return createStoreReducer;
            }
          );
          /* harmony import */ var _readFromStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./readFromStore */ '../node_modules/react-apollo/node_modules/apollo-client/data/readFromStore.js'
          );
          /* harmony import */ var _writeToStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./writeToStore */ '../node_modules/react-apollo/node_modules/apollo-client/data/writeToStore.js'
          );

          function createStoreReducer(resultReducer, document, variables, config) {
            return function(store, action) {
              var _a = Object(
                  _readFromStore__WEBPACK_IMPORTED_MODULE_0__['diffQueryAgainstStore']
                )({
                  store: store,
                  query: document,
                  variables: variables,
                  returnPartialData: true,
                  fragmentMatcherFunction: config.fragmentMatcher,
                  config: config,
                }),
                result = _a.result,
                isMissing = _a.isMissing;
              if (isMissing) {
                return store;
              }
              var nextResult;
              try {
                nextResult = resultReducer(result, action, variables);
              } catch (err) {
                console.warn('Unhandled error in result reducer', err);
                throw err;
              }
              if (result !== nextResult) {
                return Object(
                  _writeToStore__WEBPACK_IMPORTED_MODULE_1__['writeResultToStore']
                )({
                  dataId: 'ROOT_QUERY',
                  result: nextResult,
                  store: store,
                  document: document,
                  variables: variables,
                  dataIdFromObject: config.dataIdFromObject,
                  fragmentMatcherFunction: config.fragmentMatcher,
                });
              }
              return store;
            };
          }
          //# sourceMappingURL=resultReducers.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/data/store.js':
        /*!*****************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/data/store.js ***!
  \*****************************************************************************/
        /*! exports provided: data */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'data',
            function() {
              return data;
            }
          );
          /* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ../actions */ '../node_modules/react-apollo/node_modules/apollo-client/actions.js'
          );
          /* harmony import */ var _writeToStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./writeToStore */ '../node_modules/react-apollo/node_modules/apollo-client/data/writeToStore.js'
          );
          /* harmony import */ var _data_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ../data/proxy */ '../node_modules/react-apollo/node_modules/apollo-client/data/proxy.js'
          );
          /* harmony import */ var _queries_getFromAST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ../queries/getFromAST */ '../node_modules/react-apollo/node_modules/apollo-client/queries/getFromAST.js'
          );
          /* harmony import */ var _storeUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./storeUtils */ '../node_modules/react-apollo/node_modules/apollo-client/data/storeUtils.js'
          );
          /* harmony import */ var _replaceQueryResults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./replaceQueryResults */ '../node_modules/react-apollo/node_modules/apollo-client/data/replaceQueryResults.js'
          );
          /* harmony import */ var _readFromStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! ./readFromStore */ '../node_modules/react-apollo/node_modules/apollo-client/data/readFromStore.js'
          );
          /* harmony import */ var _util_errorHandling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! ../util/errorHandling */ '../node_modules/react-apollo/node_modules/apollo-client/util/errorHandling.js'
          );
          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };

          function data(previousState, action, config) {
            if (previousState === void 0) {
              previousState = {};
            }
            var constAction = action;
            if (
              Object(_actions__WEBPACK_IMPORTED_MODULE_0__['isQueryResultAction'])(action)
            ) {
              if (action.fetchMoreForQueryId) {
                return previousState;
              }
              if (
                !Object(
                  _storeUtils__WEBPACK_IMPORTED_MODULE_4__['graphQLResultHasError']
                )(action.result)
              ) {
                var clonedState = __assign({}, previousState);
                var newState_1 = Object(
                  _writeToStore__WEBPACK_IMPORTED_MODULE_1__['writeResultToStore']
                )({
                  result: action.result.data,
                  dataId: 'ROOT_QUERY',
                  document: action.document,
                  variables: action.variables,
                  store: clonedState,
                  dataIdFromObject: config.dataIdFromObject,
                  fragmentMatcherFunction: config.fragmentMatcher,
                });
                if (action.extraReducers) {
                  action.extraReducers.forEach(function(reducer) {
                    newState_1 = reducer(newState_1, constAction);
                  });
                }
                return newState_1;
              }
            } else if (
              Object(_actions__WEBPACK_IMPORTED_MODULE_0__['isSubscriptionResultAction'])(
                action
              )
            ) {
              if (
                !Object(
                  _storeUtils__WEBPACK_IMPORTED_MODULE_4__['graphQLResultHasError']
                )(action.result)
              ) {
                var clonedState = __assign({}, previousState);
                var newState_2 = Object(
                  _writeToStore__WEBPACK_IMPORTED_MODULE_1__['writeResultToStore']
                )({
                  result: action.result.data,
                  dataId: 'ROOT_SUBSCRIPTION',
                  document: action.document,
                  variables: action.variables,
                  store: clonedState,
                  dataIdFromObject: config.dataIdFromObject,
                  fragmentMatcherFunction: config.fragmentMatcher,
                });
                if (action.extraReducers) {
                  action.extraReducers.forEach(function(reducer) {
                    newState_2 = reducer(newState_2, constAction);
                  });
                }
                return newState_2;
              }
            } else if (
              Object(_actions__WEBPACK_IMPORTED_MODULE_0__['isMutationResultAction'])(
                constAction
              )
            ) {
              if (!constAction.result.errors) {
                var clonedState = __assign({}, previousState);
                var newState_3 = Object(
                  _writeToStore__WEBPACK_IMPORTED_MODULE_1__['writeResultToStore']
                )({
                  result: constAction.result.data,
                  dataId: 'ROOT_MUTATION',
                  document: constAction.document,
                  variables: constAction.variables,
                  store: clonedState,
                  dataIdFromObject: config.dataIdFromObject,
                  fragmentMatcherFunction: config.fragmentMatcher,
                });
                var updateQueries_1 = constAction.updateQueries;
                if (updateQueries_1) {
                  Object.keys(updateQueries_1)
                    .filter(function(id) {
                      return updateQueries_1[id];
                    })
                    .forEach(function(queryId) {
                      var _a = updateQueries_1[queryId],
                        query = _a.query,
                        reducer = _a.reducer;
                      var _b = Object(
                          _readFromStore__WEBPACK_IMPORTED_MODULE_6__[
                            'diffQueryAgainstStore'
                          ]
                        )({
                          store: previousState,
                          query: query.document,
                          variables: query.variables,
                          returnPartialData: true,
                          fragmentMatcherFunction: config.fragmentMatcher,
                          config: config,
                        }),
                        currentQueryResult = _b.result,
                        isMissing = _b.isMissing;
                      if (isMissing) {
                        return;
                      }
                      var nextQueryResult = Object(
                        _util_errorHandling__WEBPACK_IMPORTED_MODULE_7__[
                          'tryFunctionOrLogError'
                        ]
                      )(function() {
                        return reducer(currentQueryResult, {
                          mutationResult: constAction.result,
                          queryName: Object(
                            _queries_getFromAST__WEBPACK_IMPORTED_MODULE_3__[
                              'getOperationName'
                            ]
                          )(query.document),
                          queryVariables: query.variables,
                        });
                      });
                      if (nextQueryResult) {
                        newState_3 = Object(
                          _writeToStore__WEBPACK_IMPORTED_MODULE_1__['writeResultToStore']
                        )({
                          result: nextQueryResult,
                          dataId: 'ROOT_QUERY',
                          document: query.document,
                          variables: query.variables,
                          store: newState_3,
                          dataIdFromObject: config.dataIdFromObject,
                          fragmentMatcherFunction: config.fragmentMatcher,
                        });
                      }
                    });
                }
                if (constAction.update) {
                  var update_1 = constAction.update;
                  var proxy_1 = new _data_proxy__WEBPACK_IMPORTED_MODULE_2__[
                    'TransactionDataProxy'
                  ](newState_3, config);
                  Object(
                    _util_errorHandling__WEBPACK_IMPORTED_MODULE_7__[
                      'tryFunctionOrLogError'
                    ]
                  )(function() {
                    return update_1(proxy_1, constAction.result);
                  });
                  var writes = proxy_1.finish();
                  newState_3 = data(
                    newState_3,
                    {type: 'APOLLO_WRITE', writes: writes},
                    config
                  );
                }
                if (constAction.extraReducers) {
                  constAction.extraReducers.forEach(function(reducer) {
                    newState_3 = reducer(newState_3, constAction);
                  });
                }
                return newState_3;
              }
            } else if (
              Object(_actions__WEBPACK_IMPORTED_MODULE_0__['isUpdateQueryResultAction'])(
                constAction
              )
            ) {
              return Object(
                _replaceQueryResults__WEBPACK_IMPORTED_MODULE_5__['replaceQueryResults']
              )(previousState, constAction, config);
            } else if (
              Object(_actions__WEBPACK_IMPORTED_MODULE_0__['isStoreResetAction'])(action)
            ) {
              return {};
            } else if (
              Object(_actions__WEBPACK_IMPORTED_MODULE_0__['isWriteAction'])(action)
            ) {
              return action.writes.reduce(function(currentState, write) {
                return Object(
                  _writeToStore__WEBPACK_IMPORTED_MODULE_1__['writeResultToStore']
                )({
                  result: write.result,
                  dataId: write.rootId,
                  document: write.document,
                  variables: write.variables,
                  store: currentState,
                  dataIdFromObject: config.dataIdFromObject,
                  fragmentMatcherFunction: config.fragmentMatcher,
                });
              }, __assign({}, previousState));
            }
            return previousState;
          }
          //# sourceMappingURL=store.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/data/storeUtils.js':
        /*!**********************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/data/storeUtils.js ***!
  \**********************************************************************************/
        /*! exports provided: valueToObjectRepresentation, storeKeyNameFromField, getStoreKeyName, resultKeyNameFromField, isField, isInlineFragment, graphQLResultHasError, isIdValue, toIdValue, isJsonValue */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'valueToObjectRepresentation',
            function() {
              return valueToObjectRepresentation;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'storeKeyNameFromField',
            function() {
              return storeKeyNameFromField;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getStoreKeyName',
            function() {
              return getStoreKeyName;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'resultKeyNameFromField',
            function() {
              return resultKeyNameFromField;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isField',
            function() {
              return isField;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isInlineFragment',
            function() {
              return isInlineFragment;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'graphQLResultHasError',
            function() {
              return graphQLResultHasError;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isIdValue',
            function() {
              return isIdValue;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'toIdValue',
            function() {
              return toIdValue;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isJsonValue',
            function() {
              return isJsonValue;
            }
          );
          function isStringValue(value) {
            return value.kind === 'StringValue';
          }
          function isBooleanValue(value) {
            return value.kind === 'BooleanValue';
          }
          function isIntValue(value) {
            return value.kind === 'IntValue';
          }
          function isFloatValue(value) {
            return value.kind === 'FloatValue';
          }
          function isVariable(value) {
            return value.kind === 'Variable';
          }
          function isObjectValue(value) {
            return value.kind === 'ObjectValue';
          }
          function isListValue(value) {
            return value.kind === 'ListValue';
          }
          function isEnumValue(value) {
            return value.kind === 'EnumValue';
          }
          function valueToObjectRepresentation(argObj, name, value, variables) {
            if (isIntValue(value) || isFloatValue(value)) {
              argObj[name.value] = Number(value.value);
            } else if (isBooleanValue(value) || isStringValue(value)) {
              argObj[name.value] = value.value;
            } else if (isObjectValue(value)) {
              var nestedArgObj_1 = {};
              value.fields.map(function(obj) {
                return valueToObjectRepresentation(
                  nestedArgObj_1,
                  obj.name,
                  obj.value,
                  variables
                );
              });
              argObj[name.value] = nestedArgObj_1;
            } else if (isVariable(value)) {
              var variableValue = (variables || {})[value.name.value];
              argObj[name.value] = variableValue;
            } else if (isListValue(value)) {
              argObj[name.value] = value.values.map(function(listValue) {
                var nestedArgArrayObj = {};
                valueToObjectRepresentation(
                  nestedArgArrayObj,
                  name,
                  listValue,
                  variables
                );
                return nestedArgArrayObj[name.value];
              });
            } else if (isEnumValue(value)) {
              argObj[name.value] = value.value;
            } else {
              throw new Error(
                'The inline argument "' +
                  name.value +
                  '" of kind "' +
                  value.kind +
                  '" is not supported.\n                    Use variables instead of inline arguments to overcome this limitation.'
              );
            }
          }
          function storeKeyNameFromField(field, variables) {
            var directivesObj = null;
            if (field.directives) {
              directivesObj = {};
              field.directives.forEach(function(directive) {
                directivesObj[directive.name.value] = {};
                if (directive.arguments) {
                  directive.arguments.forEach(function(_a) {
                    var name = _a.name,
                      value = _a.value;
                    return valueToObjectRepresentation(
                      directivesObj[directive.name.value],
                      name,
                      value,
                      variables
                    );
                  });
                }
              });
            }
            var argObj = null;
            if (field.arguments && field.arguments.length) {
              argObj = {};
              field.arguments.forEach(function(_a) {
                var name = _a.name,
                  value = _a.value;
                return valueToObjectRepresentation(argObj, name, value, variables);
              });
            }
            return getStoreKeyName(field.name.value, argObj, directivesObj);
          }
          function getStoreKeyName(fieldName, args, directives) {
            if (
              directives &&
              directives['connection'] &&
              directives['connection']['key']
            ) {
              if (
                directives['connection']['filter'] &&
                directives['connection']['filter'].length > 0
              ) {
                var filterKeys = directives['connection']['filter']
                  ? directives['connection']['filter']
                  : [];
                filterKeys.sort();
                var queryArgs_1 = args;
                var filteredArgs_1 = {};
                filterKeys.forEach(function(key) {
                  filteredArgs_1[key] = queryArgs_1[key];
                });
                return (
                  directives['connection']['key'] +
                  '(' +
                  JSON.stringify(filteredArgs_1) +
                  ')'
                );
              } else {
                return directives['connection']['key'];
              }
            }
            if (args) {
              var stringifiedArgs = JSON.stringify(args);
              return fieldName + '(' + stringifiedArgs + ')';
            }
            return fieldName;
          }
          function resultKeyNameFromField(field) {
            return field.alias ? field.alias.value : field.name.value;
          }
          function isField(selection) {
            return selection.kind === 'Field';
          }
          function isInlineFragment(selection) {
            return selection.kind === 'InlineFragment';
          }
          function graphQLResultHasError(result) {
            return result.errors && result.errors.length;
          }
          function isIdValue(idObject) {
            return (
              idObject != null && typeof idObject === 'object' && idObject.type === 'id'
            );
          }
          function toIdValue(id, generated) {
            if (generated === void 0) {
              generated = false;
            }
            return {
              type: 'id',
              id: id,
              generated: generated,
            };
          }
          function isJsonValue(jsonObject) {
            return (
              jsonObject != null &&
              typeof jsonObject === 'object' &&
              jsonObject.type === 'json'
            );
          }
          //# sourceMappingURL=storeUtils.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/data/writeToStore.js':
        /*!************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/data/writeToStore.js ***!
  \************************************************************************************/
        /*! exports provided: writeQueryToStore, writeResultToStore, writeSelectionSetToStore */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'writeQueryToStore',
            function() {
              return writeQueryToStore;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'writeResultToStore',
            function() {
              return writeResultToStore;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'writeSelectionSetToStore',
            function() {
              return writeSelectionSetToStore;
            }
          );
          /* harmony import */ var _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ../queries/getFromAST */ '../node_modules/react-apollo/node_modules/apollo-client/queries/getFromAST.js'
          );
          /* harmony import */ var _storeUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./storeUtils */ '../node_modules/react-apollo/node_modules/apollo-client/data/storeUtils.js'
          );
          /* harmony import */ var _queries_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ../queries/directives */ '../node_modules/react-apollo/node_modules/apollo-client/queries/directives.js'
          );
          /* harmony import */ var _util_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ../util/environment */ '../node_modules/react-apollo/node_modules/apollo-client/util/environment.js'
          );
          /* harmony import */ var _util_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ../util/assign */ '../node_modules/react-apollo/node_modules/apollo-client/util/assign.js'
          );
          var __extends =
            (undefined && undefined.__extends) ||
            (function() {
              var extendStatics =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype =
                  b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
              };
            })();
          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };

          var WriteError = (function(_super) {
            __extends(WriteError, _super);
            function WriteError() {
              var _this = (_super !== null && _super.apply(this, arguments)) || this;
              _this.type = 'WriteError';
              return _this;
            }
            return WriteError;
          })(Error);
          function enhanceErrorWithDocument(error, document) {
            var enhancedError = new WriteError(
              'Error writing result to store for query ' +
                (document.loc && document.loc.source && document.loc.source.body)
            );
            enhancedError.message += '/n' + error.message;
            enhancedError.stack = error.stack;
            return enhancedError;
          }
          function writeQueryToStore(_a) {
            var result = _a.result,
              query = _a.query,
              _b = _a.store,
              store = _b === void 0 ? {} : _b,
              variables = _a.variables,
              dataIdFromObject = _a.dataIdFromObject,
              _c = _a.fragmentMap,
              fragmentMap = _c === void 0 ? {} : _c,
              fragmentMatcherFunction = _a.fragmentMatcherFunction;
            var queryDefinition = Object(
              _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__['getQueryDefinition']
            )(query);
            variables = Object(_util_assign__WEBPACK_IMPORTED_MODULE_4__['assign'])(
              {},
              Object(
                _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__['getDefaultValues']
              )(queryDefinition),
              variables
            );
            try {
              return writeSelectionSetToStore({
                dataId: 'ROOT_QUERY',
                result: result,
                selectionSet: queryDefinition.selectionSet,
                context: {
                  store: store,
                  processedData: {},
                  variables: variables,
                  dataIdFromObject: dataIdFromObject,
                  fragmentMap: fragmentMap,
                  fragmentMatcherFunction: fragmentMatcherFunction,
                },
              });
            } catch (e) {
              throw enhanceErrorWithDocument(e, query);
            }
          }
          function writeResultToStore(_a) {
            var dataId = _a.dataId,
              result = _a.result,
              document = _a.document,
              _b = _a.store,
              store = _b === void 0 ? {} : _b,
              variables = _a.variables,
              dataIdFromObject = _a.dataIdFromObject,
              fragmentMatcherFunction = _a.fragmentMatcherFunction;
            var operationDefinition = Object(
              _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__['getOperationDefinition']
            )(document);
            var selectionSet = operationDefinition.selectionSet;
            var fragmentMap = Object(
              _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__['createFragmentMap']
            )(
              Object(
                _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__['getFragmentDefinitions']
              )(document)
            );
            variables = Object(_util_assign__WEBPACK_IMPORTED_MODULE_4__['assign'])(
              {},
              Object(
                _queries_getFromAST__WEBPACK_IMPORTED_MODULE_0__['getDefaultValues']
              )(operationDefinition),
              variables
            );
            try {
              return writeSelectionSetToStore({
                result: result,
                dataId: dataId,
                selectionSet: selectionSet,
                context: {
                  store: store,
                  processedData: {},
                  variables: variables,
                  dataIdFromObject: dataIdFromObject,
                  fragmentMap: fragmentMap,
                  fragmentMatcherFunction: fragmentMatcherFunction,
                },
              });
            } catch (e) {
              throw enhanceErrorWithDocument(e, document);
            }
          }
          function writeSelectionSetToStore(_a) {
            var result = _a.result,
              dataId = _a.dataId,
              selectionSet = _a.selectionSet,
              context = _a.context;
            var variables = context.variables,
              store = context.store,
              dataIdFromObject = context.dataIdFromObject,
              fragmentMap = context.fragmentMap;
            selectionSet.selections.forEach(function(selection) {
              var included = Object(
                _queries_directives__WEBPACK_IMPORTED_MODULE_2__['shouldInclude']
              )(selection, variables);
              if (
                Object(_storeUtils__WEBPACK_IMPORTED_MODULE_1__['isField'])(selection)
              ) {
                var resultFieldKey = Object(
                  _storeUtils__WEBPACK_IMPORTED_MODULE_1__['resultKeyNameFromField']
                )(selection);
                var value = result[resultFieldKey];
                if (included) {
                  if (typeof value !== 'undefined') {
                    writeFieldToStore({
                      dataId: dataId,
                      value: value,
                      field: selection,
                      context: context,
                    });
                  } else {
                    if (context.fragmentMatcherFunction) {
                      if (
                        !Object(
                          _util_environment__WEBPACK_IMPORTED_MODULE_3__['isProduction']
                        )()
                      ) {
                        console.warn(
                          'Missing field ' +
                            resultFieldKey +
                            ' in ' +
                            JSON.stringify(result, null, 2).substring(0, 100)
                        );
                      }
                    }
                  }
                }
              } else {
                var fragment = void 0;
                if (
                  Object(_storeUtils__WEBPACK_IMPORTED_MODULE_1__['isInlineFragment'])(
                    selection
                  )
                ) {
                  fragment = selection;
                } else {
                  fragment = (fragmentMap || {})[selection.name.value];
                  if (!fragment) {
                    throw new Error('No fragment named ' + selection.name.value + '.');
                  }
                }
                var matches = true;
                if (context.fragmentMatcherFunction && fragment.typeCondition) {
                  var idValue = {type: 'id', id: 'self', generated: false};
                  var fakeContext = {
                    store: {self: result},
                    returnPartialData: false,
                    hasMissingField: false,
                    customResolvers: {},
                  };
                  matches = context.fragmentMatcherFunction(
                    idValue,
                    fragment.typeCondition.name.value,
                    fakeContext
                  );
                  if (fakeContext.returnPartialData) {
                    console.error('WARNING: heuristic fragment matching going on!');
                  }
                }
                if (included && matches) {
                  writeSelectionSetToStore({
                    result: result,
                    selectionSet: fragment.selectionSet,
                    dataId: dataId,
                    context: context,
                  });
                }
              }
            });
            return store;
          }
          function isGeneratedId(id) {
            return id[0] === '$';
          }
          function mergeWithGenerated(generatedKey, realKey, cache) {
            var generated = cache[generatedKey];
            var real = cache[realKey];
            Object.keys(generated).forEach(function(key) {
              var value = generated[key];
              var realValue = real[key];
              if (
                Object(_storeUtils__WEBPACK_IMPORTED_MODULE_1__['isIdValue'])(value) &&
                isGeneratedId(value.id) &&
                Object(_storeUtils__WEBPACK_IMPORTED_MODULE_1__['isIdValue'])(realValue)
              ) {
                mergeWithGenerated(value.id, realValue.id, cache);
              }
              delete cache[generatedKey];
              cache[realKey] = __assign({}, generated, real);
            });
          }
          function isDataProcessed(dataId, field, processedData) {
            if (!processedData) {
              return false;
            }
            if (processedData[dataId]) {
              if (processedData[dataId].indexOf(field) >= 0) {
                return true;
              } else {
                processedData[dataId].push(field);
              }
            } else {
              processedData[dataId] = [field];
            }
            return false;
          }
          function writeFieldToStore(_a) {
            var field = _a.field,
              value = _a.value,
              dataId = _a.dataId,
              context = _a.context;
            var variables = context.variables,
              dataIdFromObject = context.dataIdFromObject,
              store = context.store,
              fragmentMap = context.fragmentMap;
            var storeValue;
            var storeFieldName = Object(
              _storeUtils__WEBPACK_IMPORTED_MODULE_1__['storeKeyNameFromField']
            )(field, variables);
            var shouldMerge = false;
            var generatedKey = '';
            if (!field.selectionSet || value === null) {
              storeValue =
                value != null && typeof value === 'object'
                  ? {type: 'json', json: value}
                  : value;
            } else if (Array.isArray(value)) {
              var generatedId = dataId + '.' + storeFieldName;
              storeValue = processArrayValue(
                value,
                generatedId,
                field.selectionSet,
                context
              );
            } else {
              var valueDataId = dataId + '.' + storeFieldName;
              var generated = true;
              if (!isGeneratedId(valueDataId)) {
                valueDataId = '$' + valueDataId;
              }
              if (dataIdFromObject) {
                var semanticId = dataIdFromObject(value);
                if (semanticId && isGeneratedId(semanticId)) {
                  throw new Error(
                    'IDs returned by dataIdFromObject cannot begin with the "$" character.'
                  );
                }
                if (semanticId) {
                  valueDataId = semanticId;
                  generated = false;
                }
              }
              if (!isDataProcessed(valueDataId, field, context.processedData)) {
                writeSelectionSetToStore({
                  dataId: valueDataId,
                  result: value,
                  selectionSet: field.selectionSet,
                  context: context,
                });
              }
              storeValue = {
                type: 'id',
                id: valueDataId,
                generated: generated,
              };
              if (store[dataId] && store[dataId][storeFieldName] !== storeValue) {
                var escapedId = store[dataId][storeFieldName];
                if (
                  Object(_storeUtils__WEBPACK_IMPORTED_MODULE_1__['isIdValue'])(
                    storeValue
                  ) &&
                  storeValue.generated &&
                  Object(_storeUtils__WEBPACK_IMPORTED_MODULE_1__['isIdValue'])(
                    escapedId
                  ) &&
                  !escapedId.generated
                ) {
                  throw new Error(
                    'Store error: the application attempted to write an object with no provided id' +
                      (' but the store already contains an id of ' +
                        escapedId.id +
                        ' for this object.')
                  );
                }
                if (
                  Object(_storeUtils__WEBPACK_IMPORTED_MODULE_1__['isIdValue'])(
                    escapedId
                  ) &&
                  escapedId.generated
                ) {
                  generatedKey = escapedId.id;
                  shouldMerge = true;
                }
              }
            }
            var newStoreObj = __assign(
              {},
              store[dataId],
              ((_b = {}), (_b[storeFieldName] = storeValue), _b)
            );
            if (shouldMerge) {
              mergeWithGenerated(generatedKey, storeValue.id, store);
            }
            if (!store[dataId] || storeValue !== store[dataId][storeFieldName]) {
              store[dataId] = newStoreObj;
            }
            var _b;
          }
          function processArrayValue(value, generatedId, selectionSet, context) {
            return value.map(function(item, index) {
              if (item === null) {
                return null;
              }
              var itemDataId = generatedId + '.' + index;
              if (Array.isArray(item)) {
                return processArrayValue(item, itemDataId, selectionSet, context);
              }
              var generated = true;
              if (context.dataIdFromObject) {
                var semanticId = context.dataIdFromObject(item);
                if (semanticId) {
                  itemDataId = semanticId;
                  generated = false;
                }
              }
              if (!isDataProcessed(itemDataId, selectionSet, context.processedData)) {
                writeSelectionSetToStore({
                  dataId: itemDataId,
                  result: item,
                  selectionSet: selectionSet,
                  context: context,
                });
              }
              var idStoreValue = {
                type: 'id',
                id: itemDataId,
                generated: generated,
              };
              return idStoreValue;
            });
          }
          //# sourceMappingURL=writeToStore.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/errors/ApolloError.js':
        /*!*************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/errors/ApolloError.js ***!
  \*************************************************************************************/
        /*! exports provided: isApolloError, ApolloError */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isApolloError',
            function() {
              return isApolloError;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'ApolloError',
            function() {
              return ApolloError;
            }
          );
          var __extends =
            (undefined && undefined.__extends) ||
            (function() {
              var extendStatics =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype =
                  b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
              };
            })();
          function isApolloError(err) {
            return err.hasOwnProperty('graphQLErrors');
          }
          var generateErrorMessage = function(err) {
            var message = '';
            if (Array.isArray(err.graphQLErrors) && err.graphQLErrors.length !== 0) {
              err.graphQLErrors.forEach(function(graphQLError) {
                var errorMessage = graphQLError
                  ? graphQLError.message
                  : 'Error message not found.';
                message += 'GraphQL error: ' + errorMessage + '\n';
              });
            }
            if (err.networkError) {
              message += 'Network error: ' + err.networkError.message + '\n';
            }
            message = message.replace(/\n$/, '');
            return message;
          };
          var ApolloError = (function(_super) {
            __extends(ApolloError, _super);
            function ApolloError(_a) {
              var graphQLErrors = _a.graphQLErrors,
                networkError = _a.networkError,
                errorMessage = _a.errorMessage,
                extraInfo = _a.extraInfo;
              var _this = _super.call(this, errorMessage) || this;
              _this.graphQLErrors = graphQLErrors || [];
              _this.networkError = networkError || null;
              if (!errorMessage) {
                _this.message = generateErrorMessage(_this);
              } else {
                _this.message = errorMessage;
              }
              _this.extraInfo = extraInfo;
              return _this;
            }
            return ApolloError;
          })(Error);

          //# sourceMappingURL=ApolloError.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/index.js':
        /*!************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/index.js ***!
  \************************************************************************/
        /*! exports provided: createNetworkInterface, createBatchingNetworkInterface, createApolloStore, createApolloReducer, readQueryFromStore, writeQueryToStore, addTypenameToDocument, createFragmentMap, NetworkStatus, ApolloError, getQueryDefinition, getMutationDefinition, getFragmentDefinitions, toIdValue, IntrospectionFragmentMatcher, printAST, HTTPFetchNetworkInterface, HTTPBatchedNetworkInterface, ObservableQuery, ApolloClient, default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _transport_networkInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./transport/networkInterface */ '../node_modules/react-apollo/node_modules/apollo-client/transport/networkInterface.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'createNetworkInterface',
            function() {
              return _transport_networkInterface__WEBPACK_IMPORTED_MODULE_0__[
                'createNetworkInterface'
              ];
            }
          );

          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'HTTPFetchNetworkInterface',
            function() {
              return _transport_networkInterface__WEBPACK_IMPORTED_MODULE_0__[
                'HTTPFetchNetworkInterface'
              ];
            }
          );

          /* harmony import */ var _transport_batchedNetworkInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./transport/batchedNetworkInterface */ '../node_modules/react-apollo/node_modules/apollo-client/transport/batchedNetworkInterface.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'createBatchingNetworkInterface',
            function() {
              return _transport_batchedNetworkInterface__WEBPACK_IMPORTED_MODULE_1__[
                'createBatchingNetworkInterface'
              ];
            }
          );

          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'HTTPBatchedNetworkInterface',
            function() {
              return _transport_batchedNetworkInterface__WEBPACK_IMPORTED_MODULE_1__[
                'HTTPBatchedNetworkInterface'
              ];
            }
          );

          /* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! graphql/language/printer */ '../node_modules/react-apollo/node_modules/graphql/language/printer.js'
          );
          /* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            graphql_language_printer__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'printAST',
            function() {
              return graphql_language_printer__WEBPACK_IMPORTED_MODULE_2__['print'];
            }
          );

          /* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./store */ '../node_modules/react-apollo/node_modules/apollo-client/store.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'createApolloStore',
            function() {
              return _store__WEBPACK_IMPORTED_MODULE_3__['createApolloStore'];
            }
          );

          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'createApolloReducer',
            function() {
              return _store__WEBPACK_IMPORTED_MODULE_3__['createApolloReducer'];
            }
          );

          /* harmony import */ var _core_ObservableQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./core/ObservableQuery */ '../node_modules/react-apollo/node_modules/apollo-client/core/ObservableQuery.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'ObservableQuery',
            function() {
              return _core_ObservableQuery__WEBPACK_IMPORTED_MODULE_4__[
                'ObservableQuery'
              ];
            }
          );

          /* harmony import */ var _data_readFromStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./data/readFromStore */ '../node_modules/react-apollo/node_modules/apollo-client/data/readFromStore.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'readQueryFromStore',
            function() {
              return _data_readFromStore__WEBPACK_IMPORTED_MODULE_5__[
                'readQueryFromStore'
              ];
            }
          );

          /* harmony import */ var _data_writeToStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! ./data/writeToStore */ '../node_modules/react-apollo/node_modules/apollo-client/data/writeToStore.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'writeQueryToStore',
            function() {
              return _data_writeToStore__WEBPACK_IMPORTED_MODULE_6__['writeQueryToStore'];
            }
          );

          /* harmony import */ var _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! ./queries/getFromAST */ '../node_modules/react-apollo/node_modules/apollo-client/queries/getFromAST.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'createFragmentMap',
            function() {
              return _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__[
                'createFragmentMap'
              ];
            }
          );

          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'getQueryDefinition',
            function() {
              return _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__[
                'getQueryDefinition'
              ];
            }
          );

          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'getMutationDefinition',
            function() {
              return _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__[
                'getMutationDefinition'
              ];
            }
          );

          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'getFragmentDefinitions',
            function() {
              return _queries_getFromAST__WEBPACK_IMPORTED_MODULE_7__[
                'getFragmentDefinitions'
              ];
            }
          );

          /* harmony import */ var _queries_networkStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            /*! ./queries/networkStatus */ '../node_modules/react-apollo/node_modules/apollo-client/queries/networkStatus.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'NetworkStatus',
            function() {
              return _queries_networkStatus__WEBPACK_IMPORTED_MODULE_8__['NetworkStatus'];
            }
          );

          /* harmony import */ var _queries_queryTransform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
            /*! ./queries/queryTransform */ '../node_modules/react-apollo/node_modules/apollo-client/queries/queryTransform.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'addTypenameToDocument',
            function() {
              return _queries_queryTransform__WEBPACK_IMPORTED_MODULE_9__[
                'addTypenameToDocument'
              ];
            }
          );

          /* harmony import */ var _errors_ApolloError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
            /*! ./errors/ApolloError */ '../node_modules/react-apollo/node_modules/apollo-client/errors/ApolloError.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'ApolloError',
            function() {
              return _errors_ApolloError__WEBPACK_IMPORTED_MODULE_10__['ApolloError'];
            }
          );

          /* harmony import */ var _ApolloClient__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
            /*! ./ApolloClient */ '../node_modules/react-apollo/node_modules/apollo-client/ApolloClient.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'ApolloClient',
            function() {
              return _ApolloClient__WEBPACK_IMPORTED_MODULE_11__['default'];
            }
          );

          /* harmony import */ var _data_storeUtils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
            /*! ./data/storeUtils */ '../node_modules/react-apollo/node_modules/apollo-client/data/storeUtils.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'toIdValue',
            function() {
              return _data_storeUtils__WEBPACK_IMPORTED_MODULE_12__['toIdValue'];
            }
          );

          /* harmony import */ var _data_fragmentMatcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
            /*! ./data/fragmentMatcher */ '../node_modules/react-apollo/node_modules/apollo-client/data/fragmentMatcher.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'IntrospectionFragmentMatcher',
            function() {
              return _data_fragmentMatcher__WEBPACK_IMPORTED_MODULE_13__[
                'IntrospectionFragmentMatcher'
              ];
            }
          );

          /* harmony default export */ __webpack_exports__['default'] =
            _ApolloClient__WEBPACK_IMPORTED_MODULE_11__['default'];
          //# sourceMappingURL=index.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/mutations/store.js':
        /*!**********************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/mutations/store.js ***!
  \**********************************************************************************/
        /*! exports provided: MutationStore */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'MutationStore',
            function() {
              return MutationStore;
            }
          );
          var MutationStore = (function() {
            function MutationStore() {
              this.store = {};
            }
            MutationStore.prototype.getStore = function() {
              return this.store;
            };
            MutationStore.prototype.get = function(mutationId) {
              return this.store[mutationId];
            };
            MutationStore.prototype.initMutation = function(
              mutationId,
              mutationString,
              variables
            ) {
              this.store[mutationId] = {
                mutationString: mutationString,
                variables: variables || {},
                loading: true,
                error: null,
              };
            };
            MutationStore.prototype.markMutationError = function(mutationId, error) {
              this.store[mutationId].loading = false;
              this.store[mutationId].error = error;
            };
            MutationStore.prototype.markMutationResult = function(mutationId) {
              this.store[mutationId].loading = false;
              this.store[mutationId].error = null;
            };
            MutationStore.prototype.reset = function() {
              this.store = {};
            };
            return MutationStore;
          })();

          //# sourceMappingURL=store.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/optimistic-data/store.js':
        /*!****************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/optimistic-data/store.js ***!
  \****************************************************************************************/
        /*! exports provided: getDataWithOptimisticResults, optimistic */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getDataWithOptimisticResults',
            function() {
              return getDataWithOptimisticResults;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'optimistic',
            function() {
              return optimistic;
            }
          );
          /* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ../actions */ '../node_modules/react-apollo/node_modules/apollo-client/actions.js'
          );
          /* harmony import */ var _data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ../data/store */ '../node_modules/react-apollo/node_modules/apollo-client/data/store.js'
          );
          /* harmony import */ var _util_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ../util/assign */ '../node_modules/react-apollo/node_modules/apollo-client/util/assign.js'
          );
          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };

          var optimisticDefaultState = [];
          function getDataWithOptimisticResults(store) {
            if (store.optimistic.length === 0) {
              return store.data;
            }
            var patches = store.optimistic.map(function(opt) {
              return opt.data;
            });
            return _util_assign__WEBPACK_IMPORTED_MODULE_2__['assign'].apply(
              void 0,
              [{}, store.data].concat(patches)
            );
          }
          function optimistic(previousState, action, store, config) {
            if (previousState === void 0) {
              previousState = optimisticDefaultState;
            }
            if (
              Object(_actions__WEBPACK_IMPORTED_MODULE_0__['isMutationInitAction'])(
                action
              ) &&
              action.optimisticResponse
            ) {
              var optimisticResponse = void 0;
              if (typeof action.optimisticResponse === 'function') {
                optimisticResponse = action.optimisticResponse(action.variables);
              } else {
                optimisticResponse = action.optimisticResponse;
              }
              var fakeMutationResultAction = {
                type: 'APOLLO_MUTATION_RESULT',
                result: {data: optimisticResponse},
                document: action.mutation,
                operationName: action.operationName,
                variables: action.variables,
                mutationId: action.mutationId,
                extraReducers: action.extraReducers,
                updateQueries: action.updateQueries,
                update: action.update,
              };
              var optimisticData = getDataWithOptimisticResults(
                __assign({}, store, {optimistic: previousState})
              );
              var patch = getOptimisticDataPatch(
                optimisticData,
                fakeMutationResultAction,
                store.queries,
                store.mutations,
                config
              );
              var optimisticState = {
                action: fakeMutationResultAction,
                data: patch,
                mutationId: action.mutationId,
              };
              var newState = previousState.concat([optimisticState]);
              return newState;
            } else if (
              (Object(_actions__WEBPACK_IMPORTED_MODULE_0__['isMutationErrorAction'])(
                action
              ) ||
                Object(_actions__WEBPACK_IMPORTED_MODULE_0__['isMutationResultAction'])(
                  action
                )) &&
              previousState.some(function(change) {
                return change.mutationId === action.mutationId;
              })
            ) {
              return rollbackOptimisticData(
                function(change) {
                  return change.mutationId === action.mutationId;
                },
                previousState,
                store,
                config
              );
            }
            return previousState;
          }
          function getOptimisticDataPatch(
            previousData,
            optimisticAction,
            queries,
            mutations,
            config
          ) {
            var optimisticData = Object(_data_store__WEBPACK_IMPORTED_MODULE_1__['data'])(
              previousData,
              optimisticAction,
              config
            );
            var patch = {};
            Object.keys(optimisticData).forEach(function(key) {
              if (optimisticData[key] !== previousData[key]) {
                patch[key] = optimisticData[key];
              }
            });
            return patch;
          }
          function rollbackOptimisticData(filterFn, previousState, store, config) {
            if (previousState === void 0) {
              previousState = optimisticDefaultState;
            }
            var optimisticData = Object(
              _util_assign__WEBPACK_IMPORTED_MODULE_2__['assign']
            )({}, store.data);
            var newState = previousState
              .filter(function(item) {
                return !filterFn(item);
              })
              .map(function(change) {
                var patch = getOptimisticDataPatch(
                  optimisticData,
                  change.action,
                  store.queries,
                  store.mutations,
                  config
                );
                Object(
                  _util_assign__WEBPACK_IMPORTED_MODULE_2__['assign']
                )(optimisticData, patch);
                return __assign({}, change, {data: patch});
              });
            return newState;
          }
          //# sourceMappingURL=store.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/queries/directives.js':
        /*!*************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/queries/directives.js ***!
  \*************************************************************************************/
        /*! exports provided: shouldInclude */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'shouldInclude',
            function() {
              return shouldInclude;
            }
          );
          function shouldInclude(selection, variables) {
            if (variables === void 0) {
              variables = {};
            }
            if (!selection.directives) {
              return true;
            }
            var res = true;
            selection.directives.forEach(function(directive) {
              if (directive.name.value !== 'skip' && directive.name.value !== 'include') {
                return;
              }
              var directiveArguments = directive.arguments || [];
              var directiveName = directive.name.value;
              if (directiveArguments.length !== 1) {
                throw new Error(
                  'Incorrect number of arguments for the @' +
                    directiveName +
                    ' directive.'
                );
              }
              var ifArgument = directiveArguments[0];
              if (!ifArgument.name || ifArgument.name.value !== 'if') {
                throw new Error(
                  'Invalid argument for the @' + directiveName + ' directive.'
                );
              }
              var ifValue = directiveArguments[0].value;
              var evaledValue = false;
              if (!ifValue || ifValue.kind !== 'BooleanValue') {
                if (ifValue.kind !== 'Variable') {
                  throw new Error(
                    'Argument for the @' +
                      directiveName +
                      ' directive must be a variable or a bool ean value.'
                  );
                } else {
                  evaledValue = variables[ifValue.name.value];
                  if (evaledValue === undefined) {
                    throw new Error(
                      'Invalid variable referenced in @' + directiveName + ' directive.'
                    );
                  }
                }
              } else {
                evaledValue = ifValue.value;
              }
              if (directiveName === 'skip') {
                evaledValue = !evaledValue;
              }
              if (!evaledValue) {
                res = false;
              }
            });
            return res;
          }
          //# sourceMappingURL=directives.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/queries/getFromAST.js':
        /*!*************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/queries/getFromAST.js ***!
  \*************************************************************************************/
        /*! exports provided: getMutationDefinition, checkDocument, getOperationName, getFragmentDefinitions, getQueryDefinition, getOperationDefinition, getFragmentDefinition, createFragmentMap, getFragmentQueryDocument, getDefaultValues */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getMutationDefinition',
            function() {
              return getMutationDefinition;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'checkDocument',
            function() {
              return checkDocument;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getOperationName',
            function() {
              return getOperationName;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getFragmentDefinitions',
            function() {
              return getFragmentDefinitions;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getQueryDefinition',
            function() {
              return getQueryDefinition;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getOperationDefinition',
            function() {
              return getOperationDefinition;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getFragmentDefinition',
            function() {
              return getFragmentDefinition;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createFragmentMap',
            function() {
              return createFragmentMap;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getFragmentQueryDocument',
            function() {
              return getFragmentQueryDocument;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getDefaultValues',
            function() {
              return getDefaultValues;
            }
          );
          /* harmony import */ var _data_storeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ../data/storeUtils */ '../node_modules/react-apollo/node_modules/apollo-client/data/storeUtils.js'
          );
          /* harmony import */ var _util_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ../util/assign */ '../node_modules/react-apollo/node_modules/apollo-client/util/assign.js'
          );
          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };

          function getMutationDefinition(doc) {
            checkDocument(doc);
            var mutationDef = null;
            doc.definitions.forEach(function(definition) {
              if (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'mutation'
              ) {
                mutationDef = definition;
              }
            });
            if (!mutationDef) {
              throw new Error('Must contain a mutation definition.');
            }
            return mutationDef;
          }
          function checkDocument(doc) {
            if (doc.kind !== 'Document') {
              throw new Error(
                'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
              );
            }
            var foundOperation = false;
            doc.definitions.forEach(function(definition) {
              switch (definition.kind) {
                case 'FragmentDefinition':
                  break;
                case 'OperationDefinition':
                  if (foundOperation) {
                    throw new Error(
                      'Queries must have exactly one operation definition.'
                    );
                  }
                  foundOperation = true;
                  break;
                default:
                  throw new Error(
                    'Schema type definitions not allowed in queries. Found: "' +
                      definition.kind +
                      '"'
                  );
              }
            });
          }
          function getOperationName(doc) {
            var res = null;
            doc.definitions.forEach(function(definition) {
              if (definition.kind === 'OperationDefinition' && definition.name) {
                res = definition.name.value;
              }
            });
            return res;
          }
          function getFragmentDefinitions(doc) {
            var fragmentDefinitions = doc.definitions.filter(function(definition) {
              if (definition.kind === 'FragmentDefinition') {
                return true;
              } else {
                return false;
              }
            });
            return fragmentDefinitions;
          }
          function getQueryDefinition(doc) {
            checkDocument(doc);
            var queryDef = null;
            doc.definitions.map(function(definition) {
              if (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'query'
              ) {
                queryDef = definition;
              }
            });
            if (!queryDef) {
              throw new Error('Must contain a query definition.');
            }
            return queryDef;
          }
          function getOperationDefinition(doc) {
            checkDocument(doc);
            var opDef = null;
            doc.definitions.map(function(definition) {
              if (definition.kind === 'OperationDefinition') {
                opDef = definition;
              }
            });
            if (!opDef) {
              throw new Error('Must contain a query definition.');
            }
            return opDef;
          }
          function getFragmentDefinition(doc) {
            if (doc.kind !== 'Document') {
              throw new Error(
                'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
              );
            }
            if (doc.definitions.length > 1) {
              throw new Error('Fragment must have exactly one definition.');
            }
            var fragmentDef = doc.definitions[0];
            if (fragmentDef.kind !== 'FragmentDefinition') {
              throw new Error('Must be a fragment definition.');
            }
            return fragmentDef;
          }
          function createFragmentMap(fragments) {
            if (fragments === void 0) {
              fragments = [];
            }
            var symTable = {};
            fragments.forEach(function(fragment) {
              symTable[fragment.name.value] = fragment;
            });
            return symTable;
          }
          function getFragmentQueryDocument(document, fragmentName) {
            var actualFragmentName = fragmentName;
            var fragments = [];
            document.definitions.forEach(function(definition) {
              if (definition.kind === 'OperationDefinition') {
                throw new Error(
                  'Found a ' +
                    definition.operation +
                    ' operation' +
                    (definition.name ? " named '" + definition.name.value + "'" : '') +
                    '. ' +
                    'No operations are allowed when using a fragment as a query. Only fragments are allowed.'
                );
              }
              if (definition.kind === 'FragmentDefinition') {
                fragments.push(definition);
              }
            });
            if (typeof actualFragmentName === 'undefined') {
              if (fragments.length !== 1) {
                throw new Error(
                  'Found ' +
                    fragments.length +
                    ' fragments. `fragmentName` must be provided when there is not exactly 1 fragment.'
                );
              }
              actualFragmentName = fragments[0].name.value;
            }
            var query = __assign({}, document, {
              definitions: [
                {
                  kind: 'OperationDefinition',
                  operation: 'query',
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: actualFragmentName,
                        },
                      },
                    ],
                  },
                },
              ].concat(document.definitions),
            });
            return query;
          }
          function getDefaultValues(definition) {
            if (definition.variableDefinitions && definition.variableDefinitions.length) {
              var defaultValues = definition.variableDefinitions
                .filter(function(_a) {
                  var defaultValue = _a.defaultValue;
                  return defaultValue;
                })
                .map(function(_a) {
                  var variable = _a.variable,
                    defaultValue = _a.defaultValue;
                  var defaultValueObj = {};
                  Object(
                    _data_storeUtils__WEBPACK_IMPORTED_MODULE_0__[
                      'valueToObjectRepresentation'
                    ]
                  )(defaultValueObj, variable.name, defaultValue);
                  return defaultValueObj;
                });
              return _util_assign__WEBPACK_IMPORTED_MODULE_1__['assign'].apply(
                void 0,
                [{}].concat(defaultValues)
              );
            }
            return {};
          }
          //# sourceMappingURL=getFromAST.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/queries/networkStatus.js':
        /*!****************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/queries/networkStatus.js ***!
  \****************************************************************************************/
        /*! exports provided: NetworkStatus, isNetworkRequestInFlight */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'NetworkStatus',
            function() {
              return NetworkStatus;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isNetworkRequestInFlight',
            function() {
              return isNetworkRequestInFlight;
            }
          );
          var NetworkStatus;
          (function(NetworkStatus) {
            NetworkStatus[(NetworkStatus['loading'] = 1)] = 'loading';
            NetworkStatus[(NetworkStatus['setVariables'] = 2)] = 'setVariables';
            NetworkStatus[(NetworkStatus['fetchMore'] = 3)] = 'fetchMore';
            NetworkStatus[(NetworkStatus['refetch'] = 4)] = 'refetch';
            NetworkStatus[(NetworkStatus['poll'] = 6)] = 'poll';
            NetworkStatus[(NetworkStatus['ready'] = 7)] = 'ready';
            NetworkStatus[(NetworkStatus['error'] = 8)] = 'error';
          })(NetworkStatus || (NetworkStatus = {}));
          function isNetworkRequestInFlight(networkStatus) {
            return networkStatus < 7;
          }
          //# sourceMappingURL=networkStatus.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/queries/queryTransform.js':
        /*!*****************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/queries/queryTransform.js ***!
  \*****************************************************************************************/
        /*! exports provided: addTypenameToDocument, removeConnectionDirectiveFromDocument */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'addTypenameToDocument',
            function() {
              return addTypenameToDocument;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'removeConnectionDirectiveFromDocument',
            function() {
              return removeConnectionDirectiveFromDocument;
            }
          );
          /* harmony import */ var _getFromAST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./getFromAST */ '../node_modules/react-apollo/node_modules/apollo-client/queries/getFromAST.js'
          );
          /* harmony import */ var _util_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ../util/cloneDeep */ '../node_modules/react-apollo/node_modules/apollo-client/util/cloneDeep.js'
          );

          var TYPENAME_FIELD = {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: '__typename',
            },
          };
          function addTypenameToSelectionSet(selectionSet, isRoot) {
            if (isRoot === void 0) {
              isRoot = false;
            }
            if (selectionSet.selections) {
              if (!isRoot) {
                var alreadyHasThisField = selectionSet.selections.some(function(
                  selection
                ) {
                  return (
                    selection.kind === 'Field' && selection.name.value === '__typename'
                  );
                });
                if (!alreadyHasThisField) {
                  selectionSet.selections.push(TYPENAME_FIELD);
                }
              }
              selectionSet.selections.forEach(function(selection) {
                if (selection.kind === 'Field') {
                  if (
                    selection.name.value.lastIndexOf('__', 0) !== 0 &&
                    selection.selectionSet
                  ) {
                    addTypenameToSelectionSet(selection.selectionSet);
                  }
                } else if (selection.kind === 'InlineFragment') {
                  if (selection.selectionSet) {
                    addTypenameToSelectionSet(selection.selectionSet);
                  }
                }
              });
            }
          }
          function removeConnectionDirectiveFromSelectionSet(selectionSet) {
            if (selectionSet.selections) {
              selectionSet.selections.forEach(function(selection) {
                if (selection.kind === 'Field' && selection && selection.directives) {
                  selection.directives = selection.directives.filter(function(directive) {
                    var willRemove = directive.name.value === 'connection';
                    if (willRemove) {
                      if (
                        !directive.arguments ||
                        !directive.arguments.some(function(arg) {
                          return arg.name.value === 'key';
                        })
                      ) {
                        console.warn(
                          'Removing an @connection directive even though it does not have a key. ' +
                            'You may want to use the key parameter to specify a store key.'
                        );
                      }
                    }
                    return !willRemove;
                  });
                }
              });
              selectionSet.selections.forEach(function(selection) {
                if (selection.kind === 'Field') {
                  if (selection.selectionSet) {
                    removeConnectionDirectiveFromSelectionSet(selection.selectionSet);
                  }
                } else if (selection.kind === 'InlineFragment') {
                  if (selection.selectionSet) {
                    removeConnectionDirectiveFromSelectionSet(selection.selectionSet);
                  }
                }
              });
            }
          }
          function addTypenameToDocument(doc) {
            Object(_getFromAST__WEBPACK_IMPORTED_MODULE_0__['checkDocument'])(doc);
            var docClone = Object(
              _util_cloneDeep__WEBPACK_IMPORTED_MODULE_1__['cloneDeep']
            )(doc);
            docClone.definitions.forEach(function(definition) {
              var isRoot = definition.kind === 'OperationDefinition';
              addTypenameToSelectionSet(definition.selectionSet, isRoot);
            });
            return docClone;
          }
          function removeConnectionDirectiveFromDocument(doc) {
            Object(_getFromAST__WEBPACK_IMPORTED_MODULE_0__['checkDocument'])(doc);
            var docClone = Object(
              _util_cloneDeep__WEBPACK_IMPORTED_MODULE_1__['cloneDeep']
            )(doc);
            docClone.definitions.forEach(function(definition) {
              removeConnectionDirectiveFromSelectionSet(definition.selectionSet);
            });
            return docClone;
          }
          //# sourceMappingURL=queryTransform.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/queries/store.js':
        /*!********************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/queries/store.js ***!
  \********************************************************************************/
        /*! exports provided: QueryStore */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'QueryStore',
            function() {
              return QueryStore;
            }
          );
          /* harmony import */ var _util_isEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ../util/isEqual */ '../node_modules/react-apollo/node_modules/apollo-client/util/isEqual.js'
          );
          /* harmony import */ var _networkStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./networkStatus */ '../node_modules/react-apollo/node_modules/apollo-client/queries/networkStatus.js'
          );
          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };

          var QueryStore = (function() {
            function QueryStore() {
              this.store = {};
            }
            QueryStore.prototype.getStore = function() {
              return this.store;
            };
            QueryStore.prototype.get = function(queryId) {
              return this.store[queryId];
            };
            QueryStore.prototype.initQuery = function(query) {
              var previousQuery = this.store[query.queryId];
              if (previousQuery && previousQuery.queryString !== query.queryString) {
                throw new Error(
                  'Internal Error: may not update existing query string in store'
                );
              }
              var isSetVariables = false;
              var previousVariables = null;
              if (
                query.storePreviousVariables &&
                previousQuery &&
                previousQuery.networkStatus !==
                  _networkStatus__WEBPACK_IMPORTED_MODULE_1__['NetworkStatus'].loading
              ) {
                if (
                  !Object(_util_isEqual__WEBPACK_IMPORTED_MODULE_0__['isEqual'])(
                    previousQuery.variables,
                    query.variables
                  )
                ) {
                  isSetVariables = true;
                  previousVariables = previousQuery.variables;
                }
              }
              var networkStatus;
              if (isSetVariables) {
                networkStatus =
                  _networkStatus__WEBPACK_IMPORTED_MODULE_1__['NetworkStatus']
                    .setVariables;
              } else if (query.isPoll) {
                networkStatus =
                  _networkStatus__WEBPACK_IMPORTED_MODULE_1__['NetworkStatus'].poll;
              } else if (query.isRefetch) {
                networkStatus =
                  _networkStatus__WEBPACK_IMPORTED_MODULE_1__['NetworkStatus'].refetch;
              } else {
                networkStatus =
                  _networkStatus__WEBPACK_IMPORTED_MODULE_1__['NetworkStatus'].loading;
              }
              this.store[query.queryId] = {
                queryString: query.queryString,
                document: query.document,
                variables: query.variables,
                previousVariables: previousVariables,
                networkError: null,
                graphQLErrors: [],
                networkStatus: networkStatus,
                metadata: query.metadata,
              };
              if (typeof query.fetchMoreForQueryId === 'string') {
                this.store[query.fetchMoreForQueryId].networkStatus =
                  _networkStatus__WEBPACK_IMPORTED_MODULE_1__['NetworkStatus'].fetchMore;
              }
            };
            QueryStore.prototype.markQueryResult = function(
              queryId,
              result,
              fetchMoreForQueryId
            ) {
              if (!this.store[queryId]) {
                return;
              }
              this.store[queryId].networkError = null;
              this.store[queryId].graphQLErrors =
                result.errors && result.errors.length ? result.errors : [];
              this.store[queryId].previousVariables = null;
              this.store[queryId].networkStatus =
                _networkStatus__WEBPACK_IMPORTED_MODULE_1__['NetworkStatus'].ready;
              if (typeof fetchMoreForQueryId === 'string') {
                this.store[fetchMoreForQueryId].networkStatus =
                  _networkStatus__WEBPACK_IMPORTED_MODULE_1__['NetworkStatus'].ready;
              }
            };
            QueryStore.prototype.markQueryError = function(
              queryId,
              error,
              fetchMoreForQueryId
            ) {
              if (!this.store[queryId]) {
                return;
              }
              this.store[queryId].networkError = error;
              this.store[queryId].networkStatus =
                _networkStatus__WEBPACK_IMPORTED_MODULE_1__['NetworkStatus'].error;
              if (typeof fetchMoreForQueryId === 'string') {
                this.markQueryError(fetchMoreForQueryId, error, undefined);
              }
            };
            QueryStore.prototype.markQueryResultClient = function(queryId, complete) {
              if (!this.store[queryId]) {
                return;
              }
              this.store[queryId].networkError = null;
              this.store[queryId].previousVariables = null;
              this.store[queryId].networkStatus = complete
                ? _networkStatus__WEBPACK_IMPORTED_MODULE_1__['NetworkStatus'].ready
                : _networkStatus__WEBPACK_IMPORTED_MODULE_1__['NetworkStatus'].loading;
            };
            QueryStore.prototype.stopQuery = function(queryId) {
              delete this.store[queryId];
            };
            QueryStore.prototype.reset = function(observableQueryIds) {
              var _this = this;
              this.store = Object.keys(this.store)
                .filter(function(queryId) {
                  return observableQueryIds.indexOf(queryId) > -1;
                })
                .reduce(function(res, key) {
                  res[key] = __assign({}, _this.store[key], {
                    networkStatus:
                      _networkStatus__WEBPACK_IMPORTED_MODULE_1__['NetworkStatus']
                        .loading,
                  });
                  return res;
                }, {});
            };
            return QueryStore;
          })();

          //# sourceMappingURL=store.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/scheduler/scheduler.js':
        /*!**************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/scheduler/scheduler.js ***!
  \**************************************************************************************/
        /*! exports provided: QueryScheduler */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'QueryScheduler',
            function() {
              return QueryScheduler;
            }
          );
          /* harmony import */ var _core_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ../core/types */ '../node_modules/react-apollo/node_modules/apollo-client/core/types.js'
          );
          /* harmony import */ var _core_ObservableQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ../core/ObservableQuery */ '../node_modules/react-apollo/node_modules/apollo-client/core/ObservableQuery.js'
          );
          /* harmony import */ var _queries_networkStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ../queries/networkStatus */ '../node_modules/react-apollo/node_modules/apollo-client/queries/networkStatus.js'
          );
          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };

          var QueryScheduler = (function() {
            function QueryScheduler(_a) {
              var queryManager = _a.queryManager;
              this.queryManager = queryManager;
              this.pollingTimers = {};
              this.inFlightQueries = {};
              this.registeredQueries = {};
              this.intervalQueries = {};
            }
            QueryScheduler.prototype.checkInFlight = function(queryId) {
              var query = this.queryManager.queryStore.get(queryId);
              return (
                query &&
                query.networkStatus !==
                  _queries_networkStatus__WEBPACK_IMPORTED_MODULE_2__['NetworkStatus']
                    .ready &&
                query.networkStatus !==
                  _queries_networkStatus__WEBPACK_IMPORTED_MODULE_2__['NetworkStatus']
                    .error
              );
            };
            QueryScheduler.prototype.fetchQuery = function(queryId, options, fetchType) {
              var _this = this;
              return new Promise(function(resolve, reject) {
                _this.queryManager
                  .fetchQuery(queryId, options, fetchType)
                  .then(function(result) {
                    resolve(result);
                  })
                  .catch(function(error) {
                    reject(error);
                  });
              });
            };
            QueryScheduler.prototype.startPollingQuery = function(
              options,
              queryId,
              listener
            ) {
              if (!options.pollInterval) {
                throw new Error(
                  'Attempted to start a polling query without a polling interval.'
                );
              }
              if (this.queryManager.ssrMode) {
                return queryId;
              }
              this.registeredQueries[queryId] = options;
              if (listener) {
                this.queryManager.addQueryListener(queryId, listener);
              }
              this.addQueryOnInterval(queryId, options);
              return queryId;
            };
            QueryScheduler.prototype.stopPollingQuery = function(queryId) {
              delete this.registeredQueries[queryId];
            };
            QueryScheduler.prototype.fetchQueriesOnInterval = function(interval) {
              var _this = this;
              this.intervalQueries[interval] = this.intervalQueries[interval].filter(
                function(queryId) {
                  if (!_this.registeredQueries.hasOwnProperty(queryId)) {
                    return false;
                  }
                  if (_this.checkInFlight(queryId)) {
                    return true;
                  }
                  var queryOptions = _this.registeredQueries[queryId];
                  var pollingOptions = __assign({}, queryOptions);
                  pollingOptions.fetchPolicy = 'network-only';
                  _this.fetchQuery(
                    queryId,
                    pollingOptions,
                    _core_types__WEBPACK_IMPORTED_MODULE_0__['FetchType'].poll
                  );
                  return true;
                }
              );
              if (this.intervalQueries[interval].length === 0) {
                clearInterval(this.pollingTimers[interval]);
                delete this.intervalQueries[interval];
              }
            };
            QueryScheduler.prototype.addQueryOnInterval = function(
              queryId,
              queryOptions
            ) {
              var _this = this;
              var interval = queryOptions.pollInterval;
              if (!interval) {
                throw new Error(
                  "A poll interval is required to start polling query with id '" +
                    queryId +
                    "'."
                );
              }
              if (
                this.intervalQueries.hasOwnProperty(interval.toString()) &&
                this.intervalQueries[interval].length > 0
              ) {
                this.intervalQueries[interval].push(queryId);
              } else {
                this.intervalQueries[interval] = [queryId];
                this.pollingTimers[interval] = setInterval(function() {
                  _this.fetchQueriesOnInterval(interval);
                }, interval);
              }
            };
            QueryScheduler.prototype.registerPollingQuery = function(queryOptions) {
              if (!queryOptions.pollInterval) {
                throw new Error(
                  'Attempted to register a non-polling query with the scheduler.'
                );
              }
              return new _core_ObservableQuery__WEBPACK_IMPORTED_MODULE_1__[
                'ObservableQuery'
              ]({
                scheduler: this,
                options: queryOptions,
              });
            };
            return QueryScheduler;
          })();

          //# sourceMappingURL=scheduler.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/store.js':
        /*!************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/store.js ***!
  \************************************************************************/
        /*! exports provided: getDataWithOptimisticResults, createApolloReducer, createApolloStore */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createApolloReducer',
            function() {
              return createApolloReducer;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createApolloStore',
            function() {
              return createApolloStore;
            }
          );
          /* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! redux */ '../node_modules/redux/es/index.js'
          );
          /* harmony import */ var _data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./data/store */ '../node_modules/react-apollo/node_modules/apollo-client/data/store.js'
          );
          /* harmony import */ var _optimistic_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./optimistic-data/store */ '../node_modules/react-apollo/node_modules/apollo-client/optimistic-data/store.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'getDataWithOptimisticResults',
            function() {
              return _optimistic_data_store__WEBPACK_IMPORTED_MODULE_2__[
                'getDataWithOptimisticResults'
              ];
            }
          );

          /* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./actions */ '../node_modules/react-apollo/node_modules/apollo-client/actions.js'
          );
          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };

          var crashReporter = function(store) {
            return function(next) {
              return function(action) {
                try {
                  return next(action);
                } catch (err) {
                  console.error('Caught an exception!', err);
                  console.error(err.stack);
                  throw err;
                }
              };
            };
          };
          var createReducerError = function(error, action) {
            var reducerError = {error: error};
            if (
              Object(_actions__WEBPACK_IMPORTED_MODULE_3__['isQueryResultAction'])(action)
            ) {
              reducerError.queryId = action.queryId;
            } else if (
              Object(_actions__WEBPACK_IMPORTED_MODULE_3__['isSubscriptionResultAction'])(
                action
              )
            ) {
              reducerError.subscriptionId = action.subscriptionId;
            } else if (
              Object(_actions__WEBPACK_IMPORTED_MODULE_3__['isMutationResultAction'])(
                action
              )
            ) {
              reducerError.mutationId = action.mutationId;
            }
            return reducerError;
          };
          function createApolloReducer(config) {
            return function apolloReducer(state, action) {
              if (state === void 0) {
                state = {};
              }
              try {
                var newState = {
                  data: Object(_data_store__WEBPACK_IMPORTED_MODULE_1__['data'])(
                    state.data,
                    action,
                    config
                  ),
                  optimistic: [],
                  reducerError: null,
                };
                newState.optimistic = Object(
                  _optimistic_data_store__WEBPACK_IMPORTED_MODULE_2__['optimistic']
                )(state.optimistic, action, newState, config);
                if (
                  state.data === newState.data &&
                  state.optimistic === newState.optimistic &&
                  state.reducerError === newState.reducerError
                ) {
                  return state;
                }
                return newState;
              } catch (reducerError) {
                return __assign({}, state, {
                  reducerError: createReducerError(reducerError, action),
                });
              }
            };
          }
          function createApolloStore(_a) {
            var _b = _a === void 0 ? {} : _a,
              _c = _b.reduxRootKey,
              reduxRootKey = _c === void 0 ? 'apollo' : _c,
              initialState = _b.initialState,
              _d = _b.config,
              config = _d === void 0 ? {} : _d,
              _e = _b.reportCrashes,
              reportCrashes = _e === void 0 ? true : _e,
              logger = _b.logger;
            var enhancers = [];
            var middlewares = [];
            if (reportCrashes) {
              middlewares.push(crashReporter);
            }
            if (logger) {
              middlewares.push(logger);
            }
            if (middlewares.length > 0) {
              enhancers.push(
                redux__WEBPACK_IMPORTED_MODULE_0__['applyMiddleware'].apply(
                  void 0,
                  middlewares
                )
              );
            }
            if (typeof window !== 'undefined') {
              var anyWindow = window;
              if (anyWindow.devToolsExtension) {
                enhancers.push(anyWindow.devToolsExtension());
              }
            }
            var compose = redux__WEBPACK_IMPORTED_MODULE_0__['compose'];
            if (
              initialState &&
              initialState[reduxRootKey] &&
              initialState[reduxRootKey]['queries']
            ) {
              throw new Error('Apollo initial state may not contain queries, only data');
            }
            if (
              initialState &&
              initialState[reduxRootKey] &&
              initialState[reduxRootKey]['mutations']
            ) {
              throw new Error(
                'Apollo initial state may not contain mutations, only data'
              );
            }
            return Object(redux__WEBPACK_IMPORTED_MODULE_0__['createStore'])(
              Object(redux__WEBPACK_IMPORTED_MODULE_0__['combineReducers'])(
                ((_f = {}), (_f[reduxRootKey] = createApolloReducer(config)), _f)
              ),
              initialState,
              compose.apply(void 0, enhancers)
            );
            var _f;
          }
          //# sourceMappingURL=store.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/transport/Deduplicator.js':
        /*!*****************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/transport/Deduplicator.js ***!
  \*****************************************************************************************/
        /*! exports provided: Deduplicator */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'Deduplicator',
            function() {
              return Deduplicator;
            }
          );
          /* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! graphql/language/printer */ '../node_modules/react-apollo/node_modules/graphql/language/printer.js'
          );
          /* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            graphql_language_printer__WEBPACK_IMPORTED_MODULE_0__
          );

          var Deduplicator = (function() {
            function Deduplicator(networkInterface) {
              this.networkInterface = networkInterface;
              this.inFlightRequestPromises = {};
            }
            Deduplicator.prototype.query = function(request, deduplicate) {
              var _this = this;
              if (deduplicate === void 0) {
                deduplicate = true;
              }
              if (!deduplicate) {
                return this.networkInterface.query(request);
              }
              var key = this.getKey(request);
              if (!this.inFlightRequestPromises[key]) {
                this.inFlightRequestPromises[key] = this.networkInterface.query(request);
              }
              return this.inFlightRequestPromises[key]
                .then(function(res) {
                  delete _this.inFlightRequestPromises[key];
                  return res;
                })
                .catch(function(err) {
                  delete _this.inFlightRequestPromises[key];
                  throw err;
                });
            };
            Deduplicator.prototype.getKey = function(request) {
              return (
                Object(graphql_language_printer__WEBPACK_IMPORTED_MODULE_0__['print'])(
                  request.query
                ) +
                '|' +
                JSON.stringify(request.variables) +
                '|' +
                request.operationName
              );
            };
            return Deduplicator;
          })();

          //# sourceMappingURL=Deduplicator.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/transport/batchedNetworkInterface.js':
        /*!****************************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/transport/batchedNetworkInterface.js ***!
  \****************************************************************************************************/
        /*! exports provided: HTTPBatchedNetworkInterface, createBatchingNetworkInterface */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'HTTPBatchedNetworkInterface',
            function() {
              return HTTPBatchedNetworkInterface;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createBatchingNetworkInterface',
            function() {
              return createBatchingNetworkInterface;
            }
          );
          /* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! whatwg-fetch */ '../node_modules/whatwg-fetch/fetch.js'
          );
          /* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var _networkInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./networkInterface */ '../node_modules/react-apollo/node_modules/apollo-client/transport/networkInterface.js'
          );
          /* harmony import */ var _queries_queryTransform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ../queries/queryTransform */ '../node_modules/react-apollo/node_modules/apollo-client/queries/queryTransform.js'
          );
          /* harmony import */ var _batching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./batching */ '../node_modules/react-apollo/node_modules/apollo-client/transport/batching.js'
          );
          /* harmony import */ var _util_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ../util/assign */ '../node_modules/react-apollo/node_modules/apollo-client/util/assign.js'
          );
          var __extends =
            (undefined && undefined.__extends) ||
            (function() {
              var extendStatics =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype =
                  b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
              };
            })();
          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };

          var HTTPBatchedNetworkInterface = (function(_super) {
            __extends(HTTPBatchedNetworkInterface, _super);
            function HTTPBatchedNetworkInterface(_a) {
              var uri = _a.uri,
                _b = _a.batchInterval,
                batchInterval = _b === void 0 ? 10 : _b,
                _c = _a.batchMax,
                batchMax = _c === void 0 ? 0 : _c,
                fetchOpts = _a.fetchOpts;
              var _this = _super.call(this, uri, fetchOpts) || this;
              if (typeof batchInterval !== 'number') {
                throw new Error('batchInterval must be a number, got ' + batchInterval);
              }
              if (typeof batchMax !== 'number') {
                throw new Error('batchMax must be a number, got ' + batchMax);
              }
              _this.batcher = new _batching__WEBPACK_IMPORTED_MODULE_3__['QueryBatcher']({
                batchInterval: batchInterval,
                batchMax: batchMax,
                batchFetchFunction: _this.batchQuery.bind(_this),
              });
              return _this;
            }
            HTTPBatchedNetworkInterface.prototype.query = function(request) {
              return this.batcher.enqueueRequest(request);
            };
            HTTPBatchedNetworkInterface.prototype.batchQuery = function(requests) {
              var _this = this;
              var options = __assign({}, this._opts);
              var middlewarePromise = this.applyBatchMiddlewares({
                requests: requests,
                options: options,
              });
              return new Promise(function(resolve, reject) {
                middlewarePromise
                  .then(function(batchRequestAndOptions) {
                    batchRequestAndOptions.requests.forEach(function(r) {
                      if (r.query)
                        r.query = Object(
                          _queries_queryTransform__WEBPACK_IMPORTED_MODULE_2__[
                            'removeConnectionDirectiveFromDocument'
                          ]
                        )(r.query);
                    });
                    return _this
                      .batchedFetchFromRemoteEndpoint(batchRequestAndOptions)
                      .then(function(result) {
                        var httpResponse = result;
                        if (!httpResponse.ok) {
                          return _this
                            .applyBatchAfterwares({
                              responses: [httpResponse],
                              options: batchRequestAndOptions.options,
                            })
                            .then(function() {
                              var httpError = new Error(
                                'Network request failed with status ' +
                                  httpResponse.status +
                                  ' - "' +
                                  httpResponse.statusText +
                                  '"'
                              );
                              httpError.response = httpResponse;
                              throw httpError;
                            });
                        }
                        return result.json();
                      })
                      .then(function(responses) {
                        if (typeof responses.map !== 'function') {
                          throw new Error(
                            'BatchingNetworkInterface: server response is not an array'
                          );
                        }
                        _this
                          .applyBatchAfterwares({
                            responses: responses,
                            options: batchRequestAndOptions.options,
                          })
                          .then(function(responseAndOptions) {
                            resolve(responseAndOptions.responses);
                          })
                          .catch(function(error) {
                            reject(error);
                          });
                      });
                  })
                  .catch(function(error) {
                    reject(error);
                  });
              });
            };
            HTTPBatchedNetworkInterface.prototype.applyBatchMiddlewares = function(_a) {
              var _this = this;
              var requests = _a.requests,
                options = _a.options;
              return new Promise(function(resolve, reject) {
                var queue = function(funcs, scope) {
                  var next = function() {
                    if (funcs.length > 0) {
                      var f = funcs.shift();
                      if (f) {
                        f.applyBatchMiddleware.apply(scope, [
                          {requests: requests, options: options},
                          next,
                        ]);
                      }
                    } else {
                      resolve({
                        requests: requests,
                        options: options,
                      });
                    }
                  };
                  next();
                };
                queue(_this._middlewares.slice(), _this);
              });
            };
            HTTPBatchedNetworkInterface.prototype.applyBatchAfterwares = function(_a) {
              var _this = this;
              var responses = _a.responses,
                options = _a.options;
              return new Promise(function(resolve, reject) {
                var responseObject = {responses: responses, options: options};
                var queue = function(funcs, scope) {
                  var next = function() {
                    if (funcs.length > 0) {
                      var f = funcs.shift();
                      if (f) {
                        f.applyBatchAfterware.apply(scope, [responseObject, next]);
                      }
                    } else {
                      resolve(responseObject);
                    }
                  };
                  next();
                };
                queue(_this._afterwares.slice(), _this);
              });
            };
            HTTPBatchedNetworkInterface.prototype.use = function(middlewares) {
              var _this = this;
              middlewares.map(function(middleware) {
                if (typeof middleware.applyBatchMiddleware === 'function') {
                  _this._middlewares.push(middleware);
                } else {
                  throw new Error(
                    'Batch middleware must implement the applyBatchMiddleware function'
                  );
                }
              });
              return this;
            };
            HTTPBatchedNetworkInterface.prototype.useAfter = function(afterwares) {
              var _this = this;
              afterwares.map(function(afterware) {
                if (typeof afterware.applyBatchAfterware === 'function') {
                  _this._afterwares.push(afterware);
                } else {
                  throw new Error(
                    'Batch afterware must implement the applyBatchAfterware function'
                  );
                }
              });
              return this;
            };
            HTTPBatchedNetworkInterface.prototype.batchedFetchFromRemoteEndpoint = function(
              batchRequestAndOptions
            ) {
              var options = {};
              Object(_util_assign__WEBPACK_IMPORTED_MODULE_4__['assign'])(
                options,
                batchRequestAndOptions.options
              );
              var printedRequests = batchRequestAndOptions.requests.map(function(
                request
              ) {
                return Object(
                  _networkInterface__WEBPACK_IMPORTED_MODULE_1__['printRequest']
                )(request);
              });
              return fetch(
                this._uri,
                __assign(
                  {},
                  this._opts,
                  {body: JSON.stringify(printedRequests), method: 'POST'},
                  options,
                  {
                    headers: __assign(
                      {Accept: '*/*', 'Content-Type': 'application/json'},
                      options.headers
                    ),
                  }
                )
              );
            };
            return HTTPBatchedNetworkInterface;
          })(_networkInterface__WEBPACK_IMPORTED_MODULE_1__['BaseNetworkInterface']);

          function createBatchingNetworkInterface(options) {
            if (!options) {
              throw new Error(
                'You must pass an options argument to createNetworkInterface.'
              );
            }
            return new HTTPBatchedNetworkInterface({
              uri: options.uri,
              batchInterval: options.batchInterval,
              batchMax: options.batchMax,
              fetchOpts: options.opts || {},
            });
          }
          //# sourceMappingURL=batchedNetworkInterface.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/transport/batching.js':
        /*!*************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/transport/batching.js ***!
  \*************************************************************************************/
        /*! exports provided: QueryBatcher */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'QueryBatcher',
            function() {
              return QueryBatcher;
            }
          );
          var QueryBatcher = (function() {
            function QueryBatcher(_a) {
              var batchInterval = _a.batchInterval,
                _b = _a.batchMax,
                batchMax = _b === void 0 ? 0 : _b,
                batchFetchFunction = _a.batchFetchFunction;
              this.queuedRequests = [];
              this.queuedRequests = [];
              this.batchInterval = batchInterval;
              this.batchMax = batchMax;
              this.batchFetchFunction = batchFetchFunction;
            }
            QueryBatcher.prototype.enqueueRequest = function(request) {
              var fetchRequest = {
                request: request,
              };
              this.queuedRequests.push(fetchRequest);
              fetchRequest.promise = new Promise(function(resolve, reject) {
                fetchRequest.resolve = resolve;
                fetchRequest.reject = reject;
              });
              if (this.queuedRequests.length === 1) {
                this.scheduleQueueConsumption();
              }
              if (this.queuedRequests.length === this.batchMax) {
                this.consumeQueue();
              }
              return fetchRequest.promise;
            };
            QueryBatcher.prototype.consumeQueue = function() {
              var requests = this.queuedRequests.map(function(queuedRequest) {
                return queuedRequest.request;
              });
              var promises = [];
              var resolvers = [];
              var rejecters = [];
              this.queuedRequests.forEach(function(fetchRequest, index) {
                promises.push(fetchRequest.promise);
                resolvers.push(fetchRequest.resolve);
                rejecters.push(fetchRequest.reject);
              });
              this.queuedRequests = [];
              var batchedPromise = this.batchFetchFunction(requests);
              batchedPromise
                .then(function(results) {
                  results.forEach(function(result, index) {
                    resolvers[index](result);
                  });
                })
                .catch(function(error) {
                  rejecters.forEach(function(rejecter, index) {
                    rejecters[index](error);
                  });
                });
              return promises;
            };
            QueryBatcher.prototype.scheduleQueueConsumption = function() {
              var _this = this;
              setTimeout(function() {
                if (_this.queuedRequests.length) {
                  _this.consumeQueue();
                }
              }, this.batchInterval);
            };
            return QueryBatcher;
          })();

          //# sourceMappingURL=batching.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/transport/networkInterface.js':
        /*!*********************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/transport/networkInterface.js ***!
  \*********************************************************************************************/
        /*! exports provided: printRequest, BaseNetworkInterface, HTTPFetchNetworkInterface, createNetworkInterface */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'printRequest',
            function() {
              return printRequest;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'BaseNetworkInterface',
            function() {
              return BaseNetworkInterface;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'HTTPFetchNetworkInterface',
            function() {
              return HTTPFetchNetworkInterface;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'createNetworkInterface',
            function() {
              return createNetworkInterface;
            }
          );
          /* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! whatwg-fetch */ '../node_modules/whatwg-fetch/fetch.js'
          );
          /* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! graphql/language/printer */ '../node_modules/react-apollo/node_modules/graphql/language/printer.js'
          );
          /* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            graphql_language_printer__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var _queries_queryTransform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ../queries/queryTransform */ '../node_modules/react-apollo/node_modules/apollo-client/queries/queryTransform.js'
          );
          var __extends =
            (undefined && undefined.__extends) ||
            (function() {
              var extendStatics =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                  function(d, b) {
                    d.__proto__ = b;
                  }) ||
                function(d, b) {
                  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
              return function(d, b) {
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype =
                  b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
              };
            })();
          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
              return t;
            };

          function printRequest(request) {
            return __assign({}, request, {
              query: Object(
                graphql_language_printer__WEBPACK_IMPORTED_MODULE_1__['print']
              )(request.query),
            });
          }
          var BaseNetworkInterface = (function() {
            function BaseNetworkInterface(uri, opts) {
              if (opts === void 0) {
                opts = {};
              }
              if (!uri) {
                throw new Error('A remote endpoint is required for a network layer');
              }
              if (typeof uri !== 'string') {
                throw new Error('Remote endpoint must be a string');
              }
              this._uri = uri;
              this._opts = __assign({}, opts);
              this._middlewares = [];
              this._afterwares = [];
            }
            BaseNetworkInterface.prototype.query = function(request) {
              return new Promise(function(resolve, reject) {
                reject(new Error('BaseNetworkInterface should not be used directly'));
              });
            };
            return BaseNetworkInterface;
          })();

          var HTTPFetchNetworkInterface = (function(_super) {
            __extends(HTTPFetchNetworkInterface, _super);
            function HTTPFetchNetworkInterface() {
              return (_super !== null && _super.apply(this, arguments)) || this;
            }
            HTTPFetchNetworkInterface.prototype.applyMiddlewares = function(
              requestAndOptions
            ) {
              var _this = this;
              return new Promise(function(resolve, reject) {
                var request = requestAndOptions.request,
                  options = requestAndOptions.options;
                var queue = function(funcs, scope) {
                  var next = function(err) {
                    if (err) {
                      reject(err);
                    } else if (funcs.length > 0) {
                      var f = funcs.shift();
                      if (f) {
                        f.applyMiddleware.apply(scope, [
                          {request: request, options: options},
                          next,
                        ]);
                      }
                    } else {
                      resolve({
                        request: request,
                        options: options,
                      });
                    }
                  };
                  next();
                };
                queue(_this._middlewares.slice(), _this);
              });
            };
            HTTPFetchNetworkInterface.prototype.applyAfterwares = function(_a) {
              var _this = this;
              var response = _a.response,
                options = _a.options;
              return new Promise(function(resolve, reject) {
                var responseObject = {response: response, options: options};
                var queue = function(funcs, scope) {
                  var next = function() {
                    if (funcs.length > 0) {
                      var f = funcs.shift();
                      if (f) {
                        f.applyAfterware.apply(scope, [responseObject, next]);
                      }
                    } else {
                      resolve(responseObject);
                    }
                  };
                  next();
                };
                queue(_this._afterwares.slice(), _this);
              });
            };
            HTTPFetchNetworkInterface.prototype.fetchFromRemoteEndpoint = function(_a) {
              var request = _a.request,
                options = _a.options;
              return fetch(
                this._uri,
                __assign(
                  {},
                  this._opts,
                  {body: JSON.stringify(printRequest(request)), method: 'POST'},
                  options,
                  {
                    headers: __assign(
                      {Accept: '*/*', 'Content-Type': 'application/json'},
                      options.headers
                    ),
                  }
                )
              );
            };
            HTTPFetchNetworkInterface.prototype.query = function(request) {
              var _this = this;
              var options = __assign({}, this._opts);
              return this.applyMiddlewares({
                request: request,
                options: options,
              })
                .then(function(rao) {
                  if (rao.request.query) {
                    rao.request.query = Object(
                      _queries_queryTransform__WEBPACK_IMPORTED_MODULE_2__[
                        'removeConnectionDirectiveFromDocument'
                      ]
                    )(rao.request.query);
                  }
                  return rao;
                })
                .then(function(rao) {
                  return _this.fetchFromRemoteEndpoint.call(_this, rao);
                })
                .then(function(response) {
                  return _this.applyAfterwares({
                    response: response,
                    options: options,
                  });
                })
                .then(function(_a) {
                  var response = _a.response;
                  var httpResponse = response;
                  return httpResponse.json().catch(function(error) {
                    var httpError = new Error(
                      'Network request failed with status ' +
                        response.status +
                        ' - "' +
                        response.statusText +
                        '"'
                    );
                    httpError.response = httpResponse;
                    httpError.parseError = error;
                    throw httpError;
                  });
                })
                .then(function(payload) {
                  if (
                    !payload.hasOwnProperty('data') &&
                    !payload.hasOwnProperty('errors')
                  ) {
                    throw new Error(
                      "Server response was missing for query '" + request.debugName + "'."
                    );
                  } else {
                    return payload;
                  }
                });
            };
            HTTPFetchNetworkInterface.prototype.use = function(middlewares) {
              var _this = this;
              middlewares.map(function(middleware) {
                if (typeof middleware.applyMiddleware === 'function') {
                  _this._middlewares.push(middleware);
                } else {
                  throw new Error(
                    'Middleware must implement the applyMiddleware function'
                  );
                }
              });
              return this;
            };
            HTTPFetchNetworkInterface.prototype.useAfter = function(afterwares) {
              var _this = this;
              afterwares.map(function(afterware) {
                if (typeof afterware.applyAfterware === 'function') {
                  _this._afterwares.push(afterware);
                } else {
                  throw new Error('Afterware must implement the applyAfterware function');
                }
              });
              return this;
            };
            return HTTPFetchNetworkInterface;
          })(BaseNetworkInterface);

          function createNetworkInterface(uriOrInterfaceOpts, secondArgOpts) {
            if (secondArgOpts === void 0) {
              secondArgOpts = {};
            }
            if (!uriOrInterfaceOpts) {
              throw new Error(
                'You must pass an options argument to createNetworkInterface.'
              );
            }
            var uri;
            var opts;
            if (typeof uriOrInterfaceOpts === 'string') {
              console.warn(
                'Passing the URI as the first argument to createNetworkInterface is deprecated as of Apollo Client 0.5. Please pass it as the "uri" property of the network interface options.'
              );
              opts = secondArgOpts.opts;
              uri = uriOrInterfaceOpts;
            } else {
              opts = uriOrInterfaceOpts.opts;
              uri = uriOrInterfaceOpts.uri;
            }
            return new HTTPFetchNetworkInterface(uri, opts);
          }
          //# sourceMappingURL=networkInterface.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/util/Observable.js':
        /*!**********************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/util/Observable.js ***!
  \**********************************************************************************/
        /*! exports provided: Observable */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'Observable',
            function() {
              return Observable;
            }
          );
          /* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! symbol-observable */ '../node_modules/symbol-observable/es/index.js'
          );

          function isSubscription(subscription) {
            return subscription.unsubscribe !== undefined;
          }
          var Observable = (function() {
            function Observable(subscriberFunction) {
              this.subscriberFunction = subscriberFunction;
            }
            Observable.prototype[
              symbol_observable__WEBPACK_IMPORTED_MODULE_0__['default']
            ] = function() {
              return this;
            };
            Observable.prototype.subscribe = function(observer) {
              var subscriptionOrCleanupFunction = this.subscriberFunction(observer);
              if (isSubscription(subscriptionOrCleanupFunction)) {
                return subscriptionOrCleanupFunction;
              } else {
                return {
                  unsubscribe: subscriptionOrCleanupFunction,
                };
              }
            };
            return Observable;
          })();

          //# sourceMappingURL=Observable.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/util/assign.js':
        /*!******************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/util/assign.js ***!
  \******************************************************************************/
        /*! exports provided: assign */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'assign',
            function() {
              return assign;
            }
          );
          function assign(target) {
            var sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
              sources[_i - 1] = arguments[_i];
            }
            sources.forEach(function(source) {
              if (typeof source === 'undefined' || source === null) {
                return;
              }
              Object.keys(source).forEach(function(key) {
                target[key] = source[key];
              });
            });
            return target;
          }
          //# sourceMappingURL=assign.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/util/cloneDeep.js':
        /*!*********************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/util/cloneDeep.js ***!
  \*********************************************************************************/
        /*! exports provided: cloneDeep */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'cloneDeep',
            function() {
              return cloneDeep;
            }
          );
          function cloneDeep(value) {
            if (Array.isArray(value)) {
              return value.map(function(item) {
                return cloneDeep(item);
              });
            }
            if (value !== null && typeof value === 'object') {
              var nextValue = {};
              for (var key in value) {
                if (value.hasOwnProperty(key)) {
                  nextValue[key] = cloneDeep(value[key]);
                }
              }
              return nextValue;
            }
            return value;
          }
          //# sourceMappingURL=cloneDeep.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/util/environment.js':
        /*!***********************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/util/environment.js ***!
  \***********************************************************************************/
        /*! exports provided: getEnv, isEnv, isProduction, isDevelopment, isTest */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* WEBPACK VAR INJECTION */ (function(process) {
            /* harmony export (binding) */ __webpack_require__.d(
              __webpack_exports__,
              'getEnv',
              function() {
                return getEnv;
              }
            );
            /* harmony export (binding) */ __webpack_require__.d(
              __webpack_exports__,
              'isEnv',
              function() {
                return isEnv;
              }
            );
            /* harmony export (binding) */ __webpack_require__.d(
              __webpack_exports__,
              'isProduction',
              function() {
                return isProduction;
              }
            );
            /* harmony export (binding) */ __webpack_require__.d(
              __webpack_exports__,
              'isDevelopment',
              function() {
                return isDevelopment;
              }
            );
            /* harmony export (binding) */ __webpack_require__.d(
              __webpack_exports__,
              'isTest',
              function() {
                return isTest;
              }
            );
            function getEnv() {
              if (typeof process !== 'undefined' && 'development') {
                return 'development';
              }
              return 'development';
            }
            function isEnv(env) {
              return getEnv() === env;
            }
            function isProduction() {
              return isEnv('production') === true;
            }
            function isDevelopment() {
              return isEnv('development') === true;
            }
            function isTest() {
              return isEnv('test') === true;
            }
            //# sourceMappingURL=environment.js.map
            /* WEBPACK VAR INJECTION */
          }.call(
            this,
            __webpack_require__(
              /*! ./../../../../process/browser.js */ '../node_modules/process/browser.js'
            )
          ));

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/util/errorHandling.js':
        /*!*************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/util/errorHandling.js ***!
  \*************************************************************************************/
        /*! exports provided: tryFunctionOrLogError */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'tryFunctionOrLogError',
            function() {
              return tryFunctionOrLogError;
            }
          );
          function tryFunctionOrLogError(f) {
            try {
              return f();
            } catch (e) {
              if (console.error) {
                console.error(e);
              }
            }
          }
          //# sourceMappingURL=errorHandling.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/util/isEqual.js':
        /*!*******************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/util/isEqual.js ***!
  \*******************************************************************************/
        /*! exports provided: isEqual */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isEqual',
            function() {
              return isEqual;
            }
          );
          function isEqual(a, b) {
            if (a === b) {
              return true;
            }
            if (a instanceof Date && b instanceof Date) {
              return a.getTime() === b.getTime();
            }
            if (
              a != null &&
              typeof a === 'object' &&
              b != null &&
              typeof b === 'object'
            ) {
              for (var key in a) {
                if (Object.prototype.hasOwnProperty.call(a, key)) {
                  if (!Object.prototype.hasOwnProperty.call(b, key)) {
                    return false;
                  }
                  if (!isEqual(a[key], b[key])) {
                    return false;
                  }
                }
              }
              for (var key in b) {
                if (!Object.prototype.hasOwnProperty.call(a, key)) {
                  return false;
                }
              }
              return true;
            }
            return false;
          }
          //# sourceMappingURL=isEqual.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/util/maybeDeepFreeze.js':
        /*!***************************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/util/maybeDeepFreeze.js ***!
  \***************************************************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function() {
              return maybeDeepFreeze;
            }
          );
          /* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./environment */ '../node_modules/react-apollo/node_modules/apollo-client/util/environment.js'
          );

          function deepFreeze(o) {
            Object.freeze(o);
            Object.getOwnPropertyNames(o).forEach(function(prop) {
              if (
                o.hasOwnProperty(prop) &&
                o[prop] !== null &&
                (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
                !Object.isFrozen(o[prop])
              ) {
                deepFreeze(o[prop]);
              }
            });
            return o;
          }
          function maybeDeepFreeze(obj) {
            if (
              Object(_environment__WEBPACK_IMPORTED_MODULE_0__['isDevelopment'])() ||
              Object(_environment__WEBPACK_IMPORTED_MODULE_0__['isTest'])()
            ) {
              return deepFreeze(obj);
            }
            return obj;
          }
          //# sourceMappingURL=maybeDeepFreeze.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/util/warnOnce.js':
        /*!********************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/util/warnOnce.js ***!
  \********************************************************************************/
        /*! exports provided: warnOnceInDevelopment */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'warnOnceInDevelopment',
            function() {
              return warnOnceInDevelopment;
            }
          );
          /* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./environment */ '../node_modules/react-apollo/node_modules/apollo-client/util/environment.js'
          );

          var haveWarned = Object.create({});
          function warnOnceInDevelopment(msg, type) {
            if (type === void 0) {
              type = 'warn';
            }
            if (Object(_environment__WEBPACK_IMPORTED_MODULE_0__['isProduction'])()) {
              return;
            }
            if (!haveWarned[msg]) {
              if (!Object(_environment__WEBPACK_IMPORTED_MODULE_0__['isTest'])()) {
                haveWarned[msg] = true;
              }
              switch (type) {
                case 'error':
                  console.error(msg);
                  break;
                default:
                  console.warn(msg);
              }
            }
          }
          //# sourceMappingURL=warnOnce.js.map

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/apollo-client/version.js':
        /*!**************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/apollo-client/version.js ***!
  \**************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          exports.version = '1.9.3';

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/graphql/language/printer.js':
        /*!*****************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/graphql/language/printer.js ***!
  \*****************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.print = print;

          var _visitor = __webpack_require__(
            /*! ./visitor */ '../node_modules/react-apollo/node_modules/graphql/language/visitor.js'
          );

          /**
           * Converts an AST into a string, using one set of reasonable
           * formatting rules.
           */
          function print(ast) {
            return (0, _visitor.visit)(ast, {leave: printDocASTReducer});
          } /**
           *  Copyright (c) 2015, Facebook, Inc.
           *  All rights reserved.
           *
           *  This source code is licensed under the BSD-style license found in the
           *  LICENSE file in the root directory of this source tree. An additional grant
           *  of patent rights can be found in the PATENTS file in the same directory.
           */

          var printDocASTReducer = {
            Name: function Name(node) {
              return node.value;
            },
            Variable: function Variable(node) {
              return '$' + node.name;
            },

            // Document

            Document: function Document(node) {
              return join(node.definitions, '\n\n') + '\n';
            },

            OperationDefinition: function OperationDefinition(node) {
              var op = node.operation;
              var name = node.name;
              var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
              var directives = join(node.directives, ' ');
              var selectionSet = node.selectionSet;
              // Anonymous queries with no directives or variable definitions can use
              // the query short form.
              return !name && !directives && !varDefs && op === 'query'
                ? selectionSet
                : join([op, join([name, varDefs]), directives, selectionSet], ' ');
            },

            VariableDefinition: function VariableDefinition(_ref) {
              var variable = _ref.variable,
                type = _ref.type,
                defaultValue = _ref.defaultValue;
              return variable + ': ' + type + wrap(' = ', defaultValue);
            },

            SelectionSet: function SelectionSet(_ref2) {
              var selections = _ref2.selections;
              return block(selections);
            },

            Field: function Field(_ref3) {
              var alias = _ref3.alias,
                name = _ref3.name,
                args = _ref3.arguments,
                directives = _ref3.directives,
                selectionSet = _ref3.selectionSet;
              return join(
                [
                  wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'),
                  join(directives, ' '),
                  selectionSet,
                ],
                ' '
              );
            },

            Argument: function Argument(_ref4) {
              var name = _ref4.name,
                value = _ref4.value;
              return name + ': ' + value;
            },

            // Fragments

            FragmentSpread: function FragmentSpread(_ref5) {
              var name = _ref5.name,
                directives = _ref5.directives;
              return '...' + name + wrap(' ', join(directives, ' '));
            },

            InlineFragment: function InlineFragment(_ref6) {
              var typeCondition = _ref6.typeCondition,
                directives = _ref6.directives,
                selectionSet = _ref6.selectionSet;
              return join(
                ['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet],
                ' '
              );
            },

            FragmentDefinition: function FragmentDefinition(_ref7) {
              var name = _ref7.name,
                typeCondition = _ref7.typeCondition,
                directives = _ref7.directives,
                selectionSet = _ref7.selectionSet;
              return (
                'fragment ' +
                name +
                ' on ' +
                typeCondition +
                ' ' +
                wrap('', join(directives, ' '), ' ') +
                selectionSet
              );
            },

            // Value

            IntValue: function IntValue(_ref8) {
              var value = _ref8.value;
              return value;
            },
            FloatValue: function FloatValue(_ref9) {
              var value = _ref9.value;
              return value;
            },
            StringValue: function StringValue(_ref10) {
              var value = _ref10.value;
              return JSON.stringify(value);
            },
            BooleanValue: function BooleanValue(_ref11) {
              var value = _ref11.value;
              return JSON.stringify(value);
            },
            NullValue: function NullValue() {
              return 'null';
            },
            EnumValue: function EnumValue(_ref12) {
              var value = _ref12.value;
              return value;
            },
            ListValue: function ListValue(_ref13) {
              var values = _ref13.values;
              return '[' + join(values, ', ') + ']';
            },
            ObjectValue: function ObjectValue(_ref14) {
              var fields = _ref14.fields;
              return '{' + join(fields, ', ') + '}';
            },
            ObjectField: function ObjectField(_ref15) {
              var name = _ref15.name,
                value = _ref15.value;
              return name + ': ' + value;
            },

            // Directive

            Directive: function Directive(_ref16) {
              var name = _ref16.name,
                args = _ref16.arguments;
              return '@' + name + wrap('(', join(args, ', '), ')');
            },

            // Type

            NamedType: function NamedType(_ref17) {
              var name = _ref17.name;
              return name;
            },
            ListType: function ListType(_ref18) {
              var type = _ref18.type;
              return '[' + type + ']';
            },
            NonNullType: function NonNullType(_ref19) {
              var type = _ref19.type;
              return type + '!';
            },

            // Type System Definitions

            SchemaDefinition: function SchemaDefinition(_ref20) {
              var directives = _ref20.directives,
                operationTypes = _ref20.operationTypes;
              return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
            },

            OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
              var operation = _ref21.operation,
                type = _ref21.type;
              return operation + ': ' + type;
            },

            ScalarTypeDefinition: function ScalarTypeDefinition(_ref22) {
              var name = _ref22.name,
                directives = _ref22.directives;
              return join(['scalar', name, join(directives, ' ')], ' ');
            },

            ObjectTypeDefinition: function ObjectTypeDefinition(_ref23) {
              var name = _ref23.name,
                interfaces = _ref23.interfaces,
                directives = _ref23.directives,
                fields = _ref23.fields;
              return join(
                [
                  'type',
                  name,
                  wrap('implements ', join(interfaces, ', ')),
                  join(directives, ' '),
                  block(fields),
                ],
                ' '
              );
            },

            FieldDefinition: function FieldDefinition(_ref24) {
              var name = _ref24.name,
                args = _ref24.arguments,
                type = _ref24.type,
                directives = _ref24.directives;
              return (
                name +
                wrap('(', join(args, ', '), ')') +
                ': ' +
                type +
                wrap(' ', join(directives, ' '))
              );
            },

            InputValueDefinition: function InputValueDefinition(_ref25) {
              var name = _ref25.name,
                type = _ref25.type,
                defaultValue = _ref25.defaultValue,
                directives = _ref25.directives;
              return join(
                [name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')],
                ' '
              );
            },

            InterfaceTypeDefinition: function InterfaceTypeDefinition(_ref26) {
              var name = _ref26.name,
                directives = _ref26.directives,
                fields = _ref26.fields;
              return join(['interface', name, join(directives, ' '), block(fields)], ' ');
            },

            UnionTypeDefinition: function UnionTypeDefinition(_ref27) {
              var name = _ref27.name,
                directives = _ref27.directives,
                types = _ref27.types;
              return join(
                ['union', name, join(directives, ' '), '= ' + join(types, ' | ')],
                ' '
              );
            },

            EnumTypeDefinition: function EnumTypeDefinition(_ref28) {
              var name = _ref28.name,
                directives = _ref28.directives,
                values = _ref28.values;
              return join(['enum', name, join(directives, ' '), block(values)], ' ');
            },

            EnumValueDefinition: function EnumValueDefinition(_ref29) {
              var name = _ref29.name,
                directives = _ref29.directives;
              return join([name, join(directives, ' ')], ' ');
            },

            InputObjectTypeDefinition: function InputObjectTypeDefinition(_ref30) {
              var name = _ref30.name,
                directives = _ref30.directives,
                fields = _ref30.fields;
              return join(['input', name, join(directives, ' '), block(fields)], ' ');
            },

            TypeExtensionDefinition: function TypeExtensionDefinition(_ref31) {
              var definition = _ref31.definition;
              return 'extend ' + definition;
            },

            DirectiveDefinition: function DirectiveDefinition(_ref32) {
              var name = _ref32.name,
                args = _ref32.arguments,
                locations = _ref32.locations;
              return (
                'directive @' +
                name +
                wrap('(', join(args, ', '), ')') +
                ' on ' +
                join(locations, ' | ')
              );
            },
          };

          /**
           * Given maybeArray, print an empty string if it is null or empty, otherwise
           * print all items together separated by separator if provided
           */
          function join(maybeArray, separator) {
            return maybeArray
              ? maybeArray
                  .filter(function(x) {
                    return x;
                  })
                  .join(separator || '')
              : '';
          }

          /**
           * Given array, print each item on its own line, wrapped in an
           * indented "{ }" block.
           */
          function block(array) {
            return array && array.length !== 0
              ? indent('{\n' + join(array, '\n')) + '\n}'
              : '{}';
          }

          /**
           * If maybeString is not null or empty, then wrap with start and end, otherwise
           * print an empty string.
           */
          function wrap(start, maybeString, end) {
            return maybeString ? start + maybeString + (end || '') : '';
          }

          function indent(maybeString) {
            return maybeString && maybeString.replace(/\n/g, '\n  ');
          }

          /***/
        },

      /***/ '../node_modules/react-apollo/node_modules/graphql/language/visitor.js':
        /*!*****************************************************************************!*\
  !*** ../node_modules/react-apollo/node_modules/graphql/language/visitor.js ***!
  \*****************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {
            value: true,
          });
          exports.visit = visit;
          exports.visitInParallel = visitInParallel;
          exports.visitWithTypeInfo = visitWithTypeInfo;
          exports.getVisitFn = getVisitFn;
          /**
           *  Copyright (c) 2015, Facebook, Inc.
           *  All rights reserved.
           *
           *  This source code is licensed under the BSD-style license found in the
           *  LICENSE file in the root directory of this source tree. An additional grant
           *  of patent rights can be found in the PATENTS file in the same directory.
           */

          var QueryDocumentKeys = (exports.QueryDocumentKeys = {
            Name: [],

            Document: ['definitions'],
            OperationDefinition: [
              'name',
              'variableDefinitions',
              'directives',
              'selectionSet',
            ],
            VariableDefinition: ['variable', 'type', 'defaultValue'],
            Variable: ['name'],
            SelectionSet: ['selections'],
            Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
            Argument: ['name', 'value'],

            FragmentSpread: ['name', 'directives'],
            InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
            FragmentDefinition: ['name', 'typeCondition', 'directives', 'selectionSet'],

            IntValue: [],
            FloatValue: [],
            StringValue: [],
            BooleanValue: [],
            NullValue: [],
            EnumValue: [],
            ListValue: ['values'],
            ObjectValue: ['fields'],
            ObjectField: ['name', 'value'],

            Directive: ['name', 'arguments'],

            NamedType: ['name'],
            ListType: ['type'],
            NonNullType: ['type'],

            SchemaDefinition: ['directives', 'operationTypes'],
            OperationTypeDefinition: ['type'],

            ScalarTypeDefinition: ['name', 'directives'],
            ObjectTypeDefinition: ['name', 'interfaces', 'directives', 'fields'],
            FieldDefinition: ['name', 'arguments', 'type', 'directives'],
            InputValueDefinition: ['name', 'type', 'defaultValue', 'directives'],
            InterfaceTypeDefinition: ['name', 'directives', 'fields'],
            UnionTypeDefinition: ['name', 'directives', 'types'],
            EnumTypeDefinition: ['name', 'directives', 'values'],
            EnumValueDefinition: ['name', 'directives'],
            InputObjectTypeDefinition: ['name', 'directives', 'fields'],

            TypeExtensionDefinition: ['definition'],

            DirectiveDefinition: ['name', 'arguments', 'locations'],
          });

          var BREAK = (exports.BREAK = {});

          /**
           * visit() will walk through an AST using a depth first traversal, calling
           * the visitor's enter function at each node in the traversal, and calling the
           * leave function after visiting that node and all of its child nodes.
           *
           * By returning different values from the enter and leave functions, the
           * behavior of the visitor can be altered, including skipping over a sub-tree of
           * the AST (by returning false), editing the AST by returning a value or null
           * to remove the value, or to stop the whole traversal by returning BREAK.
           *
           * When using visit() to edit an AST, the original AST will not be modified, and
           * a new version of the AST with the changes applied will be returned from the
           * visit function.
           *
           *     const editedAST = visit(ast, {
           *       enter(node, key, parent, path, ancestors) {
           *         // @return
           *         //   undefined: no action
           *         //   false: skip visiting this node
           *         //   visitor.BREAK: stop visiting altogether
           *         //   null: delete this node
           *         //   any value: replace this node with the returned value
           *       },
           *       leave(node, key, parent, path, ancestors) {
           *         // @return
           *         //   undefined: no action
           *         //   false: no action
           *         //   visitor.BREAK: stop visiting altogether
           *         //   null: delete this node
           *         //   any value: replace this node with the returned value
           *       }
           *     });
           *
           * Alternatively to providing enter() and leave() functions, a visitor can
           * instead provide functions named the same as the kinds of AST nodes, or
           * enter/leave visitors at a named key, leading to four permutations of
           * visitor API:
           *
           * 1) Named visitors triggered when entering a node a specific kind.
           *
           *     visit(ast, {
           *       Kind(node) {
           *         // enter the "Kind" node
           *       }
           *     })
           *
           * 2) Named visitors that trigger upon entering and leaving a node of
           *    a specific kind.
           *
           *     visit(ast, {
           *       Kind: {
           *         enter(node) {
           *           // enter the "Kind" node
           *         }
           *         leave(node) {
           *           // leave the "Kind" node
           *         }
           *       }
           *     })
           *
           * 3) Generic visitors that trigger upon entering and leaving any node.
           *
           *     visit(ast, {
           *       enter(node) {
           *         // enter any node
           *       },
           *       leave(node) {
           *         // leave any node
           *       }
           *     })
           *
           * 4) Parallel visitors for entering and leaving nodes of a specific kind.
           *
           *     visit(ast, {
           *       enter: {
           *         Kind(node) {
           *           // enter the "Kind" node
           *         }
           *       },
           *       leave: {
           *         Kind(node) {
           *           // leave the "Kind" node
           *         }
           *       }
           *     })
           */
          function visit(root, visitor, keyMap) {
            var visitorKeys = keyMap || QueryDocumentKeys;

            var stack = void 0;
            var inArray = Array.isArray(root);
            var keys = [root];
            var index = -1;
            var edits = [];
            var parent = void 0;
            var path = [];
            var ancestors = [];
            var newRoot = root;

            do {
              index++;
              var isLeaving = index === keys.length;
              var key = void 0;
              var node = void 0;
              var isEdited = isLeaving && edits.length !== 0;
              if (isLeaving) {
                key = ancestors.length === 0 ? undefined : path.pop();
                node = parent;
                parent = ancestors.pop();
                if (isEdited) {
                  if (inArray) {
                    node = node.slice();
                  } else {
                    var clone = {};
                    for (var k in node) {
                      if (node.hasOwnProperty(k)) {
                        clone[k] = node[k];
                      }
                    }
                    node = clone;
                  }
                  var editOffset = 0;
                  for (var ii = 0; ii < edits.length; ii++) {
                    var editKey = edits[ii][0];
                    var editValue = edits[ii][1];
                    if (inArray) {
                      editKey -= editOffset;
                    }
                    if (inArray && editValue === null) {
                      node.splice(editKey, 1);
                      editOffset++;
                    } else {
                      node[editKey] = editValue;
                    }
                  }
                }
                index = stack.index;
                keys = stack.keys;
                edits = stack.edits;
                inArray = stack.inArray;
                stack = stack.prev;
              } else {
                key = parent ? (inArray ? index : keys[index]) : undefined;
                node = parent ? parent[key] : newRoot;
                if (node === null || node === undefined) {
                  continue;
                }
                if (parent) {
                  path.push(key);
                }
              }

              var result = void 0;
              if (!Array.isArray(node)) {
                if (!isNode(node)) {
                  throw new Error('Invalid AST Node: ' + JSON.stringify(node));
                }
                var visitFn = getVisitFn(visitor, node.kind, isLeaving);
                if (visitFn) {
                  result = visitFn.call(visitor, node, key, parent, path, ancestors);

                  if (result === BREAK) {
                    break;
                  }

                  if (result === false) {
                    if (!isLeaving) {
                      path.pop();
                      continue;
                    }
                  } else if (result !== undefined) {
                    edits.push([key, result]);
                    if (!isLeaving) {
                      if (isNode(result)) {
                        node = result;
                      } else {
                        path.pop();
                        continue;
                      }
                    }
                  }
                }
              }

              if (result === undefined && isEdited) {
                edits.push([key, node]);
              }

              if (!isLeaving) {
                stack = {
                  inArray: inArray,
                  index: index,
                  keys: keys,
                  edits: edits,
                  prev: stack,
                };
                inArray = Array.isArray(node);
                keys = inArray ? node : visitorKeys[node.kind] || [];
                index = -1;
                edits = [];
                if (parent) {
                  ancestors.push(parent);
                }
                parent = node;
              }
            } while (stack !== undefined);

            if (edits.length !== 0) {
              newRoot = edits[edits.length - 1][1];
            }

            return newRoot;
          }

          function isNode(maybeNode) {
            return maybeNode && typeof maybeNode.kind === 'string';
          }

          /**
           * Creates a new visitor instance which delegates to many visitors to run in
           * parallel. Each visitor will be visited for each node before moving on.
           *
           * If a prior visitor edits a node, no following visitors will see that node.
           */
          function visitInParallel(visitors) {
            var skipping = new Array(visitors.length);

            return {
              enter: function enter(node) {
                for (var i = 0; i < visitors.length; i++) {
                  if (!skipping[i]) {
                    var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */ false);
                    if (fn) {
                      var result = fn.apply(visitors[i], arguments);
                      if (result === false) {
                        skipping[i] = node;
                      } else if (result === BREAK) {
                        skipping[i] = BREAK;
                      } else if (result !== undefined) {
                        return result;
                      }
                    }
                  }
                }
              },
              leave: function leave(node) {
                for (var i = 0; i < visitors.length; i++) {
                  if (!skipping[i]) {
                    var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */ true);
                    if (fn) {
                      var result = fn.apply(visitors[i], arguments);
                      if (result === BREAK) {
                        skipping[i] = BREAK;
                      } else if (result !== undefined && result !== false) {
                        return result;
                      }
                    }
                  } else if (skipping[i] === node) {
                    skipping[i] = null;
                  }
                }
              },
            };
          }

          /**
           * Creates a new visitor instance which maintains a provided TypeInfo instance
           * along with visiting visitor.
           */
          function visitWithTypeInfo(typeInfo, visitor) {
            return {
              enter: function enter(node) {
                typeInfo.enter(node);
                var fn = getVisitFn(visitor, node.kind, /* isLeaving */ false);
                if (fn) {
                  var result = fn.apply(visitor, arguments);
                  if (result !== undefined) {
                    typeInfo.leave(node);
                    if (isNode(result)) {
                      typeInfo.enter(result);
                    }
                  }
                  return result;
                }
              },
              leave: function leave(node) {
                var fn = getVisitFn(visitor, node.kind, /* isLeaving */ true);
                var result = void 0;
                if (fn) {
                  result = fn.apply(visitor, arguments);
                }
                typeInfo.leave(node);
                return result;
              },
            };
          }

          /**
           * Given a visitor instance, if it is leaving or not, and a node kind, return
           * the function the visitor runtime should call.
           */
          function getVisitFn(visitor, kind, isLeaving) {
            var kindVisitor = visitor[kind];
            if (kindVisitor) {
              if (!isLeaving && typeof kindVisitor === 'function') {
                // { Kind() {} }
                return kindVisitor;
              }
              var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
              if (typeof kindSpecificVisitor === 'function') {
                // { Kind: { enter() {}, leave() {} } }
                return kindSpecificVisitor;
              }
            } else {
              var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
              if (specificVisitor) {
                if (typeof specificVisitor === 'function') {
                  // { enter() {}, leave() {} }
                  return specificVisitor;
                }
                var specificKindVisitor = specificVisitor[kind];
                if (typeof specificKindVisitor === 'function') {
                  // { enter: { Kind() {} }, leave: { Kind() {} } }
                  return specificKindVisitor;
                }
              }
            }
          }

          /***/
        },

      /***/ '../node_modules/react-apollo/react-apollo.browser.umd.js':
        /*!****************************************************************!*\
  !*** ../node_modules/react-apollo/react-apollo.browser.umd.js ***!
  \****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          (function(global, factory) {
            true
              ? factory(
                  exports,
                  __webpack_require__(/*! react */ 'react'),
                  __webpack_require__(
                    /*! prop-types */ '../node_modules/prop-types/index.js'
                  ),
                  __webpack_require__(/*! redux */ '../node_modules/redux/es/index.js'),
                  __webpack_require__(
                    /*! apollo-client */ '../node_modules/react-apollo/node_modules/apollo-client/index.js'
                  ),
                  __webpack_require__(
                    /*! graphql-tag */ '../node_modules/graphql-tag/src/index.js'
                  )
                )
              : undefined;
          })(this, function(exports, React, PropTypes, redux, apolloClient, graphqlTag) {
            'use strict';

            graphqlTag =
              graphqlTag && graphqlTag.hasOwnProperty('default')
                ? graphqlTag['default']
                : graphqlTag;

            var __assign =
              (undefined && undefined.__assign) ||
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            var __rest =
              (undefined && undefined.__rest) ||
              function(s, e) {
                var t = {};
                for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                    t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === 'function')
                  for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
                    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
                return t;
              };
            var ObservableQueryRecycler = (function() {
              function ObservableQueryRecycler() {
                this.observableQueries = [];
              }
              ObservableQueryRecycler.prototype.recycle = function(observableQuery) {
                observableQuery.setOptions({
                  fetchPolicy: 'standby',
                  pollInterval: 0,
                  fetchResults: false,
                });
                this.observableQueries.push({
                  observableQuery: observableQuery,
                  subscription: observableQuery.subscribe({}),
                });
              };
              ObservableQueryRecycler.prototype.reuse = function(options) {
                if (this.observableQueries.length <= 0) {
                  return null;
                }
                var _a = this.observableQueries.pop(),
                  observableQuery = _a.observableQuery,
                  subscription = _a.subscription;
                subscription.unsubscribe();
                var ssr = options.ssr,
                  skip = options.skip,
                  client = options.client,
                  modifiableOpts = __rest(options, ['ssr', 'skip', 'client']);
                observableQuery.setOptions(
                  __assign({}, modifiableOpts, {
                    pollInterval: options.pollInterval,
                    fetchPolicy: options.fetchPolicy,
                  })
                );
                return observableQuery;
              };
              return ObservableQueryRecycler;
            })();

            var __extends$1 =
              (undefined && undefined.__extends) ||
              (function() {
                var extendStatics =
                  Object.setPrototypeOf ||
                  ({__proto__: []} instanceof Array &&
                    function(d, b) {
                      d.__proto__ = b;
                    }) ||
                  function(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                  };
                return function(d, b) {
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype =
                    b === null
                      ? Object.create(b)
                      : ((__.prototype = b.prototype), new __());
                };
              })();
            var QueryRecyclerProvider = (function(_super) {
              __extends$1(QueryRecyclerProvider, _super);
              function QueryRecyclerProvider(props) {
                var _this = _super.call(this, props) || this;
                _this.recyclers = new WeakMap();
                _this.getQueryRecycler = _this.getQueryRecycler.bind(_this);
                return _this;
              }
              QueryRecyclerProvider.prototype.componentWillReceiveProps = function(
                nextProps,
                nextContext
              ) {
                if (this.context.client !== nextContext.client) {
                  this.recyclers = new WeakMap();
                }
              };
              QueryRecyclerProvider.prototype.getQueryRecycler = function(component) {
                if (!this.recyclers.has(component)) {
                  this.recyclers.set(component, new ObservableQueryRecycler());
                }
                return this.recyclers.get(component);
              };
              QueryRecyclerProvider.prototype.getChildContext = function() {
                return {
                  getQueryRecycler: this.getQueryRecycler,
                };
              };
              QueryRecyclerProvider.prototype.render = function() {
                return React.Children.only(this.props.children);
              };
              QueryRecyclerProvider.propTypes = {
                children: PropTypes.element.isRequired,
              };
              QueryRecyclerProvider.contextTypes = {
                client: PropTypes.object,
              };
              QueryRecyclerProvider.childContextTypes = {
                getQueryRecycler: PropTypes.func.isRequired,
              };
              return QueryRecyclerProvider;
            })(React.Component);

            var __extends =
              (undefined && undefined.__extends) ||
              (function() {
                var extendStatics =
                  Object.setPrototypeOf ||
                  ({__proto__: []} instanceof Array &&
                    function(d, b) {
                      d.__proto__ = b;
                    }) ||
                  function(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                  };
                return function(d, b) {
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype =
                    b === null
                      ? Object.create(b)
                      : ((__.prototype = b.prototype), new __());
                };
              })();
            var invariant = __webpack_require__(
              /*! invariant */ '../node_modules/invariant/browser.js'
            );
            var ApolloProvider = (function(_super) {
              __extends(ApolloProvider, _super);
              function ApolloProvider(props, context) {
                var _this = _super.call(this, props, context) || this;
                invariant(
                  props.client,
                  'ApolloClient was not passed a client instance. Make ' +
                    'sure you pass in your client via the "client" prop.'
                );
                if (!props.store && typeof props.client.initStore === 'function') {
                  props.client.initStore();
                }
                return _this;
              }
              ApolloProvider.prototype.componentWillReceiveProps = function(nextProps) {
                if (
                  nextProps.client !== this.props.client &&
                  !nextProps.store &&
                  typeof nextProps.client.initStore === 'function'
                ) {
                  nextProps.client.initStore();
                }
              };
              ApolloProvider.prototype.getChildContext = function() {
                return {
                  store: this.props.store || this.context.store,
                  client: this.props.client,
                };
              };
              ApolloProvider.prototype.render = function() {
                return React.createElement(
                  QueryRecyclerProvider,
                  null,
                  React.Children.only(this.props.children)
                );
              };
              ApolloProvider.propTypes = {
                store: PropTypes.shape({
                  subscribe: PropTypes.func.isRequired,
                  dispatch: PropTypes.func.isRequired,
                  getState: PropTypes.func.isRequired,
                }),
                client: PropTypes.object.isRequired,
                children: PropTypes.element.isRequired,
              };
              ApolloProvider.childContextTypes = {
                store: PropTypes.object,
                client: PropTypes.object.isRequired,
              };
              ApolloProvider.contextTypes = {
                store: PropTypes.object,
              };
              return ApolloProvider;
            })(React.Component);

            function shallowEqual(objA, objB) {
              if (!objA || !objB) return false;
              if (objA === objB) return true;
              var keysA = Object.keys(objA);
              var keysB = Object.keys(objB);
              if (keysA.length !== keysB.length) return false;
              var hasOwn = Object.prototype.hasOwnProperty;
              for (var i = 0; i < keysA.length; i++) {
                if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
                  return false;
                }
              }
              return true;
            }

            var invariant$2 = __webpack_require__(
              /*! invariant */ '../node_modules/invariant/browser.js'
            );
            var DocumentType;
            (function(DocumentType) {
              DocumentType[(DocumentType['Query'] = 0)] = 'Query';
              DocumentType[(DocumentType['Mutation'] = 1)] = 'Mutation';
              DocumentType[(DocumentType['Subscription'] = 2)] = 'Subscription';
            })(DocumentType || (DocumentType = {}));
            function parser(document) {
              var variables, type, name;
              invariant$2(
                !!document && !!document.kind,
                'Argument of ' +
                  document +
                  " passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"
              );
              var fragments = document.definitions.filter(function(x) {
                return x.kind === 'FragmentDefinition';
              });
              var queries = document.definitions.filter(function(x) {
                return x.kind === 'OperationDefinition' && x.operation === 'query';
              });
              var mutations = document.definitions.filter(function(x) {
                return x.kind === 'OperationDefinition' && x.operation === 'mutation';
              });
              var subscriptions = document.definitions.filter(function(x) {
                return x.kind === 'OperationDefinition' && x.operation === 'subscription';
              });
              invariant$2(
                !fragments.length ||
                  (queries.length || mutations.length || subscriptions.length),
                "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"
              );
              invariant$2(
                queries.length + mutations.length + subscriptions.length <= 1,
                'react-apollo only supports a query, subscription, or a mutation per HOC. ' +
                  document +
                  ' had ' +
                  queries.length +
                  ' queries, ' +
                  subscriptions.length +
                  ' subscriptions and ' +
                  mutations.length +
                  " mutations. You can use 'compose' to join multiple operation types to a component"
              );
              type = queries.length ? DocumentType.Query : DocumentType.Mutation;
              if (!queries.length && !mutations.length) type = DocumentType.Subscription;
              var definitions = queries.length
                ? queries
                : mutations.length ? mutations : subscriptions;
              invariant$2(
                definitions.length === 1,
                'react-apollo only supports one defintion per HOC. ' +
                  document +
                  ' had ' +
                  definitions.length +
                  " definitions. You can use 'compose' to join multiple operation types to a component"
              );
              var definition = definitions[0];
              variables = definition.variableDefinitions || [];
              var hasName = definition.name && definition.name.kind === 'Name';
              name = hasName ? definition.name.value : 'data';
              return {name: name, type: type, variables: variables};
            }

            var __extends$2 =
              (undefined && undefined.__extends) ||
              (function() {
                var extendStatics =
                  Object.setPrototypeOf ||
                  ({__proto__: []} instanceof Array &&
                    function(d, b) {
                      d.__proto__ = b;
                    }) ||
                  function(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                  };
                return function(d, b) {
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype =
                    b === null
                      ? Object.create(b)
                      : ((__.prototype = b.prototype), new __());
                };
              })();
            var __assign$1 =
              (undefined && undefined.__assign) ||
              Object.assign ||
              function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                  s = arguments[i];
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
              };
            var pick = __webpack_require__(
              /*! lodash.pick */ '../node_modules/lodash.pick/index.js'
            );
            var invariant$1 = __webpack_require__(
              /*! invariant */ '../node_modules/invariant/browser.js'
            );
            var assign = __webpack_require__(
              /*! object-assign */ '../node_modules/object-assign/index.js'
            );
            var hoistNonReactStatics = __webpack_require__(
              /*! hoist-non-react-statics */ '../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'
            );
            var defaultMapPropsToOptions = function(props) {
              return {};
            };
            var defaultMapResultToProps = function(props) {
              return props;
            };
            var defaultMapPropsToSkip = function(props) {
              return false;
            };
            function observableQueryFields(observable) {
              var fields = pick(
                observable,
                'variables',
                'refetch',
                'fetchMore',
                'updateQuery',
                'startPolling',
                'stopPolling',
                'subscribeToMore'
              );
              Object.keys(fields).forEach(function(key) {
                if (typeof fields[key] === 'function') {
                  fields[key] = fields[key].bind(observable);
                }
              });
              return fields;
            }
            function getDisplayName(WrappedComponent) {
              return WrappedComponent.displayName || WrappedComponent.name || 'Component';
            }
            var nextVersion = 0;
            function graphql(document, operationOptions) {
              if (operationOptions === void 0) {
                operationOptions = {};
              }
              var _a = operationOptions.options,
                options = _a === void 0 ? defaultMapPropsToOptions : _a,
                _b = operationOptions.skip,
                skip = _b === void 0 ? defaultMapPropsToSkip : _b,
                _c = operationOptions.alias,
                alias = _c === void 0 ? 'Apollo' : _c;
              var mapPropsToOptions = options;
              if (typeof mapPropsToOptions !== 'function')
                mapPropsToOptions = function() {
                  return options;
                };
              var mapPropsToSkip = skip;
              if (typeof mapPropsToSkip !== 'function')
                mapPropsToSkip = function() {
                  return skip;
                };
              var mapResultToProps = operationOptions.props;
              var operation = parser(document);
              var version = nextVersion++;
              function wrapWithApolloComponent(WrappedComponent) {
                var graphQLDisplayName =
                  alias + '(' + getDisplayName(WrappedComponent) + ')';
                var GraphQL = (function(_super) {
                  __extends$2(GraphQL, _super);
                  function GraphQL(props, context) {
                    var _this = _super.call(this, props, context) || this;
                    _this.previousData = {};
                    _this.version = version;
                    _this.type = operation.type;
                    _this.dataForChildViaMutation = _this.dataForChildViaMutation.bind(
                      _this
                    );
                    _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
                    return _this;
                  }
                  GraphQL.prototype.componentWillMount = function() {
                    if (!this.shouldSkip(this.props)) {
                      this.setInitialProps();
                    }
                  };
                  GraphQL.prototype.componentDidMount = function() {
                    this.hasMounted = true;
                    if (this.type === DocumentType.Mutation) return;
                    if (!this.shouldSkip(this.props)) {
                      this.subscribeToQuery();
                      if (this.refetcherQueue) {
                        var _a = this.refetcherQueue,
                          args = _a.args,
                          resolve = _a.resolve,
                          reject = _a.reject;
                        this.queryObservable
                          .refetch(args)
                          .then(resolve)
                          .catch(reject);
                      }
                    }
                  };
                  GraphQL.prototype.componentWillReceiveProps = function(
                    nextProps,
                    nextContext
                  ) {
                    var client = mapPropsToOptions(nextProps).client;
                    if (
                      shallowEqual(this.props, nextProps) &&
                      (this.client === client || this.client === nextContext.client)
                    ) {
                      return;
                    }
                    this.shouldRerender = true;
                    if (this.client !== client && this.client !== nextContext.client) {
                      if (client) {
                        this.client = client;
                      } else {
                        this.client = nextContext.client;
                      }
                      this.unsubscribeFromQuery();
                      this.queryObservable = null;
                      this.previousData = {};
                      this.updateQuery(nextProps);
                      if (!this.shouldSkip(nextProps)) {
                        this.subscribeToQuery();
                      }
                      return;
                    }
                    if (this.type === DocumentType.Mutation) {
                      return;
                    }
                    if (
                      this.type === DocumentType.Subscription &&
                      operationOptions.shouldResubscribe &&
                      operationOptions.shouldResubscribe(this.props, nextProps)
                    ) {
                      this.unsubscribeFromQuery();
                      delete this.queryObservable;
                      this.updateQuery(nextProps);
                      this.subscribeToQuery();
                      return;
                    }
                    if (this.shouldSkip(nextProps)) {
                      if (!this.shouldSkip(this.props)) {
                        this.unsubscribeFromQuery();
                      }
                      return;
                    }
                    this.updateQuery(nextProps);
                    this.subscribeToQuery();
                  };
                  GraphQL.prototype.componentWillUnmount = function() {
                    if (this.type === DocumentType.Query) {
                      if (this.queryObservable) {
                        var recycler = this.getQueryRecycler();
                        if (recycler) {
                          recycler.recycle(this.queryObservable);
                          delete this.queryObservable;
                        }
                      }
                      this.unsubscribeFromQuery();
                    }
                    if (this.type === DocumentType.Subscription)
                      this.unsubscribeFromQuery();
                    this.hasMounted = false;
                  };
                  GraphQL.prototype.getQueryRecycler = function() {
                    return (
                      this.context.getQueryRecycler &&
                      this.context.getQueryRecycler(GraphQL)
                    );
                  };
                  GraphQL.prototype.getClient = function(props) {
                    if (this.client) return this.client;
                    var client = mapPropsToOptions(props).client;
                    if (client) {
                      this.client = client;
                    } else {
                      this.client = this.context.client;
                    }
                    invariant$1(
                      !!this.client,
                      'Could not find "client" in the context of ' +
                        ('"' + graphQLDisplayName + '". ') +
                        'Wrap the root component in an <ApolloProvider>'
                    );
                    return this.client;
                  };
                  GraphQL.prototype.calculateOptions = function(props, newOpts) {
                    if (props === void 0) {
                      props = this.props;
                    }
                    var opts = mapPropsToOptions(props);
                    if (newOpts && newOpts.variables) {
                      newOpts.variables = assign({}, opts.variables, newOpts.variables);
                    }
                    if (newOpts) opts = assign({}, opts, newOpts);
                    if (opts.variables || !operation.variables.length) return opts;
                    var variables = {};
                    for (var _i = 0, _a = operation.variables; _i < _a.length; _i++) {
                      var _b = _a[_i],
                        variable = _b.variable,
                        type = _b.type;
                      if (!variable.name || !variable.name.value) continue;
                      if (typeof props[variable.name.value] !== 'undefined') {
                        variables[variable.name.value] = props[variable.name.value];
                        continue;
                      }
                      if (type.kind !== 'NonNullType') {
                        variables[variable.name.value] = null;
                        continue;
                      }
                      invariant$1(
                        typeof props[variable.name.value] !== 'undefined',
                        "The operation '" +
                          operation.name +
                          "' wrapping '" +
                          getDisplayName(WrappedComponent) +
                          "' " +
                          ("is expecting a variable: '" +
                            variable.name.value +
                            "' but it was not found in the props ") +
                          ("passed to '" + graphQLDisplayName + "'")
                      );
                    }
                    opts = __assign$1({}, opts, {variables: variables});
                    return opts;
                  };
                  GraphQL.prototype.calculateResultProps = function(result) {
                    var name = this.type === DocumentType.Mutation ? 'mutate' : 'data';
                    if (operationOptions.name) name = operationOptions.name;
                    var newResult = ((_a = {}),
                    (_a[name] = result),
                    (_a.ownProps = this.props),
                    _a);
                    if (mapResultToProps) return mapResultToProps(newResult);
                    return (_b = {}), (_b[name] = defaultMapResultToProps(result)), _b;
                    var _a, _b;
                  };
                  GraphQL.prototype.setInitialProps = function() {
                    if (this.type === DocumentType.Mutation) {
                      return;
                    }
                    var opts = this.calculateOptions(this.props);
                    this.createQuery(opts);
                  };
                  GraphQL.prototype.createQuery = function(opts, props) {
                    if (props === void 0) {
                      props = this.props;
                    }
                    if (this.type === DocumentType.Subscription) {
                      this.queryObservable = this.getClient(props).subscribe(
                        assign(
                          {
                            query: document,
                          },
                          opts
                        )
                      );
                    } else {
                      var recycler = this.getQueryRecycler();
                      var queryObservable = null;
                      if (recycler) queryObservable = recycler.reuse(opts);
                      if (queryObservable === null) {
                        this.queryObservable = this.getClient(props).watchQuery(
                          assign(
                            {
                              query: document,
                              metadata: {
                                reactComponent: {
                                  displayName: graphQLDisplayName,
                                },
                              },
                            },
                            opts
                          )
                        );
                      } else {
                        this.queryObservable = queryObservable;
                      }
                    }
                  };
                  GraphQL.prototype.updateQuery = function(props) {
                    var opts = this.calculateOptions(props);
                    if (!this.queryObservable) {
                      this.createQuery(opts, props);
                    }
                    if (this.queryObservable._setOptionsNoResult) {
                      this.queryObservable._setOptionsNoResult(opts);
                    } else {
                      if (this.queryObservable.setOptions) {
                        this.queryObservable.setOptions(opts).catch(function(error) {
                          return null;
                        });
                      }
                    }
                  };
                  GraphQL.prototype.fetchData = function() {
                    if (this.shouldSkip()) return false;
                    if (
                      operation.type === DocumentType.Mutation ||
                      operation.type === DocumentType.Subscription
                    )
                      return false;
                    var opts = this.calculateOptions();
                    if (opts.ssr === false) return false;
                    if (
                      opts.fetchPolicy === 'network-only' ||
                      opts.fetchPolicy === 'cache-and-network'
                    ) {
                      opts.fetchPolicy = 'cache-first';
                    }
                    var observable = this.getClient(this.props).watchQuery(
                      assign({query: document}, opts)
                    );
                    var result = observable.currentResult();
                    if (result.loading) {
                      return observable.result();
                    } else {
                      return false;
                    }
                  };
                  GraphQL.prototype.subscribeToQuery = function() {
                    var _this = this;
                    if (this.querySubscription) {
                      return;
                    }
                    var next = function(results) {
                      if (_this.type === DocumentType.Subscription) {
                        _this.lastSubscriptionData = results;
                        results = {data: results};
                      }
                      var clashingKeys = Object.keys(observableQueryFields(results.data));
                      invariant$1(
                        clashingKeys.length === 0,
                        "the result of the '" +
                          graphQLDisplayName +
                          "' operation contains keys that " +
                          'conflict with the return object.' +
                          clashingKeys
                            .map(function(k) {
                              return "'" + k + "'";
                            })
                            .join(', ') +
                          ' not allowed.'
                      );
                      _this.forceRenderChildren();
                    };
                    var handleError = function(error) {
                      if (error.hasOwnProperty('graphQLErrors'))
                        return next({error: error});
                      throw error;
                    };
                    this.querySubscription = this.queryObservable.subscribe({
                      next: next,
                      error: handleError,
                    });
                  };
                  GraphQL.prototype.unsubscribeFromQuery = function() {
                    if (this.querySubscription) {
                      this.querySubscription.unsubscribe();
                      delete this.querySubscription;
                    }
                  };
                  GraphQL.prototype.shouldSkip = function(props) {
                    if (props === void 0) {
                      props = this.props;
                    }
                    return mapPropsToSkip(props) || mapPropsToOptions(props).skip;
                  };
                  GraphQL.prototype.forceRenderChildren = function() {
                    this.shouldRerender = true;
                    if (this.hasMounted) this.forceUpdate();
                  };
                  GraphQL.prototype.getWrappedInstance = function() {
                    invariant$1(
                      operationOptions.withRef,
                      'To access the wrapped instance, you need to specify ' +
                        '{ withRef: true } in the options'
                    );
                    return this.wrappedInstance;
                  };
                  GraphQL.prototype.setWrappedInstance = function(ref) {
                    this.wrappedInstance = ref;
                  };
                  GraphQL.prototype.dataForChildViaMutation = function(mutationOpts) {
                    var opts = this.calculateOptions(this.props, mutationOpts);
                    if (typeof opts.variables === 'undefined') delete opts.variables;
                    opts.mutation = document;
                    return this.getClient(this.props).mutate(opts);
                  };
                  GraphQL.prototype.dataForChild = function() {
                    var _this = this;
                    if (this.type === DocumentType.Mutation) {
                      return this.dataForChildViaMutation;
                    }
                    var opts = this.calculateOptions(this.props);
                    var data = {};
                    assign(data, observableQueryFields(this.queryObservable));
                    if (this.type === DocumentType.Subscription) {
                      assign(
                        data,
                        {
                          loading: !this.lastSubscriptionData,
                          variables: opts.variables,
                        },
                        this.lastSubscriptionData
                      );
                    } else {
                      var currentResult = this.queryObservable.currentResult();
                      var loading = currentResult.loading,
                        error_1 = currentResult.error,
                        networkStatus = currentResult.networkStatus;
                      assign(data, {loading: loading, networkStatus: networkStatus});
                      var logErrorTimeoutId_1 = setTimeout(function() {
                        if (error_1) {
                          console.error(
                            'Unhandled (in react-apollo)',
                            error_1.stack || error_1
                          );
                        }
                      }, 10);
                      Object.defineProperty(data, 'error', {
                        configurable: true,
                        enumerable: true,
                        get: function() {
                          clearTimeout(logErrorTimeoutId_1);
                          return error_1;
                        },
                      });
                      if (loading) {
                        assign(data, this.previousData, currentResult.data);
                      } else if (error_1) {
                        assign(data, (this.queryObservable.getLastResult() || {}).data);
                      } else {
                        assign(data, currentResult.data);
                        this.previousData = currentResult.data;
                      }
                      if (!this.querySubscription) {
                        data.refetch = function(args) {
                          return new Promise(function(r, f) {
                            _this.refetcherQueue = {resolve: r, reject: f, args: args};
                          });
                        };
                      }
                    }
                    return data;
                  };
                  GraphQL.prototype.render = function() {
                    if (this.shouldSkip()) {
                      if (operationOptions.withRef) {
                        return React.createElement(
                          WrappedComponent,
                          assign({}, this.props, {ref: this.setWrappedInstance})
                        );
                      }
                      return React.createElement(WrappedComponent, this.props);
                    }
                    var _a = this,
                      shouldRerender = _a.shouldRerender,
                      renderedElement = _a.renderedElement,
                      props = _a.props;
                    this.shouldRerender = false;
                    if (
                      !shouldRerender &&
                      renderedElement &&
                      renderedElement.type === WrappedComponent
                    ) {
                      return renderedElement;
                    }
                    var data = this.dataForChild();
                    var clientProps = this.calculateResultProps(data);
                    var mergedPropsAndData = assign({}, props, clientProps);
                    if (operationOptions.withRef)
                      mergedPropsAndData.ref = this.setWrappedInstance;
                    this.renderedElement = React.createElement(
                      WrappedComponent,
                      mergedPropsAndData
                    );
                    return this.renderedElement;
                  };
                  GraphQL.displayName = graphQLDisplayName;
                  GraphQL.WrappedComponent = WrappedComponent;
                  GraphQL.contextTypes = {
                    client: PropTypes.object,
                    getQueryRecycler: PropTypes.func,
                  };
                  return GraphQL;
                })(React.Component);
                return hoistNonReactStatics(GraphQL, WrappedComponent, {});
              }
              return wrapWithApolloComponent;
            }

            var __extends$3 =
              (undefined && undefined.__extends) ||
              (function() {
                var extendStatics =
                  Object.setPrototypeOf ||
                  ({__proto__: []} instanceof Array &&
                    function(d, b) {
                      d.__proto__ = b;
                    }) ||
                  function(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                  };
                return function(d, b) {
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype =
                    b === null
                      ? Object.create(b)
                      : ((__.prototype = b.prototype), new __());
                };
              })();
            var invariant$3 = __webpack_require__(
              /*! invariant */ '../node_modules/invariant/browser.js'
            );
            var assign$1 = __webpack_require__(
              /*! object-assign */ '../node_modules/object-assign/index.js'
            );
            var hoistNonReactStatics$1 = __webpack_require__(
              /*! hoist-non-react-statics */ '../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'
            );
            function getDisplayName$1(WrappedComponent) {
              return WrappedComponent.displayName || WrappedComponent.name || 'Component';
            }
            function withApollo(WrappedComponent, operationOptions) {
              if (operationOptions === void 0) {
                operationOptions = {};
              }
              var withDisplayName =
                'withApollo(' + getDisplayName$1(WrappedComponent) + ')';
              var WithApollo = (function(_super) {
                __extends$3(WithApollo, _super);
                function WithApollo(props, context) {
                  var _this = _super.call(this, props, context) || this;
                  _this.client = context.client;
                  _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
                  invariant$3(
                    !!_this.client,
                    'Could not find "client" in the context of ' +
                      ('"' + withDisplayName + '". ') +
                      'Wrap the root component in an <ApolloProvider>'
                  );
                  return _this;
                }
                WithApollo.prototype.getWrappedInstance = function() {
                  invariant$3(
                    operationOptions.withRef,
                    'To access the wrapped instance, you need to specify ' +
                      '{ withRef: true } in the options'
                  );
                  return this.wrappedInstance;
                };
                WithApollo.prototype.setWrappedInstance = function(ref) {
                  this.wrappedInstance = ref;
                };
                WithApollo.prototype.render = function() {
                  var props = assign$1({}, this.props);
                  props.client = this.client;
                  if (operationOptions.withRef) props.ref = this.setWrappedInstance;
                  return React.createElement(WrappedComponent, props);
                };
                WithApollo.displayName = withDisplayName;
                WithApollo.WrappedComponent = WrappedComponent;
                WithApollo.contextTypes = {client: PropTypes.object.isRequired};
                return WithApollo;
              })(React.Component);
              return hoistNonReactStatics$1(WithApollo, WrappedComponent, {});
            }

            exports.ApolloProvider = ApolloProvider;
            exports.graphql = graphql;
            exports.withApollo = withApollo;
            exports.compose = redux.compose;
            exports.gql = graphqlTag;
            Object.keys(apolloClient).forEach(function(key) {
              exports[key] = apolloClient[key];
            });

            Object.defineProperty(exports, '__esModule', {value: true});
          });
          //# sourceMappingURL=react-apollo.browser.umd.js.map

          /***/
        },

      /***/ '../node_modules/react-router-dom/es/BrowserRouter.js':
        /*!************************************************************!*\
  !*** ../node_modules/react-router-dom/es/BrowserRouter.js ***!
  \************************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! warning */ '../node_modules/warning/warning.js'
          );
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            warning__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! react */ 'react'
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! prop-types */ '../node_modules/prop-types/index.js'
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! history */ '../node_modules/history/es/index.js'
          );
          /* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./Router */ '../node_modules/react-router-dom/es/Router.js'
          );
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call && (typeof call === 'object' || typeof call === 'function')
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            });
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }

          /**
           * The public API for a <Router> that uses HTML5 history.
           */

          var BrowserRouter = (function(_React$Component) {
            _inherits(BrowserRouter, _React$Component);

            function BrowserRouter() {
              var _temp, _this, _ret;

              _classCallCheck(this, BrowserRouter);

              for (
                var _len = arguments.length, args = Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              return (
                (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                  this,
                  _React$Component.call.apply(_React$Component, [this].concat(args))
                )),
                _this)),
                (_this.history = Object(
                  history__WEBPACK_IMPORTED_MODULE_3__['createBrowserHistory']
                )(_this.props)),
                _temp)),
                _possibleConstructorReturn(_this, _ret)
              );
            }

            BrowserRouter.prototype.componentWillMount = function componentWillMount() {
              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                !this.props.history,
                '<BrowserRouter> ignores the history prop. To use a custom history, ' +
                  'use `import { Router }` instead of `import { BrowserRouter as Router }`.'
              );
            };

            BrowserRouter.prototype.render = function render() {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _Router__WEBPACK_IMPORTED_MODULE_4__['default'],
                {history: this.history, children: this.props.children}
              );
            };

            return BrowserRouter;
          })(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

          BrowserRouter.propTypes = {
            basename: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
            forceRefresh: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
            getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
            keyLength: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
            children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
          };

          /* harmony default export */ __webpack_exports__['default'] = BrowserRouter;

          /***/
        },

      /***/ '../node_modules/react-router-dom/es/HashRouter.js':
        /*!*********************************************************!*\
  !*** ../node_modules/react-router-dom/es/HashRouter.js ***!
  \*********************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! warning */ '../node_modules/warning/warning.js'
          );
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            warning__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! react */ 'react'
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! prop-types */ '../node_modules/prop-types/index.js'
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! history */ '../node_modules/history/es/index.js'
          );
          /* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./Router */ '../node_modules/react-router-dom/es/Router.js'
          );
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call && (typeof call === 'object' || typeof call === 'function')
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            });
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }

          /**
           * The public API for a <Router> that uses window.location.hash.
           */

          var HashRouter = (function(_React$Component) {
            _inherits(HashRouter, _React$Component);

            function HashRouter() {
              var _temp, _this, _ret;

              _classCallCheck(this, HashRouter);

              for (
                var _len = arguments.length, args = Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              return (
                (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                  this,
                  _React$Component.call.apply(_React$Component, [this].concat(args))
                )),
                _this)),
                (_this.history = Object(
                  history__WEBPACK_IMPORTED_MODULE_3__['createHashHistory']
                )(_this.props)),
                _temp)),
                _possibleConstructorReturn(_this, _ret)
              );
            }

            HashRouter.prototype.componentWillMount = function componentWillMount() {
              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                !this.props.history,
                '<HashRouter> ignores the history prop. To use a custom history, ' +
                  'use `import { Router }` instead of `import { HashRouter as Router }`.'
              );
            };

            HashRouter.prototype.render = function render() {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _Router__WEBPACK_IMPORTED_MODULE_4__['default'],
                {history: this.history, children: this.props.children}
              );
            };

            return HashRouter;
          })(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

          HashRouter.propTypes = {
            basename: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
            getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
            hashType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([
              'hashbang',
              'noslash',
              'slash',
            ]),
            children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
          };

          /* harmony default export */ __webpack_exports__['default'] = HashRouter;

          /***/
        },

      /***/ '../node_modules/react-router-dom/es/Link.js':
        /*!***************************************************!*\
  !*** ../node_modules/react-router-dom/es/Link.js ***!
  \***************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react */ 'react'
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ '../node_modules/prop-types/index.js'
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! invariant */ '../node_modules/invariant/browser.js'
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            invariant__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! history */ '../node_modules/history/es/index.js'
          );
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };

          function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) {
              if (keys.indexOf(i) >= 0) continue;
              if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
              target[i] = obj[i];
            }
            return target;
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call && (typeof call === 'object' || typeof call === 'function')
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            });
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }

          var isModifiedEvent = function isModifiedEvent(event) {
            return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
          };

          /**
           * The public API for rendering a history-aware <a>.
           */

          var Link = (function(_React$Component) {
            _inherits(Link, _React$Component);

            function Link() {
              var _temp, _this, _ret;

              _classCallCheck(this, Link);

              for (
                var _len = arguments.length, args = Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              return (
                (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                  this,
                  _React$Component.call.apply(_React$Component, [this].concat(args))
                )),
                _this)),
                (_this.handleClick = function(event) {
                  if (_this.props.onClick) _this.props.onClick(event);

                  if (
                    !event.defaultPrevented && // onClick prevented default
                    event.button === 0 && // ignore everything but left clicks
                    !_this.props.target && // let browser handle "target=_blank" etc.
                    !isModifiedEvent(event) // ignore clicks with modifier keys
                  ) {
                    event.preventDefault();

                    var history = _this.context.router.history;
                    var _this$props = _this.props,
                      replace = _this$props.replace,
                      to = _this$props.to;

                    if (replace) {
                      history.replace(to);
                    } else {
                      history.push(to);
                    }
                  }
                }),
                _temp)),
                _possibleConstructorReturn(_this, _ret)
              );
            }

            Link.prototype.render = function render() {
              var _props = this.props,
                replace = _props.replace,
                to = _props.to,
                innerRef = _props.innerRef,
                props = _objectWithoutProperties(_props, ['replace', 'to', 'innerRef']); // eslint-disable-line no-unused-vars

              invariant__WEBPACK_IMPORTED_MODULE_2___default()(
                this.context.router,
                'You should not use <Link> outside a <Router>'
              );

              invariant__WEBPACK_IMPORTED_MODULE_2___default()(
                to !== undefined,
                'You must specify the "to" property'
              );

              var history = this.context.router.history;

              var location =
                typeof to === 'string'
                  ? Object(history__WEBPACK_IMPORTED_MODULE_3__['createLocation'])(
                      to,
                      null,
                      null,
                      history.location
                    )
                  : to;

              var href = history.createHref(location);
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'a',
                _extends({}, props, {
                  onClick: this.handleClick,
                  href: href,
                  ref: innerRef,
                })
              );
            };

            return Link;
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

          Link.propTypes = {
            onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            replace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
            ]).isRequired,
            innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            ]),
          };
          Link.defaultProps = {
            replace: false,
          };
          Link.contextTypes = {
            router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
                push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
                replace:
                  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
                createHref:
                  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
              }).isRequired,
            }).isRequired,
          };

          /* harmony default export */ __webpack_exports__['default'] = Link;

          /***/
        },

      /***/ '../node_modules/react-router-dom/es/MemoryRouter.js':
        /*!***********************************************************!*\
  !*** ../node_modules/react-router-dom/es/MemoryRouter.js ***!
  \***********************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react_router_es_MemoryRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react-router/es/MemoryRouter */ '../node_modules/react-router/es/MemoryRouter.js'
          );
          // Written in this round about way for babel-transform-imports

          /* harmony default export */ __webpack_exports__['default'] =
            react_router_es_MemoryRouter__WEBPACK_IMPORTED_MODULE_0__['default'];

          /***/
        },

      /***/ '../node_modules/react-router-dom/es/NavLink.js':
        /*!******************************************************!*\
  !*** ../node_modules/react-router-dom/es/NavLink.js ***!
  \******************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react */ 'react'
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ '../node_modules/prop-types/index.js'
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./Route */ '../node_modules/react-router-dom/es/Route.js'
          );
          /* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./Link */ '../node_modules/react-router-dom/es/Link.js'
          );
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };

          var _typeof =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function(obj) {
                  return typeof obj;
                }
              : function(obj) {
                  return obj &&
                    typeof Symbol === 'function' &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                };

          function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) {
              if (keys.indexOf(i) >= 0) continue;
              if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
              target[i] = obj[i];
            }
            return target;
          }

          /**
           * A <Link> wrapper that knows if it's "active" or not.
           */
          var NavLink = function NavLink(_ref) {
            var to = _ref.to,
              exact = _ref.exact,
              strict = _ref.strict,
              location = _ref.location,
              activeClassName = _ref.activeClassName,
              className = _ref.className,
              activeStyle = _ref.activeStyle,
              style = _ref.style,
              getIsActive = _ref.isActive,
              ariaCurrent = _ref['aria-current'],
              rest = _objectWithoutProperties(_ref, [
                'to',
                'exact',
                'strict',
                'location',
                'activeClassName',
                'className',
                'activeStyle',
                'style',
                'isActive',
                'aria-current',
              ]);

            var path =
              (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object'
                ? to.pathname
                : to;

            // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
            var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Route__WEBPACK_IMPORTED_MODULE_2__['default'],
              {
                path: escapedPath,
                exact: exact,
                strict: strict,
                location: location,
                children: function children(_ref2) {
                  var location = _ref2.location,
                    match = _ref2.match;

                  var isActive = !!(getIsActive ? getIsActive(match, location) : match);

                  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Link__WEBPACK_IMPORTED_MODULE_3__['default'],
                    _extends(
                      {
                        to: to,
                        className: isActive
                          ? [className, activeClassName]
                              .filter(function(i) {
                                return i;
                              })
                              .join(' ')
                          : className,
                        style: isActive ? _extends({}, style, activeStyle) : style,
                        'aria-current': (isActive && ariaCurrent) || null,
                      },
                      rest
                    )
                  );
                },
              }
            );
          };

          NavLink.propTypes = {
            to: _Link__WEBPACK_IMPORTED_MODULE_3__['default'].propTypes.to,
            exact: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            strict: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
            activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            activeStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
            style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
            isActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            'aria-current': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([
              'page',
              'step',
              'location',
              'date',
              'time',
              'true',
            ]),
          };

          NavLink.defaultProps = {
            activeClassName: 'active',
            'aria-current': 'page',
          };

          /* harmony default export */ __webpack_exports__['default'] = NavLink;

          /***/
        },

      /***/ '../node_modules/react-router-dom/es/Prompt.js':
        /*!*****************************************************!*\
  !*** ../node_modules/react-router-dom/es/Prompt.js ***!
  \*****************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react_router_es_Prompt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react-router/es/Prompt */ '../node_modules/react-router/es/Prompt.js'
          );
          // Written in this round about way for babel-transform-imports

          /* harmony default export */ __webpack_exports__['default'] =
            react_router_es_Prompt__WEBPACK_IMPORTED_MODULE_0__['default'];

          /***/
        },

      /***/ '../node_modules/react-router-dom/es/Redirect.js':
        /*!*******************************************************!*\
  !*** ../node_modules/react-router-dom/es/Redirect.js ***!
  \*******************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react_router_es_Redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react-router/es/Redirect */ '../node_modules/react-router/es/Redirect.js'
          );
          // Written in this round about way for babel-transform-imports

          /* harmony default export */ __webpack_exports__['default'] =
            react_router_es_Redirect__WEBPACK_IMPORTED_MODULE_0__['default'];

          /***/
        },

      /***/ '../node_modules/react-router-dom/es/Route.js':
        /*!****************************************************!*\
  !*** ../node_modules/react-router-dom/es/Route.js ***!
  \****************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react_router_es_Route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react-router/es/Route */ '../node_modules/react-router/es/Route.js'
          );
          // Written in this round about way for babel-transform-imports

          /* harmony default export */ __webpack_exports__['default'] =
            react_router_es_Route__WEBPACK_IMPORTED_MODULE_0__['default'];

          /***/
        },

      /***/ '../node_modules/react-router-dom/es/Router.js':
        /*!*****************************************************!*\
  !*** ../node_modules/react-router-dom/es/Router.js ***!
  \*****************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react_router_es_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react-router/es/Router */ '../node_modules/react-router/es/Router.js'
          );
          // Written in this round about way for babel-transform-imports

          /* harmony default export */ __webpack_exports__['default'] =
            react_router_es_Router__WEBPACK_IMPORTED_MODULE_0__['default'];

          /***/
        },

      /***/ '../node_modules/react-router-dom/es/StaticRouter.js':
        /*!***********************************************************!*\
  !*** ../node_modules/react-router-dom/es/StaticRouter.js ***!
  \***********************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react_router_es_StaticRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react-router/es/StaticRouter */ '../node_modules/react-router/es/StaticRouter.js'
          );
          // Written in this round about way for babel-transform-imports

          /* harmony default export */ __webpack_exports__['default'] =
            react_router_es_StaticRouter__WEBPACK_IMPORTED_MODULE_0__['default'];

          /***/
        },

      /***/ '../node_modules/react-router-dom/es/Switch.js':
        /*!*****************************************************!*\
  !*** ../node_modules/react-router-dom/es/Switch.js ***!
  \*****************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react_router_es_Switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react-router/es/Switch */ '../node_modules/react-router/es/Switch.js'
          );
          // Written in this round about way for babel-transform-imports

          /* harmony default export */ __webpack_exports__['default'] =
            react_router_es_Switch__WEBPACK_IMPORTED_MODULE_0__['default'];

          /***/
        },

      /***/ '../node_modules/react-router-dom/es/generatePath.js':
        /*!***********************************************************!*\
  !*** ../node_modules/react-router-dom/es/generatePath.js ***!
  \***********************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react_router_es_generatePath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react-router/es/generatePath */ '../node_modules/react-router/es/generatePath.js'
          );
          // Written in this round about way for babel-transform-imports

          /* harmony default export */ __webpack_exports__['default'] =
            react_router_es_generatePath__WEBPACK_IMPORTED_MODULE_0__['default'];

          /***/
        },

      /***/ '../node_modules/react-router-dom/es/index.js':
        /*!****************************************************!*\
  !*** ../node_modules/react-router-dom/es/index.js ***!
  \****************************************************/
        /*! exports provided: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _BrowserRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./BrowserRouter */ '../node_modules/react-router-dom/es/BrowserRouter.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'BrowserRouter',
            function() {
              return _BrowserRouter__WEBPACK_IMPORTED_MODULE_0__['default'];
            }
          );

          /* harmony import */ var _HashRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./HashRouter */ '../node_modules/react-router-dom/es/HashRouter.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'HashRouter',
            function() {
              return _HashRouter__WEBPACK_IMPORTED_MODULE_1__['default'];
            }
          );

          /* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./Link */ '../node_modules/react-router-dom/es/Link.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'Link',
            function() {
              return _Link__WEBPACK_IMPORTED_MODULE_2__['default'];
            }
          );

          /* harmony import */ var _MemoryRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./MemoryRouter */ '../node_modules/react-router-dom/es/MemoryRouter.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'MemoryRouter',
            function() {
              return _MemoryRouter__WEBPACK_IMPORTED_MODULE_3__['default'];
            }
          );

          /* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./NavLink */ '../node_modules/react-router-dom/es/NavLink.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'NavLink',
            function() {
              return _NavLink__WEBPACK_IMPORTED_MODULE_4__['default'];
            }
          );

          /* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./Prompt */ '../node_modules/react-router-dom/es/Prompt.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'Prompt',
            function() {
              return _Prompt__WEBPACK_IMPORTED_MODULE_5__['default'];
            }
          );

          /* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! ./Redirect */ '../node_modules/react-router-dom/es/Redirect.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'Redirect',
            function() {
              return _Redirect__WEBPACK_IMPORTED_MODULE_6__['default'];
            }
          );

          /* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! ./Route */ '../node_modules/react-router-dom/es/Route.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'Route',
            function() {
              return _Route__WEBPACK_IMPORTED_MODULE_7__['default'];
            }
          );

          /* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            /*! ./Router */ '../node_modules/react-router-dom/es/Router.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'Router',
            function() {
              return _Router__WEBPACK_IMPORTED_MODULE_8__['default'];
            }
          );

          /* harmony import */ var _StaticRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
            /*! ./StaticRouter */ '../node_modules/react-router-dom/es/StaticRouter.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'StaticRouter',
            function() {
              return _StaticRouter__WEBPACK_IMPORTED_MODULE_9__['default'];
            }
          );

          /* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
            /*! ./Switch */ '../node_modules/react-router-dom/es/Switch.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'Switch',
            function() {
              return _Switch__WEBPACK_IMPORTED_MODULE_10__['default'];
            }
          );

          /* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
            /*! ./generatePath */ '../node_modules/react-router-dom/es/generatePath.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'generatePath',
            function() {
              return _generatePath__WEBPACK_IMPORTED_MODULE_11__['default'];
            }
          );

          /* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
            /*! ./matchPath */ '../node_modules/react-router-dom/es/matchPath.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'matchPath',
            function() {
              return _matchPath__WEBPACK_IMPORTED_MODULE_12__['default'];
            }
          );

          /* harmony import */ var _withRouter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
            /*! ./withRouter */ '../node_modules/react-router-dom/es/withRouter.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'withRouter',
            function() {
              return _withRouter__WEBPACK_IMPORTED_MODULE_13__['default'];
            }
          );

          /***/
        },

      /***/ '../node_modules/react-router-dom/es/matchPath.js':
        /*!********************************************************!*\
  !*** ../node_modules/react-router-dom/es/matchPath.js ***!
  \********************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react_router_es_matchPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react-router/es/matchPath */ '../node_modules/react-router/es/matchPath.js'
          );
          // Written in this round about way for babel-transform-imports

          /* harmony default export */ __webpack_exports__['default'] =
            react_router_es_matchPath__WEBPACK_IMPORTED_MODULE_0__['default'];

          /***/
        },

      /***/ '../node_modules/react-router-dom/es/withRouter.js':
        /*!*********************************************************!*\
  !*** ../node_modules/react-router-dom/es/withRouter.js ***!
  \*********************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react_router_es_withRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react-router/es/withRouter */ '../node_modules/react-router/es/withRouter.js'
          );
          // Written in this round about way for babel-transform-imports

          /* harmony default export */ __webpack_exports__['default'] =
            react_router_es_withRouter__WEBPACK_IMPORTED_MODULE_0__['default'];

          /***/
        },

      /***/ '../node_modules/react-router/es/MemoryRouter.js':
        /*!*******************************************************!*\
  !*** ../node_modules/react-router/es/MemoryRouter.js ***!
  \*******************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! warning */ '../node_modules/warning/warning.js'
          );
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            warning__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! react */ 'react'
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! prop-types */ '../node_modules/prop-types/index.js'
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! history */ '../node_modules/history/es/index.js'
          );
          /* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./Router */ '../node_modules/react-router/es/Router.js'
          );
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call && (typeof call === 'object' || typeof call === 'function')
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            });
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }

          /**
           * The public API for a <Router> that stores location in memory.
           */

          var MemoryRouter = (function(_React$Component) {
            _inherits(MemoryRouter, _React$Component);

            function MemoryRouter() {
              var _temp, _this, _ret;

              _classCallCheck(this, MemoryRouter);

              for (
                var _len = arguments.length, args = Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              return (
                (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                  this,
                  _React$Component.call.apply(_React$Component, [this].concat(args))
                )),
                _this)),
                (_this.history = Object(
                  history__WEBPACK_IMPORTED_MODULE_3__['createMemoryHistory']
                )(_this.props)),
                _temp)),
                _possibleConstructorReturn(_this, _ret)
              );
            }

            MemoryRouter.prototype.componentWillMount = function componentWillMount() {
              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                !this.props.history,
                '<MemoryRouter> ignores the history prop. To use a custom history, ' +
                  'use `import { Router }` instead of `import { MemoryRouter as Router }`.'
              );
            };

            MemoryRouter.prototype.render = function render() {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _Router__WEBPACK_IMPORTED_MODULE_4__['default'],
                {history: this.history, children: this.props.children}
              );
            };

            return MemoryRouter;
          })(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

          MemoryRouter.propTypes = {
            initialEntries: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
            initialIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
            getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
            keyLength: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
            children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
          };

          /* harmony default export */ __webpack_exports__['default'] = MemoryRouter;

          /***/
        },

      /***/ '../node_modules/react-router/es/Prompt.js':
        /*!*************************************************!*\
  !*** ../node_modules/react-router/es/Prompt.js ***!
  \*************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react */ 'react'
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ '../node_modules/prop-types/index.js'
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! invariant */ '../node_modules/invariant/browser.js'
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            invariant__WEBPACK_IMPORTED_MODULE_2__
          );
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call && (typeof call === 'object' || typeof call === 'function')
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            });
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }

          /**
           * The public API for prompting the user before navigating away
           * from a screen with a component.
           */

          var Prompt = (function(_React$Component) {
            _inherits(Prompt, _React$Component);

            function Prompt() {
              _classCallCheck(this, Prompt);

              return _possibleConstructorReturn(
                this,
                _React$Component.apply(this, arguments)
              );
            }

            Prompt.prototype.enable = function enable(message) {
              if (this.unblock) this.unblock();

              this.unblock = this.context.router.history.block(message);
            };

            Prompt.prototype.disable = function disable() {
              if (this.unblock) {
                this.unblock();
                this.unblock = null;
              }
            };

            Prompt.prototype.componentWillMount = function componentWillMount() {
              invariant__WEBPACK_IMPORTED_MODULE_2___default()(
                this.context.router,
                'You should not use <Prompt> outside a <Router>'
              );

              if (this.props.when) this.enable(this.props.message);
            };

            Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(
              nextProps
            ) {
              if (nextProps.when) {
                if (!this.props.when || this.props.message !== nextProps.message)
                  this.enable(nextProps.message);
              } else {
                this.disable();
              }
            };

            Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
              this.disable();
            };

            Prompt.prototype.render = function render() {
              return null;
            };

            return Prompt;
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

          Prompt.propTypes = {
            when: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            ]).isRequired,
          };
          Prompt.defaultProps = {
            when: true,
          };
          Prompt.contextTypes = {
            router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
                block: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
              }).isRequired,
            }).isRequired,
          };

          /* harmony default export */ __webpack_exports__['default'] = Prompt;

          /***/
        },

      /***/ '../node_modules/react-router/es/Redirect.js':
        /*!***************************************************!*\
  !*** ../node_modules/react-router/es/Redirect.js ***!
  \***************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react */ 'react'
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ '../node_modules/prop-types/index.js'
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! warning */ '../node_modules/warning/warning.js'
          );
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            warning__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! invariant */ '../node_modules/invariant/browser.js'
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            invariant__WEBPACK_IMPORTED_MODULE_3__
          );
          /* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! history */ '../node_modules/history/es/index.js'
          );
          /* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./generatePath */ '../node_modules/react-router/es/generatePath.js'
          );
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call && (typeof call === 'object' || typeof call === 'function')
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            });
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }

          /**
           * The public API for updating the location programmatically
           * with a component.
           */

          var Redirect = (function(_React$Component) {
            _inherits(Redirect, _React$Component);

            function Redirect() {
              _classCallCheck(this, Redirect);

              return _possibleConstructorReturn(
                this,
                _React$Component.apply(this, arguments)
              );
            }

            Redirect.prototype.isStatic = function isStatic() {
              return this.context.router && this.context.router.staticContext;
            };

            Redirect.prototype.componentWillMount = function componentWillMount() {
              invariant__WEBPACK_IMPORTED_MODULE_3___default()(
                this.context.router,
                'You should not use <Redirect> outside a <Router>'
              );

              if (this.isStatic()) this.perform();
            };

            Redirect.prototype.componentDidMount = function componentDidMount() {
              if (!this.isStatic()) this.perform();
            };

            Redirect.prototype.componentDidUpdate = function componentDidUpdate(
              prevProps
            ) {
              var prevTo = Object(history__WEBPACK_IMPORTED_MODULE_4__['createLocation'])(
                prevProps.to
              );
              var nextTo = Object(history__WEBPACK_IMPORTED_MODULE_4__['createLocation'])(
                this.props.to
              );

              if (
                Object(history__WEBPACK_IMPORTED_MODULE_4__['locationsAreEqual'])(
                  prevTo,
                  nextTo
                )
              ) {
                warning__WEBPACK_IMPORTED_MODULE_2___default()(
                  false,
                  "You tried to redirect to the same route you're currently on: " +
                    ('"' + nextTo.pathname + nextTo.search + '"')
                );
                return;
              }

              this.perform();
            };

            Redirect.prototype.computeTo = function computeTo(_ref) {
              var computedMatch = _ref.computedMatch,
                to = _ref.to;

              if (computedMatch) {
                if (typeof to === 'string') {
                  return Object(_generatePath__WEBPACK_IMPORTED_MODULE_5__['default'])(
                    to,
                    computedMatch.params
                  );
                } else {
                  return _extends({}, to, {
                    pathname: Object(
                      _generatePath__WEBPACK_IMPORTED_MODULE_5__['default']
                    )(to.pathname, computedMatch.params),
                  });
                }
              }

              return to;
            };

            Redirect.prototype.perform = function perform() {
              var history = this.context.router.history;
              var push = this.props.push;

              var to = this.computeTo(this.props);

              if (push) {
                history.push(to);
              } else {
                history.replace(to);
              }
            };

            Redirect.prototype.render = function render() {
              return null;
            };

            return Redirect;
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

          Redirect.propTypes = {
            computedMatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, // private, from <Switch>
            push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
            ]).isRequired,
          };
          Redirect.defaultProps = {
            push: false,
          };
          Redirect.contextTypes = {
            router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
                push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
                replace:
                  prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
              }).isRequired,
              staticContext: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
            }).isRequired,
          };

          /* harmony default export */ __webpack_exports__['default'] = Redirect;

          /***/
        },

      /***/ '../node_modules/react-router/es/Route.js':
        /*!************************************************!*\
  !*** ../node_modules/react-router/es/Route.js ***!
  \************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! warning */ '../node_modules/warning/warning.js'
          );
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            warning__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! invariant */ '../node_modules/invariant/browser.js'
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            invariant__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! react */ 'react'
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! prop-types */ '../node_modules/prop-types/index.js'
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_3__
          );
          /* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./matchPath */ '../node_modules/react-router/es/matchPath.js'
          );
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call && (typeof call === 'object' || typeof call === 'function')
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            });
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }

          var isEmptyChildren = function isEmptyChildren(children) {
            return (
              react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(children) === 0
            );
          };

          /**
           * The public API for matching a single path and rendering.
           */

          var Route = (function(_React$Component) {
            _inherits(Route, _React$Component);

            function Route() {
              var _temp, _this, _ret;

              _classCallCheck(this, Route);

              for (
                var _len = arguments.length, args = Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              return (
                (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                  this,
                  _React$Component.call.apply(_React$Component, [this].concat(args))
                )),
                _this)),
                (_this.state = {
                  match: _this.computeMatch(_this.props, _this.context.router),
                }),
                _temp)),
                _possibleConstructorReturn(_this, _ret)
              );
            }

            Route.prototype.getChildContext = function getChildContext() {
              return {
                router: _extends({}, this.context.router, {
                  route: {
                    location: this.props.location || this.context.router.route.location,
                    match: this.state.match,
                  },
                }),
              };
            };

            Route.prototype.computeMatch = function computeMatch(_ref, router) {
              var computedMatch = _ref.computedMatch,
                location = _ref.location,
                path = _ref.path,
                strict = _ref.strict,
                exact = _ref.exact,
                sensitive = _ref.sensitive;

              if (computedMatch) return computedMatch; // <Switch> already computed the match for us

              invariant__WEBPACK_IMPORTED_MODULE_1___default()(
                router,
                'You should not use <Route> or withRouter() outside a <Router>'
              );

              var route = router.route;

              var pathname = (location || route.location).pathname;

              return Object(_matchPath__WEBPACK_IMPORTED_MODULE_4__['default'])(
                pathname,
                {path: path, strict: strict, exact: exact, sensitive: sensitive},
                route.match
              );
            };

            Route.prototype.componentWillMount = function componentWillMount() {
              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                !(this.props.component && this.props.render),
                'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored'
              );

              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                !(
                  this.props.component &&
                  this.props.children &&
                  !isEmptyChildren(this.props.children)
                ),
                'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored'
              );

              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                !(
                  this.props.render &&
                  this.props.children &&
                  !isEmptyChildren(this.props.children)
                ),
                'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored'
              );
            };

            Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(
              nextProps,
              nextContext
            ) {
              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                !(nextProps.location && !this.props.location),
                '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'
              );

              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                !(!nextProps.location && this.props.location),
                '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'
              );

              this.setState({
                match: this.computeMatch(nextProps, nextContext.router),
              });
            };

            Route.prototype.render = function render() {
              var match = this.state.match;
              var _props = this.props,
                children = _props.children,
                component = _props.component,
                render = _props.render;
              var _context$router = this.context.router,
                history = _context$router.history,
                route = _context$router.route,
                staticContext = _context$router.staticContext;

              var location = this.props.location || route.location;
              var props = {
                match: match,
                location: location,
                history: history,
                staticContext: staticContext,
              };

              if (component)
                return match
                  ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                      component,
                      props
                    )
                  : null;

              if (render) return match ? render(props) : null;

              if (typeof children === 'function') return children(props);

              if (children && !isEmptyChildren(children))
                return react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(
                  children
                );

              return null;
            };

            return Route;
          })(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

          Route.propTypes = {
            computedMatch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, // private, from <Switch>
            path: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            exact: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
            strict: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
            sensitive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
            component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
            render: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
            children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
            ]),
            location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          };
          Route.contextTypes = {
            router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
              history:
                prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
              route: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
              staticContext: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
            }),
          };
          Route.childContextTypes = {
            router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
          };

          /* harmony default export */ __webpack_exports__['default'] = Route;

          /***/
        },

      /***/ '../node_modules/react-router/es/Router.js':
        /*!*************************************************!*\
  !*** ../node_modules/react-router/es/Router.js ***!
  \*************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! warning */ '../node_modules/warning/warning.js'
          );
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            warning__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! invariant */ '../node_modules/invariant/browser.js'
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            invariant__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! react */ 'react'
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! prop-types */ '../node_modules/prop-types/index.js'
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_3__
          );
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call && (typeof call === 'object' || typeof call === 'function')
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            });
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }

          /**
           * The public API for putting history on context.
           */

          var Router = (function(_React$Component) {
            _inherits(Router, _React$Component);

            function Router() {
              var _temp, _this, _ret;

              _classCallCheck(this, Router);

              for (
                var _len = arguments.length, args = Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              return (
                (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                  this,
                  _React$Component.call.apply(_React$Component, [this].concat(args))
                )),
                _this)),
                (_this.state = {
                  match: _this.computeMatch(_this.props.history.location.pathname),
                }),
                _temp)),
                _possibleConstructorReturn(_this, _ret)
              );
            }

            Router.prototype.getChildContext = function getChildContext() {
              return {
                router: _extends({}, this.context.router, {
                  history: this.props.history,
                  route: {
                    location: this.props.history.location,
                    match: this.state.match,
                  },
                }),
              };
            };

            Router.prototype.computeMatch = function computeMatch(pathname) {
              return {
                path: '/',
                url: '/',
                params: {},
                isExact: pathname === '/',
              };
            };

            Router.prototype.componentWillMount = function componentWillMount() {
              var _this2 = this;

              var _props = this.props,
                children = _props.children,
                history = _props.history;

              invariant__WEBPACK_IMPORTED_MODULE_1___default()(
                children == null ||
                  react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(
                    children
                  ) === 1,
                'A <Router> may have only one child element'
              );

              // Do this here so we can setState when a <Redirect> changes the
              // location in componentWillMount. This happens e.g. when doing
              // server rendering using a <StaticRouter>.
              this.unlisten = history.listen(function() {
                _this2.setState({
                  match: _this2.computeMatch(history.location.pathname),
                });
              });
            };

            Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(
              nextProps
            ) {
              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                this.props.history === nextProps.history,
                'You cannot change <Router history>'
              );
            };

            Router.prototype.componentWillUnmount = function componentWillUnmount() {
              this.unlisten();
            };

            Router.prototype.render = function render() {
              var children = this.props.children;

              return children
                ? react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children)
                : null;
            };

            return Router;
          })(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

          Router.propTypes = {
            history: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
            children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
          };
          Router.contextTypes = {
            router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          };
          Router.childContextTypes = {
            router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
          };

          /* harmony default export */ __webpack_exports__['default'] = Router;

          /***/
        },

      /***/ '../node_modules/react-router/es/StaticRouter.js':
        /*!*******************************************************!*\
  !*** ../node_modules/react-router/es/StaticRouter.js ***!
  \*******************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! warning */ '../node_modules/warning/warning.js'
          );
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            warning__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! invariant */ '../node_modules/invariant/browser.js'
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            invariant__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! react */ 'react'
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! prop-types */ '../node_modules/prop-types/index.js'
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_3__
          );
          /* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! history */ '../node_modules/history/es/index.js'
          );
          /* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./Router */ '../node_modules/react-router/es/Router.js'
          );
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };

          function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) {
              if (keys.indexOf(i) >= 0) continue;
              if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
              target[i] = obj[i];
            }
            return target;
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call && (typeof call === 'object' || typeof call === 'function')
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            });
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }

          var addLeadingSlash = function addLeadingSlash(path) {
            return path.charAt(0) === '/' ? path : '/' + path;
          };

          var addBasename = function addBasename(basename, location) {
            if (!basename) return location;

            return _extends({}, location, {
              pathname: addLeadingSlash(basename) + location.pathname,
            });
          };

          var stripBasename = function stripBasename(basename, location) {
            if (!basename) return location;

            var base = addLeadingSlash(basename);

            if (location.pathname.indexOf(base) !== 0) return location;

            return _extends({}, location, {
              pathname: location.pathname.substr(base.length),
            });
          };

          var createURL = function createURL(location) {
            return typeof location === 'string'
              ? location
              : Object(history__WEBPACK_IMPORTED_MODULE_4__['createPath'])(location);
          };

          var staticHandler = function staticHandler(methodName) {
            return function() {
              invariant__WEBPACK_IMPORTED_MODULE_1___default()(
                false,
                'You cannot %s with <StaticRouter>',
                methodName
              );
            };
          };

          var noop = function noop() {};

          /**
           * The public top-level API for a "static" <Router>, so-called because it
           * can't actually change the current location. Instead, it just records
           * location changes in a context object. Useful mainly in testing and
           * server-rendering scenarios.
           */

          var StaticRouter = (function(_React$Component) {
            _inherits(StaticRouter, _React$Component);

            function StaticRouter() {
              var _temp, _this, _ret;

              _classCallCheck(this, StaticRouter);

              for (
                var _len = arguments.length, args = Array(_len), _key = 0;
                _key < _len;
                _key++
              ) {
                args[_key] = arguments[_key];
              }

              return (
                (_ret = ((_temp = ((_this = _possibleConstructorReturn(
                  this,
                  _React$Component.call.apply(_React$Component, [this].concat(args))
                )),
                _this)),
                (_this.createHref = function(path) {
                  return addLeadingSlash(_this.props.basename + createURL(path));
                }),
                (_this.handlePush = function(location) {
                  var _this$props = _this.props,
                    basename = _this$props.basename,
                    context = _this$props.context;

                  context.action = 'PUSH';
                  context.location = addBasename(
                    basename,
                    Object(history__WEBPACK_IMPORTED_MODULE_4__['createLocation'])(
                      location
                    )
                  );
                  context.url = createURL(context.location);
                }),
                (_this.handleReplace = function(location) {
                  var _this$props2 = _this.props,
                    basename = _this$props2.basename,
                    context = _this$props2.context;

                  context.action = 'REPLACE';
                  context.location = addBasename(
                    basename,
                    Object(history__WEBPACK_IMPORTED_MODULE_4__['createLocation'])(
                      location
                    )
                  );
                  context.url = createURL(context.location);
                }),
                (_this.handleListen = function() {
                  return noop;
                }),
                (_this.handleBlock = function() {
                  return noop;
                }),
                _temp)),
                _possibleConstructorReturn(_this, _ret)
              );
            }

            StaticRouter.prototype.getChildContext = function getChildContext() {
              return {
                router: {
                  staticContext: this.props.context,
                },
              };
            };

            StaticRouter.prototype.componentWillMount = function componentWillMount() {
              warning__WEBPACK_IMPORTED_MODULE_0___default()(
                !this.props.history,
                '<StaticRouter> ignores the history prop. To use a custom history, ' +
                  'use `import { Router }` instead of `import { StaticRouter as Router }`.'
              );
            };

            StaticRouter.prototype.render = function render() {
              var _props = this.props,
                basename = _props.basename,
                context = _props.context,
                location = _props.location,
                props = _objectWithoutProperties(_props, [
                  'basename',
                  'context',
                  'location',
                ]);

              var history = {
                createHref: this.createHref,
                action: 'POP',
                location: stripBasename(
                  basename,
                  Object(history__WEBPACK_IMPORTED_MODULE_4__['createLocation'])(location)
                ),
                push: this.handlePush,
                replace: this.handleReplace,
                go: staticHandler('go'),
                goBack: staticHandler('goBack'),
                goForward: staticHandler('goForward'),
                listen: this.handleListen,
                block: this.handleBlock,
              };

              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _Router__WEBPACK_IMPORTED_MODULE_5__['default'],
                _extends({}, props, {history: history})
              );
            };

            return StaticRouter;
          })(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

          StaticRouter.propTypes = {
            basename: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
            context: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
            location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
            ]),
          };
          StaticRouter.defaultProps = {
            basename: '',
            location: '/',
          };
          StaticRouter.childContextTypes = {
            router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
          };

          /* harmony default export */ __webpack_exports__['default'] = StaticRouter;

          /***/
        },

      /***/ '../node_modules/react-router/es/Switch.js':
        /*!*************************************************!*\
  !*** ../node_modules/react-router/es/Switch.js ***!
  \*************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react */ 'react'
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ '../node_modules/prop-types/index.js'
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! warning */ '../node_modules/warning/warning.js'
          );
          /* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            warning__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! invariant */ '../node_modules/invariant/browser.js'
          );
          /* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            invariant__WEBPACK_IMPORTED_MODULE_3__
          );
          /* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./matchPath */ '../node_modules/react-router/es/matchPath.js'
          );
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call && (typeof call === 'object' || typeof call === 'function')
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true,
              },
            });
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }

          /**
           * The public API for rendering the first <Route> that matches.
           */

          var Switch = (function(_React$Component) {
            _inherits(Switch, _React$Component);

            function Switch() {
              _classCallCheck(this, Switch);

              return _possibleConstructorReturn(
                this,
                _React$Component.apply(this, arguments)
              );
            }

            Switch.prototype.componentWillMount = function componentWillMount() {
              invariant__WEBPACK_IMPORTED_MODULE_3___default()(
                this.context.router,
                'You should not use <Switch> outside a <Router>'
              );
            };

            Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(
              nextProps
            ) {
              warning__WEBPACK_IMPORTED_MODULE_2___default()(
                !(nextProps.location && !this.props.location),
                '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'
              );

              warning__WEBPACK_IMPORTED_MODULE_2___default()(
                !(!nextProps.location && this.props.location),
                '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'
              );
            };

            Switch.prototype.render = function render() {
              var route = this.context.router.route;
              var children = this.props.children;

              var location = this.props.location || route.location;

              var match = void 0,
                child = void 0;
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(
                children,
                function(element) {
                  if (
                    match == null &&
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(element)
                  ) {
                    var _element$props = element.props,
                      pathProp = _element$props.path,
                      exact = _element$props.exact,
                      strict = _element$props.strict,
                      sensitive = _element$props.sensitive,
                      from = _element$props.from;

                    var path = pathProp || from;

                    child = element;
                    match = Object(_matchPath__WEBPACK_IMPORTED_MODULE_4__['default'])(
                      location.pathname,
                      {path: path, exact: exact, strict: strict, sensitive: sensitive},
                      route.match
                    );
                  }
                }
              );

              return match
                ? react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
                    location: location,
                    computedMatch: match,
                  })
                : null;
            };

            return Switch;
          })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

          Switch.contextTypes = {
            router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
              route: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
            }).isRequired,
          };
          Switch.propTypes = {
            children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
            location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
          };

          /* harmony default export */ __webpack_exports__['default'] = Switch;

          /***/
        },

      /***/ '../node_modules/react-router/es/generatePath.js':
        /*!*******************************************************!*\
  !*** ../node_modules/react-router/es/generatePath.js ***!
  \*******************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! path-to-regexp */ '../node_modules/path-to-regexp/index.js'
          );
          /* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            path_to_regexp__WEBPACK_IMPORTED_MODULE_0__
          );

          var patternCache = {};
          var cacheLimit = 10000;
          var cacheCount = 0;

          var compileGenerator = function compileGenerator(pattern) {
            var cacheKey = pattern;
            var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

            if (cache[pattern]) return cache[pattern];

            var compiledGenerator = path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default.a.compile(
              pattern
            );

            if (cacheCount < cacheLimit) {
              cache[pattern] = compiledGenerator;
              cacheCount++;
            }

            return compiledGenerator;
          };

          /**
           * Public API for generating a URL pathname from a pattern and parameters.
           */
          var generatePath = function generatePath() {
            var pattern =
              arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
            var params =
              arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (pattern === '/') {
              return pattern;
            }
            var generator = compileGenerator(pattern);
            return generator(params, {pretty: true});
          };

          /* harmony default export */ __webpack_exports__['default'] = generatePath;

          /***/
        },

      /***/ '../node_modules/react-router/es/matchPath.js':
        /*!****************************************************!*\
  !*** ../node_modules/react-router/es/matchPath.js ***!
  \****************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! path-to-regexp */ '../node_modules/path-to-regexp/index.js'
          );
          /* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            path_to_regexp__WEBPACK_IMPORTED_MODULE_0__
          );

          var patternCache = {};
          var cacheLimit = 10000;
          var cacheCount = 0;

          var compilePath = function compilePath(pattern, options) {
            var cacheKey = '' + options.end + options.strict + options.sensitive;
            var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

            if (cache[pattern]) return cache[pattern];

            var keys = [];
            var re = path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default()(
              pattern,
              keys,
              options
            );
            var compiledPattern = {re: re, keys: keys};

            if (cacheCount < cacheLimit) {
              cache[pattern] = compiledPattern;
              cacheCount++;
            }

            return compiledPattern;
          };

          /**
           * Public API for matching a URL pathname to a path pattern.
           */
          var matchPath = function matchPath(pathname) {
            var options =
              arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var parent = arguments[2];

            if (typeof options === 'string') options = {path: options};

            var _options = options,
              path = _options.path,
              _options$exact = _options.exact,
              exact = _options$exact === undefined ? false : _options$exact,
              _options$strict = _options.strict,
              strict = _options$strict === undefined ? false : _options$strict,
              _options$sensitive = _options.sensitive,
              sensitive = _options$sensitive === undefined ? false : _options$sensitive;

            if (path == null) return parent;

            var _compilePath = compilePath(path, {
                end: exact,
                strict: strict,
                sensitive: sensitive,
              }),
              re = _compilePath.re,
              keys = _compilePath.keys;

            var match = re.exec(pathname);

            if (!match) return null;

            var url = match[0],
              values = match.slice(1);

            var isExact = pathname === url;

            if (exact && !isExact) return null;

            return {
              path: path, // the path pattern used to match
              url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
              isExact: isExact, // whether or not we matched exactly
              params: keys.reduce(function(memo, key, index) {
                memo[key.name] = values[index];
                return memo;
              }, {}),
            };
          };

          /* harmony default export */ __webpack_exports__['default'] = matchPath;

          /***/
        },

      /***/ '../node_modules/react-router/es/withRouter.js':
        /*!*****************************************************!*\
  !*** ../node_modules/react-router/es/withRouter.js ***!
  \*****************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react */ 'react'
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! prop-types */ '../node_modules/prop-types/index.js'
          );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            prop_types__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! hoist-non-react-statics */ '../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'
          );
          /* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./Route */ '../node_modules/react-router/es/Route.js'
          );
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };

          function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) {
              if (keys.indexOf(i) >= 0) continue;
              if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
              target[i] = obj[i];
            }
            return target;
          }

          /**
           * A public higher-order component to access the imperative API
           */
          var withRouter = function withRouter(Component) {
            var C = function C(props) {
              var wrappedComponentRef = props.wrappedComponentRef,
                remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);

              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Route__WEBPACK_IMPORTED_MODULE_3__['default'],
                {
                  children: function children(routeComponentProps) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      Component,
                      _extends({}, remainingProps, routeComponentProps, {
                        ref: wrappedComponentRef,
                      })
                    );
                  },
                }
              );
            };

            C.displayName =
              'withRouter(' + (Component.displayName || Component.name) + ')';
            C.WrappedComponent = Component;
            C.propTypes = {
              wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            };

            return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(
              C,
              Component
            );
          };

          /* harmony default export */ __webpack_exports__['default'] = withRouter;

          /***/
        },

      /***/ '../node_modules/redux/es/applyMiddleware.js':
        /*!***************************************************!*\
  !*** ../node_modules/redux/es/applyMiddleware.js ***!
  \***************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function() {
              return applyMiddleware;
            }
          );
          /* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./compose */ '../node_modules/redux/es/compose.js'
          );
          var _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };

          /**
           * Creates a store enhancer that applies middleware to the dispatch method
           * of the Redux store. This is handy for a variety of tasks, such as expressing
           * asynchronous actions in a concise manner, or logging every action payload.
           *
           * See `redux-thunk` package as an example of the Redux middleware.
           *
           * Because middleware is potentially asynchronous, this should be the first
           * store enhancer in the composition chain.
           *
           * Note that each middleware will be given the `dispatch` and `getState` functions
           * as named arguments.
           *
           * @param {...Function} middlewares The middleware chain to be applied.
           * @returns {Function} A store enhancer applying the middleware.
           */
          function applyMiddleware() {
            for (
              var _len = arguments.length, middlewares = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              middlewares[_key] = arguments[_key];
            }

            return function(createStore) {
              return function(reducer, preloadedState, enhancer) {
                var store = createStore(reducer, preloadedState, enhancer);
                var _dispatch = store.dispatch;
                var chain = [];

                var middlewareAPI = {
                  getState: store.getState,
                  dispatch: function dispatch(action) {
                    return _dispatch(action);
                  },
                };
                chain = middlewares.map(function(middleware) {
                  return middleware(middlewareAPI);
                });
                _dispatch = _compose__WEBPACK_IMPORTED_MODULE_0__['default'].apply(
                  undefined,
                  chain
                )(store.dispatch);

                return _extends({}, store, {
                  dispatch: _dispatch,
                });
              };
            };
          }

          /***/
        },

      /***/ '../node_modules/redux/es/bindActionCreators.js':
        /*!******************************************************!*\
  !*** ../node_modules/redux/es/bindActionCreators.js ***!
  \******************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function() {
              return bindActionCreators;
            }
          );
          function bindActionCreator(actionCreator, dispatch) {
            return function() {
              return dispatch(actionCreator.apply(undefined, arguments));
            };
          }

          /**
           * Turns an object whose values are action creators, into an object with the
           * same keys, but with every function wrapped into a `dispatch` call so they
           * may be invoked directly. This is just a convenience method, as you can call
           * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
           *
           * For convenience, you can also pass a single function as the first argument,
           * and get a function in return.
           *
           * @param {Function|Object} actionCreators An object whose values are action
           * creator functions. One handy way to obtain it is to use ES6 `import * as`
           * syntax. You may also pass a single function.
           *
           * @param {Function} dispatch The `dispatch` function available on your Redux
           * store.
           *
           * @returns {Function|Object} The object mimicking the original object, but with
           * every action creator wrapped into the `dispatch` call. If you passed a
           * function as `actionCreators`, the return value will also be a single
           * function.
           */
          function bindActionCreators(actionCreators, dispatch) {
            if (typeof actionCreators === 'function') {
              return bindActionCreator(actionCreators, dispatch);
            }

            if (typeof actionCreators !== 'object' || actionCreators === null) {
              throw new Error(
                'bindActionCreators expected an object or a function, instead received ' +
                  (actionCreators === null ? 'null' : typeof actionCreators) +
                  '. ' +
                  'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
              );
            }

            var keys = Object.keys(actionCreators);
            var boundActionCreators = {};
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              var actionCreator = actionCreators[key];
              if (typeof actionCreator === 'function') {
                boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
              }
            }
            return boundActionCreators;
          }

          /***/
        },

      /***/ '../node_modules/redux/es/combineReducers.js':
        /*!***************************************************!*\
  !*** ../node_modules/redux/es/combineReducers.js ***!
  \***************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function() {
              return combineReducers;
            }
          );
          /* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./createStore */ '../node_modules/redux/es/createStore.js'
          );
          /* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! lodash-es/isPlainObject */ '../node_modules/lodash-es/isPlainObject.js'
          );
          /* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./utils/warning */ '../node_modules/redux/es/utils/warning.js'
          );

          function getUndefinedStateErrorMessage(key, action) {
            var actionType = action && action.type;
            var actionName =
              (actionType && '"' + actionType.toString() + '"') || 'an action';

            return (
              'Given action ' +
              actionName +
              ', reducer "' +
              key +
              '" returned undefined. ' +
              'To ignore an action, you must explicitly return the previous state. ' +
              'If you want this reducer to hold no value, you can return null instead of undefined.'
            );
          }

          function getUnexpectedStateShapeWarningMessage(
            inputState,
            reducers,
            action,
            unexpectedKeyCache
          ) {
            var reducerKeys = Object.keys(reducers);
            var argumentName =
              action &&
              action.type ===
                _createStore__WEBPACK_IMPORTED_MODULE_0__['ActionTypes'].INIT
                ? 'preloadedState argument passed to createStore'
                : 'previous state received by the reducer';

            if (reducerKeys.length === 0) {
              return (
                'Store does not have a valid reducer. Make sure the argument passed ' +
                'to combineReducers is an object whose values are reducers.'
              );
            }

            if (
              !Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_1__['default'])(
                inputState
              )
            ) {
              return (
                'The ' +
                argumentName +
                ' has unexpected type of "' +
                {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] +
                '". Expected argument to be an object with the following ' +
                ('keys: "' + reducerKeys.join('", "') + '"')
              );
            }

            var unexpectedKeys = Object.keys(inputState).filter(function(key) {
              return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
            });

            unexpectedKeys.forEach(function(key) {
              unexpectedKeyCache[key] = true;
            });

            if (unexpectedKeys.length > 0) {
              return (
                'Unexpected ' +
                (unexpectedKeys.length > 1 ? 'keys' : 'key') +
                ' ' +
                ('"' +
                  unexpectedKeys.join('", "') +
                  '" found in ' +
                  argumentName +
                  '. ') +
                'Expected to find one of the known reducer keys instead: ' +
                ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.')
              );
            }
          }

          function assertReducerShape(reducers) {
            Object.keys(reducers).forEach(function(key) {
              var reducer = reducers[key];
              var initialState = reducer(undefined, {
                type: _createStore__WEBPACK_IMPORTED_MODULE_0__['ActionTypes'].INIT,
              });

              if (typeof initialState === 'undefined') {
                throw new Error(
                  'Reducer "' +
                    key +
                    '" returned undefined during initialization. ' +
                    'If the state passed to the reducer is undefined, you must ' +
                    'explicitly return the initial state. The initial state may ' +
                    "not be undefined. If you don't want to set a value for this reducer, " +
                    'you can use null instead of undefined.'
                );
              }

              var type =
                '@@redux/PROBE_UNKNOWN_ACTION_' +
                Math.random()
                  .toString(36)
                  .substring(7)
                  .split('')
                  .join('.');
              if (typeof reducer(undefined, {type: type}) === 'undefined') {
                throw new Error(
                  'Reducer "' +
                    key +
                    '" returned undefined when probed with a random type. ' +
                    ("Don't try to handle " +
                      _createStore__WEBPACK_IMPORTED_MODULE_0__['ActionTypes'].INIT +
                      ' or other actions in "redux/*" ') +
                    'namespace. They are considered private. Instead, you must return the ' +
                    'current state for any unknown actions, unless it is undefined, ' +
                    'in which case you must return the initial state, regardless of the ' +
                    'action type. The initial state may not be undefined, but can be null.'
                );
              }
            });
          }

          /**
           * Turns an object whose values are different reducer functions, into a single
           * reducer function. It will call every child reducer, and gather their results
           * into a single state object, whose keys correspond to the keys of the passed
           * reducer functions.
           *
           * @param {Object} reducers An object whose values correspond to different
           * reducer functions that need to be combined into one. One handy way to obtain
           * it is to use ES6 `import * as reducers` syntax. The reducers may never return
           * undefined for any action. Instead, they should return their initial state
           * if the state passed to them was undefined, and the current state for any
           * unrecognized action.
           *
           * @returns {Function} A reducer function that invokes every reducer inside the
           * passed object, and builds a state object with the same shape.
           */
          function combineReducers(reducers) {
            var reducerKeys = Object.keys(reducers);
            var finalReducers = {};
            for (var i = 0; i < reducerKeys.length; i++) {
              var key = reducerKeys[i];

              if (true) {
                if (typeof reducers[key] === 'undefined') {
                  Object(_utils_warning__WEBPACK_IMPORTED_MODULE_2__['default'])(
                    'No reducer provided for key "' + key + '"'
                  );
                }
              }

              if (typeof reducers[key] === 'function') {
                finalReducers[key] = reducers[key];
              }
            }
            var finalReducerKeys = Object.keys(finalReducers);

            var unexpectedKeyCache = void 0;
            if (true) {
              unexpectedKeyCache = {};
            }

            var shapeAssertionError = void 0;
            try {
              assertReducerShape(finalReducers);
            } catch (e) {
              shapeAssertionError = e;
            }

            return function combination() {
              var state =
                arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              var action = arguments[1];

              if (shapeAssertionError) {
                throw shapeAssertionError;
              }

              if (true) {
                var warningMessage = getUnexpectedStateShapeWarningMessage(
                  state,
                  finalReducers,
                  action,
                  unexpectedKeyCache
                );
                if (warningMessage) {
                  Object(_utils_warning__WEBPACK_IMPORTED_MODULE_2__['default'])(
                    warningMessage
                  );
                }
              }

              var hasChanged = false;
              var nextState = {};
              for (var _i = 0; _i < finalReducerKeys.length; _i++) {
                var _key = finalReducerKeys[_i];
                var reducer = finalReducers[_key];
                var previousStateForKey = state[_key];
                var nextStateForKey = reducer(previousStateForKey, action);
                if (typeof nextStateForKey === 'undefined') {
                  var errorMessage = getUndefinedStateErrorMessage(_key, action);
                  throw new Error(errorMessage);
                }
                nextState[_key] = nextStateForKey;
                hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
              }
              return hasChanged ? nextState : state;
            };
          }

          /***/
        },

      /***/ '../node_modules/redux/es/compose.js':
        /*!*******************************************!*\
  !*** ../node_modules/redux/es/compose.js ***!
  \*******************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function() {
              return compose;
            }
          );
          /**
           * Composes single-argument functions from right to left. The rightmost
           * function can take multiple arguments as it provides the signature for
           * the resulting composite function.
           *
           * @param {...Function} funcs The functions to compose.
           * @returns {Function} A function obtained by composing the argument functions
           * from right to left. For example, compose(f, g, h) is identical to doing
           * (...args) => f(g(h(...args))).
           */

          function compose() {
            for (
              var _len = arguments.length, funcs = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              funcs[_key] = arguments[_key];
            }

            if (funcs.length === 0) {
              return function(arg) {
                return arg;
              };
            }

            if (funcs.length === 1) {
              return funcs[0];
            }

            return funcs.reduce(function(a, b) {
              return function() {
                return a(b.apply(undefined, arguments));
              };
            });
          }

          /***/
        },

      /***/ '../node_modules/redux/es/createStore.js':
        /*!***********************************************!*\
  !*** ../node_modules/redux/es/createStore.js ***!
  \***********************************************/
        /*! exports provided: ActionTypes, default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'ActionTypes',
            function() {
              return ActionTypes;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function() {
              return createStore;
            }
          );
          /* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! lodash-es/isPlainObject */ '../node_modules/lodash-es/isPlainObject.js'
          );
          /* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! symbol-observable */ '../node_modules/symbol-observable/es/index.js'
          );

          /**
           * These are private action types reserved by Redux.
           * For any unknown actions, you must return the current state.
           * If the current state is undefined, you must return the initial state.
           * Do not reference these action types directly in your code.
           */
          var ActionTypes = {
            INIT: '@@redux/INIT',

            /**
             * Creates a Redux store that holds the state tree.
             * The only way to change the data in the store is to call `dispatch()` on it.
             *
             * There should only be a single store in your app. To specify how different
             * parts of the state tree respond to actions, you may combine several reducers
             * into a single reducer function by using `combineReducers`.
             *
             * @param {Function} reducer A function that returns the next state tree, given
             * the current state tree and the action to handle.
             *
             * @param {any} [preloadedState] The initial state. You may optionally specify it
             * to hydrate the state from the server in universal apps, or to restore a
             * previously serialized user session.
             * If you use `combineReducers` to produce the root reducer function, this must be
             * an object with the same shape as `combineReducers` keys.
             *
             * @param {Function} [enhancer] The store enhancer. You may optionally specify it
             * to enhance the store with third-party capabilities such as middleware,
             * time travel, persistence, etc. The only store enhancer that ships with Redux
             * is `applyMiddleware()`.
             *
             * @returns {Store} A Redux store that lets you read the state, dispatch actions
             * and subscribe to changes.
             */
          };
          function createStore(reducer, preloadedState, enhancer) {
            var _ref2;

            if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
              enhancer = preloadedState;
              preloadedState = undefined;
            }

            if (typeof enhancer !== 'undefined') {
              if (typeof enhancer !== 'function') {
                throw new Error('Expected the enhancer to be a function.');
              }

              return enhancer(createStore)(reducer, preloadedState);
            }

            if (typeof reducer !== 'function') {
              throw new Error('Expected the reducer to be a function.');
            }

            var currentReducer = reducer;
            var currentState = preloadedState;
            var currentListeners = [];
            var nextListeners = currentListeners;
            var isDispatching = false;

            function ensureCanMutateNextListeners() {
              if (nextListeners === currentListeners) {
                nextListeners = currentListeners.slice();
              }
            }

            /**
             * Reads the state tree managed by the store.
             *
             * @returns {any} The current state tree of your application.
             */
            function getState() {
              return currentState;
            }

            /**
             * Adds a change listener. It will be called any time an action is dispatched,
             * and some part of the state tree may potentially have changed. You may then
             * call `getState()` to read the current state tree inside the callback.
             *
             * You may call `dispatch()` from a change listener, with the following
             * caveats:
             *
             * 1. The subscriptions are snapshotted just before every `dispatch()` call.
             * If you subscribe or unsubscribe while the listeners are being invoked, this
             * will not have any effect on the `dispatch()` that is currently in progress.
             * However, the next `dispatch()` call, whether nested or not, will use a more
             * recent snapshot of the subscription list.
             *
             * 2. The listener should not expect to see all state changes, as the state
             * might have been updated multiple times during a nested `dispatch()` before
             * the listener is called. It is, however, guaranteed that all subscribers
             * registered before the `dispatch()` started will be called with the latest
             * state by the time it exits.
             *
             * @param {Function} listener A callback to be invoked on every dispatch.
             * @returns {Function} A function to remove this change listener.
             */
            function subscribe(listener) {
              if (typeof listener !== 'function') {
                throw new Error('Expected listener to be a function.');
              }

              var isSubscribed = true;

              ensureCanMutateNextListeners();
              nextListeners.push(listener);

              return function unsubscribe() {
                if (!isSubscribed) {
                  return;
                }

                isSubscribed = false;

                ensureCanMutateNextListeners();
                var index = nextListeners.indexOf(listener);
                nextListeners.splice(index, 1);
              };
            }

            /**
             * Dispatches an action. It is the only way to trigger a state change.
             *
             * The `reducer` function, used to create the store, will be called with the
             * current state tree and the given `action`. Its return value will
             * be considered the **next** state of the tree, and the change listeners
             * will be notified.
             *
             * The base implementation only supports plain object actions. If you want to
             * dispatch a Promise, an Observable, a thunk, or something else, you need to
             * wrap your store creating function into the corresponding middleware. For
             * example, see the documentation for the `redux-thunk` package. Even the
             * middleware will eventually dispatch plain object actions using this method.
             *
             * @param {Object} action A plain object representing “what changed”. It is
             * a good idea to keep actions serializable so you can record and replay user
             * sessions, or use the time travelling `redux-devtools`. An action must have
             * a `type` property which may not be `undefined`. It is a good idea to use
             * string constants for action types.
             *
             * @returns {Object} For convenience, the same action object you dispatched.
             *
             * Note that, if you use a custom middleware, it may wrap `dispatch()` to
             * return something else (for example, a Promise you can await).
             */
            function dispatch(action) {
              if (
                !Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_0__['default'])(
                  action
                )
              ) {
                throw new Error(
                  'Actions must be plain objects. ' +
                    'Use custom middleware for async actions.'
                );
              }

              if (typeof action.type === 'undefined') {
                throw new Error(
                  'Actions may not have an undefined "type" property. ' +
                    'Have you misspelled a constant?'
                );
              }

              if (isDispatching) {
                throw new Error('Reducers may not dispatch actions.');
              }

              try {
                isDispatching = true;
                currentState = currentReducer(currentState, action);
              } finally {
                isDispatching = false;
              }

              var listeners = (currentListeners = nextListeners);
              for (var i = 0; i < listeners.length; i++) {
                var listener = listeners[i];
                listener();
              }

              return action;
            }

            /**
             * Replaces the reducer currently used by the store to calculate the state.
             *
             * You might need this if your app implements code splitting and you want to
             * load some of the reducers dynamically. You might also need this if you
             * implement a hot reloading mechanism for Redux.
             *
             * @param {Function} nextReducer The reducer for the store to use instead.
             * @returns {void}
             */
            function replaceReducer(nextReducer) {
              if (typeof nextReducer !== 'function') {
                throw new Error('Expected the nextReducer to be a function.');
              }

              currentReducer = nextReducer;
              dispatch({type: ActionTypes.INIT});
            }

            /**
             * Interoperability point for observable/reactive libraries.
             * @returns {observable} A minimal observable of state changes.
             * For more information, see the observable proposal:
             * https://github.com/tc39/proposal-observable
             */
            function observable() {
              var _ref;

              var outerSubscribe = subscribe;
              return (
                (_ref = {
                  /**
                   * The minimal observable subscription method.
                   * @param {Object} observer Any object that can be used as an observer.
                   * The observer object should have a `next` method.
                   * @returns {subscription} An object with an `unsubscribe` method that can
                   * be used to unsubscribe the observable from the store, and prevent further
                   * emission of values from the observable.
                   */
                  subscribe: function subscribe(observer) {
                    if (typeof observer !== 'object') {
                      throw new TypeError('Expected the observer to be an object.');
                    }

                    function observeState() {
                      if (observer.next) {
                        observer.next(getState());
                      }
                    }

                    observeState();
                    var unsubscribe = outerSubscribe(observeState);
                    return {unsubscribe: unsubscribe};
                  },
                }),
                (_ref[
                  symbol_observable__WEBPACK_IMPORTED_MODULE_1__['default']
                ] = function() {
                  return this;
                }),
                _ref
              );
            }

            // When a store is created, an "INIT" action is dispatched so that every
            // reducer returns their initial state. This effectively populates
            // the initial state tree.
            dispatch({type: ActionTypes.INIT});

            return (
              (_ref2 = {
                dispatch: dispatch,
                subscribe: subscribe,
                getState: getState,
                replaceReducer: replaceReducer,
              }),
              (_ref2[
                symbol_observable__WEBPACK_IMPORTED_MODULE_1__['default']
              ] = observable),
              _ref2
            );
          }

          /***/
        },

      /***/ '../node_modules/redux/es/index.js':
        /*!*****************************************!*\
  !*** ../node_modules/redux/es/index.js ***!
  \*****************************************/
        /*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./createStore */ '../node_modules/redux/es/createStore.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'createStore',
            function() {
              return _createStore__WEBPACK_IMPORTED_MODULE_0__['default'];
            }
          );

          /* harmony import */ var _combineReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./combineReducers */ '../node_modules/redux/es/combineReducers.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'combineReducers',
            function() {
              return _combineReducers__WEBPACK_IMPORTED_MODULE_1__['default'];
            }
          );

          /* harmony import */ var _bindActionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./bindActionCreators */ '../node_modules/redux/es/bindActionCreators.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'bindActionCreators',
            function() {
              return _bindActionCreators__WEBPACK_IMPORTED_MODULE_2__['default'];
            }
          );

          /* harmony import */ var _applyMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./applyMiddleware */ '../node_modules/redux/es/applyMiddleware.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'applyMiddleware',
            function() {
              return _applyMiddleware__WEBPACK_IMPORTED_MODULE_3__['default'];
            }
          );

          /* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./compose */ '../node_modules/redux/es/compose.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'compose',
            function() {
              return _compose__WEBPACK_IMPORTED_MODULE_4__['default'];
            }
          );

          /* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./utils/warning */ '../node_modules/redux/es/utils/warning.js'
          );

          /*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
          function isCrushed() {}

          if (
            true &&
            typeof isCrushed.name === 'string' &&
            isCrushed.name !== 'isCrushed'
          ) {
            Object(_utils_warning__WEBPACK_IMPORTED_MODULE_5__['default'])(
              "You are currently using minified code outside of NODE_ENV === 'production'. " +
                'This means that you are running a slower development build of Redux. ' +
                'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' +
                'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' +
                'to ensure you have the correct code for your production build.'
            );
          }

          /***/
        },

      /***/ '../node_modules/redux/es/utils/warning.js':
        /*!*************************************************!*\
  !*** ../node_modules/redux/es/utils/warning.js ***!
  \*************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function() {
              return warning;
            }
          );
          /**
           * Prints a warning in the console if it exists.
           *
           * @param {String} message The warning message.
           * @returns {void}
           */
          function warning(message) {
            /* eslint-disable no-console */
            if (typeof console !== 'undefined' && typeof console.error === 'function') {
              console.error(message);
            }
            /* eslint-enable no-console */
            try {
              // This error was thrown as a convenience so that if you enable
              // "break on all exceptions" in your console,
              // it would pause the execution at this line.
              throw new Error(message);
              /* eslint-disable no-empty */
            } catch (e) {}
            /* eslint-enable no-empty */
          }

          /***/
        },

      /***/ '../node_modules/resolve-pathname/index.js':
        /*!*************************************************!*\
  !*** ../node_modules/resolve-pathname/index.js ***!
  \*************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          function isAbsolute(pathname) {
            return pathname.charAt(0) === '/';
          }

          // About 1.5x faster than the two-arg version of Array#splice()
          function spliceOne(list, index) {
            for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
              list[i] = list[k];
            }

            list.pop();
          }

          // This implementation is based heavily on node's url.parse
          function resolvePathname(to) {
            var from =
              arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            var toParts = (to && to.split('/')) || [];
            var fromParts = (from && from.split('/')) || [];

            var isToAbs = to && isAbsolute(to);
            var isFromAbs = from && isAbsolute(from);
            var mustEndAbs = isToAbs || isFromAbs;

            if (to && isAbsolute(to)) {
              // to is absolute
              fromParts = toParts;
            } else if (toParts.length) {
              // to is relative, drop the filename
              fromParts.pop();
              fromParts = fromParts.concat(toParts);
            }

            if (!fromParts.length) return '/';

            var hasTrailingSlash = void 0;
            if (fromParts.length) {
              var last = fromParts[fromParts.length - 1];
              hasTrailingSlash = last === '.' || last === '..' || last === '';
            } else {
              hasTrailingSlash = false;
            }

            var up = 0;
            for (var i = fromParts.length; i >= 0; i--) {
              var part = fromParts[i];

              if (part === '.') {
                spliceOne(fromParts, i);
              } else if (part === '..') {
                spliceOne(fromParts, i);
                up++;
              } else if (up) {
                spliceOne(fromParts, i);
                up--;
              }
            }

            if (!mustEndAbs)
              for (; up--; up) {
                fromParts.unshift('..');
              }
            if (
              mustEndAbs &&
              fromParts[0] !== '' &&
              (!fromParts[0] || !isAbsolute(fromParts[0]))
            )
              fromParts.unshift('');

            var result = fromParts.join('/');

            if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

            return result;
          }

          /* harmony default export */ __webpack_exports__['default'] = resolvePathname;

          /***/
        },

      /***/ '../node_modules/style-loader/lib/addStyles.js':
        /*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

          var stylesInDom = {};

          var memoize = function(fn) {
            var memo;

            return function() {
              if (typeof memo === 'undefined') memo = fn.apply(this, arguments);
              return memo;
            };
          };

          var isOldIE = memoize(function() {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            return window && document && document.all && !window.atob;
          });

          var getTarget = function(target) {
            return document.querySelector(target);
          };

          var getElement = (function(fn) {
            var memo = {};

            return function(target) {
              // If passing function in options, then use it for resolve "head" element.
              // Useful for Shadow Root style i.e
              // {
              //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
              // }
              if (typeof target === 'function') {
                return target();
              }
              if (typeof memo[target] === 'undefined') {
                var styleTarget = getTarget.call(this, target);
                // Special case to return head of iframe instead of iframe itself
                if (
                  window.HTMLIFrameElement &&
                  styleTarget instanceof window.HTMLIFrameElement
                ) {
                  try {
                    // This will throw an exception if access to iframe is blocked
                    // due to cross-origin restrictions
                    styleTarget = styleTarget.contentDocument.head;
                  } catch (e) {
                    styleTarget = null;
                  }
                }
                memo[target] = styleTarget;
              }
              return memo[target];
            };
          })();

          var singleton = null;
          var singletonCounter = 0;
          var stylesInsertedAtTop = [];

          var fixUrls = __webpack_require__(
            /*! ./urls */ '../node_modules/style-loader/lib/urls.js'
          );

          module.exports = function(list, options) {
            if (typeof DEBUG !== 'undefined' && DEBUG) {
              if (typeof document !== 'object')
                throw new Error(
                  'The style-loader cannot be used in a non-browser environment'
                );
            }

            options = options || {};

            options.attrs = typeof options.attrs === 'object' ? options.attrs : {};

            // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
            // tags it will allow on a page
            if (!options.singleton && typeof options.singleton !== 'boolean')
              options.singleton = isOldIE();

            // By default, add <style> tags to the <head> element
            if (!options.insertInto) options.insertInto = 'head';

            // By default, add <style> tags to the bottom of the target
            if (!options.insertAt) options.insertAt = 'bottom';

            var styles = listToStyles(list, options);

            addStylesToDom(styles, options);

            return function update(newList) {
              var mayRemove = [];

              for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];

                domStyle.refs--;
                mayRemove.push(domStyle);
              }

              if (newList) {
                var newStyles = listToStyles(newList, options);
                addStylesToDom(newStyles, options);
              }

              for (var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];

                if (domStyle.refs === 0) {
                  for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

                  delete stylesInDom[domStyle.id];
                }
              }
            };
          };

          function addStylesToDom(styles, options) {
            for (var i = 0; i < styles.length; i++) {
              var item = styles[i];
              var domStyle = stylesInDom[item.id];

              if (domStyle) {
                domStyle.refs++;

                for (var j = 0; j < domStyle.parts.length; j++) {
                  domStyle.parts[j](item.parts[j]);
                }

                for (; j < item.parts.length; j++) {
                  domStyle.parts.push(addStyle(item.parts[j], options));
                }
              } else {
                var parts = [];

                for (var j = 0; j < item.parts.length; j++) {
                  parts.push(addStyle(item.parts[j], options));
                }

                stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
              }
            }
          }

          function listToStyles(list, options) {
            var styles = [];
            var newStyles = {};

            for (var i = 0; i < list.length; i++) {
              var item = list[i];
              var id = options.base ? item[0] + options.base : item[0];
              var css = item[1];
              var media = item[2];
              var sourceMap = item[3];
              var part = {css: css, media: media, sourceMap: sourceMap};

              if (!newStyles[id]) styles.push((newStyles[id] = {id: id, parts: [part]}));
              else newStyles[id].parts.push(part);
            }

            return styles;
          }

          function insertStyleElement(options, style) {
            var target = getElement(options.insertInto);

            if (!target) {
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
              );
            }

            var lastStyleElementInsertedAtTop =
              stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

            if (options.insertAt === 'top') {
              if (!lastStyleElementInsertedAtTop) {
                target.insertBefore(style, target.firstChild);
              } else if (lastStyleElementInsertedAtTop.nextSibling) {
                target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
              } else {
                target.appendChild(style);
              }
              stylesInsertedAtTop.push(style);
            } else if (options.insertAt === 'bottom') {
              target.appendChild(style);
            } else if (typeof options.insertAt === 'object' && options.insertAt.before) {
              var nextSibling = getElement(
                options.insertInto + ' ' + options.insertAt.before
              );
              target.insertBefore(style, nextSibling);
            } else {
              throw new Error(
                "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
              );
            }
          }

          function removeStyleElement(style) {
            if (style.parentNode === null) return false;
            style.parentNode.removeChild(style);

            var idx = stylesInsertedAtTop.indexOf(style);
            if (idx >= 0) {
              stylesInsertedAtTop.splice(idx, 1);
            }
          }

          function createStyleElement(options) {
            var style = document.createElement('style');

            if (options.attrs.type === undefined) {
              options.attrs.type = 'text/css';
            }

            addAttrs(style, options.attrs);
            insertStyleElement(options, style);

            return style;
          }

          function createLinkElement(options) {
            var link = document.createElement('link');

            if (options.attrs.type === undefined) {
              options.attrs.type = 'text/css';
            }
            options.attrs.rel = 'stylesheet';

            addAttrs(link, options.attrs);
            insertStyleElement(options, link);

            return link;
          }

          function addAttrs(el, attrs) {
            Object.keys(attrs).forEach(function(key) {
              el.setAttribute(key, attrs[key]);
            });
          }

          function addStyle(obj, options) {
            var style, update, remove, result;

            // If a transform function was defined, run it on the css
            if (options.transform && obj.css) {
              result = options.transform(obj.css);

              if (result) {
                // If transform returns a value, use that instead of the original css.
                // This allows running runtime transformations on the css.
                obj.css = result;
              } else {
                // If the transform function returns a falsy value, don't add this css.
                // This allows conditional loading of css
                return function() {
                  // noop
                };
              }
            }

            if (options.singleton) {
              var styleIndex = singletonCounter++;

              style = singleton || (singleton = createStyleElement(options));

              update = applyToSingletonTag.bind(null, style, styleIndex, false);
              remove = applyToSingletonTag.bind(null, style, styleIndex, true);
            } else if (
              obj.sourceMap &&
              typeof URL === 'function' &&
              typeof URL.createObjectURL === 'function' &&
              typeof URL.revokeObjectURL === 'function' &&
              typeof Blob === 'function' &&
              typeof btoa === 'function'
            ) {
              style = createLinkElement(options);
              update = updateLink.bind(null, style, options);
              remove = function() {
                removeStyleElement(style);

                if (style.href) URL.revokeObjectURL(style.href);
              };
            } else {
              style = createStyleElement(options);
              update = applyToTag.bind(null, style);
              remove = function() {
                removeStyleElement(style);
              };
            }

            update(obj);

            return function updateStyle(newObj) {
              if (newObj) {
                if (
                  newObj.css === obj.css &&
                  newObj.media === obj.media &&
                  newObj.sourceMap === obj.sourceMap
                ) {
                  return;
                }

                update((obj = newObj));
              } else {
                remove();
              }
            };
          }

          var replaceText = (function() {
            var textStore = [];

            return function(index, replacement) {
              textStore[index] = replacement;

              return textStore.filter(Boolean).join('\n');
            };
          })();

          function applyToSingletonTag(style, index, remove, obj) {
            var css = remove ? '' : obj.css;

            if (style.styleSheet) {
              style.styleSheet.cssText = replaceText(index, css);
            } else {
              var cssNode = document.createTextNode(css);
              var childNodes = style.childNodes;

              if (childNodes[index]) style.removeChild(childNodes[index]);

              if (childNodes.length) {
                style.insertBefore(cssNode, childNodes[index]);
              } else {
                style.appendChild(cssNode);
              }
            }
          }

          function applyToTag(style, obj) {
            var css = obj.css;
            var media = obj.media;

            if (media) {
              style.setAttribute('media', media);
            }

            if (style.styleSheet) {
              style.styleSheet.cssText = css;
            } else {
              while (style.firstChild) {
                style.removeChild(style.firstChild);
              }

              style.appendChild(document.createTextNode(css));
            }
          }

          function updateLink(link, options, obj) {
            var css = obj.css;
            var sourceMap = obj.sourceMap;

            /*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
            var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

            if (options.convertToAbsoluteUrls || autoFixUrls) {
              css = fixUrls(css);
            }

            if (sourceMap) {
              // http://stackoverflow.com/a/26603875
              css +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) +
                ' */';
            }

            var blob = new Blob([css], {type: 'text/css'});

            var oldSrc = link.href;

            link.href = URL.createObjectURL(blob);

            if (oldSrc) URL.revokeObjectURL(oldSrc);
          }

          /***/
        },

      /***/ '../node_modules/style-loader/lib/urls.js':
        /*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          /**
           * When source maps are enabled, `style-loader` uses a link element with a data-uri to
           * embed the css on the page. This breaks all relative urls because now they are relative to a
           * bundle instead of the current page.
           *
           * One solution is to only use full urls, but that may be impossible.
           *
           * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
           *
           * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
           *
           */

          module.exports = function(css) {
            // get current location
            var location = typeof window !== 'undefined' && window.location;

            if (!location) {
              throw new Error('fixUrls requires window.location');
            }

            // blank or null?
            if (!css || typeof css !== 'string') {
              return css;
            }

            var baseUrl = location.protocol + '//' + location.host;
            var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, '/');

            // convert each url(...)
            /*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
            var fixedCss = css.replace(
              /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
              function(fullMatch, origUrl) {
                // strip quotes (if they exist)
                var unquotedOrigUrl = origUrl
                  .trim()
                  .replace(/^"(.*)"$/, function(o, $1) {
                    return $1;
                  })
                  .replace(/^'(.*)'$/, function(o, $1) {
                    return $1;
                  });

                // already a full url? no change
                if (
                  /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                    unquotedOrigUrl
                  )
                ) {
                  return fullMatch;
                }

                // convert the url to a full url
                var newUrl;

                if (unquotedOrigUrl.indexOf('//') === 0) {
                  //TODO: should we add protocol?
                  newUrl = unquotedOrigUrl;
                } else if (unquotedOrigUrl.indexOf('/') === 0) {
                  // path should be relative to the base url
                  newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
                } else {
                  // path should be relative to current directory
                  newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ''); // Strip leading './'
                }

                // send back the fixed url(...)
                return 'url(' + JSON.stringify(newUrl) + ')';
              }
            );

            // send back the fixed css
            return fixedCss;
          };

          /***/
        },

      /***/ '../node_modules/symbol-observable/es/index.js':
        /*!*****************************************************!*\
  !*** ../node_modules/symbol-observable/es/index.js ***!
  \*****************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* WEBPACK VAR INJECTION */ (function(global, module) {
            /* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! ./ponyfill.js */ '../node_modules/symbol-observable/es/ponyfill.js'
            );
            /* global window */

            var root;

            if (typeof self !== 'undefined') {
              root = self;
            } else if (typeof window !== 'undefined') {
              root = window;
            } else if (typeof global !== 'undefined') {
              root = global;
            } else if (true) {
              root = module;
            } else {
            }

            var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__['default'])(
              root
            );
            /* harmony default export */ __webpack_exports__['default'] = result;

            /* WEBPACK VAR INJECTION */
          }.call(
            this,
            __webpack_require__(
              /*! ./../../webpack/buildin/global.js */ '../node_modules/webpack/buildin/global.js'
            ),
            __webpack_require__(
              /*! ./../../webpack/buildin/harmony-module.js */ '../node_modules/webpack/buildin/harmony-module.js'
            )(module)
          ));

          /***/
        },

      /***/ '../node_modules/symbol-observable/es/ponyfill.js':
        /*!********************************************************!*\
  !*** ../node_modules/symbol-observable/es/ponyfill.js ***!
  \********************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'default',
            function() {
              return symbolObservablePonyfill;
            }
          );
          function symbolObservablePonyfill(root) {
            var result;
            var Symbol = root.Symbol;

            if (typeof Symbol === 'function') {
              if (Symbol.observable) {
                result = Symbol.observable;
              } else {
                result = Symbol('observable');
                Symbol.observable = result;
              }
            } else {
              result = '@@observable';
            }

            return result;
          }

          /***/
        },

      /***/ '../node_modules/value-equal/index.js':
        /*!********************************************!*\
  !*** ../node_modules/value-equal/index.js ***!
  \********************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          var _typeof =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function(obj) {
                  return typeof obj;
                }
              : function(obj) {
                  return obj &&
                    typeof Symbol === 'function' &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
                };

          function valueEqual(a, b) {
            if (a === b) return true;

            if (a == null || b == null) return false;

            if (Array.isArray(a)) {
              return (
                Array.isArray(b) &&
                a.length === b.length &&
                a.every(function(item, index) {
                  return valueEqual(item, b[index]);
                })
              );
            }

            var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
            var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

            if (aType !== bType) return false;

            if (aType === 'object') {
              var aValue = a.valueOf();
              var bValue = b.valueOf();

              if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

              var aKeys = Object.keys(a);
              var bKeys = Object.keys(b);

              if (aKeys.length !== bKeys.length) return false;

              return aKeys.every(function(key) {
                return valueEqual(a[key], b[key]);
              });
            }

            return false;
          }

          /* harmony default export */ __webpack_exports__['default'] = valueEqual;

          /***/
        },

      /***/ '../node_modules/warning/warning.js':
        /*!******************************************!*\
  !*** ../node_modules/warning/warning.js ***!
  \******************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';
          /**
           * Copyright (c) 2014-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */

          /**
           * Similar to invariant but only logs a warning if the condition is not met.
           * This can be used to log issues in development environments in critical
           * paths. Removing the logging code for production environments will keep the
           * same logic and follow the same code paths.
           */

          var __DEV__ = 'development' !== 'production';

          var warning = function() {};

          if (__DEV__) {
            var printWarning = function printWarning(format, args) {
              var len = arguments.length;
              args = new Array(len > 2 ? len - 2 : 0);
              for (var key = 2; key < len; key++) {
                args[key - 2] = arguments[key];
              }
              var argIndex = 0;
              var message =
                'Warning: ' +
                format.replace(/%s/g, function() {
                  return args[argIndex++];
                });
              if (typeof console !== 'undefined') {
                console.error(message);
              }
              try {
                // --- Welcome to debugging React ---
                // This error was thrown as a convenience so that you can use this stack
                // to find the callsite that caused this warning to fire.
                throw new Error(message);
              } catch (x) {}
            };

            warning = function(condition, format, args) {
              var len = arguments.length;
              args = new Array(len > 2 ? len - 2 : 0);
              for (var key = 2; key < len; key++) {
                args[key - 2] = arguments[key];
              }
              if (format === undefined) {
                throw new Error(
                  '`warning(condition, format, ...args)` requires a warning ' +
                    'message argument'
                );
              }
              if (!condition) {
                printWarning.apply(null, [format].concat(args));
              }
            };
          }

          module.exports = warning;

          /***/
        },

      /***/ '../node_modules/webpack/buildin/global.js':
        /*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          var g;

          // This works in non-strict mode
          g = (function() {
            return this;
          })();

          try {
            // This works if eval is allowed (see CSP)
            g = g || new Function('return this')();
          } catch (e) {
            // This works if the window reference is available
            if (typeof window === 'object') g = window;
          }

          // g can still be undefined, but nothing to do about it...
          // We return undefined, instead of nothing here, so it's
          // easier to handle this case. if(!global) { ...}

          module.exports = g;

          /***/
        },

      /***/ '../node_modules/webpack/buildin/harmony-module.js':
        /*!*********************************************************!*\
  !*** ../node_modules/webpack/buildin/harmony-module.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = function(originalModule) {
            if (!originalModule.webpackPolyfill) {
              var module = Object.create(originalModule);
              // module.parent = undefined by default
              if (!module.children) module.children = [];
              Object.defineProperty(module, 'loaded', {
                enumerable: true,
                get: function() {
                  return module.l;
                },
              });
              Object.defineProperty(module, 'id', {
                enumerable: true,
                get: function() {
                  return module.i;
                },
              });
              Object.defineProperty(module, 'exports', {
                enumerable: true,
              });
              module.webpackPolyfill = 1;
            }
            return module;
          };

          /***/
        },

      /***/ '../node_modules/whatwg-fetch/fetch.js':
        /*!*********************************************!*\
  !*** ../node_modules/whatwg-fetch/fetch.js ***!
  \*********************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          (function(self) {
            'use strict';

            if (self.fetch) {
              return;
            }

            var support = {
              searchParams: 'URLSearchParams' in self,
              iterable: 'Symbol' in self && 'iterator' in Symbol,
              blob:
                'FileReader' in self &&
                'Blob' in self &&
                (function() {
                  try {
                    new Blob();
                    return true;
                  } catch (e) {
                    return false;
                  }
                })(),
              formData: 'FormData' in self,
              arrayBuffer: 'ArrayBuffer' in self,
            };

            if (support.arrayBuffer) {
              var viewClasses = [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]',
              ];

              var isDataView = function(obj) {
                return obj && DataView.prototype.isPrototypeOf(obj);
              };

              var isArrayBufferView =
                ArrayBuffer.isView ||
                function(obj) {
                  return (
                    obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
                  );
                };
            }

            function normalizeName(name) {
              if (typeof name !== 'string') {
                name = String(name);
              }
              if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
                throw new TypeError('Invalid character in header field name');
              }
              return name.toLowerCase();
            }

            function normalizeValue(value) {
              if (typeof value !== 'string') {
                value = String(value);
              }
              return value;
            }

            // Build a destructive iterator for the value list
            function iteratorFor(items) {
              var iterator = {
                next: function() {
                  var value = items.shift();
                  return {done: value === undefined, value: value};
                },
              };

              if (support.iterable) {
                iterator[Symbol.iterator] = function() {
                  return iterator;
                };
              }

              return iterator;
            }

            function Headers(headers) {
              this.map = {};

              if (headers instanceof Headers) {
                headers.forEach(function(value, name) {
                  this.append(name, value);
                }, this);
              } else if (Array.isArray(headers)) {
                headers.forEach(function(header) {
                  this.append(header[0], header[1]);
                }, this);
              } else if (headers) {
                Object.getOwnPropertyNames(headers).forEach(function(name) {
                  this.append(name, headers[name]);
                }, this);
              }
            }

            Headers.prototype.append = function(name, value) {
              name = normalizeName(name);
              value = normalizeValue(value);
              var oldValue = this.map[name];
              this.map[name] = oldValue ? oldValue + ',' + value : value;
            };

            Headers.prototype['delete'] = function(name) {
              delete this.map[normalizeName(name)];
            };

            Headers.prototype.get = function(name) {
              name = normalizeName(name);
              return this.has(name) ? this.map[name] : null;
            };

            Headers.prototype.has = function(name) {
              return this.map.hasOwnProperty(normalizeName(name));
            };

            Headers.prototype.set = function(name, value) {
              this.map[normalizeName(name)] = normalizeValue(value);
            };

            Headers.prototype.forEach = function(callback, thisArg) {
              for (var name in this.map) {
                if (this.map.hasOwnProperty(name)) {
                  callback.call(thisArg, this.map[name], name, this);
                }
              }
            };

            Headers.prototype.keys = function() {
              var items = [];
              this.forEach(function(value, name) {
                items.push(name);
              });
              return iteratorFor(items);
            };

            Headers.prototype.values = function() {
              var items = [];
              this.forEach(function(value) {
                items.push(value);
              });
              return iteratorFor(items);
            };

            Headers.prototype.entries = function() {
              var items = [];
              this.forEach(function(value, name) {
                items.push([name, value]);
              });
              return iteratorFor(items);
            };

            if (support.iterable) {
              Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
            }

            function consumed(body) {
              if (body.bodyUsed) {
                return Promise.reject(new TypeError('Already read'));
              }
              body.bodyUsed = true;
            }

            function fileReaderReady(reader) {
              return new Promise(function(resolve, reject) {
                reader.onload = function() {
                  resolve(reader.result);
                };
                reader.onerror = function() {
                  reject(reader.error);
                };
              });
            }

            function readBlobAsArrayBuffer(blob) {
              var reader = new FileReader();
              var promise = fileReaderReady(reader);
              reader.readAsArrayBuffer(blob);
              return promise;
            }

            function readBlobAsText(blob) {
              var reader = new FileReader();
              var promise = fileReaderReady(reader);
              reader.readAsText(blob);
              return promise;
            }

            function readArrayBufferAsText(buf) {
              var view = new Uint8Array(buf);
              var chars = new Array(view.length);

              for (var i = 0; i < view.length; i++) {
                chars[i] = String.fromCharCode(view[i]);
              }
              return chars.join('');
            }

            function bufferClone(buf) {
              if (buf.slice) {
                return buf.slice(0);
              } else {
                var view = new Uint8Array(buf.byteLength);
                view.set(new Uint8Array(buf));
                return view.buffer;
              }
            }

            function Body() {
              this.bodyUsed = false;

              this._initBody = function(body) {
                this._bodyInit = body;
                if (!body) {
                  this._bodyText = '';
                } else if (typeof body === 'string') {
                  this._bodyText = body;
                } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                  this._bodyBlob = body;
                } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                  this._bodyFormData = body;
                } else if (
                  support.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(body)
                ) {
                  this._bodyText = body.toString();
                } else if (support.arrayBuffer && support.blob && isDataView(body)) {
                  this._bodyArrayBuffer = bufferClone(body.buffer);
                  // IE 10-11 can't handle a DataView body.
                  this._bodyInit = new Blob([this._bodyArrayBuffer]);
                } else if (
                  support.arrayBuffer &&
                  (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))
                ) {
                  this._bodyArrayBuffer = bufferClone(body);
                } else {
                  throw new Error('unsupported BodyInit type');
                }

                if (!this.headers.get('content-type')) {
                  if (typeof body === 'string') {
                    this.headers.set('content-type', 'text/plain;charset=UTF-8');
                  } else if (this._bodyBlob && this._bodyBlob.type) {
                    this.headers.set('content-type', this._bodyBlob.type);
                  } else if (
                    support.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(body)
                  ) {
                    this.headers.set(
                      'content-type',
                      'application/x-www-form-urlencoded;charset=UTF-8'
                    );
                  }
                }
              };

              if (support.blob) {
                this.blob = function() {
                  var rejected = consumed(this);
                  if (rejected) {
                    return rejected;
                  }

                  if (this._bodyBlob) {
                    return Promise.resolve(this._bodyBlob);
                  } else if (this._bodyArrayBuffer) {
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  } else if (this._bodyFormData) {
                    throw new Error('could not read FormData body as blob');
                  } else {
                    return Promise.resolve(new Blob([this._bodyText]));
                  }
                };

                this.arrayBuffer = function() {
                  if (this._bodyArrayBuffer) {
                    return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                  } else {
                    return this.blob().then(readBlobAsArrayBuffer);
                  }
                };
              }

              this.text = function() {
                var rejected = consumed(this);
                if (rejected) {
                  return rejected;
                }

                if (this._bodyBlob) {
                  return readBlobAsText(this._bodyBlob);
                } else if (this._bodyArrayBuffer) {
                  return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
                } else if (this._bodyFormData) {
                  throw new Error('could not read FormData body as text');
                } else {
                  return Promise.resolve(this._bodyText);
                }
              };

              if (support.formData) {
                this.formData = function() {
                  return this.text().then(decode);
                };
              }

              this.json = function() {
                return this.text().then(JSON.parse);
              };

              return this;
            }

            // HTTP methods whose capitalization should be normalized
            var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

            function normalizeMethod(method) {
              var upcased = method.toUpperCase();
              return methods.indexOf(upcased) > -1 ? upcased : method;
            }

            function Request(input, options) {
              options = options || {};
              var body = options.body;

              if (input instanceof Request) {
                if (input.bodyUsed) {
                  throw new TypeError('Already read');
                }
                this.url = input.url;
                this.credentials = input.credentials;
                if (!options.headers) {
                  this.headers = new Headers(input.headers);
                }
                this.method = input.method;
                this.mode = input.mode;
                if (!body && input._bodyInit != null) {
                  body = input._bodyInit;
                  input.bodyUsed = true;
                }
              } else {
                this.url = String(input);
              }

              this.credentials = options.credentials || this.credentials || 'omit';
              if (options.headers || !this.headers) {
                this.headers = new Headers(options.headers);
              }
              this.method = normalizeMethod(options.method || this.method || 'GET');
              this.mode = options.mode || this.mode || null;
              this.referrer = null;

              if ((this.method === 'GET' || this.method === 'HEAD') && body) {
                throw new TypeError('Body not allowed for GET or HEAD requests');
              }
              this._initBody(body);
            }

            Request.prototype.clone = function() {
              return new Request(this, {body: this._bodyInit});
            };

            function decode(body) {
              var form = new FormData();
              body
                .trim()
                .split('&')
                .forEach(function(bytes) {
                  if (bytes) {
                    var split = bytes.split('=');
                    var name = split.shift().replace(/\+/g, ' ');
                    var value = split.join('=').replace(/\+/g, ' ');
                    form.append(decodeURIComponent(name), decodeURIComponent(value));
                  }
                });
              return form;
            }

            function parseHeaders(rawHeaders) {
              var headers = new Headers();
              // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
              // https://tools.ietf.org/html/rfc7230#section-3.2
              var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
              preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
                var parts = line.split(':');
                var key = parts.shift().trim();
                if (key) {
                  var value = parts.join(':').trim();
                  headers.append(key, value);
                }
              });
              return headers;
            }

            Body.call(Request.prototype);

            function Response(bodyInit, options) {
              if (!options) {
                options = {};
              }

              this.type = 'default';
              this.status = options.status === undefined ? 200 : options.status;
              this.ok = this.status >= 200 && this.status < 300;
              this.statusText = 'statusText' in options ? options.statusText : 'OK';
              this.headers = new Headers(options.headers);
              this.url = options.url || '';
              this._initBody(bodyInit);
            }

            Body.call(Response.prototype);

            Response.prototype.clone = function() {
              return new Response(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new Headers(this.headers),
                url: this.url,
              });
            };

            Response.error = function() {
              var response = new Response(null, {status: 0, statusText: ''});
              response.type = 'error';
              return response;
            };

            var redirectStatuses = [301, 302, 303, 307, 308];

            Response.redirect = function(url, status) {
              if (redirectStatuses.indexOf(status) === -1) {
                throw new RangeError('Invalid status code');
              }

              return new Response(null, {status: status, headers: {location: url}});
            };

            self.Headers = Headers;
            self.Request = Request;
            self.Response = Response;

            self.fetch = function(input, init) {
              return new Promise(function(resolve, reject) {
                var request = new Request(input, init);
                var xhr = new XMLHttpRequest();

                xhr.onload = function() {
                  var options = {
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: parseHeaders(xhr.getAllResponseHeaders() || ''),
                  };
                  options.url =
                    'responseURL' in xhr
                      ? xhr.responseURL
                      : options.headers.get('X-Request-URL');
                  var body = 'response' in xhr ? xhr.response : xhr.responseText;
                  resolve(new Response(body, options));
                };

                xhr.onerror = function() {
                  reject(new TypeError('Network request failed'));
                };

                xhr.ontimeout = function() {
                  reject(new TypeError('Network request failed'));
                };

                xhr.open(request.method, request.url, true);

                if (request.credentials === 'include') {
                  xhr.withCredentials = true;
                } else if (request.credentials === 'omit') {
                  xhr.withCredentials = false;
                }

                if ('responseType' in xhr && support.blob) {
                  xhr.responseType = 'blob';
                }

                request.headers.forEach(function(value, name) {
                  xhr.setRequestHeader(name, value);
                });

                xhr.send(
                  typeof request._bodyInit === 'undefined' ? null : request._bodyInit
                );
              });
            };
            self.fetch.polyfill = true;
          })(typeof self !== 'undefined' ? self : this);

          /***/
        },

      /***/ './components/withLoadingHandler.tsx':
        /*!*******************************************!*\
  !*** ./components/withLoadingHandler.tsx ***!
  \*******************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var __assign =
            (undefined && undefined.__assign) ||
            Object.assign ||
            function(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) {
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
              }
              return t;
            };
          Object.defineProperty(exports, '__esModule', {value: true});
          var React = __webpack_require__(/*! react */ 'react');
          var withLoadingHandler = function withLoadingHandler(TheComponent) {
            var LoadingHandlerWrapper = function LoadingHandlerWrapper(props) {
              return props.data.loading
                ? React.createElement('h1', null, 'Loading')
                : React.createElement(TheComponent, __assign({}, props));
            };
            return LoadingHandlerWrapper;
          };
          exports.default = withLoadingHandler;

          /***/
        },

      /***/ './createGraphQLClient.tsx':
        /*!*********************************!*\
  !*** ./createGraphQLClient.tsx ***!
  \*********************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {value: true});
          var react_apollo_1 = __webpack_require__(
            /*! react-apollo */ '../node_modules/react-apollo/react-apollo.browser.umd.js'
          );
          // 	http://dev.apollodata.com/react/initialization.html#creating-client
          exports.createGraphQLClient = function() {
            var networkInterface = react_apollo_1.createNetworkInterface({
              uri: 'http://localhost:8080/graphql',
            });
            var client = new react_apollo_1.ApolloClient({
              networkInterface: networkInterface,
            });
            return client;
          };

          /***/
        },

      /***/ './css/dark.css':
        /*!**********************!*\
  !*** ./css/dark.css ***!
  \**********************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var content = __webpack_require__(
            /*! !../../node_modules/css-loader??ref--6-1!./dark.css */ '../node_modules/css-loader/index.js?!./css/dark.css'
          );

          if (typeof content === 'string') content = [[module.i, content, '']];

          var transform;
          var insertInto;

          var options = {hmr: true};

          options.transform = transform;
          options.insertInto = undefined;

          var update = __webpack_require__(
            /*! ../../node_modules/style-loader/lib/addStyles.js */ '../node_modules/style-loader/lib/addStyles.js'
          )(content, options);

          if (content.locals) module.exports = content.locals;

          if (false) {
          }

          /***/
        },

      /***/ './domain/admission/AdmissionEnquiryPage/AdmissionEnquiryPage.tsx':
        /*!************************************************************************!*\
  !*** ./domain/admission/AdmissionEnquiryPage/AdmissionEnquiryPage.tsx ***!
  \************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {value: true});
          var React = __webpack_require__(/*! react */ 'react');
          var react_apollo_1 = __webpack_require__(
            /*! react-apollo */ '../node_modules/react-apollo/react-apollo.browser.umd.js'
          );
          var AdmissionEnquiryQueryGql = __webpack_require__(
            /*! ./AdmissionEnquiryQuery.graphql */ './domain/admission/AdmissionEnquiryPage/AdmissionEnquiryQuery.graphql'
          );
          var withLoadingHandler_1 = __webpack_require__(
            /*! ../../../components/withLoadingHandler */ './components/withLoadingHandler.tsx'
          );
          var w180 = {
            width: '180px',
            marginRight: '10px',
          };
          var AdmissionRow = function AdmissionRow(_a) {
            var admission = _a.admission;
            return React.createElement(
              'tr',
              {key: admission.id},
              React.createElement('td', null, admission.studentName),
              React.createElement('td', null, admission.status),
              React.createElement('td', null, admission.studentName),
              React.createElement('td', null, admission.mobileNumber),
              React.createElement('td', null, admission.status),
              React.createElement('td', null, admission.enquiryDate),
              React.createElement('td', null, admission.enquiryDate)
            );
          };
          var AdmissionsTable = function AdmissionsTable(_a) {
            var admissions = _a.admissions;
            return React.createElement(
              'section',
              {className: 'border'},
              React.createElement(
                'div',
                {className: 'inDashboard p-1'},
                React.createElement(
                  'div',
                  {className: 'invoiceDashboard'},
                  React.createElement(
                    'div',
                    {className: 'invoiceHeader'},
                    React.createElement('h6', {className: 'center'}, 'Total Enquiry'),
                    React.createElement(
                      'a',
                      {href: ''},
                      React.createElement('span', {className: 'ti-close m-r-1'})
                    ),
                    React.createElement(
                      'a',
                      {href: ''},
                      React.createElement('span', {className: 'ti-download'})
                    )
                  ),
                  React.createElement(
                    'h2',
                    {className: 'fee-red'},
                    React.createElement('strong', null, '20')
                  ),
                  React.createElement(
                    'h6',
                    {className: 'btn btn-primary w50 p05 remainder'},
                    'View Info'
                  )
                ),
                React.createElement(
                  'div',
                  {className: 'invoiceDashboard'},
                  React.createElement(
                    'div',
                    {className: 'invoiceHeader'},
                    React.createElement('h6', {className: 'center'}, 'Follow Up'),
                    React.createElement(
                      'a',
                      {href: ''},
                      React.createElement('span', {className: 'ti-close m-r-1'})
                    ),
                    React.createElement(
                      'a',
                      {href: ''},
                      React.createElement('span', {className: 'ti-download'})
                    )
                  ),
                  React.createElement(
                    'h2',
                    {className: 'fee-red'},
                    React.createElement('strong', null, '15')
                  ),
                  React.createElement(
                    'h6',
                    {className: 'btn btn-primary w50 p05 remainder'},
                    'View Info'
                  )
                ),
                React.createElement(
                  'div',
                  {className: 'invoiceDashboard'},
                  React.createElement(
                    'div',
                    {className: 'invoiceHeader'},
                    React.createElement('h6', {className: 'center'}, 'Declined'),
                    React.createElement(
                      'a',
                      {href: ''},
                      React.createElement('span', {className: 'ti-close m-r-1 '})
                    ),
                    React.createElement(
                      'a',
                      {href: ''},
                      React.createElement('span', {className: 'ti-download'})
                    )
                  ),
                  React.createElement(
                    'h2',
                    {className: 'fee-orange'},
                    React.createElement('strong', null, '20')
                  ),
                  React.createElement(
                    'h6',
                    {className: 'center btn btn-primary w50 p05 remainder'},
                    'View Info'
                  )
                ),
                React.createElement(
                  'div',
                  {className: 'invoiceDashboard'},
                  React.createElement(
                    'div',
                    {className: 'invoiceHeader'},
                    React.createElement('h6', {className: 'center'}, 'Converted'),
                    React.createElement(
                      'a',
                      {href: ''},
                      React.createElement('span', {className: 'ti-close m-r-1'})
                    ),
                    React.createElement(
                      'a',
                      {href: ''},
                      React.createElement('span', {className: 'ti-download'})
                    )
                  ),
                  React.createElement(
                    'h2',
                    {className: 'fee-red'},
                    React.createElement('strong', null, '5')
                  ),
                  React.createElement(
                    'h6',
                    {className: 'btn btn-primary w50 p05 remainder'},
                    'View Info'
                  )
                )
              ),
              React.createElement(
                'h5',
                {className: 'bg-heading p-1 m-0'},
                'Received Info'
              ),
              React.createElement(
                'table',
                {className: 'adminListPage striped-table fwidth bg-white p-2'},
                React.createElement(
                  'thead',
                  null,
                  React.createElement(
                    'tr',
                    null,
                    React.createElement('th', null, 'S.No'),
                    React.createElement('th', null, 'Enquiry ID'),
                    React.createElement('th', null, 'Name'),
                    React.createElement('th', null, 'Contact'),
                    React.createElement('th', null, 'Status'),
                    React.createElement('th', null, 'Date'),
                    React.createElement('th', null)
                  )
                ),
                React.createElement(
                  'tbody',
                  null,
                  React.createElement(
                    'tr',
                    null,
                    React.createElement('td', null, '01'),
                    React.createElement('td', null, 'A2PF2'),
                    React.createElement('td', null, 'Warner'),
                    React.createElement('td', null, '8925364798'),
                    React.createElement('td', null, 'Follow Up'),
                    React.createElement('td', null, '1-2-19'),
                    React.createElement(
                      'td',
                      null,
                      React.createElement(
                        'span',
                        {className: 'btn btn-primary'},
                        'Details'
                      )
                    )
                  )
                )
              )
            );
          };
          var AdmissionEnquiryPage = function AdmissionEnquiryPage(_a) {
            var admissions = _a.data.admissions;
            return React.createElement(
              'section',
              {className: 'customCss'},
              React.createElement(
                'h3',
                {className: 'bg-heading p-1'},
                React.createElement('i', {
                  className: 'fa fa-university stroke-transparent mr-1',
                  'aria-hidden': 'true',
                }),
                ' Admin - Admission'
              ),
              React.createElement(
                'div',
                {className: 'm-b-1 dflex bg-heading justify-Content'},
                React.createElement('h4', {className: 'ptl-06'}, 'Enquiry'),
                React.createElement(
                  'div',
                  null,
                  React.createElement(
                    'a',
                    {className: 'btn btn-primary', style: w180},
                    'Create New Enquiry'
                  )
                )
              ),
              React.createElement(AdmissionsTable, {admissions: admissions})
            );
          };
          exports.default = react_apollo_1.graphql(AdmissionEnquiryQueryGql)(
            withLoadingHandler_1.default(AdmissionEnquiryPage)
          );

          /***/
        },

      /***/ './domain/admission/AdmissionEnquiryPage/AdmissionEnquiryQuery.graphql':
        /*!*****************************************************************************!*\
  !*** ./domain/admission/AdmissionEnquiryPage/AdmissionEnquiryQuery.graphql ***!
  \*****************************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var doc = {
            kind: 'Document',
            definitions: [
              {
                kind: 'FragmentDefinition',
                name: {kind: 'Name', value: 'admissionSummary'},
                typeCondition: {
                  kind: 'NamedType',
                  name: {kind: 'Name', value: 'Admission'},
                },
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'FragmentSpread',
                      name: {kind: 'Name', value: 'admission'},
                      directives: [],
                    },
                  ],
                },
              },
              {
                kind: 'OperationDefinition',
                operation: 'query',
                name: {kind: 'Name', value: 'admissionEnquiry'},
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {kind: 'Name', value: 'admissions'},
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'FragmentSpread',
                            name: {kind: 'Name', value: 'admissionSummary'},
                            directives: [],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            loc: {start: 0, end: 188},
          };
          doc.loc.source = {
            body:
              '#import "../../gqlfragments/admission.graphql"\r\n\r\nfragment admissionSummary on Admission {\r\n  ...admission\r\n}\r\n\r\nquery admissionEnquiry {\r\n  admissions {\r\n    ...admissionSummary\r\n  }\r\n}\r\n',
            name: 'GraphQL request',
            locationOffset: {line: 1, column: 1},
          };

          var names = {};
          function unique(defs) {
            return defs.filter(function(def) {
              if (def.kind !== 'FragmentDefinition') return true;
              var name = def.name.value;
              if (names[name]) {
                return false;
              } else {
                names[name] = true;
                return true;
              }
            });
          }
          doc.definitions = doc.definitions.concat(
            unique(
              __webpack_require__(
                /*! ../../gqlfragments/admission.graphql */ './domain/gqlfragments/admission.graphql'
              ).definitions
            )
          );

          // Collect any fragment/type references from a node, adding them to the refs Set
          function collectFragmentReferences(node, refs) {
            if (node.kind === 'FragmentSpread') {
              refs.add(node.name.value);
            } else if (node.kind === 'VariableDefinition') {
              var type = node.type;
              if (type.kind === 'NamedType') {
                refs.add(type.name.value);
              }
            }

            if (node.selectionSet) {
              node.selectionSet.selections.forEach(function(selection) {
                collectFragmentReferences(selection, refs);
              });
            }

            if (node.variableDefinitions) {
              node.variableDefinitions.forEach(function(def) {
                collectFragmentReferences(def, refs);
              });
            }

            if (node.definitions) {
              node.definitions.forEach(function(def) {
                collectFragmentReferences(def, refs);
              });
            }
          }

          var definitionRefs = {};
          (function extractReferences() {
            doc.definitions.forEach(function(def) {
              if (def.name) {
                var refs = new Set();
                collectFragmentReferences(def, refs);
                definitionRefs[def.name.value] = refs;
              }
            });
          })();

          function findOperation(doc, name) {
            for (var i = 0; i < doc.definitions.length; i++) {
              var element = doc.definitions[i];
              if (element.name && element.name.value == name) {
                return element;
              }
            }
          }

          function oneQuery(doc, operationName) {
            // Copy the DocumentNode, but clear out the definitions
            var newDoc = {
              kind: doc.kind,
              definitions: [findOperation(doc, operationName)],
            };
            if (doc.hasOwnProperty('loc')) {
              newDoc.loc = doc.loc;
            }

            // Now, for the operation we're running, find any fragments referenced by
            // it or the fragments it references
            var opRefs = definitionRefs[operationName] || new Set();
            var allRefs = new Set();
            var newRefs = new Set(opRefs);
            while (newRefs.size > 0) {
              var prevRefs = newRefs;
              newRefs = new Set();

              prevRefs.forEach(function(refName) {
                if (!allRefs.has(refName)) {
                  allRefs.add(refName);
                  var childRefs = definitionRefs[refName] || new Set();
                  childRefs.forEach(function(childRef) {
                    newRefs.add(childRef);
                  });
                }
              });
            }

            allRefs.forEach(function(refName) {
              var op = findOperation(doc, refName);
              if (op) {
                newDoc.definitions.push(op);
              }
            });

            return newDoc;
          }

          module.exports = doc;

          module.exports['admissionEnquiry'] = oneQuery(doc, 'admissionEnquiry');

          /***/
        },

      /***/ './domain/admission/AdmissionEnquiryPage/AdmissionsApp.tsx':
        /*!*****************************************************************!*\
  !*** ./domain/admission/AdmissionEnquiryPage/AdmissionsApp.tsx ***!
  \*****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {value: true});
          var React = __webpack_require__(/*! react */ 'react');
          var ReactDOM = __webpack_require__(/*! react-dom */ 'react-dom');
          var react_apollo_1 = __webpack_require__(
            /*! react-apollo */ '../node_modules/react-apollo/react-apollo.browser.umd.js'
          );
          var react_router_dom_1 = __webpack_require__(
            /*! react-router-dom */ '../node_modules/react-router-dom/es/index.js'
          );
          var createGraphQLClient_1 = __webpack_require__(
            /*! ../../../createGraphQLClient */ './createGraphQLClient.tsx'
          );
          var AdmissionEnquiryPage_1 = __webpack_require__(
            /*! ./AdmissionEnquiryPage */ './domain/admission/AdmissionEnquiryPage/AdmissionEnquiryPage.tsx'
          );
          __webpack_require__(/*! ../../../css/dark.css */ './css/dark.css');
          var graphQLClient = createGraphQLClient_1.createGraphQLClient();
          function init() {
            setTimeout(function() {
              ReactDOM.render(
                React.createElement(
                  react_apollo_1.ApolloProvider,
                  {client: graphQLClient},
                  React.createElement(
                    react_router_dom_1.BrowserRouter,
                    null,
                    React.createElement(
                      react_router_dom_1.Switch,
                      null,
                      React.createElement(react_router_dom_1.Route, {
                        path: '/plugins/xformation-cms-admission-panel/page/admissions',
                        component: AdmissionEnquiryPage_1.default,
                      })
                    )
                  )
                ),
                document.getElementById('mountAdmissionEnquiry')
              );
            }, 100);
          }
          exports.default = init;

          /***/
        },

      /***/ './domain/gqlfragments/admission.graphql':
        /*!***********************************************!*\
  !*** ./domain/gqlfragments/admission.graphql ***!
  \***********************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          var doc = {
            kind: 'Document',
            definitions: [
              {
                kind: 'FragmentDefinition',
                name: {kind: 'Name', value: 'admission'},
                typeCondition: {
                  kind: 'NamedType',
                  name: {kind: 'Name', value: 'Admission'},
                },
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {kind: 'Name', value: 'id'},
                      arguments: [],
                      directives: [],
                    },
                    {
                      kind: 'Field',
                      name: {kind: 'Name', value: 'studentName'},
                      arguments: [],
                      directives: [],
                    },
                    {
                      kind: 'Field',
                      name: {kind: 'Name', value: 'mobileNumber'},
                      arguments: [],
                      directives: [],
                    },
                    {
                      kind: 'Field',
                      name: {kind: 'Name', value: 'alternateMobileNumber'},
                      arguments: [],
                      directives: [],
                    },
                    {
                      kind: 'Field',
                      name: {kind: 'Name', value: 'email'},
                      arguments: [],
                      directives: [],
                    },
                    {
                      kind: 'Field',
                      name: {kind: 'Name', value: 'courseApplyingFor'},
                      arguments: [],
                      directives: [],
                    },
                    {
                      kind: 'Field',
                      name: {kind: 'Name', value: 'modeOfEnquiry'},
                      arguments: [],
                      directives: [],
                    },
                    {
                      kind: 'Field',
                      name: {kind: 'Name', value: 'status'},
                      arguments: [],
                      directives: [],
                    },
                    {
                      kind: 'Field',
                      name: {kind: 'Name', value: 'description'},
                      arguments: [],
                      directives: [],
                    },
                    {
                      kind: 'Field',
                      name: {kind: 'Name', value: 'enquiryDate'},
                      arguments: [],
                      directives: [],
                    },
                    {
                      kind: 'Field',
                      name: {kind: 'Name', value: 'updatedOn'},
                      arguments: [],
                      directives: [],
                    },
                    {
                      kind: 'Field',
                      name: {kind: 'Name', value: 'updatedBy'},
                      arguments: [],
                      directives: [],
                    },
                    {
                      kind: 'Field',
                      name: {kind: 'Name', value: 'branch'},
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {kind: 'Name', value: 'branchName'},
                            arguments: [],
                            directives: [],
                          },
                        ],
                      },
                    },
                    {
                      kind: 'Field',
                      name: {kind: 'Name', value: 'admissionApplication'},
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {kind: 'Name', value: 'admissionStatus'},
                            arguments: [],
                            directives: [],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            loc: {start: 0, end: 298},
          };
          doc.loc.source = {
            body:
              'fragment admission on Admission {\r\n  id\r\n  studentName\r\n  mobileNumber\r\n  alternateMobileNumber\r\n  email\r\n  courseApplyingFor\r\n  modeOfEnquiry\r\n  status\r\n  description\r\n  enquiryDate\r\n  updatedOn\r\n  updatedBy\r\n  branch {\r\n    branchName\r\n  }\r\n  admissionApplication {\r\n    admissionStatus\r\n  }\r\n}\r\n',
            name: 'GraphQL request',
            locationOffset: {line: 1, column: 1},
          };

          var names = {};
          function unique(defs) {
            return defs.filter(function(def) {
              if (def.kind !== 'FragmentDefinition') return true;
              var name = def.name.value;
              if (names[name]) {
                return false;
              } else {
                names[name] = true;
                return true;
              }
            });
          }

          module.exports = doc;

          /***/
        },

      /***/ './module.ts':
        /*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {value: true});
          var WelcomePage_1 = __webpack_require__(
            /*! ./ui/WelcomePage */ './ui/WelcomePage.ts'
          );
          exports.WelcomePage = WelcomePage_1.WelcomePage;
          var Config_1 = __webpack_require__(/*! ./ui/Config */ './ui/Config.ts');
          exports.ConfigCtrl = Config_1.ConfigCtrl;
          var AdmissionsPage_1 = __webpack_require__(
            /*! ./ui/AdmissionsPage */ './ui/AdmissionsPage.ts'
          );
          exports.AdmissionsPage = AdmissionsPage_1.AdmissionsPage;

          /***/
        },

      /***/ './ui/AdmissionsPage.ts':
        /*!******************************!*\
  !*** ./ui/AdmissionsPage.ts ***!
  \******************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {value: true});
          var AdmissionsApp_1 = __webpack_require__(
            /*! ../domain/admission/AdmissionEnquiryPage/AdmissionsApp */ './domain/admission/AdmissionEnquiryPage/AdmissionsApp.tsx'
          );
          var AdmissionsPage = /** @class */ (function() {
            function AdmissionsPage() {
              AdmissionsApp_1.default();
            }
            AdmissionsPage.templateUrl = '/partials/admissions.html';
            return AdmissionsPage;
          })();
          exports.AdmissionsPage = AdmissionsPage;

          /***/
        },

      /***/ './ui/Config.ts':
        /*!**********************!*\
  !*** ./ui/Config.ts ***!
  \**********************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {value: true});
          var ConfigCtrl = /** @class */ (function() {
            function ConfigCtrl() {}
            ConfigCtrl.templateUrl = '/partials/config.html';
            return ConfigCtrl;
          })();
          exports.ConfigCtrl = ConfigCtrl;

          /***/
        },

      /***/ './ui/WelcomePage.ts':
        /*!***************************!*\
  !*** ./ui/WelcomePage.ts ***!
  \***************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          Object.defineProperty(exports, '__esModule', {value: true});
          var WelcomePage = /** @class */ (function() {
            function WelcomePage() {}
            WelcomePage.templateUrl = '/partials/welcome.html';
            return WelcomePage;
          })();
          exports.WelcomePage = WelcomePage;

          /***/
        },

      /***/ react:
        /*!************************!*\
  !*** external "react" ***!
  \************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

          /***/
        },

      /***/ 'react-dom':
        /*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

          /***/
        },

      /******/
    }
  );
});
//# sourceMappingURL=module.js.map
