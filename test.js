// directs the function to work once the page has loaded.
window.addEventListener('load',function(){
	//make a variable of the section name
	var assessmentSectionName=$('h3.sectionname').text();
	//check if we are on the assessments section
	if (assessmentSectionName.match(/Key Contacts/) != null && window.location.href.slice(-10) != "&section=0"){
		//check if the assessment text already exists
		if ($('.label:contains("Course Management Office")').length!=0){
			console.log('text present')
		}
		else{
			//input the text if it isn't already present, after the section name
			console.log('text NOT present')
			$('h3.sectionname:last').after('<div class="central-info"><h2>Course Management Office</h2><div class="contactscontent"><p><br />The School of Science Course Management Office (CMO) is your go-to hub for the administration of your enrolled course. In some cases, you may also want to approach your CMO for unit-specific issues. This could include instances when you want information on special consideration, unit discontinuation or intermission, or supplementary assessments.<br /><br />Tel: <strong>+ 603 5514 6186 / 6187 / 6120</strong><br />Email: <strong>scienceinquiries.my@monash.edu</strong><br /><br /><br /></p></div><hr /><h2>Library Resources and Contacts</h2><div class="contactscontent"><p><br />The Library and Learning Commons at Monash University Malaysia is not only a rich database of books. It also hosts learning resources, workshops and guides for undergraduate students. <a href="https://www.monash.edu.my/library" target="_blank">Search the Library.<br /></a></p><p>Some relevant resources and guides:</p><ul><li><a href="https://www.monash.edu.my/library/research/elearning-resources/research-learning-skills-video-recordings" target="_blank">Research and Learning Skills Videos</a></li><li><a href="https://www.monash.edu/rlo/research-writing-assignments/referencing-and-academic-integrity/academic-integrity/what-is-academic-integrity" target="_blank">Academic Integrity Tutorial</a></li><li><a href="https://www.monash.edu/rlo/research-writing-assignments/referencing-and-academic-integrity/academic-integrity/plagiarism-collusion-and-contract-cheating" target="_blank">Plagiarism Tutorial</a></li><li><a href="https://www.monash.edu/rlo/research-writing-assignments/assignment-types/oral-presentation" target="_blank">How to do an Oral Presentation</a></li><li><a href="https://www.monash.edu/rlo/study-skills" target="_blank">Study skills for university<br /><br /></a></li></ul><p>Tel: <strong>+603 5514 6199</strong><br />Email: <strong>mum-lib-contact@monash.edu</strong></p><p><a href="https://www.monash.edu.my/library/research/library-workshops-events" target="_blank">Library Workshops and Events Calendar</a><a href="https://www.monash.edu.my/library/research/library-workshops-events" target="_blank"> </a></p></div></div>')
		}
	}
	else{
		console.log('not Assessment Section or section 0')
	}
	//Close load function	
});
