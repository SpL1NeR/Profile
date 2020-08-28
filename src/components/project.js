import React, {Component} from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import EndsCourses from './EndsCourses';

class Project extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }
toggleCategories(){
    if(this.state.activeTab === 0){
        return(

            <div className="projects-grid">
                
{/* React project 1*/}
            <Card shadow={5} style={{minWidth: '450', margin: "auto"            }}>
<CardTitle style={{color: '#000', height:'176px', background:'url(https://i.morioh.com/200623/6c839150.jpg) center / cover'}}>

</CardTitle>
<CardText>Weather</CardText>
<CardActions border>
    <Button colored>GitHub</Button>
    </CardActions>
    <CardMenu style={{color:'#000'}}>
        <IconButton name="share"/>
    </CardMenu>
            </Card>



{/* React project 2*/}
<Card shadow={5} style={{minWidth: '450', margin: "auto"            }}>
<CardTitle style={{color: '#000', height:'176px', background:'url(https://i.morioh.com/200623/6c839150.jpg) center / cover'}}>

</CardTitle>
<CardText>Social Network</CardText>
<CardActions border>
    <Button colored>GitHub</Button>
    </CardActions>
    <CardMenu style={{color:'#000'}}>
        <IconButton name="share"/>
    </CardMenu>
            </Card>
        
{/* React project 3*/}
<Card shadow={5} style={{minWidth: '450', margin: "auto" }}>
<CardTitle style={{color: '#000', height:'176px', background:'url(https://i.morioh.com/200623/6c839150.jpg) center / cover'}}>

</CardTitle>
<CardText>My Portfolio</CardText>
<CardActions border>
    <Button colored>GitHub</Button>
    </CardActions>
    <CardMenu style={{color:'#000'}}>
        <IconButton name="share"/>
    </CardMenu>
            </Card>
            </div>
        
        )


    }else if(this.state.activeTab === 1){
            return(
                <div>
                    <h1>This is Game</h1>
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div className='projects-grid'>
                    <EndsCourses Course='jsx' platform='prometeus' img='https://courses.prometheus.org.ua/static/prometheus/images/logo_eng.15f9ead518a4.png' link='https://courses.prometheus.org.ua:18090/downloads/52ed810f701f4c9f84fe71073b6b7c8e/Certificate.pdf'/>
                    <EndsCourses/>
                    <EndsCourses/>
                </div>
            )
        }
    
}
    
    render(){
        return(
           <div className="category-tabs">
               <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple >
                   <Tab>React</Tab>
                   <Tab>Game</Tab>
                   <Tab>Ends Courses</Tab>
               </Tabs>
               <section >
               <Grid >
                   <Cell col={12}>
        <div className="contents">{this.toggleCategories()} </div>
                   </Cell>
               </Grid>
               </section>
           </div> 
        )
    }
}

export default Project;