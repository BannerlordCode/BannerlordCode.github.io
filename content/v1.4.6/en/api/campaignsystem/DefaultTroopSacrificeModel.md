---
title: "DefaultTroopSacrificeModel"
description: "DefaultTroopSacrificeModel: a public class in TaleWorlds.CampaignSystem, inheriting TroopSacrificeModel; 8 exposed members (5 methods, 2 properties, 1 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs."
---
# DefaultTroopSacrificeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultTroopSacrificeModel : TroopSacrificeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs`

## Overview

DefaultTroopSacrificeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs. It is a public class, implementing/inheriting TroopSacrificeModel; the inheritance chain is DefaultTroopSacrificeModel → TroopSacrificeModel → MBGameModel. It exposes 8 public/protected members: 5 methods, 2 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultTroopSacrificeModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultTroopSacrificeModel → TroopSacrificeModel → MBGameModel. The surface is method-led (methods 5/8, properties 2/8), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BreakOutArmyLeaderRelationPenalty` | `public override int BreakOutArmyLeaderRelationPenalty` | property |
| `BreakOutArmyMemberRelationPenalty` | `public override int BreakOutArmyMemberRelationPenalty` | property |
| `GetLostTroopCountForBreakingInBesiegedSettlement` | `public override ExplainedNumber GetLostTroopCountForBreakingInBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent)` | method |
| `GetLostTroopCountForBreakingOutOfBesiegedSettlement` | `public override ExplainedNumber GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent, bool isBreakingOutFromPort)` | method |
| `GetNumberOfTroopsSacrificedForTryingToGetAway` | `public override int GetNumberOfTroopsSacrificedForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent)` | method |
| `CanPlayerGetAwayFromEncounter` | `public override bool CanPlayerGetAwayFromEncounter(out TextObject explanation)` | method |
| `GetShipsToSacrificeForTryingToGetAway` | `public override void GetShipsToSacrificeForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent, out MBList<Ship>shipsToCapture, out Ship shipToTakeDamage, out float damageToApplyForLastShip)` | method |
| `MinimumNumberOfTroopsRequiredForGetAway` | `public const int MinimumNumberOfTroopsRequiredForGetAway` | field |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TroopSacrificeModel](../TroopSacrificeModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
