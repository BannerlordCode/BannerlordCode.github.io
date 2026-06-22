---
title: Campaign Actions Reference
sidebar: auto
---

<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `actions-index`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Campaign Actions Reference

Every static action class that mutates campaign game state (61 total). Each class's `Apply*` methods correspond to a trigger reason. Mods call these to mutate state safely instead of touching fields directly.

## War & Diplomacy (14)

| 类 Class | 用途 Purpose |
|------|------|
| [`BeHostileAction`](./BeHostileAction) | Be Hostile |
| [`BreakInOutBesiegedSettlementAction`](./BreakInOutBesiegedSettlementAction) | Break In Out Besieged Settlement |
| [`ChangeKingdomAction`](./ChangeKingdomAction) | Change Kingdom |
| [`DeclareWarAction`](./DeclareWarAction) | Declare War |
| [`DestroyKingdomAction`](./DestroyKingdomAction) | Destroy Kingdom |
| [`DisbandArmyAction`](./DisbandArmyAction) | Disband Army |
| [`EndMercenaryServiceAction`](./EndMercenaryServiceAction) | End Mercenary Service |
| [`GainKingdomInfluenceAction`](./GainKingdomInfluenceAction) | Gain Kingdom Influence |
| [`GatherArmyAction`](./GatherArmyAction) | Gather Army |
| [`LiftSiegeAction`](./LiftSiegeAction) | Lift Siege |
| [`MakePeaceAction`](./MakePeaceAction) | Make Peace |
| [`SiegeAftermathAction`](./SiegeAftermathAction) | Siege Aftermath |
| [`StartBattleAction`](./StartBattleAction) | Start Battle |
| [`StartMercenaryServiceAction`](./StartMercenaryServiceAction) | Start Mercenary Service |

## Character & Relations (20)

| 类 Class | 用途 Purpose |
|------|------|
| [`AddCompanionAction`](./AddCompanionAction) | Add Companion |
| [`AddHeroToPartyAction`](./AddHeroToPartyAction) | Add Hero To Party |
| [`AdoptHeroAction`](./AdoptHeroAction) | Adopt Hero |
| [`ApplyHeirSelectionAction`](./ApplyHeirSelectionAction) | Apply Heir Selection |
| [`ChangeClanLeaderAction`](./ChangeClanLeaderAction) | Change Clan Leader |
| [`ChangePlayerCharacterAction`](./ChangePlayerCharacterAction) | Change Player Character |
| [`ChangeRelationAction`](./ChangeRelationAction) | Change Relation |
| [`ChangeRomanticStateAction`](./ChangeRomanticStateAction) | Change Romantic State |
| [`ChangeRulingClanAction`](./ChangeRulingClanAction) | Change Ruling Clan |
| [`DisableHeroAction`](./DisableHeroAction) | Disable Hero |
| [`EndCaptivityAction`](./EndCaptivityAction) | End Captivity |
| [`KillCharacterAction`](./KillCharacterAction) | Kill Character |
| [`MakeHeroFugitiveAction`](./MakeHeroFugitiveAction) | Make Hero Fugitive |
| [`MakePregnantAction`](./MakePregnantAction) | Make Pregnant |
| [`MarriageAction`](./MarriageAction) | Marriage |
| [`RemoveCompanionAction`](./RemoveCompanionAction) | Remove Companion |
| [`SellPrisonersAction`](./SellPrisonersAction) | Sell Prisoners |
| [`TakePrisonerAction`](./TakePrisonerAction) | Take Prisoner |
| [`TeleportHeroAction`](./TeleportHeroAction) | Teleport Hero |
| [`TransferPrisonerAction`](./TransferPrisonerAction) | Transfer Prisoner |

## Economy & Renown (16)

| 类 Class | 用途 Purpose |
|------|------|
| [`BribeGuardsAction`](./BribeGuardsAction) | Bribe Guards |
| [`ChangeClanInfluenceAction`](./ChangeClanInfluenceAction) | Change Clan Influence |
| [`ChangeCrimeRatingAction`](./ChangeCrimeRatingAction) | Change Crime Rating |
| [`ChangeOwnerOfWorkshopAction`](./ChangeOwnerOfWorkshopAction) | Change Owner Of Workshop |
| [`ChangeProductionTypeOfWorkshopAction`](./ChangeProductionTypeOfWorkshopAction) | Change Production Type Of Workshop |
| [`ChangeShipOwnerAction`](./ChangeShipOwnerAction) | Change Ship Owner |
| [`DestroyShipAction`](./DestroyShipAction) | Destroy Ship |
| [`GainRenownAction`](./GainRenownAction) | Gain Renown |
| [`GiveGoldAction`](./GiveGoldAction) | Give Gold |
| [`GiveItemAction`](./GiveItemAction) | Give Item |
| [`InitializeWorkshopAction`](./InitializeWorkshopAction) | Initialize Workshop |
| [`PayForCrimeAction`](./PayForCrimeAction) | Pay For Crime |
| [`RaftStateChangeAction`](./RaftStateChangeAction) | Raft State Change |
| [`RepairShipAction`](./RepairShipAction) | Repair Ship |
| [`SellGoodsForTradeAction`](./SellGoodsForTradeAction) | Sell Goods For Trade |
| [`SellItemsAction`](./SellItemsAction) | Sell Items |

## Settlements (7)

| 类 Class | 用途 Purpose |
|------|------|
| [`ChangeGovernorAction`](./ChangeGovernorAction) | Change Governor |
| [`ChangeOwnerOfSettlementAction`](./ChangeOwnerOfSettlementAction) | Change Owner Of Settlement |
| [`ChangeVillageStateAction`](./ChangeVillageStateAction) | Change Village State |
| [`ClaimSettlementAction`](./ClaimSettlementAction) | Claim Settlement |
| [`EnterSettlementAction`](./EnterSettlementAction) | Enter Settlement |
| [`IncreaseSettlementHealthAction`](./IncreaseSettlementHealthAction) | Increase Settlement Health |
| [`LeaveSettlementAction`](./LeaveSettlementAction) | Leave Settlement |

## Factions & Parties (4)

| 类 Class | 用途 Purpose |
|------|------|
| [`DestroyClanAction`](./DestroyClanAction) | Destroy Clan |
| [`DestroyPartyAction`](./DestroyPartyAction) | Destroy Party |
| [`DisbandPartyAction`](./DisbandPartyAction) | Disband Party |
| [`SetPartyAiAction`](./SetPartyAiAction) | Set Party Ai |

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)