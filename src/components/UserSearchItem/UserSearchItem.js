import React from "react";

export default function UserSearchItem(props) {
	const { selectUser, item } = props;

	return (
		<div
			onClick={() => selectUser(item)}
			className="repository-item"
		>
			<img src={item.avatar_url} alt={item.login} />
			<div className="repository-name">
				<span>{item.login}</span>
				<i className="fas fa-arrow-right"></i>
			</div>
		</div>
	);
}
