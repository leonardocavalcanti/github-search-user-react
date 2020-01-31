import React from "react";

export default function UserSearchItem(props) {
	const { selectUser, item, key } = props;

	return (
		<div
			key={key}
			onClick={() => selectUser(item)}
			className="repository-item"
		>
			<img src={item.avatar_url} />
			<div className="repository-name">
				<span>{item.login}</span>
				<i className="fas fa-arrow-right"></i>
			</div>
		</div>
	);
}
