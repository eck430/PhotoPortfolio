// dynamically load images based on selected album

document.addEventListener('DOMContentLoaded', function(){     //event listener wait for doc to be fully loaded and parsed before executing
    const albValue = new URLSearchParams(window.location.search).get('alb');     // get key alb value from query param

    if(albParam){
        loadAlbum(albValue);
    }
});

function loadAlbum(alb){
    const albContent = document.getElementById('albContent');    // get <main> where imgs will be displayed

    // album array with imgs

    // check if user selected album exists

    // get imgs from album (select arr)

    // create HTML to display images by iterating through images of selected array

    // add created HTML to <main>
}