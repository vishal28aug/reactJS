let data = {
    activeButton: '1',
    task: [
        { name: "Buy milk", status: 'pending' },
        { name: "Buy a", status: 'pending' },
        { name: "Buy b", status: 'completed' },
        { name: "Buy x", status: 'pending' },
        { name: "Buy f", status: 'completed' },
        { name: "Buy d", status: 'pending' },
        { name: "Buy g", status: 'completed' },
        { name: "Buy h", status: 'pending' },
    ]
}

function getStateTask(){
   return data.task;
}


function addStateTask(newTask){
    var newTask = {name:newTask , status:'pending'}
    data.task.push(newTask);
}

function deleteStateTask(taskId){
    data.task.filter();
}

function changeActiveButton(btnId){
    data.activeButton = btnId;
}

function getActiveButton(btnId){
    return data.activeButton;
}

const stateData = {getStateTask , addStateTask ,deleteStateTask , changeActiveButton, getActiveButton};

export default stateData