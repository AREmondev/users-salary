import React from 'react';
import './Employ.css';

const Employ = (props) => { console.log(props);
    const {email, first_name, image, salary,id}  = props.data;
    const handleAddSalary = props.handleAddSalary;
    return (
        <div className='container'>
            <div className="employ2">
                <div>
                <img className="image" src={image} alt=""/>
                </div>
                <div>
                <h4>This is {first_name}</h4>
                <p>This is {first_name}'s email address: {email} </p>
                <p>{first_name}'s salary is : {salary}</p>
                <button onClick={()=>handleAddSalary(props.salary)} className='btn'> add salary + </button>
                </div>
            </div>
        </div>
       
        
    );
};

export default Employ;