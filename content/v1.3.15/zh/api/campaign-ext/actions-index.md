---
title: 战役动作速查 / Campaign Actions Reference
extra:
  sidebar: auto
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `战役动作速查`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# 战役动作速查

## 心智模型

先把 `战役动作速查` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

战役中所有改变游戏状态的静态动作类（共 61 个）。每个类?

`Apply*

` 方法对应一种触发原因。modder通过调用这些方法安全地修改游戏状态，而非直接改字段?
## 战争与外?War & Diplomacy (14)

\| ?Class \| 用?Purpose \|
\|------\|------\|
\| [

`BeHostileAction

`](./BeHostileAction) \| Be Hostile \|
\| [

`BreakInOutBesiegedSettlementAction

`](./BreakInOutBesiegedSettlementAction) \| Break In Out Besieged Settlement \|
\| [

`ChangeKingdomAction

`](./ChangeKingdomAction) \| Change Kingdom \|
\| [

`DeclareWarAction

`](./DeclareWarAction) \| Declare War \|
\| [

`DestroyKingdomAction

`](./DestroyKingdomAction) \| Destroy Kingdom \|
\| [

`DisbandArmyAction

`](./DisbandArmyAction) \| Disband Army \|
\| [

`EndMercenaryServiceAction

`](./EndMercenaryServiceAction) \| End Mercenary Service \|
\| [

`GainKingdomInfluenceAction

`](./GainKingdomInfluenceAction) \| Gain Kingdom Influence \|
\| [

`GatherArmyAction

`](./GatherArmyAction) \| Gather Army \|
\| [

`LiftSiegeAction

`](./LiftSiegeAction) \| Lift Siege \|
\| [

`MakePeaceAction

`](./MakePeaceAction) \| Make Peace \|
\| [

`SiegeAftermathAction

`](./SiegeAftermathAction) \| Siege Aftermath \|
\| [

`StartBattleAction

`](./StartBattleAction) \| Start Battle \|
\| [

`StartMercenaryServiceAction

`](./StartMercenaryServiceAction) \| Start Mercenary Service \|

## 角色与关?Character & Relations (20)

\| ?Class \| 用?Purpose \|
\|------\|------\|
\| [

`AddCompanionAction

`](./AddCompanionAction) \| Add Companion \|
\| [

`AddHeroToPartyAction

`](./AddHeroToPartyAction) \| Add Hero To Party \|
\| [

`AdoptHeroAction

`](./AdoptHeroAction) \| Adopt Hero \|
\| [

`ApplyHeirSelectionAction

`](./ApplyHeirSelectionAction) \| Apply Heir Selection \|
\| [

`ChangeClanLeaderAction

`](./ChangeClanLeaderAction) \| Change Clan Leader \|
\| [

`ChangePlayerCharacterAction

`](./ChangePlayerCharacterAction) \| Change Player Character \|
\| [

`ChangeRelationAction

`](./ChangeRelationAction) \| Change Relation \|
\| [

`ChangeRomanticStateAction

`](./ChangeRomanticStateAction) \| Change Romantic State \|
\| [

`ChangeRulingClanAction

`](./ChangeRulingClanAction) \| Change Ruling Clan \|
\| [

`DisableHeroAction

`](./DisableHeroAction) \| Disable Hero \|
\| [

`EndCaptivityAction

`](./EndCaptivityAction) \| End Captivity \|
\| [

`KillCharacterAction

`](./KillCharacterAction) \| Kill Character \|
\| [

`MakeHeroFugitiveAction

`](./MakeHeroFugitiveAction) \| Make Hero Fugitive \|
\| [

`MakePregnantAction

`](./MakePregnantAction) \| Make Pregnant \|
\| [

`MarriageAction

`](./MarriageAction) \| Marriage \|
\| [

`RemoveCompanionAction

`](./RemoveCompanionAction) \| Remove Companion \|
\| [

`SellPrisonersAction

`](./SellPrisonersAction) \| Sell Prisoners \|
\| [

`TakePrisonerAction

`](./TakePrisonerAction) \| Take Prisoner \|
\| [

`TeleportHeroAction

`](./TeleportHeroAction) \| Teleport Hero \|
\| [

`TransferPrisonerAction

`](./TransferPrisonerAction) \| Transfer Prisoner \|

## 经济与声?Economy & Renown (16)

\| ?Class \| 用?Purpose \|
\|------\|------\|
\| [

`BribeGuardsAction

`](./BribeGuardsAction) \| Bribe Guards \|
\| [

`ChangeClanInfluenceAction

`](./ChangeClanInfluenceAction) \| Change Clan Influence \|
\| [

`ChangeCrimeRatingAction

`](./ChangeCrimeRatingAction) \| Change Crime Rating \|
\| [

`ChangeOwnerOfWorkshopAction

`](./ChangeOwnerOfWorkshopAction) \| Change Owner Of Workshop \|
\| [

`ChangeProductionTypeOfWorkshopAction

`](./ChangeProductionTypeOfWorkshopAction) \| Change Production Type Of Workshop \|
\| [

`ChangeShipOwnerAction

`](./ChangeShipOwnerAction) \| Change Ship Owner \|
\| [

`DestroyShipAction

`](./DestroyShipAction) \| Destroy Ship \|
\| [

`GainRenownAction

`](./GainRenownAction) \| Gain Renown \|
\| [

`GiveGoldAction

`](./GiveGoldAction) \| Give Gold \|
\| [

`GiveItemAction

`](./GiveItemAction) \| Give Item \|
\| [

`InitializeWorkshopAction

`](./InitializeWorkshopAction) \| Initialize Workshop \|
\| [

`PayForCrimeAction

`](./PayForCrimeAction) \| Pay For Crime \|
\| [

`RaftStateChangeAction

`](./RaftStateChangeAction) \| Raft State Change \|
\| [

`RepairShipAction

`](./RepairShipAction) \| Repair Ship \|
\| [

`SellGoodsForTradeAction

`](./SellGoodsForTradeAction) \| Sell Goods For Trade \|
\| [

`SellItemsAction

`](./SellItemsAction) \| Sell Items \|

## 领地与定居点 Settlements (7)

\| ?Class \| 用?Purpose \|
\|------\|------\|
\| [

`ChangeGovernorAction

`](./ChangeGovernorAction) \| Change Governor \|
\| [

`ChangeOwnerOfSettlementAction

`](./ChangeOwnerOfSettlementAction) \| Change Owner Of Settlement \|
\| [

`ChangeVillageStateAction

`](./ChangeVillageStateAction) \| Change Village State \|
\| [

`ClaimSettlementAction

`](./ClaimSettlementAction) \| Claim Settlement \|
\| [

`EnterSettlementAction

`](./EnterSettlementAction) \| Enter Settlement \|
\| [

`IncreaseSettlementHealthAction

`](./IncreaseSettlementHealthAction) \| Increase Settlement Health \|
\| [

`LeaveSettlementAction

`](./LeaveSettlementAction) \| Leave Settlement \|

## 派系与队?Factions & Parties (4)

\| ?Class \| 用?Purpose \|
\|------\|------\|
\| [

`DestroyClanAction

`](./DestroyClanAction) \| Destroy Clan \|
\| [

`DestroyPartyAction

`](./DestroyPartyAction) \| Destroy Party \|
\| [

`DisbandPartyAction

`](./DisbandPartyAction) \| Disband Party \|
\| [

`SetPartyAiAction

`](./SetPartyAiAction) \| Set Party Ai \|

## 使用示例

```csharp
var example = new 战役动作速查();
```

## 参见

- [完整类目录](../catalog)
- [战役系统目录](../catalog-campaign)