import { ReactNode } from 'react'

import { RouterContextProvider } from '@/hooks/useRouter'
import { GlobalProvider } from './Global'

interface Props {
  children: ReactNode
}
function AppProvider({ children }: Props) {
  return (
    <GlobalProvider>
      <RouterContextProvider>{children}</RouterContextProvider>
    </GlobalProvider>
  )
}

export default AppProvider
