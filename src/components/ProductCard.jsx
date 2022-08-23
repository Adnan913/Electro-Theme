import {AiOutlineArrowRight, AiOutlineHeart,AiOutlineEye} from 'react-icons/ai'

import featured1 from './images/fea2.png';
import './productCard.css';

function ProductCard() {
    return (
        <div className='card'>
            <a href='/'>
                <div className='cardTop'>
                    <p className='product-vendor'>Bulgari</p>
                    <p className='product-title'>Faxtex Product Sample</p>
                </div>
                <div className='cardImage'>
                    <img src={featured1} alt="featured"/>
                </div>
                <div className='cardBottom'>
                    <p className='product-price'>$110.00</p>
                    <span><AiOutlineArrowRight /> </span>
                </div>
                <div className='cardBottomHidden'>
                    <div>
                        <p><span><AiOutlineEye/></span> View</p>
                        <p><span><AiOutlineHeart/></span> Wishlist</p>
                    </div>
                    
                </div>
                

            </a>
        </div>
    )
}
export default ProductCard;