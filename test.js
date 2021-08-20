window.addEventListener('DOMContentLoaded',function(){
window.addEventListener('load',function(){
	//make a variable of the section name
	var assessmentSectionName=$('.sectionname').text();
	//check if we are on the assessments section
	if (assessmentSectionName.match(/Assessment/) != null && window.location.href.slice(-10) != "&section=0"){
		//check if the assessment text already exists
		if ($('.label:contains("Please be aware that the following penalties apply if you submit your assessment task after the due date and time without an approved extension or special consideration:")').length!=0){
			console.log('text present')
		}
		else{
			//input the text if it isn't already present, after the section name
			console.log('text NOT present')
			$('.sectionname').after('<div id="assessmentPenaltyText"><p>Please be aware that the following penalties apply if you submit your assessment task after the due date and time without an approved extension or special consideration:</p><p><em>You will receive a penalty of 10 per cent for late submission, and a further 10 per cent penalty will be applied for each additional day (24-hour period), or part thereof, that the assessment task is overdue. Assessment tasks submitted more than seven days late will not be accepted and will receive a zero mark.</em></p></div>')
		}
	}
	else{
		console.log('not Assessment Section or section 0')
	}
	//Next Moodle modification needs to start on the line above. Leave this comment in place for future modifications.
	//Setup the BEEST if the correct javascript file is present for lecturers. This is so we can give access in individual units for S1 2021.	
	setup_beest(match_lect,{button:true,iFrame:true});
	/*	var currentURL = window.location.href;
	var blockTitles = $('aside section .card-title').text();
	var returnToSectionLink = $('.breadcrumb-item:nth-last-child(2) > a').attr('href');*/
	//Close load function	
});

