/**
 *
 * App Name     :   Zona Button
 * App Author   :   Mindula Dilthushan Manamperi
 * Author Email :   minduladilthushan1@gmail.com
 *
 */
import React from "react";
import ReactDOM from "react-dom";
import {ZonaButton} from "./src/lib/ZonaButton";

const App = () => {
    return(
        <div>
            <ZonaButton/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
