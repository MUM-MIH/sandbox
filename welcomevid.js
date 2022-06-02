//make a variable of the breadcrumbs 
	var Edit=$('li.breadcrumb-item').text();
  
  //check if hidden overview exists  
  var hiddenoverview = document.getElementById("hiddenoverview");

  //check if edit settings page and if hidden overview element exists
    if (Edit.match(/Edit settings/)){      
      if(hiddenoverview){
        $('#id_generalhdr').after(<fieldsetclass="clearfixcollapsible"id="id_overview"><legendclass="ftoggler"id="yui_3_17_2_1_1654136305933_964i"><ahref="#"class="fheader"role="button"aria-controls="id_overviewhdr"aria-expanded="true"id="yui_3_17_2_1_1654136305933_69i">OverviewSetting</a></legend><divclass="fcontainerclearfix"id="yui_3_17_2_1_1654136305933_1086"><divid="Synopsis"class="form-grouprowfitem"><divclass="col-md-3col-form-labeld-flexpb-0pr-md-0"id="yui_3_17_2_1_1654136305933_1141"><labelclass="d-inlineword-break"for="id_visible"id="yui_3_17_2_1_1654136305933_1140">UnitSynopsis</label><divclass="ml-1ml-md-autod-flexalign-items-centeralign-self-start"id="yui_3_17_2_1_1654141162618_1156"><aclass="btnbtn-linkp-0"role="button"data-container="body"data-toggle="popover"data-placement="right"data-content="<divclass=&quot;no-overflow&quot;><p>Thisspaceshouldhousetheofficialunitsynopsisasintheunithandbook.</p><p>Otherinformation-suchasinstructionstostudents,awelcomemessage,etc.-shouldbeincludedinthevideototheleft.</p><p>Pleasenotethatallunitsmustincludeanintroductoryvideo.Youshouldalsoprovidealinktothehandbooklikethis:Formoreinformationvisittheunithandbook.</p></div>"data-html="true"tabindex="0"data-trigger="focus"data-original-title=""title=""id="yui_3_17_2_1_1654141162618_1155"><iclass="iconfafa-question-circletext-infofa-fw"title="HelpwithAvailability"aria-label="HelpwithAvailability"id="yui_3_17_2_1_1654141162618_1157"></i></a></div></div><divclass="col-md-9form-inlinealign-items-startfelement"data-fieldtype="Text"id="yui_3_17_2_1_1654136305933_1090"><textareatype="text"class="form-control"name="UnitSny"id="USny"cols="100"rows="15"></textarea><divclass="form-control-feedbackinvalid-feedback"id="id_error_visible"></div></div></div><divid="LO"class="form-grouprowfitem"><divclass="col-md-3col-form-labeld-flexpb-0pr-md-0"id="yui_3_17_2_1_1654136305933_1085i"><labelclass="d-inlineword-break"for="id_visible"id="yui_3_17_2_1_1654136305933_1084i">LearningOutcome</label><divclass="ml-1ml-md-autod-flexalign-items-centeralign-self-start"id="yui_3_17_2_1_1654136305933_1256"><aclass="btnbtn-linkp-0"role="button"data-container="body"data-toggle="popover"data-placement="right"data-content="<divclass=&quot;no-overflow&quot;><p>LearningOutcomeofthisunithastobestatedinpointform.</p><p>Usetheformattingprovidedinthetextarea</p></div>"data-html="true"tabindex="0"data-trigger="focus"data-original-title=""title=""id="yui_3_17_2_1_1654136305933_1255"><iclass="iconfafa-question-circletext-infofa-fw"title="HelpwithAvailability"aria-label="HelpwithAvailability"id="yui_3_17_2_1_1654136305933_1257"></i></a></div></div><divclass="col-md-9form-inlinealign-items-startfelement"data-fieldtype="Text"id="yui_3_17_2_1_1654141162618_1307"><textareatype="text"class="form-control"name="LO"id="id_lo"cols="100"rows="15"></textarea><divclass="form-control-feedbackinvalid-feedback"id="id_error_visible"></div></div></div><divid="fitem_id_cmidnumber"class="form-grouprowfitem"><divclass="col-md-3col-form-labeld-flexpb-0pr-md-0"id="yui_3_17_2_1_1654136305933_1098"><labelclass="d-inlineword-break"for="id_cmidnumber"id="yui_3_17_2_1_1654136305933_1097i">LecturerContact</label><divclass="ml-1ml-md-autod-flexalign-items-centeralign-self-start"id="yui_3_17_2_1_1654136305933_1204"><aclass="btnbtn-linkp-0"role="button"data-container="body"data-toggle="popover"data-placement="right"data-content="<divclass=&quot;no-overflow&quot;><p>ProvidecontactdetailsofAcademicteamwhoareinvolveinthisunit.</p><p>Usetheformattingprovided.</p></div>"data-html="true"tabindex="0"data-trigger="focus"data-original-title=""title=""id="yui_3_17_2_1_1654136305933_1203"><iclass="iconfafa-question-circletext-infofa-fw"title="LecturerContact"aria-label="LecturerContact"id="yui_3_17_2_1_1654136305933_1205"></i></a></div></div><divclass="col-md-9form-inlinealign-items-startfelement"data-fieldtype="text"id="yui_3_17_2_1_1654136305933_1101i"><textareatype="text"class="form-control"name="LContact"id="LC"value=""cols="100"rows="10"></textarea><divclass="form-control-feedbackinvalid-feedback"id="id_error_cmidnumber"></div></div></div><divid="fitem_id_cmidnumber"class="form-grouprowfitem"><divclass="col-md-3col-form-labeld-flexpb-0pr-md-0"id="yui_3_17_2_1_1654136305933_1098"><labelclass="d-inlineword-break"for="id_cmidnumber"id="yui_3_17_2_1_1654136305933_1097">VideoEmdedCode</label><divclass="ml-1ml-md-autod-flexalign-items-centeralign-self-start"id="yui_3_17_2_1_1654136305933_1192"><aclass="btnbtn-linkp-0"role="button"data-container="body"data-toggle="popover"data-placement="right"data-content="<divclass=&quot;no-overflow&quot;><p>CopytheembedcodeprovidedinYoutubeorPanoptothenpasteitattheprovidedtextfield.</p></div>"data-html="true"tabindex="0"data-trigger="focus"data-original-title=""title=""id="yui_3_17_2_1_1654136305933_1191"><iclass="iconfafa-question-circletext-infofa-fw"title="HelpwithIDnumber"aria-label="HelpwithIDnumber"id="yui_3_17_2_1_1654136305933_1193"></i></a></div></div><divclass="col-md-9form-inlinealign-items-startfelement"data-fieldtype="text"id="yui_3_17_2_1_1654136305933_1101"><inputtype="url"class="form-control"name="cmidurl"id="url"value=""size="100"><divclass="form-control-feedbackinvalid-feedback"id="id_error_cmidnumber"></div></div></div></div><buttontype="button"class="btnbtn-primary"id="Upload"onclick="getURL()">Update</button>)
      }
    }

  
    function getURL() {
      var video = document.querySelectorAll(".embed-responsive-16by9 iframe")[0];
      var videoURL = document.getElementById("url").value;
      console.log(videoURL);
        video.outerHTML=videoURL;
      
      var uSyntab = document.querySelectorAll(".acctab-content p")[0];
      var uSynNew = document.getElementById("US").value;
      console.log(uSyntab);
        uSyntab.innerHTML=uSynNew;
      
      var LOstab = document.querySelectorAll(".acctab-content ol")[0];
      var LOsNew = document.getElementById("LO").value;
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
