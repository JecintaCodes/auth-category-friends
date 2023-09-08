import { RouterProvider } from "react-router-dom"
import { mainRouter } from './Router/mainRoute'
import { Provider } from 'react-redux'
import { store } from './global/Store'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PersistGate } from 'redux-persist/integration/react'
import {
  persistStore,
} from 'redux-persist'

let persistor = persistStore(store)

let client = new QueryClient()

const App = () => {
  return (
    <div>
      < Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={client} >
            <RouterProvider router={mainRouter} />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App