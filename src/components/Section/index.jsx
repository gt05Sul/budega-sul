import './section.css';

export default function Section({ children, ...props }) {
    return (
        <section id={props.id} className={props.className}>
            { children }
        </section>
    );
}
