import { useState } from "react";
import { useNotesContext } from "../hooks/useNotesContext";
import { useAuthContext } from "../hooks/useAuthContext";

const NoteForm = (props) => {
    const { dispatch } = useNotesContext()
    const { user } = useAuthContext()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!user){
            setError('You must be logged in')
            return
        }

        const note= {title, content}

        const response= await fetch('/api/notes', {
            method:'POST',
            body:JSON.stringify(note),
            headers: {
                'Content-type':'application/json',
                'Authorization' :`Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }

        if(response.ok){
            setTitle('')
            setContent('')
            setError(null)
            console.log('new note added', json)
            dispatch({type: 'CREATE_NOTE', payload:json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit} style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>Add a new Note</h3>

            <label>Note Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label>Content:</label>
            <input 
                type="text"
                onChange={(e) => setContent(e.target.value)}
                value={content}
            />
            {/* <textarea class="form-control" name="postbody" cols="40" rows="5"
            onChange={(e) => setContent(e.target.value)}
                value={content}></textarea> */}

            <button type="submit">Add Note</button>
        </form>
    )
}

export default NoteForm