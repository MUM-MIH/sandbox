jQuery(document).ready(function($) {
    $('#caldark tr').each(function () {
       var td_value = $('td',this).eq(2).text();
       console.log(td_value);
       switch (td_value) {
           case 'SWOT VAC':
                $(this).addClass('bg-success');
               break;

           default:
               // statements_def
               break;
       }
    });
});
