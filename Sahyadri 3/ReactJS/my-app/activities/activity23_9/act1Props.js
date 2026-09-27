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

function ParticipantCard({ name, role, isVIP, isCheckedIn }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{name}</h2>
          <p className="mt-1 text-sm text-slate-500">{role}</p>
        </div>
        {isVIP && (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
            ⭐ VIP
          </span>
        )}
      </div>
      <p
        className={`mt-5 inline-flex items-center gap-2 text-sm font-medium ${
          isCheckedIn ? "text-emerald-700" : "text-rose-700"
        }`}
      >
        <span aria-hidden="true">{isCheckedIn ? "●" : "○"}</span>
        {isCheckedIn ? "Checked In" : "Not Arrived"}
      </p>
    </article>
  );
}

export default function Home() {
  const attendeeCount = conferenceData.attendees.length;
  const checkedInCount = conferenceData.attendees.filter(
    (attendee) => attendee.isCheckedIn,
  ).length;

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Event planner
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {conferenceData.name} Dashboard
          </h1>
          <p className="mt-2 text-slate-600">
            Attendee roster and live check-in status.
          </p>
        </header>

        {attendeeCount > conferenceData.maxCapacity && (
          <div
            role="alert"
            className="mb-6 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 font-medium text-rose-800"
          >
            Warning: Event is at capacity!
          </div>
        )}

        <section
          aria-label="Conference summary"
          className="mb-8 grid gap-4 sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Attendees</p>
            <p className="mt-1 text-2xl font-bold">{attendeeCount}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Capacity</p>
            <p className="mt-1 text-2xl font-bold">{conferenceData.maxCapacity}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Checked in</p>
            <p className="mt-1 text-2xl font-bold">{checkedInCount}</p>
          </div>
        </section>

        <section aria-label="Attendee roster">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Attendee roster</h2>
            <span className="text-sm text-slate-500">
              {attendeeCount} participants
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {conferenceData.attendees.map((attendee) => (
              <ParticipantCard key={attendee.id} {...attendee} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}