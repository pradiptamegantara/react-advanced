import './App.css';
import StudentPage from './features/student/StudentPage';
import StudentView from './features/student/StudentView';
import StudentBookPage from './features/studentBook/StudentBookPage';
import StudentBookView from './features/studentBook/StudentBookView';

function App() {
  return (
    <div className="App">
      <StudentPage view={StudentView} />
      <StudentBookPage view={StudentBookView}/>
    </div>
  );
}

export default App;