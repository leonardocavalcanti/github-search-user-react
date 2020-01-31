import React, { useEffect, useState } from "react";
import { useActions, useStore } from "../../store";
import * as userService from "../../services/UserService";
import * as searchHistoryService from "../../services/SearchHistoryService";
import User from "../User";
import UserSearchItem from "../UserSearchItem";

export default function UserSearch() {
	const { state } = useStore();
	const { usersActions } = useActions();
	const [query, setQuery] = useState();
	const [search, setSearch] = useState();
	const [loading, setLoading] = useState(false);
	const searchHistory = searchHistoryService.get();

	useEffect(() => {
		if (query) {
			setLoading(true);

			userService.search(query).then(r => {
				usersActions.set(r.data.items);

				setLoading(false);
			});
		}
	}, [query, usersActions]);

	function submitSearch() {
		setQuery(search);
	}

	function selectUser(user) {
		if (!user) {
			usersActions.select(null);
			return;
		}

		userService.get(user.login).then(r => usersActions.select(r.data));
	}

	function selectUserFromHistory(user) {
		usersActions.select(user);
	}

	const handleSearchChange = e => {
		setSearch(e.target.value);
	};

	return (
		<div className="container">
			<div className="content">
				{state.users.item ? (
					<div className="back">
						<button onClick={() => selectUser(null)}>
							<i className="fas fa-arrow-left"></i>
							<span>Voltar</span>
						</button>
						<h4>Busca de Usuários do GitHub</h4>
					</div>
				) : (
						<div className="search-container">
							<h4>Busca de Usuários do GitHub</h4>
							<div className="form">
								<input onChange={handleSearchChange} />
								<button
									onClick={submitSearch}
									disabled={!search || search.length === 0}
								>
									Buscar
							</button>
							</div>
						</div>
					)}
				{!loading ? (
					!state.users.item ? (
						state.users.items &&
						state.users.items.map((item, i) => (
							<UserSearchItem selectUser={selectUser} item={item} key={i} />
						))
					) : (
							<User />
						)
				) : (
						<div className="table-loading">
							<i className="fas fa-spinner fa-spin"></i>
						</div>
					)}

				{!state.users.item && searchHistory && (
					<div className="history">
						<h6>Visualizado Recentemente</h6>
						{searchHistory.map((item, i) => (
							<UserSearchItem selectUser={selectUserFromHistory} item={item} key={i} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
