// import Today from "./Age"
// import FunctionPlay from "./FunctionPlay"
// import type { Student } from "./aweto"
// import {useState} from "react";
// import { TodoList } from "./ToDo";
// import Component from "./Component";
// import LoginStatus from "./LoginStatus";
// import Greeting from "./Greeting";
// import LoadingSpinner from "./LoadingSpinner";
// import UserProfile, { UserProps, type UserData } from "./UserProfile";
import {Route,Routes,Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css'; 
import { DashboardLayout } from "./pages/DashboardLayout";
import Shoes from "./pages/Shoes";
import ProtectedRoute from "./pages/ProtectedRoute";
import Login from "./pages/Login";
import { TodoList } from "./ToDo";
import LoadingSpinner from "./LoadingSpinner";
import Greeting from "./Greeting";
import LoginStatus from "./LoginStatus";
import UserProfile, { UserProps } from "./UserProfile";
import FruiList from "./FruiList";
import UserLIst from "./UserLIst";




function App() {
  // const student: Student = {
  //   name: 'John',
  //   age: 27,
  //   location: 'New York'
  // }
  // // console.log("Test")
  // const [count, setCount] = useState(0)
  // const [nameList, setNamelist] = useState(["Mow", "Clean", "Study"])

  // const increaseCount = (step:number) =>{
  //   setCount(prevCount => prevCount + step)
  // }
  // const array1 = [1,2]
  // const array2 = [3,4]
  // const array3 = [array1,array2]
  // const array4 = [...[1,2],...[3,4]]
  // console.log(array4)


  // console.log(array3)
  // // let nameList = ["John", "Jack", "Jeff"]
  // const removeName = (index:number) => {
  //   console.log(nameList.slice(0,index)) // [[],[]]'
    
  //   setNamelist(prevList => [...prevList.slice(0,index), ...prevList.slice(index+1,prevList.length)])
  // }
  
  // const removeNameAlt = (index:number) =>{
  //   nameList.splice(index,1)
  

  return (
    <div>
      {/* <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/about">About</Link>
      <Link to="/dashboard/contact">Contact</Link> */}
      {/* <Link to="/shoes/1">Shoe 1</Link>
      <Routes>
      <Route path="/shoes/:id" element={<Shoes />} />
      <Route path="/" element= {<ProtectedRoute><Home /></ProtectedRoute>}/>
      <Route path="/login" element={<Login />}/> */}
      {/* <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route> */}
    {/* </Routes> */}
    {/* <TodoList /> */}
    {/* <LoadingSpinner  isLoading={true}/>
    <Greeting />
    <UserProfile  /> */}
    {/* <LoginStatus /> */}
    <FruiList />
    <UserLIst />
    </div>
  )
}

export default App

// <div className="page">
      {/* <TodoList /> */}
      {/* <Component /> */}
      
      {/* <LoginStatus isLoggedIn={true} />
      <LoadingSpinner isLoading={true} />
      <Greeting /> */}
      {/* <UserProfile user={null} /> */}
      {/* <UserProfile user = {UserProps} /> */}

    // </div>