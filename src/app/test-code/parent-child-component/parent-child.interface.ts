//Interface for a parent  child 

enum eTaskUpdateType { deleteTask, createTask, updateTask };
interface IToDo {
    id: number;
    task_date?: Date;
    task_description?: string;
    task_dueDate?: string;
    task_additionalNotes?: string;
}

interface ICurrentChildItemData {
    event:string,
    item:IToDo

}

export { IToDo, eTaskUpdateType, ICurrentChildItemData };