function getUrlParameter(){
        var query = decodeURIComponent(window.location.search);
        var url = query.substring(1);
        return url;
}

async function getVideo(url){
    try{
        var response = await fetch(url);
        var data = await response.json();
        console.log(data.html);
        var main = document.getElementById('main');
        var tempDiv = document.createElement('div');
        tempDiv.id = 'video';
        tempDiv.innerHTML = data.html;
        main.appendChild(tempDiv);

        var script = document.createElement('script');
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    } catch(error){
        console.log(error);
        alert('There was an error fetching the video! Please check the url and try again.');
        setTimeout(window.location.href = '/upload', 500);
    }
}

async function process(url) {
    try{
       
        }
    catch(error){
        alert('There was an error processing the video! Please try again.');
    }
}

async function runYolo() {

}

async function startProcess(){
    var url = getUrlParameter();
    await getVideo(url);
    await process(url);
    // await process(url);
}

startProcess();