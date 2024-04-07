// Here we export some useful types and functions for interacting with the Anchor program.
import { PublicKey } from '@solana/web3.js';
import type { Dapp } from '../target/types/dapp';
import { IDL as DappIDL } from '../target/types/dapp';

// Re-export the generated IDL and type
export { Dapp, DappIDL };

// After updating your program ID (e.g. after running `anchor keys sync`) update the value below.
export const programId = new PublicKey(
  '3zEwszEHJAYcgy8QCXDASqXqaWE5EGGju8XgagTob92z'
);
