import { Component } from 'react';
import Balance from '../balance/balance.js';
import Transactions from '../transactions/transactions.js';
import Form from '../Form/form.js';

let id = 0;

class Appp extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transactions: [],
    };
    this.onChange = this.onChange.bind(this);
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
  /*     onIncrease() {
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
    } */
  onChange = value => {
    this.setState(state => ({
      balance: state.balance + Number(value),
      transactions: [{ value, label: 'change' }, ...state.transactions],
    }));
  };
  render() {
    console.log('render');
    return (
      <div>
        <Balance balance={this.state.balance} />
        <Form onChange={this.onChange} />
        {/*        <button onClick={this.onIncrease}> Add money</button>
       <button onClick={this.onDecrease}> Remove money</button> */}
        <hr />
        <Transactions transactions={this.state.transactions} />
      </div>
    );
  }
}

export default Appp;
