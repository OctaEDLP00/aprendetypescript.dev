// import type { WithContext } from 'schema-dts'

export function generateSchemaMarkup() {
	return {
		'@context': 'https://schema.org',
  }
}

export function getSchemaScripts(): string {
	const schemaMarkups: unknown[] = []
	const schema = schemaMarkups.map(schemaMarkup => JSON.stringify(schemaMarkup)).join(',')
	return schema
}
