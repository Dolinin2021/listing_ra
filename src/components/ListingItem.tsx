import { ListingItemProps } from "../interfaces/ListingItemProps";

export function ListingItem({ url, img, title, currencyCode, price, quantity}: ListingItemProps): JSX.Element {
  let newTitle = '';
  let newCurrency = '';
  let levelQuantity = '';

  if (title.length > 50) {
    newTitle = title.substring(0, 50) + '...';
  }

  if (currencyCode === 'USD') {
    newCurrency = '$';
  } else if (currencyCode === 'EUR') {
    newCurrency = '€';
  }

  if (quantity < 10) {
    levelQuantity = 'level-low';
  } else if (quantity > 20) {
    levelQuantity = 'level-high';
  } else {
    levelQuantity = 'level-medium';
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={img} alt="" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{newTitle || title}</p>
        <p className="item-price">
          {newCurrency}
          {price}
          {!newCurrency && ' ' + currencyCode}
        </p>
        <p className={'item-quantity ' + levelQuantity}>{quantity} left</p>
      </div>
    </div>
  );
}
