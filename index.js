const tasks = [
	{
		id: '1138465078061',
		completed: false,
		text: 'Посмотреть новый урок по JavaScript',
	},
	{
		id: '1138465078062',
		completed: false,
		text: 'Выполнить тест после урока',
	},
	{
		id: '1138465078063',
		completed: false,
		text: 'Выполнить ДЗ после урока',
	},
]

const taskList = document.querySelector('.tasks-list');

function newTask(task){
const divTaskItem = document.createElement('div');
divTaskItem.className = 'task-item';
divTaskItem.dataset.taskId = task.id;

const divMainContainer = document.createElement('div');
divMainContainer.className = 'task-item__main-container';
divTaskItem.append(divMainContainer);

const divMainContent = document.createElement('div');
divMainContent.className = 'task-item__main-content';
divMainContainer.append(divMainContent);

const formCheckbox = document.createElement('form');
formCheckbox.className = 'checkbox-form';
divMainContent.append(formCheckbox);

const inputCheckbox = document.createElement('input');
inputCheckbox.className = 'checkbox-form__checkbox';
inputCheckbox.type = 'checkbox';
inputCheckbox.dataset.id = task.id;
formCheckbox.append(inputCheckbox);

const label = document.createElement('label');
label.htmlFor = task.id;
inputCheckbox.after(label);

const span = document.createElement('span');
span.className = 'task-item__text';
span.textContent = task.text;
divMainContent.append(span);

const buttonTaskDelete = document.createElement('button');
buttonTaskDelete.className =
	'task-item__delete-button default-button delete-button';
buttonTaskDelete.dataset.id = '5';
buttonTaskDelete.textContent = ' Удалить';
divMainContainer.append(buttonTaskDelete);

  return divTaskItem;
};


tasks.forEach((task)=>{
	// const taskItem = newTask(task)
	// taskList.append(taskItem)
	taskList.append(newTask(task));
});