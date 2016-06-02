$(document).foundation();

var MegaRoster = {
  counter: 1,
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
    var listItem = document.createElement('li');
    listItem.id = this.counter;
    var buttonDiv = this.createLinks();
    var nameDiv = document.createElement('div');
    nameDiv.className += "name";
    nameDiv.innerText += name;
    listItem.appendChild(nameDiv);
    listItem.appendChild(buttonDiv);
    this.counter++;
    return listItem;
  },
  createLinks: function() {
    var linkDiv = document.createElement('div');
    linkDiv.className += 'links';
    linkDiv.appendChild(this.createPromoteLink());
    linkDiv.appendChild(this.createDeleteLink());
    return linkDiv;
  },
  createDeleteLink: function() {
    var remove = document.createElement('a');
    remove.style.color = "red";
    remove.href = "#";
    remove.innerText = "Delete";
    remove.id = this.counter;
    remove.onclick = function(ev){
      ev.preventDefault();
      MegaRoster.deleteItem(ev.target);
    };
    return remove;
  },
  createPromoteLink: function() {
    var promote = document.createElement('a');
    promote.href = "#";
    promote.innerText = "Promote";
    promote.id = this.counter;
    promote.onclick = function(ev) {
      ev.preventDefault();
      MegaRoster.promoteItem(ev.target);
    };
    return promote;
  },
  deleteItem: function(item) {
    if (item) {
      var li = document.getElementById(item.id);
      li.parentElement.removeChild(li);
    }
  },
  promoteItem: function(item) {
    if (item) {
      var li = document.getElementById(item.id);
      if (item.innerText === "Promote") {
        li.style.background = "#eeffee";
        item.innerText = "Demote";
      } else {
        li.style.background = "#fff";
        item.innerText = "Promote";
      }
    }
  }
};

MegaRoster.init();
