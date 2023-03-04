import { QueryClient, QueryClientProvider, QueryFunction } from '@tanstack/react-query';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Router} from "./Router";

import axios from "redaxios"

const defaultQueryFn: QueryFunction = async ({ queryKey }) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com${queryKey[0]}`,
    )
    return data
  }

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: defaultQueryFn
        }
    }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <Router>
            <App/>
        </Router>
        </QueryClientProvider>
    </React.StrictMode>,
)
