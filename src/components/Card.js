import profile from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card() {
  return (
    <section className="card">
      <p className="card--status">SOLD OUT</p>
      <img src={profile} alt="Experience profile" className="card--photo" />
      <div className="card--info">
        <div className="card--info--rating">
          <img src={star} alt="star" className="card--info--rating--star" />
          <span className="card--info--rating--value">5.0</span>
          <span className="card--info--rating--quantity">(6)</span>
          <span className="card--info--rating--location">•USA</span>
        </div>
        <p className="card--info--summary">Life lessons with Katie Zaferes</p>
        <div className="card--info--pricing">
          <span className="card--info--pricing--floor">From $136</span>
          <span className="card--info--pricing--unit"> / person</span>
        </div>
      </div>
    </section>
  );
}
