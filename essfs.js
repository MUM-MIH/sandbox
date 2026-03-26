window.addEventListener("load", function () {
    const params = new URLSearchParams(window.location.search);
    const path = window.location.pathname;
if path.includes('course/view.php') || params.has('section') {
//Add essfs advertisement banner, currently disabled
  $("#region-main").before('<a href="https://mum.bluera.com/essfs/" target="_blank"><img src="https://mum-mih.github.io/sandbox/MESS_Banner.png" alt="Image showing ipad and vouchers with the text, Take the Early Semester Student Feedback Survey and stand a chance to win 300 grab vouchers and an Ipad air 128GB" style="width:100%;margin-bottom:15px"></a>');
}
});
