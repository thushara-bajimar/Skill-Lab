**Tech Conference Event Planner**

## Class-Activity - 1

* **Phase 1: Setup & Concept Review ** — Quick walkthrough of the starter code and concepts.
* **Phase 2: Step 1 - Props & Card Component** — Pass data down to render individual participant cards.
* **Phase 3: Step 2 - List Rendering** — Use the `.map()` function to render the full attendee roster.
* **Phase 4: Step 3 - Conditional Rendering ** — Add logic to highlight VIPs, check-in status, and sold-out alerts.
---

## Starter Code

```jsx
// --- MOCK DATA ---
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

export default function Home() {
  return (
    <div className="app">
      <h1>{conferenceData.name} Dashboard</h1>
      {/* TODO: Add components and logic here */}
    </div>
  );
}
```

---

## Step-by-Step Instructions

### Step 1: Create a `ParticipantCard` Component using Props (8 Mins)

* **Goal:** Build a reusable component that accepts a participant object via props.
* **Tasks:**
1. Create a component named `ParticipantCard`.
2. Destructure properties (`name`, `role`, `isVIP`, `isCheckedIn`) from `props`.
3. Display the participant's name and role inside a styled container (e.g., a card or list item).

> **Hint:**
> ```jsx
> function ParticipantCard({ name, role }) {
>   return <div className="card"><h3>{name}</h3><p>{role}</p></div>
> }
>
> ```

---

### Step 2: Render the List Dynamically (7 Mins)

* **Goal:** Use JavaScript's `.map()` method to render all attendees from the array.
* **Tasks:**
1. Inside `App`, map over `conferenceData.attendees`.
2. Pass the individual attendee properties down to `ParticipantCard` using spread attributes or individual props.
3. Ensure every mapped element has a unique `key` prop (use `attendee.id`).


> **Hint:**
> ```jsx
> {conferenceData.attendees.map((attendee) => (
>   <ParticipantCard key={attendee.id} {...attendee} />
> ))}
>
> ```

---

### Step 3: Implement Conditional Rendering (8 Mins)

* **Goal:** Add dynamic UI logic based on participant state.
* **Tasks:**
1. **VIP Badge:** If `isVIP` is true, display a special gold `⭐ VIP` badge next to their name. Use the logical `&&` operator.
2. **Check-In Status:** Use a ternary operator (`? :`) to display a green text indicator saying `"Checked In"` if `isCheckedIn` is true, otherwise display `"Not Arrived"` in red.
3. **Capacity Warning:** In the main `App` component, use an `if` statement or ternary condition: if the number of attendees exceeds `conferenceData.maxCapacity`, display a warning banner: *"Warning: Event is at capacity!"*.


> **Hint:**
> ```jsx
> {isVIP && <span className="vip-badge">⭐ VIP</span>}
> <p>{isCheckedIn ? "🟢 Checked In" : "🔴 Not Arrived"}</p>
> ```

---

### 🎯 Success Criteria

Show working dashboard showing:

* Clean, reusable component architecture (`Props`).
* A fully populated list driven by array data (`List Rendering`).
* Dynamic badges and text styling driven by boolean states (`Conditional Rendering`).
