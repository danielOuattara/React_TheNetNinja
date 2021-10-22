import { useState } from "react";
const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit =(event) => {

        event.preventDefault();
        const blog = { title, body, author};
        const url = "http://localhost:8000/blogs";
        setIsPending(true);

        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("New blog added !");
            setIsPending(false);
        })
    }


    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
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
                {!isPending && <button type="submit">Add blog</button>}
                {isPending && <button type="submit">Adding blog</button>}
                {/* NExt: User redirect after submetting the form */}
            </form>
        </div>
    );
}

export default Create;