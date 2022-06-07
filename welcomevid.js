// directs the function to work once the page has loaded.
window.addEventListener('load',function(){
	 
//make a variable of the breadcrumbs 
	var Edit=$('li.breadcrumb-item').text();
  
//check if hidden overview exists  
  var hiddenoverview = document.getElementById("hiddenoverview");

//check if edit settings page and if hidden overview element exists
    if (Edit.match(/Edit settings/)){      
      if(hiddenoverview){
        $('#id_generalhdr').after('<fieldset class="clearfix collapsible" id="id_overview"> <legend class="ftoggler" id="yui_3_17_2_1_1654576403489_967"><a href="#" class="fheader" role="button" aria-controls="id_overviewhdr" aria-expanded="true" id="yui_3_17_2_1_1654576403489_966">Overview Setting</a></legend> <div class="fcontainer clearfix" id="yui_3_17_2_1_1654224885860_866"> <div id="Synopsis" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0" id="yui_3_17_2_1_1654575686320_967"> <label class="d-inline word-break " for="id_visible" id="yui_3_17_2_1_1654575686320_1001">Unit Synopsis</label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start" id="yui_3_17_2_1_1654575686320_966"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;> <p>This space should house the official unit synopsis as in the unit handbook.</p> <p>Other information - such as instructions to students, a welcome message, etc. - should be included in the video to the left.</p> <p>Please note that all units must include an introductory video. You should also provide a link to the handbook like this: For more information visit the unit handbook.</p> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title="" id="yui_3_17_2_1_1654575686320_965"> <i class="icon fa fa-question-circle text-info fa-fw " title="Unit Synopsis" aria-label="Unit Synopsis" id="yui_3_17_2_1_1654575686320_968"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="Text" id="yui_3_17_2_1_1654136305933_1090"> <textarea type="text" class="form-control" name="UnitSny" id="USny" cols="100" rows="6"></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_visible"> </div> </div> </div><div id="LO" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0" id="yui_3_17_2_1_1654575686320_957"> <label class="d-inline word-break " for="id_visible" id="yui_3_17_2_1_1654575686320_1011"> Learning Outcome </label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start" id="yui_3_17_2_1_1654575686320_956"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;> <p>Learning Outcome of this unit has to be stated in point form. </p> <p> Use the formatting provided in the textarea </p> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title="" id="yui_3_17_2_1_1654575686320_955"> <i class="icon fa fa-question-circle text-info fa-fw " title="Learning Outcome" aria-label="Learning Outcome" id="yui_3_17_2_1_1654575686320_958"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="Text" id="yui_3_17_2_1_1654224885860_865"> <textarea type="text" class="form-control" name="LO" id="id_lo" cols="100" rows="6" placeholder="List down the learning outcome of this unit.&#10;1. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.&#10;2. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_visible"> </div> </div> </div><div id="LName" class="form-group row fitem "> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0" id="yui_3_17_2_1_1654224885860_879"> <label class="d-inline word-break " for="id_cmidnumber"> Lecturer Name </label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start" id="yui_3_17_2_1_1654224885860_878"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;><p>Provide name of the lecturer who manages this site. </p></div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title="" id="yui_3_17_2_1_1654224885860_877"> <i class="icon fa fa-question-circle text-info fa-fw " title="Lecturer Name" aria-label="Lecturer Name" id="yui_3_17_2_1_1654224885860_880"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="text"> <textarea type="text" class="form-control " name="Lname" id="Lname" value="" cols="100" rows="1"></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_cmidnumber"> </div> </div> </div> <div id="LContact" class="form-group row fitem "> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0" id="yui_3_17_2_1_1654224885860_910"> <label class="d-inline word-break " for="id_cmidnumber"> Lecturer Contact </label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start" id="yui_3_17_2_1_1654224885860_909"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;><p>Provide contact details of lecturer who manages this site. </p></div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title="" id="yui_3_17_2_1_1654224885860_908"> <i class="icon fa fa-question-circle text-info fa-fw " title="Lecturer Contact" aria-label="Lecturer Contact" id="yui_3_17_2_1_1654224885860_911"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="text"> <textarea type="text" class="form-control " name="LContact" id="LC" value="" cols="100" rows="2"></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_cmidnumber"> </div> </div> </div> <div id="VURL" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0" id="yui_3_17_2_1_1654575686320_992"> <label class="d-inline word-break " for="id_cmidnumber"> Video Emded Code </label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start" id="yui_3_17_2_1_1654575686320_991"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;><p>Copy the embed code provided in Youtube or Panopto then paste it at the provided text field.</p> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title="" id="yui_3_17_2_1_1654575686320_990"> <i class="icon fa fa-question-circle text-info fa-fw " title="Embed Video" aria-label="Help with ID number" id="yui_3_17_2_1_1654575686320_993"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="text"> <textarea type="text" class="form-control " name="cmidurl" id="url" value="" cols="100" rows="4"></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_cmidnumber"> </div> </div> </div></div> <button type="button" class="btn btn-primary" id="Upload" onclick="getURL()">Update</button></fieldset>')
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
    
      
      var Nametab = document.querySelectorAll(".acctab-content h6")[0];
      var NameNew = document.getElementById("Lname").value.trim();
      
      
      var Contab = document.querySelectorAll(".acctab-content p")[2];
      var ConNew = document.getElementById("LC").value.trim();
 
    if( videoURL =="" && uSynNew =="" && LOsNew =="" && NameNew =="" && ConNew =="") //all fields are empty
      {
     $("#id_introeditoreditable").focus();
      }
   if  ( videoURL !="" && uSynNew !="" && LOsNew !="" && NameNew !="" && ConNew !="") //all fields are not empty
      {
       Nametab.innerHTML=NameNew;
       LOstab.innerHTML=LOsNew;
       video.innerHTML=videoURL;
       uSyntab.innerHTML=uSynNew;
       Contab.innerHTML=ConNew;
       $("#id_introeditoreditable").focus();
      }	
		
    if(videoURL !="")//video URL is empty
      {
      video.innerHTML=videoURL;
      $("#id_introeditoreditable").focus();
      }  
     if( uSynNew != "") //Synopsis is empty
      {
	 uSyntab.innerHTML=uSynNew; 
	 $("#id_introeditoreditable").focus();
      }
      if(LOsNew != "") // LO is empty
      {
       LOstab.innerHTML=LOsNew; 
       $("#id_introeditoreditable").focus();
      }     
      if( NameNew != "") // Lecturer name is empty
      {
       Nametab.innerHTML=NameNew;
       $("#id_introeditoreditable").focus();
      }
      if( ConNew != "") // Lecturer contact is empty
      {
      Contab.innerHTML=ConNew;
      $("#id_introeditoreditable").focus();      
      }
  	
	}
	
	//Close window.onload function	
	});
