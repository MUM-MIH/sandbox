if (/section/.test(window.location.href)) {
        document.documentElement.className += ' has-script';   
}
//change table row based on sem-break //
  $("tr").each(function(){
    var col_val = $(this).find("td:eq(2)").text();
    if (col_val == "swot vac"){
      $(this).addClass('calemphasis');  //the selected class colors the row green//
    } else {
      $(this).addClass('bad');
    }
});
