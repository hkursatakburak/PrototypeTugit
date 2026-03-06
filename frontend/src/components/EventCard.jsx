import React from 'react';
import '../assets/css/card.css';

export default function EventCard({ title, subtitle, image, desc, tags = [], presenters = [] }) {
  return (
    <div className="card1">
      <div className="poster">
        <img src={image} alt={title} />
      </div>
      <div className="details">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>

        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <p className="desc">{desc}</p>
        
        {presenters && presenters.length > 0 && (
          <div className="cast">
            <h3>Kişiler</h3>
            <ul>
              {presenters.map((person, index) => (
                <li key={index}>
                  <img src={person.image} alt={person.name} title={person.name} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
