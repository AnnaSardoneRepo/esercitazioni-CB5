export const ENDPOINTS = {

  BASE: `https://random-data-api.com/api/v2`,

  get ADDRESSES() {
      return `${this.BASE}/addresses`
  },
  get BANKS() {
      return `${this.BASE}/banks`
  },
  get APPLIANCES() {
      return `${this.BASE}/appliances`
  },
  get CREDIT_CARDS() {
      return `${this.BASE}/credit_cards`
  }
}
