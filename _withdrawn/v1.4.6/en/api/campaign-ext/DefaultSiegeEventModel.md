---
title: "DefaultSiegeEventModel"
description: "DefaultSiegeEventModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting SiegeEventModel; 23 exposed members (23 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeEventModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSiegeEventModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSiegeEventModel : SiegeEventModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeEventModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultSiegeEventModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeEventModel.cs. It is a public class, implementing/inheriting SiegeEventModel; the inheritance chain is DefaultSiegeEventModel → SiegeEventModel → MBGameModel → GameModel. It exposes 23 public/protected members: 23 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSiegeEventModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultSiegeEventModel → SiegeEventModel → MBGameModel → GameModel. The surface is method-led (methods 23/23, properties 0/23), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeEventModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetSiegeEngineMapPrefabName` | `public override string GetSiegeEngineMapPrefabName(SiegeEngineType type, int wallLevel, BattleSideEnum side)` | method |
| `GetSiegeEngineMapProjectilePrefabName` | `public override string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType type)` | method |
| `GetSiegeEngineMapReloadAnimationName` | `public override string GetSiegeEngineMapReloadAnimationName(SiegeEngineType type, BattleSideEnum side)` | method |
| `GetSiegeEngineMapFireAnimationName` | `public override string GetSiegeEngineMapFireAnimationName(SiegeEngineType type, BattleSideEnum side)` | method |
| `GetSiegeEngineMapProjectileBoneIndex` | `public override sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType type, BattleSideEnum side)` | method |
| `GetEffectiveSiegePartyForSide` | `public override MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum battleSide)` | method |
| `GetCasualtyChance` | `public override float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side)` | method |
| `GetSiegeEngineDestructionCasualties` | `public override int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine)` | method |
| `GetColleteralDamageCasualties` | `public override int GetColleteralDamageCasualties(SiegeEngineType siegeEngineType, MobileParty party)` | method |
| `GetSiegeEngineHitChance` | `public override float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town)` | method |
| `GetSiegeStrategyScore` | `public override float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy)` | method |
| `GetConstructionProgressPerHour` | `public override float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side)` | method |
| `GetAvailableManDayPower` | `public override float GetAvailableManDayPower(ISiegeEventSide side)` | method |
| `IEnumerable` | `public override IEnumerable<SiegeEngineType>GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)` | method |
| `IEnumerable` | `public override IEnumerable<SiegeEngineType>GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp besiegerCamp)` | method |
| `GetSiegeEngineHitPoints` | `public override float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide)` | method |
| `GetSiegeEngineDamage` | `public override float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target)` | method |
| `GetRangedSiegeEngineReloadTime` | `public override int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)` | method |
| `IEnumerable` | `public override IEnumerable<SiegeEngineType>GetAvailableAttackerRangedSiegeEngines(PartyBase party)` | method |
| `IEnumerable` | `public override IEnumerable<SiegeEngineType>GetAvailableDefenderSiegeEngines(PartyBase party)` | method |
| `IEnumerable` | `public override IEnumerable<SiegeEngineType>GetAvailableAttackerRamSiegeEngines(PartyBase party)` | method |
| `IEnumerable` | `public override IEnumerable<SiegeEngineType>GetAvailableAttackerTowerSiegeEngines(PartyBase party)` | method |
| `GetPriorityTroopsForSallyOutAmbush` | `public override FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SiegeEventModel](../SiegeEventModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
