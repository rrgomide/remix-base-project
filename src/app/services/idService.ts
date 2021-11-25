import { v4 as uuid } from 'uuid'

export function serviceNewId() {
  return uuid()
}
