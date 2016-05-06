import Helmet from 'react-helmet';
import React from 'react';
import ReactDisqusThread from 'react-disqus-thread';

export default function About() {
  const description = 'Get in touch with us.';
  return (
    <main className="page page--contact">
      <Helmet
        title="Contact"
        meta={[
            { name: 'description', content: description },
            { property: 'og:description', content: description },
            { property: 'og:image', content: 'http://thebrownsmakeamericagreatagain.com/images/contact.jpg' },
        ]}
      />
      <h1 className="page__title">sup?</h1>
      <div className="page__content">
        <p>Have a suggestion for something along the way?  Leave a message for us below.</p>
        <ReactDisqusThread
          shortname="thebrownsmakeamericagreatagain"
          identifier="tbmaga-contact"
          title="Get in touch with us"
          url="http://thebrownsmakeamericagreatagain.com/contact"
        />
      </div>
    </main>
  );
}

