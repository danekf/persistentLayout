import axios from "axios";
//set cookies and redirect function
const setCookies = (loginDetails: any) => {
  console.log('logged in as:', loginDetails);
}


//login function
type TLoginSource = 'local' | '0auth';

const login = (loginSource : TLoginSource, providedData: any) => {
  console.log(`source: ${loginSource}`)
  console.log('data:', providedData);

  switch(loginSource) {
    case 'local':
      axios.post('http://localhost:8001/api/login',providedData, )
      .then((response:any)=>{
        console.log(response.data);
        setCookies(response.data);
      }, (error) =>{
        console.log(error);
      });      
      break;
    case '0auth':
      break;
  }
}

export default login;