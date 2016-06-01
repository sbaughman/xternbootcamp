$(document).foundation();

var MegaRoster = {
  init: function() {
    this.handleFormSubmit();
  },
  handleFormSubmit: function() {
    document.querySelector('form').onsubmit = function(ev) {
      var listItem = MegaRoster.createListItem(ev.target);
      var list = document.querySelector('#roster');
      list.insertBefore(listItem, list.firstChild);
      ev.target.reset();
      ev.preventDefault();
    };
  },
  createListItem: function(form) {
    var name = form.name.value;
    var item = document.createElement('li');
    item.innerHTML += name;
    return item;
  }

};

MegaRoster.init();
