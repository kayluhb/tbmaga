import Helmet from 'react-helmet';
import React from 'react';

export default function About() {
  const description = 'Who are these people and what am I doing here?';
  return (
    <main className="page page--about">
      <Helmet
        title="About"
        meta={[
            { name: 'description', content: description },
            { property: 'og:description', content: description },
            { property: 'og:image', content: 'http://thebrownsmakeamericagreatagain.com/images/about.jpg' },
        ]}
      />
      <h1 className="page__title">what?</h1>
      <div className="page__content">
        <p>
          Caleb and Lillian Brown have lived in NYC for the last 12 years and
          after willingly enduring earthquakes, tornados, hurricanes, blizzards, robberies,
          popes, a lack of central AC, and fashion week(s), we are packing our belongings and heading
          back to the beautiful Austin, TX to live closer to family, have a backyard, and get a dog.
        </p>
        <p>
          This site is a record of our journey from the 15th of May through the
          15th of June, 2016.  We are taking a long route by car through the
          north, midwest, west coast and southwest to get a glimpse of North American beauty.
          We will be stopping along the way to see friends & family, hike, and try out as much
          of the beer selection as we can while still sticking to our schedule.
        </p>
      </div>
      <img className="page__img" src="/images/about.jpg" alt="Caleb and Lillian Brown" />
    </main>
  );
}
