---
title: "DefaultTroopSacrificeModel"
description: "DefaultTroopSacrificeModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting TroopSacrificeModel; 8 exposed members (5 methods, 2 properties, 1 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultTroopSacrificeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultTroopSacrificeModel : TroopSacrificeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultTroopSacrificeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs. It is a public class, implementing/inheriting TroopSacrificeModel; the inheritance chain is DefaultTroopSacrificeModel → TroopSacrificeModel → MBGameModel → GameModel. It exposes 8 public/protected members: 5 methods, 2 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultTroopSacrificeModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultTroopSacrificeModel → TroopSacrificeModel → MBGameModel → GameModel. The surface is method-led (methods 5/8, properties 2/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultTroopSacrificeModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TroopSacrificeModel](../TroopSacrificeModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
