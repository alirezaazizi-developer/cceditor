/* this script wrote with Alireza Azizi*/
/* at first step should be create Component */
function CCEditComponent(p) {
    var el = document.createElement(p.el);
    el.setAttribute("id", p.id);
    if (p.class != null) {
        p.class.forEach(function (className) {
            el.classList.add(className);
        });
    }
    document.querySelector(p.parent).appendChild(el);
    if (p.html != null) {
        document.getElementById(p.id).innerHTML = p.html;
    }
}
/* remove CCEditor */
function CCEditorRemove(parent) {
    if (document.getElementById('CCEdit') != null) {
        document.getElementById(parent).removeChild('CCEdit');
    } else {
        throw ('CCEdit not defined yet');
    }
}

/* under code is main function for run CCEdit */
function CCEditRun(e) {
    /* at first run an editor basic */
    CCEditComponent({
        'el':'div' ,
        'id':'cceditor' ,
        'class':[],
        'parent':e.main.parent,
        'html':''
    });
}
