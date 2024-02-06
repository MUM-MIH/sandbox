window.addEventListener("load", function () {
  
  var contentHtml = `<a href="https://essfs.ureview.org/" style="text-decoration: none; color: inherit;" target="_blank"><div class="container-fluid border border-dark p-0 m-0 mt-5"><div class="row gx-0 p-0"><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity1.png" alt="Image 1"></div><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity2.png" alt="Image 2"></div><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity3.png" alt="Image 3"></div></div></div></a>`;

  $('#coursecontentcollapse19').prepend(contentHtml);
  $(".assessment-summary-widget").after(contentHtml);
  $("#coursecontentcollapse4").prepend(contentHtml);
  
});
