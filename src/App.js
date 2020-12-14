import { useState } from 'react';
import './App.css';
import { Nav } from './components/Nav';
import { ProjectCard } from './components/ProjectCard';
import Gatsby from "./images/gatsby.png";

const App = () => {
  let[projects] = useState([{name:"test", desc:"this is my project", alt:"image desc", img:Gatsby},
  {name:"test2", desc:"this is my 2nd project", alt:"image desc", img:Gatsby},
  {name:"test3", desc:"this is my 3rd project", alt:"image desc", img:Gatsby}]);
  return (
    <div className="App">
      <Nav/>
      <h1 className="header">Projects</h1>
      <div className="projects">
      {projects.map((project) => {
        return(
          <ProjectCard image={project.img} altText="test" header={project.name} details={project.desc}/>
        )
      })}
      </div>
    </div>
  );
}

export default App;
