import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';
import { Header } from './components/Header/Header';
import { WalletJettonList } from './components/WalletJettonList/WalletJettonList';
import { Box, styled } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { NavTabs } from './components/NavTabs/NavTabs';
import { JettonDetails } from './components/JettonDetails/JettonDetails';
const Container = styled(Box)`
  min-height: 100%;
  height: 100%
  display: flex;
  flex-direction: column;

  > header {
    margin-bottom: 10px;
  }
  padding: 20px; /* This sets the padding inside the container */
`;

function App() {
  return (
    <Box
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <TonConnectUIProvider
        manifestUrl="https://lucasrz.github.io/ton-tools/manifest.json"
        uiPreferences={{ theme: THEME.DARK }}
        walletsListConfiguration={{
          includeWallets: [
            {
              appName: 'tonwallet',
              name: 'TON Wallet',
              imageUrl: 'https://wallet.ton.org/assets/ui/qr-logo.png',
              aboutUrl:
                'https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd',
              universalLink: 'https://wallet.ton.org/ton-connect',
              jsBridgeKey: 'tonwallet',
              bridgeUrl: 'https://bridge.tonapi.io/bridge',
              platforms: ['chrome', 'android'],
            },
            {
              appName: 'nicegramWallet',
              name: 'Nicegram Wallet',
              imageUrl: 'https://static.nicegram.app/icon.png',
              aboutUrl: 'https://nicegram.app',
              universalLink: 'https://nicegram.app/tc',
              deepLink: 'nicegram-tc://',
              jsBridgeKey: 'nicegramWallet',
              bridgeUrl: 'https://bridge.tonapi.io/bridge',
              platforms: ['ios', 'android'],
            },
            {
              appName: 'binanceTonWeb3Wallet',
              name: 'Binance Web3 Wallet',
              imageUrl:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMEIwRTExIi8+CjxwYXRoIGQ9Ik01IDE1TDcuMjU4MDYgMTIuNzQxOUw5LjUxNjEzIDE1TDcuMjU4MDYgMTcuMjU4MUw1IDE1WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNOC44NzA5NyAxMS4xMjlMMTUgNUwyMS4xMjkgMTEuMTI5TDE4Ljg3MSAxMy4zODcxTDE1IDkuNTE2MTNMMTEuMTI5IDEzLjM4NzFMOC44NzA5NyAxMS4xMjlaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0xMi43NDE5IDE1TDE1IDEyLjc0MTlMMTcuMjU4MSAxNUwxNSAxNy4yNTgxTDEyLjc0MTkgMTVaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0xMS4xMjkgMTYuNjEyOUw4Ljg3MDk3IDE4Ljg3MUwxNSAyNUwyMS4xMjkgMTguODcxTDE4Ljg3MSAxNi42MTI5TDE1IDIwLjQ4MzlMMTEuMTI5IDE2LjYxMjlaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0yMC40ODM5IDE1TDIyLjc0MTkgMTIuNzQxOUwyNSAxNUwyMi43NDE5IDE3LjI1ODFMMjAuNDgzOSAxNVoiIGZpbGw9IiNGMEI5MEIiLz4KPC9zdmc+Cg==',
              aboutUrl: 'https://www.binance.com/en/web3wallet',
              deepLink: 'bnc://app.binance.com/cedefi/ton-connect',
              bridgeUrl: 'https://bridge.tonapi.io/bridge',
              platforms: ['chrome', 'safari', 'ios', 'android'],
              universalLink: 'https://app.binance.com/cedefi/ton-connect',
            },
            {
              appName: 'okxTonWallet',
              name: 'OKX Wallet',
              imageUrl:
                'https://static.okx.com/cdn/assets/imgs/247/58E63FEA47A2B7D7.png',
              aboutUrl: 'https://www.okx.com/web3',
              universalLink: 'https://www.ouxyi.link/ul/uYJPB0',
              bridgeUrl: 'https://www.okx.com/tonbridge/discover/rpc/bridge',
              jsBridgeKey: 'okxTonWallet',
              platforms: ['chrome', 'safari', 'firefox', 'ios', 'android'],
            },
            {
              appName: 'okxTonWalletTr',
              name: 'OKX TR Wallet',
              imageUrl:
                'https://static.okx.com/cdn/assets/imgs/247/587A8296F0BB640F.png',
              aboutUrl: 'https://tr.okx.com/web3',
              universalLink: 'https://www.ouxyi.link/ul/uYJPB0?entityId=5',
              bridgeUrl: 'https://www.okx.com/tonbridge/discover/rpc/bridge',
              jsBridgeKey: 'okxTonWallet',
              platforms: ['chrome', 'safari', 'firefox', 'ios', 'android'],
            },
          ],
        }}
        actionsConfiguration={{
          twaReturnUrl: 'https://t.me/DemoDappWithTonConnectBot/demo',
        }}
      >
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<WalletJettonList />} />
            <Route
              path="/jetton-details/:jettonAddress"
              element={<JettonDetails />}
            />
          </Routes>
        </Container>
      </TonConnectUIProvider>
    </Box>
  );
}

export default App;
