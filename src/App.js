// import {Redirect } from 'react-router';

import NavBar from './component/NavBar';
import CurdOperation from './component/CurdOperation';
import AllUser from './component/AllUser';
import AddUser from './component/AddUser';
import NoteFound from './component/NoteFound';
import EditUser from './component/EditUser'
import {BrowserRouter as Router,Routes,Route,Link,Navigate} from 'react-router-dom';

function App() {
  return (
    
    <Router>
    <NavBar/>
    <Routes>

    <Route path='/' element={<CurdOperation/>} />
    <Route path='/all' element={<AllUser/>} />
    <Route path='/add' element={<AddUser/>} />
    <Route path='/edit/:id' element={<EditUser/>} />

    {/* <Route path="*" element={<Navigate replace to="/" />} /> */}

    <Route path= '*' element= {<NoteFound /> }/>
  
</Routes>
</Router>

  );
}

export default App;
