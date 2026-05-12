import "./Destination.css";
export default function Destination() {

const destinations = [
  {
    name: "Rajasthan",
    img: `${process.env.PUBLIC_URL}/assets/raj-4.jpg`
  },
  {
    name: "Kerala",
    img: `${process.env.PUBLIC_URL}/assets/bac 4.png`
  },
  {
    name: "Ladakh",
    img: `${process.env.PUBLIC_URL}/assets/Ladakhcomp.jpg`
  },
  {
    name: "Goa",
    img: `${process.env.PUBLIC_URL}/assets/goacomp.jpg`
  }
];

return (

<section
  id="destination"
  className="destination"
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/destinationbg.jpg)`
  }}
>

<div className="destination-overlay-top"></div>

<h2 className="destination-heading">
Popular Destinations
</h2>

<div className="destination-cards">

{destinations.map((place, i) => (

<div key={i} className="destination-card">

<img src={place.img} alt={place.name} />

<div className="card-overlay">
<h3>{place.name}</h3>
</div>

</div>

))}

</div>

<div className="destination-overlay-bottom"></div>

</section>

);

}