// directs the function to work once the page has loaded.
window.addEventListener("load", function () {
 
   //add essfs advertisement
$("#region-main").before('<a href="https://essfs.ureview.org/" target="_blank"><img src="https://mum-mih.github.io/MUM-template-2/ESSFS_moodle_2023S2.png" alt="Take the Early Semester Student Feedback Survey and stand a chance to win prizes" style="width:1750px;margin-bottom:15px"></a>');
 
 //add igraduate survey ad
$('aside.block-region').before('<a href="https://igraduate.fra1.qualtrics.com/jfe/form/SV_dbxyDeXZBpF5hZA?ins=330111&rort=r&abc=1" target="_blank"><img src="https://mum-mih.github.io/sandbox/studentbaro.png" alt="Take the Early Semester Student Feedback Survey and stand a chance to win prizes" style="width:275px;margin-bottom:15px"></a>');

//add studiosity link
$(".assessment-summary-widget").after('<a href="https://essfs.ureview.org/" target="_blank"><img src="https://mum-mih.github.io/MUM-template-2/ESSFS_moodle_2023S2.png" alt="Take the Early Semester Student Feedback Survey and stand a chance to win prizes" style="width:1750px;margin-bottom:15px"></a>');
 
 
  //Close window.onload function
});
