import React from 'react';
import {connect} from "react-redux";
import { downloadTasks } from '../actions';

function getTasks(action: any) { //TODO type this better
 //TODO generate get all tasks action
    action();
}


function TaskDownloader(props : any) {
    return (
        <div className='row'>
            Click button to download taks from mocked server. 
            <button onClick={() => getTasks(props.downloadTasks)}>Download Tasks</button>
        </div>
    )
}

export default connect(null, {downloadTasks} )(TaskDownloader);