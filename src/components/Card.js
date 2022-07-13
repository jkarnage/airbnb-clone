import star from "../images/star.png";

export default function Card(props) {
  let badgeText =
    props.openSpots === 0
      ? "Sold Out"
      : props.location === "Online"
      ? "Online"
      : null;
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={require(`../images/${props.coverImg}`)}
        className="card--image"
        alt="Experience profile"
      />
      <div className="card--stats">
        <img src={star} className="card--star" alt="star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
