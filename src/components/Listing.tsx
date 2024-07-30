import { IItem } from '../models/item';
import ListItem from './ListItem';

interface IItems {
    items: IItem[]
}

export default function Listing({ items }: IItems) {

    return (
        <div className='item-list'>
            {items.map(item => {
                
                    return (
                    <ListItem 
                        key={item.listing_id}
                        id={item.listing_id}
                        url={item.url}
                        image={item.MainImage.url_570xN}
                        title={item.title}
                        currency_code={item.currency_code}
                        price={item.price}
                        quantity={item.quantity} />
                );
            })}
        </div>
    );
}

Listing.defaultProps = {
    items: [],
}