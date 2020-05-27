import React, { Component } from 'react'
import Notes from './Components/Notes/Notes'
import './App.css'





export class App extends Component {
  
  constructor(){
    super();
    this.state = {
      note: {
        title: '',
        body: '',
        key: ''
      },
      notes: []   
    }
  }
  


  titleHandler = (e) => {
    const title = this.state.note[0];
    //console.log(this.state.note[0]);
    console.log(this.state.note.title);
    this.setState({
      note: {
        title : e.target.value,
        body: this.state.note.body,
        key: Date.now()
      }    
    })
  }


  bodyHandler = (e) => {
    const body = this.state.note[1];
    //console.log(this.state.note[1]);
    console.log(this.state.note.body);
    this.setState({
      note: {
        title: this.state.note.title,
        body: e.target.value,
        key: Date.now()
      }
    })
  }

  createNote = (e) => {
    e.preventDefault();
    const newNote = this.state.note;
    console.log(this.state.note);
    if(this.state.note.title !== '' && this.state.note.body !== '') {
        const notes = [...this.state.notes, newNote];  
    this.setState({
        notes: notes,
        note: {
          title: '',
          body: '',
          key: ''
        }
      })

    } 
  }
  
  deleteNote = (key) => {
    const filteredNotes = this.state.notes.filter(note =>
      note.key !== key);
    this.setState({
        notes: filteredNotes
      })
    } 
  

  editTitle = (text, key) => {
    const notes = this.state.notes;
    notes.map(note => {
      if (note.key === key) {
        note.title = text;
      }
    this.setState({
      notes: notes
    })
    })
  }


  editBody = (text, key) => {
    const notes = this.state.notes;
    notes.map(note => {
      if (note.key === key) {
        note.body = text;
      }
    this.setState({
      notes: notes
    })
    })
  }

timeStamp = () => {
  const now = Date.now();
  return now;
}


  render() {
    return (
      <div className="App">
        <header className="header">
          <h3 className="title">Notes App</h3>
        </header>
        <section className="noteform">
          <h3>Create New Notes</h3>
          <div className="form-group">
            <label htmlForm="noteform-title">Title</label>
            <input 
              type="text" 
              id="noteform-title" 
              name="noteform-title" 
              value={this.state.note.title}
              onChange={(e) => this.titleHandler(e)}
            />
          </div>
          <div className="form-group">
            <label htmlForm="noteform-note">Note</label>
            <textarea 
              id="noteform-note"
              name="noteform-note" 
              value={this.state.note.body}
              onChange={(e) => this.bodyHandler(e)}></textarea>
          </div>
          <button onClick={(e) => this.createNote(e)}>Create Note</button>
        </section>
        
        <main>
            <Notes 
            notes={this.state.notes}
            deleteNote={this.deleteNote}
            editTitle={this.editTitle}
            editBody={this.editBody}
            timeStamp={this.timeStamp}
            />
        </main>
      </div>
    )
  }
}

export default App;
