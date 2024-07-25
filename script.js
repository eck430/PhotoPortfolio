// dynamically load images based on selected album

document.addEventListener('DOMContentLoaded', function(){     //event listener wait for doc to be fully loaded and parsed before executing
    const albParam = new URLSearchParams(window.location.search).get('alb');     // get key alb value from query param

    if(albParam){
        loadAlbum(alb);
    }
});

function loadAlbum(alb){
    // reference <main> where imgs will be displayed
    const albContent = document.getElementById('albContent');

    // create obj to map albums to images
    const albums = {
        'church': ['imgs/church1.jpg', 'imgs/church2.jpg'],
        'family': ['imgs/family1.jpg'],
        'couple': ['imgs/couple1.jpg']
    };

    // check if user selected album exists (if objs key = query key 'alb')
    if(albums.hasOwnProperty(alb)){
        // get imgs from album (select arr)
        const images = albums[alb];

        // create HTML to display images by iterating through images of selected array
        let html = '<div class = "imgView">';
        images.forEach(image => {
            html += `<img src="${image}" alt="album image">`;
        });

        html += '</div>';

        // set created HTML
        albContent.innerHTML = html;
    }else{
        albContent.innerHTML = '<p>Images not found.</p>'
    }
}