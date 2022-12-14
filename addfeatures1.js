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
        '<div class="central-info"> <div class="acc row"> <div class="acc col"> <div class="accordion"> <div class="acctab"> <input type="radio" id="rd4" name="rd" checked="checked"> <label class="acctab-label" for="rd4">Monash Malaysia Connect <br></label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> <p><a href="https://www.monash.edu.my/student-services/connect" target="_blank">Monash Malaysia Connect</a> is a one-stop student information and enquiry site. This site provides you with key information, advice and support about your studies while at Monash. This includes information on course advice, unit enrolment, and unit-specific matters. Have a question? Submit your question through <a href="https://askmira.monash.edu.my/tickets.php" target="_blank">AskMira</a>, a single channel with all the answers.</p> </td> </tr> </tbody> </table> </div> </div> <div class="acctab"> <input type="radio" id="rd5" name="rd"> <label class="acctab-label" for="rd5">Study Support</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> Peer Assisted Study Sessions (PASS) is a program of guided study groups to provide support with difficult units.&nbsp;<a href="https://www.monash.edu.my/student-services/support-services/peer-assisted-study-session" target="_blank">Find out more about PASS and available PASS sessions</a>. </td> </tr> </tbody> </table> </div> </div> <div class="acctab"> <input type="radio" id="rd6" name="rd"> <label class="acctab-label" for="rd6">Student Support Services</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> Our&nbsp;<a href="https://www.monash.edu.my/student-services" target="_blank">Student Services</a>&nbsp;cover a range of support services, including services for timetable management, study abroad, health and wellbeing, counselling services, disability services, insurance, scholarship and financial assistance, exam matter, student pass, international student attendance requirement, career services, graduation, document or student letter requests.</td> </tr> </tbody> </table> </div> </div> <div class="acctab"> <input type="radio" id="rd7" name="rd"> <label class="acctab-label" for="rd7">Library Resources and Contacts</label> <div class="acctab-content"> <table> <tbody> <tr class="normweek"> <td> <p>The Library and Learning Commons hosts learning resources, workshops, and guides for undergraduate students. Here are some useful&nbsp;<a href="https://www.monash.edu.my/library/research" target="_blank">undergraduate workshops</a>&nbsp;and&nbsp; <a href="https://www.monash.edu.my/library/research/self-study-support" target="_blank">self-study support</a>:</p> <ul> <li>Search Skills&nbsp; <br></li> <li>Academic writing&nbsp; <br></li> <li>Summarising, paraphrasing and synthesizing&nbsp; <br></li> <li>Managing references&nbsp;&nbsp; <br></li> <li>Academic integrity with citing&nbsp;and referencing &nbsp;&nbsp;</li> </ul> <p></p> </td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> <hr style="width:85%">'
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
      '<div class="central-info"> <h2>Plagiarism </h2> <p>At Monash University, we take academic integrity very seriously. In simple terms, plagiarism is the act of submitting work that is not your own or that contains the work of others without proper credit given to them. In academic work, this would include:</p> <ul> <li>Using the ideas or words of another without proper referencing or citations</li> <li>Incomplete or inaccurate citation and referencing</li> <li>Submitting someone else\'s work as your own</li> <li>Working on an individual assignment as a group (where multiple individuals contribute to the work but it is submitted as an individual assignment - this is called collusion)</li> </ul> <p><br>This list is not exhaustive. <a href="https://www.monash.edu/students/study-support/academic-integrity" target="_blank">For information on Monash University\'s policies on academic integrity and how to avoid plagiarism, please visit this website.</a> Submitted work that is suspected of plagiarism will be dealt with according to Monash policies and may result in penalties to your grade or other disciplinary action according to <a href="https://www.monash.edu/__data/assets/pdf_file/0005/769640/student-discipline-guidelines-26-Feb-2018.pdf" target="_blank">Monash Student Discipline Guidelines</a>.<br><br></p> <h2>Turnitin</h2> <p>All essay-format assignments submitted here will go through a software called Turnitin which detects instances of plagiarism. You will be prompted to submit your essay to Turnitin prior to submission. This is a good chance for you to check that your citations and referencing are in order as well. Turnitin will also produce a similarity score which indicates how much of the submitted work is similar to other published work. What is an acceptable similarity score may differ from discipline to discipline. For this reason, check with your Unit Coordinator before submitting assignments. NOTE: A low similarity score does not necessarily indicate that no plagiarism has occured. You should still check to make sure that all your references and citations are accurate and no unintentional plagiarism has occurred.<br><br></p> <h2>Extensions and late submissions</h2> <p>Late submissions will be subject to a penalty of 10% (of the maximum possible mark for the assessment item) for every day and part thereof that the work is late. Submissions more than seven days late will receive a mark of zero.<a href="https://www.monash.edu/__data/assets/pdf_file/0003/2300925/Assessment-Regime-Procedure.pdf" target="_blank"> More information on assessment procedure</a>.</p> <p><span style="text-decoration: underline;">If you need more time, please contact your lecturer as soon as possible (prior to the assignment due date) to request an extension.</span> Extension requests for longer than five days require an application for Special Consideration. Special consideration is usually requested based on reasons such as persistent and long-term illnesses, bereavement and trauma. <a href="https://www.monash.edu/students/admin/exams/changes/special-consideration" target="_blank">More information on Special Consideration.</a> Click here to <a href="https://sors.monash.edu.my/sites/student-online-forms/course" target="_blank">apply for special consideration</a>.<br><br></p> <h2>Appeals for Review or Remark</h2> <p>Except for fail grades on major assessment tasks (which are always double marked), students do not have an automatic right to have an assessment remarked. Students can request a correction of their assessment mark due to an error, e.g. if an incorrect late penalty has been applied or due to a miscalculation. A student cannot request a correction of their mark on the basis that they do not agree with the mark, or that they perceive the feedback received to be inadequate. Requests for remark must also be made within 10 working days of receiving the assessments during the teaching period. Requests for remark of final assessments must be made within six weeks of recieving the grade.<a href="https://publicpolicydms.monash.edu/Monash/documents/1935752" target="_blank"> More information on marking procedure</a>. </div>'
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
  var taskhead = document.querySelectorAll(".circleiconw")[0];
  //check if atto editor exists
  var attoeditor = document.getElementById("id_generalhdr");

  //check if edit settings page and if hidden overview element or taskbar exists
  if (SchoolSpecific.match(/Edit settings|Adding a new Label/)) {
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
    } else if (attoeditor) {
      $("#id_generalhdr").before(
        '<fieldset class="clearfix collapsible" id="templatepicker"> <legend class="ftoggler"><a href="#" class="fheader" role="button" aria-controls="id_modstandardelshdr" aria-expanded="true">Insert template (beta)</a></legend> <div class="editinfobox"> <p>Use this editor to insert a custom-built template. Choose a template from the dropdown menu then <b>click \'Insert template\'</b>. You can now edit the template with your media. Finally, scroll to the bottom of this page and click \'Save and return to unit\'.</p> </div> <div id="taskcontainer"> <div id="taskoption"> <div id="templatedrop" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break" for="id_visible">Header</label> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="modvisible"> <select class="custom-select" name="visible" id="id_visible"> <option value="1" selected="">Video with text on the right</option> <option value="2">Text in a grey box</option> <option value="3">Divider line with text below</option> <option value="4"="">Grey box with image on right</option> <option value="5"="">Reminder alert</option><option value="6"="">Reflection/information alert</option></select> </div> <div id="templatepreview" class="col-md-6 align-items-start">  </div></div> </div> </div> <div id="addtaskbutton" class="form-group row fitem"> <div class="col-md-3 col-form-label d-flex pb-0 pr-md-0"> <label class="d-inline word-break" for="id_visible"> </label> </div> <div class="col-md-9 form-inline align-items-start felement" data-fieldtype="modvisible"><button type="button" class="btn btn-primary" style="margin: 10px 5px" id="addtemplate"><i class="icon fa fa-exclamation-triangle fa-fw " title="important note" aria-label="important note"></i>Insert template</button> </div> </fieldset>'
      );
      var btnAddTemplate = document.getElementById("addtemplate");
      btnAddTemplate.addEventListener("click", addTemplate);

      function addTemplate() {
        var editorInput = document.getElementById("id_introeditoreditable")
        var templatePreview = document.getElementById("templatepreview")
        var selectedValueB = document.querySelectorAll("#templatedrop select")[0]
          .value;
        
        if (selectedValueB == "1") {
          editorInput.innerHTML = '<div class="vidembed mw-100"> <div class="row"> <div class="col-12 col-sm-12 col-xl-6 d-flex flex-column justify-content-between"><div class="vidtemp"> <!-- *REPLACE THE CODE BELOW THIS LINE WITH YOUR VIDEO EMBED CODE* --> <img src="https://mum-mih.github.io/sandbox/Icons_vidplace.png" width="100%" height="auto"> <!-- *REPLACE THE CODE ABOVE THIS LINE WITH YOUR VIDEO EMBED CODE* --></div> </div> <div class="col-12 col-sm-12 col-xl-6 align-self-left" style="user-select: auto;"> <h4 style="user-select: auto;">[fa-info-circle] Title of your video<br style="user-select: auto;"></h4> <p><span dir="auto" class="style-scope yt-formatted-string">This is an embedded video. Instead of having to click on a link to reach your video, embedding the video on the main page allows students to have easier access to it. This works well with Youtube videos, H5P interactive videos, and Panopto videos. Instructions on how to replace this video with your own are provided on the left.<br style="user-select: auto;"><br style="user-select: auto;"><em style="user-select: auto;">Use this text area to provide a short description of the video and prompts where applicable. Why are they watching this video? What should they focus on?</em></span> </p> </div> </div> </div>';
          templatePreview.innerHTML = '<p>Preview:</p><img src="https://mum-mih.github.io/sandbox/videotext.png" max-width="700px" height="auto">'
        } else if (selectedValueB == "2") {
          editorInput.innerHTML = '<div class="boxemphasis"> <h5>In our synchronous session this week, we will discuss the following:</h5><p></p> <ol> <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;</li><li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;</li><li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li></ol> </div>';
          templatePreview.innerHTML = '<p>Preview:</p><img src="https://mum-mih.github.io/sandbox/boxemphasis.png" max-width="600px" height="auto">'
        } else if (selectedValueB == "3") {
          editorInput.innerHTML = '<div class="halfpagesub"><div class="col-12 col-sm-12 col-xl-6 m-0 p-0"><hr><h4>Sub-Heading</h4><p></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div></div>';
          templatePreview.innerHTML = '<p>Preview:</p><img src="https://mum-mih.github.io/sandbox/hrline.png" max-width="600px" height="auto">'        
        } else if (selectedValueB == "4") {
          editorInput.innerHTML = '<div class="jumbotron"> <div class="clearfix"> <div class="weekthumb"> <img src="https://mum-mih.github.io/sandbox/Icons_imgplace.png" width="100%" height="auto"> </div> <div class="weektitle"> <h1>Weekly Title/Topic Heading</h1> </div> <p><span></span></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br><span></span> <p></p> <hr class="my-4"> <div class="weeklos"> <p>Week\'s Learning Outcomes:</p> </div> <ol><li><span style="font-size: 1rem;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;</span></li><li><span style="font-size: 1rem;">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;</span></li><li><span style="font-size: 1rem;">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&nbsp;</span></li><li><span style="font-size: 1rem;">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span></li></ol> </div> </div>';
          templatePreview.innerHTML = '<p>Preview:</p><img src="https://mum-mih.github.io/sandbox/jumboimage.png" max-width="600px" height="auto">'
        } else if (selectedValueB == "5") {
          editorInput.innerHTML = '<div id="monash-alert-block" class="alert alert-warning alert-block fade in " role="alert"> <div class="side-border warning"></div> <div class="alert-icon"> <i class="icon fa fa-exclamation-triangle fa-fw" aria-hidden="true" style="color:#f1aa41"></i> </div> <div class="alert-content" style="color:#694D21"> <h6 class="alert-heading mb-0" style="font-size: 18px!important">Reminder</h6> <div style="font-size: 14px">Use this alert to highlight important information or remind students of upcoming tasks.</div> </div> </div>';
          templatePreview.innerHTML = '<p>Preview:</p><img src="https://mum-mih.github.io/sandbox/Reminder_alert.png" max-width="600px" height="auto">'
        } else if (selectedValueB == "6") {
          editorInput.innerHTML = '<div id="monash-alert-block" class="alert alert-success alert-block fade in " role="alert"> <div class="side-border success"></div> <div class="alert-icon"> <i class="icon fa fa-question-circle fa-lg fa-fw success" aria-hidden="true" style="color:green"></i> </div> <div class="alert-content" style="color:#1c3f1a"> <h6 class="alert-heading mb-0" style="font-size: 18px!important">Reflection</h6> <div style="font-size: 14px">Asking probing questions or prompting students to reflect on their learning supports critical thinking.</div> </div> </div>';
          templatePreview.innerHTML = '<p>Preview:</p><img src="https://mum-mih.github.io/sandbox/Reflection_alert.png" max-width="600px" height="auto">'
        }
         $("#id_introeditoreditable").focus();
      }
  }
  }

  //Close window.onload function
});
