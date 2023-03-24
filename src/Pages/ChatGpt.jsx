import React, { useRef } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Paper, Box, Typography, Button } from '@mui/material';
import { borderRadius, Container } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';



function ChatGpt() {
  const messageRef = useRef();
  const [message, setMessage] = useState("");
  const [data, setData] = useState([])
  const [response, setResponse] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5001/chatgpt', { message: message }
    ).then(response => {
      setResponse(response.data.message);
      setData([{ message: message, response: response.data.message }, ...data])
      messageRef.current.value = '';
    }).catch(error => console.log('error'))

  }
  return (
    <Container sx={{ margin: 'auto', marginTop: '30px' }}>
      {data.length !== 0 &&
        <Box sx={{ height: '40vh', overflow:'auto', backgroundColor:'#f2f2f2', padding:'0px 20px'}}>

          {data.map((item) => {
            return (
              <>
                <Paper elevation={5} sx={{margin:'10px', textAlign: 'justify'}}>

                  <Typography className='p-2' variant='h6'  sx={{ backgroundColor: 'purple', textAlign:'start',color: 'white' }}>
                   {item.message} ?

                  </Typography>
                   <Typography className='p-2' variant='h6'  sx={{ backgroundColor: 'lightblue', textAlign: 'justify',fontWeight: 'normal' , lineHeight:'1.5',fontSize:'1.2rem'}}>
                 {item.response}.

                  </Typography>


                </Paper>
              </>
            )
          })}


        </Box>
      }



      <Box sx={{ width: '100%', backgroundColor: '#f9f9f9', border: '2px groove purple', outline: 'none', borderRadius: '20px' }} my={4} p={4} elevation={4}>
        <form action="" onSubmit={submitHandler} style={{ display: 'flex', alignItems: 'center' }}>
          <div class="form-outline" style={{ fontSize: '1.4rem' }} >
            <textarea ref={messageRef} placeholder='Ask your Mental Health Issues' style={{ fontSize: '1.4rem' }} class="form-control bg-white" id="textAreaExample" rows="2" cols="10" onChange={(e) => setMessage(e.target.value)}>

            </textarea>
            {/* <label class="form-label" for="textAreaExample"></label> */}
          </div>
          <div className='text-center mt-3'>
            <Button size='large' variant="contained" endIcon={<SendIcon />} type="submit" color='secondary'>
              Send
            </Button>
          </div>
        </form>

      </Box>







    </Container>
  )
}

export default ChatGpt