// directs the function to work once the page has loaded.
window.addEventListener("load", function () {
  // change all links that have #section- in them which goes to the all sections page, to &section= links that go to the single section instead
  $("nav a, .bookexit").each(function () {
    this.href = this.href.replace("#section-", "&section=");
    // opens the atto editor completely on load
    $(".editor_atto_toolbar div").removeAttr("hidden");
    $(".editor_atto_toolbar div").css("display", "inline-block");
    // opens the tinyMCE toolbar rows 2 and 3 on load (once a user collapses this again, it stops working)
    $(".mceToolbarRow2").css("display", "table");
    $(".mceToolbarRow3").css("display", "table");
  });

  //make a variable of the breadcrumbs
  var SchoolSpecific = $("li.breadcrumb-item").text();
  //make a variable of the section name
  var assessmentSectionName = $("h3.sectionname").text();
  //check if we are on the key contacts section and if that section is section18
  if (
    assessmentSectionName.match(/Key Contacts/) != null &&
    window.location.href.slice(-11) == "&section=18"
  ) {
    //check if it is School of Science
    if (
      SchoolSpecific.match(
        /(ANT|BIN|BIO|BTH|ENV|FST|HUP|IMM|MBS|PHY|SCI|STA)[0-9]|Education Excellence|SOS/
      )
    ) {
      $("h3.sectionname:last").after(
        '<div class="central-info"> <div class="acc row"> <div class="acc col"> <div class="accordion"> <div class="acctab"> <input type="radio" id="rd4" name="rd" checked="checked"> <label class="acctab-label" for="rd4">Monash Malaysia Connect <br></label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> <p><a href="https://www.monash.edu.my/student-services/connect" target="_blank">Monash Malaysia Connect</a> is a one-stop student information and enquiry site. This site provides you with key information, advice and support about your studies while at Monash. This includes information on course advice, unit enrolment, and unit-specific matters. Have a question? Submit your question through <a href="https://askmira.monash.edu.my/tickets.php" target="_blank">AskMira</a>, a single channel with all the answers.</td></tr></tbody> </table> </div></div><div class="acctab"> <input type="radio" id="rd5" name="rd"> <label class="acctab-label" for="rd5">Science Study Support</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> <p><span>We offer these&nbsp;<a href="https://www.monash.edu.my/science/current/undergraduate/study-support" target="_blank">programs</a>&nbsp;to provide guidance and enhance&nbsp;your learning experience:</span>&nbsp; <br></p><div> <ol> <li>Mentor-mentee program&nbsp; <br></li><li>Peer Mentoring program&nbsp; <br></li><li>Peer Assisted Study Sessions (PASS) program</li></ol> </div></td></tr></tbody> </table> </div></div><div class="acctab"> <input type="radio" id="rd6" name="rd"> <label class="acctab-label" for="rd6">Student Support Services</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> <h6><strong></strong></h6>Our&nbsp;<a href="https://www.monash.edu.my/student-services" target="_blank">Student Services</a>&nbsp;cover a range of support services, including services for timetable management, study abroad, health and wellbeing, counselling services, disability services, insurance, scholarship and financial assistance, exam matter, student pass, international student attendance requirement, career services, graduation, document or student letter requests.</td></tr></tbody> </table> </div></div><div class="acctab"> <input type="radio" id="rd7" name="rd"> <label class="acctab-label" for="rd7">Library Resources and Contacts</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> <h6><strong></strong></h6> <p>The Library and Learning Commons hosts learning resources, workshops, and guides for undergraduate students. Here are some useful&nbsp;<a href="https://www.monash.edu.my/library/research" target="_blank">undergraduate workshops</a>&nbsp;and&nbsp; <a href="https://www.monash.edu.my/library/research/self-study-support" target="_blank">self-study support</a>:</p><ul> <li>Search Skills&nbsp; <br></li><li>Academic writing&nbsp; <br></li><li>Summarising, paraphrasing and synthesizing&nbsp; <br></li><li>Managing references&nbsp;&nbsp; <br></li><li>Academic integrity with citing&nbsp;and referencing &nbsp;&nbsp; <br></li></ul> <br><p>You can also reach out to our&nbsp;<a href="https://www.monash.edu.my/library/research/school-liaison" target="_blank">School of Science Liaison</a>&nbsp;for individual or group consultation, to seek advice on your assignments, and to improve your research and study skills.&nbsp;</p></td></tr></tbody> </table> </div></div></div></div></div></div><hr style="width:85%">'
      );
    }
    //check if it is School of Business
    else if (
      SchoolSpecific.match(
        /(ACM|ACW|BEW|BFW|BTM|BTW|BTX|ECM|ECW|ETM|ETW|MGM|MGW|MKW|MKM|MGX)[0-9]/
      )
    ) {
      $("h3.sectionname:last").after(
        '<div class="central-info"> <div class="acc row"> <div class="acc col"> <div class="accordion"> <div class="acctab"> <input type="radio" id="rd4" name="rd" checked="checked"> <label class="acctab-label" for="rd4">Monash Malaysia Connect <br></label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> <p><a href="https://www.monash.edu.my/student-services/connect" target="_blank">Monash Malaysia Connect</a> is a one-stop student information and enquiry site. This site provides you with key information, advice and support about your studies while at Monash. This includes information on course advice, unit enrolment, and unit-specific matters. Have a question? Submit your question through <a href="https://askmira.monash.edu.my/tickets.php" target="_blank">AskMira</a>, a single channel with all the answers.</p><p>School of Business, Education Management Office (SOB-EMO) only meets with students who have scheduled an appointment for further course advice. To make an appointment, please visit our school website at <a href="https://www.monash.edu.my/business/current/undergraduate-students/contact-us" target="_blank">SOB-EMO Connect</a>.</p></td></tr></tbody> </table></div></div><div class="acctab"> <input type="radio" id="rd5" name="rd"> <label class="acctab-label" for="rd5">Study Support</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> Peer Assisted Study Sessions (PASS) is a program of guided study groups to provide support with difficult units.&nbsp;<a href="https://www.monash.edu.my/student-services/support-services/peer-assisted-study-session" target="_blank">Find out more about PASS and available PASS sessions</a>. </td></tr></tbody> </table> </div></div><div class="acctab"> <input type="radio" id="rd6" name="rd"> <label class="acctab-label" for="rd6">Student Support Services</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> Our&nbsp;<a href="https://www.monash.edu.my/student-services" target="_blank">Student Services</a>&nbsp;cover a range of support services, including services for timetable management, study abroad, health and wellbeing, counselling services, disability services, insurance, scholarship and financial assistance, exam matter, student pass, international student attendance requirement, career services, graduation, document or student letter requests.</td></tr></tbody> </table> </div></div><div class="acctab"> <input type="radio" id="rd7" name="rd"> <label class="acctab-label" for="rd7">Library Resources and Contacts</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> <p>The Library and Learning Commons hosts learning resources, workshops, and guides for undergraduate students. Here are some useful&nbsp;<a href="https://www.monash.edu.my/library/research" target="_blank">undergraduate workshops</a>&nbsp;and&nbsp; <a href="https://www.monash.edu.my/library/research/self-study-support" target="_blank">self-study support</a>:</p><ul> <li>Search Skills&nbsp; <br></li><li>Academic writing&nbsp; <br></li><li>Summarising, paraphrasing and synthesizing&nbsp; <br></li><li>Managing references&nbsp;&nbsp; <br></li><li>Academic integrity with citing&nbsp;and referencing &nbsp;&nbsp;</li></ul> <p></p></td></tr></tbody> </table> </div></div></div></div></div></div><hr style="width:85%">'
      );
    }
    //check if it is Dept of Psychology
    else if (SchoolSpecific.match(/(PSY|PMH|EDF)[0-9]/)) {
      $("h3.sectionname:last").after(
        '<div class="central-info"> <div class="acc row"> <div class="acc col"> <div class="accordion"> <div class="acctab"> <input type="radio" id="rd4" name="rd" checked="checked"> <label class="acctab-label" for="rd4">Monash Malaysia Connect <br></label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> <p><a href="https://www.monash.edu.my/student-services/connect" target="_blank">Monash Malaysia Connect</a> is a one-stop student information and enquiry site. This site provides you with key information, advice and support about your studies while at Monash. This includes information on course advice, unit enrolment, and unit-specific matters. Have a question? Submit your question through <a href="https://askmira.monash.edu.my/tickets.php" target="_blank">AskMira</a>, a single channel with all the answers.</p></td></tr></tbody> </table></div></div><div class="acctab"> <input type="radio" id="rd5" name="rd"> <label class="acctab-label" for="rd5">Study Support</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> Peer Assisted Study Sessions (PASS) is a program of guided study groups to provide support with difficult units.&nbsp;<a href="https://www.monash.edu.my/student-services/support-services/peer-assisted-study-session" target="_blank">Find out more about PASS and available PASS sessions</a>. </td></tr></tbody> </table> </div></div><div class="acctab"> <input type="radio" id="rd6" name="rd"> <label class="acctab-label" for="rd6">Student Support Services</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> Our&nbsp;<a href="https://www.monash.edu.my/student-services" target="_blank">Student Services</a>&nbsp;cover a range of support services, including services for timetable management, study abroad, health and wellbeing, counselling services, disability services, insurance, scholarship and financial assistance, exam matter, student pass, international student attendance requirement, career services, graduation, document or student letter requests.</td></tr></tbody> </table> </div></div><div class="acctab"> <input type="radio" id="rd7" name="rd"> <label class="acctab-label" for="rd7">Library Resources and Contacts</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> <p>The Library and Learning Commons hosts learning resources, workshops, and guides for undergraduate students. Here are some useful&nbsp;<a href="https://www.monash.edu.my/library/research" target="_blank">undergraduate workshops</a>&nbsp;and&nbsp; <a href="https://www.monash.edu.my/library/research/self-study-support" target="_blank">self-study support</a>:</p><ul> <li>Search Skills&nbsp; <br></li><li>Academic writing&nbsp; <br></li><li>Summarising, paraphrasing and synthesizing&nbsp; <br></li><li>Managing references&nbsp;&nbsp; <br></li><li>Academic integrity with citing&nbsp;and referencing &nbsp;&nbsp;</li></ul> <p></p></td></tr></tbody> </table> </div></div></div></div></div></div><hr style="width:85%">'
      );
    }
    //check if it is School of Arts
    else if (SchoolSpecific.match(/AMU[0-9]/)) {
      $("h3.sectionname:last").after(
        '<div class="central-info"> <div class="acc row"> <div class="acc col"> <div class="accordion"> <div class="acctab"> <input type="radio" id="rd4" name="rd" checked="checked"> <label class="acctab-label" for="rd4">Monash Malaysia Connect <br></label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> <p><a href="https://www.monash.edu.my/student-services/connect" target="_blank">Monash Malaysia Connect</a> is a one-stop student information and enquiry site. This site provides you with key information, advice and support about your studies while at Monash. This includes information on course advice, unit enrolment, and unit-specific matters. Have a question? Submit your question through <a href="https://askmira.monash.edu.my/tickets.php" target="_blank">AskMira</a>, a single channel with all the answers.</p></td></tr></tbody> </table> </div></div><div class="acctab"> <input type="radio" id="rd5" name="rd"> <label class="acctab-label" for="rd5">Student Support Services</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> Our&nbsp;<a href="https://www.monash.edu.my/student-services" target="_blank">Student Services</a>&nbsp;cover a range of support services, including services for timetable management, study abroad, health and wellbeing, counselling services, disability services, insurance, scholarship and financial assistance, exam matter, student pass, international student attendance requirement, career services, graduation, document or student letter requests.</td></tr></tbody> </table> </div></div><div class="acctab"> <input type="radio" id="rd6" name="rd"> <label class="acctab-label" for="rd6">Library Resources and Contacts</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> <p>The Library and Learning Commons hosts learning resources, workshops, and guides for undergraduate students. Here are some useful&nbsp;<a href="https://www.monash.edu.my/library/research" target="_blank">undergraduate workshops</a>&nbsp;and&nbsp; <a href="https://www.monash.edu.my/library/research/self-study-support" target="_blank">self-study support</a>:</p><ul> <li>Search Skills&nbsp; <br></li><li>Academic writing&nbsp; <br></li><li>Summarising, paraphrasing and synthesizing&nbsp; <br></li><li>Managing references&nbsp;&nbsp; <br></li><li>Academic integrity with citing&nbsp;and referencing &nbsp;&nbsp;</li></ul> <p></p></td></tr></tbody> </table> </div></div></div></div></div></div><hr style="width:85%">'
      );
    }
    //check if it is School of IT
    else if (SchoolSpecific.match(/(FIT|MAT)[0-9]/)) {
      $("h3.sectionname:last").after(
        '<div class="central-info"> <div class="acc row"> <div class="acc col"> <div class="accordion"> <div class="acctab"> <input type="radio" id="rd4" name="rd" checked="checked"> <label class="acctab-label" for="rd4">Monash Malaysia Connect <br></label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> <p><a href="https://www.monash.edu.my/student-services/connect" target="_blank">Monash Malaysia Connect</a> is a one-stop student information and enquiry site. This site provides you with key information, advice and support about your studies while at Monash. This includes information on course advice, unit enrolment, and unit-specific matters. Have a question? Submit your question through <a href="https://askmira.monash.edu.my/tickets.php" target="_blank">AskMira</a>, a single channel with all the answers.</p></td></tr></tbody> </table> </div></div><div class="acctab"> <input type="radio" id="rd5" name="rd"> <label class="acctab-label" for="rd5">School of Information Technology Study Support</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> We are offering the Peer Assisted Study Sessions (PASS) to provide guidance and enhance your learning experience.&nbsp;<a href="https://www.monash.edu.my/student-services/support-services/peer-assisted-study-session/pass-sessions" target="_blank">Find out more about PASS and available PASS sessions</a>. </td></tr></tbody> </table> </div></div><div class="acctab"> <input type="radio" id="rd6" name="rd"> <label class="acctab-label" for="rd6">Student Support Services</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> Our&nbsp;<a href="https://www.monash.edu.my/student-services" target="_blank">Student Services</a>&nbsp;cover a range of support services, including services for timetable management, study abroad, health and wellbeing, counselling services, disability services, insurance, scholarship and financial assistance, exam matter, student pass, international student attendance requirement, career services, graduation, document or student letter requests.</td></tr></tbody> </table> </div></div><div class="acctab"> <input type="radio" id="rd7" name="rd"> <label class="acctab-label" for="rd7">Library Resources and Contacts</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> <p>The Library and Learning Commons hosts learning resources, workshops, and guides for undergraduate students. Here are some useful&nbsp;<a href="https://www.monash.edu.my/library/research" target="_blank">undergraduate workshops</a>&nbsp;and&nbsp; <a href="https://www.monash.edu.my/library/research/self-study-support" target="_blank">self-study support</a>:</p><ul> <li>Search Skills&nbsp; <br></li><li>Academic writing&nbsp; <br></li><li>Summarising, paraphrasing and synthesizing&nbsp; <br></li><li>Managing references&nbsp;&nbsp; <br></li><li>Academic integrity with citing&nbsp;and referencing &nbsp;&nbsp;</li></ul> <p>You can also reach out to our <a href="https://www.monash.edu.my/library/research/school-liaison" target="_blank">School of Information Technology Liaison</a> for individual or group consultation, to seek advice on your assignments, and to improve your research and study skills. </p></td></tr></tbody> </table> </div></div></div></div></div></div><hr style="width:85%">'
      );
    } else {
      console.log("not Key Contacts Section or is section 0");
    }
  }

  //check if we are on the important policy section and if that section is section20
  if (
    assessmentSectionName.match(/Important Policy/) != null &&
    window.location.href.slice(-11) == "&section=20"
  ) {
    $("h3.sectionname:last").after(
      '<div class="central-info"><h2>Plagiarism </h2><p>At Monash University, we take academic integrity very seriously. In simple terms, plagiarism is the act of submitting work that is not your own or that contains the work of others without proper credit given to them. In academic work, this would include:</p><ul><li>Using the ideas or words of another without proper referencing or citations</li><li>Incomplete or inaccurate citation and referencing</li><li>Submitting someone else\'s work as your own</li><li>Working on an individual assignment as a group (where multiple individuals contribute to the work but it is submitted as an individual assignment - this is called collusion)</li></ul><p><br>This list is not exhaustive. <a href="https://www.monash.edu/students/study-support/academic-integrity" target="_blank">For information on Monash University\'s policies on academic integrity and how to avoid plagiarism, please visit this website.</a> Submitted work that is suspected of plagiarism will be dealt with according to Monash policies and may result in penalties to your grade or other disciplinary action according to <a href="https://www.monash.edu/__data/assets/pdf_file/0005/769640/student-discipline-guidelines-26-Feb-2018.pdf" target="_blank">Monash Student Discipline Guidelines</a>.<br><br></p><h2>Turnitin</h2><p>All essay-format assignments submitted here will go through a software called Turnitin which detects instances of plagiarism. You will be prompted to submit your essay to Turnitin prior to submission. This is a good chance for you to check that your citations and referencing are in order as well. Generally, a result of 20% similarity and below is expected and does not necessarily indicate plagiarism. Nevertheless, you should still check to make sure that all your references and citations are accurate and no unintentional plagiarism has occurred.<br><br></p><h2>Extensions and late submissions</h2><p>Late submissions will be subject to a penalty of 10% (of the maximum possible mark for the assessment item) for every day that the work is late. Submissions more than seven days late will receive a mark of zero.<a href="https://www.monash.edu/__data/assets/pdf_file/0003/2300925/Assessment-Regime-Procedure.pdf" target="_blank"> More information on assessment procedure</a>.</p><p><span style="text-decoration: underline;">If you need more time, please contact your lecturer as soon as possible (prior to the assignment due date) to request an extension.</span> Extension requests for longer than five days require an application for Special Consideration. Special consideration is usually requested based on reasons such as persistent and long-term illnesses, bereavement and trauma. <a href="https://www.monash.edu/students/admin/exams/changes/special-consideration" target="_blank">More information on Special Consideration.</a> Click here to <a href="https://sors.monash.edu.my/sites/student-online-forms/course" target="_blank">apply for special consideration</a>.<br><br></p><h2>Appeals for Review or Remark</h2><p>You can apply to have an assessment remarked due to an error. This is provided that the request is made within 10 working days of receiving the assessments during the teaching period. Requests for remark of final assessments must be made within six weeks of recieving the grade.<a href="https://www.monash.edu/__data/assets/pdf_file/0003/2300925/Assessment-Regime-Procedure.pdf" target="_blank"> More information on assessment procedure</a>.</div>'
    );
  } else {
    console.log("not Important Policy Section or is section 0");
  }
  //change table row based on sem-break //
  $("tr").each(function () {
    var col_val = $(this).find("td:eq(2)").text();
    if ($.trim(col_val.toLowerCase()) === "swot vac") {
      $(this).addClass("specialweek"); //the selected class colors the row green//
    } else if ($.trim(col_val.toLowerCase()) === "mid-semester break") {
      $(this).addClass("specialweek"); //the selected class colors the row green//
    } else {
      $(this).addClass("normweek");
    }
  });

  //start of welcome video and taskbar editor
  //check if hidden overview exists
  var hiddenoverview = document.getElementById("hiddenoverview");
  //check if taskbar exists
  var taskbar = document.getElementById("taskbar");
  //check if header exists
  var taskhead = document.querySelectorAll(".circleiconw");

  //check if edit settings page and if hidden overview element or taskbar exists
  if (SchoolSpecific.match(/Edit settings/)) {
    if (hiddenoverview) {
      $("#id_generalhdr").before(
        '<fieldset class="clearfix collapsible" id="id_overview"> <legend class="ftoggler"><a href="#" class="fheader" role="button" aria-controls="id_overviewhdr" aria-expanded="true">Overview editor (beta)</a></legend> <div class="editinfobox"> <p>Use this editor to insert your welcome video and update the unit information displayed on the overview page. Enter new information in the form below. Leave field(s) blank if there are no updates to the section. To save your changes, click \'Update\' then scroll to the bottom of the page and click \'Save and return to unit\'</p> </div> <div class="fcontainer clearfix"> <div id="Synopsis" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_visible">Unit Synopsis</label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;> <p>This space should house the official unit synopsis as in the unit handbook.</p> <p>Other information - such as instructions to students, a welcome message, etc. - should be included in the video to the left.</p> <p>Please note that all units must include an introductory video. You should also provide a link to the handbook like this: For more information visit the unit handbook.</p> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title=""> <i class="icon fa fa-question-circle text-info fa-fw " title="Unit Synopsis" aria-label="Unit Synopsis"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="Text"> <textarea type="text" class="form-control" name="UnitSny" id="USny" cols="100" rows="6"></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_visible"> </div> </div> </div> <div id="LO" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_visible"> Learning Outcome </label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;> <p>Learning Outcome of this unit has to be stated in point form. </p> <p> Use the formatting provided in the textarea </p> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title=""> <i class="icon fa fa-question-circle text-info fa-fw " title="Learning Outcome" aria-label="Learning Outcome"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="Text"> <textarea type="text" class="form-control" name="LO" id="id_lo" cols="100" rows="6" placeholder="List down the learning outcome of this unit.&#10;1. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.&#10;2. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_visible"> </div> </div> </div> <div id="LName" class="form-group row fitem "> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_cmidnumber">Educator Contact Details</label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;><p>Provide information about the lecturer and or chief examiner of this unit. You should include their name, email and consultation hours. You may also include a message about booking a consultation. </p></div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title=""> <i class="icon fa fa-question-circle text-info fa-fw " title="Lecturer Name" aria-label="Lecturer Name"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="text"> <textarea type="text" class="form-control " name="Lname" id="Lname" value="" cols="100" rows="5" placeholder="Your name&#10;Lecturer/Chief Examiner&#10;Email: yourname@monash.edu&#10;Consultation hours: 10-12am Monday&#10;Drop me an email to set up a 1-on-1 consultation."></textarea> <div class="form-control-feedback invalid-feedback" id="id_error_cmidnumber"> </div> </div> </div> <div id="VURL" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break " for="id_cmidnumber"> Welcome Video Embed Code </label> <div class="ml-1 ml-md-auto d-flex align-items-center align-self-start"> <a class="btn btn-link p-0" role="button" data-container="body" data-toggle="popover" data-placement="right" data-content="<div class=&quot;no-overflow&quot;><p>Copy the embed code provided in Youtube or Panopto then paste it at the provided text field.</p><br><a href=&quot;https://monash.au.panopto.com/Panopto/Pages/Viewer.aspx?id=3dc2b356-7189-4efb-8d9d-aebf00a0b7dc&quot; target=&quot;_blank&quot;>How to get my video embed code?</a> </div> " data-html="true" tabindex="0" data-trigger="focus" data-original-title="" title="" id="yui_3_17_2_1_1656163237906_1587"> <i class="icon fa fa-question-circle text-info fa-fw " title="Embed Video" aria-label="Help with ID number" id="yui_3_17_2_1_1656163237906_1589"></i> </a> </div> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="text"> <textarea type="text" class="form-control " name="cmidurl" id="url" value="" cols="100" rows="4"></textarea> </div> <div class="form-control-feedback invalid-feedback" id="id_error_cmidnumber"> </div> </div> <div id="updatebutton" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"></div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="text"> <button type="button" class="btn btn-primary" id="Upload" onclick="getURL()" style="margin: 15px 0px">Update</button></div> </div> </div> </fieldset>'
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
              table.rows[0].cells[i + i].innerHTML = "[fa-play fa-2x]";
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
  var selectedValueA = document.querySelectorAll("#taskdrop select")[0].value;

  if (selectedValueA == "1") {
    heading.innerHTML = "[fa-hourglass-start fa-2x]";
    headingDesc.innerHTML = "Pre-class activities";
  } else if (selectedValueA == "2") {
    heading.innerHTML = "[fa-forward fa-2x]";
    headingDesc.innerHTML = "In-class activities";
  } else if (selectedValueA == "3") {
    heading.innerHTML = "[fa-hourglass-end fa-2x]";
    headingDesc.innerHTML = "Post-class activities";
  } else if (selectedValueA == "4") {
    heading.innerHTML = "[fa-play fa-2x]";
    headingDesc.innerHTML = "Watch";
  } else if (selectedValueA == "5") {
    heading.innerHTML = "[fa-book fa-2x]";
    headingDesc.innerHTML = "Read";
  } else if (selectedValueA == "6") {
    heading.innerHTML = "[fa-comments fa-2x]";
    headingDesc.innerHTML = "Discuss";
  } else if (selectedValueA == "7") {
    heading.innerHTML = "[fa-check-square fa-2x]";
    headingDesc.innerHTML = "Complete";
  } else if (selectedValueA == "8") {
    heading.innerHTML = "[fa-coffee fa-2x]";
    headingDesc.innerHTML = "Reflect";
  } else if (selectedValueA == "9") {
    heading.innerHTML = "[fa-puzzle-piece fa-2x]";
    headingDesc.innerHTML = "Try";
  } else if (selectedValueA == "10") {
    heading.innerHTML = "[fa-refresh fa-2x]";
    headingDesc.innerHTML = "Knowledge Check";
  } else if (selectedValueA == "11") {
    heading.innerHTML = "[fa-users fa-2x]";
    headingDesc.innerHTML = "Tutorial";
  } else if (selectedValueA == "12") {
    heading.innerHTML = "[fa-cogs fa-2x]";
    headingDesc.innerHTML = "Practical";
  } else if (selectedValueA == "13") {
    heading.innerHTML = "[fa-flask fa-2x]";
    headingDesc.innerHTML = "Laboratory";
  } else if (selectedValueA == "14") {
    heading.innerHTML = "[fa-podcast fa-2x]";
    headingDesc.innerHTML = "Forum";
  } else if (selectedValueA == "15") {
    heading.innerHTML = "[fa-wrench fa-2x]";
    headingDesc.innerHTML = "Workshop";
  }
  $("#id_introeditoreditable").focus();
}
    }
  }

  //Close window.onload function
});
