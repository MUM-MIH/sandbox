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
	//check if it is Education Excellence
	if (SchoolSpecific.match(/Faculty of Business and Economics|Malaysia/) != null && window.location.href.slice(-10) != "&section=0"){
	//check if we are on the key contacts section
	if (assessmentSectionName.match(/Key Contacts/) != null && window.location.href.slice(-10) != "&section=0"){
		//check if the assessment text already exists
		if ($('.label:contains("Course Management Office")').length!=0){
			console.log('text present')
		}
		else{
			//input the text if it isn't already present, after the section name
			console.log('text NOT present')
			$('h3.sectionname:last').after('<div class="central-info"><h2>Course Management Office</h2><div class="contactscontent"><p><br />The School of Science Course Management Office (CMO) is your go-to hub for the administration of your enrolled course. In some cases, you may also want to approach your CMO for unit-specific issues. This could include instances when you want information on special consideration, unit discontinuation or intermission, or supplementary assessments.<br /><br />Tel: <strong>+ 603 5514 6186 / 6187 / 6120</strong><br />Email: <strong>scienceinquiries.my@monash.edu</strong><br /><br /><br /></p></div><hr /><h2>Library Resources and Contacts</h2><div class="contactscontent"><p><br />The Library and Learning Commons at Monash University Malaysia is not only a rich database of books. It also hosts learning resources, workshops and guides for undergraduate students. <a href="https://www.monash.edu.my/library" target="_blank">Search the Library.<br /></a></p><p>Some relevant resources and guides:</p><ul><li><a href="https://www.monash.edu.my/library/research/elearning-resources/research-learning-skills-video-recordings" target="_blank">Research and Learning Skills Videos</a></li><li><a href="https://www.monash.edu/rlo/research-writing-assignments/referencing-and-academic-integrity/academic-integrity/what-is-academic-integrity" target="_blank">Academic Integrity Tutorial</a></li><li><a href="https://www.monash.edu/rlo/research-writing-assignments/referencing-and-academic-integrity/academic-integrity/plagiarism-collusion-and-contract-cheating" target="_blank">Plagiarism Tutorial</a></li><li><a href="https://www.monash.edu/rlo/research-writing-assignments/assignment-types/oral-presentation" target="_blank">How to do an Oral Presentation</a></li><li><a href="https://www.monash.edu/rlo/study-skills" target="_blank">Study skills for university<br /><br /></a></li></ul><p>Tel: <strong>+603 5514 6199</strong><br />Email: <strong>mum-lib-contact@monash.edu</strong></p><p><a href="https://www.monash.edu.my/library/research/library-workshops-events" target="_blank">Library Workshops and Events Calendar</a><a href="https://www.monash.edu.my/library/research/library-workshops-events" target="_blank"> </a></p></div></div>')
		}
	}
	else{
		console.log('not Assessment Section or section 0')
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
		console.log('not Assessment Section or section 0')
	}
//Close window.onload function	
	});
