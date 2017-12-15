import React from 'react';
import AboutUs from '../about-us';
import TestUtils from React.TestUtils;
import expect from 'expect';

describe("AboutUs", function () {
it("loads without error", function () {
    var picker = TestUtils.renderIntoDocument(
        <AboutUs />
    );

    expect(picker).toExist();
});

it("shows a header", function () {
    var picker = TestUtils.renderIntoDocument(
        <AboutUs />
    );

    var h1 = TestUtils.findRenderedDOMComponentWithTag(
        picker, "h1"
    );

    expect(h1).toExist();
});

});
