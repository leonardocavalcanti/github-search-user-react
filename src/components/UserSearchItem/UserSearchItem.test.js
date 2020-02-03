import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from "enzyme";
import UserSearchItem from "./UserSearchItem";

configure({ adapter: new Adapter() });

beforeEach(() => {
    jest.resetModules();
});

describe("UserSearchItem", () => {
    it('should render', () => {
        const props = {
            selectUser: () => { },
            item: { login: 'login' },
            index: 0
        }

        const wrapper = mount(
            <UserSearchItem {...props} />
        );

        expect(
            wrapper
                .find("span")
                .first()
                .text()
        ).toEqual("login");
    });
});