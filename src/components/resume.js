import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';



class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4} style={{background: 'white'}}>
                        <div style={{ textAlign: 'center' }}>
                            <div className='image_resume'></div>
                            
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Olexsii Herhovskyi</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Hi, my name is Alex, I am a Junior React developer who tries to get better every day</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>36/3 of Copernicus Street, Sambir, Ukrain </p>
                        <h5>Phone</h5>
                        <p>+ (380) 63-54-94-417</p>
                        <h5>Email</h5>
                        <p>Olexsijherh@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName="My University"
                            schoolDescription="fourth-year student of Lviv State University of Life Safety. Civil Defense Training Institute. Specialty 'Computer Science'."
                        />

                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName="My 2nd University"
                            schoolDescription="training according to the training program of reserve officers at Lviv State University of Life Safety"/>
                        
                        <Education
                            startYear={2015}
                            endYear={2019}
                            schoolName="My College "
                            schoolDescription="studies at the Sambir College of Economics and Informatics. Specialty 'Software Development'. Professional qualification technician-programmer. Diploma with honors"/>
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                    {/*    <h2>Experience</h2>

                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName="First Job"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />*/}
                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={100}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="React"
                            progress={75}
                        />

                        <Skills
                            skill="NodeJS"
                            progress={20}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;