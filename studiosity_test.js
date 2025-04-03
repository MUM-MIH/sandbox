window.addEventListener("load", function () {
  //Defines the HTML to insert in Moodle  
  var contentHtml = `<a href="https://learning.monash.edu/mod/lti/view.php?id=3575256" style="text-decoration: none; color: inherit;" target="_blank" alt="Feel more confident with your writing before submitting. Access Monash's Studiosity for 24/7 fast feedback."><div class="container-fluid border p-0 m-0 mt-5"><div class="row gx-0 p-0" style="margin-right: 0; margin-left: 0;"><div class="col-12 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/MUMstudiosity.png" alt="Monash University Banner"></div></div></div></a>`;
    var contentHtmlb = `<a href="https://learning.monash.edu/mod/lti/view.php?id=3575256" style="text-decoration: none; color: inherit;" target="_blank" alt="Feel more confident with your writing before submitting. Access Monash's Studiosity for 24/7 fast feedback."><div class="container-fluid border p-0 m-0 mt-5 mb-5"><div class="row gx-0 p-0" style="margin-right: 0; margin-left: 0;"><div class="col-12 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/MUMstudiosity.png" alt="Monash University Banner"></div></div></div></a>`;

  //Look for the Support and Getting Started sections and append the HTML after the section headers
    $(".sectionname").each(function () {
        var text = $(this).text().trim().toLowerCase(); // Trim whitespace and convert to lowercase
        if (text === "support" || text === "getting started") {
            // Find the closest parent that matches the `.course-section-header` class and append contentHtmlb after it
            $(this).closest('.course-section-header').after(contentHtmlb);
        }
    });

    // Append the HTML after the assessment summary table
    $(".assessment-summary-widget").after(contentHtml);

//Add essfs advertisement banner , currently disabled
  $("#region-main").before('<a href="https://mum.bluera.com/essfs/" target="_blank"><img src="https://mum-mih.github.io/sandbox/ESSFS_Banner_HNedv2_070824.gif" alt="Image showing ipad and grab vouchers with the text, Take the Early Semester Student Feedback Survey and stand a chance to win 500 grab vouchers and an Ipad air 64BG" style="width:100%;margin-bottom:15px"></a>');

});
