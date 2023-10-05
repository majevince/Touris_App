// import React from 'react';

// function TopDestinations() {
//   return (
//     <div>
//       <h2>Top Destinations</h2>
//       {/* Add your content here */}
//     </div>
//   );
// }

// export default TopDestinations;


import React from 'react';
// import Images from './index.jpg'
// import * as images from 'components/Images'
// import './TopDestinations.css';

const topDestinationsData = [
  {
    id: 1,
    name: 'Paris, France',
    imageSrc: 'paris.jpg',
    description: 'Explore the romantic city of Paris, known for its iconic Eiffel Tower and delicious cuisine.',
    review: 'Rated 4.8/5 by travelers',
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    imageSrc: 'bali.jpg',
    description: 'Relax on the beautiful beaches of Bali and immerse yourself in its vibrant culture.',
    review: 'Rated 4.7/5 by travelers',
  },
  {
    id: 3,
    name: 'New York City, USA',
    imageSrc: './Images/index.jpg',
    description: 'Experience the hustle and bustle of New York City, home to iconic landmarks like Times Square and Central Park.',
    review: 'Rated 4.9/5 by travelers',
  },
];

function TopDestinations() {
  return (
    <div className="top-destinations">
      <h2>Top Destinations</h2>
      <div className="destination-list">
        {topDestinationsData.map((destination) => (
          <div key={destination.id} className="destination">
            <img src={destination.imageSrc} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            <p>{destination.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopDestinations;