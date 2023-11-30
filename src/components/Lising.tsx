import { ListingProps } from "../interfaces/ListingProps";
import { ListingItem } from "./ListingItem";

export function Listing({ items }: ListingProps): JSX.Element {
  return (
    <div className="item-list">
      {items.map((item) => (
        <ListingItem
          url={item.url}
          img={item.MainImage}
          title={item.title}
          currencyCode={item.currency_code}
          price={item.price}
          quantity={item.quantity}
          key={item.listing_id}
        />
      ))}
    </div>
  );
}
