/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
let arrNFTs=[];
// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,address,owner,description) {
    let nft_metadata = {
        Name : name,
        Address : address,
        Owner : owner,
        Description : description,
        Mint_date : new Date().toLocaleDateString()
    };
    arrNFTs.push(nft_metadata);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    let i=0;
    while(i<arrNFTs.length){
        console.log(`Name : ${arrNFTs[i].Name}`);
        console.log(`Address : ${arrNFTs[i].Address}`);
        console.log(`Owner : ${arrNFTs[i].Owner}`);
        console.log(`Description : ${arrNFTs[i].Description}`);
        console.log(`Mint Date : ${arrNFTs[i].Mint_date}`);
        i++;
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`Total NFT Minted: ${arrNFTs.length}`);

}

// call your functions below this line
mintNFT("WildMonkey","xjhsdishfj994237468","ABC corporation","A nft reward for completion of a task");
mintNFT("zoro","xjhsdish3485738947u83488","XYZ ltd. ","A nft reward for thank you gesture");
mintNFT("Naruto","xjhsdish3485e7374748","Hidden Leaf Village ","NFT for Hokage");

listNFTs();
getTotalSupply();



