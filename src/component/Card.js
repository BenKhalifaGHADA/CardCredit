import React from 'react'
import './Card.css'
class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "GHADA BEN KHALIFA",
            number: "5241173476290435",
            expiry: ""

        }
    }

    //Name of Card Owner
    nameChange = (n) => {
        const re = /[^a-z\s]/gi;
        if (!n.target.value.match(re) && n.target.value.length <= 20)
            this.setState({ name: n.target.value.toUpperCase() });
    }


    //Card Number
    numberChange = c => {
        const re16digit = /[^0-9 ]/gi;
        
        if (!c.target.value.match(re16digit) && c.target.value.length <= 19) {
          this.setState({ number: c.target.value.replace(/[ ]/g, "") 
        
        });
        }
      };


    //Expiry date
    expiryChange = a => {
        const re = /[^0-9/]/gi;
        if (
          !a.target.value.match(re) &&
          a.target.value.slice(0, 1) <= 1 &&
          (a.target.value.slice(0, 2) <= 12 &&
           a.target.value.slice(0,2)!="00")
          
        ) {
          this.setState({ expiry: a.target.value.replace(/[/]/g, "") });
        }
      };

    //Valid number CARD
    //input: 111111111111111111
    //output: 1111 1111 1111 1111
    renderCardNumber = (number) => {

    let result = " "
    for (let i = 0; i < number.length; i += 4) {
        result += number.slice(i, i + 4) + ' '

    }
    return result.trim()
    }

    //Valid number thru
    //input: 1111
    //output: 11/11
    renderValidThru = date => {
        let arr = [];
        for (let i = 0; i < date.length; i += 2) {
          arr.push(date.slice(i, i + 2));
        }
        return arr.join("/");
      };


render() {
    return (
        <div>
            <div className='credit-card'>
                <div className='credit-card-logo' >
                    <img className='logo' src={this.props.logo} width="60" /></div>

                <div className='credit-card-number' >{this.renderCardNumber(this.state.number)}</div>

                <div className='credit-card-info'>
                    <div className='credit-card-info_name'>
                        <div className='credit-card-info-label'>CARDHOLDER'S NAME</div>
                        <div>{this.state.name}</div>
                    </div>

                    <div className='credit-card-info-expiry'>
                        <div className='credit-card-info-label'>VALID UP TO</div>
                        <div>{this.renderValidThru(this.state.expiry)}</div>
                    </div>
                </div>

            </div>



            <div className="formData" >
                <label>NAME
        <input type="text" maxLength="20" onChange={this.nameChange} value={this.state.name} />
                </label>
                <label>NUMBER CARD
        <input type="text" onChange={this.numberChange} value={this.state.number} />
                </label>
                <div>
                    <label>EXPIRATION DATE</label>
                    <div>
                        <input type="text" maxLength="4" onChange={this.expiryChange} value={this.state.expiry} />
                    </div>


                </div>

            </div>

        </div>



    )

}
        }


export default Card
