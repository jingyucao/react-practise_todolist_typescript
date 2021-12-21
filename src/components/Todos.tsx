// if we hold cmd and click FC, we will see that it stands for FunctionComponent
// it makes it clear that its a function and it will act as a functional component
// React.FC is already a generic type! (泛型)

// Summary: we build functional component by using React.FC, and then
//          we use the angle brackets <> to define our own props

const Todos: React.FC<{items:string[]}> = (props) => {
    return (<ul>
        {props.items.map(item =><li key={item}>{item}</li>)}
    </ul>)
}

export default Todos;
