import './article.css';

export default function Article({ children, ...props }) {
    return (
        <article id={props.id} className={props.className}>
            { children }
        </article>
    );
}
