
import { Component } from 'react';
import Balance from '../balance/balance.js'

let id = 0;

class Appp extends Component {
    constructor ()
        {
            super();
            this.state ={
                balance: 0,
                transactions: []
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
        this.setState((state)=>({ 
            balance: state.balance +1,
            transactions: [{
                label:'increase',
                value: 1,
            id:++id}, ...state.transactions]
        }))
    }
     
    onDecrease = ()=>{
        this.setState((state)=>({ 
            balance: state.balance -1,
            transactions: [{
                label:'decrease',
                value: -1,
            id:++id}, ...state.transactions]
        }))
    }

    render () {
        console.log('render')
     return (
      <div>
       <Balance balance={this.state.balance}/>
       <button onClick={this.onIncrease}> Add money</button>
       <button onClick={this.onDecrease}> Remove money</button>
       <hr/> 
       {
this.state.transactions.map((transaction) =>(
    <div key={transaction.id}>
        Label: {transaction.label}
        <p>Value: {transaction.value}</p>
        <br/>
    </div>
))        
       }
      </div>
     ) 
    } 
  };

  export default Appp;