import { type SchemaTypeDefinition } from 'sanity'

import sponsors from './schemaTypes/sponsors'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [sponsors],
}
