/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IExchangeAdapterInterface extends ethers.utils.Interface {
  functions: {
    "approveExchange(address[])": FunctionFragment;
    "exchange(address,address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approveExchange",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "exchange",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;

  events: {
    "Exchange(address,address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Exchange"): EventFragment;
}

export class IExchangeAdapter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IExchangeAdapterInterface;

  functions: {
    approveExchange(
      tokens: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approveExchange(address[])"(
      tokens: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    exchange(
      from: string,
      to: string,
      amount: BigNumberish,
      maxSlippage: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "exchange(address,address,uint256,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
      maxSlippage: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  approveExchange(
    tokens: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approveExchange(address[])"(
    tokens: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  exchange(
    from: string,
    to: string,
    amount: BigNumberish,
    maxSlippage: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "exchange(address,address,uint256,uint256)"(
    from: string,
    to: string,
    amount: BigNumberish,
    maxSlippage: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    approveExchange(tokens: string[], overrides?: CallOverrides): Promise<void>;

    "approveExchange(address[])"(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    exchange(
      from: string,
      to: string,
      amount: BigNumberish,
      maxSlippage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exchange(address,address,uint256,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
      maxSlippage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    Exchange(
      from: string | null,
      to: string | null,
      platform: string | null,
      fromAmount: null,
      toAmount: null
    ): EventFilter;
  };

  estimateGas: {
    approveExchange(
      tokens: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approveExchange(address[])"(
      tokens: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    exchange(
      from: string,
      to: string,
      amount: BigNumberish,
      maxSlippage: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "exchange(address,address,uint256,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
      maxSlippage: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveExchange(
      tokens: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approveExchange(address[])"(
      tokens: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    exchange(
      from: string,
      to: string,
      amount: BigNumberish,
      maxSlippage: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "exchange(address,address,uint256,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
      maxSlippage: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
