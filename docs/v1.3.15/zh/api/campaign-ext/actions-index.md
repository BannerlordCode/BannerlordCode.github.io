---
title: 战役动作速查 / Campaign Actions Reference
sidebar: auto
---

<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `actions-index`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# 战役动作速查

战役中所有改变游戏状态的静态动作类（共 61 个）。每个类的 `Apply*` 方法对应一种触发原因。modder通过调用这些方法安全地修改游戏状态，而非直接改字段。

## 战争与外交 War & Diplomacy (14)

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

## 角色与关系 Character & Relations (20)

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

## 经济与声望 Economy & Renown (16)

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

## 领地与定居点 Settlements (7)

| 类 Class | 用途 Purpose |
|------|------|
| [`ChangeGovernorAction`](./ChangeGovernorAction) | Change Governor |
| [`ChangeOwnerOfSettlementAction`](./ChangeOwnerOfSettlementAction) | Change Owner Of Settlement |
| [`ChangeVillageStateAction`](./ChangeVillageStateAction) | Change Village State |
| [`ClaimSettlementAction`](./ClaimSettlementAction) | Claim Settlement |
| [`EnterSettlementAction`](./EnterSettlementAction) | Enter Settlement |
| [`IncreaseSettlementHealthAction`](./IncreaseSettlementHealthAction) | Increase Settlement Health |
| [`LeaveSettlementAction`](./LeaveSettlementAction) | Leave Settlement |

## 派系与队伍 Factions & Parties (4)

| 类 Class | 用途 Purpose |
|------|------|
| [`DestroyClanAction`](./DestroyClanAction) | Destroy Clan |
| [`DestroyPartyAction`](./DestroyPartyAction) | Destroy Party |
| [`DisbandPartyAction`](./DisbandPartyAction) | Disband Party |
| [`SetPartyAiAction`](./SetPartyAiAction) | Set Party Ai |

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)