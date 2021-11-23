<script>
window.addEventListener('load',function(){
  //make a variable of the activity names
	var Malaysia=$('span.instancename').text();
	//Get URL of studiosity activity
  var StudioLink=$("span.instancename:contains('Studiosity')").parent().attr('href');
		if (Malaysia.match(/Studiosity/)){
			$('aside.block-region').before('<a class="studiobanner" href="URL" target="_blank"><img src="https://mum-mih.github.io/sandbox/Studiosity_Monash_SquareFA.jpg" style="width:275px;margin-bottom:15px"></a></div>')
		}
	else{
		console.log('Studiosity not present')
	}
	//add the URL to banner
    $('a.studiobanner').attr("href",StudioLink);
  	});
  </script>
