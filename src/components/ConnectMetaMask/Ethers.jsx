import { useEffect, useState } from 'react';

export default function ConnectMetaMaskWithEthers() {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log('Make sure you mabe MetaMask');
      return;
    } else {
      console.log('We have the etherum object', ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log('Found an authorized account:', account);
      setCurrentAccount(account);
    } else {
      console.log('No authorized account fount');
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask");
        return;
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log('Connected:', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch(error) {
      console.log('error:', error);
    }
  };

  const renderNotConnectedContainer = () => (
    <button onClick={connectWallet}>
      Connect to MetaMask
    </button>
  )

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);


  return (
    <>
      <h1>Connect MetaMask with ethers</h1>
      {currentAccount === "" ? (
        renderNotConnectedContainer()
      ) : (
        <>
          <p>Connected your MetaMask</p>
          <p>address: {currentAccount}</p>
        </>
      )}
    </>
  )
}
