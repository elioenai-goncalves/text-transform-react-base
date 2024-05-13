const EventAlert = () => {
    alert(`A label desse botão é ${Button.defaultProps.label}`)
}

const Button = (props) => {
    return <button onClick={EventAlert}>{props.label}</button>
}

Button.defaultProps = {
    label: 'Abrir o projeto'
}

export default Button