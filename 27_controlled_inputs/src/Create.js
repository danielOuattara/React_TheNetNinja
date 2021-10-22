import { useState } from "react";
const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");


    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
                <label htmlFor="">Blog title :</label>
                <input 
                    type="text"
                    name="" 
                    id="" 
                    required
                    placeholder="Enter your name"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label htmlFor="">Blog body :</label>
                <textarea 
                    name="" 
                    id="" 
                    cols="30" 
                    rows="5"
                    required
                    value={body}
                    onChange={(event) => setBody(event.target.value)} >
                </textarea>

                <label htmlFor="">Blog author :</label>
                <select 
                    name="" 
                    id=""
                    onChange={(event) => setAuthor(event.target.value)}>
                        <option value=""> Choose an author...</option>
                        <option value="mario"> Mario</option>
                        <option value="luigi"> Luigi</option>
                        <option value="stella"> Stella</option>
                        <option value="danny boy"> Danny Boy</option>
                </select>
                <p>{author}</p>

                <button type="submit">Add blog</button>
            </form>
        </div>
    );
}

export default Create;