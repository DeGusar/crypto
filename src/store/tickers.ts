import { makeAutoObservable } from 'mobx';

class Tickers {
  monitoredTickers: string[] = [];

  chosenTickers: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTickers(ticker: string) {
    this.monitoredTickers = [...new Set(this.monitoredTickers.concat(ticker))];
  }

  deleteTickers(deletedTicker: string) {
    this.monitoredTickers = this.monitoredTickers.filter(
      (ticker) => deletedTicker !== ticker
    );
  }

  toggleChosenTicker(ticker: string) {
    const isTickerActiveOrDeleted =
      this.chosenTickers.includes(ticker) ||
      !this.monitoredTickers.includes(ticker);

    this.chosenTickers = isTickerActiveOrDeleted
      ? this.chosenTickers.filter((existTicker) => existTicker !== ticker)
      : this.chosenTickers.concat(ticker);
  }
}

const tickers = new Tickers();
export default tickers;
