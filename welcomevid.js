// directs the function to work once the page has loaded.
window.addEventListener('load',function(){
	 
//make a variable of the breadcrumbs 
	var Edit=$('li.breadcrumb-item').text();
  
//check if hidden overview exists  
  var hiddenoverview = document.getElementById("hiddenoverview");

//check if edit settings page and if hidden overview element exists
    if (Edit.match(/Edit settings/)){      
      if(hiddenoverview){
        $('#id_generalhdr').before('<fieldset class="clearfix collapsible" id="id_overview"> <legend class="ftoggler"><a href="#" class="fheader" role="button" aria-controls="id_overviewhdr" aria-expanded="true">Overview editor (beta)</a></legend> <div class="editinfobox"> <p>Use this editor to insert your welcome video and update the unit information displayed on the overview page. Enter new information in the form below. Leave field(s) blank if there are no updates to the section. To save your changes, click \'Update\' then scroll to the bottom of the page and click \'Save and return to unit\'</p> </div> <div class="fcontainer clearfix"> <div id="Synopsis" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_visible">Unit Synopsis</label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;> <p>This space should house the official unit synopsis as in the unit handbook.</p> <p>Other information - such as instructions to students, a welcome message, etc. - should be included in the video to the left.</p> <p>Please note that all units must include an introductory video. You should also provide a link to the handbook like this: For more information visit the unit handbook.</p> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title=""> <i class="icon fa fa-question-circle text-info fa-fw " title="Unit Synopsis" aria-label="Unit Synopsis"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="Text"> <textarea type="text" class="form-control" name="UnitSny" id="USny" cols="100" rows="6"></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_visible"> </div> </div> </div> <div id="LO" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_visible"> Learning Outcome </label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;> <p>Learning Outcome of this unit has to be stated in point form. </p> <p> Use the formatting provided in the textarea </p> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title=""> <i class="icon fa fa-question-circle text-info fa-fw " title="Learning Outcome" aria-label="Learning Outcome"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="Text"> <textarea type="text" class="form-control" name="LO" id="id_lo" cols="100" rows="6" placeholder="List down the learning outcome of this unit.&#10;1. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.&#10;2. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_visible"> </div> </div> </div> <div id="LName" class="form-group row fitem "> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_cmidnumber">Educator Contact Details</label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;><p>Provide information about the lecturer and or chief examiner of this unit. You should include their name, email and consultation hours. You may also include a message about booking a consultation. </p></div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title=""> <i class="icon fa fa-question-circle text-info fa-fw " title="Lecturer Name" aria-label="Lecturer Name"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="text"> <textarea type="text" class="form-control " name="Lname" id="Lname" value="" cols="100" rows="5" placeholder="Your name&#10;Lecturer/Chief Examiner&#10;Email: yourname@monash.edu&#10;Consultation hours: 10-12am Monday&#10;Drop me an email to set up a 1-on-1 consultation."></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_cmidnumber"> </div> </div> </div> <div id="VURL" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_cmidnumber"> Video Emded Code </label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;><p>Copy the embed code provided in Youtube or Panopto then paste it at the provided text field.</p> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title="" id="yui_3_17_2_1_1654575686320_990"> <i class="icon fa fa-question-circle text-info fa-fw " title="Embed Video" aria-label="Help with ID number"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="text"> <textarea type="text" class="form-control " name="cmidurl" id="url" value="" cols="100" rows="4"></textarea> <button type="button" class="btn btn-primary" id="Upload" onclick="getURL()" style="margin: 15px 0px">Update</button> </div> <div class="form-control-feedback invalid-feedback" id="id_error_cmidnumber"> </div> </div> </div> </fieldset>')
				  }
    }
	
var btn = document.getElementById("Upload");
btn.addEventListener("click", getURL);

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
	
	//Close window.onload function	
	});
