import { IconsProps } from '../types/types'

const MinimizeIcon: React.FC<IconsProps> = (props: { className?: string }) => {
  return (
    <svg {...props} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 19'>
      <path stroke='currentColor' strokeLinejoin='round' strokeWidth='1' d='M5 9 h14' />
    </svg>

  )
}

export default MinimizeIcon
