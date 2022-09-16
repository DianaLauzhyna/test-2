
import { Component } from 'react';
import Balance from '../balance/balance.js'


class Appp extends Component {
    constructor ()
        {
            super();
            this.state ={
                balance: 0
            }
            this.onIncrease = this.onIncrease.bind(this);
            //this.onDecrease = this.onDecrease.bind(this);
            console.log('constructor');
        }


/* componentDidMount (){
    console.log('componentDidMount')
}

componentWillUnmount(){
    'componentWillUnmount'
}

shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log(this.state);
    debugger
return nextState.balance<5;
} */

/* componentDidMount(){
    const balance = JSON.parse(window.localStorage.getItem('balance'));
    this.setState({balance})
}

componentWillUnmount(){
    window.localStorage.setItem('balance', JSON.stringify(this.state.balance))
    debugger
} */
    onIncrease() {
        this.setState({balance: this.state.balance +1})
    }
     
    onDecrease = ()=>{
        this.setState({balance: this.state.balance -1})
    }

    render () {
        console.log('render')
     return (
      <div>
       <Balance balance={this.state.balance}>
        Balance
       </Balance>
       <button onClick={this.onIncrease}> Add money</button>
       <button onClick={this.onDecrease}> Remove money</button>
      </div>
    )   
    } 
  };

  export default Appp;