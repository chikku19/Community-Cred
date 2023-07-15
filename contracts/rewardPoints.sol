// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract RewardPoints {
    using SafeMath for uint256;

    // Token used for reward points
    IERC20 public rewardToken;

    // Mapping to store user balances
    mapping(address => uint256) public balances;

    // Event triggered when reward points are earned
    event PointsEarned(address indexed user, uint256 amount);

    // Event triggered when reward points are redeemed
    event PointsRedeemed(address indexed user, uint256 amount);

    // Constructor to set the reward token address
    constructor(address _rewardToken) {
        rewardToken = IERC20(_rewardToken);
    }

    // Function to earn reward points
    function earnPoints(uint256 amount) external {
        require(amount > 0, "Invalid amount");

        balances[msg.sender] = balances[msg.sender].add(amount);
        emit PointsEarned(msg.sender, amount);
    }

    // Function to redeem reward points
    function redeemPoints(uint256 amount) external {
        require(amount > 0, "Invalid amount");
        require(balances[msg.sender] >= amount, "Insufficient points");

        balances[msg.sender] = balances[msg.sender].sub(amount);

        // Perform additional redemption logic
        // (e.g., transfer tokens, update NFT ownership, etc.)
        rewardToken.transfer(msg.sender, amount);

        emit PointsRedeemed(msg.sender, amount);
    }

    // Function to get the reward points balance of a user
    function getBalance(address user) external view returns (uint256) {
        return balances[user];
    }
}
