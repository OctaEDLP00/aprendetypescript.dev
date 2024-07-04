import type { KonamiProps, KonamiState } from '../types/types'

const konamiState: KonamiState<string, number> = {}

/**
 * @typedef {{ code: Array<string>, keyPressed: string, onFinishTime?: number, onSucces: () => void, onFinish?: () => void }} KonamiProps
 * @description
 * This function is a simple implementation of the Konami code.
 * It checks if the user has entered the correct Konami code.
 * If the user has not entered the correct code, it resets the state of the Konami code.
 * If the user has entered the correct code, it calls the onSucces function.
 * If the user has not entered the correct code for a certain amount of time, it calls the onFinish function.
 * @example
 * ```ts
 * import { Konami } from '@/libs/Konami'
 * const { code, keyPressed, onFinishTime, onSucces, onFinish } = konamiProps
 * Konami({ code, keyPressed, onFinishTime, onSucces, onFinish })
 * ```
 * @param {KonamiProps} konamiProps - The function to call when the Konami code is not successfully entered
 * @returns {void}
 */
export function Konami({ code, keyPressed, onFinishTime, onSucces, onFinish }: KonamiProps): void {
	const codeKey = code.join('-')
	const konamiCodePosition = konamiState[codeKey] || 0

	const actualKey = keyPressed.toLowerCase()
  const actualCode = code[konamiCodePosition]
  if (actualCode == null) return
	const actualCodePosition = actualCode.toLowerCase()

	if (actualKey !== actualCodePosition) {
		if (onFinish) onFinish()
		konamiState[codeKey] = 0
		return
	}

	const nextPosition = konamiCodePosition + 1

	if (nextPosition === code.length) {
		onSucces()
		konamiState[codeKey] = 0

		if (onFinishTime && onFinish) {
			setTimeout(
				() => {
					onFinish()
				},
				onFinishTime ?? 1000
			)
		}
	} else {
		konamiState[codeKey] = nextPosition
	}
}
