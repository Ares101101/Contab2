import { IconsProps } from '../types/types'

const CloseIcon: React.FC<IconsProps> = (props) => {
  return (
    <svg
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      {...props}
    >
      <path stroke='currentColor' strokeLinejoin='round' strokeWidth='1' d='M6 18 17.94 6M18 18 6.06 6' />
    </svg>

  )
}

export default CloseIcon
