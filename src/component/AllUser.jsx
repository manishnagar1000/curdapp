import { useEffect, useState} from "react";
import {Table,TableCell,TableBody,TableRow,TableHead,makeStyles,Button} from '@material-ui/core'
import { getUser,deleteUser } from "../services/Api";
import {Link} from 'react-router-dom'


const useStyle = makeStyles({
    table:{
        width:'90%',
        margin:'50px 0 0 50px',
    },
    thead:{
        '& > *':{
            backgroundColor:'black',
            color:'white',
            fontSize:'20px',
        }
    },
    row:{
        '& > *':{
            fontSize:'18px'
        }
    }
})

const AllUser = () =>{

    const [users, setUsers] = useState([]);

    const classes =useStyle();

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers =async()=>{
       const response =await getUser();
       console.log(response.data)
       setUsers(response.data)
    }

    const deleteUserData = async (id) =>{
        await deleteUser(id);
        getAllUsers();
    }
    return(
        <>
{/* <p>its our Alluser component.</p> */}
<Table className= {classes.table}>
    <TableHead>
        <TableRow className={classes.thead}>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phoneno</TableCell>
        <TableCell></TableCell>

        </TableRow>
    </TableHead>
    <TableBody>
        {
            users.map(user=>(
                <TableRow className={classes.row}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                    <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                    <Button variant="contained" color="secondary" onClick={()=>deleteUserData(user.id)}> Delete</Button>
                </TableCell>

                </TableRow>
    ))
        }

    </TableBody>
</Table>
</>
    )}
export default AllUser;