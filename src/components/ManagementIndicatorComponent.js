import React, {useState} from 'react'
import {db} from "../firebase"
import {collection, getDocs, addDoc, setDoc, doc} from "firebase/firestore"

const ManagementIndicatorComponent = () => {
    const [formFields, setFormFields] = useState([
        { name: '', type: '' },
      ])

      const [programName, setProgramName] = useState("")

      const handleProgramNameChange = (event) => {
        setProgramName(event.target.value)
      }
    
      const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
   
    try {
      setDoc(doc(db, "program_templates", programName), {
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
        <div className="App">
        <h1>Indicators</h1>
          <form onSubmit={handleSubmit}>
          <input name='programName' placeholder='Program Name' onChange={event => handleProgramNameChange(event)} value={programName}></input>
            {formFields.map((form, index) => {
              return (
                <div key={index}>
                  <input
                    name='name'
                    placeholder='Name'
                    onChange={event => handleFormChange(event, index)}
                    value={form.name}
                  />
                  <input
                    name='type'
                    placeholder='Type'
                    onChange={event => handleFormChange(event, index)}
                    value={form.type}
                  />
                  <button onClick={() => removeFields(index)}>Remove</button>
                </div>
              )
            })}
          </form>
          <button onClick={addFields}>Add More..</button>
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      );
}

export default ManagementIndicatorComponent