import { useNotesContext } from "../hooks/useNotesContext"
import { useAuthContext } from "../hooks/useAuthContext"

const NoteDetails = ({note}) => {
    const {dispatch} = useNotesContext()
    const { user} = useAuthContext()

    const handleClick = async() => {
        if(!user){
            return
        }
        const response = await fetch('/api/notes/' + note._id, {
            method: 'DELETE',
            headers: {
                'Authorization' :`Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type:'DELETE_NOTE', payload:json})
        }
    }
    return (
        <div>
        <div className="note-details">
            <h4>{note.title}</h4>
            <hr/>
            <br/>
            <p><strong>Content: </strong>{note.content}</p>
            <p>{note.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
        </div>
    )
}

export default NoteDetails