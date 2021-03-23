import React from "react";

export default function MemberContainer(props) {
	const { members, removeMember } = props;

	return members.length !== 0 ? (
		<div className="membersContainer">
			<h1>Members</h1>
			{members.map((member) => {
				return (
					<div className="member" key={member.email}>
						<p>{`Name: ${member.name}`}</p>
						<p>{`Email: ${member.email}`}</p>
						<p
							style={{ display: "inline-block" }}
						>{`Role: ${member.role}`}</p>
						<button
							onClick={(event) => removeMember(event, member)}
						>
							Remove
						</button>
					</div>
				);
			})}
		</div>
	) : null;
}
