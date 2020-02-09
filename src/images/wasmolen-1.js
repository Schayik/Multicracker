import React from "react"

function SvgComponent(props) {
  return (
    <svg width={720} height={250} viewBox="0 0 720 250" {...props}>
      <g fill="none">
        <path
          fill="#000"
          d="M262.5 150.5H301a1.5 1.5 0 011.5 1.5v16l-.007.144A1.5 1.5 0 01301 169.5h-38.5V200a1.5 1.5 0 01-1.5 1.5H61l-.144-.007A1.5 1.5 0 0159.5 200v-30.5H21a1.5 1.5 0 01-1.5-1.5v-16l.007-.144A1.5 1.5 0 0121 150.5h38.5v-61H21a1.5 1.5 0 01-1.5-1.5V72l.007-.144A1.5 1.5 0 0121 70.5h38.5V40a1.5 1.5 0 011.5-1.5h200l.144.007A1.5 1.5 0 01262.5 40v30.5H301a1.5 1.5 0 011.5 1.5v16l-.007.144A1.5 1.5 0 01301 89.5h-38.5v61zm-3-29h-197V152l-.007.144A1.5 1.5 0 0161 153.5H22.5v13H61l.144.007A1.5 1.5 0 0162.5 168v30.5h197V168l.007-.144A1.5 1.5 0 01261 166.5h38.5v-13H261l-.144-.007A1.5 1.5 0 01259.5 152v-30.5zm0-80h-197V72l-.007.144A1.5 1.5 0 0161 73.5H22.5v13H61l.144.007A1.5 1.5 0 0162.5 88v30.5h197V88l.007-.144A1.5 1.5 0 01261 86.5h38.5v-13H261l-.144-.007A1.5 1.5 0 01259.5 72V41.5zM125.41 242v-1.38h-3.14v-12.86h-.94l-3.64 2.32v1.58l2.92-1.86v10.82h-3.14V242h7.94zm7.9.16c1.627 0 2.863-.62 3.71-1.86.847-1.24 1.27-3.053 1.27-5.44 0-2.373-.423-4.177-1.27-5.41-.847-1.233-2.083-1.85-3.71-1.85-1.627 0-2.863.617-3.71 1.85s-1.27 3.043-1.27 5.43c0 2.387.423 4.197 1.27 5.43.847 1.233 2.083 1.85 3.71 1.85zm0-1.38c-1.133 0-1.97-.483-2.51-1.45-.54-.967-.81-2.457-.81-4.47s.27-3.493.81-4.44c.54-.947 1.377-1.42 2.51-1.42 1.147 0 1.987.473 2.52 1.42.533.947.8 2.427.8 4.44 0 2.027-.27 3.52-.81 4.48-.54.96-1.377 1.44-2.51 1.44zm12.4 1.38c1.627 0 2.863-.62 3.71-1.86.847-1.24 1.27-3.053 1.27-5.44 0-2.373-.423-4.177-1.27-5.41-.847-1.233-2.083-1.85-3.71-1.85-1.627 0-2.863.617-3.71 1.85s-1.27 3.043-1.27 5.43c0 2.387.423 4.197 1.27 5.43.847 1.233 2.083 1.85 3.71 1.85zm0-1.38c-1.133 0-1.97-.483-2.51-1.45-.54-.967-.81-2.457-.81-4.47s.27-3.493.81-4.44c.54-.947 1.377-1.42 2.51-1.42 1.147 0 1.987.473 2.52 1.42.533.947.8 2.427.8 4.44 0 2.027-.27 3.52-.81 4.48-.54.96-1.377 1.44-2.51 1.44zm12.4 1.38c1.627 0 2.863-.62 3.71-1.86.847-1.24 1.27-3.053 1.27-5.44 0-2.373-.423-4.177-1.27-5.41-.847-1.233-2.083-1.85-3.71-1.85-1.627 0-2.863.617-3.71 1.85s-1.27 3.043-1.27 5.43c0 2.387.423 4.197 1.27 5.43.847 1.233 2.083 1.85 3.71 1.85zm0-1.38c-1.133 0-1.97-.483-2.51-1.45-.54-.967-.81-2.457-.81-4.47s.27-3.493.81-4.44c.54-.947 1.377-1.42 2.51-1.42 1.147 0 1.987.473 2.52 1.42.533.947.8 2.427.8 4.44 0 2.027-.27 3.52-.81 4.48-.54.96-1.377 1.44-2.51 1.44zm15.2 1.22v-5.74c0-.987.243-1.767.73-2.34s1.157-.86 2.01-.86c.733 0 1.267.217 1.6.65.333.433.5 1.117.5 2.05V242h1.62v-5.74c0-.987.24-1.767.72-2.34s1.147-.86 2-.86c.733 0 1.263.213 1.59.64.327.427.49 1.113.49 2.06V242h1.62v-6.32c0-2.653-1.113-3.98-3.34-3.98-.747 0-1.417.177-2.01.53a3.483 3.483 0 00-1.35 1.43c-.24-.667-.613-1.16-1.12-1.48-.507-.32-1.16-.48-1.96-.48-.733 0-1.377.173-1.93.52-.553.347-.97.84-1.25 1.48l-.16-1.76h-1.54c.107.84.16 1.78.16 2.82V242h1.62zm17.98 0v-5.74c0-.987.243-1.767.73-2.34s1.157-.86 2.01-.86c.733 0 1.267.217 1.6.65.333.433.5 1.117.5 2.05V242h1.62v-5.74c0-.987.24-1.767.72-2.34s1.147-.86 2-.86c.733 0 1.263.213 1.59.64.327.427.49 1.113.49 2.06V242h1.62v-6.32c0-2.653-1.113-3.98-3.34-3.98-.747 0-1.417.177-2.01.53a3.483 3.483 0 00-1.35 1.43c-.24-.667-.613-1.16-1.12-1.48-.507-.32-1.16-.48-1.96-.48-.733 0-1.377.173-1.93.52-.553.347-.97.84-1.25 1.48l-.16-1.76h-1.54c.107.84.16 1.78.16 2.82V242h1.62z"
        />
        <path
          fill="#000"
          d="M260 169.5a.5.5 0 01.492.41l.008.09v49.418l.203.102a.537.537 0 01.074.915l-.074.045-.203.101V240a.5.5 0 01-.992.09l-.008-.09v-18.919l-6.723 3.362a.537.537 0 01-.77-.397l-.007-.083V220.5H69v3.463a.56.56 0 01-.025.163l-.032.077a.537.537 0 01-.63.276l-.09-.036-6.723-3.361V240a.5.5 0 01-.992.09L60.5 240v-19.418l-.203-.102a.537.537 0 01-.083-.91l.083-.05.203-.103V170a.5.5 0 01.992-.09l.008.09v48.917l6.723-3.36a.537.537 0 01.77.393l.007.087v3.463h183v-3.463c0-.267.195-.488.45-.53l.087-.007c.055 0 .11.009.163.025l.077.032 6.723 3.361V170a.5.5 0 01.5-.5zm-239-10a.5.5 0 010 1H1a.5.5 0 010-1zm30 0a.5.5 0 010 1H31a.5.5 0 010-1zm30 0a.5.5 0 010 1H61a.5.5 0 010-1zm30 0a.5.5 0 010 1H91a.5.5 0 010-1zm30 0a.5.5 0 010 1h-20a.5.5 0 010-1zm30 0a.5.5 0 010 1h-20a.5.5 0 010-1zm30 0a.5.5 0 010 1h-20a.5.5 0 010-1zm30 0a.5.5 0 010 1h-20a.5.5 0 010-1zm30 0a.5.5 0 010 1h-20a.5.5 0 010-1zm30 0a.5.5 0 010 1h-20a.5.5 0 010-1zm30 0a.5.5 0 010 1h-20a.5.5 0 010-1zm-300-80a.5.5 0 110 1H1a.5.5 0 110-1zm30 0a.5.5 0 110 1H31a.5.5 0 110-1zm30 0a.5.5 0 110 1H61a.5.5 0 110-1zm30 0a.5.5 0 010 1H91a.5.5 0 110-1zm30 0a.5.5 0 010 1h-20a.5.5 0 010-1zm30 0a.5.5 0 010 1h-20a.5.5 0 010-1zm30 0a.5.5 0 010 1h-20a.5.5 0 010-1zm30 0a.5.5 0 010 1h-20a.5.5 0 010-1zm30 0a.5.5 0 010 1h-20a.5.5 0 010-1zm30 0a.5.5 0 010 1h-20a.5.5 0 010-1zm30 0a.5.5 0 010 1h-20a.5.5 0 010-1zM8.6 22l3.62-10.24L15.8 22h2.1l5.04-14.24h-2.48l-3.64 10.7-3.62-10.7h-1.84l-3.7 10.62L4.1 7.76H1.48L6.5 22h2.1zm19.3.16c.733 0 1.387-.157 1.96-.47a3.244 3.244 0 001.32-1.31V22h2.46V11.9h-2.46v1.52a3.244 3.244 0 00-1.32-1.31c-.573-.313-1.227-.47-1.96-.47-.867 0-1.64.223-2.32.67-.68.447-1.21 1.073-1.59 1.88-.38.807-.57 1.73-.57 2.77s.187 1.953.56 2.74c.373.787.9 1.393 1.58 1.82.68.427 1.46.64 2.34.64zm.68-1.96c-.84 0-1.49-.28-1.95-.84-.46-.56-.69-1.36-.69-2.4 0-1.053.23-1.877.69-2.47.46-.593 1.103-.89 1.93-.89.84 0 1.487.287 1.94.86.453.573.68 1.393.68 2.46 0 1.04-.227 1.847-.68 2.42-.453.573-1.093.86-1.92.86zM39.24 22V7.28h-2.48V22h2.48zm6.84.16c1.293 0 2.313-.273 3.06-.82.747-.547 1.12-1.287 1.12-2.22 0-.76-.23-1.377-.69-1.85-.46-.473-1.19-.823-2.19-1.05l-1.72-.38c-.467-.12-.797-.267-.99-.44-.193-.173-.29-.407-.29-.7 0-.373.16-.667.48-.88.32-.213.767-.32 1.34-.32 1.067 0 2.107.373 3.12 1.12l.74-1.7a5.462 5.462 0 00-1.76-.95 6.594 6.594 0 00-2.08-.33c-.827 0-1.553.133-2.18.4-.627.267-1.113.637-1.46 1.11a2.687 2.687 0 00-.52 1.63c0 1.48.92 2.42 2.76 2.82l1.68.38c.547.133.933.29 1.16.47.227.18.34.423.34.73 0 .36-.163.64-.49.84-.327.2-.79.3-1.39.3-1.387 0-2.62-.4-3.7-1.2l-.7 1.76c1.08.853 2.533 1.28 4.36 1.28zm9.2-.16v-5.64c0-.853.2-1.523.6-2.01.4-.487.947-.73 1.64-.73.587 0 1.017.18 1.29.54.273.36.41.933.41 1.72V22h2.5v-5.64c0-.853.197-1.523.59-2.01.393-.487.937-.73 1.63-.73.6 0 1.03.177 1.29.53.26.353.39.93.39 1.73V22h2.5v-6.2c0-1.4-.28-2.443-.84-3.13-.56-.687-1.413-1.03-2.56-1.03a3.93 3.93 0 00-1.99.51c-.593.34-1.05.81-1.37 1.41-.467-1.28-1.473-1.92-3.02-1.92-.72 0-1.357.16-1.91.48-.553.32-.977.78-1.27 1.38l-.18-1.6h-2.34c.107.84.16 1.793.16 2.86V22h2.48zm20.48.16c1.013 0 1.907-.213 2.68-.64a4.387 4.387 0 001.79-1.83c.42-.793.63-1.723.63-2.79s-.21-1.997-.63-2.79a4.387 4.387 0 00-1.79-1.83c-.773-.427-1.667-.64-2.68-.64-1.027 0-1.93.213-2.71.64a4.371 4.371 0 00-1.8 1.83c-.42.793-.63 1.723-.63 2.79s.21 1.997.63 2.79a4.371 4.371 0 001.8 1.83c.78.427 1.683.64 2.71.64zm-.02-1.96c-.84 0-1.483-.277-1.93-.83-.447-.553-.67-1.377-.67-2.47 0-1.08.227-1.903.68-2.47.453-.567 1.1-.85 1.94-.85.827 0 1.467.283 1.92.85.453.567.68 1.39.68 2.47 0 1.093-.223 1.917-.67 2.47-.447.553-1.097.83-1.95.83zM85.9 22V7.28h-2.48V22h2.48zm7.9.16c.72 0 1.43-.117 2.13-.35.7-.233 1.29-.543 1.77-.93l-.72-1.72c-.947.72-1.973 1.08-3.08 1.08-.96 0-1.683-.257-2.17-.77-.487-.513-.757-1.31-.81-2.39h6.96v-.38c0-1.573-.403-2.81-1.21-3.71-.807-.9-1.903-1.35-3.29-1.35-.947 0-1.793.223-2.54.67a4.577 4.577 0 00-1.74 1.87c-.413.8-.62 1.713-.62 2.74 0 1.627.473 2.907 1.42 3.84.947.933 2.247 1.4 3.9 1.4zm1.9-6.42H91c.12-.747.39-1.317.81-1.71.42-.393.963-.59 1.63-.59.667 0 1.19.193 1.57.58.38.387.61.96.69 1.72zm7.18 6.26v-5.72c0-.8.233-1.443.7-1.93.467-.487 1.08-.73 1.84-.73.64 0 1.113.183 1.42.55.307.367.46.95.46 1.75V22h2.5v-6.2c0-2.773-1.207-4.16-3.62-4.16-.747 0-1.417.167-2.01.5a3.655 3.655 0 00-1.41 1.42l-.18-1.66h-2.34c.107.84.16 1.793.16 2.86V22h2.48zm10.94 2.68c.573-.573.98-1.147 1.22-1.72s.36-1.213.36-1.92V19.2h-2.8V22h1.28c-.093.573-.453 1.193-1.08 1.86l1.02.82zm20-2.68v-2.1h-3.1V7.76h-1.5l-3.96 2.4v2.3l2.9-1.74v9.18h-3.12V22h8.78zm11.1 0v-5.64c0-.853.2-1.523.6-2.01.4-.487.947-.73 1.64-.73.587 0 1.017.18 1.29.54.273.36.41.933.41 1.72V22h2.5v-5.64c0-.853.197-1.523.59-2.01.393-.487.937-.73 1.63-.73.6 0 1.03.177 1.29.53.26.353.39.93.39 1.73V22h2.5v-6.2c0-1.4-.28-2.443-.84-3.13-.56-.687-1.413-1.03-2.56-1.03a3.93 3.93 0 00-1.99.51c-.593.34-1.05.81-1.37 1.41-.467-1.28-1.473-1.92-3.02-1.92-.72 0-1.357.16-1.91.48-.553.32-.977.78-1.27 1.38l-.18-1.6h-2.34c.107.84.16 1.793.16 2.86V22h2.48zm20.66.16c.72 0 1.43-.117 2.13-.35.7-.233 1.29-.543 1.77-.93l-.72-1.72c-.947.72-1.973 1.08-3.08 1.08-.96 0-1.683-.257-2.17-.77-.487-.513-.757-1.31-.81-2.39h6.96v-.38c0-1.573-.403-2.81-1.21-3.71-.807-.9-1.903-1.35-3.29-1.35-.947 0-1.793.223-2.54.67a4.577 4.577 0 00-1.74 1.87c-.413.8-.62 1.713-.62 2.74 0 1.627.473 2.907 1.42 3.84.947.933 2.247 1.4 3.9 1.4zm1.9-6.42h-4.7c.12-.747.39-1.317.81-1.71.42-.393.963-.59 1.63-.59.667 0 1.19.193 1.57.58.38.387.61.96.69 1.72zm8.8 6.4c.627 0 1.16-.08 1.6-.24v-1.98c-.36.107-.693.16-1 .16-1.107 0-1.66-.593-1.66-1.78v-4.52h2.68V11.9h-2.68V8.6l-2.5.84v2.46h-1.94v1.88h1.94v4.64c0 1.2.307 2.12.92 2.76.613.64 1.493.96 2.64.96zm8.5.02c.72 0 1.43-.117 2.13-.35.7-.233 1.29-.543 1.77-.93l-.72-1.72c-.947.72-1.973 1.08-3.08 1.08-.96 0-1.683-.257-2.17-.77-.487-.513-.757-1.31-.81-2.39h6.96v-.38c0-1.573-.403-2.81-1.21-3.71-.807-.9-1.903-1.35-3.29-1.35-.947 0-1.793.223-2.54.67a4.577 4.577 0 00-1.74 1.87c-.413.8-.62 1.713-.62 2.74 0 1.627.473 2.907 1.42 3.84.947.933 2.247 1.4 3.9 1.4zm1.9-6.42h-4.7c.12-.747.39-1.317.81-1.71.42-.393.963-.59 1.63-.59.667 0 1.19.193 1.57.58.38.387.61.96.69 1.72zm7.18 6.26v-5.46c0-.813.223-1.467.67-1.96.447-.493 1.097-.74 1.95-.74.453 0 .893.087 1.32.26l.02-2.28a2.81 2.81 0 00-1-.16 3.4 3.4 0 00-1.86.52c-.547.347-.947.847-1.2 1.5l-.2-1.78h-2.34c.107.84.16 1.793.16 2.86V22h2.48z"
        />
        <path
          fill="#129D51"
          d="M261 118.5a1.5 1.5 0 01.144 2.993l-.144.007H61a1.5 1.5 0 01-.144-2.993L61 118.5h200zm96.28 7.66c1.067 0 1.997-.167 2.79-.5.793-.333 1.403-.803 1.83-1.41.427-.607.64-1.31.64-2.11 0-.827-.233-1.49-.7-1.99a4.304 4.304 0 00-1.75-1.12c-.7-.247-1.663-.517-2.89-.81-1.133-.267-1.973-.58-2.52-.94-.547-.36-.82-.9-.82-1.62 0-.827.313-1.477.94-1.95.627-.473 1.493-.71 2.6-.71.813 0 1.563.133 2.25.4s1.363.687 2.03 1.26l.64-1.26c-.587-.587-1.307-1.033-2.16-1.34a8.102 8.102 0 00-2.76-.46c-1.04 0-1.95.173-2.73.52-.78.347-1.383.83-1.81 1.45-.427.62-.64 1.337-.64 2.15 0 .853.22 1.543.66 2.07.44.527 1.013.93 1.72 1.21.707.28 1.607.54 2.7.78.813.187 1.463.367 1.95.54.487.173.88.41 1.18.71.3.3.45.69.45 1.17 0 .813-.31 1.443-.93 1.89-.62.447-1.503.67-2.65.67-.973 0-1.827-.127-2.56-.38-.733-.253-1.453-.68-2.16-1.28l-.62 1.26c1.32 1.2 3.093 1.8 5.32 1.8zm9.76-.16v-5.76c0-.973.28-1.747.84-2.32.56-.573 1.307-.86 2.24-.86.8 0 1.387.217 1.76.65.373.433.56 1.117.56 2.05V126h1.62v-6.32c0-2.653-1.207-3.98-3.62-3.98-.787 0-1.487.177-2.1.53a3.334 3.334 0 00-1.38 1.51l-.16-1.8h-1.54c.107.84.16 1.78.16 2.82V126h1.62zm12.3-12.48v-1.84h-1.98v1.84h1.98zm-.2 12.48v-10.06h-1.62V126h1.62zm5.34-12.48v-1.84h-1.98v1.84h1.98zm-3.14 16.88c.92 0 1.643-.27 2.17-.81.527-.54.79-1.337.79-2.39v-11.26h-1.62V127c0 1.333-.56 2-1.68 2a3.47 3.47 0 01-.98-.16v1.38c.44.12.88.18 1.32.18zm11-4.4l4.34-10.04h-1.62l-3.44 8.28-3.4-8.28h-1.7L390.8 126h1.54zm8.14 0v-14.72h-1.62V126h1.62zm7.4.14c.787 0 1.477-.17 2.07-.51a3.188 3.188 0 001.33-1.45V126h1.6v-10.06h-1.6v1.74a3.383 3.383 0 00-1.34-1.46c-.587-.347-1.273-.52-2.06-.52-.88 0-1.657.22-2.33.66-.673.44-1.197 1.057-1.57 1.85-.373.793-.56 1.71-.56 2.75s.183 1.95.55 2.73c.367.78.887 1.383 1.56 1.81.673.427 1.457.64 2.35.64zm.32-1.34c-1 0-1.773-.333-2.32-1-.547-.667-.82-1.613-.82-2.84 0-1.227.277-2.183.83-2.87.553-.687 1.323-1.03 2.31-1.03.987 0 1.747.333 2.28 1 .533.667.8 1.62.8 2.86 0 1.24-.267 2.197-.8 2.87s-1.293 1.01-2.28 1.01zm9.84 1.2v-4.84l5.16 4.84h2.12l-5.52-5.22 5.04-4.82h-2.06l-4.74 4.6v-9.28h-1.62V126h1.62zm24.06-7.14v-1.26h-9.84v1.26h9.84zm0 4.04v-1.26h-9.84v1.26h9.84zm17.6 3.1v-1.38h-3.14v-12.86h-.94l-3.64 2.32v1.58l2.92-1.86v10.82h-3.14V126h7.94zm7.9.16c1.627 0 2.863-.62 3.71-1.86.847-1.24 1.27-3.053 1.27-5.44 0-2.373-.423-4.177-1.27-5.41-.847-1.233-2.083-1.85-3.71-1.85-1.627 0-2.863.617-3.71 1.85s-1.27 3.043-1.27 5.43c0 2.387.423 4.197 1.27 5.43.847 1.233 2.083 1.85 3.71 1.85zm0-1.38c-1.133 0-1.97-.483-2.51-1.45-.54-.967-.81-2.457-.81-4.47s.27-3.493.81-4.44c.54-.947 1.377-1.42 2.51-1.42 1.147 0 1.987.473 2.52 1.42.533.947.8 2.427.8 4.44 0 2.027-.27 3.52-.81 4.48-.54.96-1.377 1.44-2.51 1.44zm12.4 1.38c1.627 0 2.863-.62 3.71-1.86.847-1.24 1.27-3.053 1.27-5.44 0-2.373-.423-4.177-1.27-5.41-.847-1.233-2.083-1.85-3.71-1.85-1.627 0-2.863.617-3.71 1.85s-1.27 3.043-1.27 5.43c0 2.387.423 4.197 1.27 5.43.847 1.233 2.083 1.85 3.71 1.85zm0-1.38c-1.133 0-1.97-.483-2.51-1.45-.54-.967-.81-2.457-.81-4.47s.27-3.493.81-4.44c.54-.947 1.377-1.42 2.51-1.42 1.147 0 1.987.473 2.52 1.42.533.947.8 2.427.8 4.44 0 2.027-.27 3.52-.81 4.48-.54.96-1.377 1.44-2.51 1.44zm12.4 1.38c1.627 0 2.863-.62 3.71-1.86.847-1.24 1.27-3.053 1.27-5.44 0-2.373-.423-4.177-1.27-5.41-.847-1.233-2.083-1.85-3.71-1.85-1.627 0-2.863.617-3.71 1.85s-1.27 3.043-1.27 5.43c0 2.387.423 4.197 1.27 5.43.847 1.233 2.083 1.85 3.71 1.85zm0-1.38c-1.133 0-1.97-.483-2.51-1.45-.54-.967-.81-2.457-.81-4.47s.27-3.493.81-4.44c.54-.947 1.377-1.42 2.51-1.42 1.147 0 1.987.473 2.52 1.42.533.947.8 2.427.8 4.44 0 2.027-.27 3.52-.81 4.48-.54.96-1.377 1.44-2.51 1.44zm15.2 1.22v-5.74c0-.987.243-1.767.73-2.34s1.157-.86 2.01-.86c.733 0 1.267.217 1.6.65.333.433.5 1.117.5 2.05V126h1.62v-5.74c0-.987.24-1.767.72-2.34s1.147-.86 2-.86c.733 0 1.263.213 1.59.64.327.427.49 1.113.49 2.06V126h1.62v-6.32c0-2.653-1.113-3.98-3.34-3.98-.747 0-1.417.177-2.01.53a3.483 3.483 0 00-1.35 1.43c-.24-.667-.613-1.16-1.12-1.48-.507-.32-1.16-.48-1.96-.48-.733 0-1.377.173-1.93.52-.553.347-.97.84-1.25 1.48l-.16-1.76h-1.54c.107.84.16 1.78.16 2.82V126h1.62zm17.98 0v-5.74c0-.987.243-1.767.73-2.34s1.157-.86 2.01-.86c.733 0 1.267.217 1.6.65.333.433.5 1.117.5 2.05V126h1.62v-5.74c0-.987.24-1.767.72-2.34s1.147-.86 2-.86c.733 0 1.263.213 1.59.64.327.427.49 1.113.49 2.06V126h1.62v-6.32c0-2.653-1.113-3.98-3.34-3.98-.747 0-1.417.177-2.01.53a3.483 3.483 0 00-1.35 1.43c-.24-.667-.613-1.16-1.12-1.48-.507-.32-1.16-.48-1.96-.48-.733 0-1.377.173-1.93.52-.553.347-.97.84-1.25 1.48l-.16-1.76h-1.54c.107.84.16 1.78.16 2.82V126h1.62zM332.5 115.5l9 4.5-9 4.5v-4h-62v-1h62z"
        />
      </g>
    </svg>
  )
}

export default SvgComponent