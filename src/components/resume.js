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
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://lh3.googleusercontent.com/838iTdSMlLOFL6sRB70SuwJFYw18vEIXpaukio-9WvKcUbuQBUru-h5kAXrRsSdAvSOv4Iolbjn3S0I2dhufZ_lggdLFCi_7W2tmUiXyAidGDy18JYqNTrQhm-u-0g-VMyUkhTKc6sqriUysRrRMtVXnT9dDCBxJ_FaMJoA9Wiz6Wuq-T-3l8GHKKBBoYHqDWb1TwJpU2hphB48mqIw1F6yOW5gznZVD3lh8AVy2R93qLOZFGsVIQsfVIHCxAb5s3VbsWGYzBtNZOV2hlFz8gqZEht_xgCXi8kjOvZA5BSzJ4zwzZDokNj5Z_qXKPEfvApRom2O8-IUeMQf96oPiL5veytOiZMshI43XNJ0oIIbiv6LnFPRM91bOGspws8ETNuyEZFPLJthBIrRWSSwrzI_toZmlz9lgTeE3Rvw3TZz1sL9Bq72YRRI-_NCF46LCPJFPb-QmeVOrurtoorPe-26bBvLjexbcqp23zRmyNk0KiYKD55kPhPbJZN08QcotezVLqUGDJUGNYM5zTBnTgdwZx2cylXj6Urts2zIiV6TdejH_c0S9taD1k9C92Cq3KR6k_aRpLJT5MTt0ICAy3xsWDgy0WYUiler8yO8Nv-9XEsReQgndCc9mgVzDrNKLL0TNIuA19JJ5dLlmnoMw1jZZPNwjZbmjAOhftZ2Hp2Rj1_RTNgao87KLu1xikg=w354-h472-no?authuser=0"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Olexsii Herhovskyi</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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