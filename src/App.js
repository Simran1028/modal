import React, { useState } from 'react';
import './App.css'
import Modal from './Modal';

export default function App() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [level, setLevel] = useState('Entry Level')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [input, setInput] = useState([])
  const [show, setShow] = useState(false)
  const [data, setData] = useState({})

  const [emailInput, setEmailInput] = useState([])




  const enter = (e) => {
    e.preventDefault();

    if (email.trim() === '') {
      alert('Please fill in the email field.');
      return; // Stop execution if the email is empty
    }

    if (email.includes('@gmail.com')) {
      alert('Email is valid!')

      const newEmail = {
        id: emailInput.length + 1,
        title: email,

      };
      setEmailInput([...emailInput, newEmail])
      setEmail('')

    }
    else if (email.includes(' ')) {
      alert('Email is invalid!')
      setEmail('')
    }
    else {
      alert('Email is invalid!')
      setEmail('')
    }

  }

  const deleteEmail = (id) => {
    setEmailInput(emailInput.filter((emailInput) => emailInput.id !== id))
  }

  const send = (e) => {
    e.preventDefault();

    if (title && date && description) {
      alert('Form submitted!!')

      const newArray = {
        id: input.length + 1,
        title: title,
        description: description,
        level: level,
        emailInput: emailInput,
        date: date
      };

      setInput([...input, newArray])


      setData({
        title: title,
        description: description,
        level: level,
        emailInput: emailInput,
        date: date
      });


     
      setShow(true);


      setTitle('')
      setDescription('')
      setLevel('')
      setDate('')
      setEmail('')
      setEmailInput([]);

    }
    else {
      alert('Please fill all fields')

    }
  }
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <form>
        <div className='container'>
          <div className='content'>
            <div className='title'>
              <div className='title-heading'>Job Title</div>
              <div className='title-input'><input type='text' value={title} onChange={(e) => setTitle(e.target.value)} /></div></div>
            <div className='desc'>
              <div className='desc-heading'>Job Description</div>
              <textarea rows='4' cols='50' value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className='level'>
              <div className='level-heading'>Experience Level</div>
              <select value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="Entry Level" >Entry Level</option>
                <option value="Intermediate Level">Intermediate Level</option>
                <option value="High Level">High Level</option>
                <option value="Advance Level">Advance Level</option>
              </select>
            </div>
            <div className='result'>
              <ul className='list'>
                {
                  emailInput.map((email) => (
                    <li key={email.id} >
                      <span> {email.title} </span>
                      <button onClick={() => deleteEmail(email.id)}>X</button>
                    </li>
                  ))
                }

              </ul>

            </div>
            <div className='add'>
              <div className='add-heading'>Add Candidate</div>
              <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} /></div>
            <div className='Enter'><button onClick={enter}>Enter</button></div>
            <div className='date'>
              <div className='date-heading'>End Date</div>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></div>
            <div className='send'><input type="submit" onClick={send} /></div>
            {/* <ul className='list'>
                {
                    input.map((title) => (
                        <li key={title.id} >
                            <span> {title.title} </span>
                            <span> {title.description} </span>
                           
                        </li>
                    ))
                }

            </ul> */}
          </div>
        </div>
      </form>

      <Modal show={show} handleClose={() => setShow(false)} data={data} />


    </div>
  )
}
