import React from "react";

export default function MemberContainer(props) {
	const { members, removeMember } = props;

	return members.length !== 0 ? (
		<div className="membersContainer">
			<h1>Members</h1>
			{members.map((member) => {
				return (
					<div className="member" key={member.email}>
						<span className="memberProp">Name: </span>
						<p className="memberInfo">{`${member.name}`}</p>
						<br></br>
						<span className="memberProp">Email: </span>
						<p className="memberInfo">{`${member.email}`}</p>
						<br></br>
						<span className="memberProp">Role: </span>
						<p className="memberInfo">{`${member.role}`}</p>
						<br></br>
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
