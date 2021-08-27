$(function(){
  $("tr").each(function(){
    var col_val = $(this).find("td:eq(3)").text();
    if (col_val == "SWOT"){
      $(this).addClass('selected');  //the selected class colors the row green//
    } else {
      $(this).addClass('bad');
    }
  });
});
