import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/doit-calendar">달력</Link>
                </li>
                <li>
                    <Link to="/doit-list">목록</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;