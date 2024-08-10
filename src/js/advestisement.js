const form = document.getElementById("advertForm");
const div = document.getElementById("advertDiv");
const container = document.getElementById("advertContainer");
const advertOpen = document.getElementById("advertOpen");
const closeAdvert = document.getElementById("closeAdvert")

function filterOpen(){
    form.style.display = "inherit";
    div.style.display = "none";
    advertOpen.style.paddingTop = "32px";
    closeAdvert.style.opacity = 1;
    closeAdvert.style.height = "38px";
    closeAdvert.style.width = "108px";
}

function filterClose(){
    form.style.display = "none";
    div.style.display = "flex";
    advertOpen.style.paddingTop = "0";
    closeAdvert.style.opacity = 0
}