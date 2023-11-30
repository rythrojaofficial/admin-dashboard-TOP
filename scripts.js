let projectsUtilities = document.querySelectorAll(".projects-utilities");
// parent object


[...projectsUtilities].forEach((parent, i) =>{
    let favoriteIcon = document.createElement("div");
    let eyeIcon = document.createElement("div");
    let shareIcon = document.createElement("div"); 

    favoriteIcon.innerHTML = '<ion-icon size="small" name="star-outline"></ion-icon>';
    eyeIcon.innerHTML = '<ion-icon size="small" name="eye-outline"></ion-icon>';
    shareIcon.innerHTML = '<ion-icon size="small" name="share-social-outline"></ion-icon>';

    parent.appendChild(favoriteIcon);
    parent.appendChild(eyeIcon);
    parent.appendChild(shareIcon);
    })




projectsUtilities.appendChild(favoriteIcon);