import React,{useState,useEffect}from 'react';
import {Container,row,column, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Axios from 'axios'
import './App.css';
import MyCard from './MyCard'
function App() {
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    console.log("RESPONSE: ", data);

    const details = data.results[0];

    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);



  return (
    
<Container fluid className="p-4 bg-primary App">
<h1 className="text-center color-danger">RANDOM USER GENERATOR USING REACTJS</h1>
<Row>
<Col md={4} className="offset-md-4 mt-4">

      <MyCard details={details}/>


</Col>

</Row>


</Container>

  );
}

export default App;
