import axios from 'axios'
import { IApiResponse } from '../types'

// NB: in production API_KEY should be kept out of the codebase using a .env file or env variable
const BASE_URL = 'http://localhost:8080'

export function getNetChange(langCode: string, from: number, to: number) {
  const params = {
    langCode,
    from,
    to,
  }
  return axios.get<IApiResponse>(`${BASE_URL}/edits`, { params })
}
