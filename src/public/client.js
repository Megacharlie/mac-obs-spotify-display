var spotifyTemplate = Handlebars.compile(document.getElementById('spotify-album').innerHTML);
var rootEl = document.getElementById('app');
var marqueeSelector = '.entry__scrollable';
var marqueeContentSelector = '.entry__content';
var marqueeContentCopy = '.entry__content__copy';
var currentTrack;
var storecontent = " "

function getJson(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
            callback(null, JSON.parse(this.responseText));
        } else {
            callback(JSON.parse(this.responseText));
        }
    }
    };

    request.send();
    request = null;
}

(function getAlbumData() {
    getJson('/track', function onComplete(err, data) {
        if (!err) {
            if (currentTrack !== data.id) {
                currentTrack = data.id;
                rootEl.innerHTML = spotifyTemplate(data);
            }
        }
        window.setTimeout(getAlbumData, 1000);
    });
})();

(function marquee() {
    var marqueeEl = document.querySelector(marqueeSelector);
    var scrollEl = document.querySelector(marqueeContentSelector);

    if (marqueeEl) {
        var maxWidth = marqueeEl.offsetWidth;
        var contentWidth = scrollEl.offsetWidth;
        if (contentWidth > maxWidth) {

            if(storecontent!=scrollEl.innerHTML){
                scrollEl.innerHTML = scrollEl.innerHTML + " " + scrollEl.innerHTML + " "
                storecontent = scrollEl.innerHTML
                var contentWidth = scrollEl.offsetWidth;
            }

            var indent = parseInt(scrollEl.style.marginLeft, 10) || 0;
            --indent;
            if (indent <= -1 * contentWidth/2) {
                indent = 10; //maxWidth; 
            }
            scrollEl.style.marginLeft = indent + 'px';
        }
    }
    window.setTimeout(marquee, 1000 / 60);
})();
