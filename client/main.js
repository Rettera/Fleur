
Template.form_new_note.events({ 
  "submit .js-new-note"(event,instance) { 
    event.preventDefault();

     const titleVal = event.target.title.value;
     const textVal = event.target.text.value;

    Meteor.call('insertNote', titleVal, textVal);

     event.target.title.value = "";
     event.target.text.value = "";
  } 
}); 

Template.list_note.helpers({
  notes() {
    return Notes.find({ownerId: Meteor.userId()}).fetch();
  }
});

Template.single_note.events({ 
  'click .js-edit-note': function(event, instance) { 
     

     Modal.show('modal_edit_note', instance.data);
  } 
}); 
Template.modal_edit_note.events({ 
  "submit .js-edit-note"(event,instance) { 
    event.preventDefault();
    const idNote = instance.data.note._id;
    Notes.update({_id: idNote},{$set: {
      title: event.target.title.value,
      text: event.target.text.value
    }
    });
    Modal.hide();
  }, 
  "click .js-delete-note" (event, instance) {
  Meteor.call('removeNote', instance.data.note._id);
  Modal.hide();
  }
}); 

Template.accueil.events({ 
  'click .js-logout': function(event, instance) { 
     

     Meteor.logout();
  } 
});