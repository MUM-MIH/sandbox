//window.addEventListener("load", function () {
  
  //var contentHtml = `<a href="https://essfs.ureview.org/" style="text-decoration: none; color: inherit;" target="_blank"><div class="container-fluid border p-0 m-0 mb-5"><div class="row gx-0 p-0" style="margin-right: 0; margin-left: 0;"><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity1.png" alt="Image 1"></div><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity2.png" alt="Image 2"></div><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity3.png" alt="Image 3"></div></div></div></a>`;
 // var contentHtmlass = `<a href="https://essfs.ureview.org/" style="text-decoration: none; color: inherit;" target="_blank"><div class="container-fluid border p-0 m-0 mt-5"><div class="row gx-0 p-0"><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity1.png" alt="Image 1"></div><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity2.png" alt="Image 2"></div><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity3.png" alt="Image 3"></div></div></div></a>`;

 // $('#coursecontentcollapse19').prepend(contentHtml);
 // $(".assessment-summary-widget").after(contentHtmlass);
  //$("#coursecontentcollapse4").prepend(contentHtml);
  
//});

window.addEventListener("load", function () {
  
  var contentHtml = `<a href="https://essfs.ureview.org/" style="text-decoration: none; color: inherit;" target="_blank"><div class="container-fluid border p-0 m-0 mt-5"><div class="row gx-0 p-0" style="margin-right: 0; margin-left: 0;"><div class="col-12 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/mumbanner.png" alt="Monash University Banner"></div></div></div></a>`;
var contentHtmlb = `<a href="https://essfs.ureview.org/" style="text-decoration: none; color: inherit;" target="_blank"><div class="container-fluid border p-0 m-0 mb-5"><div class="row gx-0 p-0" style="margin-right: 0; margin-left: 0;"><div class="col-12 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/mumbanner.png" alt="Monash University Banner"></div></div></div></a>`;

 
  // Prepend the banner to the specified containers
  $('#coursecontentcollapse19').prepend(contentHtmlb);
  $(".assessment-summary-widget").after(contentHtml);
  $("#coursecontentcollapse4").prepend(contentHtmlb);
  
});
