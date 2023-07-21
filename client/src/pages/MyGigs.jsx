import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'
import { getAllEvents } from '../services';
import '../styles/mygigs.css'

function MyGigs() {

  const [events, setEvents] = useState([]);

  // DATE FORMAT TRANSFORM //

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // RANGE EVENTS PER DATE //

  useEffect(() => {
    getAllEvents()
    .then(data => {
      const sortedEvents = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setEvents(sortedEvents);
    })
      .catch(error => console.error('Erreur lors de la requête :', error));
  }, []);


  return (
    <div>
    <NavBar />
    <title>Mes concerts</title>
      <h2>Mes Concerts</h2>
        {events.map(event => (
          <div className='post-container' key={event.id}>
            <h3>{event.artist_name}</h3>
              <h4>{event.location}</h4>
                <h5>{formatDate(event.date)}</h5>
                  <div className='review'>{event.comment}</div>
          </div>
        ))}
  </div>
);
}

export default MyGigs