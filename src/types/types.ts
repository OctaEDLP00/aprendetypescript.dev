import type { REL_TYPE, TARGET_TYPE } from '@/const/types'

export type Rel = typeof REL_TYPE[keyof typeof REL_TYPE]
export type Target = typeof TARGET_TYPE[keyof typeof TARGET_TYPE]
export interface ImgProps {
  alt: string
  height?: string | number
  src: string
  width?: string | number
}
interface ILinkProps {
  href: string
  target: Target
  rel: Rel
}
export interface INetworkSocial extends ILinkProps {
  IconComponent: any
  disabled?: boolean | undefined
}
export interface KonamiProps {
  code: Array<string>
  keyPressed: string
  onFinishTime?: number
  onSucces: () => void
  onFinish?: () => void
}
export type KonamiState<K extends string | number | symbol, T> = {
  [key in K]: T
}
export interface INotification {
  body?: string | undefined
  icon?: string | undefined
  notificationMsg?: string | undefined
}
