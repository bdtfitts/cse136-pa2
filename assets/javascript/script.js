(function () {

    var App = this['App'] || {};
    
    var BookmarkManager = {};

    BookmarkManager.showBookmarks = function showBookmarks() {
        return 'foo';
    };
    
    App.bookmarkManager = BookmarkManager;
    
    return App;
})();
