import React, { useState } from "react";

export default function MemberForm(props) {
	const { addMember } = props;
	const formValues = { name: "", email: "", role: "" };

	const [member, setMember] = useState(formValues);

	function change(evt) {
		const attribute = evt.target.name;
		setMember({ ...member, [attribute]: evt.target.value });
	}

	function submitForm(event) {
		event.preventDefault();
		setMember(formValues);
		const newMember = {
			name: member.name.trim(),
			email: member.email.trim(),
			role: member.role.trim(),
		};
		addMember(newMember);
	}

	return (
		<div>
			<form className="formContainer" onSubmit={submitForm}>
				<h1 className="memberFormHeading">New Member Form:</h1>
				<input
					name="name"
					type="text"
					value={member.name}
					onChange={change}
					placeholder="Type a name:"
				></input>
				<input
					name="email"
					type="text"
					value={member.email}
					onChange={change}
					placeholder="Type an email address:"
				></input>
				<input
					name="role"
					type="text"
					value={member.role}
					onChange={change}
					placeholder="Type a role:"
				></input>
				<button>Submit</button>
			</form>
		</div>
	);
}
