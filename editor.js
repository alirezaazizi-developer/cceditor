class CCEdit {
    /* create element grand parent in editor */
    // document.body.style.position = 'absolute';
    /* create element */
    CCEditComponents(tagname, parent, property) {
            let el = document.createElement(tagname);
            el.setAttribute('id', property.id);
            if (property.classes != null) {
                property.classes.forEach(element => {
                    el.classList.add(element);
                });
            } else {
                throw (`not have any class `);
            }
            document.querySelector(parent).appendChild(el);

            function setContent() {
                document.getElementById(property.id).innerHTML = property.html;
            }
            property.id != null ? setContent() : console.log('fail to create html');
        }
        /* close editor most be and of the all javascript code */
    RemoveEditor() {
            let s = document.getElementById('exit-editor');
            s.addEventListener('click', function() {
                let del = document.getElementById('editor')
                del.parentElement.removeChild(del);
            });
        }
        /*
         *  under function for change section  
         */
    section(e) {
            document.getElementById(e.active).style.display = 'inline';
            document.getElementById(e.hidde).style.display = 'none';
        }
        /* under function for whole editor setting */
    function RunCCEditor() {
        let editor = document.createElement('div');
        editor.setAttribute('id', 'editor');
        document.body.appendChild(editor);
        if (document.getElementById('editor') != null) {
            element_creator('div', '#editor', {
                'id': 'editor-enviorment',
                'classes': ['helo'],
                'html': `
        <div id="main-editor">
            <div id="editor-tab">
                <ul>
                    <li><a id="edit-mod">ویرایشگر</a></li>
                    <li><a id="text-preview">بخش اچ تی ام ال</a></li>
                </ul>
            </div>
            <div id="mods">
                <div id="editor-mod"></div>
                <div id="html-code">
                   <textarea id="html-source"></textarea>
                </div>
            </div>
            <div id="save-close">
                <button id="exit-editor">خروج</button>
                <button id="save-edit">ذخیره</button>
            </div>
        </div>
        `
            });
            element_creator('div', '#editor-mod', {
                'id': 'editor-desk',
                'classes': [],
                'html': `
       <div id="edit-option">
           <ul>
              <li><a onclick="">فونت</a></li>
              <li><a onclick="">سایز</a></li>
              <li><a onclick="">لینک</a></li>
              <li><a onclick="">عکس</a></li>
              <li><a onclick="">بولد</a></li>
              <li><a onclick="">ایتالیک</a></li>
           </ul>
       </div>
       <div id="editor-area">
          <textarea id="editor-controller"></textarea>
       </div>
     `
            });
            /* under functions for editor proproties  */
            RemoveEditor();
            document.getElementById('html-source').value = document.body.outerHTML;
            /* under codes for check user onclick */
            document.getElementById('edit-mod').addEventListener('click', function() {
                section({ 'hidde': 'html-code', 'active': 'editor-mod' });
            });
            document.getElementById('text-preview').addEventListener('click', function() {
                section({ 'hidde': 'editor-mod', 'active': 'html-code' });
            });
        } else {
            console.log('exist text editor');
        }

    }

    /* under code active editor  */
}