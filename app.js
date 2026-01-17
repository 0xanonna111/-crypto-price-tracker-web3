import { connectWallet } from "./web3.js";
import { getPrices } from "./api.js";

document.getElementById("connectBtn").onclick = async () => {
  await connectWallet();
};

document.getElementById("refreshBtn").onclick = async () => {
  const prices = await getPrices();
  document.getElementById("btc").innerText = "Bitcoin: $" + prices.btc;
  document.getElementById("eth").innerText = "Ethereum: $" + prices.eth;
};
