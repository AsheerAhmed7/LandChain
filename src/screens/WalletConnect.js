import '@walletconnect/react-native-compat';
import {WagmiProvider} from 'wagmi';
import {goerli} from '@wagmi/core/chains';
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
} from '@web3modal/wagmi-react-native';
import {W3mButton} from '@web3modal/wagmi-react-native';
import {View, Text} from 'react-native';
const projectId = 'cfe7ef717596261f6dc960e0ac684eeb';

// 2. Create config
const metadata = {
  name: 'Web3Modal RN',
  description: 'Web3Modal RN Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'yourapp://', // Your app's custom scheme
    universal: 'https://yourapp.com', // Your app's universal link
  },
};
const customNetwork = {
  id: 2040, // Custom network ID
  name: 'Vanar Mainnet',
  network: 'custom',
  nativeCurrency: {
    name: 'Custom Token',
    symbol: 'VANRY',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.vanarchain.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Custom Explorer',
      url: 'https://explorer.vanarchain.com',
    },
  },
  testnet: false,
};

const chains = [goerli, customNetwork];

const wagmiConfig = defaultWagmiConfig({chains, projectId, metadata});

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
});
const WalletConnect = () => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <View>
        <Text>jasjbksks</Text>
        <W3mButton />
      </View>
      <Web3Modal />
    </WagmiProvider>
  );
};
export default WalletConnect;
