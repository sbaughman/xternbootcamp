$(document).foundation();

BasicForm = {
  init: function() {
    this.handleFormSubmit();
  },
  handleFormSubmit: function(){
    document.querySelector('form').onsubmit = function(event) {
      var list = BasicForm.createList(event.target);
      var details = document.querySelector('.details');
      details.appendChild(list);
      event.target.reset();
      event.preventDefault();
    };
  },
  createList: function(form) {
    var list = document.createElement('dl');
    list.innerHTML += '<dt>Name:</dt>';
    list.innerHTML += '<dd>' + form.firstName.value + '</dd>';
    list.innerHTML += '<dt>Hair Color:</dt>';
    list.innerHTML += '<dd style="color:'+form.hairColor.value+'">' + form.hairColor.value + '</dd>';
    list.innerHTML += '<dt>Age:</dt>';
    list.innerHTML += '<dd>' + form.age.value + '</dd>';
    list.innerHTML += '<dt>Birthplace:</dt>';
    list.innerHTML += '<dd>' + form.birthplace.value + '</dd>';
    return list;
  }
};

BasicForm.init();
