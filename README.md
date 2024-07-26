https://seymennbugay.github.io/Javascript-ile-To-Do-List-/   


In this project, I utilized several JavaScript features, including addEventListener for handling events, getElementById for selecting elements, and the Bootstrap Toast component for notifications.

The core functionalities implemented are:

Event Handling: Using addEventListener to handle user interactions, such as adding a new task.
Element Selection: Employing getElementById to access and manipulate specific elements in the DOM.
Bootstrap Toast Notifications: Implementing positive and negative feedback notifications through Bootstrap's Toast component.
Features Implemented:
Task Addition: A new task is added to the list only if the input is not empty. The input value is trimmed to remove any extra whitespace.
Notifications:
Positive notification (success toast) is displayed when a task is successfully added.
Negative notification (error toast) is shown if an attempt is made to add an empty task.
Task Management:
Complete Button: Each task has a "Complete" button, which toggles the task's completion status when clicked. This functionality is implemented using the classList.toggle method to switch between completed and uncompleted states.
Delete Button: Each task includes a "Delete" button that removes the task from the list when clicked.
The appendChild method is used to add both the "Complete" and "Delete" buttons to each task item, and then the task item itself is appended to the list.
