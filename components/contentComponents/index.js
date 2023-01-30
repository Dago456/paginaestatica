const ClienteComponent = ({ color, setColor }) => {

    return (
        <>
            <button
                onClick={() => setColor(false)}
                style={{
                    padding: '5px', 
                    background: color ? 'blue' : 'red'
                }}
            >
                entrar
            </button>
        </>
    );
}

export default ClienteComponent;