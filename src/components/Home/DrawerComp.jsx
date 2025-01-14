import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function DrawerComp({Pages}){
    const [openDrawer,setOpenDrawer] = useState(false);
    
    
    function handleOnClose(){
     setOpenDrawer(false);
    }
   return (
     <React.Fragment>
        <Drawer open = {openDrawer} onClose = {()=>handleOnClose()}>
            <List>
                {
                Pages.map((page,index)=>
                <ListItemButton key = {index}>
                    <ListItemIcon>
                        <ListItemText >{page}</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                )
            }

            </List>
        </Drawer>
        <IconButton sx = {{marginLeft : 'auto'}}onClick = {()=>setOpenDrawer(!openDrawer)}>
            <MenuIcon sx = {{color:'#F9AA33'}}>

            </MenuIcon>
        </IconButton>
     </React.Fragment>
   );
}