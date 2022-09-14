//start of welcome video and taskbar editor
  //check if hidden overview exists
  var hiddenoverview = document.getElementById("hiddenoverview");
  //check if taskbar exists
  var taskbar = document.getElementById("taskbar");
  //check if header exists
  var taskhead = document.querySelectorAll(".circleiconw")[0];

  //check if edit settings page and if hidden overview element or taskbar exists
  if (SchoolSpecific.match(/Edit settings/)) {
    if (hiddenoverview) {
      $("#id_generalhdr").before(
        '<fieldset class="clearfix collapsible" id="id_overview"> <legend class="ftoggler"><a href="#" class="fheader" role="button" aria-controls="id_overviewhdr" aria-expanded="true">Overview editor (beta)</a></legend> <div class="editinfobox"> <p>Use this editor to insert your welcome video and update the unit information displayed on the overview page. Enter new information in the form below. Leave field(s) blank if there are no updates to the section. To save your changes, <b>click \'Update\' then scroll to the bottom of the page and click \'Save and return to unit\'</b></p> </div> <div class="fcontainer clearfix"> <div id="Synopsis" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_visible">Unit Synopsis</label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;> <p>This space should house the official unit synopsis as in the unit handbook.</p> <p>Other information - such as instructions to students, a welcome message, etc. - should be included in the video to the left.</p> <p>Please note that all units must include an introductory video. You should also provide a link to the handbook like this: For more information visit the unit handbook.</p> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title=""> <i class="icon fa fa-question-circle text-info fa-fw " title="Unit Synopsis" aria-label="Unit Synopsis"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="Text"> <textarea type="text" class="form-control" name="UnitSny" id="USny" cols="100" rows="6"></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_visible"> </div> </div> </div> <div id="LO" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_visible"> Learning Outcome </label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;> <p>Learning Outcome of this unit has to be stated in point form. </p> <p> Use the formatting provided in the textarea </p> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title=""> <i class="icon fa fa-question-circle text-info fa-fw " title="Learning Outcome" aria-label="Learning Outcome"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="Text"> <textarea type="text" class="form-control" name="LO" id="id_lo" cols="100" rows="6" placeholder="List down the learning outcome of this unit.&#10;1. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.&#10;2. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_visible"> </div> </div> </div> <div id="LName" class="form-group row fitem "> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_cmidnumber">Educator Contact Details</label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;><p>Provide information about the lecturer and or chief examiner of this unit. You should include their name, email and consultation hours. You may also include a message about booking a consultation. </p></div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title=""> <i class="icon fa fa-question-circle text-info fa-fw " title="Lecturer Name" aria-label="Lecturer Name"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="text"> <textarea type="text" class="form-control " name="Lname" id="Lname" value="" cols="100" rows="5" placeholder="Your name&#10;Lecturer/Chief Examiner&#10;Email: yourname@monash.edu&#10;Consultation hours: 10-12am Monday&#10;Drop me an email to set up a 1-on-1 consultation."></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_cmidnumber"> </div> </div> </div> <div id="VURL" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_cmidnumber"> Welcome Video Embed Code </label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;><p>Copy the embed code provided in Youtube or Panopto then paste it at the provided text field.</p><br><a href=&quot;https://monash.au.panopto.com/Panopto/Pages/Viewer.aspx?id=3dc2b356-7189-4efb-8d9d-aebf00a0b7dc&quot; target=&quot;_blank&quot;>How to get my video embed code?</a> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title="" id="yui_3_17_2_1_1656163237906_1587"> <i class="icon fa fa-question-circle text-info fa-fw " title="Embed Video" aria-label="Help with ID number" id="yui_3_17_2_1_1656163237906_1589"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="text"> <textarea type="text" class="form-control " name="cmidurl" id="url" value="" cols="100" rows="4"></textarea> </div> <div class="form-control-feedback invalid-feedback" id="id_error_cmidnumber"> </div> </div> <div id="updatebutton" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"></div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="text"> <button type="button" class="btn btn-primary" id="Upload" onclick="getURL()" style="margin: 15px 0px">Update</button></div> </div> </div> </fieldset>'
      );
      //beginning of overview editor functions
      var btnUpdate = document.getElementById("Upload");
      btnUpdate.addEventListener("click", getURL);

      function getURL() {
        var video = document.querySelectorAll(".embed-responsive-16by9")[0];
        var videoURL = document.getElementById("url").value;

        var uSyntab = document.querySelectorAll(".acctab-content p")[0];
        var uSynNew = document.getElementById("USny").value.trim();

        var LOstab = document.querySelectorAll(".acctab-content ol")[0];
        var LOsNew = document.getElementById("id_lo").value.trim();

        var Nametab = document.querySelectorAll(".acctab-content td")[2];
        var NameNew = document.getElementById("Lname").value.trim();

        if (videoURL == "" && uSynNew == "" && LOsNew == "" && NameNew == "") {
          //all fields are empty
          $("#id_introeditoreditable").focus();
        }
        if (videoURL != "" && uSynNew != "" && LOsNew != "" && NameNew != "") {
          //all fields are not empty
          Nametab.innerHTML = NameNew;
          Nametab.classList.add("newaccordlec");
          LOstab.innerHTML = LOsNew;
          LOstab.classList.add("newaccordlo");
          video.innerHTML = videoURL;
          video.classList.add("newaccordvid");
          uSyntab.innerHTML = uSynNew;
          uSyntab.classList.add("newaccordsyn");
          $("#id_introeditoreditable").focus();
        }

        if (videoURL != "") {
          //video URL is not empty
          video.innerHTML = videoURL;
          video.classList.add("newaccordvid");
          $("#id_introeditoreditable").focus();
        }
        if (uSynNew != "") {
          //Synopsis is not empty
          uSyntab.innerHTML = uSynNew;
          uSyntab.classList.add("newaccordsyn");
          $("#id_introeditoreditable").focus();
        }
        if (LOsNew != "") {
          // LO is not empty
          LOstab.innerHTML = LOsNew;
          LOstab.classList.add("newaccordlo");
          $("#id_introeditoreditable").focus();
        }
        if (NameNew != "") {
          // Lecturer name is not empty
          Nametab.innerHTML = NameNew;
          Nametab.classList.add("newaccordlec");
          $("#id_introeditoreditable").focus();
        }
      }
    } else if (taskbar) {
      $("#id_generalhdr").before(
        '<fieldset class="clearfix collapsible" id="taskpicker"> <legend class="ftoggler"><a href="#" class="fheader" role="button" aria-controls="id_modstandardelshdr" aria-expanded="true">Taskbar editor (beta)</a></legend> <div class="editinfobox"> <p>Use this editor to describe the week\'s learning path. You can add up to 7 tasks but it is recommended to have no more than 5 per week. <b>Once you\'ve designated all tasks click \'Update taskbar\', then save and return to unit<b>.</p> </div> <div id="taskcontainer"> <div class="form-group row fitem"><div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break" for="id_visible"> </label> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="modvisible"><button type="button" class="btn btn-warning" id="addtask" style="margin: 10px 5px; border-radius: 2px; font-weight: 500; box-shadow: 0 2px 5px 0 rgb(0 0 0 / 50%); border: none">Add task</button></div> </div> <div id="taskoption"> <div id="taskdrop" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break" for="id_visible"> Task </label> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="modvisible"> <select class="custom-select" name="visible" id="id_visible"> <option value="1" selected="">Pre-class</option> <option value="2">In-class</option> <option value="3">Post-class</option> <option value="4"="">Watch</option> <option value="5">Read</option> <option value="6">Discuss</option> <option value="7">Complete</option> <option value="8">Reflect</option> <option value="9">Try</option> <option value="10">Knowledge Check</option> <option value="11">Tutorial</option> <option value="12">Practical</option> <option value="13">Laboratory</option> <option value="14">Forum</option> <option value="15">Workshop</option> </select> </div> </div> </div> </div> <div id="addtaskbutton" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break" for="id_visible"> </label> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="modvisible"><button type="button" class="btn btn-primary" style="margin: 10px 5px" id="changetaskbar"><i class="icon fa fa-exclamation-triangle fa-fw " title="important note" aria-label="important note"></i>Update taskbar</button> </div> </fieldset>'
      );
      //beginning of taskbar editor functions
      var btnAddTask = document.getElementById("addtask");
      btnAddTask.addEventListener("click", textBoxCreate);
      var i = 0;
      function textBoxCreate() {
        //Create and append select list

        var taskoption = document.getElementById("taskoption");
        var clone = taskoption.cloneNode(true);
        i++;
        clone.id = "taskoption" + i;
        document.getElementById("taskcontainer").appendChild(clone);
      }

      var btnChange = document.getElementById("changetaskbar");
      btnChange.addEventListener("click", createTable);

      function createTable() {
        var num_rowz = 2;
        var num_cols = 14;
        //var num_cols = document.querySelectorAll("#taskdrop").length;
        var tbody = "";
        for (var i = 0; i < num_rowz; i++) {
          tbody += "<tr>";
          for (var j = 0; j < num_cols; j++) {
            tbody += '<td class="newtask">\n';
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
          selectedValue = document.querySelectorAll("#taskdrop select")[i]
            .value;

          if (i == num_cols - 1 || num_cols == 1) {
            if (selectedValue == "1") {
              table.rows[0].cells[i + i].innerHTML =
                "[fa-hourglass-start fa-2x]";
              table.rows[1].cells[i + i].innerHTML =
                "Pre-class<br>\nactivities";
            } else if (selectedValue == "2") {
              table.rows[0].cells[i + i].innerHTML = "[fa-forward fa-2x]";
              table.rows[1].cells[i + i].innerHTML = "In-class<br>\nactivities";
            } else if (selectedValue == "3") {
              table.rows[0].cells[i + i].innerHTML = "[fa-hourglass-end fa-2x]";
              table.rows[1].cells[i + i].innerHTML =
                "Post-class<br>\nactivities";
            } else if (selectedValue == "4") {
              table.rows[0].cells[i + i].innerHTML = "[fa-play-circle fa-2x]";
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
              table.rows[1].cells[i + i].innerHTML = "Knowledge<br>\nCheck";
            } else if (selectedValue == "11") {
              table.rows[0].cells[i + i].innerHTML = "[fa-users fa-2x]";
              table.rows[1].cells[i + i].innerHTML = "Tutorial";
            } else if (selectedValue == "12") {
              table.rows[0].cells[i + i].innerHTML = "[fa-cogs fa-2x]";
              table.rows[1].cells[i + i].innerHTML = "Practical";
            } else if (selectedValue == "13") {
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
              table.rows[0].cells[i + i].innerHTML =
                "[fa-hourglass-start fa-2x]";
              table.rows[1].cells[i + i + 1].innerHTML =
                "[fa-angle-double-right]";
              table.rows[1].cells[i + i].innerHTML =
                "Pre-class<br>\nactivities";
            } else if (selectedValue == "2") {
              table.rows[0].cells[i + i].innerHTML = "[fa-forward fa-2x]";
              table.rows[1].cells[i + i + 1].innerHTML =
                "[fa-angle-double-right]";
              table.rows[1].cells[i + i].innerHTML = "In-class<br>\nactivities";
            } else if (selectedValue == "3") {
              table.rows[0].cells[i + i].innerHTML = "[fa-hourglass-end fa-2x]";
              table.rows[1].cells[i + i + 1].innerHTML =
                "[fa-angle-double-right]";
              table.rows[1].cells[i + i].innerHTML =
                "Post-class<br>\nactivities";
            } else if (selectedValue == "4") {
              table.rows[0].cells[i + i].innerHTML = "[fa-play-circle fa-2x]";
              table.rows[1].cells[i + i + 1].innerHTML =
                "[fa-angle-double-right]";
              table.rows[1].cells[i + i].innerHTML = "Watch";
            } else if (selectedValue == "5") {
              table.rows[0].cells[i + i].innerHTML = "[fa-book fa-2x]";
              table.rows[1].cells[i + i + 1].innerHTML =
                "[fa-angle-double-right]";
              table.rows[1].cells[i + i].innerHTML = "Read";
            } else if (selectedValue == "6") {
              table.rows[0].cells[i + i].innerHTML = "[fa-comments fa-2x]";
              table.rows[1].cells[i + i + 1].innerHTML =
                "[fa-angle-double-right]";
              table.rows[1].cells[i + i].innerHTML = "Discuss";
            } else if (selectedValue == "7") {
              table.rows[0].cells[i + i].innerHTML = "[fa-check-square fa-2x]";
              table.rows[1].cells[i + i + 1].innerHTML =
                "[fa-angle-double-right]";
              table.rows[1].cells[i + i].innerHTML = "Complete";
            } else if (selectedValue == "8") {
              table.rows[0].cells[i + i].innerHTML = "[fa-coffee fa-2x]";
              table.rows[1].cells[i + i + 1].innerHTML =
                "[fa-angle-double-right]";
              table.rows[1].cells[i + i].innerHTML = "Reflect";
            } else if (selectedValue == "9") {
              table.rows[0].cells[i + i].innerHTML = "[fa-puzzle-piece fa-2x]";
              table.rows[1].cells[i + i + 1].innerHTML =
                "[fa-angle-double-right]";
              table.rows[1].cells[i + i].innerHTML = "Try";
            } else if (selectedValue == "10") {
              table.rows[0].cells[i + i].innerHTML = "[fa-refresh fa-2x]";
              table.rows[1].cells[i + i + 1].innerHTML =
                "[fa-angle-double-right]";
              table.rows[1].cells[i + i].innerHTML = "Knowledge<br>\nCheck";
            } else if (selectedValue == "11") {
              table.rows[0].cells[i + i].innerHTML = "[fa-users fa-2x]";
              table.rows[1].cells[i + i + 1].innerHTML =
                "[fa-angle-double-right]";
              table.rows[1].cells[i + i].innerHTML = "Tutorial";
            } else if (selectedValue == "12") {
              table.rows[0].cells[i + i].innerHTML = "[fa-cogs fa-2x]";
              table.rows[1].cells[i + i + 1].innerHTML =
                "[fa-angle-double-right]";
              table.rows[1].cells[i + i].innerHTML = "Practical";
            } else if (selectedValue == "13") {
              table.rows[0].cells[i + i].innerHTML = "[fa-flask fa-2x]";
              table.rows[1].cells[i + i + 1].innerHTML =
                "[fa-angle-double-right]";
              table.rows[1].cells[i + i].innerHTML = "Laboratory";
            } else if (selectedValue == "14") {
              table.rows[0].cells[i + i].innerHTML = "[fa-podcast fa-2x]";
              table.rows[1].cells[i + i + 1].innerHTML =
                "[fa-angle-double-right]";
              table.rows[1].cells[i + i].innerHTML = "Forum";
            } else if (selectedValue == "15") {
              table.rows[0].cells[i + i].innerHTML = "[fa-wrench fa-2x]";
              table.rows[1].cells[i + i + 1].innerHTML =
                "[fa-angle-double-right]";
              table.rows[1].cells[i + i].innerHTML = "Workshop";
            }
          }
        }
        $("#id_introeditoreditable").focus();
      }
    } else if (taskhead) {
      $("#id_generalhdr").before(
        '<fieldset class="clearfix collapsible" id="taskpicker"> <legend class="ftoggler"><a href="#" class="fheader" role="button" aria-controls="id_modstandardelshdr" aria-expanded="true">Header editor (beta)</a></legend> <div class="editinfobox"> <p>Use this editor to edit the header. Choose a header from the dropdown menu then <b>click \'Update header\'</b>. Finally, scroll to the bottom of this page and click \'Save and return to unit\'.</p> </div> <div id="taskcontainer"> <div id="taskoption"> <div id="taskdrop" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break" for="id_visible">Header</label> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="modvisible"> <select class="custom-select" name="visible" id="id_visible"> <option value="1" selected="">Pre-class</option> <option value="2">In-class</option> <option value="3">Post-class</option> <option value="4"="">Watch</option> <option value="5">Read</option> <option value="6">Discuss</option> <option value="7">Complete</option> <option value="8">Reflect</option> <option value="9">Try</option> <option value="10">Knowledge Check</option> <option value="11">Tutorial</option> <option value="12">Practical</option> <option value="13">Laboratory</option> <option value="14">Forum</option> <option value="15">Workshop</option> </select> </div> </div> </div> </div> <div id="addtaskbutton" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break" for="id_visible"> </label> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="modvisible"><button type="button" class="btn btn-primary" style="margin: 10px 5px" id="changeheader"><i class="icon fa fa-exclamation-triangle fa-fw " title="important note" aria-label="important note"></i>Update header</button> </div> </fieldset>'
      );
      var btnChangeHeader = document.getElementById("changeheader");
      btnChangeHeader.addEventListener("click", changeHeader);

      function changeHeader() {
        var heading = document.querySelectorAll(".circleiconw")[0];
        var headingDesc = document.querySelectorAll(".circleiconw + h2")[0];
        var selectedValueA = document.querySelectorAll("#taskdrop select")[0]
          .value;

        if (selectedValueA == "1") {
          heading.innerHTML = "[fa-hourglass-start fa-3x fa-fw]";
          headingDesc.innerHTML = "Pre-class activities";
        } else if (selectedValueA == "2") {
          heading.innerHTML = "[fa-forward fa-3x fa-fw]";
          headingDesc.innerHTML = "In-class activities";
        } else if (selectedValueA == "3") {
          heading.innerHTML = "[fa-hourglass-end fa-3x fa-fw]";
          headingDesc.innerHTML = "Post-class activities";
        } else if (selectedValueA == "4") {
          heading.innerHTML = "[fa-play-circle fa-3x fa-fw]";
          headingDesc.innerHTML = "Watch";
        } else if (selectedValueA == "5") {
          heading.innerHTML = "[fa-book fa-3x fa-fw]";
          headingDesc.innerHTML = "Read";
        } else if (selectedValueA == "6") {
          heading.innerHTML = "[fa-comments fa-3x fa-fw]";
          headingDesc.innerHTML = "Discuss";
        } else if (selectedValueA == "7") {
          heading.innerHTML = "[fa-check-square fa-3x fa-fw]";
          headingDesc.innerHTML = "Complete";
        } else if (selectedValueA == "8") {
          heading.innerHTML = "[fa-coffee fa-3x fa-fw]";
          headingDesc.innerHTML = "Reflect";
        } else if (selectedValueA == "9") {
          heading.innerHTML = "[fa-puzzle-piece fa-3x fa-fw]";
          headingDesc.innerHTML = "Try";
        } else if (selectedValueA == "10") {
          heading.innerHTML = "[fa-refresh fa-3x fa-fw]";
          headingDesc.innerHTML = "Knowledge Check";
        } else if (selectedValueA == "11") {
          heading.innerHTML = "[fa-users fa-3x fa-fw]";
          headingDesc.innerHTML = "Tutorial";
        } else if (selectedValueA == "12") {
          heading.innerHTML = "[fa-cogs fa-3x fa-fw]";
          headingDesc.innerHTML = "Practical";
        } else if (selectedValueA == "13") {
          heading.innerHTML = "[fa-flask fa-3x fa-fw]";
          headingDesc.innerHTML = "Laboratory";
        } else if (selectedValueA == "14") {
          heading.innerHTML = "[fa-podcast fa-3x fa-fw]";
          headingDesc.innerHTML = "Forum";
        } else if (selectedValueA == "15") {
          heading.innerHTML = "[fa-wrench fa-3x fa-fw]";
          headingDesc.innerHTML = "Workshop";
        }
        $("#id_introeditoreditable").focus();
      }
    }
  }
