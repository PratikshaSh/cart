import React from 'react';

class CartItem extends React.Component{
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log('this.state', this.state);
        //form 1 of setState
        // this.setState({
        //     qty: this.state.qty + 1
        // }, () => {});

        //form 2 of setState - if previous state is required then use this
        this.setState((prevState)=>{
            return {
                qty: prevState.qty +1
            }
        });
    }
    decreaseQuantity = () => {
        const {qty} = this.state;
        if(qty === 0){
            return;
        }
        this.setState((prevState)=>{
            return {
                qty: prevState.qty - 1
            }
        });
    }



    render(){
        const { price, title, qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
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
                            onClick= {this.increaseQuantity}
                            />
                        <img alt="decrease" 
                            className="action-icons" 
                            src="https://as2.ftcdn.net/jpg/02/78/84/57/500_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg" 
                            onClick= {this.decreaseQuantity}
                            
                            />
                        <img alt="delete" 
                            className="action-icons" 
                            src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" 
                            />

                    </div>
                </div>

            </div>
        );
    }
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