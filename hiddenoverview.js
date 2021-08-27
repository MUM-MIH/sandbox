$(function(){
  $("tr").each(function(){
    var col_val = $(this).find("td:eq(2)").text();
    if( $.trim(col_val) === "SWOT VAC" ){
      $(this).addClass('selected');  //the selected class colors the row green//
    } else {
      $(this).addClass('bad');
    }
  });
});
