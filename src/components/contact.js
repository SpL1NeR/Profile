import React, {Component} from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contacts extends Component{
    render(){
        return(
           <div className="contact-body">
               <Grid className="contact-grid">
                   <Cell col={6}>
                       <h2>Olexsii Herhouskiy</h2>
                       <img 
                       src="https://lh3.googleusercontent.com/vLIEML55BDUwdB4V3XmubgpTQmGdoPjswMKtUh0mjY6R7FCe44J6FUJCyvFoTZLyo6brgXpXkYLg4mQUGnn6ko4JjXMopE5i35AoO3ky3z8JupH2PA7U7ZnKxxCgxUPdhggFpLpOSoTCfzpwiFvUr0gD2sIJhuGndYEWshhsBL6SliOs29V1WpdKh3xXodNh5PqAh5E9SOkNbKgA166VUsh1qq__H3PuIIRNUL4LE8ZIl7MSiJ6tnTSTVS1pDI2OSVvrMWfwz4qOH-s5-L8j6bt1G1tF8Ik5GtENobQoqVNbp4LV2ePNCNAl0-1scRQLAEUVz7zGiLYCYmhBOcDkfNWzQqtaALIUzJL5D6CIjNxxKISAlfhR3QF3f1Aj6Wze2r9gS-dg9MqBYIrHGUjgXY62dSm0ZVPGcjq62mrrBB5O6QPv-keLNjN5yEQMydBvdRA6ukcs58MJr_JqLK47BP7KcLBJcfEwHiz4N5mV81-Om8iSjyvrc0KvjyZc1Tzlf13FCdQpNqg-piA71lI6ZbNONHEzFZMQ0UJypbbjfaC-xudol7Et5dSeDuQb2AaC3a8b7YGS5Jh0Mcdnf2bki4N_em01VOZPmIqmtNQTUlLo4oxgZl8wnXYlosTCHs3gQzv18-h793-1QkRzcRCDOw9HR1-oqsEpvOdybBVCgP2RwO65ixm0zzem57wUUQ=w424-h635-no?authuser=0"
                    style={{height: '200px', width: '200px'}} />
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