import React, { useState } from "react";

function Form() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    admin: true,
  })

  
  function handleTheChange(event) {
    let name = event.target.name
    let value =event.target.value

    if (event.target.type === "checkbox") {
      value = event.target.checked
    }
    
    setFormData({...formData, [name]:value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      admin : false,

    })
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" onChange={handleTheChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleTheChange} value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handleTheChange} checked={formData.admin}/>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default Form;
