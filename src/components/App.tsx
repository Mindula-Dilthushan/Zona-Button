/**
 *
 * App Name     :   Zona Button
 * App Author   :   Mindula Dilthushan Manamperi
 * Author Email :   minduladilthushan1@gmail.com
 *
 */
// @ts-ignore
import React from 'react'
// @ts-ignore
import { MouseEvent } from 'react'

//types of cursor ------------------------------------------------------------------------------------------------------
const cursorTypes = {
  default: 'auto',
  pointer: 'pointer',
  text: 'text',
  move: 'move',
  wait: 'wait',
  progress: 'progress',
  help: 'help',
  'zoom-in': 'zoom-in',
  'zoom-out': 'zoom-out',
}

//types of bg colors ---------------------------------------------------------------------------------------------------
const colors = {
  RED: '#ff0000',
  BLACK: '#000000',
  WHITE: '#ffffff',
  BLUE: '#0059ff',
  SILVER: '#C0C0C0',
  GRAY: '#808080',
  MAROON: '#800000',
  YELLOW: '#FFFF00',
  OLIVE: '#808000',
  LIME: '#00FF00',
  GREEN: '#008000',
  AQUA: '#00FFFF',
  NAVY: '#000080',
  PURPLE: '#800080',
  DESIRE: '#EB3B5A',
}

//type of font family --------------------------------------------------------------------------------------------------
const fontFamily = {
  'Times New Roman': '"Times New Roman", Times, serif',
}

//type of button -------------------------------------------------------------------------------------------------------
const typeOfButton = {
  button: '"button"',
  submit: '"submit"',
  reset: '"reset"',
}

const typeOfBorderRadius = {
  NONE: 'none',
}

type Props = {
  NAME?: string
  BG_COLOR?: keyof typeof colors | string
  COLOR?: keyof typeof colors | string
  CURSOR?: keyof typeof cursorTypes | string
  FONT_SIZE?: string
  FONT_FAMILY?: keyof typeof fontFamily | string
  TYPES?: keyof typeof typeOfButton
  BORDER?: string
  BORDER_RADIUS?: keyof typeof typeOfBorderRadius | string
  ON_CLICK?: (event: MouseEvent<HTMLButtonElement>) => void
  DISABLE?: boolean
  ID?: string
  VALUE?: string
  WIDTH?: string
  HEIGHT?: string
}

const Zona = ({
  NAME = 'ZONA',
  BG_COLOR = 'WHITE',
  COLOR = '#000000',
  CURSOR = 'pointer',
  FONT_SIZE = '15px',
  FONT_FAMILY = 'Poppins',
  TYPES = 'button',
  BORDER = '2px solid black',
  BORDER_RADIUS = '30px',
  ON_CLICK,
  DISABLE,
  ID,
  VALUE,
  HEIGHT = '100%',
  WIDTH = '100%',
}: Props) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <button
        type={TYPES}
        disabled={DISABLE}
        onClick={ON_CLICK}
        id={ID}
        value={VALUE}
        style={{
          width: WIDTH,
          height: HEIGHT,
          cursor: CURSOR,
          backgroundColor: BG_COLOR,
          color: COLOR,
          fontSize: FONT_SIZE,
          fontFamily: FONT_FAMILY,
          border: BORDER,
          borderRadius: BORDER_RADIUS,
        }}
      >
        {NAME}
      </button>
    </div>
  )
}
export default Zona
