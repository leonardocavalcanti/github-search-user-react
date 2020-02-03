import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from "enzyme";
import * as repositoryService from "../../services/RepositoryService";
import { StoreProvider } from '../../store'
import rootReducer from '../../store/rootReducer'
import rootActions from '../../store/rootActions'
import User from "./User";

configure({ adapter: new Adapter() });

beforeEach(() => {
    jest.resetModules();
});

describe("UserSearch", () => {
    it('should render user and get repositories', (done) => {
        const get = jest.spyOn(repositoryService, 'get').mockImplementation(() => {
            return Promise.resolve({
                data: [{
                    name: "repo_name",
                    language: "lang",
                    open_issues_count: 0,
                    size: 0
                }]
            });
        });

        const wrapper = mount(
            <StoreProvider rootReducer={rootReducer} rootActions={rootActions}>
                <User user={{ login: "login" }} />
            </StoreProvider>
        );

        expect(
            wrapper
                .find("h6")
                .first()
                .text()
        ).toEqual("login");


        setTimeout(() => {
            wrapper.update();

            expect(
                wrapper
                    .find(".title")
                    .first()
                    .text()
            ).toEqual("repo_name");

            done();
        }, 1000);
    });

    it('should render user and repositories from history', () => {
        const wrapper = mount(
            <StoreProvider rootReducer={rootReducer} rootActions={rootActions}>
                <User user={{
                    login: "login_history",
                    repositories: [{
                        name: "repo_name_history",
                        language: "lang",
                        open_issues_count: 0,
                        size: 0
                    }], isFromHistory: true
                }} />
            </StoreProvider>
        );

        expect(
            wrapper
                .find("h6")
                .first()
                .text()
        ).toEqual("login_history");

        expect(
            wrapper
                .find(".title")
                .first()
                .text()
        ).toEqual("repo_name_history");
    });
});