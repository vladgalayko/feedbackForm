import { useState } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value})
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()

    const jsonMessage = JSON.stringify(data);

    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: jsonMessage
  };
    fetch("http://localhost:3001/messages", requestOptions)
    .then(response => {
        if(response.status === 201) {
            alert("Your comment was sent. Thank you!");
            setData({name: "", email: "", message: ""});
        }});
    console.log(jsonMessage)  
  }


  return (
    
    <div className='App'>
      <div className='yellow_cartoon'>
          <img src="images/yellow_cartoon.svg" alt="cartoon" />
        </div>
      <div className='main'>
      <div className='feedback'>
          <form action="" onSubmit={handleSubmit}>
              <h1 className='h1'>Reach out to us!</h1>
              <input 
                placeholder='Your name*'
                type="text" 
                className='name' 
                name='name'
                value={data.name}
                onChange={(e) => handleChange(e)}
                required/>
              <input
                placeholder='Your e-mail*' 
                type="text" 
                className='mail' 
                name='email'
                value={data.email}
                onChange={(e) => handleChange(e)}/>
              <textarea 
                placeholder='Your message*' 
                type="text" 
                className='message' 
                name='message'
                value={data.message}
                onChange={(e) => handleChange(e)}/>
              <button onClick={handleSubmit}>Send message</button>
          </form>
          <div className='map'>
            <div className='yellow_cartoon2'>
              <img src="images/yellow_cartoon-2.svg" alt="cartoon" />
            </div>
            <div className='pink_cartoon'>
              <img src="images/pink_cartoon.svg" alt="cartoon" />
            </div>
            <img className='map_img' src="images/map.svg" alt="map" />
          </div>
        </div>
      </div>
     
     <div className='footer'>
      <div className='pink_cartoon2'>
        <img src="images/pink_cartoon.svg" alt="cartoon" />
      </div>
        <div className='social'>
          <ul className='social_list'>
            <a href='https://www.linkedin.com/feed/' className='social_item'><img src="images/social/ln.svg" alt="linkdn" /></a>
            <a href='https://twitter.com/' className='social_item'><img src="images/social/tw.svg" alt="twitter" /></a>
            <a href='https://uk-ua.facebook.com/' className='social_item'><img src="images/social/fb.svg" alt="facebook" /></a>
            <a href='https://www.pinterest.com/' className='social_item'><img src="images/social/pn.svg" alt="pinterest" /></a>
          </ul>
        </div>
        <div className='green_cartoon'>
          <img src="images/green_cartoon.svg" alt="cartoon" />
        </div>
        <div className='yellow_cartoon3'>
          <img src="images/yellow_cartoon.svg" alt="cartoon" />
        </div>
     </div>
    </div>
  )
}

export default App;
