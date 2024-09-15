import React from 'react'

const Regions = () => {
  return (
    <>
      <section id='regions'>
        <h1>OUR REGIONS</h1>
        <p>we offer a collection of handpicked luxury rentals in some of the world’s most stunning and sought-after locations. Each destination has been carefully selected for its beauty, culture, and ability to provide an unforgettable experience.
<br /><br />
Featured Regions:
<br /><br />
Mediterranean Coastlines
<br /><br />

Bask in the sun along the crystal-clear waters of the Mediterranean. From luxurious villas in the south of France to breathtaking coastal escapes in Italy and Greece, experience a perfect blend of elegance and charm.
Tropical Paradises
<br /><br />

Discover private retreats in exotic locations like Bali, the Maldives, and the Caribbean. Our tropical properties offer serenity, stunning views, and world-class amenities for the ultimate escape.
Iconic Cities
<br /><br />
Enjoy sophisticated urban living in the heart of global cities such as New York, London, Paris, and Dubai. Our premium city apartments and penthouses provide luxury, privacy, and access to the best the city has to offer.
Mountain Getaways
<br /><br />
Experience the serenity of mountain life with our luxurious chalets in the Swiss Alps, Aspen, and other iconic ski destinations. Perfect for those seeking adventure, privacy, and stunning natural beauty.
Countryside Retreats
<br /><br />
Escape to the rolling hills and vineyards of Tuscany, Provence, and the English countryside. Our rural estates offer peace, relaxation, and a taste of refined countryside living.
Where Will Your Journey Take You?
No matter where you wish to travel, Elite Heaven provides access to exclusive properties in the most coveted regions worldwide. Explore our regions and find your perfect luxury escape.</p>
        <div className="region_container">
        <div className="card">
         <img src="/region1.jpg" alt="mountains" />
         <h2>Mountains</h2>
         <p><span>90</span> Properties</p> 
        </div>
        <div className="card">
        <img src="/region2.jpg" alt="coastline" />
         <h2>Coastline</h2>
         <p><span>52</span> Properties</p> 
        </div>
        </div>
        </section> 
    </>
  )
}

export default Regions
