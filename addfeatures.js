// directs the function to work once the page has loaded.
window.onload=function(){
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

//Close window.onload function	
	};
