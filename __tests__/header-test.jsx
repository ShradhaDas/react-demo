import React from 'react';
import Header from '../header';
import TestUtils from React.TestUtils;
import expect from 'expect';

describe("Header", function () {
it("loads without error", function () {
    var picker = TestUtils.renderIntoDocument(
        <Header />
    );

    expect(picker).toExist();
});

it("shows a nav", function () {
    var picker = TestUtils.renderIntoDocument(
        <Header />
    );

    var nav = TestUtils.findRenderedDOMComponentWithTag(
        picker, "nav"
    );
    var ul = TestUtils.findRenderedDOMComponentWithTag(
        nav, "ul"
    );
    var li = TestUtils.findRenderedDOMComponentWithTag(
        ul, "li"
    );

    expect(nav).toExist();
    expect(ul).toExist();
    expect(li).toExist();
    expect(li.length).toEqual(4);

});

});
