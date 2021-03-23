import MemberForm from "./Form";
import { useState } from "react";

function App() {
	const [members, setMembers] = useState([]);

	function addMember(newMember) {
		setMembers([...members, newMember]);
	}

	return (
		<div>
			<MemberForm update={addMember} />
			<div className="membersContainer">
				{members.map((member) => {
					return (
						<div className="member" key={member.email}>
							{`Name: ${member.name}`}
							<br></br>
							{`Email: ${member.email}`}
							<br></br>
							{`Role: ${member.role}`}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
