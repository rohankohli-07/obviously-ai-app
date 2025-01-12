import { clsx } from 'clsx'

type WeightType = 'normal' | 'medium' | 'semibold' | 'bold'

const weightMap = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

export function Text({
  className,
  weight = 'normal',
  ...props
}: { weight?: WeightType } & React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      {...props}
      data-slot="text"
      className={clsx(className, weightMap[weight])}
    />
  )
}
