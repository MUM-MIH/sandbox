// directs the function to work once the page has loaded.
window.addEventListener('load',function(){

//var btnAddTask = document.getElementById("addtask");
//btnAddTask.addEventListener("click", textBoxCreate);
	
var btnchange = document.getElementById("change");
btnchange.addEventListener("click", createTable);
	
var i = 0;
	
//make a variable of the breadcrumbs 
	var Edit=$('li.breadcrumb-item').text();
  
//check if taskbar exists  
  var taskbar = document.getElementById("taskbar");	 

//check if edit settings page and if hidden overview element exists
    if (Edit.match(/Edit settings/)){      
      if(taskbar){
        $('#id_generalhdr').after('<fieldset class="clearfix collapsible" id="taskpicker"> <legend class="ftoggler"><a href="#" class="fheader" role="button" aria-controls="id_modstandardelshdr" aria-expanded="true">Taskbar Editor</a></legend> <button id="addtask">Add task</button> <div id="taskoption"> <div id="taskdrop" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break" for="id_visible"> Icon </label> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="modvisible"> <select class="custom-select" name="visible" id="id_visible"> <option value="1" selected="">Play video</option> <option value="2">Book</option> <option value="3">Speech bubble</option> <option value="4">Pre-class symbol</option> </select> </div> </div> </div> </fieldset> <br> <button id="change">Create taskbar</button>')
				  }
    }

function textBoxCreate() {
  //Create and append select list 

  var taskoption = document.getElementById("taskoption");
  var clone = taskoption.cloneNode(true);
  i++;
  clone.id = "taskoption" + i;
  document.getElementById("taskpicker").appendChild(clone);
   
}



function createTable() {

  var num_rowz = 2;
  var num_cols = document.querySelectorAll("#taskdrop").length;
  var theader = '<table id="newtable" border="1">\n';
  var tbody = "";
  for (var i = 0; i < num_rowz; i++) {
    tbody += "<tr>";
    for (var j = 0; j < num_cols; j++) {
      tbody += "<td>";
      tbody += "</td>";
    }
    tbody += "</tr>\n";
  }
  var tfooter = "</table>";
  document.getElementById("taskbar").innerHTML = theader + tbody + tfooter;
  changeicon();
}

function changeicon() {

  var num_cols = document.querySelectorAll("#taskdrop").length;
  var table = document.getElementById("newtable");
 	var selectedValue;
    for (var i = 0; i<num_cols; i++) { //iterate trough rows
      selectedValue = document.querySelectorAll("#taskdrop select")[i].value;
      
      if(selectedValue=="1"){    
     table.rows[0].cells[i].innerHTML="[fa-play-circle fa-2x]";
     table.rows[1].cells[i].innerHTML="Watch";
       }  
      else if(selectedValue=="2"){    
     table.rows[0].cells[i].innerHTML="[fa-book fa-2x]";
     table.rows[1].cells[i].innerHTML="Read";
       } 
      else if(selectedValue=="3"){    
     table.rows[0].cells[i].innerHTML="[fa-comments fa-2x]";
     table.rows[1].cells[i].innerHTML="Discuss"; 
      }
      else if(selectedValue=="4"){    
     table.rows[0].cells[i].innerHTML="[fa-bug fa-2x]";
     table.rows[1].cells[i].innerHTML="Pre Class Activity"; 
     }
        
}
//}
	//Close window.onload function	
	});
			
