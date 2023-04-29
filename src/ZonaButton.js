/**
 *
 * App Name     :   Zona Button
 * App Author   :   Mindula Dilthushan Manamperi
 * Author Email :   minduladilthushan1@gmail.com
 *
 */
import React from "react";
import '../AxTheme.css';

const ZonaButton = ({
                        BTN_NAME,
                        ON_CLICK,
                        BG_COLOR,
                        FONT_SIZE,
                        FONT_FAMILY,
                        FONT_STYLE,
                        FONT_WEIGHT,
                        BORDER,
                        BORDER_RADIUS,
                        COLOR,
                    }) => {
    return (
        <div className={"CONTAINER w100 h100"}>
            <button
                className={"CONTAINER w100 h100 CURSOR_POINTER"}
                style={{
                    backgroundColor: BG_COLOR,
                    fontSize: FONT_SIZE,
                    fontFamily: FONT_FAMILY,
                    fontStyle: FONT_STYLE,
                    fontWeight: FONT_WEIGHT,
                    border: BORDER,
                    borderRadius: BORDER_RADIUS,
                    color: COLOR,

                }}
                onClick={ON_CLICK}
            >
                {BTN_NAME}
            </button>
        </div>
    )
}

export default ZonaButton;
