initSidebarItems({"enum":[["ScriptCall","Structured representation of a call into a known Move script."]],"fn":[["encode_add_currency_to_account_script","SummaryAdds a zero `Currency` balance to the sending `account`. This will enable `account` to send, receive, and hold `Diem::Diem<Currency>` coins. This transaction can be successfully sent by any account that is allowed to hold balances (e.g., VASP, Designated Dealer)."],["encode_add_recovery_rotation_capability_script","SummaryStores the sending accounts ability to rotate its authentication key with a designated recovery account. Both the sending and recovery accounts need to belong to the same VASP and both be VASP accounts. After this transaction both the sending account and the specified recovery account can rotate the sender account's authentication key."],["encode_add_validator_and_reconfigure_script","SummaryAdds a validator account to the validator set, and triggers a reconfiguration of the system to admit the account to the validator set for the system. This transaction can only be successfully called by the Diem Root account."],["encode_block_prologue_script",""],["encode_burn_script","SummaryBurns all coins held in the preburn resource at the specified preburn address and removes them from the system. The sending account must be the Treasury Compliance account. The account that holds the preburn resource will normally be a Designated Dealer, but there are no enforced requirements that it be one."],["encode_burn_txn_fees_script","SummaryBurns the transaction fees collected in the `CoinType` currency so that the Diem association may reclaim the backing coins off-chain. May only be sent by the Treasury Compliance account."],["encode_cancel_burn_script","SummaryCancels and returns all coins held in the preburn area under `preburn_address` and returns the funds to the `preburn_address`'s balance. Can only be successfully sent by an account with Treasury Compliance role."],["encode_create_child_vasp_account_script","SummaryCreates a Child VASP account with its parent being the sending account of the transaction. The sender of the transaction must be a Parent VASP account."],["encode_create_designated_dealer_script","SummaryCreates a Designated Dealer account with the provided information, and initializes it with default mint tiers. The transaction can only be sent by the Treasury Compliance account."],["encode_create_parent_vasp_account_script","SummaryCreates a Parent VASP account with the specified human name. Must be called by the Treasury Compliance account."],["encode_create_recovery_address_script","SummaryInitializes the sending account as a recovery address that may be used by the VASP that it belongs to. The sending account must be a VASP account. Multiple recovery addresses can exist for a single VASP, but accounts in each must be disjoint."],["encode_create_validator_account_script","SummaryCreates a Validator account. This transaction can only be sent by the Diem Root account."],["encode_create_validator_operator_account_script","SummaryCreates a Validator Operator account. This transaction can only be sent by the Diem Root account."],["encode_freeze_account_script","SummaryFreezes the account at `address`. The sending account of this transaction must be the Treasury Compliance account. The account being frozen cannot be the Diem Root or Treasury Compliance account. After the successful execution of this transaction no transactions may be sent from the frozen account, and the frozen account may not send or receive coins."],["encode_peer_to_peer_with_metadata_script","SummaryTransfers a given number of coins in a specified currency from one account to another. Transfers over a specified amount defined on-chain that are between two different VASPs, or other accounts that have opted-in will be subject to on-chain checks to ensure the receiver has agreed to receive the coins.  This transaction can be sent by any account that can hold a balance, and to any account that can hold a balance. Both accounts must hold balances in the currency being transacted."],["encode_preburn_script","SummaryMoves a specified number of coins in a given currency from the account's balance to its preburn area after which the coins may be burned. This transaction may be sent by any account that holds a balance and preburn area in the specified currency."],["encode_publish_shared_ed25519_public_key_script","SummaryRotates the authentication key of the sending account to the newly-specified public key and publishes a new shared authentication key under the sender's account. Any account can send this transaction."],["encode_register_validator_config_script","SummaryUpdates a validator's configuration. This does not reconfigure the system and will not update the configuration in the validator set that is seen by other validators in the network. Can only be successfully sent by a Validator Operator account that is already registered with a validator."],["encode_remove_validator_and_reconfigure_script","SummaryThis script removes a validator account from the validator set, and triggers a reconfiguration of the system to remove the validator from the system. This transaction can only be successfully called by the Diem Root account."],["encode_rotate_authentication_key_script","SummaryRotates the transaction sender's authentication key to the supplied new authentication key. May be sent by any account."],["encode_rotate_authentication_key_with_nonce_admin_script","SummaryRotates the specified account's authentication key to the supplied new authentication key. May only be sent by the Diem Root account as a write set transaction."],["encode_rotate_authentication_key_with_nonce_script","SummaryRotates the sender's authentication key to the supplied new authentication key. May be sent by any account that has a sliding nonce resource published under it (usually this is Treasury Compliance or Diem Root accounts)."],["encode_rotate_authentication_key_with_recovery_address_script","SummaryRotates the authentication key of a specified account that is part of a recovery address to a new authentication key. Only used for accounts that are part of a recovery address (see `Script::add_recovery_rotation_capability` for account restrictions)."],["encode_rotate_dual_attestation_info_script","SummaryUpdates the url used for off-chain communication, and the public key used to verify dual attestation on-chain. Transaction can be sent by any account that has dual attestation information published under it. In practice the only such accounts are Designated Dealers and Parent VASPs."],["encode_rotate_shared_ed25519_public_key_script","SummaryRotates the authentication key in a `SharedEd25519PublicKey`. This transaction can be sent by any account that has previously published a shared ed25519 public key using `Script::publish_shared_ed25519_public_key`."],["encode_set_validator_config_and_reconfigure_script","SummaryUpdates a validator's configuration, and triggers a reconfiguration of the system to update the validator set with this new validator configuration.  Can only be successfully sent by a Validator Operator account that is already registered with a validator."],["encode_set_validator_operator_script","SummarySets the validator operator for a validator in the validator's configuration resource \"locally\" and does not reconfigure the system. Changes from this transaction will not picked up by the system until a reconfiguration of the system is triggered. May only be sent by an account with Validator role."],["encode_set_validator_operator_with_nonce_admin_script","SummarySets the validator operator for a validator in the validator's configuration resource \"locally\" and does not reconfigure the system. Changes from this transaction will not picked up by the system until a reconfiguration of the system is triggered. May only be sent by the Diem Root account as a write set transaction."],["encode_stdlib_upgrade_transaction","Update WriteSet"],["encode_tiered_mint_script","SummaryMints a specified number of coins in a currency to a Designated Dealer. The sending account must be the Treasury Compliance account, and coins can only be minted to a Designated Dealer account."],["encode_unfreeze_account_script","SummaryUnfreezes the account at `address`. The sending account of this transaction must be the Treasury Compliance account. After the successful execution of this transaction transactions may be sent from the previously frozen account, and coins may be sent and received."],["encode_update_diem_version_script","SummaryUpdates the Diem major version that is stored on-chain and is used by the VM.  This transaction can only be sent from the Diem Root account."],["encode_update_dual_attestation_limit_script","SummaryUpdate the dual attestation limit on-chain. Defined in terms of micro-XDX.  The transaction can only be sent by the Treasury Compliance account.  After this transaction all inter-VASP payments over this limit must be checked for dual attestation."],["encode_update_exchange_rate_script","SummaryUpdate the rough on-chain exchange rate between a specified currency and XDX (as a conversion to micro-XDX). The transaction can only be sent by the Treasury Compliance account. After this transaction the updated exchange rate will be used for normalization of gas prices, and for dual attestation checking."],["encode_update_minting_ability_script","SummaryScript to allow or disallow minting of new coins in a specified currency.  This transaction can only be sent by the Treasury Compliance account.  Turning minting off for a currency will have no effect on coins already in circulation, and coins may still be removed from the system."],["get_transaction_name","Returns a user friendly mnemonic for the transaction type if the transaction is for a known, white listed, transaction."]]});