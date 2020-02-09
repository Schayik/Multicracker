import React from "react"

function SvgComponent(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 60 45" {...props}>
      <path
        fill="#129D51"
        d="M50.952 0C55.95 0 60 4.072 60 9.096v26.808C60 40.928 55.95 45 50.952 45H9.048C4.05 45 0 40.928 0 35.904V9.096C0 4.072 4.05 0 9.048 0zM21.636 25.643L5.994 41.319a6.137 6.137 0 003.054.809h41.904a6.137 6.137 0 003.065-.815L38.904 26.187l-1.626 1.808a9.04 9.04 0 01-.71.706c-3.662 3.26-9.253 3.017-12.619-.498L23.761 28l-2.125-2.357zM3.778 5.829a6.219 6.219 0 00-.92 3.267v26.808c0 1.294.392 2.496 1.065 3.492l15.82-15.854zm52.816.7L40.788 24.093l15.29 15.302a6.213 6.213 0 001.06-3.263l.005-.228V9.096a6.23 6.23 0 00-.55-2.567zm-5.642-3.657H9.048c-1.194 0-2.308.34-3.254.928l20.1 22.302c2.287 2.536 6.21 2.751 8.763.48.114-.102.224-.208.33-.317l.156-.167L54.817 4.234a6.144 6.144 0 00-3.865-1.362z"
      />
    </svg>
  )
}

export default SvgComponent