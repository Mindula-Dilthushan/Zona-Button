/**
 *
 * App Name     :   Zona Button
 * App Author   :   Mindula Dilthushan Manamperi
 * Author Email :   minduladilthushan1@gmail.com
 *
 */
import React from "react";

export default function ZonaButton({
                                       BTN_NAME,
                                       ON_CLICK,
                                       BG_COLOR,
                                       FONT_SIZE,
                                       FONT_FAMILY,
                                       FONT_STYLE,
                                       FONT_WEIGHT,
                                       BORDER,
                                       BORDER_RADIUS,
                                       COLOR
                                   }) {

    const CONTAINER = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    };

    return (
        <div>
            <button style={{
                CONTAINER,
                backgroundColor: BG_COLOR,
                fontSize: FONT_SIZE,
                fontFamily: FONT_FAMILY,
                fontStyle: FONT_STYLE,
                fontWeight: FONT_WEIGHT,
                border: BORDER,
                borderRadius: BORDER_RADIUS,
                color: COLOR,

            }} onClick={ON_CLICK}>
                {BTN_NAME}
            </button>
        </div>
    )
}
