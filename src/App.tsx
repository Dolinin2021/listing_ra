import data from './etsy.json';
import { Listing } from './components/Lising';
import { Item } from './interfaces/Item';
import './App.css';

const arr: Item[] = [];

data.forEach((item) => {
  if (item.MainImage !== undefined) {
    arr.push({
      'listing_id': item.listing_id,
      'url': item.url,
      'MainImage': item.MainImage.url_570xN,
      'title': item.title,
      'currency_code': item.currency_code,
      'price': item.price,
      'quantity': item.quantity,
    });
  }
});

export default function App(): JSX.Element {
  return <Listing items={arr} />;
}
