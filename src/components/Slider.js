import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';
export default function Slider() {
    return (
        <div>
            <div>
                <button><FontAwesomeIcon icon={icon.faLessThan} size='2xl'/></button>
                <button><FontAwesomeIcon icon={icon.faGreaterThan} size='2xl'/></button>
            </div>
        </div>
    )
}
