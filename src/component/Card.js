import React from 'react'
import './Card.css'
class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"GHADA BEN KHALIFA",
            number:5241173476290435,
            expiry:1111

        }
    }

    //Name of Card Owner
    nameChange = (n) => {
        this.setState({
            name: n.target.value
        });
    }

    //Card Number
    numberChange(c) {
        this.setState({
            number: c.target.value
        });
    }

    //Expiry date
    expiryChange(a){
        this.setState({
            expiry:a.target.value
        })
    }

    //Valid number CARD
    //input: 111111111111111111
    //output: 1111 1111 1111 1111
    renderCardNumber = (number) => {
        number = number.toString();
        let result = " "
        for (let i = 0; i < number.length; i += 4) {
            result += number.slice(i, i + 4) + ' '
            
        }
        return result.trim()

    }

    //Valid number thru
    //input: 1111
    //output: 11/11
    renderValidThru = (number) => {
        number = number.toString();
        return number.slice(0, 2) + '/' + number.slice(2);
    }


    render() {
        return (
            <div>
                <div className='credit-card'>
                    <div className='credit-card__logo' >
                        <img className='logo' src={this.props.logo} width="60" /></div>

                    <div className='credit-card__number' >{this.renderCardNumber(this.state.number)}</div>

                    <div className='credit-card__info'>
                        <div className='credit-card__info_name'>
                            <div className='credit-card__info_label'>CARDHOLDER'S NAME</div>
                            <div>{this.state.name.toUpperCase()}</div>
                        </div>

                        <div className='credit-card__info_expiry'>
                            <div className='credit-card__info_label'>VALID UP TO</div>
                            <div>{this.renderValidThru(this.state.expiry)}</div>
                        </div>
                    </div>

                </div>



                <div className="formData" >
                    
                        <label>NAME
        <input type="text" maxLength="20" onChange={this.nameChange.bind(this)} />
                        </label>
                        <label>NUMBER CARD
        <input type="text" maxLength="16" onChange={this.numberChange.bind(this)} />
                        </label>
                        <div>
                            <label>EXPIRATION DATE</label>
                            <div>
                                <input type="text" maxLength="4" onChange={this.expiryChange.bind(this)} />
                            </div>


                        </div>
                    
                </div>

                </div>



                )
        
            }
        }
        
        
        export default Card
