import { IconsProps } from '../types/types'

const MenorIcon: React.FC<IconsProps> = (props: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24' fill='none'
      stroke='currentColor'
      strokeWidth='1'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M6 9l6 6l6 -6' fill='curretColor' />
    </svg>
  )
}

export default MenorIcon
