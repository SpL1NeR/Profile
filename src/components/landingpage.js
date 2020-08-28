import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                    <img src='https://png.pngtree.com/png-vector/20190324/ourlarge/pngtree-vector-male-student-icon-png-image_862310.jpg'
                        alt='avatar'
                        className='avatar-img' 
                        style={{marginTop:'4%'}}/>
                        <br/>
                    <div className="banner-text">
                        <h1>Front end Developer</h1>

                        <hr />

                        <p>HTML | CSS | JAVASCRIPS | REACT | REACT NATIVE | REDUX | BOOTSTRAP | NOTE JS | SQL</p>
                        <div className='social-link'>
<a href="https://github.com/SpL1NeR" rel='noooper noreferrer ' target='_blank'>
    <i className='fa fa-github'  aria-hidden='true'/>
</a>
<a href="https://myaccount.google.com/?utm_source=OGB&tab=mk&utm_medium=act&gar=1" rel='noooper noreferrer ' target='_blank'>
    <i className='fa fa-google'  aria-hidden='true'/>
</a>
<a href="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B9-%D0%B3%D0%B5%D1%80%D0%B3%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-8539061a2/" 
rel='noooper noreferrer ' target='_blank'>
    <i className='fa fa-linkedin'  aria-hidden='true'/>
</a>
<a href="https://www.instagram.com/olexsii_spliner/?hl=uk" rel='noooper noreferrer ' target='_blank'>
    <i className='fa fa-instagram'  aria-hidden='true'/>
</a>

                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;