interface ErrorInterface {
  error: string
  code?: number
}

export type ActionType<T> = { type: string; payload: T }
type ActionGenaratorType<T> = (payload: T) => ActionType<T>
type ErrorActionGenaratorType = (e: ErrorInterface) => ActionType<ErrorInterface>

export interface AsyncAction<T1, T2> {
  start: ActionGenaratorType<T1>
  setLoading: () => { type: string }
  setSuccess: ActionGenaratorType<T2>
  setError: ErrorActionGenaratorType
  type: string
  loadingType: string
  successType: string
  errorType: string
}

export default function createAsyncAction<T1, T2>(type: string): AsyncAction<T1, T2> {
  const loadingType = `${type}__LOADING`
  const successType = `${type}__SUCCESS`
  const errorType = `${type}__ERROR`

  const start: ActionGenaratorType<T1> = payload => ({ type, payload })
  const setLoading = (): { type: string } => ({ type: loadingType })
  const setSuccess: ActionGenaratorType<T2> = payload => ({
    type: successType,
    payload,
  })
  const setError: ErrorActionGenaratorType = e => ({
    type: errorType,
    payload: {
      error: e.error,
      code: e.code,
    },
  })

  return {
    start,
    setLoading,
    setSuccess,
    setError,
    type,
    loadingType,
    successType,
    errorType,
  }
}
