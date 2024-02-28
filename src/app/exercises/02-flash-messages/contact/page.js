'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { ToastContext } from '../../../../components/ToastProvider';

function ContactPage() {

  // get the create toast method via context
  const { createToast } = React.useContext(ToastContext);

  // define a router variable
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    console.log('hello submitted')
    // send the data to the server

    // redirect the user back to homepage, programmatically with useRouter
    // call the router.push, and send them to the path
    router.push('/exercises/02-flash-messages');

    // call the create toast method
    createToast("Your message was delivered", 'success');
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
