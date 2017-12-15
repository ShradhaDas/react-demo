
import React from 'react';
import Home from '../home';
import TestUtils from React.TestUtils;
import expect from 'expect';

describe("Home", function () {
it("loads without error", function () {
    var picker = TestUtils.renderIntoDocument(
        <Home />
    );

    expect(picker).toExist();
});

it("shows a div", function () {
    var picker = TestUtils.renderIntoDocument(
        <Home />
    );

    var div = TestUtils.findRenderedDOMComponentWithTag(
        picker, "div"
    );
    var BootstrapTable = TestUtils.findRenderedDOMComponentWithTag(
        div, "BootstrapTable"
    );

    expect(div).toExist();
    expect(BootstrapTablep).toExist();
});

});
