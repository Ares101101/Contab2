
interface LinkIconProps {
    className?: string;
    index?: number;
}

function LinkIcon(props: LinkIconProps) {

    return (
      <svg  
      viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"
        {...props}
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M3 13.0181H13V9.06807H15V14.0181C15 14.5704 14.5523 15.0181 14 15.0181H2C1.44772 15.0181 1 14.5704 1 14.0181V2.01807C1 1.46578 1.44772 1.01807 2 1.01807H7V3.01807H3V13.0181ZM9 1.01807H13H15V3.01807V7.01807H13V4.43228L6.70711 10.7252L5.29289 9.31096L11.5858 3.01807H9V1.01807Z" fill="currentcolor"/>

        </svg>
    )
  }
  export default LinkIcon