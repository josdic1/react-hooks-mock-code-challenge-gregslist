import { useState } from 'react';
function ListingCard({listing, onDelete}) {

  const [isLiked, setIsLiked ] = useState(false)

function onLikeToggle() {
  setIsLiked(!isLiked)
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick={onLikeToggle} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={onLikeToggle} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={() => onDelete(listing.id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
