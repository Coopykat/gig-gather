import React, { useState } from 'react';
import '../styles/createpost.css';
import NavBar from '../components/NavBar';
import { createEvent } from '../services';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const navigate = useNavigate();


  const [formValues, setFormValues] = useState({
    artist_name: '',
    date: '',
    location: '',
    comment: '',
  });

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    createEvent(formValues)
      .then(({ data }) => {
        navigate(`/my-gigs`);
      })
      .catch(function (err) {
        alert(err.message);
      });

  };

  return (
    <div>
      <NavBar />
      <h2>Post a gig !</h2>

      <form className="form-post-event" onSubmit={onSubmit}>
        <input
          className="artist-name"
          type="text"
          name="artist_name"
          placeholder="enter the name of the artist"
          value={formValues.artist_name}
          onChange={onChange}
        />
        <input
          className="location"
          type="text"
          name="location"
          placeholder="enter the location"
          value={formValues.location}
          onChange={onChange}
        />
        <input
          className="event-date"
          type="date"
          name="date"
          placeholder="enter the date of the event"
          value={formValues.date}
          onChange={onChange}
        />
        <textarea
          id="comment"
          name="comment"
          placeholder="Enter a review or a memory"
          rows="6"
          value={formValues.comment}
          onChange={onChange}
        ></textarea>
        <button id="post-gig-btn" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default CreatePost;