### Steps

1. Create Task class, constructor, and store (task.js)
2. Build out create new task form (index.html)
3. Build out div to display tasks (index.html)
4. Create DOM Content Loaded and form submit event listeners (index.js)
5. Set up form submit event listener to create new tasks (index.js)
6. Call render task functions (index.js)
7. Create render task function (task.js)
8. Create createLi function (task.js)
9. Add Task.js script to HTML file (index.html)
10. Call create task function (index.js)
11. Create createTask fetch request (task.js)
12. Set up request to fetch all existing tasks on page load (index.js)
13. Set up a click event listener on the task list (index.js)
14. If there is no event.target.id, exit the event listener (index.js)
15. Find the relevant task in taskStore (index.js)
16. Call delete task functions (index.js)
17. Create deleteTask fetch request (task.js)
18. Find relevant task in taskStore (index.js)
19. Call edit task functions (index.js)
20. Create editTask fetch request (task.js)

### Further Explanation

I followed the object-oriented paradigm to build this to-do list. This involves creating a variable that stores all instances of the Task class, and putting most of the functionality in the Task class. The class store also allows us to retrieve all or specific instances of Task from index.js.

After setting up the Task class, we can begin creating the app functionality. Since this database has no seeded data, we need to first build out our Create Task functionality so that we can seed our own data into the database. Creating tasks (as well as editing and deleting tasks) generally involves two processes:

* Reflecting the change on the frontend (i.e. showing the new task on the page)
* Reflecting the change on the backend (i.e. making the data persist in our API)

Afterwards, we want to allow our newly-created data to appear on the page. We also want to ensure that this data does not disappear when we reload the page.

Next, we want to build out the edit and delete task functionality. I did this by setting a 'click' event listener on my entire task list. Then I used 'event.target.id' to:
  * Check if the user clicked on an edit button or a delete button
  * Find the task in my Task store array that has the same id as my button

From there, I first built out my delete task functionality before moving onto my edit task functions. Both delete and edit should reflect changes on the frontend and on the backend.
