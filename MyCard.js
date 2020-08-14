import React from 'react'
import {Card , CardBody , CardTitle,CardText} from 'reactstrap'
import {FaEnvelope , FaMapMarkedAlt,FaPhone } from 'react-icons/fa'

const MyCard =({details})=>{

    return(
        <Card>

        <CardBody className="text-center">
        
        <img height="150" width="150" className="rounded-circle img-thumbnail border-danger" 
        src={details.picture?.large}/>

        <CardTitle className="text-primary">
        <h1>
        <span className="pr-4">{details.name?.title} </span>
        <span>{details.name?.first} </span>
        <span>{details.name?.last} </span>
        
        </h1>
        </CardTitle>
        <CardText>
            <FaMapMarkedAlt /> {details.location?.city}
            
            <p>
            <FaPhone />
            <span className="pr-4">
             
            {details.phone}
            </span>
           
            </p>

            <span className="pr-4">
            <p>



            <FaEnvelope/>
            {details.email}</p>
            </span>
            

            <p>Age is  {details.dob?.age}</p>
        </CardText>

        </CardBody>
        </Card>
    )



}

export default MyCard;
