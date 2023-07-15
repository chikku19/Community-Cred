import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { HederaTestnet } from "@thirdweb-dev/chains";
import { ConnectWallet, lightTheme } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={HederaTestnet}>
      <div className="navbar bg-primary">
        <div className="flex-1">
          <a href="/" className="text-white normal-case text-xl">
            Community Cred &nbsp; <i class="fa-solid fa-crown"></i>
          </a>
        </div>
        <div className="flex-1">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/bounties">Bounties</a>
            </li>
            <li>
              <a href="nfts">NFTs</a>
            </li>
            <li>
              <a href="/community">Community</a>
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <ConnectWallet theme="light" />
        </div>
      </div>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
