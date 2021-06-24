import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Content } from 'react-mdl';
import Main from './components/main';


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Roni Serra</Link>} scroll>
            
        </Header>
        
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
