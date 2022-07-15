import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])
  const [err, setErrors] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);

  }
  function handleSubmit(e) {
    e.preventDefault()
    const formData = {
      firstName: firstName,
      lastName: lastName
    }
    if (firstName.length > 1) {
      const allData = [...submittedData, formData]
      setSubmittedData(allData)
      setFirstName("")
      setLastName("")
      setErrors([])
    } else {
      setErrors(["A name should be at least 2 characters long!"])
    }
  }

  const listOfNames = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.lastName}, {data.firstName}
      </div>
    )
  })
  return (
    <div>
      {err.length>0?err.map((error,index)=><p key={index}>{error}</p>):null}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="first name" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" placeholder="last name" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {listOfNames}
    </div>

  );
}

export default Form;
