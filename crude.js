tasks = JSON.parse(localStorage.getItem("tasks")) || [];
var app = new function() {
    this.el = document.getElementById('tasks');

    this.FetchAll = function() {
      var data = '';
  
      if (tasks.length > 0) {
       tasks.forEach(element => {
        data += '<tr>';
        data += '<td>'+ element.substring(0, 9) + ' ... </td>'; 
        data += '<td><button onclick="app.Edit(' + tasks.indexOf(element) + ')"  class="btn btn-warning">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + tasks.indexOf(element) + ')"  class="btn btn-danger">Delete</button></td>';
        data += '</tr>';
       }); 
      }
  
      this.Count(tasks.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () {
      el = document.getElementById('add-todo');
      // Get the value
      var task = el.value;
  
      if (task) {
        // Add the new value
        tasks.push(task.trim());
        localStorage.setItem("tasks",JSON.stringify(tasks))
        // Reset input value
        el.value = '';
        // Dislay the new list
        this.FetchAll();
      }
    };
  
    this.Edit = function (item) {
    
      var el = document.getElementById('edit-todo');
     
      el.value = tasks[item];
      // Display fields
      document.getElementById('edit-box').style.display = 'block';
     self = this
  
      document.getElementById('save-edit').onsubmit = function() {
        // Get value
        var task = el.value;
  
        if (task) {
          // Edit value
          tasks.splice(item, 1, task.trim());
          // Display the new list
          localStorage.setItem("tasks",JSON.stringify(tasks))
          self.FetchAll();
          // Hide fields
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) {
      // Delete the current row
      tasks.splice(item, 1);
      localStorage.setItem("tasks",JSON.stringify(tasks))
      // Display the new list
      this.FetchAll();
    };
  
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'notes';
  
      if (data) {
          if(data ==1){
              name = 'note'
          }
        el.innerHTML = data + ' ' + name ;
      } 
      else {
        el.innerHTML = 'No ' + name;
      }
    };
    
  }
  
  app.FetchAll();
  
  function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
  }