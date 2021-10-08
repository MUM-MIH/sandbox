// directs the function to work once the page has loaded.
window.addEventListener('load',function(){
// change all links that have #section- in them which goes to the all sections page, to &section= links that go to the single section instead
	$('nav a, .bookexit').each(function(){
        	this.href=this.href.replace('#section-','&section=');
// opens the atto editor completely on load    
    		$('.editor_atto_toolbar div').removeAttr('hidden');
  		$('.editor_atto_toolbar div').css('display', 'inline-block');
// opens the tinyMCE toolbar rows 2 and 3 on load (once a user collapses this again, it stops working)
   		$('.mceToolbarRow2').css('display', 'table');
  		$('.mceToolbarRow3').css('display', 'table');
	});
	
	//make a variable of the section name
	var SchoolSpecific=$('li.breadcrumb-item').text();
	//make a variable of the section name
	var assessmentSectionName=$('h3.sectionname').text();
	//check if we are on the key contacts section
	if (assessmentSectionName.match(/Key Contacts/) != null && window.location.href.slice(-10) != "&section=0"){
		//check if it is School of Science
		if (SchoolSpecific.match(/School of Science|Education Excellence/) != null && window.location.href.slice(-10) != "&section=0"){
			$('h3.sectionname:last').after('<div class="central-info"> <h2>Education Management Office</h2> <div class="contactscontent"> <p> <br>The School of Science Education Management Office (EMO) is your go-to hub for the administration of your enrolled course. You can approach EMO for course advice, unit enrolment, and unit-specific matters (e.g. intermission, special consideration, and unit discontinuation).</p><span><strong>Email:</strong>&nbsp;</span><a>scienceinquiries.my@monash.edu</a> <br><strong>Live chat:</strong>&nbsp;<a href="https://studenthub.monash.edu.my/science/" target="_blank">https://studenthub.monash.edu.my/science/</a> <br><strong>Tel:</strong> +603-55146186 /&nbsp; +603-55146187 /&nbsp;+603-55159743 / +603-5514 4990 / +603-5514 4402 <br><br><p></p></div><hr> <h2>Science Study Support</h2> <div class="contactscontent"> <p> <br><span>We offer these&nbsp;<a href="https://www.monash.edu.my/science/current/undergraduate/study-support" target="_blank">programs</a>&nbsp;to provide guidance and enhance&nbsp;your learning experience:</span> <br></p><div> <ol> <li>Mentor-mentee program <br></li><li>Peer Mentoring program <br></li><li>Peer Assisted Study Sessions (PASS) program <br></li></ol> </div><br></div><hr> <h2>Student Support Services</h2> <div class="contactscontent"> <p> <br>Our&nbsp; <a href="https://www.monash.edu.my/student-services" target="_blank">Student Services</a>&nbsp;cover a range of support services, including services for timetable management, study abroad, health and wellbeing, counselling services, disability services, insurance, scholarship and financial assistance, exam matter, student pass, international student attendance requirement, career services, graduation, document or student letter requests,&nbsp;</p><div> </div><br></div><hr> <h2>Library Resources and Contacts</h2> <div class="contactscontent"> <p> <br>The Library and Learning Commons hosts learning resources, workshops, and guides for undergraduate students. Here are some useful&nbsp;<a href="https://www.monash.edu.my/library/research" target="_blank">undergraduate workshops</a>&nbsp;and&nbsp; <a href="https://www.monash.edu.my/library/research/self-study-support" target="_blank">self-study support</a>:</p><ul> <li>Search Skills <br></li><li>Academic writing <br></li><li>Summarising, paraphrasing and synthesizing <br></li><li>Managing references&nbsp; <br></li><li>Academic integrity with citing&nbsp;and referencing &nbsp; <br></li></ul> <br><p>You can also reach out to our&nbsp;<a href="https://www.monash.edu.my/library/research/school-liaison" target="_blank">School of Science Liaison</a>&nbsp;for individual or group consultation, to seek advice on your assignments, and to improve your research and study skills.&nbsp;</p><p> <a href="https://www.monash.edu.my/library/research/library-workshops-events" target="_blank"></a> <a href="https://www.monash.edu.my/library/research/library-workshops-events" target="_blank"></a> </p><br><hr> </div></div>')
		}
	
		else if (SchoolSpecific.match(/Faculty of Business and Economics/) != null && window.location.href.slice(-10) != "&section=0"){
			$('h3.sectionname:last').after('<div class="central-info"> <h2>Education Management Office</h2> <div class="contactscontent"> <p> <br>The School of Business Education Management Office (EMO) is your go-to hub for the administration of your enrolled course. You can approach EMO for course advice, unit enrolment, and unit-specific matters (e.g. intermission, special consideration, and unit discontinuation).</p><span><strong>Email:</strong>&nbsp;</span>inquiries.malaysia@monash.edu <br><strong>Live chat:</strong>&nbsp;<span style="font-size: calc(0.91rem + 0.12vw);"><a href="https://studenthub.monash.edu.my/business/" target="_blank">https://studenthub.monash.edu.my/business/<br></a></span> <br><p></p></div><hr> <h2>Study Support</h2> <div class="contactscontent"> <p> <br>Peer Assisted Study Sessions (PASS) is a program of guided study groups to provide support with difficult units.&nbsp;<a href="https://www.monash.edu.my/student-services/support-services/peer-assisted-study-session" target="_blank">Find out more about PASS and available PASS sessions</a>.</p><br></div><hr> <h2>Student Support Services</h2> <div class="contactscontent"> <p> <br>Our&nbsp;<a href="https://www.monash.edu.my/student-services" target="_blank">Student Services</a>&nbsp;cover a range of support services, including services for timetable management, study abroad, health and wellbeing, counselling services, disability services, insurance, scholarship and financial assistance, exam matter, student pass, international student attendance requirement, career services, graduation, document or student letter requests.</p><div> </div><br></div><hr> <h2>Library Resources and Contacts</h2> <div class="contactscontent"> <p> <br>The Library and Learning Commons hosts learning resources, workshops, and guides for undergraduate students. Here are some useful&nbsp;<a href="https://www.monash.edu.my/library/research" target="_blank">undergraduate workshops</a>&nbsp;and&nbsp; <a href="https://www.monash.edu.my/library/research/self-study-support" target="_blank">self-study support</a>:</p><ul> <li>Search Skills <br></li><li>Academic writing <br></li><li>Summarising, paraphrasing and synthesizing <br></li><li>Managing references&nbsp; <br></li><li>Academic integrity with citing&nbsp;and referencing &nbsp;&nbsp;</li></ul> <p> <a href="https://www.monash.edu.my/library/research/library-workshops-events" target="_blank"></a> <a href="https://www.monash.edu.my/library/research/library-workshops-events" target="_blank"></a> </p><br><hr> </div></div>')
		}
	else{
		console.log('not Key Contacts Section or section 0')
	}
	}
		
	//check if we are on the important policy section
	if (assessmentSectionName.match(/Important Policy/) != null && window.location.href.slice(-10) != "&section=0"){
		//check if the assessment text already exists
		if ($('.label:contains("Plagiarism")').length!=0){
			console.log('text present')
		}
		else{
			//input the text if it isn't already present, after the section name
			console.log('text NOT present')
			$('h3.sectionname:last').after('<div class="central-info"><h2>Plagiarism </h2><p>At Monash University, we take academic integrity very seriously. In simple terms, plagiarism is the act of submitting work that is not your own or that contains the work of others without proper credit given to them. In academic work, this would include:</p><ul><li>Using the ideas or words of another without proper referencing or citations</li><li>Incomplete or inaccurate citation and referencing</li><li>Submitting someone else\'s work as your own</li><li>Working on an individual assignment as a group (where multiple individuals contribute to the work but it is submitted as an individual assignment - this is called collusion)</li></ul><p>This list is not exhaustive. <a href="https://www.monash.edu/students/study-support/academic-integrity" target="_blank">For information on Monash University\'s policies on academic integrity and how to avoid plagiarism, please visit this website.</a> Submitted work that is suspected of plagiarism will be dealt with according to Monash policies and may result in penalties to your grade or other disciplinary action according to <a href="https://www.monash.edu/__data/assets/pdf_file/0005/769640/student-discipline-guidelines-26-Feb-2018.pdf" target="_blank">Monash Student Discipline Guidelines</a>.<br><br></p><h2>Turnitin</h2><p>All essay-format assignments submitted here will go through a software called Turnitin which detects instances of plagiarism. You will be prompted to submit your essay to Turnitin prior to submission. This is a good chance for you to check that your citations and referencing are in order as well. Generally, a result of 20% similarity and below is expected and does not necessarily indicate plagiarism. Nevertheless, you should still check to make sure that all your references and citations are accurate and no unintentional plagiarism has occurred.<br><br></p><h2>Extensions and late submissions</h2><p>Late submissions will be subject to a penalty of 5% (of the maximum possible mark for the assessment item) for every day that their work is late. No assessment item can be accepted if it is more than 10 calendar days overdue (except in exceptional circumstances).</p><p><span style="text-decoration: underline;">If you need more time, please contact your lecturer as soon as possible (prior to the assignment due date) to request an extension.</span> Extension requests for longer than 2 days require an application for Special Consideration(submitted via your school\'s Course Management Office). Special consideration is usually requested based on reasons such as persistent and long-term illnesses, bereavement and trauma. <a href="https://www.monash.edu/students/admin/exams/changes/special-consideration" target="_blank">More information on Special Consideration.</a>Click here to <a href="https://sors.monash.edu.my/sites/student-online-forms/course" target="_blank">apply for special consideration</a>.<br><br></p><h2>Appeals for Review or Remark</h2><p>If dissatisfied with your marks, even in cases of non-failure, you have the right to appeal and request for either a review or remark. This is provided the assessment has not already been second-marked and that the appeal is made within 20 days of receiving the graded assignment or exam result.</p></div>')
		}
	}
	else{
		console.log('not Important Policy Section or section 0')
	}
//change table row based on sem-break //
  $("tr").each(function(){
    var col_val = $(this).find("td:eq(2)").text();
    if( $.trim(col_val.toLowerCase() ) === "swot vac" ){
      $(this).addClass('specialweek');  //the selected class colors the row green//
    } 
	else if( $.trim(col_val.toLowerCase() ) === "mid-semester break" ){
      $(this).addClass('specialweek');  //the selected class colors the row green//
    }   
	  else {
      $(this).addClass('normweek');
    }
  });
//Close window.onload function	
	});
