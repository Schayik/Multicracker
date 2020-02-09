import React from "react"

function SvgComponent(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 60 60" {...props}>
      <path
        fill="#FFF"
        d="M29.5 0C40.822 0 50 9.168 50 20.476 50 31.71 43.497 44.7 30.578 59.51a1.431 1.431 0 01-2.156 0C15.503 44.7 9 31.71 9 20.476 9 9.168 18.178 0 29.5 0zm0 2.857c-9.742 0-17.64 7.888-17.64 17.62 0 10.006 5.736 21.854 17.285 35.489l.355.416.355-.416c11.393-13.451 17.128-25.163 17.281-35.083l.004-.407c0-9.73-7.898-17.619-17.64-17.619zm0 7.143C35.299 10 40 14.925 40 21s-4.701 11-10.5 11S19 27.075 19 21s4.701-11 10.5-11zm0 2.87c-4.286 0-7.76 3.64-7.76 8.13s3.474 8.13 7.76 8.13 7.76-3.64 7.76-8.13-3.474-8.13-7.76-8.13z"
      />
    </svg>
  )
}

export default SvgComponent