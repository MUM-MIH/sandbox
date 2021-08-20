window.addEventListener('DOMContentLoaded',function(){
	//hide Category wide block that references this script + Arts styles CSS file
	document.getElementById("inst3098311").classList.add("d-none");
});
// directs the function to work once the page has loaded.
window.addEventListener('load',function(){
	//make a variable of the section name
	var assessmentSectionName=$('.sectionname').text();
	//check if we are on the assessments section
	if (assessmentSectionName.match(/Key Contacts/) != null && window.location.href.slice(-10) != "&section=0"){
		//check if the assessment text already exists
		if ($('.label:contains("Please be aware that the following penalties apply if you submit your assessment task after the due date and time without an approved extension or special consideration:")').length!=0){
			console.log('text present')
		}
		else{
			//input the text if it isn't already present, after the section name
			console.log('text NOT present')
			$('.sectionname').after('<h2>Course Management Office</h2><div class="contactscontent"><p><br />The School of Science Course Management Office (CMO) is your go-to hub for the administration of your enrolled course. In some cases, you may also want to approach your CMO for unit-specific issues. This could include instances when you want information on special consideration, unit discontinuation or intermission, or supplementary assessments.<br /><br />Tel: <strong>+ 603 5514 6186 / 6187 / 6120</strong><br />Email: <strong>scienceinquiries.my@monash.edu</strong><br /><br /><br /></p><hr />')
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
