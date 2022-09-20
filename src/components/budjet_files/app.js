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
  }

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
        <hr />
        <Transactions transactions={this.state.transactions} />
      </div>
    );
  }
}

export default Appp;
