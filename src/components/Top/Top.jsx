import { Link } from 'react-router-dom';

export default function Top() {
  return (
    <>
      <h1>Top page</h1>
      <Link to="/quick_start">Quick Start</Link><br/>
      <Link to="/connect_metamask/ethers">Connect MetaMask with ethers</Link><br/>
      <Link to="/connect_metamask/web3">Connect MetaMask with web3</Link><br/>
    </>
  )
}
