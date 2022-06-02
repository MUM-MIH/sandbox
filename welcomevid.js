// directs the function to work once the page has loaded.
window.addEventListener('load',function(){
//make a variable of the breadcrumbs 
	var Edit=$('li.breadcrumb-item').text();
  
//check if hidden overview exists  
  var hiddenoverview = document.getElementById("hiddenoverview");

//check if edit settings page and if hidden overview element exists
    if (Edit.match(/Edit settings/)){      
      if(hiddenoverview){
        $('#id_generalhdr').after('<fieldset class="clearfix collapsible" id="id_overview"> <legend class="ftoggler"><a href="#" class="fheader" role="button" aria-controls="id_overviewhdr" aria-expanded="true">Overview Setting</a></legend> <div class="fcontainer clearfix"> <div id="Synopsis" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_visible">Unit Synopsis</label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;> <p>This space should house the official unit synopsis as in the unit handbook.</p> <p>Other information - such as instructions to students, a welcome message, etc. - should be included in the video to the left.</p> <p>Please note that all units must include an introductory video. You should also provide a link to the handbook like this: For more information visit the unit handbook.</p> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title=""> <i class="icon fa fa-question-circle text-info fa-fw " title="Help with Availability" aria-label="Help with Availability"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="Text" id="yui_3_17_2_1_1654136305933_1090"> <textarea type="text" class="form-control" name="UnitSny" id="USny" cols="100" rows="15"></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_visible"> </div> </div> </div><div id="LO" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_visible"> Learning Outcome </label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;> <p>Learning Outcome of this unit has to be stated in point form. </p> <p> Use the formatting provided in the textarea </p> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title=""> <i class="icon fa fa-question-circle text-info fa-fw " title="Help with Availability" aria-label="Help with Availability"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="Text"> <textarea type="text" class="form-control" name="LO" id="id_lo" cols="100" rows="15"></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_visible"> </div> </div> </div><div id="fitem_id_cmidnumber" class="form-group row fitem "> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_cmidnumber"> Lecturer Contact </label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;><p>Provide contact details of Academic team who are involve in this unit. </p> <p>Use the formatting provided. </p> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title=""> <i class="icon fa fa-question-circle text-info fa-fw " title="Lecturer Contact" aria-label="Lecturer Contact"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="text"> <textarea type="text" class="form-control " name="LContact" id="LC" value="" cols="100" rows="10"></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_cmidnumber"> </div> </div> </div> <div id="fitem_id_cmidnumber" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_cmidnumber"> Video Emded Code </label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;><p>Copy the embed code provided in Youtube or Panopto then paste it at the provided text field.</p> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title=""> <i class="icon fa fa-question-circle text-info fa-fw " title="Help with ID number" aria-label="Help with ID number"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="text">  <textarea type="text" class="form-control " name="cmidurl" id="url" value="" size="100"></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_cmidnumber"> </div> </div> </div></div> <button type="button" class="btn btn-primary" id="Upload">Update</button>')
				  }
    }
	
  var btn = document.getElementById("Upload");
	btn.addEventListener("click", getURL);
	function getURL() {
      var video = document.querySelectorAll(".embed-responsive-16by9 iframe")[0];
      var videoURL = document.getElementById("url").value;
      console.log(videoURL);
        video.outerHTML=videoURL;
      
      var uSyntab = document.querySelectorAll(".acctab-content p")[0];
      var uSynNew = document.getElementById("USny").value;
      console.log(uSyntab);
        uSyntab.innerHTML=uSynNew;
      
      var LOstab = document.querySelectorAll(".acctab-content ol")[0];
      var LOsNew = document.getElementById("id_lo").value;
      console.log(LOstab);
        LOstab.innerHTML=LOsNew;
      
      var Nametab = document.querySelectorAll(".acctab-content h6")[0];
      var NameNew = document.getElementById("LC").value;
      console.log(Nametab);
        Nametab.innerHTML=NameNew;
      
      var Contab = document.querySelectorAll(".acctab-content p")[2];
      var ConNew = document.getElementById("LC").value;
      console.log(Contab);
        Contab.innerHTML=ConNew;
    }
	//Close window.onload function	
	});
