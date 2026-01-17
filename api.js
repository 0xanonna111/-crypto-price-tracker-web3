export async function getPrices() {
  const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
  const data = await response.json();

  return {
    btc: data.bitcoin.usd,
    eth: data.ethereum.usd
  };
}
