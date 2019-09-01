import { LangCode } from '../types'

export const FETCH_NET_CHANGE = 'FETCH_NET_CHANGE'
export const FETCH_NET_CHANGE_SUCCESS = 'FETCH_NET_CHANGE_SUCCESS'
export const FETCH_NET_CHANGE_FAIL = 'FETCH_NET_CHANGE_FAIL'
export const PERIODICALLY_FETCH_NET_CHANGE = 'PERIODICALLY_FETCH_NET_CHANGE'

export interface IFetchNetChange {
  type: typeof FETCH_NET_CHANGE
  payload: {
    from: number
    to: number
    langCode: LangCode
  }
}

export interface IFetchNetChangeFail {
  type: typeof FETCH_NET_CHANGE_FAIL
  payload: {
    from: number
    to: number
    langCode: LangCode
    error: string
  }
}

export interface IFetchNetChangeSuccess {
  type: typeof FETCH_NET_CHANGE_SUCCESS
  payload: {
    from: number
    to: number
    langCode: LangCode
    changeInBytes: number
  }
}

export function fetchNetChange(
  langCode: LangCode,
  from: number,
  to: number
): IFetchNetChange {
  return {
    payload: {
      langCode,
      from,
      to,
    },
    type: FETCH_NET_CHANGE,
  }
}

export function fetchNetChangeFail(
  langCode: LangCode,
  from: number,
  to: number,
  error: string
): IFetchNetChangeFail {
  return {
    payload: { langCode, from, to, error },
    type: FETCH_NET_CHANGE_FAIL,
  }
}

export function fetchNetChangeSuccess(
  langCode: LangCode,
  from: number,
  to: number,
  changeInBytes: number
): IFetchNetChangeSuccess {
  return {
    payload: { langCode, to, from, changeInBytes },
    type: FETCH_NET_CHANGE_SUCCESS,
  }
}

export type NetChangeActions =
  | IFetchNetChangeFail
  | IFetchNetChangeSuccess
  | IFetchNetChange
