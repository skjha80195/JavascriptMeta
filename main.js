// create a variable to hold your NFTs
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, dateCreated, owner) {
    const nft = {
        name: name,
        artist: artist,
        dateCreated: dateCreated,
        owner: owner
    };
    nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("Name: " + nfts[i].name);
        console.log("Artist: " + nfts[i].artist);
        console.log("Date Created: " + nfts[i].dateCreated);
        console.log("Owner: " + nfts[i].owner);
        console.log("---------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// call your functions below this line

// Mint a few NFTs
mintNFT("Sunset Bliss", "Aishwariya", "2023-01-01", "Ravi");
mintNFT("Ocean Wave", "Charu", "2023-02-14", "Deepak");
mintNFT("Mountain Peak", "Esha", "2023-03-10", "Aditya");

// List all NFTs
listNFTs();

// Get the total supply of NFTs
console.log("Total Supply: " + getTotalSupply());