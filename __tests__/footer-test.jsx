import React from 'react';
import Footer from '../footer';
import TestUtils from React.TestUtils;
import expect from 'expect';

describe("Footer", function () {
it("loads without error", function () {
    var picker = TestUtils.renderIntoDocument(
        <Footer />
    );

    expect(picker).toExist();
});

it("shows a div", function () {
    var picker = TestUtils.renderIntoDocument(
        <Footer />
    );

    var div = TestUtils.findRenderedDOMComponentWithTag(
        picker, "div"
    );
    var p = TestUtils.findRenderedDOMComponentWithTag(
        div, "p"
    );

    expect(div).toExist();
    expect(p).toExist();
});

});
