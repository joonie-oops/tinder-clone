import React, { useState, useEffect } from 'react';
import database from './firebase';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

function TinderCards() {
  const [people, setPeople] = useState([]);

  // Run once will component loads and never again
  useEffect(() => {
    const unsubscribe = database
      .collection('people')
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      //this is the cleanup...
      unsubscribe();
    };
  }, [people]);

  return (
    <div>
      <div className='tinderCards__cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
