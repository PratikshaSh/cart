import React from 'react';

const CartItem = (props) =>{


    const { price, title, qty} = props.product;
    const {
        product, 
        onIncreaseQuantity, 
        onDecreaseQuantity, 
        onDeleteProduct
    } = props;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src= {product.img}/>
            </div>
            <div className="right-block">
                <div style={ {fontSize: 25} }>{title}</div>
                <div style={ {color: '#777'} }>Rs {price}</div>
                <div style={ {color: '#777'} }>Qty: {qty}</div>

                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img alt="increase" 
                        className="action-icons" 
                        src="https://as1.ftcdn.net/jpg/02/51/03/82/500_F_251038282_CLb3d8tk99bGoU9ILEYS8vY215fgRmGT.jpg" 
                        onClick= {() => onIncreaseQuantity(product)}
                        />
                    <img alt="decrease" 
                        className="action-icons" 
                        src="https://as2.ftcdn.net/jpg/02/78/84/57/500_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg" 
                        onClick= {() => onDecreaseQuantity(product)}

                        
                        />
                    <img alt="delete" 
                        className="action-icons" 
                        src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" 
                        onClick= {() => onDeleteProduct(product.id)}
                        
                        />

                </div>
            </div>

        </div>
    );
    
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;