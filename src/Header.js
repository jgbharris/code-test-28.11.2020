import { propTypes } from "react-json-pretty";

export default function Header (props) {

    return (
        <div class="header" id="myHeader">
            <h2>{props.title}</h2>
        </div>

    )

}