import './App.css';
import './TaskItem.jsx'
import './InputForm.jsx';
import './TaskItemList.jsx'
import InputForm from './InputForm.jsx';
import TaskItemList from './TaskItemList.jsx';

function App() {
  return (
    <>
      <div style={{"text-align": "center"}}>

    
      <h1>
          Task List 
      </h1>
      <TaskItemList/>
      </div>
      <footer>
        Note: Heavily based on the solution, but I went through each item and rewrote it, looking up things as I went.
      </footer>
    </>
  );
}

export default App;
