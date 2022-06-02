        var btn = document.getElementById("Upload");
	btn.addEventListener("click", getURL);
	function getURL() {
      var video = document.querySelectorAll(".embed-responsive-16by9 iframe")[0];
      var videoURL = document.getElementById("url").value;
      console.log(videoURL);
        video.outerHTML=videoURL;
      
      var uSyntab = document.querySelectorAll(".acctab-content p")[0];
      var uSynNew = document.getElementById("USny").value;
      console.log(uSyntab);
        uSyntab.innerHTML=uSynNew;
      
      var LOstab = document.querySelectorAll(".acctab-content ol")[0];
      var LOsNew = document.getElementById("id_LO").value;
      console.log(LOstab);
        LOstab.innerHTML=LOsNew;
      
      var Nametab = document.querySelectorAll(".acctab-content h6")[0];
      var NameNew = document.getElementById("LC").value;
      console.log(Nametab);
        Nametab.innerHTML=NameNew;
      
      var Contab = document.querySelectorAll(".acctab-content p")[2];
      var ConNew = document.getElementById("LC").value;
      console.log(Contab);
        Contab.innerHTML=ConNew;
    }
