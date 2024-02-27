'use client';
import React from 'react';

function ContactPage() {

  function handleSubmit(event) {
    event.preventDefault();
    console.log('hello submitted')
    // send the data to the server

    // redirect the user back to homepage
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
