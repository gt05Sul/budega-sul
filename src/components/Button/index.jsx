import './button.css';

export default function Button({ children, ...props }) {
    return (
        <>
            <button type={props.type} className={props.className}>
                {children}
            </button>
        </>
    );
}

/* props do button
    - children (Cadastrar, Login, Limpar, etc.)
    - tipo (submit, button, reset)
    - class (sucesso, alerta, erro)
*/
