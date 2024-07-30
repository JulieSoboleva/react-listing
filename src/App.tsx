import Listing from './components/Listing'
import { IItem } from './models/item'
import etsy from './data/etsy.json'
import './App.css'

function App() {
  const items: IItem[] = etsy;

  return (
    <div className="container">
      <Listing items={items} />
    </div>
  )
}

export default App
