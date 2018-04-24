'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RayrBtn = function (_React$Component) {
    _inherits(RayrBtn, _React$Component);

    function RayrBtn() {
        _classCallCheck(this, RayrBtn);

        return _possibleConstructorReturn(this, (RayrBtn.__proto__ || Object.getPrototypeOf(RayrBtn)).apply(this, arguments));
    }

    _createClass(RayrBtn, [{
        key: 'iconInit',
        value: function iconInit() {
            var icon = this.props.icon;

            return icon ? _react2.default.createElement('i', { className: 'fa fa-' + icon }) : null;
        }
    }, {
        key: 'render',
        value: function render() {

            var btnClass = (0, _classnames2.default)({
                'rayr-btn': true,
                'rayr-btn-primary': this.props.type === 'primary',
                'rayr-btn-warning': this.props.type === 'warning',
                'rayr-btn-sm': this.props.size === 'sm',
                'rayr-btn-xs': this.props.size === 'xs',
                'rayr-btn-inverse': this.props.inverse
            });

            return _react2.default.createElement(
                'button',
                _extends({}, this.props, { className: btnClass }),
                this.iconInit(),
                this.props.children
            );
        }
    }]);

    return RayrBtn;
}(_react2.default.Component);

RayrBtn.propTypes = {
    type: _propTypes2.default.oneOf(['primary', 'default', 'warning']),
    size: _propTypes2.default.oneOf(['md', 'xs', 'sm']),
    icon: _propTypes2.default.oneOf(['plus', 'refresh', 'search', 'check', 'close', 'download'])
};
RayrBtn.defaultProps = {
    type: 'default',
    size: 'md',
    className: ''
};
exports.default = RayrBtn;
module.exports = exports['default'];