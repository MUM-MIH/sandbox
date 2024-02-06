window.addEventListener("load", function () {
  // Add studiosity link with margin-top class mt-5
  $(".assessment-summary-widget").after(`<a href="https://essfs.ureview.org/" style="text-decoration: none; color: inherit;" target="_blank"><div class="container-fluid border border-dark p-0 m-0 mt-5"><div class="row gx-0 p-0"><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity1.png" alt="Image 1"></div><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity2.png" alt="Image 2"></div><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity3.png" alt="Image 3"></div></div></div></a>`);

  // Append content inside #section-19 at the end with margin-top class mt-5
  $("#section-19").append(`<a href="https://essfs.ureview.org/" style="text-decoration: none; color: inherit;" target="_blank"><div class="container-fluid border border-dark p-0 m-0 mt-5"><div class="row gx-0 p-0"><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity1.png" alt="Image 1"></div><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity2.png" alt="Image 2"></div><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity3.png" alt="Image 3"></div></div></div></a>`);

  // Insert the contentHtml after the <h1> within its parent container to match the margins
  $("#section-4 > div.content").after(`<a href="https://essfs.ureview.org/" style="text-decoration: none; color: inherit;" target="_blank"><div class="container-fluid border border-dark p-0 m-0 mt-5"><div class="row gx-0 p-0"><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity1.png" alt="Image 1"></div><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity2.png" alt="Image 2"></div><div class="col-12 col-md-4 p-0"><img class="img-fluid" src="https://mum-mih.github.io/sandbox/studiosity3.png" alt="Image 3"></div></div></div></a>`);

});
