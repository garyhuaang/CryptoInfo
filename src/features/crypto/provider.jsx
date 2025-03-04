import { createContext, useMemo, useReducer } from 'react'
import { cryptoFormReducer } from './reducers'
import { CRYPTO_DEFAULT } from './defaultStates'

export const CryptoContext = createContext()

export const CryptoProvider = ({ children }) => {
  const [cryptoFormData, dispatch] = useReducer(
    cryptoFormReducer,
    CRYPTO_DEFAULT,
  )

  const cryptoProviderValue = useMemo(() => {
    return { state: cryptoFormData, dispatch }
  }, [cryptoFormData])

  return (
    <CryptoContext.Provider value={cryptoProviderValue}>
      {children}
    </CryptoContext.Provider>
  )
}
