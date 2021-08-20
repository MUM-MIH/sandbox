window.addEventListener('DOMContentLoaded',function(){
	//hide Category wide block that references this script + Arts styles CSS file
	document.getElementById("inst3098311").classList.add("d-none");
});
// directs the function to work once the page has loaded.
window.addEventListener('load',function(){
	//make a variable of the section name
	var assessmentSectionName=$('h3.sectionname').text();
	//check if we are on the assessments section
	if (assessmentSectionName.match(/Key Contacts/) != null && window.location.href.slice(-10) != "&section=0"){
		//check if the assessment text already exists
		if ($('.label:contains("Please be aware that the following penalties apply if you submit your assessment task after the due date and time without an approved extension or special consideration:")').length!=0){
			console.log('text present')
		}
		else{
			//input the text if it isn't already present, after the section name
			console.log('text NOT present')
			$('h3.sectionname:last').after('<div class=“contacts-central”><h2>Course Management Office</h2><div class="contactscontent"><p><br />The School of Science Course Management Office (CMO) is your go-to hub for the administration of your enrolled course. In some cases, you may also want to approach your CMO for unit-specific issues. This could include instances when you want information on special consideration, unit discontinuation or intermission, or supplementary assessments.<br /><br />Tel: <strong>+ 603 5514 6186 / 6187 / 6120</strong><br />Email: <strong>scienceinquiries.my@monash.edu</strong><br /><br /><br /></p><hr /><h2>Lecturer/Tutor Consultations</h2><div class="contactscontent"><p><br />Consultations are one-on-one meetings with your lecturer or tutor. Lecturers and tutors hold consultation hours every week. However, you should still make an appointment with your lecturer/tutor to secure a meeting.<br /><br />If you have a question that doesn't require a private discussion, please post in the forum so that everyone in the unit can benefit from an answer.</p><h6>Dr Zoe Yek Sze Huei</h6><p>Email: yek.szehuei@monash.edu<br />Consultation Hours: Monday 2-4pm</p><p></p><h6>Ms Harlina Yunus</h6><p>Email: harlina.yunus@monash.edu<br />Consultation hours:  On appointment basis<br /><br /><br /></p></div><hr /><h2>Library Resources and Contacts</h2><div class="contactscontent"><p><br />The Library and Learning Commons at Monash University Malaysia is not only a rich database of books. It also hosts learning resources, workshops and guides for undergraduate students. <a href="https://www.monash.edu.my/library" target="_blank">Search the Library.<br /></a></p><p>Some relevant resources and guides:</p><ul><li><a href="https://www.monash.edu.my/library/research/elearning-resources/research-learning-skills-video-recordings" target="_blank">Research and Learning Skills Videos</a></li><li><a href="https://www.monash.edu/rlo/research-writing-assignments/referencing-and-academic-integrity/academic-integrity/what-is-academic-integrity" target="_blank">Academic Integrity Tutorial</a></li><li><a href="https://www.monash.edu/rlo/research-writing-assignments/referencing-and-academic-integrity/academic-integrity/plagiarism-collusion-and-contract-cheating" target="_blank">Plagiarism Tutorial</a></li><li><a href="https://www.monash.edu/rlo/research-writing-assignments/assignment-types/oral-presentation" target="_blank">How to do an Oral Presentation</a></li><li><a href="https://www.monash.edu/rlo/study-skills" target="_blank">Study skills for university<br /><br /></a></li></ul><p>Tel: <strong>+603 5514 6199</strong><br />Email: <strong>mum-lib-contact@monash.edu</strong></p><p><a href="https://www.monash.edu.my/library/research/library-workshops-events" target="_blank">Library Workshops and Events Calendar</a><a href="https://www.monash.edu.my/library/research/library-workshops-events" target="_blank"> </a></p></div></div></div>')
		}
	}
	else{
		console.log('not Assessment Section or section 0')
	}
	$('#inst3494068 div.card-text div.no-overflow p').remove();
	$('#inst3494068 div.card-text div.no-overflow').prepend('<div class="pb-0 pt-1 px-2 preambleAssessment mt-0"><p>Meet with an adviser for learning and English language support by clicking below.</p><p><a href="https://www.monash.edu/students/study-support/learning" class="btn btn-default btn-block w-50 mx-auto btn-secondary" target="_blank" title="Learning and English Language support">Go <i class="fa fa-arrow-right aria-hidden="true"></i></a></p></div>');
	$('li.activity').on('click',function(){
    setTimeout(function(){
      var popupActive=$('body').find('.moodle-dialogue-base');
      if (popupActive.length != 0){
        $('ul.dragdrop-keyboard-drag li a').first().blur();
        var moodleMoveObjectCSS =document.createElement('link');
        moodleMoveObjectCSS.rel='stylesheet';
        moodleMoveObjectCSS.href='https://mon-arts-ed-des.github.io/artsmoodlecode/moodleMoveObject.css';
        moodleMoveObjectCSS.type="text/css";
        document.getElementsByTagName('head')[0].appendChild(moodleMoveObjectCSS);
        $('html, body').animate({scrollTop: '0px'}, 300);
        $('ul.dragdrop-keyboard-drag li').prepend('&nbsp;&#x2022;'); 
        $('.moodle-dialogue-hd > span').prependTo('.moodle-dialogue-bd');
        $('.moodle-dialogue-bd span button').addClass('text-white h6 p-2 border border-white rounded');
        $('div.moodle-dialogue-hd').text($('div.moodle-dialogue-hd').text().slice(0,70));
        $('div.moodle-dialogue-hd').append('&#8230;');
        $('.moodle-dialogue-bd span button').prepend('Close ');
       // console.log('truncating function worked');
        }
        else{
		//do nothing
        //  console.log('truncating function did not work')
        }
      }, 100);
  });
	if(window.location.href.match(/grader/) != null){
    $('.fa-eye-slash').closest('a').before('<span class="badge badge-warning rounded">hidden</span> ')
    $('.fa-eye').closest('a').before('<span class="badge badge-success rounded">visible</span> ')
    console.log('on the grader page')
  }
  else{
    console.log('not on the grader page')
  }
	//Next Moodle modification needs to start on the line above. Leave this comment in place for future modifications.
	//Setup the BEEST if the correct javascript file is present for lecturers. This is so we can give access in individual units for S1 2021.	
	setup_beest(match_lect,{button:true,iFrame:true});
	/*	var currentURL = window.location.href;
	var blockTitles = $('aside section .card-title').text();
	var returnToSectionLink = $('.breadcrumb-item:nth-last-child(2) > a').attr('href');*/
	//Close load function	
});
