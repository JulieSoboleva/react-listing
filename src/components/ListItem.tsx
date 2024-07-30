import classNames from 'classnames'
import { ICard } from '../models/card'
import getFormattedPrice from './helper/getFormattedPrice'

export default function ListItem({url='', image='', title='', currency_code='y.e.', price='', quantity=0}: ICard) {
    const titleLimit = 50;

    const quantityClassName = classNames('item-quantity', {
        'level-low': quantity <= 10,
        'level-medium': quantity > 10 && quantity <= 20,
        'level-high': quantity > 20,
    });

    return (
        <div className='item'>
            <div className='item-image'>
                <a href={url}>
                    <img src={image}/>
                </a>
            </div>
            <div className='item-details'>
                <p className='item-title'>{title.length > titleLimit ? 
                    `${title.slice(0, titleLimit)}…` : title}</p>
                <p className='item-price'>{getFormattedPrice(currency_code, price)}</p>
                <p className={quantityClassName}>{quantity} left</p>
            </div>
        </div>
    );
}
