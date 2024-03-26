import { useState } from 'react';
import { Web3 } from 'web3';

export default function ConnectMetaMaskWeb3() {
  //react state to store and show the connected account
  const [connectedAccount, setConnectedAccount] = useState("");

  async function connectMetamask() {
    //check metamask is installed
    if (window.ethereum) {
      // instantiate Web3 with the injected provider
      const web3 = new Web3(window.ethereum);

      //request user to connect accounts (Metamask will prompt)
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      //get the connected accounts
      const accounts = await web3.eth.getAccounts();

      //show the first connected account in the react page
      setConnectedAccount(accounts[0]);
    } else {
      alert('Please download metamask');
    }
  }

  const renderNotConnectedContainer = () => (
    <button onClick={connectMetamask}>
      Connect to MetaMask
    </button>
  )


  return (
    <>
      <h1>Connect MetaMask with web3</h1>
      {connectedAccount === "" ? (
        renderNotConnectedContainer()
      ) : (
        <>
          <p>Connected your MetaMask with web3</p>
          <p>Address: {connectedAccount}</p>
        </>
      )}
    </>
  )
}
