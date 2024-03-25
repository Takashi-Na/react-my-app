import { BrowserRouter, Routes, Route } from 'react-router-dom';

// routing
import Top from './components/Top/Top';
import QuickStart from './components/QuickStart/QuickStart';
import ConnectMetaMaskWithEthers from './components/ConnectMetaMask/Ethers';
import ConnectMetaMaskWithWeb3 from './components/ConnectMetaMask/Web3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/quick_start" element={<QuickStart />} />
        <Route path="/connect_metamask/ethers" element={<ConnectMetaMaskWithEthers />} />
        <Route path="/connect_metamask/web3" element={<ConnectMetaMaskWithWeb3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
