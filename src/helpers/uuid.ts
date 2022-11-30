import { v4 } from 'uuid'

type NominalString<Token extends string> = `NominalString[${ Token }]`

export type Uuid<Name extends string = string> = NominalString<Name>

export const uuid = v4 as <T extends Uuid>() => T
