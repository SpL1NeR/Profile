import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/Main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className='header-color' scroll>
          <Navigation>
          <Link to="/" style={{marginRight:'200%'}}>SpL1NeR</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/Project">Project</Link>
            <Link to="/Contacts">Contacts</Link>

          </Navigation>
        </Header>
        <Drawer title="SpL1NeR" style={{position:'fixed'}}>
          <Navigation>
            <Link to="/Resume">Resume</Link>
            <Link to="/Project">Project</Link>
            <Link to="/Contacts">Contacts</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
