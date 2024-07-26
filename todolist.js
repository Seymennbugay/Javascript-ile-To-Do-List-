document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('list');
    const liveToast = document.getElementById('liveToast');
    const liveToastError = document.getElementById('liveToastError');

    function showNotification(toastElement) {
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
    }

    function newElement() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            showNotification(liveToastError);
            return;
        }

        addTaskToList(taskText);
        showNotification(liveToast);
        taskInput.value = '';
    }

    function addTaskToList(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Tamamlandı';
        completeButton.className = 'btn btn-success ml-2';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Sil';
        deleteButton.className = 'btn btn-danger ml-2';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    window.newElement = newElement;
});
