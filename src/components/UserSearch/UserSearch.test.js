import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from "enzyme";
import * as userService from "../../services/UserService";
import * as searchHistoryService from "../../services/SearchHistoryService";
import UserSearch from './UserSearch';
import { StoreProvider } from '../../store'
import rootReducer from '../../store/rootReducer'
import rootActions from '../../store/rootActions'

configure({ adapter: new Adapter() });

beforeEach(() => {
    jest.resetModules();
});

describe("UserSearch", () => {
    it('should search and users', (done) => {
        const search = jest.spyOn(userService, 'search').mockImplementation(() => {
            return Promise.resolve({ data: { items: [{ login: "login" }] } });
        });

        const wrapper = mount(
            <StoreProvider rootReducer={rootReducer} rootActions={rootActions}>
                <UserSearch />
            </StoreProvider>
        );

        wrapper.find("input[type='text']").getDOMNode().value = "login";

        wrapper
            .find("button")
            .first()
            .simulate("click");

        expect(search).toHaveBeenCalled();

        setTimeout(() => {
            wrapper.update();

            expect(
                wrapper
                    .find("span")
                    .first()
                    .text()
            ).toEqual("login");

            done();
        }, 1000);
    });

    it('should render user from history', () => {
        const getHistory = jest.spyOn(searchHistoryService, 'get').mockImplementation(() => {
            return [{ login: "login_history" }];
        });

        const wrapper = mount(
            <StoreProvider rootReducer={rootReducer} rootActions={rootActions}>
                <UserSearch />
            </StoreProvider>
        );

        expect(getHistory).toHaveBeenCalled();

        expect(
            wrapper
                .find("span")
                .first()
                .text()
        ).toEqual("login_history");
    });
});