import react from 'react'
import '../css/expence.css'
import {useSelector,useDispatch} from 'react-redux'
import {addTranscation,setText,setAmount} from '../actions/index'

function expence(){
     
    const transaction = useSelector(state=>state.transactionData)
    const text = useSelector(state=>state.Text)
    const amount = useSelector(state=>state.Amount)
    const dispatch= useDispatch()

    const total = transaction.reduce((prev, current) => {   
     return prev + parseInt(current.amount);
    }, 0);

    const expence = transaction.reduce((prev, current) => {   
     if(parseInt(current.amount) < 0){
         return prev + parseInt(current.amount)
     }else{
         return prev;
     }
    }, 0);
    
    console.log(expence+"e")
    const income = transaction.reduce((prev, current) => {
      if(parseInt(current.amount) > 0){
         return prev + parseInt(current.amount)
       }else{
         return prev;
       }
    }, 0);
    console.log(income+"i")
  
 
    console.log(transaction)
    // return null
    return(
        <>
            <div className="container">
                <div><h2>Relevel Money Tracker</h2></div>
                <div>
                    <div><h3>Your Balance</h3></div>
                    <div><h2>{`$ ${total}.00`}</h2></div>
                </div>
                <div className="balanceBox">
                    <div className="income"><h3>income</h3><h4>{`$ ${income}.00`}</h4></div>
                    <div className="expence"><h3>expence</h3><h4>{`$ ${expence}.00`}</h4></div>
                </div>
                <div className="history">
                    History
                    <hr  style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .09,
                        borderColor : '#000000'
                    }}/>

                    {
                     transaction.length===0 ? <div className="nothing">No Transactions..</div> : transaction.map((m,i)=>{
                            return(
                                
                                    <div key={i} className={`transactionData ${m.amount<0 ?"tbr-red":"tbr-green"}`}>
                                        <div>{m.text}</div>
                                        <div className="amount">{`${m.amount>0 ? "+$"+m.amount :  "$"+m.amount}`}</div>
                                    </div>
                                
                            )
                        })
                    }
                </div>
                <div className="history">
                    Add New Transaction
                    <hr  style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .09,
                        borderColor : '#000000'
                    }}/>
                    {
                        
                    }
                </div>
                <div className="text">
                    Text
                    <input type="text" value={text} onChange={(e)=>dispatch(setText(e.target.value))} placeholder="Enter text" />
                </div>
                <div className="text">
                    Amount <br></br> 
                     <span>(negetive expence ,positive income )</span>
                    <input type="number" value={amount} onChange={(e)=>dispatch(setAmount(e.target.value))} />
                </div>
                <div>
                <button className="btn button-14" onClick ={()=>dispatch(addTranscation(text,amount))}>Add Transaction</button>
                </div>
            </div>
        </>
    )
}

export default expence