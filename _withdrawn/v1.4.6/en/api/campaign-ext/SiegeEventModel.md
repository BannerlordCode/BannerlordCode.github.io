---
title: "SiegeEventModel"
description: "SiegeEventModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<SiegeEventModel>; 23 exposed members (23 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeEventModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeEventModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SiegeEventModel : MBGameModel<SiegeEventModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeEventModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

SiegeEventModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeEventModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SiegeEventModel>; the inheritance chain is SiegeEventModel → MBGameModel → GameModel. It exposes 23 public/protected members: 23 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeEventModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain SiegeEventModel → MBGameModel → GameModel. The surface is method-led (methods 23/23, properties 0/23), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeEventModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetSiegeEngineDestructionCasualties` | `public abstract int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine);` | method |
| `GetCasualtyChance` | `public abstract float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side);` | method |
| `GetColleteralDamageCasualties` | `public abstract int GetColleteralDamageCasualties(SiegeEngineType attackerSiegeEngine, MobileParty attackerParty);` | method |
| `GetSiegeEngineHitChance` | `public abstract float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town);` | method |
| `GetSiegeEngineMapPrefabName` | `public abstract string GetSiegeEngineMapPrefabName(SiegeEngineType siegeEngineType, int wallLevel, BattleSideEnum side);` | method |
| `GetSiegeEngineMapProjectilePrefabName` | `public abstract string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType siegeEngineType);` | method |
| `GetSiegeEngineMapReloadAnimationName` | `public abstract string GetSiegeEngineMapReloadAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side);` | method |
| `GetSiegeEngineMapFireAnimationName` | `public abstract string GetSiegeEngineMapFireAnimationName(SiegeEngineType siegeEngineType, BattleSideEnum side);` | method |
| `GetSiegeEngineMapProjectileBoneIndex` | `public abstract sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType siegeEngineType, BattleSideEnum side);` | method |
| `GetSiegeStrategyScore` | `public abstract float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy);` | method |
| `GetConstructionProgressPerHour` | `public abstract float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side);` | method |
| `GetEffectiveSiegePartyForSide` | `public abstract MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum side);` | method |
| `GetAvailableManDayPower` | `public abstract float GetAvailableManDayPower(ISiegeEventSide side);` | method |
| `IEnumerable` | `public abstract IEnumerable<SiegeEngineType>GetAvailableAttackerRangedSiegeEngines(PartyBase party);` | method |
| `IEnumerable` | `public abstract IEnumerable<SiegeEngineType>GetAvailableDefenderSiegeEngines(PartyBase party);` | method |
| `IEnumerable` | `public abstract IEnumerable<SiegeEngineType>GetAvailableAttackerRamSiegeEngines(PartyBase party);` | method |
| `IEnumerable` | `public abstract IEnumerable<SiegeEngineType>GetAvailableAttackerTowerSiegeEngines(PartyBase party);` | method |
| `IEnumerable` | `public abstract IEnumerable<SiegeEngineType>GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement);` | method |
| `IEnumerable` | `public abstract IEnumerable<SiegeEngineType>GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp camp);` | method |
| `GetSiegeEngineHitPoints` | `public abstract float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide);` | method |
| `GetRangedSiegeEngineReloadTime` | `public abstract int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine);` | method |
| `GetSiegeEngineDamage` | `public abstract float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target);` | method |
| `GetPriorityTroopsForSallyOutAmbush` | `public abstract FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
