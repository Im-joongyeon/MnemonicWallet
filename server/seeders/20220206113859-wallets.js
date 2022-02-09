'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('wallets', [{
      id: 0,
      mnemonic: "창조 절망 언니 품목 본사 모델 물체 희곡 항구 의논 시각 별명",
      password: 'qwer1234',
      address: '0xf63CC8b29cCaf5783Ca6aD01027F5409edDB14D7',
      privateKey: "0x0abf4cdf4e117f887dc731b3ba51ee36d0155cf68ac1b11e00a35a7d9a5f77b8",
      publicKey: "0x04d50a3ad7aae221c1caba80bc9d5b7c626bb589dff25e8b48d14a460a33eba655f94687a12ffd30af4adea35681d1d6a02f720a350328f60982f80052cb375264",
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkInsert('wallets',null,{});
  }
};
