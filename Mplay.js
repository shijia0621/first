(function(global) {
    var __INFO__ = {
        plug: "Mplay",
        version: "1.0.1",
        author: "sj"
    };
    var Defaults = {
        audioUrl: "",
        nodeID: "",
        boxStyle: "",
        bottonSrc: "",
        htmls: `
            <audio autoplay loop style="width: 0px;">
                <source src="" type="audio/mpeg" />
            </audio>
            <a style="width:20px;height:20px;background:url(data:image/png;base64,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) transparent no-repeat scroll top left;background-size:100% auto;display:inline-block;" href="javascript:;" title="音乐开关"></a>
            <select style="vertical-align:top;">
            </select>
        `,
    };
    var PlugCode = function(options) {
        var settings = Object.assign({}, Defaults, options);
        var audioDOM = document.getElementById(settings.nodeID);
        if (!audioDOM) audioDOM = document.body;

        var audioBOX = document.createElement("div");
        audioBOX.id = "dnmusiccontrol";

        audioBOX.style = "opacity:0.5;overflow:hidden;position:absolute;z-inde:2147483136;" + settings.boxStyle;
        //360下面有兼容问题
        audioBOX.innerHTML = settings.htmls;
        audioDOM.appendChild(audioBOX);

        var audioButton = audioBOX.querySelectorAll("a")[0];
        var audioList = audioBOX.querySelectorAll("select")[0];
        var audioTag = audioBOX.querySelectorAll("audio")[0];


        if (settings.buttonSrc) audioButton.style.backgroundImage = "url(" + settings.buttonSrc + ")";

        audioButton.state = true;


        var _urlType = toString.apply(settings.audioUrl);
        console.log(_urlType);

        if (_urlType === '[object Object]') {
            var _temp = [];
            _temp.push(settings.audioUrl);
            settings.audioUrl = _temp;
        }
        if (!settings.audioUrl.length) {
            console.log(__INFO__.plug + " 因无音乐资源启动失败，请添加audioUrl:");
            return;
        }
        if (typeof settings.audioUrl === 'object') {
            for (var i = 0; i < settings.audioUrl.length; i++) {
                var _option = new Option(settings.audioUrl[i].title, settings.audioUrl[i].source);
                audioList.add(_option);
                audioTag.src = audioList.options[0].value;
            }
        } else {
            audioTag.src = settings.audioUrl;
            audioList.style.display = "none";
        }


        var audioFN = {
            play: function(url) {
                if (url) audioTag.src = url;
                audioButton.style.backgroundPosition = "0 0";
                audioTag.play();
            },
            stop: function() {
                audioButton.style.backgroundPosition = "0 100%";
                audioTag.pause();
            }
        };

        var _device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
        var clickEvtName = _device ? "touchstart" : "mousedown"


        audioButton.addEventListener(clickEvtName, function(e) {
            if (this.state) {
                this.state = false;
                audioFN.stop();
            } else {
                this.state = true;
                audioFN.play();
            }
        });

        audioList.addEventListener("change", function(e) {
            var musicName = this.options[this.selectedIndex].value;
            audioFN.play(musicName);
            audioButton.state = true;
        });


    };

    global[__INFO__.plug] = PlugCode;


})(typeof window !== "underfined" ? window : this);
