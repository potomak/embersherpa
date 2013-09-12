Ember.TEMPLATES["components/canvas-file"] = Ember.Handlebars.compile("<div class=\"thumbnail\" {{action 'start'}}>\n  <img {{bindAttr src=src}} class=\"preview\"/>\n  <img class=\"shadow hide\"/>\n  <canvas class=\"hide\"></canvas>\n</div>\n<input type=\"file\" class=\"hide\" id=\"imageField\">\n<div>\n  <button class=\"btn btn-primary\" {{action 'start'}}>{{yield}}</button>\n</div>");

Ember.TEMPLATES["photo"] = Ember.Handlebars.compile("<div class=\"container\">\n  <div class=\"row preview\">\n    <div class=\"col-md-4\">\n      <img {{bindAttr src=image}} class=\"thumbnail pull-right\" />\n    </div>\n    <div class=\"col-md-8\">\n      <h2>{{title}}</h2>\n      <p>{{description}}</p>  \n    </div>\n  </div>\n  <div class=\"row\">\n    {{outlet}}\n  </div>\n</div>");

Ember.TEMPLATES["photo/edit"] = Ember.Handlebars.compile("{{#with controllers.photo.content}}\n<form class=\"form-horizontal\">\n  <fieldset>\n    <legend>Edit photo</legend>\n    {{partial 'photo/form'}}\n  </fieldset>\n</form>\n{{/with}}\n<div class=\"btn-group\">\n  <button class=\"btn btn-large btn-primary\" {{action 'update' controllers.photo.content}}>Update</button>\n  <button class=\"btn btn-large btn-danger\" {{action 'cancel' controllers.photo.content}}>Cancel</button>\n</div>");

Ember.TEMPLATES["photo/form"] = Ember.Handlebars.compile("<div class=\"form-group\">\n  <label class=\"control-label col-lg-2\" for=\"imageField\">Image</label>\n  <div class=\"col-lg-10\">\n    {{#canvas-file width=250 height=250 value=image}}Upload image{{/canvas-file}}\n  </div>\n</div>\n<div class=\"form-group\">\n  <label class=\"control-label col-lg-2\" for=\"inputTitle\">Title</label>\n  <div class=\"col-lg-10\">\n    {{view Ember.TextField valueBinding=title id=\"inputTitle\" classNames=\"form-control\"}}\n  </div>\n</div>\n<div class=\"form-group\">\n  <label class=\"control-label col-lg-2\" for=\"textareaDescription\">Description</label>\n  <div class=\"col-lg-10\">\n    {{view Ember.TextArea valueBinding=description classNames=\"form-control\" id=\"textareaDescription\"}}\n  </div>\n</div>\n<input type=\"hidden\" {{bindAttr value=guid}} id=\"guid\"/>");

Ember.TEMPLATES["photos"] = Ember.Handlebars.compile("{{#if isNewOpen}}\n  {{outlet}}\n{{else}}\n  <button class=\"btn btn-large btn-primary new\" {{action 'goToNewPhoto'}}>New photo</button>\n  <table class=\"table table-striped\">\n    <tbody>\n    <tr>\n      <th>Image</th>\n      <th>Title</th>\n      <th>Description</th>\n      <th>Actions</th>\n    </tr>\n    {{#each content}}\n      <tr>\n        <td {{action 'goToPhoto' this}}><img class=\"thumbnail\" {{bindAttr src=thumbnail}} /></td>\n        <td {{action 'goToPhoto' this}}>{{title}}</td>\n        <td {{action 'goToPhoto' this}}>{{description}}</td>\n        <td>\n          <span class=\"edit glyphicon glyphicon-edit\" {{action 'edit' this}}></span>\n          <span class=\"remove glyphicon glyphicon-remove-circle\" {{action 'remove' this}}></span>\n        </td>\n      </tr>\n    {{/each}}\n    </tbody>\n  </table>\n{{/if}}");

Ember.TEMPLATES["photos/new"] = Ember.Handlebars.compile("<form class=\"form-horizontal\" role=\"form\">\n  <fieldset>\n    <legend>New photo</legend>\n    {{partial 'photo/form'}}\n  </fieldset>\n</form>\n<div class=\"btn-group\">\n  <button class=\"btn btn-large btn-primary\" {{action 'create' content}}>Create</button>\n  <button class=\"btn btn-large btn-danger\" {{action 'cancel' content}}>Cancel</button>\n</div>");