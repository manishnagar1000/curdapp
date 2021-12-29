import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core'
import {NavLink} from 'react-router-dom'

const useStyle = makeStyles({
    header:{
        background:'#111111',
        position:'static'
    },
    tabs:{
        color:'#ffffff',
        marginRight:20,
        textDecoration:'none',
        fontSize:20
    }
})

const NavBar =()=>{
    const classes = useStyle();
    return(
        <AppBar className={classes.header}>
          <Toolbar>
                <NavLink className={classes.tabs} to="./" exact>Curd Operation</NavLink>
                <NavLink className={classes.tabs} to="all" exact>All Users</NavLink>
                <NavLink className={classes.tabs} to="add" exact>Add Users</NavLink>
                {/* <NavLink className={classes.tabs} to="edit" exact>Edit Users</NavLink> */}

              </Toolbar>
        </AppBar>
  
    )
}

export default NavBar;