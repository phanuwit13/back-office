import { IconName } from "@/components/Icons"

export const typeIconDrink = (value: string): keyof IconName => {
  if (value.includes('MILK')) return 'Milk'
  if (value.includes('TEA')) return 'Leaf'
  if (value.includes('SHAKE') || value.includes('SMOOTHIE'))
    return 'GlassWater'
  if (value.includes('SODA')) return 'CupSoda'

  return 'Coffee'
}