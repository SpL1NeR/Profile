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
    <Button colored><a target="_blank" href='https://github.com/SpL1NeR/Weather'>GitHub</a></Button>
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
    <Button colored><a target="_blank" href='https://github.com/SpL1NeR/Social_net'>GitHub</a></Button>
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
    <Button colored>
    <a target="_blank" href='https://github.com/SpL1NeR/Profile'>GitHub</a>
    </Button>
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
            return(<>
                <div className='projects-grid'>
                    <EndsCourses Course='Web_UI' platform='prometeus'  link='https://courses.prometheus.org.ua:18090/downloads/52ed810f701f4c9f84fe71073b6b7c8e/Certificate.pdf'/>
                    <EndsCourses Course='CS_50' platform='prometeus' link='https://courses.prometheus.org.ua:18090/downloads/130654c9f74f4a268929fe5ef75cdbec/Certificate.pdf'/>
                    
                    </div>
                    <div className='projects-grid'>
                    <EndsCourses Course='Basics of information security' platform='prometeus' link='https://courses.prometheus.org.ua:18090/downloads/30fe529e86b847eabbc52359613a6e26/Certificate.pdf'/>
                    <EndsCourses Course='Basics of software testing' platform='prometeus' link='https://courses.prometheus.org.ua:18090/downloads/5097e5431ee849b896c9c4bd90a6e395/Certificate.pdf'/>
                                        </div>

                </>
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