import './App.css';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';

const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];

const messages = [
  {message: 'hello', error: true},  
  {message: 'javascript', error: false},  
  {message: 'expovisiov', error: true},  
  {message: 'react', error: true},  
  {message: 'angular', error: false}, 
  {message: 'es6', error: false},
];

const words= ['экспо ', 'js ', 'react ', 'css ', 'angular ', 'vue ', 'html '];

function App() {

  //Первое задание

  const array2 = array.filter(test)

  function test(item){
    if(item >= 0){
      return item
    }
  }

  let arr3 = array2.map(item => {
    return(
      <p>
        {item}
      </p>
    )    
  }
  ) 

  //Второе задание


  const messages2 = messages.filter(item => {
    if(item.error === false){
      return item
    }
  });

  let messages3 = messages2.map(item => {
    return(
      <p>
          {item.message}
      </p>
    )
  });

  console.log(messages2)

  //Третье задание

  const words2 = words.filter(item => {
    if(item.length < 5){
      return item
    }
  })

  const words3 = words2.map(item => {
    return (item = '*')
  })

  //Четвертое задание


  const sendMessage = (mes)=> console.log(mes);

  sendMessage('dasd')


  const number = (num)=> num / 2;

  console.log(number(12))


  const showConsole = (text) => console.log(text)

  showConsole('Экспо')

  const concatWords = (first, second) => first + second;

  console.log(concatWords(12, 15))

  // Задача 5

  function justText(text1){
    return text1
  } 

  console.log(justText('expo'))
  
  function logging(text3){
    return text3
  }

  console.log(logging('expoasdas'))

  function add(x,y,z){  
    return z * x * y;
  }

  console.log(add(2, 3, 3))

  function onlyPositive(number){
    if(number < 0) {
      return false;
    }
  
    return true;
  }

  console.log(onlyPositive(-22))


  return (
    <div>
        {arr3}
        {messages3}
        {words3}
    </div>
    
  );
}




export default App;
