document.addEventListener('DOMContentLoaded', function() {
    setTimeout(welcome, 300);
});

function welcome(){
    var message = document.getElementById('message');
    var welcomeElement = document.createElement('div');
    message.appendChild(welcomeElement);
    welcomeElement.id = 'welcome';
    welcomeElement.style.display= "block";

    var welcomeMsg = document.createElement('h1');
    welcomeElement.appendChild(welcomeMsg);

    var welcome_txt = "Welcome, Tiktok User";
    var index = 0;
    var interval = 50;
    function typeWelcomeText(){
        if (index < welcome_txt.length){
            var span = document.createElement('span');
            span.id = "welcome-text"
            span.textContent = welcome_txt[index];
            span.style.color = getColorForIndex(index);
            welcomeElement.appendChild(span);
            index++;
            setTimeout(typeWelcomeText, interval);
        }
        else{
            addCursor();
            setTimeout(removeWelcomeText, interval * welcome_txt.length + 350);
        }
    }
    function addCursor(){
        var cursor = document.createElement('span');
        cursor.id="cursor";
        cursor.textContent = "|";
        cursor.id = "cursor";
        cursor.style.opacity = 1;
        welcomeElement.appendChild(cursor);
        setInterval(function(){
            cursor.style.opacity = cursor.style.opacity == 0 ? 1 : 0;
        }, 400);
    }
    function removeWelcomeText(){
        message.removeChild(welcomeElement);
    };
    typeWelcomeText();
}

function getColorForIndex(index){
    var colors = ["#000000", " #FE2C55", "#20dcd5"];
    return colors[index % colors.length];
}