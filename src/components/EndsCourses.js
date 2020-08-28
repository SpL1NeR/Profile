import React, { Component } from 'react';
import { Grid, Cell, IconButton, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';

class EndsCourses extends Component {
  render() {
    return(
        <div className="project-end-course">
        <Card shadow={5} style={{minWidth: '450', margin: "auto" }}>
        <CardTitle style={{color: '#000', height:'176px', background:'url(https://prometheus.org.ua/wp-content/themes/prometheus/assets/images/logo.svg) center / cover'}}>
        
        </CardTitle>
    <CardText>{this.props.Course}</CardText>
        <CardActions border>
    <Button colored><a target="_blank" href={this.props.link}>{this.props.platform}</a>
</Button>
            </CardActions>
            <CardMenu style={{color:'#000'}}>
                <IconButton name="share"/>
            </CardMenu>
                    </Card>
                    </div>
    )
  }
}

export default EndsCourses;