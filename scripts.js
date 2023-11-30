
// Add project utilities to main content 
let projectsUtilities = document.querySelectorAll(".projects-utilities");
[...projectsUtilities].forEach((parent) =>{
    let favoriteIcon = document.createElement("div");
        favoriteIcon.classList.add('favorite', 'utilities-icon');
    let favoriteLink = document.createElement("a");
        favoriteLink.href ="#";
    let eyeIcon = document.createElement("div");
        eyeIcon.classList.add(('eye', 'utilities-icon'));
    let eyeLink = document.createElement("a");
        eyeLink.href = "#";
    let shareIcon = document.createElement("div"); 
        shareIcon.classList.add(('add', 'utilities-icon'));
    let shareLink = document.createElement("a");
        shareLink.href = "#";

    favoriteLink.innerHTML = '<ion-icon size="small" name="star-outline"></ion-icon>';
    eyeLink.innerHTML = '<ion-icon size="small" name="eye-outline"></ion-icon>';
    shareLink.innerHTML = '<ion-icon size="small" name="share-social-outline"></ion-icon>';

    favoriteIcon.appendChild(favoriteLink);
    eyeIcon.appendChild(eyeLink);
    shareIcon.appendChild(shareLink);


    parent.appendChild(favoriteIcon);
    parent.appendChild(eyeIcon);
    parent.appendChild(shareIcon);
    })

// Add dashboard links to dashboard items
let dashboardItem = document.querySelectorAll(".dashboard-item");
[...dashboardItem].forEach((parent)=>{
    let link = document.createElement("a");
    link.href = "#";
    link.innerText = parent.id;

    parent.appendChild(link)
})

// add nav links to nav items
let navItem = document.querySelectorAll(".nav-button");
[...navItem].forEach((parent)=>{
    let link = document.createElement("a");
    link.href = '#';
    link.innerText=parent.id;

    parent.appendChild(link);
})
