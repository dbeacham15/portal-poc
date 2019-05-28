import React, { PureComponent } from 'react';
import './App.css';
import GridTile from './components/GridTile';
import UpdateTile from './components/UpdateTile';

class App extends PureComponent {
  render() {
    return (
      <section className="App">
        <header>
        </header>
        <main>
          <div style={HomeStyle.rail}>
            <div style={HomeStyle.primaryGrid}>
              <GridTile 
                icon="messaging:chat"
                link="/components"
                title="Component Explorer"
                description="VIew all Core Components, as well as the technical and creative details on proper usage"
              />
              <GridTile 
                icon="user:avatar"
                link="icons"
                title="Icon Explorer"
                description="View all the available Icons within our Core System"
              />
              <GridTile 
                icon="transport:camera"
                title="Design Token Library"
                description="View all the tokens that make up the Design System as well as the implementation details"
              />
              <GridTile 
                icon="messaging:mail"
                title="Submission Tracker"
                description="Have an idea for a Core Component? Submit it here!"
              />
            </div>
          </div>
          <div style={HomeStyle.updates}>
            <h2 style={{marginBottom: '24px'}}>Design Updates</h2>
            <p>The most recent updates from the design team regarding the portal</p>
            <div>
              <UpdateTile 
                date="May 7, 2019"
                title="Actions added to Icon Library"
                excerpt="New icons were added to the library"
              />
              <UpdateTile 
                date="Jan 7, 2019"
                title="Grid Component is Live"
                excerpt="You wanted a grid, you have a grid"
              />
            </div>
          </div>
        </main>
      </section>
    );
  }
}

const HomeStyle = {
  rail: {
    paddingLeft: 'calc((100vw - 1160px) / 2)',
    paddingRight: 'calc((100vw - 1160px) / 2)'
  },
  primaryGrid: {
    display: 'flex',
    margin: '48px -15px'
  },
  updates: {
    backgroundColor: '#2a3051',
    maxHeight: '500px',
    textAlign: 'left',
    padding: '48px calc((100vw - 1160px) / 2)'
  }
}
export default App;
