/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BaseImmutableAdminUpgradeabilityProxy } from "./BaseImmutableAdminUpgradeabilityProxy";

export class BaseImmutableAdminUpgradeabilityProxyFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    admin: string,
    overrides?: Overrides
  ): Promise<BaseImmutableAdminUpgradeabilityProxy> {
    return super.deploy(
      admin,
      overrides || {}
    ) as Promise<BaseImmutableAdminUpgradeabilityProxy>;
  }
  getDeployTransaction(
    admin: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(admin, overrides || {});
  }
  attach(address: string): BaseImmutableAdminUpgradeabilityProxy {
    return super.attach(address) as BaseImmutableAdminUpgradeabilityProxy;
  }
  connect(signer: Signer): BaseImmutableAdminUpgradeabilityProxyFactory {
    return super.connect(
      signer
    ) as BaseImmutableAdminUpgradeabilityProxyFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseImmutableAdminUpgradeabilityProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BaseImmutableAdminUpgradeabilityProxy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516105ca3803806105ca8339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b031661054a6100806000398061016752806101b1528061027052806102bd52806102e65280610315525061054a6000f3fe60806040526004361061003f5760003560e01c80633659cfe6146100495780634f1ef2861461007c5780635c60da1b146100fc578063f851a4401461012d575b610047610142565b005b34801561005557600080fd5b506100476004803603602081101561006c57600080fd5b50356001600160a01b031661015c565b6100476004803603604081101561009257600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100bd57600080fd5b8201836020820111156100cf57600080fd5b803590602001918460018302840111640100000000831117156100f157600080fd5b5090925090506101a6565b34801561010857600080fd5b50610111610263565b604080516001600160a01b039092168252519081900360200190f35b34801561013957600080fd5b506101116102b0565b61014a61030a565b61015a61015561037a565b61039f565b565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561019b57610196816103c3565b6101a3565b6101a3610142565b50565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610256576101e0836103c3565b6000836001600160a01b031683836040518083838082843760405192019450600093509091505080830381855af49150503d806000811461023d576040519150601f19603f3d011682016040523d82523d6000602084013e610242565b606091505b505090508061025057600080fd5b5061025e565b61025e610142565b505050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156102a55761029e61037a565b90506102ad565b6102ad610142565b90565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156102a557507f00000000000000000000000000000000000000000000000000000000000000006102ad565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156103725760405162461bcd60e51b81526004018080602001828103825260328152602001806104a86032913960400191505060405180910390fd5b61015a61015a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e8080156103be573d6000f35b3d6000fd5b6103cc81610403565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b61040c8161046b565b6104475760405162461bcd60e51b815260040180806020018281038252603b8152602001806104da603b913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061049f57508115155b94935050505056fe43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e2066726f6d207468652070726f78792061646d696e43616e6e6f742073657420612070726f787920696d706c656d656e746174696f6e20746f2061206e6f6e2d636f6e74726163742061646472657373a26469706673582212208164596792f942fc3b6b368ddb911a2c3be724177b37d682e5cf4be38b403b4e64736f6c634300060c0033";
