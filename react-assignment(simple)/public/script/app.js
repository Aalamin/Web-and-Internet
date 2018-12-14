"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h1",
                null,
                "Assign"
            );
        }
    }]);

    return Header;
}(React.Component);

var itemList = ["Go to the market", "Finish the tasks", "Hangout With friends"];

var Item = function (_React$Component2) {
    _inherits(Item, _React$Component2);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    _createClass(Item, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                itemList.map(function (item) {
                    return React.createElement(
                        "li",
                        { key: item },
                        item
                    );
                })
            );
        }
    }]);

    return Item;
}(React.Component);

var Items = function (_React$Component3) {
    _inherits(Items, _React$Component3);

    function Items() {
        _classCallCheck(this, Items);

        return _possibleConstructorReturn(this, (Items.__proto__ || Object.getPrototypeOf(Items)).apply(this, arguments));
    }

    _createClass(Items, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "ol",
                null,
                React.createElement(Item, null)
            );
        }
    }]);

    return Items;
}(React.Component);

var template = React.createElement(
    "div",
    null,
    React.createElement(Header, null),
    React.createElement(Items, null)
);

ReactDOM.render(template, document.getElementById("hook"));
