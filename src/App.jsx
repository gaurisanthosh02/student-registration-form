import { Button, Form } from 'react-bootstrap'
import './App.css'
import { useState } from 'react'

function App() {

  const [studentName, setStudentName] = useState("")
  const [studentAddr, setStudentAddr] = useState("")
  const [studentNum, setStudentNum] = useState("")
  const [studentMail, setStudentMail] = useState("")
  const [studentGender, setStudentGender] = useState("")
  const [studentDob, setStudentDob] = useState("")
  const [studentCourse, setStudentCourse] = useState("")


  const clearValue =() =>{
    setStudentName("")
    setStudentAddr("")
    setStudentNum("")
    setStudentMail("")
    setStudentGender("")
    setStudentDob("")
    setStudentCourse("")
  }

  const showAlert = (e) =>{
    e.preventDefault();
    
if(validateInput()){
  const datas = `
  Name : ${studentName}
  Address : ${studentAddr}
  Number : ${studentNum}
  Email : ${studentMail}
  Gender : ${studentGender}
  Date of Birth : ${studentDob}
  Course : ${studentCourse}`
  alert(`Data Stored Successfully! ${datas}`)
}
 
  }

  const validateInput = () => {
    return ( studentName && studentAddr && studentNum && studentCourse && studentDob && studentMail && studentGender)
  }



  return (
    <>
    <div className='container my-3 p-3 border text-right w-50'>
        <h2 className='text-center'>Higher Secondary Admission Form</h2>
        <Form>

          {/* name */}
          <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control name='studentName' value={studentName} onChange={(e) => setStudentName(e.target.value)} type="text" placeholder="Enter your Name" />
          </Form.Group>

          {/* address */}
          <Form.Group className="mb-3" controlId="formBasicDob">
          <Form.Label>Address</Form.Label>
          <Form.Control value={studentAddr} onChange={(e)=> setStudentAddr(e.target.value)} type="text" placeholder='Enter Address' />
          </Form.Group>

          {/* mobile */}
          <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control value={studentNum} onChange={(e)=> setStudentNum(e.target.value)} type="number" placeholder="Enter your Mobile Number" />
          </Form.Group>

          {/* email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control value={studentMail} onChange={(e)=> setStudentMail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>

          {/* gender */}
          <Form.Group className="mb-3" controlId="formBasicGender">
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check inline label="Female" name="group1" type="radio"
                id={`inline-radio-f`} value="Female" onChange={(e) => setStudentGender(e.target.value)}
                checked={studentGender === "Female"}/>
                
              <Form.Check inline label="Male" name="group1" type="radio"
                id={`inline-radio-M`} value="Male" onChange={(e)=> setStudentGender(e.target.value)} checked={studentGender === "Male"}/>

                <Form.Check inline label="Other" name="group1" type="radio"
                id={`inline-radio-o`} value="Other" onChange={(e)=> setStudentGender(e.target.value)} checked={studentGender === "Other"}/>
            </div>
          ))}
          </Form.Group>

          {/* dob */}
          <Form.Group className="mb-3" controlId="formBasicDob">
              <Form.Control type="date" label="Date of Birth" value={studentDob} onChange={(e)=> setStudentDob(e.target.value)}/>
            </Form.Group>

          {/* course-dropdown */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Select value={studentCourse}
            onChange={(e) => setStudentCourse(e.target.value)} aria-label="Default select example">
                <option selected disabled>Select a Course</option>
                <option value="Biology">Biology</option>
                <option value="Computer">Computer Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Humanities">Humanities</option>
              </Form.Select>
            </Form.Group>

            {/* buttons */}
            <div className='text-center'>
              {/* register */}
            <Button onClick={showAlert} variant="primary" type="submit" className='mx-5'>
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
