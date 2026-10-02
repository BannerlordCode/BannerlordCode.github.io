---
title: "TroopSacrificeModel"
description: "TroopSacrificeModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<TroopSacrificeModel>; 7 exposed members (5 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSacrificeModel.cs."
---
# TroopSacrificeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class TroopSacrificeModel : MBGameModel<TroopSacrificeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSacrificeModel.cs`

## Overview

TroopSacrificeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSacrificeModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<TroopSacrificeModel>; the inheritance chain is TroopSacrificeModel → MBGameModel. It exposes 7 public/protected members: 5 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TroopSacrificeModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain TroopSacrificeModel → MBGameModel. The surface is method-led (methods 5/7, properties 2/7), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSacrificeModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BreakOutArmyLeaderRelationPenalty` | `public abstract int BreakOutArmyLeaderRelationPenalty` | property |
| `BreakOutArmyMemberRelationPenalty` | `public abstract int BreakOutArmyMemberRelationPenalty` | property |
| `GetLostTroopCountForBreakingInBesiegedSettlement` | `public abstract ExplainedNumber GetLostTroopCountForBreakingInBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent);` | method |
| `GetLostTroopCountForBreakingOutOfBesiegedSettlement` | `public abstract ExplainedNumber GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty party, SiegeEvent siegeEvent, bool isBreakingOutFromPort);` | method |
| `GetNumberOfTroopsSacrificedForTryingToGetAway` | `public abstract int GetNumberOfTroopsSacrificedForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent);` | method |
| `GetShipsToSacrificeForTryingToGetAway` | `public abstract void GetShipsToSacrificeForTryingToGetAway(BattleSideEnum playerBattleSide, MapEvent mapEvent, out MBList<Ship>shipsToCapture, out Ship shipToTakeDamage, out float damageToApplyForLastShip);` | method |
| `CanPlayerGetAwayFromEncounter` | `public abstract bool CanPlayerGetAwayFromEncounter(out TextObject explanation);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
