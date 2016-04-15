this["App"] = this["App"] || {};
this["App"]["templates"] = this["App"]["templates"] || {};

this["App"]["templates"]["assets/templates/basic-dialog.hbs.html"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- TODO Create custom element -->\n<div class=\"dialog\">\n    <!-- TODO close button -->\n    <bm-dialog-close><span class=\"fa fa-times\"></span></bm-dialog-close>\n    <!-- TODO Widget title if needed -->\n    <bm-dialog-body class=\"drag-and-drop-container\">\n        <!-- TODO Content for dialog -->\n    </bm-dialog-body>\n</div>\n";
},"useData":true});

this["App"]["templates"]["assets/templates/upload-file.hbs.html"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<bm-upload-file-dialog class=\"dialog\">\n    <bm-dialog-close><span onclick=\"App.bookMarkUploader.remove()\" class=\"fa fa-times\"></span></bm-dialog-close>\n    <bm-dialog-body class=\"drag-and-drop-container\">\n        <div class=\"drag-and-drop-inner\">\n            <div class=\"text-center\">\n                <span class=\"fa fa-cloud-upload\"></span>\n                <p>drag and drop bookmark file here</p>\n                <a href=\"javascript: void(0);\">Open file explorer</a>\n            </div>\n        </div>\n    </bm-dialog-body>\n</bm-upload-file-dialog>";
},"useData":true});