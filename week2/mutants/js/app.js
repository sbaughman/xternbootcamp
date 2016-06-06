$(document).foundation();


var mutantApp = {

  init: function() {
    this.list = $('#mutant_list');
    this.setupTemplates();
    this.setupEventListeners();
  },

  setupTemplates: function() {
    this.listItem = $('.mutant.template')
                    .removeClass('template')
                    .removeClass('hide')
                    .detach();
  },

  setupEventListeners: function() {
    var doc = $(document);
    doc.on('click', 'a[data-get-mutants="true"]', this.getAllMutants.bind(this));
  },

  getAllMutants: function(ev) {
    ev.preventDefault();
    $.ajax({
      url: $(ev.currentTarget).attr('href'),
      method: 'get',
      context: this,
      success: function(data) {
        $.each(data, function(i, mutant) {
          this.createListItem(mutant);
        }.bind(this));
      },
    })
  },

  createListItem: function(mutant) {
    var mutantItem = this.listItem.clone();
    mutantItem.find('.mutant-name').text('Name: ' + mutant.mutant_name);
    mutantItem.find('.mutant-real-name').text('Real Name: ' + mutant.real_name);
    mutantItem.find('.mutant-power').text('Power: ' + mutant.power);
    this.list.append(mutantItem);
  },

};

mutantApp.init();
