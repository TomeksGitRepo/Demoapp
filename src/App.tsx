import React from 'react';
import './App.css';
import DataTable from './components/DataTable';
import SearchBar from './components/SearchBar';
import TaskDownloader from './components/TaskDownloader';

const App = () => {
  return (
    <div className="App">
      <h1>Check tasks and search by description</h1>
      <SearchBar />
      <TaskDownloader />
      <DataTable />
    </div>
  );
}

export default App;
