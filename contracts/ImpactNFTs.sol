// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract ImpactNFTs is ERC721 {
    using SafeMath for uint256;

    // Token ID counter
    uint256 private tokenIdCounter;

    // Mapping to store the owner of each NFT
    mapping(uint256 => address) private tokenOwners;

    // Mapping to store the description of each NFT
    mapping(uint256 => string) private tokenDescriptions;

    // Event triggered when a new NFT is minted
    event NFTMinted(address indexed owner, uint256 tokenId, string description);

    // Event triggered when an NFT is transferred
    event NFTTransferred(
        uint256 tokenId,
        address indexed from,
        address indexed to
    );

    // Constructor to initialize the contract and token name/symbol
    constructor() ERC721("ImpactNFTs", "IMPACT") {}

    // Function to mint a new NFT
    function mintNFT(
        address to,
        string memory description
    ) external returns (uint256) {
        require(to != address(0), "Invalid address");

        uint256 tokenId = tokenIdCounter;
        tokenIdCounter = tokenIdCounter.add(1);

        _safeMint(to, tokenId);
        tokenOwners[tokenId] = to;
        tokenDescriptions[tokenId] = description;

        emit NFTMinted(to, tokenId, description);

        return tokenId;
    }

    // Function to transfer an NFT to another address
    function transferNFT(uint256 tokenId, address to) external {
        require(tokenOwners[tokenId] == msg.sender, "Not the owner");
        require(to != address(0), "Invalid address");

        _transfer(msg.sender, to, tokenId);
        tokenOwners[tokenId] = to;

        emit NFTTransferred(tokenId, msg.sender, to);
    }

    // Function to get the owner of an NFT
    function getOwner(uint256 tokenId) external view returns (address) {
        return tokenOwners[tokenId];
    }

    // Function to get the description of an NFT
    function getDescription(
        uint256 tokenId
    ) external view returns (string memory) {
        return tokenDescriptions[tokenId];
    }
}
