export default function List(props) {
    return (
        <ul className="list" style={{ listStyle: 'none', padding: 0 }}>
            {props.list.map((item, index) => (
                <li className="list-item" style={{ marginBottom: '1rem' }}>
                    <div className="list-item__topic" style={{ fontWeight: 'bold' }}>{index + 1}. {item.topic}</div>
                    <div className="list-item__content">{item.content}</div>
                </li>
            ))}
        </ul>
    )
}