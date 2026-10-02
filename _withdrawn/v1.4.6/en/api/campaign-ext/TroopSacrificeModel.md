---
title: "TroopSacrificeModel"
description: "TroopSacrificeModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<TroopSacrificeModel>; 7 exposed members (5 methods, 2 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSacrificeModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TroopSacrificeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class TroopSacrificeModel : MBGameModel<TroopSacrificeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSacrificeModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

TroopSacrificeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSacrificeModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<TroopSacrificeModel>; the inheritance chain is TroopSacrificeModel → MBGameModel → GameModel. It exposes 7 public/protected members: 5 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TroopSacrificeModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain TroopSacrificeModel → MBGameModel → GameModel. The surface is method-led (methods 5/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSacrificeModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BreakOutArmyLeaderRelationPenalty` | `public abstract int BreakOutArmyLeaderRelationPenalty` | property |
| `BreakOutArmyMemberRelationPenalty` | `public abstract int BreakOutArmyMemberRelationPenalty` | property |
| `GetLostTroopCountForBreakingInBesiegedSettlement` | `public abstract ExplainedNumber GetLostTroopCountForBreakingInBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent);` | method |
| `GetLostTroopCountForBreakingOutOfBesiegedSettlement` | `public abstract ExplainedNumber GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent, bool isBreakingOutFromPort);` | method |
| `GetNumberOfTroopsSacrificedForTryingToGetAway` | `public abstract int GetNumberOfTroopsSacrificedForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent);` | method |
| `GetShipsToSacrificeForTryingToGetAway` | `public abstract void GetShipsToSacrificeForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent, out MBList<Ship>shipsToCapture, out Ship shipToTakeDamage, out float damageToApplyForLastShip);` | method |
| `CanPlayerGetAwayFromEncounter` | `public abstract bool CanPlayerGetAwayFromEncounter(out TextObject explanation);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
