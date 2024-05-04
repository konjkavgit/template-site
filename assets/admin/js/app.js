var info_project = document.querySelector("#info-project");
var content_project = document.querySelector("#content-project");

$(".info-project tr").click(function (e) { 
    info_project.classList.add("d-none");
    content_project.classList.remove("d-none");
    
});
$(".back-icon").click(function (e) { 
    info_project.classList.remove("d-none");
    content_project.classList.add("d-none");
    
});