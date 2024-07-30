import classNames from "classnames";
import { ICard } from "../models/card";
import getFormattedPrice from './helper/getFormattedPrice'

export default function ListItem(card: ICard) {
    const titleLimit = 50;

    const quantityClassName = classNames('item-quantity', {
        'level-low': card.quantity <= 10,
        'level-medium': card.quantity > 10 && card.quantity <= 20,
        'level-high': card.quantity > 20,
    });

    return (
        <div className="item">
            <div className="item-image">
                <a href={card.url}>
                    <img src={card.image}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{card.title.length > titleLimit ? 
                    `${card.title.slice(0, titleLimit)}…` : card.title}</p>
                <p className="item-price">{getFormattedPrice(card.currency_code, card.price)}</p>
                <p className={quantityClassName}>{card.quantity} left</p>
            </div>
        </div>
    );
}