import React from 'react';
import ContactUs from '../contact-us';
import TestUtils from React.TestUtils;
import expect from 'expect';

describe("ContactUs", function () {
it("loads without error", function () {
    var picker = TestUtils.renderIntoDocument(
        <ContactUs />
    );

    expect(picker).toExist();
});

it("shows a div", function () {
    var picker = TestUtils.renderIntoDocument(
        <ContactUs />
    );

    var div = TestUtils.findRenderedDOMComponentWithTag(
        picker, "div"
    );

    expect(div).toExist();
});

});
