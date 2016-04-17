/* Custom element definitions */
(function () {
    /* Custom element for uploader */
    var bmUploadFileDialog = document.registerElement('bm-upload-file-dialog', {
        prototype: Object.create(HTMLButtonElement.prototype),
        extends: 'div'
    });

    document.body.appendChild(new bmUploadFileDialog());

    /* Close button for dialog boxes */
    var bmDialogClose = document.registerElement('bm-dialog-close', {
        prototype: Object.create(HTMLButtonElement.prototype),
        extends: 'div'
    });

    document.body.appendChild(new bmDialogClose());

    /* Close button for dialog boxes */
    var bmDialogBody = document.registerElement('bm-dialog-body', {
        prototype: Object.create(HTMLButtonElement.prototype),
        extends: 'div'
    });

    document.body.appendChild(new bmDialogBody());

})(window);

/* Classes for elements - Everything gets attached to App class */
(function () {

    this['App']         = this['App'] || {};
    var App             = this['App'];
    var dialogContainer = document.getElementById('bookmark-dialog');

    App.bookmarkExplorer = new BookmarkExplorer();
    App.bookMarkUploader = new BookmarkUploader();
    App.bookMarkCreate   = new BookmarkCreate();
    App.bookMarkEdit     = new BookmarkEdit();

    /* Mock Bookmark Service*/
    function getBookmarks() {

        var bookmarks = {
            parent: null,
            name: 'root',
            url: '',
            children: [{
                parent: 'root',
                name: 'gmail',
                url: 'gmail.com',
                children: []
            }, {
                parent: 'root',
                name: 'github',
                url: 'github.com',
                children: []
            }, {
                parent: 'root',
                name: 'school',
                url: '',
                children: []
            }]
        };

        return bookmarks;
    }

    /* Code for bookmark explorer */
    function BookmarkExplorer() {
        this.container = document.getElementById('bookmark-list');
        //this.template = App.templates['assets/templates/bookmark-list.hbs.html'];
    }

    BookmarkExplorer.prototype.showBookmarks = function showBookmarks() {
        var bookExp   = this;
        var bookmarks = getBookmarks();
        var current   = bookmarks.children;

        current.forEach(function (current) {
            if (current.url)
            {
                bookExp.printBookmark(current);
            }
            else
            {
                bookExp.printFolder(current);
            }
        })
    };

    BookmarkExplorer.prototype.printBookmark = function printBookmark(context) {
        this.template = App.templates['assets/templates/bookmark-item.hbs.html'];
        document.getElementById('bookmark-list').innerHTML += this.template(context);
    };

    BookmarkExplorer.prototype.printFolder = function printFolder(context) {
        this.template = App.templates['assets/templates/bookmark-folder.hbs.html'];
        document.getElementById('bookmark-list').innerHTML += this.template(context);
    };

    /* Bookmark uploader */
    function BookmarkUploader() {
        this.template  = App.templates['assets/templates/upload-file.hbs.html'];
    }

    BookmarkUploader.prototype.show = function showBookmarkUploader() {
        show('bm-upload-file-dialog', this.template);
    };

    BookmarkUploader.prototype.remove = function hideBookmarkUploader() {
        hide('bm-upload-file-dialog');
    };

    /* Bookmark create */
    function BookmarkCreate() {
        this.template  = App.templates['assets/templates/bm-create.hbs.html'];
    }

    BookmarkCreate.prototype.show = function showBookmarkCreate() {
        show('bm-create-dialog', this.template);
    };

    BookmarkCreate.prototype.remove = function hideBookmarkCreate() {
        hide('bm-create-dialog');
    };

    function BookmarkEdit() {
        this.template = App.templates['assets/templates/bm-edit.hbs.html'];
    }

    BookmarkEdit.prototype.show = function showBookmarkEdit() {
        show('bm-edit-dialog', this.template);
    };

    BookmarkEdit.prototype.remove = function hideBookmarkEdit() {
        hide('bm-edit-dialog');
    };

    /* Show hide functionality */
    function hide(tag) {
        var elements = document.getElementsByTagName(tag);
        /* Check if element is present */
        if (elements.length !== 0)
        {
            var element = elements[0];
            element.style.display = 'none';
        }
    }

    function show(tag, template) {
        var elements = document.getElementsByTagName(tag);
        /* Check if element is present */
        if (elements.length !== 0)
        {
            var element = elements[0];
            /* Check if element is shown */
            if (getDisplay(element) === 'none')
            {
                displayAsFirstChild(element);
            }

            return;
        }

        /* Inserts html as first child element */
        dialogContainer.insertAdjacentHTML('afterbegin', template());
    }

    function displayAsFirstChild (element) {
        var firstChild = dialogContainer.firstChild;

        /* Shows element as the first child */
        dialogContainer.insertBefore(element, firstChild);
        element.style.display = 'flex';
    }

    function getDisplay(element) {
        return element.currentStyle ? element.currentStyle.display :
               getComputedStyle(element, null).display;
    }

})(window);
