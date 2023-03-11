import React from "react";

export default function Form(props) {

    const [form, setForm] = React.useState({
        topic: '',
        content: ''
    })

    const handleChange = (value, field) => {
        setForm({ ...form, [field]: value }) // keep unchanged value and update changed input value
    }

    const handleSubmit = (event) => {
        event.preventDefault() // avoid app reload when using form submit
        props.onSubmit(form)
        setForm({ topic: '', content: '' }) // clean state
    }

    return (
        <form className="form">
            <div className="form-item" style={{ marginTop: '0.5rem' }}>
                <label for="topic">Topic:</label><br />
                <input
                    id="topic"
                    type="text"
                    style={{ width: '100%' }}
                    value={form.topic}
                    onChange={(event) => handleChange(event.target.value, 'topic')}
                />
            </div>
            <div className="form-item" style={{ marginTop: '0.5rem' }}>
                <label for="content">Content:</label><br />
                <input
                    id="content"
                    type="text"
                    style={{ width: '100%' }}
                    value={form.content}
                    onChange={(event) => handleChange(event.target.value, 'content')}
                />
            </div>
            {/*  */}
            <div className="form-item form-item__button" style={{ marginTop: '1rem', textAlign: 'right' }}>
                <button onClick={(event) => handleSubmit(event)}>Submit</button>
            </div>
        </form >
    )
}