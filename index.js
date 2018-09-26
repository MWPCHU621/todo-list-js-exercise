
// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };

  return task

}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "do all the laundry");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();
// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed

console.log(tasks);
