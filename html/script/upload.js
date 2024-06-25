if (window.location.pathname == '/upload') {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(insert, 300);
    });
}

function insert(){
    var insert = document.getElementById('insert');
    var text = document.createElement('h1')
    insert.appendChild(text)
    var text_txt = "Insert Tiktok Video URL";
    var index = 0;
    var interval = 45;
    function typeText(){
        if (index < text_txt.length){
            var span = document.createElement('span');
            span.id = "text-text"
            span.textContent = text_txt[index];
            text.appendChild(span);
            index++;
            setTimeout(typeText, interval);
        }
    }
    typeText();
}

function clearInput(){
    var url = document.getElementById('url');
    url.value="";
}

async function submitUrl(){
    var url = document.getElementById('url');
    var videoUrl = url.value;
    if (videoUrl == ""){
        alert("Please enter a valid URL");
    }
    var endpointUrl = `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`;
    console.log(endpointUrl);
    try{
        await fetch(endpointUrl);
    } catch(error){
        console.log(error);
        alert('There was an error fetching the video! Please check the url and try again.');  
    }
    window.location.href = `/video?${encodeURIComponent(endpointUrl)}`;
}