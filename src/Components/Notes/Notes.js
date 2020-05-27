import React from 'react';
import './Notes.css';


function notes (props) {

        return (
            <section className="notes-wrapper">
                <h3 className="noteHeader">Notes</h3>
                <div className="notes">
                    {props.notes.map(note => {
                        return (
                            <div className="note" key={note.key}>
                                    
                                    <button 
                                    id="delete"
                                    onClick={() => 
                                        props.deleteNote(note.key)
                                    }
                                    >X</button>
                                    <h3 id="title">
                                        <input type="text" id={note.key} value={note.title} className="titleInput" onChange={(e)=>{
                                        props.editTitle(e.target.value, note.key)}}/>
                                    </h3>

                                    <h2 id="body">       
                                        <textarea id={note.key} value={note.body} className="bodyInput" onChange={(e)=>{
                                        props.editBody(e.target.value, note.key)}}/>
                                    </h2>


                                    <p id= "timestamp">{
                                        new Intl.DateTimeFormat('en-US', {year: 'numeric',
                                        month: '2-digit', day: '2-digit', 
                                        hour: '2-digit', minute: '2-digit'}).format(Date.now())}
                                    </p>
                            </div>
                        );
                    })}
                </div>
            </section>
        )
    }

export default notes;
