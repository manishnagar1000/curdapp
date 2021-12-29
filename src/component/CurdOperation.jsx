
import {Box,Typography,makeStyles} from '@material-ui/core'
// import { mergeClasses } from '@material-ui/styles';
import first from '../Assest/images/1.jpeg'
import youtube from '../Assest/images/youtube.png'

const useStyle =makeStyles({
image:{
    width:'50%',
    height:'50%'
},
component:{
    margin:50,
    // background:"orange",
    // '&:hover':{
    // background:'red',
    // },
    // ['@media only screen and (max-width: 380px)'] : {
    //     background :'black'
    // }
}
})

const CurdOperation = () =>{
    const Classes =useStyle();
    return( 
        <Box className={Classes.component}>

            <Typography variant="h4" style={{marginBottom:50}}>Curd Operation</Typography>
            <Box className={Classes.component} style={{display:'flex'}}>
{/* <p className={Classes.component}>lorem34</p> */}
<img className= {Classes.image} src={first}></img> ,   
<img className={Classes.image} src={youtube}></img> 
</Box>
</Box>
   )
}
export default CurdOperation;