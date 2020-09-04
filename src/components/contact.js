import React, {Component} from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contacts extends Component{
    render(){
        return(
           <div className="contact-body">
               <Grid className="contact-grid">
                   <Cell col={6}>
                       <h2>Olexsii Herhouskiy</h2>
                       <div className='contact_image'></div>
                      
                   <p style={{width: '75%', margin: 'auto', paddingTop:'1em'}}>
Programming is difficult. The basic rules on which everything is based are very simple, but as it develops, the program itself begins to introduce its own rules and laws. Thus, the programmer builds a maze in which he can get lost.
</p>
<br/>
<p>Marijn Haverbeke</p>
                   </Cell>
                   <Cell col={6}>

<h2>
Contact me
</h2>
<hr/>
<div className="contact-list">
<List>
  <ListItem>
    <ListItemContent style={{fontSize: '30px', fontfamily:'Anton', fontWeight: 'bold'}}><i className="fa fa-phone-square" aria-hidden='true'/> +380 63 54 94 417</ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent style={{fontSize: '30px', fontfamily:'Anton', fontWeight: 'bold'}}><i className="fa fa-envelope" aria-hidden='true'/> olexsijherh@gmail.com</ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent style={{fontSize: '30px', fontfamily:'Anton', fontWeight: 'bold'}}><i className="fa fa-instagram" aria-hidden='true'/> olexsii_spliner</ListItemContent>
  </ListItem>
</List>

</div>
                   </Cell>
               </Grid>
           </div> 
        )
    }
}

export default Contacts;