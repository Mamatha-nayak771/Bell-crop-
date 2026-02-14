import { useState, useEffect } from "react";
import axios from "axios";

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`/api/events?search=${search}`)
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, [search]);

return (
    <div>
      <input
        type="text"
        placeholder="Search events..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div>
        {events.map(ev => (
          <div key={ev._id}>
            <h3>{ev.name}</h3>
            <p>{ev.location} - {new Date(ev.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
