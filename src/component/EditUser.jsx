import { FormControl,FormGroup,InputLabel,Input,Button,makeStyles, Typography } from "@material-ui/core";
import {useState,useEffect} from 'react'
import {editUser,getUser} from '../services/Api'
import {useNavigate,useParams} from 'react-router-dom'

const useStyle =makeStyles({
container:{
width:'50%',
margin:'5% 0 0 25%',
'& > *':{
    marginTop:20
}
}
})

const initialValues ={
    name:"",
    username:"",
    email:"",
    phone:""
}

const EditUser = () =>{

    const [user, setUser] = useState(initialValues)
    const {name,username,email,phone}=user;
    const {id}=useParams();
    const classes = useStyle();
    const Navigate= useNavigate();

    useEffect(() => {
        loadUserData();
    },[])

    const loadUserData= async ()=>{
       const response = await getUser(id);
       setUser(response.data)
    }

    const onValueChange=(e)=>{
        // console.log(e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
// console.log(user)

    }

  const editUserDetails = async ()=>{
        await editUser(id,user);
        Navigate('/all');
    }

    return(
<FormGroup className={classes.container}>
    <Typography variant="h4">Edit User</Typography>
<FormControl>
    <InputLabel>Name</InputLabel>
    <Input onChange={(e)=>onValueChange(e)} name="name" value={name}/>
</FormControl>
<FormControl>
    <InputLabel>Username</InputLabel>
    <Input onChange={(e)=>onValueChange(e)} name="username" value={username}/>
</FormControl>
<FormControl>
    <InputLabel>Email</InputLabel>
    <Input onChange={(e)=>onValueChange(e)} name="email" value={email}/>
</FormControl>
<FormControl>
    <InputLabel>Phoneno</InputLabel>
    <Input onChange={(e)=>onValueChange(e)} name="phone" value={phone}/>
</FormControl>
<Button variant="contained" onClick={()=>editUserDetails()} color="primary">Edit User</Button>
</FormGroup>
        )}
export default EditUser;