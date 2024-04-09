import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { BinanceTestnet } from "@thirdweb-dev/chains";
ReactDOM.createRoot(document.getElementById('root')!).render(
<ThirdwebProvider
      activeChain={BinanceTestnet}
    clientId={"95347962d3e713129610a9c9f4dbce58"}
    >
      <App />
    </ThirdwebProvider>
)
