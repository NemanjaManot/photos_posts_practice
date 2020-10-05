import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Photos from "./Photos";
import Posts from "./Posts";

function App() {
  const [photos, setPhotos] = useState(null);
  const [posts, setPosts] = useState(null);
  const [selectedTab, setSelectedTab] = useState<number>(0);


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(function (response) {
      setPhotos(response.data.slice(0,100))
    })
    axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
      setPosts(response.data.slice(0,100))
    })
  },[])

  const handleSelectedTab = (event: any, value: any): any => {
    setSelectedTab(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Paper>
          <Tabs
              value={selectedTab}
              onChange={handleSelectedTab}
              indicatorColor="primary"
              textColor="primary"
              centered
          >
            <Tab label="Photos" />
            <Tab label="Posts" />
          </Tabs>
          {selectedTab === 0 && <Photos photos={photos}/>}
          {selectedTab === 1 && <Posts posts={posts}/>}
        </Paper>
      </header>
    </div>
  );
}

export default App;
