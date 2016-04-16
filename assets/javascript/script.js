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

    this['App']  = this['App'] || {};
    var App      = this['App'];

    App.bookmarkExplorer = new BookmarkExplorer();
    App.bookMarkUploader = new BookmarkUploader();
    App.bookMarkCreate = new BookmarkCreate();
    App.bookMarkEdit = new BookmarkEdit();


    /* Mock Bookmark Service*/
    function getBookmarks() {

        bookmarks = {
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
        }

        return bookmarks;
    };
    

    /* Code for bookmark explorer */
    function BookmarkExplorer() {
        this.container = document.getElementById('bookmark-list');
        //this.template = App.templates['assets/templates/bookmark-list.hbs.html'];
    }

    BookmarkExplorer.prototype.showBookmarks = function showBookmarks() {
        var bookExp = this;
        var bookmarks = getBookmarks();
        current = bookmarks.children;
        
        current.forEach(function (current) {
            if (current.url) {
                bookExp.printBookmark(current);
            }
            else{
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
        this.container = document.getElementById('bookmark-dialog');
        this.template = App.templates['assets/templates/upload-file.hbs.html'];
    }

    BookmarkUploader.prototype.show = function showBookmarkUploader() {
        if (document.getElementsByTagName('bm-upload-file-dialog').length !== 0) return;
        document.getElementById('bookmark-dialog').innerHTML += this.template();
    };

    BookmarkUploader.prototype.remove = function hideBookmarkUploader() {
        var dialog = document.getElementsByTagName('bm-upload-file-dialog');
        this.container.removeChild(dialog[0]);
    };

    /* Bookmark create */
    function BookmarkCreate() {
      this.container = document.getElementById('bookmark-dialog');
      this.template = App.templates['assets/templates/bm-create.hbs.html'];
    }

    BookmarkCreate.prototype.show = function showBookmarkCreate() {
      if(document.getElementsByTagName('bm-create-dialog').length !== 0) return;
      document.getElementById('bookmark-dialog').innerHTML += this.template();
    };

    BookmarkCreate.prototype.remove = function hideBookmarkCreate() {
      var dialog = document.getElementsByTagName('bm-create-dialog');
      this.container.removeChild(dialog[0]);
    };

    function BookmarkEdit () {
        this.container = document.getElementById('bookmark-dialog');
        this.template = App.templates['assets/templates/bm-edit.hbs.html'];
    }

    BookmarkEdit.prototype.show = function showBookmarkEdit() {
        console.log(this.parent);
        if(document.getElementsByTagName('bm-edit-dialog').length !== 0) return;
        document.getElementById('bookmark-dialog').innerHTML += this.template();
    };

    BookmarkEdit.prototype.remove = function hideBookmarkEdit() {
        var dialog = document.getElementsByTagName('bm-edit-dialog');
        this.container.removeChild(dialog[0]);
    };


})(window);
