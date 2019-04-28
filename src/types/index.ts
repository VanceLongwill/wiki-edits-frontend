/*
 * Redux state
 */

export interface IState {
  readonly netChange: INetChangeState
}
export interface INetChangeState {
  [langCode: string]: {
    // `timestamps` is both the `to` and `from` timestamps concatenated
    [timestamps: string]: INetChange
  }
}

export interface INetChange {
  readonly loading: boolean
  readonly error: string
  readonly to: number
  readonly from: number
  readonly changeInBytes?: number
}

/*
 * Api response
 */
export interface IApiResponse {
  message?: string
  netChange?: number
}
