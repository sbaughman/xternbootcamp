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
    doc.on('click', 'a[data-delete-mutant="true"]', this.deleteMutant);
    doc.on('click', 'a[data-add-mutant="true"]', this.addMutant.bind(this));
  },

  getAllMutants: function(ev) {
    ev.preventDefault();
    $.ajax({
      url: $(ev.currentTarget).attr('href'),
      method: 'get',
      context: this,
      success: function(data) {
        $.each(data, function(i, mutant) {
          this.list.append(this.createListItem(mutant));
        }.bind(this));
      },
    })
  },

  addMutant: function(ev) {
    ev.preventDefault();
    var form = document.getElementById('add_mutant');
    var mutant = {
      power: form.mutantPower.value,
      real_name: form.mutantRealName.value,
      mutant_name: form.mutantName.value
    };
    $.ajax({
      url: $(ev.currentTarget).attr('href'),
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      contentType: "application/json",
      data: JSON.stringify(mutant),
    });
    this.list.prepend(this.createListItem(mutant));
  },

  deleteMutant: function(ev) {
    ev.preventDefault();
    $.ajax({
      url: $(this).attr('href') + '/' + $(this).attr('data-id'),
      method: 'delete',
      success: function() {
        $(ev.currentTarget).closest('li').remove();
      }
    })
  },

  createListItem: function(mutant) {
    var mutantItem = this.listItem.clone();
    mutantItem.find('.mutant-name').text('Name: ' + mutant.mutant_name);
    mutantItem.find('.mutant-real-name').text('Real Name: ' + mutant.real_name);
    mutantItem.find('.mutant-power').text('Power: ' + mutant.power);
    mutantItem.find('.mutant-delete').attr('data-id', mutant.id);
    mutantItem.find('.mutant-edit').attr('data-id', mutant.id);
    return mutantItem;
  },

};

mutantApp.init();
