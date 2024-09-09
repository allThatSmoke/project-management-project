import { useState } from 'react';

import SideBar from "./components/SideBar";
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectPage from './components/ProjectPage';
import InputErrorModal from './components/InputErrorModal';

function App() {
  
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  // const [selectedProjectTasks, setSelectedProjectTasks] = useState([]);

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    })
  }

  function handleStartAddProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleCancelAddProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
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
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== id),
        tasks: prevState.tasks.filter(task => task.projectId !== id)
      }
    })}

  const selectedProject = projectsState.projects.find((project) => {
    return project.id === projectsState.selectedProjectId;
  })

  const selectedProjectTasks = projectsState.tasks.filter((task) => {
    return task.projectId === projectsState.selectedProjectId
  });

  let content;

  if (projectsState.selectedProjectId === null){
    content = <NewProject onAddProject={handleAddProject} onProjectCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  } else if ( typeof projectsState.selectedProjectId ===  'number') {
    content = <ProjectPage 
        selectedProject={selectedProject}
        onDeleteProject={handleDeleteProject}
        selectedProjectTasks={selectedProjectTasks}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
  }

  return (
    <main className="flex my-8 h-screen gap-8">
      <SideBar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
