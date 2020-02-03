import React, { useEffect, useState } from "react";
import { useActions, useStore } from "../../store";
import * as repositoryService from "../../services/RepositoryService";
import * as searchHistoryService from "../../services/SearchHistoryService";

export default function User(props) {
	const { user } = props;
	const { state } = useStore();
	const { usersActions, repositoriesActions } = useActions();

	const [totalSize, setTotalSize] = useState(0);
	const [totalIssues, setTotalIssues] = useState(0);
	const [languages, setLanguages] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (user) {
			if (user.isFromHistory) {
				repositoriesActions.set(user.repositories);

				setTotals(user.repositories);
			} else {
				setLoading(true);

				repositoryService.get(user.login).then(r => {
					repositoriesActions.set(r.data);

					searchHistoryService.put({
						...user,
						repositories: r.data,
						isFromHistory: true
					});

					setTotals(r.data);

					setLoading(false);
				});
			}
		}
	}, [user, usersActions, repositoriesActions]);

	function setTotals(items) {
		let size = 0;
		let issues = 0;
		let languages = [];

		items.forEach(item => {
			size += item.size;
			issues += item.open_issues_count;

			let languageName = item.language || "Outras";

			let language = languages.find(l => l.name === languageName);

			if (!language) {
				languages.push({ name: languageName, count: 1 });
			} else {
				language.count += 1;
			}
		});

		setTotalSize(size);
		setTotalIssues(issues);
		setLanguages(languages);
	}

	return (
		<div className="user-detail" key={user.login}>
			<div className="profile">
				<img src={user.avatar_url} alt={user.login} />
				<h6>{user.login}</h6>
				<div className="summary">
					<div>
						<small>Nome</small>{" "}
						<b>{user.name}</b>
					</div>
					<div>
						<small>Bio</small>{" "}
						<b>{user.bio}</b>
					</div>
					<div>
						<small>Localidade</small>{" "}
						<b>{user.location}</b>
					</div>
				</div>
			</div>
			<div className="user-repositories">
				<i className="fas fa-list"></i> Repositórios
			</div>
			{!loading ? (
				<div>
					<div className="summary">
						<h6>Resumo</h6>
						<div>
							<small>Tamanho Total</small>{" "}
							<b>{totalSize} bytes</b>
						</div>
						<div>
							<small>Linguagens</small>{" "}
							{languages.map((language, i) => (
								<b key={i}>
									{language.name} ({language.count}){" "}
								</b>
							))}
						</div>
						<div>
							<small>Issues Abertos</small>{" "}
							<b>{totalIssues}</b>
						</div>
					</div>
					{state.repositories.items &&
						state.repositories.items.map((item, i) => (
							<div key={i} className="repository">
								<div className="title">{item.name}</div>
								<ul>
									<li>
										<small>Tamanho</small>{" "}
										<b>{item.size}bytes</b>
									</li>
									<li>
										<small>Linguagem</small>{" "}
										<b>{item.language || "Outras"}</b>
									</li>
									<li>
										<small>Issues abertos</small>{" "}
										<b>{item.open_issues_count}</b>
									</li>
								</ul>
							</div>
						))}
				</div>
			) : (
					<div className="table-loading">
						<i className="fas fa-spinner fa-spin"></i>
					</div>
				)}
		</div>
	);
}
