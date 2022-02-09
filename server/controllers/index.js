const {wallets} = require('../models');
const {ethers} = require('ethers');

module.exports = {
    //지갑 생성
    post: async (req,res) => {

        const newWallet = ethers.Wallet.createRandom({
            locale:'ko', //locale 각 나라별 언어 설정가능 'en' 등
         //경로설정으로 각종코인들 지갑 만들 수 있음 BTC, BCH,ETC 등 (BIP44에 대해 학습해야함)
         //ethers에서 옵션을 주지않으면 이더리움 메인넷으로 경로가 설정되어있음
        });
        const password = req.body.password;
        const {address, privateKey, publicKey} = newWallet;
        const mnemonic = newWallet.mnemonic.phrase;
    
     
       try {
           wallets.create({
               mnemonic: mnemonic ,
               password: password,
                address: address,
                privateKey: privateKey,
                publicKey: publicKey,

            });
            res.status(200).json({
                address,
                mnemonic,
                privateKey,
                publicKey,
            })
       } catch(err) {
           console.log(err);
       }

    },
}