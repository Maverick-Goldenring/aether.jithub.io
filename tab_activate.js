function TabAA(tempus) {
  if (tempus > 0) {
	 var aAE_Frame = document.getElementById('diversis_spatium_aeframe');
	 var aAE_Tab   = document.getElementById('aether_aechat_active');
	 var a2D_Frame = document.getElementById('diversis_spatium_2dframe');
	 var a2D_Tab   = document.getElementById('aether_2dchat_active');
	 var aDS_Frame = document.getElementById('diversis_spatium_dsframe');
	 var aDS_Tab   = document.getElementById('aether_discussion_active');

	 aAE_Frame.style.display = "block";
	 aAE_Tab.style.display = "block";
	 a2D_Frame.style.display = "none";
	 a2D_Tab.style.display = "none";
	 aDS_Frame.style.display = "none";
	 aDS_Tab.style.display = "none";

  }
}

function TabAtwo(tempus) {
  if (tempus > 0) {
    var aAE_Frame = document.getElementById('diversis_spatium_aeframe');
    var aAE_Tab   = document.getElementById('aether_aechat_active');
    var a2D_Frame = document.getElementById('diversis_spatium_2dframe');
    var a2D_Tab   = document.getElementById('aether_2dchat_active');
    var aDS_Frame = document.getElementById('diversis_spatium_dsframe');
    var aDS_Tab   = document.getElementById('aether_discussion_active');

    aAE_Frame.style.display = "none";
    aAE_Tab.style.display = "none";
    a2D_Frame.style.display = "block";
    a2D_Tab.style.display = "block";
    aDS_Frame.style.display = "none";
    aDS_Tab.style.display = "none";
  }
}

function TabDS(tempus) {
  if (tempus > 0) {
    var aAE_Frame = document.getElementById('diversis_spatium_aeframe');
    var aAE_Tab   = document.getElementById('aether_aechat_active');
    var a2D_Frame = document.getElementById('diversis_spatium_2dframe');
    var a2D_Tab   = document.getElementById('aether_2dchat_active');
    var aDS_Frame = document.getElementById('diversis_spatium_dsframe');
    var aDS_Tab   = document.getElementById('aether_discussion_active');

    aAE_Frame.style.display = "none";
    aAE_Tab.style.display = "none";
    a2D_Frame.style.display = "none";
    a2D_Tab.style.display = "none";
    aDS_Frame.style.display = "block";
    aDS_Tab.style.display = "block";
  }
}