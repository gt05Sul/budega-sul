import './logo.css';

export default function Logo({ children }) {
    return (
        <div className="logo">
            <div>
                <span>Budega </span>Sul
            </div>
            { children }
        </div>
    );
}
