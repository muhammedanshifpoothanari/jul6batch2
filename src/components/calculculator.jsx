import React, { useState } from 'react';
import NavBar from './navbar';
import axios from 'axios';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '2rem',
    background: 'linear-gradient(to right, #ebf8ff, #c3dafe)'
  },
  cardDark: {
    width: '300px',
    padding: '1rem',
    borderRadius: '1rem',
    backgroundColor: '#1a1a2e',
    color: 'white'
  },
  cardLight: {
    width: '300px',
    padding: '1rem',
    borderRadius: '1rem',
    backgroundColor: 'white',
    color: 'black'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  icon: {
    width: '1.5rem',
    height: '1.5rem'
  },
  balanceDark: {
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: '#2e2e3e',
    textAlign: 'center'
  },
  balanceLight: {
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: '#e0e0e0',
    textAlign: 'center'
  },
  balanceYellow: {
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: '#e0e0e0',
    textAlign: 'center'
  },
  textGray400: {
    color: '#9ca3af'
  },
  textGray500: {
    color: '#6b7280'
  },
  text3xl: {
    fontSize: '1.875rem',
    fontWeight: 'bold'
  },
  details: {
    marginBottom: '1rem'
  },
  detailItem: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0.5rem'
  },
  buttonDark: {
    padding: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: '#2e2e3e',
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },
  buttonLight: {
    padding: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: '#f0f0f0',
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },
  operend : {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
    margin: '10px'
  },
  operaendButton: {
    padding: '1rem',
    borderRadius: '0.5em',
    backgroundColor: '#f0f0f0',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
 
};

function Calculator(){
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);
    let [opporator, setOpporator] = useState('');
    let [result, setResult] = useState(0);

    // function calculate input values
    function calculate(input) {
        if(num1 == 0) {
            setNum1(input);
        } else {
            setNum2(input);
        }
    }

    //clear

    function clear() {
        setResult(0);
        setOpporator('');
        setNum1(0)
        setNum2(0)
    }

    // operator chhoseer function

    function ChooseOpperator(operend) {
        setOpporator(operend);
    }
    

    // result function
   async function handleResult() {
    
    let response = await axios.post('https://batch2-lbkm.onrender.com/calculate', {
        num1, num2, opporator
    })
    setResult(response.data);
  }



    return (
      <>
      <NavBar />
      
  <div style={styles.container}>
    <div style={styles.cardDark}>
      <div style={styles.header}>
        <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </div>
      <div style={styles.balanceDark}>
        <p style={styles.textGray400}>Final balance</p>
        <p style={styles.text3xl}>&#8377;{result}</p>
      </div>
      <div style={styles.details}>
        <div style={styles.detailItem}>
          <p style={styles.textGray400}>Balance</p>
          <p>&#8377;{result}</p>
        </div>
        <div style={styles.detailItem}>
          <p style={styles.textGray400}>Num1</p>
          <p>{num1}</p>
        </div>
        <div style={styles.detailItem}>
          <p style={styles.textGray400}>Num2</p>
          <p>{num2}</p>
        </div>
       
        <div style={styles.detailItem}>
          <p style={styles.textGray400}>operator</p>
          <p>{opporator}</p>
        </div>
        <div style={styles.operend}>
      <button    style={styles.operaendButton} onClick={() => ChooseOpperator('add')}>+</button>
        <button  style={styles.operaendButton}   onClick={() => ChooseOpperator('sub')}>-</button>
        <button  style={styles.operaendButton}   onClick={() => ChooseOpperator('mul')}>*</button>
        <button  style={styles.operaendButton}   onClick={() => ChooseOpperator('div')}>/</button>
      </div>
      </div>
      
      <div style={styles.grid}>
        <button style={styles.buttonDark}  onClick={() => calculate(1)} >1</button>
        <button style={styles.buttonDark}  onClick={() => calculate(2)} >2</button>
        <button style={styles.buttonDark}  onClick={() => calculate(3)} >3</button>
        <button style={styles.buttonDark}  onClick={() => calculate(4)} >4</button>
        <button style={styles.buttonDark}  onClick={() => calculate(5)} >5</button>
        <button style={styles.buttonDark}  onClick={() => calculate(6)} >6</button>
        <button style={styles.buttonDark}  onClick={() => calculate(7)} >7</button>
        <button style={styles.buttonDark}  onClick={() => calculate(8)} >8</button>
        <button style={styles.buttonDark}  onClick={() => calculate(9)} >9</button>
        <button style={styles.buttonLight}    onClick={handleResult}>=</button>
        <button style={styles.buttonDark}  onClick={() => calculate(0)} >0</button>
        <button style={styles.buttonLight} onClick={clear} >C</button>
      </div>
    </div>
    <div style={styles.cardLight}>
      <div style={styles.header}>
        <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </div>
      <div style={styles.balanceLight}>
        <p style={styles.textGray500}>Final balance</p>
        <p style={styles.text3xl}>&#8377;{result}</p>
      </div>
      <div style={styles.details}>
        <div style={styles.detailItem}>
          <p style={styles.textGray400}>Balance</p>
          <p>&#8377;{result}</p>
        </div>
        <div style={styles.detailItem}>
          <p style={styles.textGray400}>Num1</p>
          <p>{num1}</p>
        </div>
        <div style={styles.detailItem}>
          <p style={styles.textGray400}>Num2</p>
          <p>{num2}</p>
        </div>
       
        <div style={styles.detailItem}>
          <p style={styles.textGray400}>operator</p>
          <p>{opporator}</p>
        </div>
        <div style={styles.operend}>
      <button    style={styles.operaendButton} onClick={() => ChooseOpperator('add')}>+</button>
        <button  style={styles.operaendButton}   onClick={() => ChooseOpperator('sub')}>-</button>
        <button  style={styles.operaendButton}   onClick={() => ChooseOpperator('mul')}>*</button>
        <button  style={styles.operaendButton}   onClick={() => ChooseOpperator('div')}>/</button>
      </div>
      </div>
     
      <div style={styles.grid}>
        <button style={styles.buttonLight}    onClick={() => calculate(1)}>1</button>
        <button style={styles.buttonLight}    onClick={() => calculate(2)}>2</button>
        <button style={styles.buttonLight}    onClick={() => calculate(3)}>3</button>
        <button style={styles.buttonLight}    onClick={() => calculate(4)}>4</button>
        <button style={styles.buttonLight}    onClick={() => calculate(5)}>5</button>
        <button style={styles.buttonLight}    onClick={() => calculate(6)}>6</button>
        <button style={styles.buttonLight}    onClick={() => calculate(7)}>7</button>
        <button style={styles.buttonLight}    onClick={() => calculate(8)}>8</button>
        <button style={styles.buttonLight}    onClick={() => calculate(9)}>9</button>
        <button style={styles.buttonLight}    onClick={handleResult}>=</button>
        <button style={styles.buttonLight}    onClick={() => calculate(0)}>0</button>
        <button style={styles.buttonLight}    onClick={clear}             >C</button>
      </div>
    </div>
  </div>
  </>
    )
}


export default Calculator;
