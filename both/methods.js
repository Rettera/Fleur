Meteor.methods({ 
    insertNote(title, text) { 
        Notes.insert({
            ownerId: this.userId,
            title: titleVal,
            text: textVal,
            createdAt: new Date(),
         });
    },
    removeNote(noteId){
        Notes.remove({_id: noteId});

    }
});