/* event handler for text editor */
export default class editor_event {
    constructor() {
        console.log("event was build");
    }
    /* function bold */
    bold() {
        document.execCommand("bold");
    }
    /* function italic */
    italic() {
        document.execCommand('italic');
    }
    /* function underline */
    underline() {
        document.execCommand("underline");
    }
    /* function bgColor */
    backgroundColor() {
        /* is simple shape of bg color */
        let bgcolor = prompt("Please write a hex value in editor");
        document.execCommand("backColor", null, bgcolor);
    }
    /* function external link */
    link() {
        let addr = prompt("Please tell me a link");
        if (addr != null) {
            document.execCommand("createlink", null, addr);
        } else {
            console.log("please write any http address");
        }
    }
    /* function color */
    color() {
        let color = prompt("add your color ");
        document.execCommand("color", null, color);
    }
    /* font size */
    font_size() {
        let font = prompt("Enter font size");
        document.execCommand("fontSize", null, font);
    }
    /* function right */
    justify_right() {
        document.execCommand("justifyRight");
        alert(selecet('text1'));
    }

    /*function left */
    justify_left() {
        document.execCommand("justifyLeft");
    }
    /* function center */
    justify_center() {
        document.execCommand("justifyCenter");
    }
    /* font family function */
    font_family(p) {
        let select = document.createElement("select");
        select.innerHTML = '<option>فونت</option>';

        if (p != null) {
            p.forEach(function (fontValue) {
                select.innerHTML += "<option>" + fontValue + "</option>";
            });
        }

        element('editor').appendChild(select);
    }
}