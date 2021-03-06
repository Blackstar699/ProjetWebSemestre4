'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  }
  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
}
// Adds compatibility for ES modules
debounce.debounce = debounce;

var debounce_1 = debounce;

/**
 * BEM class name factory.
 *
 * @typedef {Function} Bem
 * @param {String|Object} [elementOrMods] Element name or hash object with mods
 * @param {Object} [mods] Hash object with mods
 * @returns {String}
 */

/**
 * Returns BEM class name factory.
 *
 * @param {String} componentName Block name
 * @returns {Bem}
 */
var easyBem = function bem(componentName) {
    return function (elementOrMods, mods) {
        if (!elementOrMods) {
            return componentName;
        }

        var element;

        if (typeof elementOrMods === 'string') {
            element = elementOrMods;
        } else {
            mods = elementOrMods;
        }

        var base = componentName;
        if (element) {
            base += '__' + element;
        }

        return base + (
            mods
                ? Object.keys(mods).reduce(function (result, name) {
                    var value = mods[name];

                    if (value) {
                        result += ' ' + (
                            typeof value === 'boolean'
                                ? (base + '--' + name)
                                : (base + '--' + name + '_' + value)
                        );
                    }

                    return result;
                }, '')
                : ''
        );
    };
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".indiana-scroll-container {\n  overflow: auto;\n}\n  .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab;\n    }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n  .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important;\n    }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto;\n  }\n\n.indiana-dragging {\n  cursor: -webkit-grab !important;\n  cursor: grab !important;\n}\n";
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var cn = easyBem('indiana-scroll-container');

var SCROLL_END_DEBOUNCE = 300;

var ScrollContainer = function (_PureComponent) {
  inherits(ScrollContainer, _PureComponent);

  function ScrollContainer(props) {
    classCallCheck(this, ScrollContainer);

    var _this = possibleConstructorReturn(this, (ScrollContainer.__proto__ || Object.getPrototypeOf(ScrollContainer)).call(this, props));

    _this.onEndScroll = function () {
      _this.scrolling = false;
      if (!_this.pressed && _this.started) {
        _this.processEnd();
      }
    };

    _this.onScroll = function (e) {
      var container = _this.container.current;
      // Ignore the internal scrolls
      if (container.scrollLeft !== _this.scrollLeft || container.scrollTop !== _this.scrollTop) {
        _this.scrolling = true;
        _this.processScroll(e);
        _this.onEndScroll();
      }
    };

    _this.onTouchStart = function (e) {
      var nativeMobileScroll = _this.props.nativeMobileScroll;

      if (_this.isDraggable(e.target)) {
        if (nativeMobileScroll && _this.scrolling) {
          _this.pressed = true;
        } else {
          var touch = e.touches[0];
          _this.processClick(e, touch.clientX, touch.clientY);
          if (!nativeMobileScroll && _this.props.stopPropagation) {
            e.stopPropagation();
          }
        }
      }
    };

    _this.onTouchEnd = function (e) {
      var nativeMobileScroll = _this.props.nativeMobileScroll;

      if (_this.pressed) {
        if (_this.started && (!_this.scrolling || !nativeMobileScroll)) {
          _this.processEnd();
        } else {
          _this.pressed = false;
        }
        _this.forceUpdate();
      }
    };

    _this.onTouchMove = function (e) {
      var nativeMobileScroll = _this.props.nativeMobileScroll;

      if (_this.pressed && (!nativeMobileScroll || !_this.isMobile)) {
        var touch = e.touches[0];
        if (touch) {
          _this.processMove(e, touch.clientX, touch.clientY);
        }
        e.preventDefault();
        if (_this.props.stopPropagation) {
          e.stopPropagation();
        }
      }
    };

    _this.onMouseDown = function (e) {
      if (_this.isDraggable(e.target)) {
        _this.processClick(e, e.clientX, e.clientY);
        e.preventDefault();
        if (_this.props.stopPropagation) {
          e.stopPropagation();
        }
      }
    };

    _this.onMouseMove = function (e) {
      if (_this.pressed) {
        _this.processMove(e, e.clientX, e.clientY);
        e.preventDefault();
        if (_this.props.stopPropagation) {
          e.stopPropagation();
        }
      }
    };

    _this.onMouseUp = function (e) {
      if (_this.pressed) {
        if (_this.started) {
          _this.processEnd();
        } else {
          _this.pressed = false;
          _this.forceUpdate();
          if (_this.props.onClick) {
            _this.props.onClick(e);
          }
        }
        e.preventDefault();
        if (_this.props.stopPropagation) {
          e.stopPropagation();
        }
      }
    };

    _this.container = React__default.createRef();
    _this.onEndScroll = debounce_1(_this.onEndScroll, SCROLL_END_DEBOUNCE);

    // Is container scrolling now (for example by inertia)
    _this.scrolling = false;
    // Is scrolling started
    _this.started = false;
    // Is touch active or mouse pressed down
    _this.pressed = false;
    return _this;
  }

  createClass(ScrollContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var nativeMobileScroll = this.props.nativeMobileScroll;

      var container = this.container.current;

      window.addEventListener('mouseup', this.onMouseUp);
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('touchmove', this.onTouchMove, { passive: false });
      window.addEventListener('touchend', this.onTouchEnd);

      // due to https://github.com/facebook/react/issues/9809#issuecomment-414072263
      container.addEventListener('touchstart', this.onTouchStart, { passive: false });
      container.addEventListener('mousedown', this.onMouseDown, { passive: false });

      if (nativeMobileScroll) {
        // We should check if it's the mobile device after page was loaded
        // to prevent breaking SSR
        this.isMobile = this.isMobileDevice();

        // If it's the mobile device, we should rerender to change styles
        if (this.isMobile) {
          this.forceUpdate();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('mouseup', this.onMouseUp);
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('touchmove', this.onTouchMove);
      window.removeEventListener('touchend', this.onTouchEnd);
    }
  }, {
    key: 'getElement',
    value: function getElement() {
      return this.container.current;
    }
  }, {
    key: 'isMobileDevice',
    value: function isMobileDevice() {
      return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
    }
  }, {
    key: 'isDraggable',
    value: function isDraggable(target) {
      var ignoreElements = this.props.ignoreElements;
      if (ignoreElements) {
        var closest = target.closest(ignoreElements);
        return closest === null || closest.contains(this.getElement());
      } else {
        return true;
      }
    }

    // Simulate 'onEndScroll' event that fires when scrolling is stopped

  }, {
    key: 'processClick',
    value: function processClick(e, clientX, clientY) {
      var container = this.container.current;
      this.scrollLeft = container.scrollLeft;
      this.scrollTop = container.scrollTop;
      this.clientX = clientX;
      this.clientY = clientY;
      this.pressed = true;
    }
  }, {
    key: 'processStart',
    value: function processStart(e) {
      var changeCursor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var onStartScroll = this.props.onStartScroll;

      var container = this.container.current;

      this.started = true;

      // Add the class to change displayed cursor
      if (changeCursor) {
        document.body.classList.add('indiana-dragging');
      }

      if (onStartScroll) {
        onStartScroll(container.scrollLeft, container.scrollTop, container.scrollWidth, container.scrollHeight);
      }
      this.forceUpdate();
    }

    // Process native scroll (scrollbar, mobile scroll)

  }, {
    key: 'processScroll',
    value: function processScroll(e) {
      if (this.started) {
        var onScroll = this.props.onScroll;

        var container = this.container.current;
        if (onScroll) {
          onScroll(container.scrollLeft, container.scrollTop, container.scrollWidth, container.scrollHeight);
        }
      } else {
        this.processStart(e, false);
      }
    }

    // Process non-native scroll

  }, {
    key: 'processMove',
    value: function processMove(e, newClientX, newClientY) {
      var _props = this.props,
          horizontal = _props.horizontal,
          vertical = _props.vertical,
          activationDistance = _props.activationDistance,
          onScroll = _props.onScroll;

      var container = this.container.current;

      if (!this.started) {
        if (horizontal && Math.abs(newClientX - this.clientX) > activationDistance || vertical && Math.abs(newClientY - this.clientY) > activationDistance) {
          this.clientX = newClientX;
          this.clientY = newClientY;
          this.processStart();
        }
      } else {
        if (horizontal) {
          container.scrollLeft -= newClientX - this.clientX;
        }
        if (vertical) {
          container.scrollTop -= newClientY - this.clientY;
        }
        if (onScroll) {
          onScroll(container.scrollLeft, container.scrollTop, container.scrollWidth, container.scrollHeight);
        }
        this.clientX = newClientX;
        this.clientY = newClientY;
        this.scrollLeft = container.scrollLeft;
        this.scrollTop = container.scrollTop;
      }
    }
  }, {
    key: 'processEnd',
    value: function processEnd(e) {
      var onEndScroll = this.props.onEndScroll;

      var container = this.container.current;

      this.pressed = false;
      this.started = false;
      this.scrolling = false;

      if (container && onEndScroll) {
        onEndScroll(container.scrollLeft, container.scrollTop, container.scrollWidth, container.scrollHeight);
      }
      document.body.classList.remove('indiana-dragging');
      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          style = _props2.style,
          hideScrollbars = _props2.hideScrollbars;


      return React__default.createElement(
        'div',
        {
          className: classnames(className, cn({
            'dragging': this.pressed,
            'hide-scrollbars': hideScrollbars,
            'native-scroll': this.isMobile
          })),
          style: style,
          ref: this.container,
          onScroll: this.onScroll
        },
        children
      );
    }
  }]);
  return ScrollContainer;
}(React.PureComponent);

ScrollContainer.propTypes = {
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  hideScrollbars: PropTypes.bool,
  activationDistance: PropTypes.number,
  children: PropTypes.node,
  onStartScroll: PropTypes.func,
  onScroll: PropTypes.func,
  onEndScroll: PropTypes.func,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  ignoreElements: PropTypes.string,
  nativeMobileScroll: PropTypes.bool,
  stopPropagation: PropTypes.bool
};
ScrollContainer.defaultProps = {
  nativeMobileScroll: true,
  hideScrollbars: true,
  activationDistance: 10,
  vertical: true,
  horizontal: true,
  stopPropagation: false,
  style: {}
};

module.exports = ScrollContainer;
//# sourceMappingURL=index.js.map
