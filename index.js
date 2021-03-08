const { inquirerMenu, inquirerInput } = require('./helpers/inquirer')
const TaskRepository = require('./repositories/TaskRepository');

const main = async () => {
    const taskRepository = new TaskRepository();
    
    let option = '';

    do {

        option = await inquirerMenu();

        switch (option) {
            case 1:
    
                //TODO: Hacer que usuario pueda ingresar titulo de tarea    
                console.log('El usuario seleccionó la opción crear tarea');
    
                const title = await inquirerInput('Task Title');
    
                taskRepository.createTask(title);
       
                break;
    
            case 2:
                const allTasks = taskRepository.getAllTask();
                console.log(allTasks);
    
                //TODO: Mostrar lista de tareas de la base de datos
    
                break;
        }
    } while( option !== 'X');
}

main();