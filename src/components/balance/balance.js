const Balance = ({balance}) => {
    return (<div>
     
        {balance === 0?  'You dont have money': balance<0 ?'minuse balance' : 'pluse balanse'}

        </div>)
}
export default Balance;