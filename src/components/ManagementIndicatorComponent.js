import React, {useState} from 'react'
import {db} from "../firebase"
import {collection, getDocs, addDoc, setDoc, doc} from "firebase/firestore"
import "./ManagementIndicatorComponent.css"
import { Button } from "react-bootstrap";

const ManagementIndicatorComponent = (progName) => {
    const [formFields, setFormFields] = useState([
        { name: '', type: '' },
      ])
    
      const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
   
        try {
          setDoc(doc(db, "program_templates", progName.props,"categories", "form_fields"), {
            formFields
          })
        
        } catch (err) {
        console.log(err)
        }
      }
    
      const addFields = () => {
        let object = {
          name: '',
          type: ''
        }
    
        setFormFields([...formFields, object])
      }
    
      const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
      }
    
      return (
        <div className="Indicators">
        

        <h1>Indicators</h1>
          <form onSubmit={handleSubmit}>
          
            {formFields.map((form, index) => {
              return (
                <div key={index}>
                  <input
                    name='name'
                    placeholder='Name'
                    onChange={event => handleFormChange(event, index)}
                    value={form.name}
                    className='indicatorFields'
                  />
                  <input
                    name='type'
                    placeholder='Type'
                    onChange={event => handleFormChange(event, index)}
                    value={form.type}
                    className='indicatorFields'
                  />
                  <Button variant="danger" className="signupButton" onClick={() => removeFields(index)}>
                    Remove
          </Button> 
                </div>
              )
            })}
          </form>
          <Button variant="primary" className="signupButton addmoreButton" onClick={addFields}>
                    Add Indicator
          </Button> 
          <br />
        
          <Button variant="primary" className="signupButton submitButton" onClick={handleSubmit}>
                    Submit Indicators
          </Button> 
        </div>
      );
}

export default ManagementIndicatorComponent