import Transaction from '../transaction/transaction.js'

const Transactions = (props)=> (
    <div>
         {
props.transactions.map((transaction) => <Transaction key={transaction.id} transaction={transaction}/>)        
       }
    </div>
);

export default Transactions;