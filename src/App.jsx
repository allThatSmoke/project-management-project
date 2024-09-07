import { useState } from 'react';

import SideBar from "./components/SideBar";
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectPage from './components/ProjectPage';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleAddProject(projectData){
    
    const newProject = {
      ...projectData,
      id: Math.random()
    };
    
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined
      }
    })
  }

  function handleSelectProject(id){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  function handleDeleteProject(id){
    setProjectsState((prevState) => {
      return {
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== id)
      }
    })
  }

  let content;

  if (projectsState.selectedProjectId === null){
    content = <NewProject onAddProject={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  } else if ( typeof projectsState.selectedProjectId ===  'number') {
    const selectedProject = projectsState.projects.find((project) => (project.id === projectsState.selectedProjectId) )
    console.log(selectedProject);
    // pass id and obj to ProjectPage
    content = <ProjectPage 
        selectedProject={selectedProject} 
        // PROJECT NOT BEING DELETED SUCCESSFULLY
        onDeleteProject={handleDeleteProject}
      />
  }

  return (
    <main className="flex my-8 h-screen gap-8">
      <SideBar 
        onStartAddProject={handleStartAddProject} 
        projectsState={projectsState}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
