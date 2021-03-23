import MemberForm from "./MemberForm";
import MemberContainer from "./MemberContainer";
import { useState } from "react";

function App() {
	const [members, setMembers] = useState([]);

	function addMember(newMember) {
		setMembers([...members, newMember]);
	}

	function removeMember(event, oldMember) {
		event.preventDefault();
		setMembers(
			members.filter((member) => member.email !== oldMember.email)
		);
	}

	return (
		<div>
			<MemberForm addMember={addMember} />
			<MemberContainer members={members} removeMember={removeMember} />
		</div>
	);
}

export default App;
