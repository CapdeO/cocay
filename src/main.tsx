//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  ThirdwebProvider,
  coinbaseWallet,
  walletConnect,
  embeddedWallet,
  metamaskWallet,
  smartWallet,
  trustWallet,
  rainbowWallet,
  zerionWallet,
  phantomWallet
} from '@thirdweb-dev/react'
import { Binance } from "@thirdweb-dev/chains";
import cocayLogo from './assets/cocayTulumLogo.png'

const smartWalletConfig = {
  factoryAddress: '0xd80E5cA14226aC1a6c2EfcD6483AF972e2E35511',
  gasless: false // true si queres que la app cubra los gastos de gas. Debe estar fondeado en dashboard de thirdweb
};
const cocayWallet = smartWallet(
  embeddedWallet({ recommended: true }),
  smartWalletConfig
);
cocayWallet.meta.name = "Cocay Wallet";
cocayWallet.meta.iconURL = cocayLogo;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThirdwebProvider
    activeChain={Binance}
    clientId="95347962d3e713129610a9c9f4dbce58"
    supportedWallets={[
      coinbaseWallet(),
      walletConnect(),
      metamaskWallet(),
      cocayWallet,
      trustWallet(),
      rainbowWallet(),
      zerionWallet(),
      phantomWallet()
    ]}
  >
    <App />
  </ThirdwebProvider>
)
