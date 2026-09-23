const conferenceData = {
  name: "React Summit 2026",
  maxCapacity: 5,
  attendees: [
    { id: 1, name: "Alice Johnson", role: "Speaker", isCheckedIn: true, isVIP: true },
    { id: 2, name: "Bob Smith", role: "Attendee", isCheckedIn: false, isVIP: false },
    { id: 3, name: "Charlie Davis", role: "Volunteer", isCheckedIn: true, isVIP: false },
    { id: 4, name: "Diana Prince", role: "Speaker", isCheckedIn: false, isVIP: true },
    { id: 5, name: "Evan Wright", role: "Attendee", isCheckedIn: true, isVIP: false },
  ]
};

function ParticipantCard({name, role, isVIP, isCheckedIn}){
    return(
    <div className="card">
        <ul>
            <li>{name}</li>
            <li>{role}</li>
            <li>{isVIP? "Yes": "No"}</li>
            <li>{isCheckedIn? "Yes": "No"}</li>
        </ul>
    </div>
    );
}

export default function Home() {
  return (
    <div className="app">
      <h1>{conferenceData.name} Dashboard</h1>
      {/* TODO: Add components and logic here */}
    </div>
  );
}