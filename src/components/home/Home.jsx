import React, { useEffect } from "react";
import Logo from "../../assets/winni.png";
import Gif from "../../assets/1__1_.png";
import Wallet from "../../assets/3___1.png";
import TonLogo from "../../assets/ton_logo.svg";
import Binance from "../../assets/binance.svg";
import Cosmos from "../../assets/cosmos.svg";
import Solana from "../../assets/solana.svg";
import Ethereum from "../../assets/etherium.svg";
import Gnosis from "../../assets/gnosis.svg";
import Polygon from "../../assets/polygon.svg";
import Bonus1 from "../../assets/2__1.png";

import "./home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="title">Welcome to Winni Coin</h1>
          <h2 className="title2">Play and Earn</h2>

          <button className="btn-join">Launch Winnie in Telegram</button>

          <img src={Gif} className="gif" alt="" />

          

          <div className=" bonus">
            <h3 className="title">Get daily free Bonuse</h3>
          </div>

          <div className="d-flex">
            <img src={Bonus1} className="gifs" width="320px" alt="" />
          </div>

          <div className="wallets">
            <h3 className="title">Wallet</h3>
            <div className="wallets-list">
              <span className="wallet-text">
                Connect your wallet and withdraw your Winni Coin to your wallet
              </span>
            </div>
            <div className="wallets-list">
              <span className="wallet-text">
                Transfer your Winni Coin to another wallet
              </span>
            </div>
            <div className="wallets-list">
              <span className="wallet-text">
                Swap your Winni Coin for other tokens
              </span>
            </div>

            <img src={Wallet} className="gifs" width="320px" alt="" />
          </div>
          <h2 className="titles">We support over 7 major blockchains</h2>
          <div className="connect-list">
            <img src={TonLogo} className="gificons" alt="" />
            <img src={Binance} className="gificons" alt="" />
            <img src={Cosmos} className="gificons" alt="" />
            <img src={Solana} className="gificons" alt="" />
            <img src={Ethereum} className="gificons" alt="" />
            <img src={Gnosis} className="gificons" alt="" />
            <img src={Polygon} className="gificons" alt="" />
          </div>
          {/* <div className="roadmap">
            <h3 className="title">Roadmap</h3>
            <div className="roadmap-list">
              <div className="list-items">
                <div className="list-image">
                  <h4 className="list-title">September 2024</h4>
                </div>
                <hr  className="hr"/>
                <div className="list-date">
                  <ul className="ul-list">
                    <li  className="list">Referral system started </li>
                    <li  className="list">Daily Question</li>
                    <li  className="list">Daily Question</li>
                    <li  className="list">Daily Roluete</li>
                  </ul>
                </div>
              </div>
              <div className="list-items2">
                <div className="list-image">
                  <h4 className="list-title2">Upcoming</h4>
                </div>
                <hr className="hr2" />
                <div className="list-date">
                  <ul className="ul-list">
                    <li className="list">Airdrop 30% withdrawal </li>
                  <li  className="list">Exchange Other Tokens</li>
                  </ul>
                </div>
              </div>
              <div className="list-items2">
                <div className="list-image">
                  <h4 className="list-title2">Upcoming</h4>
                </div>
                <hr className="hr2"/>
                <div className="list-date">
                  <ul className="ul-list">
                  <li className="list">Transfer Winni Coin</li>
                  <li  className="list">  Listing and Airdrops</li>
                  </ul>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
        <div className="footers">
          <p className='footer-text'>Copyright © 2024. All Rights Reserved.</p>
  </div>
      </div>
      
    </>
  );
};

export default Home;

