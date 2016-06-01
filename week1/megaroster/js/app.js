$(document).foundation();

var MegaRoster = {
  init: function() {
    this.handleFormSubmit();
    this.deleteItem();
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
    var listItem = document.createElement('li');
    var remove = document.createElement('a');
    remove.style.color = "red";
    remove.href = "#";
    remove.innerText = "Delete";
    remove.onclick = function(ev){
      MegaRoster.deleteItem(ev.target);
    };
    listItem.innerText += name;
    listItem.appendChild(remove);
    return listItem;
  },
  deleteItem: function(target) {
    if (target) {
      var li = target.parentElement;
      li.parentElement.removeChild(li);
    }
  }

};

MegaRoster.init();
