/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DelegationAwareAToken } from "./DelegationAwareAToken";

export class DelegationAwareATokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DelegationAwareAToken> {
    return super.deploy(overrides || {}) as Promise<DelegationAwareAToken>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DelegationAwareAToken {
    return super.attach(address) as DelegationAwareAToken;
  }
  connect(signer: Signer): DelegationAwareATokenFactory {
    return super.connect(signer) as DelegationAwareATokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DelegationAwareAToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DelegationAwareAToken;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "BalanceTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "treasury",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "incentivesController",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "aTokenDecimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "aTokenName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "aTokenSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "ATOKEN_REVISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EIP712_REVISION",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POOL",
    outputs: [
      {
        internalType: "contract ILendingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESERVE_TREASURY_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNDERLYING_ASSET_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiverOfUnderlying",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegateUnderlyingTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getIncentivesController",
    outputs: [
      {
        internalType: "contract IAaveIncentivesController",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getScaledUserBalanceAndSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "handleRepayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILendingPool",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "treasury",
        type: "address",
      },
      {
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        internalType: "contract IAaveIncentivesController",
        name: "incentivesController",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "aTokenDecimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "aTokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "aTokenSymbol",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "mintToTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "scaledBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "scaledTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferOnLiquidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferUnderlyingTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600080553480156200001557600080fd5b50604080518082018252600b8082526a105513d2d15397d253541360aa1b60208084018281528551808701909652928552840152815191929160009162000060916037919062000094565b5081516200007690603890602085019062000094565b506039805460ff191660ff9290921691909117905550620001309050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620000d757805160ff191683800117855562000107565b8280016001018555821562000107579182015b8281111562000107578251825591602001919060010190620000ea565b506200011592915062000119565b5090565b5b808211156200011557600081556001016200011a565b612a2680620001406000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c80637535d2461161010f578063ae167335116100a2578063d505accf11610071578063d505accf146106db578063d7020d0a1461072c578063dd62ed3e14610768578063f866c31914610796576101f0565b8063ae1673351461069d578063b16a19de146106a5578063b1bf962d146106ad578063b9844d8d146106b5576101f0565b806388dd91a1116100de57806388dd91a11461061157806395d89b411461063d578063a457c2d714610645578063a9059cbb14610671576101f0565b80637535d246146105ba57806375d26413146105de57806378160376146105e65780637df5bd3b146105ee576101f0565b806323b872dd116101875780633644e515116101565780633644e51514610534578063395093511461053c5780634efecaa51461056857806370a0823114610594576101f0565b806323b872dd146104b25780632f114618146104e857806330adf81f1461050e578063313ce56714610516576101f0565b8063156e29f6116101c3578063156e29f61461030b57806318160ddd1461033d578063183fb413146103455780631da24f3e1461048c576101f0565b806306fdde03146101f5578063095ea7b3146102725780630afbcdc9146102b25780630bd7ad3b146102f1575b600080fd5b6101fd6107cc565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561023757818101518382015260200161021f565b50505050905090810190601f1680156102645780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61029e6004803603604081101561028857600080fd5b506001600160a01b038135169060200135610863565b604080519115158252519081900360200190f35b6102d8600480360360208110156102c857600080fd5b50356001600160a01b0316610881565b6040805192835260208301919091528051918290030190f35b6102f961089e565b60408051918252519081900360200190f35b61029e6004803603606081101561032157600080fd5b506001600160a01b0381351690602081013590604001356108a3565b6102f9610a71565b61048a600480360361010081101561035c57600080fd5b6001600160a01b038235811692602081013582169260408201358316926060830135169160ff6080820135169181019060c0810160a08201356401000000008111156103a757600080fd5b8201836020820111156103b957600080fd5b803590602001918460018302840111640100000000831117156103db57600080fd5b9193909290916020810190356401000000008111156103f957600080fd5b82018360208201111561040b57600080fd5b8035906020019184600183028401116401000000008311171561042d57600080fd5b91939092909160208101903564010000000081111561044b57600080fd5b82018360208201111561045d57600080fd5b8035906020019184600183028401116401000000008311171561047f57600080fd5b509092509050610b1b565b005b6102f9600480360360208110156104a257600080fd5b50356001600160a01b0316610e98565b61029e600480360360608110156104c857600080fd5b506001600160a01b03813581169160208101359091169060400135610ea3565b61048a600480360360208110156104fe57600080fd5b50356001600160a01b0316610f63565b6102f9611137565b61051e61115b565b6040805160ff9092168252519081900360200190f35b6102f9611164565b61029e6004803603604081101561055257600080fd5b506001600160a01b03813516906020013561116a565b6102f96004803603604081101561057e57600080fd5b506001600160a01b0381351690602001356111b8565b6102f9600480360360208110156105aa57600080fd5b50356001600160a01b031661125e565b6105c26112ed565b604080516001600160a01b039092168252519081900360200190f35b6105c26112fc565b6101fd61130b565b61048a6004803603604081101561060457600080fd5b5080359060200135611328565b61048a6004803603604081101561062757600080fd5b506001600160a01b03813516906020013561144f565b6101fd6114d9565b61029e6004803603604081101561065b57600080fd5b506001600160a01b03813516906020013561153a565b61029e6004803603604081101561068757600080fd5b506001600160a01b0381351690602001356115a2565b6105c26115ff565b6105c261160e565b6102f961161d565b6102f9600480360360208110156106cb57600080fd5b50356001600160a01b0316611627565b61048a600480360360e08110156106f157600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611639565b61048a6004803603608081101561074257600080fd5b506001600160a01b03813581169160208101359091169060408101359060600135611880565b6102f96004803603604081101561077e57600080fd5b506001600160a01b0381358116916020013516611a25565b61048a600480360360608110156107ac57600080fd5b506001600160a01b03813581169160208101359091169060400135611a50565b60378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108585780601f1061082d57610100808354040283529160200191610858565b820191906000526020600020905b81548152906001019060200180831161083b57829003601f168201915b505050505090505b90565b6000610877610870611b21565b8484611b25565b5060015b92915050565b60008061088d83611c11565b610895611c2c565b91509150915091565b600181565b603c546000906001600160a01b03166108ba611b21565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906109685760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561092d578181015183820152602001610915565b50505050905090810190601f16801561095a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600061097485611c11565b905060006109828585611c32565b6040805180820190915260028152611a9b60f11b6020820152909150816109ea5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561092d578181015183820152602001610915565b506109f58682611d39565b6040805186815290516001600160a01b038816916000916000805160206129188339815191529181900360200190a3604080518681526020810186905281516001600160a01b038916927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a25015949350505050565b600080610a7c611c2c565b905080610a8d576000915050610860565b603c54603e546040805163d15e005360e01b81526001600160a01b0392831660048201529051610b1593929092169163d15e005391602480820192602092909190829003018186803b158015610ae257600080fd5b505afa158015610af6573d6000803e3d6000fd5b505050506040513d6020811015610b0c57600080fd5b50518290611e8a565b91505090565b6000610b25611f48565b60015490915060ff1680610b3c5750610b3c611f4d565b80610b48575060005481115b610b835760405162461bcd60e51b815260040180806020018281038252602e8152602001806128ea602e913960400191505060405180910390fd5b60015460ff16158015610ba2576001805460ff19168117905560008290555b60004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f89896040518083838082843780830192505050925050506040518091039020604051806040016040528060018152602001603160f81b81525080519060200120833060405160200180868152602001858152602001848152602001838152602001826001600160a01b031681526020019550505050505060405160208183030381529060405280519060200120603b81905550610c9a89898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611f5392505050565b610cd987878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611f6692505050565b610ce28a611f79565b8d603c60006101000a8154816001600160a01b0302191690836001600160a01b031602179055508c603d60006101000a8154816001600160a01b0302191690836001600160a01b031602179055508b603e60006101000a8154816001600160a01b0302191690836001600160a01b031602179055508a603f60006101000a8154816001600160a01b0302191690836001600160a01b031602179055508d6001600160a01b03168c6001600160a01b03167fb19e051f8af41150ccccb3fc2c2d8d15f4a4cf434f32a559ba75fe73d6eea20b8f8e8e8e8e8e8e8e8e604051808a6001600160a01b03168152602001896001600160a01b031681526020018860ff16815260200180602001806020018060200184810384528a8a82818152602001925080828437600083820152601f01601f191690910185810384528881526020019050888880828437600083820152601f01601f191690910185810383528681526020019050868680828437600083820152604051601f909101601f19169092018290039e50909c50505050505050505050505050a3508015610e89576001805460ff191690555b50505050505050505050505050565b600061087b82611c11565b6000610eb0848484611f8f565b610f2084610ebc611b21565b610f1b856040518060600160405280602881526020016128c2602891396001600160a01b038a16600090815260356020526040812090610efa611b21565b6001600160a01b031681526020810191909152604001600020549190611f9c565b611b25565b826001600160a01b0316846001600160a01b0316600080516020612918833981519152846040518082815260200191505060405180910390a35060019392505050565b603c60009054906101000a90046001600160a01b03166001600160a01b031663fe65acfe6040518163ffffffff1660e01b815260040160206040518083038186803b158015610fb157600080fd5b505afa158015610fc5573d6000803e3d6000fd5b505050506040513d6020811015610fdb57600080fd5b5051604080516315d9b46f60e31b815290516001600160a01b039092169163aecda37891600480820192602092909190829003018186803b15801561101f57600080fd5b505afa158015611033573d6000803e3d6000fd5b505050506040513d602081101561104957600080fd5b50516001600160a01b031661105c611b21565b6001600160a01b03161460405180604001604052806002815260200161333360f01b815250906110cd5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561092d578181015183820152602001610915565b50603e54604080516317066a5760e21b81526001600160a01b03848116600483015291519190921691635c19a95c91602480830192600092919082900301818387803b15801561111c57600080fd5b505af1158015611130573d6000803e3d6000fd5b5050505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b60395460ff1690565b603b5481565b6000610877611177611b21565b84610f1b8560356000611188611b21565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611ff6565b603c546000906001600160a01b03166111cf611b21565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906112405760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561092d578181015183820152602001610915565b50603e54611258906001600160a01b03168484612057565b50919050565b603c54603e546040805163d15e005360e01b81526001600160a01b039283166004820152905160009361087b93169163d15e0053916024808301926020929190829003018186803b1580156112b257600080fd5b505afa1580156112c6573d6000803e3d6000fd5b505050506040513d60208110156112dc57600080fd5b50516112e784611c11565b90611e8a565b603c546001600160a01b031690565b60006113066120a9565b905090565b604051806040016040528060018152602001603160f81b81525081565b603c546001600160a01b031661133c611b21565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906113ad5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561092d578181015183820152602001610915565b50816113b85761144b565b603d546001600160a01b03166113d7816113d28585611c32565b611d39565b6040805184815290516001600160a01b038316916000916000805160206129188339815191529181900360200190a3604080518481526020810184905281516001600160a01b038416927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a2505b5050565b603c546001600160a01b0316611463611b21565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906114d45760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561092d578181015183820152602001610915565b505050565b60388054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108585780601f1061082d57610100808354040283529160200191610858565b6000610877611547611b21565b84610f1b856040518060600160405280602581526020016129cc6025913960356000611571611b21565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190611f9c565b60006115b66115af611b21565b8484611f8f565b826001600160a01b03166115c8611b21565b6001600160a01b0316600080516020612918833981519152846040518082815260200191505060405180910390a350600192915050565b603d546001600160a01b031690565b603e546001600160a01b031690565b6000611306611c2c565b603a6020526000908152604090205481565b6001600160a01b038716611684576040805162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa7aba722a960991b604482015290519081900360640190fd5b834211156116ce576040805162461bcd60e51b815260206004820152601260248201527124a72b20a624a22fa2ac2824a920aa24a7a760711b604482015290519081900360640190fd5b6001600160a01b038088166000818152603a6020908152604080832054603b5482517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958c166060860152608085018b905260a0850181905260c08086018b90528251808703909101815260e08601835280519084012061190160f01b6101008701526101028601969096526101228086019690965281518086039096018652610142850180835286519684019690962093909552610162840180825283905260ff88166101828501526101a284018790526101c284018690525191926001926101e28083019392601f198301929081900390910190855afa1580156117e3573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b031614611846576040805162461bcd60e51b8152602060048201526011602482015270494e56414c49445f5349474e415455524560781b604482015290519081900360640190fd5b611851826001611ff6565b6001600160a01b038a166000908152603a6020526040902055611875898989611b25565b505050505050505050565b603c546001600160a01b0316611894611b21565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906119055760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561092d578181015183820152602001610915565b5060006119128383611c32565b60408051808201909152600281526106a760f31b60208201529091508161197a5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561092d578181015183820152602001610915565b5061198585826120b8565b603e5461199c906001600160a01b03168585612057565b6040805184815290516000916001600160a01b038816916000805160206129188339815191529181900360200190a3836001600160a01b0316856001600160a01b03167f5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa28585604051808381526020018281526020019250505060405180910390a35050505050565b6001600160a01b03918216600090815260356020908152604080832093909416825291909152205490565b603c546001600160a01b0316611a64611b21565b6001600160a01b03161460405180604001604052806002815260200161323960f01b81525090611ad55760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561092d578181015183820152602001610915565b50611ae3838383600061215c565b816001600160a01b0316836001600160a01b0316600080516020612918833981519152836040518082815260200191505060405180910390a3505050565b3390565b6001600160a01b038316611b6a5760405162461bcd60e51b815260040180806020018281038252602481526020018061297e6024913960400191505060405180910390fd5b6001600160a01b038216611baf5760405162461bcd60e51b815260040180806020018281038252602281526020018061287a6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260356020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b031660009081526034602052604090205490565b60365490565b604080518082019091526002815261035360f41b602082015260009082611c9a5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561092d578181015183820152602001610915565b5060408051808201909152600280825261068760f31b60208301528304906b033b2e3c9fd0803ce8000000821904851115611d165760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561092d578181015183820152602001610915565b5082816b033b2e3c9fd0803ce800000086020181611d3057fe5b04949350505050565b6001600160a01b038216611d94576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611da0600083836114d4565b603654611dad8183611ff6565b6036556001600160a01b038316600090815260346020526040902054611dd38184611ff6565b6001600160a01b038516600090815260346020526040812091909155611df76120a9565b6001600160a01b031614611e8457611e0d6120a9565b6001600160a01b03166331873e2e8584846040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b158015611e6b57600080fd5b505af1158015611e7f573d6000803e3d6000fd5b505050505b50505050565b6000821580611e97575081155b15611ea45750600061087b565b816b019d971e4fe8401e740000001981611eba57fe5b0483111560405180604001604052806002815260200161068760f31b81525090611f255760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561092d578181015183820152602001610915565b50506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b600190565b303b1590565b805161144b9060379060208401906127a1565b805161144b9060389060208401906127a1565b6039805460ff191660ff92909216919091179055565b6114d4838383600161215c565b60008184841115611fee5760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561092d578181015183820152602001610915565b505050900390565b600082820183811015612050576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526114d4908490612305565b603f546001600160a01b031690565b6001600160a01b0382166120fd5760405162461bcd60e51b81526004018080602001828103825260218152602001806129386021913960400191505060405180910390fd5b612109826000836114d4565b60365461211681836124bd565b6036556001600160a01b0383166000908152603460209081526040918290205482516060810190935260228084529092611dd39286929061285890830139839190611f9c565b603e54603c546040805163d15e005360e01b81526001600160a01b03938416600482018190529151919390921691600091839163d15e0053916024808301926020929190829003018186803b1580156121b457600080fd5b505afa1580156121c8573d6000803e3d6000fd5b505050506040513d60208110156121de57600080fd5b5051905060006121f1826112e78a611c11565b90506000612202836112e78a611c11565b905061221889896122138a87611c32565b6124ff565b85156122a7576040805163d5ed393360e01b81526001600160a01b0387811660048301528b811660248301528a81166044830152606482018a90526084820185905260a4820184905291519186169163d5ed39339160c48082019260009290919082900301818387803b15801561228e57600080fd5b505af11580156122a2573d6000803e3d6000fd5b505050505b876001600160a01b0316896001600160a01b03167f4beccb90f994c31aced7a23b5611020728a23d8ec5cddd1a3e9d97b96fda86668986604051808381526020018281526020019250505060405180910390a3505050505050505050565b612317826001600160a01b0316612765565b612368576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106123a65780518252601f199092019160209182019101612387565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612408576040519150601f19603f3d011682016040523d82523d6000602084013e61240d565b606091505b509150915081612464576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b805115611e845780806020019051602081101561248057600080fd5b5051611e845760405162461bcd60e51b815260040180806020018281038252602a8152602001806129a2602a913960400191505060405180910390fd5b600061205083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611f9c565b6001600160a01b0383166125445760405162461bcd60e51b81526004018080602001828103825260258152602001806129596025913960400191505060405180910390fd5b6001600160a01b0382166125895760405162461bcd60e51b81526004018080602001828103825260238152602001806128356023913960400191505060405180910390fd5b6125948383836114d4565b600060346000856001600160a01b03166001600160a01b031681526020019081526020016000205490506125e38260405180606001604052806026815260200161289c60269139839190611f9c565b6001600160a01b0380861660009081526034602052604080822093909355908516815220546126128184611ff6565b6001600160a01b0385166000908152603460205260408120919091556126366120a9565b6001600160a01b0316146111305760365461264f6120a9565b6001600160a01b03166331873e2e8783866040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b1580156126ad57600080fd5b505af11580156126c1573d6000803e3d6000fd5b50505050846001600160a01b0316866001600160a01b03161461275d576126e66120a9565b6001600160a01b03166331873e2e8683856040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b15801561274457600080fd5b505af1158015612758573d6000803e3d6000fd5b505050505b505050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061279957508115155b949350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106127e257805160ff191683800117855561280f565b8280016001018555821561280f579182015b8281111561280f5782518255916020019190600101906127f4565b5061281b92915061281f565b5090565b5b8082111561281b576000815560010161282056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212200e2f83c5105885d29e8ffbfe773d29119b1657b74bd1f7d53169a24ec60a790a64736f6c634300060c0033";