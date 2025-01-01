import { Button, Form } from 'react-bootstrap'
import './App.css'
import { useState } from 'react'

function App() {

  // const [invalidName, setInvalidName] = useState(false)
  // const [invalidAddr, setInvalidAddr] = useState(false)
  // const [invalidNum, setInvalidNum] = useState(false)
  // const [invalidMail, setInvalidMail] = useState(false)
  // const [studentGender, setStudentGender] = useState("")
  // const [studentDob, setStudentDob] = useState("")
  // const [studentCourse, setStudentCourse] = useState("")

  const [inputs, setInputs] = useState({
    studentName:'', 
    studentAddr:'',
    studentNum:'',
    studentMail:'',
    studentGender:'',
    studentDob:'',
    studentCourse:'' });

  const clearValue =() =>{
    setInputs({
      studentName:'', 
      studentAddr:'',
      studentNum:'',
      studentMail:'',
      studentGender:'',
      studentDob:'',
      studentCourse:''  
    })
  }

  const showAlert = (e) =>{
    e.preventDefault();
    
    if(!/^\d{10}$/.test(inputs.studentNum)){
      alert("Invalid number");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(inputs.studentName)) {
      alert("Name cannot contain numbers or special characters.");
      return;
    }

    const datas = `
    Name : ${inputs.studentName}
    Address : ${inputs.studentAddr}
    Number : ${inputs.studentNum}
    Email : ${inputs.studentMail}
    Gender : ${inputs.studentGender}
    Date of Birth : ${inputs.studentDob}
    Course : ${inputs.studentCourse}`
    
    alert(`Data Stored Successfully! ${datas}`)
      console.log(inputs);
  }

  const handleInputs = (event) => {
    setInputs({...inputs, [event.target.name]:event.target.value})

  }


  return (
    <>
    <div className='container my-3 p-3 border text-right w-50'>
        <h2 className='text-center'>Higher Secondary Admission Form</h2>
        <Form onSubmit={showAlert}>

          {/* name */}
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control name='studentName' value={inputs.studentName} onChange={(e)=>handleInputs(e)} required type="text" placeholder="Enter your Name"/>
          </Form.Group>

          {/* address */}
          <Form.Group className="mb-3" controlId="formBasicDob">
            <Form.Label>Address</Form.Label>
            <Form.Control name='studentAddr' value={inputs.studentAddr} onChange={(e)=>handleInputs(e)} type="text" placeholder='Enter Address' required/>
          </Form.Group>

          {/* mobile */}
          <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control name='studentNum' value={inputs.studentNum} onChange={(e)=>handleInputs(e)} type="text" placeholder="Enter your Mobile Number" required/>
          </Form.Group>

          {/* email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name='studentMail' value={inputs.studentMail} onChange={(e)=>handleInputs(e)} type="email" placeholder="Enter email" required/>
            </Form.Group>

          {/* gender */}
          <Form.Group className="mb-3" controlId="formBasicGender">
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3" >
              <Form.Check inline label="Female" name="studentGender" type="radio"
                id={`inline-radio-f`} value="Female" onChange={(e)=>handleInputs(e)}
                // checked={studentGender === "Female"}
                />
                
              <Form.Check inline label="Male" name="studentGender" type="radio"
                id={`inline-radio-M`} value="Male" onChange={(e)=>handleInputs(e)}
                //  checked={inputs.studentGender === "Male"}
                 />

              <Form.Check inline label="Other" name="studentGender" type="radio"
                id={`inline-radio-o`} value="Other" onChange={(e)=>handleInputs(e)} 
                // checked={inputs.studentGender === "Other"}
                />
            </div>
          ))}
          </Form.Group>

          {/* dob */}
          <Form.Group className="mb-3" controlId="formBasicDob">
              <Form.Control name='studentDob' type="date" label="Date of Birth" value={inputs.studentDob} onChange={(e)=>handleInputs(e)} required/>
            </Form.Group>

          {/* course-dropdown */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Select value={inputs.studentCourse}
            onChange={(e)=>handleInputs(e)} name='studentCourse'  aria-label="Default select example" >
                <option selected disabled value="">Select a Course</option>
                <option value="Biology">Biology</option>
                <option value="Computer">Computer Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Humanities">Humanities</option>
              </Form.Select>
            </Form.Group>

            {/* buttons */}
            <div className='text-center'>
              {/* register */}
            <Button variant="primary" type="submit" className='mx-5'>
              Register
            </Button>

            {/* cancel */}
            <Button onClick={clearValue} variant="primary" type="submit">
              Cancel
            </Button>
            </div>
        </Form>
         
    </div>
    </>
  )
}

export default App
