// directs the function to work once the page has loaded.
window.addEventListener('load',function(){

//var btnAddTask = document.getElementById("addtask");
//btnAddTask.addEventListener("click", textBoxCreate);
	
//var btnchange = document.getElementById("change");
//btnchange.addEventListener("click", createTable);
	
//var i = 0;
	
//make a variable of the breadcrumbs 
	var Edit=$('li.breadcrumb-item').text();
  
//check if taskbar exists  
  var taskbar = document.getElementById("taskbar");	 

//check if edit settings page and if hidden overview element exists
    if (Edit.match(/Edit settings/)){      
      if(taskbar){
        $('#id_generalhdr').after('<fieldset class="clearfix collapsible" id="taskpicker"> <legend class="ftoggler"><a href="#" class="fheader" role="button" aria-controls="id_modstandardelshdr" aria-expanded="true">Common module settings</a></legend> <button type="button" class="btn btn-primary" id="addtask">Add task</button> <div id="taskcontainer"> <div id="taskoption"> <div id="taskdrop" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break" for="id_visible"> Icon </label> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="modvisible"> <select class="custom-select" name="visible" id="id_visible"> <option value="1" selected="">Pre-class</option> <option value="2">In-class</option> <option value="3">Post-class</option> <option value="4"="">Watch</option> <option value="5">Read</option> <option value="6">Discuss</option> <option value="7">Complete</option> <option value="8">Reflect</option> <option value="9">Try</option> <option value="10">Knowledge Check</option> <option value="11">Tutorial</option> <option value="12">Practical</option> <option value="13">Laboratory</option> <option value="14">Forum</option> <option value="15">Workshop</option> </select> </div> </div> </div> </fieldset> <br> <button type="button" class="btn btn-primary" id="changetaskbar">Create taskbar</button>')
				  }
    }

var btn = document.getElementById("addtask");
btn.addEventListener("click", textBoxCreate);
var i = 0;
function textBoxCreate() {
  //Create and append select list

  var taskoption = document.getElementById("taskoption");
  var clone = taskoption.cloneNode(true);
  i++;
  clone.id = "taskoption" + i;
  document.getElementById("taskpicker").appendChild(clone);
}

var btnchange = document.getElementById("changetaskbar");
btnchange.addEventListener("click", createTable);

function createTable() {
  var num_rowz = 2;
  var num_cols = 14;
  //var num_cols = document.querySelectorAll("#taskdrop").length;
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
  document.getElementById("taskbar").innerHTML = tbody + tfooter;
  changeicon();
}

function changeicon() {
  var num_cols = document.querySelectorAll("#taskdrop").length;
  //var num_cols =12;
  var table = document.getElementById("taskbar");
  var selectedValue;
  for (var i = 0; i < num_cols; i++) {
    //iterate trough rows
    selectedValue = document.querySelectorAll("#taskdrop select")[i].value;

if (i == num_cols - 1 || num_cols == 1) {
      if (selectedValue == "1") {
        table.rows[0].cells[i + i].innerHTML = "[fa-hourglass-start fa-2x]";
        table.rows[1].cells[i + i].innerHTML = "Pre-class activities";
      } else if (selectedValue == "2") {
        table.rows[0].cells[i + i].innerHTML = "[fa-forward fa-2x]";
        table.rows[1].cells[i + i].innerHTML = "In-class activities";
      } else if (selectedValue == "3") {
        table.rows[0].cells[i + i].innerHTML = "[fa-hourglass-end fa-2x]";
        table.rows[1].cells[i + i].innerHTML = "Post-class activities";
      } else if (selectedValue == "4") {
        table.rows[0].cells[i + i].innerHTML = "[fa-play fa-2x]";
        table.rows[1].cells[i + i].innerHTML = "Watch";
      } else if (selectedValue == "5") {
        table.rows[0].cells[i + i].innerHTML = "[fa-book fa-2x]";
        table.rows[1].cells[i + i].innerHTML = "Read";
      } else if (selectedValue == "6") {
        table.rows[0].cells[i + i].innerHTML = "[fa-comments fa-2x]";
        table.rows[1].cells[i + i].innerHTML = "Discuss";
      } else if (selectedValue == "7") {
        table.rows[0].cells[i + i].innerHTML = "[fa-check-square fa-2x]";
        table.rows[1].cells[i + i].innerHTML = "Complete";
      } else if (selectedValue == "8") {
        table.rows[0].cells[i + i].innerHTML = "[fa-coffee fa-2x]";
        table.rows[1].cells[i + i].innerHTML = "Reflect";
      } else if (selectedValue == "9") {
        table.rows[0].cells[i + i].innerHTML = "[fa-puzzle-piece fa-2x]";
        table.rows[1].cells[i + i].innerHTML = "Try";
      } else if (selectedValue == "10") {
        table.rows[0].cells[i + i].innerHTML = "[fa-refresh fa-2x]";
        table.rows[1].cells[i + i].innerHTML = "Check your knowledge";
      } else if (selectedValue == "11") {
        table.rows[0].cells[i + i].innerHTML = "[fa-users fa-2x]";
        table.rows[1].cells[i + i].innerHTML = "Tutorial";
      } else if (selectedValue == "12") {
        table.rows[0].cells[i + i].innerHTML = "[fa-cogs fa-2x]";
        table.rows[1].cells[i + i].innerHTML = "Practical";
      }else if (selectedValue == "13") {
        table.rows[0].cells[i + i].innerHTML = "[fa-flask fa-2x]";
        table.rows[1].cells[i + i].innerHTML = "Laboratory";
      } else if (selectedValue == "14") {
        table.rows[0].cells[i + i].innerHTML = "[fa-podcast fa-2x]";
        table.rows[1].cells[i + i].innerHTML = "Forum";
      } else if (selectedValue == "15") {
        table.rows[0].cells[i + i].innerHTML = "[fa-wrench fa-2x]";
        table.rows[1].cells[i + i].innerHTML = "Workshop";
      } 
    } else {
      if (selectedValue == "1") {
        table.rows[0].cells[i + i].innerHTML = "[fa-hourglass-start fa-2x]";
        table.rows[1].cells[i + i + 1].innerHTML = "[fa-angle-double-right]";
        table.rows[1].cells[i + i].innerHTML = "Pre-class activities";
      } else if (selectedValue == "2") {
        table.rows[0].cells[i + i].innerHTML = "[fa-forward fa-2x]";
        table.rows[1].cells[i + i + 1].innerHTML = "[fa-angle-double-right]";
        table.rows[1].cells[i + i].innerHTML = "In-class activities";
      } else if (selectedValue == "3") {
        table.rows[0].cells[i + i].innerHTML = "[fa-hourglass-end fa-2x]";
        table.rows[1].cells[i + i + 1].innerHTML = "[fa-angle-double-right]";
        table.rows[1].cells[i + i].innerHTML = "Post-class activities";
      } else if (selectedValue == "4") {
        table.rows[0].cells[i + i].innerHTML = "[fa-play fa-2x]";
        table.rows[1].cells[i + i + 1].innerHTML = "[fa-angle-double-right]";
        table.rows[1].cells[i + i].innerHTML = "Watch";
      } else if (selectedValue == "5") {
        table.rows[0].cells[i + i].innerHTML = "[fa-book fa-2x]";
        table.rows[1].cells[i + i + 1].innerHTML = "[fa-angle-double-right]";
        table.rows[1].cells[i + i].innerHTML = "Read";
      } else if (selectedValue == "6" {
        able.rows[0].cells[i + i].innerHTML = "[fa-comments fa-2x]";
        table.rows[1].cells[i + i + 1].innerHTML = "[fa-angle-double-right]";
        table.rows[1].cells[i + i].innerHTML = "Discuss";
      } else if (selectedValue == "7") {
        table.rows[0].cells[i + i].innerHTML = "[fa-check-square fa-2x]";
        table.rows[1].cells[i + i + 1].innerHTML = "[fa-angle-double-right]";
        table.rows[1].cells[i + i].innerHTML = "Complete";
      } else if (selectedValue == "8") {
        table.rows[0].cells[i + i].innerHTML = "[fa-coffee fa-2x]";
        table.rows[1].cells[i + i + 1].innerHTML = "[fa-angle-double-right]";
        table.rows[1].cells[i + i].innerHTML = "Reflect";
      } else if (selectedValue == "9") {
        table.rows[0].cells[i + i].innerHTML = "[fa-puzzle-piece fa-2x]";
        table.rows[1].cells[i + i + 1].innerHTML = "[fa-angle-double-right]";
        table.rows[1].cells[i + i].innerHTML = "Try";
      } else if (selectedValue == "10") {
        table.rows[0].cells[i + i].innerHTML = "[fa-refresh fa-2x]";
        table.rows[1].cells[i + i + 1].innerHTML = "[fa-angle-double-right]";
        table.rows[1].cells[i + i].innerHTML = "Check your knowledge";
      } else if (selectedValue == "11" {
        table.rows[0].cells[i + i].innerHTML = "[fa-users fa-2x]";
        table.rows[1].cells[i + i + 1].innerHTML = "[fa-angle-double-right]";
        table.rows[1].cells[i + i].innerHTML = "Tutorial";
      } else if (selectedValue == "12") {
        table.rows[0].cells[i + i].innerHTML = "[fa-cogs fa-2x]";
        table.rows[1].cells[i + i + 1].innerHTML = "[fa-angle-double-right]";
       able.rows[1].cells[i + i].innerHTML = "Practical";
      } else if (selectedValue == "13") {
       table.rows[0].cells[i + i].innerHTML = "[fa-flask fa-2x]";
        table.rows[1].cells[i + i + 1].innerHTML = "[fa-angle-double-right]";
         table.rows[1].cells[i + i].innerHTML = "Laboratory";
      } else if (selectedValue == "14" {
        table.rows[0].cells[i + i].innerHTML = "[fa-podcast fa-2x]";
        table.rows[1].cells[i + i + 1].innerHTML = "[fa-angle-double-right]";
        table.rows[1].cells[i + i].innerHTML = "Forum";
      } else if (selectedValue == "15") {
        table.rows[0].cells[i + i].innerHTML = "[fa-wrench fa-2x]";
        table.rows[1].cells[i + i + 1].innerHTML = "[fa-angle-double-right]";
        table.rows[1].cells[i + i].innerHTML = "Workshop";
      }
    }
  }
	$("#id_introeditoreditable").focus();
}
//}
	//Close window.onload function	
	});
			
