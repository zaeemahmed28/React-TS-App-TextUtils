import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import Message from './Message';
import NavigationBar from './components/NavigationBar';
import Form from './components/Form';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter,
  RouterProvider,
  Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App(){
  let items = [
    'New York',
    'San francisco',
    'Tokyo',
    'London',
    'Paris'
];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  interface AlertType {
    msg: string,
    type: string
  }

  const [mode, setMode] = useState('light');
  const [alertVisible, setAlertVisibility] = useState(false);
  const [alert, setAlert] = useState({
    msg: '',
    type: ''
  });

  const showAlertFunction = (message: string, type: string) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout (() => {
      setAlertVisibility(false);
    }, 2000)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setAlertVisibility(true);
      showAlertFunction(" Dark mode has been enabled", "success")
      /*
      setInterval(() => {
        document.title = 'TextUtils is Amazing'
      }, 2000)
      setInterval(() => {
        document.title = 'Install TextUtils Now'
      }, 1500)
      */
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlertVisibility(true);
      showAlertFunction(" Light mode has been enabled", "success")
    }
  }

  return (
    <>
      <NavigationBar title="TextUtils" mode={mode} toggleFunction={toggleMode}/>
      {alertVisible ? <Alert alert={alert} />:null}
      <div className='container my-3'>
        <Routes>
          <Route index element = {<Form heading="Enter your text to Analyze" mode={mode} alertFunction={showAlertFunction} alertVisibility={setAlertVisibility} />}/>
          <Route path="/about" element={<About />} />
        </Routes>

        {/*<About/>*/}
      </div>  
      {/*<Button color="success" onClick={() => console.log('Clicked')}>Submit</Button>*/}
      
    </>
  )
}

export default App;