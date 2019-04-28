export const FETCH_NET_CHANGE = 'FETCH_NET_CHANGE'
export const FETCH_NET_CHANGE_SUCCESS = 'FETCH_NET_CHANGE_SUCCESS'
export const FETCH_NET_CHANGE_FAIL = 'FETCH_NET_CHANGE_FAIL'
export const PERIODICALLY_FETCH_NET_CHANGE = 'PERIODICALLY_FETCH_NET_CHANGE'

export interface IFetchNetChange {
  type: typeof FETCH_NET_CHANGE
  payload: {
    from: number
    to: number
    langCode: string
  }
}

export interface IFetchNetChangeFail {
  type: typeof FETCH_NET_CHANGE_FAIL
  payload: {
    from: number
    to: number
    langCode: string
    error: string
  }
}

export interface IFetchNetChangeSuccess {
  type: typeof FETCH_NET_CHANGE_SUCCESS
  payload: {
    from: number
    to: number
    langCode: string
    changeInBytes: number
  }
}

export interface IPeriodicallyFetchNetChange {
  type: typeof PERIODICALLY_FETCH_NET_CHANGE
  payload: {
    langCode: string
    intervalMs: number
  }
}

export function fetchNetChange(
  langCode: string,
  from: number,
  to: number
): IFetchNetChange {
  return {
    payload: {
      langCode,
      // tslint:disable-next-line: object-literal-sort-keys
      from,
      to,
    },
    type: FETCH_NET_CHANGE,
  }
}

export function fetchNetChangeFail(
  langCode: string,
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
  langCode: string,
  from: number,
  to: number,
  changeInBytes: number
): IFetchNetChangeSuccess {
  return {
    payload: { langCode, to, from, changeInBytes },
    type: FETCH_NET_CHANGE_SUCCESS,
  }
}

export function periodicallyFetchNetChange(
  langCode: string,
  intervalMs: number
): IPeriodicallyFetchNetChange {
  return {
    payload: { langCode, intervalMs },
    type: PERIODICALLY_FETCH_NET_CHANGE,
  }
}

export type NetChangeActions =
  | IFetchNetChangeFail
  | IFetchNetChangeSuccess
  | IFetchNetChange
  | IPeriodicallyFetchNetChange
