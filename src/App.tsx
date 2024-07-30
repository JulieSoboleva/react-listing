import Listing from './components/Listing'
import { IItem } from './models/item'
import etsy from './data/etsy.json'
import './App.css'

function App() {

  const objects: IItem[] = etsy.filter(item => item.state !== 'removed')
    .map(item => ({
      listing_id: item.listing_id,
      url: item.url,
      MainImage: { url_570xN: item.MainImage?.url_570xN },
      title: item.title,
      currency_code: item.currency_code,
      price: item.price,
      quantity: item.quantity
    }));

  console.dir(objects);

  return (
    <div className='container'>
      <Listing items={objects} />
    </div>
  )
}

export default App
