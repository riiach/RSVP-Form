const { useState } = React;

export function EventRSVPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attendees, setAttendees] = useState('');
  const [preferences, setPreferences] = useState('');
  const [guests, setGuests] = useState('No');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

  }

  return(
    <div 
      className={`form-container ${submitted ? "submitted" : ""}`}
    >
      <h1>Event RSVP Form</h1>
        <form
          onSubmit={handleSubmit}
      >
        <label
        >Name:
        <input 
          className="input"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        </label>
        <label
        >Email: 
        <input 
          className="input"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        </label>
        <label
        >Number of Attendees: 
        <input 
          className="input"
          type="number"
          placeholder="Number of Attendees"
          value={attendees}
          onChange={e => setAttendees(e.target.value)}
          required
        />
        </label>
        <label
        >Dietary Preferences: 
        <input 
          className="input"
          type="number"
          value={preferences}
          placeholder="Dietary Preferences (Optional)"
          onChange={e => setPreferences(e.target.value)}
        />
        </label>
        <label>
        Brining addiational guests?
        <input 
          type="checkbox"
          checked={guests === 'Yes'}
          onChange={(e) => setGuests(e.target.checked ? 'Yes' : 'No')}
        />
        </label><br/>
        <button
        >Submit RSVP</button>
        </form>
        {submitted && (
          <div
          className="confirmation"
        >
          <h1 
            className="confirmation-title"
          >RSVP Submitted!
          </h1>
            <label 
            className="confirmation-label"
            >Name: </label><span>{name}</span><br/>
            <label 
            className="confirmation-label"
            >Email: </label><span>{email}</span><br/>
            <label 
            className="confirmation-label"
            >Number of Attendees: </label><span>{attendees}</span><br/>
            <label 
            className="confirmation-label"
            >Dietary Preferences: </label><span>{preferences}</span><br/>
            <label 
            className="confirmation-label"
            >Brining Others: </label><span>{guests}</span>
        </div>
        )}
    </div>
  )
}