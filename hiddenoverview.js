//change table row based on sem-break //
  $("tr").each(function(){
    var col_val = $(this).find("td:eq(2)").text();
    if( $.trim(col_val.toLowerCase() ) === "swot vac" )
      $(this).addClass('calemphasis');  //the selected class colors the row green//
    } else {
      $(this).addClass('bad');
    }
});
