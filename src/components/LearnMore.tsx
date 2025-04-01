import {NavLink} from "react-router";
import '../styles/components/learnmore.scss'
export default function LearnMore(){
    return (
        <div className="learnmore">
            <NavLink to='/learn_more'>Learn More</NavLink>
        </div>
    )
}